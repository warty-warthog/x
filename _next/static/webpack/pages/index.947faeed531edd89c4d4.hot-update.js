webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(date);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(date);\n}; // const getDateTime = (date: Date) => () => {\n//   return '';\n// };\n// new Date()\n\n\nfunction Clock(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n  console.log(posts);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1],\n      updateDate = function updateDate() {\n    return setDate(new Date());\n  }; // const [date, updateDate] = useReducer(() => {\n  // }, ''),\n  //   [time, updateTime] = useReducer(() => {\n  //   }, ''),\n  //   updateClock = () => {\n  //     const now = new Date();\n  //     updateTime();\n  //     if (!date || time === '12:00:00 AM') {\n  //       updateDate();\n  //     }\n  //   };\n  // useEffect(updateDate, []);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var clockIntervalId = setInterval(updateDate, Number(1000));\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.clock,\n    dateTime: formatToDate(date),\n    title: formatToDate(date),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, formatToTime(date));\n}\n\n_s(Clock, \"Gqi45WOZhU2c0BLYX0HoJeiR0fk=\");\n\n_c = Clock;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('HI');\n            return _context.abrupt(\"return\", {\n              props: {\n                posts: 'hi'\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJmb3JtYXRUb0RhdGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUb1RpbWUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiQ2xvY2siLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIkRhdGUiLCJzZXREYXRlIiwidXBkYXRlRGF0ZSIsInVzZUVmZmVjdCIsImNsb2NrSW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiTnVtYmVyIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsImNsb2NrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQ7QUFBQSxTQUNuQixJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDQyxPQUFHLEVBQUUsU0FEcUM7QUFFMUNDLFNBQUssRUFBRSxNQUZtQztBQUcxQ0MsV0FBTyxFQUFFLE1BSGlDO0FBSTFDQyxRQUFJLEVBQUU7QUFKb0MsR0FBNUMsRUFLR0MsTUFMSCxDQUtVUixJQUxWLENBRG1CO0FBQUEsQ0FBckI7O0FBUUEsSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1QsSUFBRDtBQUFBLFNBQ25CLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNEM7QUFDMUNPLFVBQU0sRUFBRSxJQURrQztBQUUxQ0MsUUFBSSxFQUFFLFNBRm9DO0FBRzFDQyxVQUFNLEVBQUUsU0FIa0M7QUFJMUNDLFVBQU0sRUFBRTtBQUprQyxHQUE1QyxFQUtHTCxNQUxILENBS1VSLElBTFYsQ0FEbUI7QUFBQSxDQUFyQixDLENBUUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNjLEtBQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUR3QixrQkFFQUcsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FGUjtBQUFBLE1BRWpCbkIsSUFGaUI7QUFBQSxNQUVYb0IsT0FGVztBQUFBLE1BR3RCQyxVQUhzQixHQUdULFNBQWJBLFVBQWE7QUFBQSxXQUFNRCxPQUFPLENBQUMsSUFBSUQsSUFBSixFQUFELENBQWI7QUFBQSxHQUhTLEVBSXhCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGVBQWUsR0FBR0MsV0FBVyxDQUNqQ0gsVUFEaUMsRUFFakNJLE1BQU0sQ0FBQ3RCLElBQUQsQ0FGMkIsQ0FBbkM7QUFLQSxXQUFPO0FBQUEsYUFBTXVCLGFBQWEsQ0FBQ0gsZUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FDRTtBQUFNLGFBQVMsRUFBRUksZ0VBQU0sQ0FBQ0MsS0FBeEI7QUFBK0IsWUFBUSxFQUFFN0IsWUFBWSxDQUFDQyxJQUFELENBQXJEO0FBQTZELFNBQUssRUFBRUQsWUFBWSxDQUFDQyxJQUFELENBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1MsWUFBWSxDQUFDVCxJQUFELENBRGYsQ0FERjtBQUtEOztHQW5DUWMsSzs7S0FBQUEsSztBQXFDRixTQUFlZSxjQUF0QjtBQUFBO0FBQUE7OztxTUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xiLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBREssNkNBRUU7QUFDTGEsbUJBQUssRUFBRTtBQUNMZixxQkFBSyxFQUFFO0FBREY7QUFERixhQUZGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFTUUQsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nsb2NrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbG9jay5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBmb3JtYXRUb0RhdGUgPSAoZGF0ZTogRGF0ZSkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pLmZvcm1hdChkYXRlKTtcblxuY29uc3QgZm9ybWF0VG9UaW1lID0gKGRhdGU6IERhdGUpID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIGhvdXIxMjogdHJ1ZSxcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgfSkuZm9ybWF0KGRhdGUpO1xuXG4vLyBjb25zdCBnZXREYXRlVGltZSA9IChkYXRlOiBEYXRlKSA9PiAoKSA9PiB7XG4vLyAgIHJldHVybiAnJztcbi8vIH07XG5cbi8vIG5ldyBEYXRlKClcblxuZnVuY3Rpb24gQ2xvY2soeyBwb3N0cyB9KSB7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSksXG4gICAgdXBkYXRlRGF0ZSA9ICgpID0+IHNldERhdGUobmV3IERhdGUoKSk7XG4gIC8vIGNvbnN0IFtkYXRlLCB1cGRhdGVEYXRlXSA9IHVzZVJlZHVjZXIoKCkgPT4ge1xuXG4gIC8vIH0sICcnKSxcbiAgLy8gICBbdGltZSwgdXBkYXRlVGltZV0gPSB1c2VSZWR1Y2VyKCgpID0+IHtcblxuICAvLyAgIH0sICcnKSxcbiAgLy8gICB1cGRhdGVDbG9jayA9ICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIC8vICAgICB1cGRhdGVUaW1lKCk7XG5cbiAgLy8gICAgIGlmICghZGF0ZSB8fCB0aW1lID09PSAnMTI6MDA6MDAgQU0nKSB7XG4gIC8vICAgICAgIHVwZGF0ZURhdGUoKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuXG4gIC8vIHVzZUVmZmVjdCh1cGRhdGVEYXRlLCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjbG9ja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcbiAgICAgIHVwZGF0ZURhdGUsXG4gICAgICBOdW1iZXIocHJvY2Vzcy5lbnYubWlsbGlzZWNvbmRzSW5TZWNvbmQpXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfSBkYXRlVGltZT17Zm9ybWF0VG9EYXRlKGRhdGUpfSB0aXRsZT17Zm9ybWF0VG9EYXRlKGRhdGUpfT5cbiAgICAgIHtmb3JtYXRUb1RpbWUoZGF0ZSl9XG4gICAgPC90aW1lPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnNvbGUubG9nKCdISScpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogJ2hpJ1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})