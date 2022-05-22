const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9000;


//  Define EJS como view
app.set('view engine', 'ejs');

//  Define arquivos estáticos
app.use(express.static('public'));

//  Define Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('dotenv').config();

perguntaodel=require('./model/Pergunta');
const sequelize = require('./model/Database');
sequelize.authenticate()
    .then(() => {
        console.log('BD');
    }).catch((error) => {
    console.log(error);
});

//  Importa e Carrega Rotas em /
routers = require('./route');
app.use('/', routers);

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