const models = require("../models/");
const bcrypt = require("bcrypt");
const { Model } = require('sequelize')
const axios = require("axios");
const jwt = require('jsonwebtoken')
const { config } = require('dotenv')
const res = require('express/lib/response')

//(1) 메인 화면
exports.getIndex = async (req, res) => {
  console.log("req.session.name>>", req.session.name);
  res.send([req.session.name]);
};

//(2) 로그인 화면
exports.getLogin = (req, res) => {
  if (req.session.name) {
    return res.redirect("/my_profile");
  }
  res.send("login", {
    pageTitle: "로그인 페이지 이름",
    session: req.session.name ? true : false,
  });
};

//(3) 로그인 아이디 확인
exports.postCheckLogin = async (req, res) => {
  console.log("req.body :", req.body);
  const response = await models.User.findOne({
    where: {
      userid: req.body.userId,
    },
  });
  console.log("response>>>", response);

  if (!response) {
    return res.send({
      hasInfo: false,
    });
  } else {
    console.log("^^^^^^^^^^^^^^^", typeof req.body.password);
    console.log(req.body.password);
    console.log(response.pw);
    const match = await bcrypt.compare(req.body.password, response.pw);
    console.log("match", match);
    if (match) {
      //세션 설정 userid로
      req.session.name = response.id;

      return res.send({
        hasInfo: true,
        session: req.session.name,
      });
    } else {
      return res.send({
        hasInfo: false,
      });
    }
  }
};

//(4) 회원가입 화면
exports.getRegister = (req, res) => {
  res.send("register", {
    pageTitle: "회원가입 페이지 이름",
  });
};

//(5) 회원가입 아이디 중복 검사
exports.postCheckUserId = async (req, res) => {
  console.log("requested req.body : ", req.body);
  console.log("requested req.body.id : ", req.body.userId);
  const result = await models.User.findOne({
    where: {
      userid: req.body.userId,
    },
    row: true,
  });
  console.log(result);
  //아이디가 없으면 null 값이나오고  아이디가 있으면 정보가있으니까
  if (!result) {
    res.send({
      hasId: false,
      errorText: "사용할 수 있는 아이디입니다.",
    });
  } else if (result.id) {
    res.send({
      hasId: true,
      errorText: "사용할 수 없는 아이디입니다.",
    });
  }
};

//(6) 회원가입 성공 화면
exports.postResult = async (req, res) => {
  console.log("^^^^ Post 회원가입 결과 getResult:", req.body);
  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(req.body.userPw, saltRounds);
  console.log("hashPw : ", hashedPw);

  const result = await models.User.create({
    userid: req.body.userId,
    pw: hashedPw,
    name: req.body.userName,
  });

  const idx = await models.User.findOne({
    attribute: ["id"],
    where: {userid: req.body.userId},
    row: true,
  });
  console.log("idx.id>>>>>>>>>>", idx.id);

  req.session.name = idx.id;

  res.send(true);
};

//(7) 내정보 화면 /my_profile
exports.getMyProfile = async (req, res) => {
  console.log("req.session.name", req.session.name);
  const response = await models.User.findOne({
    where: {
      id: Number(req.session.name),
    },
  });
  console.log("(내정보화면)postMyProfile 함수의 *** findOne", response);
  // console.log("내정보화면에서의 세션 ", req.sessionID, req.session.name);
  res.send({
    userName: response.name,
    userId: response.userid,
    userPw: response.pw,
    id: response.id,
  });
};

//(8) 내정보 수정 화면 /result
exports.patchUserInfo = async (req, res) => {
  console.log("내정보 수정 patchUserInfo req.body", req.body);
  const user = await models.User.findOne({
    where: {
      id: req.body.id,
    },
  });
  let hashedPw;
  if (req.body.pw) {
    const saltRounds = 10;
    hashedPw = await bcrypt.hash(req.body.pw, saltRounds);
  } else {
    hashedPw = user.pw;
  }
  const response = await models.User.update(
    //     Update user set userId='${data.userId}', pw    ='${data.pw}', name='${data.name}' where id = '${data.id}'
    {
      userid: req.body.userId,
      pw: hashedPw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    },
  );
  res.send({
    hasSuccess: true,
    newName: req.body.name,
    id: req.body.id,
  });
};

//(9) 회원 탈퇴
exports.deleteUserInfo = async (req, res) => {
  const result = await models.User.destroy({
    where: {userid: req.body.id},
  });
  res.end();
};

// kakao 로그인을 위한 토큰 발급 받기 (kakao server로 회원정보(나) 전송) & kakaoLogin
exports.kakaoLogin = async (req, res) => {
  try {
    // const code = req.body.code;
    console.log(Object.keys(req.body)[0])
    const code = Object.keys(req.body)[0];


    const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        `grant_type=authorization_code&client_id=d458501a6c2af3febf9576dfc71847f8&redirect_uri=http://localhost:3000/auth&code=${code}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
    );

    const accessToken = response.data.access_token;

    const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // const userId = userResponse.data.id;
    const snsId = userResponse.data.kakao_account.profile.nickname

    //snsPw = 원래는 token임!! 임의로 토큰을 Pw로 바꿈!
    const snsPw = jwt.sign({ userId: snsId.id }, "0a34de09cf6fe820f4ddb7881cdf764d");
    const email = userResponse.data.kakao_account.email
    const provider = "kakao"

    // kakao 회원정보 db 저장 (회원가입 & 로그인)
    let kakaoUser = await models.User.findOne({
      where: {
        userid: snsId,
        pw: snsPw,
        email: email,
        provider: provider,
      },
    });

    if (!kakaoUser) {
      // snsId가 데이터베이스에 없는 경우
      kakaoUser = await models.User.create({
        userid: snsId,
        pw: snsPw,
        email: email,
        provider: provider,
      });
    }

    res.json({ snsPw, snsId, email, provider});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed ' });
  }
};

// 로그인 화면 전환
exports.checkKakaoLogin = async (req, res) => {
  console.log("0000000000000000", req.body);

  const response = await models.User.findOne({
    where: {
      userid: req.body.userId,
      pw: req.body.password
    },
  });
  console.log("response>>>", response);

  if (!response) {
    return res.send({
      hasInfo: false,
    });
  } else {
    const match = req.body.userId === response.userid;
    console.log("match", match);
    if (match) {
      //세션 설정 userid로
      req.session.name = response.id;

      return res.send({
        hasInfo: true,
        session: req.session.name,
      });
    } else {
      return res.send({
        hasInfo: false,
      });
    }
  }
};
