Philosophy
----------

One of the main underlying philosophies is to use well documented design patterns that are being actively maintained.

Here are the architectural decisions made and how to develop on this project.

### Browser Support

This code should support the following browsers:

 - IE: 7+
 - Firefox: 4+
 - Chrome: Latest
 - Safari: 5+

### HTML

#### General

 - HTML5
 - ID's should __not__ be used for styling purposes

#### Forms

Please structure the form markup inline with the [twitter Bootstrap markup](http://twitter.github.com/bootstrap/base-css.html#forms)


### JavaScript

This project uses [Require.js](http://requirejs.org/) to build modular code and keep track of dependencies.

This project uses [jQuery](http://jquery.com)

### CSS

#### Pre-processor

This project uses the [Stylus CSS](http://learnboost.github.com/stylus/) pre-processor.

#### Conventions

 - Follow the [BEM](http://coding.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/) principles
 
         .blockname {
           ...
         }
         .blockname__element {
           ...
         }
         .blockname--modifier {
           ...
         }

  - Split rules out on to separate lines

_Please base your CSS decisions loosely on the following guidelines:
<https://github.com/csswizardry/CSS-Guidelines>_


Getting Started
---------------

For a new machine setup you will need to have [Node.js](http://nodejs.org/) installed and the Grunt CLI (`$ npm install -g grunt-cli`). 

1. Go to the root of the project
2. Install the npm dependencies run `$ npm install`
3. Start the preview server in one console `$ node app`
4. Start the watcher in a separate console `$ grunt dev`

Developing UI components
-------------------

Take a look through the [project layout](docs/project-layout.md) details for an in-depth explanation for how to build new UI templates and components.

Further documentation
---

Further documentation should be placed in the `docs` folder.


