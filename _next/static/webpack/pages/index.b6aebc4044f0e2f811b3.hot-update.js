webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Directory/DirectoryIcons.tsx":
/*!********************************************************!*\
  !*** ./components/System/Directory/DirectoryIcons.tsx ***!
  \********************************************************/
/*! exports provided: DirectoryIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryIcons\", function() { return DirectoryIcons; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/DirectoryIcons.module.scss */ \"./styles/System/DirectoryIcons.module.scss\");\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-double-tap */ \"./node_modules/use-double-tap/dist/index.umd.js\");\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_double_tap__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryIcons.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar DirectoryIcons = function DirectoryIcons(_ref) {\n  _s();\n\n  var _ref$entries = _ref.entries,\n      entries = _ref$entries === void 0 ? [] : _ref$entries,\n      onDoubleClick = _ref.onDoubleClick;\n  // const dblClick = onDoubleClick('', '', '', ''),\n  //   { onClick } = useDoubleTap(dblClick);\n  var bind = Object(use_double_tap__WEBPACK_IMPORTED_MODULE_3__[\"useDoubleTap\"])(function (event, x) {\n    // Your action here\n    console.log(event, x, _this);\n  });\n  console.log(bind);\n  return __jsx(\"nav\", {\n    className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url;\n    return __jsx(\"li\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: path,\n      className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcon,\n      tabIndex: 0\n    }, bind.onClick.apply({\n      x: 1\n    }), {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }\n    }), __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }), __jsx(\"figcaption\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }, name)));\n  })));\n}; // const bind = useDoubleTap((event) => {\n//   // Your action here\n//   console.log('Double tapped');\n// });\n// return <button {...bind}>Tap me</button>;\n\n_s(DirectoryIcons, \"0FdWqmSBwQEE5tpDgJEt4LGlaQk=\", false, function () {\n  return [use_double_tap__WEBPACK_IMPORTED_MODULE_3__[\"useDoubleTap\"]];\n});\n\n_c = DirectoryIcons;\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeD8wNGVhIl0sIm5hbWVzIjpbIkRpcmVjdG9yeUljb25zIiwiZW50cmllcyIsIm9uRG91YmxlQ2xpY2siLCJiaW5kIiwidXNlRG91YmxlVGFwIiwiZXZlbnQiLCJ4IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImRpcmVjdG9yeUljb25zIiwibWFwIiwiaWNvbiIsIm5hbWUiLCJwYXRoIiwidXJsIiwiZGlyZWN0b3J5SWNvbiIsIm9uQ2xpY2siLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBRU8sSUFBTUEsY0FBaUMsR0FBRyxTQUFwQ0EsY0FBb0MsT0FHM0M7QUFBQTs7QUFBQSwwQkFGSkMsT0FFSTtBQUFBLE1BRkpBLE9BRUksNkJBRk0sRUFFTjtBQUFBLE1BREpDLGFBQ0ksUUFESkEsYUFDSTtBQUNKO0FBQ0E7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLG1FQUFZLENBQUMsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDdEM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVosRUFBbUJDLENBQW5CLEVBQXNCLEtBQXRCO0FBQ0QsR0FId0IsQ0FBekI7QUFLQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFTSxnRkFBTSxDQUFDQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxPQUFPLENBQUNVLEdBQVIsQ0FBWTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLFFBQWVDLElBQWYsU0FBZUEsSUFBZjtBQUFBLFFBQXFCQyxHQUFyQixTQUFxQkEsR0FBckI7QUFBQSxXQUNYO0FBQ0UsU0FBRyxFQUFFRCxJQURQO0FBRUUsZUFBUyxFQUFFTCxnRkFBTSxDQUFDTyxhQUZwQjtBQUdFLGNBQVEsRUFBRTtBQUhaLE9BSU9iLElBQUQsQ0FBT2MsT0FBUCxDQUFlQyxLQUFmLENBQXFCO0FBQUNaLE9BQUMsRUFBQztBQUFILEtBQXJCLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRU8sSUFBVjtBQUFnQixTQUFHLEVBQUVELElBQXJCO0FBQTJCLGVBQVMsRUFBRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFDLElBQWIsQ0FGRixDQU5GLENBRFc7QUFBQSxHQUFaLENBREgsQ0FERixDQURGO0FBbUJELENBakNNLEMsQ0FtQ1A7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7R0F4Q2FiLGM7VUFPRUksMkQ7OztLQVBGSixjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL0RpcmVjdG9yeUljb25zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRGlyZWN0b3J5VmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbmltcG9ydCB7IHVzZURvdWJsZVRhcCB9IGZyb20gJ3VzZS1kb3VibGUtdGFwJztcblxuZXhwb3J0IGNvbnN0IERpcmVjdG9yeUljb25zOiBGQzxEaXJlY3RvcnlWaWV3PiA9ICh7XG4gIGVudHJpZXMgPSBbXSxcbiAgb25Eb3VibGVDbGlja1xufSkgPT4ge1xuICAvLyBjb25zdCBkYmxDbGljayA9IG9uRG91YmxlQ2xpY2soJycsICcnLCAnJywgJycpLFxuICAvLyAgIHsgb25DbGljayB9ID0gdXNlRG91YmxlVGFwKGRibENsaWNrKTtcblxuICBjb25zdCBiaW5kID0gdXNlRG91YmxlVGFwKChldmVudCwgeCkgPT4ge1xuICAgIC8vIFlvdXIgYWN0aW9uIGhlcmVcbiAgICBjb25zb2xlLmxvZyhldmVudCwgeCwgdGhpcyk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGJpbmQpXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeUljb25zfT5cbiAgICAgIDxvbD5cbiAgICAgICAge2VudHJpZXMubWFwKCh7IGljb24sIG5hbWUsIHBhdGgsIHVybCB9KSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3RvcnlJY29ufVxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICB7Li4uKGJpbmQpLm9uQ2xpY2suYXBwbHkoe3g6MX0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PXtuYW1lfSBzcmM9e2ljb259IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntuYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbi8vIGNvbnN0IGJpbmQgPSB1c2VEb3VibGVUYXAoKGV2ZW50KSA9PiB7XG4vLyAgIC8vIFlvdXIgYWN0aW9uIGhlcmVcbi8vICAgY29uc29sZS5sb2coJ0RvdWJsZSB0YXBwZWQnKTtcbi8vIH0pO1xuXG4vLyByZXR1cm4gPGJ1dHRvbiB7Li4uYmluZH0+VGFwIG1lPC9idXR0b24+OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryIcons.tsx\n");

/***/ })

})