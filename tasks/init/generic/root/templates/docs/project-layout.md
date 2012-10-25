Project Scaffolding
===================

Project Layout
--------------

### UI

The styling, scripting, images and other ui related files are found in the
following folder structure within the project

    /ui
      |-- /lib             : Resources from external libraries and plugins
      |                      used by the site but not written for the site
      |                       - eg: jQuery library, jQuery plugins
      |                       - Code in this folder should not be customised
      |-- /scripts         : Root folder for custom JavaScript files for this
      |                      site
      |-- /styles          : Root folder for Stylus files
      |-- /templates       : Root folder for simple templates which could be
      |                      used in client side templating
      |--/test             : Front-End test suites


### Page Templates

All page templates can be accessed from:

- /                        : Loads the index.html page template
- /template/templateName   : Loads the template named templateName.html
- /template/path/name      : Loads a template in a sub directory

Here is how this equates to the directory structure:

    /templates             : The main page markup templates
      |-- index.html       : The default page template to load
      |                       - This only holds body content
      |-- layout.html      : The main layout for the pages within this folder
      |                       - Content in page templates will be placed where
      |                         the {{{body}}} tag is
      |-- /customFolder    : You can create sub folders for new layouts
        |-- layout.html    : Page templates within this folder will use this layout


### Nested templates and partials

You can separate sections of your markup in to small reusable controls. These
are called templates and partials. Templates and partials are essentially the
same idea with a few subtle differences for this project architecture.

This project uses [Handlebars.js](http://handlebarsjs.com/) for it's templating.


#### Templates

You can include a template in your markup by using the following tag.

    {{#template "templateName"}}{{/template}}

It will then look for a file called `templateName.html` within the following
directory:

    /ui
      |-- /templates
        |-- templateName.html

These templates should be very simple and cannot have nested templates within them


#### Partials

Partials are much the same as templates but they are designed to contain markup
which is part of the core site structure and will not be used for client-side
templating (often via ajax calls to a json service).

You can include a partial in your markup by using the following tag.

    {{#partial "templateName"}}{{/partial}}

It will then look for a file called `templateName.html` within the following
directory:

    /templates
      |-- /partials
        |-- templateName.html


### Pumping data in to templates

There will be times when you want to write a template for a single instance
and have it generate markup for a list.

You can create dummy JSON data in the following way.

    data                : Dummy data
      |-- breadcrumb.js : Example dummy data
      |-- index.js      : Functionality to automatically make data available

#### Using a data file example

Structure your data file like this:

    exports.dataName = [
      {
          firstname: "Peter",
          surname: "Smith"
      },
      ...
    ];

Send the data to a template or partial

    {{#template "templateName" dataName}}{{/template}}

Then you can use the data in a template or partial:

    <ul>
    {{#items}}
        <li>{{firstname}} {{surname}}</li>
    {{/items}}
    </ul>


### Prototype Server Configuration

    config              : The server and templating configuration
    app.js
    grunt.js
    package.json


