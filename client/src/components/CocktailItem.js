import {useState, useEffect} from "react";
import "../Styles/CocktailItem.scss";

const CocktailItem = ({item}) => {
  const favoriteIconStyle = {
    color: "#fb3958",
    fontSize: "20px",
  };
  const [favoriteCount, setFavoriteCount] = useState(1);
  const [cocktailItem, setCocktailItem] = useState(item);

  console.log(item);

  return (
    <>
      <div className="card" style={{width: "20rem"}}>
        <img
          src="/img/cocktail.jpeg"
          className="card-img-top"
          alt="test image"
        />
        <div className="card-body">
          <p className="card-title">{cocktailItem.name}</p>
          <p className="card-text">뭔가 들어갈 설명</p>
          <div className="favorite-container">
            <button className="favorite-btn">
              <i className="fa-solid fa-heart" style={favoriteIconStyle}></i>
            </button>
            {/* <i class="fa-regular fa-heart" style="color: #e0e0e0;"></i> */}
            <div className="favorite-counter">{favoriteCount}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailItem;
