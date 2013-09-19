module.exports = function( grunt ){

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		browserify: {
			hh: {
				files: {
					'handlebars_helper.js': ['src/browser.js']
				}
			}
		}
	});

	// the cool/easy way to do it
	Object.keys( pkg.devDependencies ).forEach( function( dep ){
		if( dep.substring( 0, 6 ) === 'grunt-' ) grunt.loadNpmTasks( dep );
	});

	grunt.registerTask( 'default', ['dev'] );
	grunt.registerTask( 'build', ['browserify'] );
	grunt.registerTask( 'dev', ['build'] );

};