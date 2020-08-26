webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar getDate = function getDate() {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(new Date());\n};\n\nvar getTime = function getTime() {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(new Date());\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getDate()),\n      date = _useState[0],\n      setDate = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getTime()),\n      time = _useState2[0],\n      setTime = _useState2[1],\n      updateClock = function updateClock() {\n    setTime(getTime());\n\n    if (!date || time === '00:00:00') {\n      setDate(getDate());\n    }\n  }; // useEffect(updateClock, []);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId = setInterval(updateClock, Number(1000));\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    dateTime: time,\n    title: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, time);\n};\n\n_s(Clock, \"eESGHoQrAijK+uAN/4b+Im9kk3Y=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJnZXREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJEYXRlIiwiZ2V0VGltZSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJDbG9jayIsInVzZVN0YXRlIiwiZGF0ZSIsInNldERhdGUiLCJ0aW1lIiwic2V0VGltZSIsInVwZGF0ZUNsb2NrIiwidXNlRWZmZWN0IiwiY2xvY2tJbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJOdW1iZXIiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwiY2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNkLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNEM7QUFDMUNDLE9BQUcsRUFBRSxTQURxQztBQUUxQ0MsU0FBSyxFQUFFLE1BRm1DO0FBRzFDQyxXQUFPLEVBQUUsTUFIaUM7QUFJMUNDLFFBQUksRUFBRTtBQUpvQyxHQUE1QyxFQUtHQyxNQUxILENBS1UsSUFBSUMsSUFBSixFQUxWLENBRGM7QUFBQSxDQUFoQjs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQ2QsSUFBSVQsSUFBSSxDQUFDQyxjQUFULENBQXdCQyxPQUF4QixFQUE0QztBQUMxQ1EsUUFBSSxFQUFFLFNBRG9DO0FBRTFDQyxVQUFNLEVBQUUsU0FGa0M7QUFHMUNDLFVBQU0sRUFBRTtBQUhrQyxHQUE1QyxFQUlHTCxNQUpILENBSVUsSUFBSUMsSUFBSixFQUpWLENBRGM7QUFBQSxDQUFoQjs7QUFPTyxJQUFNSyxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUNmLE9BQU8sRUFBUixDQURIO0FBQUEsTUFDdEJnQixJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjtBQUFBLG1CQUVURixzREFBUSxDQUFDTCxPQUFPLEVBQVIsQ0FGQztBQUFBLE1BRTFCUSxJQUYwQjtBQUFBLE1BRXBCQyxPQUZvQjtBQUFBLE1BRzNCQyxXQUgyQixHQUdiLFNBQWRBLFdBQWMsR0FBTTtBQUNsQkQsV0FBTyxDQUFDVCxPQUFPLEVBQVIsQ0FBUDs7QUFFQSxRQUFJLENBQUNNLElBQUQsSUFBU0UsSUFBSSxLQUFLLFVBQXRCLEVBQWtDO0FBQ2hDRCxhQUFPLENBQUNqQixPQUFPLEVBQVIsQ0FBUDtBQUNEO0FBQ0YsR0FUMEIsRUFXN0I7OztBQUVBcUIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZUFBZSxHQUFHQyxXQUFXLENBQ2pDSCxXQURpQyxFQUVqQ0ksTUFBTSxDQUFDckIsSUFBRCxDQUYyQixDQUFuQztBQUtBLFdBQU87QUFBQSxhQUFNc0IsYUFBYSxDQUFDSCxlQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUNFO0FBQU0sYUFBUyxFQUFFSSxnRUFBTSxDQUFDQyxLQUF4QjtBQUErQixZQUFRLEVBQUVULElBQXpDO0FBQStDLFNBQUssRUFBRUYsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxJQURILENBREY7QUFLRCxDQTNCTTs7R0FBTUosSzs7S0FBQUEsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2xvY2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Nsb2NrLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdldERhdGUgPSAoKSA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYydcbiAgfSkuZm9ybWF0KG5ldyBEYXRlKCkpO1xuXG5jb25zdCBnZXRUaW1lID0gKCkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIHNlY29uZDogJzItZGlnaXQnXG4gIH0pLmZvcm1hdChuZXcgRGF0ZSgpKTtcblxuZXhwb3J0IGNvbnN0IENsb2NrOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZ2V0RGF0ZSgpKSxcbiAgICBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShnZXRUaW1lKCkpLFxuICAgIHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xuICAgICAgc2V0VGltZShnZXRUaW1lKCkpO1xuXG4gICAgICBpZiAoIWRhdGUgfHwgdGltZSA9PT0gJzAwOjAwOjAwJykge1xuICAgICAgICBzZXREYXRlKGdldERhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAvLyB1c2VFZmZlY3QodXBkYXRlQ2xvY2ssIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsb2NrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxuICAgICAgdXBkYXRlQ2xvY2ssXG4gICAgICBOdW1iZXIocHJvY2Vzcy5lbnYubWlsbGlzZWNvbmRzSW5TZWNvbmQpXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfSBkYXRlVGltZT17dGltZX0gdGl0bGU9e2RhdGV9PlxuICAgICAge3RpbWV9XG4gICAgPC90aW1lPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})