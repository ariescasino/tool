const sequelize = require("../databases/mysql");
// khai báo các models cần khởi tạo khi init server vào đây và gọi chúng ra để khởi tạo model khi init server
const { UserModel } = require("./User/User");
const { BetHistoryModel } = require("./Bet/BetHistory");

// BetHistoryModel chứa nhiều bản ghi có key xác định là field uid
BetHistoryModel.belongsTo(UserModel, {
  as: "userInfo",
  foreignKey: "uid"
});

// UserModel chứa key xác định bản ghi là field id
UserModel.hasMany(BetHistoryModel, {
  as: "BetHistory",
  foreignKey: "id"
});

const Initialize = sequelize.sync({ alter: true, logging: false });

module.exports = Initialize;
