var express = require('express');
var router = express.Router();

/*GET PRODUCT FORM*/
router.get('/',function(req, res, next){
	res.render('product',{title:'Add Product Details'});
});


module.exports=router;