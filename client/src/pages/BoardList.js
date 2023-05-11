import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const BoardList = () => {
  // Modal
  const [show, setShow] = useState(false);
  const onSave = () => setShow(false);
  const onCancel = () => setShow(false);
  const handleShow = () => setShow(true);

  const [board, setBoard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [boardPerPage] = useState(10);

  const indexOfLastBoard = currentPage * boardPerPage;
  const indexOfFirstBoard = indexOfLastBoard - boardPerPage;
  const currentBoard = board.slice(indexOfFirstBoard, indexOfLastBoard);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="BoardListButton">
        <Button variant="primary" onClick={handleShow}>
          글쓰기
        </Button>
        <Modal show={show} onHide={onSave} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>게시글 작성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="제목을 입력해주세요"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={9}
                  placeholder="내용을 입력해주세요"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onSave}>
              등록
            </Button>
            <Button variant="secondary" onClick={onCancel}>
              취소
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

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
            {currentBoard.map(board => {
              <tr key={board.id}>
                <td>{board.id}</td>
                <td>{board.title}</td>
                <td>{board.content}</td>
                <td>{board.createDate}</td>
              </tr>;
            })}
          </tbody>
        </Table>
      </div>
    </>

    // <Pagination></Pagination>
  );
};

export default BoardList;
