// 예시 코드
const express = require("express");
const app = express();
// const session = require("express-session"); // 세션 설정
// const dotenv = require("dotenv"); // 키값 암호화
const cors = require("cors");
const PORT = 8080;

//요청한 곳의 포트번호가 다르더라도 허용
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const cocktailRouter = require("./routes/cocktail");
const evaluationRouter = require("./routes/evaluation");

app.use("/cocktail", cocktailRouter);
app.use("/evaluation", evaluationRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
