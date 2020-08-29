webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar options = {\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  },\n  zIndex: 1750\n}; // TODO: Closing it just makes it unreachable. Need to do destroy perhaps?\n// TODO: Move `elementRef?.current` into `desktop`?\n\nvar Winamp = function Winamp() {\n  _s();\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var webamp;\n    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7)).then(function (Webamp) {\n      webamp = new Webamp[\"default\"](options);\n      webamp.renderWhenReady(elementRef === null || elementRef === void 0 ? void 0 : elementRef.current);\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, []);\n  return __jsx(\"div\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default.a, 'winamp', 'Winamp'));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsib3B0aW9ucyIsImluaXRpYWxUcmFja3MiLCJtZXRhRGF0YSIsImFydGlzdCIsInRpdGxlIiwidXJsIiwiaW5pdGlhbFNraW4iLCJ6SW5kZXgiLCJXaW5hbXAiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2ViYW1wIiwidGhlbiIsIldlYmFtcCIsInJlbmRlcldoZW5SZWFkeSIsImN1cnJlbnQiLCJkaXNwb3NlIiwiQXBwIiwiV2luYW1wSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBRUEsSUFBTUEsT0FBZ0IsR0FBRztBQUN2QkMsZUFBYSxFQUFFLENBQ2I7QUFDRUMsWUFBUSxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxlQURBO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRFo7QUFLRUMsT0FBRyxFQUFFO0FBTFAsR0FEYSxDQURRO0FBVXZCQyxhQUFXLEVBQUU7QUFDWEQsT0FBRyxFQUFFO0FBRE0sR0FWVTtBQWF2QkUsUUFBTSxFQUFFO0FBYmUsQ0FBekIsQyxDQWdCQTtBQUNBOztBQUVBLElBQU1DLE1BQVUsR0FBRyxTQUFiQSxNQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFKO0FBRUEscUpBQWlCQyxJQUFqQixDQUFzQixVQUFBQyxNQUFNLEVBQUk7QUFDOUJGLFlBQU0sR0FBRyxJQUFJRSxNQUFNLFdBQVYsQ0FBbUJkLE9BQW5CLENBQVQ7QUFDQVksWUFBTSxDQUFDRyxlQUFQLENBQXVCTixVQUF2QixhQUF1QkEsVUFBdkIsdUJBQXVCQSxVQUFVLENBQUVPLE9BQW5DO0FBQ0QsS0FIRDtBQUtBLFdBQU8sWUFBTTtBQUNYSixZQUFNLENBQUNLLE9BQVA7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQU87QUFBSyxPQUFHLEVBQUVSLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FqQkQ7O0dBQU1ELE07O0tBQUFBLE07QUFtQlMsbUVBQUlVLHFEQUFKLENBQVFWLE1BQVIsRUFBZ0JXLCtEQUFoQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpbmFtcEljb24gZnJvbSAnQC9hc3NldHMvaWNvbnMvV2luYW1wLnBuZyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgT3B0aW9ucyB9IGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG5jb25zdCBvcHRpb25zOiBPcHRpb25zID0ge1xuICBpbml0aWFsVHJhY2tzOiBbXG4gICAge1xuICAgICAgbWV0YURhdGE6IHtcbiAgICAgICAgYXJ0aXN0OiAnREogTWlrZSBMbGFtYScsXG4gICAgICAgIHRpdGxlOiBcIkxsYW1hIFdoaXBwaW4nIEludHJvXCJcbiAgICAgIH0sXG4gICAgICB1cmw6ICcvbXAzL2xsYW1hLTIuOTEubXAzJ1xuICAgIH1cbiAgXSxcbiAgaW5pdGlhbFNraW46IHtcbiAgICB1cmw6ICcvc2tpbnMvU3B5QU1QX1Byb2Zlc3Npb25hbF9FZGl0aW9uX3Y1LndzeidcbiAgfSxcbiAgekluZGV4OiAxNzUwXG59O1xuXG4vLyBUT0RPOiBDbG9zaW5nIGl0IGp1c3QgbWFrZXMgaXQgdW5yZWFjaGFibGUuIE5lZWQgdG8gZG8gZGVzdHJveSBwZXJoYXBzP1xuLy8gVE9ETzogTW92ZSBgZWxlbWVudFJlZj8uY3VycmVudGAgaW50byBgZGVza3RvcGA/XG5cbmNvbnN0IFdpbmFtcDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wO1xuXG4gICAgaW1wb3J0KCd3ZWJhbXAnKS50aGVuKFdlYmFtcCA9PiB7XG4gICAgICB3ZWJhbXAgPSBuZXcgV2ViYW1wLmRlZmF1bHQob3B0aW9ucyk7XG4gICAgICB3ZWJhbXAucmVuZGVyV2hlblJlYWR5KGVsZW1lbnRSZWY/LmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdlYmFtcC5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKFdpbmFtcCwgV2luYW1wSWNvbiwgJ3dpbmFtcCcsICdXaW5hbXAnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})