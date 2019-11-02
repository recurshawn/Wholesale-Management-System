var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "wholesalemgmt"
});
var prods;
var sql;
router.post('/',(req, res, next) =>{

	
		var abc1 = 0;
		var abc2 = "'"+req['body'].pname+"'";
		var abc3 = parseInt(req['body'].buying_price);
		var abc4 = parseInt(req['body'].selling_price);
		var abc5 = parseInt(req['body'].quantity);
		var abc6 = "'"+req['body'].category+"'";
		
		
		// console.log(product);

	console.log('Inserting');
	/*
	con.query('INSERT INTO PRODUCT SET ?', product, function(err, result)=>{
		console.log("Success!");

		res.redirect('/product');
	});*/
	con.connect(function(err){
		if(err) throw err;
		console.log("connected");
		sql="SELECT max(product_id) FROM product;";
		con.query(sql, function(err,result_max){
			if(err) throw err;
			console.log(sql+ "Getting max");
			abc1 = parseInt(result_max[0]['max(product_id)']) + 1;
			console.log(1);
			prods = [abc1, abc2, abc3, abc4, abc5, abc6];
			sql = "INSERT INTO product (product_id,pname,buying_price,selling_price,quantity,category) values ("+prods+");";
		});
		

		
		
		con.query(sql, function(err,result){
			if(err) throw err;
			console.log(2);
			console.log("1 record inserted");
			console.log(result);
			res.render('product', {title: 'Inventory', success: { add: true, prod : abc2}});
		});
	});
	
	

});


module.exports = router;
