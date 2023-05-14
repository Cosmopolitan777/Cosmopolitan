const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pw: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      master: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      something: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      snsId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      snsPw: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      provider: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "user", // 실제 테이블 명
      freezeTableName: true, // 테이블명 고정 !
      timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
    },
  );
};

module.exports = User;
