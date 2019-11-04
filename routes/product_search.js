var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var conn = require('../data/conn');

router.get('/', function (req, res, next) {
	console.log(`Searching for products with name = ${req.query.product_name} in category = ${req.query.category}`)
	console.log("Searching using name ", req.query.product_name != '')
	console.log("Searching using category", req.query.category != '')

	sql = "SELECT * FROM product WHERE "
	args = []

	if( (req.query.product_name != '') && (req.query.category != '') ) {
		sql = sql + "pname LIKE ? and category LIKE ?"
		args = ['%' + req.query.product_name + '%', '%' + req.query.category + '%']
	}
	else if ( req.query.product_name != '' ) {
		sql = sql + "pname LIKE ?"
		args = ['%' + req.query.product_name + '%']
	}
	else if ( req.query.category != '' ) {
		sql = sql + "category LIKE ?"
		args = ['%' + req.query.category + '%']
	}
	else {
		// We didn't get any product, go back to products page
		return res.redirect('/product')
	}

	conn.query(sql, args, function (err, result, fields) {
		if (err) throw err;
		products = result;
		console.log(result);
		res.render('product', { title: 'Inventory', data: products, success: { add: false } });
	});
});

module.exports = router;
