webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Files.tsx":
/*!***********************************!*\
  !*** ./components/Apps/Files.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Files.png */ \"./assets/icons/Files.png\");\n/* harmony import */ var _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browserfs */ \"./node_modules/browserfs/dist/browserfs.js\");\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(browserfs__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Files.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import type { FileSystemConfiguration } from 'browserfs';\n// const config: FileSystemConfiguration = {};\n\n\n\n // FileSystemOptions\n// const fsConfig = {\n//   fs: 'MountableFileSystem',\n//   options: {\n//     index: '/index.json'\n//     //'/': {\n//       //fs: 'HTTPRequest',\n//      // options: { index: '/index.json' }\n//     //},\n//   }\n// };\n\nvar Files = function Files() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    browserfs__WEBPACK_IMPORTED_MODULE_3__[\"install\"](window); //     BrowserFS.registerFileSystem()\n    // console.log(BrowserFS)\n    // BrowserFS.configure(fsConfig, (e) => {\n    //   if (e) throw e;\n    // });\n\n    browserfs__WEBPACK_IMPORTED_MODULE_3__[\"FileSystem\"].XmlHttpRequest.Create({\n      index: \"/index.json\"\n    }, function (e, xhrfs) {\n      browserfs__WEBPACK_IMPORTED_MODULE_3__[\"FileSystem\"].MountableFileSystem.Create({\n        '/': xhrfs\n      }, function (e, mfs) {\n        console.log(mfs);\n        browserfs__WEBPACK_IMPORTED_MODULE_3__[\"initialize\"](mfs); // Added after-the-fact...\n        // BrowserFS.FileSystem.LocalStorage.Create(function(e, lsfs) {\n        //   mfs.mount('/home', lsfs);\n        // }, () => {});\n      });\n    });\n    var fs = browserfs__WEBPACK_IMPORTED_MODULE_3__[\"BFSRequire\"]('fs');\n    fs.readdir('/', function (e, contents) {\n      console.log('readdir /', e, contents);\n    });\n  }, []);\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, \"LIST FILES HERE\");\n};\n\n_s(Files, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Files;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  component: Files,\n  icon: _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n  name: 'Files'\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Files\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL0ZpbGVzLnRzeD8yNTI5Il0sIm5hbWVzIjpbIkZpbGVzIiwidXNlRWZmZWN0IiwiQnJvd3NlckZTIiwid2luZG93IiwiWG1sSHR0cFJlcXVlc3QiLCJDcmVhdGUiLCJpbmRleCIsImUiLCJ4aHJmcyIsIk1vdW50YWJsZUZpbGVTeXN0ZW0iLCJtZnMiLCJjb25zb2xlIiwibG9nIiwiZnMiLCJyZWFkZGlyIiwiY29udGVudHMiLCJBcHAiLCJjb21wb25lbnQiLCJpY29uIiwiRmlsZXNJY29uIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FFQTtBQUNBOztBQUVBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQVMsR0FBRyxTQUFaQSxLQUFZLEdBQU07QUFBQTs7QUFDdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxREFBQSxDQUFrQkMsTUFBbEIsRUFEYyxDQUVsQjtBQUNBO0FBQ0k7QUFDQTtBQUNBOztBQUVBRCx3REFBQSxDQUFxQkUsY0FBckIsQ0FBb0NDLE1BQXBDLENBQTJDO0FBQ3pDQyxXQUFLLEVBQUU7QUFEa0MsS0FBM0MsRUFFRyxVQUFTQyxDQUFULEVBQVlDLEtBQVosRUFBbUI7QUFDcEJOLDBEQUFBLENBQXFCTyxtQkFBckIsQ0FBeUNKLE1BQXpDLENBQWdEO0FBQzlDLGFBQUtHO0FBRHlDLE9BQWhELEVBRUcsVUFBU0QsQ0FBVCxFQUFZRyxHQUFaLEVBQWlCO0FBQ2xCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUiw0REFBQSxDQUFxQlEsR0FBckIsRUFGa0IsQ0FJbEI7QUFDQTtBQUNBO0FBQ0E7QUFDRCxPQVZEO0FBV0QsS0FkRDtBQWdCQSxRQUFNRyxFQUFFLEdBQUdYLG9EQUFBLENBQXFCLElBQXJCLENBQVg7QUFFQVcsTUFBRSxDQUFDQyxPQUFILENBQVcsR0FBWCxFQUFnQixVQUFTUCxDQUFULEVBQVlRLFFBQVosRUFBc0I7QUFDcENKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJMLENBQXpCLEVBQTRCUSxRQUE1QjtBQUNELEtBRkQ7QUFHRCxHQTdCUSxFQTZCTixFQTdCTSxDQUFUO0FBK0JBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUdELENBbkNEOztHQUFNZixLOztLQUFBQSxLO0FBcUNTLG1FQUFJZ0IscURBQUosQ0FBUTtBQUNyQkMsV0FBUyxFQUFFakIsS0FEVTtBQUVyQmtCLE1BQUksRUFBRUMsOERBRmU7QUFHckJDLE1BQUksRUFBRTtBQUhlLENBQVIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwcy9GaWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlsZXNJY29uIGZyb20gJ0AvYXNzZXRzL2ljb25zL0ZpbGVzLnBuZyc7XG5cbi8vIGltcG9ydCB0eXBlIHsgRmlsZVN5c3RlbUNvbmZpZ3VyYXRpb24gfSBmcm9tICdicm93c2VyZnMnO1xuLy8gY29uc3QgY29uZmlnOiBGaWxlU3lzdGVtQ29uZmlndXJhdGlvbiA9IHt9O1xuXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmltcG9ydCAqIGFzIEJyb3dzZXJGUyBmcm9tICdicm93c2VyZnMnO1xuXG4vLyBGaWxlU3lzdGVtT3B0aW9uc1xuLy8gY29uc3QgZnNDb25maWcgPSB7XG4vLyAgIGZzOiAnTW91bnRhYmxlRmlsZVN5c3RlbScsXG4vLyAgIG9wdGlvbnM6IHtcbi8vICAgICBpbmRleDogJy9pbmRleC5qc29uJ1xuLy8gICAgIC8vJy8nOiB7XG4vLyAgICAgICAvL2ZzOiAnSFRUUFJlcXVlc3QnLFxuLy8gICAgICAvLyBvcHRpb25zOiB7IGluZGV4OiAnL2luZGV4Lmpzb24nIH1cbi8vICAgICAvL30sXG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IEZpbGVzOiBGQyA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBCcm93c2VyRlMuaW5zdGFsbCh3aW5kb3cpO1xuLy8gICAgIEJyb3dzZXJGUy5yZWdpc3RlckZpbGVTeXN0ZW0oKVxuLy8gY29uc29sZS5sb2coQnJvd3NlckZTKVxuICAgIC8vIEJyb3dzZXJGUy5jb25maWd1cmUoZnNDb25maWcsIChlKSA9PiB7XG4gICAgLy8gICBpZiAoZSkgdGhyb3cgZTtcbiAgICAvLyB9KTtcblxuICAgIEJyb3dzZXJGUy5GaWxlU3lzdGVtLlhtbEh0dHBSZXF1ZXN0LkNyZWF0ZSh7XG4gICAgICBpbmRleDogXCIvaW5kZXguanNvblwiXG4gICAgfSwgZnVuY3Rpb24oZSwgeGhyZnMpIHtcbiAgICAgIEJyb3dzZXJGUy5GaWxlU3lzdGVtLk1vdW50YWJsZUZpbGVTeXN0ZW0uQ3JlYXRlKHtcbiAgICAgICAgJy8nOiB4aHJmc1xuICAgICAgfSwgZnVuY3Rpb24oZSwgbWZzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1mcylcbiAgICAgICAgQnJvd3NlckZTLmluaXRpYWxpemUobWZzKTtcblxuICAgICAgICAvLyBBZGRlZCBhZnRlci10aGUtZmFjdC4uLlxuICAgICAgICAvLyBCcm93c2VyRlMuRmlsZVN5c3RlbS5Mb2NhbFN0b3JhZ2UuQ3JlYXRlKGZ1bmN0aW9uKGUsIGxzZnMpIHtcbiAgICAgICAgLy8gICBtZnMubW91bnQoJy9ob21lJywgbHNmcyk7XG4gICAgICAgIC8vIH0sICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZnMgPSBCcm93c2VyRlMuQkZTUmVxdWlyZSgnZnMnKTtcblxuICAgIGZzLnJlYWRkaXIoJy8nLCBmdW5jdGlvbihlLCBjb250ZW50cykge1xuICAgICAgY29uc29sZS5sb2coJ3JlYWRkaXIgLycsIGUsIGNvbnRlbnRzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+TElTVCBGSUxFUyBIRVJFPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCh7XG4gIGNvbXBvbmVudDogRmlsZXMsXG4gIGljb246IEZpbGVzSWNvbixcbiAgbmFtZTogJ0ZpbGVzJ1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Apps/Files.tsx\n");

/***/ })

})