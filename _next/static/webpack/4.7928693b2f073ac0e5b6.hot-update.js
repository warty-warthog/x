webpackHotUpdate_N_E(4,{

/***/ "./components/System/Windows/Window.tsx":
/*!**********************************************!*\
  !*** ./components/System/Windows/Window.tsx ***!
  \**********************************************/
/*! exports provided: Window, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // TODO: This seems messy Partial<App> & AppComponent\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      bgColor = _ref.bgColor,\n      onMaximize = _ref.onMaximize,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground,\n      minimized = _ref.minimized,\n      maximized = _ref.maximized;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n  }, [windowRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (foreground) {\n      Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n    }\n  }, [foreground, windowRef]);\n  return __jsx(\"article\", {\n    style: {\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: \"\".concat(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window, \" \").concat(maximized ? _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximized : ''),\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 300,\n    tabIndex: 0,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    disableDragging: maximized,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"\".concat(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titlebar, \" handle\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }), __jsx(\"figcaption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }, name))), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    onClick: onMaximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    style: {\n      backgroundColor: bgColor,\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"ong+RCvojcCRnIJWHZ6k9VKXwwU=\");\n\n_c = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3cudHN4P2UxMGQiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJpY29uIiwibmFtZSIsImJnQ29sb3IiLCJvbk1heGltaXplIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwidXBkYXRlUG9zaXRpb24iLCJ1cGRhdGVTaXplIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJ6SW5kZXgiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiZm9yZWdyb3VuZCIsIm1pbmltaXplZCIsIm1heGltaXplZCIsIndpbmRvd1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiIsInZpc2liaWxpdHkiLCJzdHlsZXMiLCJ3aW5kb3ciLCJmb2N1c09uRHJhZyIsInRpdGxlYmFyIiwiY2xvc2UiLCJmYVRpbWVzIiwibWluaW1pemUiLCJmYU1pbnVzIiwibWF4aW1pemUiLCJmYVBsdXMiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEsTUFBdUMsR0FBRyxTQUExQ0EsTUFBMEMsT0FzQmpEO0FBQUE7O0FBQUEsTUFyQkpDLFFBcUJJLFFBckJKQSxRQXFCSTtBQUFBLE1BcEJKQyxJQW9CSSxRQXBCSkEsSUFvQkk7QUFBQSxNQW5CSkMsSUFtQkksUUFuQkpBLElBbUJJO0FBQUEsTUFsQkpDLE9Ba0JJLFFBbEJKQSxPQWtCSTtBQUFBLE1BakJKQyxVQWlCSSxRQWpCSkEsVUFpQkk7QUFBQSxNQWhCSkMsVUFnQkksUUFoQkpBLFVBZ0JJO0FBQUEsTUFmSkMsT0FlSSxRQWZKQSxPQWVJO0FBQUEsTUFkSkMsT0FjSSxRQWRKQSxPQWNJO0FBQUEsTUFi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QjtBQUEwQixXQUFPLEVBQUV4QixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFeUIseUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxNQUFFLEVBQUVMLHdFQUFNLENBQUNNLFFBQW5CO0FBQTZCLFdBQU8sRUFBRTNCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUU0Qix5RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRVAsd0VBQU0sQ0FBQ1EsUUFBbkI7QUFBNkIsV0FBTyxFQUFFOUIsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRStCLHdFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQVBGLENBeEJGLEVBMkNFO0FBQ0UsYUFBUyxFQUFFVCx3RUFBTSxDQUFDVSxPQURwQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFbEMsT0FEWjtBQUVMbUMsY0FBUSxFQUFFMUIsY0FBYyxHQUFHLFFBQUgsR0FBYztBQUZqQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR1osUUFQSCxDQTNDRixDQUxGLENBREY7QUE2REQsQ0E3Rk07O0dBQU1ELE07O0tBQUFBLE07QUErRkVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0AvY29udGV4dHMvQXBwJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhUGx1cywgZmFNaW51cywgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmb2N1c09uRHJhZywgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5cbi8vIFRPRE86IFRoaXMgc2VlbXMgbWVzc3kgUGFydGlhbDxBcHA+ICYgQXBwQ29tcG9uZW50XG5leHBvcnQgY29uc3QgV2luZG93OiBGQzxQYXJ0aWFsPEFwcD4gJiBBcHBDb21wb25lbnQ+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGljb24sXG4gIG5hbWUsXG4gIGJnQ29sb3IsXG4gIG9uTWF4aW1pemUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHVwZGF0ZVNpemUsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgaGlkZVNjcm9sbGJhcnMsXG4gIHpJbmRleCxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgeCA9IDAsXG4gIHkgPSAwLFxuICBmb3JlZ3JvdW5kLFxuICBtaW5pbWl6ZWQsXG4gIG1heGltaXplZFxufSkgPT4ge1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gZm9jdXNSZXNpemFibGVFbGVtZW50UmVmKHdpbmRvd1JlZiksIFt3aW5kb3dSZWZdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9yZWdyb3VuZCkge1xuICAgICAgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmKHdpbmRvd1JlZik7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZCwgd2luZG93UmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdmlzaWJpbGl0eTogbWluaW1pemVkID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJuZFxuICAgICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17ZmFsc2V9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLndpbmRvd30gJHttYXhpbWl6ZWQgPyBzdHlsZXMubWF4aW1pemVkIDogJyd9YH1cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICAgIGNhbmNlbD1cIi5jYW5jZWxcIlxuICAgICAgICBkZWZhdWx0PXt7XG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgMjUwLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCB8fCAzMDAsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5XG4gICAgICAgIH19XG4gICAgICAgIG1pbkhlaWdodD17MjAwfVxuICAgICAgICBtaW5XaWR0aD17MzAwfVxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICAgIG9uUmVzaXplU3RvcD17dXBkYXRlU2l6ZX1cbiAgICAgICAgZGlzYWJsZURyYWdnaW5nPXttYXhpbWl6ZWR9XG4gICAgICAgIHJlZj17d2luZG93UmVmfVxuICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgICA+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGl0bGViYXJ9IGhhbmRsZWB9PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PXtuYW1lfSBzcmM9e2ljb259IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntuYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUaW1lc30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1pbmltaXplfSBvbkNsaWNrPXtvbk1pbmltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYU1pbnVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWF4aW1pemV9IG9uQ2xpY2s9e29uTWF4aW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGx1c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGVcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZVNjcm9sbGJhcnMgPyAnaGlkZGVuJyA6ICdhdXRvJ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvUm5kPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Windows/Window.tsx\n");

/***/ })

})