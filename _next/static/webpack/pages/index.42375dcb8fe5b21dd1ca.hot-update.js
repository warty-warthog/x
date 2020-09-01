webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Wallpaper.tsx":
/*!*****************************************!*\
  !*** ./components/System/Wallpaper.tsx ***!
  \*****************************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.net.min */ \"./assets/libs/vanta.net.min.js\");\n/* harmony import */ var _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 100%, 75%)\")).rgbNumber();\n};\n\nvar fps = 60,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = Math.floor(Math.random() * Math.floor(360)),\n    vantaJsSettings = {\n  gyroControls: true,\n  mouseControls: false,\n  touchControls: false,\n  showDots: false,\n  points: 11,\n  maxDistance: 25,\n  spacing: 20,\n  backgroundColor: color__WEBPACK_IMPORTED_MODULE_3___default()(\"rgb(45, 45, 45)\").rgbNumber(),\n  color: wallpaperColor(initialColor)\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.color = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2FsbHBhcGVyLnRzeD85MjkxIl0sIm5hbWVzIjpbIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwiZnBzIiwidXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsIk51bWJlciIsInByb2Nlc3MiLCJpbml0aWFsQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ2YW50YUpzU2V0dGluZ3MiLCJneXJvQ29udHJvbHMiLCJtb3VzZUNvbnRyb2xzIiwidG91Y2hDb250cm9scyIsInNob3dEb3RzIiwicG9pbnRzIiwibWF4RGlzdGFuY2UiLCJzcGFjaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbml0UmFpbmJvd0VmZmVjdCIsIndhbGxwYXBlckVmZmVjdCIsIm5vdyIsImRlbHRhIiwidGhlbiIsIkRhdGUiLCJiYXNlIiwiY29sb3JVcGRhdGVBbmltYXRpb25JZCIsInVwZGF0ZUNvbG9yIiwib3B0aW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyV2FsbHBhcGVyRWZmZWN0IiwicmVuZGVyRWxlbWVudCIsImN1cnJlbnQiLCJORVQiLCJlbCIsIlRIUkVFIiwiY2FuY2VsUmFpbmJvd0VmZmVjdCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFEO0FBQUEsU0FDckJDLDRDQUFLLGVBQVFELENBQVIsa0JBQUwsQ0FBOEJFLFNBQTlCLEVBRHFCO0FBQUEsQ0FBdkI7O0FBR0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFBQSxJQUNFQyw0QkFBNEIsR0FBR0MsTUFBTSxDQUFDQyxJQUFELENBQU4sR0FBMkNILEdBRDVFO0FBQUEsSUFFRUksWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxHQUFYLENBQTNCLENBRmpCO0FBQUEsSUFHRUUsZUFBZSxHQUFHO0FBQ2hCQyxjQUFZLEVBQUUsSUFERTtBQUVoQkMsZUFBYSxFQUFFLEtBRkM7QUFHaEJDLGVBQWEsRUFBRSxLQUhDO0FBSWhCQyxVQUFRLEVBQUUsS0FKTTtBQUtoQkMsUUFBTSxFQUFFLEVBTFE7QUFNaEJDLGFBQVcsRUFBRSxFQU5HO0FBT2hCQyxTQUFPLEVBQUUsRUFQTztBQVFoQkMsaUJBQWUsRUFBRWxCLDRDQUFLLG1CQUFMLENBQXlCQyxTQUF6QixFQVJEO0FBU2hCa0IsT0FBSyxFQUFFckIsY0FBYyxDQUFDUSxZQUFEO0FBVEwsQ0FIcEI7O0FBZUEsSUFBTWMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsZUFEd0IsRUFFUTtBQUNoQyxNQUFJQyxHQUFKO0FBQUEsTUFDRUMsS0FERjtBQUFBLE1BRUVDLElBQUksR0FBR0MsSUFBSSxDQUFDSCxHQUFMLEVBRlQ7QUFBQSxNQUdFSSxJQUFJLEdBQUdwQixZQUhUO0FBQUEsTUFJRXFCLHNCQUpGOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJOLE9BQUcsR0FBR0csSUFBSSxDQUFDSCxHQUFMLEVBQU47QUFDQUMsU0FBSyxHQUFHRCxHQUFHLEdBQUdFLElBQWQ7O0FBRUEsUUFBSUQsS0FBSyxHQUFHcEIsNEJBQVosRUFBMEM7QUFDeEN1QixVQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FGLFVBQUksR0FBR0YsR0FBRyxHQUFJQyxLQUFLLEdBQUdwQiw0QkFBdEI7QUFDQWtCLHFCQUFlLENBQUNRLE9BQWhCLENBQXdCVixLQUF4QixHQUFnQ3JCLGNBQWMsQ0FBQzRCLElBQUQsQ0FBOUM7QUFDRDs7QUFFREMsMEJBQXNCLEdBQUdHLHFCQUFxQixDQUFDRixXQUFELENBQTlDO0FBQ0QsR0FYRDs7QUFhQUQsd0JBQXNCLEdBQUdHLHFCQUFxQixDQUFDRixXQUFELENBQTlDO0FBRUEsU0FBTyxZQUFNO0FBQ1hHLHdCQUFvQixDQUFDSixzQkFBRCxDQUFwQjtBQUNELEdBRkQ7QUFHRCxDQTNCRDs7QUFvQ08sSUFBTUsscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUVVO0FBQUEsTUFEcENDLGFBQ29DLFFBRDdDQyxPQUM2QztBQUM3QyxNQUFNYixlQUFlLEdBQUdjLGlFQUFHO0FBQ3ZCQyxNQUFFLEVBQUVILGFBRG1CO0FBRXZCSSxTQUFLLEVBQUxBLGtDQUFLQTtBQUZrQixLQUdwQjNCLGVBSG9CLEVBQTNCO0FBQUEsTUFLRTRCLG1CQUFtQixHQUFHbEIsaUJBQWlCLENBQUNDLGVBQUQsQ0FMekM7O0FBT0FBLGlCQUFlLENBQUNrQixTQUFoQixHQUE0QixZQUFNO0FBQ2hDRCx1QkFBbUI7QUFDcEIsR0FGRDs7QUFJQSxTQUFPakIsZUFBUDtBQUNELENBZk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XYWxscGFwZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBORVQgZnJvbSAnQC9hc3NldHMvbGlicy92YW50YS5uZXQubWluJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbnR5cGUgQ2FuY2VsUmFpbmJvd0VmZmVjdEZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcblxuY29uc3Qgd2FsbHBhcGVyQ29sb3IgPSAoaDogbnVtYmVyKTogbnVtYmVyID0+XG4gIENvbG9yKGBoc2woJHtofSwgMTAwJSwgNzUlKWApLnJnYk51bWJlcigpO1xuXG5jb25zdCBmcHMgPSA2MCxcbiAgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyBmcHMsXG4gIGluaXRpYWxDb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMzYwKSksXG4gIHZhbnRhSnNTZXR0aW5ncyA9IHtcbiAgICBneXJvQ29udHJvbHM6IHRydWUsXG4gICAgbW91c2VDb250cm9sczogZmFsc2UsXG4gICAgdG91Y2hDb250cm9sczogZmFsc2UsXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxuICAgIHBvaW50czogMTEsXG4gICAgbWF4RGlzdGFuY2U6IDI1LFxuICAgIHNwYWNpbmc6IDIwLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3IoYHJnYig0NSwgNDUsIDQ1KWApLnJnYk51bWJlcigpLFxuICAgIGNvbG9yOiB3YWxscGFwZXJDb2xvcihpbml0aWFsQ29sb3IpXG4gIH07XG5cbmNvbnN0IGluaXRSYWluYm93RWZmZWN0ID0gKFxuICB3YWxscGFwZXJFZmZlY3Q6IFdhbGxwYXBlckVmZmVjdFxuKTogQ2FuY2VsUmFpbmJvd0VmZmVjdEZ1bmN0aW9uID0+IHtcbiAgbGV0IG5vdyxcbiAgICBkZWx0YSxcbiAgICB0aGVuID0gRGF0ZS5ub3coKSxcbiAgICBiYXNlID0gaW5pdGlhbENvbG9yLFxuICAgIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQ6IG51bWJlcjtcblxuICBjb25zdCB1cGRhdGVDb2xvciA9ICgpID0+IHtcbiAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgIGRlbHRhID0gbm93IC0gdGhlbjtcblxuICAgIGlmIChkZWx0YSA+IHVwZGF0ZUludGVydmFsSW5NaWxsaXNlY29uZHMpIHtcbiAgICAgIGJhc2UgPSBiYXNlID4gMzYwID8gMCA6IGJhc2UgKyAxO1xuICAgICAgdGhlbiA9IG5vdyAtIChkZWx0YSAlIHVwZGF0ZUludGVydmFsSW5NaWxsaXNlY29uZHMpO1xuICAgICAgd2FsbHBhcGVyRWZmZWN0Lm9wdGlvbnMuY29sb3IgPSB3YWxscGFwZXJDb2xvcihiYXNlKTtcbiAgICB9XG5cbiAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcbiAgfTtcblxuICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQpO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgV2FsbHBhcGVyRWZmZWN0ID0ge1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBvcHRpb25zOiB7XG4gICAgY29sb3I6IG51bWJlcjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYWxscGFwZXJFZmZlY3QgPSAoe1xuICBjdXJyZW50OiByZW5kZXJFbGVtZW50XG59OiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KTogV2FsbHBhcGVyRWZmZWN0ID0+IHtcbiAgY29uc3Qgd2FsbHBhcGVyRWZmZWN0ID0gTkVUKHtcbiAgICAgIGVsOiByZW5kZXJFbGVtZW50LFxuICAgICAgVEhSRUUsXG4gICAgICAuLi52YW50YUpzU2V0dGluZ3NcbiAgICB9KSxcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0ID0gaW5pdFJhaW5ib3dFZmZlY3Qod2FsbHBhcGVyRWZmZWN0KTtcblxuICB3YWxscGFwZXJFZmZlY3Qub25EZXN0cm95ID0gKCkgPT4ge1xuICAgIGNhbmNlbFJhaW5ib3dFZmZlY3QoKTtcbiAgfTtcblxuICByZXR1cm4gd2FsbHBhcGVyRWZmZWN0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Wallpaper.tsx\n");

/***/ })

})