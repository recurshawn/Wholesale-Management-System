var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "wholesalemgmt"
});
 var product;

router.post('/',(req, res, next) =>{

	
	
		var abc1 = parseInt(req['body'].pid);
		var abc2 = "'"+req['body'].pname+"'";
		var abc3 = parseInt(req['body'].buying_price);
		var abc4 = parseInt(req['body'].selling_price);
		var abc5 = parseInt(req['body'].quantity);
		var abc6 = "'"+req['body'].category+"'";
		product = [abc1, abc2, abc3, abc4, abc5, abc6];
		
		console.log(product);

	console.log('Inserting');
	/*
	con.query('INSERT INTO PRODUCT SET ?', product, function(err, result)=>{
		console.log("Success!");

		res.redirect('/product');
	});*/
	con.connect(function(err){
		if(err) throw err;
		console.log("connected");
		var sql = "INSERT INTO product (product_id,pname,buying_price,selling_price,quantity,category) values ("+product+");";
		console.log(sql);
		con.query(sql, function(err,result){
			if(err) throw err;
			console.log("1 record inserted");
			res.redirect('/product');
		});
	});
	
	

});


module.exports = router;
