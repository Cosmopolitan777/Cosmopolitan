// // 예시 코드
const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
// const mysql = require("mysql");
// const bcrypt = require("bcrypt");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Cocktail model 연결
db.Cocktail = require("./Cocktail")(sequelize, Sequelize);

// // login model 연결
db.User = require("./User")(sequelize, Sequelize);

//추천 model 연결
db.Evaluation = require("./Evaluation")(sequelize, Sequelize);

//찜 model 연결
db.Zzim = require("./Zzim")(sequelize, Sequelize);

//댓글 model 연결
db.Reply = require("./Reply")(sequelize, Sequelize);
module.exports = db;
