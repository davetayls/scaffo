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
        "ui/scripts/**/*.js"
      ]
    },

    watch: {
      styles: {
        files: [
          "ui/styles/**/*.styl"
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
          mainConfigFile: "ui/scripts/config.js",
          // output to
          out: "ui/dist/main.js",

          // config
          baseUrl: "ui/scripts",
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
          "ui/lib/require.js",
          "ui/dist/main.js"
        ],

        dest: "ui/dist/require.js",

        separator: ";"
      }
    },

    stylus: {
      dist: {
        options: {
          compress: false,
          paths: [
            'ui/styles',
            'ui/lib',
            'node_modules/nib/lib'
          ]
        },
        files: {
          'ui/dist/styles.css': 'ui/styles/index.styl',
          'ui/dist/tablet.css': 'ui/styles/**/*.tablet.styl',
          'ui/dist/desktop.css': 'ui/styles/**/*.desktop.styl'
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