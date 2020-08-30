webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.waves.min */ \"./assets/libs/vanta.waves.min.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 10%, 15%)\")).rgbNumber();\n};\n\nvar fps = 60,\n    updateIntervalInMilliseconds = Number(1000) / fps,\n    initialColor = 220,\n    vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  color: wallpaperColor(initialColor),\n  shininess: 30,\n  // TODO: Connect to lux sensor?\n  // TODO: Connect to phone movement?\n  waveHeight: 5,\n  waveSpeed: 0.5,\n  zoom: 1\n};\n\nvar initRainbowEffect = function initRainbowEffect(wallpaperEffect) {\n  var now,\n      delta,\n      then = Date.now(),\n      base = initialColor,\n      colorUpdateAnimationId;\n\n  var updateColor = function updateColor() {\n    now = Date.now();\n    delta = now - then;\n\n    if (delta > updateIntervalInMilliseconds) {\n      base = base > 360 ? 0 : base + 1;\n      then = now - delta % updateIntervalInMilliseconds;\n      wallpaperEffect.options.color = wallpaperColor(base);\n    }\n\n    colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  };\n\n  colorUpdateAnimationId = requestAnimationFrame(updateColor);\n  return function () {\n    cancelAnimationFrame(colorUpdateAnimationId);\n  };\n};\n\nvar colorText = (str, phase);\n{\n  if (phase == undefined) phase = 0;\n  center = 128;\n  width = 127;\n  frequency = Math.PI * 2 / str.length;\n\n  for (var i = 0; i < str.length; ++i) {\n    red = Math.sin(frequency * i + 2 + phase) * width + center;\n    green = Math.sin(frequency * i + 0 + phase) * width + center;\n    blue = Math.sin(frequency * i + 4 + phase) * width + center;\n    document.write('<font style=\"color:' + RGB2Color(red, green, blue) + '\">' + str.substr(i, 1) + '</font>');\n  }\n}\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings)),\n      cancelRainbowEffect = initRainbowEffect(wallpaperEffect);\n\n  wallpaperEffect.onDestroy = function () {\n    cancelRainbowEffect();\n  };\n\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsid2FsbHBhcGVyQ29sb3IiLCJoIiwiQ29sb3IiLCJyZ2JOdW1iZXIiLCJmcHMiLCJ1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzIiwiTnVtYmVyIiwicHJvY2VzcyIsImluaXRpYWxDb2xvciIsInZhbnRhSnNTZXR0aW5ncyIsImd5cm9Db250cm9scyIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSIsImluaXRSYWluYm93RWZmZWN0Iiwid2FsbHBhcGVyRWZmZWN0Iiwibm93IiwiZGVsdGEiLCJ0aGVuIiwiRGF0ZSIsImJhc2UiLCJjb2xvclVwZGF0ZUFuaW1hdGlvbklkIiwidXBkYXRlQ29sb3IiLCJvcHRpb25zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjb2xvclRleHQiLCJzdHIiLCJwaGFzZSIsInVuZGVmaW5lZCIsImNlbnRlciIsIndpZHRoIiwiZnJlcXVlbmN5IiwiTWF0aCIsIlBJIiwibGVuZ3RoIiwiaSIsInJlZCIsInNpbiIsImdyZWVuIiwiYmx1ZSIsImRvY3VtZW50Iiwid3JpdGUiLCJSR0IyQ29sb3IiLCJzdWJzdHIiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJyZW5kZXJFbGVtZW50IiwiY3VycmVudCIsIldBVkVTIiwiZWwiLCJUSFJFRSIsImNhbmNlbFJhaW5ib3dFZmZlY3QiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3JCQyw0Q0FBSyxlQUFRRCxDQUFSLGlCQUFMLENBQTZCRSxTQUE3QixFQURxQjtBQUFBLENBQXZCOztB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QXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUVVO0FBQUEsTUFEcENDLGFBQ29DLFFBRDdDQyxPQUM2QztBQUM3QyxNQUFNaEMsZUFBZSxHQUFHaUMsbUVBQUs7QUFDekJDLE1BQUUsRUFBRUgsYUFEcUI7QUFFekJJLFNBQUssRUFBTEEsa0NBQUtBO0FBRm9CLEtBR3RCN0MsZUFIc0IsRUFBN0I7QUFBQSxNQUtFOEMsbUJBQW1CLEdBQUdyQyxpQkFBaUIsQ0FBQ0MsZUFBRCxDQUx6Qzs7QUFPQUEsaUJBQWUsQ0FBQ3FDLFNBQWhCLEdBQTRCLFlBQU07QUFDaENELHVCQUFtQjtBQUNwQixHQUZEOztBQUlBLFNBQU9wQyxlQUFQO0FBQ0QsQ0FmTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2FsbHBhcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFdBVkVTIGZyb20gJ0AvYXNzZXRzL2xpYnMvdmFudGEud2F2ZXMubWluJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbnR5cGUgQ2FuY2VsUmFpbmJvd0VmZmVjdEZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcblxuY29uc3Qgd2FsbHBhcGVyQ29sb3IgPSAoaDogbnVtYmVyKTogbnVtYmVyID0+XG4gIENvbG9yKGBoc2woJHtofSwgMTAlLCAxNSUpYCkucmdiTnVtYmVyKCk7XG5cbmNvbnN0IGZwcyA9IDYwLFxuICB1cGRhdGVJbnRlcnZhbEluTWlsbGlzZWNvbmRzID0gTnVtYmVyKHByb2Nlc3MuZW52Lm1pbGxpc2Vjb25kc0luU2Vjb25kKSAvIGZwcyxcbiAgaW5pdGlhbENvbG9yID0gMjIwLFxuICB2YW50YUpzU2V0dGluZ3MgPSB7XG4gICAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICBtb3VzZUNvbnRyb2xzOiBmYWxzZSxcbiAgICB0b3VjaENvbnRyb2xzOiBmYWxzZSxcbiAgICBjb2xvcjogd2FsbHBhcGVyQ29sb3IoaW5pdGlhbENvbG9yKSxcbiAgICBzaGluaW5lc3M6IDMwLCAvLyBUT0RPOiBDb25uZWN0IHRvIGx1eCBzZW5zb3I/XG4gICAgLy8gVE9ETzogQ29ubmVjdCB0byBwaG9uZSBtb3ZlbWVudD9cbiAgICB3YXZlSGVpZ2h0OiA1LFxuICAgIHdhdmVTcGVlZDogMC41LFxuICAgIHpvb206IDFcbiAgfTtcblxuY29uc3QgaW5pdFJhaW5ib3dFZmZlY3QgPSAoXG4gIHdhbGxwYXBlckVmZmVjdDogV2FsbHBhcGVyRWZmZWN0XG4pOiBDYW5jZWxSYWluYm93RWZmZWN0RnVuY3Rpb24gPT4ge1xuICBsZXQgbm93LFxuICAgIGRlbHRhLFxuICAgIHRoZW4gPSBEYXRlLm5vdygpLFxuICAgIGJhc2UgPSBpbml0aWFsQ29sb3IsXG4gICAgY29sb3JVcGRhdGVBbmltYXRpb25JZDogbnVtYmVyO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbG9yID0gKCkgPT4ge1xuICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgZGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgaWYgKGRlbHRhID4gdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcykge1xuICAgICAgYmFzZSA9IGJhc2UgPiAzNjAgPyAwIDogYmFzZSArIDE7XG4gICAgICB0aGVuID0gbm93IC0gKGRlbHRhICUgdXBkYXRlSW50ZXJ2YWxJbk1pbGxpc2Vjb25kcyk7XG4gICAgICB3YWxscGFwZXJFZmZlY3Qub3B0aW9ucy5jb2xvciA9IHdhbGxwYXBlckNvbG9yKGJhc2UpO1xuICAgIH1cblxuICAgIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ29sb3IpO1xuICB9O1xuXG4gIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ29sb3IpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29sb3JVcGRhdGVBbmltYXRpb25JZCk7XG4gIH07XG59O1xuXG5jb25zdCBjb2xvclRleHQgPSAoc3RyLHBoYXNlKVxue1xuICAgIGlmIChwaGFzZSA9PSB1bmRlZmluZWQpIHBoYXNlID0gMDtcbiAgY2VudGVyID0gMTI4O1xuICB3aWR0aCA9IDEyNztcbiAgZnJlcXVlbmN5ID0gTWF0aC5QSSoyL3N0ci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKVxuICB7XG4gICAgIHJlZCAgID0gTWF0aC5zaW4oZnJlcXVlbmN5KmkrMitwaGFzZSkgKiB3aWR0aCArIGNlbnRlcjtcbiAgICAgZ3JlZW4gPSBNYXRoLnNpbihmcmVxdWVuY3kqaSswK3BoYXNlKSAqIHdpZHRoICsgY2VudGVyO1xuICAgICBibHVlICA9IE1hdGguc2luKGZyZXF1ZW5jeSppKzQrcGhhc2UpICogd2lkdGggKyBjZW50ZXI7XG4gICAgIGRvY3VtZW50LndyaXRlKCAnPGZvbnQgc3R5bGU9XCJjb2xvcjonICsgUkdCMkNvbG9yKHJlZCxncmVlbixibHVlKSArICdcIj4nICsgc3RyLnN1YnN0cihpLDEpICsgJzwvZm9udD4nKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXYWxscGFwZXJFZmZlY3QgPSB7XG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG4gIG9wdGlvbnM6IHtcbiAgICBjb2xvcjogbnVtYmVyO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlcldhbGxwYXBlckVmZmVjdCA9ICh7XG4gIGN1cnJlbnQ6IHJlbmRlckVsZW1lbnRcbn06IFJlZk9iamVjdDxIVE1MRWxlbWVudD4pOiBXYWxscGFwZXJFZmZlY3QgPT4ge1xuICBjb25zdCB3YWxscGFwZXJFZmZlY3QgPSBXQVZFUyh7XG4gICAgICBlbDogcmVuZGVyRWxlbWVudCxcbiAgICAgIFRIUkVFLFxuICAgICAgLi4udmFudGFKc1NldHRpbmdzXG4gICAgfSksXG4gICAgY2FuY2VsUmFpbmJvd0VmZmVjdCA9IGluaXRSYWluYm93RWZmZWN0KHdhbGxwYXBlckVmZmVjdCk7XG5cbiAgd2FsbHBhcGVyRWZmZWN0Lm9uRGVzdHJveSA9ICgpID0+IHtcbiAgICBjYW5jZWxSYWluYm93RWZmZWN0KCk7XG4gIH07XG5cbiAgcmV0dXJuIHdhbGxwYXBlckVmZmVjdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})