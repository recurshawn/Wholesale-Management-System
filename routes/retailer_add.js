var express = require('express');
var router = express.Router();

// creating dummy router to currently avoid error
router.get('/', (req, res, next)=>{
	res.send("Currently immaturely developed.");
});

module.exports = router;