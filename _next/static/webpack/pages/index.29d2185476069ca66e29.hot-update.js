webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Window.tsx":
/*!**************************************!*\
  !*** ./components/System/Window.tsx ***!
  \**************************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./utils/utils.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  console.log('hi', foreground, height);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    console.log('hi', foreground);\n    windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, [foreground, windowRef]); // useEffect(())\n  // Also focus if foreground becomes true? How to know. Generalize the focus func\n\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    bounds: \"main\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 200,\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }), name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeD84ODZkIl0sIm5hbWVzIjpbIldpbmRvdyIsImNoaWxkcmVuIiwiaWNvbiIsIm5hbWUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInRhYkluZGV4IiwiekluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImZvcmVncm91bmQiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInJlc2l6YWJsZUVsZW1lbnQiLCJmb2N1cyIsInN0eWxlcyIsIndpbmRvdyIsImZvY3VzT25EcmFnIiwiY2xvc2UiLCJmYVRpbWVzIiwibWluaW1pemUiLCJmYU1pbnVzIiwibWF4aW1pemUiLCJmYVBsdXMiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQXVDLEdBQUcsU0FBMUNBLE1BQTBDLE9BbUJqRDtBQUFBOztBQUFBLE1BbEJKQyxRQWtCSSxRQWxCSkEsUUFrQkk7QUFBQSxNQWpCSkMsSUFpQkksUUFqQkpBLElBaUJJO0FBQUEsTUFoQkpDLElBZ0JJLFFBaEJKQSxJQWdCSTtBQUFBLE1BZkpDLFVBZUksUUFmSkEsVUFlSTtBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYkpDLE9BYUksUUFiSkEsT0FhSTtBQUFBLE1BWkpDLE1BWUksUUFaSkEsTUFZSTtBQUFBLE1BWEpDLGNBV0ksUUFYSkEsY0FXSTtBQUFBLE1BVkpDLFVBVUksUUFWSkEsVUFVSTtBQUFBLE1BVEpDLGVBU0ksUUFUSkEsZUFTSTtBQUFBLE1BUkpDLGNBUUksUUFSSkEsY0FRSTtBQUFBLE1BUEpD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SSxFQUFFNkIseUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBUSxNQUFFLEVBQUVOLHdFQUFNLENBQUNPLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUVDLHdFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQUxGLENBeEJGLEVBeUNFO0FBQVMsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRXpCLGNBQWMsR0FBRyxRQUFILEdBQWM7QUFBeEMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixRQURILENBekNGLENBREYsQ0FERjtBQWlERCxDQXBGTTs7R0FBTUQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3cubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgQXBwIGZyb20gJ0AvY29udGV4dHMvQXBwJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQbHVzLCBmYU1pbnVzLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZvY3VzT25EcmFnIH0gZnJvbSAnQC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBXaW5kb3c6IEZDPFBhcnRpYWw8QXBwPiAmIEFwcENvbXBvbmVudD4gPSAoe1xuICBjaGlsZHJlbixcbiAgaWNvbixcbiAgbmFtZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25DbG9zZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICB1cGRhdGVQb3NpdGlvbixcbiAgdXBkYXRlU2l6ZSxcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBoaWRlU2Nyb2xsYmFycyxcbiAgdGFiSW5kZXgsXG4gIHpJbmRleCxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgeCA9IDAsXG4gIHkgPSAwLFxuICBmb3JlZ3JvdW5kXG59KSA9PiB7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIGNvbnNvbGUubG9nKCdoaScsIGZvcmVncm91bmQsIGhlaWdodCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGknLCBmb3JlZ3JvdW5kKTtcbiAgICB3aW5kb3dSZWY/LmN1cnJlbnQ/LnJlc2l6YWJsZUVsZW1lbnQ/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtcbiAgICBmb3JlZ3JvdW5kLCB3aW5kb3dSZWZcbiAgXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpKVxuXG4gIC8vIEFsc28gZm9jdXMgaWYgZm9yZWdyb3VuZCBiZWNvbWVzIHRydWU/IEhvdyB0byBrbm93LiBHZW5lcmFsaXplIHRoZSBmb2N1cyBmdW5jXG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxSbmRcbiAgICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3d9XG4gICAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJoYW5kbGVcIlxuICAgICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgICAgYm91bmRzPVwibWFpblwiXG4gICAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCAyNTAsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoIHx8IDMwMCxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfX1cbiAgICAgICAgbWluSGVpZ2h0PXsyMDB9XG4gICAgICAgIG1pbldpZHRoPXsyMDB9XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICAgIG9uUmVzaXplU3RvcD17dXBkYXRlU2l6ZX1cbiAgICAgICAgcmVmPXt3aW5kb3dSZWZ9XG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXggfX1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoYW5kbGVcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aW1nIGFsdD17bmFtZX0gc3JjPXtpY29ufSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNhbmNlbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmNsb3NlfSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRpbWVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWluaW1pemV9IG9uQ2xpY2s9e29uTWluaW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTWludXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5tYXhpbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXJ0aWNsZSBzdHlsZT17eyBvdmVyZmxvdzogaGlkZVNjcm9sbGJhcnMgPyAnaGlkZGVuJyA6ICdhdXRvJyB9fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvUm5kPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Window.tsx\n");

/***/ })

})