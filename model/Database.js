const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.SEQUELIZE_URL) // Example for postgres
module.exports = sequelize;