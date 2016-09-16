var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/start-meeting', function(req, res, next) {
  var response =  '{' 
 	+ '"success": "Success",' +
 	'"payload": "The meeting is starting"' +
'}';
  
  //socket goes here
  res.send(response);
});

module.exports = router;
