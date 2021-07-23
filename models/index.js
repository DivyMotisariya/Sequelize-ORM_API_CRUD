const { DB, HOST, USER, PASSWORD, dialect } = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize.Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
  logging: false,
});

const db = { sequelize, Sequelize };
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
db.tutorials = require('./tutorial.model')(sequelize)

module.exports = db;