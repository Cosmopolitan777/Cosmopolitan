import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";
import "../styles/Join.scss";

export default function Join() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const validateForm = () => {
    return userId.length > 0 && userPw.length > 0 && userName.length > 0;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(userId);
    console.log(userPw);
    console.log(userName);

    await axios({
      method: "post",
      url: `${API_BASE_URL}/check_userid`,
      data: {
        userId: userId,
      },
    }).then(async res => {
      if (res.data.hasId) {
        return;
      }
      await axios({
        method: "post",
        url: `${API_BASE_URL}/result`,
        data: {
          userId: userId,
          userPw: userPw,
          userName: userName,
        },
      }).then(res => {
        console.log(res.data);
      });
    });
  };

  return (
    <div className="Jogin" style={{width: "500px", color: "white"}}>
      <Form onSubmit={handleSubmit}>
        <h3>회원가입</h3>
        <Form.Group size="lg" controlId="id" style={{margin: "20px 0"}}>
          {/* <Form.Label>ID</Form.Label> */}

          <Form.Control
            autoFocus
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            placeholder="ID"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name" style={{margin: "20px 0"}}>
          {/* <Form.Label>Nickname</Form.Label> */}

          <Form.Control
            style={{fontFamily: "Jalnan"}}
            type="password"
            value={userPw}
            onChange={e => setUserPw(e.target.value)}
            placeholder="password"
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password" style={{margin: "20px 0"}}>
          {/* <Form.Label>Password</Form.Label> */}

          <Form.Control
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder="name"
          />
        </Form.Group>

        <Button
          blocksize="lg"
          type="submit"
          disabled={!validateForm()}
          style={{width: "250px", margin: "10px"}}
        >
          Join
        </Button>
        <br />
      </Form>
    </div>
  );
}
