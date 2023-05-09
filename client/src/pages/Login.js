import React, {useState} from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";

export default function Login() {
  const [userId, setUserId] = useState("");

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return userId.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userId);
    console.log(password);

    let body = {
      userId: userId,
      password: password,
    };

    axios({
      method: "post",
      url: `${API_BASE_URL}/checkLogin`,
      data: {
        userId: userId,
        password: password,
      },
    }).then(res => console.log(res));
  };
  const postKakao = async () => {
    await axios.post(`${API_BASE_URL}/auth/kakao`);
  };
  const getNaver = async () => {
    await axios.get(`${API_BASE_URL}/auth/naver`);
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
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <br />
      </Form>

      <button onClick={postKakao}>카카오 로그인하기 </button>
      <button onClick={getNaver}>네이버 로그인하기 </button>
    </div>
  );
}
