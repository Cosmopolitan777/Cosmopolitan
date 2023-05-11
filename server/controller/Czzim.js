const { sequelize } = require("../models");
const models = require("../models");
const seq = require("sequelize");
const Op = seq.Op;

exports.indexzzim = async (req, res) => {
    if(!req.body.userid){
        res.send("비정상적 접근! 로그인해 주세요.");
    }
    else{
        res.send(req.body.userid,req.body.cockid);
    }
  };

exports.pluszzim = async(req,res) =>{
    try{
        var newzzim = {
        user_id : req.body.userid,
        cocktail_id : req.body.cockid,
        mark: 1
        }
        const duplecheck = await models.Zzim.count({
            where:{user_id:req.body.userid,cocktail_id: req.body.cockid}
        });
        console.log(duplecheck)
        if(duplecheck == 0){
            const zzims = await models.Zzim.create(newzzim);
            res.send("1");
        }else{
            res.send("0");
        }
    
    } catch(e){
        res.send("0");
        console.log(e);
    }
    
};

exports.deletezzim = async(req,res) =>{
    try{
        await models.Zzim.destroy({where: {user_id:req.body.userid , cocktail_id:req.body.cockid}});
        res.send("1");
    }catch(e){
        res.send("0");
    }
};

exports.showzzim = async(req,res) =>{
    try{
        const zzimlist = await models.Zzim.findAll({
            attributes:['cocktail_id'],
            where:{user_id:req.body.userid}
        });
        res.send(zzimlist);
    }catch(e){
        res.send("0");
    }
    
};

exports.shownum = async(req,res) =>{
    try{
        const numlist = await models.Zzim.findAll({
            attributes:['user_id'],
            where:{cocktail_id: req.params.cockid}
        });
        res.send(numlist);
    }catch(e){
        res.send("0");
    }
};

