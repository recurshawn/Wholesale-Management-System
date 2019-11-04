//Libraries
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var productRouter = require('./routes/product');
var manufacturerRouter = require('./routes/manufacturer');
var retailerRouter = require('./routes/retailer');

var addProductRouter = require('./routes/product_add');
var updateProductRouter = require('./routes/product_update');
var deleteProductRouter = require('./routes/product_delete');
var searchProductRouter = require('./routes/product_search');

var addManufacturerRouter = require('./routes/manufacturer_add');
var updateManufacturerRouter = require('./routes/manufacturer_update');
var deleteManufacturerRouter = require('./routes/manufacturer_delete');
var searchManufacturerRouter = require('./routes/manufacturer_search');


var addRetailerRouter = require('./routes/retailer_add');
var updateRetailerRouter = require('./routes/retailer_update');
var deleteRetailerRouter = require('./routes/retailer_delete');
var searchRetailerRouter = require('./routes/retailer_search');


var loginRouter = require('./routes/login');
//var authRouter = require('./routes/auth');
  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Using routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/product', productRouter);
app.use('/manufacturer', manufacturerRouter);
app.use('/retailer', retailerRouter);

app.use('/product_add', addProductRouter);
app.use('/product_update', updateProductRouter);
app.use('/product_delete', deleteProductRouter);
app.use('/product_search', searchProductRouter);

app.use('/manufacturer_add', addManufacturerRouter);
app.use('/manufacturer_update', updateManufacturerRouter);
app.use('/manufacturer_delete', deleteManufacturerRouter);
app.use('/manufacturer_search', searchManufacturerRouter);


app.use('/retailer_add', addRetailerRouter);
app.use('/retailer_update', updateRetailerRouter);
app.use('/retailer_delete', deleteRetailerRouter);
app.use('/retailer_search', searchRetailerRouter);


app.use('/login', loginRouter);
//app.use('./auth', authRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// FOR SQL Connection, check data/con.js


   var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "wholesalemgmt",
  });

 conn.connect(function(err) {
   if(err) 
   {
       throw err;
	}
  console.log("Connected to Wholesale Management Database!");
 });




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
console.log('Press CTRL+C to stop the server');
