var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: true });


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
	var products= result;
    console.log(result);
  });
});

var 

/*GET PRODUCT FORM*/
router.get('/', function(req, res, next) {
	res.render('product', {title:'Add Product Details', data: products});
});
 
router.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Product ID    : " + req.body.pid;
  reply += "Product Name  : " + req.body.pname; 
  reply += "Buying Price  : " + req.body.bprice;
  reply += "Selling Price : " + req.body.sprice;
  reply += "Quantity      : " + req.body.quan;
  reply += "Category      : " + req.body.cat;
  res.send(reply);
 });




/*
/*GET PRODUCT FORM
router.get('/', function(req, res, next) {
});*/


module.exports  = router;