import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/CocktailItem.scss";

const CocktailItem = ({item}) => {
  const favoriteIconStyle = {
    color: "#fb3958",
    fontSize: "20px",
  };
  const [favoriteCount, setFavoriteCount] = useState(1);
  // const [cocktailItem, setCocktailItem] = useState(item);

  return (
    <Link to={"/cocktails/" + item.cocktail_id}>
      {/* <div className="card"> */}
      <div
        className="CocktailItemCard"
        style={{width: "20rem", color: "white"}}
      >
        <img
          // src="/img/cocktail.jpeg"
          src={item.imagelink}
          // className="card-img-top"
          className="CocktailItemImage"
          alt="test image"
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
          {/* <p className="card-text">뭔가 들어갈 설명</p> */}
          <div className="favorite-container">
            <button className="favorite-btn">
              <i className="fa-solid fa-heart" style={favoriteIconStyle}></i>
            </button>
            {/* <i class="fa-regular fa-heart" style="color: #e0e0e0;"></i> */}
            {/* <div className="favorite-counter">{favoriteCount}</div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default CocktailItem;
