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

// app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));
// app.use("/static", express.static(__dirname + "/static"));
// app.use("/uploads", express.static(`${__dirname}/uploads`));
// app.use(
//   session({
//     secret: process.env.SECRET_KEY, // 필수 옵션 ( 세션 암호화 할 때 쓰이는 키)
//     resave: false,
//     saveUninitialized: false, // 일반적으로 false 지종
//   }),
// );
// [ 세션 설정 ]

// const indexRouter = require("./routes");

// // app.use("/", indexRouter);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept",
//   );
//   next();
// });

// app.get("*", (req, res) => {
//   // res.send('404 Error! 잘못된 주소 형식입니다.');
//   res.render("404");
// });

const todoRouter = require("./routes/todo");
const cocktailRouter = require("./routes/cocktail");
app.use("/api", todoRouter);
app.use("/cocktail", cocktailRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
