/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animations.js":
/*!**********************************!*\
  !*** ./js/modules/animations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animations)\n/* harmony export */ });\nfunction animations() {\n  var title = new SplitType('.main_info .title');\n  var hello = new SplitType('.main_info #hello');\n  var subtitle = new SplitType('.main_info #subtitle');\n  var projects = document.querySelector('.call_to_project');\n  if (title && hello && subtitle && projects) {\n    gsap.to('.char', {\n      y: 0,\n      stagger: 0.05,\n      delay: 0.3,\n      duration: 0.1\n    });\n    gsap.to('.word', {\n      y: 0,\n      stagger: 0.05,\n      delay: 0.3,\n      duration: 0.1\n    });\n  }\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/animations.js?");

/***/ }),

/***/ "./js/modules/anime_on_scroll.js":
/*!***************************************!*\
  !*** ./js/modules/anime_on_scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimationOnScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\nvar AnimationOnScroll = /*#__PURE__*/function () {\n  function AnimationOnScroll(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnimationOnScroll);\n    this.sections = document.querySelectorAll(sections);\n    this.windowHeightHalf = window.innerHeight * 0.6;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.checkDistance.bind(this), 25);\n  }\n\n  // Gets the distance of each item in relation\n  // to the top of the page\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnimationOnScroll, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offset = section.offsetTop;\n        return {\n          element: section,\n          offset: Math.floor(offset - _this.windowHeightHalf)\n        };\n      });\n    }\n\n    // Checks the distance of each section\n    // in relation to the scroll\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      this.distance.forEach(function (item) {\n        if (window.pageYOffset > item.offset) {\n          item.element.classList.add('animate');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        window.addEventListener('scroll', this.checkDistance);\n      }\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener('scroll', this.checkDistance);\n    }\n  }]);\n  return AnimationOnScroll;\n}();\n\n\n//# sourceURL=webpack://portfolio/./js/modules/anime_on_scroll.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/languageSwitch.js":
/*!**************************************!*\
  !*** ./js/modules/languageSwitch.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ languageSwitch)\n/* harmony export */ });\nfunction languageSwitch() {\n  var languageSelect = document.querySelector('[data-language]');\n  var URLs = {\n    ptBR: '/portfolio/',\n    enUK: \"/portfolio/en\"\n  };\n  if (window.location.pathname === '/projetos.html') {\n    // URLs.ptBR = '/portfolio/projetos'\n    // URLs.enUK = '/portfolio/projetos-en'\n    URLs.ptBR = '/projetos.html';\n    URLs.enUK = '/projetos-en.html';\n  }\n  var redirect = function redirect() {\n    // On change, will redirect the user to the desired language page\n    var selectedValue = languageSelect.value;\n    window.location.href = URLs[selectedValue];\n  };\n  languageSelect.addEventListener('change', redirect);\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/languageSwitch.js?");

/***/ }),

/***/ "./js/modules/mobileMenu.js":
/*!**********************************!*\
  !*** ./js/modules/mobileMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mobileMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\nfunction mobileMenu() {\n  var hamburgerBtn = document.querySelector('[data-menu=\"hamburger\"]');\n  var hamburger = document.querySelector('.hamburger');\n  var navList = document.querySelector('.nav_list');\n  var userEvents = ['touchstart', 'click'];\n  var toggleActive = function toggleActive(e) {\n    if (e.type === 'touchstart') e.preventDefault();\n    navList.classList.add('active');\n    hamburger.classList.add('active');\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navList, userEvents, function () {\n      navList.classList.remove('active');\n      hamburger.classList.remove('active');\n    });\n    var active = navList.classList.contains('active');\n    e.currentTarget.setAttribute('aria-expanded', active);\n    if (active) e.currentTarget.setAttribute('aria-label', 'Fechar Menu');else hamburgerBtn.setAttribute('aria-label', 'Abrir Menu');\n  };\n  userEvents.forEach(function (userEvent) {\n    hamburgerBtn.addEventListener(userEvent, toggleActive);\n  });\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/mobileMenu.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/themeSwitch.js":
/*!***********************************!*\
  !*** ./js/modules/themeSwitch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeSwitch)\n/* harmony export */ });\nfunction ThemeSwitch() {\n  var themeCheckbox = document.getElementById('theme_checkbox');\n\n  // Toggle light theme\n  var toggleLightMode = function toggleLightMode() {\n    document.documentElement.classList.toggle('light');\n  };\n  themeCheckbox.addEventListener('change', function () {\n    toggleLightMode();\n    localStorage.removeItem('light');\n    if (document.documentElement.classList.contains('light')) {\n      localStorage.setItem('light', 1);\n    }\n  });\n\n  // Load theme storaged in LocalStorage\n\n  var loadTheme = function loadTheme() {\n    var lightMode = localStorage.getItem('light');\n    if (lightMode) {\n      toggleLightMode();\n      themeCheckbox.checked = true;\n    }\n  };\n  loadTheme();\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/themeSwitch.js?");

/***/ }),

/***/ "./js/modules/typeEffect.js":
/*!**********************************!*\
  !*** ./js/modules/typeEffect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ typeEffect)\n/* harmony export */ });\nfunction typeEffect() {\n  // List of sentences\n  var content = ['JavaScript', 'React', 'CSS', 'Figma', 'UI Design'];\n\n  // Current sentence being processed\n  var part = 0;\n\n  // Character number of the current sentence being processed\n  var partIndex = 0;\n\n  // Holds the handle returned from setInterval\n  var intertvalVal;\n\n  // Element that holds the text\n  var element = document.querySelector('.type_effect_text');\n\n  // Cursor element\n  var cursor = document.querySelector('.cursor');\n\n  // Implements typing effect\n  if (element) {\n    // eslint-disable-next-line no-inner-declarations\n    var Type = function Type() {\n      // Get substring with 1 characater added\n      var text = content[part].substring(0, partIndex + 1);\n      element.innerHTML = text;\n      partIndex++;\n\n      // Implements deleting effect\n      function Delete() {\n        // Get substring with 1 characater deleted\n        // eslint-disable-next-line no-shadow\n        var text = content[part].substring(0, partIndex - 1);\n        element.innerHTML = text;\n        partIndex--;\n\n        // If sentence has been deleted then start to display the next sentence\n        if (text === '') {\n          clearInterval(intertvalVal);\n\n          // If current sentence was last then display the first one, else move to the next\n          if (part === content.length - 1) part = 0;else part++;\n          partIndex = 0;\n\n          // Start to display the next sentence after some time\n          setTimeout(function () {\n            cursor.style.display = 'inline-block';\n            intertvalVal = setInterval(Type, 100);\n          }, 200);\n        }\n      }\n\n      // If full sentence has been displayed then start to delete the sentence after some time\n      if (text === content[part]) {\n        // Hide the cursor\n        cursor.style.display = 'none';\n        clearInterval(intertvalVal);\n        setTimeout(function () {\n          intertvalVal = setInterval(Delete, 100);\n        }, 1000);\n      }\n    }; // Start the typing effect on load\n    intertvalVal = setInterval(Type, 100);\n  }\n}\n\n//# sourceURL=webpack://portfolio/./js/modules/typeEffect.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_themeSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/themeSwitch.js */ \"./js/modules/themeSwitch.js\");\n/* harmony import */ var _modules_languageSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/languageSwitch.js */ \"./js/modules/languageSwitch.js\");\n/* harmony import */ var _modules_typeEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/typeEffect.js */ \"./js/modules/typeEffect.js\");\n/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/animations.js */ \"./js/modules/animations.js\");\n/* harmony import */ var _modules_anime_on_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/anime_on_scroll.js */ \"./js/modules/anime_on_scroll.js\");\n\n\n\n\n\n\n(0,_modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_themeSwitch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_languageSwitch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_typeEffect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nvar animeOnScroll = new _modules_anime_on_scroll_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-scroll]');\nanimeOnScroll.init();\n\n//# sourceURL=webpack://portfolio/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n  return arr2;\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://portfolio/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;