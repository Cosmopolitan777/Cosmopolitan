const Models = require("../models/");

//메인화면
exports.main = async (req, res) => {
  res.send("community page!!!!!");
};

//get 게시글 조회
exports.read = async (req, res) => {
  const result = await Models.Community.findAll();
  console.log("** findAll ", result);
  res.render("community", {data: result});
}

// post 게시글 작성
exports.create = async (req, res) => {
  const result = await Models.Community.create({
    idx: req.body.idx,
    title: req.body.title,
    writer: req.body.id,
    content: req.body.content,
    updatedate: req.body.updatedate,
  });
  console.log("** result ", result);
  res.send("result");
}

//patch 게시글 수정
exports.update= async (req, res) => {
  const result = await Models.Community.update({
    idx: req.body.idx,
    title: req.body.title,
    writer: req.body.id,
    content: req.body.content,
    updatedate: req.body.updatedate,
  },
      {
        where: {
          id: req.body.id,
        },
      });
  console.log("** update result ", result);
  res.end();
}

//get 게시글 삭제
exports.delete= async (req, res) => {
  const result = await Models.Community.destroy({
    where: { id: req.body.id },
  });
  console.log("** delete result ", result); // 1
  res.end(); // 데이터 받읊필요없으니 끝 신호를 보내는 것
};
