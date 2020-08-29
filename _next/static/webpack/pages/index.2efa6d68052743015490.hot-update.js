webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar updateIntervalInMilliseconds = Number(1000) / 4,\n    initialColor = 219;\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 25%, 30%)\")).rgbNumber();\n};\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef, wallpaperColor(initialColor)));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var updateColor = function updateColor() {\n        now = Date.now();\n        delta = now - then;\n\n        if (delta > updateIntervalInMilliseconds) {\n          base = base > 360 ? 0 : base + 1;\n          then = now - delta % updateIntervalInMilliseconds;\n          wallpaperEffect.options.color = wallpaperColor(base);\n        }\n\n        colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      };\n\n      var now,\n          delta,\n          then = Date.now(),\n          base = initialColor,\n          colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      return function () {\n        cancelAnimationFrame(colorUpdateAnimationId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbInVwZGF0ZUludGVydmFsSW5NaWxsaXNlY29uZHMiLCJOdW1iZXIiLCJwcm9jZXNzIiwiaW5pdGlhbENvbG9yIiwid2FsbHBhcGVyQ29sb3IiLCJoIiwiQ29sb3IiLCJyZ2JOdW1iZXIiLCJEZXNrdG9wIiwiY2hpbGRyZW4iLCJkZXNrdG9wUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ3YWxscGFwZXJFZmZlY3QiLCJzZXRXYWxscGFwZXJFZmZlY3QiLCJ1c2VFZmZlY3QiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJkZXN0cm95IiwidXBkYXRlQ29sb3IiLCJub3ciLCJEYXRlIiwiZGVsdGEiLCJ0aGVuIiwiYmFzZSIsIm9wdGlvbnMiLCJjb2xvciIsImNvbG9yVXBkYXRlQW5pbWF0aW9uSWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsNEJBQTRCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBRCxDQUFOLEdBQTJDLENBQWhGO0FBQUEsSUFDRUMsWUFBWSxHQUFHLEdBRGpCOztBQUdBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3JCQyw0Q0FBSyxlQUFTRCxDQUFULGlCQUFMLENBQStCRSxTQUEvQixFQURxQjtBQUFBLENBQXZCOztBQUdPLElBQU1DLE9BQVcsR0FBRyxTQUFkQSxPQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNyQyxNQUFBQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUFBLGtCQUNvQ0Msc0RBQVEsRUFENUM7QUFBQSxNQUNIQyxlQURHO0FBQUEsTUFDY0Msa0JBRGQ7O0FBR05DLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxzQkFBa0IsQ0FDaEJFLG1GQUFxQixDQUFDTixVQUFELEVBQWFOLGNBQWMsQ0FBQ0QsWUFBRCxDQUEzQixDQURMLENBQWxCO0FBSUEsV0FBTyxZQUFNO0FBQ1hVLHFCQUFlLFNBQWYsSUFBQUEsZUFBZSxXQUFmLFlBQUFBLGVBQWUsQ0FBRUksT0FBakI7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBRix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixlQUFKLEVBQXFCO0FBQ25CLFVBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFMLEVBQU47QUFDQUUsYUFBSyxHQUFHRixHQUFHLEdBQUdHLElBQWQ7O0FBRUEsWUFBSUQsS0FBSyxHQUFHckIsNEJBQVosRUFBMEM7QUFDeEN1QixjQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FELGNBQUksR0FBR0gsR0FBRyxHQUFHRSxLQUFLLEdBQUdyQiw0QkFBckI7QUFDQWEseUJBQWUsQ0FBQ1csT0FBaEIsQ0FBd0JDLEtBQXhCLEdBQWdDckIsY0FBYyxDQUFDbUIsSUFBRCxDQUE5QztBQUNEOztBQUVERyw4QkFBc0IsR0FBR0MscUJBQXFCLENBQUNULFdBQUQsQ0FBOUM7QUFDRCxPQVhEOztBQWFBLFVBQUlDLEdBQUo7QUFBQSxVQUFTRSxLQUFUO0FBQUEsVUFDRUMsSUFBSSxHQUFHRixJQUFJLENBQUNELEdBQUwsRUFEVDtBQUFBLFVBRUVJLElBQUksR0FBR3BCLFlBRlQ7QUFBQSxVQUdFdUIsc0JBQXNCLEdBQUdDLHFCQUFxQixDQUFDVCxXQUFELENBSGhEO0FBS0EsYUFBTyxZQUFNO0FBQ1hVLDRCQUFvQixDQUFDRixzQkFBRCxDQUFwQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBeEJRLEVBd0JOLENBQUNiLGVBQUQsQ0F4Qk0sQ0FBVDtBQTBCQSxTQUNFO0FBQU0sYUFBUyxFQUFFZ0Isa0VBQU0sQ0FBQ0MsT0FBeEI7QUFBaUMsT0FBRyxFQUFFcEIsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREY7QUFLRCxDQTdDTTs7R0FBTUQsTzs7S0FBQUEsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVza3RvcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0Rlc2t0b3AubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBXYWxscGFwZXJFZmZlY3QgfSBmcm9tICdAL2NvbXBvbmVudHMvV2FsbHBhcGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlcldhbGxwYXBlckVmZmVjdCB9IGZyb20gJ0AvY29tcG9uZW50cy9XYWxscGFwZXInO1xuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcblxuY29uc3QgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyA0LFxuICBpbml0aWFsQ29sb3IgPSAyMTk7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7IGggfSwgMjUlLCAzMCUpYCkucmdiTnVtYmVyKCk7XG5cbmV4cG9ydCBjb25zdCBEZXNrdG9wOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGVza3RvcFJlZiA9IHVzZVJlZihudWxsKSxcbiAgICBbd2FsbHBhcGVyRWZmZWN0LCBzZXRXYWxscGFwZXJFZmZlY3RdID0gdXNlU3RhdGU8V2FsbHBhcGVyRWZmZWN0PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2FsbHBhcGVyRWZmZWN0KFxuICAgICAgcmVuZGVyV2FsbHBhcGVyRWZmZWN0KGRlc2t0b3BSZWYsIHdhbGxwYXBlckNvbG9yKGluaXRpYWxDb2xvcikpXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3YWxscGFwZXJFZmZlY3Q/LmRlc3Ryb3koKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2FsbHBhcGVyRWZmZWN0KSB7XG4gICAgICBjb25zdCB1cGRhdGVDb2xvciA9ICgpID0+IHtcbiAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgICAgIGlmIChkZWx0YSA+IHVwZGF0ZUludGVydmFsSW5NaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICBiYXNlID0gYmFzZSA+IDM2MCA/IDAgOiBiYXNlICsgMTtcbiAgICAgICAgICB0aGVuID0gbm93IC0gZGVsdGEgJSB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzO1xuICAgICAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoYmFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBub3csIGRlbHRhLFxuICAgICAgICB0aGVuID0gRGF0ZS5ub3coKSxcbiAgICAgICAgYmFzZSA9IGluaXRpYWxDb2xvcixcbiAgICAgICAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFt3YWxscGFwZXJFZmZlY3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3B9IHJlZj17ZGVza3RvcFJlZn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})