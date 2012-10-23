/*global require */
// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    lib: "../lib",

	// jQuery Plugins

    // Libraries.
    jquery: "../lib/jquery"
  },

  shim: {
  }

});