import axios from "axios";
import {API_BASE_URL} from "../app-config";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Redirection = () => {
  // const code = window.location.search;
  const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios.post("http://localhost:8080/kakaoLogin", code).then(r => {
      // console.log("is?");
      // console.log(r.data);

      // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
      window.localStorage.setItem("name", r.data.snsId); // 일단 이름만 저장했다.
      window.localStorage.setItem("userid", r.data.userid);

      navigate("/");
    });
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
