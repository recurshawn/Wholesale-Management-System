var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var manufacturers;

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wholesalemgmt"
});



conn.connect(function (err) {
  if (err) throw err;
  conn.query("SELECT * FROM manufacturer", function (err, result, fields) {
    if (err) throw err;
    manufacturers = result;
    console.log(result);
  });
});


router.get('/', function (req, res, next) {

  res.render('manufacturer', { title: 'Manufacturers', data: manufacturers });
});



module.exports = router;