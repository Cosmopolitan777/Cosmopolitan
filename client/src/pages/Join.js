import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";

export default function Join() {
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
    <div className="Jogin" style={{width: "20rem", color: "white"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="id">
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
            type="password"
            value={userPw}
            onChange={e => setUserPw(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="name">
          <Form.Label>Nickname</Form.Label>

          <Form.Control
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </Form.Group>

        <Button blocksize="lg" type="submit" disabled={!validateForm()}>
          Join
        </Button>
        <br />
      </Form>
    </div>
  );
}
