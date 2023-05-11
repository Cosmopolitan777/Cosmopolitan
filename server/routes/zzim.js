const express = require("express");
const controller = require("../controller/Czzim");
const router = express.Router();

//찜 목록은 DB 보안 문제 때문에 파라미터가 아닌, 클라이언트단에서 userid 와 cockid를 받는 식으로 동작합니다.
//userid는 session에서 받아온 user_id를, cockid는 해당 칵테일의 cocktail_id를 request body 에 넣어 get으로 보내주세요


// (1) / - 찜 기본 페이지 - 테스트용 url
router.get("/",controller.indexzzim);
//(2) GET /pz - 찜 추가 (성공 시 1 반환, 에러 혹은 중복 값 존재 시 0 반환) /request 보낼때 body에 userid , cockid 값 입력 필요 
router.get("/pz", controller.pluszzim);
// (3) GET /dz - 찜 제거(성공 시 1 반환, 에러 혹은 쿼리 실행 불가능 시 0 반환) /request 보낼때 body에 userid , cockid 값 입력 필요 
router.get("/dz",controller.deletezzim);
// (4) GET /sz - 사용자가 누른 칵테일 아이디 반환 /request 보낼때 body에 userid
router.get("/sz",controller.showzzim);
// (5) GET /sn/:cockid - 칵테일 별 찜 숫자 반환 /로그인을 안해도 확인할 필요가 있기에, 파라미터로 데이터 받아옴
router.get("/sn/:cockid",controller.shownum);

module.exports = router;
