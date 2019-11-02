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

var mans;
var sql;
router.post('/', (req, res, next) => {

	conn.connect(function (err) {
		if (err) throw err;
		console.log("connected");

		var abc2 = "'" + req['body'].mname + "'";
		var abc3 = "'"+req['body'].address+"'";
		var abc5 = parseInt(req['body'].phone_no);
		var abc6 = "'" + req['body'].category + "'";

		mans = [abc2, abc3, abc4, abc5, abc6];


		console.log('Inserting');
		sql = "INSERT INTO manufacturer (mname,address,phone_no,category) values (" + mans + ");";


		conn.query(sql, function (err, result) {
			if (err) throw err;
			console.log(2);
			console.log("1 record inserted");
			console.log(result);
			res.redirect('/manufacturer?add=true&man=' + prod2);
			
		});
	});



});


module.exports = router;