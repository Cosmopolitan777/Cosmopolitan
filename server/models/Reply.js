const Reply = function (Sequelize,DataTypes) {
    const model = Sequelize.define(
    //params1: 모델(테이블) 이름 설정
    "reply",
    //params2: 컬럼 정의
    {
      idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      writer: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      secret:{
        type: DataTypes.INTEGER,
        allowNull: true,       
      },
      content:{
        type:DataTypes.TEXT,
        allowNull:true,
      },
      updatedate:{
        type:DataTypes.DATE,
        allowNULLL: true,
        defaultValue: DataTypes.NOW,
      },
    },

    // params3: 모델 옵션 정의
    {
      tableName: "reply", //실제 mysql 테이블 명
      freezeTableName: true, //테이블 명 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    }
    );
    return model;
};

module.exports = Reply;
