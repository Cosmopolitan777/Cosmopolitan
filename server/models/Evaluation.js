// // Mapping Rating Table
// module.exports = (sequelize, DataTypes) =>
//   sequelize.define(
//     "rating",
//     {
//       idx: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       cocktail_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       rating: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     },
//     {
//       timestamps: true, // 생성&수정일 기록
//       paranoid: true,
//     },
//   );
