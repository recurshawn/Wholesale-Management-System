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
  conn.query("SELECT * FROM retailer", function (err, result, fields) {
    if (err) throw err;
    retailers = result;
    console.log(result);
  });
});


router.get('/', function (req, res, next) {

  res.render('retailer', { title: 'Retailers', data: retailers });
});

module.exports = router;
