/*jshint node:true */
var modelData = require('../data');
exports.configure = function(app, rootDir){
	"use strict";

    // This is the default route which just loads the index page
    app.get('/', function(req, res){
      res.render('index', modelData.get(app));
    });

    // This picks up routes which point to a particular template
    // which sits inside the templates folder
    app.get(/\/template\/(\w+)/, function(req, res){
      var page = req.params[0] || 'index';
      res.render(page, modelData.get(app));
    });

};