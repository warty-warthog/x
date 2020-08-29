webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar fps = 4,\n    interval = 1000 / fps;\n\nvar random = function random(max) {\n  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 35%, 25%)\")).rgbNumber();\n};\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef, wallpaperColor(0)));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var then = Date.now(),\n          now,\n          delta,\n          base = 0,\n          colorUpdateAnimationId;\n\n      var updateColor = function updateColor() {\n        now = Date.now();\n        delta = now - then;\n\n        if (delta > interval) {\n          base = base > 360 ? 0 : base + 1;\n          then = now - delta % interval;\n          wallpaperEffect.options.color = wallpaperColor(base);\n        }\n\n        colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      };\n\n      colorUpdateAnimationId = requestAnimationFrame(updateColor);\n      return function () {\n        cancelAnimationFrame(colorUpdateAnimationId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbImZwcyIsImludGVydmFsIiwicmFuZG9tIiwibWF4IiwibWluIiwiTWF0aCIsImZsb29yIiwid2FsbHBhcGVyQ29sb3IiLCJoIiwiQ29sb3IiLCJyZ2JOdW1iZXIiLCJEZXNrdG9wIiwiY2hpbGRyZW4iLCJkZXNrdG9wUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ3YWxscGFwZXJFZmZlY3QiLCJzZXRXYWxscGFwZXJFZmZlY3QiLCJ1c2VFZmZlY3QiLCJyZW5kZXJXYWxscGFwZXJFZmZlY3QiLCJkZXN0cm95IiwidGhlbiIsIkRhdGUiLCJub3ciLCJkZWx0YSIsImJhc2UiLCJjb2xvclVwZGF0ZUFuaW1hdGlvbklkIiwidXBkYXRlQ29sb3IiLCJvcHRpb25zIiwiY29sb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInN0eWxlcyIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLENBQVo7QUFBQSxJQUNFQyxRQUFRLEdBQUcsT0FBT0QsR0FEcEI7O0FBR0EsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRDtBQUFBLE1BQWNDLEdBQWQsdUVBQW9CLENBQXBCO0FBQUEsU0FDYkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0gsTUFBTCxNQUFpQkMsR0FBRyxHQUFHQyxHQUFOLEdBQVksQ0FBN0IsSUFBa0NBLEdBQTdDLENBRGE7QUFBQSxDQUFmOztBQUdBLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3JCQyw0Q0FBSyxlQUFTRCxDQUFULGlCQUFMLENBQStCRSxTQUEvQixFQURxQjtBQUFBLENBQXZCOztBQUdPLElBQU1DLE9BQVcsR0FBRyxTQUFkQSxPQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNyQyxNQUFBQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUFBLGtCQUNvQ0Msc0RBQVEsRUFENUM7QUFBQSxNQUNIQyxlQURHO0FBQUEsTUFDY0Msa0JBRGQ7O0FBR05DLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxzQkFBa0IsQ0FDaEJFLG1GQUFxQixDQUFDTixVQUFELEVBQWFOLGNBQWMsQ0FBQyxDQUFELENBQTNCLENBREwsQ0FBbEI7QUFJQSxXQUFPLFlBQU07QUFDWFMscUJBQWUsU0FBZixJQUFBQSxlQUFlLFdBQWYsWUFBQUEsZUFBZSxDQUFFSSxPQUFqQjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLGVBQUosRUFBcUI7QUFDbkIsVUFBSUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUFBLFVBQ0VBLEdBREY7QUFBQSxVQUNPQyxLQURQO0FBQUEsVUFFRUMsSUFBSSxHQUFHLENBRlQ7QUFBQSxVQUdFQyxzQkFIRjs7QUFLQSxVQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSixXQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBTCxFQUFOO0FBQ0FDLGFBQUssR0FBR0QsR0FBRyxHQUFHRixJQUFkOztBQUVBLFlBQUlHLEtBQUssR0FBR3ZCLFFBQVosRUFBc0I7QUFDcEJ3QixjQUFJLEdBQUdBLElBQUksR0FBRyxHQUFQLEdBQWEsQ0FBYixHQUFpQkEsSUFBSSxHQUFHLENBQS9CO0FBQ0FKLGNBQUksR0FBR0UsR0FBRyxHQUFHQyxLQUFLLEdBQUd2QixRQUFyQjtBQUNBZSx5QkFBZSxDQUFDWSxPQUFoQixDQUF3QkMsS0FBeEIsR0FBZ0N0QixjQUFjLENBQUNrQixJQUFELENBQTlDO0FBQ0Q7O0FBRURDLDhCQUFzQixHQUFHSSxxQkFBcUIsQ0FBQ0gsV0FBRCxDQUE5QztBQUNELE9BWEQ7O0FBYUFELDRCQUFzQixHQUFHSSxxQkFBcUIsQ0FBQ0gsV0FBRCxDQUE5QztBQUVBLGFBQU8sWUFBTTtBQUNYSSw0QkFBb0IsQ0FBQ0wsc0JBQUQsQ0FBcEI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQTFCUSxFQTBCTixDQUFDVixlQUFELENBMUJNLENBQVQ7QUE0QkEsU0FDRTtBQUFNLGFBQVMsRUFBRWdCLGtFQUFNLENBQUNDLE9BQXhCO0FBQWlDLE9BQUcsRUFBRXBCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGO0FBS0QsQ0EvQ007O0dBQU1ELE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2t0b3AudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9EZXNrdG9wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgV2FsbHBhcGVyRWZmZWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxwYXBlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJXYWxscGFwZXJFZmZlY3QgfSBmcm9tICdAL2NvbXBvbmVudHMvV2FsbHBhcGVyJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbmNvbnN0IGZwcyA9IDQsXG4gIGludGVydmFsID0gMTAwMCAvIGZwcztcblxuY29uc3QgcmFuZG9tID0gKG1heDogbnVtYmVyLCBtaW4gPSAwKSA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXG5jb25zdCB3YWxscGFwZXJDb2xvciA9IChoOiBudW1iZXIpOiBudW1iZXIgPT5cbiAgQ29sb3IoYGhzbCgkeyBoIH0sIDM1JSwgMjUlKWApLnJnYk51bWJlcigpO1xuXG5leHBvcnQgY29uc3QgRGVza3RvcDogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRlc2t0b3BSZWYgPSB1c2VSZWYobnVsbCksXG4gICAgW3dhbGxwYXBlckVmZmVjdCwgc2V0V2FsbHBhcGVyRWZmZWN0XSA9IHVzZVN0YXRlPFdhbGxwYXBlckVmZmVjdD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdhbGxwYXBlckVmZmVjdChcbiAgICAgIHJlbmRlcldhbGxwYXBlckVmZmVjdChkZXNrdG9wUmVmLCB3YWxscGFwZXJDb2xvcigwKSlcbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdhbGxwYXBlckVmZmVjdD8uZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YWxscGFwZXJFZmZlY3QpIHtcbiAgICAgIGxldCB0aGVuID0gRGF0ZS5ub3coKSxcbiAgICAgICAgbm93LCBkZWx0YSxcbiAgICAgICAgYmFzZSA9IDAsXG4gICAgICAgIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQ6IG51bWJlcjtcblxuICAgICAgY29uc3QgdXBkYXRlQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGRlbHRhID0gbm93IC0gdGhlbjtcblxuICAgICAgICBpZiAoZGVsdGEgPiBpbnRlcnZhbCkge1xuICAgICAgICAgIGJhc2UgPSBiYXNlID4gMzYwID8gMCA6IGJhc2UgKyAxO1xuICAgICAgICAgIHRoZW4gPSBub3cgLSBkZWx0YSAlIGludGVydmFsO1xuICAgICAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoYmFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xvclVwZGF0ZUFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNvbG9yKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbG9yVXBkYXRlQW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ29sb3IpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjb2xvclVwZGF0ZUFuaW1hdGlvbklkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbd2FsbHBhcGVyRWZmZWN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNrdG9wfSByZWY9e2Rlc2t0b3BSZWZ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})