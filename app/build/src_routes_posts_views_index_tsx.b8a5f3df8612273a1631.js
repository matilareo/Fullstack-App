/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_routes_posts_views_index_tsx"],{

/***/ "./src/Apollo/queries/posts.tsx":
/*!**************************************!*\
  !*** ./src/Apollo/queries/posts.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_POSTS\": () => (/* binding */ GET_POSTS)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/core/index.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GET_POSTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n\\t{\\n    getPosts{\\n      id\\n      title\\n    }\\n  }\\n\"])));\n\n//# sourceURL=webpack://client/./src/Apollo/queries/posts.tsx?");

/***/ }),

/***/ "./src/routes/posts/views/index.tsx":
/*!******************************************!*\
  !*** ./src/routes/posts/views/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Apollo_queries_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Apollo/queries/posts */ \"./src/Apollo/queries/posts.tsx\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js\");\n/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.css */ \"./src/routes/posts/views/test.css\");\n\n\n\n\n\n\nvar PostContainer = function PostContainer() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_Apollo_queries_posts__WEBPACK_IMPORTED_MODULE_1__.GET_POSTS),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"ui active centered inline loader\"\n  });\n  if (error) return \"Error! \".concat(error.message);\n  return data && data.getPosts.map(function (elm) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.default, {\n      info: true,\n      header: \"Post Id: \".concat(elm.id),\n      content: \"\".concat(elm.title)\n    }));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContainer);\n\n//# sourceURL=webpack://client/./src/routes/posts/views/index.tsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/routes/posts/views/test.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/routes/posts/views/test.css ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".test {\\n  color: aquamarine;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://client/./src/routes/posts/views/test.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/routes/posts/views/test.css":
/*!*****************************************!*\
  !*** ./src/routes/posts/views/test.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./test.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/routes/posts/views/test.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://client/./src/routes/posts/views/test.css?");

/***/ })

}]);