webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_1__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  });\n\n  return __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref2, index) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name,\n        withWindow = _ref2.withWindow;\n    return withWindow ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_2__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: function onMinimize() {\n        return updateApps({\n          update: {\n            minimized: true\n          },\n          id: id\n        });\n      },\n      onClose: function onClose() {\n        return updateApps({\n          update: {\n            running: false\n          },\n          id: id\n        });\n      },\n      onFocus: function onFocus() {\n        return updateApps({\n          update: {\n            foreground: true\n          },\n          id: id\n        });\n      },\n      onBlur: function onBlur() {\n        return updateApps({\n          update: {\n            foreground: false\n          },\n          id: id\n        });\n      },\n      tabIndex: apps.length * 2 + index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    })) : __jsx(App, {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsImFjdGl2ZUFwcHMiLCJmaWx0ZXIiLCJydW5uaW5nIiwibWluaW1pemVkIiwibWFwIiwiaW5kZXgiLCJBcHAiLCJjb21wb25lbnQiLCJpZCIsIm5hbWUiLCJ3aXRoV2luZG93IiwidXBkYXRlIiwiZm9yZWdyb3VuZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyx3REFBVSxDQUFDQywwREFBRCxDQURSO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxVQURpQixlQUNqQkEsVUFEaUI7QUFBQSxNQUU3QkMsVUFGNkIsR0FFaEJGLElBQUksQ0FBQ0csTUFBTCxDQUFZO0FBQUEsUUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsUUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsV0FBNEJELE9BQU8sSUFBSSxDQUFDQyxTQUF4QztBQUFBLEdBQVosQ0FGZ0I7O0FBSS9CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxpQkFBMkNDLEtBQTNDO0FBQUEsUUFBY0MsR0FBZCxTQUFHQyxTQUFIO0FBQUEsUUFBbUJDLEVBQW5CLFNBQW1CQSxFQUFuQjtBQUFBLFFBQXVCQyxJQUF2QixTQUF1QkEsSUFBdkI7QUFBQSxRQUE2QkMsVUFBN0IsU0FBNkJBLFVBQTdCO0FBQUEsV0FDZEEsVUFBVSxHQUNOLE1BQUMseURBQUQ7QUFDQSxTQUFHLEVBQUVGLEVBREw7QUFFQSxVQUFJLEVBQUVDLElBRk47QUFHQSxnQkFBVSxFQUFFO0FBQUEsZUFBTVYsVUFBVSxDQUFDO0FBQUVZLGdCQUFNLEVBQUU7QUFBRVIscUJBQVMsRUFBRTtBQUFiLFdBQVY7QUFBK0JLLFlBQUUsRUFBRkE7QUFBL0IsU0FBRCxDQUFoQjtBQUFBLE9BSFo7QUFJQSxhQUFPLEVBQUU7QUFBQSxlQUFNVCxVQUFVLENBQUM7QUFBRVksZ0JBQU0sRUFBRTtBQUFFVCxtQkFBTyxFQUFFO0FBQVgsV0FBVjtBQUE4Qk0sWUFBRSxFQUFGQTtBQUE5QixTQUFELENBQWhCO0FBQUEsT0FKVDtBQUtBLGFBQU8sRUFBRTtBQUFBLGVBQU1ULFVBQVUsQ0FBQztBQUFFWSxnQkFBTSxFQUFFO0FBQUVDLHNCQUFVLEVBQUU7QUFBZCxXQUFWO0FBQWdDSixZQUFFLEVBQUZBO0FBQWhDLFNBQUQsQ0FBaEI7QUFBQSxPQUxUO0FBTUEsWUFBTSxFQUFFO0FBQUEsZUFBTVQsVUFBVSxDQUFDO0FBQUVZLGdCQUFNLEVBQUU7QUFBRUMsc0JBQVUsRUFBRTtBQUFkLFdBQVY7QUFBaUNKLFlBQUUsRUFBRkE7QUFBakMsU0FBRCxDQUFoQjtBQUFBLE9BTlI7QUFPQSxjQUFRLEVBQUVWLElBQUksQ0FBQ2UsTUFBTCxHQUFjLENBQWQsR0FBa0JSLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTQSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRBLENBRE0sR0FZTixNQUFDLEdBQUQ7QUFBSyxTQUFHLEVBQUVHLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJVO0FBQUEsR0FBZixDQURILENBREY7QUFtQkQsQ0F2Qk07O0dBQU1iLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIGFjdGl2ZUFwcHMgPSBhcHBzLmZpbHRlcigoeyBydW5uaW5nLCBtaW5pbWl6ZWQgfSkgPT4gcnVubmluZyAmJiAhbWluaW1pemVkKTtcblxuICByZXR1cm4gKFxuICAgIDxvbD5cbiAgICAgIHthY3RpdmVBcHBzLm1hcCgoeyBjb21wb25lbnQ6IEFwcCwgaWQsIG5hbWUsIHdpdGhXaW5kb3cgfSwgaW5kZXgpID0+IChcbiAgICAgICAgd2l0aFdpbmRvd1xuICAgICAgICAgID8gPFdpbmRvd1xuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBvbk1pbmltaXplPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgcnVubmluZzogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IHRydWUgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgZm9yZWdyb3VuZDogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICB0YWJJbmRleD17YXBwcy5sZW5ndGggKiAyICsgaW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgIDwvV2luZG93PlxuICAgICAgICAgIDogPEFwcCBrZXk9e2lkfSAvPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ })

})