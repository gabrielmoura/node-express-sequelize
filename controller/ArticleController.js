Article = require('../model/Article');

module.exports = {

    show(req, res) {
        var slug = req.params.slug;
        Article.findOne({
            where: {slug: slug},
        }).then((article) => {
            res.render('single', {article});
        });
    },
}