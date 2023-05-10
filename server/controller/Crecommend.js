const models = require("../models");

// (1) GET /recommend - 추천 목록 반환
exports.getRecommend = async (req, res) => {
  const {CF, evaluation} = require("nodeml");
  const data = await models.Evaluation.findAll();

  // split data as train & test
  let train = [],
    test = [];
  for (let i = 0; i < data.length; i++) {
    // if (Math.random() > 0.8) test.push(data[i]); //랜덤이용
    //특정 사용자 아이디만 test[]에 담음
    // if (data[i].user_id === req.sessionID) test.push(data[i]);
    //주의) req.sessionID와 rating의 userId 연관성 어떻게 확인할지
    if (data[i].user_id === 1) test.push(data[i]); //수정 요함
    else train.push(data[i]);
  }

  // set data
  const cf = new CF();

  cf.maxRelatedItem = 50;
  cf.maxRelatedUser = 50;

  cf.train(train, "user_id", "cocktail_id", "rating");

  // select 100 data for recommendation
  let gt = cf.gt(test, "user_id", "cocktail_id", "rating");
  let gtr = {};
  let users = [];
  for (let user in gt) {
    gtr[user] = gt[user];
    users.push(user);
    // if (users.length === 100) break;
  }
  console.log("gt>>", gt);
  // recommend for 1 users, each 10 movie
  let result = cf.recommendToUsers(users, 10);

  // evaluate by ndcg
  let ndcg = evaluation.ndcg(gtr, result);

  res.send(result); //추천 목록 10개
  // result
  //   "1": [
  //     {
  //         "itemId": "62", //cocktail_id
  //         "play": 5 //item rank
  //     },
};
