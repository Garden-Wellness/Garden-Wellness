const Sequelize = require("sequelize");
const db = require("../db/db");

module.exports = db.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email_address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Please enter a valid email address",
      },
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
});
