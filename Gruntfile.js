module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Documentation
    bulldoc: {
      docs: {
        files: { 'docs/build/': 'docs/source/' }
      }
    },

    // Sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/css/main.css': 'css/main.sass'
        }
      }
    },

    // Sprites
    sprite:{
      all: {
        src: 'img/sprites/*.png',
        destImg: 'public/img/sprites.png',
        destCSS: 'css/base/_sprites.scss'
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'js/main.js',
          'js/plugins.js',
          'js/vendor/bootstrap/affix.js',
          'js/vendor/bootstrap/alert.js',
          'js/vendor/bootstrap/button.js',
          'js/vendor/bootstrap/carousel.js',
          'js/vendor/bootstrap/collapse.js',
          'js/vendor/bootstrap/dropdown.js',
          'js/vendor/bootstrap/tab.js',
          'js/vendor/bootstrap/transition.js',
          'js/vendor/bootstrap/scrollspy.js',
          'js/vendor/bootstrap/modal.js',
          'js/vendor/bootstrap/tooltip.js',
          'js/vendor/bootstrap/popover.js'
        ],
        dest: 'public/js/main.min.js'
      }
    },

    // Watch
    watch: {
      sass: {
        files: 'css/**/*.sass',
        tasks: ['sass']
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['uglify']
      },
      bulldoc: {
        files: 'docs/**/*.md',
        tasks: ['bulldoc']
      }
      
    }

  });

  grunt.loadNpmTasks('grunt-bulldoc');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'watch'
  ]);
};