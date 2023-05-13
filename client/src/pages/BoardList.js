import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Editor from "../components/Editor";
import {API_BASE_URL} from "../app-config";

const BoardList = () => {
  const [boardItems, setBoardItems] = useState([]);

  useEffect(() => {
    console.log("게시물 리스트 마운트 완료");
    const getBoards = async () => {
      const res = await axios.get(`${API_BASE_URL}/community/tr`);
      setBoardItems(res.data.slice(0, 10));
    };
    getBoards();
  }, []);

  const addBoard = async newBoard => {
    console.log("newBoard", newBoard);

    const res = await axios.post(`${API_BASE_URL}`, newBoard);
    console.log(res);

    newBoard.id = boardItems.length + 1;
    setBoardItems([...boardItems, newBoard]);
  };

  const deleteBoard = () => {};

  const updateBoard = () => {};

  const [currentPage, setCurrentPage] = useState(1);
  const [boardPerPage] = useState(10);

  // const indexOfLastBoard = currentPage * boardPerPage;
  // const indexOfFirstBoard = indexOfLastBoard - boardPerPage;
  // const currentBoard = board.slice(indexOfFirstBoard, indexOfLastBoard);
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Editor addBoard={addBoard} />
      <div className="BoardListContainer">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th style={{width: "50%"}}>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {boardItems.length > 0 ? (
              boardItems.map(board => {
                console.log(board);
                return (
                  <tr key={board.idx} board={board}>
                    <td>{board.idx}</td>

                    <td>
                      <Link to={`/boardDetail/${board.idx}`}>
                        {board.title.slice(0, 10)}
                      </Link>
                    </td>

                    <td>{board.writer}</td>
                    <td>{board.createDate}</td>
                  </tr>
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
