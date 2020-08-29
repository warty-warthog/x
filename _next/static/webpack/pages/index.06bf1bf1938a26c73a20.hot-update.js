webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: renderWallpaperEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderWallpaperEffect\", function() { return renderWallpaperEffect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/libs/vanta.waves.min */ \"./assets/libs/vanta.waves.min.js\");\n/* harmony import */ var _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar vantaJsSettings = {\n  gyroControls: false,\n  mouseControls: false,\n  touchControls: false,\n  shininess: 25,\n  waveHeight: 25,\n  waveSpeed: 0.25,\n  zoom: 1\n};\nvar renderWallpaperEffect = function renderWallpaperEffect(_ref, initialColor) {\n  var renderElement = _ref.current;\n  var wallpaperEffect = _assets_libs_vanta_waves_min__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread({\n    el: renderElement,\n    THREE: three__WEBPACK_IMPORTED_MODULE_1__\n  }, vantaJsSettings), {}, {\n    color: initialColor\n  }));\n  return wallpaperEffect;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsidmFudGFKc1NldHRpbmdzIiwiZ3lyb0NvbnRyb2xzIiwibW91c2VDb250cm9scyIsInRvdWNoQ29udHJvbHMiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSIsInJlbmRlcldhbGxwYXBlckVmZmVjdCIsImluaXRpYWxDb2xvciIsInJlbmRlckVsZW1lbnQiLCJjdXJyZW50Iiwid2FsbHBhcGVyRWZmZWN0IiwiV0FWRVMiLCJlbCIsIlRIUkVFIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLGNBQVksRUFBRSxLQURRO0FBRXRCQyxlQUFhLEVBQUUsS0FGTztBQUd0QkMsZUFBYSxFQUFFLEtBSE87QUFJdEJDLFdBQVMsRUFBRSxFQUpXO0FBS3RCQyxZQUFVLEVBQUUsRUFMVTtBQU10QkMsV0FBUyxFQUFFLElBTlc7QUFPdEJDLE1BQUksRUFBRTtBQVBnQixDQUF4QjtBQWlCTyxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BRW5DQyxZQUZtQyxFQUdmO0FBQUEsTUFGVEMsYUFFUyxRQUZsQkMsT0FFa0I7QUFDcEIsTUFBTUMsZUFBZSxHQUFHQyxtRUFBSztBQUMzQkMsTUFBRSxFQUFFSixhQUR1QjtBQUUzQkssU0FBSyxFQUFMQSxrQ0FBS0E7QUFGc0IsS0FHeEJmLGVBSHdCO0FBSTNCZ0IsU0FBSyxFQUFFUDtBQUpvQixLQUE3QjtBQU9BLFNBQU9HLGVBQVA7QUFDRCxDQVpNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgV0FWRVMgZnJvbSAnQC9hc3NldHMvbGlicy92YW50YS53YXZlcy5taW4nO1xuXG5jb25zdCB2YW50YUpzU2V0dGluZ3MgPSB7XG4gIGd5cm9Db250cm9sczogZmFsc2UsXG4gIG1vdXNlQ29udHJvbHM6IGZhbHNlLFxuICB0b3VjaENvbnRyb2xzOiBmYWxzZSxcbiAgc2hpbmluZXNzOiAyNSxcbiAgd2F2ZUhlaWdodDogMjUsXG4gIHdhdmVTcGVlZDogMC4yNSxcbiAgem9vbTogMVxufTtcblxuZXhwb3J0IHR5cGUgV2FsbHBhcGVyRWZmZWN0ID0ge1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBvcHRpb25zOiB7XG4gICAgY29sb3I6IG51bWJlcjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJXYWxscGFwZXJFZmZlY3QgPSAoXG4gIHsgY3VycmVudDogcmVuZGVyRWxlbWVudCB9OiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LFxuICBpbml0aWFsQ29sb3I6IG51bWJlclxuKTogV2FsbHBhcGVyRWZmZWN0ID0+IHtcbiAgY29uc3Qgd2FsbHBhcGVyRWZmZWN0ID0gV0FWRVMoe1xuICAgIGVsOiByZW5kZXJFbGVtZW50LFxuICAgIFRIUkVFLFxuICAgIC4uLnZhbnRhSnNTZXR0aW5ncyxcbiAgICBjb2xvcjogaW5pdGlhbENvbG9yXG4gIH0pO1xuXG4gIHJldHVybiB3YWxscGFwZXJFZmZlY3Q7XG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})