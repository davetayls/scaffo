/*jshint node:true */
var modelData = require('../data'),
    join = require('path').join,
    _ = require('underscore')
;
exports.configure = function(app, rootDir){
	"use strict";

    // This is the default route which just loads the index page
    app.get('/:template?', function(req, res){
      var template = req.params.template || 'index';
      res.render(template, modelData.get(app));
    });

    // This picks up routes which point to a particular template
    // which sits inside the templates folder
    app.get('/template/:layout?/:template', function(req, res){
      var options = { layout: join(req.params.layout, 'layout.html') },
          template = req.params.template || 'index',
          view = join(req.params.layout, template);

      _.extend(options, modelData.get(app));
      res.render(view, options);
    });

};