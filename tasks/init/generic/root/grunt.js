module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ["test/**/*.js"]
    },

    lint: {
      files: [
        "grunt.js",
        "ui/scripts/**/*.js"
      ]
    },

    watch: {
      files: "<config:lint.files>",
      tasks: "default"
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },

    stylus: {
      dist: {
        options: {
          compress: true,
          paths: [ 'ui/styles' ]
        },
        files: {
          'ui/dist/styles.css': 'ui/styles/index.styl'
        }
      }
    }

  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask("default", "lint stylus");

};