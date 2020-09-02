webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Window.tsx":
/*!**************************************!*\
  !*** ./components/System/Window.tsx ***!
  \**************************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./utils/utils.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElement\"])(windowRef);\n  }, [windowRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (foreground) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElement\"])(windowRef);\n    }\n  }, [foreground]);\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    bounds: \"main\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 200,\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }), __jsx(\"figcaption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, name))), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"ong+RCvojcCRnIJWHZ6k9VKXwwU=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeD84ODZkIl0sIm5hbWVzIjpbIldpbmRvdyIsImNoaWxkcmVuIiwiaWNvbiIsIm5hbWUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInRhYkluZGV4IiwiekluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImZvcmVncm91bmQiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnQiLCJzdHlsZXMiLCJ3aW5kb3ciLCJmb2N1c09uRHJhZyIsImNsb3NlIiwiZmFUaW1lcyIsIm1pbmltaXplIiwiZmFNaW51cyIsIm1heGltaXplIiwiZmFQbHVzIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUF1QyxHQUFHLFNBQTFDQSxNQUEwQyxPQW1CakQ7QUFBQTs7QUFBQSxNQWxCSkMsUUFrQkksUUFsQkpBLFFBa0JJO0FBQUEsTUFqQkpDLElBaUJJLFFBakJKQSxJQWlCSTtBQUFBLE1BaEJKQyxJQWdCSSxRQWhCSkEsSUFnQkk7QUFBQSxNQWZKQyxVQWVJLFFBZkpBLFVBZUk7QUFBQSxNQWRKQyxPQWNJLFFBZEpBLE9BY0k7QUFBQSxNQWJKQyxPQWFJLFFBYkpBLE9BYUk7QUFBQSxNQVpKQyxNQVlJLFFBWkpBLE1BWUk7QUFBQSxNQVhKQyxjQVdJLFFBWEpBLGNBV0k7QUFBQSxNQVZKQyxVQVVJLFFBVkpBLFVBVUk7QUFBQSxNQVRKQyxlQVNJLFFBVEpBLGVBU0k7QUFBQSxNQVJKQyxjQVFJLFFBUkpBLGNBUUk7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxN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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQVEsTUFBRSxFQUFFTix3RUFBTSxDQUFDTyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFQyx3RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FQRixDQXhCRixFQTJDRTtBQUFTLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUVyQixjQUFjLEdBQUcsUUFBSCxHQUFjO0FBQXhDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsUUFESCxDQTNDRixDQURGLENBREY7QUFtREQsQ0FoRk07O0dBQU1ELE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0AvY29udGV4dHMvQXBwJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhUGx1cywgZmFNaW51cywgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmb2N1c09uRHJhZywgZm9jdXNSZXNpemFibGVFbGVtZW50IH0gZnJvbSAnQC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBXaW5kb3c6IEZDPFBhcnRpYWw8QXBwPiAmIEFwcENvbXBvbmVudD4gPSAoe1xuICBjaGlsZHJlbixcbiAgaWNvbixcbiAgbmFtZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25DbG9zZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICB1cGRhdGVQb3NpdGlvbixcbiAgdXBkYXRlU2l6ZSxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBoaWRlU2Nyb2xsYmFycyxcbiAgdGFiSW5kZXgsXG4gIHpJbmRleCxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgeCA9IDAsXG4gIHkgPSAwLFxuICBmb3JlZ3JvdW5kXG59KSA9PiB7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBmb2N1c1Jlc2l6YWJsZUVsZW1lbnQod2luZG93UmVmKSwgW3dpbmRvd1JlZl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb3JlZ3JvdW5kKSB7XG4gICAgICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnQod2luZG93UmVmKTtcbiAgICB9XG4gIH0sIFtmb3JlZ3JvdW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxSbmRcbiAgICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3d9XG4gICAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJoYW5kbGVcIlxuICAgICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgICAgYm91bmRzPVwibWFpblwiXG4gICAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCAyNTAsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoIHx8IDMwMCxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfX1cbiAgICAgICAgbWluSGVpZ2h0PXsyMDB9XG4gICAgICAgIG1pbldpZHRoPXsyMDB9XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICAgIG9uUmVzaXplU3RvcD17dXBkYXRlU2l6ZX1cbiAgICAgICAgcmVmPXt3aW5kb3dSZWZ9XG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXggfX1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoYW5kbGVcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICA8aW1nIGFsdD17bmFtZX0gc3JjPXtpY29ufSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGltZXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5taW5pbWl6ZX0gb25DbGljaz17b25NaW5pbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFNaW51c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1heGltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVBsdXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlIHN0eWxlPXt7IG92ZXJmbG93OiBoaWRlU2Nyb2xsYmFycyA/ICdoaWRkZW4nIDogJ2F1dG8nIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9SbmQ+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Window.tsx\n");

/***/ })

})