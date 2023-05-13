const express = require("express");
const controller = require("../controller/Ccommunity");
// const router = require('../routes');
const router = express.Router();

//메인화면
router.get("/", controller.main);

// 게시글 쓰기
router.post("/tc", controller.create);

// 게시글 조회
router.get("/tr", controller.read);

//게시글 수정
router.post("/tu", controller.update);

//게시글 삭제
router.delete("/td", controller.delete);

//특정 게시글 조회
router.get("/st/:textidx", controller.showtext);

//본인 작성 글 목록 조회
router.post("/mt", controller.mytext);

module.exports = router;
