const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js').sass(
    'resources/sass/app.scss',
    'public/css'
);

mix.styles(['resources/assets/css/fontawesome/all.css'], 'public/css/libs.css');

// mix.scripts(
//     [
//         'resources/assets/js/libs/bootstrap.min.js',
//     ],
//     'public/js/libs.js',
// );
