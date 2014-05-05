module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      dist: {
        options: {
          compass: false,
          style: 'compressed'
        },
        files: {
          'public/main.min.css': 'css/main.sass'
        }
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! main.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        files: {
          'build/main.min.js': [
            'js/*.js',
            'bower_components/jquery/src/jquery.js',
            'bower_components/holderjs/holder.js',
            'bower_components/instantclick/instantclick.js',
            'bower_components/sass-bootstrap/js/*.js'
          ]
        }
      }
    },

    // Watch
    watch: {
      files: 'css/main.sass',
      tasks: 'sass',
      js: {
        tasks: ['uglify']
      }
    }

  
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');  

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};