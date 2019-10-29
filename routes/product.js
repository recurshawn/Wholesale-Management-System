var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });


///product form
  router.get('/', function(req,res,next){
  
  res.render('product', {title:'Add Product Details'});	  	
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "Product ID  :</p><input type= 'text' name='pid'>";
  html += "Product Name:</p><input type='text' name='pname'>";
  html += "Buying Price:</p><input type='text' name='bprice'>";
  html += "Selling Price:</p><input type='text' name='sprice'>";
  html += "Quantity:</p><input type='text' name='quan'>";
  html += "Category:</p><input type='text' name='cat'>";
  html += "<input type='submit' value='submit'>";
  html += "<input type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
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