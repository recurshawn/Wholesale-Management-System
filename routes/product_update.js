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
// DISPLAY EDIT FORM
router.get('/', (req, res, next) => {
	console.log(`Updating product ${req.query.id}`)
	conn.query("SELECT * FROM product WHERE product_id = ?", [req.query.id], (err, result) => {
		if (err) throw err
		console.log(result[0])
		res.render('product_update', {title: `Update Product #${result[0].product_id}`, main: result[0]});
	})
});

// PERFORM UPDATE
router.post('/', (req, res, next) => {
	console.log(req)
	var product = {
        product_id: req['body'].product_id,
        pname: req['body'].pname,
        buying_price: req['body'].buying_price,
		selling_price: req['body'].selling_price,
		quantity: req['body'].quantity,
        category: req['body'].category
    }
	conn.query(`UPDATE product SET ? WHERE product_id = ${product.product_id}`, product, (err, results) => {
		if (err) throw err
		console.log('Update product', results[0])
		res.redirect('/product')
	})
});


module.exports = router;
