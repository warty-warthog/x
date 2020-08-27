webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(date);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(date);\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1],\n      updateDate = function updateDate() {\n    return setDate(new Date());\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId;\n    var oneSecond = Number(1000);\n    setTimeout(function () {\n      updateDate();\n      clockIntervalId = setInterval(updateDate, oneSecond);\n    }, oneSecond - new Date().getMilliseconds());\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    dateTime: formatToDate(date),\n    title: formatToDate(date),\n    suppressHydrationWarning: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, formatToTime(date));\n};\n\n_s(Clock, \"Gqi45WOZhU2c0BLYX0HoJeiR0fk=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJmb3JtYXRUb0RhdGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUb1RpbWUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiQ2xvY2siLCJ1c2VTdGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwidXBkYXRlRGF0ZSIsInVzZUVmZmVjdCIsImNsb2NrSW50ZXJ2YWxJZCIsIm9uZVNlY29uZCIsIk51bWJlciIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImdldE1pbGxpc2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJjbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFEO0FBQUEsU0FDbkIsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCQyxPQUF4QixFQUE0QztBQUMxQ0MsT0FBRyxFQUFFLFNBRHFDO0FBRTFDQyxTQUFLLEVBQUUsTUFGbUM7QUFHMUNDLFdBQU8sRUFBRSxNQUhpQztBQUkxQ0MsUUFBSSxFQUFFO0FBSm9DLEdBQTVDLEVBS0dDLE1BTEgsQ0FLVVIsSUFMVixDQURtQjtBQUFBLENBQXJCOztBQVFBLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNULElBQUQ7QUFBQSxTQUNuQixJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDTyxVQUFNLEVBQUUsSUFEa0M7QUFFMUNDLFFBQUksRUFBRSxTQUZvQztBQUcxQ0MsVUFBTSxFQUFFLFNBSGtDO0FBSTFDQyxVQUFNLEVBQUU7QUFKa0MsR0FBNUMsRUFLR0wsTUFMSCxDQUtVUixJQUxWLENBRG1CO0FBQUEsQ0FBckI7O0FBUU8sSUFBTWMsS0FBUyxHQUFHLFNBQVpBLEtBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQURIO0FBQUEsTUFDdEJoQixJQURzQjtBQUFBLE1BQ2hCaUIsT0FEZ0I7QUFBQSxNQUUzQkMsVUFGMkIsR0FFZCxTQUFiQSxVQUFhO0FBQUEsV0FBTUQsT0FBTyxDQUFDLElBQUlELElBQUosRUFBRCxDQUFiO0FBQUEsR0FGYzs7QUFJN0JHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGVBQUo7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ25CLElBQUQsQ0FBeEI7QUFFQW9CLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZMLGdCQUFVO0FBQ1ZFLHFCQUFlLEdBQUdJLFdBQVcsQ0FBQ04sVUFBRCxFQUFhRyxTQUFiLENBQTdCO0FBQ0QsS0FIUyxFQUdQQSxTQUFTLEdBQUcsSUFBSUwsSUFBSixHQUFXUyxlQUFYLEVBSEwsQ0FBVjtBQUtBLFdBQU87QUFBQSxhQUFNQyxhQUFhLENBQUNOLGVBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLFNBQ0U7QUFBTSxhQUFTLEVBQUVPLGdFQUFNLENBQUNDLEtBQXhCO0FBQStCLFlBQVEsRUFBRTdCLFlBQVksQ0FBQ0MsSUFBRCxDQUFyRDtBQUE2RCxTQUFLLEVBQUVELFlBQVksQ0FBQ0MsSUFBRCxDQUFoRjtBQUF3Riw0QkFBd0IsRUFBRSxJQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dTLFlBQVksQ0FBQ1QsSUFBRCxDQURmLENBREY7QUFLRCxDQXJCTTs7R0FBTWMsSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2xvY2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Nsb2NrLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGZvcm1hdFRvRGF0ZSA9IChkYXRlOiBEYXRlKSA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYydcbiAgfSkuZm9ybWF0KGRhdGUpO1xuXG5jb25zdCBmb3JtYXRUb1RpbWUgPSAoZGF0ZTogRGF0ZSkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgaG91cjEyOiB0cnVlLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBzZWNvbmQ6ICcyLWRpZ2l0J1xuICB9KS5mb3JtYXQoZGF0ZSk7XG5cbmV4cG9ydCBjb25zdCBDbG9jazogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpLFxuICAgIHVwZGF0ZURhdGUgPSAoKSA9PiBzZXREYXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNsb2NrSW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVvdXQ7XG4gICAgY29uc3Qgb25lU2Vjb25kID0gTnVtYmVyKHByb2Nlc3MuZW52Lm1pbGxpc2Vjb25kc0luU2Vjb25kKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdXBkYXRlRGF0ZSgpO1xuICAgICAgY2xvY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlRGF0ZSwgb25lU2Vjb25kKTtcbiAgICB9LCBvbmVTZWNvbmQgLSBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfSBkYXRlVGltZT17Zm9ybWF0VG9EYXRlKGRhdGUpfSB0aXRsZT17Zm9ybWF0VG9EYXRlKGRhdGUpfSBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9PlxuICAgICAge2Zvcm1hdFRvVGltZShkYXRlKX1cbiAgICA8L3RpbWU+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})