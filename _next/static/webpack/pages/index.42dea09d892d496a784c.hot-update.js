webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: renderWallpaperEffect, rainbowWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rainbowWallpaperEffect\", function() { return rainbowWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.waves.min */ \"./assets/libs/vanta.waves.min.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  color: 0x3c4961,\n  shininess: 15,\n  waveHeight: 25,\n  waveSpeed: 0.5,\n  zoom: 0.9\n};\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref) {\n  var renderElement = _ref.current;\n  return _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings));\n};\nvar rainbowWallpaperEffect = function rainbowWallpaperEffect(wallpaperEffect) {\n  return function () {\n    if (wallpaperEffect) {\n      var colorIndex = 0;\n      setInterval(function () {\n        // if (colorIndex === 255) {\n        //   colorIndex = 0;\n        // }\n        wallpaperEffect.options.color = color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(colorIndex = colorIndex === 255 ? 0 : colorIndex + 1, \", 100%, 10%)\")).rgbNumber(); //colorIndex++;\n      }, 50);\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsidmFudGFKc1NldHRpbmdzIiwiZ3lyb0NvbnRyb2xzIiwibW91c2VDb250cm9scyIsInRvdWNoQ29udHJvbHMiLCJjb2xvciIsInNoaW5pbmVzcyIsIndhdmVIZWlnaHQiLCJ3YXZlU3BlZWQiLCJ6b29tIiwicmVuZGVyV2FsbHBhcGVyRWZmZWN0IiwicmVuZGVyRWxlbWVudCIsImN1cnJlbnQiLCJXQVZFUyIsImVsIiwiVEhSRUUiLCJyYWluYm93V2FsbHBhcGVyRWZmZWN0Iiwid2FsbHBhcGVyRWZmZWN0IiwiY29sb3JJbmRleCIsInNldEludGVydmFsIiwib3B0aW9ucyIsIkNvbG9yIiwicmdiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLGNBQVksRUFBRSxLQURRO0FBRXRCQyxlQUFhLEVBQUUsS0FGTztBQUd0QkMsZUFBYSxFQUFFLEtBSE87QUFJdEJDLE9BQUssRUFBRSxRQUplO0FBS3RCQyxXQUFTLEVBQUUsRUFMVztBQU10QkMsWUFBVSxFQUFFLEVBTlU7QUFPdEJDLFdBQVMsRUFBRSxHQVBXO0FBUXRCQyxNQUFJLEVBQUU7QUFSZ0IsQ0FBeEI7QUFrQk8sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQzFCQyxhQUQwQixRQUNuQ0MsT0FEbUM7QUFBQSxTQUduQ0MsbUVBQUs7QUFDSEMsTUFBRSxFQUFFSCxhQUREO0FBRUhJLFNBQUssRUFBTEEsa0NBQUtBO0FBRkYsS0FHQWQsZUFIQSxFQUg4QjtBQUFBLENBQTlCO0FBU0EsSUFBTWUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxlQUFEO0FBQUEsU0FBdUMsWUFBWTtBQUN2RixRQUFJQSxlQUFKLEVBQXFCO0FBQ25CLFVBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBQyxpQkFBVyxDQUFDLFlBQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0FGLHVCQUFlLENBQUNHLE9BQWhCLENBQXdCZixLQUF4QixHQUFnQ2dCLDRDQUFLLGVBQVNILFVBQVUsR0FBR0EsVUFBVSxLQUFLLEdBQWYsR0FBcUIsQ0FBckIsR0FBeUJBLFVBQVUsR0FBRyxDQUE1RCxrQkFBTCxDQUFtRkksU0FBbkYsRUFBaEMsQ0FKZ0IsQ0FLaEI7QUFDRCxPQU5VLEVBTVIsRUFOUSxDQUFYO0FBT0Q7QUFDRixHQVhxQztBQUFBLENBQS9CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgV0FWRVMgZnJvbSAnQC9hc3NldHMvbGlicy92YW50YS53YXZlcy5taW4nO1xuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcblxuY29uc3QgdmFudGFKc1NldHRpbmdzID0ge1xuICBneXJvQ29udHJvbHM6IGZhbHNlLFxuICBtb3VzZUNvbnRyb2xzOiBmYWxzZSxcbiAgdG91Y2hDb250cm9sczogZmFsc2UsXG4gIGNvbG9yOiAweDNjNDk2MSxcbiAgc2hpbmluZXNzOiAxNSxcbiAgd2F2ZUhlaWdodDogMjUsXG4gIHdhdmVTcGVlZDogMC41LFxuICB6b29tOiAwLjlcbn07XG5cbmV4cG9ydCB0eXBlIFdhbGxwYXBlckVmZmVjdCA9IHtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgb3B0aW9uczoge1xuICAgIGNvbG9yOiBudW1iZXI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyV2FsbHBhcGVyRWZmZWN0ID0gKHtcbiAgY3VycmVudDogcmVuZGVyRWxlbWVudFxufTogUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IFdhbGxwYXBlckVmZmVjdCA9PlxuICBXQVZFUyh7XG4gICAgZWw6IHJlbmRlckVsZW1lbnQsXG4gICAgVEhSRUUsXG4gICAgLi4udmFudGFKc1NldHRpbmdzXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmFpbmJvd1dhbGxwYXBlckVmZmVjdCA9ICh3YWxscGFwZXJFZmZlY3Q/OiBXYWxscGFwZXJFZmZlY3QpID0+ICgpOiB2b2lkID0+IHtcbiAgaWYgKHdhbGxwYXBlckVmZmVjdCkge1xuICAgIGxldCBjb2xvckluZGV4ID0gMDtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBpZiAoY29sb3JJbmRleCA9PT0gMjU1KSB7XG4gICAgICAvLyAgIGNvbG9ySW5kZXggPSAwO1xuICAgICAgLy8gfVxuICAgICAgd2FsbHBhcGVyRWZmZWN0Lm9wdGlvbnMuY29sb3IgPSBDb2xvcihgaHNsKCR7IGNvbG9ySW5kZXggPSBjb2xvckluZGV4ID09PSAyNTUgPyAwIDogY29sb3JJbmRleCArIDEgfSwgMTAwJSwgMTAlKWApLnJnYk51bWJlcigpO1xuICAgICAgLy9jb2xvckluZGV4Kys7XG4gICAgfSwgNTApO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})