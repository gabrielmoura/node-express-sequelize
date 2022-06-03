const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT??9000;

var cookieParser = require('cookie-parser');
var session = require('express-session');
const sessionStore=require('./sessionStore');

//  Define EJS como view
app.set('view engine', 'ejs');

//  Define arquivos estáticos
app.use(express.static('public'));

//  Define Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();
app.use(cookieParser());
app.use(session({
    secret:process.env.KEY,
    resave: false,
    name:'express',
    saveUninitialized: true,
    store: sessionStore,
    cookie:{
        maxAge:1000*30
    }
}));

const sequelize = require('./model/Database');

sequelize.authenticate()
    .then(() => {
        console.log('BD');
    }).catch((error) => {
    console.log(error);
});

//  Importa e Carrega Rotas em /
webRoutes = require('./routes/web');
adminRoutes = require('./routes/admin');

app.use('/', webRoutes);
app.use('/admin/', adminRoutes);

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(port, (error) => {
    console.log((new Date).toLocaleString('pt-BR'));
    if (error) {
        console.log(error);
    }
});