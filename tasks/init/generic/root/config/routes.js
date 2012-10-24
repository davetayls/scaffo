/*jshint node:true */
var models = require('../models');
exports.configure = function(app, rootDir){
	"use strict";

    // This is the default route which just loads the index page
    app.get('/', function(req, res){
      res.render('index', models.get(app));
    });

    // This picks up routes which point to a particular template
    // which sits inside the templates folder
    app.get(/\/template\/(\w+)/, function(req, res){
      var page = req.params[0] || 'index';
      res.render(page, models.get(app));
    });

};