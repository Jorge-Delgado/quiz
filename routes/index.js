var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', controller.question);
router.get('/quizes/answer', controller.answer);
router.get('/author', controller.author);

module.exports = router;
