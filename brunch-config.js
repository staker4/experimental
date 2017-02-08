module.exports = {

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
        },
    },

    modules: {
        autoRequire: {
            'app.js': ['initialize']
        }
    },

    npm: {
        globals: {
            jQuery: 'jquery',
            $: 'jquery',
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
        },
    },

    server: {
        port: 6832
    }
};