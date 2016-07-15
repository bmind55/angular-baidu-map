module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                asi: true,
                browser: true,
                eqeqeq: false,
                eqnull: true,
                es3: true,
                expr: true,
                laxbreak: true,
                nonbsp: true,
                strict: true,
                undef: true,
                unused: true,
                globals: {
                    angular: true
                }
            },
            lib: ['src/*.js']
        },

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'watch']);
};