var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var manufacturers;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wholesalemgmt"
});



con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM retailer", function (err, result, fields) {
    if (err) throw err;
    retailers = result;
    console.log(result);
  });
});


router.get('/', function (req, res, next) {

  res.render('retailer', { title: 'Retailers', data: retailers });
});

module.exports = router;
