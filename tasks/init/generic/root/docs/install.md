Installation
============

### In terminal window

	$ mkdir myPrototypeSite
	$ cd myPrototypeSite
	$ pogo-scaffold init:generic
	...
	$ npm install
	$ pogo-scaffold watch-dev

### Open a new terminal window

	$ node app

### From the directory (Windows)

If you are using Windows then there are batch files in the root of the
project which can be used to start the watcher and server quickly.

 - install-dependencies.bat  : This uses npm and volo to install the
                               front-end dependencies
 - watch-dev.bat             : This compiles the front-end files and
                               starts watching for changes
 - server.bat                : This starts the front-end prototype server
                               at <http://localhost:3000>

### Further Docs

Further docs can be found within the new site
under /docs/