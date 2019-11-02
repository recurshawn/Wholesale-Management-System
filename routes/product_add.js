var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//const conn = require('../data/conn.js');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wholesalemgmt'
});

var prods;
var sql;
router.post('/', (req, res, next) => {

	var abc2 = "'" + req['body'].pname + "'";
	var abc3 = parseInt(req['body'].buying_price);
	var abc4 = parseInt(req['body'].selling_price);
	var abc5 = parseInt(req['body'].quantity);
	var abc6 = "'" + req['body'].category + "'";

	prods = [abc2, abc3, abc4, abc5, abc6];

	// console.log(product);

	console.log('Inserting');
	sql = "INSERT INTO product (pname,buying_price,selling_price,quantity,category) values (" + prods + ");";


	conn.connect(function (err) {
		if (err) throw err;
		console.log("connected");


		conn.query(sql, function (err, result) {
			if (err) throw err;
			console.log(2);
			console.log("1 record inserted");
			console.log(result);
			res.redirect('/product?add=true&prod=' + abc2);
			//res.render('product', {title: 'Inventory', success: { add: true, prod : abc2}});
		});
	});



});


module.exports = router;
