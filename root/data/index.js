/*jshint node:true */
var _ = require('underscore');

exports.get = function(app){
	"use strict";

	var options = {};
	require("fs").readdirSync("./data").forEach(function(file) {
		if (/.*\.js$/.test(file)){
			_.extend(options, require("./" + file));
		}
	});
	return options;
};
