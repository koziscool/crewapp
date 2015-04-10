module.exports = function(grunt) {
  'use strict';
  /* Project configuration */
  grunt.initConfig({
    shell: {
      'build-web': {
        command: [
          'cd server', 
          'npm install'
          ].join(' && ')
      },
      'build-app': {
        command: [
          'cd app', 
          'npm install'
          ].join(' && ')
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['./**/node_modules'],
        additionalSuffixes: ['.ios.js']
      },
      all: ['./']
    },
    eslint: {
      options: {
        eslintrc: '.eslintrc',
      },
      target: ['./app/index.ios.js']
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-eslint');  


  /* Build Tasks */
  grunt.registerTask('build-web', ['shell:build-web']);
  grunt.registerTask('build-app', ['shell:build-app']);

  grunt.registerTask('build', ['build-web', 'build-app']);

  /* Testing */
  grunt.registerTask('test', ['jshint', 'eslint']);
};
