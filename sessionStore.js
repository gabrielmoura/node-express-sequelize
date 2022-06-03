conn = require('./model/Database');
var session = require('express-session');

var SequelizeStore = require('connect-session-sequelize')(session.Store);

var sessionStore = new SequelizeStore({
    db: conn,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000
});
sessionStore.sync()
module.exports = sessionStore;