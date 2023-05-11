import {useState} from "react";
import {Rating} from "react-simple-star-rating";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/CocktailDetailCard.scss";
import CocktailDetailCardMenu from "./CocktailDetailCardMenu";
import axios from "axios";
import {API_BASE_URL} from "../app-config";

const CocktailDetailCard = ({item, session}) => {
  const [cocktailItem, setCocktailItem] = useState(item);
  // info를 클릭시에 볼수있도록 버튼 만들기
  const [showInfos, setShowInfos] = useState([
    {id: 1, title: "glass", show: false},
    {id: 2, title: "ingredient", show: false},
    {id: 3, title: "instruction", show: false},
  ]);
  const [rating, setRating] = useState(0);
  const updateShowInfos = newshowInfo => {
    const exshowInfo = showInfos.filter(item => item.id !== newshowInfo.id);
    setShowInfos(
      [...exshowInfo, newshowInfo].sort(function (a, b) {
        return a.id - b.id; //아이디 기준 정렬
      }),
    );
  };
  const isShowTrue = showInfos.findIndex(i => i.show === true);

  //star rating
  const handleRating = (rating: number) => {
    setRating(rating);
    //게스트인경우 userId 0 으로 구분
    var user_id; //조건문 내 사용하기 위해 전역변수 var지정
    {
      session ? (user_id = session) : (user_id = 0);
    }
    const createRate = async () => {
      await axios
        .post(`${API_BASE_URL}/evaluation`, {
          user_id: user_id,
          cocktail_id: item.cocktail_id,
          rating: rating,
        })
        .then(res => {
          console.log("createRate res>>", res.data);
        });
    };

    createRate();
  };

  return (
    <Card
      className="CocktailDetailCard "
      style={
        isShowTrue !== -1
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${item.imagelink})`,
            }
          : {}
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

        <ListGroup className="list-group-flush ListGroup">
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
        <div className="RatingContainer">
          <Rating className="Rating" onClick={handleRating} initialValue={0} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CocktailDetailCard;
