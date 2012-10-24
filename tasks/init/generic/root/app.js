/**
 * Module dependencies.
 */
/*jshint node:true,strict:false */
var express = require('express'),
  config = require('./config/app'),
  port = process.env.PORT || 3000
;

var app = express();
config.configure(express, app, __dirname);

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
