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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(init);

function init() {
  // All variables
  var uChoice,
      userScore = 0,
      botScore = 0; // Hide result column

  $('#mjs_resultOutput').hide(); // Hide another choice button

  $('#mjs_anotherChoice').hide(); // Hide invite to play message

  $('#mjs_gameStarted').hide(); // Show user choice 

  $('#mjs_start').click(showChoice); // Get choice

  $(document).on('click', '.ms_choice', function () {
    uChoice = $(this).attr('choice');
    bChoice = getBotChoice();
    choiceHighlight(uChoice, bChoice);
    result = showWinner(uChoice, bChoice);
    printResult(result);
  });
  /* * * ALL FUNCTIONS * * */
  // Start game

  function showChoice() {
    $(this).slideUp(250);
    $(this).parent().slideUp(350);
    $('#mjs_gameStarted').delay(750).fadeIn(350);
  } // Get bot choice


  function getBotChoice() {
    var possibleChoice = ['r', 'p', 's'];
    var rand = Math.floor(Math.random() * 3);
    var res;

    switch (rand) {
      case 0:
        res = possibleChoice[0];
        break;

      case 1:
        res = possibleChoice[1];
        break;

      case 2:
        res = possibleChoice[2];
        break;
    }

    return res;
  } // Show user and bot choice


  function choiceHighlight(uChoice, bChoice) {
    $("i[choice|='" + uChoice + "']").removeClass('ms_choice');
    $("i[b-choice|='" + bChoice + "']").removeClass('mjs_botChoice');
    setTimeout(function () {
      $("i[choice|='" + uChoice + "']").addClass('ms_choice');
      $("i[b-choice|='" + bChoice + "']").addClass('mjs_botChoice');
      $('#mjs_resultOutput').fadeOut(350);
    }, 1250);
  } // Show the winner of the match


  function showWinner(uChoice, bChoice) {
    switch (uChoice + bChoice) {
      // User win
      case "rs":
      case "pr":
      case "sp":
        userScore++;
        $('#mjs_uPointsCounter').delay(250).fadeIn(350).append().html(userScore);
        return "User";
        break;
      // Bot win

      case "rp":
      case "ps":
      case "sr":
        botScore++;
        $('#mjs_bPointsCounter').delay(250).fadeIn(350).append().html(botScore);
        return "Bot";
        break;
      // Draws

      case "rr":
      case "pp":
      case "ss":
        return "draw";
        break;
    }
  } // Print the winner in page


  function printResult(result) {
    var output;
    if (result === "draw" ? output = "It's a draw!" : output = result + " win!") ;
    $('#mjs_resultOutput').delay(250).fadeIn(350).append().html(output);
  }
}

/***/ }),

/***/ "./resources/sass/style.scss":
/*!***********************************!*\
  !*** ./resources/sass/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./resources/js/script.js ./resources/sass/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Marco Polino\Desktop\pojects-temp\rock-paper-scissors\resources\js\script.js */"./resources/js/script.js");
module.exports = __webpack_require__(/*! C:\Users\Marco Polino\Desktop\pojects-temp\rock-paper-scissors\resources\sass\style.scss */"./resources/sass/style.scss");


/***/ })

/******/ });