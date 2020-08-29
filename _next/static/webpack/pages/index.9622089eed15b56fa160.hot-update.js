webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 15%, 15%)\")).rgbNumber();\n};\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1],\n      initialColor = Math.floor(Math.random() * 256);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(wallpaperColor(initialColor));\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef, wallpaperColor(initialColor)));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var h = initialColor,\n          increment = true;\n      var colorIntervalId = setInterval(function () {\n        console.log(h);\n        if (h === 0) increment = true;else if (h === 255) increment = false;\n        wallpaperEffect.options.color = wallpaperColor(h = increment ? h + 3 : h - 3);\n      }, 500);\n      return function () {\n        clearInterval(colorIntervalId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwiRGVza3RvcCIsImNoaWxkcmVuIiwiZGVza3RvcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwid2FsbHBhcGVyRWZmZWN0Iiwic2V0V2FsbHBhcGVyRWZmZWN0IiwiaW5pdGlhbENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlbmRlcldhbGxwYXBlckVmZmVjdCIsImRlc3Ryb3kiLCJpbmNyZW1lbnQiLCJjb2xvckludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIm9wdGlvbnMiLCJjb2xvciIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJkZXNrdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQ7QUFBQSxTQUNyQkMsNENBQUssZUFBU0QsQ0FBVCxpQkFBTCxDQUErQkUsU0FBL0IsRUFEcUI7QUFBQSxDQUF2Qjs7QUFHTyxJQUFNQyxPQUFXLEdBQUcsU0FBZEEsT0FBYyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDckMsTUFBQUMsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxrQkFDb0NDLHNEQUFRLEVBRDVDO0FBQUEsTUFDSEMsZUFERztBQUFBLE1BQ2NDLGtCQURkO0FBQUEsTUFFSkMsWUFGSSxHQUVXQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBRlg7O0FBSU5DLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLGNBQWMsQ0FBQ1csWUFBRCxDQUExQjtBQUNBRCxzQkFBa0IsQ0FBQ1EsbUZBQXFCLENBQUNaLFVBQUQsRUFBYU4sY0FBYyxDQUFDVyxZQUFELENBQTNCLENBQXRCLENBQWxCO0FBRUEsV0FBTyxZQUFNO0FBQ1hGLHFCQUFlLFNBQWYsSUFBQUEsZUFBZSxXQUFmLFlBQUFBLGVBQWUsQ0FBRVUsT0FBakI7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBSix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixlQUFKLEVBQXFCO0FBQ25CLFVBQUlSLENBQUMsR0FBR1UsWUFBUjtBQUFBLFVBQ0VTLFNBQVMsR0FBRyxJQURkO0FBRUEsVUFBTUMsZUFBZSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUN4Q04sZUFBTyxDQUFDQyxHQUFSLENBQVloQixDQUFaO0FBQ0EsWUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYW1CLFNBQVMsR0FBRyxJQUFaLENBQWIsS0FDSyxJQUFJbkIsQ0FBQyxLQUFLLEdBQVYsRUFBZW1CLFNBQVMsR0FBRyxLQUFaO0FBRXBCWCx1QkFBZSxDQUFDYyxPQUFoQixDQUF3QkMsS0FBeEIsR0FBZ0N4QixjQUFjLENBQUNDLENBQUMsR0FBR21CLFNBQVMsR0FBR25CLENBQUMsR0FBRyxDQUFQLEdBQVdBLENBQUMsR0FBRyxDQUE3QixDQUE5QztBQUNELE9BTmtDLEVBTWhDLEdBTmdDLENBQW5DO0FBUUEsYUFBTyxZQUFNO0FBQ1h3QixxQkFBYSxDQUFDSixlQUFELENBQWI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWhCUSxFQWdCTixDQUFDWixlQUFELENBaEJNLENBQVQ7QUFrQkEsU0FDRTtBQUFNLGFBQVMsRUFBRWlCLGtFQUFNLENBQUNDLE9BQXhCO0FBQWlDLE9BQUcsRUFBRXJCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0FyQ007O0dBQU1ELE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2t0b3AudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9EZXNrdG9wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgV2FsbHBhcGVyRWZmZWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxwYXBlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJXYWxscGFwZXJFZmZlY3QgfSBmcm9tICdAL2NvbXBvbmVudHMvV2FsbHBhcGVyJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7IGggfSwgMTUlLCAxNSUpYCkucmdiTnVtYmVyKCk7XG5cbmV4cG9ydCBjb25zdCBEZXNrdG9wOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGVza3RvcFJlZiA9IHVzZVJlZihudWxsKSxcbiAgICBbd2FsbHBhcGVyRWZmZWN0LCBzZXRXYWxscGFwZXJFZmZlY3RdID0gdXNlU3RhdGU8V2FsbHBhcGVyRWZmZWN0PigpLFxuICAgIGluaXRpYWxDb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3YWxscGFwZXJDb2xvcihpbml0aWFsQ29sb3IpKVxuICAgIHNldFdhbGxwYXBlckVmZmVjdChyZW5kZXJXYWxscGFwZXJFZmZlY3QoZGVza3RvcFJlZiwgd2FsbHBhcGVyQ29sb3IoaW5pdGlhbENvbG9yKSkpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdhbGxwYXBlckVmZmVjdD8uZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YWxscGFwZXJFZmZlY3QpIHtcbiAgICAgIGxldCBoID0gaW5pdGlhbENvbG9yLFxuICAgICAgICBpbmNyZW1lbnQgPSB0cnVlO1xuICAgICAgY29uc3QgY29sb3JJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhoKVxuICAgICAgICBpZiAoaCA9PT0gMCkgaW5jcmVtZW50ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoaCA9PT0gMjU1KSBpbmNyZW1lbnQgPSBmYWxzZTtcblxuICAgICAgICB3YWxscGFwZXJFZmZlY3Qub3B0aW9ucy5jb2xvciA9IHdhbGxwYXBlckNvbG9yKGggPSBpbmNyZW1lbnQgPyBoICsgMyA6IGggLSAzKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY29sb3JJbnRlcnZhbElkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbd2FsbHBhcGVyRWZmZWN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNrdG9wfSByZWY9e2Rlc2t0b3BSZWZ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})