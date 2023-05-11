import React, {useState, useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/Editor.scss";

const Editor = () => {
  const quillRef = useRef(); // Quill을 적용할 div 설정
  const quillInstance = useRef(); // Quill 인스턴스 설정

  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{header: [1, 2, false]}],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{list: "ordered"}, {list: "bullet"}],
      ["link"],
      [{align: []}, {color: []}, {background: []}],
      ["clean"],
    ],
  };

  return (
    <div className="editor-block">
      <input className="editor-input-title" placeholder="제목을 입력하세요" />
      <div className="editor-quill-container">
        <ReactQuill
          ref={quillRef}
          modules={modules}
          theme="snow"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={setContent}
        />
      </div>
    </div>
  );
};

export default Editor;
