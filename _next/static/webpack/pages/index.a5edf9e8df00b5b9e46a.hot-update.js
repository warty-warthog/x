webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Wallpaper.tsx":
/*!*****************************************!*\
  !*** ./components/System/Wallpaper.tsx ***!
  \*****************************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.net.min */ \"./assets/libs/vanta.net.min.js\");\n/* harmony import */ var _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 50%, 50%)\")).rgbNumber();\n};\n\nvar fps = 60,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = 220,\n    vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  // highlightColor: wallpaperColor(initialColor),\n  points: 9,\n  maxDistance: 30,\n  spacing: 10,\n  backgroundColor: 0x0208,\n  color: wallpaperColor(initialColor),\n  showDots: false\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.color = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2FsbHBhcGVyLnRzeD85MjkxIl0sIm5hbWVzIjpbIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwiZnBzIiwidXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyIsIk51bWJlciIsInByb2Nlc3MiLCJpbml0aWFsQ29sb3IiLCJ2YW50YUpzU2V0dGluZ3MiLCJneXJvQ29udHJvbHMiLCJtb3VzZUNvbnRyb2xzIiwidG91Y2hDb250cm9scyIsInBvaW50cyIsIm1heERpc3RhbmNlIiwic3BhY2luZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic2hvd0RvdHMiLCJpbml0UmFpbmJvd0VmZmVjdCIsIndhbGxwYXBlckVmZmVjdCIsIm5vdyIsImRlbHRhIiwidGhlbiIsIkRhdGUiLCJiYXNlIiwiY29sb3JVcGRhdGVBbmltYXRpb25JZCIsInVwZGF0ZUNvbG9yIiwib3B0aW9ucyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyV2FsbHBhcGVyRWZmZWN0IiwicmVuZGVyRWxlbWVudCIsImN1cnJlbnQiLCJORVQiLCJlbCIsIlRIUkVFIiwiY2FuY2VsUmFpbmJvd0VmZmVjdCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFEO0FBQUEsU0FDckJDLDRDQUFLLGVBQVFELENBQVIsaUJBQUwsQ0FBNkJFLFNBQTdCLEVBRHFCO0FBQUEsQ0FBdkI7O0FBR0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFBQSxJQUNFQyw0QkFBNEIsR0FBR0MsTUFBTSxDQUFDQyxJQUFELENBQU4sR0FBMkNILEdBRDVFO0FBQUEsSUFFRUksWUFBWSxHQUFHLEdBRmpCO0FBQUEsSUFHRUMsZUFBZSxHQUFHO0FBQ2hCQyxjQUFZLEVBQUUsS0FERTtBQUVoQkMsZUFBYSxFQUFFLEtBRkM7QUFHaEJDLGVBQWEsRUFBRSxLQUhDO0FBSWhCO0FBRUFDLFFBQU0sRUFBRSxDQU5RO0FBT2hCQyxhQUFXLEVBQUUsRUFQRztBQVFoQkMsU0FBTyxFQUFFLEVBUk87QUFTaEJDLGlCQUFlLEVBQUUsTUFURDtBQVVoQkMsT0FBSyxFQUFFakIsY0FBYyxDQUFDUSxZQUFELENBVkw7QUFXaEJVLFVBQVEsRUFBRTtBQVhNLENBSHBCOztBQWlCQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQ3hCQyxlQUR3QixFQUVRO0FBQ2hDLE1BQUlDLEdBQUo7QUFBQSxNQUNFQyxLQURGO0FBQUEsTUFFRUMsSUFBSSxHQUFHQyxJQUFJLENBQUNILEdBQUwsRUFGVDtBQUFBLE1BR0VJLElBQUksR0FBR2pCLFlBSFQ7QUFBQSxNQUlFa0Isc0JBSkY7O0FBTUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4Qk4sT0FBRyxHQUFHRyxJQUFJLENBQUNILEdBQUwsRUFBTjtBQUNBQyxTQUFLLEdBQUdELEdBQUcsR0FBR0UsSUFBZDs7QUFFQSxRQUFJRCxLQUFLLEdBQUdqQiw0QkFBWixFQUEwQztBQUN4Q29CLFVBQUksR0FBR0EsSUFBSSxHQUFHLEdBQVAsR0FBYSxDQUFiLEdBQWlCQSxJQUFJLEdBQUcsQ0FBL0I7QUFDQUYsVUFBSSxHQUFHRixHQUFHLEdBQUlDLEtBQUssR0FBR2pCLDRCQUF0QjtBQUNBZSxxQkFBZSxDQUFDUSxPQUFoQixDQUF3QlgsS0FBeEIsR0FBZ0NqQixjQUFjLENBQUN5QixJQUFELENBQTlDO0FBQ0Q7O0FBRURDLDBCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUNELEdBWEQ7O0FBYUFELHdCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUVBLFNBQU8sWUFBTTtBQUNYRyx3QkFBb0IsQ0FBQ0osc0JBQUQsQ0FBcEI7QUFDRCxHQUZEO0FBR0QsQ0EzQkQ7O0FBb0NPLElBQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FFVTtBQUFBLE1BRHBDQyxhQUNvQyxRQUQ3Q0MsT0FDNkM7QUFDN0MsTUFBTWIsZUFBZSxHQUFHYyxpRUFBRztBQUN2QkMsTUFBRSxFQUFFSCxhQURtQjtBQUV2QkksU0FBSyxFQUFMQSxrQ0FBS0E7QUFGa0IsS0FHcEIzQixlQUhvQixFQUEzQjtBQUFBLE1BS0U0QixtQkFBbUIsR0FBR2xCLGlCQUFpQixDQUFDQyxlQUFELENBTHpDOztBQU9BQSxpQkFBZSxDQUFDa0IsU0FBaEIsR0FBNEIsWUFBTTtBQUNoQ0QsdUJBQW1CO0FBQ3BCLEdBRkQ7O0FBSUEsU0FBT2pCLGVBQVA7QUFDRCxDQWZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2FsbHBhcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgTkVUIGZyb20gJ0AvYXNzZXRzL2xpYnMvdmFudGEubmV0Lm1pbic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG50eXBlIENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9ICgpID0+IHZvaWQ7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7aH0sIDUwJSwgNTAlKWApLnJnYk51bWJlcigpO1xuXG5jb25zdCBmcHMgPSA2MCxcbiAgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCkgLyBmcHMsXG4gIGluaXRpYWxDb2xvciA9IDIyMCxcbiAgdmFudGFKc1NldHRpbmdzID0ge1xuICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgbW91c2VDb250cm9sczogZmFsc2UsXG4gICAgdG91Y2hDb250cm9sczogZmFsc2UsXG4gICAgLy8gaGlnaGxpZ2h0Q29sb3I6IHdhbGxwYXBlckNvbG9yKGluaXRpYWxDb2xvciksXG5cbiAgICBwb2ludHM6IDksXG4gICAgbWF4RGlzdGFuY2U6IDMwLFxuICAgIHNwYWNpbmc6IDEwLFxuICAgIGJhY2tncm91bmRDb2xvcjogMHgwMjA4LFxuICAgIGNvbG9yOiB3YWxscGFwZXJDb2xvcihpbml0aWFsQ29sb3IpLFxuICAgIHNob3dEb3RzOiBmYWxzZVxuICB9O1xuXG5jb25zdCBpbml0UmFpbmJvd0VmZmVjdCA9IChcbiAgd2FsbHBhcGVyRWZmZWN0OiBXYWxscGFwZXJFZmZlY3Rcbik6IENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9PiB7XG4gIGxldCBub3csXG4gICAgZGVsdGEsXG4gICAgdGhlbiA9IERhdGUubm93KCksXG4gICAgYmFzZSA9IGluaXRpYWxDb2xvcixcbiAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkOiBudW1iZXI7XG5cbiAgY29uc3QgdXBkYXRlQ29sb3IgPSAoKSA9PiB7XG4gICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBkZWx0YSA9IG5vdyAtIHRoZW47XG5cbiAgICBpZiAoZGVsdGEgPiB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzKSB7XG4gICAgICBiYXNlID0gYmFzZSA+IDM2MCA/IDAgOiBiYXNlICsgMTtcbiAgICAgIHRoZW4gPSBub3cgLSAoZGVsdGEgJSB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzKTtcbiAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoYmFzZSk7XG4gICAgfVxuXG4gICAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG4gIH07XG5cbiAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjb2xvclVwZGF0ZUFuaW1hdGlvbklkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFdhbGxwYXBlckVmZmVjdCA9IHtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgb3B0aW9uczoge1xuICAgIGNvbG9yOiBudW1iZXI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyV2FsbHBhcGVyRWZmZWN0ID0gKHtcbiAgY3VycmVudDogcmVuZGVyRWxlbWVudFxufTogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IFdhbGxwYXBlckVmZmVjdCA9PiB7XG4gIGNvbnN0IHdhbGxwYXBlckVmZmVjdCA9IE5FVCh7XG4gICAgICBlbDogcmVuZGVyRWxlbWVudCxcbiAgICAgIFRIUkVFLFxuICAgICAgLi4udmFudGFKc1NldHRpbmdzXG4gICAgfSksXG4gICAgY2FuY2VsUmFpbmJvd0VmZmVjdCA9IGluaXRSYWluYm93RWZmZWN0KHdhbGxwYXBlckVmZmVjdCk7XG5cbiAgd2FsbHBhcGVyRWZmZWN0Lm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHdhbGxwYXBlckVmZmVjdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Wallpaper.tsx\n");

/***/ })

})