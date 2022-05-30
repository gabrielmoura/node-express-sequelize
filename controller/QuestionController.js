const Pergunta = require("../model/Pergunta");
const Resposta = require("../model/Resposta");
module.exports = {
    show(req, res) {
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
    },
    store(req, res) {
        let description = req.body.description
        let title = req.body.title
        Pergunta.create({
            title: title,
            description: description
        }).then(() => {
            res.redirect('/perguntar');
        });
    },
    index(req, res) {
        res.render('perguntar');
    }
}