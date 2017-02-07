module.exports = {
    server: {
        port: 6832
    },
    modules: {
        autoRequire: {
            'app.js': ['app.module']
        }
    },
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: {
            joinTo: {
                'vendor.css': /^vendor|node_modules/,
                'app.css': /^app\/(?!vendor)/
            }
        }
    },

    plugins: {
        babel: {
            presets: ['es2015']
        },
        postcss: {
            processors: [
                require('postcss-import')
            ]
        }
    }
};