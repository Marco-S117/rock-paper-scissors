let mix = require('laravel-mix');

mix .js('resources/js/script.js', 'public/assets/js')
    .sass('resources/sass/style.scss', 'public/assets/css')
    .copyDirectory("resources/pages/", "public")
;
