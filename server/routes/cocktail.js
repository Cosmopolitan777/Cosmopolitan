// 예시 코드
const express = require("express");
const controller = require("../controller/Ccocktail");
const router = express.Router();

router.get("/", controller.main);
// (1) GET /todos - show all todo
router.get("/showlist", controller.readCocks); // 전체 조회



module.exports = router;
