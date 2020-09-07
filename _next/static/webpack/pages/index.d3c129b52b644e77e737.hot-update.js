webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Directory/DirectoryIcons.tsx":
/*!********************************************************!*\
  !*** ./components/System/Directory/DirectoryIcons.tsx ***!
  \********************************************************/
/*! exports provided: DirectoryIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryIcons\", function() { return DirectoryIcons; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/DirectoryIcons.module.scss */ \"./styles/System/DirectoryIcons.module.scss\");\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-double-tap */ \"./node_modules/use-double-tap/dist/index.umd.js\");\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_double_tap__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryIcons.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar DirectoryIcons = function DirectoryIcons(_ref) {\n  var _s = $RefreshSig$();\n\n  var _ref$entries = _ref.entries,\n      entries = _ref$entries === void 0 ? [] : _ref$entries,\n      onDoubleClick = _ref.onDoubleClick;\n\n  var dblClick = onDoubleClick('', '', '', ''),\n      dblTap = function dblTap() {\n    _s();\n\n    return Object(use_double_tap__WEBPACK_IMPORTED_MODULE_3__[\"useDoubleTap\"])(dblClick)();\n  };\n\n  _s(dblTap, \"oFq/+8OmzsQm96rbVMLzREP9XDE=\", false, function () {\n    return [use_double_tap__WEBPACK_IMPORTED_MODULE_3__[\"useDoubleTap\"]];\n  });\n\n  console.log(dblTap);\n  return __jsx(\"nav\", {\n    className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url;\n    return __jsx(\"li\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: path,\n      className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcon,\n      tabIndex: 0\n    }, dblTap(), {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }), __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }\n    }), __jsx(\"figcaption\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, name)));\n  })));\n};\n_c = DirectoryIcons;\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeD8wNGVhIl0sIm5hbWVzIjpbIkRpcmVjdG9yeUljb25zIiwiZW50cmllcyIsIm9uRG91YmxlQ2xpY2siLCJkYmxDbGljayIsImRibFRhcCIsInVzZURvdWJsZVRhcCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJkaXJlY3RvcnlJY29ucyIsIm1hcCIsImljb24iLCJuYW1lIiwicGF0aCIsInVybCIsImRpcmVjdG9yeUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBRU8sSUFBTUEsY0FBaUMsR0FBRyxTQUFwQ0EsY0FBb0MsT0FHM0M7QUFBQTs7QUFBQSwwQkFGSkMsT0FFSTtBQUFBLE1BRkpBLE9BRUksNkJBRk0sRUFFTjtBQUFBLE1BREpDLGFBQ0ksUUFESkEsYUFDSTs7QUFDSixNQUFNQyxRQUFRLEdBQUdELGFBQWEsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQTlCO0FBQUEsTUFDRUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQTs7QUFBQSxXQUFNQyxtRUFBWSxDQUFDRixRQUFELENBQVosRUFBTjtBQUFBLEdBRFg7O0FBREksS0FFRkMsTUFGRTtBQUFBLFlBRWFDLDJEQUZiO0FBQUE7O0FBR05DLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0UsU0FDRTtBQUFLLGFBQVMsRUFBRUksZ0ZBQU0sQ0FBQ0MsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsT0FBTyxDQUFDUyxHQUFSLENBQVk7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlQyxJQUFmLFNBQWVBLElBQWY7QUFBQSxRQUFxQkMsR0FBckIsU0FBcUJBLEdBQXJCO0FBQUEsV0FDWDtBQUNFLFNBQUcsRUFBRUQsSUFEUDtBQUVFLGVBQVMsRUFBRUwsZ0ZBQU0sQ0FBQ08sYUFGcEI7QUFHRSxjQUFRLEVBQUU7QUFIWixPQUlNWCxNQUFNLEVBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRVEsSUFBVjtBQUFnQixTQUFHLEVBQUVELElBQXJCO0FBQTJCLGVBQVMsRUFBRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFDLElBQWIsQ0FGRixDQU5GLENBRFc7QUFBQSxHQUFaLENBREgsQ0FERixDQURGO0FBbUJELENBMUJNO0tBQU1aLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5SWNvbnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vRGlyZWN0b3J5SWNvbnMubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlWaWV3IH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5JztcblxuaW1wb3J0IHsgdXNlRG91YmxlVGFwIH0gZnJvbSAndXNlLWRvdWJsZS10YXAnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0b3J5SWNvbnM6IEZDPERpcmVjdG9yeVZpZXc+ID0gKHtcbiAgZW50cmllcyA9IFtdLFxuICBvbkRvdWJsZUNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IGRibENsaWNrID0gb25Eb3VibGVDbGljaygnJywgJycsICcnLCAnJyksXG4gICAgZGJsVGFwID0gKCkgPT4gdXNlRG91YmxlVGFwKGRibENsaWNrKSgpO1xuY29uc29sZS5sb2coZGJsVGFwKVxuICByZXR1cm4oXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3RvcnlJY29uc30+XG4gICAgICA8b2w+XG4gICAgICAgIHtlbnRyaWVzLm1hcCgoeyBpY29uLCBuYW1lLCBwYXRoLCB1cmwgfSkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0b3J5SWNvbn1cbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgey4uLmRibFRhcCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PXtuYW1lfSBzcmM9e2ljb259IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntuYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryIcons.tsx\n");

/***/ })

})