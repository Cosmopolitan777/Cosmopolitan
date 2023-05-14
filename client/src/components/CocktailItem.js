import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/CocktailItem.scss";
import {Rating, Heart} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";

const zzimStyles = {
  itemShapes: Heart,
  activeFillColor: "#eb52b0",
  inactiveFillColor: "#cacaca",
};

const CocktailItem = ({item, session, iszzim}) => {
  const [rating, setRating] = useState(iszzim);

  // console.log("iszzimiszzimiszzimiszzimiszzim");
  // console.log("item,iszzim>>", item.cocktail_id, iszzim);
  // console.log("rating", rating);
  const handleZzim = (rating: number) => {
    console.log(rating);
    setRating(rating);
    var user_id; //조건문 내 사용하기 위해 전역변수 var지정
    {
      session ? (user_id = session) : (user_id = 0);
    }
    const createRate = async () => {
      await axios
        .post(`${process.env.REACT_APP_DB_HOST}/zzim/pz`, {
          user_id: user_id,
          cocktail_id: item.cocktail_id,
        })
        .then(res => {
          console.log("createRate res>>", res.data);
        });
    };
    const deleteRate = async () => {
      await axios
        .post(`${process.env.REACT_APP_DB_HOST}/zzim/dz`, {
          user_id: user_id,
          cocktail_id: item.cocktail_id,
        })
        .then(res => {
          console.log("deleteRate res>>", res.data);
        });
    };
    if (rating === 1) {
      createRate();
    } else {
      deleteRate();
    }
  };

  return (
    <>
      {/* <div className="card" style={{width: "20rem"}}> */}
      <div className="CocktailItemCard" style={{width: "20rem"}}>
        <Link to={"/cocktails/" + item.cocktail_id}>
          <img
            // src="/img/cocktail.jpeg"
            src={item.imagelink}
            // className="card-img-top"
            className="CocktailItemImage"
            alt="test image"
          />
        </Link>

        <div className="card-body">
          <Link to={"/cocktails/" + item.cocktail_id}>
            <p
              className="card-title"
              style={{
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "whitesmoke",
              }}
            >
              {item.name}
            </p>
            {/* <p className="card-text">뭔가 들어갈 설명</p> */}
          </Link>
          <div className="favorite-container">
            <Rating
              style={{maxWidth: 35}}
              value={rating}
              onChange={handleZzim}
              itemStyles={zzimStyles}
              items={1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailItem;
