const express = require("express");
const controller = require("../controller/Ccommunity");
// const router = require('../routes');
const router = express.Router();


//메인화면
router.get("/", controller.main);

// 게시글 쓰기
router.post("/create", controller.create);

// 게시글 조회
router.get("/read", controller.read);

//게시글 수정
router.patch("/update", controller.update);

//게시글 삭제
router.delete("/delete", controller.delete);

module.exports = router;
