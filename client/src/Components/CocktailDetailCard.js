import {useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/CocktailDetailCard.scss";
const KitchenSinkExample = ({item}) => {
  const [cocktailItem, setCocktailItem] = useState(item);
  return (
    <Card className="Card" style={{width: "20rem"}}>
      <Card.Title>{item.name}</Card.Title>

      <Card.Body>
        <Card.Img
          className="CardImg"
          variant="top"
          src={process.env.PUBLIC_URL + `/img/cocktail.jpeg`}
        />
        <Card.Text>{item.instruction}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default KitchenSinkExample;
