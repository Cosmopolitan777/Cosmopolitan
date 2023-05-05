import "../styles/CocktailItem.scss";
import {useState} from "react";

const CocktailItem = () => {
  const cardStyle = {width: "18rem"};
  const favoriteIconStyle = {
    color: "#fb3958",
    fontSize: "20px",
  };
  const [favoriteCount, setFavoriteCount] = useState(1);

  return (
    <>
      {/* <div className="card">
        <div className="card_img-holder">
          <img
            className="card_img"
            src="https://source.unsplash.com/300x225/?kite"
            alt="test img"
          />
        </div>
        <div className="card_body">
          <div className="card_body-title">
            <h2>title</h2>
          </div>
          <div className="card_body-favorite">
            <div className="favorite-count">3</div>
          </div>
        </div>
      </div> */}
      <div className="card" style={cardStyle}>
        <img src="/img/dog1.jpeg" className="card-img-top" alt="test image" />
        <div className="card-body">
          <h5 className="card-title">칵테일 이름</h5>
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
