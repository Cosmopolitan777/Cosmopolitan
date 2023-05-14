import {useParams, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles/BoardDetail.scss";

const BoardDetail = ({boards}) => {
  console.log("boards", boards);
  const boardId = useParams();
  console.log("boardId", boardId);
  console.log("board length", boards.length);
  const navigate = useNavigate();

  const [targetBoard] = boards.filter(
    board => board.idx === parseInt(boardId.idx),
  );
  console.log("targetBoard >>>", targetBoard);

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
            <div className="BoardDetailTitle">제목 : {targetBoard.title}</div>
            <div className="BoardDetailWriter">
              작성자 : {targetBoard.writer}
            </div>
            <div className="BoardDetailCreateDate">
              등록일 : {targetBoard.updatedate}
            </div>
          </div>
          <hr />
          <h2>내용</h2>
          <div className="BoardDetailBody">
            <div className="BoardDetailContent">{targetBoard.content}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BoardDetail;
