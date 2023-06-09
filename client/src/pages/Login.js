import "../styles/Login.scss";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import "../styles/Login.scss";

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return userId.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userId);
    // console.log(password);
    // console.log("!!!!!!!!!!!!!!!!!!!!")
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/checkLogin`,
      data: {
        userId: userId,
        password: password,
      },
    }).then(
      // res => console.log("res.data.hasInfo>>", res.data),
      res => {
        res.data.hasInfo
          ? (document.location.href = "/")
          : alert("로그인에 실패했습니다");
      },
    );
  };

  const kakaoHandleSubmit = event => {
    event.preventDefault();
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    console.log("*** REST_API_KEY", REST_API_KEY);
    const REDIRECT_URI = process.env.REACT_APP_URL;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;

    // console.log(userId);
    // console.log(password);
    const userid = event.target.getAttribute("data-id");
    const Password = event.target.getAttribute("data-pw");
    // const userid = window.localStorage.getItem("userid");
    // const Password = window.localStorage.getItem("pw");
    console.log("i want ");
    console.log(userid);
    console.log(password);
    console.log("####################", Password);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/checkKakaoLogin`,
      data: {
        userId: userid,
        password: Password,
      },
    })
      .then(response => {
        if (response.data.hasInfo) {
          // navigate("/", {replace: true});
          document.location.href = "/";
        } else {
          alert("로그인에 실패했습니다.");
        }
      })
      .catch(error => {
        console.log(error);
        alert("서버와의 통신에 실패했습니다.");
      });
  };
  const loginHandler = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    console.log("*** REST_API_KEY", REST_API_KEY);
    const REDIRECT_URI = process.env.REACT_APP_URL;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  return (
    // <div className="LoginBox">
    <div
      className="Login"
      style={{width: "500px", color: "black", backgroundColor: "white"}}
    >
      <h3>로그인</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userId">
          {/* <div>이메일</div> */}

          <Form.Control
            autoFocus
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            placeholder="ID"
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password" style={{margin: "20px 0"}}>
          {/* <Form.Label>Password</Form.Label> */}

          <Form.Control
            style={{fontFamily: "Jalnan"}}
            className="FormPassword"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
        </Form.Group>

        <Button
          blocksize="lg"
          type="submit"
          disabled={!validateForm()}
          style={{width: "250px", margin: "10px"}}
        >
          Login
        </Button>

        <br />

        {/* <button
          onClick={kakaoHandleSubmit}
          style={{
            width: "185px !important",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <img
            alt="kakao"
            src="img/kakao_login.png"
            style={{width: "200px", height: "40px"}}
          />
        </button> */}

        <br />
      </Form>
      <button
        data-id={"자영"}
        data-pw={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODM5NjA5Njh9.4-Li0MTMuA6EebEYEYtlP2zYU2cW7jzgRvskg2jk7iE"
        }
        data-email={"baby2783@naver.com"}
        onClick={kakaoHandleSubmit}
        style={{
          width: "185px !important",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <img
          alt="kakao"
          src="img/kakao_login.png"
          style={{width: "200px", height: "40px"}}
        />
      </button>
      {/* </div> */}
    </div>
  );
}
