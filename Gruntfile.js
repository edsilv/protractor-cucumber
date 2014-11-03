module.exports = function (grunt) {

    grunt.initConfig({
        protractor: {
            dev: {
                options: {
                    configFile: "test/protractor-conf.js"
                }
            }
        },
        'http-server': {
            dev: {
                root: './app',
                port: 8080,
                host: "127.0.0.1",
                cache: -1,
                showDir : true,
                autoIndex: false,
                ext: "html",
                runInBackground: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask("test", '', function(){
        grunt.task.run(
            'http-server:dev',
            'protractor:dev'
        );
    });

};
