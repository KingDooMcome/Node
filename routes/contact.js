var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: "Contact Bill's PC Repair"
    });
});


router.post('/contact/send', function(req, res, next) {
    console.log('test')
});
module.exports = router;
