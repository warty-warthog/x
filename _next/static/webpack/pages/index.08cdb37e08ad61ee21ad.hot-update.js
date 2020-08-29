webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar config = {\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  skinUrl: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n};\n\nvar Winamp = function Winamp() {\n  _s();\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var webamp;\n    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7)).then(function (Webamp) {\n      webamp = new Webamp[\"default\"](config);\n      webamp.renderWhenReady(elementRef === null || elementRef === void 0 ? void 0 : elementRef.current);\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, [elementRef]);\n  return __jsx(\"div\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default.a, 'winamp', 'Winamp', false));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsiY29uZmlnIiwiaW5pdGlhbFRyYWNrcyIsIm1ldGFEYXRhIiwiYXJ0aXN0IiwidGl0bGUiLCJ1cmwiLCJza2luVXJsIiwiV2luYW1wIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIndlYmFtcCIsInRoZW4iLCJXZWJhbXAiLCJyZW5kZXJXaGVuUmVhZHkiLCJjdXJyZW50IiwiZGlzcG9zZSIsIkFwcCIsIldpbmFtcEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxlQUFhLEVBQUUsQ0FDYjtBQUNFQyxZQUFRLEVBQUU7QUFDUkMsWUFBTSxFQUFFLGVBREE7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FEWjtBQUtFQyxPQUFHLEVBQUU7QUFMUCxHQURhLENBREY7QUFVYkMsU0FBTyxFQUFFO0FBVkksQ0FBZjs7QUFhQSxJQUFNQyxNQUFVLEdBQUcsU0FBYkEsTUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBekI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsTUFBSjtBQUVBLHFKQUFpQkMsSUFBakIsQ0FBc0IsVUFBQUMsTUFBTSxFQUFJO0FBQzlCRixZQUFNLEdBQUcsSUFBSUUsTUFBTSxXQUFWLENBQW1CYixNQUFuQixDQUFUO0FBQ0FXLFlBQU0sQ0FBQ0csZUFBUCxDQUF1Qk4sVUFBdkIsYUFBdUJBLFVBQXZCLHVCQUF1QkEsVUFBVSxDQUFFTyxPQUFuQztBQUNELEtBSEQ7QUFLQSxXQUFPLFlBQU07QUFDWEosWUFBTSxDQUFDSyxPQUFQO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixDQUFDUixVQUFELENBWE0sQ0FBVDtBQWFBLFNBQU87QUFBSyxPQUFHLEVBQUVBLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FqQkQ7O0dBQU1ELE07O0tBQUFBLE07QUFtQlMsbUVBQUlVLHFEQUFKLENBQVFWLE1BQVIsRUFBZ0JXLCtEQUFoQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxLQUFoRCxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpbmFtcEljb24gZnJvbSAnQC9hc3NldHMvaWNvbnMvV2luYW1wLnBuZyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbFRyYWNrczogW1xuICAgIHtcbiAgICAgIG1ldGFEYXRhOiB7XG4gICAgICAgIGFydGlzdDogJ0RKIE1pa2UgTGxhbWEnLFxuICAgICAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gICAgICB9LFxuICAgICAgdXJsOiAnL21wMy9sbGFtYS0yLjkxLm1wMydcbiAgICB9XG4gIF0sXG4gIHNraW5Vcmw6ICcvc2tpbnMvU3B5QU1QX1Byb2Zlc3Npb25hbF9FZGl0aW9uX3Y1Lndzeidcbn07XG5cbmNvbnN0IFdpbmFtcDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wO1xuXG4gICAgaW1wb3J0KCd3ZWJhbXAnKS50aGVuKFdlYmFtcCA9PiB7XG4gICAgICB3ZWJhbXAgPSBuZXcgV2ViYW1wLmRlZmF1bHQoY29uZmlnKTtcbiAgICAgIHdlYmFtcC5yZW5kZXJXaGVuUmVhZHkoZWxlbWVudFJlZj8uY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2ViYW1wLmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbZWxlbWVudFJlZl0pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17ZWxlbWVudFJlZn0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKFdpbmFtcCwgV2luYW1wSWNvbiwgJ3dpbmFtcCcsICdXaW5hbXAnLCBmYWxzZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ }),

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_1__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  });\n\n  return __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref2, index) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name,\n        withWindow = _ref2.withWindow;\n    return withWindow ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_2__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: function onMinimize() {\n        return updateApps({\n          update: {\n            minimized: true\n          },\n          id: id\n        });\n      },\n      onClose: function onClose() {\n        return updateApps({\n          update: {\n            running: false\n          },\n          id: id\n        });\n      },\n      onFocus: function onFocus() {\n        return updateApps({\n          update: {\n            foreground: true\n          },\n          id: id\n        });\n      },\n      onBlur: function onBlur() {\n        return updateApps({\n          update: {\n            foreground: false\n          },\n          id: id\n        });\n      },\n      tabIndex: apps.length * 2 + index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    })) : __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsImFjdGl2ZUFwcHMiLCJmaWx0ZXIiLCJydW5uaW5nIiwibWluaW1pemVkIiwibWFwIiwiaW5kZXgiLCJBcHAiLCJjb21wb25lbnQiLCJpZCIsIm5hbWUiLCJ3aXRoV2luZG93IiwidXBkYXRlIiwiZm9yZWdyb3VuZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBVyxHQUFHLFNBQWRBLE9BQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNGQyx3REFBVSxDQUFDQywwREFBRCxDQURSO0FBQUEsTUFDdkJDLElBRHVCLGVBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2pCQyxVQURpQixlQUNqQkEsVUFEaUI7QUFBQSxNQUU3QkMsVUFGNkIsR0FFaEJGLElBQUksQ0FBQ0csTUFBTCxDQUFZO0FBQUEsUUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsUUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsV0FBNEJELE9BQU8sSUFBSSxDQUFDQyxTQUF4QztBQUFBLEdBQVosQ0FGZ0I7O0FBSS9CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxpQkFBMkNDLEtBQTNDO0FBQUEsUUFBY0MsR0FBZCxTQUFHQyxTQUFIO0FBQUEsUUFBbUJDLEVBQW5CLFNBQW1CQSxFQUFuQjtBQUFBLFFBQXVCQyxJQUF2QixTQUF1QkEsSUFBdkI7QUFBQSxRQUE2QkMsVUFBN0IsU0FBNkJBLFVBQTdCO0FBQUEsV0FDZEEsVUFBVSxHQUNOLE1BQUMseURBQUQ7QUFDQSxTQUFHLEVBQUVGLEVBREw7QUFFQSxVQUFJLEVBQUVDLElBRk47QUFHQSxnQkFBVSxFQUFFO0FBQUEsZUFBTVYsVUFBVSxDQUFDO0FBQUVZLGdCQUFNLEVBQUU7QUFBRVIscUJBQVMsRUFBRTtBQUFiLFdBQVY7QUFBK0JLLFlBQUUsRUFBRkE7QUFBL0IsU0FBRCxDQUFoQjtBQUFBLE9BSFo7QUFJQSxhQUFPLEVBQUU7QUFBQSxlQUFNVCxVQUFVLENBQUM7QUFBRVksZ0JBQU0sRUFBRTtBQUFFVCxtQkFBTyxFQUFFO0FBQVgsV0FBVjtBQUE4Qk0sWUFBRSxFQUFGQTtBQUE5QixTQUFELENBQWhCO0FBQUEsT0FKVDtBQUtBLGFBQU8sRUFBRTtBQUFBLGVBQU1ULFVBQVUsQ0FBQztBQUFFWSxnQkFBTSxFQUFFO0FBQUVDLHNCQUFVLEVBQUU7QUFBZCxXQUFWO0FBQWdDSixZQUFFLEVBQUZBO0FBQWhDLFNBQUQsQ0FBaEI7QUFBQSxPQUxUO0FBTUEsWUFBTSxFQUFFO0FBQUEsZUFBTVQsVUFBVSxDQUFDO0FBQUVZLGdCQUFNLEVBQUU7QUFBRUMsc0JBQVUsRUFBRTtBQUFkLFdBQVY7QUFBaUNKLFlBQUUsRUFBRkE7QUFBakMsU0FBRCxDQUFoQjtBQUFBLE9BTlI7QUFPQSxjQUFRLEVBQUVWLElBQUksQ0FBQ2UsTUFBTCxHQUFjLENBQWQsR0FBa0JSLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTQSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRBLENBRE0sR0FZTixNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJVO0FBQUEsR0FBZixDQURILENBREY7QUFtQkQsQ0F2Qk07O0dBQU1WLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIGFjdGl2ZUFwcHMgPSBhcHBzLmZpbHRlcigoeyBydW5uaW5nLCBtaW5pbWl6ZWQgfSkgPT4gcnVubmluZyAmJiAhbWluaW1pemVkKTtcblxuICByZXR1cm4gKFxuICAgIDxvbD5cbiAgICAgIHthY3RpdmVBcHBzLm1hcCgoeyBjb21wb25lbnQ6IEFwcCwgaWQsIG5hbWUsIHdpdGhXaW5kb3cgfSwgaW5kZXgpID0+IChcbiAgICAgICAgd2l0aFdpbmRvd1xuICAgICAgICAgID8gPFdpbmRvd1xuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBvbk1pbmltaXplPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgcnVubmluZzogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IHRydWUgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgZm9yZWdyb3VuZDogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICB0YWJJbmRleD17YXBwcy5sZW5ndGggKiAyICsgaW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgIDwvV2luZG93PlxuICAgICAgICAgIDogPEFwcCAvPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ }),

/***/ "./contexts/App.tsx":
/*!**************************!*\
  !*** ./contexts/App.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nvar _default = function _default(component, icon, id, name) {\n  var withWindow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, _default);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"component\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"icon\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"id\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"name\", void 0);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"running\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"maximized\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"minimized\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"foreground\", false);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"withWindow\", false);\n\n  this.component = component;\n  this.icon = icon;\n  this.id = id;\n  this.name = name;\n  this.withWindow = withWindow;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXBwLnRzeD83MmMxIl0sIm5hbWVzIjpbImNvbXBvbmVudCIsImljb24iLCJpZCIsIm5hbWUiLCJ3aXRoV2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O2VBY0Usa0JBQVlBLFNBQVosRUFBMkJDLElBQTNCLEVBQXlDQyxFQUF6QyxFQUFxREMsSUFBckQsRUFBdUY7QUFBQSxNQUFwQkMsVUFBb0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2R0FON0UsS0FNNkU7O0FBQUEsK0dBTDNFLEtBSzJFOztBQUFBLCtHQUozRSxLQUkyRTs7QUFBQSxnSEFIMUUsS0FHMEU7O0FBQUEsZ0hBRjFFLEtBRTBFOztBQUNyRixPQUFLSixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0QsQyIsImZpbGUiOiIuL2NvbnRleHRzL0FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbXBvbmVudDtcbiAgaWNvbjtcbiAgaWQ7XG4gIG5hbWU7XG5cbiAgcnVubmluZyA9IGZhbHNlO1xuICBtYXhpbWl6ZWQgPSBmYWxzZTtcbiAgbWluaW1pemVkID0gZmFsc2U7XG4gIGZvcmVncm91bmQgPSBmYWxzZTtcbiAgd2l0aFdpbmRvdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogRkMsIGljb246IHN0cmluZywgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCB3aXRoV2luZG93ID0gZmFsc2UpIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMud2l0aFdpbmRvdyA9IHdpdGhXaW5kb3c7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/App.tsx\n");

/***/ })

})