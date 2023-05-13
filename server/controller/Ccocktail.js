const { sequelize } = require("../models");
const models = require("../models");
const seq = require("sequelize");
const Op = seq.Op;

exports.main = (req, res) => {
  res.send("칵테일 페이지");
};
// (1)  GET /cocktaillist - show all cocktails
exports.readCocks = async (req, res) => {
  const result = await models.Cocktail.findAll();
  res.send(result);
};

// (2) GET /searchcock/:searchWord - show cocktail id
exports.searchCocks = async (req,res) =>{
    const result = await models.Cocktail.findAll({

        where:{
            name:{
                [Op.like]:"%"+req.params.searchWord+"%"
            }
        }
    })
    res.send(result);
}
// (3) GET /cockinfo/:cockId - show specific cocktail info
exports.infoCocks = async (req,res) =>{
    const result = await models.Cocktail.findAll({
        where:{
            cocktail_id:req.params.cockId
        }
    })
    res.send(result);
}
// (4) GET /cockpic/:cockID - show cocktail picture
exports.picCocks = async (req,res) =>{
    const result = await models.Cocktail.findOne({
        attributes:['imagelink'],
        where:{
            cocktail_id:req.params.cockId
        }
    })
    res.send(result.imagelink);
}