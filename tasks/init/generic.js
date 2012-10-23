/*jshint node:true */

var npm = require('npm');

exports.description = "Pogo: generic scaffolding";
exports.notes = "Generates scaffolding for a generic project";

exports.template = function(grunt, init, done) {
  "use strict";

  var _ = grunt.utils._;

  _.extend(grunt.helper("prompt_for_obj"), {
    css: {
      message: "Which CSS pre-processor do you want? [ sass, stylus, none ]",
      default: "sass"
    },
    responsive: {
      message: 'Is this site responsive?',
      default: 'yes'
    },
    templating: {
      message: 'What templating library do you want? [ mustache, none ]',
      default: 'mustache'
    }
  });

  grunt.helper("prompt", {}, [

    // grunt.helper("prompt_for", "css"),
    // grunt.helper("prompt_for", "responsive"),
    // grunt.helper("prompt_for", "templating")

  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {});

    // install npm dependencies
    // npm.load(conf, function (er) {
    //   if (er) return errorHandler(er)
    //     npm.commands[npm.command](npm.argv, errorHandler)
    // });


    // All done!
    done();
  });

};