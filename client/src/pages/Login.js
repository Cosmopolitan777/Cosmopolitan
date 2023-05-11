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
      res =>
        console.log("res.data.hasInfo>>",res.data)
        // res.data.hasInfo && (document.location.href = "/"),
    );
  };
  const postKakao = async () => {
    await axios.post(`${API_BASE_URL}/auth/kakao`);
  };

  return (
    <div className="Login" style={{width: "20rem", color: "white"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userId">
          <Form.Label>ID</Form.Label>

          <Form.Control
            autoFocus
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            style={{fontFamily: "Jalnan"}}
            className="FormPassword"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button blocksize="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <br />
      </Form>

      <button onClick={postKakao}>카카오 로그인하기 </button>
    </div>
  );
}
