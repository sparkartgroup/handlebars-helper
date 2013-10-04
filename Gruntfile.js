module.exports = function( grunt ){

	var pkg = grunt.file.readJSON('package.json');
	var banner = '/* Handlebars Helper v'+ pkg.version +'\n'+
	'   Generated on <%= grunt.template.today("yyyy-mm-dd \'at\' HH:MM:ss") %> */\n\n';

	grunt.initConfig({
		browserify: {
			hh: {
				options: {
					standalone: 'handlebars_helper'
				},
				files: {
					'handlebars_helper.js': ['index.js']
				}
			},
			test: {
				files: {
					'test/assets/test.js': ['test/index.js']
				}
			}
		},
		uglify: {
			build: {
				options: {
					banner: banner
				},
				files: {
					'handlebars_helper.js': 'handlebars_helper.js'
				}
			}
		}
	});

	// the cool/easy way to do it
	Object.keys( pkg.devDependencies ).forEach( function( dep ){
		if( dep.substring( 0, 6 ) === 'grunt-' ) grunt.loadNpmTasks( dep );
	});

	grunt.registerTask( 'default', ['dev'] );
	grunt.registerTask( 'build', ['browserify','uglify'] );
	grunt.registerTask( 'dev', ['build'] );

};