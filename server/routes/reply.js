const express = require("express");
const controller = require("../controller/Creply");
const router = express.Router();



//(1) POST /wr - 댓글 작성. request body에 해당 본문의 idx, 댓글 작성자의 userid, 댓글 내용, 비밀 댓글 여부(0 or 1) 담아서 post 방식으로 전송 필요
//example: {text_idx: 본문 넘버,writer: session, content: 댓글 내용, secret: 0 or 1}
//댓글 작성 성공 시 1반환. 실패 시 0 반환
router.post("/wr", controller.writereply);

//(2) POST /mr - 댓글 수정. request body에 해당 댓글의 idx, 수정된 댓글 내용, 비밀 댓글 여부(0 or 1) 담아서 post 방식으로 전송 필요
//댓글 작성 성공 시 1 반환. 실패 시 0 반환
router.post("/mr",controller.modifyreply);

//(3) POST /dr - 댓글 삭제. request body 에 해당글의 idx만 담아서 전송하면 삭제 가능. 
//삭제 성공 시 1 반환. 실패 시 0 반환.
router.post("/dr",controller.deletereply);

//(4) GET /sr/:replyIdx - 댓글 조회. 파라미터에 replyIdx, req.body에 session 담아서 전송.
//글 작성자, 혹은 댓글 작성자일 경우 모든 댓글 원문 그래도 반환
//그 외의 경우: 비밀댓글이 아니라면 조회 가능. 비밀댓글이라면, "비밀댓글 입니다." 반환.
router.get("/sr/:replyIdx",controller.showreply);

//(5) Get /gr/:textIdx - 해당 글의 댓글 idx 조회
router.get("/gr/:textIdx",controller.getreplyidx);

module.exports = router;
