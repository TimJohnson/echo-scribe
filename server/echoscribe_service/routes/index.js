var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/start-meeting/:room', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  var response =  {
   	"success": "Success",
   	"payload": "The meeting is starting in room " + req.params.room
  };
  
  //socket goes here
  res.json(response);
});

router.get('/end-meeting/', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  var response =  {
   	"success": "Success",
   	"payload": "The meeting has ended, thank you for using echoscribe"
  };
  
  //socket goes here
  res.json(response);
});

module.exports = router;
