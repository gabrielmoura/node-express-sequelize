var express = require('express');
var router = express.Router();
const Pergunta = require('./model/Pergunta');
const Resposta = require('./model/Resposta');

router.get('/about', function (req, res) {
    res.send('About birds');
});

router.get('/', function (req, res) {
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then((pergunta) => {
        res.render('index', {
            perguntas: pergunta
        });
    })

});
router.get('/pergunta/:id?', (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then((pergunta) => {
        if (pergunta != undefined) {

            Resposta.findAll({
                where: {pergunta_id: id},
                raw: true,
                order: [
                    ['id', 'DESC']
                ]
            }).then((respostas) => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });

        } else {
            res.redirect('/');
        }
    });

});
router.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

router.post('/salvaPergunta', (req, res) => {
    let description = req.body.description
    let title = req.body.title
    Pergunta.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect('/perguntar');
    });
});

router.post('/responder', (req, res) => {
    let body = req.body.body
    let pergunta_id = req.body.pergunta_id
    Resposta.create({
        body: body,
        pergunta_id: pergunta_id
    }).then(() => {
        res.redirect('/pergunta/' + pergunta_id);
    });
});
router.get('/get/:name?', function (req, res) {
    let name = req.params.name ?? 'Nulo'
    res.send('Nome: ' + name);
})


module.exports = router;

