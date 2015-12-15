module.exports = function(grunt) {
//require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	function ftpTask(files) {
		return {
			options: {
					host: "wdsclient.com",
					dest: "/public_html/em/log/",
					authKey: "server",
			},
			files: [{
				expand: true,
				cwd: '.',
				src: [ files ]
			}]
		}
	};


	grunt.config.init({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'stylesheets/style.css': 'sass/style.scss'
				}
			}
		},
		ftp_push: {
			all: ftpTask([
				"**.html",
				"stylesheets/style.css",
				"js/**"
			]),
			html: ftpTask([
				'**.html'
			]),
			js: ftpTask([
				'js/<%= path %>/**'
			])
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-ftp-push');

	grunt.registerTask('push', ['ftp_push:all']);
	grunt.registerTask('html', ['ftp_push:html']);

	grunt.registerTask('js', '', function(folder) {
		var path = (folder == undefined) ? '**' : folder;
		grunt.config.set('path', path)
		grunt.task.run('ftp_push:js');
	});

	grunt.registerTask('default', ['sass', 'ftp_push:all']);
};
