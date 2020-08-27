webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(date);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(date);\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1],\n      updateDate = function updateDate() {\n    return setDate(new Date());\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(updateDate, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId = setInterval(updateDate, Number(1000));\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    dateTime: formatToDate(date),\n    title: formatToDate(date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, formatToTime(new Date()));\n};\n\n_s(Clock, \"IKeIGHr+nwxJI2b0CnRSp/rrYyA=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJmb3JtYXRUb0RhdGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUb1RpbWUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiQ2xvY2siLCJ1c2VTdGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwidXBkYXRlRGF0ZSIsInVzZUVmZmVjdCIsImNsb2NrSW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiTnVtYmVyIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsImNsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQ7QUFBQSxTQUNuQixJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDQyxPQUFHLEVBQUUsU0FEcUM7QUFFMUNDLFNBQUssRUFBRSxNQUZtQztBQUcxQ0MsV0FBTyxFQUFFLE1BSGlDO0FBSTFDQyxRQUFJLEVBQUU7QUFKb0MsR0FBNUMsRUFLR0MsTUFMSCxDQUtVUixJQUxWLENBRG1CO0FBQUEsQ0FBckI7O0FBUUEsSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1QsSUFBRDtBQUFBLFNBQ25CLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNEM7QUFDMUNPLFVBQU0sRUFBRSxJQURrQztBQUUxQ0MsUUFBSSxFQUFFLFNBRm9DO0FBRzFDQyxVQUFNLEVBQUUsU0FIa0M7QUFJMUNDLFVBQU0sRUFBRTtBQUprQyxHQUE1QyxFQUtHTCxNQUxILENBS1VSLElBTFYsQ0FEbUI7QUFBQSxDQUFyQjs7QUFRTyxJQUFNYyxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsSUFBSUMsSUFBSixFQUFELENBREg7QUFBQSxNQUN0QmhCLElBRHNCO0FBQUEsTUFDaEJpQixPQURnQjtBQUFBLE1BRTNCQyxVQUYyQixHQUVkLFNBQWJBLFVBQWE7QUFBQSxXQUFNRCxPQUFPLENBQUMsSUFBSUQsSUFBSixFQUFELENBQWI7QUFBQSxHQUZjOztBQUk3QkcseURBQVMsQ0FBQ0QsVUFBRCxFQUFhLEVBQWIsQ0FBVDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUdDLFdBQVcsQ0FDakNILFVBRGlDLEVBRWpDSSxNQUFNLENBQUNuQixJQUFELENBRjJCLENBQW5DO0FBS0EsV0FBTztBQUFBLGFBQU1vQixhQUFhLENBQUNILGVBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFNBQ0U7QUFBTSxhQUFTLEVBQUVJLGdFQUFNLENBQUNDLEtBQXhCO0FBQStCLFlBQVEsRUFBRTFCLFlBQVksQ0FBQ0MsSUFBRCxDQUFyRDtBQUE2RCxTQUFLLEVBQUVELFlBQVksQ0FBQ0MsSUFBRCxDQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dTLFlBQVksQ0FBQyxJQUFJTyxJQUFKLEVBQUQsQ0FEZixDQURGO0FBS0QsQ0FwQk07O0dBQU1GLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nsb2NrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbG9jay5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBmb3JtYXRUb0RhdGUgPSAoZGF0ZTogRGF0ZSkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pLmZvcm1hdChkYXRlKTtcblxuY29uc3QgZm9ybWF0VG9UaW1lID0gKGRhdGU6IERhdGUpID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIGhvdXIxMjogdHJ1ZSxcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgfSkuZm9ybWF0KGRhdGUpO1xuXG5leHBvcnQgY29uc3QgQ2xvY2s6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKSxcbiAgICB1cGRhdGVEYXRlID0gKCkgPT4gc2V0RGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QodXBkYXRlRGF0ZSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xvY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXG4gICAgICB1cGRhdGVEYXRlLFxuICAgICAgTnVtYmVyKHByb2Nlc3MuZW52Lm1pbGxpc2Vjb25kc0luU2Vjb25kKVxuICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjbG9ja0ludGVydmFsSWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGltZSBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja30gZGF0ZVRpbWU9e2Zvcm1hdFRvRGF0ZShkYXRlKX0gdGl0bGU9e2Zvcm1hdFRvRGF0ZShkYXRlKX0+XG4gICAgICB7Zm9ybWF0VG9UaW1lKG5ldyBEYXRlKCkpfVxuICAgIDwvdGltZT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})