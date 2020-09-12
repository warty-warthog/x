webpackHotUpdate_N_E(1,{

/***/ "./components/System/Taskbar/SystemTray.tsx":
/*!**************************************************!*\
  !*** ./components/System/Taskbar/SystemTray.tsx ***!
  \**************************************************/
/*! exports provided: SystemTray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemTray\", function() { return SystemTray; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/SystemTray.module.scss */ \"./styles/System/SystemTray.module.scss\");\n/* harmony import */ var _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/SystemTray.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar getBatteryIcon = function getBatteryIcon(level) {\n  if (level === 1) {\n    return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBatteryFull\"];\n  } else if (level >= 0.75) {\n    return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBatteryThreeQuarters\"];\n  } else if (level >= 0.5) {\n    return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBatteryHalf\"];\n  } else if (level >= 0.25) {\n    return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBatteryQuarter\"];\n  } else {\n    return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBatteryEmpty\"];\n  }\n};\n\nvar SystemTray = function SystemTray() {\n  _s();\n\n  var batteryState = Object(react_use__WEBPACK_IMPORTED_MODULE_2__[\"useBattery\"])(),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1),\n      batteryLevel = _useState[0],\n      setBatteryLevel = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      batteryCharging = _useState2[0],\n      setBatteryCharging = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _ref = batteryState || {},\n        isSupported = _ref.isSupported,\n        fetched = _ref.fetched,\n        level = _ref.level,\n        charging = _ref.charging;\n\n    if (isSupported && fetched) {\n      setBatteryLevel(level);\n      setBatteryCharging(charging);\n    }\n  }, [batteryState]);\n  return __jsx(\"nav\", {\n    className: _styles_System_SystemTray_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tray,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    title: \"Level: \".concat(batteryLevel * 100, \"%\\nCharging: \").concat(batteryCharging ? 'Yes' : 'No'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, batteryCharging ? __jsx(\"span\", {\n    className: \"fa-layers fa-fw\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    rotation: 90,\n    size: \"2x\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faBolt\"],\n    style: {\n      color: '#f8f8ff'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    rotation: 270,\n    icon: getBatteryIcon(batteryLevel),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  })) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    icon: getBatteryIcon(batteryLevel),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SystemTray, \"bTTlaK4/DRKYoiP4y5NsUmwmm7c=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_2__[\"useBattery\"]];\n});\n\n_c = SystemTray;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SystemTray);\n\nvar _c;\n\n$RefreshReg$(_c, \"SystemTray\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TeXN0ZW1UcmF5LnRzeD82ZTJlIl0sIm5hbWVzIjpbImdldEJhdHRlcnlJY29uIiwibGV2ZWwiLCJmYUJhdHRlcnlGdWxsIiwiZmFCYXR0ZXJ5VGhyZWVRdWFydGVycyIsImZhQmF0dGVyeUhhbGYiLCJmYUJhdHRlcnlRdWFydGVyIiwiZmFCYXR0ZXJ5RW1wdHkiLCJTeXN0ZW1UcmF5IiwiYmF0dGVyeVN0YXRlIiwidXNlQmF0dGVyeSIsInVzZVN0YXRlIiwiYmF0dGVyeUxldmVsIiwic2V0QmF0dGVyeUxldmVsIiwiYmF0dGVyeUNoYXJnaW5nIiwic2V0QmF0dGVyeUNoYXJnaW5nIiwidXNlRWZmZWN0IiwiaXNTdXBwb3J0ZWQiLCJmZXRjaGVkIiwiY2hhcmdpbmciLCJzdHlsZXMiLCJ0cmF5IiwiZmFCb2x0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7O0FBV0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQW1CO0FBQ3hDLE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsV0FBT0MsK0VBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDeEIsV0FBT0Usd0ZBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUYsS0FBSyxJQUFJLEdBQWIsRUFBa0I7QUFDdkIsV0FBT0csK0VBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUgsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDeEIsV0FBT0ksa0ZBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPQyxnRkFBUDtBQUNEO0FBQ0YsQ0FaRDs7QUFjTyxJQUFNQyxVQUFjLEdBQUcsU0FBakJBLFVBQWlCLEdBQU07QUFBQTs7QUFDNUIsTUFBQUMsWUFBWSxHQUFHQyw0REFBVSxFQUF6QjtBQUFBLGtCQUM4QkMsc0RBQVEsQ0FBQyxDQUFDLENBQUYsQ0FEdEM7QUFBQSxNQUNIQyxZQURHO0FBQUEsTUFDV0MsZUFEWDtBQUFBLG1CQUVvQ0Ysc0RBQVEsQ0FBQyxLQUFELENBRjVDO0FBQUEsTUFFSEcsZUFGRztBQUFBLE1BRWNDLGtCQUZkOztBQUlOQyx5REFBUyxDQUFDLFlBQU07QUFBQSxlQU1RUCxZQUFZLElBQUksRUFOeEI7QUFBQSxRQUVaUSxXQUZZLFFBRVpBLFdBRlk7QUFBQSxRQUdaQyxPQUhZLFFBR1pBLE9BSFk7QUFBQSxRQUlaaEIsS0FKWSxRQUlaQSxLQUpZO0FBQUEsUUFLWmlCLFFBTFksUUFLWkEsUUFMWTs7QUFRZCxRQUFJRixXQUFXLElBQUlDLE9BQW5CLEVBQTRCO0FBQzFCTCxxQkFBZSxDQUFDWCxLQUFELENBQWY7QUFDQWEsd0JBQWtCLENBQUNJLFFBQUQsQ0FBbEI7QUFDRDtBQUNGLEdBWlEsRUFZTixDQUFDVixZQUFELENBWk0sQ0FBVDtBQWNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVXLDRFQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLG1CQUFZVCxZQUFZLEdBQUcsR0FBM0IsMEJBQ0hFLGVBQWUsR0FBRyxLQUFILEdBQVcsSUFEdkIsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dBLGVBQWUsR0FDZDtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFDRSxZQUFRLEVBQUUsRUFEWjtBQUVFLFFBQUksRUFBQyxJQUZQO0FBR0UsUUFBSSxFQUFFUSx3RUFIUjtBQUlFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsOEVBQUQ7QUFBaUIsWUFBUSxFQUFFLEdBQTNCO0FBQWdDLFFBQUksRUFBRXRCLGNBQWMsQ0FBQ1csWUFBRCxDQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FEYyxHQVdkLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFWCxjQUFjLENBQUNXLFlBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixDQURGLENBREYsQ0FERjtBQXlCRCxDQTVDTTs7R0FBTUosVTtVQUNVRSxvRDs7O0tBRFZGLFU7QUE4Q0VBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TeXN0ZW1UcmF5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1N5c3RlbVRyYXkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQmF0dGVyeSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBCYXR0ZXJ5U3RhdGUgfSBmcm9tICdyZWFjdC11c2UvbGliL3VzZUJhdHRlcnknO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtcbiAgZmFCYXR0ZXJ5RW1wdHksXG4gIGZhQmF0dGVyeVF1YXJ0ZXIsXG4gIGZhQmF0dGVyeUhhbGYsXG4gIGZhQmF0dGVyeVRocmVlUXVhcnRlcnMsXG4gIGZhQmF0dGVyeUZ1bGwsXG4gIGZhQm9sdFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG50eXBlIFVzZUJhdHRlcnlTdGF0ZSA9IEJhdHRlcnlTdGF0ZSAmIHsgaXNTdXBwb3J0ZWQ6IHRydWU7IGZldGNoZWQ6IHRydWUgfTtcblxuY29uc3QgZ2V0QmF0dGVyeUljb24gPSAobGV2ZWw6IG51bWJlcikgPT4ge1xuICBpZiAobGV2ZWwgPT09IDEpIHtcbiAgICByZXR1cm4gZmFCYXR0ZXJ5RnVsbDtcbiAgfSBlbHNlIGlmIChsZXZlbCA+PSAwLjc1KSB7XG4gICAgcmV0dXJuIGZhQmF0dGVyeVRocmVlUXVhcnRlcnM7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPj0gMC41KSB7XG4gICAgcmV0dXJuIGZhQmF0dGVyeUhhbGY7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPj0gMC4yNSkge1xuICAgIHJldHVybiBmYUJhdHRlcnlRdWFydGVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYUJhdHRlcnlFbXB0eTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFN5c3RlbVRyYXk6IEZDID0gKCkgPT4ge1xuICBjb25zdCBiYXR0ZXJ5U3RhdGUgPSB1c2VCYXR0ZXJ5KCksXG4gICAgW2JhdHRlcnlMZXZlbCwgc2V0QmF0dGVyeUxldmVsXSA9IHVzZVN0YXRlKC0xKSxcbiAgICBbYmF0dGVyeUNoYXJnaW5nLCBzZXRCYXR0ZXJ5Q2hhcmdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTdXBwb3J0ZWQsXG4gICAgICBmZXRjaGVkLFxuICAgICAgbGV2ZWwsXG4gICAgICBjaGFyZ2luZ1xuICAgIH06IFVzZUJhdHRlcnlTdGF0ZSA9IChiYXR0ZXJ5U3RhdGUgfHwge30pIGFzIFVzZUJhdHRlcnlTdGF0ZTtcblxuICAgIGlmIChpc1N1cHBvcnRlZCAmJiBmZXRjaGVkKSB7XG4gICAgICBzZXRCYXR0ZXJ5TGV2ZWwobGV2ZWwpO1xuICAgICAgc2V0QmF0dGVyeUNoYXJnaW5nKGNoYXJnaW5nKTtcbiAgICB9XG4gIH0sIFtiYXR0ZXJ5U3RhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudHJheX0+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHRpdGxlPXtgTGV2ZWw6ICR7YmF0dGVyeUxldmVsICogMTAwfSVcXG5DaGFyZ2luZzogJHtcbiAgICAgICAgICAgIGJhdHRlcnlDaGFyZ2luZyA/ICdZZXMnIDogJ05vJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge2JhdHRlcnlDaGFyZ2luZyA/IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLWxheWVycyBmYS1md1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgcm90YXRpb249ezkwfVxuICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFCb2x0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2Y4ZjhmZicgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiByb3RhdGlvbj17MjcwfSBpY29uPXtnZXRCYXR0ZXJ5SWNvbihiYXR0ZXJ5TGV2ZWwpfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2dldEJhdHRlcnlJY29uKGJhdHRlcnlMZXZlbCl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeXN0ZW1UcmF5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/SystemTray.tsx\n");

/***/ })

})