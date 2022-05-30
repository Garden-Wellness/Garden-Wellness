// require Sequelize and set equal to a variable
const Sequelize = require('sequelize');

// create a new Sequelize instance 
const db = new Sequelize('postgres://localhost:5432/garden_wellness');

// export db
module.exports = db;