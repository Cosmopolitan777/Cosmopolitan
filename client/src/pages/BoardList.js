import {useState, useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Editor from "../components/Editor";
import BoardListItem from "../components/BoardListItem";
import {API_BASE_URL} from "../app-config";

const BoardList = ({boards, session}) => {
  const [boardItems, setBoardItems] = useState([]);
  console.log("boardlist session", session);

  useEffect(() => {
    console.log("게시물 리스트 마운트 완료");
    const getBoards = async () => {
      const res = await axios.get(`${API_BASE_URL}/community/tr`);
      console.log(res.data);
      setBoardItems(res.data);
    };

    getBoards();
  }, []);

  const addBoard = async newBoard => {
    console.log("newBoard", newBoard);

    const res = await axios.post(`${API_BASE_URL}/community/tc`, newBoard);
    console.log(res.data);

    setBoardItems([...boardItems, res.data]);
  };

  const deleteBoard = async targetBoard => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios.post(`${API_BASE_URL}/community/td`, {idx: targetBoard.idx});
      const newBoardItems = boardItems.filter(
        board => board.idx != targetBoard.idx,
      );
      setBoardItems(newBoardItems);
    }
  };

  const updateBoard = async targetBoard => {
    await axios.patch(`${API_BASE_URL}/community/tu`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [boardPerPage] = useState(10);

  // const indexOfLastBoard = currentPage * boardPerPage;
  // const indexOfFirstBoard = indexOfLastBoard - boardPerPage;
  // const currentBoard = board.slice(indexOfFirstBoard, indexOfLastBoard);
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Editor addBoard={addBoard} updateBoard={updateBoard} />

      <div className="BoardListContainer">
        <Table striped bordered hover responsive style={{textAlign: "center"}}>
          <thead>
            <tr>
              <th>번호</th>
              <th style={{width: "50%"}}>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {boardItems.length > 0 ? (
              boardItems.map(board => {
                return (
                  <BoardListItem
                    key={board.idx}
                    board={board}
                    deleteBoard={deleteBoard}
                    updateBoard={updateBoard}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>게시글이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>

    // <Pagination></Pagination>
  );
};

export default BoardList;
