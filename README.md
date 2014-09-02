This is my own flavor of a starting point for new projects that require responsiveness. Bootstrap-SASS, H5BP, Hologram.


#### Get Started:
1. Clone repo
- Add Grunt CLI to the project. `cd` into root directory and run `npm install -g grunt-cli` (assuming you have 'npm' installed).
<!-- - Install Grunt `npm install -g grunt-init`
- Create a `package.json` file: `npm init`
- `npm install grunt --save-dev` -->
- Add the Grunt task for compiling Sass: `npm install grunt-contrib-sass --save-dev`
- Add the Grunt task for Uglifying JS files: `npm install grunt-contrib-uglify`
- Add the Grunt task for watching file updates: `npm install grunt-contrib-watch --save-dev`
- Run `grunt watch`


#### Add Your Code:
- Configure libraries in variables desired in `css/main.sass` 
- Configure Bootstrap libraries desired in `js/plugins.js`
- Add custom SASS to `css/sass/` files. For example, put home page sass in `_home.sass`. How you organize these files is a matter of preference.
- Add custom JS to `js/main.js`


##### SASS-MQ instead of RespondJS

I'm a fan of [The Guadrian's SASS-MQ]((https://github.com/guardian/sass-mq/)) library and I prefer to use it instead of [RespondJS](https://github.com/scottjehl/Respond) for 2 reasons. First, I like the `+mq($from: <mobile>, $to: <desktop>)` mixin because it's easier than typing out `@media (min...)`. Second, It takes care of IE8 when you're trying to build with a mobile-first strategy.


##### This a mixed recipe from:
- [Initializr](http://www.initializr.com/)
- [Bootstrap](http://www.getbootstrap.com/)
- [SASS-MQ](https://github.com/guardian/sass-mq/)
- [Sass](http://sass-lang.com/)
- [Grunt Sass](https://github.com/gruntjs/grunt-contrib-sass)
- [Hologram](http://github.com/trulia/hologram)


##### TODOs
- TODO: add Grunt to compile JS libraries
- TODO: add Bootstrap as a Grunt task instead of having it in vendor library