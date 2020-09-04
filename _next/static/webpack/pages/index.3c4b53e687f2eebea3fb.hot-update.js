webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/Files.tsx":
/*!****************************!*\
  !*** ./contexts/Files.tsx ***!
  \****************************/
/*! exports provided: getFileStat, FilesContext, FilesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileStat\", function() { return getFileStat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilesContext\", function() { return FilesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilesProvider\", function() { return FilesProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/index.json */ \"./public/index.json\");\nvar _public_index_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/public/index.json */ \"./public/index.json\", 1);\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browserfs */ \"./node_modules/browserfs/dist/browserfs.js\");\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(browserfs__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/contexts/Files.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar fsConfig = {\n  fs: 'MountableFileSystem',\n  options: {\n    '/': {\n      fs: 'OverlayFS',\n      options: {\n        readable: {\n          fs: 'XmlHttpRequest',\n          options: {\n            index: _public_index_json__WEBPACK_IMPORTED_MODULE_1__\n          }\n        },\n        writable: {\n          fs: 'IndexedDB',\n          options: {\n            storeName: 'browser-fs-cache'\n          }\n        }\n      }\n    }\n  }\n};\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\nvar FilesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nvar FilesProvider = function FilesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      fs = _useState[0],\n      setFS = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    browserfs__WEBPACK_IMPORTED_MODULE_2__[\"install\"](window);\n    browserfs__WEBPACK_IMPORTED_MODULE_2__[\"configure\"](fsConfig, function () {\n      setFS(browserfs__WEBPACK_IMPORTED_MODULE_2__[\"BFSRequire\"]('fs'));\n    });\n  }, []);\n  return __jsx(FilesContext.Provider, {\n    value: fs,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 10\n    }\n  }, children);\n};\n\n_s(FilesProvider, \"dAcnsmGp86B8RJvXPNvGv6ICwh0=\");\n\n_c = FilesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"FilesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvRmlsZXMudHN4PzM2MTciXSwibmFtZXMiOlsiZnNDb25maWciLCJmcyIsIm9wdGlvbnMiLCJyZWFkYWJsZSIsImluZGV4Iiwid3JpdGFibGUiLCJzdG9yZU5hbWUiLCJnZXRGaWxlU3RhdCIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YXQiLCJfZXJyb3IiLCJzdGF0cyIsIkZpbGVzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJGaWxlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNldEZTIiwidXNlRWZmZWN0IiwiQnJvd3NlckZTIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBV0EsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLElBQUUsRUFBRSxxQkFEVztBQUVmQyxTQUFPLEVBQUU7QUFDUCxTQUFLO0FBQ0hELFFBQUUsRUFBRSxXQUREO0FBRUhDLGFBQU8sRUFBRTtBQUNQQyxnQkFBUSxFQUFFO0FBQ1JGLFlBQUUsRUFBRSxnQkFESTtBQUVSQyxpQkFBTyxFQUFFO0FBQUVFLGlCQUFLLEVBQUxBLCtDQUFLQTtBQUFQO0FBRkQsU0FESDtBQUtQQyxnQkFBUSxFQUFFO0FBQ1JKLFlBQUUsRUFBRSxXQURJO0FBRVJDLGlCQUFPLEVBQUU7QUFDUEkscUJBQVMsRUFBRTtBQURKO0FBRkQ7QUFMSDtBQUZOO0FBREU7QUFGTSxDQUFqQjtBQXFCTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixFQUFELEVBQWVPLElBQWY7QUFBQSxTQUN6QixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBOztBQUFBLFdBQWFULEVBQWIsYUFBYUEsRUFBYixtQ0FBYUEsRUFBRSxDQUFFVSxJQUFqQiw2Q0FBYSxjQUFBVixFQUFFLEVBQVNPLElBQVQsRUFBZSxVQUFDSSxNQUFELEVBQVNDLEtBQVQ7QUFBQSxhQUFtQkgsT0FBTyxDQUFDRyxLQUFELENBQTFCO0FBQUEsS0FBZixDQUFmO0FBQUEsR0FBWixDQUR5QjtBQUFBLENBQXBCO0FBR0EsSUFBTUMsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBVyxFQUFYLENBQWxDO0FBRUEsSUFBTUMsYUFBaUIsR0FBRyxTQUFwQkEsYUFBb0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzdCQyxzREFBUSxDQUFXLEVBQVgsQ0FEcUI7QUFBQSxNQUMxQ2pCLEVBRDBDO0FBQUEsTUFDdENrQixLQURzQzs7QUFHakRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxREFBQSxDQUFrQkMsTUFBbEI7QUFFQUQsdURBQUEsQ0FBb0JyQixRQUFwQixFQUE4QixZQUFNO0FBQ2xDbUIsV0FBSyxDQUFDRSxvREFBQSxDQUFxQixJQUFyQixDQUFELENBQUw7QUFDRCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQU8sTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUVwQixFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DZ0IsUUFBbkMsQ0FBUDtBQUNELENBWk07O0dBQU1ELGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9jb250ZXh0cy9GaWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5kZXggZnJvbSAnQC9wdWJsaWMvaW5kZXguanNvbic7XG5cbmltcG9ydCB0eXBlIHsgRlNNb2R1bGUgfSBmcm9tICdicm93c2VyZnMvZGlzdC9ub2RlL2NvcmUvRlMnO1xuaW1wb3J0IHR5cGUgeyBTdGF0cyB9IGZyb20gJ2Jyb3dzZXJmcy9kaXN0L25vZGUvZ2VuZXJpYy9lbXNjcmlwdGVuX2ZzJztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBCcm93c2VyRlMgZnJvbSAnYnJvd3NlcmZzJztcblxudHlwZSBTdGF0c1Byb3RvID0ge1xuICBpc0RpcmVjdG9yeTogKCkgPT4gYm9vbGVhbjtcbiAgaXNGaWxlOiAoKSA9PiBib29sZWFuO1xufTtcblxudHlwZSBGc1N0YXRzID0gU3RhdHMgJiBTdGF0c1Byb3RvO1xuXG50eXBlIEZzTW9kdWxlID0gUGFydGlhbDxGU01vZHVsZT47XG5cbmNvbnN0IGZzQ29uZmlnID0ge1xuICBmczogJ01vdW50YWJsZUZpbGVTeXN0ZW0nLFxuICBvcHRpb25zOiB7XG4gICAgJy8nOiB7XG4gICAgICBmczogJ092ZXJsYXlGUycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHJlYWRhYmxlOiB7XG4gICAgICAgICAgZnM6ICdYbWxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgb3B0aW9uczogeyBpbmRleCB9XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRhYmxlOiB7XG4gICAgICAgICAgZnM6ICdJbmRleGVkREInLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHN0b3JlTmFtZTogJ2Jyb3dzZXItZnMtY2FjaGUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZVN0YXQgPSAoZnM6IEZzTW9kdWxlLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEZzU3RhdHM+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBmcz8uc3RhdD8uKHBhdGgsIChfZXJyb3IsIHN0YXRzKSA9PiByZXNvbHZlKHN0YXRzKSkpO1xuXG5leHBvcnQgY29uc3QgRmlsZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxGc01vZHVsZT4oe30pO1xuXG5leHBvcnQgY29uc3QgRmlsZXNQcm92aWRlcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtmcywgc2V0RlNdID0gdXNlU3RhdGU8RnNNb2R1bGU+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEJyb3dzZXJGUy5pbnN0YWxsKHdpbmRvdyk7XG5cbiAgICBCcm93c2VyRlMuY29uZmlndXJlKGZzQ29uZmlnLCAoKSA9PiB7XG4gICAgICBzZXRGUyhCcm93c2VyRlMuQkZTUmVxdWlyZSgnZnMnKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPEZpbGVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZnN9PntjaGlsZHJlbn08L0ZpbGVzQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/Files.tsx\n");

/***/ })

})