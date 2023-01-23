var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var registerRouter = require('./routes/registerRouter');
var loginRouter = require('./routes/loginRouter');
var notesRouter = require('./routes/notesRouter');
var isAuthenticated = require('./middlewares/auth');

//JSON-schemas validation:
var userschema = require('./schemas/userschema.json');
var notesschema = require('./schemas/notesschema.json');
var validateSchema = require('./middlewares/validate');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/register', validateSchema(userschema), registerRouter);
app.use('/login', loginRouter);
app.use('/notes', isAuthenticated, validateSchema(notesschema), notesRouter)


module.exports = app;
