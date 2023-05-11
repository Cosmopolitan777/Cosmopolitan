const express = require("express");
const controller = require("../controller/Cevaluation");
const router = express.Router();

// (1) GET /rate - 모든 rating 목록 조회
router.get("/", controller.getRates);

// (2) POST /rate - create a new rate
router.post("/", controller.createRate); //하나 추가(생성)

module.exports = router;
