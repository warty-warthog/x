webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar toDateOptions = {\n  weekday: 'long',\n  month: 'long',\n  day: 'numeric',\n  year: 'numeric'\n};\nvar toDateTimeOptions = {\n  year: 'numeric',\n  day: '2-digit',\n  month: '2-digit'\n};\nvar toTimeOptions = {\n  hour: 'numeric',\n  minute: '2-digit',\n  second: '2-digit',\n  hour12: true\n};\n\nvar partsToObject = function partsToObject(acc, _ref) {\n  var type = _ref.type,\n      value = _ref.value;\n  return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, type, value));\n};\n\nvar formatToDateTime = function formatToDateTime(date) {\n  var _Intl$DateTimeFormat$ = new Intl.DateTimeFormat(\"en-US\", toDateTimeOptions).formatToParts(date).reduce(partsToObject, {}),\n      year = _Intl$DateTimeFormat$.year,\n      month = _Intl$DateTimeFormat$.month,\n      day = _Intl$DateTimeFormat$.day;\n\n  return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n};\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", toDateOptions).format(date);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", toTimeOptions).format(date);\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var initDate = new Date(),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToDateTime(initDate)),\n      dateTime = _useState[0],\n      setDateTime = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToDate(initDate)),\n      date = _useState2[0],\n      setDate = _useState2[1],\n      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToTime(initDate)),\n      time = _useState3[0],\n      setTime = _useState3[1],\n      updateClock = function updateClock() {\n    var currentDate = new Date();\n    var newTime = formatToTime(currentDate);\n    setTime(newTime);\n\n    if (newTime === '12:00:00 AM') {\n      setDate(formatToDate(currentDate));\n      setDateTime(formatToDateTime(currentDate));\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var clockIntervalId;\n    var oneSecond = Number(1000);\n    setTimeout(function () {\n      updateClock();\n      clockIntervalId = setInterval(updateClock, oneSecond);\n    }, oneSecond - new Date().getMilliseconds());\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clock,\n    dateTime: dateTime,\n    title: date,\n    suppressHydrationWarning: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, time);\n};\n\n_s(Clock, \"9WxcIL1yFQpjWVHvjyLTdDn8yME=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJ0b0RhdGVPcHRpb25zIiwid2Vla2RheSIsIm1vbnRoIiwiZGF5IiwieWVhciIsInRvRGF0ZVRpbWVPcHRpb25zIiwidG9UaW1lT3B0aW9ucyIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJob3VyMTIiLCJwYXJ0c1RvT2JqZWN0IiwiYWNjIiwidHlwZSIsInZhbHVlIiwiZm9ybWF0VG9EYXRlVGltZSIsImRhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJwcm9jZXNzIiwiZm9ybWF0VG9QYXJ0cyIsInJlZHVjZSIsImZvcm1hdFRvRGF0ZSIsImZvcm1hdCIsImZvcm1hdFRvVGltZSIsIkNsb2NrIiwiaW5pdERhdGUiLCJEYXRlIiwidXNlU3RhdGUiLCJkYXRlVGltZSIsInNldERhdGVUaW1lIiwic2V0RGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwidXBkYXRlQ2xvY2siLCJjdXJyZW50RGF0ZSIsIm5ld1RpbWUiLCJ1c2VFZmZlY3QiLCJjbG9ja0ludGVydmFsSWQiLCJvbmVTZWNvbmQiLCJOdW1iZXIiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJnZXRNaWxsaXNlY29uZHMiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwiY2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsU0FBTyxFQUFFLE1BRFc7QUFFcEJDLE9BQUssRUFBRSxNQUZhO0FBR3BCQyxLQUFHLEVBQUUsU0FIZTtBQUlwQkMsTUFBSSxFQUFFO0FBSmMsQ0FBdEI7QUFPQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkQsTUFBSSxFQUFFLFNBRGtCO0FBRXhCRCxLQUFHLEVBQUUsU0FGbUI7QUFHeEJELE9BQUssRUFBRTtBQUhpQixDQUExQjtBQU1BLElBQU1JLGFBQWEsR0FBRztBQUNwQkMsTUFBSSxFQUFFLFNBRGM7QUFFcEJDLFFBQU0sRUFBRSxTQUZZO0FBR3BCQyxRQUFNLEVBQUUsU0FIWTtBQUlwQkMsUUFBTSxFQUFFO0FBSlksQ0FBdEI7O0FBV0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkMsR0FEb0I7QUFBQSxNQUVsQkMsSUFGa0IsUUFFbEJBLElBRmtCO0FBQUEsTUFFWkMsS0FGWSxRQUVaQSxLQUZZO0FBQUEseUNBR1hGLEdBSFcscUdBR0xDLElBSEssRUFHRUMsS0FIRjtBQUFBLENBQXRCOztBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFnQjtBQUFBLDhCQUNWLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUMzQkMsT0FEMkIsRUFFM0JkLGlCQUYyQixFQUkxQmUsYUFKMEIsQ0FJWkosSUFKWSxFQUsxQkssTUFMMEIsQ0FLbkJWLGFBTG1CLEVBS0osRUFMSSxDQURVO0FBQUEsTUFDL0JQLElBRCtCLHlCQUMvQkEsSUFEK0I7QUFBQSxNQUN6QkYsS0FEeUIseUJBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxHQURrQix5QkFDbEJBLEdBRGtCOztBQVF2QyxtQkFBVUMsSUFBVixjQUFrQkYsS0FBbEIsY0FBMkJDLEdBQTNCO0FBQ0QsQ0FURDs7QUFXQSxJQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ04sSUFBRDtBQUFBLFNBQ25CLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNENuQixhQUE1QyxFQUEyRHVCLE1BQTNELENBQWtFUCxJQUFsRSxDQURtQjtBQUFBLENBQXJCOztBQUdBLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLElBQUQ7QUFBQSxTQUNuQixJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDYixhQUE1QyxFQUEyRGlCLE1BQTNELENBQWtFUCxJQUFsRSxDQURtQjtBQUFBLENBQXJCOztBQUdPLElBQU1TLEtBQVMsR0FBRyxTQUFaQSxLQUFZLEdBQU07QUFBQTs7QUFDdkIsTUFBQUMsUUFBUSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUFBLGtCQUNzQkMsc0RBQVEsQ0FBQ2IsZ0JBQWdCLENBQUNXLFFBQUQsQ0FBakIsQ0FEOUI7QUFBQSxNQUNIRyxRQURHO0FBQUEsTUFDT0MsV0FEUDtBQUFBLG1CQUVjRixzREFBUSxDQUFDTixZQUFZLENBQUNJLFFBQUQsQ0FBYixDQUZ0QjtBQUFBLE1BRUhWLElBRkc7QUFBQSxNQUVHZSxPQUZIO0FBQUEsbUJBR2NILHNEQUFRLENBQUNKLFlBQVksQ0FBQ0UsUUFBRCxDQUFiLENBSHRCO0FBQUEsTUFHSE0sSUFIRztBQUFBLE1BR0dDLE9BSEg7QUFBQSxNQUlKQyxXQUpJLEdBSVUsU0FBZEEsV0FBYyxHQUFNO0FBQ2xCLFFBQU1DLFdBQVcsR0FBRyxJQUFJUixJQUFKLEVBQXBCO0FBQ0EsUUFBTVMsT0FBTyxHQUFHWixZQUFZLENBQUNXLFdBQUQsQ0FBNUI7QUFFQUYsV0FBTyxDQUFDRyxPQUFELENBQVA7O0FBRUEsUUFBSUEsT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBQzdCTCxhQUFPLENBQUNULFlBQVksQ0FBQ2EsV0FBRCxDQUFiLENBQVA7QUFDQUwsaUJBQVcsQ0FBQ2YsZ0JBQWdCLENBQUNvQixXQUFELENBQWpCLENBQVg7QUFDRDtBQUNGLEdBZEc7O0FBZ0JORSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxlQUFKO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNyQixJQUFELENBQXhCO0FBRUFzQixjQUFVLENBQUMsWUFBTTtBQUNmUCxpQkFBVztBQUNYSSxxQkFBZSxHQUFHSSxXQUFXLENBQUNSLFdBQUQsRUFBY0ssU0FBZCxDQUE3QjtBQUNELEtBSFMsRUFHUEEsU0FBUyxHQUFHLElBQUlaLElBQUosR0FBV2dCLGVBQVgsRUFITCxDQUFWO0FBS0EsV0FBTztBQUFBLGFBQU1DLGFBQWEsQ0FBQ04sZUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsU0FDRTtBQUNFLGFBQVMsRUFBRU8sZ0VBQU0sQ0FBQ0MsS0FEcEI7QUFFRSxZQUFRLEVBQUVqQixRQUZaO0FBR0UsU0FBSyxFQUFFYixJQUhUO0FBSUUsNEJBQXdCLEVBQUUsSUFKNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HZ0IsSUFOSCxDQURGO0FBVUQsQ0F2Q007O0dBQU1QLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nsb2NrLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbG9jay5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB0b0RhdGVPcHRpb25zID0ge1xuICB3ZWVrZGF5OiAnbG9uZycsXG4gIG1vbnRoOiAnbG9uZycsXG4gIGRheTogJ251bWVyaWMnLFxuICB5ZWFyOiAnbnVtZXJpYydcbn07XG5cbmNvbnN0IHRvRGF0ZVRpbWVPcHRpb25zID0ge1xuICB5ZWFyOiAnbnVtZXJpYycsXG4gIGRheTogJzItZGlnaXQnLFxuICBtb250aDogJzItZGlnaXQnXG59O1xuXG5jb25zdCB0b1RpbWVPcHRpb25zID0ge1xuICBob3VyOiAnbnVtZXJpYycsXG4gIG1pbnV0ZTogJzItZGlnaXQnLFxuICBzZWNvbmQ6ICcyLWRpZ2l0JyxcbiAgaG91cjEyOiB0cnVlXG59O1xuXG50eXBlIERhdGVUaW1lRm9ybWF0UGFydHMgPSB7XG4gIFtrZXkgaW4gSW50bC5EYXRlVGltZUZvcm1hdFBhcnRUeXBlc106IHN0cmluZztcbn07XG5cbmNvbnN0IHBhcnRzVG9PYmplY3QgPSAoXG4gIGFjYzogRGF0ZVRpbWVGb3JtYXRQYXJ0cyxcbiAgeyB0eXBlLCB2YWx1ZSB9OiBJbnRsLkRhdGVUaW1lRm9ybWF0UGFydFxuKSA9PiAoeyAuLi5hY2MsIFt0eXBlXTogdmFsdWUgfSk7XG5cbmNvbnN0IGZvcm1hdFRvRGF0ZVRpbWUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFxuICAgIHByb2Nlc3MuZW52LmxvY2FsZSxcbiAgICB0b0RhdGVUaW1lT3B0aW9uc1xuICApXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAucmVkdWNlKHBhcnRzVG9PYmplY3QsIHt9IGFzIERhdGVUaW1lRm9ybWF0UGFydHMpO1xuXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufTtcblxuY29uc3QgZm9ybWF0VG9EYXRlID0gKGRhdGU6IERhdGUpID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwgdG9EYXRlT3B0aW9ucykuZm9ybWF0KGRhdGUpO1xuXG5jb25zdCBmb3JtYXRUb1RpbWUgPSAoZGF0ZTogRGF0ZSkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB0b1RpbWVPcHRpb25zKS5mb3JtYXQoZGF0ZSk7XG5cbmV4cG9ydCBjb25zdCBDbG9jazogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXREYXRlID0gbmV3IERhdGUoKSxcbiAgICBbZGF0ZVRpbWUsIHNldERhdGVUaW1lXSA9IHVzZVN0YXRlKGZvcm1hdFRvRGF0ZVRpbWUoaW5pdERhdGUpKSxcbiAgICBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShmb3JtYXRUb0RhdGUoaW5pdERhdGUpKSxcbiAgICBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShmb3JtYXRUb1RpbWUoaW5pdERhdGUpKSxcbiAgICB1cGRhdGVDbG9jayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBmb3JtYXRUb1RpbWUoY3VycmVudERhdGUpO1xuXG4gICAgICBzZXRUaW1lKG5ld1RpbWUpO1xuXG4gICAgICBpZiAobmV3VGltZSA9PT0gJzEyOjAwOjAwIEFNJykge1xuICAgICAgICBzZXREYXRlKGZvcm1hdFRvRGF0ZShjdXJyZW50RGF0ZSkpO1xuICAgICAgICBzZXREYXRlVGltZShmb3JtYXRUb0RhdGVUaW1lKGN1cnJlbnREYXRlKSk7XG4gICAgICB9XG4gICAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjbG9ja0ludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0O1xuICAgIGNvbnN0IG9uZVNlY29uZCA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUNsb2NrKCk7XG4gICAgICBjbG9ja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgb25lU2Vjb25kKTtcbiAgICB9LCBvbmVTZWNvbmQgLSBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja31cbiAgICAgIGRhdGVUaW1lPXtkYXRlVGltZX1cbiAgICAgIHRpdGxlPXtkYXRlfVxuICAgICAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nPXt0cnVlfVxuICAgID5cbiAgICAgIHt0aW1lfVxuICAgIDwvdGltZT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})