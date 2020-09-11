webpackHotUpdate_N_E(1,{

/***/ "./components/System/Taskbar/SystemTray.tsx":
/*!**************************************************!*\
  !*** ./components/System/Taskbar/SystemTray.tsx ***!
  \**************************************************/
/*! exports provided: SystemTray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemTray\", function() { return SystemTray; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/SystemTray.module.scss */ \"./styles/System/SystemTray.module.scss\");\n/* harmony import */ var _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/SystemTray.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar SystemTray = function SystemTray() {\n  _s();\n\n  var batteryState = Object(react_use__WEBPACK_IMPORTED_MODULE_2__[\"useBattery\"])(),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      batteryLevel = _useState[0],\n      setBatteryLevel = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      batteryCharging = _useState2[0],\n      setBatteryCharging = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _ref = batteryState || {},\n        isSupported = _ref.isSupported,\n        fetched = _ref.fetched,\n        level = _ref.level,\n        charging = _ref.charging;\n\n    console.log(isSupported, fetched, level, charging);\n\n    if (isSupported && fetched) {\n      setBatteryLevel(level);\n      setBatteryCharging(charging);\n    }\n  }, []);\n  return __jsx(\"nav\", {\n    className: _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tray,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    title: \"Charging: \".concat(batteryCharging ? 'yes' : 'no'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, batteryLevel * 100, \"%\")));\n};\n\n_s(SystemTray, \"ykfCSuAwG+7yWXb9LgnkEZdh7oI=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_2__[\"useBattery\"]];\n});\n\n_c = SystemTray;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SystemTray);\n\nvar _c;\n\n$RefreshReg$(_c, \"SystemTray\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TeXN0ZW1UcmF5LnRzeD82ZTJlIl0sIm5hbWVzIjpbIlN5c3RlbVRyYXkiLCJiYXR0ZXJ5U3RhdGUiLCJ1c2VCYXR0ZXJ5IiwidXNlU3RhdGUiLCJiYXR0ZXJ5TGV2ZWwiLCJzZXRCYXR0ZXJ5TGV2ZWwiLCJiYXR0ZXJ5Q2hhcmdpbmciLCJzZXRCYXR0ZXJ5Q2hhcmdpbmciLCJ1c2VFZmZlY3QiLCJpc1N1cHBvcnRlZCIsImZldGNoZWQiLCJsZXZlbCIsImNoYXJnaW5nIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInRyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFPTyxJQUFNQSxVQUFjLEdBQUcsU0FBakJBLFVBQWlCLEdBQU07QUFBQTs7QUFDNUIsTUFBQUMsWUFBWSxHQUFHQyw0REFBVSxFQUF6QjtBQUFBLGtCQUM4QkMsc0RBQVEsQ0FBQyxDQUFELENBRHRDO0FBQUEsTUFDSEMsWUFERztBQUFBLE1BQ1dDLGVBRFg7QUFBQSxtQkFFb0NGLHNEQUFRLENBQUMsS0FBRCxDQUY1QztBQUFBLE1BRUhHLGVBRkc7QUFBQSxNQUVjQyxrQkFGZDs7QUFJTkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsZUFDc0RQLFlBQVksSUFBSSxFQUR0RTtBQUFBLFFBQ05RLFdBRE0sUUFDTkEsV0FETTtBQUFBLFFBQ09DLE9BRFAsUUFDT0EsT0FEUDtBQUFBLFFBQ2dCQyxLQURoQixRQUNnQkEsS0FEaEI7QUFBQSxRQUN1QkMsUUFEdkIsUUFDdUJBLFFBRHZCOztBQUVsQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVosRUFBeUJDLE9BQXpCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsUUFBekM7O0FBQ0ksUUFBSUgsV0FBVyxJQUFJQyxPQUFuQixFQUE0QjtBQUMxQkwscUJBQWUsQ0FBQ00sS0FBRCxDQUFmO0FBQ0FKLHdCQUFrQixDQUFDSyxRQUFELENBQWxCO0FBQ0Q7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FDRTtBQUFLLGFBQVMsRUFBRUcsNEVBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssc0JBQWVWLGVBQWUsR0FBRyxLQUFILEdBQVcsSUFBekMsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFlBQVksR0FBRyxHQURsQixNQURGLENBREYsQ0FERjtBQVNELENBdkJNOztHQUFNSixVO1VBQ1VFLG9EOzs7S0FEVkYsVTtBQXlCRUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1N5c3RlbVRyYXkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vU3lzdGVtVHJheS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCYXR0ZXJ5IH0gZnJvbSAncmVhY3QtdXNlJztcbmltcG9ydCB7IEJhdHRlcnlTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQmF0dGVyeSc7XG5cbi8vIFRPRE86IEV4dHJhY3Qgb3V0IHRoaXMgYmF0dGVyeSBlbGVtZW50IGZyb20gdGhlIHN5c3RlbSB0cmF5IHdoaWNoIHdpbGwgY29udGFpbiBuZXR3b3JrL3ZvbHVtZSBzb21lIGRheSB0b29cblxudHlwZSBVc2VCYXR0ZXJ5U3RhdGUgPSBCYXR0ZXJ5U3RhdGUgJiB7IGlzU3VwcG9ydGVkOiB0cnVlLCBmZXRjaGVkOiB0cnVlIH07XG5cbmV4cG9ydCBjb25zdCBTeXN0ZW1UcmF5OiBGQyA9ICgpID0+IHtcbiAgY29uc3QgYmF0dGVyeVN0YXRlID0gdXNlQmF0dGVyeSgpLFxuICAgIFtiYXR0ZXJ5TGV2ZWwsIHNldEJhdHRlcnlMZXZlbF0gPSB1c2VTdGF0ZSgxKSxcbiAgICBbYmF0dGVyeUNoYXJnaW5nLCBzZXRCYXR0ZXJ5Q2hhcmdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBpc1N1cHBvcnRlZCwgZmV0Y2hlZCwgbGV2ZWwsIGNoYXJnaW5nIH06IFVzZUJhdHRlcnlTdGF0ZSA9IChiYXR0ZXJ5U3RhdGUgfHwge30pIGFzIFVzZUJhdHRlcnlTdGF0ZTtcbmNvbnNvbGUubG9nKGlzU3VwcG9ydGVkLCBmZXRjaGVkLCBsZXZlbCwgY2hhcmdpbmcpXG4gICAgaWYgKGlzU3VwcG9ydGVkICYmIGZldGNoZWQpIHtcbiAgICAgIHNldEJhdHRlcnlMZXZlbChsZXZlbCk7XG4gICAgICBzZXRCYXR0ZXJ5Q2hhcmdpbmcoY2hhcmdpbmcpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50cmF5fT5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpIHRpdGxlPXtgQ2hhcmdpbmc6ICR7YmF0dGVyeUNoYXJnaW5nID8gJ3llcycgOiAnbm8nfWB9PlxuICAgICAgICAgIHtiYXR0ZXJ5TGV2ZWwgKiAxMDB9JVxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN5c3RlbVRyYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/SystemTray.tsx\n");

/***/ })

})