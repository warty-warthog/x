webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar formatToDate = function formatToDate(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(date);\n};\n\nvar formatToDateTime = function formatToDateTime(date) {\n  var _Intl$DateTimeFormat$ = new Intl.DateTimeFormat(\"en-US\", {\n    year: 'numeric',\n    day: '2-digit',\n    month: '2-digit'\n  }).formatToParts(new Date()).reduce(function (acc, _ref) {\n    var type = _ref.type,\n        value = _ref.value;\n    return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, type, value));\n  }, {}),\n      year = _Intl$DateTimeFormat$.year,\n      month = _Intl$DateTimeFormat$.month,\n      day = _Intl$DateTimeFormat$.day;\n\n  return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n};\n\nvar formatToTime = function formatToTime(date) {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(date);\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var initDate = new Date(),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToDate(initDate)),\n      date = _useState[0],\n      setDate = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToDateTime(initDate)),\n      dateTime = _useState2[0],\n      setDateTime = _useState2[1],\n      _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(formatToTime(initDate)),\n      time = _useState3[0],\n      setTime = _useState3[1],\n      updateClock = function updateClock() {\n    var currentDate = new Date();\n    setTime(formatToTime(currentDate));\n\n    if (time === '12:00:00 AM') {\n      setDate(formatToDate(currentDate));\n      setDateTime(formatToDateTime(currentDate));\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var clockIntervalId;\n    var oneSecond = Number(1000);\n    setTimeout(function () {\n      updateClock();\n      clockIntervalId = setInterval(updateClock, oneSecond);\n    }, oneSecond - new Date().getMilliseconds());\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.clock,\n    dateTime: dateTime,\n    title: date,\n    suppressHydrationWarning: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, time);\n};\n\n_s(Clock, \"2QWlC50OmfM0WXsXHODJgmDDRpE=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJmb3JtYXRUb0RhdGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJmb3JtYXRUb0RhdGVUaW1lIiwiZm9ybWF0VG9QYXJ0cyIsIkRhdGUiLCJyZWR1Y2UiLCJhY2MiLCJ0eXBlIiwidmFsdWUiLCJmb3JtYXRUb1RpbWUiLCJob3VyMTIiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiQ2xvY2siLCJpbml0RGF0ZSIsInVzZVN0YXRlIiwic2V0RGF0ZSIsImRhdGVUaW1lIiwic2V0RGF0ZVRpbWUiLCJ0aW1lIiwic2V0VGltZSIsInVwZGF0ZUNsb2NrIiwiY3VycmVudERhdGUiLCJ1c2VFZmZlY3QiLCJjbG9ja0ludGVydmFsSWQiLCJvbmVTZWNvbmQiLCJOdW1iZXIiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJnZXRNaWxsaXNlY29uZHMiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwiY2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFEO0FBQUEsU0FDbkIsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCQyxPQUF4QixFQUE0QztBQUMxQ0MsT0FBRyxFQUFFLFNBRHFDO0FBRTFDQyxTQUFLLEVBQUUsTUFGbUM7QUFHMUNDLFdBQU8sRUFBRSxNQUhpQztBQUkxQ0MsUUFBSSxFQUFFO0FBSm9DLEdBQTVDLEVBS0dDLE1BTEgsQ0FLVVIsSUFMVixDQURtQjtBQUFBLENBQXJCOztBQVFBLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ1QsSUFBRCxFQUFnQjtBQUFBLDhCQUNWLElBQUlDLElBQUksQ0FBQ0MsY0FBVCxD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bG9jay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2xvY2subW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZm9ybWF0VG9EYXRlID0gKGRhdGU6IERhdGUpID0+XG4gIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIGRheTogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJ1xuICB9KS5mb3JtYXQoZGF0ZSk7XG5cbmNvbnN0IGZvcm1hdFRvRGF0ZVRpbWUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHByb2Nlc3MuZW52LmxvY2FsZSwge1xuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICBtb250aDogJzItZGlnaXQnXG4gIH0pXG4gICAgLmZvcm1hdFRvUGFydHMobmV3IERhdGUoKSlcbiAgICAucmVkdWNlKChhY2MsIHsgdHlwZSwgdmFsdWUgfSkgPT4gKHsgLi4uYWNjLCBbdHlwZV06IHZhbHVlIH0pLCB7fSBhcyB7IFtrZXkgaW4gSW50bC5EYXRlVGltZUZvcm1hdFBhcnRUeXBlc106IHN0cmluZyB9KTtcblxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn07XG5cbmNvbnN0IGZvcm1hdFRvVGltZSA9IChkYXRlOiBEYXRlKSA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIHtcbiAgICBob3VyMTI6IHRydWUsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIHNlY29uZDogJzItZGlnaXQnXG4gIH0pLmZvcm1hdChkYXRlKTtcblxuZXhwb3J0IGNvbnN0IENsb2NrOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgaW5pdERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKGZvcm1hdFRvRGF0ZShpbml0RGF0ZSkpLFxuICAgIFtkYXRlVGltZSwgc2V0RGF0ZVRpbWVdID0gdXNlU3RhdGUoZm9ybWF0VG9EYXRlVGltZShpbml0RGF0ZSkpLFxuICAgIFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKGZvcm1hdFRvVGltZShpbml0RGF0ZSkpLFxuICAgIHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBzZXRUaW1lKGZvcm1hdFRvVGltZShjdXJyZW50RGF0ZSkpO1xuXG4gICAgICBpZiAodGltZSA9PT0gJzEyOjAwOjAwIEFNJykge1xuICAgICAgICBzZXREYXRlKGZvcm1hdFRvRGF0ZShjdXJyZW50RGF0ZSkpO1xuICAgICAgICBzZXREYXRlVGltZShmb3JtYXRUb0RhdGVUaW1lKGN1cnJlbnREYXRlKSk7XG4gICAgICB9XG4gICAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjbG9ja0ludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0O1xuICAgIGNvbnN0IG9uZVNlY29uZCA9IE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUNsb2NrKCk7XG4gICAgICBjbG9ja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgb25lU2Vjb25kKTtcbiAgICB9LCBvbmVTZWNvbmQgLSBuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNsb2NrSW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDx0aW1lIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrfSBkYXRlVGltZT17ZGF0ZVRpbWV9IHRpdGxlPXtkYXRlfSBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc9e3RydWV9PlxuICAgICAge3RpbWV9XG4gICAgPC90aW1lPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})