import {Link} from "react-router-dom";
import {PencilSquare, Trash} from "react-bootstrap-icons";
import {useState} from "react";

const BoardListItem = ({board, deleteBoard, updateBoard}) => {
  const [boardItem, setBoardItem] = useState(board);
  console.log(board);

  const onDeleteButtonClicked = () => {
    deleteBoard(boardItem);
  };

  return (
    <tr key={board.idx} board={board}>
      <td>{board.idx}</td>
      <td>
        <Link to={`/boardDetail/${board.idx}`}>{board.title}</Link>
      </td>
      <td>{board.writer}</td>
      <td>{board.updatedate}</td>
      <td className="BoardListEdit">
        <button>
          <PencilSquare />
        </button>
      </td>
      <td className="BoardListDelete">
        <button onClick={onDeleteButtonClicked}>
          <Trash />
        </button>
      </td>
    </tr>
  );
};

export default BoardListItem;
