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
                    angular: true,
                    console: true
                }
            },
            lib: ['src/*.js']
        },

        uglify: {
            app: {
                files: {
                    'dist/angular-baidu-map.min.js': ['src/angular-baidu-map.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
};