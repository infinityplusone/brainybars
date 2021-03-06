/*
 * BrainyBars Gruntfile
 *
 * Author(s):  Jonathan "Yoni" Knoll
 * Version:    0.8.0
 * Date:       2017-02-20
 *
 */

module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('./package.json');

  // Project configuration
  grunt.initConfig({
    pkg: pkg,
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
