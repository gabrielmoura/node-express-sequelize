const {Sequelize, DataTypes} = require('sequelize');
const conn = require('./Database');
const Category = require('./Category');

const Article = conn.define('articles', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync({force: false});
module.exports = Article;