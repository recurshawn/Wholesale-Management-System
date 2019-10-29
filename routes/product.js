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


router.post('product_add',(req, res, next) =>{

	console.log(req['body']);

	var product = {
		product_id: req['body'].pid,
		pname : req['body'].pname,
		buying_price : req['body'].buying_price,
		selling_price : req['body'].selling_price,
		quantity : req['body'].quantity,
		category : req['body'].category
	}

	console.log('Inserting');
	con.query('INSERT INTO PRODUCT SET ?',product).then((err, result)=>{
		console.log("Success!");
	})
})





con.connect(function (err) {
	if (err) throw err;
	con.query("SELECT * FROM product", function (err, result, fields) {
		if (err) throw err;
		products = result;
		console.log(result);
	});
});


router.get('/', function (req, res, next) {

	res.render('product', { title: 'Inventory', data: products });
});

module.exports = router;
