var router = require('express').Router();

const AnswersController = require('../controller/AnswersController')
const QuestionController = require('../controller/QuestionController')
const HomeController = require('../controller/HomeController');
const ArticleController = require('../controller/ArticleController');
const AuthController=require('../controller/AuthController')

/** Relativo ao Blog **/
router.get('/?:page?', HomeController.index);
router.get('/article/:slug', ArticleController.show);

router.get('/login', AuthController.login);
router.post('/login', AuthController.authenticate);


/** Relativo ao sistemma de Perguntas **/
router.get('/pergunta/:id?', QuestionController.show);
router.post('/salvaPergunta', QuestionController.store);
router.get('/perguntar', QuestionController.index);
router.post('/responder', AnswersController.store);

module.exports = router;

