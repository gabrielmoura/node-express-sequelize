const {Sequelize, DataTypes} = require('sequelize');
const conn = require('./Database');

const Pergunta = conn.define('perguntas', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
Pergunta.sync({force: false});
module.exports = Pergunta;