webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1],\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  }),\n      onMinimize = function onMinimize(id) {\n    return function () {\n      return updateApps({\n        update: {\n          minimized: true\n        },\n        id: id\n      });\n    };\n  },\n      onClose = function onClose(id) {\n    return function () {\n      // TODO: updateApps accept multi args\n      updateApps({\n        update: {\n          running: false\n        },\n        id: id\n      });\n      updateApps({\n        update: {\n          stackOrder: []\n        },\n        id: id\n      });\n    };\n  },\n      onFocus = function onFocus(id) {\n    return function () {\n      updateApps({\n        update: {\n          foreground: true\n        },\n        id: id\n      });\n      console.log('onFocus:id = ' + id); // TODO: Storing stack in every app is silly, fix this somehow\n\n      apps.forEach(function (_ref2) {\n        var appId = _ref2.id,\n            stackOrder = _ref2.stackOrder;\n        updateApps({\n          update: {\n            stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder.filter(function (windowId) {\n              return windowId !== id;\n            })))\n          },\n          id: appId\n        });\n      });\n    };\n  },\n      onBlur = function onBlur(id) {\n    return function () {\n      return updateApps({\n        update: {\n          foreground: false\n        },\n        id: id\n      });\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: window.innerHeight * 0.075,\n      marginLeft: window.innerWidth * 0.075\n    });\n  }, []);\n  return __jsx(\"section\", {\n    style: windowMargins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref3, index) {\n    var App = _ref3.component,\n        id = _ref3.id,\n        name = _ref3.name,\n        windowed = _ref3.windowed,\n        lockAspectRatio = _ref3.lockAspectRatio,\n        hideScrollbars = _ref3.hideScrollbars,\n        stackOrder = _ref3.stackOrder;\n    var zIndex = 1750 + (activeApps.length - (stackOrder.indexOf(id) + 1)),\n        tabIndex = apps.length + activeApps.length + index;\n    console.log(\"\".concat(id, \": 1750 + (\").concat(activeApps.length, \"(activeApps.length) - \").concat(stackOrder.indexOf(id) + 1, \"(stackOrder.indexOf(id) + 1)) = \").concat(zIndex));\n    console.log(stackOrder);\n    return windowed ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_3__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      lockAspectRatio: lockAspectRatio,\n      hideScrollbars: hideScrollbars,\n      tabIndex: tabIndex,\n      zIndex: zIndex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 15\n      }\n    })) : __jsx(App, {\n      key: id,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      tabIndex: tabIndex,\n      zIndex: zIndex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"eqDMOX0t8O7ITKWy5Wdip824U28=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsInVzZVN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpbmRvd01hcmdpbnMiLCJzZXRXaW5kb3dNYXJnaW5zIiwiYWN0aXZlQXBwcyIsImZpbHRlciIsInJ1bm5pbmciLCJtaW5pbWl6ZWQiLCJvbk1pbmltaXplIiwiaWQiLCJ1cGRhdGUiLCJvbkNsb3NlIiwic3RhY2tPcmRlciIsIm9uRm9jdXMiLCJmb3JlZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJhcHBJZCIsIndpbmRvd0lkIiwib25CbHVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwibWFwIiwiaW5kZXgiLCJBcHAiLCJjb21wb25lbnQiLCJuYW1lIiwid2luZG93ZWQiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInpJbmRleCIsImxlbmd0aCIsImluZGV4T2YiLCJ0YWJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyx3REFBVSxDQUFDQywwREFBRCxDQURSO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxVQURpQixlQUNqQkEsVUFEaUI7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQztBQUMzQ0MsYUFBUyxFQUFFLENBRGdDO0FBRTNDQyxjQUFVLEVBQUU7QUFGK0IsR0FBRCxDQUZmO0FBQUEsTUFFNUJDLGFBRjRCO0FBQUEsTUFFYkMsZ0JBRmE7QUFBQSxNQU03QkMsVUFONkIsR0FNVlAsSUFBSSxDQUFDUSxNQUFMLENBQ2pCO0FBQUEs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RSxjQUFRLEVBQUUyQixRQU5aO0FBT0UsWUFBTSxFQUFFSCxNQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoQkY7QUEwQkQsR0E3Q0YsQ0FESCxDQURGO0FBbURELENBN0ZNOztHQUFNdkMsTzs7S0FBQUEsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcHMsIEFwcHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gJ0AvY29tcG9uZW50cy9XaW5kb3cnO1xuXG5leHBvcnQgY29uc3QgV2luZG93czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgdXBkYXRlQXBwcyB9ID0gdXNlQ29udGV4dChBcHBzQ29udGV4dCksXG4gICAgW3dpbmRvd01hcmdpbnMsIHNldFdpbmRvd01hcmdpbnNdID0gdXNlU3RhdGUoe1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luTGVmdDogMFxuICAgIH0pLFxuICAgIGFjdGl2ZUFwcHM6IEFwcHMgPSBhcHBzLmZpbHRlcihcbiAgICAgICh7IHJ1bm5pbmcsIG1pbmltaXplZCB9KSA9PiBydW5uaW5nICYmICFtaW5pbWl6ZWRcbiAgICApLFxuICAgIG9uTWluaW1pemUgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT5cbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgbWluaW1pemVkOiB0cnVlIH0sIGlkIH0pLFxuICAgIG9uQ2xvc2UgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgICAgLy8gVE9ETzogdXBkYXRlQXBwcyBhY2NlcHQgbXVsdGkgYXJnc1xuICAgICAgdXBkYXRlQXBwcyh7IHVwZGF0ZTogeyBydW5uaW5nOiBmYWxzZSB9LCBpZCB9KTtcbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgc3RhY2tPcmRlcjogW10gfSwgaWQgfSk7XG4gICAgfSxcbiAgICBvbkZvY3VzID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgZm9yZWdyb3VuZDogdHJ1ZSB9LCBpZCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkZvY3VzOmlkID0gJyArIGlkKVxuICAgICAgLy8gVE9ETzogU3RvcmluZyBzdGFjayBpbiBldmVyeSBhcHAgaXMgc2lsbHksIGZpeCB0aGlzIHNvbWVob3dcbiAgICAgIGFwcHMuZm9yRWFjaCgoeyBpZDogYXBwSWQsIHN0YWNrT3JkZXIgfSkgPT4ge1xuICAgICAgICB1cGRhdGVBcHBzKHtcbiAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgIHN0YWNrT3JkZXI6IFtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIC4uLnN0YWNrT3JkZXIuZmlsdGVyKCh3aW5kb3dJZDogc3RyaW5nKSA9PiB3aW5kb3dJZCAhPT0gaWQpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZDogYXBwSWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uQmx1ciA9IChpZDogc3RyaW5nKSA9PiAoKSA9PlxuICAgICAgdXBkYXRlQXBwcyh7IHVwZGF0ZTogeyBmb3JlZ3JvdW5kOiBmYWxzZSB9LCBpZCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd01hcmdpbnMoe1xuICAgICAgbWFyZ2luVG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjA3NSxcbiAgICAgIG1hcmdpbkxlZnQ6IHdpbmRvdy5pbm5lcldpZHRoICogMC4wNzVcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3R5bGU9e3dpbmRvd01hcmdpbnN9PlxuICAgICAge2FjdGl2ZUFwcHMubWFwKFxuICAgICAgICAoXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB3aW5kb3dlZCxcbiAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgc3RhY2tPcmRlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgY29uc3QgekluZGV4ID0gMTc1MCArIChhY3RpdmVBcHBzLmxlbmd0aCAtIChzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpLFxuICAgICAgICAgICAgdGFiSW5kZXggPSBhcHBzLmxlbmd0aCArIGFjdGl2ZUFwcHMubGVuZ3RoICsgaW5kZXg7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpZH06IDE3NTAgKyAoJHthY3RpdmVBcHBzLmxlbmd0aH0oYWN0aXZlQXBwcy5sZW5ndGgpIC0gJHsoc3RhY2tPcmRlci5pbmRleE9mKGlkKSArIDEpfShzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpID0gJHt6SW5kZXh9YCk7XG4gICAgICAgICAgY29uc29sZS5sb2coc3RhY2tPcmRlcik7XG5cbiAgICAgICAgICByZXR1cm4gd2luZG93ZWQgPyAoXG4gICAgICAgICAgICA8V2luZG93XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemUoaWQpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlKGlkKX1cbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1cyhpZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyKGlkKX1cbiAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzPXtoaWRlU2Nyb2xsYmFyc31cbiAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9XaW5kb3c+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgb25NaW5pbWl6ZT17b25NaW5pbWl6ZShpZCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2UoaWQpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzKGlkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXIoaWQpfVxuICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgICAgICAgIHpJbmRleD17ekluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ })

})