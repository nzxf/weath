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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Light.ttf */ \"./src/fonts/Poppins-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Medium.ttf */ \"./src/fonts/Poppins-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins-Bold.ttf */ \"./src/fonts/Poppins-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'light';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: 'med';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: 'bold';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n:root {\n  --greyish: rgba(212, 212, 212, 0.5);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-family: 'light';\n  /* border: solid 1px var(--greyish); */\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #D3D3D3;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr minmax(50px, 225px);\n  gap: 10px;\n  padding: 10px;\n}\n\n.main {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 35px 1fr 90px;\n  gap: 10px;\n}\n\n.start-main {\n  width: 100%;\n}\n.center-main {\n  width: 100%;\n  color: white;\n}\n\n.main-container {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  padding: 20px;\n\n  display: grid;\n  grid-template-rows: auto 1fr auto auto;\n  row-gap: 10px;\n  grid-template-columns: repeat(5, 1fr);\n  column-gap: 5px;\n}\n\n.top-container {\n  grid-column: 1/6;\n  display: flex;\n  gap: 5px;\n}\n.geo-icon {\n  height: 15px;\n  width: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transform: translateY(7.5px);\n}\n\n.main-city {\n  font-family: 'med';\n  padding: 5px 0;\n}\n\n.main-icon {\n  height: 100%;\n  grid-column: 1/6;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  text-shadow: 5px 5px 5px;\n}\n.main-weather {\n  grid-column: 1/6;\n  text-align: center;\n  font-family: 'bold';\n  font-size: 2rem;\n}\n\n.main-temp {\n  grid-column: 1/2;\n  text-align: center;\n}\n.main-humidity {\n  grid-column: 2/3;\n  text-align: center;\n}\n.main-wind {\n  grid-column: 3/4;\n  text-align: center;\n}\n.main-uv {\n  grid-column: 4/5;\n  text-align: center;\n}\n.main-cloud {\n  grid-column: 5/6;\n  text-align: center;\n}\n\n.sub-icon {\n  height: 30px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 25px;\n}\n\n.sub-text {\n  padding: 5px 0;\n}\n\n.end-main {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 5px;\n}\n\n.day-container {\n  border-radius: 15px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: 1fr 1fr 1fr;\n  text-align: center;\n  padding: 5px;\n  color: white;\n}\n\n.end-icon {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n\n.sidebar {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 35px 1fr;\n}\n\n.start-sidebar {\n  width: 100%;\n}\n.center-sidebar {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(5, auto);\n  gap: 7.5px;\n  padding: 10px 0 0 0;\n}\n\n.side-container {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 25px 25px 25px 25px;\n  color: white;\n}\n\n.side-city {\n  font-family: 'med';\n  color: #80D8FF;\n}\n\n.side-temperature {\n  font-family: 'bold';\n  font-size: 1.5rem;\n  height: 100%;\n  padding-top: 5px;\n  transform: scale(1.75) translate(5px, 9px);\n}\n\n.side-icon {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n  transform: translateY(7.5px);\n}\n\n@media only screen and (max-width: 500px) {\n  #content {\n    grid-template-columns: 1fr 80px;\n  }\n\n  .side-container {\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n  .side-temperature {\n    display: none;\n  }\n  .side-weather {\n    display: none;\n  }\n  .side-city {\n    font-size: .9rem;\n  }\n  .side-icon {\n    width: 35px;\n    height: 35px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _worlds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worlds */ \"./src/worlds.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst elementMaker = (type, parent, text = '', ...classNames) => {\n  if (!type || typeof type !== 'string') {\n    throw new Error(`Invalid value for 'type' parameter`);\n  }\n  if (!(parent instanceof Element)) {\n    throw new Error(`'parent' parameter must be valid DOM element`);\n  }\n  const element = document.createElement(type);\n  if (classNames.length > 0) {\n    classNames.forEach((className) => element.classList.add(className));\n  }\n  if (typeof text === 'string' && text !== '') {\n    element.textContent = text;\n  }\n  parent.appendChild(element);\n  return element;\n};\nconst randomizer = (min, max) => {\n  return Math.floor(Math.random() * (max + 1 - min) + min);\n};\nconst randomCities = (arr, howMany) => {\n  let result = [];\n  for (let i = 0; i < howMany; i++) {\n    let random = randomizer(0, arr.length - 1);\n    result.push(arr[random]);\n  }\n  return result;\n};\n\nconst tellIpAddress = async () => {\n  const res = await fetch('https://api.ipify.org?format=json');\n  const data = await res.json();\n  return data.ip;\n};\n\n// API GEO IP\nconst API_KEY_GEOIP = '46788080029a430a3331b15c97285a3f';\nconst tellLocation = async (ipAddress) => {\n  const url = 'http://api.ipstack.com/';\n  const res = await fetch(`${url}${ipAddress}?access_key=${API_KEY_GEOIP}`);\n  const data = await res.json();\n  console.log(data.city);\n};\n// tellLocation('138.199.22.107');\n\n// API WEATHER\nconst API_KEY_WEATHER = 'e1d35972d5eb49b5b3b154449231006';\nconst tellWeather = async (api, city) => {\n  const url = 'http://api.weatherapi.com/v1/';\n  const res = await fetch(`${url}current.json?key=${api}&q=${city}`);\n  const data = await res.json();\n  // console.log(data.current.condition.text);\n  return data;\n};\nconst tellForecast = async (api, zipcode, days) => {\n  const url = 'http://api.weatherapi.com/v1/';\n  const res = await fetch(\n    `${url}forecast.json?key=${api}&q=${zipcode}&days=${days}`\n  );\n  const data = await res.json();\n};\nconst searchCity = async (api, input) => {\n  const url = 'http://api.weatherapi.com/v1/';\n  const res = await fetch(`${url}search.json?key=${api}&q=${input}`);\n  const data = await res.json();\n  console.log(data);\n};\n// console.log(tellWeather(API_KEY_WEATHER, 'indonesia'));\n// tellWeather(API_KEY_WEATHER, 'depok');\n// searchCity(API_KEY_WEATHER, 'jaka')\n\nconst content = document.querySelector('#content');\nconst main = document.querySelector('.main');\nconst cities = document.querySelectorAll('.city');\n\nconst centerSidebar = document.querySelector('.center-sidebar');\nlet colors = {\n  blue: ['#CFE4FF', '#4CB6FE'],\n  blue2: ['#BBDEFB', '#2196F3'],\n  orange: ['#FFD54F', '#FFB900'],\n  green: ['#C8E6C9', '#66BB6A'],\n  green2: ['#DCEDC8', '#689F38'],\n  red: ['#FCE4EC', '#EC407A'],\n  purple: ['#E1BEE7', '#9C27B0'],\n  yellow: ['#FFEB3B', '#FBC02D'],\n  black: [\"#757575\", \"#212121\"],\n};\nfunction fillSidebar(cityArray) {\n  for (let i = 0; i < cityArray.length; i++) {\n    // const data = await tellWeather(API_KEY_WEATHER, cityArray[i]);\n    const sideContainer = elementMaker(\n      'div',\n      centerSidebar,\n      '',\n      'side-container'\n    );\n    sideContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;\n    elementMaker(\n      'div',\n      sideContainer,\n      // `${data.current.temp_c}°`,\n      '31°',\n      'side-temperature'\n    );\n    const sideIcon = elementMaker('div', sideContainer, '', 'side-icon');\n    sideIcon.style.backgroundImage =\n      // `url(${data.current.condition.icon})`\n      `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;\n    elementMaker(\n      'span',\n      sideContainer,\n      // `${data.location.name}, ${data.location.country}`,\n      'Madrid, Spain',\n      'side-city'\n    );\n    elementMaker(\n      'div',\n      sideContainer,\n      // data.current.condition.text,\n      'Partly Cloudy',\n      'side-weather'\n    );\n  }\n}\n\nfillSidebar(randomCities(_worlds__WEBPACK_IMPORTED_MODULE_0__.worlds, 5));\n\nconst endMain = document.querySelector('.end-main');\nfunction fillMainEnd(howMany) {\n  for (let i = 0; i < howMany; i++) {\n    const dayContainer = elementMaker('div', endMain, '', 'day-container');\n    dayContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;\n    elementMaker('div', dayContainer, `${howMany + i}`);\n    const icon = elementMaker('div', dayContainer, '', 'end-icon');\n    icon.style.backgroundImage = `url(https://cdn-icons-png.flaticon.com/512/6420/6420894.png)`;\n    elementMaker('div', dayContainer, '24°', 'end-temp');\n  }\n}\nfillMainEnd(7);\n\nconst centerMain = document.querySelector('.center-main');\nfunction fillMainCenter(cityName) {\n  const mainContainer = elementMaker('div', centerMain, '', 'main-container');\n  mainContainer.style.backgroundImage = `linear-gradient(to bottom left, ${colors.black[0]}, ${colors.black[1]}`;\n  // elementMaker('div', mainContainer, '12:45', 'main-time')\n  // elementMaker('div', mainContainer, '2/3/2023', 'main-date')\n  // GEO\n  const topContainer =elementMaker('div', mainContainer, '', 'top-container')\n  const geoIcon = elementMaker('span', topContainer, '', 'geo-icon')\n  geoIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6421/6421001.png)'\n  elementMaker('span', topContainer, 'San Francisco, United States', 'main-city')\n  const mainIcon = elementMaker('div', mainContainer, '', 'main-icon')\n  mainIcon.style.backgroundImage = `url(https://cdn-icons-png.flaticon.com/512/6421/6421095.png)`\n  elementMaker('div', mainContainer, 'Sunny', 'main-weather')\n  // TEMPERATURE\n  const temp = elementMaker('div', mainContainer, '', 'main-temp')\n  const tempIcon = elementMaker('div', temp, '', 'sub-icon')\n  tempIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6421/6421026.png)'\n  elementMaker('div', temp, '23°C', 'sub-text')\n  // HUMIDITY\n  const humid = elementMaker('div', mainContainer, '', 'main-humidity')\n  const humidIcon = elementMaker('div', humid, '', 'sub-icon')\n  humidIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6421/6421090.png)'\n  elementMaker('div', humid, '80%', 'sub-text')\n  // WIND\n  const wind = elementMaker('div', mainContainer, '', 'main-wind')\n  const windIcon = elementMaker('div', wind, '', 'sub-icon')\n  windIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6420/6420982.png)'\n  elementMaker('div', wind, '22 kph', 'sub-text')\n  // HUMIDITY\n  const uv = elementMaker('div', mainContainer, '', 'main-uv')\n  const uvIcon = elementMaker('div', uv, '', 'sub-icon')\n  uvIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6420/6420898.png)'\n  elementMaker('div', uv, '5.0', 'sub-text')\n  // WIND\n  const cloud = elementMaker('div', mainContainer, '', 'main-cloud')\n  const cloudIcon = elementMaker('div', cloud, '', 'sub-icon')\n  cloudIcon.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/6421/6421016.png)'\n  elementMaker('div', cloud, 'clear', 'sub-text')\n}\nfillMainCenter()\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/worlds.js":
/*!***********************!*\
  !*** ./src/worlds.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   worlds: () => (/* binding */ worlds)\n/* harmony export */ });\nconst africanCapitals = ['Cairo', 'Nairobi', 'Pretoria', 'Algiers', 'Abuja'];\nconst asianCapitals = ['Tokyo', 'Beijing', 'New Delhi', 'Seoul', 'Bangkok'];\nconst europeanCapitals = ['London', 'Paris', 'Berlin', 'Rome', 'Madrid'];\nconst northAmericanCapitals = [\n  'Washington D.C.',\n  'Ottawa',\n  'Mexico City',\n  'Bogotá',\n  'Havana',\n];\nconst southAmericanCapitals = [\n  'Brasília',\n  'Buenos Aires',\n  'Lima',\n  'Santiago ',\n  'Montevideo',\n];\nconst australiaOceaniaCapitals = [\n  'Canberra',\n  'Wellington ',\n  'Suva',\n  'Port Moresby',\n  'Honiara',\n];\nconst worlds = africanCapitals.concat(\n  asianCapitals,\n  europeanCapitals,\n  northAmericanCapitals,\n  southAmericanCapitals,\n  australiaOceaniaCapitals\n);\n\n\n\n\n//# sourceURL=webpack://weather/./src/worlds.js?");

/***/ }),

/***/ "./src/fonts/Poppins-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/Poppins-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdb29a5d7ccf57ff05a3.ttf\";\n\n//# sourceURL=webpack://weather/./src/fonts/Poppins-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Light.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Poppins-Light.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7641a0f76ca9ef6c252c.ttf\";\n\n//# sourceURL=webpack://weather/./src/fonts/Poppins-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Medium.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Poppins-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"673ed42382ab264e0bf5.ttf\";\n\n//# sourceURL=webpack://weather/./src/fonts/Poppins-Medium.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;