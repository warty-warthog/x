webpackHotUpdate_N_E(2,{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: Taskbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Taskbar\", function() { return Taskbar; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar.module.scss */ \"./styles/System/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TaskbarEntry = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/TaskbarEntry']\n  }\n});\n_c2 = TaskbarEntry;\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar maxWidth = 159;\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_6__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      focus = _useContext.focus,\n      minimize = _useContext.minimize,\n      olRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(maxWidth),\n      entriesWidth = _useState[0],\n      setEntriesWidth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener('resize', function () {\n      var _olRef$current;\n\n      setEntriesWidth(((_olRef$current = olRef.current) === null || _olRef$current === void 0 ? void 0 : _olRef$current.offsetWidth) || maxWidth);\n    });\n  }, []);\n  return __jsx(\"nav\", {\n    className: _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taskbar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    ref: olRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_7__[\"sortByLastRunning\"]).map(function (_ref) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        minimized = _ref.minimized,\n        name = _ref.name,\n        foreground = _ref.foreground,\n        stackOrder = _ref.stackOrder;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, taskbarEntriesMotionSettings, {\n      style: {\n        width: Math.min(maxWidth, entriesWidth / apps.length)\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }), __jsx(TaskbarEntry, {\n      foreground: foreground,\n      icon: icon,\n      name: name,\n      onClick: function onClick() {\n        if (minimized) {\n          minimize === null || minimize === void 0 ? void 0 : minimize(id, false);\n        } else {\n          var _stackOrder = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stackOrder, 1),\n              foregroundApp = _stackOrder[0]; // TODO: Top of stack order doesnt mean its foreground\n\n\n          foregroundApp === id ? minimize === null || minimize === void 0 ? void 0 : minimize(id) : focus === null || focus === void 0 ? void 0 : focus(id);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Taskbar, \"JrNYOQhxJPDpF9VgDPyYZ33s+IY=\");\n\n_c3 = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TaskbarEntry$dynamic\");\n$RefreshReg$(_c2, \"TaskbarEntry\");\n$RefreshReg$(_c3, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXJFbnRyeSIsImR5bmFtaWMiLCJ0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZXhpdCIsIndpZHRoIiwiZHVyYXRpb24iLCJtYXhXaWR0aCIsIlRhc2tiYXIiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiZm9jdXMiLCJtaW5pbWl6ZSIsIm9sUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbnRyaWVzV2lkdGgiLCJzZXRFbnRyaWVzV2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwic3R5bGVzIiwidGFza2JhciIsInNvcnQiLCJzb3J0QnlMYXN0UnVubmluZyIsIm1hcCIsImlkIiwiaWNvbiIsIm1pbmltaXplZCIsIm5hbWUiLCJmb3JlZ3JvdW5kIiwic3RhY2tPcmRlciIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJmb3JlZ3JvdW5kQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG1EQUFPO0FBQUEsU0FDMUIsOEtBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ25CLDhGQURtQjtBQUFBO0FBQUEsY0FDbkIsMENBRG1CO0FBQUE7QUFBQSxFQUE1QjtNQUFNRCxZO0FBSU4sSUFBTUUsNEJBQTRCLEdBQUc7QUFDbkNDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQUQwQjtBQUVuQ0MsU0FBTyxFQUFFO0FBQUVGLFdB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QVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURHO0FBQUEsR0FGTixDQURILENBREYsQ0FERixFQTJCRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsQ0FERjtBQStCRCxDQTFDTTs7R0FBTXJCLE87O01BQUFBLE87QUE0Q0VBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBzb3J0QnlMYXN0UnVubmluZyB9IGZyb20gJ0AvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IENsb2NrIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9DbG9jayc7XG5cbmNvbnN0IFRhc2tiYXJFbnRyeSA9IGR5bmFtaWMoXG4gIGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeScpXG4pO1xuXG5jb25zdCB0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB4OiB7XG4gICAgICB0eXBlOiAnc3ByaW5nJ1xuICAgIH1cbiAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB3aWR0aDogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4zIH0sIHg6IC0xMDAgfVxufTtcblxuY29uc3QgbWF4V2lkdGggPSAxNTk7XG5cbmV4cG9ydCBjb25zdCBUYXNrYmFyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhcHBzLCBmb2N1cywgbWluaW1pemUgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIG9sUmVmID0gdXNlUmVmPEhUTUxPTGlzdEVsZW1lbnQ+KG51bGwpLFxuICAgIFtlbnRyaWVzV2lkdGgsIHNldEVudHJpZXNXaWR0aF0gPSB1c2VTdGF0ZShtYXhXaWR0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0RW50cmllc1dpZHRoKG9sUmVmLmN1cnJlbnQ/Lm9mZnNldFdpZHRoIHx8IG1heFdpZHRoKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50YXNrYmFyfT5cbiAgICAgIDxvbCByZWY9e29sUmVmfT5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7YXBwc1xuICAgICAgICAgICAgPy5zb3J0KHNvcnRCeUxhc3RSdW5uaW5nKVxuICAgICAgICAgICAgLm1hcCgoeyBpZCwgaWNvbiwgbWluaW1pemVkLCBuYW1lLCBmb3JlZ3JvdW5kLCBzdGFja09yZGVyIH0pID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5saSBrZXk9e2lkfSB7Li4udGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5nc30gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5taW4obWF4V2lkdGgsIGVudHJpZXNXaWR0aCAvIGFwcHMubGVuZ3RoKVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8VGFza2JhckVudHJ5XG4gICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kPXtmb3JlZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5pbWl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtaW5pbWl6ZT8uKGlkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZvcmVncm91bmRBcHBdID0gc3RhY2tPcmRlcjsgLy8gVE9ETzogVG9wIG9mIHN0YWNrIG9yZGVyIGRvZXNudCBtZWFuIGl0cyBmb3JlZ3JvdW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQXBwID09PSBpZCA/IG1pbmltaXplPy4oaWQpIDogZm9jdXM/LihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L29sPlxuICAgICAgPENsb2NrIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})