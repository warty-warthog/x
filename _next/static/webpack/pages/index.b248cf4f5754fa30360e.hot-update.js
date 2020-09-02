webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Icons.tsx":
/*!*************************************!*\
  !*** ./components/System/Icons.tsx ***!
  \*************************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Icons\", function() { return Icons; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/Icons.module.scss */ \"./styles/System/Icons.module.scss\");\n/* harmony import */ var _styles_System_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/Icon */ \"./components/System/Icon.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Icons.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Icons = function Icons() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_3__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApp = _useContext.updateApp;\n\n  return __jsx(\"nav\", {\n    className: _styles_System_Icons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icons,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, apps.map(function (_ref, index) {\n    var id = _ref.id,\n        icon = _ref.icon,\n        name = _ref.name;\n    return __jsx(_components_System_Icon__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n      key: id,\n      icon: icon,\n      name: name,\n      onDoubleClick: function onDoubleClick() {\n        var _ref2 = apps.find(function (_ref3) {\n          var appId = _ref3.id;\n          return id === appId;\n        }) || {},\n            running = _ref2.running;\n\n        console.log(_objectSpread(_objectSpread({}, running ? {\n          running: true\n        } : {\n          foreground: true\n        }), {}, {\n          lastRunning: new Date()\n        }));\n        updateApp({\n          updates: _objectSpread(_objectSpread({}, running ? {\n            running: true\n          } : {\n            foreground: true\n          }), {}, {\n            lastRunning: new Date()\n          }),\n          id: id\n        });\n      },\n      tabIndex: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    });\n  })));\n};\n\n_s(Icons, \"vnr2f2uaOxHAMOVp8mMEvFyRCGU=\");\n\n_c = Icons;\n\nvar _c;\n\n$RefreshReg$(_c, \"Icons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vSWNvbnMudHN4P2IwMzEiXSwibmFtZXMiOlsiSWNvbnMiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwIiwic3R5bGVzIiwiaWNvbnMiLCJtYXAiLCJpbmRleCIsImlkIiwiaWNvbiIsIm5hbWUiLCJmaW5kIiwiYXBwSWQiLCJydW5uaW5nIiwiY29uc29sZSIsImxvZyIsImZvcmVncm91bmQiLCJsYXN0UnVubmluZyIsIkRhdGUiLCJ1cGRhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0RDLHdEQUFVLENBQUNDLDBEQUFELENBRFQ7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCO0FBQUEsTUFDZkMsU0FEZSxlQUNmQSxTQURlOztBQUc3QixTQUNFO0FBQUssYUFBUyxFQUFFQyx1RUFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxnQkFBcUJDLEtBQXJCO0FBQUEsUUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsUUFBT0MsSUFBUCxRQUFPQSxJQUFQO0FBQUEsUUFBYUMsSUFBYixRQUFhQSxJQUFiO0FBQUEsV0FDUixNQUFDLDREQUFEO0FBQ0UsU0FBRyxFQUFFRixFQURQO0FBRUUsVUFBSSxFQUFFQyxJQUZSO0FBR0UsVUFBSSxFQUFFQyxJQUhSO0FBSUUsbUJBQWEsRUFBRSx5QkFBTTtBQUFBLG9CQUNDUixJQUFJLENBQUNTLElBQUwsQ0FBVTtBQUFBLGNBQU9DLEtBQVAsU0FBR0osRUFBSDtBQUFBLGlCQUFtQkEsRUFBRSxLQUFLSSxLQUExQjtBQUFBLFNBQVYsS0FBOEMsRUFEL0M7QUFBQSxZQUNYQyxPQURXLFNBQ1hBLE9BRFc7O0FBRWpDQyxlQUFPLENBQUNDLEdBQVIsaUNBQWtCRixPQUFPLEdBQUc7QUFBRUEsaUJBQU8sRUFBRTtBQUFYLFNBQUgsR0FBdUI7QUFBRUcsb0JBQVUsRUFBRTtBQUFkLFNBQWhEO0FBQXVFQyxxQkFBVyxFQUFFLElBQUlDLElBQUo7QUFBcEY7QUFDY2YsaUJBQVMsQ0FBQztBQUNSZ0IsaUJBQU8sa0NBQVFOLE9BQU8sR0FBRztBQUFFQSxtQkFBTyxFQUFFO0FBQVgsV0FBSCxHQUF1QjtBQUFFRyxzQkFBVSxFQUFFO0FBQWQsV0FBdEM7QUFBNkRDLHVCQUFXLEVBQUUsSUFBSUMsSUFBSjtBQUExRSxZQURDO0FBRVJWLFlBQUUsRUFBRkE7QUFGUSxTQUFELENBQVQ7QUFJRCxPQVhIO0FBWUUsY0FBUSxFQUFFRCxLQVpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQURGLENBREY7QUFzQkQsQ0F6Qk07O0dBQU1SLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9JY29ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9JY29ucy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9JY29uJztcblxuZXhwb3J0IGNvbnN0IEljb25zOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBhcHBzLCB1cGRhdGVBcHAgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICA8b2w+XG4gICAgICAgIHthcHBzLm1hcCgoeyBpZCwgaWNvbiwgbmFtZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcnVubmluZyB9ID0gYXBwcy5maW5kKCh7IGlkOiBhcHBJZCB9KSA9PiBpZCA9PT0gYXBwSWQpIHx8IHt9O1xuY29uc29sZS5sb2coeyAuLi4ocnVubmluZyA/IHsgcnVubmluZzogdHJ1ZSB9IDogeyBmb3JlZ3JvdW5kOiB0cnVlIH0pLCBsYXN0UnVubmluZzogbmV3IERhdGUoKSB9KTtcbiAgICAgICAgICAgICAgdXBkYXRlQXBwKHtcbiAgICAgICAgICAgICAgICB1cGRhdGVzOiB7IC4uLihydW5uaW5nID8geyBydW5uaW5nOiB0cnVlIH0gOiB7IGZvcmVncm91bmQ6IHRydWUgfSksIGxhc3RSdW5uaW5nOiBuZXcgRGF0ZSgpIH0sXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGFiSW5kZXg9e2luZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Icons.tsx\n");

/***/ })

})