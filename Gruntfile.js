/**
 * Created by Erzunov on 16.02.2015.
 */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee: {
			app: {
				expand: true,
				flatten: true,
				cwd: 'app',
				src: ['*.coffee'],
				dest: 'app/',
				ext: '.js'
			},
			model: {
				expand: true,
				flatten: true,
				cwd: 'app/model',
				src: ['*.coffee'],
				dest: 'app/model/',
				ext: '.js'
			},
			collection: {
				expand: true,
				flatten: true,
				cwd: 'app/collection',
				src: ['*.coffee'],
				dest: 'app/collection/',
				ext: '.js'
			},
			view: {
				expand: true,
				flatten: true,
				cwd: 'app/view',
				src: ['*.coffee'],
				dest: 'app/view/',
				ext: '.js'
			},
			lib: {
				expand: true,
				flatten: true,
				cwd: 'lib',
				src: ['*.coffee'],
				dest: 'lib/',
				ext: '.js'
			},
			helper: {
				expand: true,
				flatten: true,
				cwd: 'app/helper',
				src: ['*.coffee'],
				dest: 'app/helper/',
				ext: '.js'
			},
			locs: {
				expand: true,
				flatten: true,
				cwd: 'app/locs',
				src: ['*.coffee'],
				dest: 'app/locs/',
				ext: '.js'
			}
		},
		concat: {
			templates: {
				src: ['app/templates/*.html', 'app/templates/*.ejs'],
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
				files: ['app/templates/*.html', 'app/templates/*.ejs'],
				tasks: ['concat:templates']
			},

			index: {
				files: ['index-top.html', 'templates.html', 'index-bottom.html'],
				tasks: ['concat:index']
			},
			coffee: {
				files: ['app/**/*.coffee','lib/**/*.coffee'],
				tasks: ['coffee:app', 'coffee:model', 'coffee:collection', 'coffee:view', 'coffee:lib']
			}
		},
		requirejs: {
			compile: {
				options: {
					mainConfigFile: './app.js',
					baseUrl: 'lib',
					name: 'app/main',
					include: ['app'],
					out: "production/app.js",
					optimize: 'uglify'
					//optimize: 'none'
				}
			}
		},

		copy: {
			index: {
				src: 'index.html',
				dest: 'production/index.html'
			},
			stylesBS: {
				src: 'app/styles/bootstrap.min.css ',
				dest: 'production/app/styles/bootstrap.min.css'
			},
			styles: {
				src: 'app/styles/styles.css',
				dest: 'production/app/styles/styles.css'
			},
			stylesSvg: {
				src: 'app/styles/src/**/*.svg',
				dest: 'production/'
			},
			stylesPng: {
				src: 'app/styles/src/**/*.png',
				dest: 'production/'
			},
			stylesJpg: {
				src: 'app/styles/src/**/*.jpg',
				dest: 'production/'
			},
			imgPng: {
				src: 'app/**/*.png',
				dest: 'production/'
			},
			imgJpg: {
				src: 'app/**/*.jpg',
				dest: 'production/'
			},
			stylesFonts: {
				src: 'app/styles/src/**/*.woff',
				dest: 'production/'
			},
			media: {
				src: 'app/media/*',
				dest: 'production/'
			},
			fonts: {
				src: 'app/fonts/*',
				dest: 'production/'
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

	grunt.registerTask('prod', [
		'coffee',
		'concat',
		'less',
		'copy',
		'requirejs'
	]);
};