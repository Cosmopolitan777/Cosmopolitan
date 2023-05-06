// 예시 코드
const express = require("express");
const controller = require("../controller/Ccocktail");
const router = express.Router();

router.get("/", controller.main);
// (1) GET /showlist - show all todo
router.get("/showlist", controller.readCocks); // 전체 조회
// (2) GET /searchcock/:searchWord - show cocktail id
router.get("/searchcock/:searchWord",controller.searchCocks); //특정 검색어 조회
// (3) GET /cockinfo/:cockId - show specific cocktail info
router.get("/cockinfo/:cockId",controller.infoCocks); //칵테일 정보 조회
// (4) GET /cockpic/:cockID - show cocktail picture
router.get("/cockpic/:cockId",controller.picCocks); //칵테일 사진 불러오기


module.exports = router;
