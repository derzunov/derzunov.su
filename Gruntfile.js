/**
 * Created by Erzunov on 16.02.2015.
 */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee: {
			models: {
				expand: true,
				flatten: true,
				cwd: 'app/models',
				src: ['*.coffee'],
				dest: 'app/models/compiled',
				ext: '.js'
			},
			configs: {
				expand: true,
				flatten: true,
				cwd: 'app/configs',
				src: ['*.coffee'],
				dest: 'app/configs/compiled',
				ext: '.js'
			}
		},
		concat: {
			templates: {
				src: ['app/templates/*.html'],
				dest: 'templates.html',

				options: {
					separator: '\n',
					process: function (src, filepath) {
						var templateName = filepath.split('/').pop().split('.').shift();
						return '<!-- Template: ' + templateName + '-->\n<script type="text/template" id="' + templateName + '">\n' + src + '\n</script>\n<!---->';
					}
				}
			},
			index: {
				src: ['index-top.html', 'templates.html', 'index-bottom.html'],
				dest: 'index.html'
			}
		},
		less: {
			options: {
				relativeUrls: true
			},

			development: {
				options: {},
				files: {
					'app/styles/styles.css': 'app/styles/styles.less'
				}
			}
		},
		watch: {

			styles: {
				files: ['app/styles/src/**/*.less', 'app/styles/styles.less'],
				tasks: ['less']
			},

			templates: {
				files: ['app/templates/*.html'],
				tasks: ['concat:templates']
			},

			index: {
				files: ['index-top.html', 'templates.html', 'index-bottom.html'],
				tasks: ['concat:index']
			},
			coffee: {
				files: ['app/**/*.coffee'],
				tasks: ['coffee:models', 'coffee:configs']
			}
		}
	});

	grunt.file.defaultEncoding = 'utf8';

	// Default task(s).

	grunt.registerTask('build', [
		'coffee',
		'concat',
		'less'
	]);

	grunt.registerTask('default', [
		'coffee',
		'concat',
		'less',
		'watch'
	]);
};