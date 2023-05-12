const models = require("../models");

// (1) GET /recommend - 추천 목록 반환
exports.getRecommend = async (req, res) => {
  console.log("!!!!!!!!!!!!getRecommend");
  console.log("getRecommend req.session.name>>", req.session.name);
  if (!req.session.name) {
    return;
  }

  console.log("getRecommend req.session.name>>", req.session.name);
  const {CF, evaluation} = require("nodeml");
  const data = await models.Evaluation.findAll({
    raw: true,
  });

  // split data as train & test
  let train = [],
    test = [];
  for (let i = 0; i < data.length; i++) {
    // if (Math.random() > 0.8) test.push(data[i]); //랜덤이용방법
    //특정 사용자 아이디만 test[]에 담음
    // if (data[i].user_id === req.sessionID) test.push(data[i]);
    if (data[i].user_id === Number(req.session.name))
      test.push(data[i]); //수정 요함
    else train.push(data[i]);
  }

  if (test.length === 0) {
    res.send(false);
    return;
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

  // recommend for 1 users, each 10 movie
  let result = cf.recommendToUsers(users, 10)[req.session.name]; //추천 목록 10개 객체 반환
  //10개 반환  [{ itemId: '2', play: 9 } , {}, ...,{}]

  // evaluate by ndcg
  let ndcg = evaluation.ndcg(gtr, result);

  // res.send(result);
  // console.log("result>>", result);
  // console.log(" result.values>>", result.values());
  const recommends = [];
  for (r of result) {
    // if (r.itemId=== Number(req.session.name))
    const response = await models.Cocktail.findOne({
      where: {
        cocktail_id: r.itemId,
      },
      raw: true,
    });
    recommends.push(response); //수정 요함
  }

  res.send(recommends);
  console.log("추천목록 반환 성공");
};
