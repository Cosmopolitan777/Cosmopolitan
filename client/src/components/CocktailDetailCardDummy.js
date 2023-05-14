import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/CocktailDetailCard.scss";
const CocktailDetailCardDummy = () => {
  return (
    <Card className="CocktailDetailCard ">
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/img/cocktail.jpeg`}
      />
      <Card.Body>
        <Card.Title className="CardTitle">No Cocktail</Card.Title>
        <Card.Text className="CardText">찜을 추가해주세요</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CocktailDetailCardDummy;
