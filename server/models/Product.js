const Sequelize = require("sequelize");
const db = require("../db/db");

module.exports = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  image_url: {
    type: Sequelize.STRING,
    defaultValue: "../../public/images/coming_soon.jpg",
  },
  inventory_quantity: Sequelize.INTEGER,
});
