webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1],\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  }),\n      onMinimize = function onMinimize(id) {\n    return function () {\n      return updateApps({\n        update: {\n          minimized: true\n        },\n        id: id\n      });\n    };\n  },\n      onClose = function onClose(id) {\n    return function () {\n      // TODO: updateApps accept multi args\n      updateApps({\n        update: {\n          running: false\n        },\n        id: id\n      });\n      updateApps({\n        update: {\n          stackOrder: []\n        },\n        id: id\n      });\n    };\n  },\n      onFocus = function onFocus(id) {\n    return function () {\n      updateApps({\n        update: {\n          foreground: true\n        },\n        id: id\n      }); // TODO: Storing stack in every app is silly, fix this somehow\n\n      apps.forEach(function (_ref2) {\n        var appId = _ref2.id,\n            stackOrder = _ref2.stackOrder;\n        updateApps({\n          update: {\n            stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder.filter(function (windowId) {\n              return windowId !== id;\n            })))\n          },\n          id: appId\n        });\n      });\n    };\n  },\n      onBlur = function onBlur(id) {\n    return function () {\n      return updateApps({\n        update: {\n          foreground: false\n        },\n        id: id\n      });\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: window.innerHeight * 0.075,\n      marginLeft: window.innerWidth * 0.075\n    });\n  }, []);\n  return __jsx(\"section\", {\n    style: windowMargins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref3, index) {\n    var App = _ref3.component,\n        id = _ref3.id,\n        name = _ref3.name,\n        windowed = _ref3.windowed,\n        lockAspectRatio = _ref3.lockAspectRatio,\n        hideScrollbars = _ref3.hideScrollbars,\n        stackOrder = _ref3.stackOrder;\n    var zIndex = 1750 + (activeApps.length - stackOrder.indexOf(id)),\n        tabIndex = apps.length + activeApps.length + index;\n    console.log(\"\".concat(id, \": 1750 + (\").concat(activeApps.length, \" - \").concat(stackOrder.indexOf(id), \") = \").concat(zIndex));\n    return windowed ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_3__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      lockAspectRatio: lockAspectRatio,\n      hideScrollbars: hideScrollbars,\n      tabIndex: tabIndex,\n      zIndex: zIndex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 15\n      }\n    })) : __jsx(App, {\n      key: id,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      tabIndex: tabIndex,\n      zIndex: zIndex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"eqDMOX0t8O7ITKWy5Wdip824U28=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsInVzZVN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpbmRvd01hcmdpbnMiLCJzZXRXaW5kb3dNYXJnaW5zIiwiYWN0aXZlQXBwcyIsImZpbHRlciIsInJ1bm5pbmciLCJtaW5pbWl6ZWQiLCJvbk1pbmltaXplIiwiaWQiLCJ1cGRhdGUiLCJvbkNsb3NlIiwic3RhY2tPcmRlciIsIm9uRm9jdXMiLCJmb3JlZ3JvdW5kIiwiZm9yRWFjaCIsImFwcElkIiwid2luZG93SWQiLCJvbkJsdXIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJtYXAiLCJpbmRleCIsIkFwcCIsImNvbXBvbmVudCIsIm5hbWUiLCJ3aW5kb3dlZCIsImxvY2tBc3BlY3RSYXRpbyIsImhpZGVTY3JvbGxiYXJzIiwiekluZGV4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInRhYkluZGV4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyx3REFBVSxDQUFDQywwREFBRCxDQURSO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxVQURpQixlQUNqQkEsVUFEaUI7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQztBQUMzQ0MsYUFBUyxFQUFFLENBRGdDO0FBRTNDQyxjQUFVLEVBQUU7QUFGK0IsR0FBRCxDQUZmO0FBQUEsTUFFNUJDLGFBRjRCO0FBQUEsTUFFYkMsZ0JBRmE7QUFBQSxNQU03QkMsVUFONkIsR0FNVlAsSUFBSSxDQUFDUSxNQUFMLENBQ2pCO0FBQUEs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LENBREgsQ0FERjtBQWtERCxDQTNGTTs7R0FBTXJDLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzLCBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KSxcbiAgICBhY3RpdmVBcHBzOiBBcHBzID0gYXBwcy5maWx0ZXIoXG4gICAgICAoeyBydW5uaW5nLCBtaW5pbWl6ZWQgfSkgPT4gcnVubmluZyAmJiAhbWluaW1pemVkXG4gICAgKSxcbiAgICBvbk1pbmltaXplID0gKGlkOiBzdHJpbmcpID0+ICgpID0+XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KSxcbiAgICBvbkNsb3NlID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICAgIC8vIFRPRE86IHVwZGF0ZUFwcHMgYWNjZXB0IG11bHRpIGFyZ3NcbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgcnVubmluZzogZmFsc2UgfSwgaWQgfSk7XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IHN0YWNrT3JkZXI6IFtdIH0sIGlkIH0pO1xuICAgIH0sXG4gICAgb25Gb2N1cyA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IHRydWUgfSwgaWQgfSk7XG4gICAgICAvLyBUT0RPOiBTdG9yaW5nIHN0YWNrIGluIGV2ZXJ5IGFwcCBpcyBzaWxseSwgZml4IHRoaXMgc29tZWhvd1xuICAgICAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCwgc3RhY2tPcmRlciB9KSA9PiB7XG4gICAgICAgIHVwZGF0ZUFwcHMoe1xuICAgICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgICAgc3RhY2tPcmRlcjogW1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgLi4uc3RhY2tPcmRlci5maWx0ZXIoKHdpbmRvd0lkOiBzdHJpbmcpID0+IHdpbmRvd0lkICE9PSBpZClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGlkOiBhcHBJZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25CbHVyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IGZhbHNlIH0sIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2luZG93TWFyZ2lucyh7XG4gICAgICBtYXJnaW5Ub3A6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDc1LFxuICAgICAgbWFyZ2luTGVmdDogd2luZG93LmlubmVyV2lkdGggKiAwLjA3NVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzdHlsZT17d2luZG93TWFyZ2luc30+XG4gICAgICB7YWN0aXZlQXBwcy5tYXAoXG4gICAgICAgIChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHdpbmRvd2VkLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgaGlkZVNjcm9sbGJhcnMsXG4gICAgICAgICAgICBzdGFja09yZGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApID0+IHtcbiAgICAgICAgICBjb25zdCB6SW5kZXggPSAxNzUwICsgKGFjdGl2ZUFwcHMubGVuZ3RoIC0gc3RhY2tPcmRlci5pbmRleE9mKGlkKSksXG4gICAgICAgICAgICB0YWJJbmRleCA9IGFwcHMubGVuZ3RoICsgYWN0aXZlQXBwcy5sZW5ndGggKyBpbmRleDtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2lkfTogMTc1MCArICgke2FjdGl2ZUFwcHMubGVuZ3RofSAtICR7c3RhY2tPcmRlci5pbmRleE9mKGlkKX0pID0gJHt6SW5kZXh9YCk7XG5cbiAgICAgICAgICByZXR1cm4gd2luZG93ZWQgPyAoXG4gICAgICAgICAgICA8V2luZG93XG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemUoaWQpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlKGlkKX1cbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1cyhpZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyKGlkKX1cbiAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzPXtoaWRlU2Nyb2xsYmFyc31cbiAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAgICAgICB6SW5kZXg9e3pJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9XaW5kb3c+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgb25NaW5pbWl6ZT17b25NaW5pbWl6ZShpZCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2UoaWQpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzKGlkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXIoaWQpfVxuICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgICAgICAgIHpJbmRleD17ekluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ })

})