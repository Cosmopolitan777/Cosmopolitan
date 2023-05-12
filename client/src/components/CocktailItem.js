import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/CocktailItem.scss";
import {Rating, Heart} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const zzimStyles = {
  itemShapes: Heart,
  activeFillColor: "#eb52b0",
  inactiveFillColor: "#cacaca",
};

const CocktailItem = ({item}) => {
  const [rating, setRating] = useState(0);
  const handleZzim = (rating: number) => {
    console.log(rating);
    setRating(rating);
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
            <p className="card-title">{item.name}</p>
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
