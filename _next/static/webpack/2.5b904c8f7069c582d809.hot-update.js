webpackHotUpdate_N_E(2,{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: Taskbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Taskbar\", function() { return Taskbar; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/Taskbar.module.scss */ \"./styles/System/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TaskbarEntry = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/TaskbarEntry']\n  }\n});\n_c2 = TaskbarEntry;\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar maxWidth = 159;\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_5__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      focus = _useContext.focus,\n      minimize = _useContext.minimize,\n      olRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(maxWidth),\n      entryWidth = _useState[0],\n      setEntryWidth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _olRef$current, _olRef$current2;\n\n    setEntryWidth(Math.min(maxWidth, ((_olRef$current = olRef.current) === null || _olRef$current === void 0 ? void 0 : _olRef$current.offsetWidth) ? ((_olRef$current2 = olRef.current) === null || _olRef$current2 === void 0 ? void 0 : _olRef$current2.offsetWidth) / apps.length : maxWidth));\n  }, [apps]);\n  return __jsx(\"nav\", {\n    className: _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taskbar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    ref: olRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_6__[\"sortByLastRunning\"]).map(function (_ref) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        minimized = _ref.minimized,\n        name = _ref.name,\n        foreground = _ref.foreground,\n        stackOrder = _ref.stackOrder;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, taskbarEntriesMotionSettings, {\n      style: {\n        width: entryWidth\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }), __jsx(TaskbarEntry, {\n      foreground: foreground,\n      icon: icon,\n      name: name,\n      onClick: function onClick() {\n        if (minimized) {\n          minimize === null || minimize === void 0 ? void 0 : minimize(id, false);\n        } else {\n          var _apps$find;\n\n          //const [foregroundApp] = stackOrder; // TODO: Top of stack order doesnt mean its foreground\n          //console.log(apps.find(({ id: appId }) => appId === id)?.foreground)\n          ((_apps$find = apps.find(function (_ref2) {\n            var appId = _ref2.id;\n            return appId === id;\n          })) === null || _apps$find === void 0 ? void 0 : _apps$find.foreground) ? minimize === null || minimize === void 0 ? void 0 : minimize(id) : focus === null || focus === void 0 ? void 0 : focus(id);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Taskbar, \"6NgDi1j5ZTwBRUY0OYAnzqXJ3KM=\");\n\n_c3 = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TaskbarEntry$dynamic\");\n$RefreshReg$(_c2, \"TaskbarEntry\");\n$RefreshReg$(_c3, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXJFbnRyeSIsImR5bmFtaWMiLCJ0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZXhpdCIsIndpZHRoIiwiZHVyYXRpb24iLCJtYXhXaWR0aCIsIlRhc2tiYXIiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiZm9jdXMiLCJtaW5pbWl6ZSIsIm9sUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbnRyeVdpZHRoIiwic2V0RW50cnlXaWR0aCIsInVzZUVmZmVjdCIsIk1hdGgiLCJtaW4iLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJzdHlsZXMiLCJ0YXNrYmFyIiwic29ydCIsInNvcnRCeUxhc3RSdW5uaW5nIiwibWFwIiwiaWQiLCJpY29uIiwibWluaW1pemVkIiwibmFtZSIsImZvcmVncm91bmQiLCJzdGFja09yZGVyIiwiZmluZCIsImFwcElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxtREFBTztBQUFBLFNBQzFCLDhLQUQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUNuQiw4RkFEbUI7QUFBQTtBQUFBLGNBQ25CLDBDQURtQjtBQUFBO0FBQUEsRUFBNUI7TUFBTUQsWTtBQUlOLElBQU1FLDRCQUE0QixHQUFHO0FBQ25DQyxTQUFPLEVBQUU7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFLENBQUM7QUFBbEIsR0FEMEI7QUFFbkNDLFNBQU8sRUFBRTtBQUFFRixXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUU7QUFBakIs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LEVBQUgsQ0FBL0U7QUFDRDtBQUNGLE9BWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREc7QUFBQSxHQUZOLENBREgsQ0FERixDQURGLEVBeUJFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixDQURGO0FBNkJELENBdENNOztHQUFNdEIsTzs7TUFBQUEsTztBQXdDRUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB7IHNvcnRCeUxhc3RSdW5uaW5nIH0gZnJvbSAnQC91dGlscy91dGlscyc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0Nsb2NrJztcblxuY29uc3QgVGFza2JhckVudHJ5ID0gZHluYW1pYyhcbiAgaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Jylcbik7XG5cbmNvbnN0IHRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3MgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHg6IHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnXG4gICAgfVxuICB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSwgeDogLTEwMCB9XG59O1xuXG5jb25zdCBtYXhXaWR0aCA9IDE1OTtcblxuZXhwb3J0IGNvbnN0IFRhc2tiYXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIGZvY3VzLCBtaW5pbWl6ZSB9ID0gdXNlQ29udGV4dChBcHBzQ29udGV4dCksXG4gICAgb2xSZWYgPSB1c2VSZWY8SFRNTE9MaXN0RWxlbWVudD4obnVsbCksXG4gICAgW2VudHJ5V2lkdGgsIHNldEVudHJ5V2lkdGhdID0gdXNlU3RhdGUobWF4V2lkdGgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RW50cnlXaWR0aChNYXRoLm1pbihtYXhXaWR0aCwgb2xSZWYuY3VycmVudD8ub2Zmc2V0V2lkdGggPyBvbFJlZi5jdXJyZW50Py5vZmZzZXRXaWR0aCAvIGFwcHMubGVuZ3RoIDogbWF4V2lkdGgpKTtcbiAgfSwgW2FwcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza2Jhcn0+XG4gICAgICA8b2wgcmVmPXtvbFJlZn0+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge2FwcHNcbiAgICAgICAgICAgID8uc29ydChzb3J0QnlMYXN0UnVubmluZylcbiAgICAgICAgICAgIC5tYXAoKHsgaWQsIGljb24sIG1pbmltaXplZCwgbmFtZSwgZm9yZWdyb3VuZCwgc3RhY2tPcmRlciB9KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGkga2V5PXtpZH0gey4uLnRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3N9IHN0eWxlPXt7IHdpZHRoOiAgZW50cnlXaWR0aCB9fT5cbiAgICAgICAgICAgICAgICA8VGFza2JhckVudHJ5XG4gICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kPXtmb3JlZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5pbWl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtaW5pbWl6ZT8uKGlkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBbZm9yZWdyb3VuZEFwcF0gPSBzdGFja09yZGVyOyAvLyBUT0RPOiBUb3Agb2Ygc3RhY2sgb3JkZXIgZG9lc250IG1lYW4gaXRzIGZvcmVncm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGFwcHMuZmluZCgoeyBpZDogYXBwSWQgfSkgPT4gYXBwSWQgPT09IGlkKT8uZm9yZWdyb3VuZClcbiAgICAgICAgICAgICAgICAgICAgICBhcHBzLmZpbmQoKHsgaWQ6IGFwcElkIH0pID0+IGFwcElkID09PSBpZCk/LmZvcmVncm91bmQgPyBtaW5pbWl6ZT8uKGlkKSA6IGZvY3VzPy4oaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9vbD5cbiAgICAgIDxDbG9jayAvPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza2JhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})