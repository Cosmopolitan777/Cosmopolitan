const models = require("../models");

// (1) GET /rate - create a new rate
exports.getRates = async (req, res) => {
  const result = await models.Evaluation.findAll();
  res.send(result);
};

// (2) POST /rate - create a new rate

exports.createRate = async (req, res) => {
  const ratedData = await models.Evaluation.findAll();

  // 1. 로그인 여부 확인로직
  // const userSession = req.session.userid;
  // // console.log("main GET / userSession>> ", userSession);
  // if (userSession !== undefined) {
  //   const isLogin = true;
  //   const userid = userSession;
  //   // 2. 로그인 했을 경우 평가한 항목 중 동일한 항목(칵테일 아이디) 있는지 확인
  //   const ratedData = await models.Evaluation.findAll();
  //   if ()
  //   // 3. 없다면 추가
  //   // 4. 있고 평점 안동일하면 수정하시겠습니까? 창 뜨고 확인 버튼 클릭하면 수정하도록 함
  //   // 5. 동일하면 그대로 둠
  // const result = await models.Evaluation.create({
  //   user_id: req.body.user_id,
  //   cocktail_id: req.body.cocktail_id,
  //   rating: req.body.rating,
  // });

  //   res.send(true);
  // } else {
  //   res.send(false);
  // }
};
