webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/App.tsx":
/*!**************************!*\
  !*** ./contexts/App.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n// TODO: Keep track of index by app count + 1 for foreground\n// TODO: Keep track of x, y, height, width\n// TODO: Cascading windows (Based on index)\nvar _default = // index = 0;\n// x = 0;\n// y = 0;\n// height = 0;\n// width = 0;\nfunction _default(_ref) {\n  var component = _ref.component,\n      icon = _ref.icon,\n      name = _ref.name,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? name.toLowerCase().replace(/ /g, '_') : _ref$id,\n      _ref$windowed = _ref.windowed,\n      windowed = _ref$windowed === void 0 ? true : _ref$windowed,\n      _ref$lockAspectRatio = _ref.lockAspectRatio,\n      lockAspectRatio = _ref$lockAspectRatio === void 0 ? false : _ref$lockAspectRatio,\n      _ref$hideScrollbars = _ref.hideScrollbars,\n      hideScrollbars = _ref$hideScrollbars === void 0 ? false : _ref$hideScrollbars;\n\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"component\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"icon\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"name\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"id\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"windowed\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"lockAspectRatio\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"hideScrollbars\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"running\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"foreground\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"maximized\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"minimized\", false);\n\n  this.component = component;\n  this.icon = icon;\n  this.name = name;\n  this.id = id;\n  this.windowed = windowed;\n  this.lockAspectRatio = lockAspectRatio;\n  this.hideScrollbars = hideScrollbars;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXBwLnRzeD83MmMxIl0sIm5hbWVzIjpbImNvbXBvbmVudCIsImljb24iLCJuYW1lIiwiaWQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJ3aW5kb3dlZCIsImxvY2tBc3BlY3RSYXRpbyIsImhpZGVTY3JvbGxiYXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtlQWdCRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsd0JBUW1CO0FBQUEsTUFQakJBLFNBT2lCLFFBUGpCQSxTQU9pQjtBQUFBLE1BTmpCQyxJQU1pQixRQU5qQkEsSUFNaUI7QUFBQSxNQUxqQkMsSUFLaUIsUUFMakJBLElBS2lCO0FBQUEscUJBSmpCQyxFQUlpQjtBQUFBLE1BSmpCQSxFQUlpQix3QkFKWkQsSUFBSSxDQUFDRSxXQUFMLEdBQW1CQyxPQUFuQixDQUEyQixJQUEzQixFQUFpQyxHQUFqQyxDQUlZO0FBQUEsMkJBSGpCQyxRQUdpQjtBQUFBLE1BSGpCQSxRQUdpQiw4QkFITixJQUdNO0FBQUEsa0NBRmpCQyxlQUVpQjtBQUFBLE1BRmpCQSxlQUVpQixxQ0FGQyxLQUVEO0FBQUEsaUNBRGpCQyxjQUNpQjtBQUFBLE1BRGpCQSxjQUNpQixvQ0FEQSxLQUNBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDZHQW5CVCxLQW1CUzs7QUFBQSxnSEFsQk4sS0FrQk07O0FBQUEsK0dBakJQLEtBaUJPOztBQUFBLCtHQWhCUCxLQWdCTzs7QUFDakIsT0FBS1IsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRCxDIiwiZmlsZSI6Ii4vY29udGV4dHMvQXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IHtcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIG9uTWluaW1pemU/OiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgQXBwQ29uc3RydWN0b3IgPSB7XG4gIGNvbXBvbmVudDogRkM8QXBwQ29tcG9uZW50PjtcbiAgaWNvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgaWQ/OiBzdHJpbmc7XG4gIHdpbmRvd2VkPzogYm9vbGVhbjtcbiAgbG9ja0FzcGVjdFJhdGlvPzogYm9vbGVhbjtcbiAgaGlkZVNjcm9sbGJhcnM/OiBib29sZWFuO1xufTtcblxuLy8gVE9ETzogS2VlcCB0cmFjayBvZiBpbmRleCBieSBhcHAgY291bnQgKyAxIGZvciBmb3JlZ3JvdW5kXG4vLyBUT0RPOiBLZWVwIHRyYWNrIG9mIHgsIHksIGhlaWdodCwgd2lkdGhcbi8vIFRPRE86IENhc2NhZGluZyB3aW5kb3dzIChCYXNlZCBvbiBpbmRleClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb21wb25lbnQ7XG4gIGljb247XG4gIG5hbWU7XG4gIGlkO1xuICB3aW5kb3dlZDtcbiAgbG9ja0FzcGVjdFJhdGlvO1xuICBoaWRlU2Nyb2xsYmFycztcblxuICBydW5uaW5nID0gZmFsc2U7XG4gIGZvcmVncm91bmQgPSBmYWxzZTtcbiAgbWF4aW1pemVkID0gZmFsc2U7XG4gIG1pbmltaXplZCA9IGZhbHNlO1xuXG4gIC8vIGluZGV4ID0gMDtcbiAgLy8geCA9IDA7XG4gIC8vIHkgPSAwO1xuICAvLyBoZWlnaHQgPSAwO1xuICAvLyB3aWR0aCA9IDA7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGNvbXBvbmVudCxcbiAgICBpY29uLFxuICAgIG5hbWUsXG4gICAgaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnXycpLFxuICAgIHdpbmRvd2VkID0gdHJ1ZSxcbiAgICBsb2NrQXNwZWN0UmF0aW8gPSBmYWxzZSxcbiAgICBoaWRlU2Nyb2xsYmFycyA9IGZhbHNlXG4gIH06IEFwcENvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLndpbmRvd2VkID0gd2luZG93ZWQ7XG4gICAgdGhpcy5sb2NrQXNwZWN0UmF0aW8gPSBsb2NrQXNwZWN0UmF0aW87XG4gICAgdGhpcy5oaWRlU2Nyb2xsYmFycyA9IGhpZGVTY3JvbGxiYXJzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/App.tsx\n");

/***/ })

})