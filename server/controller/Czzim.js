const {sequelize} = require("../models");
const models = require("../models");
const seq = require("sequelize");
const Op = seq.Op;

exports.indexzzim = async (req, res) => {
  if (!req.body.userid) {
    res.send("비정상적 접근! 로그인해 주세요.");
  } else {
    res.send(req.body.userid, req.body.cockid);
  }
};

exports.pluszzim = async (req, res) => {
  try {
    var newzzim = {
      user_id: req.body.user_id,
      cocktail_id: req.body.cocktail_id,
      mark: 1,
    };
    const duplecheck = await models.Zzim.count({
      where: {user_id: req.body.user_id, cocktail_id: req.body.cocktail_id},
    });
    console.log(duplecheck);
    if (duplecheck == 0) {
      const zzims = await models.Zzim.create(newzzim);
      res.send(true);
    } else {
      res.send("exist");
    }
  } catch (e) {
    res.send("error");
    console.log(e);
  }
};

exports.deletezzim = async (req, res) => {
  try {
    await models.Zzim.destroy({
      where: {user_id: req.body.user_id, cocktail_id: req.body.cocktail_id},
    });
    res.send(true);
  } catch (e) {
    res.send(false);
  }
};

exports.showzzim = async (req, res) => {
  try {
    const zzimlist = await models.Zzim.findAll({
      attributes: ["cocktail_id"],
      where: {user_id: req.session.name},
      raw: true,
    });
    const result = [];
    for (z of zzimlist) {
      result.push(z["cocktail_id"]);
    } // [ 3 ] cocktail_id 숫자만

    res.send(result);
  } catch (e) {
    res.send(false);
  }
};

exports.shownum = async (req, res) => {
  try {
    const numlist = await models.Zzim.findAll({
      attributes: ["user_id"],
      where: {cocktail_id: req.params.cockid},
    });
    res.send(numlist);
  } catch (e) {
    res.send("0");
  }
};
