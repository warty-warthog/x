webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Desktop */ \"./components/Desktop.tsx\");\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icons */ \"./components/Icons.tsx\");\n/* harmony import */ var _components_MetaData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/MetaData */ \"./components/MetaData.tsx\");\n/* harmony import */ var _components_Taskbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Taskbar */ \"./components/Taskbar.tsx\");\n/* harmony import */ var _components_Windows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Windows */ \"./components/Windows.tsx\");\nvar _jsxFileName = \"/Users/dustin/Git/x/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // TODO: Put this somewhere else\n\nvar lockDocumentTitle = function lockDocumentTitle() {\n  Object.defineProperty(document, 'title', {\n    set: function set() {}\n  });\n};\n\nfunction HomePage() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(lockDocumentTitle, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_MetaData__WEBPACK_IMPORTED_MODULE_4__[\"MetaData\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Desktop__WEBPACK_IMPORTED_MODULE_2__[\"Desktop\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(_contexts_Apps__WEBPACK_IMPORTED_MODULE_1__[\"AppsProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__[\"Icons\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Taskbar__WEBPACK_IMPORTED_MODULE_5__[\"Taskbar\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Windows__WEBPACK_IMPORTED_MODULE_6__[\"Windows\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(HomePage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = HomePage;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsibG9ja0RvY3VtZW50VGl0bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImRvY3VtZW50Iiwic2V0IiwiSG9tZVBhZ2UiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkMsUUFBTSxDQUFDQyxjQUFQLENBQXNCQyxRQUF0QixFQUFnQyxPQUFoQyxFQUF5QztBQUFFQyxPQUFHLEVBQUUsZUFBTSxDQUFFO0FBQWYsR0FBekM7QUFDRCxDQUZEOztBQUllLFNBQVNDLFFBQVQsR0FBa0M7QUFBQTs7QUFDL0NDLHlEQUFTLENBQUNOLGlCQUFELEVBQW9CLEVBQXBCLENBQVQ7QUFFQSxTQUNFLG1FQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FGRixDQURGO0FBWUQ7O0dBZnVCSyxROztLQUFBQSxRIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHRzL0FwcHMnO1xuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJ0AvY29tcG9uZW50cy9EZXNrdG9wJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnQC9jb21wb25lbnRzL0ljb25zJztcbmltcG9ydCB7IE1ldGFEYXRhIH0gZnJvbSAnQC9jb21wb25lbnRzL01ldGFEYXRhJztcbmltcG9ydCB7IFRhc2tiYXIgfSBmcm9tICdAL2NvbXBvbmVudHMvVGFza2Jhcic7XG5pbXBvcnQgeyBXaW5kb3dzIH0gZnJvbSAnQC9jb21wb25lbnRzL1dpbmRvd3MnO1xuXG4vLyBUT0RPOiBQdXQgdGhpcyBzb21ld2hlcmUgZWxzZVxuY29uc3QgbG9ja0RvY3VtZW50VGl0bGUgPSAoKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCwgJ3RpdGxlJywgeyBzZXQ6ICgpID0+IHt9IH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKTogUmVhY3RFbGVtZW50IHtcbiAgdXNlRWZmZWN0KGxvY2tEb2N1bWVudFRpdGxlLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGFEYXRhIC8+XG4gICAgICA8RGVza3RvcD5cbiAgICAgICAgPEFwcHNQcm92aWRlcj5cbiAgICAgICAgICA8SWNvbnMgLz5cbiAgICAgICAgICA8VGFza2JhciAvPlxuICAgICAgICAgIDxXaW5kb3dzIC8+XG4gICAgICAgIDwvQXBwc1Byb3ZpZGVyPlxuICAgICAgPC9EZXNrdG9wPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})