var express = require('express');
var router = express.Router();

/* GET */
router.use('/:gb/:act', function(req, res, next) {

  res.type('json');
  
  let gb = req.params.gb;
  let act = req.params.act.replace( /\.do$/, '');
  let template = `${gb}/${act}`;

  // console.log( `template=${template}`);
  res.render( template, { gb:gb, act:req.params.act, template:template } );
});

module.exports = router;
