webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dos.tsx":
/*!****************************!*\
  !*** ./components/Dos.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Dos.module.scss */ \"./styles/Dos.module.scss\");\n/* harmony import */ var _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar dosOptions = {\n  wdosboxUrl: '/libs/wdosbox.js',\n  onprogress: function onprogress() {}\n}; // TODO: Lock canvas to window width\n// TODO: Fix transparent border around canvas / below title bar\n// TODO: Loading screen until game is running\n\nvar Dos = function Dos(_ref) {\n  _s();\n\n  var args = _ref.args,\n      url = _ref.url;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var ci;\n    window.Dos(canvasRef.current, dosOptions).then(function (_ref2) {\n      var fs = _ref2.fs,\n          main = _ref2.main;\n      return fs.extract(url).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return main(args);\n\n              case 2:\n                ci = _context.sent;\n                console.log(ci);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      })));\n    });\n    return function () {\n      ci.exit();\n    };\n  }, []);\n\n  __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n  return __jsx(\"canvas\", {\n    className: _styles_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dos,\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Dos, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Dos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Eb3MudHN4P2Q1MDIiXSwibmFtZXMiOlsiZG9zT3B0aW9ucyIsIndkb3Nib3hVcmwiLCJvbnByb2dyZXNzIiwiRG9zIiwiYXJncyIsInVybCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNpIiwid2luZG93IiwiY3VycmVudCIsInRoZW4iLCJmcyIsIm1haW4iLCJleHRyYWN0IiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJyZXF1aXJlIiwic3R5bGVzIiwiZG9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFTQSxJQUFNQSxVQUFVLEdBQUc7QUFDakJDLFlBQVUsRUFBRSxrQkFESztBQUVqQkMsWUFBVSxFQUFFLHNCQUFNLENBQUU7QUFGSCxDQUFuQixDLENBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLEdBQWUsR0FBRyxTQUFsQkEsR0FBa0IsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3pDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsRUFBSjtBQUVDQyxVQUFELENBQ0dQLEdBREgsQ0FDT0csU0FBUyxDQUFDSyxPQURqQixFQUMrQ1gsVUFEL0MsRUFFR1ksSUFGSCxDQUVRO0FBQUEsVUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsVUFBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsYUFDSkQsRUFBRSxDQUFDRSxPQUFILENBQVdWLEdBQVgsRUFBZ0JPLElBQWhCLGdNQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUkUsSUFBSSxDQUFDVixJQUFELENBREk7O0FBQUE7QUFDbkJLLGtCQURtQjtBQUVuQk8sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixFQUFaOztBQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFyQixHQURJO0FBQUEsS0FGUjtBQVNBLFdBQU8sWUFBTTtBQUNYQSxRQUFFLENBQUNTLElBQUg7QUFDRCxLQUZEO0FBR0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFpQkFDLHFCQUFPLENBQUMsb0RBQUQsQ0FBUDs7QUFFQSxTQUFPO0FBQVEsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxHQUExQjtBQUErQixPQUFHLEVBQUVmLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBdkJEOztHQUFNSCxHOztLQUFBQSxHO0FBeUJTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRG9zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRG9zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBEb3NGYWN0b3J5IH0gZnJvbSAnanMtZG9zJztcbmltcG9ydCB0eXBlIHsgRG9zQ29tbWFuZEludGVyZmFjZSB9IGZyb20gJ2pzLWRvcy9kaXN0L3R5cGVzY3JpcHQvanMtZG9zLWNpJztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBEb3NXaW5kb3cgPSBXaW5kb3cgJiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHsgRG9zOiBEb3NGYWN0b3J5IH07XG5cbnR5cGUgRG9zQXBwID0ge1xuICBhcmdzOiBzdHJpbmdbXTtcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBkb3NPcHRpb25zID0ge1xuICB3ZG9zYm94VXJsOiAnL2xpYnMvd2Rvc2JveC5qcycsXG4gIG9ucHJvZ3Jlc3M6ICgpID0+IHt9XG59O1xuXG4vLyBUT0RPOiBMb2NrIGNhbnZhcyB0byB3aW5kb3cgd2lkdGhcbi8vIFRPRE86IEZpeCB0cmFuc3BhcmVudCBib3JkZXIgYXJvdW5kIGNhbnZhcyAvIGJlbG93IHRpdGxlIGJhclxuLy8gVE9ETzogTG9hZGluZyBzY3JlZW4gdW50aWwgZ2FtZSBpcyBydW5uaW5nXG5cbmNvbnN0IERvczogRkM8RG9zQXBwPiA9ICh7IGFyZ3MsIHVybCB9KSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2k6IERvc0NvbW1hbmRJbnRlcmZhY2U7XG5cbiAgICAod2luZG93IGFzIERvc1dpbmRvdylcbiAgICAgIC5Eb3MoY2FudmFzUmVmLmN1cnJlbnQgYXMgSFRNTENhbnZhc0VsZW1lbnQsIGRvc09wdGlvbnMpXG4gICAgICAudGhlbigoeyBmcywgbWFpbiB9KSA9PlxuICAgICAgICBmcy5leHRyYWN0KHVybCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY2kgPSBhd2FpdCBtYWluKGFyZ3MpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2kuZXhpdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXF1aXJlKCdqcy1kb3MnKTtcblxuICByZXR1cm4gPGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5kb3N9IHJlZj17Y2FudmFzUmVmfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dos.tsx\n");

/***/ })

})