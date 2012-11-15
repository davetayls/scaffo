
Installation
--

  npm install -g scaffo
  mkdir myProject
  cd myProject
  scaffo init:generic



Project Scaffolding
--

  1. Pull down HTML5 Boilerplate
  2. JS folder
    * Clear
      * Add AMD config
      * Questions
        * Is this a responsive heavy site?
      * Load in throttle-debounce https://github.com/cowboy/jquery-throttle-debounce
         * Lodash?
            * use custom lodash builder to remove functionality not needed like template
  4. CSS folder
      * Clear
      * Add Sass/Stylus
         * Variables
         * Compass / Nib
         * Mixins
         * Normalise + ie7 support
         * Brand
            * Use sections detailed on html5doctor?
            * Typography
            * Forms
            * Tables
         * Modules folder
      * Print Stylesheet
  6. Clear unnecessary root files
  7. Build and watch
      * Add grunt file
  9. Unit test
      * Mocha
      * phantom JS

Decisions
--

  1. Templating language
    * Handlebars
      * with require plugin https://github.com/SlexAxton/require-handlebars-plugin
    * Dust.js http://akdubya.github.com/dustjs/
      * Used by LinkedIn https://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more
  2. Responsive Design
    * Responsive Tables solution http://www.zurb.com/playground/playground/responsive-tables/index.html
    * Catering for ie < 9 http://the-taylors.org/blog/2012/09/02/responsive-styles-respecting-old-ie-6-7-8
  3. CSS Declarations
    1. BEM
    2. Grouping
      1. Font
      2. Color
      3. Display
      4. Float
      5. Box Model
        1. width
        2. height
        3. padding
        4. margin
        5. border
      7. Background

CSS Frameworks
--

Sass
  * Inuit.css [Sass] https://github.com/csswizardry/inuit.css
  * Compass http://compass-style.org/
  * Bourbon http://thoughtbot.com/bourbon/

Less
  * Twitter Bootstrap [Less]

Stylus
  * Nib [Stylus] http://visionmedia.github.com/nib/

Standards Guidelines
--

CSS
  * https://github.com/csswizardry/CSS-Guidelines
  * http://smacss.com/
  * https://github.com/necolas/idiomatic-css
  * BEM http://coding.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/

JavaScript
  * https://github.com/necolas/idiomatic-js

