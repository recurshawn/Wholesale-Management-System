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
  con.query("SELECT * FROM manufacturer", function (err, result, fields) {
    if (err) throw err;
    manufacturers = result;
    console.log(result);
  });
});


router.get('/', function (req, res, next) {

  res.render('manufacturer', { title: 'Inventory', data: manufacturers });
});



module.exports = router;