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
            joinTo: 'app.css'
        }
    },

    plugins: {
        babel: {
            presets: ['es2015']
        }
    }
};