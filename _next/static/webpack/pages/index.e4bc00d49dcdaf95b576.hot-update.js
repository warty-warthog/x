webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dos.tsx":
/*!****************************!*\
  !*** ./components/Dos.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_svg_dos_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg/dos.svg */ \"./assets/svg/dos.svg\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // wdosbox-nosync.js - Fastest possible version, but limited. You can’t run console programs/shell emulation using it\n\nvar DosApp = function DosApp() {\n  _s();\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n    if (window) {\n      var _ref = window || {},\n          Dos = _ref.Dos;\n\n      Dos(canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current, {\n        wdosboxUrl: '/libs/wdosbox.js'\n      }).ready(function (fs, main) {\n        fs.extract('/games/Commander_Keen_1_-_Marooned_on_Mars_1990.zip').then(function () {\n          main(['-c', 'CD CKEEN1', 'KEEN1.EXE']);\n        });\n      });\n    }\n  }, []);\n  return __jsx(\"canvas\", {\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(DosApp, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = DosApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](DosApp, __jsx(_assets_svg_dos_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 32\n  }\n}), 'dos', 'DOS'));\n\nvar _c;\n\n$RefreshReg$(_c, \"DosApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Eb3MudHN4P2Q1MDIiXSwibmFtZXMiOlsiRG9zQXBwIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsIndpbmRvdyIsIkRvcyIsImN1cnJlbnQiLCJ3ZG9zYm94VXJsIiwicmVhZHkiLCJmcyIsIm1haW4iLCJleHRyYWN0IiwidGhlbiIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0NBR0E7O0FBRUEsSUFBTUEsTUFBVSxHQUFHLFNBQWJBLE1BQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQW9CLElBQXBCLENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyx1QkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUEsUUFBSUMsTUFBSixFQUFZO0FBQUEsaUJBQ09BLE1BQU0sSUFBSSxFQURqQjtBQUFBLFVBQ0ZDLEdBREUsUUFDRkEsR0FERTs7QUFHVkEsU0FBRyxDQUFDTCxTQUFELGFBQUNBLFNBQUQsdUJBQUNBLFNBQVMsQ0FBRU0sT0FBWixFQUEwQztBQUFFQyxrQkFBVSxFQUFFO0FBQWQsT0FBMUMsQ0FBSCxDQUFpRkMsS0FBakYsQ0FBdUYsVUFBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDbkdELFVBQUUsQ0FBQ0UsT0FBSCxDQUFXLHFEQUFYLEVBQWtFQyxJQUFsRSxDQUF1RSxZQUFNO0FBQzNFRixjQUFJLENBQUMsQ0FBQyxJQUFELEVBQU8sV0FBUCxFQUFvQixXQUFwQixDQUFELENBQUo7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtEO0FBQ0YsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLFNBQ0U7QUFBUSxPQUFHLEVBQUVWLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBR0QsQ0FwQkQ7O0dBQU1ELE07O0tBQUFBLE07QUFzQlMsbUVBQUljLHFEQUFKLENBQVFkLE1BQVIsRUFBZ0IsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWhCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rvcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERvc0ZhY3RvcnkgfSBmcm9tICdqcy1kb3MnO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvc0ljb24gZnJvbSAnLi4vYXNzZXRzL3N2Zy9kb3Muc3ZnJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29udGV4dHMvQXBwJztcblxuLy8gd2Rvc2JveC1ub3N5bmMuanMgLSBGYXN0ZXN0IHBvc3NpYmxlIHZlcnNpb24sIGJ1dCBsaW1pdGVkLiBZb3UgY2Fu4oCZdCBydW4gY29uc29sZSBwcm9ncmFtcy9zaGVsbCBlbXVsYXRpb24gdXNpbmcgaXRcblxuY29uc3QgRG9zQXBwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlcXVpcmUoJ2pzLWRvcycpO1xuXG4gICAgaWYgKHdpbmRvdykge1xuICAgICAgY29uc3QgeyBEb3MgfSA9ICh3aW5kb3cgfHwge30pIGFzIFdpbmRvdyAmIHR5cGVvZiBnbG9iYWxUaGlzICYgeyBEb3M6IERvc0ZhY3RvcnkgfTtcblxuICAgICAgRG9zKGNhbnZhc1JlZj8uY3VycmVudCBhcyBIVE1MQ2FudmFzRWxlbWVudCwgeyB3ZG9zYm94VXJsOiAnL2xpYnMvd2Rvc2JveC5qcycgfSkucmVhZHkoKGZzLCBtYWluKSA9PiB7XG4gICAgICAgIGZzLmV4dHJhY3QoJy9nYW1lcy9Db21tYW5kZXJfS2Vlbl8xXy1fTWFyb29uZWRfb25fTWFyc18xOTkwLnppcCcpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIG1haW4oWyctYycsICdDRCBDS0VFTjEnLCAnS0VFTjEuRVhFJ10pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0vPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcChEb3NBcHAsIDxEb3NJY29uIC8+LCAnZG9zJywgJ0RPUycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dos.tsx\n");

/***/ })

})