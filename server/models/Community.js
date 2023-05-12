const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Model = (Sequelize, DataTypes) => {
  return Sequelize.define(
      "community",
      {
        idx: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        writer: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        updatedate:{
          type:DataTypes.DATE,
          allowNULLL: true,
          defaultValue: DataTypes.NOW,
        }
      },
      {
        tableName: "community", // 실제 테이블 명
        freezeTableName: true, // 테이블명 고정 !
        timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
      }
  );
};

module.exports = Model;
