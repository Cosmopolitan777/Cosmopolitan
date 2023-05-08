// models 변수 값 = models/index.ejs.js 에서 export 한 db 객체
const models = require("../models/");
console.log("models", models);


exports.getVisitors = async (req, res) => {


  const result = await models.Visitor.findAll();
  console.log("findAll", result);
  res.render("visitor", { data: result });
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {

  //[after] using sequelize
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("**** postVisitor result", result);
  res.send(result);
};

// exports.deleteVisitor = async (req, res) => {
//   console.log("****************** deleteVisitor ", req.body);
//
//   // [after]
//   //
//   const result = await models.Visitor.destroy({
//     where: { id: req.body.id },
//   });
//   console.log("* deleteVisitor result : ", result); // 1
//   res.end(); // 데이터 받읊필요없으니 끝 신호를 보내는 것
// };

// exports.getVisitor = async (req, res) => {
//
//   // [after] sequelize async/await
//   const result = await models.Visitor.findOne({
//     where: { id: req.query.id },
//   });
//   console.log("** getVisitor findOne >> ", result);
//   res.send(result);
// };

exports.patchVisitor = async (req, res) => {
  const result = await models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log("***patchVisitor Update() result : ", result);
  res.end();
};
