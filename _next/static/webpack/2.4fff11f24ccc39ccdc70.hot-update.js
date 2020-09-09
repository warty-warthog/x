webpackHotUpdate_N_E(2,{

/***/ "./components/System/Taskbar/Taskbar.tsx":
/*!***********************************************!*\
  !*** ./components/System/Taskbar/Taskbar.tsx ***!
  \***********************************************/
/*! exports provided: Taskbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Taskbar\", function() { return Taskbar; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar.module.scss */ \"./styles/System/Taskbar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/Taskbar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Clock = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/Clock */ \"./components/System/Taskbar/Clock.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/Clock']\n  }\n});\n_c2 = Clock;\nvar TaskbarEntry = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Taskbar/TaskbarEntry */ \"./components/System/Taskbar/TaskbarEntry.tsx\")];\n    },\n    modules: ['@/components/System/Taskbar/TaskbarEntry']\n  }\n});\n_c4 = TaskbarEntry;\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar Taskbar = function Taskbar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_5__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      focus = _useContext.focus,\n      minimize = _useContext.minimize;\n\n  return __jsx(\"nav\", {\n    className: _styles_System_Taskbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.taskbar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"AnimatePresence\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_6__[\"sortByLastRunning\"]).map(function (_ref) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        minimized = _ref.minimized,\n        name = _ref.name,\n        foreground = _ref.foreground,\n        stackOrder = _ref.stackOrder;\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: id\n    }, taskbarEntriesMotionSettings, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }), __jsx(TaskbarEntry, {\n      foreground: foreground,\n      icon: icon,\n      name: name,\n      onClick: function onClick(_ref2) {\n        var target = _ref2.target;\n        console.log(target.classList);\n\n        if (minimized) {\n          minimize === null || minimize === void 0 ? void 0 : minimize(id, false);\n        } else {\n          var _stackOrder = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stackOrder, 1),\n              foregroundApp = _stackOrder[0]; // TODO: Top of stack order doesnt mean its foreground\n\n\n          foregroundApp === id ? minimize === null || minimize === void 0 ? void 0 : minimize(id) : focus === null || focus === void 0 ? void 0 : focus(id);\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }));\n  }))), __jsx(Clock, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Taskbar, \"UYc+InX9+2kRdppFoePrxrbI0jM=\");\n\n_c5 = Taskbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Taskbar);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Clock$dynamic\");\n$RefreshReg$(_c2, \"Clock\");\n$RefreshReg$(_c3, \"TaskbarEntry$dynamic\");\n$RefreshReg$(_c4, \"TaskbarEntry\");\n$RefreshReg$(_c5, \"Taskbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyLnRzeD8xN2Q0Il0sIm5hbWVzIjpbIkNsb2NrIiwiZHluYW1pYyIsIlRhc2tiYXJFbnRyeSIsInRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3MiLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIlRhc2tiYXIiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiZm9jdXMiLCJtaW5pbWl6ZSIsInN0eWxlcyIsInRhc2tiYXIiLCJzb3J0Iiwic29ydEJ5TGFzdFJ1bm5pbmciLCJtYXAiLCJpZCIsImljb24iLCJtaW5pbWl6ZWQiLCJuYW1lIiwiZm9yZWdyb3VuZCIsInN0YWNrT3JkZXIiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiZm9yZWdyb3VuZEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbURBQU87QUFBQSxTQUFDLGdLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsZ0ZBQVI7QUFBQTtBQUFBLGNBQVEsbUNBQVI7QUFBQTtBQUFBLEVBQXJCO01BQU1ELEs7QUFDTixJQUFNRSxZQUFZLEdBQUdELG1EQUFPO0FBQUEsU0FDMUIsOEtBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ25CLDhGQURtQjtBQUFBO0FBQUEsY0FDbkIsMENBRG1CO0FBQUE7QUFBQSxFQUE1QjtNQUFNQyxZO0FBSU4sSUFBTUMsNEJBQTRCLEdBQUc7QUFDbkNDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQUQwQjtBQUVuQ0MsU0FBTyxFQUFFO0FBQUVGLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRTtBQUFqQixHQUYwQjtBQUduQ0UsWUFBVSxFQUFFO0FBQ1ZGLEtBQUMsRUFBRTtBQUNERyxVQUFJLEVBQUU7QUFETDtBQURPLEdBSHVCO0FBUW5DQyxNQUFJLEVBQUU7QUFBRUwsV0FBTyxFQUFFLENBQVg7QUFBY00sU0FBSyxFQUFFLENBQXJCO0FBQXdCSCxjQUFVLEVBQUU7QUFBRUksY0FBUSxFQUFFO0FBQVosS0FBcEM7QUFBdUROLEtBQUMsRUFBRSxDQUFDO0FBQTNEO0FBUjZCLENBQXJDO0FBV08sSUFBTU8sT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQywwREFBRCxDQURiO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxLQURpQixlQUNqQkEsS0FEaUI7QUFBQSxNQUNWQyxRQURVLGVBQ1ZBLFFBRFU7O0FBRy9CLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFNLENBQUNDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUNESyxJQURILENBQ1FDLDhEQURSLEVBRUVDLEdBRkYsQ0FFTTtBQUFBLFFBQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsUUFBT0EsSUFBUDtBQUFBLFFBQWFDLFNBQWIsUUFBYUEsU0FBYjtBQUFBLFFBQXdCQyxJQUF4QixRQUF3QkEsSUFBeEI7QUFBQSxRQUE4QkMsVUFBOUIsUUFBOEJBLFVBQTlCO0FBQUEsUUFBMENDLFVBQTFDLFFBQTBDQSxVQUExQztBQUFBLFdBQ0gsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFBVyxTQUFHLEVBQUVMO0FBQWhCLE9BQXdCckIsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRSxNQUFDLFlBQUQ7QUFDRSxnQkFBVSxFQUFFeUIsVUFEZDtBQUVFLFVBQUksRUFBRUgsSUFGUjtBQUdFLFVBQUksRUFBRUUsSUFIUjtBQUlFLGFBQU8sRUFBRSx3QkFBZ0I7QUFBQSxZQUFiRyxNQUFhLFNBQWJBLE1BQWE7QUFDdkJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLFNBQW5COztBQUNBLFlBQUlQLFNBQUosRUFBZTtBQUNiUixrQkFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUdNLEVBQUgsRUFBTyxLQUFQLENBQVI7QUFDRCxTQUZELE1BRU87QUFBQSxxSEFDbUJLLFVBRG5CO0FBQUEsY0FDRUssYUFERixtQkFDK0I7OztBQUVwQ0EsdUJBQWEsS0FBS1YsRUFBbEIsR0FBdUJOLFFBQXZCLGFBQXVCQSxRQUF2Qix1QkFBdUJBLFFBQVEsQ0FBR00sRUFBSCxDQUEvQixHQUF3Q1AsS0FBeEMsYUFBd0NBLEtBQXhDLHVCQUF3Q0EsS0FBSyxDQUFHTyxFQUFILENBQTdDO0FBQ0Q7QUFDRixPQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURHO0FBQUEsR0FGTixDQURILENBREYsQ0FERixFQTBCRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixDQURGO0FBOEJELENBakNNOztHQUFNWCxPOztNQUFBQSxPO0FBbUNFQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHsgRkMsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBzb3J0QnlMYXN0UnVubmluZyB9IGZyb20gJ0AvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgQ2xvY2sgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0Nsb2NrJykpO1xuY29uc3QgVGFza2JhckVudHJ5ID0gZHluYW1pYyhcbiAgaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Jylcbik7XG5cbmNvbnN0IHRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3MgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHg6IHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnXG4gICAgfVxuICB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSwgeDogLTEwMCB9XG59O1xuXG5leHBvcnQgY29uc3QgVGFza2JhcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgZm9jdXMsIG1pbmltaXplIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza2Jhcn0+XG4gICAgICA8b2w+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAge2FwcHNcbiAgICAgICAgICAgID8uc29ydChzb3J0QnlMYXN0UnVubmluZylcbiAgICAgICAgICAgIC5tYXAoKHsgaWQsIGljb24sIG1pbmltaXplZCwgbmFtZSwgZm9yZWdyb3VuZCwgc3RhY2tPcmRlciB9KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGkga2V5PXtpZH0gey4uLnRhc2tiYXJFbnRyaWVzTW90aW9uU2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIDxUYXNrYmFyRW50cnlcbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQ9e2ZvcmVncm91bmR9XG4gICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5jbGFzc0xpc3QpXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5pbWl6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtaW5pbWl6ZT8uKGlkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZvcmVncm91bmRBcHBdID0gc3RhY2tPcmRlcjsgLy8gVE9ETzogVG9wIG9mIHN0YWNrIG9yZGVyIGRvZXNudCBtZWFuIGl0cyBmb3JlZ3JvdW5kXG5cbiAgICAgICAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQXBwID09PSBpZCA/IG1pbmltaXplPy4oaWQpIDogZm9jdXM/LihpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L29sPlxuICAgICAgPENsb2NrIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/Taskbar.tsx\n");

/***/ })

})