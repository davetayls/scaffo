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
        "tasks/**/*.js",
        "tasks/**/*.json",
        "test/**/*.js"
      ]
    },

    watch: {
      files: [
        "<config:lint.files>",
        'tasks/init/**'
      ],
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

    copy: {
      dist: {
        files: {
          "/Users/davetayls/.grunt/tasks/init/pogo/": "tasks/init/generic/**",
          "/Users/davetayls/.grunt/tasks/init/pogo.js": "tasks/init/generic.js"
        }
      }
    },

    docs: {
      www: {
        src: ['tasks/init/generic/docs/**/*.md'],
        dest: 'tasks/init/generic/root/docs/'
      }
    }

  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-docs');

  // Load local tasks.
  grunt.loadTasks("tasks");
  grunt.registerTask("build", "lint test docs copy");

  // Default task.
  grunt.registerTask("default", "init");

};