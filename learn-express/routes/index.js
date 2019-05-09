var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.type('json');
  // res.setHeader('Content-Type', 'application/json');
    res.render( 'index', { title: 'Express' } );
});

module.exports = router;
