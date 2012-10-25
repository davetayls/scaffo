/*jshint node:true */
var _ = require('underscore');

exports.get = function(app){
	"use strict";

	var options = {};
	require("fs").readdirSync("./data").forEach(function(file) {
		_.extend(options, require("./" + file));
	});
	return options;
};