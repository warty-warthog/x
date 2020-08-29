webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Desktop.tsx":
/*!********************************!*\
  !*** ./components/Desktop.tsx ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desktop\", function() { return Desktop; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Desktop.module.scss */ \"./styles/Desktop.module.scss\");\n/* harmony import */ var _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wallpaper */ \"./components/Wallpaper.tsx\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Desktop.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar initialColor = 150;\n\nvar wallpaperColor = function wallpaperColor(h) {\n  return color__WEBPACK_IMPORTED_MODULE_3___default()(\"hsl(\".concat(h, \", 30%, 20%)\")).rgbNumber();\n};\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var desktopRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      wallpaperEffect = _useState[0],\n      setWallpaperEffect = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setWallpaperEffect(Object(_components_Wallpaper__WEBPACK_IMPORTED_MODULE_2__[\"renderWallpaperEffect\"])(desktopRef, wallpaperColor(initialColor)));\n    return function () {\n      wallpaperEffect === null || wallpaperEffect === void 0 ? void 0 : wallpaperEffect.destroy();\n    };\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (wallpaperEffect) {\n      var h = initialColor,\n          increment = true;\n      var colorIntervalId = setInterval(function () {\n        if (h === 0) increment = true;else if (h === 255) increment = false;\n        wallpaperEffect.options.color = wallpaperColor(h = increment ? h + 5 : h - 5);\n      }, 500);\n      return function () {\n        clearInterval(colorIntervalId);\n      };\n    }\n  }, [wallpaperEffect]);\n  return __jsx(\"main\", {\n    className: _styles_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.desktop,\n    ref: desktopRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(Desktop, \"m9XAJnbj8jo1r/82WlnJmVFCvhg=\");\n\n_c = Desktop;\n\nvar _c;\n\n$RefreshReg$(_c, \"Desktop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNrdG9wLnRzeD9iMjU2Il0sIm5hbWVzIjpbImluaXRpYWxDb2xvciIsIndhbGxwYXBlckNvbG9yIiwiaCIsIkNvbG9yIiwicmdiTnVtYmVyIiwiRGVza3RvcCIsImNoaWxkcmVuIiwiZGVza3RvcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwid2FsbHBhcGVyRWZmZWN0Iiwic2V0V2FsbHBhcGVyRWZmZWN0IiwidXNlRWZmZWN0IiwicmVuZGVyV2FsbHBhcGVyRWZmZWN0IiwiZGVzdHJveSIsImluY3JlbWVudCIsImNvbG9ySW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwib3B0aW9ucyIsImNvbG9yIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLEdBQXJCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQ3JCQyw0Q0FBSyxlQUFTRCxDQUFULGlCQUFMLENBQStCRSxTQUEvQixFQURxQjtBQUFBLENBQXZCOztBQUdPLElBQU1DLE9BQVcsR0FBRyxTQUFkQSxPQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNyQyxNQUFBQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUFBLGtCQUNvQ0Msc0RBQVEsRUFENUM7QUFBQSxNQUNIQyxlQURHO0FBQUEsTUFDY0Msa0JBRGQ7O0FBR05DLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxzQkFBa0IsQ0FBQ0UsbUZBQXFCLENBQUNOLFVBQUQsRUFBYU4sY0FBYyxDQUFDRCxZQUFELENBQTNCLENBQXRCLENBQWxCO0FBRUEsV0FBTyxZQUFNO0FBQ1hVLHFCQUFlLFNBQWYsSUFBQUEsZUFBZSxXQUFmLFlBQUFBLGVBQWUsQ0FBRUksT0FBakI7QUFDRCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBRix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixlQUFKLEVBQXFCO0FBQ25CLFVBQUlSLENBQUMsR0FBR0YsWUFBUjtBQUFBLFVBQ0VlLFNBQVMsR0FBRyxJQURkO0FBRUEsVUFBTUMsZUFBZSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUN4QyxZQUFJZixDQUFDLEtBQUssQ0FBVixFQUFhYSxTQUFTLEdBQUcsSUFBWixDQUFiLEtBQ0ssSUFBSWIsQ0FBQyxLQUFLLEdBQVYsRUFBZWEsU0FBUyxHQUFHLEtBQVo7QUFFcEJMLHVCQUFlLENBQUNRLE9BQWhCLENBQXdCQyxLQUF4QixHQUFnQ2xCLGNBQWMsQ0FBQ0MsQ0FBQyxHQUFHYSxTQUFTLEdBQUdiLENBQUMsR0FBRyxDQUFQLEdBQVdBLENBQUMsR0FBRyxDQUE3QixDQUE5QztBQUNELE9BTGtDLEVBS2hDLEdBTGdDLENBQW5DO0FBT0EsYUFBTyxZQUFNO0FBQ1hrQixxQkFBYSxDQUFDSixlQUFELENBQWI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQWZRLEVBZU4sQ0FBQ04sZUFBRCxDQWZNLENBQVQ7QUFpQkEsU0FDRTtBQUFNLGFBQVMsRUFBRVcsa0VBQU0sQ0FBQ0MsT0FBeEI7QUFBaUMsT0FBRyxFQUFFZixVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERjtBQUtELENBbENNOztHQUFNRCxPOztLQUFBQSxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZXNrdG9wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvRGVza3RvcC5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFdhbGxwYXBlckVmZmVjdCB9IGZyb20gJ0AvY29tcG9uZW50cy9XYWxscGFwZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyV2FsbHBhcGVyRWZmZWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxwYXBlcic7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuXG5jb25zdCBpbml0aWFsQ29sb3IgPSAxNTA7XG5cbmNvbnN0IHdhbGxwYXBlckNvbG9yID0gKGg6IG51bWJlcik6IG51bWJlciA9PlxuICBDb2xvcihgaHNsKCR7IGggfSwgMzAlLCAyMCUpYCkucmdiTnVtYmVyKCk7XG5cbmV4cG9ydCBjb25zdCBEZXNrdG9wOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgZGVza3RvcFJlZiA9IHVzZVJlZihudWxsKSxcbiAgICBbd2FsbHBhcGVyRWZmZWN0LCBzZXRXYWxscGFwZXJFZmZlY3RdID0gdXNlU3RhdGU8V2FsbHBhcGVyRWZmZWN0PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2FsbHBhcGVyRWZmZWN0KHJlbmRlcldhbGxwYXBlckVmZmVjdChkZXNrdG9wUmVmLCB3YWxscGFwZXJDb2xvcihpbml0aWFsQ29sb3IpKSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2FsbHBhcGVyRWZmZWN0Py5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdhbGxwYXBlckVmZmVjdCkge1xuICAgICAgbGV0IGggPSBpbml0aWFsQ29sb3IsXG4gICAgICAgIGluY3JlbWVudCA9IHRydWU7XG4gICAgICBjb25zdCBjb2xvckludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChoID09PSAwKSBpbmNyZW1lbnQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChoID09PSAyNTUpIGluY3JlbWVudCA9IGZhbHNlO1xuXG4gICAgICAgIHdhbGxwYXBlckVmZmVjdC5vcHRpb25zLmNvbG9yID0gd2FsbHBhcGVyQ29sb3IoaCA9IGluY3JlbWVudCA/IGggKyA1IDogaCAtIDUpO1xuICAgICAgfSwgNTAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjb2xvckludGVydmFsSWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFt3YWxscGFwZXJFZmZlY3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3B9IHJlZj17ZGVza3RvcFJlZn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Desktop.tsx\n");

/***/ })

})