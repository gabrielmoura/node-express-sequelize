const Pergunta = require("../model/Pergunta");
module.exports = {
    question(req, res) {
        Pergunta.findAll({
            raw: true, order: [
                ['id', 'DESC']
            ]
        }).then((pergunta) => {
            res.render('index', {
                perguntas: pergunta
            });
        })
    },
    index(req, res) {
        var page = req.params.page;
        var offset = 0;
        const limit = 4;
        if (isNaN(page) || page == 1) {
            offset = 0;
        } else {
            offset = parseInt(page) * limit;
        }
        Article.findAndCountAll({
            limit: limit,
            offset: offset
        }).then(articles => {
            res.json(articles);
        });
    }
}