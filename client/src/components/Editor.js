import {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../styles/Editor.scss";

const Editor = ({addBoard, updateBoard}) => {
  const [boardItem, setBoardItem] = useState({
    title: "",
    writer: "",
    content: "",
  });

  // Modal
  const [show, setShow] = useState(false);
  const onSave = () => {
    const cannotSave =
      boardItem.title.trim().length === 0 ||
      boardItem.content.trim().length === 0;

    if (cannotSave) {
      alert("제목 또는 내용을 입력해주세요");
    } else {
      console.log(boardItem);
      addBoard(boardItem);
      alert("게시글 등록이 완료되었습니다.");
    }
    setBoardItem({
      title: "",
      writer: "",
      content: "",
    });
    setShow(false);
  };
  const onCancel = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="BoardListButton">
      <Button variant="primary" onClick={handleShow}>
        글쓰기
      </Button>
      <Modal show={show} onHide={onCancel} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>게시글 작성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="제목을 입력해주세요"
                value={boardItem.title}
                onChange={e =>
                  setBoardItem({...boardItem, title: e.target.value})
                }
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
                value={boardItem.content}
                onChange={e =>
                  setBoardItem({...boardItem, content: e.target.value})
                }
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
  );
};

export default Editor;
