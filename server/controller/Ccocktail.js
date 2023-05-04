const models = require("../models");
exports.main = (req, res) => {
  res.send("칵테일 페이지");
};
// (1)  GET /cocktaillist - show all cocktails
exports.readCocks = async (req, res) => {
  const result = await models.Cocktail.findAll();
  res.send(result);
};