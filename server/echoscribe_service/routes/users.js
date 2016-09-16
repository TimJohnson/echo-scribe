var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var response = {
    success: 'Success',
    payload: 'The meeting is starting'
  }
  res.send(response);
});

module.exports = router;
