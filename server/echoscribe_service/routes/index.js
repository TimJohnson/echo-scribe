var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var io = req.app.get('socketio');
  
  res.render('index', { title: 'EchoScribe' });
});

router.get('/start-meeting/:room', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  var response =  {
   	"success": "Success",
   	"payload": "The meeting is starting in room " + req.params.room
  };
  
  var io = req.app.get('socketio');
  
  io.emit('start-meeting', {    
    msg: "start-meeting",
    timestamp: new Date(),
    payload: {
      roomName: req.params.room
    }
  });
  res.json(response);
});

router.get('/end-meeting/', function(req, res, next) {
  var response =  {
   	"success": "Success",
   	"payload": "The meeting has ended, thank you for using echoscribe"
  };
  
  var io = req.app.get('socketio');
  
  io.emit('end-meeting', {    
    msg: "end-meeting",
    timestamp: new Date(),
    payload: {
      
    }
  });
  res.json(response);
});

router.get('/meeting-list/', function(req, res, next) {
  var response =  {
   	"success": "Success",
   	"payload": ['Tim Johnson', 'Joe Guerra', 'Derek Piccola', 'Babak Keyvani', 'Bob Ross']
  };
  
  var io = req.app.get('socketio');
  
  io.emit('meeting-list', {    
    msg: "meeting-list",
    timestamp: new Date(),
    payload: {
      
    }
  });
  res.json(response);
});

router.get('/new-room/', function(req, res, next) {

  var io = req.app.get('socketio');
  
  io.emit('new-room', {    
    msg: "new-room",
    timestamp: new Date(),
    payload: {
      room: 'Red Velvet'
    }
  });
  res.json(response);
});

module.exports = router;
