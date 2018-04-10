let mix = require('laravel-mix');

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


mix.webpackConfig({
    module: {
        loaders: [
            {
                test: /\.js?$/,
                query: {
                    presets: ['es2015','react', 'stage-0']
                },
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'
                ]
            }
        ]
    }
});
mix.react('resources/assets/js/app.js', 'public/build/js');



