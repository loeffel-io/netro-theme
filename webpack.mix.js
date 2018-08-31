let mix = require('laravel-mix')

mix.js('./assets/js/app.js', './assets/dist')
    .sass('./assets/sass/app.scss', './assets/dist')
    .setPublicPath('./assets/dist')