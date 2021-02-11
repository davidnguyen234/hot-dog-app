var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


//SIGNUP ROUTE
router.post('/signup', (req, res, next) => {
  //functionality to signup to the app goes here
});

//SIGNIN ROUTE
router.post('/signin', function (req, res, next) {
  //functionalityh to signin to the app goes here
});

module.exports = router;
