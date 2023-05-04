const Cocktail = function (Sequelize,DataTypes) {
    const model = Sequelize.define(
    //params1: 모델(테이블) 이름 설정
    "cocktail",
    //params2: 컬럼 정의
    {
      cocktail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      api_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alcholic: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      glass: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      ingredient1: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient3: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient4: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient5: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient6: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient7: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient8: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient9: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient10: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient11: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient12: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient13: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient14: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ingredient15: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      measure1: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure2: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure3: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure4: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure5: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure6: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure7: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure8: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure9: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure10: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure11: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure12: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure13: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure14: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      measure15: {
        type:DataTypes.STRING(50),
        allowNULL: true,
      },
      tags: {
        type:DataTypes.TEXT,
        allowNULL: true,
      },
      videolink: {
        type:DataTypes.TEXT,
        allowNULL: true,
      },
      instruction: {
        type:DataTypes.TEXT,
        allowNULL: true,
      },
      updatedate:{
        type:DataTypes.DATE,
        allowNULLL: true,
        defaultValue: DataTypes.NOW,
      },
    },

    // params3: 모델 옵션 정의
    {
      tableName: "cocktail", //실제 mysql 테이블 명
      freezeTableName: true, //테이블 명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
    );
    return model;
};

module.exports = Cocktail;
