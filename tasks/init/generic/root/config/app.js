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

      // if something goes wrong!
      app.use(function(err, req, res, next) {
          res.send(500, '<link rel="stylesheet" href="/ui/dist/styles.css" /><div style="padding:40px"><h1>Error</h1><pre><code>'+ err.message +'</code></pre></div>');
      });

    });

    /**
     * Other Configuration
     */
    templating.configure(app, rootDir);
    routes.configure(app, rootDir);

};
