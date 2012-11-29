/*
 * grunt-mocha-client
 * https://github.com/nathanwells/grunt-mocha-client
 *
 * Copyright (c) 2012 Nathan Wells
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('mocha-client', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('mocha-client'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('mocha-client', function() {
    return 'mocha-client!!!';
  });

};
