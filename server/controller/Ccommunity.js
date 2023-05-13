const Models = require("../models/");

//메인화면
exports.main = async (req, res) => {
  res.send("community page!!!!!");
};

//get 전체 게시글 넘버 조회
exports.read = async (req, res) => {
  try {
    const result = await Models.Community.findAll({});
    console.log("?????????read>>", result);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};

// post 게시글 작성
exports.create = async (req, res) => {
  try {
    const result = await Models.Community.create({
      title: req.body.title,
      writer: req.body.writer,
      content: req.body.content,
    });

    res.send(result);
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};

//patch 게시글 수정
exports.update = async (req, res) => {
  try {
    const result = await Models.Community.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          idx: req.body.text_idx,
        },
      },
    );
    console.log("** update result ", result);
    res.end();
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};

//get 게시글 삭제
exports.delete = async (req, res) => {
  try {
    const result = await Models.Community.destroy({
      where: {idx: req.body.id},
    });
    console.log("** delete result ", result); // 1
    res.end(); // 데이터 받을 필요없으니 끝 신호를 보내는 것
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};

//get 게시글 내용 반환
exports.showtext = async (req, res) => {
  try {
    const showt = await Models.Community.findOne({
      where: {idx: req.params.textidx},
    });
    console.log(showt);
    res.send(showt);
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};

exports.mytext = async (req, res) => {
  try {
    const myt = await Models.Community.findAll({
      attributes: ["idx"],
      where: {writer: req.body.writer},
    });
    res.send(myt);
  } catch (e) {
    console.log(e);
    res.send("0");
  }
};
