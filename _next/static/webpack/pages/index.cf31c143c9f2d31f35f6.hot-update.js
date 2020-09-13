webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Metadata */ \"./components/Metadata.tsx\");\n/* harmony import */ var _components_System_Desktop_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Desktop/Desktop */ \"./components/System/Desktop/Desktop.tsx\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_FileSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/FileSystem */ \"./contexts/FileSystem.tsx\");\n/* harmony import */ var _components_System_Directory_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/System/Directory/Directory */ \"./components/System/Directory/Directory.tsx\");\n/* harmony import */ var _components_System_Windows_Windows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/System/Windows/Windows */ \"./components/System/Windows/Windows.tsx\");\n/* harmony import */ var _components_System_Taskbar_Taskbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/System/Taskbar/Taskbar */ \"./components/System/Taskbar/Taskbar.tsx\");\nvar _jsxFileName = \"/Users/dustin/Git/x/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // TODO: Session context to replace `foreground, stackOrder, x, y, height, width, selected (icon & window), focus, zIndex`\n\nfunction HomePage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Metadata__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx(_components_System_Desktop_Desktop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_contexts_FileSystem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, __jsx(_components_System_Directory_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    path: \"/desktop\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(_components_System_Windows_Windows__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  })), __jsx(_components_System_Taskbar_Taskbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = HomePage;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRWUsU0FBU0EsUUFBVCxHQUFrQztBQUMvQyxTQUNFLG1FQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFXLFFBQUksRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQUZGLENBREY7QUFjRDtLQWZ1QkEsUSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWV0YWRhdGEgZnJvbSAnQC9jb21wb25lbnRzL01ldGFkYXRhJztcbmltcG9ydCBEZXNrdG9wIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGVza3RvcC9EZXNrdG9wJztcbmltcG9ydCBQcm9jZXNzUHJvdmlkZXIgZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgRmlsZVByb3ZpZGVyIGZyb20gJ0AvY29udGV4dHMvRmlsZVN5c3RlbSc7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5pbXBvcnQgV2luZG93cyBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd3MvV2luZG93cyc7XG5pbXBvcnQgVGFza2JhciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhcic7XG5cbi8vIFRPRE86IFNlc3Npb24gY29udGV4dCB0byByZXBsYWNlIGBmb3JlZ3JvdW5kLCBzdGFja09yZGVyLCB4LCB5LCBoZWlnaHQsIHdpZHRoLCBzZWxlY3RlZCAoaWNvbiAmIHdpbmRvdyksIGZvY3VzLCB6SW5kZXhgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZXRhZGF0YSAvPlxuICAgICAgPERlc2t0b3A+XG4gICAgICAgIDxQcm9jZXNzUHJvdmlkZXI+XG4gICAgICAgICAgPEZpbGVQcm92aWRlcj5cbiAgICAgICAgICAgIDxEaXJlY3RvcnkgcGF0aD1cIi9kZXNrdG9wXCIgLz5cbiAgICAgICAgICAgIDxXaW5kb3dzIC8+XG4gICAgICAgICAgPC9GaWxlUHJvdmlkZXI+XG4gICAgICAgICAgPFRhc2tiYXIgLz5cbiAgICAgICAgPC9Qcm9jZXNzUHJvdmlkZXI+XG4gICAgICA8L0Rlc2t0b3A+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})