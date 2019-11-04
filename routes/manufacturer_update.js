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
	console.log(`Updating manufacturer ${req.query.id}`)
	conn.query("SELECT * FROM manufacturer WHERE manu_id = ?", [req.query.id], (err, result) => {
		if (err) throw err
		console.log(result[0])
		res.render('manufacturer_update', {title: `Update Manufacturer #${result[0].manu_id}`, main: result[0]});
	})
});

// PERFORM UPDATE
router.post('/', (req, res, next) => {
	console.log(req)
	//console.log(`Recieved for updating ${req.body}`)
	var manufacturer = {
        manu_id: req['body'].manu_id,
        mname: req['body'].mname,
        address: req['body'].address,
		phone_no: req['body'].phone_no,
        category: req['body'].category
    }
	conn.query(`UPDATE manufacturer SET ? WHERE manu_id = ${manufacturer.manu_id}`, manufacturer, (err, results) => {
		if (err) throw err
		console.log('Update manufacturer', results[0])
		res.redirect('/manufacturer')
	})
});


module.exports = router;