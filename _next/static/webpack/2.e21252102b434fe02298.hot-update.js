webpackHotUpdate_N_E(2,{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: Taskbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Taskbar\", function() { return Taskbar; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar.module.scss */ \"./styles/System/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar TaskbarEntry = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/TaskbarEntry']\n  }\n});\n_c2 = TaskbarEntry;\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar maxWidth = 159;\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_6__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      focus = _useContext.focus,\n      minimize = _useContext.minimize,\n      olRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(maxWidth),\n      entryWidth = _useState[0],\n      setEntryWidth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _olRef$current, _olRef$current2;\n\n    setEntryWidth(Math.min(maxWidth, ((_olRef$current = olRef.current) === null || _olRef$current === void 0 ? void 0 : _olRef$current.offsetWidth) ? ((_olRef$current2 = olRef.current) === null || _olRef$current2 === void 0 ? void 0 : _olRef$current2.offsetWidth) / apps.length : maxWidth));\n  }, [apps]);\n  return __jsx(\"nav\", {\n    className: _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taskbar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    ref: olRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, apps.map(function (_ref) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        minimized = _ref.minimized,\n        name = _ref.name,\n        foreground = _ref.foreground,\n        stackOrder = _ref.stackOrder;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, taskbarEntriesMotionSettings, {\n      style: {\n        width: entryWidth\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }), __jsx(TaskbarEntry, {\n      foreground: foreground,\n      icon: icon,\n      name: name,\n      onClick: function onClick() {\n        if (minimized) {\n          minimize === null || minimize === void 0 ? void 0 : minimize(id, false);\n        } else {\n          var _stackOrder = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stackOrder, 1),\n              foregroundApp = _stackOrder[0]; // TODO: Top of stack order doesnt mean its foreground\n          //                      apps.forEach(app => console.log(app.focused))\n\n\n          console.log(apps.find(function (app) {\n            return app.id === id;\n          }).lastFocused);\n          foregroundApp === id ? minimize === null || minimize === void 0 ? void 0 : minimize(id) : focus === null || focus === void 0 ? void 0 : focus(id);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(_components_System_Taskbar_Clock__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Taskbar, \"6NgDi1j5ZTwBRUY0OYAnzqXJ3KM=\");\n\n_c3 = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TaskbarEntry$dynamic\");\n$RefreshReg$(_c2, \"TaskbarEntry\");\n$RefreshReg$(_c3, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIlRhc2tiYXJFbnRyeSIsImR5bmFtaWMiLCJ0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZXhpdCIsIndpZHRoIiwiZHVyYXRpb24iLCJtYXhXaWR0aCIsIlRhc2tiYXIiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiZm9jdXMiLCJtaW5pbWl6ZSIsIm9sUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbnRyeVdpZHRoIiwic2V0RW50cnlXaWR0aCIsInVzZUVmZmVjdCIsIk1hdGgiLCJtaW4iLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJsZW5ndGgiLCJzdHlsZXMiLCJ0YXNrYmFyIiwibWFwIiwiaWQiLCJpY29uIiwibWluaW1pemVkIiwibmFtZSIsImZvcmVncm91bmQiLCJzdGFja09yZGVyIiwiZm9yZWdyb3VuZEFwcCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwiYXBwIiwibGFzdEZvY3VzZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsbURBQU87QUFBQSxTQUMxQiw4S0FEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDbkIsOEZBRG1CO0FBQUE7QUFBQSxjQUNuQiwwQ0FEbUI7QUFBQTtBQUFBLEVBQTVCO01BQU1ELFk7QUFJTixJQUFNRSw0QkFBNEIsR0FBRztBQUNuQ0MsU0FBTyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRSxDQUFDO0FBQWxCLEdBRDBCO0FBRW5DQyxTQUFPLEVBQUU7QUFBRUYsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FB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QXdDQSxLQUF4Qyx1QkFBd0NBLEtBQUssQ0FBR2dCLEVBQUgsQ0FBN0M7QUFDRDtBQUNGLE9BYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREc7QUFBQSxHQUROLENBREgsQ0FERixDQURGLEVBeUJFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixDQURGO0FBNkJELENBdENNOztHQUFNcEIsTzs7TUFBQUEsTztBQXdDRUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcbmltcG9ydCBDbG9jayBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvQ2xvY2snO1xuXG5jb25zdCBUYXNrYmFyRW50cnkgPSBkeW5hbWljKFxuICBpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnknKVxuKTtcblxuY29uc3QgdGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgeDoge1xuICAgICAgdHlwZTogJ3NwcmluZydcbiAgICB9XG4gIH0sXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgd2lkdGg6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMyB9LCB4OiAtMTAwIH1cbn07XG5cbmNvbnN0IG1heFdpZHRoID0gMTU5O1xuXG5leHBvcnQgY29uc3QgVGFza2JhcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgZm9jdXMsIG1pbmltaXplIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBvbFJlZiA9IHVzZVJlZjxIVE1MT0xpc3RFbGVtZW50PihudWxsKSxcbiAgICBbZW50cnlXaWR0aCwgc2V0RW50cnlXaWR0aF0gPSB1c2VTdGF0ZShtYXhXaWR0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFbnRyeVdpZHRoKE1hdGgubWluKG1heFdpZHRoLCBvbFJlZi5jdXJyZW50Py5vZmZzZXRXaWR0aCA/IG9sUmVmLmN1cnJlbnQ/Lm9mZnNldFdpZHRoIC8gYXBwcy5sZW5ndGggOiBtYXhXaWR0aCkpO1xuICB9LCBbYXBwc10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy50YXNrYmFyfT5cbiAgICAgIDxvbCByZWY9e29sUmVmfT5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7YXBwc1xuICAgICAgICAgICAgLm1hcCgoeyBpZCwgaWNvbiwgbWluaW1pemVkLCBuYW1lLCBmb3JlZ3JvdW5kLCBzdGFja09yZGVyIH0pID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5saSBrZXk9e2lkfSB7Li4udGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5nc30gc3R5bGU9e3sgd2lkdGg6ICBlbnRyeVdpZHRoIH19PlxuICAgICAgICAgICAgICAgIDxUYXNrYmFyRW50cnlcbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQ9e2ZvcmVncm91bmR9XG4gICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmltaXplZCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1pbmltaXplPy4oaWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbZm9yZWdyb3VuZEFwcF0gPSBzdGFja09yZGVyOyAvLyBUT0RPOiBUb3Agb2Ygc3RhY2sgb3JkZXIgZG9lc250IG1lYW4gaXRzIGZvcmVncm91bmRcbi8vICAgICAgICAgICAgICAgICAgICAgIGFwcHMuZm9yRWFjaChhcHAgPT4gY29uc29sZS5sb2coYXBwLmZvY3VzZWQpKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFwcHMuZmluZChhcHAgPT4gYXBwLmlkID09PSBpZCkubGFzdEZvY3VzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGZvcmVncm91bmRBcHAgPT09IGlkID8gbWluaW1pemU/LihpZCkgOiBmb2N1cz8uKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvb2w+XG4gICAgICA8Q2xvY2sgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})