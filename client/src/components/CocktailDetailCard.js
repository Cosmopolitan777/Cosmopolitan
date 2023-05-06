import {useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/CocktailDetailCard.scss";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const KitchenSinkExample = ({item}) => {
  const [cocktailItem, setCocktailItem] = useState(item);
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfo, setShowInfo] = useState(false);
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
          <ListGroup.Item className="ListGroupItem">
            Cras justo odio{" "}
            {/* 버튼 클릭시 setShowInfo보이기 : useState(false) + (!showInfo) = true */}
            <button className="btn" onClick={() => setShowInfo(!showInfo)}>
              {/* showInfo가 true라면 -표시 , false라면 +표시 */}
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </ListGroup.Item>
          {showInfo ? (
            <p>{item.instruction}</p>
          ) : (
            <>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </>
          )}
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
