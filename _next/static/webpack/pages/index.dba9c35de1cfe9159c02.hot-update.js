webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Window.tsx":
/*!**************************************!*\
  !*** ./components/System/Window.tsx ***!
  \**************************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./utils/utils.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground,\n      minimized = _ref.minimized;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n  }, [windowRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (foreground) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n    }\n  }, [foreground]);\n  return __jsx(\"article\", {\n    style: {\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    bounds: \"main\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 300,\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }), __jsx(\"figcaption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, name))), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"ong+RCvojcCRnIJWHZ6k9VKXwwU=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeD84ODZkIl0sIm5hbWVzIjpbIldpbmRvdyIsImNoaWxkcmVuIiwiaWNvbiIsIm5hbWUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInRhYkluZGV4IiwiekluZGV4IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImZvcmVncm91bmQiLCJtaW5pbWl6ZWQiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJ2aXNpYmlsaXR5Iiwic3R5bGVzIiwid2luZG93IiwiZm9jdXNPbkRyYWciLCJjbG9zZSIsImZhVGltZXMiLCJtaW5pbWl6ZSIsImZhTWludXMiLCJtYXhpbWl6ZSIsImZhUGx1cyIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsTUFBdUMsR0FBRyxTQUExQ0EsTUFBMEMsT0FvQmpEO0FBQUE7O0FBQUEsTUFuQkpDLFFBbUJJLFFBbkJKQSxRQW1CSTtBQUFBLE1BbEJKQyxJQWtCSSxRQWxCSkEsSUFrQkk7QUFBQSxNQWpCSkMsSUFpQkksUUFqQkpBLElBaUJJO0FBQUEsTUFoQkpDLFVBZ0JJLFFBaEJKQSxVQWdCSTtBQUFBLE1BZkpDLE9BZUksUUFmSkEsT0FlSTtBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYkpDLE1BYUksUUFiSkEsTUFhSTtBQUFBLE1BWkpDLGNBWUksUUFaSkEsY0FZSTtBQUFBLE1BWEpDLFVBV0ksUUFYSkEsVUFXSTtBQUFBLE1BVkpDLGVBVUksUUFWSkEsZUFVSTtBQUFBLE1BVEpDLGNBU0ksUUFUSkEsY0FTSTtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLE1BT0ksUUFQSkEsTUFPSTtBQUFBLE1BTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLG9CQUpKQyxDQUlJO0FBQUEsTUFKSkEsQ0FJSSx1QkFKQSxDQUlBO0FBQUEsb0JBSEpDLENBR0k7QUFBQSxNQUhKQSxDQUdJLHVCQUhBLENBR0E7QUFBQSxNQUZKQyxVQUVJLFFBRkpBLFVBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQU0sSUFBTixDQUF4QjtBQUVBQyx5REFBUyxDQUFDO0FBQUEsV0FBTUMsdUVBQXdCLENBQUNILFNBQUQsQ0FBOUI7QUFBQSxHQUFELEVBQTRDLENBQUNBLFNBQUQsQ0FBNUMsQ0FBVDtBQUNBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixVQUFKLEVBQWdCO0FBQ2RLLDZFQUF3QixDQUFDSCxTQUFELENBQXhCO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0YsVUFBRCxDQUpNLENBQVQ7QUFNQSxTQUNFO0FBQVMsU0FBSyxFQUFFO0FBQUVNLGdCQUFVLEVBQUVMLFNBQVMsR0FBRyxRQUFILEdBQWM7QUFBckMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSx3QkFBb0IsRUFBRSxLQUR4QjtBQUVFLGFBQVMsRUFBRU0sd0VBQU0sQ0FBQ0MsTUFGcEI7QUFHRSx1QkFBbUIsRUFBQyxRQUh0QjtBQUlFLFVBQU0sRUFBQyxTQUpUO0FBS0UsVUFBTSxFQUFDLE1BTFQ7QUFNRSxlQUFTO0FBQ1BaLFlBQU0sRUFBRUEsTUFBTSxJQUFJLEdBRFg7QUFFUEMsV0FBSyxFQUFFQSxLQUFLLElBQUksR0FGVDtBQUdQQyxPQUFDLEVBQURBLENBSE87QUFJUEMsT0FBQyxFQUFEQTtBQUpPLEtBTlg7QUFZRSxhQUFTLEVBQUUsR0FaYjtBQWFFLFlBQVEsRUFBRSxHQWJaO0FBY0UsWUFBUSxFQUFFTCxRQWRaO0FBZUUsV0FBTyxFQUFFTixPQWZYO0FBZ0JFLFVBQU0sRUFBRUMsTUFoQlY7QUFpQkUsZUFBVyxFQUFFb0Isa0RBakJmO0FBa0JFLGNBQVUsRUFBRW5CLGNBbEJkO0FBbUJFLGdCQUFZLEVBQUVDLFVBbkJoQjtBQW9CRSxPQUFHLEVBQUVXLFNBcEJQO0FBcUJFLG1CQUFlLEVBQUVWLGVBckJuQjtBQXNCRSxTQUFLLEVBQUU7QUFBRUcsWUFBTSxFQUFOQTtBQUFGLEtBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F3QkU7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVWLElBQVY7QUFBZ0IsT0FBRyxFQUFFRCxJQUFyQjtBQUEyQixhQUFTLEVBQUUsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhQyxJQUFiLENBRkYsQ0FERixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUVzQix3RUFBTSxDQUFDRyxLQUFuQjtBQUEwQixXQUFPLEVBQUV2QixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFd0IseUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxNQUFFLEVBQUVKLHdFQUFNLENBQUNLLFFBQW5CO0FBQTZCLFdBQU8sRUFBRTFCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUUyQix5RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRU4sd0VBQU0sQ0FBQ08sUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRUMsd0VBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBUEYsQ0F4QkYsRUEyQ0U7QUFBUyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFdkIsY0FBYyxHQUFHLFFBQUgsR0FBYztBQUF4QyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLFFBREgsQ0EzQ0YsQ0FERixDQURGO0FBbURELENBakZNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMsIGZhTWludXMsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZm9jdXNPbkRyYWcsIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiB9IGZyb20gJ0AvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgV2luZG93OiBGQzxQYXJ0aWFsPEFwcD4gJiBBcHBDb21wb25lbnQ+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGljb24sXG4gIG5hbWUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHVwZGF0ZVNpemUsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgaGlkZVNjcm9sbGJhcnMsXG4gIHRhYkluZGV4LFxuICB6SW5kZXgsXG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIHggPSAwLFxuICB5ID0gMCxcbiAgZm9yZWdyb3VuZCxcbiAgbWluaW1pemVkXG59KSA9PiB7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYod2luZG93UmVmKSwgW3dpbmRvd1JlZl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmb3JlZ3JvdW5kKSB7XG4gICAgICBmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYod2luZG93UmVmKTtcbiAgICB9XG4gIH0sIFtmb3JlZ3JvdW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBzdHlsZT17eyB2aXNpYmlsaXR5OiBtaW5pbWl6ZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9fT5cbiAgICAgIDxSbmRcbiAgICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3d9XG4gICAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJoYW5kbGVcIlxuICAgICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgICAgYm91bmRzPVwibWFpblwiXG4gICAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCAyNTAsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoIHx8IDMwMCxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfX1cbiAgICAgICAgbWluSGVpZ2h0PXsyMDB9XG4gICAgICAgIG1pbldpZHRoPXszMDB9XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICAgIG9uUmVzaXplU3RvcD17dXBkYXRlU2l6ZX1cbiAgICAgICAgcmVmPXt3aW5kb3dSZWZ9XG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXggfX1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoYW5kbGVcIj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICA8aW1nIGFsdD17bmFtZX0gc3JjPXtpY29ufSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGltZXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5taW5pbWl6ZX0gb25DbGljaz17b25NaW5pbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFNaW51c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1heGltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVBsdXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlIHN0eWxlPXt7IG92ZXJmbG93OiBoaWRlU2Nyb2xsYmFycyA/ICdoaWRkZW4nIDogJ2F1dG8nIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9SbmQ+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Window.tsx\n");

/***/ }),

/***/ "./components/System/Windows.tsx":
/*!***************************************!*\
  !*** ./components/System/Windows.tsx ***!
  \***************************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_System_Window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/Window */ \"./components/System/Window.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./utils/utils.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_3__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApp = _useContext.updateApp,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1],\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running;\n    return running;\n  }).sort(_utils__WEBPACK_IMPORTED_MODULE_5__[\"sortByLastRunning\"]),\n      onMinimize = function onMinimize(id) {\n    return function () {\n      return updateApp({\n        updates: {\n          foreground: false,\n          minimized: true\n        },\n        id: id\n      });\n    };\n  },\n      onClose = function onClose(id, _ref2) {\n    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n        newForegroundAppId = _ref3[1];\n\n    return function () {\n      if (newForegroundAppId) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"appToFocus\"])(apps, updateApp, newForegroundAppId);\n      }\n\n      updateApp({\n        updates: {\n          running: false,\n          stackOrder: []\n        },\n        id: id\n      });\n    };\n  },\n      onFocus = function onFocus(id) {\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"appToFocus\"])(apps, updateApp, id);\n    };\n  },\n      onBlur = function onBlur(id) {\n    return function () {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"appToUnfocus\"])(apps, updateApp, id);\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: 50,\n      marginLeft: 50\n    });\n  }, []);\n  return __jsx(\"section\", {\n    style: windowMargins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref4, index) {\n    var App = _ref4.component,\n        id = _ref4.id,\n        icon = _ref4.icon,\n        name = _ref4.name,\n        windowed = _ref4.windowed,\n        minimized = _ref4.minimized,\n        foreground = _ref4.foreground,\n        lockAspectRatio = _ref4.lockAspectRatio,\n        hideScrollbars = _ref4.hideScrollbars,\n        stackOrder = _ref4.stackOrder,\n        height = _ref4.height,\n        width = _ref4.width,\n        x = _ref4.x,\n        y = _ref4.y;\n    var cascadeSpacing = index * 20 || 0,\n        appOptions = {\n      onMinimize: onMinimize(id),\n      onClose: onClose(id, stackOrder),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      updatePosition: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"updatePosition\"])(updateApp, id),\n      updateSize: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"updateSize\"])(updateApp, id),\n      tabIndex: apps.length + activeApps.length + index,\n      zIndex: 1750 + (activeApps.length - (stackOrder.indexOf(id) + 1)),\n      foreground: foreground,\n      minimized: minimized,\n      height: height,\n      width: width,\n      x: x || cascadeSpacing,\n      y: y || cascadeSpacing\n    };\n    return windowed ? __jsx(_components_System_Window__WEBPACK_IMPORTED_MODULE_4__[\"Window\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id,\n      icon: icon,\n      name: name,\n      lockAspectRatio: lockAspectRatio,\n      hideScrollbars: hideScrollbars\n    }, appOptions, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }\n    }), __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 15\n      }\n    })) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, appOptions, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }\n    }));\n  }));\n};\n\n_s(Windows, \"hGesWj9oaFB0Tp60aRjuQSW3Kpo=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy50c3g/ZGEwNyJdLCJuYW1lcyI6WyJXaW5kb3dzIiwidXNlQ29udGV4dCIsIkFwcHNDb250ZXh0IiwiYXBwcyIsInVwZGF0ZUFwcCIsInVzZVN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpbmRvd01hcmdpbnMiLCJzZXRXaW5kb3dNYXJnaW5zIiwiYWN0aXZlQXBwcyIsImZpbHRlciIsInJ1bm5pbmciLCJzb3J0Iiwic29ydEJ5TGFzdFJ1bm5pbmciLCJvbk1pbmltaXplIiwiaWQiLCJ1cGRhdGVzIiwiZm9yZWdyb3VuZCIsIm1pbmltaXplZCIsIm9uQ2xvc2UiLCJuZXdGb3JlZ3JvdW5kQXBwSWQiLCJhcHBUb0ZvY3VzIiwic3RhY2tPcmRlciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJhcHBUb1VuZm9jdXMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJpbmRleCIsIkFwcCIsImNvbXBvbmVudCIsImljb24iLCJuYW1lIiwid2luZG93ZWQiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJjYXNjYWRlU3BhY2luZyIsImFwcE9wdGlvbnMiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJ0YWJJbmRleCIsImxlbmd0aCIsInpJbmRleCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sSUFBTUEsT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNIQyx3REFBVSxDQUFDQywwREFBRCxDQURQO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxTQURpQixlQUNqQkEsU0FEaUI7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQztBQUMzQ0MsYUFBUyxFQUFFLENBRGdDO0FBRTNDQyxjQUFVLEVBQUU7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ZW0vV2luZG93cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0FwcHMnO1xuaW1wb3J0IHsgV2luZG93IH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3cnO1xuaW1wb3J0IHtcbiAgYXBwVG9Gb2N1cyxcbiAgYXBwVG9VbmZvY3VzLFxuICBzb3J0QnlMYXN0UnVubmluZyxcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHVwZGF0ZVNpemVcbn0gZnJvbSAnQC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBXaW5kb3dzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhcHBzLCB1cGRhdGVBcHAgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KSxcbiAgICBhY3RpdmVBcHBzID0gYXBwc1xuICAgICAgLmZpbHRlcigoeyBydW5uaW5nIH0pID0+IHJ1bm5pbmcpXG4gICAgICAuc29ydChzb3J0QnlMYXN0UnVubmluZyksXG4gICAgb25NaW5pbWl6ZSA9IChpZDogc3RyaW5nKSA9PiAoKSA9PlxuICAgICAgdXBkYXRlQXBwKHsgdXBkYXRlczogeyBmb3JlZ3JvdW5kOiBmYWxzZSwgbWluaW1pemVkOiB0cnVlIH0sIGlkIH0pLFxuICAgIG9uQ2xvc2UgPSAoaWQ6IHN0cmluZywgWywgbmV3Rm9yZWdyb3VuZEFwcElkXTogQXJyYXk8c3RyaW5nPikgPT4gKCkgPT4ge1xuICAgICAgaWYgKG5ld0ZvcmVncm91bmRBcHBJZCkge1xuICAgICAgICBhcHBUb0ZvY3VzKGFwcHMsIHVwZGF0ZUFwcCwgbmV3Rm9yZWdyb3VuZEFwcElkKTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlQXBwKHsgdXBkYXRlczogeyBydW5uaW5nOiBmYWxzZSwgc3RhY2tPcmRlcjogW10gfSwgaWQgfSk7XG4gICAgfSxcbiAgICBvbkZvY3VzID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IGFwcFRvRm9jdXMoYXBwcywgdXBkYXRlQXBwLCBpZCksXG4gICAgb25CbHVyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IGFwcFRvVW5mb2N1cyhhcHBzLCB1cGRhdGVBcHAsIGlkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd01hcmdpbnMoe1xuICAgICAgbWFyZ2luVG9wOiA1MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDUwXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN0eWxlPXt3aW5kb3dNYXJnaW5zfT5cbiAgICAgIHthY3RpdmVBcHBzLm1hcChcbiAgICAgICAgKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHdpbmRvd2VkLFxuICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgZm9yZWdyb3VuZCxcbiAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgc3RhY2tPcmRlcixcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhc2NhZGVTcGFjaW5nID0gaW5kZXggKiAyMCB8fCAwLFxuICAgICAgICAgICAgYXBwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgb25NaW5pbWl6ZTogb25NaW5pbWl6ZShpZCksXG4gICAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UoaWQsIHN0YWNrT3JkZXIpLFxuICAgICAgICAgICAgICBvbkZvY3VzOiBvbkZvY3VzKGlkKSxcbiAgICAgICAgICAgICAgb25CbHVyOiBvbkJsdXIoaWQpLFxuICAgICAgICAgICAgICB1cGRhdGVQb3NpdGlvbjogdXBkYXRlUG9zaXRpb24odXBkYXRlQXBwLCBpZCksXG4gICAgICAgICAgICAgIHVwZGF0ZVNpemU6IHVwZGF0ZVNpemUodXBkYXRlQXBwLCBpZCksXG4gICAgICAgICAgICAgIHRhYkluZGV4OiBhcHBzLmxlbmd0aCArIGFjdGl2ZUFwcHMubGVuZ3RoICsgaW5kZXgsXG4gICAgICAgICAgICAgIHpJbmRleDogMTc1MCArIChhY3RpdmVBcHBzLmxlbmd0aCAtIChzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpLFxuICAgICAgICAgICAgICBmb3JlZ3JvdW5kLFxuICAgICAgICAgICAgICBtaW5pbWl6ZWQsXG4gICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgIHg6IHggfHwgY2FzY2FkZVNwYWNpbmcsXG4gICAgICAgICAgICAgIHk6IHkgfHwgY2FzY2FkZVNwYWNpbmdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gd2luZG93ZWQgPyAoXG4gICAgICAgICAgICA8V2luZG93XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgICAgICBoaWRlU2Nyb2xsYmFycz17aGlkZVNjcm9sbGJhcnN9XG4gICAgICAgICAgICAgIHsuLi5hcHBPcHRpb25zfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1dpbmRvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFwcCBrZXk9e2lkfSB7Li4uYXBwT3B0aW9uc30gLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Windows.tsx\n");

/***/ })

})