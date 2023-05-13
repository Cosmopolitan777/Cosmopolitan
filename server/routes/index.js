const express = require("express");
const controller = require("../controller/Cuser");
const session = require("../controller/Session");
const router = express.Router();

// console.log(">>>>>>>>>>>>>>>>>>>>>>", controller);

//(1) 메인 화면
router.get("/", controller.getIndex);

//(2) 로그인 화면
router.get("/login", controller.getLogin);

//(3) 로그인 아이디 확인
router.post("/checkLogin", controller.postCheckLogin);

//(4) 회원가입 화면
router.get("/register", controller.getRegister);
//(5) 회원가입 아이디 중복 검사
router.post("/check_userid", controller.postCheckUserId);
//(6) 회원가입 성공 화면
router.post("/result", controller.postResult);

//(7) 내정보 화면
router.post("/my_profile", controller.postMyProfile);
//(8) 내정보 수정 화면
router.patch("/patchUserInfo", controller.patchUserInfo);
//(9) 회원 탈퇴
router.delete("/my_profile/delete", controller.deleteUserInfo);
//(10) 로그 아웃
router.get("/logout", session.deleteSession);

module.exports = router;
