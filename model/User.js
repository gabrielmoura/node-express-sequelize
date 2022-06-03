const {Sequelize, DataTypes} = require('sequelize');
const conn = require('./Database');

const User = conn.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

User.sync({force: false});
module.exports = User;