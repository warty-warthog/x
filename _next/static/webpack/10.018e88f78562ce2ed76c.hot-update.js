webpackHotUpdate_N_E(10,{

/***/ "./components/System/Directory/DirectoryIcons.tsx":
/*!********************************************************!*\
  !*** ./components/System/Directory/DirectoryIcons.tsx ***!
  \********************************************************/
/*! exports provided: DirectoryIcons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryIcons\", function() { return DirectoryIcons; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/DirectoryIcons.module.scss */ \"./styles/System/DirectoryIcons.module.scss\");\n/* harmony import */ var _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryIcons.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar DirectoryIcons = function DirectoryIcons(_ref) {\n  _s();\n\n  var _ref$entries = _ref.entries,\n      entries = _ref$entries === void 0 ? [] : _ref$entries,\n      onDoubleClick = _ref.onDoubleClick;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return __jsx(\"nav\", {\n    className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcons,\n    ref: navRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name,\n        kind = _ref2.kind,\n        path = _ref2.path,\n        url = _ref2.url;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      drag: true // dragElastic={0.5}\n      ,\n      dragTransition: {\n        bounceStiffness: 500,\n        bounceDamping: 150\n      },\n      dragConstraints: navRef,\n      dragMomentum: false,\n      key: path,\n      className: _styles_System_DirectoryIcons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcon,\n      tabIndex: 0,\n      title: \"\".concat(name).concat(kind ? \"\\r\\nType: \".concat(kind) : ''),\n      onClick: new _utils_events__WEBPACK_IMPORTED_MODULE_4__[\"ClickHandler\"]({\n        doubleClick: onDoubleClick(path, url, icon, name)\n      }).clickHandler\n    }, desktopIconMotionSettings, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }), __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }), __jsx(\"figcaption\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, name)));\n  }))));\n};\n\n_s(DirectoryIcons, \"rHA/vuAAXoiUfw/iUIRJEHlIXI0=\");\n\n_c = DirectoryIcons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryIcons);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeD8wNGVhIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3MiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJEaXJlY3RvcnlJY29ucyIsImVudHJpZXMiLCJvbkRvdWJsZUNsaWNrIiwibmF2UmVmIiwidXNlUmVmIiwic3R5bGVzIiwiZGlyZWN0b3J5SWNvbnMiLCJtYXAiLCJpY29uIiwibmFtZSIsImtpbmQiLCJwYXRoIiwidXJsIiwiYm91bmNlU3RpZmZuZXNzIiwiYm91bmNlRGFtcGluZyIsImRpcmVjdG9yeUljb24iLCJDbGlja0hhbmRsZXIiLCJkb3VibGVDbGljayIsImNsaWNrSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLHlCQUF5QixHQUFHO0FBQ2hDQyxTQUFPLEVBQUU7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFLENBQUM7QUFBbEIsR0FEdUI7QUFFaENDLFNBQU8sRUFBRTtBQUFFRixXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUU7QUFBakIsR0FGdUI7QUFHaENFLFlBQVUsRUFBRTtBQUNWRixLQUFDLEVBQUU7QUFDREcsVUFBSSxFQUFFO0FBREw7QUFETztBQUhvQixDQUFsQztBQVVPLElBQU1DLGNBQWlDLEdBQUcsU0FBcENBLGNBQW9DLE9BRzNDO0FBQUE7O0FBQUEsMEJBRkpDLE9BRUk7QUFBQSxNQUZKQSxPQUVJLDZCQUZNLEVBRU47QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7QUFDSixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGdGQUFNLENBQUNDLGNBQXZCO0FBQXVDLE9BQUcsRUFBRUgsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsT0FBTyxDQUFDTSxHQUFSLENBQVk7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlQyxJQUFmLFNBQWVBLElBQWY7QUFBQSxRQUFxQkMsSUFBckIsU0FBcUJBLElBQXJCO0FBQUEsUUFBMkJDLEdBQTNCLFNBQTJCQSxHQUEzQjtBQUFBLFdBQ1gsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDRSxVQUFJLE1BRE4sQ0FFRTtBQUZGO0FBR0Usb0JBQWMsRUFBRTtBQUFFQyx1QkFBZSxFQUFFLEdBQW5CO0FBQXdCQyxxQkFBYSxFQUFFO0FBQXZDLE9BSGxCO0FBSUUscUJBQWUsRUFBRVgsTUFKbkI7QUFLRSxrQkFBWSxFQUFFLEtBTGhCO0FBTUUsU0FBRyxFQUFFUSxJQU5QO0FBT0UsZUFBUyxFQUFFTixnRkFBTSxDQUFDVSxhQVBwQjtBQVFFLGNBQVEsRUFBRSxDQVJaO0FBU0UsV0FBSyxZQUFLTixJQUFMLFNBQVlDLElBQUksdUJBQWdCQSxJQUFoQixJQUF5QixFQUF6QyxDQVRQO0FBVUUsYUFBTyxFQUNMLElBQUlNLDBEQUFKLENBQWlCO0FBQ2ZDLG1CQUFXLEVBQUVmLGFBQWEsQ0FBQ1MsSUFBRCxFQUFPQyxHQUFQLEVBQVlKLElBQVosRUFBa0JDLElBQWxCO0FBRFgsT0FBakIsRUFFR1M7QUFiUCxPQWVNekIseUJBZk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVnQixJQUFWO0FBQWdCLFNBQUcsRUFBRUQsSUFBckI7QUFBMkIsZUFBUyxFQUFFLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUMsSUFBYixDQUZGLENBakJGLENBRFc7QUFBQSxHQUFaLENBREgsQ0FERixDQURGLENBREY7QUFnQ0QsQ0F0Q007O0dBQU1ULGM7O0tBQUFBLGM7QUF3Q0VBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUljb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL0RpcmVjdG9yeUljb25zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRGlyZWN0b3J5VmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5cblxuY29uc3QgZGVza3RvcEljb25Nb3Rpb25TZXR0aW5ncyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgeToge1xuICAgICAgdHlwZTogJ3NwcmluZydcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RvcnlJY29uczogRkM8RGlyZWN0b3J5Vmlldz4gPSAoe1xuICBlbnRyaWVzID0gW10sXG4gIG9uRG91YmxlQ2xpY2tcbn0pID0+IHtcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3RvcnlJY29uc30gcmVmPXtuYXZSZWZ9PlxuICAgICAgPG9sPlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtlbnRyaWVzLm1hcCgoeyBpY29uLCBuYW1lLCBraW5kLCBwYXRoLCB1cmwgfSkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICBkcmFnXG4gICAgICAgICAgICAgIC8vIGRyYWdFbGFzdGljPXswLjV9XG4gICAgICAgICAgICAgIGRyYWdUcmFuc2l0aW9uPXt7IGJvdW5jZVN0aWZmbmVzczogNTAwLCBib3VuY2VEYW1waW5nOiAxNTAgfX1cbiAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXtuYXZSZWZ9XG4gICAgICAgICAgICAgIGRyYWdNb21lbnR1bT17ZmFsc2V9XG4gICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0b3J5SWNvbn1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIHRpdGxlPXtgJHtuYW1lfSR7a2luZCA/IGBcXHJcXG5UeXBlOiAke2tpbmR9YCA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIG5ldyBDbGlja0hhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgZG91YmxlQ2xpY2s6IG9uRG91YmxlQ2xpY2socGF0aCwgdXJsLCBpY29uLCBuYW1lKVxuICAgICAgICAgICAgICAgIH0pLmNsaWNrSGFuZGxlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsuLi5kZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtuYW1lfSBzcmM9e2ljb259IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+e25hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3RvcnlJY29ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryIcons.tsx\n");

/***/ })

})