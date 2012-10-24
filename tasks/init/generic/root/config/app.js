/*jshint node:true,strict:false */
var hbs        = require('hbs'), // handlebars templating
    templating = require('./templating'),
    routes     = require('./routes')
;
exports.configure = function(express, app, rootDir){

    /**
     * Main Express Configuration
     */
    app.configure(function(){

      // set which folder to get the template prototypes from
      app.set('views', rootDir + '/templates');

      // use html files for the main site building
      app.set('view engine', 'html');
      app.engine('html', hbs.__express);

      // include the default expressjs checkers
      app.use(express.bodyParser());
      app.use(express.methodOverride());
      app.use(app.router);

      // make the ui folder public
      app.use('/ui', express.static(rootDir + '/ui'));
    });

    // you can specify specific options to test the code
    // in development environment
    app.configure('development', function(){
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
      app.locals.development = true;
    });

    // you can specify specific options to test the code
    // in production environment
    app.configure('production', function(){
      app.use(express.errorHandler());
    });

    /**
     * Other Configuration
     */
    templating.configure(app, rootDir);
    routes.configure(app, rootDir);

};
