/*jshint node:true */
var _ = require('underscore');

exports.get = function(){
	"use strict";

	var options = {};
	require("fs").readdirSync("./models").forEach(function(file) {
		_.extend(options, require("./" + file));
	});
	return options;
};
