/*jshint node:true */
var hbs        = require('hbs'), // handlebars templating
    handlebars = hbs.handlebars,
    _          = require('underscore'),
    fs         = require('fs'),
    preferences = require('./preferences.json'),

    join       = require('path').join
;
exports.configure = function(app, rootDir){
    "use strict";

    /**
     * Generate a helper function which will compile an external
     * template based in a particular relative directory
     * @param  {string} relativeDir directory to find the partial
     * @return {function}
     */
    function partial (relativeDir) {
        return function(name) {
            var templatePath = join(rootDir, relativeDir),
                tmplString = fs.readFileSync(templatePath + name +'.html', 'utf8'),
                tmpl = handlebars.compile(tmplString),
                // ("parialName", )
                items = arguments.length === 3 ? arguments[1] : [],
                options = arguments[arguments.length-1],
                content,
                context = _.extend({}, this, { items: items }, options.hash)
            ;
            if (options.fn){
                content = options.fn(context);
            }
            _.extend(context, { content: content });

            return tmpl(context);
        };
    }

    hbs.registerHelper('partial', partial(preferences.partials_path + '/'));
    hbs.registerHelper('template', partial(preferences.ui_path + '/templates/'));

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