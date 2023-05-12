const models = require("../models/");
const bcrypt = require("bcrypt");

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

  res.send(result);
};

//(7) 내정보 화면
exports.postMyProfile = async (req, res) => {
  console.log("req.body", req.body);
  const response = await models.User.findOne({
    where: {
      userid: req.body.id,
    },
  });
  console.log("(내정보화면)postMyProfile 함수의 *** findOne", response);
  console.log("내정보화면에서의 세션 ", req.sessionID, req.session.name);
  res.send("my_profile", {
    pageTitle: "내 정보",
    userName: response.name,
    userId: response.userid,
    userPw: response.pw,
    id: response.id,
    // SID: req.sessionID, //session ID 체크
    // SNAME: req.session.name, //session name 체크
  });
};

//(8) 내정보 수정 화면
exports.patchUserInfo = async (req, res) => {
  console.log("내정보 수정 patchUserInfo req.body", req.body);

  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(req.body.pw, saltRounds);

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
