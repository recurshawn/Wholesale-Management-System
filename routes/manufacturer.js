var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var conn = require('../data/conn');

var manufacturers;

conn.connect(function (err) {
	if (err) return err;
});

router.get('/', function (req, res, next) {
	var qdata = url.parse(req.url, true);
	var q = qdata.query;
	//console.log(q);

  
    conn.query("SELECT * FROM manufacturer", function (err, result, fields) {
      if (err) throw err;
      manufacturers = result;
      console.log(result);
      res.render('manufacturer', { title: 'Manufacturers List', data: manufacturers, success: {add: q.add, delete: q.delete, update: q.update, man: q.man } });
    });

});

module.exports = router;