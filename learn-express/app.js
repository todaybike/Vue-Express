var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');   // npm i cors  별도의 설치 필요.

// 페이지 정보를 담고 있는 모듈.
var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');

var app = express();

// cross origin 문제를 해결하기 위한 미들웨어
app.use( cors() );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// URL 별로 불러야 하는 모듈을 지정한다.
app.use('/', indexRouter);
app.use('/api/account', accountRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
