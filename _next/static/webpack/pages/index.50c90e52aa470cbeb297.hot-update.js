webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Icons.tsx":
/*!******************************!*\
  !*** ./components/Icons.tsx ***!
  \******************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Icons.module.scss */ \"./styles/Icons.module.scss\");\n/* harmony import */ var _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-double-tap */ \"./node_modules/use-double-tap/dist/index.umd.js\");\n/* harmony import */ var use_double_tap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_double_tap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Icons.tsx\",\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Icons = function Icons() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_3__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      startApp = function startApp(id) {\n    return function () {\n      return updateApps({\n        update: {\n          running: true\n        },\n        id: id\n      });\n    };\n  };\n\n  return __jsx(\"nav\", {\n    className: _styles_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, apps.map(_s(function (_ref, index) {\n    _s();\n\n    var id = _ref.id,\n        icon = _ref.icon,\n        name = _ref.name;\n    return __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id,\n      icon: icon,\n      name: name,\n      onDoubleClick: startApp(id) // TODO: Also unminimize\n\n    }, Object(use_double_tap__WEBPACK_IMPORTED_MODULE_4__[\"useDoubleTap\"])(startApp(id)), {\n      tabIndex: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }));\n  }, \"oFq/+8OmzsQm96rbVMLzREP9XDE=\", false, function () {\n    return [use_double_tap__WEBPACK_IMPORTED_MODULE_4__[\"useDoubleTap\"]];\n  }))));\n};\n\n_s2(Icons, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Icons;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29ucy50c3g/MTRmMCJdLCJuYW1lcyI6WyJJY29ucyIsInVzZUNvbnRleHQiLCJBcHBzQ29udGV4dCIsImFwcHMiLCJ1cGRhdGVBcHBzIiwic3RhcnRBcHAiLCJpZCIsInVwZGF0ZSIsInJ1bm5pbmciLCJzdHlsZXMiLCJpY29ucyIsIm1hcCIsImluZGV4IiwiaWNvbiIsIm5hbWUiLCJ1c2VEb3VibGVUYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBUyxHQUFHLFNBQVpBLEtBQVksR0FBTTtBQUFBOztBQUFBOztBQUFBLG9CQUNBQyx3REFBVSxDQUFDQywwREFBRCxDQURWO0FBQUEsTUFDckJDLElBRHFCLGVBQ3JCQSxJQURxQjtBQUFBLE1BQ2ZDLFVBRGUsZUFDZkEsVUFEZTtBQUFBLE1BRTNCQyxRQUYyQixHQUVoQixTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxXQUFnQjtBQUFBLGFBQU1GLFVBQVUsQ0FBQztBQUFFRyxjQUFNLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQVY7QUFBNkJGLFVBQUUsRUFBRkE7QUFBN0IsT0FBRCxDQUFoQjtBQUFBLEtBQWhCO0FBQUEsR0FGZ0I7O0FBSTdCLFNBQ0U7QUFBSyxhQUFTLEVBQUVHLGdFQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLElBQUksQ0FBQ1EsR0FBTCxJQUFTLGdCQUFxQkMsS0FBckI7QUFBQTs7QUFBQSxRQUFHTixFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPTyxJQUFQLFFBQU9BLElBQVA7QUFBQSxRQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSxXQUNSLE1BQUMsMENBQUQ7QUFDRSxTQUFHLEVBQUVSLEVBRFA7QUFFRSxVQUFJLEVBQUVPLElBRlI7QUFHRSxVQUFJLEVBQUVDLElBSFI7QUFJRSxtQkFBYSxFQUFFVCxRQUFRLENBQUNDLEVBQUQsQ0FKekIsQ0FJK0I7O0FBSi9CLE9BS09TLG1FQUFZLENBQUNWLFFBQVEsQ0FBQ0MsRUFBRCxDQUFULENBTG5CO0FBTUUsY0FBUSxFQUFFTSxLQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUTtBQUFBLEdBQVQ7QUFBQSxZQU1RRywyREFOUjtBQUFBLEtBREgsQ0FERixDQURGO0FBZ0JELENBcEJNOztJQUFNZixLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JY29ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSWNvbnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQXBwc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEb3VibGVUYXAgfSBmcm9tICd1c2UtZG91YmxlLXRhcCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9JY29uJztcblxuZXhwb3J0IGNvbnN0IEljb25zOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhcHBzLCB1cGRhdGVBcHBzIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBzdGFydEFwcCA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IHJ1bm5pbmc6IHRydWUgfSwgaWQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgIDxvbD5cbiAgICAgICAge2FwcHMubWFwKCh7IGlkLCBpY29uLCBuYW1lIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3N0YXJ0QXBwKGlkKX0gLy8gVE9ETzogQWxzbyB1bm1pbmltaXplXG4gICAgICAgICAgICB7Li4uKHVzZURvdWJsZVRhcChzdGFydEFwcChpZCkpKX1cbiAgICAgICAgICAgIHRhYkluZGV4PXtpbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Icons.tsx\n");

/***/ }),

/***/ "./node_modules/use-double-tap/dist/index.umd.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-double-tap/dist/index.umd.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,n){ true?n(exports,__webpack_require__(/*! react */ \"./node_modules/react/index.js\")):undefined}(this,function(e,n){e.useDoubleTap=function(e,t,u){void 0===t&&(t=300),void 0===u&&(u={});var o=n.useRef(null),r=n.useCallback(function(n){o.current?(clearTimeout(o.current),o.current=null,e&&e(n)):o.current=setTimeout(function(){u.onSingleTap&&u.onSingleTap(n),o.current=null},t)},[e,t,u.onSingleTap]);return e?{onClick:r}:{}}});\n//# sourceMappingURL=index.umd.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1kb3VibGUtdGFwL2Rpc3QvaW5kZXgudW1kLmpzP2JlNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxLQUFvRCxXQUFXLG1CQUFPLENBQUMsNENBQU8sR0FBRyxTQUFnRyxDQUFDLG9CQUFvQiwrQkFBK0IscUNBQXFDLEVBQUUsaURBQWlELDJGQUEyRiwrQ0FBK0MsSUFBSSxzQkFBc0IsVUFBVSxVQUFVLEtBQUs7QUFDemdCIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3VzZS1kb3VibGUtdGFwL2Rpc3QvaW5kZXgudW1kLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bihleHBvcnRzLHJlcXVpcmUoXCJyZWFjdFwiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCIsXCJyZWFjdFwiXSxuKTpuKGUudXNlRG91YmxlVGFwPXt9LGUucmVhY3QpfSh0aGlzLGZ1bmN0aW9uKGUsbil7ZS51c2VEb3VibGVUYXA9ZnVuY3Rpb24oZSx0LHUpe3ZvaWQgMD09PXQmJih0PTMwMCksdm9pZCAwPT09dSYmKHU9e30pO3ZhciBvPW4udXNlUmVmKG51bGwpLHI9bi51c2VDYWxsYmFjayhmdW5jdGlvbihuKXtvLmN1cnJlbnQ/KGNsZWFyVGltZW91dChvLmN1cnJlbnQpLG8uY3VycmVudD1udWxsLGUmJmUobikpOm8uY3VycmVudD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dS5vblNpbmdsZVRhcCYmdS5vblNpbmdsZVRhcChuKSxvLmN1cnJlbnQ9bnVsbH0sdCl9LFtlLHQsdS5vblNpbmdsZVRhcF0pO3JldHVybiBlP3tvbkNsaWNrOnJ9Ont9fX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgudW1kLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/use-double-tap/dist/index.umd.js\n");

/***/ })

})