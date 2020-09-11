webpackHotUpdate_N_E(4,{

/***/ "./components/System/Windows/Window.tsx":
/*!**********************************************!*\
  !*** ./components/System/Windows/Window.tsx ***!
  \**********************************************/
/*! exports provided: Window, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Window.module.scss */ \"./styles/System/Window.module.scss\");\n/* harmony import */ var _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // TODO: This seems messy Partial<App> & AppComponent\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      icon = _ref.icon,\n      name = _ref.name,\n      bgColor = _ref.bgColor,\n      onMaximize = _ref.onMaximize,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      zIndex = _ref.zIndex,\n      height = _ref.height,\n      width = _ref.width,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      foreground = _ref.foreground,\n      minimized = _ref.minimized,\n      maximized = _ref.maximized;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n  }, [windowRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (foreground) {\n      Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(windowRef);\n    }\n  }, [foreground, windowRef]);\n  return __jsx(\"article\", {\n    style: {\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: \"\".concat(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window, \" \").concat(maximized ? _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximized : ''),\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    \"default\": {\n      height: height || 250,\n      width: width || 300,\n      x: x,\n      y: y\n    },\n    minHeight: 200,\n    minWidth: 300,\n    tabIndex: 0,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    disableDragging: maximized,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"\".concat(_styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titlebar, \" handle\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    alt: name,\n    src: icon,\n    draggable: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }), __jsx(\"figcaption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 15\n    }\n  }, name))), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    onClick: onMaximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    className: _styles_System_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    style: {\n      backgroundColor: bgColor,\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"ong+RCvojcCRnIJWHZ6k9VKXwwU=\");\n\n_c = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3cudHN4P2UxMGQiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJpY29uIiwibmFtZSIsImJnQ29sb3IiLCJvbk1heGltaXplIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwidXBkYXRlUG9zaXRpb24iLCJ1cGRhdGVTaXplIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJ6SW5kZXgiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiZm9yZWdyb3VuZCIsIm1pbmltaXplZCIsIm1heGltaXplZCIsIndpbmRvd1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiIsInZpc2liaWxpdHkiLCJzdHlsZXMiLCJ3aW5kb3ciLCJmb2N1c09uRHJhZyIsInRpdGxlYmFyIiwiY2xvc2UiLCJmYVRpbWVzIiwibWluaW1pemUiLCJmYU1pbnVzIiwibWF4aW1pemUiLCJmYVBsdXMiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEsTUFBdUMsR0FBRyxTQUExQ0EsTUFBMEMsT0FzQmpEO0FBQUE7O0FBQUEsTUFyQkpDLFFBcUJJLFFBckJKQSxRQXFCSTtBQUFBLE1BcEJKQyxJQW9CSSxRQXBCSkEsSUFvQkk7QUFBQSxNQW5CSkMsSUFtQkksUUFuQkpBLElBbUJJO0FBQUEsTUFsQkpDLE9Ba0JJLFFBbEJKQSxPQWtCSTtBQUFBLE1BakJKQyxVQWlCSSxRQWpCSkEsVUFpQkk7QUFBQSxNQWhCSkMsVUFnQkksUUFoQkpBLFVBZ0JJO0FBQUEsTUFmSkMsT0FlSSxRQWZKQSxPQWVJO0FBQUEsTUFkSkMsT0FjSSxRQWRKQSxPQWNJO0FBQUEsTUFi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bkI7QUFBMEIsV0FBTyxFQUFFeEIsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRXlCLHlFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQVEsTUFBRSxFQUFFTCx3RUFBTSxDQUFDTSxRQUFuQjtBQUE2QixXQUFPLEVBQUUzQixVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFNEIseUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBUSxNQUFFLEVBQUVQLHdFQUFNLENBQUNRLFFBQW5CO0FBQTZCLFdBQU8sRUFBRTlCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUUrQix3RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FQRixDQXhCRixFQTJDRTtBQUNFLGFBQVMsRUFBRVQsd0VBQU0sQ0FBQ1UsT0FEcEI7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRWxDLE9BRFo7QUFFTG1DLGNBQVEsRUFBRTFCLGNBQWMsR0FBRyxRQUFILEdBQWM7QUFGakMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0daLFFBUEgsQ0EzQ0YsQ0FIRixDQURGO0FBMkRELENBM0ZNOztHQUFNRCxNOztLQUFBQSxNO0FBNkZFQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd3MvV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMsIGZhTWludXMsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZm9jdXNPbkRyYWcsIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuXG4vLyBUT0RPOiBUaGlzIHNlZW1zIG1lc3N5IFBhcnRpYWw8QXBwPiAmIEFwcENvbXBvbmVudFxuZXhwb3J0IGNvbnN0IFdpbmRvdzogRkM8UGFydGlhbDxBcHA+ICYgQXBwQ29tcG9uZW50PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBpY29uLFxuICBuYW1lLFxuICBiZ0NvbG9yLFxuICBvbk1heGltaXplLFxuICBvbk1pbmltaXplLFxuICBvbkNsb3NlLFxuICBvbkZvY3VzLFxuICBvbkJsdXIsXG4gIHVwZGF0ZVBvc2l0aW9uLFxuICB1cGRhdGVTaXplLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIGhpZGVTY3JvbGxiYXJzLFxuICB6SW5kZXgsXG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIHggPSAwLFxuICB5ID0gMCxcbiAgZm9yZWdyb3VuZCxcbiAgbWluaW1pemVkLFxuICBtYXhpbWl6ZWRcbn0pID0+IHtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPFJuZD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZih3aW5kb3dSZWYpLCBbd2luZG93UmVmXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcmVncm91bmQpIHtcbiAgICAgIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZih3aW5kb3dSZWYpO1xuICAgIH1cbiAgfSwgW2ZvcmVncm91bmQsIHdpbmRvd1JlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgc3R5bGU9e3tcbiAgICAgIHZpc2liaWxpdHk6IG1pbmltaXplZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXG4gICAgfX0+XG4gICAgICA8Um5kXG4gICAgICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrPXtmYWxzZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMud2luZG93fSAke21heGltaXplZCA/IHN0eWxlcy5tYXhpbWl6ZWQgOiAnJ31gfVxuICAgICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiaGFuZGxlXCJcbiAgICAgICAgY2FuY2VsPVwiLmNhbmNlbFwiXG4gICAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCAyNTAsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoIHx8IDMwMCxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfX1cbiAgICAgICAgbWluSGVpZ2h0PXsyMDB9XG4gICAgICAgIG1pbldpZHRoPXszMDB9XG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25EcmFnU3RhcnQ9e2ZvY3VzT25EcmFnfVxuICAgICAgICBvbkRyYWdTdG9wPXt1cGRhdGVQb3NpdGlvbn1cbiAgICAgICAgb25SZXNpemVTdG9wPXt1cGRhdGVTaXplfVxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc9e21heGltaXplZH1cbiAgICAgICAgcmVmPXt3aW5kb3dSZWZ9XG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXggfX1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlcy50aXRsZWJhcn0gaGFuZGxlYH0+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9e25hbWV9IHNyYz17aWNvbn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+e25hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNhbmNlbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmNsb3NlfSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVRpbWVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWluaW1pemV9IG9uQ2xpY2s9e29uTWluaW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhTWludXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5tYXhpbWl6ZX0gb25DbGljaz17b25NYXhpbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFQbHVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRlU2Nyb2xsYmFycyA/ICdoaWRkZW4nIDogJ2F1dG8nXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9SbmQ+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Windows/Window.tsx\n");

/***/ })

})