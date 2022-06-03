const slugify = require("slugify");
Category = require('../../model/Category');

module.exports = {
    index(req, res) {
        Category.findAll().then((categories) => {
            res.render('admin/category/index', {categories});
        });
    },
    create(req, res) {
        res.render('admin/category/create');
    },
    show(req, res) {
        var slug = req.params.slug;

        Category.findOne({
            where: {slug: slug},
            include: [{model: Article}]
        }).then((category) => {
            res.render('admin/category/show', {category});
        });
    },
    store(req, res) {
        var title = req.body.title;
        if (title == undefined) {
            res.redirect('/admin/category/create');
        }
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/admin/category')
        });

    },
    edit(req, res) {
        var id = req.params.id;
        Category.findByPk(id)
            .then((category) => {
                res.render('admin/category/edit', {category});
            }).catch(() => {
            res.redirect('/admin/category')
        });
    },
    update(req, res) {
        var title = req.body.title;
        var id = req.body.id;
        Category.update({title: title}, {
            where: {id: id}
        }).then(() => {
            res.redirect('/admin/category')
        });
    },
    delete(req, res) {
        var id = req.body.id;

        Category.destroy({
            where: {id: id}
        }).then(() => {
            res.redirect('/admin/category');
        })

    }
}