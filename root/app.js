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

/**
 * Environments
 * you can specify specific options to test the code
 * in different environments
 */
app.configure('development', function(){
  app.locals.development = true;
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

/**
 * Custom Routes
 * You can include custom routes for testing specific
 * urls which might exist in the integrated site.

    app.get('/service/people', function(req, res){
      res.render('services/people', models.get(app));
    });

 */

/**
 * Start the server
 */
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
