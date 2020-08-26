webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Icons.tsx":
/*!******************************!*\
  !*** ./components/Icons.tsx ***!
  \******************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Icons.module.scss */ \"./styles/Icons.module.scss\");\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Icons.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Icons = function Icons() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      startApp = function startApp(id) {\n    return function () {\n      return updateApps({\n        update: {\n          running: true\n        },\n        id: id\n      });\n    };\n  };\n\n  return __jsx(\"nav\", {\n    className: _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, apps.map(function (_ref, index) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        name = _ref.name;\n    return __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], {\n      key: id,\n      icon: icon,\n      name: name,\n      onDoubleClick: startApp(id) // TODO: Also unminimize\n      ,\n      onDoubleTap: startApp(id),\n      tabIndex: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(Icons, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Icons;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29ucy50c3g/MTRmMCJdLCJuYW1lcyI6WyJJY29ucyIsInVzZUNvbnRleHQiLCJBcHBzQ29udGV4dCIsImFwcHMiLCJ1cGRhdGVBcHBzIiwic3RhcnRBcHAiLCJpZCIsInVwZGF0ZSIsInJ1bm5pbmciLCJzdHlsZXMiLCJpY29ucyIsIm1hcCIsImluZGV4IiwiaWNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0FDLHdEQUFVLENBQUNDLDBEQUFELENBRFY7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCO0FBQUEsTUFDZkMsVUFEZSxlQUNmQSxVQURlO0FBQUEsTUFFM0JDLFFBRjJCLEdBRWhCLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQWdCO0FBQUEsYUFBTUYsVUFBVSxDQUFDO0FBQUVHLGNBQU0sRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBVjtBQUE2QkYsVUFBRSxFQUFGQTtBQUE3QixPQUFELENBQWhCO0FBQUEsS0FBaEI7QUFBQSxHQUZnQjs7QUFJN0IsU0FDRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsZ0JBQXFCQyxLQUFyQjtBQUFBLFFBQUdOLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFFBQU9PLElBQVAsUUFBT0EsSUFBUDtBQUFBLFFBQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLFdBQ1IsTUFBQywwQ0FBRDtBQUNFLFNBQUcsRUFBRVIsRUFEUDtBQUVFLFVBQUksRUFBRU8sSUFGUjtBQUdFLFVBQUksRUFBRUMsSUFIUjtBQUlFLG1CQUFhLEVBQUVULFFBQVEsQ0FBQ0MsRUFBRCxDQUp6QixDQUkrQjtBQUovQjtBQUtFLGlCQUFXLEVBQUVELFFBQVEsQ0FBQ0MsRUFBRCxDQUx2QjtBQU1FLGNBQVEsRUFBRU0sS0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBREgsQ0FERixDQURGO0FBZ0JELENBcEJNOztHQUFNWixLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JY29ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSWNvbnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQXBwc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9JY29uJztcblxuZXhwb3J0IGNvbnN0IEljb25zOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhcHBzLCB1cGRhdGVBcHBzIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBzdGFydEFwcCA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IHJ1bm5pbmc6IHRydWUgfSwgaWQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgIDxvbD5cbiAgICAgICAge2FwcHMubWFwKCh7IGlkLCBpY29uLCBuYW1lIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3N0YXJ0QXBwKGlkKX0gLy8gVE9ETzogQWxzbyB1bm1pbmltaXplXG4gICAgICAgICAgICBvbkRvdWJsZVRhcD17c3RhcnRBcHAoaWQpfVxuICAgICAgICAgICAgdGFiSW5kZXg9e2luZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Icons.tsx\n");

/***/ }),

/***/ "./node_modules/use-double-tap/dist/index.umd.js":
false

})