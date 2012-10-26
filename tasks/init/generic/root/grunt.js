var preferences = require('./config/preferences.json'),

    join       = require('path').join
;

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    volo: {
      install: {}
    },
    test: {
      files: ["test/**/*.js"]
    },

    lint: {
      files: [
        "grunt.js",
        "scripts/**/*.js"
      ]
    },

    watch: {
      styles: {
        files: [
          "styles/**/*.styl"
        ],
        tasks: "styles"
      },
      scripts: {
        files: [
          "<config:lint.files>"
        ],
        tasks: "scripts"
      }
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

    // This task uses James Burke's excellent r.js AMD build tool.  In the
    // future other builders may be contributed as drop-in alternatives.
    requirejs: {
      dist: {
        options: {
          mainConfigFile: "scripts/config.js",
          // output to
          out: "integrated/ui/dist/main.js",

          // config
          baseUrl: "scripts",
          name: 'config',
          optimize: 'none'
        }
      }
    },

    // The concatenate task is used here to merge the almond require/define
    // shim and the templates into the application code.  It's named
    // dist/debug/require.js, because we want to only load one script file in
    // index.html.
    concat: {
      dist: {
        src: [
          "lib/require.js",
          "integrated/ui/dist/main.js"
        ],

        dest: "integrated/ui/dist/require.js",

        separator: ";"
      }
    },

    stylus: {
      dist: {
        options: {
          compress: false,
          paths: [
            'styles',
            'lib',
            'node_modules/nib/lib'
          ]
        },
        files: {
          'integrated/ui/dist/styles.css': 'styles/index.styl',
          'integrated/ui/dist/tablet.css': 'styles/**/*.tablet.styl',
          'integrated/ui/dist/desktop.css': 'styles/**/*.desktop.styl'
        }
      }
    }

  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-volo');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask("default", "lint scripts styles");

  // other tasks
  grunt.registerTask("install", "volo:add");
  grunt.registerTask("scripts", "requirejs concat");
  grunt.registerTask("styles", "stylus");

  // watch tasks
  grunt.registerTask("watch-dev", "default watch:styles");
  grunt.registerTask("watch-dist", "default watch");


};