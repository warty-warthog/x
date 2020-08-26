webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar getDate = function getDate() {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(new Date());\n};\n\nvar getTime = function getTime(_ref) {\n  var _ref$hour = _ref.hour12,\n      hour12 = _ref$hour === void 0 ? false : _ref$hour;\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: hour12,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(new Date());\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getDate()),\n      date = _useState[0],\n      setDate = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    hour12: '',\n    hour24: ''\n  }),\n      time = _useState2[0],\n      setTime = _useState2[1],\n      updateClock = function updateClock() {\n    setTime({\n      hour12: getTime({\n        hour12: true\n      }) //hour24: getTime({ hour12: false })\n\n    });\n\n    if (!date || time.hour24 === '00:00:00') {\n      setDate(getDate());\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(updateClock, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId = setInterval(updateClock, Number(1000));\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    dateTime: time.hour24,\n    title: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, time.hour12);\n};\n\n_s(Clock, \"1+37VPqnabzSbntWbVYRl8Zf8Qc=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJnZXREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJEYXRlIiwiZ2V0VGltZSIsImhvdXIxMiIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJDbG9jayIsInVzZVN0YXRlIiwiZGF0ZSIsInNldERhdGUiLCJob3VyMjQiLCJ0aW1lIiwic2V0VGltZSIsInVwZGF0ZUNsb2NrIiwidXNlRWZmZWN0IiwiY2xvY2tJbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJOdW1iZXIiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwiY2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNkLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNEM7QUFDMUNDLE9BQUcsRUFBRSxTQURxQztBQUUxQ0MsU0FBSyxFQUFFLE1BRm1DO0FBRzFDQyxXQUFPLEVBQUUsTUFIaUM7QUFJMUNDLFFBQUksRUFBRTtBQUpvQyxHQUE1QyxFQUtHQyxNQUxILENBS1UsSUFBSUMsSUFBSixFQUxWLENBRGM7QUFBQSxDQUFoQjs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHVCQUFHQyxNQUFIO0FBQUEsTUFBR0EsTUFBSCwwQkFBWSxLQUFaO0FBQUEsU0FDZCxJQUFJVixJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDUSxVQUFNLEVBQU5BLE1BRDBDO0FBRTFDQyxRQUFJLEVBQUUsU0FGb0M7QUFHMUNDLFVBQU0sRUFBRSxTQUhrQztBQUkxQ0MsVUFBTSxFQUFFO0FBSmtDLEdBQTVDLEVBS0dOLE1BTEgsQ0FLVSxJQUFJQyxJQUFKLEVBTFYsQ0FEYztBQUFBLENBQWhCOztBQVFPLElBQU1NLEtBQVMsR0FBRyxTQUFaQSxLQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQ2hCLE9BQU8sRUFBUixDQURIO0FBQUEsTUFDdEJpQixJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjtBQUFBLG1CQUVURixzREFBUSxDQUFDO0FBQUVMLFVBQU0sRUFBRSxFQUFWO0FBQWNRLFVBQU0sRUFBRTtBQUF0QixHQUFELENBRkM7QUFBQSxNQUUxQkMsSUFGMEI7QUFBQSxNQUVwQkMsT0FGb0I7QUFBQSxNQUczQkMsV0FIMkIsR0FHYixTQUFkQSxXQUFjLEdBQU07QUFDbEJELFdBQU8sQ0FBQztBQUNOVixZQUFNLEVBQUVELE9BQU8sQ0FBQztBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUFELENBRFQsQ0FFTjs7QUFGTSxLQUFELENBQVA7O0FBS0EsUUFBSSxDQUFDTSxJQUFELElBQVNHLElBQUksQ0FBQ0QsTUFBTCxLQUFnQixVQUE3QixFQUF5QztBQUN2Q0QsYUFBTyxDQUFDbEIsT0FBTyxFQUFSLENBQVA7QUFDRDtBQUNGLEdBWjBCOztBQWM3QnVCLHlEQUFTLENBQUNELFdBQUQsRUFBYyxFQUFkLENBQVQ7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZUFBZSxHQUFHQyxXQUFXLENBQ2pDSCxXQURpQyxFQUVqQ0ksTUFBTSxDQUFDdkIsSUFBRCxDQUYyQixDQUFuQztBQUtBLFdBQU87QUFBQSxhQUFNd0IsYUFBYSxDQUFDSCxlQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUNFO0FBQU0sYUFBUyxFQUFFSSxnRUFBTSxDQUFDQyxLQUF4QjtBQUErQixZQUFRLEVBQUVULElBQUksQ0FBQ0QsTUFBOUM7QUFBc0QsU0FBSyxFQUFFRixJQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLElBQUksQ0FBQ1QsTUFEUixDQURGO0FBS0QsQ0E5Qk07O0dBQU1JLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nsb2NrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbG9jay5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBnZXREYXRlID0gKCkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pLmZvcm1hdChuZXcgRGF0ZSgpKTtcblxuY29uc3QgZ2V0VGltZSA9ICh7IGhvdXIxMiA9IGZhbHNlIH0pID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIGhvdXIxMixcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgfSkuZm9ybWF0KG5ldyBEYXRlKCkpO1xuXG5leHBvcnQgY29uc3QgQ2xvY2s6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShnZXREYXRlKCkpLFxuICAgIFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHsgaG91cjEyOiAnJywgaG91cjI0OiAnJyB9KSxcbiAgICB1cGRhdGVDbG9jayA9ICgpID0+IHtcbiAgICAgIHNldFRpbWUoe1xuICAgICAgICBob3VyMTI6IGdldFRpbWUoeyBob3VyMTI6IHRydWUgfSksXG4gICAgICAgIC8vaG91cjI0OiBnZXRUaW1lKHsgaG91cjEyOiBmYWxzZSB9KVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZGF0ZSB8fCB0aW1lLmhvdXIyNCA9PT0gJzAwOjAwOjAwJykge1xuICAgICAgICBzZXREYXRlKGdldERhdGUoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICB1c2VFZmZlY3QodXBkYXRlQ2xvY2ssIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsb2NrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxuICAgICAgdXBkYXRlQ2xvY2ssXG4gICAgICBOdW1iZXIocHJvY2Vzcy5lbnYubWlsbGlzZWNvbmRzSW5TZWNvbmQpXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfSBkYXRlVGltZT17dGltZS5ob3VyMjR9IHRpdGxlPXtkYXRlfT5cbiAgICAgIHt0aW1lLmhvdXIxMn1cbiAgICA8L3RpbWU+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})