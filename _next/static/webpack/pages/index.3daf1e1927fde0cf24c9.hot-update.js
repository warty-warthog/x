webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar config = {\n  // initialTracks: [\n  //   {\n  //     metaData: {\n  //       artist: 'DJ Mike Llama',\n  //       title: \"Llama Whippin' Intro\"\n  //     },\n  //     url: '/mp3/llama-2.91.mp3'\n  //   }\n  // ],\n  skinUrl: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n}; // TODO: Closing it just makes it unreachable. Need to do destroy perhaps?\n// close needs to bind to a normal close func\n\nvar Winamp = function Winamp() {\n  _s();\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var webamp;\n    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7)).then(function (Webamp) {\n      webamp = new Webamp[\"default\"](config);\n      webamp.renderWhenReady(elementRef === null || elementRef === void 0 ? void 0 : elementRef.current); // TODO: Move `elementRef?.current` into `desktop`?\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, [elementRef]);\n  return __jsx(\"div\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default.a, 'winamp', 'Winamp', false));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsiY29uZmlnIiwic2tpblVybCIsIldpbmFtcCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3ZWJhbXAiLCJ0aGVuIiwiV2ViYW1wIiwicmVuZGVyV2hlblJlYWR5IiwiY3VycmVudCIsImRpc3Bvc2UiLCJBcHAiLCJXaW5hbXBJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsU0FBTyxFQUFFO0FBVkksQ0FBZixDLENBYUE7QUFDQTs7QUFFQSxJQUFNQyxNQUFVLEdBQUcsU0FBYkEsTUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBekI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsTUFBSjtBQUVBLHFKQUFpQkMsSUFBakIsQ0FBc0IsVUFBQUMsTUFBTSxFQUFJO0FBQzlCRixZQUFNLEdBQUcsSUFBSUUsTUFBTSxXQUFWLENBQW1CUixNQUFuQixDQUFUO0FBQ0FNLFlBQU0sQ0FBQ0csZUFBUCxDQUF1Qk4sVUFBdkIsYUFBdUJBLFVBQXZCLHVCQUF1QkEsVUFBVSxDQUFFTyxPQUFuQyxFQUY4QixDQUc5QjtBQUNELEtBSkQ7QUFNQSxXQUFPLFlBQU07QUFDWEosWUFBTSxDQUFDSyxPQUFQO0FBQ0QsS0FGRDtBQUdELEdBWlEsRUFZTixDQUFDUixVQUFELENBWk0sQ0FBVDtBQWNBLFNBQU87QUFBSyxPQUFHLEVBQUVBLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FsQkQ7O0dBQU1ELE07O0tBQUFBLE07QUFvQlMsbUVBQUlVLHFEQUFKLENBQVFWLE1BQVIsRUFBZ0JXLCtEQUFoQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxLQUFoRCxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpbmFtcEljb24gZnJvbSAnQC9hc3NldHMvaWNvbnMvV2luYW1wLnBuZyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gaW5pdGlhbFRyYWNrczogW1xuICAvLyAgIHtcbiAgLy8gICAgIG1ldGFEYXRhOiB7XG4gIC8vICAgICAgIGFydGlzdDogJ0RKIE1pa2UgTGxhbWEnLFxuICAvLyAgICAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gIC8vICAgICB9LFxuICAvLyAgICAgdXJsOiAnL21wMy9sbGFtYS0yLjkxLm1wMydcbiAgLy8gICB9XG4gIC8vIF0sXG4gIHNraW5Vcmw6ICcvc2tpbnMvU3B5QU1QX1Byb2Zlc3Npb25hbF9FZGl0aW9uX3Y1Lndzeidcbn07XG5cbi8vIFRPRE86IENsb3NpbmcgaXQganVzdCBtYWtlcyBpdCB1bnJlYWNoYWJsZS4gTmVlZCB0byBkbyBkZXN0cm95IHBlcmhhcHM/XG4vLyBjbG9zZSBuZWVkcyB0byBiaW5kIHRvIGEgbm9ybWFsIGNsb3NlIGZ1bmNcblxuY29uc3QgV2luYW1wOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgd2ViYW1wOiBXZWJhbXA7XG5cbiAgICBpbXBvcnQoJ3dlYmFtcCcpLnRoZW4oV2ViYW1wID0+IHtcbiAgICAgIHdlYmFtcCA9IG5ldyBXZWJhbXAuZGVmYXVsdChjb25maWcpO1xuICAgICAgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShlbGVtZW50UmVmPy5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICAgIC8vIFRPRE86IE1vdmUgYGVsZW1lbnRSZWY/LmN1cnJlbnRgIGludG8gYGRlc2t0b3BgP1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdlYmFtcC5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW2VsZW1lbnRSZWZdKTtcblxuICByZXR1cm4gPGRpdiByZWY9e2VsZW1lbnRSZWZ9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcChXaW5hbXAsIFdpbmFtcEljb24sICd3aW5hbXAnLCAnV2luYW1wJywgZmFsc2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})