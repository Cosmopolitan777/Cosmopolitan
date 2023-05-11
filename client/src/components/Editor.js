import "../styles/Editor.scss";

const Editor = ({title, setTitle, content, setContent}) => {
  return (
    <div className="EditorBlock">
      <input
        className="EditorInputTitle"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <div className="EditorContainer">
        <textarea
          className="EditorContent"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
