webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dos.tsx":
/*!****************************!*\
  !*** ./components/Dos.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Dos.module.scss */ \"./styles/Dos.module.scss\");\n/* harmony import */ var _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar dosOptions = {\n  wdosboxUrl: '/libs/wdosbox.js',\n  onprogress: function onprogress() {}\n}; // TODO: Lock canvas to window width\n// TODO: Fix transparent border around canvas / below title bar\n// TODO: Loading screen until game is running\n\nvar Dos = function Dos(_ref) {\n  _s();\n\n  var args = _ref.args,\n      url = _ref.url;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var ci;\n    window.Dos(canvasRef.current, dosOptions).then(function (_ref2) {\n      var fs = _ref2.fs,\n          main = _ref2.main;\n      return fs.extract(url).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return main(args);\n\n              case 2:\n                return _context.abrupt(\"return\", ci = _context.sent);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      })));\n    });\n    return function () {\n      ci.exit();\n    };\n  }, []);\n\n  __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n  return __jsx(\"canvas\", {\n    className: _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dos,\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Dos, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Dos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Eb3MudHN4P2Q1MDIiXSwibmFtZXMiOlsiZG9zT3B0aW9ucyIsIndkb3Nib3hVcmwiLCJvbnByb2dyZXNzIiwiRG9zIiwiYXJncyIsInVybCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNpIiwid2luZG93IiwiY3VycmVudCIsInRoZW4iLCJmcyIsIm1haW4iLCJleHRyYWN0IiwiZXhpdCIsInJlcXVpcmUiLCJzdHlsZXMiLCJkb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQVNBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsWUFBVSxFQUFFLGtCQURLO0FBRWpCQyxZQUFVLEVBQUUsc0JBQU0sQ0FBRTtBQUZILENBQW5CLEMsQ0FLQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsR0FBZSxHQUFHLFNBQWxCQSxHQUFrQixPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDekMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxFQUFKO0FBRUNDLFVBQUQsQ0FDR1AsR0FESCxDQUNPRyxTQUFTLENBQUNLLE9BRGpCLEVBQytDWCxVQUQvQyxFQUVHWSxJQUZILENBRVE7QUFBQSxVQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxVQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxhQUNKRCxFQUFFLENBQUNFLE9BQUgsQ0FBV1YsR0FBWCxFQUFnQk8sSUFBaEIsZ01BQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF3QkUsSUFBSSxDQUFDVixJQUFELENBQTVCOztBQUFBO0FBQUEsaURBQWFLLEVBQWI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBckIsR0FESTtBQUFBLEtBRlI7QUFNQSxXQUFPLFlBQU07QUFDWEEsUUFBRSxDQUFDTyxJQUFIO0FBQ0QsS0FGRDtBQUdELEdBWlEsRUFZTixFQVpNLENBQVQ7O0FBY0FDLHFCQUFPLENBQUMsb0RBQUQsQ0FBUDs7QUFFQSxTQUFPO0FBQVEsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxHQUExQjtBQUErQixPQUFHLEVBQUViLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBcEJEOztHQUFNSCxHOztLQUFBQSxHO0FBc0JTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRG9zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRG9zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBEb3NGYWN0b3J5IH0gZnJvbSAnanMtZG9zJztcbmltcG9ydCB0eXBlIHsgRG9zQ29tbWFuZEludGVyZmFjZSB9IGZyb20gJ2pzLWRvcy9kaXN0L3R5cGVzY3JpcHQvanMtZG9zLWNpJztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBEb3NXaW5kb3cgPSBXaW5kb3cgJiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHsgRG9zOiBEb3NGYWN0b3J5IH07XG5cbnR5cGUgRG9zQXBwID0ge1xuICBhcmdzOiBzdHJpbmdbXTtcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBkb3NPcHRpb25zID0ge1xuICB3ZG9zYm94VXJsOiAnL2xpYnMvd2Rvc2JveC5qcycsXG4gIG9ucHJvZ3Jlc3M6ICgpID0+IHt9XG59O1xuXG4vLyBUT0RPOiBMb2NrIGNhbnZhcyB0byB3aW5kb3cgd2lkdGhcbi8vIFRPRE86IEZpeCB0cmFuc3BhcmVudCBib3JkZXIgYXJvdW5kIGNhbnZhcyAvIGJlbG93IHRpdGxlIGJhclxuLy8gVE9ETzogTG9hZGluZyBzY3JlZW4gdW50aWwgZ2FtZSBpcyBydW5uaW5nXG5cbmNvbnN0IERvczogRkM8RG9zQXBwPiA9ICh7IGFyZ3MsIHVybCB9KSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2k6IERvc0NvbW1hbmRJbnRlcmZhY2U7XG5cbiAgICAod2luZG93IGFzIERvc1dpbmRvdylcbiAgICAgIC5Eb3MoY2FudmFzUmVmLmN1cnJlbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQsIGRvc09wdGlvbnMpXG4gICAgICAudGhlbigoeyBmcywgbWFpbiB9KSA9PlxuICAgICAgICBmcy5leHRyYWN0KHVybCkudGhlbihhc3luYyAoKSA9PiAoY2kgPSBhd2FpdCBtYWluKGFyZ3MpKSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2kuZXhpdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXF1aXJlKCdqcy1kb3MnKTtcblxuICByZXR1cm4gPGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5kb3N9IHJlZj17Y2FudmFzUmVmfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dos.tsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Dos.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Dos.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Dos_dos__37wcK {\\n  width: 100%;\\n  height: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Dos.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,WAAA;EACA,YAAA;AACJ\",\"file\":\"Dos.module.scss\",\"sourcesContent\":[\".dos {\\n    width: 100%;\\n    height: 100%\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"dos\": \"Dos_dos__37wcK\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Rvcy5tb2R1bGUuc2Nzcz9lZmZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyxPQUFPLGlHQUFpRyxVQUFVLFVBQVUsd0RBQXdELGtCQUFrQixxQkFBcUIsS0FBSztBQUMvUztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvRG9zLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkRvc19kb3NfXzM3d2NLIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9Eb3MubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKXCIsXCJmaWxlXCI6XCJEb3MubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRvcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCVcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZG9zXCI6IFwiRG9zX2Rvc19fMzd3Y0tcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Dos.module.scss\n");

/***/ }),

/***/ "./styles/Dos.module.scss":
/*!********************************!*\
  !*** ./styles/Dos.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Dos.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Dos.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement);};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Dos.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Dos.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Dos.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Dos.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0Rvcy5tb2R1bGUuc2Nzcz85YWVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsc2RBQW1SOztBQUVyVDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzZEFBbVI7QUFDelI7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxzZEFBbVI7O0FBRTdTOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiLi9zdHlsZXMvRG9zLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRG9zLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRG9zLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRG9zLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Dos.module.scss\n");

/***/ })

})