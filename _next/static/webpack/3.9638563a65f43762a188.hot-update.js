webpackHotUpdate_N_E(3,{

/***/ "./components/System/Windows/Windows.tsx":
/*!***********************************************!*\
  !*** ./components/System/Windows/Windows.tsx ***!
  \***********************************************/
/*! exports provided: Windows, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Windows\", function() { return Windows; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Windows/Windows.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/Windows/Window */ \"./components/System/Windows/Window.tsx\")];\n    },\n    modules: ['@/components/System/Windows/Window']\n  }\n});\n_c2 = Window;\nvar windowMotionSettings = {\n  initial: {\n    scaleX: 0,\n    scaleY: 0\n  },\n  animate: {\n    scaleX: 1,\n    scaleY: 1\n  },\n  transition: {\n    duration: 0.5,\n    type: \"spring\"\n  },\n  exit: {\n    scaleX: 0,\n    scaleY: 0,\n    transition: {\n      duration: 0.2,\n      type: \"spring\"\n    }\n  }\n}; // x, y, z\n// rotate, rotateX, rotateY, rotateZ\n// scale, scaleX, scaleY, scaleZ\n// skewX, skewY\n// originX, originY\n// perspective\n\nvar Windows = function Windows() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_3__[\"AppsContext\"]),\n      apps = _useContext.apps,\n      close = _useContext.close,\n      focus = _useContext.focus,\n      maximize = _useContext.maximize,\n      minimize = _useContext.minimize,\n      position = _useContext.position,\n      size = _useContext.size,\n      _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    marginTop: 0,\n    marginLeft: 0\n  }),\n      windowMargins = _useState[0],\n      setWindowMargins = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setWindowMargins({\n      marginTop: 50,\n      marginLeft: 50\n    });\n  }, []);\n  return (// TODO: Maybe I should use <article>?\n    // W3C: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.\n    // https://www.w3.org/wiki/HTML/Usage/Headings/Missing\n    __jsx(\"section\", {\n      style: windowMargins,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }\n    }, apps === null || apps === void 0 ? void 0 : apps.sort(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[\"sortByLastRunning\"]).map(function (_ref, index) {\n      var _ref$loader = _ref.loader,\n          App = _ref$loader.loader,\n          loadedAppOptions = _ref$loader.loadedAppOptions,\n          id = _ref.id,\n          icon = _ref.icon,\n          name = _ref.name,\n          windowed = _ref.windowed,\n          maximized = _ref.maximized,\n          minimized = _ref.minimized,\n          foreground = _ref.foreground,\n          lockAspectRatio = _ref.lockAspectRatio,\n          hideScrollbars = _ref.hideScrollbars,\n          stackOrder = _ref.stackOrder,\n          height = _ref.height,\n          width = _ref.width,\n          x = _ref.x,\n          y = _ref.y;\n      var cascadeSpacing = index * 20 || 0,\n          appOptions = {\n        onMinimize: function onMinimize() {\n          return minimize === null || minimize === void 0 ? void 0 : minimize(id);\n        },\n        onMaximize: function onMaximize() {\n          return maximize === null || maximize === void 0 ? void 0 : maximize(id, !maximized);\n        },\n        onClose: function onClose() {\n          return close === null || close === void 0 ? void 0 : close(id, stackOrder);\n        },\n        onFocus: function onFocus() {\n          return focus === null || focus === void 0 ? void 0 : focus(id);\n        },\n        onBlur: function onBlur() {\n          return focus === null || focus === void 0 ? void 0 : focus(id, false);\n        },\n        updatePosition: position === null || position === void 0 ? void 0 : position(id),\n        updateSize: size === null || size === void 0 ? void 0 : size(id),\n        zIndex: 1750 + (apps.length - (stackOrder.indexOf(id) + 1)),\n        // TODO: Still valid logic?\n        foreground: foreground,\n        maximized: maximized,\n        minimized: minimized,\n        height: height,\n        width: width,\n        x: x || cascadeSpacing,\n        y: y || cascadeSpacing\n      };\n      return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id\n      }, windowMotionSettings, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 17\n        }\n      }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        icon: icon,\n        name: name,\n        lockAspectRatio: lockAspectRatio,\n        hideScrollbars: hideScrollbars,\n        updateSize: size === null || size === void 0 ? void 0 : size(id)\n      }, appOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }\n      }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 23\n        }\n      }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: id\n      }, appOptions, loadedAppOptions, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }\n      })));\n    })))\n  );\n};\n\n_s(Windows, \"Omjo+30iBg+7i/HkSs4lq4zJpWA=\");\n\n_c3 = Windows;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Windows);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"Windows\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3dzLnRzeD9iNWYyIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWwiLCJzY2FsZVgiLCJzY2FsZVkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsImV4aXQiLCJXaW5kb3dzIiwidXNlQ29udGV4dCIsIkFwcHNDb250ZXh0IiwiYXBwcyIsImNsb3NlIiwiZm9jdXMiLCJtYXhpbWl6ZSIsIm1pbmltaXplIiwicG9zaXRpb24iLCJzaXplIiwidXNlU3RhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwid2luZG93TWFyZ2lucyIsInNldFdpbmRvd01hcmdpbnMiLCJ1c2VFZmZlY3QiLCJzb3J0Iiwic29ydEJ5TGFzdFJ1bm5pbmciLCJtYXAiLCJpbmRleCIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJpZCIsImljb24iLCJuYW1lIiwid2luZG93ZWQiLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZWQiLCJmb3JlZ3JvdW5kIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJzdGFja09yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJ4IiwieSIsImNhc2NhZGVTcGFjaW5nIiwiYXBwT3B0aW9ucyIsIm9uTWluaW1pemUiLCJvbk1heGltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJ6SW5kZXgiLCJsZW5ndGgiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTztBQUFBLFNBQUMsaUtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxrRkFBUjtBQUFBO0FBQUEsY0FB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UUFBUSxHQUNQLE1BQUMsTUFBRDtBQUNFLFlBQUksRUFBRUYsSUFEUjtBQUVFLFlBQUksRUFBRUMsSUFGUjtBQUdFLHVCQUFlLEVBQUVLLGVBSG5CO0FBSUUsc0JBQWMsRUFBRUMsY0FKbEI7QUFLRSxrQkFBVSxFQUFFdEIsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUdjLEVBQUg7QUFMbEIsU0FNTWUsVUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUUUsTUFBQyxHQUFELHlGQUFTaEIsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVJGLENBRE8sR0FZUCxNQUFDLEdBQUQ7QUFBSyxXQUFHLEVBQUVDO0FBQVYsU0FBa0JlLFVBQWxCLEVBQWtDaEIsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FiSixDQURGO0FBa0JELEtBNURKLENBREgsQ0FERjtBQUpGO0FBdUVELENBdkZNOztHQUFNdEIsTzs7TUFBQUEsTztBQXlGRUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dzL1dpbmRvd3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5pbXBvcnQgeyBzb3J0QnlMYXN0UnVubmluZyB9IGZyb20gJ0AvdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93cy9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd01vdGlvblNldHRpbmdzID0ge1xuICBpbml0aWFsOiB7IHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXG4gIGFuaW1hdGU6IHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgdHlwZTogXCJzcHJpbmdcIlxuICB9LFxuICBleGl0OiB7XG4gICAgc2NhbGVYOiAwLFxuICAgIHNjYWxlWTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgdHlwZTogXCJzcHJpbmdcIlxuICAgIH1cbiAgfVxufTtcblxuLy8geCwgeSwgelxuLy8gcm90YXRlLCByb3RhdGVYLCByb3RhdGVZLCByb3RhdGVaXG4vLyBzY2FsZSwgc2NhbGVYLCBzY2FsZVksIHNjYWxlWlxuLy8gc2tld1gsIHNrZXdZXG4vLyBvcmlnaW5YLCBvcmlnaW5ZXG4vLyBwZXJzcGVjdGl2ZVxuXG5leHBvcnQgY29uc3QgV2luZG93czogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBwcywgY2xvc2UsIGZvY3VzLCBtYXhpbWl6ZSwgbWluaW1pemUsIHBvc2l0aW9uLCBzaXplIH0gPSB1c2VDb250ZXh0KFxuICAgICAgQXBwc0NvbnRleHRcbiAgICApLFxuICAgIFt3aW5kb3dNYXJnaW5zLCBzZXRXaW5kb3dNYXJnaW5zXSA9IHVzZVN0YXRlKHtcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd01hcmdpbnMoe1xuICAgICAgbWFyZ2luVG9wOiA1MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDUwXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IE1heWJlIEkgc2hvdWxkIHVzZSA8YXJ0aWNsZT4/XG4gICAgLy8gVzNDOiBTZWN0aW9uIGxhY2tzIGhlYWRpbmcuIENvbnNpZGVyIHVzaW5nIGgyLWg2IGVsZW1lbnRzIHRvIGFkZCBpZGVudGlmeWluZyBoZWFkaW5ncyB0byBhbGwgc2VjdGlvbnMuXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9Vc2FnZS9IZWFkaW5ncy9NaXNzaW5nXG4gICAgPHNlY3Rpb24gc3R5bGU9e3dpbmRvd01hcmdpbnN9PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2FwcHNcbiAgICAgICAgICA/LnNvcnQoc29ydEJ5TGFzdFJ1bm5pbmcpXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRlcjogeyBsb2FkZXI6IEFwcCwgbG9hZGVkQXBwT3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB3aW5kb3dlZCxcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgbWluaW1pemVkLFxuICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvLFxuICAgICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXJzLFxuICAgICAgICAgICAgICAgIHN0YWNrT3JkZXIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhc2NhZGVTcGFjaW5nID0gaW5kZXggKiAyMCB8fCAwLFxuICAgICAgICAgICAgICAgIGFwcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uTWF4aW1pemU6ICgpID0+IG1heGltaXplPy4oaWQsICFtYXhpbWl6ZWQpLFxuICAgICAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4gY2xvc2U/LihpZCwgc3RhY2tPcmRlciksXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiBmb2N1cz8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIG9uQmx1cjogKCkgPT4gZm9jdXM/LihpZCwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uPy4oaWQpLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlU2l6ZTogc2l6ZT8uKGlkKSxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogMTc1MCArIChhcHBzLmxlbmd0aCAtIChzdGFja09yZGVyLmluZGV4T2YoaWQpICsgMSkpLCAvLyBUT0RPOiBTdGlsbCB2YWxpZCBsb2dpYz9cbiAgICAgICAgICAgICAgICAgIGZvcmVncm91bmQsXG4gICAgICAgICAgICAgICAgICBtYXhpbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBtaW5pbWl6ZWQsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgIHg6IHggfHwgY2FzY2FkZVNwYWNpbmcsXG4gICAgICAgICAgICAgICAgICB5OiB5IHx8IGNhc2NhZGVTcGFjaW5nXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aWR9IHsuLi53aW5kb3dNb3Rpb25TZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgICB7d2luZG93ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxXaW5kb3dcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgICAgICAgICAgICAgaGlkZVNjcm9sbGJhcnM9e2hpZGVTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNpemU9e3NpemU/LihpZCl9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmFwcE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1dpbmRvdz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBcHAga2V5PXtpZH0gey4uLmFwcE9wdGlvbnN9IHsuLi5sb2FkZWRBcHBPcHRpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Windows/Windows.tsx\n");

/***/ })

})