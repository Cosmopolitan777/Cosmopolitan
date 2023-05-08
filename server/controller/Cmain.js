// const Model = require("../models/");
//
// // 메인화면
// exports.getIndex = async (req, res) => {
//   console.log(req.session.name);
//   res.render("index", {
//     // pageTitle: "회원가입",
//     session: req.session.name,
//     // session: !!req.session.name,
//   });
// };
// // get 로그인 화면
// exports.getLogin = (req, res) => {
//   if (req.session.name) {
//     return res.redirect("/my_profile");
//   }
//   res.render("login", {
//     pageTitle: "로그인 페이지 이름",
//     session: req.session.name ? true : false,
//   });
// };
// // 로그인 검사
// exports.postCheckLogin = async (req, res) => {
//   console.log("req.body :", req.body);
//
//   //after
//   console.log("입력한 아이디/패스워드", req.body.userId, req.body.userPw);
//   const response = await Model.Model.findOne({
//     where: {
//       // userid: "admin",
//       // pw: "admin",
//       userid: req.body.userId,
//       pw: req.body.userPw,
//     },
//   });
//   console.log(" *** findOne", response);
//   if (!response) {
//     return res.send({
//       hasInfo: false,
//     });
//   } else if (
//     req.body.userId === response.userid ||
//     req.body.userPw === response.pwx1
//   ) {
//     req.session.name = response.name;
//     res.send({
//       hasInfo: true,
//     });
//   }
// };
// // post 내정보 화면
// exports.postMyProfile = async (req, res) => {
//   console.log("req.body", req.body); // id pw 저장되어있음
//
//   //[after]
//   console.log("로그인한 ID와 PW", req.body);
//   const response = await Model.Model.findOne({
//     where: {
//       userid: req.body.id,
//     },
//   });
//   console.log("(내정보화면)postMyProfile 함수의 *** findOne", response);
//   console.log("내정보화면에서의 세션 ", req.sessionID, req.session.name);
//   res.render("my_profile", {
//     pageTitle: "내 정보",
//     userName: response.name,
//     userId: response.userid,
//     userPw: response.pw,
//     id: response.id,
//     // SID: req.sessionID, //session ID 체크
//     // SNAME: req.session.name, //session name 체크
//   });
// };
//
// // patch 내정보 수정
// exports.patchUserInfo = async (req, res) => {
//   console.log("내정보 수정 patchUserInfo req.body", req.body);
//
//   const response = await Model.Model.update(
//     //     Update user set userId='${data.userId}', pw    ='${data.pw}', name='${data.name}' where id = '${data.id}'
//     {
//       userId: req.body.userId,
//       pw: req.body.pw,
//       name: req.body.name,
//     },
//     {
//       where: {
//         id: req.body.id,
//       },
//     }
//   );
//   res.send({
//     hasSuccess: true,
//     newName: req.body.name,
//     id: req.body.id,
//   });
// };
// // get 회원가입 사이트
// exports.getRegister = (req, res) => {
//   res.render("register", {
//     pageTitle: "회원가입 페이지 이름",
//   });
// };
// // post 회원가입 결과
// exports.getResult = async (req, res) => {
//   console.log("*^*^*^*^ Post 회원가입 결과 getResult:", req.body);
//   const result = await Model.Model.create({
//     userid: req.body.userId,
//     pw: req.body.userPw,
//     name: req.body.userName,
//   });
//
//   res.render("result");
// };
// // post 아이디 유효성 확인
// exports.postCheckUserId = async (req, res) => {
//   console.log("requested req.body : ", req.body);
//   console.log("requested req.body.id : ", req.body.id);
//   const result = await Model.Model.findOne({
//     where: {
//       userid: req.body.id,
//     },
//   });
//   console.log(result);
//   //아이디가 없으면 null 값이나오고  아이디가 있으면 정보가있으니까
//   // console.log("result.id가 멀까요 postcheckuserID", result.id);
//   if (!result) {
//     res.send({
//       hasId: false,
//       errorText: "사용할 수 있는 아이디입니다.",
//     });
//   } else if (result.id) {
//     res.send({
//       hasId: true,
//       errorText: "사용할 수 없는 아이디입니다.",
//     });
//   }
//
// };
//
// // 계정해지
// exports.deleteUserInfo = async (req, res) => {
//
//   const result = await Model.Model.destroy({
//     where: { userid: req.body.id },
//   });
//   res.end();
// };

const Model = require("../models/");
const bcrypt = require("bcrypt");
const authController = require('./Cmain')
const router = require('../routes')
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require('passport-naver').Strategy;
const User = require("../models").User;

// 메인화면
exports.getIndex = async (req, res) => {
  console.log(req.session.name);
  res.render("index", {
    // pageTitle: "회원가입",
    session: req.session.name,
    // session: !!req.session.name,
  });
};

// get 로그인 화면
exports.getLogin = (req, res) => {
  if (req.session.name) {
    return res.redirect("/my_profile");
  }
  res.render("login", {
    pageTitle: "로그인 페이지 이름",
    session: req.session.name ? true : false,
  });
};

// 로그인 검사
exports.postCheckLogin = async (req, res) => {
  console.log("req.body :", req.body);
  const response = await Model.Model.findOne({
    where: {
      userid: req.body.userId,
    },
  });

  if (!response) {
    return res.send({
      hasInfo: false,
    });
  } else {
    const match = await bcrypt.compare(req.body.userPw, response.pw);

    if (match) {
      req.session.name = response.name;
      return res.send({
        hasInfo: true,
      });
    } else {
      return res.send({
        hasInfo: false,
      });
    }
  }
};

// post 내정보 화면
exports.postMyProfile = async (req, res) => {
  console.log("req.body", req.body);
  const response = await Model.Model.findOne({
    where: {
      userid: req.body.id,
    },
  });
  console.log(
      "(내정보화면)postMyProfile 함수의 *** findOne",
      response
  );
  console.log("내정보화면에서의 세션 ", req.sessionID, req.session.name);
  res.render("my_profile", {
    pageTitle: "내 정보",
    userName: response.name,
    userId: response.userid,
    userPw: response.pw,
    id: response.id,
    // SID: req.sessionID, //session ID 체크
    // SNAME: req.session.name, //session name 체크
  });
};

// patch 내정보 수정
exports.patchUserInfo = async (req, res) => {
  console.log("내정보 수정 patchUserInfo req.body", req.body);

  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(req.body.pw, saltRounds);

  const response = await Model.Model.update(
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
      }
  );
  res.send({
    hasSuccess: true,
    newName: req.body.name,
    id: req.body.id,
  });
};

// get 회원가입 사이트
exports.getRegister = (req, res) => {
  res.render("register", {
    pageTitle: "회원가입 페이지 이름",
  });
};

// post 회원가입 결과
exports.getResult = async (req, res) => {
  console.log("^^^^ Post 회원가입 결과 getResult:", req.body);
  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(req.body.userPw, saltRounds);
  console.log("hashPw : ", hashedPw);

  const result = await Model.Model.create({
    userid: req.body.userId,
    pw: hashedPw,
    name: req.body.userName,
  });

  res.render("result");
};

// post 아이디 유효성 확인
exports.postCheckUserId = async (req, res) => {
  console.log("requested req.body : ", req.body);
  console.log("requested req.body.id : ", req.body.id);
  const result = await Model.Model.findOne({
    where: {
      userid: req.body.id,
    },
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


// Kakao Strategy 설정
passport.use(
    new KakaoStrategy(
        {
          clientID: process.env.KAKAO_REST_API_KEY,
          clientSecret: process.env.KAKAO_CLIENT_SECRET,
          callbackURL: "http://localhost:8000/auth/kakao/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            // Kakao에서 넘겨준 사용자 정보를 DB에서 조회
            const user = await Model.findOne({
              where: {
                snsId: profile.id,
                provider: "kakao",
              },
            });

            // DB에 사용자 정보가 없으면 회원가입
            if (!user) {
              const newUser = await Model.create({
                email: profile._json && profile._json.kakao_account_email,
                snsId: profile.id,
                provider: "kakao",
              });
              console.log(`New user created with email: ${newUser.email}`);
              done(null, newUser);
            } else {
              done(null, user);
            }
          } catch (error) {
            console.error(error);
            done(error);
          }
        }
    )
);

// Naver Strategy 설정
passport.use(
    new NaverStrategy(
        {
          clientID: process.env.NAVER_CLIENT_ID,
          clientSecret: process.env.NAVER_CLIENT_SECRET,
          callbackURL: "http://localhost:8000/auth/naver/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            // Naver에서 넘겨준 사용자 정보를 DB에서 조회
            const user = await Model.findOne({
              where: {
                snsId: profile.id,
                provider: "naver",
              },
            });

            // DB에 사용자 정보가 없으면 회원가입
            if (!user) {
              const newUser = await Model.create({
                email: profile._json && profile._json.email,
                snsId: profile.id,
                provider: "naver",
              });
              console.log(`New user created with email: ${newUser.email}`);
              done(null, newUser);
            } else {
              done(null, user);
            }
          } catch (error) {
            console.error(error);
            done(error);
          }
        }
    )
);

require('https').globalAgent.options.rejectUnauthorized = false;

// Session에 사용자 정보 저장
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Session에서 사용자 정보 조회
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({
      where: { id },
    });
    done(null, user);
  } catch (error) {
    console.error(error);
    done(error);
  }
});


// 계정해지
exports.deleteUserInfo = async (req, res) => {

  const result = await Model.Model.destroy({
    where: { userid: req.body.id },
  });
  res.end();
};
