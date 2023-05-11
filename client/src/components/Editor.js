import {useRef, useEffect} from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "../styles/Editor.scss";

const Editor = () => {
  const quillElement = useRef(null); // Quill을 적용할 div 설정
  const quillInstance = useRef(null); // Quill 인스턴스 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요",
      modules: {
        toolbar: [
          [{header: "1"}, {header: "2"}],
          ["bold", "italic", "underline", "strike"],
          [{list: "ordered"}, {list: "bullet"}],
          ["blockquote", "link"],
        ],
      },
    });
  }, []);

  return (
    <div className="editor-block">
      <input className="editor-input-title" placeholder="제목을 입력하세요" />
      <div className="editor-quill-container">
        <div ref={quillElement} />
      </div>
    </div>
  );
};

export default Editor;
