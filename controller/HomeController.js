const Pergunta = require("../model/Pergunta");
module.exports = {
    index(req, res) {
        Pergunta.findAll({
            raw: true, order: [
                ['id', 'DESC']
            ]
        }).then((pergunta) => {
            res.render('index', {
                perguntas: pergunta
            });
        })
    }
}