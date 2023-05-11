const Zzim = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
      "zzim",
      {
        idx: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        cocktail_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        mark: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
      },
      {
        tableName: "zzim", //실제 mysql 테이블 명
        freezeTableName: true, //테이블 명 고정
        timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
      },
    );
    return model;
  };
  module.exports = Zzim;