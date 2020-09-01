webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Wallpaper.tsx":
/*!*****************************************!*\
  !*** ./components/System/Wallpaper.tsx ***!
  \*****************************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_fog_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.fog.min */ \"./assets/libs/vanta.fog.min.js\");\n/* harmony import */ var _assets_libs_vanta_fog_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_fog_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 35%, 20%)\")).rgbNumber();\n};\n\nvar fps = 60,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = 220,\n    vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  highlightColor: wallpaperColor(initialColor),\n  // shininess: 75,\n  // waveHeight: 7.5,\n  // waveSpeed: 0.75,\n  // zoom: 1.1\n  baseColor: 0x0,\n  midtoneColor: 0xffffff,\n  lowlightColor: 0xffffff,\n  blurFactor: 0.20\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.highlightColor = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_fog_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2FsbHBhcGVyLnRzeD85MjkxIl0sIm5hbWVzIjpbIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwiZnBzIiwidXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsIk51bWJlciIsInByb2Nlc3MiLCJpbml0aWFsQ29sb3IiLCJ2YW50YUpzU2V0dGluZ3MiLCJneXJvQ29udHJvbHMiLCJtb3VzZUNvbnRyb2xzIiwidG91Y2hDb250cm9scyIsImhpZ2hsaWdodENvbG9yIiwiYmFzZUNvbG9yIiwibWlkdG9uZUNvbG9yIiwibG93bGlnaHRDb2xvciIsImJsdXJGYWN0b3IiLCJpbml0UmFpbmJvd0VmZmVjdCIsIndhbGxwYXBlckVmZmVjdCIsIm5vdyIsImRlbHRhIiwidGhlbiIsIkRhdGUiLCJiYXNlIiwiY29sb3JVcGRhdGVBbmltYXRpb25JZCIsInVwZGF0ZUNvbG9yIiwib3B0aW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyV2FsbHBhcGVyRWZmZWN0IiwicmVuZGVyRWxlbWVudCIsImN1cnJlbnQiLCJGT0ciLCJlbCIsIlRIUkVFIiwiY2FuY2VsUmFpbmJvd0VmZmVjdCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFEO0FBQUEsU0FDckJDLDRDQUFLLGVBQVFELENBQVIsaUJBQUwsQ0FBNkJFLFNBQTdCLEVBRHFCO0FBQUEsQ0FBdkI7O0FBR0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFBQSxJQUNFQyw0QkFBNEIsR0FBR0MsTUFBTSxDQUFDQyxJQUFELENBQU4sR0FBMkNILEdBRDVFO0FBQUEsSUFFRUksWUFBWSxHQUFHLEdBRmpCO0FBQUEsSUFHRUMsZUFBZSxHQUFHO0FBQ2hCQyxjQUFZLEVBQUUsS0FERTtBQUVoQkMsZUFBYSxFQUFFLEtBRkM7QUFHaEJDLGVBQWEsRUFBRSxLQUhDO0FBSWhCQyxnQkFBYyxFQUFFYixjQUFjLENBQUNRLFlBQUQsQ0FKZDtBQUtoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBTSxXQUFTLEVBQUUsR0FUSztBQVVoQkMsY0FBWSxFQUFFLFFBVkU7QUFXaEJDLGVBQWEsRUFBRSxRQVhDO0FBWWhCQyxZQUFVLEVBQUU7QUFaSSxDQUhwQjs7QUFrQkEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsZUFEd0IsRUFFUTtBQUNoQyxNQUFJQyxHQUFKO0FBQUEsTUFDRUMsS0FERjtBQUFBLE1BRUVDLElBQUksR0FBR0MsSUFBSSxDQUFDSCxHQUFMLEVBRlQ7QUFBQSxNQUdFSSxJQUFJLEdBQUdoQixZQUhUO0FBQUEsTUFJRWlCLHNCQUpGOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJOLE9BQUcsR0FBR0csSUFBSSxDQUFDSCxHQUFMLEVBQU47QUFDQUMsU0FBSyxHQUFHRCxHQUFHLEdBQUdFLElBQWQ7O0FBRUEsUUFBSUQsS0FBSyxHQUFHaEIsNEJBQVosRUFBMEM7QUFDeENtQixVQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FGLFVBQUksR0FBR0YsR0FBRyxHQUFJQyxLQUFLLEdBQUdoQiw0QkFBdEI7QUFDQWMscUJBQWUsQ0FBQ1EsT0FBaEIsQ0FBd0JkLGNBQXhCLEdBQXlDYixjQUFjLENBQUN3QixJQUFELENBQXZEO0FBQ0Q7O0FBRURDLDBCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUNELEdBWEQ7O0FBYUFELHdCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUVBLFNBQU8sWUFBTTtBQUNYRyx3QkFBb0IsQ0FBQ0osc0JBQUQsQ0FBcEI7QUFDRCxHQUZEO0FBR0QsQ0EzQkQ7O0FBb0NPLElBQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FFVTtBQUFBLE1BRHBDQyxhQUNvQyxRQUQ3Q0MsT0FDNkM7QUFDN0MsTUFBTWIsZUFBZSxHQUFHYyxpRUFBRztBQUN2QkMsTUFBRSxFQUFFSCxhQURtQjtBQUV2QkksU0FBSyxFQUFMQSxrQ0FBS0E7QUFGa0IsS0FHcEIxQixlQUhvQixFQUEzQjtBQUFBLE1BS0UyQixtQkFBbUIsR0FBR2xCLGlCQUFpQixDQUFDQyxlQUFELENBTHpDOztBQU9BQSxpQkFBZSxDQUFDa0IsU0FBaEIsR0FBNEIsWUFBTTtBQUNoQ0QsdUJBQW1CO0FBQ3BCLEdBRkQ7O0FBSUEsU0FBT2pCLGVBQVA7QUFDRCxDQWZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2FsbHBhcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgRk9HIGZyb20gJ0AvYXNzZXRzL2xpYnMvdmFudGEuZm9nLm1pbic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG50eXBlIENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9ICgpID0+IHZvaWQ7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7aH0sIDM1JSwgMjAlKWApLnJnYk51bWJlcigpO1xuXG5jb25zdCBmcHMgPSA2MCxcbiAgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyBmcHMsXG4gIGluaXRpYWxDb2xvciA9IDIyMCxcbiAgdmFudGFKc1NldHRpbmdzID0ge1xuICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgbW91c2VDb250cm9sczogZmFsc2UsXG4gICAgdG91Y2hDb250cm9sczogZmFsc2UsXG4gICAgaGlnaGxpZ2h0Q29sb3I6IHdhbGxwYXBlckNvbG9yKGluaXRpYWxDb2xvciksXG4gICAgLy8gc2hpbmluZXNzOiA3NSxcbiAgICAvLyB3YXZlSGVpZ2h0OiA3LjUsXG4gICAgLy8gd2F2ZVNwZWVkOiAwLjc1LFxuICAgIC8vIHpvb206IDEuMVxuICAgIGJhc2VDb2xvcjogMHgwLFxuICAgIG1pZHRvbmVDb2xvcjogMHhmZmZmZmYsXG4gICAgbG93bGlnaHRDb2xvcjogMHhmZmZmZmYsXG4gICAgYmx1ckZhY3RvcjogMC4yMCxcbiAgfTtcblxuY29uc3QgaW5pdFJhaW5ib3dFZmZlY3QgPSAoXG4gIHdhbGxwYXBlckVmZmVjdDogV2FsbHBhcGVyRWZmZWN0XG4pOiBDYW5jZWxSYWluYm93RWZmZWN0RnVuY3Rpb24gPT4ge1xuICBsZXQgbm93LFxuICAgIGRlbHRhLFxuICAgIHRoZW4gPSBEYXRlLm5vdygpLFxuICAgIGJhc2UgPSBpbml0aWFsQ29sb3IsXG4gICAgY29sb3JVcGRhdGVBbmltYXRpb25JZDogbnVtYmVyO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbG9yID0gKCkgPT4ge1xuICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgaWYgKGRlbHRhID4gdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcykge1xuICAgICAgYmFzZSA9IGJhc2UgPiAzNjAgPyAwIDogYmFzZSArIDE7XG4gICAgICB0aGVuID0gbm93IC0gKGRlbHRhICUgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyk7XG4gICAgICB3YWxscGFwZXJFZmZlY3Qub3B0aW9ucy5oaWdobGlnaHRDb2xvciA9IHdhbGxwYXBlckNvbG9yKGJhc2UpO1xuICAgIH1cblxuICAgIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ29sb3IpO1xuICB9O1xuXG4gIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ29sb3IpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29sb3JVcGRhdGVBbmltYXRpb25JZCk7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBXYWxscGFwZXJFZmZlY3QgPSB7XG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIG9wdGlvbnM6IHtcbiAgICBoaWdobGlnaHRDb2xvcjogbnVtYmVyO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlcldhbGxwYXBlckVmZmVjdCA9ICh7XG4gIGN1cnJlbnQ6IHJlbmRlckVsZW1lbnRcbn06IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBXYWxscGFwZXJFZmZlY3QgPT4ge1xuICBjb25zdCB3YWxscGFwZXJFZmZlY3QgPSBGT0coe1xuICAgICAgZWw6IHJlbmRlckVsZW1lbnQsXG4gICAgICBUSFJFRSxcbiAgICAgIC4uLnZhbnRhSnNTZXR0aW5nc1xuICAgIH0pLFxuICAgIGNhbmNlbFJhaW5ib3dFZmZlY3QgPSBpbml0UmFpbmJvd0VmZmVjdCh3YWxscGFwZXJFZmZlY3QpO1xuXG4gIHdhbGxwYXBlckVmZmVjdC5vbkRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgY2FuY2VsUmFpbmJvd0VmZmVjdCgpO1xuICB9O1xuXG4gIHJldHVybiB3YWxscGFwZXJFZmZlY3Q7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Wallpaper.tsx\n");

/***/ })

})