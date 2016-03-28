/**
 * Created by CeShang on 2016/3/27.
 */
'use strict';

module.exports = function(grunt){
    //how long tasks take
    require('time-grunt')(grunt);
    //automatically load required grunt tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        jshint:{
            options:{
                jshintrc:'.jshintrc',
                reporter:require('jshint-stylish')
            },
            all:{
                src:[
                    'Gruntfile.js',
                    'app/scripts/{,*/}*.js'
                ]
            }
        }
    });

    grunt.registerTask('build',[
        'jshint'
    ]);

    grunt.registerTask('default',['build']);
};
