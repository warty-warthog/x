webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Files.tsx":
/*!***********************************!*\
  !*** ./components/Apps/Files.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Files.png */ \"./assets/icons/Files.png\");\n/* harmony import */ var _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browserfs */ \"./node_modules/browserfs/dist/browserfs.js\");\n/* harmony import */ var browserfs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(browserfs__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Files.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import type { FileSystemConfiguration } from 'browserfs';\n// const config: FileSystemConfiguration = {};\n\n\n\n // FileSystemOptions\n\nvar fsConfig = {\n  fs: 'MountableFileSystem',\n  options: {\n    index: '/index.json'\n  }\n};\n\nvar Files = function Files() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    browserfs__WEBPACK_IMPORTED_MODULE_3__[\"install\"](window); //     BrowserFS.registerFileSystem()\n    // console.log(BrowserFS)\n    // BrowserFS.configure(fsConfig, (e) => {\n    //   if (e) throw e;\n    // });\n\n    browserfs__WEBPACK_IMPORTED_MODULE_3__[\"configure\"]({\n      fs: \"MountableFileSystem\",\n      options: {\n        '/data': {\n          fs: 'XmlHttpRequest',\n          options: {\n            index: \"/index.json\"\n          }\n        },\n        '/home': {\n          fs: 'LocalStorage'\n        }\n      }\n    }, function (e) {\n      var fs = browserfs__WEBPACK_IMPORTED_MODULE_3__[\"BFSRequire\"]('fs');\n      fs.readdir('/home', function (e, contents) {\n        console.log('readdir /home', e, contents);\n      });\n    }); // BrowserFS.FileSystem.XmlHttpRequest.Create({\n    //   index: \"/index.json\"\n    // }, function(e, xhrfs) {\n    //   console.log(xhrfs)\n    //   BrowserFS.FileSystem.MountableFileSystem.Create({\n    //     '/': xhrfs\n    //   }, function(e, mfs) {\n    //     BrowserFS.initialize(mfs);\n    //     const fs = BrowserFS.BFSRequire('fs');\n    //     fs.writeFile('/home/test.txt', 'Cool, I can do this in the browser!', function(err) {\n    //       fs.readFile('/home/test.txt', function(err, contents) {\n    //         console.log(contents);\n    //       });\n    //     });\n    //     fs.readdir('/home', function(e, contents) {\n    //       console.log('readdir /home', e, contents);\n    //     });\n    //   });\n    // });\n  }, []);\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, \"LIST FILES HERE\");\n};\n\n_s(Files, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Files;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  component: Files,\n  icon: _assets_icons_Files_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n  name: 'Files'\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Files\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL0ZpbGVzLnRzeD8yNTI5Il0sIm5hbWVzIjpbImZzQ29uZmlnIiwiZnMiLCJvcHRpb25zIiwiaW5kZXgiLCJGaWxlcyIsInVzZUVmZmVjdCIsIkJyb3dzZXJGUyIsIndpbmRvdyIsImUiLCJyZWFkZGlyIiwiY29udGVudHMiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiY29tcG9uZW50IiwiaWNvbiIsIkZpbGVzSWNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTs7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLElBQUUsRUFBRSxxQkFEVztBQUVmQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFO0FBREE7QUFGTSxDQUFqQjs7QUFPQSxJQUFNQyxLQUFTLEdBQUcsU0FBWkEsS0FBWSxHQUFNO0FBQUE7O0FBQ3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMscURBQUEsQ0FBa0JDLE1BQWxCLEVBRGMsQ0FFbEI7QUFDQTtBQUNJO0FBQ0E7QUFDQTs7QUFFQUQsdURBQUEsQ0FBb0I7QUFDbEJMLFFBQUUsRUFBRSxxQkFEYztBQUVsQkMsYUFBTyxFQUFFO0FBQ1AsaUJBQVM7QUFBRUQsWUFBRSxFQUFFLGdCQUFOO0FBQXdCQyxpQkFBTyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVDtBQUFqQyxTQURGO0FBRVAsaUJBQVM7QUFBRUYsWUFBRSxFQUFFO0FBQU47QUFGRjtBQUZTLEtBQXBCLEVBTUcsVUFBU08sQ0FBVCxFQUFZO0FBQ2IsVUFBTVAsRUFBRSxHQUFHSyxvREFBQSxDQUFxQixJQUFyQixDQUFYO0FBQ0VMLFFBQUUsQ0FBQ1EsT0FBSCxDQUFXLE9BQVgsRUFBb0IsVUFBU0QsQ0FBVCxFQUFZRSxRQUFaLEVBQXNCO0FBQ3hDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixDQUE3QixFQUFnQ0UsUUFBaEM7QUFDRCxPQUZEO0FBR0gsS0FYRCxFQVJjLENBcUJkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0E3Q1EsRUE2Q04sRUE3Q00sQ0FBVDtBQStDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFHRCxDQW5ERDs7R0FBTU4sSzs7S0FBQUEsSztBQXFEUyxtRUFBSVMscURBQUosQ0FBUTtBQUNyQkMsV0FBUyxFQUFFVixLQURVO0FBRXJCVyxNQUFJLEVBQUVDLDhEQUZlO0FBR3JCQyxNQUFJLEVBQUU7QUFIZSxDQUFSLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcHMvRmlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbGVzSWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9GaWxlcy5wbmcnO1xuXG4vLyBpbXBvcnQgdHlwZSB7IEZpbGVTeXN0ZW1Db25maWd1cmF0aW9uIH0gZnJvbSAnYnJvd3NlcmZzJztcbi8vIGNvbnN0IGNvbmZpZzogRmlsZVN5c3RlbUNvbmZpZ3VyYXRpb24gPSB7fTtcblxuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG5pbXBvcnQgKiBhcyBCcm93c2VyRlMgZnJvbSAnYnJvd3NlcmZzJztcblxuLy8gRmlsZVN5c3RlbU9wdGlvbnNcbmNvbnN0IGZzQ29uZmlnID0ge1xuICBmczogJ01vdW50YWJsZUZpbGVTeXN0ZW0nLFxuICBvcHRpb25zOiB7XG4gICAgaW5kZXg6ICcvaW5kZXguanNvbidcbiAgfVxufTtcblxuY29uc3QgRmlsZXM6IEZDID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEJyb3dzZXJGUy5pbnN0YWxsKHdpbmRvdyk7XG4vLyAgICAgQnJvd3NlckZTLnJlZ2lzdGVyRmlsZVN5c3RlbSgpXG4vLyBjb25zb2xlLmxvZyhCcm93c2VyRlMpXG4gICAgLy8gQnJvd3NlckZTLmNvbmZpZ3VyZShmc0NvbmZpZywgKGUpID0+IHtcbiAgICAvLyAgIGlmIChlKSB0aHJvdyBlO1xuICAgIC8vIH0pO1xuXG4gICAgQnJvd3NlckZTLmNvbmZpZ3VyZSh7XG4gICAgICBmczogXCJNb3VudGFibGVGaWxlU3lzdGVtXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgICcvZGF0YSc6IHsgZnM6ICdYbWxIdHRwUmVxdWVzdCcsIG9wdGlvbnM6IHsgaW5kZXg6IFwiL2luZGV4Lmpzb25cIiB9IH0sXG4gICAgICAgICcvaG9tZSc6IHsgZnM6ICdMb2NhbFN0b3JhZ2UnIH1cbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBmcyA9IEJyb3dzZXJGUy5CRlNSZXF1aXJlKCdmcycpO1xuICAgICAgICBmcy5yZWFkZGlyKCcvaG9tZScsIGZ1bmN0aW9uKGUsIGNvbnRlbnRzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlYWRkaXIgL2hvbWUnLCBlLCBjb250ZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQnJvd3NlckZTLkZpbGVTeXN0ZW0uWG1sSHR0cFJlcXVlc3QuQ3JlYXRlKHtcbiAgICAvLyAgIGluZGV4OiBcIi9pbmRleC5qc29uXCJcbiAgICAvLyB9LCBmdW5jdGlvbihlLCB4aHJmcykge1xuICAgIC8vICAgY29uc29sZS5sb2coeGhyZnMpXG4gICAgLy8gICBCcm93c2VyRlMuRmlsZVN5c3RlbS5Nb3VudGFibGVGaWxlU3lzdGVtLkNyZWF0ZSh7XG4gICAgLy8gICAgICcvJzogeGhyZnNcbiAgICAvLyAgIH0sIGZ1bmN0aW9uKGUsIG1mcykge1xuICAgIC8vICAgICBCcm93c2VyRlMuaW5pdGlhbGl6ZShtZnMpO1xuXG4gICAgLy8gICAgIGNvbnN0IGZzID0gQnJvd3NlckZTLkJGU1JlcXVpcmUoJ2ZzJyk7XG5cblxuXG4gICAgLy8gICAgIGZzLndyaXRlRmlsZSgnL2hvbWUvdGVzdC50eHQnLCAnQ29vbCwgSSBjYW4gZG8gdGhpcyBpbiB0aGUgYnJvd3NlciEnLCBmdW5jdGlvbihlcnIpIHtcbiAgICAvLyAgICAgICBmcy5yZWFkRmlsZSgnL2hvbWUvdGVzdC50eHQnLCBmdW5jdGlvbihlcnIsIGNvbnRlbnRzKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50cyk7XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIGZzLnJlYWRkaXIoJy9ob21lJywgZnVuY3Rpb24oZSwgY29udGVudHMpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVhZGRpciAvaG9tZScsIGUsIGNvbnRlbnRzKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+TElTVCBGSUxFUyBIRVJFPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCh7XG4gIGNvbXBvbmVudDogRmlsZXMsXG4gIGljb246IEZpbGVzSWNvbixcbiAgbmFtZTogJ0ZpbGVzJ1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Apps/Files.tsx\n");

/***/ })

})