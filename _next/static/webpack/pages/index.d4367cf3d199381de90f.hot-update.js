webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Wallpaper.tsx":
/*!**********************************!*\
  !*** ./components/Wallpaper.tsx ***!
  \**********************************/
/*! exports provided: Wallpaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wallpaper\", function() { return Wallpaper; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_lib_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/lib/vanta.waves.min */ \"./assets/lib/vanta.waves.min.js\");\n/* harmony import */ var _assets_lib_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_lib_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Wallpaper_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Wallpaper.module.scss */ \"./styles/Wallpaper.module.scss\");\n/* harmony import */ var _styles_Wallpaper_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Wallpaper_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Wallpaper.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n // TODO: Change color like rainbow effect? Can be changed dynamicly on demo site.\n// https://www.vantajs.com/\n\nvar vantaSettings = {\n  mouseControls: false,\n  touchControls: false,\n  gyroControls: false,\n  color: 0x101f34,\n  shininess: 15,\n  waveHeight: 25,\n  waveSpeed: 0.5,\n  zoom: 0.9\n};\nvar Wallpaper = function Wallpaper() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      vantaEffect = _useState[0],\n      setVantaEffect = _useState[1],\n      vantaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!vantaEffect) {\n      setVantaEffect(_assets_lib_vanta_waves_min__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread({\n        el: vantaRef.current,\n        THREE: three__WEBPACK_IMPORTED_MODULE_2__\n      }, vantaSettings)));\n    }\n  }, []);\n  return __jsx(\"aside\", {\n    className: _styles_Wallpaper_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wallpaper,\n    ref: vantaRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Wallpaper, \"gW9+73u6SKNOrxk6sU4tsg8cGZk=\");\n\n_c = Wallpaper;\n\nvar _c;\n\n$RefreshReg$(_c, \"Wallpaper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxscGFwZXIudHN4PzM5MzMiXSwibmFtZXMiOlsidmFudGFTZXR0aW5ncyIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSIsIldhbGxwYXBlciIsInVzZVN0YXRlIiwidmFudGFFZmZlY3QiLCJzZXRWYW50YUVmZmVjdCIsInZhbnRhUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiV0FWRVMiLCJlbCIsImN1cnJlbnQiLCJUSFJFRSIsInN0eWxlcyIsIndhbGxwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsZUFBYSxFQUFFLEtBREs7QUFFcEJDLGVBQWEsRUFBRSxLQUZLO0FBR3BCQyxjQUFZLEVBQUUsS0FITTtBQUlwQkMsT0FBSyxFQUFFLFFBSmE7QUFLcEJDLFdBQVMsRUFBRSxFQUxTO0FBTXBCQyxZQUFVLEVBQUUsRUFOUTtBQU9wQkMsV0FBUyxFQUFFLEdBUFM7QUFRcEJDLE1BQUksRUFBRTtBQVJjLENBQXRCO0FBV08sSUFBTUMsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLEVBRGI7QUFBQSxNQUMxQkMsV0FEMEI7QUFBQSxNQUNiQyxjQURhO0FBQUEsTUFFL0JDLFFBRitCLEdBRXBCQyxvREFBTSxDQUFDLElBQUQsQ0FGYzs7QUFJakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0osV0FBTCxFQUFrQjtBQUNoQkMsb0JBQWMsQ0FDWkksa0VBQUs7QUFDSEMsVUFBRSxFQUFFSixRQUFRLENBQUNLLE9BRFY7QUFFSEMsYUFBSyxFQUFMQSxrQ0FBS0E7QUFGRixTQUdBbkIsYUFIQSxFQURPLENBQWQ7QUFPRDtBQUNGLEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxTQUFPO0FBQU8sYUFBUyxFQUFFb0Isb0VBQU0sQ0FBQ0MsU0FBekI7QUFBb0MsT0FBRyxFQUFFUixRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQWpCTTs7R0FBTUosUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2FsbHBhcGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgV0FWRVMgZnJvbSAnLi4vYXNzZXRzL2xpYi92YW50YS53YXZlcy5taW4nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvV2FsbHBhcGVyLm1vZHVsZS5zY3NzJztcblxuLy8gVE9ETzogQ2hhbmdlIGNvbG9yIGxpa2UgcmFpbmJvdyBlZmZlY3Q/IENhbiBiZSBjaGFuZ2VkIGR5bmFtaWNseSBvbiBkZW1vIHNpdGUuXG4vLyBodHRwczovL3d3dy52YW50YWpzLmNvbS9cblxuY29uc3QgdmFudGFTZXR0aW5ncyA9IHtcbiAgbW91c2VDb250cm9sczogZmFsc2UsXG4gIHRvdWNoQ29udHJvbHM6IGZhbHNlLFxuICBneXJvQ29udHJvbHM6IGZhbHNlLFxuICBjb2xvcjogMHgxMDFmMzQsXG4gIHNoaW5pbmVzczogMTUsXG4gIHdhdmVIZWlnaHQ6IDI1LFxuICB3YXZlU3BlZWQ6IDAuNSxcbiAgem9vbTogMC45XG59O1xuXG5leHBvcnQgY29uc3QgV2FsbHBhcGVyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbnRhRWZmZWN0LCBzZXRWYW50YUVmZmVjdF0gPSB1c2VTdGF0ZSgpLCAvLyBUT0RPOiBUeXBlXG4gICAgdmFudGFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZhbnRhRWZmZWN0KSB7XG4gICAgICBzZXRWYW50YUVmZmVjdChcbiAgICAgICAgV0FWRVMoe1xuICAgICAgICAgIGVsOiB2YW50YVJlZi5jdXJyZW50LFxuICAgICAgICAgIFRIUkVFLFxuICAgICAgICAgIC4uLnZhbnRhU2V0dGluZ3NcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy53YWxscGFwZXJ9IHJlZj17dmFudGFSZWZ9IC8+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wallpaper.tsx\n");

/***/ })

})