import {useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/CocktailDetailCard.scss";
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import CocktailDetailCardMenu from "./CocktailDetailCardMenu";
const KitchenSinkExample = ({item}) => {
  const [cocktailItem, setCocktailItem] = useState(item);
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfos, setShowInfos] = useState([
    {id: 1, show: false},
    {id: 2, show: false},
    {id: 3, show: false},
  ]);
  const updateShowInfos = newshowInfo => {
    const exshowInfo = showInfos.filter(item => item.id !== newshowInfo.id);
    setShowInfos(
      [...exshowInfo, newshowInfo].sort(function (a, b) {
        return a.id - b.id; //아이디 기준 정렬
      }),
    );
  };
  return (
    <Card className="Card" style={{width: "20rem"}}>
      <Card.Img
        className="CardImg"
        variant="top"
        src={process.env.PUBLIC_URL + `/img/cocktail.jpeg`}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.category} / {item.alcholic}{" "}
          {item.tags !== "null" && <>/{item.tags}</>}
        </Card.Text>
        <Card.Text></Card.Text>

        {/* </Card.Body> */}
        <ListGroup className="list-group-flush">
          {showInfos.map(item => {
            return (
              <CocktailDetailCardMenu
                key={item.id}
                item={item}
                updateShowInfos={updateShowInfos}
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
