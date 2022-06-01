var router = require('express').Router();

const CategoryController = require('../controller/admin/CategoryController')
const ArticleController = require('../controller/admin/ArticleController')

/** Rotas de Categorias */
router.get('/category', CategoryController.index);
router.get('/category/:slug', CategoryController.show);
router.get('/category/create', CategoryController.create);
router.get('/category/edit/:id', CategoryController.edit);
router.post('/category/store', CategoryController.store);
router.post('/category/delete', CategoryController.delete);
router.post('/category/update', CategoryController.update);


/** Rotas de Artigos */
router.get('/article', ArticleController.index);
router.get('/article/:slug', ArticleController.show);
router.get('/article/create', ArticleController.create);
router.get('/article/edit/:id', ArticleController.edit);
router.post('/article/store', ArticleController.store);
router.post('/article/delete', ArticleController.delete);
router.post('/article/update', ArticleController.update);

module.exports = router;

