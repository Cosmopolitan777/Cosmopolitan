import "../styles/Login.scss";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";
import "../styles/Login.scss";

export default function Login() {
  const [userId, setUserId] = useState("");

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return userId.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(userId);
    // console.log(password);
    axios({
      method: "post",
      url: `${API_BASE_URL}/checkLogin`,
      data: {
        userId: userId,
        password: password,
      },
    }).then(
      // res => console.log("res.data.hasInfo>>", res.data),
      res => res.data.hasInfo && (document.location.href = "/"),
    );
  };
  const postKakao = async () => {
    await axios.post(`${API_BASE_URL}/auth/kakao`);
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

        <button
          onClick={postKakao}
          style={{width: "185px", outlineStyle: "none"}}
        >
          <img alt="kakao" src="img/kakao_login.png" />
        </button>

        <Button
          blocksize="lg"
          type="submit"
          disabled={!validateForm()}
          style={{width: "250px", margin: "10px"}}
        >
          Login
        </Button>
        <br />
      </Form>
      {/* </div> */}
    </div>
  );
}
