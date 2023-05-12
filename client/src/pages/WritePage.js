import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import Editor from "../components/Editor";
import Button from "react-bootstrap/Button";

const WritePage = () => {
  const navigate = useNavigate();

  // 게시판 제목, 내용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onPost = useCallback(async () => {
    if (title.trim().legnth !== 0 || content.trim().length !== 0) {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        alert("게시글 등록이 완료되었습니다.");
        navigate("/boardList");
      } catch (err) {
        console.log(err);
      }
    }
  });

  const onCancel = () => {
    navigate("/boardList");
  };

  return (
    <>
      <Editor />
      <Button variant="primary" onClick={onPost}>
        등록
      </Button>
      <Button variant="light" onClick={onCancel}>
        취소
      </Button>
    </>
  );
};

export default WritePage;
