var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var products;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wholesalemgmt"
});



con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM product", function (err, result, fields) {
	if (err) throw err;
	products= result;
    console.log(result);
  });
});


/*GET PRODUCT FORM*/
router.get('/', function(req, res, next) {

	res.render('product', {title:'Add Product Details', data: products});
});
 


/*
/*GET PRODUCT FORM
router.get('/', function(req, res, next) {
});*/


module.exports  = router;