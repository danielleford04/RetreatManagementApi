var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var restful = require('node-restful');
var methodOverride = require('method-override');

var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');
var events = require('./routes/events');
var tasks = require('./routes/tasks');
var instructions = require('./routes/instructions');
var phases = require('./routes/phases');
var emails = require('./routes/emails');
var retreatants = require('./routes/retreatants');
var storedForms = require('./routes/storedForms');
var app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/product')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//lets access from localhost
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/emails', emails);
app.use('/events', events);
app.use('/tasks', tasks);
app.use('/instructions', instructions);
app.use('/phases', phases);
app.use('/retreatants', retreatants);
app.use('/storedForms', storedForms);

var Category = app.resource = restful.model('category', mongoose.Schema({
  cat_name: String,
}))
.methods(['get', 'post', 'put', 'delete']);

Category.register(app, '/category');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
