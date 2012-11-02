/*jshint node:true */
var hbs        = require('hbs'), // handlebars templating
    handlebars = hbs.handlebars,
    fs         = require('fs'),
    preferences = require('./preferences.json'),

    join       = require('path').join
;
exports.configure = function(app, rootDir){
    "use strict";

    /**
     * Partials
     */
    function partial (relativeDir) {
        return function(name, items, context) {
            var templatePath = join(rootDir, relativeDir),
                tmpl = handlebars.compile(fs.readFileSync(templatePath + name +'.html', 'utf8'));
            return tmpl({
                items: items,
                context: this,
                app: app.locals
            });
        };
    }

    hbs.registerHelper('partial', partial(preferences.partials_path + '/'));
    hbs.registerHelper('template', partial(preferences.ui_path + '/templates/'));

    /**
     * Blocks
     */
    var blocks = {};
    // A helper which allows you to specify the
    // contents of an external {{{block "name"}}}
    // usage: {{#extend "name"}}...{{/extend}}
    hbs.registerHelper('extend', function(name, context) {
        var block = blocks[name];
        if (!block) {
            block = blocks[name] = [];
        }
        block.push(context(this));
    });

    // A helper which allows you to create a
    // block in the page which can be used as a placeholder
    // usage: {{{block "name"}}}
    hbs.registerHelper('block', function(name) {
        var val = (blocks[name] || []).join('\n');
        // clear the block
        blocks[name] = [];
        return val;
    });

};