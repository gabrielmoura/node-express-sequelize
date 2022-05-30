const Resposta = require("../model/Resposta");
module.exports = {
    store(req, res) {
        let body = req.body.body
        let pergunta_id = req.body.pergunta_id
        Resposta.create({
            body: body,
            pergunta_id: pergunta_id
        }).then(() => {
            res.redirect('/pergunta/' + pergunta_id);
        });
    }
}