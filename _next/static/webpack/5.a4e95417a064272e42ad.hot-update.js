webpackHotUpdate_N_E(5,{

/***/ "./contexts/App.tsx":
/*!**************************!*\
  !*** ./contexts/App.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n// TODO: How can I properly use this?\nvar _default = function _default(_ref) {\n  var loader = _ref.loader,\n      icon = _ref.icon,\n      name = _ref.name,\n      _ref$bgColor = _ref.bgColor,\n      bgColor = _ref$bgColor === void 0 ? 'black' : _ref$bgColor,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 0 : _ref$height,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 0 : _ref$width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      _ref$id = _ref.id,\n      id = _ref$id === void 0 ? name.toLowerCase().replace(/ /g, '_') : _ref$id,\n      _ref$windowed = _ref.windowed,\n      windowed = _ref$windowed === void 0 ? true : _ref$windowed,\n      _ref$lockAspectRatio = _ref.lockAspectRatio,\n      lockAspectRatio = _ref$lockAspectRatio === void 0 ? false : _ref$lockAspectRatio,\n      _ref$hideScrollbars = _ref.hideScrollbars,\n      hideScrollbars = _ref$hideScrollbars === void 0 ? false : _ref$hideScrollbars;\n\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"loader\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"icon\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"name\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"bgColor\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"height\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"width\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"x\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"y\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"id\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"windowed\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"lockAspectRatio\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"hideScrollbars\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"component\", undefined);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"foreground\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"maximized\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"minimized\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"lastRunning\", new Date(0));\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"stackOrder\", []);\n\n  this.loader = loader;\n  this.icon = icon;\n  this.name = name;\n  this.bgColor = bgColor;\n  this.id = id;\n  this.height = height;\n  this.width = width;\n  this.x = x;\n  this.y = y;\n  this.windowed = windowed;\n  this.lockAspectRatio = lockAspectRatio;\n  this.hideScrollbars = hideScrollbars;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXBwLnRzeD83MmMxIl0sIm5hbWVzIjpbImxvYWRlciIsImljb24iLCJuYW1lIiwiYmdDb2xvciIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJpZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIndpbmRvd2VkIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJ1bmRlZmluZWQiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7ZUF1REUsd0JBZW1CO0FBQUEsTUFkakJBLE1BY2lCLFFBZGpCQSxNQWNpQjtBQUFBLE1BYmpCQyxJQWFpQixRQWJqQkEsSUFhaUI7QUFBQSxNQVpqQkMsSUFZaUIsUUFaakJBLElBWWlCO0FBQUEsMEJBVmpCQyxPQVVpQjtBQUFBLE1BVmpCQSxPQVVpQiw2QkFWUCxPQVVPO0FBQUEseUJBVGpCQyxNQVNpQjtBQUFBLE1BVGpCQSxNQVNpQiw0QkFUUixDQVNRO0FBQUEsd0JBUmpCQyxLQVFpQjtBQUFBLE1BUmpCQSxLQVFpQiwyQkFSVCxDQVFTO0FBQUEsb0JBUGpCQyxDQU9pQjtBQUFBLE1BUGpCQSxDQU9pQix1QkFQYixDQU9hO0FBQUEsb0JBTmpCQyxDQU1pQjtBQUFBLE1BTmpCQSxDQU1pQix1QkFOYixDQU1hO0FBQUEscUJBSmpCQyxFQUlpQjtBQUFBLE1BSmpCQSxFQUlpQix3QkFKWk4sSUFBSSxDQUFDTyxXQUFMLEdBQW1CQyxPQUFuQixDQUEyQixJQUEzQixFQUFpQyxHQUFqQyxDQUlZO0FBQUEsMkJBSGpCQyxRQUdpQjtBQUFBLE1BSGpCQSxRQUdpQiw4QkFITixJQUdNO0FBQUEsa0NBRmpCQyxlQUVpQjtBQUFBLE1BRmpCQSxlQUVpQixxQ0FGQyxLQUVEO0FBQUEsaUNBRGpCQyxjQUNpQjtBQUFBLE1BRGpCQSxjQUNpQixvQ0FEQSxLQUNBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLCtHQXRCUEMsU0FzQk87O0FBQUEsZ0hBckJOLEtBcUJNOztBQUFBLCtHQXBCUCxLQW9CTzs7QUFBQSwrR0FuQlAsS0FtQk87O0FBQUEsaUhBbEJDLElBQUlDLElBQUosQ0FBUyxDQUFULENBa0JEOztBQUFBLGdIQWpCUyxFQWlCVDs7QUFDakIsT0FBS2YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0ssRUFBTCxHQUFVQSxFQUFWO0FBQ0EsT0FBS0osTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLE9BQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0QsQyIsImZpbGUiOiIuL2NvbnRleHRzL0FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJuZERyYWdDYWxsYmFjaywgUm5kUmVzaXplQ2FsbGJhY2sgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHR5cGUgeyBBcHBMb2FkZXIgfSBmcm9tICdAL3V0aWxzL2FwcHMnO1xuXG4vLyBUT0RPOiBIb3cgY2FuIEkgcHJvcGVybHkgdXNlIHRoaXM/XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSB7XG4gIG9uRG91YmxlQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgb25NYXhpbWl6ZT86ICgpID0+IHZvaWQ7XG4gIG9uTWluaW1pemU/OiAoKSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKCkgPT4gdm9pZDtcbiAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgdXBkYXRlUG9zaXRpb24/OiBSbmREcmFnQ2FsbGJhY2s7XG4gIHVwZGF0ZVNpemU/OiBSbmRSZXNpemVDYWxsYmFjaztcbiAgekluZGV4PzogbnVtYmVyO1xuICBhcmdzPzogQXJyYXk8c3RyaW5nPjtcbiAgdXJsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQXBwQ29uc3RydWN0b3IgPSB7XG4gIGxvYWRlcjogQXBwTG9hZGVyO1xuICBpY29uOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICBiZ0NvbG9yPzogc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuXG4gIGlkPzogc3RyaW5nO1xuICB3aW5kb3dlZD86IGJvb2xlYW47XG4gIGxvY2tBc3BlY3RSYXRpbz86IGJvb2xlYW47XG4gIGhpZGVTY3JvbGxiYXJzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgbG9hZGVyO1xuICBpY29uO1xuICBuYW1lO1xuICBiZ0NvbG9yO1xuXG4gIGhlaWdodDtcbiAgd2lkdGg7XG4gIHg7XG4gIHk7XG5cbiAgaWQ7XG4gIHdpbmRvd2VkO1xuICBsb2NrQXNwZWN0UmF0aW87XG4gIGhpZGVTY3JvbGxiYXJzO1xuXG4gIGNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgZm9yZWdyb3VuZCA9IGZhbHNlO1xuICBtYXhpbWl6ZWQgPSBmYWxzZTtcbiAgbWluaW1pemVkID0gZmFsc2U7XG4gIGxhc3RSdW5uaW5nOiBEYXRlID0gbmV3IERhdGUoMCk7XG4gIHN0YWNrT3JkZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgbG9hZGVyLFxuICAgIGljb24sXG4gICAgbmFtZSxcblxuICAgIGJnQ29sb3IgPSAnYmxhY2snLFxuICAgIGhlaWdodCA9IDAsXG4gICAgd2lkdGggPSAwLFxuICAgIHggPSAwLFxuICAgIHkgPSAwLFxuXG4gICAgaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnXycpLFxuICAgIHdpbmRvd2VkID0gdHJ1ZSxcbiAgICBsb2NrQXNwZWN0UmF0aW8gPSBmYWxzZSxcbiAgICBoaWRlU2Nyb2xsYmFycyA9IGZhbHNlXG4gIH06IEFwcENvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYmdDb2xvciA9IGJnQ29sb3I7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aW5kb3dlZCA9IHdpbmRvd2VkO1xuICAgIHRoaXMubG9ja0FzcGVjdFJhdGlvID0gbG9ja0FzcGVjdFJhdGlvO1xuICAgIHRoaXMuaGlkZVNjcm9sbGJhcnMgPSBoaWRlU2Nyb2xsYmFycztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/App.tsx\n");

/***/ })

})