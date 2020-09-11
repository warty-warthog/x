webpackHotUpdate_N_E(6,{

/***/ "./utils/apps.tsx":
/*!************************!*\
  !*** ./utils/apps.tsx ***!
  \************************/
/*! exports provided: appClose, appFocus, appMinimize, appMaximize, appOpen, appPosition, appSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appClose\", function() { return appClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appFocus\", function() { return appFocus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appMinimize\", function() { return appMinimize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appMaximize\", function() { return appMaximize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appOpen\", function() { return appOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appPosition\", function() { return appPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appSize\", function() { return appSize; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/files */ \"./utils/files.tsx\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar isValidUrl = function isValidUrl(possibleUrl) {\n  try {\n    new URL(possibleUrl);\n  } catch (_) {\n    return false;\n  }\n\n  return true;\n};\n\nvar appLoader = function appLoader(url) {\n  if (isValidUrl(url)) {\n    var _ref = new URL(url) || {},\n        pathname = _ref.pathname,\n        searchParams = _ref.searchParams;\n\n    return pathname === '/' ? appLoaderByName(searchParams.get('app') || '') : appLoaderByFileType(pathname, searchParams);\n  }\n\n  return appLoaderByFileType(url);\n};\n\nvar dosLoaderOptions = {\n  hideScrollbars: true,\n  lockAspectRatio: true,\n  width: 320,\n  height: 224,\n  bgColor: 'black'\n};\nvar pdfLoaderOptions = {\n  hideScrollbars: true,\n  height: 625,\n  width: 475,\n  bgColor: '#d7d7d7'\n};\nvar explorerLoaderOptions = {\n  width: 450,\n  height: 270,\n  bgColor: '#2a282b'\n};\nvar Dos = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @/components/Apps/Dos */ \"./components/Apps/Dos.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Dos */ \"./components/Apps/Dos.tsx\")];\n    },\n    modules: ['@/components/Apps/Dos']\n  }\n});\n_c2 = Dos;\nvar Explorer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! @/components/Apps/Explorer */ \"./components/Apps/Explorer.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Explorer */ \"./components/Apps/Explorer.tsx\")];\n    },\n    modules: ['@/components/Apps/Explorer']\n  }\n});\n_c4 = Explorer;\nvar Pdf = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c5 = function _c5() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/components/Apps/Pdf */ \"./components/Apps/Pdf.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Pdf */ \"./components/Apps/Pdf.tsx\")];\n    },\n    modules: ['@/components/Apps/Pdf']\n  }\n});\n_c6 = Pdf;\nvar Winamp = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c7 = function _c7() {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/components/Apps/Winamp */ \"./components/Apps/Winamp.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/Apps/Winamp */ \"./components/Apps/Winamp.tsx\")];\n    },\n    modules: ['@/components/Apps/Winamp']\n  }\n});\n_c8 = Winamp;\n\nvar appLoaderByName = function appLoaderByName(name) {\n  switch (name) {\n    case 'dos':\n      return {\n        loader: Dos,\n        loaderOptions: dosLoaderOptions\n      };\n\n    case 'explorer':\n      return {\n        loader: Explorer,\n        loaderOptions: explorerLoaderOptions\n      };\n\n    case 'pdf':\n      return {\n        loader: Pdf,\n        loaderOptions: pdfLoaderOptions\n      };\n\n    case 'winamp':\n      return {\n        loader: Winamp,\n        loaderOptions: {\n          windowed: false\n        }\n      };\n  }\n};\n\nvar appLoaderByFileType = function appLoaderByFileType(path, searchParams) {\n  switch (Object(_utils_files__WEBPACK_IMPORTED_MODULE_5__[\"getFileExtension\"])(path)) {\n    case 'jsdos':\n      return {\n        loader: Dos,\n        loaderOptions: dosLoaderOptions,\n        loadedAppOptions: {\n          url: path,\n          args: searchParams ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(searchParams.entries()).flat() : []\n        }\n      };\n\n    case 'mp3':\n    case 'm3u':\n    case 'wsz':\n      return {\n        loader: Winamp,\n        loaderOptions: {\n          windowed: false\n        },\n        loadedAppOptions: {\n          url: path\n        }\n      };\n\n    case 'pdf':\n      return {\n        loader: Pdf,\n        loaderOptions: pdfLoaderOptions,\n        loadedAppOptions: {\n          url: path\n        }\n      };\n  }\n};\n\nvar appToForegroundOthersToBackground = function appToForegroundOthersToBackground(apps, updateApp, id) {\n  return apps.forEach(function (_ref2) {\n    var appId = _ref2.id;\n    updateApp({\n      id: appId,\n      updates: {\n        foreground: id === appId\n      }\n    });\n  });\n};\n\nvar appToStackTopOnEveryApp = function appToStackTopOnEveryApp(apps, updateApp, id) {\n  return apps.forEach(function (_ref3) {\n    var appId = _ref3.id,\n        stackOrder = _ref3.stackOrder;\n    updateApp({\n      id: appId,\n      updates: {\n        stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stackOrder.filter(function (windowId) {\n          return windowId !== id;\n        })))\n      }\n    });\n  });\n};\n\nvar appClose = function appClose(apps, updateApp) {\n  return function (id, _ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n        newForegroundAppId = _ref5[1];\n\n    if (newForegroundAppId) {\n      appFocus(apps, updateApp)(newForegroundAppId);\n    }\n\n    updateApp({\n      id: id\n    });\n  };\n};\nvar appFocus = function appFocus(apps, updateApp) {\n  return function (id) {\n    var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (focus) {\n      appToForegroundOthersToBackground(apps, updateApp, id);\n      appToStackTopOnEveryApp(apps, updateApp, id);\n    } else {\n      updateApp({\n        id: id,\n        updates: {\n          foreground: false\n        }\n      });\n    }\n  };\n};\nvar appMinimize = function appMinimize(updateApp) {\n  return function (id) {\n    var minimize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (minimize) {\n      updateApp({\n        updates: {\n          foreground: false,\n          minimized: true\n        },\n        id: id\n      });\n    } else {\n      updateApp({\n        updates: {\n          foreground: true,\n          minimized: false\n        },\n        id: id\n      });\n    }\n  };\n};\nvar appMaximize = function appMaximize(updateApp) {\n  return function (id) {\n    var maximized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (maximized) {\n      updateApp({\n        updates: {\n          maximized: true\n        },\n        id: id\n      });\n    } else {\n      updateApp({\n        updates: {\n          maximized: false\n        },\n        id: id\n      });\n    }\n  };\n};\nvar appOpen = function appOpen(updateApp) {\n  return function (url, icon, name) {\n    var loader = appLoader(url);\n\n    if (loader) {\n      updateApp({\n        app: new _contexts_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_objectSpread({\n          loader: loader,\n          icon: icon,\n          name: name\n        }, loader.loaderOptions))\n      });\n    }\n  };\n};\nvar appPosition = function appPosition(updateApp) {\n  return function (id) {\n    return function (_event, _ref6) {\n      var x = _ref6.x,\n          y = _ref6.y;\n      return updateApp({\n        id: id,\n        updates: {\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar appSize = function appSize(updateApp) {\n  return function (id) {\n    return function (_event, _direction, _ref7) {\n      var offsetWidth = _ref7.offsetWidth,\n          offsetHeight = _ref7.offsetHeight;\n      return updateApp({\n        id: id,\n        updates: {\n          height: offsetHeight,\n          width: offsetWidth\n        }\n      });\n    };\n  };\n};\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Dos$dynamic\");\n$RefreshReg$(_c2, \"Dos\");\n$RefreshReg$(_c3, \"Explorer$dynamic\");\n$RefreshReg$(_c4, \"Explorer\");\n$RefreshReg$(_c5, \"Pdf$dynamic\");\n$RefreshReg$(_c6, \"Pdf\");\n$RefreshReg$(_c7, \"Winamp$dynamic\");\n$RefreshReg$(_c8, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwcy50c3g/NjA0ZCJdLCJuYW1lcyI6WyJpc1ZhbGlkVXJsIiwicG9zc2libGVVcmwiLCJVUkwiLCJfIiwiYXBwTG9hZGVyIiwidXJsIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJhcHBMb2FkZXJCeU5hbWUiLCJnZXQiLCJhcHBMb2FkZXJCeUZpbGVUeXBlIiwiZG9zTG9hZGVyT3B0aW9ucyIsImhpZGVTY3JvbGxiYXJzIiwibG9ja0FzcGVjdFJhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJiZ0NvbG9yIiwicGRmTG9hZGVyT3B0aW9ucyIsImV4cGxvcmVyTG9hZGVyT3B0aW9ucyIsIkRvcyIsImR5bmFtaWMiLCJFeHBsb3JlciIsIlBkZiIsIldpbmFtcCIsIm5hbWUiLCJsb2FkZXIiLCJsb2FkZXJPcHRpb25zIiwid2luZG93ZWQiLCJwYXRoIiwiZ2V0RmlsZUV4dGVuc2lvbiIsImxvYWRlZEFwcE9wdGlvbnMiLCJhcmdzIiwiZW50cmllcyIsImZsYXQiLCJhcHBUb0ZvcmVncm91bmRPdGhlcnNUb0JhY2tncm91bmQiLCJhcHBzIiwidXBkYXRlQXBwIiwiaWQiLCJmb3JFYWNoIiwiYXBwSWQiLCJ1cGRhdGVzIiwiZm9yZWdyb3VuZCIsImFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwIiwic3RhY2tPcmRlciIsImZpbHRlciIsIndpbmRvd0lkIiwiYXBwQ2xvc2UiLCJuZXdGb3JlZ3JvdW5kQXBwSWQiLCJhcHBGb2N1cyIsImZvY3VzIiwiYXBwTWluaW1pemUiLCJtaW5pbWl6ZSIsIm1pbmltaXplZCIsImFwcE1heGltaXplIiwibWF4aW1pemVkIiwiYXBwT3BlbiIsImljb24iLCJhcHAiLCJBcHAiLCJhcHBQb3NpdGlvbiIsIl9ldmVudCIsIngiLCJ5IiwiYXBwU2l6ZSIsIl9kaXJlY3Rpb24iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsV0FBRCxFQUF5QjtBQUMxQyxNQUFJO0FBQ0YsUUFBSUMsR0FBSixDQUFRRCxXQUFSO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBUkQ7O0FBVUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUF3QztBQUN4RCxNQUFJTCxVQUFVLENBQUNLLEdBQUQsQ0FBZCxFQUFxQjtBQUFBLGVBQ2dCLElBQUlILEdBQUosQ0FBUUcsR0FBUixLQUFnQixFQURoQztBQUFBLFFBQ1hDLFFBRFcsUUFDWEEsUUFEVztBQUFBLFFBQ0RDLFlBREMsUUFDREEsWUFEQzs7QUFHbkIsV0FBT0QsUUFBUSxLQUFLLEdBQWIsR0FDSEUsZUFBZSxDQUFDRCxZQUFZLENBQUNFLEdBQWIsQ0FBaUIsS0FBakIsS0FBMkIsRUFBNUIsQ0FEWixHQUVIQyxtQkFBbUIsQ0FBQ0osUUFBRCxFQUFXQyxZQUFYLENBRnZCO0FBR0Q7O0FBRUQsU0FBT0csbUJBQW1CLENBQUNMLEdBQUQsQ0FBMUI7QUFDRCxDQVZEOztBQVlBLElBQU1NLGdCQUFnQixHQUFHO0FBQ3ZCQyxnQkFBYyxFQUFFLElBRE87QUFFdkJDLGlCQUFlLEVBQUUsSUFGTTtBQUd2QkMsT0FBSyxFQUFFLEdBSGdCO0FBSXZCQyxRQUFNLEVBQUUsR0FKZTtBQUt2QkMsU0FBTyxFQUFFO0FBTGMsQ0FBekI7QUFRQSxJQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkwsZ0JBQWMsRUFBRSxJQURPO0FBRXZCRyxRQUFNLEVBQUUsR0FGZTtBQUd2QkQsT0FBSyxFQUFFLEdBSGdCO0FBSXZCRSxTQUFPLEVBQUU7QUFKYyxDQUF6QjtBQU9BLElBQU1FLHFCQUFxQixHQUFHO0FBQzVCSixPQUFLLEVBQUUsR0FEcUI7QUFFNUJDLFFBQU0sRUFBRSxHQUZvQjtBQUc1QkMsU0FBTyxFQUFFO0FBSG1CLENBQTlCO0FBTUEsSUFBTUcsR0FBRyxHQUFHQyxtREFBTztBQUFBLFNBQUMsd0lBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSx3REFBUjtBQUFBO0FBQUEsY0FBUSx1QkFBUjtBQUFBO0FBQUEsRUFBbkI7TUFBTUQsRztBQUNOLElBQU1FLFFBQVEsR0FBR0QsbURBQU87QUFBQSxTQUFDLGtKQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsa0VBQVI7QUFBQTtBQUFBLGNBQVEsNEJBQVI7QUFBQTtBQUFBLEVBQXhCO01BQU1DLFE7QUFDTixJQUFNQyxHQUFHLEdBQUdGLG1EQUFPO0FBQUEsU0FBQyx1SUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLHdEQUFSO0FBQUE7QUFBQSxjQUFRLHVCQUFSO0FBQUE7QUFBQSxFQUFuQjtNQUFNRSxHO0FBQ04sSUFBTUMsTUFBTSxHQUFHSCxtREFBTztBQUFBLFNBQUMsNklBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSw4REFBUjtBQUFBO0FBQUEsY0FBUSwwQkFBUjtBQUFBO0FBQUEsRUFBdEI7TUFBTUcsTTs7QUFFTixJQUFNZixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNnQixJQUFELEVBQXlDO0FBQy9ELFVBQVFBLElBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxhQUFPO0FBQ0xDLGNBQU0sRUFBRU4sR0FESDtBQUVMTyxxQkFBYSxFQUFFZjtBQUZWLE9BQVA7O0FBSUYsU0FBSyxVQUFMO0FBQ0UsYUFBTztBQUNMYyxjQUFNLEVBQUVKLFFBREg7QUFFTEsscUJBQWEsRUFBRVI7QUFGVixPQUFQOztBQUlGLFNBQUssS0FBTDtBQUNFLGFBQU87QUFDTE8sY0FBTSxFQUFFSCxHQURIO0FBRUxJLHFCQUFhLEVBQUVUO0FBRlYsT0FBUDs7QUFJRixTQUFLLFFBQUw7QUFDRSxhQUFPO0FBQ0xRLGNBQU0sRUFBRUYsTUFESDtBQUVMRyxxQkFBYSxFQUFFO0FBQ2JDLGtCQUFRLEVBQUU7QUFERztBQUZWLE9BQVA7QUFqQko7QUF3QkQsQ0F6QkQ7O0FBMkJBLElBQU1qQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQzFCa0IsSUFEMEIsRUFFMUJyQixZQUYwQixFQUdBO0FBQzFCLFVBQVFzQixxRUFBZ0IsQ0FBQ0QsSUFBRCxDQUF4QjtBQUNFLFNBQUssT0FBTDtBQUNFLGFBQU87QUFDTEgsY0FBTSxFQUFFTixHQURIO0FBRUxPLHFCQUFhLEVBQUVmLGdCQUZWO0FBR0xtQix3QkFBZ0IsRUFBRTtBQUNoQnpCLGFBQUcsRUFBRXVCLElBRFc7QUFFaEJHLGNBQUksRUFBRXhCLFlBQVksR0FBRyw2RkFBSUEsWUFBWSxDQUFDeUIsT0FBYixFQUFKLEVBQTRCQyxJQUE1QixFQUFILEdBQXdDO0FBRjFDO0FBSGIsT0FBUDs7QUFRRixTQUFLLEtBQUw7QUFDQSxTQUFLLEtBQUw7QUFDQSxTQUFLLEtBQUw7QUFDRSxhQUFPO0FBQ0xSLGNBQU0sRUFBRUYsTUFESDtBQUVMRyxxQkFBYSxFQUFFO0FBQ2JDLGtCQUFRLEVBQUU7QUFERyxTQUZWO0FBS0xHLHdCQUFnQixFQUFFO0FBQ2hCekIsYUFBRyxFQUFFdUI7QUFEVztBQUxiLE9BQVA7O0FBU0YsU0FBSyxLQUFMO0FBQ0UsYUFBTztBQUNMSCxjQUFNLEVBQUVILEdBREg7QUFFTEkscUJBQWEsRUFBRVQsZ0JBRlY7QUFHTGEsd0JBQWdCLEVBQUU7QUFDaEJ6QixhQUFHLEVBQUV1QjtBQURXO0FBSGIsT0FBUDtBQXZCSjtBQStCRCxDQW5DRDs7QUFxQ0EsSUFBTU0saUNBQWlDLEdBQUcsU0FBcENBLGlDQUFvQyxDQUN4Q0MsSUFEd0MsRUFFeENDLFNBRndDLEVBR3hDQyxFQUh3QztBQUFBLFNBS3hDRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxpQkFBbUI7QUFBQSxRQUFaQyxLQUFZLFNBQWhCRixFQUFnQjtBQUM5QkQsYUFBUyxDQUFDO0FBQ1JDLFFBQUUsRUFBRUUsS0FESTtBQUVSQyxhQUFPLEVBQUU7QUFBRUMsa0JBQVUsRUFBRUosRUFBRSxLQUFLRTtBQUFyQjtBQUZELEtBQUQsQ0FBVDtBQUlELEdBTEQsQ0FMd0M7QUFBQSxDQUExQzs7QUFZQSxJQUFNRyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQzlCUCxJQUQ4QixFQUU5QkMsU0FGOEIsRUFHOUJDLEVBSDhCO0FBQUEsU0FLOUJGLElBQUksQ0FBQ0csT0FBTCxDQUFhLGlCQUErQjtBQUFBLFFBQXhCQyxLQUF3QixTQUE1QkYsRUFBNEI7QUFBQSxRQUFqQk0sVUFBaUIsU0FBakJBLFVBQWlCO0FBQzFDUCxhQUFTLENBQUM7QUFDUkMsUUFBRSxFQUFFRSxLQURJO0FBRVJDLGFBQU8sRUFBRTtBQUNQRyxrQkFBVSxHQUNSTixFQURRLHNHQUVMTSxVQUFVLENBQUNDLE1BQVgsQ0FBa0IsVUFBQ0MsUUFBRDtBQUFBLGlCQUFzQkEsUUFBUSxLQUFLUixFQUFuQztBQUFBLFNBQWxCLENBRks7QUFESDtBQUZELEtBQUQsQ0FBVDtBQVNELEdBVkQsQ0FMOEI7QUFBQSxDQUFoQzs7QUFpQk8sSUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1gsSUFBRCxFQUFhQyxTQUFiO0FBQUEsU0FBZ0QsVUFDdEVDLEVBRHNFLFNBRzdEO0FBQUE7QUFBQSxRQUROVSxrQkFDTTs7QUFDVCxRQUFJQSxrQkFBSixFQUF3QjtBQUN0QkMsY0FBUSxDQUFDYixJQUFELEVBQU9DLFNBQVAsQ0FBUixDQUEwQlcsa0JBQTFCO0FBQ0Q7O0FBRURYLGFBQVMsQ0FBQztBQUFFQyxRQUFFLEVBQUZBO0FBQUYsS0FBRCxDQUFUO0FBQ0QsR0FUdUI7QUFBQSxDQUFqQjtBQVdBLElBQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNiLElBQUQsRUFBYUMsU0FBYjtBQUFBLFNBQWdELFVBQ3RFQyxFQURzRSxFQUc3RDtBQUFBLFFBRFRZLEtBQ1MsdUVBREQsSUFDQzs7QUFDVCxRQUFJQSxLQUFKLEVBQVc7QUFDVGYsdUNBQWlDLENBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFrQkMsRUFBbEIsQ0FBakM7QUFDQUssNkJBQXVCLENBQUNQLElBQUQsRUFBT0MsU0FBUCxFQUFrQkMsRUFBbEIsQ0FBdkI7QUFDRCxLQUhELE1BR087QUFDTEQsZUFBUyxDQUFDO0FBQUVDLFVBQUUsRUFBRkEsRUFBRjtBQUFNRyxlQUFPLEVBQUU7QUFBRUMsb0JBQVUsRUFBRTtBQUFkO0FBQWYsT0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZ1QjtBQUFBLENBQWpCO0FBWUEsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2QsU0FBRDtBQUFBLFNBQW9DLFVBQzdEQyxFQUQ2RCxFQUdwRDtBQUFBLFFBRFRjLFFBQ1MsdUVBREUsSUFDRjs7QUFDVCxRQUFJQSxRQUFKLEVBQWM7QUFDWmYsZUFBUyxDQUFDO0FBQUVJLGVBQU8sRUFBRTtBQUFFQyxvQkFBVSxFQUFFLEtBQWQ7QUFBcUJXLG1CQUFTLEVBQUU7QUFBaEMsU0FBWDtBQUFtRGYsVUFBRSxFQUFGQTtBQUFuRCxPQUFELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEQsZUFBUyxDQUFDO0FBQUVJLGVBQU8sRUFBRTtBQUFFQyxvQkFBVSxFQUFFLElBQWQ7QUFBb0JXLG1CQUFTLEVBQUU7QUFBL0IsU0FBWDtBQUFtRGYsVUFBRSxFQUFGQTtBQUFuRCxPQUFELENBQVQ7QUFDRDtBQUNGLEdBVDBCO0FBQUEsQ0FBcEI7QUFXQSxJQUFNZ0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2pCLFNBQUQ7QUFBQSxTQUFvQyxVQUM3REMsRUFENkQsRUFHcEQ7QUFBQSxRQURUaUIsU0FDUyx1RUFERyxJQUNIOztBQUNULFFBQUlBLFNBQUosRUFBZTtBQUNibEIsZUFBUyxDQUFDO0FBQUVJLGVBQU8sRUFBRTtBQUFFYyxtQkFBUyxFQUFFO0FBQWIsU0FBWDtBQUFnQ2pCLFVBQUUsRUFBRkE7QUFBaEMsT0FBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELGVBQVMsQ0FBQztBQUFFSSxlQUFPLEVBQUU7QUFBRWMsbUJBQVMsRUFBRTtBQUFiLFNBQVg7QUFBaUNqQixVQUFFLEVBQUZBO0FBQWpDLE9BQUQsQ0FBVDtBQUNEO0FBQ0YsR0FUMEI7QUFBQSxDQUFwQjtBQVdBLElBQU1rQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbkIsU0FBRDtBQUFBLFNBQW9DLFVBQ3pEL0IsR0FEeUQsRUFFekRtRCxJQUZ5RCxFQUd6RGhDLElBSHlELEVBSWhEO0FBQ1QsUUFBTUMsTUFBTSxHQUFHckIsU0FBUyxDQUFDQyxHQUFELENBQXhCOztBQUVBLFFBQUlvQixNQUFKLEVBQVk7QUFDVlcsZUFBUyxDQUFDO0FBQ1JxQixXQUFHLEVBQUUsSUFBSUMscURBQUo7QUFDSGpDLGdCQUFNLEVBQU5BLE1BREc7QUFFSCtCLGNBQUksRUFBSkEsSUFGRztBQUdIaEMsY0FBSSxFQUFKQTtBQUhHLFdBSUFDLE1BQU0sQ0FBQ0MsYUFKUDtBQURHLE9BQUQsQ0FBVDtBQVFEO0FBQ0YsR0FqQnNCO0FBQUEsQ0FBaEI7QUFtQkEsSUFBTWlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUN2QixTQUFEO0FBQUEsU0FBb0MsVUFDN0RDLEVBRDZEO0FBQUEsV0FFekMsVUFBQ3VCLE1BQUQ7QUFBQSxVQUFXQyxDQUFYLFNBQVdBLENBQVg7QUFBQSxVQUFjQyxDQUFkLFNBQWNBLENBQWQ7QUFBQSxhQUNwQjFCLFNBQVMsQ0FBQztBQUFFQyxVQUFFLEVBQUZBLEVBQUY7QUFBTUcsZUFBTyxFQUFFO0FBQUVxQixXQUFDLEVBQURBLENBQUY7QUFBS0MsV0FBQyxFQUFEQTtBQUFMO0FBQWYsT0FBRCxDQURXO0FBQUEsS0FGeUM7QUFBQSxHQUFwQztBQUFBLENBQXBCO0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzNCLFNBQUQ7QUFBQSxTQUFvQyxVQUN6REMsRUFEeUQ7QUFBQSxXQUVuQyxVQUN0QnVCLE1BRHNCLEVBRXRCSSxVQUZzQjtBQUFBLFVBR3BCQyxXQUhvQixTQUdwQkEsV0FIb0I7QUFBQSxVQUdQQyxZQUhPLFNBR1BBLFlBSE87QUFBQSxhQUt0QjlCLFNBQVMsQ0FBQztBQUFFQyxVQUFFLEVBQUZBLEVBQUY7QUFBTUcsZUFBTyxFQUFFO0FBQUV6QixnQkFBTSxFQUFFbUQsWUFBVjtBQUF3QnBELGVBQUssRUFBRW1EO0FBQS9CO0FBQWYsT0FBRCxDQUxhO0FBQUEsS0FGbUM7QUFBQSxHQUFwQztBQUFBLENBQWhCIiwiZmlsZSI6Ii4vdXRpbHMvYXBwcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIERpc3BhdGNoLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrLCBSbmRSZXNpemVDYWxsYmFjayB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCwgQXBwQ29uc3RydWN0b3IgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgdHlwZSB7IEFwcEFjdGlvbiwgQXBwcyB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IGdldEZpbGVFeHRlbnNpb24gfSBmcm9tICdAL3V0aWxzL2ZpbGVzJztcblxuZXhwb3J0IHR5cGUgQXBwTG9hZGVyID0ge1xuICBsb2FkZXI6IEZDPEFwcENvbXBvbmVudD4gfCBDb21wb25lbnRUeXBlPEFwcENvbXBvbmVudD47XG4gIGxvYWRlck9wdGlvbnM/OiBQYXJ0aWFsPEFwcENvbnN0cnVjdG9yPjtcbiAgbG9hZGVkQXBwT3B0aW9ucz86IFBhcnRpYWw8QXBwQ29tcG9uZW50Pjtcbn07XG5cbmNvbnN0IGlzVmFsaWRVcmwgPSAocG9zc2libGVVcmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIG5ldyBVUkwocG9zc2libGVVcmwpO1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhcHBMb2FkZXIgPSAodXJsOiBzdHJpbmcpOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoaXNWYWxpZFVybCh1cmwpKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHVybCkgfHwge307XG5cbiAgICByZXR1cm4gcGF0aG5hbWUgPT09ICcvJ1xuICAgICAgPyBhcHBMb2FkZXJCeU5hbWUoc2VhcmNoUGFyYW1zLmdldCgnYXBwJykgfHwgJycpXG4gICAgICA6IGFwcExvYWRlckJ5RmlsZVR5cGUocGF0aG5hbWUsIHNlYXJjaFBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gYXBwTG9hZGVyQnlGaWxlVHlwZSh1cmwpO1xufTtcblxuY29uc3QgZG9zTG9hZGVyT3B0aW9ucyA9IHtcbiAgaGlkZVNjcm9sbGJhcnM6IHRydWUsXG4gIGxvY2tBc3BlY3RSYXRpbzogdHJ1ZSxcbiAgd2lkdGg6IDMyMCxcbiAgaGVpZ2h0OiAyMjQsXG4gIGJnQ29sb3I6ICdibGFjaydcbn07XG5cbmNvbnN0IHBkZkxvYWRlck9wdGlvbnMgPSB7XG4gIGhpZGVTY3JvbGxiYXJzOiB0cnVlLFxuICBoZWlnaHQ6IDYyNSxcbiAgd2lkdGg6IDQ3NSxcbiAgYmdDb2xvcjogJyNkN2Q3ZDcnXG59O1xuXG5jb25zdCBleHBsb3JlckxvYWRlck9wdGlvbnMgPSB7XG4gIHdpZHRoOiA0NTAsXG4gIGhlaWdodDogMjcwLFxuICBiZ0NvbG9yOiAnIzJhMjgyYidcbn07XG5cbmNvbnN0IERvcyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQXBwcy9Eb3MnKSk7XG5jb25zdCBFeHBsb3JlciA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQXBwcy9FeHBsb3JlcicpKTtcbmNvbnN0IFBkZiA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvQXBwcy9QZGYnKSk7XG5jb25zdCBXaW5hbXAgPSBkeW5hbWljKGltcG9ydCgnQC9jb21wb25lbnRzL0FwcHMvV2luYW1wJykpO1xuXG5jb25zdCBhcHBMb2FkZXJCeU5hbWUgPSAobmFtZTogc3RyaW5nKTogQXBwTG9hZGVyIHwgdW5kZWZpbmVkID0+IHtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnZG9zJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogRG9zLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiBkb3NMb2FkZXJPcHRpb25zXG4gICAgICB9O1xuICAgIGNhc2UgJ2V4cGxvcmVyJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogRXhwbG9yZXIsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IGV4cGxvcmVyTG9hZGVyT3B0aW9uc1xuICAgICAgfTtcbiAgICBjYXNlICdwZGYnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBQZGYsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IHBkZkxvYWRlck9wdGlvbnNcbiAgICAgIH07XG4gICAgY2FzZSAnd2luYW1wJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogV2luYW1wLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICAgICAgd2luZG93ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGFwcExvYWRlckJ5RmlsZVR5cGUgPSAoXG4gIHBhdGg6IHN0cmluZyxcbiAgc2VhcmNoUGFyYW1zPzogVVJMU2VhcmNoUGFyYW1zXG4pOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBzd2l0Y2ggKGdldEZpbGVFeHRlbnNpb24ocGF0aCkpIHtcbiAgICBjYXNlICdqc2Rvcyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IERvcyxcbiAgICAgICAgbG9hZGVyT3B0aW9uczogZG9zTG9hZGVyT3B0aW9ucyxcbiAgICAgICAgbG9hZGVkQXBwT3B0aW9uczoge1xuICAgICAgICAgIHVybDogcGF0aCxcbiAgICAgICAgICBhcmdzOiBzZWFyY2hQYXJhbXMgPyBbLi4uc2VhcmNoUGFyYW1zLmVudHJpZXMoKV0uZmxhdCgpIDogW11cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBjYXNlICdtcDMnOlxuICAgIGNhc2UgJ20zdSc6XG4gICAgY2FzZSAnd3N6JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogV2luYW1wLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICAgICAgd2luZG93ZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRlZEFwcE9wdGlvbnM6IHtcbiAgICAgICAgICB1cmw6IHBhdGhcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBjYXNlICdwZGYnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBQZGYsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IHBkZkxvYWRlck9wdGlvbnMsXG4gICAgICAgIGxvYWRlZEFwcE9wdGlvbnM6IHtcbiAgICAgICAgICB1cmw6IHBhdGhcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufTtcblxuY29uc3QgYXBwVG9Gb3JlZ3JvdW5kT3RoZXJzVG9CYWNrZ3JvdW5kID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHsgZm9yZWdyb3VuZDogaWQgPT09IGFwcElkIH1cbiAgICB9KTtcbiAgfSk7XG5cbmNvbnN0IGFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCwgc3RhY2tPcmRlciB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgc3RhY2tPcmRlcjogW1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIC4uLnN0YWNrT3JkZXIuZmlsdGVyKCh3aW5kb3dJZDogc3RyaW5nKSA9PiB3aW5kb3dJZCAhPT0gaWQpXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBDbG9zZSA9IChhcHBzOiBBcHBzLCB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAgWywgbmV3Rm9yZWdyb3VuZEFwcElkXTogQXJyYXk8c3RyaW5nPlxuKTogdm9pZCA9PiB7XG4gIGlmIChuZXdGb3JlZ3JvdW5kQXBwSWQpIHtcbiAgICBhcHBGb2N1cyhhcHBzLCB1cGRhdGVBcHApKG5ld0ZvcmVncm91bmRBcHBJZCk7XG4gIH1cblxuICB1cGRhdGVBcHAoeyBpZCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBGb2N1cyA9IChhcHBzOiBBcHBzLCB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAgZm9jdXMgPSB0cnVlXG4pOiB2b2lkID0+IHtcbiAgaWYgKGZvY3VzKSB7XG4gICAgYXBwVG9Gb3JlZ3JvdW5kT3RoZXJzVG9CYWNrZ3JvdW5kKGFwcHMsIHVwZGF0ZUFwcCwgaWQpO1xuICAgIGFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwKGFwcHMsIHVwZGF0ZUFwcCwgaWQpO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUFwcCh7IGlkLCB1cGRhdGVzOiB7IGZvcmVncm91bmQ6IGZhbHNlIH0gfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhcHBNaW5pbWl6ZSA9ICh1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAgbWluaW1pemUgPSB0cnVlXG4pOiB2b2lkID0+IHtcbiAgaWYgKG1pbmltaXplKSB7XG4gICAgdXBkYXRlQXBwKHsgdXBkYXRlczogeyBmb3JlZ3JvdW5kOiBmYWxzZSwgbWluaW1pemVkOiB0cnVlIH0sIGlkIH0pO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUFwcCh7IHVwZGF0ZXM6IHsgZm9yZWdyb3VuZDogdHJ1ZSwgbWluaW1pemVkOiBmYWxzZSB9LCBpZCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcE1heGltaXplID0gKHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBtYXhpbWl6ZWQgPSB0cnVlXG4pOiB2b2lkID0+IHtcbiAgaWYgKG1heGltaXplZCkge1xuICAgIHVwZGF0ZUFwcCh7IHVwZGF0ZXM6IHsgbWF4aW1pemVkOiB0cnVlIH0sIGlkIH0pO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUFwcCh7IHVwZGF0ZXM6IHsgbWF4aW1pemVkOiBmYWxzZSB9LCBpZCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcE9wZW4gPSAodXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+KSA9PiAoXG4gIHVybDogc3RyaW5nLFxuICBpY29uOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZ1xuKTogdm9pZCA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IGFwcExvYWRlcih1cmwpO1xuXG4gIGlmIChsb2FkZXIpIHtcbiAgICB1cGRhdGVBcHAoe1xuICAgICAgYXBwOiBuZXcgQXBwKHtcbiAgICAgICAgbG9hZGVyLFxuICAgICAgICBpY29uLFxuICAgICAgICBuYW1lLFxuICAgICAgICAuLi5sb2FkZXIubG9hZGVyT3B0aW9uc1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcFBvc2l0aW9uID0gKHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiBSbmREcmFnQ2FsbGJhY2sgPT4gKF9ldmVudCwgeyB4LCB5IH0pOiB2b2lkID0+XG4gIHVwZGF0ZUFwcCh7IGlkLCB1cGRhdGVzOiB7IHgsIHkgfSB9KTtcblxuZXhwb3J0IGNvbnN0IGFwcFNpemUgPSAodXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmdcbik6IFJuZFJlc2l6ZUNhbGxiYWNrID0+IChcbiAgX2V2ZW50LFxuICBfZGlyZWN0aW9uLFxuICB7IG9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgfVxuKTogdm9pZCA9PlxuICB1cGRhdGVBcHAoeyBpZCwgdXBkYXRlczogeyBoZWlnaHQ6IG9mZnNldEhlaWdodCwgd2lkdGg6IG9mZnNldFdpZHRoIH0gfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/apps.tsx\n");

/***/ })

})