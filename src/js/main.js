window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let mainSlide = require('./modules/mainSlide'),
    difference = require('./modules/difference'),
    form = require('./modules/form'),
    player = require('./modules/videoPlayer'),
    showInfo = require('./modules/showInfo'),
    download = require('./modules/download');



    download();
    showInfo();
    mainSlide();
    difference('.officerold','.officer__card-item');
    difference('.officernew','.officer__card-item');
    form();
    player();
    

    console.log('jhgfds');

    






});