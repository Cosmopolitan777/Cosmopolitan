const express = require("express");
const controller = require("../controller/Cevaluation");
const router = express.Router();

// (1) GET /evaluation - 모든 rating 목록 조회
router.get("/", controller.getRates);

// (2) POST /evaluation - create a new rate
router.post("/", controller.createRate); //하나 추가(생성)

module.exports = router;
