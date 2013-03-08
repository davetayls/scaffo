// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  /*
    These paths are relative to the scripts folder in the browser
    eg: http://localhost:3000/ui/scripts
        ../lib => http://localhost:3000/ui/lib
   */
  paths: {
    // JavaScript folders.
    lib: "../lib",

	// jQuery Plugins

    // Libraries.
    jquery: "../lib/jquery",
	matchMedia: "../lib/matchMedia/matchMedia",
	"matchMedia.addListener": "../lib/matchMedia/matchMedia.addListener"
  },

  shim: {
	"matchMedia.addListener": ["matchMedia"]
  }

});