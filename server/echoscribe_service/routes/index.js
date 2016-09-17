var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var io = req.app.get('socketio');
  
  io.emit('welcome', {
    msg: "test from route.",
    timestamp: new Date()
  });
  
  io.emit('user-connected', {
    name: "test from base route.",
    ts: new Date()
  });

  res.render('index', { title: 'EchoScribe' });
});

router.get('/start-meeting/:room', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  var response =  {
   	"success": "Success",
   	"payload": "The meeting is starting in room " + req.params.room
  };
  
  var io = req.app.get('socketio');
  io.emit('welcome', {
    msg: "Starting Meeting in Room " + req.params.room,
    timestamp: new Date()
  });
  
  io.emit('user-connected', {
    name: "test from start meeting.",
    ts: new Date()
  });
    
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

router.get('/meeting-list/', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  var response =  {
   	"success": "Success",
   	"payload": ['Tim Johnson', 'Joe Guerra', 'Derek Piccola', 'Babak Keyvani', 'Bob Ross']
  };
  
  //socket goes here
  res.json(response);
});

module.exports = router;
