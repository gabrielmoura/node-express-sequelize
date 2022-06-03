const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */




mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            })
        ],
        resolve: {
            alias: {
                'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
            }
        }
    };
});


mix.sass('resources/scss/app.scss', 'public/css')
    .js('resources/js/app.js', 'public/js')
    .copy('node_modules/tinymce/skins', 'public/js/skins')
    .copy('resources/img', 'public/images')
    .copy('resources/scss/fonts', 'public/fonts')
    //.browserSync(process.env.APP_URL)
    .extract(['jquery'])
    .sourceMaps();

