import {useParams, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Editor from "../components/Editor";
import axios from "axios";
import {API_BASE_URL} from "../app-config";
import "../styles/BoardDetail.scss";

const BoardDetail = ({boards, session}) => {
  console.log("boards", boards);
  const boardId = useParams();
  console.log("boardId", boardId);
  console.log("board length", boards.length);
  const navigate = useNavigate();

  console.log(session);

  const [targetBoard] =
    boards && boards.filter(board => board.idx === parseInt(boardId.idx));
  console.log("targetBoard >>>", targetBoard);

  if (!targetBoard) {
    return <main className="BoardDetail">존재하지 않는 게시글입니다.</main>;
  }

  const updateBoard = async targetBoard => {
    await axios.post(
      `${API_BASE_URL}/community/tu/${targetBoard.idx}`,
      targetBoard,
    );
  };

  return (
    <>
      <main className="BoardDetail">
        <h2>게시글 상세 정보</h2>
        <Button onClick={() => navigate(-1)}>목록 보기</Button>
        {session ? (
          <>
            <Editor
              updateBoard={updateBoard}
              session={session}
              targetBoardId={targetBoard.idx}
            />
            <Button variant="danger" onClick={() => navigate(-1)}>
              삭제
            </Button>
          </>
        ) : (
          <>
            <Editor updateBoard={updateBoard} session={session} disabled />
            <Button variant="danger" onClick={() => navigate(-1)} disabled>
              삭제
            </Button>
          </>
        )}

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
