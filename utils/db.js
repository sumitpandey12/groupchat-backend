const Sequelize = require("sequelize");

const sequelize = new Sequelize("groupchat", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
