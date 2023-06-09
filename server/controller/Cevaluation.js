const models = require("../models");

// (1) GET /rate - create a new rate
exports.getRates = async (req, res) => {
  const result = await models.Evaluation.findAll();
  res.send(result);
};

// (2) POST /rate - create a new rate

// 게스트 평점 반영 X
exports.createRate = async (req, res) => {
  // 1. 로그인 여부 확인 로직
  if (req.session.name) {
    const result = await models.Evaluation.findAll({
      where: {
        user_id: req.body.user_id,
      },
    });
    //2.동일 아이디 동일 칵테일 값 조회

    for (let r of result) {
      if (r.dataValues.cocktail_id === req.body.cocktail_id) {
        var duplicationRateObj = r.dataValues;
      }
    }
    console.log("duplicationRate>>>>", duplicationRateObj);

    //3. 만약 중복 칵테일 평점 값이 [ 있다면 수정 / 만약 없다면 생성 ]
    if (duplicationRateObj !== undefined) {
      const response = await models.Evaluation.update(
        {
          rating: req.body.rating,
        },
        {
          where: {
            user_id: req.body.user_id,
          },
        },
      );
      console.log("중복 0 >>>>", response);
      res.send(true);
    } else {
      const response = await models.Evaluation.create({
        user_id: req.body.user_id,
        cocktail_id: req.body.cocktail_id,
        rating: req.body.rating,
      });
      console.log("중복 X >>>>", response);
      res.send(true);
    }
  } else {
    //게스트
    res.send(false);
  }
};

// (3) POST /evaluation/userrate - 해당 유저 별점 목록 반환
exports.postUserRate = async (req, res) => {
  try {
    const starList = await models.Evaluation.findAll({
      attributes: ["cocktail_id", "rating"],
      where: {user_id: req.session.name},
      raw: true,
    });
    console.log("starList>>", starList);
    // starList>> [ { cocktail_id: 2, rating: 3 }, { cocktail_id: 4, rating: 4 } ]

    res.send(starList);
  } catch (e) {
    res.send(false);
  }
};

//게스트
// (2) POST /rate - create a new rate

// exports.createRate = async (req, res) => {
//   console.log(req.body); //{ user_id: 111, cocktail_id: 7, rating: 5 }
//   // 1. 로그인 여부 확인 로직 [0아니면 로그인된 상태 /0이면 게스트]
//   console.log("req.body.user_id!!!!", req.body.user_id);
//   console.log("typeof req.body.user_id!!!!", typeof req.body.user_id);
//   // console.log("typeof req.body.user_id!!!!", req.body.user_id);
//   if (req.body.user_id !== 0) {
//     const result = await models.Evaluation.findAll({
//       where: {
//         user_id: req.body.user_id,
//         // user_id: 2,
//       },
//     });
//     //2.동일 아이디 동일 칵테일 값 조회

//     for (r of result) {
//       if (r.dataValues.cocktail_id === req.body.cocktail_id) {
//         var duplicationRateObj = r.dataValues;
//       }
//     }
//     console.log("duplicationRate>>>>", duplicationRateObj);

//     //3. 만약 중복 칵테일 평점 값이 [ 있다면 수정 / 만약 없다면 생성 ]
//     if (duplicationRateObj !== undefined) {
//       const response = await models.Evaluation.update(
//         {
//           rating: req.body.rating,
//         },
//         {
//           where: {
//             user_id: req.body.user_id,
//           },
//         },
//       );
//       console.log("중복 0 >>>>", response);
//       res.send(true);
//     } else {
//       const response = await models.Evaluation.create({
//         user_id: req.body.user_id,
//         cocktail_id: req.body.cocktail_id,
//         rating: req.body.rating,
//       });
//       console.log("중복 X >>>>", response);
//       res.send(true);
//     }
//   } else {
//     const response = await models.Evaluation.create({
//       user_id: req.body.user_id,
//       cocktail_id: req.body.cocktail_id,
//       rating: req.body.rating,
//     });
//     console.log("게스트 중복 X >>>>", response);
//     res.send(true);
//   }
// };
