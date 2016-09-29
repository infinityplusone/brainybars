/*
 * BrainyBars Gruntfile
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.2.0
 * Date:       2016-09-29
 *
 */

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    requirejs: {
      compile: {
        options: {
          baseUrl: './',
          name: 'brainybars',
          findNestedDependencies: true,
          paths: {
            // these come from bower
            'handlebars':           'bower_components/handlebars/handlebars',
            'lodash':               'bower_components/lodash/dist/lodash.min',
            'lodash-inflection':    'bower_components/lodash-inflection/lib/lodash-inflection',
            'moment':               'bower_components/moment/moment'
          },
          shim: {
            'lodash-inflection':    { deps: [ 'lodash' ] }
          },
          out: 'brainybars.min.js'
        }
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', function() {
    grunt.task.run('requirejs');
    grunt.file.write('VERSION', pkg.version);
  });

  console.log('\n');
};
