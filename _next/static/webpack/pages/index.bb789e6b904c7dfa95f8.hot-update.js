webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resources_AppsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/AppsProvider */ \"./resources/AppsProvider.tsx\");\n/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Agent */ \"./components/Agent.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n // TODO: Icons are in front of window during animation\n// TODO: Each window can have it's own defaults\n\nvar DEFAULT_WINDOW_DIMENSION = 350,\n    MIN_WINDOW_DIMENSION = 200;\n\nvar AnimatedFontAwesomeIcon = function AnimatedFontAwesomeIcon(_ref) {\n  var icon = _ref.icon;\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    whileHover: {\n      scale: 1.1\n    },\n    whileTap: {\n      scale: 1.05\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = AnimatedFontAwesomeIcon;\nfunction Window(_ref2) {\n  _s();\n\n  var children = _ref2.children,\n      id = _ref2.id,\n      title = _ref2.title;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Agent__WEBPACK_IMPORTED_MODULE_3__[\"AgentContext\"]),\n      agent = _useContext.agent,\n      _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_resources_AppsProvider__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      _useContext2$apps = _useContext2.apps,\n      apps = _useContext2$apps === void 0 ? {} : _useContext2$apps,\n      _useContext2$updateAp = _useContext2.updateApp,\n      updateApp = _useContext2$updateAp === void 0 ? function () {} : _useContext2$updateAp,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      height = _useState[0],\n      setHeight = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      width = _useState2[0],\n      setWidth = _useState2[1],\n      onResizeStop = function onResizeStop(_e, _dir, elementRef) {\n    setHeight(Number(elementRef.style.height));\n    setWidth(Number(elementRef.style.width));\n  },\n      onMinimize = function onMinimize() {\n    return updateApp({\n      id: id,\n      minimized: true\n    });\n  },\n      onMaximize = function onMaximize() {\n    return updateApp({\n      id: id,\n      maximized: !apps[id].maximized\n    });\n  },\n      onClose = function onClose() {\n    updateApp({\n      id: id,\n      opened: false\n    });\n    agent.play('Wave');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // TODO: This needs lots of work, multi window, mobile, etc.\n    // Instead of math.min/max, use the min/max stuff in Rnd, pass this data in from the app data\n    setHeight(window.innerHeight * 0.6);\n    setWidth(window.innerWidth * 0.6);\n  }, []); // TODO: Make action bar more generic\n  // TODO: Fix dragging on mobile\n\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_5__[\"Rnd\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    \"default\": {\n      height: DEFAULT_WINDOW_DIMENSION,\n      width: DEFAULT_WINDOW_DIMENSION,\n      x: 115,\n      y: 40\n    },\n    bounds: \"body\",\n    cancel: \".cancel\",\n    dragHandleClassName: \"handle\",\n    enableUserSelectHack: false,\n    minHeight: MIN_WINDOW_DIMENSION,\n    minWidth: MIN_WINDOW_DIMENSION,\n    onResizeStop: onResizeStop,\n    resizeHandleStyles: {\n      bottom: {\n        cursor: 'ns-resize'\n      },\n      bottomLeft: {\n        cursor: 'nesw-resize'\n      },\n      bottomRight: {\n        cursor: 'nwse-resize'\n      },\n      left: {\n        cursor: 'ew-resize'\n      },\n      right: {\n        cursor: 'ew-resize'\n      },\n      top: {\n        cursor: 'ns-resize'\n      },\n      topLeft: {\n        cursor: 'nwse-resize'\n      },\n      topRight: {\n        cursor: 'nesw-resize'\n      }\n    },\n    size: {\n      width: width,\n      height: height\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title_bar, \" handle\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faMinusCircle\"],\n    onClick: onMinimize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faPlusCircle\"],\n    onClick: onMaximize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faTimesCircle\"],\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.action_bar, \" handle\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(AnimatedFontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faArrowLeft\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }), __jsx(AnimatedFontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faArrowRight\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }), __jsx(AnimatedFontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faHome\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }), __jsx(AnimatedFontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faComments\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.search, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faSearch\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"Search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }), \" \")), __jsx(\"div\", {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, children));\n}\n\n_s(Window, \"djEhJP7957oaFyzU0VuQbnpevec=\");\n\n_c2 = Window;\n;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AnimatedFontAwesomeIcon\");\n$RefreshReg$(_c2, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiREVGQVVMVF9XSU5ET1dfRElNRU5TSU9OIiwiTUlOX1dJTkRPV19ESU1FTlNJT04iLCJBbmltYXRlZEZvbnRBd2Vzb21lSWNvbiIsImljb24iLCJzY2FsZSIsIldpbmRvdyIsImNoaWxkcmVuIiwiaWQiLCJ0aXRsZSIsInVzZUNvbnRleHQiLCJBZ2VudENvbnRleHQiLCJhZ2VudCIsIkFwcHNDb250ZXh0IiwiYXBwcyIsInVwZGF0ZUFwcCIsInVzZVN0YXRlIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2lkdGgiLCJzZXRXaWR0aCIsIm9uUmVzaXplU3RvcCIsIl9lIiwiX2RpciIsImVsZW1lbnRSZWYiLCJOdW1iZXIiLCJzdHlsZSIsIm9uTWluaW1pemUiLCJtaW5pbWl6ZWQiLCJvbk1heGltaXplIiwibWF4aW1pemVkIiwib25DbG9zZSIsIm9wZW5lZCIsInBsYXkiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzdHlsZXMiLCJ4IiwieSIsImJvdHRvbSIsImN1cnNvciIsImJvdHRvbUxlZnQiLCJib3R0b21SaWdodCIsImxlZnQiLCJyaWdodCIsInRvcCIsInRvcExlZnQiLCJ0b3BSaWdodCIsInRpdGxlX2JhciIsImFjdGlvbnMiLCJtaW5pbWl6ZSIsImZhTWludXNDaXJjbGUiLCJtYXhpbWl6ZSIsImZhUGx1c0NpcmNsZSIsImNsb3NlIiwiZmFUaW1lc0NpcmNsZSIsImFjdGlvbl9iYXIiLCJmYUFycm93TGVmdCIsImZhQXJyb3dSaWdodCIsImZhSG9tZSIsImZhQ29tbWVudHMiLCJzZWFyY2giLCJmYVNlYXJjaCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBT0E7QUFDQTs7QUFDQSxJQUFNQSx3QkFBd0IsR0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBUUU7QUFBSyxhQUFTLFlBQU94QixpRUFBTSxDQUFDeUIsTUFBZCxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBR0MsMEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sZUFBVyxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixNQVJGLENBcENGLEVBa0RFO0FBQUssYUFBUyxFQUFHMUIsaUVBQU0sQ0FBQzJCLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTFELFFBREosQ0FsREYsQ0FERjtBQXdERDs7R0FqRmVELE07O01BQUFBLE07QUFpRmYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlc2l6ZURpcmVjdGlvbiB9IGZyb20gXCJyZS1yZXNpemFibGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJy4uL3Jlc291cmNlcy9BcHBzUHJvdmlkZXInO1xuaW1wb3J0IHsgQWdlbnRDb250ZXh0IH0gZnJvbSBcIi4vQWdlbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge1xuICBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUhvbWUsIGZhQ29tbWVudHMsXG4gIGZhTWludXNDaXJjbGUsIGZhUGx1c0NpcmNsZSwgZmFUaW1lc0NpcmNsZSxcbiAgZmFTZWFyY2hcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLy8gVE9ETzogSWNvbnMgYXJlIGluIGZyb250IG9mIHdpbmRvdyBkdXJpbmcgYW5pbWF0aW9uXG4vLyBUT0RPOiBFYWNoIHdpbmRvdyBjYW4gaGF2ZSBpdCdzIG93biBkZWZhdWx0c1xuY29uc3QgREVGQVVMVF9XSU5ET1dfRElNRU5TSU9OID0gMzUwLFxuICAgICAgTUlOX1dJTkRPV19ESU1FTlNJT04gPSAyMDA7XG5cbmNvbnN0IEFuaW1hdGVkRm9udEF3ZXNvbWVJY29uID0gKHsgaWNvbiB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgd2hpbGVUYXA9e3sgc2NhbGU6IDEuMDUgfX1cbiAgPlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGljb24gfSAvPlxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgdHlwZSBXaW5kb3dUeXBlID0ge1xuICBjaGlsZHJlbjogQXJyYXk8UmVhY3QuUmVhY3ROb2RlPiB8IFJlYWN0LlJlYWN0Tm9kZSB8IHVuZGVmaW5lZCxcbiAgaWQ6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFdpbmRvdyh7IGNoaWxkcmVuLCBpZCwgdGl0bGUgfTogV2luZG93VHlwZSkge1xuICBjb25zdCB7IGFnZW50IH0gPSB1c2VDb250ZXh0KEFnZW50Q29udGV4dCksXG4gICAgeyBhcHBzID0ge30sIHVwZGF0ZUFwcCA9ICgpID0+IHt9IH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCksXG4gICAgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKSxcbiAgICBvblJlc2l6ZVN0b3AgPSAoX2U6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LCBfZGlyOiBSZXNpemVEaXJlY3Rpb24sIGVsZW1lbnRSZWY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICBzZXRIZWlnaHQoTnVtYmVyKGVsZW1lbnRSZWYuc3R5bGUuaGVpZ2h0KSk7XG4gICAgICBzZXRXaWR0aChOdW1iZXIoZWxlbWVudFJlZi5zdHlsZS53aWR0aCkpO1xuICAgIH0sXG4gICAgb25NaW5pbWl6ZSA9ICgpID0+ICh1cGRhdGVBcHAgYXMgRnVuY3Rpb24pKHsgaWQsIG1pbmltaXplZDogdHJ1ZSB9KSxcbiAgICBvbk1heGltaXplID0gKCkgPT4gKHVwZGF0ZUFwcCBhcyBGdW5jdGlvbikoeyBpZCwgbWF4aW1pemVkOiAhYXBwc1tpZF0ubWF4aW1pemVkIH0pLFxuICAgIG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAodXBkYXRlQXBwIGFzIEZ1bmN0aW9uKSh7IGlkLCBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgYWdlbnQucGxheSgnV2F2ZScpO1xuICAgIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIGxvdHMgb2Ygd29yaywgbXVsdGkgd2luZG93LCBtb2JpbGUsIGV0Yy5cbiAgICAvLyBJbnN0ZWFkIG9mIG1hdGgubWluL21heCwgdXNlIHRoZSBtaW4vbWF4IHN0dWZmIGluIFJuZCwgcGFzcyB0aGlzIGRhdGEgaW4gZnJvbSB0aGUgYXBwIGRhdGFcbiAgICBzZXRIZWlnaHQod2luZG93LmlubmVySGVpZ2h0ICogMC42KTtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNik7XG4gIH0sIFtdKTtcblxuICAvLyBUT0RPOiBNYWtlIGFjdGlvbiBiYXIgbW9yZSBnZW5lcmljXG4gIC8vIFRPRE86IEZpeCBkcmFnZ2luZyBvbiBtb2JpbGVcbiAgcmV0dXJuIChcbiAgICA8Um5kXG4gICAgICBjbGFzc05hbWU9eyBzdHlsZXMud2luZG93IH1cbiAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1dJTkRPV19ESU1FTlNJT04sXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1dJTkRPV19ESU1FTlNJT04sXG4gICAgICAgIHg6IDExNSxcbiAgICAgICAgeTogNDBcbiAgICAgIH19XG4gICAgICBib3VuZHM9J2JvZHknXG4gICAgICBjYW5jZWw9Jy5jYW5jZWwnXG4gICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPSdoYW5kbGUnXG4gICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17IGZhbHNlIH1cbiAgICAgIG1pbkhlaWdodD17IE1JTl9XSU5ET1dfRElNRU5TSU9OIH1cbiAgICAgIG1pbldpZHRoPXsgTUlOX1dJTkRPV19ESU1FTlNJT04gfVxuICAgICAgb25SZXNpemVTdG9wPXsgb25SZXNpemVTdG9wIH1cbiAgICAgIHJlc2l6ZUhhbmRsZVN0eWxlcz17e1xuICAgICAgICBib3R0b206IHsgY3Vyc29yOiAnbnMtcmVzaXplJyB9LFxuICAgICAgICBib3R0b21MZWZ0OiB7IGN1cnNvcjogJ25lc3ctcmVzaXplJyB9LFxuICAgICAgICBib3R0b21SaWdodDogeyBjdXJzb3I6ICdud3NlLXJlc2l6ZScgfSxcbiAgICAgICAgbGVmdDogeyBjdXJzb3I6ICdldy1yZXNpemUnIH0sXG4gICAgICAgIHJpZ2h0OiB7IGN1cnNvcjogJ2V3LXJlc2l6ZScgfSxcbiAgICAgICAgdG9wOiB7IGN1cnNvcjogJ25zLXJlc2l6ZScgfSxcbiAgICAgICAgdG9wTGVmdDogeyBjdXJzb3I6ICdud3NlLXJlc2l6ZScgfSxcbiAgICAgICAgdG9wUmlnaHQ6IHsgY3Vyc29yOiAnbmVzdy1yZXNpemUnIH1cbiAgICAgIH19XG4gICAgICBzaXplPXt7IHdpZHRoLCBoZWlnaHQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMudGl0bGVfYmFyIH0gaGFuZGxlYCB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PnsgdGl0bGUgfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMuYWN0aW9ucyB9IGNhbmNlbGAgfT5cbiAgICAgICAgICB7LyogTG93ZXIgb3BhY2l0eSBvZiBpY29ucywgcmVsYXRpdmUgdG8gdGlsZWJhciAqL31cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IHN0eWxlcy5taW5pbWl6ZSB9IGljb249eyBmYU1pbnVzQ2lyY2xlIH0gb25DbGljaz17IG9uTWluaW1pemUgfSAvPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsgc3R5bGVzLm1heGltaXplIH0gaWNvbj17IGZhUGx1c0NpcmNsZSB9IG9uQ2xpY2s9eyBvbk1heGltaXplIH0gLz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IHN0eWxlcy5jbG9zZSB9IGljb249eyBmYVRpbWVzQ2lyY2xlIH0gb25DbGljaz17IG9uQ2xvc2UgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHsgc3R5bGVzLmFjdGlvbl9iYXIgfSBoYW5kbGVgIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYCR7IHN0eWxlcy5hY3Rpb25zIH0gY2FuY2VsYCB9PlxuICAgICAgICAgIHsvKiBUT0RPOiBNb3ZlIHRvIEJsb2dBY3Rpb25zIHwgeyBhcHAuYWN0aW9ucyAmJiA8YXBwLmFjdGlvbnMgLz4gfSAqL31cbiAgICAgICAgICA8QW5pbWF0ZWRGb250QXdlc29tZUljb24gaWNvbj17IGZhQXJyb3dMZWZ0IH0gLz5cbiAgICAgICAgICA8QW5pbWF0ZWRGb250QXdlc29tZUljb24gaWNvbj17IGZhQXJyb3dSaWdodCB9IC8+XG4gICAgICAgICAgPEFuaW1hdGVkRm9udEF3ZXNvbWVJY29uIGljb249eyBmYUhvbWUgfSAvPlxuICAgICAgICAgIDxBbmltYXRlZEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFDb21tZW50cyB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMuc2VhcmNoIH0gY2FuY2VsYCB9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGZhU2VhcmNoIH0gLz5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz4gey8qIFRPRE86IGkxOG4gKi99XG4gICAgICAgICAgey8qIFRPRE86IHggdG8gY2xlYXIgc2VhcmNoIGNvbnRlbnQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})