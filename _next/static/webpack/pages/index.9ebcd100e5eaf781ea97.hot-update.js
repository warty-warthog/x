webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Windows_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Windows.module.scss */ \"./styles/Windows.module.scss\");\n/* harmony import */ var _styles_Windows_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Windows_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ \"./components/Window.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps;\n\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    className: _styles_Windows_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.windows,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  }).map(function (_ref2) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name;\n    return __jsx(_Window__WEBPACK_IMPORTED_MODULE_3__[\"Window\"], {\n      key: id,\n      name: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }));\n  })));\n};\n\n_s(Windows, \"bNB/CCMxzhhYdgzOzDecgVwGH9Y=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwic3R5bGVzIiwid2luZG93cyIsImZpbHRlciIsInJ1bm5pbmciLCJtaW5pbWl6ZWQiLCJtYXAiLCJBcHAiLCJjb21wb25lbnQiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFXLEdBQUcsU0FBZEEsT0FBYyxHQUFNO0FBQUE7O0FBQUEsb0JBQ2RDLHdEQUFVLENBQUNDLDBEQUFELENBREk7QUFBQSxNQUN2QkMsSUFEdUIsZUFDdkJBLElBRHVCOztBQUcvQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLENBQ0ZHLE1BREYsQ0FDUztBQUFBLFFBQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFFBQVlDLFNBQVosUUFBWUEsU0FBWjtBQUFBLFdBQTRCRCxPQUFPLElBQUksQ0FBQ0MsU0FBeEM7QUFBQSxHQURULEVBRUVDLEdBRkYsQ0FFTTtBQUFBLFFBQWNDLEdBQWQsU0FBR0MsU0FBSDtBQUFBLFFBQW1CQyxFQUFuQixTQUFtQkEsRUFBbkI7QUFBQSxRQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsV0FDSCxNQUFDLDhDQUFEO0FBQVEsU0FBRyxFQUFFRCxFQUFiO0FBQWlCLFVBQUksRUFBRUMsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERztBQUFBLEdBRk4sQ0FESCxDQURGLENBREY7QUFhRCxDQWhCTTs7R0FBTWIsTzs7S0FBQUEsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvV2luZG93cy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FwcHMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gJy4vV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8b2wgY2xhc3NOYW1lPXtzdHlsZXMud2luZG93c30+XG4gICAgICAgIHthcHBzXG4gICAgICAgICAgLmZpbHRlcigoeyBydW5uaW5nLCBtaW5pbWl6ZWQgfSkgPT4gcnVubmluZyAmJiAhbWluaW1pemVkKVxuICAgICAgICAgIC5tYXAoKHsgY29tcG9uZW50OiBBcHAsIGlkLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgIDxXaW5kb3cga2V5PXtpZH0gbmFtZT17bmFtZX0+XG4gICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgIDwvV2luZG93PlxuICAgICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Windows.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Windows.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Windows_windows__IuMkV {\\n  list-style-type: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Windows.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,qBAAA;AACF\",\"file\":\"Windows.module.scss\",\"sourcesContent\":[\".windows {\\n  list-style-type: none;\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"windows\": \"Windows_windows__IuMkV\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvd3MubW9kdWxlLnNjc3M/NzJiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0QiwwQkFBMEIsR0FBRyxPQUFPLHFHQUFxRyxXQUFXLGdFQUFnRSwwQkFBMEIsR0FBRyxLQUFLO0FBQ3pTO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9XaW5kb3dzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd3Nfd2luZG93c19fSXVNa1Yge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3dzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7QUFDRlwiLFwiZmlsZVwiOlwiV2luZG93cy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2luZG93cyB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd3NcIjogXCJXaW5kb3dzX3dpbmRvd3NfX0l1TWtWXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Windows.module.scss\n");

/***/ })

})