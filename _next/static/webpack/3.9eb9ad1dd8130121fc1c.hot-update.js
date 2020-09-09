webpackHotUpdate_N_E(3,{

/***/ "./components/System/Windows/Windows.tsx":
/*!***********************************************!*\
  !*** ./components/System/Windows/Windows.tsx ***!
  \***********************************************/
/*! exports provided: Windows, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\")];\n    },\n    modules: ['@/components/System/Windows/Window']\n  }\n});\n_c2 = Window;\nvar windowMotionSettings = {\n  initial: {\n    opacity: 0\n  },\n  animate: {\n    opacity: 1\n  },\n  transition: {\n    duration: 0.5\n  },\n  exit: {\n    opacity: 0,\n    transition: {\n      duration: 0.2\n    }\n  }\n};\nvar windowDragSettings = {\n  dragElastic: 0.15,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: true\n};\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_2__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      close = _useContext.close,\n      focus = _useContext.focus,\n      maximize = _useContext.maximize,\n      minimize = _useContext.minimize,\n      position = _useContext.position,\n      size = _useContext.size,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: 50,\n      marginLeft: 50\n    });\n  }, []);\n  return (// TODO: Maybe I should use <article>?\n    // W3C: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.\n    // https://www.w3.org/wiki/HTML/Usage/Headings/Missing\n    __jsx(\"section\", {\n      style: windowMargins,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }\n    }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"sortByLastRunning\"]).map(function (_ref, index) {\n      var _ref$loader = _ref.loader,\n          App = _ref$loader.loader,\n          loadedAppOptions = _ref$loader.loadedAppOptions,\n          id = _ref.id,\n          icon = _ref.icon,\n          name = _ref.name,\n          windowed = _ref.windowed,\n          maximized = _ref.maximized,\n          minimized = _ref.minimized,\n          foreground = _ref.foreground,\n          lockAspectRatio = _ref.lockAspectRatio,\n          hideScrollbars = _ref.hideScrollbars,\n          stackOrder = _ref.stackOrder,\n          height = _ref.height,\n          width = _ref.width,\n          x = _ref.x,\n          y = _ref.y;\n      var cascadeSpacing = index * 20 || 0,\n          appOptions = {\n        onMinimize: function onMinimize() {\n          return minimize === null || minimize === void 0 ? void 0 : minimize(id);\n        },\n        onMaximize: function onMaximize() {\n          return maximize === null || maximize === void 0 ? void 0 : maximize(id, !maximized);\n        },\n        onClose: function onClose() {\n          return close === null || close === void 0 ? void 0 : close(id, stackOrder);\n        },\n        onFocus: function onFocus() {\n          return focus === null || focus === void 0 ? void 0 : focus(id);\n        },\n        onBlur: function onBlur() {\n          return focus === null || focus === void 0 ? void 0 : focus(id, false);\n        },\n        updatePosition: position === null || position === void 0 ? void 0 : position(id),\n        updateSize: size === null || size === void 0 ? void 0 : size(id),\n        zIndex: 1750 + (apps.length - (stackOrder.indexOf(id) + 1)),\n        // TODO: Still valid logic?\n        foreground: foreground,\n        maximized: maximized,\n        minimized: minimized,\n        height: height,\n        width: width,\n        x: x || cascadeSpacing,\n        y: y || cascadeSpacing\n      };\n      return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id,\n        drag: true //dragConstraints={navRef}\n\n      }, windowDragSettings, windowMotionSettings, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }\n      }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        icon: icon,\n        name: name,\n        lockAspectRatio: lockAspectRatio,\n        hideScrollbars: hideScrollbars,\n        updateSize: size === null || size === void 0 ? void 0 : size(id)\n      }, appOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }\n      }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 23\n        }\n      }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id\n      }, appOptions, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }\n      })));\n    })))\n  );\n};\n\n_s(Windows, \"Omjo+30iBg+7i/HkSs4lq4zJpWA=\");\n\n_c3 = Windows;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Windows);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3dzLnRzeD9iNWYyIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJ3aW5kb3dEcmFnU2V0dGluZ3MiLCJkcmFnRWxhc3RpYyIsImRyYWdUcmFuc2l0aW9uIiwiYm91bmNlU3RpZmZuZXNzIiwiYm91bmNlRGFtcGluZyIsImRyYWdNb21lbnR1bSIsIldpbmRvd3MiLCJ1c2VDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJhcHBzIiwiY2xvc2UiLCJmb2N1cyIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInNpemUiLCJ1c2VTdGF0ZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ3aW5kb3dNYXJnaW5zIiwic2V0V2luZG93TWFyZ2lucyIsInVzZUVmZmVjdCIsInNvcnQiLCJzb3J0QnlMYXN0UnVubmluZyIsIm1hcCIsImluZGV4IiwibG9hZGVyIiwiQXBwIiwibG9hZGVkQXBwT3B0aW9ucyIsImlkIiwiaWNvbiIsIm5hbWUiLCJ3aW5kb3dlZCIsIm1heGltaXplZCIsIm1pbmltaXplZCIsImZvcmVncm91bmQiLCJsb2NrQXNwZWN0UmF0aW8iLCJoaWRlU2Nyb2xsYmFycyIsInN0YWNrT3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsIngiLCJ5IiwiY2FzY2FkZVNwYWNpbmciLCJhcHBPcHRpb25zIiwib25NaW5pbWl6ZSIsIm9uTWF4aW1pemUiLCJvbkNsb3NlIiwib25Gb2N1cyIsIm9uQmx1ciIsInVwZGF0ZVBvc2l0aW9uIiwidXBkYXRlU2l6ZSIsInpJbmRleCIsImxlbmd0aCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFF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QUFRLEdBQVI7QUFDRSxXQUFHLEVBQUVkLEVBRFA7QUFFRSxZQUFJLE1BRk4sQ0FHRTs7QUFIRixTQUlNN0Isa0JBSk4sRUFLTVAsb0JBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU9HdUMsUUFBUSxHQUNQLE1BQUMsTUFBRDtBQUNFLFlBQUksRUFBRUYsSUFEUjtBQUVFLFlBQUksRUFBRUMsSUFGUjtBQUdFLHVCQUFlLEVBQUVLLGVBSG5CO0FBSUUsc0JBQWMsRUFBRUMsY0FKbEI7QUFLRSxrQkFBVSxFQUFFdEIsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUdjLEVBQUg7QUFMbEIsU0FNTWUsVUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUUUsTUFBQyxHQUFELHlGQUFTaEIsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLENBRE8sR0FZUCxNQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVDO0FBQVYsU0FBa0JlLFVBQWxCLEVBQWtDaEIsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FuQkosQ0FERjtBQXdCRCxLQWxFSixDQURILENBREY7QUFKRjtBQTZFRCxDQTdGTTs7R0FBTXRCLE87O01BQUFBLE87QUErRkVBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3dzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBzb3J0QnlMYXN0UnVubmluZyB9IGZyb20gJ0AvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd3MvV2luZG93JykpO1xuXG5jb25zdCB3aW5kb3dNb3Rpb25TZXR0aW5ncyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZHVyYXRpb246IDAuNVxuICB9LFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC4yXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB3aW5kb3dEcmFnU2V0dGluZ3MgPSB7XG4gIGRyYWdFbGFzdGljOiAwLjE1LFxuICBkcmFnVHJhbnNpdGlvbjogeyBib3VuY2VTdGlmZm5lc3M6IDUwMCwgYm91bmNlRGFtcGluZzogMTUgfSxcbiAgZHJhZ01vbWVudHVtOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgV2luZG93czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgY2xvc2UsIGZvY3VzLCBtYXhpbWl6ZSwgbWluaW1pemUsIHBvc2l0aW9uLCBzaXplIH0gPSB1c2VDb250ZXh0KFxuICAgICAgQXBwc0NvbnRleHRcbiAgICApLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd01hcmdpbnMoe1xuICAgICAgbWFyZ2luVG9wOiA1MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDUwXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IE1heWJlIEkgc2hvdWxkIHVzZSA8YXJ0aWNsZT4/XG4gICAgLy8gVzNDOiBTZWN0aW9uIGxhY2tzIGhlYWRpbmcuIENvbnNpZGVyIHVzaW5nIGgyLWg2IGVsZW1lbnRzIHRvIGFkZCBpZGVudGlmeWluZyBoZWFkaW5ncyB0byBhbGwgc2VjdGlvbnMuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9Vc2FnZS9IZWFkaW5ncy9NaXNzaW5nXG4gICAgPHNlY3Rpb24gc3R5bGU9e3dpbmRvd01hcmdpbnN9PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2FwcHNcbiAgICAgICAgICA/LnNvcnQoc29ydEJ5TGFzdFJ1bm5pbmcpXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRlcjogeyBsb2FkZXI6IEFwcCwgbG9hZGVkQXBwT3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aW5kb3dlZCxcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgIHN0YWNrT3JkZXIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhc2NhZGVTcGFjaW5nID0gaW5kZXggKiAyMCB8fCAwLFxuICAgICAgICAgICAgICAgIGFwcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uTWF4aW1pemU6ICgpID0+IG1heGltaXplPy4oaWQsICFtYXhpbWl6ZWQpLFxuICAgICAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4gY2xvc2U/LihpZCwgc3RhY2tPcmRlciksXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiBmb2N1cz8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uQmx1cjogKCkgPT4gZm9jdXM/LihpZCwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uPy4oaWQpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlU2l6ZTogc2l6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogMTc1MCArIChhcHBzLmxlbmd0aCAtIChzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpLCAvLyBUT0RPOiBTdGlsbCB2YWxpZCBsb2dpYz9cbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBtaW5pbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgIHg6IHggfHwgY2FzY2FkZVNwYWNpbmcsXG4gICAgICAgICAgICAgICAgICB5OiB5IHx8IGNhc2NhZGVTcGFjaW5nXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgZHJhZ1xuICAgICAgICAgICAgICAgICAgLy9kcmFnQ29uc3RyYWludHM9e25hdlJlZn1cbiAgICAgICAgICAgICAgICAgIHsuLi53aW5kb3dEcmFnU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICB7Li4ud2luZG93TW90aW9uU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICAgICAgICAgICAgICA8V2luZG93XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzPXtoaWRlU2Nyb2xsYmFyc31cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTaXplPXtzaXplPy4oaWQpfVxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5hcHBPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEFwcCB7Li4ubG9hZGVkQXBwT3B0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9XaW5kb3c+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8QXBwIGtleT17aWR9IHsuLi5hcHBPcHRpb25zfSB7Li4ubG9hZGVkQXBwT3B0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Windows/Windows.tsx\n");

/***/ })

})