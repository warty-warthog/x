webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Window.tsx":
/*!**************************************!*\
  !*** ./components/System/Window.tsx ***!
  \**************************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./utils/utils.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  console.log('Window', foreground, height);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    // console.log('useEffect', height);\n    windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, [foreground, windowRef // \n  ]); // useEffect(())\n  // Also focus if foreground becomes true? How to know. Generalize the focus func\n\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    bounds: \"main\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 200,\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }), name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeD84ODZkIl0sIm5hbWVzIjpbIldpbmRvdyIsImNoaWxkcmVuIiwiaWNvbiIsIm5hbWUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInRhYkluZGV4IiwiekluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImZvcmVncm91bmQiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInJlc2l6YWJsZUVsZW1lbnQiLCJmb2N1cyIsInN0eWxlcyIsIndpbmRvdyIsImZvY3VzT25EcmFnIiwiY2xvc2UiLCJmYVRpbWVzIiwibWluaW1pemUiLCJmYU1pbnVzIiwibWF4aW1pemUiLCJmYVBsdXMiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE1BQXVDLEdBQUcsU0FBMUNBLE1BQTBDLE9BbUJqRDtBQUFBOztBQUFBLE1BbEJKQyxRQWtCSSxRQWxCSkEsUUFrQkk7QUFBQSxNQWpCSkMsSUFpQkksUUFqQkpBLElBaUJJO0FBQUEsTUFoQkpDLElBZ0JJLFFBaEJKQSxJQWdCSTtBQUFBLE1BZkpDLFVBZUksUUFmSkEsVUFlSTtBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYkpDLE9BYUksUUFiSkEsT0FhSTtBQUFBLE1BWkpDLE1BWUksUUFaSkEsTUFZSTtBQUFBLE1BWEpDLGNBV0ksUUFYSkEsY0FXSTtBQUFBLE1BVkpDLFVBVUksUUFWSkEsVUFVSTtBQUFBLE1BVEpDLGVBU0ksUUFUSkEsZUFTSTtBQUFBLE1BUkpDLGNBUUksUUFSSkEsY0FRSTtBQUFBLE1BUEpD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRU4sd0VBQU0sQ0FBQ08sUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRUMsd0VBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBTEYsQ0F4QkYsRUF5Q0U7QUFBUyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFekIsY0FBYyxHQUFHLFFBQUgsR0FBYztBQUF4QyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLFFBREgsQ0F6Q0YsQ0FERixDQURGO0FBaURELENBcEZNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMsIGZhTWludXMsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZm9jdXNPbkRyYWcgfSBmcm9tICdAL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IFdpbmRvdzogRkM8UGFydGlhbDxBcHA+ICYgQXBwQ29tcG9uZW50PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBpY29uLFxuICBuYW1lLFxuICBvbk1pbmltaXplLFxuICBvbkNsb3NlLFxuICBvbkZvY3VzLFxuICBvbkJsdXIsXG4gIHVwZGF0ZVBvc2l0aW9uLFxuICB1cGRhdGVTaXplLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIGhpZGVTY3JvbGxiYXJzLFxuICB0YWJJbmRleCxcbiAgekluZGV4LFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICB4ID0gMCxcbiAgeSA9IDAsXG4gIGZvcmVncm91bmRcbn0pID0+IHtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPFJuZD4obnVsbCk7XG5cbiAgY29uc29sZS5sb2coJ1dpbmRvdycsIGZvcmVncm91bmQsIGhlaWdodCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygndXNlRWZmZWN0JywgaGVpZ2h0KTtcbiAgICB3aW5kb3dSZWY/LmN1cnJlbnQ/LnJlc2l6YWJsZUVsZW1lbnQ/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtcbiAgICBmb3JlZ3JvdW5kLCB3aW5kb3dSZWYgLy8gXG4gIF0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSlcblxuICAvLyBBbHNvIGZvY3VzIGlmIGZvcmVncm91bmQgYmVjb21lcyB0cnVlPyBIb3cgdG8ga25vdy4gR2VuZXJhbGl6ZSB0aGUgZm9jdXMgZnVuY1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8Um5kXG4gICAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2luZG93fVxuICAgICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiaGFuZGxlXCJcbiAgICAgICAgY2FuY2VsPVwiLmNhbmNlbFwiXG4gICAgICAgIGJvdW5kcz1cIm1haW5cIlxuICAgICAgICBkZWZhdWx0PXt7XG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgMjUwLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCB8fCAzMDAsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5XG4gICAgICAgIH19XG4gICAgICAgIG1pbkhlaWdodD17MjAwfVxuICAgICAgICBtaW5XaWR0aD17MjAwfVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICBvbkRyYWdTdGFydD17Zm9jdXNPbkRyYWd9XG4gICAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgICBvblJlc2l6ZVN0b3A9e3VwZGF0ZVNpemV9XG4gICAgICAgIHJlZj17d2luZG93UmVmfVxuICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgICA+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGFuZGxlXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGltZyBhbHQ9e25hbWV9IHNyYz17aWNvbn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUaW1lc30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1pbmltaXplfSBvbkNsaWNrPXtvbk1pbmltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYU1pbnVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWF4aW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGx1c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGUgc3R5bGU9e3sgb3ZlcmZsb3c6IGhpZGVTY3JvbGxiYXJzID8gJ2hpZGRlbicgOiAnYXV0bycgfX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L1JuZD5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Window.tsx\n");

/***/ })

})