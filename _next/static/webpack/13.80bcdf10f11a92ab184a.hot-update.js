webpackHotUpdate_N_E(13,{

/***/ "./utils/events.tsx":
/*!**************************!*\
  !*** ./utils/events.tsx ***!
  \**************************/
/*! exports provided: ClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClickHandler\", function() { return ClickHandler; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nvar CLICK_DELAY_IN_MILLISECONDS = 250;\nvar ClickHandler = function ClickHandler(_ref) {\n  var _this = this;\n\n  var singleClick = _ref.singleClick,\n      doubleClick = _ref.doubleClick;\n\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ClickHandler);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"clickTimer\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"singleClick\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"doubleClick\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"clickHandler\", function (event) {\n    if (!_this.clickTimer) {\n      _this.clickTimer = setTimeout(function () {\n        var _this$singleClick;\n\n        _this.clickTimer = undefined;\n        (_this$singleClick = _this.singleClick) === null || _this$singleClick === void 0 ? void 0 : _this$singleClick.call(_this, event);\n      }, CLICK_DELAY_IN_MILLISECONDS);\n    } else {\n      var _this$doubleClick;\n\n      clearTimeout(_this.clickTimer);\n      _this.clickTimer = undefined;\n      (_this$doubleClick = _this.doubleClick) === null || _this$doubleClick === void 0 ? void 0 : _this$doubleClick.call(_this, event);\n    }\n  });\n\n  this.singleClick = singleClick;\n  this.doubleClick = doubleClick;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZXZlbnRzLnRzeD9kMGFjIl0sIm5hbWVzIjpbIkNMSUNLX0RFTEFZX0lOX01JTExJU0VDT05EUyIsIkNsaWNrSGFuZGxlciIsInNpbmdsZUNsaWNrIiwiZG91YmxlQ2xpY2siLCJldmVudCIsImNsaWNrVGltZXIiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSwyQkFBMkIsR0FBRyxHQUFwQztBQUVPLElBQU1DLFlBQWIsR0FNRSw0QkFNRztBQUFBOztBQUFBLE1BTERDLFdBS0MsUUFMREEsV0FLQztBQUFBLE1BSkRDLFdBSUMsUUFKREEsV0FJQzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrSEFLWSxVQUFDQyxLQUFELEVBQXdEO0FBQ3JFLFFBQUksQ0FBQyxLQUFJLENBQUNDLFVBQVYsRUFBc0I7QUFDcEIsV0FBSSxDQUFDQSxVQUFMLEdBQWtCQyxVQUFVLENBQUMsWUFBTTtBQUFBOztBQUNqQyxhQUFJLENBQUNELFVBQUwsR0FBa0JFLFNBQWxCO0FBQ0Esa0NBQUksQ0FBQ0wsV0FBTCxrRkFBSSxFQUFlRSxLQUFmLENBQUo7QUFDRCxPQUgyQixFQUd6QkosMkJBSHlCLENBQTVCO0FBSUQsS0FMRCxNQUtPO0FBQUE7O0FBQ0xRLGtCQUFZLENBQUMsS0FBSSxDQUFDSCxVQUFOLENBQVo7QUFDQSxXQUFJLENBQUNBLFVBQUwsR0FBa0JFLFNBQWxCO0FBQ0EsZ0NBQUksQ0FBQ0osV0FBTCxrRkFBSSxFQUFlQyxLQUFmLENBQUo7QUFDRDtBQUNGLEdBaEJFOztBQUNELE9BQUtGLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRCxDQWZIIiwiZmlsZSI6Ii4vdXRpbHMvZXZlbnRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENMSUNLX0RFTEFZX0lOX01JTExJU0VDT05EUyA9IDI1MDtcblxuZXhwb3J0IGNsYXNzIENsaWNrSGFuZGxlciB7XG4gIGNsaWNrVGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgdW5kZWZpbmVkO1xuXG4gIHNpbmdsZUNsaWNrO1xuICBkb3VibGVDbGljaztcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgc2luZ2xlQ2xpY2ssXG4gICAgZG91YmxlQ2xpY2tcbiAgfToge1xuICAgIHNpbmdsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuICAgIGRvdWJsZUNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuICB9KSB7XG4gICAgdGhpcy5zaW5nbGVDbGljayA9IHNpbmdsZUNsaWNrO1xuICAgIHRoaXMuZG91YmxlQ2xpY2sgPSBkb3VibGVDbGljaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxFbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5jbGlja1RpbWVyKSB7XG4gICAgICB0aGlzLmNsaWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNpbmdsZUNsaWNrPy4oZXZlbnQpO1xuICAgICAgfSwgQ0xJQ0tfREVMQVlfSU5fTUlMTElTRUNPTkRTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lcik7XG4gICAgICB0aGlzLmNsaWNrVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvdWJsZUNsaWNrPy4oZXZlbnQpO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/events.tsx\n");

/***/ })

})