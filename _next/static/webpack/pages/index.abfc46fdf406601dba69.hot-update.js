webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dos.tsx":
/*!****************************!*\
  !*** ./components/Dos.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_svg_dos_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg/dos.svg */ \"./assets/svg/dos.svg\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar game = 'Commander_Keen_1_-_Marooned_on_Mars_1990.zip';\n\nvar DosApp = function DosApp() {\n  _s();\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null),\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('none'),\n      display = _useState[0],\n      setDisplay = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n    if (window) {\n      var _ref = window || {},\n          Dos = _ref.Dos;\n\n      Dos(canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current, {\n        wdosboxUrl: '/libs/wdosbox-nosync.js'\n      }).ready(function (fs, main) {\n        fs.extract(\"/games/\".concat(game)).then(function () {\n          main(['-c', 'CD CKEEN1', '-c', 'KEEN1.EXE']);\n          setDisplay('block');\n        });\n      });\n    }\n  }, []);\n  return __jsx(\"canvas\", {\n    style: {\n      display: display\n    },\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(DosApp, \"vXvuyGj8ZI+dYC+8wJZhW0/MAzM=\");\n\n_c = DosApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](DosApp, __jsx(_assets_svg_dos_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 32\n  }\n}), 'dos', 'DOS'));\n\nvar _c;\n\n$RefreshReg$(_c, \"DosApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Eb3MudHN4P2Q1MDIiXSwibmFtZXMiOlsiZ2FtZSIsIkRvc0FwcCIsImNhbnZhc1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ1c2VFZmZlY3QiLCJyZXF1aXJlIiwid2luZG93IiwiRG9zIiwiY3VycmVudCIsIndkb3Nib3hVcmwiLCJyZWFkeSIsImZzIiwibWFpbiIsImV4dHJhY3QiLCJ0aGVuIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyw4Q0FBYjs7QUFFQSxJQUFNQyxNQUFVLEdBQUcsU0FBYkEsTUFBYSxHQUFNO0FBQUE7O0FBQ2pCLE1BQUFDLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBbEI7QUFBQSxrQkFDb0JDLHNEQUFRLENBQUMsTUFBRCxDQUQ1QjtBQUFBLE1BQ0hDLE9BREc7QUFBQSxNQUNNQyxVQUROOztBQUdOQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsdUJBQU8sQ0FBQyxvREFBRCxDQUFQOztBQUVBLFFBQUlDLE1BQUosRUFBWTtBQUFBLGlCQUNPQSxNQUFNLElBQUksRUFEakI7QUFBQSxVQUNGQyxHQURFLFFBQ0ZBLEdBREU7O0FBR1ZBLFNBQUcsQ0FBQ1IsU0FBRCxhQUFDQSxTQUFELHVCQUFDQSxTQUFTLENBQUVTLE9BQVosRUFBMEM7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTFDLENBQUgsQ0FBd0ZDLEtBQXhGLENBQThGLFVBQUNDLEVBQUQsRUFBS0MsSUFBTCxFQUFjO0FBQzFHRCxVQUFFLENBQUNFLE9BQUgsa0JBQXNCaEIsSUFBdEIsR0FBK0JpQixJQUEvQixDQUFvQyxZQUFNO0FBQ3hDRixjQUFJLENBQUMsQ0FBQyxJQUFELEVBQU8sV0FBUCxFQUFvQixJQUFwQixFQUEwQixXQUExQixDQUFELENBQUo7QUFDQVQsb0JBQVUsQ0FBQyxPQUFELENBQVY7QUFDRCxTQUhEO0FBSUQsT0FMRDtBQU1EO0FBQ0YsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLFNBQ0U7QUFBUSxTQUFLLEVBQUU7QUFBRUQsYUFBTyxFQUFQQTtBQUFGLEtBQWY7QUFBNEIsT0FBRyxFQUFFSCxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRCxDQXRCRDs7R0FBTUQsTTs7S0FBQUEsTTtBQXdCUyxtRUFBSWlCLHFEQUFKLENBQVFqQixNQUFSLEVBQWdCLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFoQixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Eb3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEb3NGYWN0b3J5IH0gZnJvbSAnanMtZG9zJztcbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9zSWNvbiBmcm9tICcuLi9hc3NldHMvc3ZnL2Rvcy5zdmcnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250ZXh0cy9BcHAnO1xuXG5jb25zdCBnYW1lID0gJ0NvbW1hbmRlcl9LZWVuXzFfLV9NYXJvb25lZF9vbl9NYXJzXzE5OTAuemlwJztcblxuY29uc3QgRG9zQXBwOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKSxcbiAgICBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgnbm9uZScpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVxdWlyZSgnanMtZG9zJyk7XG5cbiAgICBpZiAod2luZG93KSB7XG4gICAgICBjb25zdCB7IERvcyB9ID0gKHdpbmRvdyB8fCB7fSkgYXMgV2luZG93ICYgdHlwZW9mIGdsb2JhbFRoaXMgJiB7IERvczogRG9zRmFjdG9yeSB9O1xuXG4gICAgICBEb3MoY2FudmFzUmVmPy5jdXJyZW50IGFzIEhUTUxDYW52YXNFbGVtZW50LCB7IHdkb3Nib3hVcmw6ICcvbGlicy93ZG9zYm94LW5vc3luYy5qcycgfSkucmVhZHkoKGZzLCBtYWluKSA9PiB7XG4gICAgICAgIGZzLmV4dHJhY3QoYC9nYW1lcy8keyBnYW1lIH1gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBtYWluKFsnLWMnLCAnQ0QgQ0tFRU4xJywgJy1jJywgJ0tFRU4xLkVYRSddKTtcbiAgICAgICAgICBzZXREaXNwbGF5KCdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGNhbnZhcyBzdHlsZT17eyBkaXNwbGF5IH19IHJlZj17Y2FudmFzUmVmfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcChEb3NBcHAsIDxEb3NJY29uIC8+LCAnZG9zJywgJ0RPUycpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dos.tsx\n");

/***/ })

})