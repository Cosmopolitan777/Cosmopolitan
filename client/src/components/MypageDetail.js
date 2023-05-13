import "../styles/Mypage.scss";
// import CocktailItem from "./CocktailItem";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";

//(1) 찜목록
export const LikeList = ({zzimCocktailInfos}) => {
  console.log("zzimCocktailInfos..", zzimCocktailInfos);
  return (
    <div
      style={{
        backgroundColor: "rgb(18,18,18)",
        height: "100%",
        width: "100vh",
        padding: "0 10%",
        margin: "0 20%",
        borderRadius: "6px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <h3 style={{margin: "0 3%"}}>찜 목록</h3>

      <div className="container">
        <div className="row row-cols-4" style={{padding: "3%"}}>
          {zzimCocktailInfos.map(item => (
            <div className="col mt-3" style={{padding: "0 0 10px 0"}}>
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

//(2) 추천목록
export const Recommendation = ({recommends}) => {
  // console.log("Recommendation session", Recommendation);

  return (
    <div
      // className="Recommendation"
      style={{
        backgroundColor: "rgb(18,18,18)",
        height: "100%",
        width: "100vh",
        padding: "0 10%",
        margin: "0 20%",
        borderRadius: "6px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <h3 style={{margin: "0 3%"}}>
        {/* <FontAwesomeIcon icon={faHandHoldingHeart} className="Icon Holding" /> */}
        추천목록
      </h3>
      <div className="row row-cols-4" style={{padding: "3%"}}>
        {recommends ? (
          recommends.map(item => (
            <div className="col mt-3">
              <LikeListItem key={item.cocktail_id} item={item} />
            </div>
          ))
        ) : (
          <h5 style={{width: "100%", color: "#fa942e"}}>
            최소 한 개의 별점이 필요해요 🥲
          </h5>
        )}
      </div>
    </div>
  );
};

//(3) 회원정보 수정
export function InformationModify() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const validateForm = () => {
    return userId.length > 0 && userPw.length > 0 && userName.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userId);
    console.log(userPw);
    console.log(userName);

    axios({
      method: "post",
      url: `${API_BASE_URL}/result`,
      data: {
        userId: userId,
        userPw: userPw,
        userName: userName,
      },
    }).then(res => console.log(res));
  };

  return (
    <div
      // className="Login"
      style={{
        backgroundColor: "rgb(18, 18, 18)",
        height: "800px",
        width: "60vw",
        padding: "20%",
        // margin: "0 5%",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        color: "#FCFCFC",
      }}
    >
      <div
        style={{
          width: "20rem",

          boxShadow: "none",
          outline: "none",
        }}
      >
        <h3 style={{margin: "0 0 50px 0"}}>개인정보수정</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="id" style={{margin: "15px 0"}}>
            <Form.Label>이메일</Form.Label>

            <Form.Control
              autoFocus
              type="text"
              value={userId}
              onChange={e => setUserId(e.target.value)}
              // style={{backgroundColor: "#212529"}}
              placeholder="email"
            />
          </Form.Group>

          <Form.Group size="lg" controlId="name" style={{margin: "15px 0"}}>
            <Form.Label>닉네임</Form.Label>
            {/* <div>닉네임</div> */}
            <Form.Control
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              // style={{backgroundColor: "#212529"}}
              placeholder="name"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password" style={{margin: "15px 0"}}>
            <Form.Label>비밀번호</Form.Label>

            <Form.Control
              type="password"
              value={userPw}
              onChange={e => setUserPw(e.target.value)}
              // style={{backgroundColor: "#212529"}}

              placeholder="passwaord"
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px 0",
            }}
          >
            <Button
              blocksize="xx-lg"
              type="submit"
              disabled={!validateForm()}
              style={{width: "350px"}}
            >
              수정
            </Button>
          </div>
          <br />
        </Form>
      </div>
    </div>
  );
}

// LikeList에 들어가는 하위 컴포넌트

const LikeListItem = ({item}) => {
  return (
    <Link to={"/cocktails/" + item.cocktail_id}>
      <div className="CocktailItemCard" style={{width: "20rem"}}>
        <img
          src={item.imagelink}
          className="CocktailItemImage"
          alt="test image"
          style={{padding: "20px"}}
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
        </div>
      </div>
    </Link>
  );
};
