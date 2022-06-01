const {Sequelize, DataTypes} = require('sequelize');
const conn = require('./Database');

const Category = conn.define('categories', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
Category.sync({force: false});
module.exports = Category;