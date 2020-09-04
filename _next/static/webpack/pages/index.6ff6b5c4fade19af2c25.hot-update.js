webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Explorer.tsx":
/*!**************************************!*\
  !*** ./components/Apps/Explorer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_Explorer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Explorer.png */ \"./assets/icons/Explorer.png\");\n/* harmony import */ var _assets_icons_Explorer_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Explorer_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var _contexts_Files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Files */ \"./contexts/Files.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Explorer.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar DirectoryListing = function DirectoryListing(_ref) {\n  _s();\n\n  var _ref$dir = _ref.dir,\n      dir = _ref$dir === void 0 ? '/' : _ref$dir;\n\n  var fs = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Files__WEBPACK_IMPORTED_MODULE_5__[\"FilesContext\"]),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      directoryContents = _useState[0],\n      setDirectoryContents = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _fs$readdir;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, dir, /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_error) {\n        var contents,\n            contentsWithStats,\n            _args2 = arguments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                contents = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];\n                _context2.next = 3;\n                return Promise.all(contents.map( /*#__PURE__*/function () {\n                  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {\n                    var path, stats;\n                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            path = \"\".concat(dir).concat(file);\n                            _context.next = 3;\n                            return new Promise(function (resolve) {\n                              var _fs$stat;\n\n                              return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n                                return resolve(stats);\n                              });\n                            });\n\n                          case 3:\n                            stats = _context.sent;\n                            return _context.abrupt(\"return\", {\n                              path: path,\n                              stats: stats\n                            });\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x2) {\n                    return _ref3.apply(this, arguments);\n                  };\n                }()));\n\n              case 3:\n                contentsWithStats = _context2.sent;\n                setDirectoryContents(contentsWithStats);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, [fs]);\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, directoryContents.map(function (_ref4) {\n    var path = _ref4.path,\n        stats = _ref4.stats;\n    return __jsx(\"li\", {\n      key: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, \"name: \", path, \", size: \", stats === null || stats === void 0 ? void 0 : stats.size);\n  })));\n};\n\n_s(DirectoryListing, \"yvktZe+rfM+yL4qtSmIz+ODAaJ0=\");\n\n_c = DirectoryListing;\n\nvar Explorer = function Explorer() {\n  return __jsx(_contexts_Files__WEBPACK_IMPORTED_MODULE_5__[\"FilesProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(DirectoryListing, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = Explorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  component: Explorer,\n  icon: _assets_icons_Explorer_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n  name: 'Explorer'\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DirectoryListing\");\n$RefreshReg$(_c2, \"Explorer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL0V4cGxvcmVyLnRzeD81ZDY0Il0sIm5hbWVzIjpbIkRpcmVjdG9yeUxpc3RpbmciLCJkaXIiLCJmcyIsInVzZUNvbnRleHQiLCJGaWxlc0NvbnRleHQiLCJ1c2VTdGF0ZSIsImRpcmVjdG9yeUNvbnRlbnRzIiwic2V0RGlyZWN0b3J5Q29udGVudHMiLCJ1c2VFZmZlY3QiLCJyZWFkZGlyIiwiX2Vycm9yIiwiY29udGVudHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmlsZSIsInBhdGgiLCJyZXNvbHZlIiwic3RhdCIsInN0YXRzIiwiY29udGVudHNXaXRoU3RhdHMiLCJzaXplIiwiRXhwbG9yZXIiLCJBcHAiLCJjb21wb25lbnQiLCJpY29uIiwiRXhwbG9yZXJJY29uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBOztBQVdBLElBQU1BLGdCQUErQixHQUFHLFNBQWxDQSxnQkFBa0MsT0FBbUI7QUFBQTs7QUFBQSxzQkFBaEJDLEdBQWdCO0FBQUEsTUFBaEJBLEdBQWdCLHlCQUFWLEdBQVU7O0FBQ25ELE1BQUFDLEVBQUUsR0FBR0Msd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBZjtBQUFBLGtCQUN3Q0Msc0RBQVEsQ0FBMEIsRUFBMUIsQ0FEaEQ7QUFBQSxNQUNIQyxpQkFERztBQUFBLE1BQ2dCQyxvQkFEaEI7O0FBR05DLHlEQUFTLENBQUMsWUFBTTtBQUFBOztBQUNkTixNQUFFLFNBQUYsSUFBQUEsRUFBRSxXQUFGLDJCQUFBQSxFQUFFLENBQUVPLE9BQUosaUVBQUFQLEVBQUUsRUFBWUQsR0FBWjtBQUFBLG1NQUFpQixrQkFBT1MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWVDLHdCQUFmLDhEQUEwQixFQUExQjtBQUFBO0FBQUEsdUJBQ2VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLEdBQVQ7QUFBQSwrTUFBYSxpQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakRDLGdDQURpRCxhQUN2Q2YsR0FEdUMsU0FDakNjLElBRGlDO0FBQUE7QUFBQSxtQ0FFdkMsSUFBSUgsT0FBSixDQUFZLFVBQUFLLE9BQU87QUFBQTs7QUFBQSxxQ0FBSWYsRUFBSixhQUFJQSxFQUFKLG1DQUFJQSxFQUFFLENBQUVnQixJQUFSLDZDQUFJLGNBQUFoQixFQUFFLEVBQVNjLElBQVQsRUFBZSxVQUFDTixNQUFELEVBQVNTLEtBQVQ7QUFBQSx1Q0FBbUJGLE9BQU8sQ0FBQ0UsS0FBRCxDQUExQjtBQUFBLCtCQUFmLENBQU47QUFBQSw2QkFBbkIsQ0FGdUM7O0FBQUE7QUFFckRBLGlDQUZxRDtBQUFBLDZEQUkvQztBQUFFSCxrQ0FBSSxFQUFKQSxJQUFGO0FBQVFHLG1DQUFLLEVBQUxBO0FBQVIsNkJBSitDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFaLENBRGY7O0FBQUE7QUFDWEMsaUNBRFc7QUFRakJiLG9DQUFvQixDQUFDYSxpQkFBRCxDQUFwQjs7QUFSaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBRjtBQVVELEdBWFEsRUFXTixDQUFDbEIsRUFBRCxDQVhNLENBQVQ7QUFhQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLGlCQUFpQixDQUFDUSxHQUFsQixDQUFzQixpQkFBcUI7QUFBQSxRQUFsQkUsSUFBa0IsU0FBbEJBLElBQWtCO0FBQUEsUUFBWkcsS0FBWSxTQUFaQSxLQUFZO0FBQzFDLFdBQ0U7QUFBSSxTQUFHLEVBQUVILElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBc0JBLElBQXRCLGNBQW9DRyxLQUFwQyxhQUFvQ0EsS0FBcEMsdUJBQW9DQSxLQUFLLENBQUVFLElBQTNDLENBREY7QUFHRCxHQUpBLENBREgsQ0FERixDQURGO0FBV0QsQ0E1QkQ7O0dBQU1yQixnQjs7S0FBQUEsZ0I7O0FBOEJOLElBQU1zQixRQUFZLEdBQUcsU0FBZkEsUUFBZTtBQUFBLFNBQ25CLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRG1CO0FBQUEsQ0FBckI7O01BQU1BLFE7QUFNUyxtRUFBSUMscURBQUosQ0FBUTtBQUNyQkMsV0FBUyxFQUFFRixRQURVO0FBRXJCRyxNQUFJLEVBQUVDLGlFQUZlO0FBR3JCQyxNQUFJLEVBQUU7QUFIZSxDQUFSLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcHMvRXhwbG9yZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cGxvcmVySWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9FeHBsb3Jlci5wbmcnO1xuXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gJ2Jyb3dzZXJmcy9kaXN0L25vZGUvZ2VuZXJpYy9lbXNjcmlwdGVuX2ZzJztcblxuaW1wb3J0IHsgRkMsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ0AvY29udGV4dHMvQXBwJztcbmltcG9ydCB7IEZpbGVzQ29udGV4dCwgRmlsZXNQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvRmlsZXMnO1xuXG50eXBlIEZzUmVxdWVzdCA9IHtcbiAgZGlyPzogc3RyaW5nO1xufTtcblxudHlwZSBGc0RpcmVjdG9yeUVudHJ5ID0ge1xuICBwYXRoOiBzdHJpbmcsXG4gIHN0YXRzOiBTdGF0cyB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBEaXJlY3RvcnlMaXN0aW5nOiBGQzxGc1JlcXVlc3Q+ID0gKHsgZGlyID0gJy8nIH0pID0+IHtcbiAgY29uc3QgZnMgPSB1c2VDb250ZXh0KEZpbGVzQ29udGV4dCksXG4gICAgW2RpcmVjdG9yeUNvbnRlbnRzLCBzZXREaXJlY3RvcnlDb250ZW50c10gPSB1c2VTdGF0ZTxBcnJheTxGc0RpcmVjdG9yeUVudHJ5Pj4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnM/LnJlYWRkaXI/LihkaXIsIGFzeW5jIChfZXJyb3IsIGNvbnRlbnRzID0gW10pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRzV2l0aFN0YXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoY29udGVudHMubWFwKGFzeW5jIGZpbGUgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gYCR7ZGlyfSR7ZmlsZX1gLFxuICAgICAgICAgIHN0YXRzID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBmcz8uc3RhdD8uKHBhdGgsIChfZXJyb3IsIHN0YXRzKSA9PiByZXNvbHZlKHN0YXRzKSkpIGFzIFN0YXRzO1xuXG4gICAgICAgIHJldHVybiAoeyBwYXRoLCBzdGF0cyB9KTtcbiAgICAgIH0pKTtcblxuICAgICAgc2V0RGlyZWN0b3J5Q29udGVudHMoY29udGVudHNXaXRoU3RhdHMpO1xuICAgIH0pO1xuICB9LCBbZnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPG9sPlxuICAgICAgICB7ZGlyZWN0b3J5Q29udGVudHMubWFwKCh7IHBhdGgsIHN0YXRzIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17cGF0aH0+bmFtZToge3BhdGh9LCBzaXplOiB7c3RhdHM/LnNpemV9PC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvb2w+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuY29uc3QgRXhwbG9yZXI6IEZDID0gKCkgPT4gKFxuICA8RmlsZXNQcm92aWRlcj5cbiAgICA8RGlyZWN0b3J5TGlzdGluZyAvPlxuICA8L0ZpbGVzUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKHtcbiAgY29tcG9uZW50OiBFeHBsb3JlcixcbiAgaWNvbjogRXhwbG9yZXJJY29uLFxuICBuYW1lOiAnRXhwbG9yZXInXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Apps/Explorer.tsx\n");

/***/ })

})