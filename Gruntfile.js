module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/main.css': 'css/main.sass'
        }
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! main.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'public/js/main.min.js'
      }
    },

    // Watch
    watch: {
      // options: {
      //   livereload: true
      // },
      sass: {
        files: 'css/**/*.sass',
        tasks: ['sass']
      },
      js: {
        files: ['js/main.js'],
        tasks: ['uglify']
      }
      
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'watch'
  ]);
};