var router = require('express').Router();

const CategoryController = require('../controller/admin/CategoryController');
const ArticleController = require('../controller/admin/ArticleController');
const adminAuth = require('../middleware/adminAuth');

/** Rotas de Categorias */
router.get('/category', adminAuth, CategoryController.index);

router.get('/category/create', adminAuth, CategoryController.create);
router.get('/category/edit/:id', adminAuth, CategoryController.edit);
router.get('/category/:slug', adminAuth, CategoryController.show);
router.post('/category/store', adminAuth, CategoryController.store);
router.post('/category/delete', adminAuth, CategoryController.delete);
router.post('/category/update', adminAuth, CategoryController.update);


/** Rotas de Artigos */
router.get('/article', adminAuth, ArticleController.index);
router.get('/article/create', adminAuth, ArticleController.create);
router.get('/article/edit/:id', adminAuth, ArticleController.edit);
router.get('/article/:slug', adminAuth, ArticleController.show);
router.post('/article/store', adminAuth, ArticleController.store);
router.post('/article/delete', adminAuth, ArticleController.delete);
router.post('/article/update', adminAuth, ArticleController.update);

module.exports = router;

