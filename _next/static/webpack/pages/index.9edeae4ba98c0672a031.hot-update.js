webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.waves.min */ \"./assets/libs/vanta.waves.min.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 75%, 5%)\")).rgbNumber();\n};\n\nvar fps = 60,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = 220,\n    vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  color: wallpaperColor(initialColor),\n  shininess: 45,\n  waveHeight: 5,\n  waveSpeed: 0.5,\n  zoom: 1\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.color = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsid2FsbHBhcGVyQ29sb3IiLCJoIiwiQ29sb3IiLCJyZ2JOdW1iZXIiLCJmcHMiLCJ1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzIiwiTnVtYmVyIiwicHJvY2VzcyIsImluaXRpYWxDb2xvciIsInZhbnRhSnNTZXR0aW5ncyIsImd5cm9Db250cm9scyIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSIsImluaXRSYWluYm93RWZmZWN0Iiwid2FsbHBhcGVyRWZmZWN0Iiwibm93IiwiZGVsdGEiLCJ0aGVuIiwiRGF0ZSIsImJhc2UiLCJjb2xvclVwZGF0ZUFuaW1hdGlvbklkIiwidXBkYXRlQ29sb3IiLCJvcHRpb25zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJyZW5kZXJFbGVtZW50IiwiY3VycmVudCIsIldBVkVTIiwiZWwiLCJUSFJFRSIsImNhbmNlbFJhaW5ib3dFZmZlY3QiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3JCQyw0Q0FBSyxlQUFRRCxDQUFSLGdCQUFMLENBQTRCRSxTQUE1QixFQURxQjtBQUFBLENBQXZCOztBQUdBLElBQU1DLEdBQUcsR0FBRyxFQUFaO0FBQUEsSUFDRUMsNEJBQTRCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBRCxDQUFOLEdBQTJDSCxHQUQ1RTtBQUFBLElBRUVJLFlBQVksR0FBRyxHQUZqQjtBQUFBLElBR0VDLGVBQWUsR0FBRztBQUNoQkMsY0FBWSxFQUFFLEtBREU7QUFFaEJDLGVBQWEsRUFBRSxLQUZDO0FBR2hCQyxlQUFhLEVBQUUsS0FIQztBQUloQkMsT0FBSyxFQUFFYixjQUFjLENBQUNRLFlBQUQsQ0FKTDtBQUtoQk0sV0FBUyxFQUFFLEVBTEs7QUFNaEJDLFlBQVUsRUFBRSxDQU5JO0FBT2hCQyxXQUFTLEVBQUUsR0FQSztBQVFoQkMsTUFBSSxFQUFFO0FBUlUsQ0FIcEI7O0FBY0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUN4QkMsZUFEd0IsRUFFUTtBQUNoQyxNQUFJQyxHQUFKO0FBQUEsTUFDRUMsS0FERjtBQUFBLE1BRUVDLElBQUksR0FBR0MsSUFBSSxDQUFDSCxHQUFMLEVBRlQ7QUFBQSxNQUdFSSxJQUFJLEdBQUdoQixZQUhUO0FBQUEsTUFJRWlCLHNCQUpGOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJOLE9BQUcsR0FBR0csSUFBSSxDQUFDSCxHQUFMLEVBQU47QUFDQUMsU0FBSyxHQUFHRCxHQUFHLEdBQUdFLElBQWQ7O0FBRUEsUUFBSUQsS0FBSyxHQUFHaEIsNEJBQVosRUFBMEM7QUFDeENtQixVQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FGLFVBQUksR0FBR0YsR0FBRyxHQUFJQyxLQUFLLEdBQUdoQiw0QkFBdEI7QUFDQWMscUJBQWUsQ0FBQ1EsT0FBaEIsQ0FBd0JkLEtBQXhCLEdBQWdDYixjQUFjLENBQUN3QixJQUFELENBQTlDO0FBQ0Q7O0FBRURDLDBCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUNELEdBWEQ7O0FBYUFELHdCQUFzQixHQUFHRyxxQkFBcUIsQ0FBQ0YsV0FBRCxDQUE5QztBQUVBLFNBQU8sWUFBTTtBQUNYRyx3QkFBb0IsQ0FBQ0osc0JBQUQsQ0FBcEI7QUFDRCxHQUZEO0FBR0QsQ0EzQkQ7O0FBb0NPLElBQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FFVTtBQUFBLE1BRHBDQyxhQUNvQyxRQUQ3Q0MsT0FDNkM7QUFDN0MsTUFBTWIsZUFBZSxHQUFHYyxtRUFBSztBQUN6QkMsTUFBRSxFQUFFSCxhQURxQjtBQUV6QkksU0FBSyxFQUFMQSxrQ0FBS0E7QUFGb0IsS0FHdEIxQixlQUhzQixFQUE3QjtBQUFBLE1BS0UyQixtQkFBbUIsR0FBR2xCLGlCQUFpQixDQUFDQyxlQUFELENBTHpDOztBQU9BQSxpQkFBZSxDQUFDa0IsU0FBaEIsR0FBNEIsWUFBTTtBQUNoQ0QsdUJBQW1CO0FBQ3BCLEdBRkQ7O0FBSUEsU0FBT2pCLGVBQVA7QUFDRCxDQWZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBXQVZFUyBmcm9tICdAL2Fzc2V0cy9saWJzL3ZhbnRhLndhdmVzLm1pbic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG50eXBlIENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9ICgpID0+IHZvaWQ7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7aH0sIDc1JSwgNSUpYCkucmdiTnVtYmVyKCk7XG5cbmNvbnN0IGZwcyA9IDYwLFxuICB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzID0gTnVtYmVyKHByb2Nlc3MuZW52Lm1pbGxpc2Vjb25kc0luU2Vjb25kKSAvIGZwcyxcbiAgaW5pdGlhbENvbG9yID0gMjIwLFxuICB2YW50YUpzU2V0dGluZ3MgPSB7XG4gICAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICBtb3VzZUNvbnRyb2xzOiBmYWxzZSxcbiAgICB0b3VjaENvbnRyb2xzOiBmYWxzZSxcbiAgICBjb2xvcjogd2FsbHBhcGVyQ29sb3IoaW5pdGlhbENvbG9yKSxcbiAgICBzaGluaW5lc3M6IDQ1LFxuICAgIHdhdmVIZWlnaHQ6IDUsXG4gICAgd2F2ZVNwZWVkOiAwLjUsXG4gICAgem9vbTogMVxuICB9O1xuXG5jb25zdCBpbml0UmFpbmJvd0VmZmVjdCA9IChcbiAgd2FsbHBhcGVyRWZmZWN0OiBXYWxscGFwZXJFZmZlY3Rcbik6IENhbmNlbFJhaW5ib3dFZmZlY3RGdW5jdGlvbiA9PiB7XG4gIGxldCBub3csXG4gICAgZGVsdGEsXG4gICAgdGhlbiA9IERhdGUubm93KCksXG4gICAgYmFzZSA9IGluaXRpYWxDb2xvcixcbiAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkOiBudW1iZXI7XG5cbiAgY29uc3QgdXBkYXRlQ29sb3IgPSAoKSA9PiB7XG4gICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBkZWx0YSA9IG5vdyAtIHRoZW47XG5cbiAgICBpZiAoZGVsdGEgPiB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzKSB7XG4gICAgICBiYXNlID0gYmFzZSA+IDM2MCA/IDAgOiBiYXNlICsgMTtcbiAgICAgIHRoZW4gPSBub3cgLSAoZGVsdGEgJSB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzKTtcbiAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoYmFzZSk7XG4gICAgfVxuXG4gICAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG4gIH07XG5cbiAgY29sb3JVcGRhdGVBbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb2xvcik7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjb2xvclVwZGF0ZUFuaW1hdGlvbklkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFdhbGxwYXBlckVmZmVjdCA9IHtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgb3B0aW9uczoge1xuICAgIGNvbG9yOiBudW1iZXI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyV2FsbHBhcGVyRWZmZWN0ID0gKHtcbiAgY3VycmVudDogcmVuZGVyRWxlbWVudFxufTogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IFdhbGxwYXBlckVmZmVjdCA9PiB7XG4gIGNvbnN0IHdhbGxwYXBlckVmZmVjdCA9IFdBVkVTKHtcbiAgICAgIGVsOiByZW5kZXJFbGVtZW50LFxuICAgICAgVEhSRUUsXG4gICAgICAuLi52YW50YUpzU2V0dGluZ3NcbiAgICB9KSxcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0ID0gaW5pdFJhaW5ib3dFZmZlY3Qod2FsbHBhcGVyRWZmZWN0KTtcblxuICB3YWxscGFwZXJFZmZlY3Qub25EZXN0cm95ID0gKCkgPT4ge1xuICAgIGNhbmNlbFJhaW5ib3dFZmZlY3QoKTtcbiAgfTtcblxuICByZXR1cm4gd2FsbHBhcGVyRWZmZWN0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})