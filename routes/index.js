var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(re,res,next) {
    res.render('index', {title: ' Library'});
});

module.exports = router;
