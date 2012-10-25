/*jshint node:true */
var hbs        = require('hbs'), // handlebars templating
    handlebars = require('handlebars'),
    fs         = require('fs')
;
exports.configure = function(app, rootDir){
    "use strict";

    /* partials */
    function partial (relativeDir) {
        return function(name, items, context) {
            var tmpl = handlebars.compile(fs.readFileSync(rootDir + relativeDir + name +'.html', 'utf8'));
            return tmpl({
                items: items,
                context: this,
                app: app.locals
            });
        };
    }

    handlebars.registerHelper('partial', partial('/templates/partials/'));
    handlebars.registerHelper('template', partial('/ui/templates/'));

    /* blocks */
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