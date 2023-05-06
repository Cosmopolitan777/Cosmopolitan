import {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const CocktailDetailCardMenu = ({item, updateShowInfos}) => {
  console.log(item);
  const [showInfo, setShowInfo] = useState(item);

  const onshowEventHandlerClick = () => {
    console.log("showInfo >>>", showInfo);
    const {show, ...rest} = showInfo;
    console.log("show >>>", show);
    const newshowInfo = {
      show: !showInfo.show,
      ...rest,
    };
    setShowInfo(newshowInfo);
    updateShowInfos(newshowInfo);
  };
  return (
    <ListGroup.Item>
      Dapibus ac facilisis in
      <button className="btn" onClick={onshowEventHandlerClick}>
        {/* showInfo가 true라면 -표시 , false라면 +표시 */}
        {showInfo.show ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </ListGroup.Item>
  );
};
export default CocktailDetailCardMenu;
