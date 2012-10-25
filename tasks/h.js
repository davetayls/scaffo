/*jshint node:true */
var join = require('path').join,
    fs   = require('fs');

module.exports = function(grunt) {
  'use strict';

  grunt.util = grunt.util || grunt.utils;

  grunt.registerMultiTask('h', 'Display help in terminal', function() {

    var filePath = join(__dirname, '..') + this.data,
        help = fs.readFileSync(filePath, 'utf8')
    ;
    console.log(help);

  });

};