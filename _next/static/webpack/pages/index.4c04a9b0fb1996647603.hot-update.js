webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n // TODO: REORDER ON SELECTION ZINDEX/FOREGROUND/STACK\n// A State that pops id's into an array and removes them when app is closed\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      stackOrder = _useState2[0],\n      updateStackOrder = _useState2[1],\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  }),\n      onMinimize = function onMinimize(id) {\n    return function () {\n      return updateApps({\n        update: {\n          minimized: true\n        },\n        id: id\n      });\n    };\n  },\n      onClose = function onClose(id) {\n    return function () {\n      updateApps({\n        update: {\n          running: false\n        },\n        id: id\n      });\n      updateStackOrder(stackOrder.filter(function (window) {\n        return window !== id;\n      }));\n    };\n  },\n      onFocus = function onFocus(id) {\n    return function () {\n      updateApps({\n        update: {\n          foreground: true\n        },\n        id: id\n      });\n      updateStackOrder([id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder.filter(function (window) {\n        return window !== id;\n      }))));\n    };\n  },\n      onBlur = function onBlur(id) {\n    return function () {\n      return updateApps({\n        update: {\n          foreground: false\n        },\n        id: id\n      });\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: window.innerHeight * 0.075,\n      marginLeft: window.innerWidth * 0.075\n    });\n  }, []);\n  return __jsx(\"section\", {\n    style: windowMargins,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref2, index) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name,\n        windowed = _ref2.windowed,\n        lockAspectRatio = _ref2.lockAspectRatio,\n        hideScrollbars = _ref2.hideScrollbars;\n    return windowed ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_3__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      lockAspectRatio: lockAspectRatio,\n      hideScrollbars: hideScrollbars,\n      tabIndex: apps.length * 2 + index // TODO: Are all tabindexes correct?\n      ,\n      zIndex: 1750 + stackOrder.indexOf(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 15\n      }\n    })) : __jsx(App, {\n      key: id,\n      onMinimize: onMinimize(id),\n      onClose: onClose(id),\n      onFocus: onFocus(id),\n      onBlur: onBlur(id),\n      zIndex: 1750 + stackOrder.indexOf(id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"sxadRe/hUy2ASOGFswjhszd0G7k=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsInVzZVN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIndpbmRvd01hcmdpbnMiLCJzZXRXaW5kb3dNYXJnaW5zIiwic3RhY2tPcmRlciIsInVwZGF0ZVN0YWNrT3JkZXIiLCJhY3RpdmVBcHBzIiwiZmlsdGVyIiwicnVubmluZyIsIm1pbmltaXplZCIsIm9uTWluaW1pemUiLCJpZCIsInVwZGF0ZSIsIm9uQ2xvc2UiLCJ3aW5kb3ciLCJvbkZvY3VzIiwiZm9yZWdyb3VuZCIsIm9uQmx1ciIsInVzZUVmZmVjdCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm1hcCIsImluZGV4IiwiQXBwIiwiY29tcG9uZW50IiwibmFtZSIsIndpbmRvd2VkIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFTyxJQUFNQSxPQUFXLEdBQUcsU0FBZEEsT0FBYyxHQUFNO0FBQUE7O0FBQUEsb0JBQ0ZDLHdEQUFVLENBQUNDLDBEQUFELENBRFI7QUFBQSxNQUN2QkMsSUFEdUIsZUFDdkJBLElBRHVCO0FBQUEsTUFDakJDLFVBRGlCLGVBQ2pCQSxVQURpQjtBQUFBLGtCQUVPQyxzREFBUSxDQUFDO0FBQzNDQyxhQUFTLEVBQUUsQ0FEZ0M7QUFFM0NDLGNBQVUsRUFBRTtBQUYrQixHQUFELENBRmY7QUFBQSxNQUU1QkMsYUFGNEI7QUFBQSxNQUViQyxnQkFGYTtBQUFBLG1CQU1JSixzREFBUSxDQUFnQixFQUFoQixDQU5aO0FBQUEsTUFNNUJLLFVBTjRCO0FBQUEsTUFNaEJDLGdCQU5nQjtBQUFBLE1BTzdCQyxVQVA2QixH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SSxDQUFDZ0MsTUFBTCxHQUFjLENBQWQsR0FBa0JQLEtBVDlCLENBU3FDO0FBVHJDO0FBVUUsWUFBTSxFQUFFLE9BQU9sQixVQUFVLENBQUMwQixPQUFYLENBQW1CbkIsRUFBbkIsQ0FWakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVlFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkYsQ0FETSxHQWdCTixNQUFDLEdBQUQ7QUFDRSxTQUFHLEVBQUVBLEVBRFA7QUFFRSxnQkFBVSxFQUFFRCxVQUFVLENBQUNDLEVBQUQsQ0FGeEI7QUFHRSxhQUFPLEVBQUVFLE9BQU8sQ0FBQ0YsRUFBRCxDQUhsQjtBQUlFLGFBQU8sRUFBRUksT0FBTyxDQUFDSixFQUFELENBSmxCO0FBS0UsWUFBTSxFQUFFTSxNQUFNLENBQUNOLEVBQUQsQ0FMaEI7QUFNRSxZQUFNLEVBQUUsT0FBT1AsVUFBVSxDQUFDMEIsT0FBWCxDQUFtQm5CLEVBQW5CLENBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQko7QUFBQSxHQURELENBREgsQ0FERjtBQTBDRCxDQXhFTTs7R0FBTWpCLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzLCBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuLy8gVE9ETzogUkVPUkRFUiBPTiBTRUxFQ1RJT04gWklOREVYL0ZPUkVHUk9VTkQvU1RBQ0tcbi8vIEEgU3RhdGUgdGhhdCBwb3BzIGlkJ3MgaW50byBhbiBhcnJheSBhbmQgcmVtb3ZlcyB0aGVtIHdoZW4gYXBwIGlzIGNsb3NlZFxuXG5leHBvcnQgY29uc3QgV2luZG93czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgdXBkYXRlQXBwcyB9ID0gdXNlQ29udGV4dChBcHBzQ29udGV4dCksXG4gICAgW3dpbmRvd01hcmdpbnMsIHNldFdpbmRvd01hcmdpbnNdID0gdXNlU3RhdGUoe1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luTGVmdDogMFxuICAgIH0pLFxuICAgIFtzdGFja09yZGVyLCB1cGRhdGVTdGFja09yZGVyXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKSwgLy8gVE9ETzogUmVkdWNlciBpbnN0ZWFkXG4gICAgYWN0aXZlQXBwczogQXBwcyA9IGFwcHMuZmlsdGVyKFxuICAgICAgKHsgcnVubmluZywgbWluaW1pemVkIH0pID0+IHJ1bm5pbmcgJiYgIW1pbmltaXplZFxuICAgICksXG4gICAgb25NaW5pbWl6ZSA9IChpZDogc3RyaW5nKSA9PiAoKSA9PlxuICAgICAgdXBkYXRlQXBwcyh7IHVwZGF0ZTogeyBtaW5pbWl6ZWQ6IHRydWUgfSwgaWQgfSksXG4gICAgb25DbG9zZSA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IHJ1bm5pbmc6IGZhbHNlIH0sIGlkIH0pO1xuICAgICAgdXBkYXRlU3RhY2tPcmRlcihzdGFja09yZGVyLmZpbHRlcih3aW5kb3cgPT4gd2luZG93ICE9PSBpZCkpO1xuICAgIH0sXG4gICAgb25Gb2N1cyA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgICB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IHRydWUgfSwgaWQgfSk7XG4gICAgICB1cGRhdGVTdGFja09yZGVyKFtpZCwgLi4uc3RhY2tPcmRlci5maWx0ZXIod2luZG93ID0+IHdpbmRvdyAhPT0gaWQpXSk7XG4gICAgfSxcbiAgICBvbkJsdXIgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT5cbiAgICAgIHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgZm9yZWdyb3VuZDogZmFsc2UgfSwgaWQgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dNYXJnaW5zKHtcbiAgICAgIG1hcmdpblRvcDogd2luZG93LmlubmVySGVpZ2h0ICogMC4wNzUsXG4gICAgICBtYXJnaW5MZWZ0OiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDc1XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN0eWxlPXt3aW5kb3dNYXJnaW5zfT5cbiAgICAgIHthY3RpdmVBcHBzLm1hcChcbiAgICAgICAgKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgd2luZG93ZWQsXG4gICAgICAgICAgICBsb2NrQXNwZWN0UmF0aW8sXG4gICAgICAgICAgICBoaWRlU2Nyb2xsYmFyc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgKSA9PlxuICAgICAgICAgIHdpbmRvd2VkID8gKFxuICAgICAgICAgICAgPFdpbmRvd1xuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBvbk1pbmltaXplPXtvbk1pbmltaXplKGlkKX1cbiAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZShpZCl9XG4gICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXMoaWQpfVxuICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cihpZCl9XG4gICAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgICAgICBoaWRlU2Nyb2xsYmFycz17aGlkZVNjcm9sbGJhcnN9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXthcHBzLmxlbmd0aCAqIDIgKyBpbmRleH0gLy8gVE9ETzogQXJlIGFsbCB0YWJpbmRleGVzIGNvcnJlY3Q/XG4gICAgICAgICAgICAgIHpJbmRleD17MTc1MCArIHN0YWNrT3JkZXIuaW5kZXhPZihpZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgIDwvV2luZG93PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXBwXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemUoaWQpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlKGlkKX1cbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1cyhpZCl9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyKGlkKX1cbiAgICAgICAgICAgICAgekluZGV4PXsxNzUwICsgc3RhY2tPcmRlci5pbmRleE9mKGlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanM/NmI3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzPzYwMDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ25DO0FBQ2YsaUNBQWlDLGlFQUFnQjtBQUNqRCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcz9kYjkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzPzM0MjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzPzI5MDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ0o7QUFDc0I7QUFDbEI7QUFDckM7QUFDZixTQUFTLGtFQUFpQixTQUFTLGdFQUFlLFNBQVMsMkVBQTBCLFNBQVMsa0VBQWlCO0FBQy9HIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzPzA2YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ25DO0FBQ2Y7QUFDQSxvQ0FBb0MsaUVBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixpRUFBZ0I7QUFDdEciLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\n");

/***/ })

})