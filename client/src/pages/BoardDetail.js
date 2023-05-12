import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const BoardDetail = ({board}) => {
  const {boardId} = useParams();

  const [targetBoard] = board.filter(board => board.id === parseInt(boardId));

  console.log("targetBoard >>> ", targetBoard);

  const navigate = useNavigate();

  if (!targetBoard) {
    return <main className="BoardDetail">존재하지 않는 게시글입니다.</main>;
  }

  return (
    <>
      <main className="BoardDetail">
        <h2>게시글 상세 정보</h2>
        <Button onClick={() => navigate(-1)}>목록 보기</Button>
        <div className="BoardDetailContainer">
          <div className="BoardDetailHeader">
            <div className="BoardDetailTitle">{targetBoard.title}</div>
            <div className="BoardDetailWriter">{targetBoard.writer}</div>
            <div className="BoardDetailCreateDate">
              {targetBoard.createDate}
            </div>
          </div>
          <hr />
          <div className="BoardDetailBody">
            <div className="BoardDetailContent">{targetBoard.content}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BoardDetail;
