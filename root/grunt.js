var preferences = require('./config/preferences.json'),

    join       = require('path').join,
    uiPath     = join(__dirname, preferences.ui_path)
;

module.exports = function(grunt) {
  "use strict";


  // Stylus Configuration
  var stylus = {
    dist: {
      options: {
        compress: false,
        paths: [
          uiPath + '/styles',
          uiPath + '/lib',
          'node_modules/nib/lib'
        ]
      },
      files: {}
    }
  };
  stylus.dist.files[uiPath + '/dist/styles.css'] = uiPath + '/styles/index.styl';
  stylus.dist.files[uiPath + '/dist/tablet.css'] = uiPath + '/styles/**/*.tablet.styl';
  stylus.dist.files[uiPath + '/dist/desktop.css'] = uiPath + '/styles/**/*.desktop.styl';

  // Project configuration.
  grunt.initConfig({

    test: {
      files: ["test/**/*.js"]
    },

    lint: {
      files: [
        "grunt.js",
        uiPath + "/scripts/**/*.js"
      ]
    },

    watch: {
      styles: {
        files: [
          uiPath + "/styles/**/*.styl"
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

    // The stylus configuration is built above
    stylus: stylus,

    jshint: {
      options: {
        browser: true,
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
          mainConfigFile: uiPath + "/scripts/config.js",
          // output to
          out: uiPath + "/dist/main.js",

          // config
          baseUrl: uiPath + "/scripts",
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
          uiPath + "/lib/require.js",
          uiPath + "/dist/main.js"
        ],

        dest: uiPath + "/dist/require.js",

        separator: ";"
      }
    },

    // The volo task is used to grab front-end dependecies
    // like jQuery from the package.json file
    volo: {
      install: {}
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