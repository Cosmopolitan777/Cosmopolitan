import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Editor from "../components/Editor";

const BoardList = () => {
  const [boardItems, setBoardItems] = useState([]);

  useEffect(() => {});

  const addBoard = newBoard => {
    console.log("newBoard", newBoard);

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
                  <tr key={board.id} board={board}>
                    <td>{board.id}</td>
                    <td>{board.title}</td>
                    <td>{board.content}</td>
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
