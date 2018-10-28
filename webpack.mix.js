const { mix } = require('laravel-mix');

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

mix.options({
    processCssUrls: false
});

mix.setPublicPath('/');

mix.sass('src/sass/style.scss', 'dist/jquery-tourer.css');
mix.copy('src/js/script.js', 'dist/jquery-tourer.js');
