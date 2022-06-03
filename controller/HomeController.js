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
        if (page == undefined) {
            page = 1;
        }
        if (isNaN(page) || page == 1) {
            offset = 0;
        } else {
            offset = (parseInt(page) * limit) - 1;
        }
        Article.findAndCountAll({
            limit: limit,
            offset: offset
        }).then(articles => {
            var next = true;
            if (offset + limit >= articles.count) {
                next = false;
            }

            res.render('index', {
                next: next,
                page: page,
                articles: articles.rows
            });
        });
    }
}