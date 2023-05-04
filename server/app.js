// 예시 코드
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

//요청한 곳의 포트번호가 다르더라도 허용
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require("./routes/todo");
const cocktailRouter = require("./routes/cocktail");
app.use("/api", todoRouter);
app.use("/cocktail",cocktailRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
