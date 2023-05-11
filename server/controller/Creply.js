const { sequelize } = require("../models");
const models = require("../models");
const seq = require("sequelize");
const Op = seq.Op;


exports.writereply = async(req,res) =>{
    try{
        var newreply = {
        text_id : req.body.text_idx,
        writer : req.body.writer,
        secret: req.body.secret,
        content: req.body.content,
        }
        const replys = await models.Reply.create(newreply);
        res.send("1");
    } catch(e){
        res.send("0");
        console.log(e);
    }
};

exports.modifyreply = async(req,res) =>{
    try{
        const updates = await models.Reply.update(
            {comment: req.body.comment, secret:req.body.secret},
            {where: {idx:req.body.reply_idx}});
        res.send("1");
    } catch(e){
        res.send("0");
        console.log(e);
    }
};

exports.deletereply = async(req,res) =>{
    try{
        const deletes = await models.Reply.destroy({where:{idx:req.body.reply_idx}})
        res.send("1");
    }catch(e){
        res.send("0");
    }
    
};

exports.showreply = async(req,res) =>{
    try{
        const contents = await models.Reply.findOne({
            attributes:['content','secret'],
            where:{idx:req.params.replyIdx}
        });
        res.send(contents);
    }catch(e){
        res.send("0");
    }
}

exports.getreplyidx = async(req,res) =>{
    try{
        const replyidx = await models.Reply.findAll({
            attributes:['idx'],
            where:{text_id:req.params.textIdx}
        });
        res.send(replyidx);
    }catch(e){
        res.send("0");
    }
}