import {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const CocktailDetailCardMenu = ({showItem, updateShowInfos, cocktailInfo}) => {
  //   console.log(showItem);
  const [showInfo, setShowInfo] = useState(showItem);

  const onshowEventHandlerClick = () => {
    const {show, ...rest} = showInfo;
    const newshowInfo = {
      show: !showInfo.show,
      ...rest,
    };
    setShowInfo(newshowInfo);
    updateShowInfos(newshowInfo);
  };
  const eachTitleContent = () => {
    const contents = [];
    if (showInfo.title === "ingredient") {
      for (let i = 1; i < 16; i++) {
        cocktailInfo["ingredient" + i.toString()] !== "null" &&
          cocktailInfo["measure" + i.toString()] !== "null" &&
          contents.push(
            `${cocktailInfo["ingredient" + i.toString()]}: ${
              cocktailInfo["measure" + i.toString()]
            }`,
          );
      }
      console.log("contents>>", contents);
      return contents;
    }
    contents.push(cocktailInfo[showInfo.title]);
    return contents;
  };
  return (
    <ListGroup.Item>
      {showInfo.title}
      <button className="btn" onClick={onshowEventHandlerClick}>
        {/* showInfo가 true라면 -표시 , false라면 +표시 */}
        {showInfo.show ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      {showInfo.show && (
        <p>
          {eachTitleContent().map(e => {
            return <li>{e}</li>;
          })}
        </p>
      )}
    </ListGroup.Item>
  );
};
export default CocktailDetailCardMenu;
