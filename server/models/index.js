// 예시 코드
const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// TODO: model 연결
db.Todo = require("./Todo")(sequelize, Sequelize);

// Cocktail model 연결
db.Cocktail = require("./Cocktail")(sequelize,Sequelize);

// login model 연결
db.Model = require("./Model")(sequelize, Sequelize);

module.exports = db;
