webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      stackOrder = _useState2[0],\n      updateStackOrder = _useState2[1],\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  }),\n      onMinimize = function onMinimize(id) {\n    return function () {\n      return updateApps({\n        update: {\n          minimized: true\n        },\n        id: id\n      });\n    };\n  },\n      onClose = function onClose(id) {\n    return function () {\n      updateApps({\n        update: {\n          running: false\n        },\n        id: id\n      });\n      updateStackOrder(stackOrder.filter(function (window) {\n        return window !== id;\n      }));\n    };\n  },\n      onFocus = function onFocus(id) {\n    return function () {\n      updateApps({\n        update: {\n          foreground: true\n        },\n        id: id\n      });\n      updateStackOrder([id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder.filter(function (window) {\n        return window !== id;\n      }))));\n    };\n  },\n      onBlur = function onBlur(id) {\n    return function () {\n      return updateApps({\n        update: {\n          foreground: false\n        },\n        id: id\n      });\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: window.innerHeight * 0.075,\n      marginLeft: window.innerWidth * 0.075\n    });\n  }, []);\n  return __jsx(\"section\", {\n    style: windowMargins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref2, index) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name,\n        windowed = _ref2.windowed,\n        lockAspectRatio = _ref2.lockAspectRatio,\n        hideScrollbars = _ref2.hideScrollbars;\n    return windowed ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_3__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      lockAspectRatio: lockAspectRatio,\n      hideScrollbars: hideScrollbars,\n      tabIndex: apps.length * 2 + index // TODO: Are all tabindexes correct?\n      ,\n      zIndex: 1750 + (activeApps.length - stackOrder.indexOf(id)),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    })) : __jsx(App, {\n      key: id,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      zIndex: 1750 + stackOrder.indexOf(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"sxadRe/hUy2ASOGFswjhszd0G7k=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsInVzZVN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpbmRvd01hcmdpbnMiLCJzZXRXaW5kb3dNYXJnaW5zIiwic3RhY2tPcmRlciIsInVwZGF0ZVN0YWNrT3JkZXIiLCJhY3RpdmVBcHBzIiwiZmlsdGVyIiwicnVubmluZyIsIm1pbmltaXplZCIsIm9uTWluaW1pemUiLCJpZCIsInVwZGF0ZSIsIm9uQ2xvc2UiLCJ3aW5kb3ciLCJvbkZvY3VzIiwiZm9yZWdyb3VuZCIsIm9uQmx1ciIsInVzZUVmZmVjdCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm1hcCIsImluZGV4IiwiQXBwIiwiY29tcG9uZW50IiwibmFtZSIsIndpbmRvd2VkIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUFXLEdBQUcsU0FBZEEsT0FBYyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0ZDLHdEQUFVLENBQUNDLDBEQUFELENBRFI7QUFBQSxNQUN2QkMsSUFEdUIsZUFDdkJBLElBRHVCO0FBQUEsTUFDakJDLFVBRGlCLGVBQ2pCQSxVQURpQjtBQUFBLGtCQUVPQyxzREFBUSxDQUFDO0FBQzNDQyxhQUFTLEVBQUUsQ0FEZ0M7QUFFM0NDLGNBQVUsRUFBRTtBQUYrQixHQUFELENBRmY7QUFBQSxNQUU1QkMsYUFGNEI7QUFBQSxNQUViQyxnQkFGYTtBQUFBLG1CQU1JSixzREFBUSxDQUFnQixFQUFoQixDQU5aO0FBQUEsTUFNNUJLLFVBTjRCO0FBQUEsTUFNaEJDLGdCQU5nQjtBQUFBLE1BTzdCQyxVQVA2QixHQU9WVCxJ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Z0MsTUFBTCxHQUFjLENBQWQsR0FBa0JQLEtBVDlCLENBU3FDO0FBVHJDO0FBVUUsWUFBTSxFQUFFLFFBQVFoQixVQUFVLENBQUN1QixNQUFYLEdBQW9CekIsVUFBVSxDQUFDMEIsT0FBWCxDQUFtQm5CLEVBQW5CLENBQTVCLENBVlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVlFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkYsQ0FETSxHQWdCTixNQUFDLEdBQUQ7QUFDRSxTQUFHLEVBQUVBLEVBRFA7QUFFRSxnQkFBVSxFQUFFRCxVQUFVLENBQUNDLEVBQUQsQ0FGeEI7QUFHRSxhQUFPLEVBQUVFLE9BQU8sQ0FBQ0YsRUFBRCxDQUhsQjtBQUlFLGFBQU8sRUFBRUksT0FBTyxDQUFDSixFQUFELENBSmxCO0FBS0UsWUFBTSxFQUFFTSxNQUFNLENBQUNOLEVBQUQsQ0FMaEI7QUFNRSxZQUFNLEVBQUUsT0FBT1AsVUFBVSxDQUFDMEIsT0FBWCxDQUFtQm5CLEVBQW5CLENBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQko7QUFBQSxHQURELENBREgsQ0FERjtBQTBDRCxDQXhFTTs7R0FBTWpCLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzLCBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KSxcbiAgICBbc3RhY2tPcmRlciwgdXBkYXRlU3RhY2tPcmRlcl0gPSB1c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSksIC8vIFRPRE86IFJlZHVjZXIgaW5zdGVhZFxuICAgIGFjdGl2ZUFwcHM6IEFwcHMgPSBhcHBzLmZpbHRlcihcbiAgICAgICh7IHJ1bm5pbmcsIG1pbmltaXplZCB9KSA9PiBydW5uaW5nICYmICFtaW5pbWl6ZWRcbiAgICApLFxuICAgIG9uTWluaW1pemUgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT5cbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgbWluaW1pemVkOiB0cnVlIH0sIGlkIH0pLFxuICAgIG9uQ2xvc2UgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgICAgdXBkYXRlQXBwcyh7IHVwZGF0ZTogeyBydW5uaW5nOiBmYWxzZSB9LCBpZCB9KTtcbiAgICAgIHVwZGF0ZVN0YWNrT3JkZXIoc3RhY2tPcmRlci5maWx0ZXIod2luZG93ID0+IHdpbmRvdyAhPT0gaWQpKTtcbiAgICB9LFxuICAgIG9uRm9jdXMgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgICAgdXBkYXRlQXBwcyh7IHVwZGF0ZTogeyBmb3JlZ3JvdW5kOiB0cnVlIH0sIGlkIH0pO1xuICAgICAgdXBkYXRlU3RhY2tPcmRlcihbaWQsIC4uLnN0YWNrT3JkZXIuZmlsdGVyKHdpbmRvdyA9PiB3aW5kb3cgIT09IGlkKV0pO1xuICAgIH0sXG4gICAgb25CbHVyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IGZhbHNlIH0sIGlkIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2luZG93TWFyZ2lucyh7XG4gICAgICBtYXJnaW5Ub3A6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDc1LFxuICAgICAgbWFyZ2luTGVmdDogd2luZG93LmlubmVyV2lkdGggKiAwLjA3NVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzdHlsZT17d2luZG93TWFyZ2luc30+XG4gICAgICB7YWN0aXZlQXBwcy5tYXAoXG4gICAgICAgIChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHdpbmRvd2VkLFxuICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgaGlkZVNjcm9sbGJhcnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICkgPT5cbiAgICAgICAgICB3aW5kb3dlZCA/IChcbiAgICAgICAgICAgIDxXaW5kb3dcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgb25NaW5pbWl6ZT17b25NaW5pbWl6ZShpZCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2UoaWQpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzKGlkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXIoaWQpfVxuICAgICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW89e2xvY2tBc3BlY3RSYXRpb31cbiAgICAgICAgICAgICAgaGlkZVNjcm9sbGJhcnM9e2hpZGVTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICB0YWJJbmRleD17YXBwcy5sZW5ndGggKiAyICsgaW5kZXh9IC8vIFRPRE86IEFyZSBhbGwgdGFiaW5kZXhlcyBjb3JyZWN0P1xuICAgICAgICAgICAgICB6SW5kZXg9ezE3NTAgKyAoYWN0aXZlQXBwcy5sZW5ndGggLSBzdGFja09yZGVyLmluZGV4T2YoaWQpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9XaW5kb3c+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgb25NaW5pbWl6ZT17b25NaW5pbWl6ZShpZCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2UoaWQpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzKGlkKX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXIoaWQpfVxuICAgICAgICAgICAgICB6SW5kZXg9ezE3NTAgKyBzdGFja09yZGVyLmluZGV4T2YoaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ })

})