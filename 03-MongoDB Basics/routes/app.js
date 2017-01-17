var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    var user = {};
    User.findOne({}, function (err, doc) {
        if (err) {
            res.send('Error!');
        }
        res.render('node', {email: doc});
    });
});


router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Dong',
        lastName: 'SJ',
        password: 'test',
        email: email
    });
    user.save(function (err, result) {
        //todo
    });
    res.redirect('/');
});

module.exports = router;
