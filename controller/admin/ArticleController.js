const CategoryController = require("./CategoryController");
const slugify = require("slugify");
Article = require('../../model/Article');

module.exports = {
    index(req, res) {
        Article.findAll({
            include: [{model: Category}]
        }).then((articles) => {
            res.render('admin/article/index', {articles});
        });
    },
    edit(req, res) {
        var id = req.params.id;
        Article.findByPk(id)
            .then((article) => {
                res.render('admin/article/edit', {article});
            });
    },
    update(req, res) {
        var id = req.body.id;
        var title = req.body.title;
        var body = req.body.body;

        Article.update(
            {
                title: title,
                body: body,
                slug: slugify(title)
            },
            {where: {id: id}}).then(() => {
            res.redirect('/admin/article/' + slugify(title));
        });
    },
    delete(req, res) {
        var id = req.params.id;
        Article.destroy({
            where: {id: id}
        }).then(() => {
            res.redirect('/admin/article');
        })
    },
    create(req, res) {
        Category.findAll().then((categories) => {
            res.render('admin/article/create', {categories});
        });

    },
    store(req, res) {
        var title = req.body.title;
        var body = req.body.body;
        var category = req.body.category;

        Article.create({
            title: title,
            body: body,
            slug: slugify(title),
            categoryId: category
        }).then(() => {
            res.redirect('/admin/article');
        });
    },
    show(req, res) {
        var slug = req.params.slug;
        Article.findOne({
            where: {slug: slug},
        }).then((article) => {
            res.render('admin/article/show', {article});
        });
    },
}