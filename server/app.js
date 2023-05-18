// 예시 코드
const express = require("express");
const app = express();
const session = require("express-session"); // 세션 설정
const dotenv = require("dotenv"); // 키값 암호화
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = 8080;

//요청한 곳의 포트번호가 다르더라도 허용
app.use(
  cors({
    origin: "http://localhost:3000", // server의 url이 아닌, 요청하는 client의 url
    credentials: true,
  }),
);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRouter = require("./routes");
const cocktailRouter = require("./routes/cocktail");
const evaluationRouter = require("./routes/evaluation");
const recommendRouter = require("./routes/recommend");
const zzimRouter = require("./routes/zzim");
const replyRouter = require("./routes/reply");
const communityRouter = require("./routes/community");


app.use(
  session({
    // secret: process.env.SECRET_KEY, // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
    secret: "testtesttesttest", // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", indexRouter);
app.use("/cocktail", cocktailRouter);
app.use("/evaluation", evaluationRouter);
app.use("/recommend", recommendRouter);
app.use("/zzim",zzimRouter);
app.use("/reply",replyRouter);
app.use("/community", communityRouter);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
