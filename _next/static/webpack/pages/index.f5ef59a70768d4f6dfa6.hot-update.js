webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.waves.min */ \"./assets/libs/vanta.waves.min.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 25%, 15%)\")).rgbNumber();\n};\n\nvar fps = 4,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = 220,\n    vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  color: wallpaperColor(initialColor),\n  shininess: 25,\n  waveHeight: 25,\n  waveSpeed: 0.25,\n  zoom: 1\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.color = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    console.log('cancelRainbowEffect()');\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsid2FsbHBhcGVyQ29sb3IiLCJoIiwiQ29sb3IiLCJyZ2JOdW1iZXIiLCJmcHMiLCJ1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzIiwiTnVtYmVyIiwicHJvY2VzcyIsImluaXRpYWxDb2xvciIsInZhbnRhSnNTZXR0aW5ncyIsImd5cm9Db250cm9scyIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSIsImluaXRSYWluYm93RWZmZWN0Iiwid2FsbHBhcGVyRWZmZWN0Iiwibm93IiwiZGVsdGEiLCJ0aGVuIiwiRGF0ZSIsImJhc2UiLCJjb2xvclVwZGF0ZUFuaW1hdGlvbklkIiwidXBkYXRlQ29sb3IiLCJvcHRpb25zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJyZW5kZXJFbGVtZW50IiwiY3VycmVudCIsIldBVkVTIiwiZWwiLCJUSFJFRSIsImNhbmNlbFJhaW5ib3dFZmZlY3QiLCJvbkRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQ7QUFBQSxTQUNyQkMsNENBQUssZUFBU0QsQ0FBVCxpQkFBTCxDQUErQkUsU0FBL0IsRUFEcUI7QUFBQSxDQUF2Qjs7QUFHQSxJQUFNQyxHQUFHLEdBQUcsQ0FBWjtBQUFBLElBQ0VDLDRCQUE0QixHQUFHQyxNQUFNLENBQUNDLElBQUQsQ0FBTixHQUEyQ0gsR0FENUU7QUFBQSxJQUVFSSxZQUFZLEdBQUcsR0FGakI7QUFBQSxJQUdFQyxlQUFlLEdBQUc7QUFDaEJDLGNBQVksRUFBRSxLQURFO0FBRWhCQyxlQUFhLEVBQUUsS0FGQztBQUdoQkMsZUFBYSxFQUFFLEtBSEM7QUFJaEJDLE9BQUssRUFBRWIsY0FBYyxDQUFDUSxZQUFELENBSkw7QUFLaEJNLFdBQVMsRUFBRSxFQUxLO0FBTWhCQyxZQUFVLEVBQUUsRUFOSTtBQU9oQkMsV0FBUyxFQUFFLElBUEs7QUFRaEJDLE1BQUksRUFBRTtBQVJVLENBSHBCOztBQWNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsZUFBRCxFQUFtRTtBQUMzRixNQUFJQyxHQUFKO0FBQUEsTUFBU0MsS0FBVDtBQUFBLE1BQ0VDLElBQUksR0FBR0MsSUFBSSxDQUFDSCxHQUFMLEVBRFQ7QUFBQSxNQUVFSSxJQUFJLEdBQUdoQixZQUZUO0FBQUEsTUFHRWlCLHNCQUhGOztBQUtBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJOLE9BQUcsR0FBR0csSUFBSSxDQUFDSCxHQUFMLEVBQU47QUFDQUMsU0FBSyxHQUFHRCxHQUFHLEdBQUdFLElBQWQ7O0FBRUEsUUFBSUQsS0FBSyxHQUFHaEIsNEJBQVosRUFBMEM7QUFDeENtQixVQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FGLFVBQUksR0FBR0YsR0FBRyxHQUFHQyxLQUFLLEdBQUdoQiw0QkFBckI7QUFDQWMscUJBQWUsQ0FBQ1EsT0FBaEIsQ0FBd0JkLEtBQXhCLEdBQWdDYixjQUFjLENBQUN3QixJQUFELENBQTlDO0FBQ0Q7O0FBRURDLDBCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUNELEdBWEQ7O0FBYUFELHdCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUVBLFNBQU8sWUFBTTtBQUNYRyx3QkFBb0IsQ0FBQ0osc0JBQUQsQ0FBcEI7QUFDRCxHQUZEO0FBR0QsQ0F4QkQ7O0FBaUNPLElBQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBeUU7QUFBQSxNQUE3REMsYUFBNkQsUUFBdEVDLE9BQXNFO0FBQzVHLE1BQ0ViLGVBQWUsR0FBR2MsbUVBQUs7QUFDckJDLE1BQUUsRUFBRUgsYUFEaUI7QUFFckJJLFNBQUssRUFBTEEsa0NBQUtBO0FBRmdCLEtBR2xCMUIsZUFIa0IsRUFEekI7QUFBQSxNQU1FMkIsbUJBQW1CLEdBQUdsQixpQkFBaUIsQ0FBQ0MsZUFBRCxDQU56Qzs7QUFRQUEsaUJBQWUsQ0FBQ2tCLFNBQWhCLEdBQTRCLFlBQU07QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FILHVCQUFtQjtBQUNwQixHQUhEOztBQUtBLFNBQU9qQixlQUFQO0FBQ0QsQ0FmTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2FsbHBhcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFdBVkVTIGZyb20gJ0AvYXNzZXRzL2xpYnMvdmFudGEud2F2ZXMubWluJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbnR5cGUgQ2FuY2VsUmFpbmJvd0VmZmVjdEZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcblxuY29uc3Qgd2FsbHBhcGVyQ29sb3IgPSAoaDogbnVtYmVyKTogbnVtYmVyID0+XG4gIENvbG9yKGBoc2woJHsgaCB9LCAyNSUsIDE1JSlgKS5yZ2JOdW1iZXIoKTtcblxuY29uc3QgZnBzID0gNCxcbiAgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyBmcHMsXG4gIGluaXRpYWxDb2xvciA9IDIyMCxcbiAgdmFudGFKc1NldHRpbmdzID0ge1xuICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgbW91c2VDb250cm9sczogZmFsc2UsXG4gICAgdG91Y2hDb250cm9sczogZmFsc2UsXG4gICAgY29sb3I6IHdhbGxwYXBlckNvbG9yKGluaXRpYWxDb2xvciksXG4gICAgc2hpbmluZXNzOiAyNSxcbiAgICB3YXZlSGVpZ2h0OiAyNSxcbiAgICB3YXZlU3BlZWQ6IDAuMjUsXG4gICAgem9vbTogMVxuICB9O1xuXG5jb25zdCBpbml0UmFpbmJvd0VmZmVjdCA9ICh3YWxscGFwZXJFZmZlY3Q6IFdhbGxwYXBlckVmZmVjdCk6IENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9PiB7XG4gIGxldCBub3csIGRlbHRhLFxuICAgIHRoZW4gPSBEYXRlLm5vdygpLFxuICAgIGJhc2UgPSBpbml0aWFsQ29sb3IsXG4gICAgY29sb3JVcGRhdGVBbmltYXRpb25JZDogbnVtYmVyO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbG9yID0gKCkgPT4ge1xuICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgaWYgKGRlbHRhID4gdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcykge1xuICAgICAgYmFzZSA9IGJhc2UgPiAzNjAgPyAwIDogYmFzZSArIDE7XG4gICAgICB0aGVuID0gbm93IC0gZGVsdGEgJSB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzO1xuICAgICAgd2FsbHBhcGVyRWZmZWN0Lm9wdGlvbnMuY29sb3IgPSB3YWxscGFwZXJDb2xvcihiYXNlKTtcbiAgICB9XG5cbiAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcbiAgfTtcblxuICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQpO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgV2FsbHBhcGVyRWZmZWN0ID0ge1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBvcHRpb25zOiB7XG4gICAgY29sb3I6IG51bWJlcjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYWxscGFwZXJFZmZlY3QgPSAoeyBjdXJyZW50OiByZW5kZXJFbGVtZW50IH06IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBXYWxscGFwZXJFZmZlY3QgPT4ge1xuICBjb25zdFxuICAgIHdhbGxwYXBlckVmZmVjdCA9IFdBVkVTKHtcbiAgICAgIGVsOiByZW5kZXJFbGVtZW50LFxuICAgICAgVEhSRUUsXG4gICAgICAuLi52YW50YUpzU2V0dGluZ3NcbiAgICB9KSxcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0ID0gaW5pdFJhaW5ib3dFZmZlY3Qod2FsbHBhcGVyRWZmZWN0KTtcblxuICB3YWxscGFwZXJFZmZlY3Qub25EZXN0cm95ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjYW5jZWxSYWluYm93RWZmZWN0KCknKTtcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHdhbGxwYXBlckVmZmVjdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})