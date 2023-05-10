import "../styles/Mypage.scss";
// import CocktailItem from "./CocktailItem";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const LikeList = ({cocktailItems}) => {
  console.log(cocktailItems);
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100vh",
        padding: "0 10%",
        margin: "0 20%",
        borderRadius: "6px",
        // boxSizing: "border-box",
      }}
    >
      <h3 style={{margin: "0 3%"}}>찜 목록</h3>

      <div className="container">
        <div className="row row-cols-4" style={{padding: "3%"}}>
          {cocktailItems.map(item => (
            <div className="col mt-3" style={{padding: "3%"}}>
              <LikeListItem key={item.cocktail_id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <footer className="navbar-fixed-bottom mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export const Recommendation = () => {
  return (
    <div
      // className="Recommendation"
      style={{
        backgroundColor: "white",
        height: "800px",
        width: "60vw",
        padding: "5%",
        margin: "0 5%",
        borderRadius: "6px",
      }}
    >
      <div className="Text">
        <h3 style={{margin: "0 3%"}}>
          {/* <FontAwesomeIcon icon={faHandHoldingHeart} className="Icon Holding" /> */}
          추천목록
        </h3>
      </div>
    </div>
  );
};

export const InformationModify = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "800px",
        width: "60vw",
        padding: "5%",
        margin: "0 5%",
        borderRadius: "6px",
      }}
    >
      <h3 style={{margin: "0 3%"}}>회원정보수정</h3>
    </div>
  );
};

// LikeList에 들어가는 하위 컴포넌트

const LikeListItem = ({item}) => {
  const favoriteIconStyle = {
    color: "#fb3958",
    fontSize: "15px",
  };
  const [favoriteCount, setFavoriteCount] = useState(1);
  // const [cocktailItem, setCocktailItem] = useState(item);

  return (
    <Link to={"/cocktails/" + item.cocktail_id}>
      {/* <div className="card" style={{width: "20rem"}}> */}
      <div className="CocktailItemCard" style={{width: "20rem"}}>
        <img
          // src="/img/cocktail.jpeg"
          src={item.imagelink}
          // className="card-img-top"
          className="CocktailItemImage"
          alt="test image"
          style={{padding: "20px"}}
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
          {/* <p className="card-text">뭔가 들어갈 설명</p> */}
          <div className="favorite-container">
            <button className="favorite-btn" style={{padding: "0 10%"}}>
              <i className="fa-solid fa-heart" style={favoriteIconStyle}></i>
            </button>
            {/* <i class="fa-regular fa-heart" style="color: #e0e0e0;"></i> */}
            <div className="favorite-counter">{favoriteCount}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
