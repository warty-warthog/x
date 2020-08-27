webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(date);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(date);\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var now = new Date(),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(formatToDate(now)),\n      date = _useState[0],\n      setDate = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(formatToTime(now)),\n      time = _useState2[0],\n      setTime = _useState2[1],\n      updateClock = function updateClock() {\n    var now = new Date();\n    setTime(formatToTime(now));\n\n    if (time === '12:00:00 AM') {\n      setDate(formatToDate(now));\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId;\n    var oneSecond = Number(1000);\n    setTimeout(function () {\n      updateClock();\n      clockIntervalId = setInterval(updateClock, oneSecond);\n    }, oneSecond - new Date().getMilliseconds());\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    dateTime: date,\n    title: date,\n    suppressHydrationWarning: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, time);\n};\n\n_s(Clock, \"LozoB2S0CvviYi2USdmyyTJnK8I=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJmb3JtYXRUb0RhdGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUb1RpbWUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiQ2xvY2siLCJub3ciLCJEYXRlIiwidXNlU3RhdGUiLCJzZXREYXRlIiwidGltZSIsInNldFRpbWUiLCJ1cGRhdGVDbG9jayIsInVzZUVmZmVjdCIsImNsb2NrSW50ZXJ2YWxJZCIsIm9uZVNlY29uZCIsIk51bWJlciIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImdldE1pbGxpc2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJjbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFEO0FBQUEsU0FDbkIsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCQyxPQUF4QixFQUE0QztBQUMxQ0MsT0FBRyxFQUFFLFNBRHFDO0FBRTFDQyxTQUFLLEVBQUUsTUFGbUM7QUFHMUNDLFdBQU8sRUFBRSxNQUhpQztBQUkxQ0MsUUFBSSxFQUFFO0FBSm9DLEdBQTVDLEVBS0dDLE1BTEgsQ0FLVVIsSUFMVixDQURtQjtBQUFBLENBQXJCOztBQVFBLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNULElBQUQ7QUFBQSxTQUNuQixJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDTyxVQUFNLEVBQUUsSUFEa0M7QUFFMUNDLFFBQUksRUFBRSxTQUZvQztBQUcxQ0MsVUFBTSxFQUFFLFNBSGtDO0FBSTFDQyxVQUFNLEVBQUU7QUFKa0MsR0FBNUMsRUFLR0wsTUFMSCxDQUtVUixJQUxWLENBRG1CO0FBQUEsQ0FBckI7O0FBUU8sSUFBTWMsS0FBUyxHQUFHLFNBQVpBLEtBQVksR0FBTTtBQUFBOztBQUN2QixNQUFBQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFOO0FBQUEsa0JBQ2NDLHNEQUFRLENBQUNsQixZQUFZLENBQUNnQixHQUFELENBQWIsQ0FEdEI7QUFBQSxNQUNIZixJQURHO0FBQUEsTUFDR2tCLE9BREg7QUFBQSxtQkFFY0Qsc0RBQVEsQ0FBQ1IsWUFBWSxDQUFDTSxHQUFELENBQWIsQ0FGdEI7QUFBQSxNQUVISSxJQUZHO0FBQUEsTUFFR0MsT0FGSDtBQUFBLE1BR0pDLFdBSEksR0FHVSxTQUFkQSxXQUFjLEdBQU07QUFDbEIsUUFBTU4sR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUVBSSxXQUFPLENBQUNYLFlBQVksQ0FBQ00sR0FBRCxDQUFiLENBQVA7O0FBRUEsUUFBSUksSUFBSSxLQUFLLGFBQWIsRUFBNEI7QUFDMUJELGFBQU8sQ0FBQ25CLFlBQVksQ0FBQ2dCLEdBQUQsQ0FBYixDQUFQO0FBQ0Q7QUFDRixHQVhHOztBQWFOTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxlQUFKO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUN0QixJQUFELENBQXhCO0FBRUF1QixjQUFVLENBQUMsWUFBTTtBQUNmTCxpQkFBVztBQUNYRSxxQkFBZSxHQUFHSSxXQUFXLENBQUNOLFdBQUQsRUFBY0csU0FBZCxDQUE3QjtBQUNELEtBSFMsRUFHUEEsU0FBUyxHQUFHLElBQUlSLElBQUosR0FBV1ksZUFBWCxFQUhMLENBQVY7QUFLQSxXQUFPO0FBQUEsYUFBTUMsYUFBYSxDQUFDTixlQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxTQUNFO0FBQU0sYUFBUyxFQUFFTyxnRUFBTSxDQUFDQyxLQUF4QjtBQUErQixZQUFRLEVBQUUvQixJQUF6QztBQUErQyxTQUFLLEVBQUVBLElBQXREO0FBQTRELDRCQUF3QixFQUFFLElBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR21CLElBREgsQ0FERjtBQUtELENBL0JNOztHQUFNTCxLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2xvY2subW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZm9ybWF0VG9EYXRlID0gKGRhdGU6IERhdGUpID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJ1xuICB9KS5mb3JtYXQoZGF0ZSk7XG5cbmNvbnN0IGZvcm1hdFRvVGltZSA9IChkYXRlOiBEYXRlKSA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIHtcbiAgICBob3VyMTI6IHRydWUsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIHNlY29uZDogJzItZGlnaXQnXG4gIH0pLmZvcm1hdChkYXRlKTtcblxuZXhwb3J0IGNvbnN0IENsb2NrOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKSxcbiAgICBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShmb3JtYXRUb0RhdGUobm93KSksXG4gICAgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoZm9ybWF0VG9UaW1lKG5vdykpLFxuICAgIHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgc2V0VGltZShmb3JtYXRUb1RpbWUobm93KSk7XG5cbiAgICAgIGlmICh0aW1lID09PSAnMTI6MDA6MDAgQU0nKSB7XG4gICAgICAgIHNldERhdGUoZm9ybWF0VG9EYXRlKG5vdykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY2xvY2tJbnRlcnZhbElkOiBOb2RlSlMuVGltZW91dDtcbiAgICBjb25zdCBvbmVTZWNvbmQgPSBOdW1iZXIocHJvY2Vzcy5lbnYubWlsbGlzZWNvbmRzSW5TZWNvbmQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVDbG9jaygpO1xuICAgICAgY2xvY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIG9uZVNlY29uZCk7XG4gICAgfSwgb25lU2Vjb25kIC0gbmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjbG9ja0ludGVydmFsSWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGltZSBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja30gZGF0ZVRpbWU9e2RhdGV9IHRpdGxlPXtkYXRlfSBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9PlxuICAgICAge3RpbWV9XG4gICAgPC90aW1lPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})