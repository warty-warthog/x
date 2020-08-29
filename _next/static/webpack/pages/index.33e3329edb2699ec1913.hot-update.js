webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar options = {\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  },\n  zIndex: 1750\n}; // TODO: Closing it just makes it unreachable. Need to do destroy perhaps?\n// TODO: Move `elementRef?.current` into `desktop`?\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var desktopRef = _ref.desktopRef;\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var webamp;\n    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7)).then(function (Webamp) {\n      webamp = new Webamp[\"default\"](options);\n      webamp.renderWhenReady(desktopRef);\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, [elementRef]);\n  return __jsx(\"div\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_1___default.a, 'winamp', 'Winamp'));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsib3B0aW9ucyIsImluaXRpYWxUcmFja3MiLCJtZXRhRGF0YSIsImFydGlzdCIsInRpdGxlIiwidXJsIiwiaW5pdGlhbFNraW4iLCJ6SW5kZXgiLCJXaW5hbXAiLCJkZXNrdG9wUmVmIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIndlYmFtcCIsInRoZW4iLCJXZWJhbXAiLCJyZW5kZXJXaGVuUmVhZHkiLCJkaXNwb3NlIiwiQXBwIiwiV2luYW1wSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBRUEsSUFBTUEsT0FBZ0IsR0FBRztBQUN2QkMsZUFBYSxFQUFFLENBQ2I7QUFDRUMsWUFBUSxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxlQURBO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRFo7QUFLRUMsT0FBRyxFQUFFO0FBTFAsR0FEYSxDQURRO0FBVXZCQyxhQUFXLEVBQUU7QUFDWEQsT0FBRyxFQUFFO0FBRE0sR0FWVTtBQWF2QkUsUUFBTSxFQUFFO0FBYmUsQ0FBekIsQyxDQWdCQTtBQUNBOztBQUVBLElBQU1DLE1BQVUsR0FBRyxTQUFiQSxNQUFhLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNyQyxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQUo7QUFFQSxxSkFBaUJDLElBQWpCLENBQXNCLFVBQUFDLE1BQU0sRUFBSTtBQUM5QkYsWUFBTSxHQUFHLElBQUlFLE1BQU0sV0FBVixDQUFtQmYsT0FBbkIsQ0FBVDtBQUNBYSxZQUFNLENBQUNHLGVBQVAsQ0FBdUJQLFVBQXZCO0FBQ0QsS0FIRDtBQUtBLFdBQU8sWUFBTTtBQUNYSSxZQUFNLENBQUNJLE9BQVA7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLENBQUNQLFVBQUQsQ0FYTSxDQUFUO0FBYUEsU0FBTztBQUFLLE9BQUcsRUFBRUEsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQWpCRDs7R0FBTUYsTTs7S0FBQUEsTTtBQXFCUyxtRUFBSVUscURBQUosQ0FBUVYsTUFBUixFQUFnQlcsK0RBQWhCLEVBQTRCLFFBQTVCLEVBQXNDLFFBQXRDLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmFtcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luYW1wSWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9XaW5hbXAucG5nJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnd2ViYW1wJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gIGluaXRpYWxUcmFja3M6IFtcbiAgICB7XG4gICAgICBtZXRhRGF0YToge1xuICAgICAgICBhcnRpc3Q6ICdESiBNaWtlIExsYW1hJyxcbiAgICAgICAgdGl0bGU6IFwiTGxhbWEgV2hpcHBpbicgSW50cm9cIlxuICAgICAgfSxcbiAgICAgIHVybDogJy9tcDMvbGxhbWEtMi45MS5tcDMnXG4gICAgfVxuICBdLFxuICBpbml0aWFsU2tpbjoge1xuICAgIHVybDogJy9za2lucy9TcHlBTVBfUHJvZmVzc2lvbmFsX0VkaXRpb25fdjUud3N6J1xuICB9LFxuICB6SW5kZXg6IDE3NTBcbn07XG5cbi8vIFRPRE86IENsb3NpbmcgaXQganVzdCBtYWtlcyBpdCB1bnJlYWNoYWJsZS4gTmVlZCB0byBkbyBkZXN0cm95IHBlcmhhcHM/XG4vLyBUT0RPOiBNb3ZlIGBlbGVtZW50UmVmPy5jdXJyZW50YCBpbnRvIGBkZXNrdG9wYD9cblxuY29uc3QgV2luYW1wOiBGQyA9ICh7IGRlc2t0b3BSZWYgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB3ZWJhbXA6IFdlYmFtcDtcblxuICAgIGltcG9ydCgnd2ViYW1wJykudGhlbihXZWJhbXAgPT4ge1xuICAgICAgd2ViYW1wID0gbmV3IFdlYmFtcC5kZWZhdWx0KG9wdGlvbnMpO1xuICAgICAgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShkZXNrdG9wUmVmIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3ZWJhbXAuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtlbGVtZW50UmVmXSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtlbGVtZW50UmVmfSAvPjtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKFdpbmFtcCwgV2luYW1wSWNvbiwgJ3dpbmFtcCcsICdXaW5hbXAnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ }),

/***/ "./components/Windows.tsx":
/*!********************************!*\
  !*** ./components/Windows.tsx ***!
  \********************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Window */ \"./components/Window.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_1__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      updateApps = _useContext.updateApps,\n      activeApps = apps.filter(function (_ref) {\n    var running = _ref.running,\n        minimized = _ref.minimized;\n    return running && !minimized;\n  });\n\n  return __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, activeApps.map(function (_ref2, index) {\n    var App = _ref2.component,\n        id = _ref2.id,\n        name = _ref2.name,\n        withWindow = _ref2.withWindow,\n        desktopRef = _ref2.desktopRef;\n    return withWindow ? __jsx(_components_Window__WEBPACK_IMPORTED_MODULE_2__[\"Window\"], {\n      key: id,\n      name: name,\n      onMinimize: function onMinimize() {\n        return updateApps({\n          update: {\n            minimized: true\n          },\n          id: id\n        });\n      },\n      onClose: function onClose() {\n        return updateApps({\n          update: {\n            running: false\n          },\n          id: id\n        });\n      },\n      onFocus: function onFocus() {\n        return updateApps({\n          update: {\n            foreground: true\n          },\n          id: id\n        });\n      },\n      onBlur: function onBlur() {\n        return updateApps({\n          update: {\n            foreground: false\n          },\n          id: id\n        });\n      },\n      tabIndex: apps.length * 2 + index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(App, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    })) : __jsx(App, {\n      key: id,\n      desktopRef: desktopRef,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    });\n  }));\n};\n\n_s(Windows, \"8JiS46hb7OfTk/LWnFEWYxHPMy0=\");\n\n_c = Windows;\n\nvar _c;\n\n$RefreshReg$(_c, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3dzLnRzeD8zNzg1Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwidXBkYXRlQXBwcyIsImFjdGl2ZUFwcHMiLCJmaWx0ZXIiLCJydW5uaW5nIiwibWluaW1pemVkIiwibWFwIiwiaW5kZXgiLCJBcHAiLCJjb21wb25lbnQiLCJpZCIsIm5hbWUiLCJ3aXRoV2luZG93IiwiZGVza3RvcFJlZiIsInVwZGF0ZSIsImZvcmVncm91bmQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQVcsR0FBRyxTQUFkQSxPQUFjLEdBQU07QUFBQTs7QUFBQSxvQkFDRkMsd0RBQVUsQ0FBQ0MsMERBQUQsQ0FEUjtBQUFBLE1BQ3ZCQyxJQUR1QixlQUN2QkEsSUFEdUI7QUFBQSxNQUNqQkMsVUFEaUIsZUFDakJBLFVBRGlCO0FBQUEsTUFFN0JDLFVBRjZCLEdBRWhCRixJQUFJLENBQUNHLE1BQUwsQ0FBWTtBQUFBLFFBQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFFBQVlDLFNBQVosUUFBWUEsU0FBWjtBQUFBLFdBQTRCRCxPQUFPLElBQUksQ0FBQ0MsU0FBeEM7QUFBQSxHQUFaLENBRmdCOztBQUkvQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsaUJBQXVEQyxLQUF2RDtBQUFBLFFBQWNDLEdBQWQsU0FBR0MsU0FBSDtBQUFBLFFBQW1CQyxFQUFuQixTQUFtQkEsRUFBbkI7QUFBQSxRQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsUUFBNkJDLFVBQTdCLFNBQTZCQSxVQUE3QjtBQUFBLFFBQXlDQyxVQUF6QyxTQUF5Q0EsVUFBekM7QUFBQSxXQUNkRCxVQUFVLEdBQ04sTUFBQyx5REFBRDtBQUNBLFNBQUcsRUFBRUYsRUFETDtBQUVBLFVBQUksRUFBRUMsSUFGTjtBQUdBLGdCQUFVLEVBQUU7QUFBQSxlQUFNVixVQUFVLENBQUM7QUFBRWEsZ0JBQU0sRUFBRTtBQUFFVCxxQkFBUyxFQUFFO0FBQWIsV0FBVjtBQUErQkssWUFBRSxFQUFGQTtBQUEvQixTQUFELENBQWhCO0FBQUEsT0FIWjtBQUlBLGFBQU8sRUFBRTtBQUFBLGVBQU1ULFVBQVUsQ0FBQztBQUFFYSxnQkFBTSxFQUFFO0FBQUVWLG1CQUFPLEVBQUU7QUFBWCxXQUFWO0FBQThCTSxZQUFFLEVBQUZBO0FBQTlCLFNBQUQsQ0FBaEI7QUFBQSxPQUpUO0FBS0EsYUFBTyxFQUFFO0FBQUEsZUFBTVQsVUFBVSxDQUFDO0FBQUVhLGdCQUFNLEVBQUU7QUFBRUMsc0JBQVUsRUFBRTtBQUFkLFdBQVY7QUFBZ0NMLFlBQUUsRUFBRkE7QUFBaEMsU0FBRCxDQUFoQjtBQUFBLE9BTFQ7QUFNQSxZQUFNLEVBQUU7QUFBQSxlQUFNVCxVQUFVLENBQUM7QUFBRWEsZ0JBQU0sRUFBRTtBQUFFQyxzQkFBVSxFQUFFO0FBQWQsV0FBVjtBQUFpQ0wsWUFBRSxFQUFGQTtBQUFqQyxTQUFELENBQWhCO0FBQUEsT0FOUjtBQU9BLGNBQVEsRUFBRVYsSUFBSSxDQUFDZ0IsTUFBTCxHQUFjLENBQWQsR0FBa0JULEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTQSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRBLENBRE0sR0FZTixNQUFDLEdBQUQ7QUFBSyxTQUFHLEVBQUVHLEVBQVY7QUFBYyxnQkFBVSxFQUFFRyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYlU7QUFBQSxHQUFmLENBREgsQ0FERjtBQW1CRCxDQXZCTTs7R0FBTWhCLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvV2luZG93JztcblxuZXhwb3J0IGNvbnN0IFdpbmRvd3M6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGFwcHMsIHVwZGF0ZUFwcHMgfSA9IHVzZUNvbnRleHQoQXBwc0NvbnRleHQpLFxuICAgIGFjdGl2ZUFwcHMgPSBhcHBzLmZpbHRlcigoeyBydW5uaW5nLCBtaW5pbWl6ZWQgfSkgPT4gcnVubmluZyAmJiAhbWluaW1pemVkKTtcblxuICByZXR1cm4gKFxuICAgIDxvbD5cbiAgICAgIHthY3RpdmVBcHBzLm1hcCgoeyBjb21wb25lbnQ6IEFwcCwgaWQsIG5hbWUsIHdpdGhXaW5kb3csIGRlc2t0b3BSZWYgfSwgaW5kZXgpID0+IChcbiAgICAgICAgd2l0aFdpbmRvd1xuICAgICAgICAgID8gPFdpbmRvd1xuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBvbk1pbmltaXplPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgcnVubmluZzogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB1cGRhdGVBcHBzKHsgdXBkYXRlOiB7IGZvcmVncm91bmQ6IHRydWUgfSwgaWQgfSl9XG4gICAgICAgICAgICBvbkJsdXI9eygpID0+IHVwZGF0ZUFwcHMoeyB1cGRhdGU6IHsgZm9yZWdyb3VuZDogZmFsc2UgfSwgaWQgfSl9XG4gICAgICAgICAgICB0YWJJbmRleD17YXBwcy5sZW5ndGggKiAyICsgaW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgIDwvV2luZG93PlxuICAgICAgICAgIDogPEFwcCBrZXk9e2lkfSBkZXNrdG9wUmVmPXtkZXNrdG9wUmVmfSAvPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Windows.tsx\n");

/***/ })

})