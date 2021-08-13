var express = require('express');
var router = express.Router();


router.get('/registro',function(req, res) {
  res.render('/register');
})
router.post('/login',function(req, res) {
  res.render('/login');
})
module.exports = router;
