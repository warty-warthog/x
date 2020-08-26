webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Icons.tsx":
/*!******************************!*\
  !*** ./components/Icons.tsx ***!
  \******************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Icons.module.scss */ \"./styles/Icons.module.scss\");\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Icons.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Icons = function Icons() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      startApp = function startApp(id) {\n    return function () {\n      return updateApps({\n        update: {\n          running: true\n        },\n        id: id\n      });\n    };\n  };\n\n  return __jsx(\"nav\", {\n    className: _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, apps.map(function (_ref, index) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        name = _ref.name;\n    return __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n      key: id,\n      icon: icon,\n      name: name,\n      onDoubleClick: startApp(id) // TODO: Also unminimize\n      // {...useDoubleTap(startApp(id))}\n      ,\n      tabIndex: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(Icons, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Icons;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29ucy50c3g/MTRmMCJdLCJuYW1lcyI6WyJJY29ucyIsInVzZUNvbnRleHQiLCJBcHBzQ29udGV4dCIsImFwcHMiLCJ1cGRhdGVBcHBzIiwic3RhcnRBcHAiLCJpZCIsInVwZGF0ZSIsInJ1bm5pbmciLCJzdHlsZXMiLCJpY29ucyIsIm1hcCIsImluZGV4IiwiaWNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFTyxJQUFNQSxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0FDLHdEQUFVLENBQUNDLDBEQUFELENBRFY7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCO0FBQUEsTUFDZkMsVUFEZSxlQUNmQSxVQURlO0FBQUEsTUFFM0JDLFFBRjJCLEdBRWhCLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQWdCO0FBQUEsYUFBTUYsVUFBVSxDQUFDO0FBQUVHLGNBQU0sRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBVjtBQUE2QkYsVUFBRSxFQUFGQTtBQUE3QixPQUFELENBQWhCO0FBQUEsS0FBaEI7QUFBQSxHQUZnQjs7QUFJN0IsU0FDRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsZ0JBQXFCQyxLQUFyQjtBQUFBLFFBQUdOLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFFBQU9PLElBQVAsUUFBT0EsSUFBUDtBQUFBLFFBQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLFdBQ1IsTUFBQywwQ0FBRDtBQUNFLFNBQUcsRUFBRVIsRUFEUDtBQUVFLFVBQUksRUFBRU8sSUFGUjtBQUdFLFVBQUksRUFBRUMsSUFIUjtBQUlFLG1CQUFhLEVBQUVULFFBQVEsQ0FBQ0MsRUFBRCxDQUp6QixDQUkrQjtBQUM3QjtBQUxGO0FBTUUsY0FBUSxFQUFFTSxLQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQURGLENBREY7QUFnQkQsQ0FwQk07O0dBQU1aLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ljb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9JY29ucy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0FwcHMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURvdWJsZVRhcCB9IGZyb20gJ3VzZS1kb3VibGUtdGFwJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL0ljb24nO1xuXG5leHBvcnQgY29uc3QgSWNvbnM6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIHN0YXJ0QXBwID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgcnVubmluZzogdHJ1ZSB9LCBpZCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgPG9sPlxuICAgICAgICB7YXBwcy5tYXAoKHsgaWQsIGljb24sIG5hbWUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgb25Eb3VibGVDbGljaz17c3RhcnRBcHAoaWQpfSAvLyBUT0RPOiBBbHNvIHVubWluaW1pemVcbiAgICAgICAgICAgIC8vIHsuLi51c2VEb3VibGVUYXAoc3RhcnRBcHAoaWQpKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXtpbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Icons.tsx\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, author, license, scripts, dependencies, devDependencies, prettier, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"x\\\",\\\"version\\\":\\\"1.0.0\\\",\\\"author\\\":\\\"Dustin Brett\\\",\\\"license\\\":\\\"MIT\\\",\\\"scripts\\\":{\\\"build\\\":\\\"next build\\\",\\\"deploy\\\":\\\"next build && next export && cp CNAME out && touch out/.nojekyll && gh-pages-clean && gh-pages -d out -t true\\\",\\\"dev\\\":\\\"next dev\\\",\\\"export\\\":\\\"next export\\\",\\\"start\\\":\\\"next start\\\",\\\"eslint\\\":\\\"eslint **/*.tsx *.ts *.js\\\",\\\"stylelint\\\":\\\"stylelint styles\\\",\\\"prettier\\\":\\\"prettier --write .\\\",\\\"csscomb\\\":\\\"csscomb styles\\\",\\\"check\\\":\\\"npm run eslint && npm run csscomb && npm run prettier && npm run stylelint\\\"},\\\"dependencies\\\":{\\\"@fortawesome/fontawesome-svg-core\\\":\\\"^1.2.30\\\",\\\"@fortawesome/free-solid-svg-icons\\\":\\\"^5.14.0\\\",\\\"@fortawesome/react-fontawesome\\\":\\\"^0.1.11\\\",\\\"next\\\":\\\"^9.5.2\\\",\\\"re-resizable\\\":\\\"^6.5.4\\\",\\\"react\\\":\\\"^16.13.1\\\",\\\"react-dom\\\":\\\"^16.13.1\\\",\\\"react-draggable\\\":\\\"^4.4.3\\\",\\\"react-resizable\\\":\\\"^1.10.1\\\",\\\"react-rnd\\\":\\\"^10.2.2\\\",\\\"sass\\\":\\\"^1.26.10\\\",\\\"three\\\":\\\"^0.119.1\\\",\\\"use-double-tap\\\":\\\"^1.3.0\\\"},\\\"devDependencies\\\":{\\\"@svgr/webpack\\\":\\\"^5.4.0\\\",\\\"@types/next\\\":\\\"^9.0.0\\\",\\\"@types/node\\\":\\\"^14.6.0\\\",\\\"@types/react\\\":\\\"^16.9.46\\\",\\\"@types/react-dom\\\":\\\"^16.9.8\\\",\\\"@types/react-fontawesome\\\":\\\"^1.6.4\\\",\\\"@types/react-resizable\\\":\\\"^1.7.2\\\",\\\"@types/sass\\\":\\\"^1.16.0\\\",\\\"@typescript-eslint/eslint-plugin\\\":\\\"^3.9.1\\\",\\\"@typescript-eslint/parser\\\":\\\"^3.9.1\\\",\\\"csscomb\\\":\\\"^4.3.0\\\",\\\"eslint\\\":\\\"^7.7.0\\\",\\\"eslint-plugin-react\\\":\\\"^7.20.6\\\",\\\"gh-pages\\\":\\\"^3.1.0\\\",\\\"prettier\\\":\\\"2.0.5\\\",\\\"stylelint\\\":\\\"^13.6.1\\\",\\\"stylelint-config-recommended\\\":\\\"^3.0.0\\\",\\\"typescript\\\":\\\"^4.0.2\\\"},\\\"prettier\\\":{\\\"singleQuote\\\":true,\\\"trailingComma\\\":\\\"none\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ })

})