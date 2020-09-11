webpackHotUpdate_N_E(3,{

/***/ "./components/System/Windows/Windows.tsx":
/*!***********************************************!*\
  !*** ./components/System/Windows/Windows.tsx ***!
  \***********************************************/
/*! exports provided: Windows, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\")];\n    },\n    modules: ['@/components/System/Windows/Window']\n  }\n});\n_c2 = Window;\nvar windowMotionSettings = {\n  initial: {\n    opacity: 0,\n    z: 0,\n    scale: 0.75\n  },\n  animate: {\n    opacity: 1,\n    scale: 1,\n    z: 1\n  },\n  transition: {\n    duration: 0.25\n  },\n  exit: {\n    opacity: 0,\n    scale: 0.75,\n    transition: {\n      duration: 0.25\n    }\n  }\n}; // x, y, z\n// rotate, rotateX, rotateY, rotateZ\n// scale, scaleX, scaleY, scaleZ\n// skewX, skewY\n// originX, originY\n// perspective\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_3__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      close = _useContext.close,\n      focus = _useContext.focus,\n      maximize = _useContext.maximize,\n      minimize = _useContext.minimize,\n      position = _useContext.position,\n      size = _useContext.size,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: 50,\n      marginLeft: 50\n    });\n  }, []);\n  return (// TODO: Maybe I should use <article>?\n    // W3C: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.\n    // https://www.w3.org/wiki/HTML/Usage/Headings/Missing\n    __jsx(\"section\", {\n      style: windowMargins,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 5\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[\"sortByLastRunning\"]).map(function (_ref, index) {\n      var _ref$loader = _ref.loader,\n          App = _ref$loader.loader,\n          loadedAppOptions = _ref$loader.loadedAppOptions,\n          id = _ref.id,\n          icon = _ref.icon,\n          name = _ref.name,\n          windowed = _ref.windowed,\n          maximized = _ref.maximized,\n          minimized = _ref.minimized,\n          foreground = _ref.foreground,\n          lockAspectRatio = _ref.lockAspectRatio,\n          hideScrollbars = _ref.hideScrollbars,\n          stackOrder = _ref.stackOrder,\n          height = _ref.height,\n          width = _ref.width,\n          x = _ref.x,\n          y = _ref.y;\n      var cascadeSpacing = index * 20 || 0,\n          appOptions = {\n        onMinimize: function onMinimize() {\n          return minimize === null || minimize === void 0 ? void 0 : minimize(id);\n        },\n        onMaximize: function onMaximize() {\n          return maximize === null || maximize === void 0 ? void 0 : maximize(id, !maximized);\n        },\n        onClose: function onClose() {\n          return close === null || close === void 0 ? void 0 : close(id, stackOrder);\n        },\n        onFocus: function onFocus() {\n          return focus === null || focus === void 0 ? void 0 : focus(id);\n        },\n        onBlur: function onBlur() {\n          return focus === null || focus === void 0 ? void 0 : focus(id, false);\n        },\n        updatePosition: position === null || position === void 0 ? void 0 : position(id),\n        updateSize: size === null || size === void 0 ? void 0 : size(id),\n        zIndex: 1750 + (apps.length - (stackOrder.indexOf(id) + 1)),\n        // TODO: Still valid logic?\n        foreground: foreground,\n        maximized: maximized,\n        minimized: minimized,\n        height: height,\n        width: width,\n        x: x || cascadeSpacing,\n        y: y || cascadeSpacing\n      };\n      return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id\n      }, windowMotionSettings, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }\n      }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        icon: icon,\n        name: name,\n        lockAspectRatio: lockAspectRatio,\n        hideScrollbars: hideScrollbars,\n        updateSize: size === null || size === void 0 ? void 0 : size(id)\n      }, appOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }\n      }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 23\n        }\n      }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id\n      }, appOptions, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }\n      })));\n    })))\n  );\n};\n\n_s(Windows, \"Omjo+30iBg+7i/HkSs4lq4zJpWA=\");\n\n_c3 = Windows;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Windows);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3dzLnRzeD9iNWYyIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWwiLCJvcGFjaXR5IiwieiIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJXaW5kb3dzIiwidXNlQ29udGV4dCIsIkFwcHNDb250ZXh0IiwiYXBwcyIsImNsb3NlIiwiZm9jdXMiLCJtYXhpbWl6ZSIsIm1pbmltaXplIiwicG9zaXRpb24iLCJzaXplIiwidXNlU3RhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwid2luZG93TWFyZ2lucyIsInNldFdpbmRvd01hcmdpbnMiLCJ1c2VFZmZlY3QiLCJzb3J0Iiwic29ydEJ5TGFzdFJ1bm5pbmciLCJtYXAiLCJpbmRleCIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJpZCIsImljb24iLCJuYW1lIiwid2luZG93ZWQiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZWQiLCJmb3JlZ3JvdW5kIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJzdGFja09yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNhc2NhZGVTcGFjaW5nIiwiYXBwT3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJ6SW5kZXgiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTztBQUFBLFNBQUMsaUtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxrRkFBUjtBQUFBO0FBQUEsY0FBUSxv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R0FDUCxNQUFDLE1BQUQ7QUFDRSxZQUFJLEVBQUVGLElBRFI7QUFFRSxZQUFJLEVBQUVDLElBRlI7QUFHRSx1QkFBZSxFQUFFSyxlQUhuQjtBQUlFLHNCQUFjLEVBQUVDLGNBSmxCO0FBS0Usa0JBQVUsRUFBRXRCLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFHYyxFQUFIO0FBTGxCLFNBTU1lLFVBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVFFLE1BQUMsR0FBRCx5RkFBU2hCLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FSRixDQURPLEdBWVAsTUFBQyxHQUFEO0FBQUssV0FBRyxFQUFFQztBQUFWLFNBQWtCZSxVQUFsQixFQUFrQ2hCLGdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBYkosQ0FERjtBQWtCRCxLQTVESixDQURILENBREY7QUFKRjtBQXVFRCxDQXZGTTs7R0FBTXRCLE87O01BQUFBLE87QUF5RkVBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3dzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0FwcHMnO1xuaW1wb3J0IHsgc29ydEJ5TGFzdFJ1bm5pbmcgfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd3MvV2luZG93JykpO1xuXG5jb25zdCB3aW5kb3dNb3Rpb25TZXR0aW5ncyA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgejogMCxcbiAgICBzY2FsZTogMC43NVxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBzY2FsZTogMSxcbiAgICB6OiAxXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICBkdXJhdGlvbjogMC4yNVxuICB9LFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBzY2FsZTogMC43NSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC4yNVxuICAgIH1cbiAgfVxufTtcblxuLy8geCwgeSwgelxuLy8gcm90YXRlLCByb3RhdGVYLCByb3RhdGVZLCByb3RhdGVaXG4vLyBzY2FsZSwgc2NhbGVYLCBzY2FsZVksIHNjYWxlWlxuLy8gc2tld1gsIHNrZXdZXG4vLyBvcmlnaW5YLCBvcmlnaW5ZXG4vLyBwZXJzcGVjdGl2ZVxuXG5leHBvcnQgY29uc3QgV2luZG93czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgY2xvc2UsIGZvY3VzLCBtYXhpbWl6ZSwgbWluaW1pemUsIHBvc2l0aW9uLCBzaXplIH0gPSB1c2VDb250ZXh0KFxuICAgICAgQXBwc0NvbnRleHRcbiAgICApLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd01hcmdpbnMoe1xuICAgICAgbWFyZ2luVG9wOiA1MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDUwXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IE1heWJlIEkgc2hvdWxkIHVzZSA8YXJ0aWNsZT4/XG4gICAgLy8gVzNDOiBTZWN0aW9uIGxhY2tzIGhlYWRpbmcuIENvbnNpZGVyIHVzaW5nIGgyLWg2IGVsZW1lbnRzIHRvIGFkZCBpZGVudGlmeWluZyBoZWFkaW5ncyB0byBhbGwgc2VjdGlvbnMuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9Vc2FnZS9IZWFkaW5ncy9NaXNzaW5nXG4gICAgPHNlY3Rpb24gc3R5bGU9e3dpbmRvd01hcmdpbnN9PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2FwcHNcbiAgICAgICAgICA/LnNvcnQoc29ydEJ5TGFzdFJ1bm5pbmcpXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRlcjogeyBsb2FkZXI6IEFwcCwgbG9hZGVkQXBwT3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aW5kb3dlZCxcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgIHN0YWNrT3JkZXIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhc2NhZGVTcGFjaW5nID0gaW5kZXggKiAyMCB8fCAwLFxuICAgICAgICAgICAgICAgIGFwcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uTWF4aW1pemU6ICgpID0+IG1heGltaXplPy4oaWQsICFtYXhpbWl6ZWQpLFxuICAgICAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4gY2xvc2U/LihpZCwgc3RhY2tPcmRlciksXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiBmb2N1cz8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uQmx1cjogKCkgPT4gZm9jdXM/LihpZCwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uPy4oaWQpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlU2l6ZTogc2l6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogMTc1MCArIChhcHBzLmxlbmd0aCAtIChzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpLCAvLyBUT0RPOiBTdGlsbCB2YWxpZCBsb2dpYz9cbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBtaW5pbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgIHg6IHggfHwgY2FzY2FkZVNwYWNpbmcsXG4gICAgICAgICAgICAgICAgICB5OiB5IHx8IGNhc2NhZGVTcGFjaW5nXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aWR9IHsuLi53aW5kb3dNb3Rpb25TZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgICB7d2luZG93ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxXaW5kb3dcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgICAgICAgICAgICAgaGlkZVNjcm9sbGJhcnM9e2hpZGVTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemU/LihpZCl9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmFwcE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBcHAga2V5PXtpZH0gey4uLmFwcE9wdGlvbnN9IHsuLi5sb2FkZWRBcHBPcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Windows/Windows.tsx\n");

/***/ })

})