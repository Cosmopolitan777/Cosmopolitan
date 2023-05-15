import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {PencilSquare, Trash} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import axios from "axios";

const BoardListItem = ({board, deleteBoard, updateBoard, session}) => {
  const [boardItem, setBoardItem] = useState(board);
  console.log(board);

  useEffect(() => {
    if (session != null) {
      const getMyProfile = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_DB_HOST}/my_profile`,
        );
        console.log(res.data.userName);
        setBoardItem({...boardItem, writer: res.data.userName});
      };
      getMyProfile();
    } else {
      setBoardItem({...boardItem, writer: "익명"});
    }
  }, []);

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
      <td>{board.updatedate.slice(0, 10)}</td>
      <td className="BoardListDelete">
        <Button onClick={onDeleteButtonClicked}>
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

export default BoardListItem;
