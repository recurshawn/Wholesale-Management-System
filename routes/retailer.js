var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conn = require('../data/conn');
var url = require('url');
var retailers;


conn.connect(function (err) {
  if (err) return err;
});




router.get('/', function (req, res, next) {

  var qdata = url.parse(req.url, true);
	var q = qdata.query;
  
  
    conn.query("SELECT * FROM retailer", function (err, result, fields) {
      if (err) throw err;
      retailers = result;
      console.log(result);
      res.render('retailer', { title: 'Retailers', data: retailers, success: {add: q.add, delete: q.delete, update: q.update, retailer: q.retailer }});
    });

  
});

module.exports = router;
