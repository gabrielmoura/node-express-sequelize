const {Sequelize, DataTypes} = require('sequelize');
const conn = require('./Database');

const Resposta = conn.define('respostas', {
    pergunta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
Resposta.sync({force: false})
module.exports = Resposta;