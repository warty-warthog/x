webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var h = Math.floor(Math.random() * 256),\n          increment = true;\n      var colorIntervalId = setInterval(function () {\n        if (h === 0) increment = true;else if (h === 255) increment = false;\n        wallpaperEffect.options.color = color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h = increment ? h + 1 : h - 1, \", 50%, 10%)\")).rgbNumber();\n      }, 1);\n      return function () {\n        clearInterval(colorIntervalId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbIkRlc2t0b3AiLCJjaGlsZHJlbiIsImRlc2t0b3BSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIndhbGxwYXBlckVmZmVjdCIsInNldFdhbGxwYXBlckVmZmVjdCIsInVzZUVmZmVjdCIsInJlbmRlcldhbGxwYXBlckVmZmVjdCIsImRlc3Ryb3kiLCJoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5jcmVtZW50IiwiY29sb3JJbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJvcHRpb25zIiwiY29sb3IiLCJDb2xvciIsInJnYk51bWJlciIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJkZXNrdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQVcsR0FBRyxTQUFkQSxPQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNyQyxNQUFBQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUFBLGtCQUNvQ0Msc0RBQVEsRUFENUM7QUFBQSxNQUNIQyxlQURHO0FBQUEsTUFDY0Msa0JBRGQ7O0FBR05DLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxzQkFBa0IsQ0FBQ0UsbUZBQXFCLENBQUNOLFVBQUQsQ0FBdEIsQ0FBbEI7QUFFQSxXQUFPLFlBQU07QUFDWEcscUJBQWUsU0FBZixJQUFBQSxlQUFlLFdBQWYsWUFBQUEsZUFBZSxDQUFFSSxPQUFqQjtBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLGVBQUosRUFBcUI7QUFDbkIsVUFBSUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQVI7QUFBQSxVQUNFQyxTQUFTLEdBQUcsSUFEZDtBQUVBLFVBQU1DLGVBQWUsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDeEMsWUFBSU4sQ0FBQyxLQUFLLENBQVYsRUFBYUksU0FBUyxHQUFHLElBQVosQ0FBYixLQUNLLElBQUlKLENBQUMsS0FBSyxHQUFWLEVBQWVJLFNBQVMsR0FBRyxLQUFaO0FBRXBCVCx1QkFBZSxDQUFDWSxPQUFoQixDQUF3QkMsS0FBeEIsR0FBZ0NDLDRDQUFLLGVBQVNULENBQUMsR0FBR0ksU0FBUyxHQUFHSixDQUFDLEdBQUcsQ0FBUCxHQUFXQSxDQUFDLEdBQUcsQ0FBckMsaUJBQUwsQ0FBMkRVLFNBQTNELEVBQWhDO0FBQ0QsT0FMa0MsRUFLaEMsQ0FMZ0MsQ0FBbkM7QUFPQSxhQUFPLFlBQU07QUFDWEMscUJBQWEsQ0FBQ04sZUFBRCxDQUFiO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FmUSxFQWVOLENBQUNWLGVBQUQsQ0FmTSxDQUFUO0FBaUJBLFNBQ0U7QUFBTSxhQUFTLEVBQUVpQixrRUFBTSxDQUFDQyxPQUF4QjtBQUFpQyxPQUFHLEVBQUVyQixVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBbENNOztHQUFNRCxPOztLQUFBQSxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZXNrdG9wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRGVza3RvcC5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFdhbGxwYXBlckVmZmVjdCB9IGZyb20gJ0AvY29tcG9uZW50cy9XYWxscGFwZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyV2FsbHBhcGVyRWZmZWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxwYXBlcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG5leHBvcnQgY29uc3QgRGVza3RvcDogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRlc2t0b3BSZWYgPSB1c2VSZWYobnVsbCksXG4gICAgW3dhbGxwYXBlckVmZmVjdCwgc2V0V2FsbHBhcGVyRWZmZWN0XSA9IHVzZVN0YXRlPFdhbGxwYXBlckVmZmVjdD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdhbGxwYXBlckVmZmVjdChyZW5kZXJXYWxscGFwZXJFZmZlY3QoZGVza3RvcFJlZikpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdhbGxwYXBlckVmZmVjdD8uZGVzdHJveSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3YWxscGFwZXJFZmZlY3QpIHtcbiAgICAgIGxldCBoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSxcbiAgICAgICAgaW5jcmVtZW50ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGNvbG9ySW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGggPT09IDApIGluY3JlbWVudCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGggPT09IDI1NSkgaW5jcmVtZW50ID0gZmFsc2U7XG5cbiAgICAgICAgd2FsbHBhcGVyRWZmZWN0Lm9wdGlvbnMuY29sb3IgPSBDb2xvcihgaHNsKCR7IGggPSBpbmNyZW1lbnQgPyBoICsgMSA6IGggLSAxIH0sIDUwJSwgMTAlKWApLnJnYk51bWJlcigpO1xuICAgICAgfSwgMSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY29sb3JJbnRlcnZhbElkKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbd2FsbHBhcGVyRWZmZWN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNrdG9wfSByZWY9e2Rlc2t0b3BSZWZ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})