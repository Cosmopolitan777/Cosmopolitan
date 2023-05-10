const express = require("express");
const controller = require("../controller/Cevaluation");
const router = express.Router();

// (1) GET /rate - create a new rate
router.get("/rate", controller.getRates);

// (2) POST /rate - create a new rate
router.post("/rate", controller.createRate); //하나 추가(생성)

module.exports = router;

