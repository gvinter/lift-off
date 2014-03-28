This is my own flavor of a starting point for new projects that require responsiveness.


##### Get Started:
- clone repo
- configure libraries in variables desired in `css/main.sass` 
- configure Bootstrap libraries desired in `js/plugins.js`
- add custom SASS to `css/sass/` files. For example, put home page sass in `_home.sass`. How you organize these files is a matter of preference.
- add custom JS to `js/main.js`


##### Dependancies:
- Compass 0.12.4
- SASS 3.3.2+


##### SASS-MQ instead of RespondJS

I'm a fan of [The Guadrian's SASS-MQ]((https://github.com/guardian/sass-mq/)) library and I prefer to use it instead of [RespondJS](https://github.com/scottjehl/Respond) for 2 reasons. First, I like the `+mq($from: <mobile>, $to: <desktop>)` mixin because it's easier than typing out `@media (min...)`. Second, It takes care of IE8 when you're trying to build with a mobile-first strategy.


##### This a mixed recipe from:
- [Initializr](http://www.initializr.com/)
- [Bootstrap](http://www.getbootstrap.com/)
- [SASS-MQ](https://github.com/guardian/sass-mq/)
- [Compass](http://compass-style.org/)
- [SASS](http://sass-lang.com/)

- TODO: write README with command to create compass project w/o extra .css files.
- TODO: add grunt to compile JS libraries