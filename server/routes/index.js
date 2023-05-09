// const express = require("express");
// const controller = require("../controller/Cmain");
// const visitor = require("../controller/Cvisitior");
// const session = require("../controller/Session");
// const passport = require("passport");
// const router = express.Router();

// console.log(">>>>>>>>>>>>>>>>>>>>>>", controller);

// //메인 화면
// router.get("/", controller.getIndex);

// //로그인 화면
// router.get("/login", controller.getLogin);

// //로그인 아이디 확인
// router.post("/checkLogin", controller.postCheckLogin);

// //회원가입 화면
// router.get("/register", controller.getRegister);
// // 회원가입 아이디 중복 검사
// router.post("/check_userid", controller.postCheckUserId);
// // 회원가입 성공 화면
// router.post("/result", controller.getResult);

// // 내정보 화면
// router.post("/my_profile", controller.postMyProfile);
// // 내정보 수정 화면
// router.patch("/patchUserInfo", controller.patchUserInfo);

// router.delete("/my_profile/delete", controller.deleteUserInfo);

// router.get("/logout", session.deleteSession);

// // Kakao 로그인 요청
// router.get("/auth/kakao", passport.authenticate("kakao"));

// // Kakao 로그인 콜백
// router.get(
//     "/auth/kakao/callback",
//     passport.authenticate("kakao", {
//       failureRedirect: "/login",
//     }),
//     (req, res) => {
//       res.redirect("/");
//     }
// );

// // Naver 로그인 요청
// router.get("/auth/naver", passport.authenticate("naver"));

// // Naver 로그인 콜백
// router.get(
//     "/auth/naver/callback",
//     passport.authenticate("naver", {
//       failureRedirect: "/login",
//     }),
//     (req, res) => {
//       res.redirect("/");
//     }
// );

// // router.get("/test", session.test);

// module.exports = router;
