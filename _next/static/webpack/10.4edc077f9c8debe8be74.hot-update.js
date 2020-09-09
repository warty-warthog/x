webpackHotUpdate_N_E(10,{

/***/ "./components/System/Directory/DirectoryIcons.tsx":
/*!********************************************************!*\
  !*** ./components/System/Directory/DirectoryIcons.tsx ***!
  \********************************************************/
/*! exports provided: DirectoryIcons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryIcons\", function() { return DirectoryIcons; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/DirectoryIcons.module.scss */ \"./styles/System/DirectoryIcons.module.scss\");\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryIcons.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar DirectoryIcons = function DirectoryIcons(_ref) {\n  var _ref$entries = _ref.entries,\n      entries = _ref$entries === void 0 ? [] : _ref$entries,\n      onDoubleClick = _ref.onDoubleClick;\n  return __jsx(\"nav\", {\n    className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name,\n        kind = _ref2.kind,\n        path = _ref2.path,\n        url = _ref2.url;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      drag: true,\n      key: path,\n      className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcon,\n      tabIndex: 0,\n      title: \"\".concat(name).concat(kind ? \"\\r\\nType: \".concat(kind) : ''),\n      onClick: new _utils_events__WEBPACK_IMPORTED_MODULE_3__[\"ClickHandler\"]({\n        doubleClick: onDoubleClick(path, url, icon, name)\n      }).clickHandler\n    }, desktopIconMotionSettings, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }), __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }), __jsx(\"figcaption\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, name)));\n  }))));\n};\n_c = DirectoryIcons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryIcons);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeD8wNGVhIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3MiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJEaXJlY3RvcnlJY29ucyIsImVudHJpZXMiLCJvbkRvdWJsZUNsaWNrIiwic3R5bGVzIiwiZGlyZWN0b3J5SWNvbnMiLCJtYXAiLCJpY29uIiwibmFtZSIsImtpbmQiLCJwYXRoIiwidXJsIiwiZGlyZWN0b3J5SWNvbiIsIkNsaWNrSGFuZGxlciIsImRvdWJsZUNsaWNrIiwiY2xpY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBRUEsSUFBTUEseUJBQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQUR1QjtBQUVoQ0MsU0FBTyxFQUFFO0FBQUVGLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRTtBQUFqQixHQUZ1QjtBQUdoQ0UsWUFBVSxFQUFFO0FBQ1ZGLEtBQUMsRUFBRTtBQUNERyxVQUFJLEVBQUU7QUFETDtBQURPO0FBSG9CLENBQWxDO0FBVU8sSUFBTUMsY0FBaUMsR0FBRyxTQUFwQ0EsY0FBb0M7QUFBQSwwQkFDL0NDLE9BRCtDO0FBQUEsTUFDL0NBLE9BRCtDLDZCQUNyQyxFQURxQztBQUFBLE1BRS9DQyxhQUYrQyxRQUUvQ0EsYUFGK0M7QUFBQSxTQUkvQztBQUFLLGFBQVMsRUFBRUMsZ0ZBQU0sQ0FBQ0MsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsT0FBTyxDQUFDSSxHQUFSLENBQVk7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlQyxJQUFmLFNBQWVBLElBQWY7QUFBQSxRQUFxQkMsSUFBckIsU0FBcUJBLElBQXJCO0FBQUEsUUFBMkJDLEdBQTNCLFNBQTJCQSxHQUEzQjtBQUFBLFdBQ1gsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDRSxVQUFJLE1BRE47QUFFRSxTQUFHLEVBQUVELElBRlA7QUFHRSxlQUFTLEVBQUVOLGdGQUFNLENBQUNRLGFBSHBCO0FBSUUsY0FBUSxFQUFFLENBSlo7QUFLRSxXQUFLLFlBQUtKLElBQUwsU0FBWUMsSUFBSSx1QkFBZ0JBLElBQWhCLElBQXlCLEVBQXpDLENBTFA7QUFNRSxhQUFPLEVBQ0wsSUFBSUksMERBQUosQ0FBaUI7QUFDZkMsbUJBQVcsRUFBRVgsYUFBYSxDQUFDTyxJQUFELEVBQU9DLEdBQVAsRUFBWUosSUFBWixFQUFrQkMsSUFBbEI7QUFEWCxPQUFqQixFQUVHTztBQVRQLE9BV01yQix5QkFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFYyxJQUFWO0FBQWdCLFNBQUcsRUFBRUQsSUFBckI7QUFBMkIsZUFBUyxFQUFFLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUMsSUFBYixDQUZGLENBYkYsQ0FEVztBQUFBLEdBQVosQ0FESCxDQURGLENBREYsQ0FKK0M7QUFBQSxDQUExQztLQUFNUCxjO0FBZ0NFQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL0RpcmVjdG9yeS9EaXJlY3RvcnlJY29ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9EaXJlY3RvcnlJY29ucy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeVZpZXcgfSBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL0RpcmVjdG9yeS9EaXJlY3RvcnknO1xuXG5pbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB5OiB7XG4gICAgICB0eXBlOiAnc3ByaW5nJ1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IERpcmVjdG9yeUljb25zOiBGQzxEaXJlY3RvcnlWaWV3PiA9ICh7XG4gIGVudHJpZXMgPSBbXSxcbiAgb25Eb3VibGVDbGlja1xufSkgPT4gKFxuICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeUljb25zfT5cbiAgICA8b2w+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7ZW50cmllcy5tYXAoKHsgaWNvbiwgbmFtZSwga2luZCwgcGF0aCwgdXJsIH0pID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBkcmFnXG4gICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3RvcnlJY29ufVxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICB0aXRsZT17YCR7bmFtZX0ke2tpbmQgPyBgXFxyXFxuVHlwZTogJHtraW5kfWAgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgIG5ldyBDbGlja0hhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGRvdWJsZUNsaWNrOiBvbkRvdWJsZUNsaWNrKHBhdGgsIHVybCwgaWNvbiwgbmFtZSlcbiAgICAgICAgICAgICAgfSkuY2xpY2tIYW5kbGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Li4uZGVza3RvcEljb25Nb3Rpb25TZXR0aW5nc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICA8aW1nIGFsdD17bmFtZX0gc3JjPXtpY29ufSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgKSl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L29sPlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdG9yeUljb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryIcons.tsx\n");

/***/ })

})