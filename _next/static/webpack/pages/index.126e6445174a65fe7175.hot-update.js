webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar options = {\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  },\n  zIndex: 1750\n}; // TODO: Closing it just makes it unreachable. Need to do destroy perhaps?\n// TODO: Why is it above the taskbar still?\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize;\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var webamp;\n    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp/built/webamp.bundle */ \"./node_modules/webamp/built/webamp.bundle.js\", 7)).then(function (Webamp) {\n      var __initialWindowLayout = {\n        main: {\n          position: {\n            x: 0,\n            y: 0\n          }\n        },\n        playlist: {\n          position: {\n            x: 0,\n            y: 116\n          }\n        }\n      };\n      webamp = new Webamp[\"default\"](_objectSpread(_objectSpread({}, options), {}, {\n        __initialWindowLayout: __initialWindowLayout\n      }));\n      webamp.store.dispatch({\n        type: 'CLOSE_WINDOW',\n        windowId: 'equalizer'\n      });\n      webamp.renderWhenReady(elementRef === null || elementRef === void 0 ? void 0 : elementRef.current);\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, [elementRef]);\n  return __jsx(react_draggable__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    handle: \".draggable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    // style={{ marginTop: Math.round(window.innerHeight / 5) }}\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_2___default.a, 'winamp', 'Winamp', false));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsib3B0aW9ucyIsImluaXRpYWxUcmFja3MiLCJtZXRhRGF0YSIsImFydGlzdCIsInRpdGxlIiwidXJsIiwiaW5pdGlhbFNraW4iLCJ6SW5kZXgiLCJXaW5hbXAiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3ZWJhbXAiLCJ0aGVuIiwiV2ViYW1wIiwiX19pbml0aWFsV2luZG93TGF5b3V0IiwibWFpbiIsInBvc2l0aW9uIiwieCIsInkiLCJwbGF5bGlzdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJ0eXBlIiwid2luZG93SWQiLCJyZW5kZXJXaGVuUmVhZHkiLCJjdXJyZW50IiwiZGlzcG9zZSIsIkFwcCIsIldpbmFtcEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQXFCQSxJQUFNQSxPQUFnQixHQUFHO0FBQ3ZCQyxlQUFhLEVBQUUsQ0FDYjtBQUNFQyxZQUFRLEVBQUU7QUFDUkMsWUFBTSxFQUFFLGVBREE7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FEWjtBQUtFQyxPQUFHLEVBQUU7QUFMUCxHQURhLENBRFE7QUFVdkJDLGFBQVcsRUFBRTtBQUNYRCxPQUFHLEVBQUU7QUFETSxHQVZVO0FBYXZCRSxRQUFNLEVBQUU7QUFiZSxDQUF6QixDLENBZ0JBO0FBQ0E7O0FBRUEsSUFBTUMsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM1RCxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQWMsSUFBZCxDQUF6QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFKO0FBRUEseUtBQXFDQyxJQUFyQyxDQUEwQyxVQUFDQyxNQUFELEVBQVk7QUFDcEQsVUFBTUMscUJBQXFCLEdBQUc7QUFDNUJDLFlBQUksRUFBRTtBQUFFQyxrQkFBUSxFQUFFO0FBQUVDLGFBQUMsRUFBRSxDQUFMO0FBQVFDLGFBQUMsRUFBRTtBQUFYO0FBQVosU0FEc0I7QUFFNUJDLGdCQUFRLEVBQUU7QUFBRUgsa0JBQVEsRUFBRTtBQUFFQyxhQUFDLEVBQUUsQ0FBTDtBQUFRQyxhQUFDLEVBQUU7QUFBWDtBQUFaO0FBRmtCLE9BQTlCO0FBS0FQLFlBQU0sR0FBRyxJQUFJRSxNQUFNLFdBQVYsaUNBQ0poQixPQURJO0FBRVBpQiw2QkFBcUIsRUFBckJBO0FBRk8sU0FBVDtBQUlDSCxZQUFELENBQWlDUyxLQUFqQyxDQUF1Q0MsUUFBdkMsQ0FBZ0Q7QUFDOUNDLFlBQUksRUFBRSxjQUR3QztBQUU5Q0MsZ0JBQVEsRUFBRTtBQUZvQyxPQUFoRDtBQUlBWixZQUFNLENBQUNhLGVBQVAsQ0FBdUJoQixVQUF2QixhQUF1QkEsVUFBdkIsdUJBQXVCQSxVQUFVLENBQUVpQixPQUFuQztBQUNELEtBZkQ7QUFpQkEsV0FBTyxZQUFNO0FBQ1hkLFlBQU0sQ0FBQ2UsT0FBUDtBQUNELEtBRkQ7QUFHRCxHQXZCUSxFQXVCTixDQUFDbEIsVUFBRCxDQXZCTSxDQUFUO0FBeUJBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLFVBQU0sRUFBQyxZQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUNFO0FBQ0EsT0FBRyxFQUFFQSxVQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBVUQsQ0F0Q0Q7O0dBQU1ILE07O0tBQUFBLE07QUF3Q1MsbUVBQUlzQixxREFBSixDQUFRdEIsTUFBUixFQUFnQnVCLCtEQUFoQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxLQUFoRCxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdpbmFtcEljb24gZnJvbSAnQC9hc3NldHMvaWNvbnMvV2luYW1wLnBuZyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgT3B0aW9ucyB9IGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcbmltcG9ydCBBcHAsIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG50eXBlIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ/OiB7XG4gICAgW3dpbmRvd0lkOiBzdHJpbmddOiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbnR5cGUgV2ViYW1wU3RvcmVBY3Rpb24gPSB7IHR5cGU6IHN0cmluZzsgd2luZG93SWQ6IHN0cmluZyB9O1xuXG50eXBlIFdlYmFtcFN0b3JlID0ge1xuICBzdG9yZToge1xuICAgIGRpc3BhdGNoOiAoYWN0aW9uOiBXZWJhbXBTdG9yZUFjdGlvbikgPT4gdm9pZDtcbiAgfTtcbn07XG5cbmNvbnN0IG9wdGlvbnM6IE9wdGlvbnMgPSB7XG4gIGluaXRpYWxUcmFja3M6IFtcbiAgICB7XG4gICAgICBtZXRhRGF0YToge1xuICAgICAgICBhcnRpc3Q6ICdESiBNaWtlIExsYW1hJyxcbiAgICAgICAgdGl0bGU6IFwiTGxhbWEgV2hpcHBpbicgSW50cm9cIlxuICAgICAgfSxcbiAgICAgIHVybDogJy9tcDMvbGxhbWEtMi45MS5tcDMnXG4gICAgfVxuICBdLFxuICBpbml0aWFsU2tpbjoge1xuICAgIHVybDogJy9za2lucy9TcHlBTVBfUHJvZmVzc2lvbmFsX0VkaXRpb25fdjUud3N6J1xuICB9LFxuICB6SW5kZXg6IDE3NTBcbn07XG5cbi8vIFRPRE86IENsb3NpbmcgaXQganVzdCBtYWtlcyBpdCB1bnJlYWNoYWJsZS4gTmVlZCB0byBkbyBkZXN0cm95IHBlcmhhcHM/XG4vLyBUT0RPOiBXaHkgaXMgaXQgYWJvdmUgdGhlIHRhc2tiYXIgc3RpbGw/XG5cbmNvbnN0IFdpbmFtcDogRkM8QXBwQ29tcG9uZW50PiA9ICh7IG9uQ2xvc2UsIG9uTWluaW1pemUgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB3ZWJhbXA6IFdlYmFtcDtcblxuICAgIGltcG9ydCgnd2ViYW1wL2J1aWx0L3dlYmFtcC5idW5kbGUnKS50aGVuKChXZWJhbXApID0+IHtcbiAgICAgIGNvbnN0IF9faW5pdGlhbFdpbmRvd0xheW91dCA9IHtcbiAgICAgICAgbWFpbjogeyBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0gfSxcbiAgICAgICAgcGxheWxpc3Q6IHsgcG9zaXRpb246IHsgeDogMCwgeTogMTE2IH0gfVxuICAgICAgfTtcblxuICAgICAgd2ViYW1wID0gbmV3IFdlYmFtcC5kZWZhdWx0KHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgX19pbml0aWFsV2luZG93TGF5b3V0XG4gICAgICB9IGFzIE9wdGlvbnMgJiBQcml2YXRlT3B0aW9ucyk7XG4gICAgICAod2ViYW1wIGFzIFdlYmFtcCAmIFdlYmFtcFN0b3JlKS5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdDTE9TRV9XSU5ET1cnLFxuICAgICAgICB3aW5kb3dJZDogJ2VxdWFsaXplcidcbiAgICAgIH0pO1xuICAgICAgd2ViYW1wLnJlbmRlcldoZW5SZWFkeShlbGVtZW50UmVmPy5jdXJyZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3ZWJhbXAuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtlbGVtZW50UmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlXG4gICAgICBoYW5kbGU9Jy5kcmFnZ2FibGUnXG4gICAgPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgLy8gc3R5bGU9e3sgbWFyZ2luVG9wOiBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDUpIH19XG4gICAgICAgIHJlZj17ZWxlbWVudFJlZn1cbiAgICAgIC8+XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKFdpbmFtcCwgV2luYW1wSWNvbiwgJ3dpbmFtcCcsICdXaW5hbXAnLCBmYWxzZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})