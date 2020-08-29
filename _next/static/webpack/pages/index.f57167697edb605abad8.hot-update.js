webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar random = function random(max) {\n  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 30%, 30%)\")).rgbNumber();\n};\n\nvar updateIntervalInMilliseconds = Number(1000) / 4,\n    initialColor = 219;\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef, wallpaperColor(initialColor)));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var updateColor = function updateColor() {\n        now = Date.now();\n        delta = now - then;\n\n        if (delta > updateIntervalInMilliseconds) {\n          base = base > 360 ? 0 : base + 1;\n          then = now - delta % updateIntervalInMilliseconds;\n          wallpaperEffect.options.color = wallpaperColor(base);\n        }\n\n        colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      };\n\n      var now,\n          delta,\n          then = Date.now(),\n          base = initialColor,\n          colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      return function () {\n        cancelAnimationFrame(colorUpdateAnimationId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbInJhbmRvbSIsIm1heCIsIm1pbiIsIk1hdGgiLCJmbG9vciIsIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwidXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsIk51bWJlciIsInByb2Nlc3MiLCJpbml0aWFsQ29sb3IiLCJEZXNrdG9wIiwiY2hpbGRyZW4iLCJkZXNrdG9wUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ3YWxscGFwZXJFZmZlY3QiLCJzZXRXYWxscGFwZXJFZmZlY3QiLCJ1c2VFZmZlY3QiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJkZXN0cm95IiwidXBkYXRlQ29sb3IiLCJub3ciLCJEYXRlIiwiZGVsdGEiLCJ0aGVuIiwiYmFzZSIsIm9wdGlvbnMiLCJjb2xvciIsImNvbG9yVXBkYXRlQW5pbWF0aW9uSWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQ7QUFBQSxNQUFjQyxHQUFkLHVFQUFvQixDQUFwQjtBQUFBLFNBQ2JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNILE1BQUwsTUFBaUJDLEdBQUcsR0FBR0MsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQURhO0FBQUEsQ0FBZjs7QUFHQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQ7QUFBQSxTQUNyQkMsNENBQUssZUFBU0QsQ0FBVCxpQkFBTCxDQUErQkUsU0FBL0IsRUFEcUI7QUFBQSxDQUF2Qjs7QUFHQSxJQUFNQyw0QkFBNEIsR0FBR0MsTUFBTSxDQUFDQyxJQUFELENBQU4sR0FBMkMsQ0FBaEY7QUFBQSxJQUNFQyxZQUFZLEdBQUcsR0FEakI7QUFHTyxJQUFNQyxPQUFXLEdBQUcsU0FBZEEsT0FBYyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDckMsTUFBQUMsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxrQkFDb0NDLHNEQUFRLEVBRDVDO0FBQUEsTUFDSEMsZUFERztBQUFBLE1BQ2NDLGtCQURkOztBQUdOQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsc0JBQWtCLENBQ2hCRSxtRkFBcUIsQ0FBQ04sVUFBRCxFQUFhVixjQUFjLENBQUNPLFlBQUQsQ0FBM0IsQ0FETCxDQUFsQjtBQUlBLFdBQU8sWUFBTTtBQUNYTSxxQkFBZSxTQUFmLElBQUFBLGVBQWUsV0FBZixZQUFBQSxlQUFlLENBQUVJLE9BQWpCO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsZUFBSixFQUFxQjtBQUNuQixVQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxXQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxFQUFOO0FBQ0FFLGFBQUssR0FBR0YsR0FBRyxHQUFHRyxJQUFkOztBQUVBLFlBQUlELEtBQUssR0FBR2pCLDRCQUFaLEVBQTBDO0FBQ3hDbUIsY0FBSSxHQUFHQSxJQUFJLEdBQUcsR0FBUCxHQUFhLENBQWIsR0FBaUJBLElBQUksR0FBRyxDQUEvQjtBQUNBRCxjQUFJLEdBQUdILEdBQUcsR0FBR0UsS0FBSyxHQUFHakIsNEJBQXJCO0FBQ0FTLHlCQUFlLENBQUNXLE9BQWhCLENBQXdCQyxLQUF4QixHQUFnQ3pCLGNBQWMsQ0FBQ3VCLElBQUQsQ0FBOUM7QUFDRDs7QUFFREcsOEJBQXNCLEdBQUdDLHFCQUFxQixDQUFDVCxXQUFELENBQTlDO0FBQ0QsT0FYRDs7QUFhQSxVQUFJQyxHQUFKO0FBQUEsVUFBU0UsS0FBVDtBQUFBLFVBQ0VDLElBQUksR0FBR0YsSUFBSSxDQUFDRCxHQUFMLEVBRFQ7QUFBQSxVQUVFSSxJQUFJLEdBQUdoQixZQUZUO0FBQUEsVUFHRW1CLHNCQUFzQixHQUFHQyxxQkFBcUIsQ0FBQ1QsV0FBRCxDQUhoRDtBQUtBLGFBQU8sWUFBTTtBQUNYVSw0QkFBb0IsQ0FBQ0Ysc0JBQUQsQ0FBcEI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQXhCUSxFQXdCTixDQUFDYixlQUFELENBeEJNLENBQVQ7QUEwQkEsU0FDRTtBQUFNLGFBQVMsRUFBRWdCLGtFQUFNLENBQUNDLE9BQXhCO0FBQWlDLE9BQUcsRUFBRXBCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0E3Q007O0dBQU1ELE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2t0b3AudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9EZXNrdG9wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgV2FsbHBhcGVyRWZmZWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxwYXBlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJXYWxscGFwZXJFZmZlY3QgfSBmcm9tICdAL2NvbXBvbmVudHMvV2FsbHBhcGVyJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbmNvbnN0IHJhbmRvbSA9IChtYXg6IG51bWJlciwgbWluID0gMCkgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcblxuY29uc3Qgd2FsbHBhcGVyQ29sb3IgPSAoaDogbnVtYmVyKTogbnVtYmVyID0+XG4gIENvbG9yKGBoc2woJHsgaCB9LCAzMCUsIDMwJSlgKS5yZ2JOdW1iZXIoKTtcblxuY29uc3QgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyA0LFxuICBpbml0aWFsQ29sb3IgPSAyMTk7XG5cbmV4cG9ydCBjb25zdCBEZXNrdG9wOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGVza3RvcFJlZiA9IHVzZVJlZihudWxsKSxcbiAgICBbd2FsbHBhcGVyRWZmZWN0LCBzZXRXYWxscGFwZXJFZmZlY3RdID0gdXNlU3RhdGU8V2FsbHBhcGVyRWZmZWN0PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2FsbHBhcGVyRWZmZWN0KFxuICAgICAgcmVuZGVyV2FsbHBhcGVyRWZmZWN0KGRlc2t0b3BSZWYsIHdhbGxwYXBlckNvbG9yKGluaXRpYWxDb2xvcikpXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3YWxscGFwZXJFZmZlY3Q/LmRlc3Ryb3koKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2FsbHBhcGVyRWZmZWN0KSB7XG4gICAgICBjb25zdCB1cGRhdGVDb2xvciA9ICgpID0+IHtcbiAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgICAgIGlmIChkZWx0YSA+IHVwZGF0ZUludGVydmFsSW5NaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICBiYXNlID0gYmFzZSA+IDM2MCA/IDAgOiBiYXNlICsgMTtcbiAgICAgICAgICB0aGVuID0gbm93IC0gZGVsdGEgJSB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzO1xuICAgICAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoYmFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBub3csIGRlbHRhLFxuICAgICAgICB0aGVuID0gRGF0ZS5ub3coKSxcbiAgICAgICAgYmFzZSA9IGluaXRpYWxDb2xvcixcbiAgICAgICAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFt3YWxscGFwZXJFZmZlY3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3B9IHJlZj17ZGVza3RvcFJlZn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})