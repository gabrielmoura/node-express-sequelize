var router = require('express').Router();

const AnswersController = require('./controller/AnswersController')
const QuestionController = require('./controller/QuestionController')
const HomeController = require('./controller/HomeController');

router.get('/', HomeController.index);
router.get('/pergunta/:id?', QuestionController.show);
router.post('/salvaPergunta', QuestionController.store);
router.get('/perguntar', QuestionController.index);
router.post('/responder', AnswersController.store);

module.exports = router;

