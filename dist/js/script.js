/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let mainSlide = __webpack_require__(/*! ./modules/mainSlide */ "./src/js/modules/mainSlide.js"),
    difference = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js"),
    form = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js"),
    player = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js"),
    showInfo = __webpack_require__(/*! ./modules/showInfo */ "./src/js/modules/showInfo.js"),
    download = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");



    download();
    showInfo();
    mainSlide();
    difference('.officerold','.officer__card-item');
    difference('.officernew','.officer__card-item');
    form();
    player();
    

    console.log('jhgfds');

    






});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function difference(selector,item) {

    let container = document.querySelector(selector),
        cards = container.querySelectorAll(item),
        plus = container.querySelector('.plus'),
        number = 0;

    cards.forEach((card, i, arr) => {
        if (i !== arr.length - 1) {
            card.style.display = 'none';
        }
    });

    plus.addEventListener('click', function () {
        if (number !== 2) {
            cards[number].style.display = 'flex';
            number++;
        } else{
            cards[number].style.display = 'flex';
            cards[cards.length - 1].remove();
        }
    });




}

module.exports = (difference);

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function download() {
    let btns = document.querySelectorAll('.download');
    link = '/src/assets/img/evolve.jpg';

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            let element = document.createElement('a');
            element.setAttribute('href', link);
            element.setAttribute('download', 'cool');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    });


}

module.exports = (download);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {

    let messages = { // пишем все сообщения в объект
        loading: 'Загрузка',
        seccuss: 'Спасибо!',
        failer: 'Произошла ошибка'
    };

    let forms = document.querySelectorAll('.form'), // находим наши формы и инпуты
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div'); //Создаем div для выода сообщений

    statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 18px;
        color: grey;
    `; 

    const mailInputs = document.querySelectorAll('[type="email"]');
    
    mailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                e.preventDefault();
            }
        });
    });

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) { //отпраавляем что то с формы
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', '/src/assets/question.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          

            let formData = new FormData(form); 
            request.send(formData);

           



            request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
                if (request.readyState < 4) {
                    statusMessage.innerHTML = messages.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = messages.seccuss;
                } else {
                    statusMessage.innerHTML = messages.failer;
                }
            });

            input.forEach(function (input) {
                input.value = '';
            });

            setTimeout(() => {
                statusMessage.remove();
            }, 6000);


        });
    });
}






module.exports = (form);

/***/ }),

/***/ "./src/js/modules/mainSlide.js":
/*!*************************************!*\
  !*** ./src/js/modules/mainSlide.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mainSlide() {

    let page = document.querySelector('.page'),
        slides = page.querySelectorAll('.slide'),
        btns = document.querySelectorAll('.next'),
        slideIndex = 1,
        hanson = document.querySelector('.hanson');
        




    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        hanson.style.opacity = '0';
        if (n == 3) {
            hanson.classList.add('animated');

            setTimeout(function () {
                hanson.style.opacity = '1';
                hanson.classList.add('slideInUp');
            }, 3000);
        } else {
            hanson.classList.remove('slideInUp');
        }

        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            plusSlides(1);
        });
        btn.parentNode.previousElementSibling.addEventListener('click', function (e) {
            e.preventDefault();
            slideIndex = 1;
            slides.forEach(function (slide) {
                slide.style.display = 'none';
            });
            slides[slideIndex - 1].style.display = 'block';
        });
    });
}

module.exports = (mainSlide);

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showInfo() {

    btns = document.querySelectorAll('.plus__content');


btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sibling = btn.closest('.module__info-show').nextElementSibling.classList.toggle('msg');

        });


    });
}

module.exports = (showInfo);

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function player() {

    let btns = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.close');
        let player;

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (document.querySelector('iframe#player')) {
                overlay.style.display = 'flex';
            } else {
                
                player = new YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: 'vZ4Sne0wdxY',
                });
                overlay.style.display = 'flex';
            }
        });
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        player.stopVideo();
    });




    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



}

module.exports = (player);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map