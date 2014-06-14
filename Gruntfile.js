module.exports = function (grunt) { 'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {

			options: {
				compress: {
					drop_console: true
				}
			},

			all: {
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: '**/*.js',
						dest: 'dist/',
						ext: '.min.js'
					}
				]
			}
		},

		jshint: {
			
			all: [
				'Gruntfile.js',
				'src/**/*.js',
				'test/**/*.js'
			],

			options: {
				jshintrc: '.jshintrc'
			}
		},

		jasmine: {
			src: 'src/**/*.js',

			dist: 'dist/**/*.js',

			options: {
				specs: 'test/**/*.js',
				vendor: 'node_modules/lodash/lodash.js'
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('build', ['test', 'uglify']);
	grunt.registerTask('default', ['test']);
};