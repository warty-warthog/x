webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.tsx":
/*!******************************!*\
  !*** ./components/Clock.tsx ***!
  \******************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Clock.module.scss */ \"./styles/Clock.module.scss\");\n/* harmony import */ var _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Clock.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar getDate = function getDate() {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    day: 'numeric',\n    month: 'long',\n    weekday: 'long',\n    year: 'numeric'\n  }).format(new Date());\n};\n\nvar getTime = function getTime() {\n  return new Intl.DateTimeFormat(\"en-US\", {\n    hour12: true,\n    hour: 'numeric',\n    minute: '2-digit',\n    second: '2-digit'\n  }).format(new Date());\n};\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(getDate, getDate()),\n      date = _useReducer[0],\n      updateDate = _useReducer[1],\n      _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(getTime, getTime()),\n      time = _useReducer2[0],\n      updateTime = _useReducer2[1],\n      updateClock = function updateClock() {\n    updateTime();\n\n    if (!date || time === '12:00:00 AM') {\n      updateDate();\n    }\n  }; // const [date, setDate] = useState(getDate()),\n  //   [time, setTime] = useState(''),\n  //   updateClock = () => {\n  //     setTime(getTime());\n  //     if (!date || time === '12:00:00 AM') {\n  //       setDate(getDate());\n  //     }\n  //   };\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(updateClock, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var clockIntervalId = setInterval(updateClock, Number(1000));\n    return function () {\n      return clearInterval(clockIntervalId);\n    };\n  }, []);\n  return __jsx(\"time\", {\n    className: _styles_Clock_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.clock,\n    title: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, time);\n};\n\n_s(Clock, \"W1/S1LAJ5BG3RTgo2zXEnNydIO8=\");\n\n_c = Clock;\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay50c3g/NWQ0YSJdLCJuYW1lcyI6WyJnZXREYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyIsImRheSIsIm1vbnRoIiwid2Vla2RheSIsInllYXIiLCJmb3JtYXQiLCJEYXRlIiwiZ2V0VGltZSIsImhvdXIxMiIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJDbG9jayIsInVzZVJlZHVjZXIiLCJkYXRlIiwidXBkYXRlRGF0ZSIsInRpbWUiLCJ1cGRhdGVUaW1lIiwidXBkYXRlQ2xvY2siLCJ1c2VFZmZlY3QiLCJjbG9ja0ludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIk51bWJlciIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJjbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FDZCxJQUFJQyxJQUFJLENBQUNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQTRDO0FBQzFDQyxPQUFHLEVBQUUsU0FEcUM7QUFFMUNDLFNBQUssRUFBRSxNQUZtQztBQUcxQ0MsV0FBTyxFQUFFLE1BSGlDO0FBSTFDQyxRQUFJLEVBQUU7QUFKb0MsR0FBNUMsRUFLR0MsTUFMSCxDQUtVLElBQUlDLElBQUosRUFMVixDQURjO0FBQUEsQ0FBaEI7O0FBUUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNkLElBQUlULElBQUksQ0FBQ0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBNEM7QUFDMUNRLFVBQU0sRUFBRSxJQURrQztBQUUxQ0MsUUFBSSxFQUFFLFNBRm9DO0FBRzFDQyxVQUFNLEVBQUUsU0FIa0M7QUFJMUNDLFVBQU0sRUFBRTtBQUprQyxHQUE1QyxFQUtHTixNQUxILENBS1UsSUFBSUMsSUFBSixFQUxWLENBRGM7QUFBQSxDQUFoQjs7QUFRTyxJQUFNTSxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0RDLHdEQUFVLENBQUNoQixPQUFELEVBQVVBLE9BQU8sRUFBakIsQ0FEVDtBQUFBLE1BQ3RCaUIsSUFEc0I7QUFBQSxNQUNoQkMsVUFEZ0I7QUFBQSxxQkFFTkYsd0RBQVUsQ0FBQ04sT0FBRCxFQUFVQSxPQUFPLEVBQWpCLENBRko7QUFBQSxNQUUxQlMsSUFGMEI7QUFBQSxNQUVwQkMsVUFGb0I7QUFBQSxNQUczQkMsV0FIMkIsR0FHYixTQUFkQSxXQUFjLEdBQU07QUFDbEJELGNBQVU7O0FBRVYsUUFBSSxDQUFDSCxJQUFELElBQVNFLElBQUksS0FBSyxhQUF0QixFQUFxQztBQUNuQ0QsZ0JBQVU7QUFDWDtBQUNGLEdBVDBCLEVBVTdCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBSSx5REFBUyxDQUFDRCxXQUFELEVBQWMsRUFBZCxDQUFUO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGVBQWUsR0FBR0MsV0FBVyxDQUNqQ0gsV0FEaUMsRUFFakNJLE1BQU0sQ0FBQ3RCLElBQUQsQ0FGMkIsQ0FBbkM7QUFLQSxXQUFPO0FBQUEsYUFBTXVCLGFBQWEsQ0FBQ0gsZUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FDRTtBQUFNLGFBQVMsRUFBRUksZ0VBQU0sQ0FBQ0MsS0FBeEI7QUFBK0IsU0FBSyxFQUFFWCxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLElBREgsQ0FERjtBQUtELENBcENNOztHQUFNSixLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Nsb2NrLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdldERhdGUgPSAoKSA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYydcbiAgfSkuZm9ybWF0KG5ldyBEYXRlKCkpO1xuXG5jb25zdCBnZXRUaW1lID0gKCkgPT5cbiAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQocHJvY2Vzcy5lbnYubG9jYWxlLCB7XG4gICAgaG91cjEyOiB0cnVlLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICBzZWNvbmQ6ICcyLWRpZ2l0J1xuICB9KS5mb3JtYXQobmV3IERhdGUoKSk7XG5cbmV4cG9ydCBjb25zdCBDbG9jazogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRlLCB1cGRhdGVEYXRlXSA9ICB1c2VSZWR1Y2VyKGdldERhdGUsIGdldERhdGUoKSksXG4gICAgW3RpbWUsIHVwZGF0ZVRpbWVdID0gdXNlUmVkdWNlcihnZXRUaW1lLCBnZXRUaW1lKCkpLFxuICAgIHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xuICAgICAgdXBkYXRlVGltZSgpO1xuXG4gICAgICBpZiAoIWRhdGUgfHwgdGltZSA9PT0gJzEyOjAwOjAwIEFNJykge1xuICAgICAgICB1cGRhdGVEYXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgLy8gY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoZ2V0RGF0ZSgpKSxcbiAgLy8gICBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgnJyksXG4gIC8vICAgdXBkYXRlQ2xvY2sgPSAoKSA9PiB7XG4gIC8vICAgICBzZXRUaW1lKGdldFRpbWUoKSk7XG5cbiAgLy8gICAgIGlmICghZGF0ZSB8fCB0aW1lID09PSAnMTI6MDA6MDAgQU0nKSB7XG4gIC8vICAgICAgIHNldERhdGUoZ2V0RGF0ZSgpKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuXG4gIHVzZUVmZmVjdCh1cGRhdGVDbG9jaywgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xvY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXG4gICAgICB1cGRhdGVDbG9jayxcbiAgICAgIE51bWJlcihwcm9jZXNzLmVudi5taWxsaXNlY29uZHNJblNlY29uZClcbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoY2xvY2tJbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHRpbWUgY2xhc3NOYW1lPXtzdHlsZXMuY2xvY2t9IHRpdGxlPXtkYXRlfT5cbiAgICAgIHt0aW1lfVxuICAgIDwvdGltZT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.tsx\n");

/***/ })

})