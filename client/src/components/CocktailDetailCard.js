import {useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/CocktailDetailCard.scss";
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import CocktailDetailCardMenu from "./CocktailDetailCardMenu";
const KitchenSinkExample = ({item}) => {
  const [cocktailItem, setCocktailItem] = useState(item);
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfos, setShowInfos] = useState([
    {id: 1, title: "glass", show: false},
    {id: 2, title: "ingredient", show: false},
    {id: 3, title: "instruction", show: false},
  ]);
  const updateShowInfos = newshowInfo => {
    const exshowInfo = showInfos.filter(item => item.id !== newshowInfo.id);
    setShowInfos(
      [...exshowInfo, newshowInfo].sort(function (a, b) {
        return a.id - b.id; //아이디 기준 정렬
      }),
    );
  };
  const isShowTrue = showInfos.findIndex(i => i.show === true);
  console.log("showInfos>>", showInfos);
  const style = {
    backgroundImage: `url(${item.imagelink})`,
  };
  return (
    <Card
      className="Card"
      style={
        isShowTrue !== -1 ? {backgroundImage: `url(${item.imagelink})`} : {}
      }
    >
      <Card.Img
        className={isShowTrue !== -1 ? "CardImg Dnone" : "CardImg"}
        variant="top"
        src={item.imagelink}
      />
      <Card.Body>
        <Card.Title
          className={isShowTrue !== -1 ? "CardTitle ColorWhite" : "CardTitle"}
        >
          {item.name}
        </Card.Title>
        <Card.Text
          className={isShowTrue !== -1 ? "CardText ColorWhite" : "CardText"}
        >
          {item.category} / {item.alcholic}{" "}
          {item.tags !== "null" && <>/{item.tags}</>}
        </Card.Text>
        <Card.Text></Card.Text>

        <ListGroup className="list-group-flush">
          {showInfos.map(showItem => {
            return (
              <CocktailDetailCardMenu
                className="CocktailDetailCardMenu"
                key={showItem.id}
                showItem={showItem}
                updateShowInfos={updateShowInfos}
                cocktailInfo={item}
              />
            );
          })}
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default KitchenSinkExample;
