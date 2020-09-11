webpackHotUpdate_N_E(6,{

/***/ "./utils/apps.tsx":
/*!************************!*\
  !*** ./utils/apps.tsx ***!
  \************************/
/*! exports provided: appClose, appFocus, appMinimize, appMaximize, appOpen, appPosition, appSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appClose\", function() { return appClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appFocus\", function() { return appFocus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appMinimize\", function() { return appMinimize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appMaximize\", function() { return appMaximize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appOpen\", function() { return appOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appPosition\", function() { return appPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appSize\", function() { return appSize; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/files */ \"./utils/files.tsx\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n // Q: What is the overlap between AppComponent, App & AppConstructor types?\n\nvar isValidUrl = function isValidUrl(possibleUrl) {\n  try {\n    new URL(possibleUrl);\n  } catch (_) {\n    return false;\n  }\n\n  return true;\n};\n\nvar appLoader = function appLoader(url) {\n  if (isValidUrl(url)) {\n    var _ref = new URL(url) || {},\n        pathname = _ref.pathname,\n        searchParams = _ref.searchParams;\n\n    return pathname === '/' ? appLoaderByName(searchParams.get('app') || '') : appLoaderByFileType(pathname, searchParams);\n  }\n\n  return appLoaderByFileType(url);\n};\n\nvar dosLoaderOptions = {\n  hideScrollbars: true,\n  lockAspectRatio: true,\n  width: 320,\n  height: 224,\n  bgColor: 'black'\n};\nvar pdfLoaderOptions = {\n  hideScrollbars: true,\n  height: 625,\n  width: 475,\n  bgColor: '#d7d7d7'\n};\nvar explorerLoaderOptions = {\n  width: 500,\n  height: 250,\n  bgColor: 'transparent'\n};\nvar Dos = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @/components/Apps/Dos */ \"./components/Apps/Dos.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Dos */ \"./components/Apps/Dos.tsx\")];\n    },\n    modules: ['@/components/Apps/Dos']\n  }\n});\n_c2 = Dos;\nvar Explorer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! @/components/Apps/Explorer */ \"./components/Apps/Explorer.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Explorer */ \"./components/Apps/Explorer.tsx\")];\n    },\n    modules: ['@/components/Apps/Explorer']\n  }\n});\n_c4 = Explorer;\nvar Pdf = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c5 = function _c5() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/Apps/Pdf */ \"./components/Apps/Pdf.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Pdf */ \"./components/Apps/Pdf.tsx\")];\n    },\n    modules: ['@/components/Apps/Pdf']\n  }\n});\n_c6 = Pdf;\nvar Winamp = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c7 = function _c7() {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/components/Apps/Winamp */ \"./components/Apps/Winamp.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Winamp */ \"./components/Apps/Winamp.tsx\")];\n    },\n    modules: ['@/components/Apps/Winamp']\n  }\n});\n_c8 = Winamp;\n\nvar appLoaderByName = function appLoaderByName(name) {\n  switch (name) {\n    case 'dos':\n      return {\n        loader: Dos,\n        loaderOptions: dosLoaderOptions\n      };\n\n    case 'explorer':\n      return {\n        loader: Explorer,\n        loaderOptions: explorerLoaderOptions\n      };\n\n    case 'pdf':\n      return {\n        loader: Pdf,\n        loaderOptions: pdfLoaderOptions\n      };\n\n    case 'winamp':\n      return {\n        loader: Winamp,\n        loaderOptions: {\n          windowed: false\n        }\n      };\n  }\n};\n\nvar appLoaderByFileType = function appLoaderByFileType(path, searchParams) {\n  switch (Object(_utils_files__WEBPACK_IMPORTED_MODULE_5__[\"getFileExtension\"])(path)) {\n    case 'jsdos':\n      return {\n        loader: Dos,\n        loaderOptions: dosLoaderOptions,\n        loadedAppOptions: {\n          url: path,\n          args: searchParams ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(searchParams.entries()).flat() : []\n        }\n      };\n\n    case 'mp3':\n    case 'm3u':\n    case 'wsz':\n      return {\n        loader: Winamp,\n        loaderOptions: {\n          windowed: false\n        },\n        loadedAppOptions: {\n          url: path\n        }\n      };\n\n    case 'pdf':\n      return {\n        loader: Pdf,\n        loaderOptions: pdfLoaderOptions,\n        loadedAppOptions: {\n          url: path\n        }\n      };\n  }\n};\n\nvar appToForegroundOthersToBackground = function appToForegroundOthersToBackground(apps, updateApp, id) {\n  return apps.forEach(function (_ref2) {\n    var appId = _ref2.id;\n    updateApp({\n      id: appId,\n      updates: {\n        foreground: id === appId\n      }\n    });\n  });\n}; // TODO: Stop storing stackOrder in every app\n\n\nvar appToStackTopOnEveryApp = function appToStackTopOnEveryApp(apps, updateApp, id) {\n  return apps.forEach(function (_ref3) {\n    var appId = _ref3.id,\n        stackOrder = _ref3.stackOrder;\n    updateApp({\n      id: appId,\n      updates: {\n        lastFocused: id,\n        stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stackOrder.filter(function (windowId) {\n          return windowId !== id;\n        })))\n      }\n    });\n  });\n};\n\nvar appClose = function appClose(apps, updateApp) {\n  return function (id, _ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n        newForegroundAppId = _ref5[1];\n\n    if (newForegroundAppId) {\n      appFocus(apps, updateApp)(newForegroundAppId);\n    } // TODO: Does stackOrder make sense the same way anymore?\n    // Maybe apps can keep track of this now that its only running\n\n\n    updateApp({\n      id: id\n    });\n  };\n};\nvar appFocus = function appFocus(apps, updateApp) {\n  return function (id) {\n    var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (focus) {\n      appToForegroundOthersToBackground(apps, updateApp, id);\n      appToStackTopOnEveryApp(apps, updateApp, id);\n    } else {\n      updateApp({\n        id: id,\n        updates: {\n          foreground: false\n        }\n      });\n    }\n  };\n};\nvar appMinimize = function appMinimize(updateApp) {\n  return function (id) {\n    var minimize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (minimize) {\n      updateApp({\n        updates: {\n          foreground: false,\n          minimized: true\n        },\n        id: id\n      });\n    } else {\n      updateApp({\n        updates: {\n          foreground: true,\n          minimized: false\n        },\n        id: id\n      });\n    }\n  };\n};\nvar appMaximize = function appMaximize(updateApp) {\n  return function (id) {\n    var maximized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (maximized) {\n      updateApp({\n        updates: {\n          maximized: true\n        },\n        id: id\n      });\n    } else {\n      updateApp({\n        updates: {\n          maximized: false\n        },\n        id: id\n      });\n    }\n  };\n};\nvar appOpen = function appOpen(updateApp) {\n  return function (url, icon, name) {\n    var loader = appLoader(url);\n\n    if (loader) {\n      updateApp({\n        app: new _contexts_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_objectSpread({\n          loader: loader,\n          icon: icon,\n          name: name\n        }, loader.loaderOptions))\n      });\n    }\n  };\n};\nvar appPosition = function appPosition(updateApp) {\n  return function (id) {\n    return function (_event, _ref6) {\n      var x = _ref6.x,\n          y = _ref6.y;\n      return updateApp({\n        id: id,\n        updates: {\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar appSize = function appSize(updateApp) {\n  return function (id) {\n    return function (_event, _direction, _ref7) {\n      var offsetWidth = _ref7.offsetWidth,\n          offsetHeight = _ref7.offsetHeight;\n      return updateApp({\n        id: id,\n        updates: {\n          height: offsetHeight,\n          width: offsetWidth\n        }\n      });\n    };\n  };\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Dos$dynamic\");\n$RefreshReg$(_c2, \"Dos\");\n$RefreshReg$(_c3, \"Explorer$dynamic\");\n$RefreshReg$(_c4, \"Explorer\");\n$RefreshReg$(_c5, \"Pdf$dynamic\");\n$RefreshReg$(_c6, \"Pdf\");\n$RefreshReg$(_c7, \"Winamp$dynamic\");\n$RefreshReg$(_c8, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwcy50c3g/NjA0ZCJdLCJuYW1lcyI6WyJpc1ZhbGlkVXJsIiwicG9zc2libGVVcmwiLCJVUkwiLCJfIiwiYXBwTG9hZGVyIiwidXJsIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJhcHBMb2FkZXJCeU5hbWUiLCJnZXQiLCJhcHBMb2FkZXJCeUZpbGVUeXBlIiwiZG9zTG9hZGVyT3B0aW9ucyIsImhpZGVTY3JvbGxiYXJzIiwibG9ja0FzcGVjdFJhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJiZ0NvbG9yIiwicGRmTG9hZGVyT3B0aW9ucyIsImV4cGxvcmVyTG9hZGVyT3B0aW9ucyIsIkRvcyIsImR5bmFtaWMiLCJFeHBsb3JlciIsIlBkZiIsIldpbmFtcCIsIm5hbWUiLCJsb2FkZXIiLCJsb2FkZXJPcHRpb25zIiwid2luZG93ZWQiLCJwYXRoIiwiZ2V0RmlsZUV4dGVuc2lvbiIsImxvYWRlZEFwcE9wdGlvbnMiLCJhcmdzIiwiZW50cmllcyIsImZsYXQiLCJhcHBUb0ZvcmVncm91bmRPdGhlcnNUb0JhY2tncm91bmQiLCJhcHBzIiwidXBkYXRlQXBwIiwiaWQiLCJmb3JFYWNoIiwiYXBwSWQiLCJ1cGRhdGVzIiwiZm9yZWdyb3VuZCIsImFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwIiwic3RhY2tPcmRlciIsImxhc3RGb2N1c2VkIiwiZmlsdGVyIiwid2luZG93SWQiLCJhcHBDbG9zZSIsIm5ld0ZvcmVncm91bmRBcHBJZCIsImFwcEZvY3VzIiwiZm9jdXMiLCJhcHBNaW5pbWl6ZSIsIm1pbmltaXplIiwibWluaW1pemVkIiwiYXBwTWF4aW1pemUiLCJtYXhpbWl6ZWQiLCJhcHBPcGVuIiwiaWNvbiIsImFwcCIsIkFwcCIsImFwcFBvc2l0aW9uIiwiX2V2ZW50IiwieCIsInkiLCJhcHBTaXplIiwiX2RpcmVjdGlvbiIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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U0FBUyxDQUFDO0FBQUVDLFVBQUUsRUFBRkEsRUFBRjtBQUFNRyxlQUFPLEVBQUU7QUFBRXpCLGdCQUFNLEVBQUVvRCxZQUFWO0FBQXdCckQsZUFBSyxFQUFFb0Q7QUFBL0I7QUFBZixPQUFELENBTGE7QUFBQSxLQUZtQztBQUFBLEdBQXBDO0FBQUEsQ0FBaEIiLCJmaWxlIjoiLi91dGlscy9hcHBzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29tcG9uZW50VHlwZSwgRGlzcGF0Y2gsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBSbmREcmFnQ2FsbGJhY2ssIFJuZFJlc2l6ZUNhbGxiYWNrIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50LCBBcHBDb25zdHJ1Y3RvciB9IGZyb20gJ0AvY29udGV4dHMvQXBwJztcbmltcG9ydCB0eXBlIHsgQXBwQWN0aW9uLCBBcHBzIH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcblxuaW1wb3J0IEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgZ2V0RmlsZUV4dGVuc2lvbiB9IGZyb20gJ0AvdXRpbHMvZmlsZXMnO1xuXG4vLyBROiBXaGF0IGlzIHRoZSBvdmVybGFwIGJldHdlZW4gQXBwQ29tcG9uZW50LCBBcHAgJiBBcHBDb25zdHJ1Y3RvciB0eXBlcz9cblxuZXhwb3J0IHR5cGUgQXBwTG9hZGVyID0ge1xuICBsb2FkZXI6IEZDPEFwcENvbXBvbmVudD4gfCBDb21wb25lbnRUeXBlPEFwcENvbXBvbmVudD47XG4gIGxvYWRlck9wdGlvbnM/OiBQYXJ0aWFsPEFwcENvbnN0cnVjdG9yPjtcbiAgbG9hZGVkQXBwT3B0aW9ucz86IFBhcnRpYWw8QXBwQ29tcG9uZW50Pjtcbn07XG5cbmNvbnN0IGlzVmFsaWRVcmwgPSAocG9zc2libGVVcmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIG5ldyBVUkwocG9zc2libGVVcmwpO1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhcHBMb2FkZXIgPSAodXJsOiBzdHJpbmcpOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoaXNWYWxpZFVybCh1cmwpKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHVybCkgfHwge307XG5cbiAgICByZXR1cm4gcGF0aG5hbWUgPT09ICcvJ1xuICAgICAgPyBhcHBMb2FkZXJCeU5hbWUoc2VhcmNoUGFyYW1zLmdldCgnYXBwJykgfHwgJycpXG4gICAgICA6IGFwcExvYWRlckJ5RmlsZVR5cGUocGF0aG5hbWUsIHNlYXJjaFBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gYXBwTG9hZGVyQnlGaWxlVHlwZSh1cmwpO1xufTtcblxuY29uc3QgZG9zTG9hZGVyT3B0aW9ucyA9IHtcbiAgaGlkZVNjcm9sbGJhcnM6IHRydWUsXG4gIGxvY2tBc3BlY3RSYXRpbzogdHJ1ZSxcbiAgd2lkdGg6IDMyMCxcbiAgaGVpZ2h0OiAyMjQsXG4gIGJnQ29sb3I6ICdibGFjaydcbn07XG5cbmNvbnN0IHBkZkxvYWRlck9wdGlvbnMgPSB7XG4gIGhpZGVTY3JvbGxiYXJzOiB0cnVlLFxuICBoZWlnaHQ6IDYyNSxcbiAgd2lkdGg6IDQ3NSxcbiAgYmdDb2xvcjogJyNkN2Q3ZDcnXG59O1xuXG5jb25zdCBleHBsb3JlckxvYWRlck9wdGlvbnMgPSB7XG4gIHdpZHRoOiA1MDAsXG4gIGhlaWdodDogMjUwLFxuICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnXG59O1xuXG5jb25zdCBEb3MgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FwcHMvRG9zJykpO1xuY29uc3QgRXhwbG9yZXIgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FwcHMvRXhwbG9yZXInKSk7XG5jb25zdCBQZGYgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FwcHMvUGRmJykpO1xuY29uc3QgV2luYW1wID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9BcHBzL1dpbmFtcCcpKTtcblxuY29uc3QgYXBwTG9hZGVyQnlOYW1lID0gKG5hbWU6IHN0cmluZyk6IEFwcExvYWRlciB8IHVuZGVmaW5lZCA9PiB7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ2Rvcyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IERvcyxcbiAgICAgICAgbG9hZGVyT3B0aW9uczogZG9zTG9hZGVyT3B0aW9uc1xuICAgICAgfTtcbiAgICBjYXNlICdleHBsb3Jlcic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IEV4cGxvcmVyLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiBleHBsb3JlckxvYWRlck9wdGlvbnNcbiAgICAgIH07XG4gICAgY2FzZSAncGRmJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogUGRmLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiBwZGZMb2FkZXJPcHRpb25zXG4gICAgICB9O1xuICAgIGNhc2UgJ3dpbmFtcCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IFdpbmFtcCxcbiAgICAgICAgbG9hZGVyT3B0aW9uczoge1xuICAgICAgICAgIHdpbmRvd2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59O1xuXG5jb25zdCBhcHBMb2FkZXJCeUZpbGVUeXBlID0gKFxuICBwYXRoOiBzdHJpbmcsXG4gIHNlYXJjaFBhcmFtcz86IFVSTFNlYXJjaFBhcmFtc1xuKTogQXBwTG9hZGVyIHwgdW5kZWZpbmVkID0+IHtcbiAgc3dpdGNoIChnZXRGaWxlRXh0ZW5zaW9uKHBhdGgpKSB7XG4gICAgY2FzZSAnanNkb3MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBEb3MsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IGRvc0xvYWRlck9wdGlvbnMsXG4gICAgICAgIGxvYWRlZEFwcE9wdGlvbnM6IHtcbiAgICAgICAgICB1cmw6IHBhdGgsXG4gICAgICAgICAgYXJnczogc2VhcmNoUGFyYW1zID8gWy4uLnNlYXJjaFBhcmFtcy5lbnRyaWVzKCldLmZsYXQoKSA6IFtdXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgY2FzZSAnbXAzJzpcbiAgICBjYXNlICdtM3UnOlxuICAgIGNhc2UgJ3dzeic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IFdpbmFtcCxcbiAgICAgICAgbG9hZGVyT3B0aW9uczoge1xuICAgICAgICAgIHdpbmRvd2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBsb2FkZWRBcHBPcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgY2FzZSAncGRmJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogUGRmLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiBwZGZMb2FkZXJPcHRpb25zLFxuICAgICAgICBsb2FkZWRBcHBPcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGFwcFRvRm9yZWdyb3VuZE90aGVyc1RvQmFja2dyb3VuZCA9IChcbiAgYXBwczogQXBwcyxcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+XG4gIGFwcHMuZm9yRWFjaCgoeyBpZDogYXBwSWQgfSkgPT4ge1xuICAgIHVwZGF0ZUFwcCh7XG4gICAgICBpZDogYXBwSWQsXG4gICAgICB1cGRhdGVzOiB7IGZvcmVncm91bmQ6IGlkID09PSBhcHBJZCB9XG4gICAgfSk7XG4gIH0pO1xuXG4vLyBUT0RPOiBTdG9wIHN0b3Jpbmcgc3RhY2tPcmRlciBpbiBldmVyeSBhcHBcbmNvbnN0IGFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCwgc3RhY2tPcmRlciB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgbGFzdEZvY3VzZWQ6IGlkLFxuICAgICAgICBzdGFja09yZGVyOiBbXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgLi4uc3RhY2tPcmRlci5maWx0ZXIoKHdpbmRvd0lkOiBzdHJpbmcpID0+IHdpbmRvd0lkICE9PSBpZClcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFwcENsb3NlID0gKGFwcHM6IEFwcHMsIHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBbLCBuZXdGb3JlZ3JvdW5kQXBwSWRdOiBBcnJheTxzdHJpbmc+IC8vIFRPRE86IERvZXMgdGhpcyBsb2dpYyBtYWtlIHNlbnNlP1xuKTogdm9pZCA9PiB7XG4gIGlmIChuZXdGb3JlZ3JvdW5kQXBwSWQpIHtcbiAgICBhcHBGb2N1cyhhcHBzLCB1cGRhdGVBcHApKG5ld0ZvcmVncm91bmRBcHBJZCk7XG4gIH1cblxuICAvLyBUT0RPOiBEb2VzIHN0YWNrT3JkZXIgbWFrZSBzZW5zZSB0aGUgc2FtZSB3YXkgYW55bW9yZT9cbiAgLy8gTWF5YmUgYXBwcyBjYW4ga2VlcCB0cmFjayBvZiB0aGlzIG5vdyB0aGF0IGl0cyBvbmx5IHJ1bm5pbmdcbiAgdXBkYXRlQXBwKHsgaWQgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwRm9jdXMgPSAoYXBwczogQXBwcywgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmcsXG4gIGZvY3VzID0gdHJ1ZVxuKTogdm9pZCA9PiB7XG4gIGlmIChmb2N1cykge1xuICAgIGFwcFRvRm9yZWdyb3VuZE90aGVyc1RvQmFja2dyb3VuZChhcHBzLCB1cGRhdGVBcHAsIGlkKTtcbiAgICBhcHBUb1N0YWNrVG9wT25FdmVyeUFwcChhcHBzLCB1cGRhdGVBcHAsIGlkKTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVBcHAoeyBpZCwgdXBkYXRlczogeyBmb3JlZ3JvdW5kOiBmYWxzZSB9IH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwTWluaW1pemUgPSAodXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmcsXG4gIG1pbmltaXplID0gdHJ1ZVxuKTogdm9pZCA9PiB7XG4gIGlmIChtaW5pbWl6ZSkge1xuICAgIHVwZGF0ZUFwcCh7IHVwZGF0ZXM6IHsgZm9yZWdyb3VuZDogZmFsc2UsIG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVBcHAoeyB1cGRhdGVzOiB7IGZvcmVncm91bmQ6IHRydWUsIG1pbmltaXplZDogZmFsc2UgfSwgaWQgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhcHBNYXhpbWl6ZSA9ICh1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAgbWF4aW1pemVkID0gdHJ1ZVxuKTogdm9pZCA9PiB7XG4gIGlmIChtYXhpbWl6ZWQpIHtcbiAgICB1cGRhdGVBcHAoeyB1cGRhdGVzOiB7IG1heGltaXplZDogdHJ1ZSB9LCBpZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVBcHAoeyB1cGRhdGVzOiB7IG1heGltaXplZDogZmFsc2UgfSwgaWQgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhcHBPcGVuID0gKHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICB1cmw6IHN0cmluZyxcbiAgaWNvbjogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmdcbik6IHZvaWQgPT4ge1xuICBjb25zdCBsb2FkZXIgPSBhcHBMb2FkZXIodXJsKTtcblxuICBpZiAobG9hZGVyKSB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGFwcDogbmV3IEFwcCh7XG4gICAgICAgIGxvYWRlcixcbiAgICAgICAgaWNvbixcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLi4ubG9hZGVyLmxvYWRlck9wdGlvbnNcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhcHBQb3NpdGlvbiA9ICh1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogUm5kRHJhZ0NhbGxiYWNrID0+IChfZXZlbnQsIHsgeCwgeSB9KTogdm9pZCA9PlxuICB1cGRhdGVBcHAoeyBpZCwgdXBkYXRlczogeyB4LCB5IH0gfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBTaXplID0gKHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiBSbmRSZXNpemVDYWxsYmFjayA9PiAoXG4gIF9ldmVudCxcbiAgX2RpcmVjdGlvbixcbiAgeyBvZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0IH1cbik6IHZvaWQgPT5cbiAgdXBkYXRlQXBwKHsgaWQsIHVwZGF0ZXM6IHsgaGVpZ2h0OiBvZmZzZXRIZWlnaHQsIHdpZHRoOiBvZmZzZXRXaWR0aCB9IH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/apps.tsx\n");

/***/ })

})