const express = require("express");
const controller = require("../controller/Crecommend");
const router = express.Router();

// (1) GET /recommend - 추천 목록 반환
router.get("/", controller.getRecommend);

module.exports = router;
