var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeworkshop'
});

connection.connect(function(err) {
    if (!err) {
        console.log("connected to DB!!");
    } else {
        console.log("can't connect to DB :(");
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/header', function(req, res, next) {
    res.render('header', { title: 'Express' });
});

router.post('/processing', function(req, res, next) {
    console.log(req, res);
    var a = req.body.txt1;
    var b = req.body.txt2;
    var c = req.body.txt3;
    var d = "record added";

    connection.query("insert into workshop(st_id, fname, lname) values(?, ?, ?)", [a, b, c], function(err, result, field) {
        console.log(err);
        res.render('ans', { mya: a, myb: b, myc: c, myd: d });
    });
});

router.post('/database', function(req, res, next) {
    console.log(req, res);
    var a = req.body.txt1;
    var b = req.body.txt2;
    var c = req.body.txt3;
    var d = "record added";

    connection.query("insert into workshop(st_id, fname, lname) values(?, ?, ?)", [a, b, c], function(err, result, field) {
        console.log(err);
        res.render('ans', { mya: a, myb: b, myc: c, myd: d });
    });
});

module.exports = router;