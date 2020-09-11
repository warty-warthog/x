webpackHotUpdate_N_E(2,{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: Taskbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Taskbar\", function() { return Taskbar; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar.module.scss */ \"./styles/System/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TaskbarEntry = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/TaskbarEntry']\n  }\n});\n_c2 = TaskbarEntry;\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar maxWidth = 159;\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_6__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      focus = _useContext.focus,\n      minimize = _useContext.minimize,\n      olRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(maxWidth),\n      entriesWidth = _useState[0],\n      setEntriesWidth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // window.addEventListener('resize', () => {\n    //   setEntriesWidth(olRef.current?.offsetWidth || maxWidth);\n    // });\n    console.log('hi');\n  }, [apps]);\n  return __jsx(\"nav\", {\n    className: _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taskbar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    ref: olRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_7__[\"sortByLastRunning\"]).map(function (_ref) {\n    var _olRef$current, _olRef$current2;\n\n    var id = _ref.id,\n        icon = _ref.icon,\n        minimized = _ref.minimized,\n        name = _ref.name,\n        foreground = _ref.foreground,\n        stackOrder = _ref.stackOrder;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, taskbarEntriesMotionSettings, {\n      style: {\n        width: Math.min(maxWidth, ((_olRef$current = olRef.current) === null || _olRef$current === void 0 ? void 0 : _olRef$current.offsetWidth) ? ((_olRef$current2 = olRef.current) === null || _olRef$current2 === void 0 ? void 0 : _olRef$current2.offsetWidth) / apps.length : maxWidth)\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }), __jsx(TaskbarEntry, {\n      foreground: foreground,\n      icon: icon,\n      name: name,\n      onClick: function onClick() {\n        if (minimized) {\n          minimize === null || minimize === void 0 ? void 0 : minimize(id, false);\n        } else {\n          var _stackOrder = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stackOrder, 1),\n              foregroundApp = _stackOrder[0]; // TODO: Top of stack order doesnt mean its foreground\n\n\n          foregroundApp === id ? minimize === null || minimize === void 0 ? void 0 : minimize(id) : focus === null || focus === void 0 ? void 0 : focus(id);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Taskbar, \"JrNYOQhxJPDpF9VgDPyYZ33s+IY=\");\n\n_c3 = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TaskbarEntry$dynamic\");\n$RefreshReg$(_c2, \"TaskbarEntry\");\n$RefreshReg$(_c3, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXJFbnRyeSIsImR5bmFtaWMiLCJ0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZXhpdCIsIndpZHRoIiwiZHVyYXRpb24iLCJtYXhXaWR0aCIsIlRhc2tiYXIiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiZm9jdXMiLCJtaW5pbWl6ZSIsIm9sUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbnRyaWVzV2lkdGgiLCJzZXRFbnRyaWVzV2lkdGgiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwidGFza2JhciIsInNvcnQiLCJzb3J0QnlMYXN0UnVubmluZyIsIm1hcCIsImlkIiwiaWNvbiIsIm1pbmltaXplZCIsIm5hbWUiLCJmb3JlZ3JvdW5kIiwic3RhY2tPcmRlciIsIk1hdGgiLCJtaW4iLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJmb3JlZ3JvdW5kQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG1EQUFPO0FBQUEsU0FDMUIsOEtBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ25CLDhGQURtQjtBQUFBO0FBQUEsY0FDbkIsMENBRG1CO0FBQUE7QUFBQSxFQUE1QjtNQUFNRCxZO0FBSU4sSUFBTUUsNEJBQTRCLEdBQUc7QUFDbkNDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQUQwQjtBQUVuQ0MsU0FBTyxFQUFFO0FBQUVGLFdBQU8sRUFBRSxDQUFY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LE9BWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREc7QUFBQSxHQUZOLENBREgsQ0FERixDQURGLEVBMkJFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixDQURGO0FBK0JELENBM0NNOztHQUFNbkIsTzs7TUFBQUEsTztBQTZDRUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB7IHNvcnRCeUxhc3RSdW5uaW5nIH0gZnJvbSAnQC91dGlscy91dGlscyc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0Nsb2NrJztcblxuY29uc3QgVGFza2JhckVudHJ5ID0gZHluYW1pYyhcbiAgaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Jylcbik7XG5cbmNvbnN0IHRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3MgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHg6IHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnXG4gICAgfVxuICB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSwgeDogLTEwMCB9XG59O1xuXG5jb25zdCBtYXhXaWR0aCA9IDE1OTtcblxuZXhwb3J0IGNvbnN0IFRhc2tiYXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIGZvY3VzLCBtaW5pbWl6ZSB9ID0gdXNlQ29udGV4dChBcHBzQ29udGV4dCksXG4gICAgb2xSZWYgPSB1c2VSZWY8SFRNTE9MaXN0RWxlbWVudD4obnVsbCksXG4gICAgW2VudHJpZXNXaWR0aCwgc2V0RW50cmllc1dpZHRoXSA9IHVzZVN0YXRlKG1heFdpZHRoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgLy8gICBzZXRFbnRyaWVzV2lkdGgob2xSZWYuY3VycmVudD8ub2Zmc2V0V2lkdGggfHwgbWF4V2lkdGgpO1xuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKCdoaScpXG4gIH0sIFthcHBzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tiYXJ9PlxuICAgICAgPG9sIHJlZj17b2xSZWZ9PlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHthcHBzXG4gICAgICAgICAgICA/LnNvcnQoc29ydEJ5TGFzdFJ1bm5pbmcpXG4gICAgICAgICAgICAubWFwKCh7IGlkLCBpY29uLCBtaW5pbWl6ZWQsIG5hbWUsIGZvcmVncm91bmQsIHN0YWNrT3JkZXIgfSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmxpIGtleT17aWR9IHsuLi50YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1pbihtYXhXaWR0aCwgb2xSZWYuY3VycmVudD8ub2Zmc2V0V2lkdGggPyBvbFJlZi5jdXJyZW50Py5vZmZzZXRXaWR0aCAvIGFwcHMubGVuZ3RoIDogbWF4V2lkdGgpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxUYXNrYmFyRW50cnlcbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQ9e2ZvcmVncm91bmR9XG4gICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmltaXplZCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1pbmltaXplPy4oaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbZm9yZWdyb3VuZEFwcF0gPSBzdGFja09yZGVyOyAvLyBUT0RPOiBUb3Agb2Ygc3RhY2sgb3JkZXIgZG9lc250IG1lYW4gaXRzIGZvcmVncm91bmRcblxuICAgICAgICAgICAgICAgICAgICAgIGZvcmVncm91bmRBcHAgPT09IGlkID8gbWluaW1pemU/LihpZCkgOiBmb2N1cz8uKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvb2w+XG4gICAgICA8Q2xvY2sgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})