var preferences = require('./config/preferences.json'),

    join       = require('path').join,
    uiPath     = join(__dirname, preferences.ui_path)
;

module.exports = function(grunt) {
  "use strict";

  /**
   * Main task names
   */
  grunt.registerTask("default", ["jshint", "scripts", "styles", "qunit"]);
  grunt.registerTask("dev", ["jshint", "stylus:dev", "watch"]);

  // sub tasks
  grunt.registerTask("install", ["volo:add"]);
  grunt.registerTask("scripts", ["requirejs:dist", "concat"]);
  grunt.registerTask("styles", ["stylus:dist"]);


  /**
   * => Stylus Configuration
   */
  var stylus = {
    dist: {
      options: {
        compress: true,
        paths: [
          uiPath + '/styles',
          uiPath + '/lib',
          'node_modules/nib/lib'
        ]
      },
      files: {}
    },
    dev: {
      options: {
        compress: false,
        linenos: true
      },
      files: {}
    }
  };
  stylus.dist.files[uiPath + '/dist/styles.css'] = uiPath + '/styles/index.styl';
  stylus.dist.files[uiPath + '/dist/tablet.css'] = uiPath + '/styles/**/*.tablet.styl';
  stylus.dist.files[uiPath + '/dist/desktop.css'] = uiPath + '/styles/**/*.desktop.styl';

  stylus.dev.options.paths = stylus.dist.options.paths;
  stylus.dev.files[uiPath + '/dev/styles.css'] = uiPath + '/styles/index.styl';
  stylus.dev.files[uiPath + '/dev/tablet.css'] = uiPath + '/styles/**/*.tablet.styl';
  stylus.dev.files[uiPath + '/dev/desktop.css'] = uiPath + '/styles/**/*.desktop.styl';

  /**
   * => Javascript Compression Configuration
   */
  var uglify = {
    options: {
      compress: true,
      mangle: {
        except: [
          'jQuery',
          'Backbone',
          '_'
        ]
      }
    },
    dist: {
      files: {}
    }
  };
  uglify.dist.files[uiPath + "/dist/require.js"] = uiPath + "/dist/require.js";


  /**
   * Main Grunt Config Call
   */
  grunt.initConfig({

    // The stylus configuration is built above (http://learnboost.github.com/stylus/)
    stylus: stylus,

    // The compression configuration is built above (https://github.com/mishoo/UglifyJS)
    uglify: uglify,

    // the qunit test runner for JavaScript unit tests and Brand Style tests
    qunit: {
      all: ['ui/test/**/*.html']
    },

    // file watcher using grunt-contrib-watch
    watch: {
      styles: {
        files: [
          uiPath + "/styles/**/*.styl"
        ],
        tasks: "stylus:dev"
      },
      scripts: {
        files: [
          uiPath + "/scripts/**/*.js"
        ],
        tasks: "jshint"
      }
    },

    // The JavaScript linting configuration for JsHint (http://www.jshint.com/docs/)
    jshint: {
      files: [
        "grunt.js",
        uiPath + "/scripts/**/*.js"
      ],
      options: {
        jshintrc: '.jshintrc'
      }
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

    // The concatenate task is used here to merge the require/define
    // shim and the templates into the application code.  It's named
    // dist/require.js, because we want to load as few script
    // files in the site
    concat: {
      dist: {
        src: [
          uiPath + "/lib/require.js",
          uiPath + "/dist/main.js"
        ],

        dest: uiPath + "/dist/require.js",

        separator: ";"
      }
    }

  });

  /**
   * Load tasks which are from npm modules
   *
   * These npm dependencies need to have been
   * installed already.
   */
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-qunit');

};