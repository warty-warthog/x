webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/apps.tsx":
/*!************************!*\
  !*** ./utils/apps.tsx ***!
  \************************/
/*! exports provided: appClose, appFocus, appMinimize, appOpen, appPosition, appSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appClose\", function() { return appClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appFocus\", function() { return appFocus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appMinimize\", function() { return appMinimize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appOpen\", function() { return appOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appPosition\", function() { return appPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appSize\", function() { return appSize; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n/* harmony import */ var _components_Apps_Dos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Apps/Dos */ \"./components/Apps/Dos.tsx\");\n/* harmony import */ var _components_Apps_Explorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Apps/Explorer */ \"./components/Apps/Explorer.tsx\");\n/* harmony import */ var _components_Apps_Pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Apps/Pdf */ \"./components/Apps/Pdf.tsx\");\n/* harmony import */ var _components_Apps_Winamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Apps/Winamp */ \"./components/Apps/Winamp.tsx\");\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/files */ \"./utils/files.tsx\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n // Q: What is the overlap between AppComponent, App & AppConstructor types?\n\nvar isValidUrl = function isValidUrl(possibleUrl) {\n  try {\n    new URL(possibleUrl);\n  } catch (_) {\n    return false;\n  }\n\n  return true;\n};\n\nvar appLoader = function appLoader(url) {\n  if (isValidUrl(url)) {\n    var _ref = new URL(url) || {},\n        pathname = _ref.pathname,\n        searchParams = _ref.searchParams;\n\n    return pathname === '/' ? appLoaderByName(searchParams.get('app') || '') : appLoaderByFileType(pathname, searchParams);\n  }\n\n  return appLoaderByFileType(url);\n};\n\nvar dosLoaderOptions = {\n  hideScrollbars: true,\n  lockAspectRatio: true,\n  width: 320,\n  height: 224\n};\nvar pdfLoaderOptions = {\n  height: 400,\n  width: 450\n};\n\nvar appLoaderByName = function appLoaderByName(name) {\n  switch (name) {\n    case 'dos':\n      return {\n        loader: _components_Apps_Dos__WEBPACK_IMPORTED_MODULE_4__[\"DosAppLoader\"],\n        loaderOptions: dosLoaderOptions\n      };\n\n    case 'explorer':\n      return {\n        loader: _components_Apps_Explorer__WEBPACK_IMPORTED_MODULE_5__[\"Explorer\"],\n        loaderOptions: {\n          width: 500,\n          height: 250\n        }\n      };\n\n    case 'pdf':\n      return {\n        loader: _components_Apps_Pdf__WEBPACK_IMPORTED_MODULE_6__[\"PdfLoader\"],\n        loaderOptions: pdfLoaderOptions\n      };\n\n    case 'winamp':\n      return {\n        loader: _components_Apps_Winamp__WEBPACK_IMPORTED_MODULE_7__[\"WinampLoader\"],\n        loaderOptions: {\n          windowed: false\n        }\n      };\n  }\n};\n\nvar appLoaderByFileType = function appLoaderByFileType(path, searchParams) {\n  switch (Object(_utils_files__WEBPACK_IMPORTED_MODULE_8__[\"getFileExtension\"])(path)) {\n    case 'jsdos':\n      return {\n        loader: _components_Apps_Dos__WEBPACK_IMPORTED_MODULE_4__[\"DosAppLoader\"],\n        loaderOptions: dosLoaderOptions,\n        loadedAppOptions: {\n          url: path,\n          args: searchParams ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(searchParams.entries()).flat() : [] // TODO: This `args` logic is ideal for DOS only\n\n        }\n      };\n\n    case 'pdf':\n      return {\n        loader: _components_Apps_Pdf__WEBPACK_IMPORTED_MODULE_6__[\"PdfLoader\"],\n        loaderOptions: pdfLoaderOptions,\n        loadedAppOptions: {\n          url: path\n        }\n      };\n  }\n};\n\nvar appToForegroundOthersToBackground = function appToForegroundOthersToBackground(apps, updateApp, id) {\n  return apps.forEach(function (_ref2) {\n    var appId = _ref2.id;\n    updateApp({\n      id: appId,\n      updates: {\n        foreground: id === appId\n      }\n    });\n  });\n}; // TODO: Stop storing stackOrder in every app\n\n\nvar appToStackTopOnEveryApp = function appToStackTopOnEveryApp(apps, updateApp, id) {\n  return apps.forEach(function (_ref3) {\n    var appId = _ref3.id,\n        stackOrder = _ref3.stackOrder;\n    updateApp({\n      id: appId,\n      updates: {\n        stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stackOrder.filter(function (windowId) {\n          return windowId !== id;\n        })))\n      }\n    });\n  });\n};\n\nvar appClose = function appClose(apps, updateApp) {\n  return function (id, _ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, 2),\n        newForegroundAppId = _ref5[1];\n\n    if (newForegroundAppId) {\n      appFocus(apps, updateApp)(newForegroundAppId);\n    } // TODO: Does stackOrder make sense the same way anymore?\n    // Maybe apps can keep track of this now that its only running\n\n\n    updateApp({\n      id: id\n    });\n  };\n};\nvar appFocus = function appFocus(apps, updateApp) {\n  return function (id) {\n    var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (focus) {\n      appToForegroundOthersToBackground(apps, updateApp, id);\n      appToStackTopOnEveryApp(apps, updateApp, id);\n    } else {\n      updateApp({\n        id: id,\n        updates: {\n          foreground: false\n        }\n      });\n    }\n  };\n};\nvar appMinimize = function appMinimize(updateApp) {\n  return function (id) {\n    var minimize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (minimize) {\n      updateApp({\n        updates: {\n          foreground: false,\n          minimized: true\n        },\n        id: id\n      });\n    } else {\n      updateApp({\n        updates: {\n          foreground: true,\n          minimized: false\n        },\n        id: id\n      });\n    }\n  };\n};\nvar appOpen = function appOpen(updateApp) {\n  return function (url, icon, name) {\n    var loader = appLoader(url);\n\n    if (loader) {\n      updateApp({\n        app: new _contexts_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_objectSpread({\n          loader: loader,\n          icon: icon,\n          name: name\n        }, loader.loaderOptions))\n      });\n    }\n  };\n};\nvar appPosition = function appPosition(updateApp) {\n  return function (id) {\n    return function (_event, _ref6) {\n      var x = _ref6.x,\n          y = _ref6.y;\n      return updateApp({\n        id: id,\n        updates: {\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar appSize = function appSize(updateApp) {\n  return function (id) {\n    return function (_event, _direction, _ref7) {\n      var offsetWidth = _ref7.offsetWidth,\n          offsetHeight = _ref7.offsetHeight;\n      return updateApp({\n        id: id,\n        updates: {\n          height: offsetHeight,\n          width: offsetWidth\n        }\n      });\n    };\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwcy50c3g/NjA0ZCJdLCJuYW1lcyI6WyJpc1ZhbGlkVXJsIiwicG9zc2libGVVcmwiLCJVUkwiLCJfIiwiYXBwTG9hZGVyIiwidXJsIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJhcHBMb2FkZXJCeU5hbWUiLCJnZXQiLCJhcHBMb2FkZXJCeUZpbGVUeXBlIiwiZG9zTG9hZGVyT3B0aW9ucyIsImhpZGVTY3JvbGxiYXJzIiwibG9ja0FzcGVjdFJhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJwZGZMb2FkZXJPcHRpb25zIiwibmFtZSIsImxvYWRlciIsIkRvc0FwcExvYWRlciIsImxvYWRlck9wdGlvbnMiLCJFeHBsb3JlciIsIlBkZkxvYWRlciIsIldpbmFtcExvYWRlciIsIndpbmRvd2VkIiwicGF0aCIsImdldEZpbGVFeHRlbnNpb24iLCJsb2FkZWRBcHBPcHRpb25zIiwiYXJncyIsImVudHJpZXMiLCJmbGF0IiwiYXBwVG9Gb3JlZ3JvdW5kT3RoZXJzVG9CYWNrZ3JvdW5kIiwiYXBwcyIsInVwZGF0ZUFwcCIsImlkIiwiZm9yRWFjaCIsImFwcElkIiwidXBkYXRlcyIsImZvcmVncm91bmQiLCJhcHBUb1N0YWNrVG9wT25FdmVyeUFwcCIsInN0YWNrT3JkZXIiLCJmaWx0ZXIiLCJ3aW5kb3dJZCIsImFwcENsb3NlIiwibmV3Rm9yZWdyb3VuZEFwcElkIiwiYXBwRm9jdXMiLCJmb2N1cyIsImFwcE1pbmltaXplIiwibWluaW1pemUiLCJtaW5pbWl6ZWQiLCJhcHBPcGVuIiwiaWNvbiIsImFwcCIsIkFwcCIsImFwcFBvc2l0aW9uIiwiX2V2ZW50IiwieCIsInkiLCJhcHBTaXplIiwiX2RpcmVjdGlvbiIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBUUEsSUFBTUEsVUFBVSxH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LEVBQU5BLE1BREc7QUFFSGlDLGNBQUksRUFBSkEsSUFGRztBQUdIbEMsY0FBSSxFQUFKQTtBQUhHLFdBSUFDLE1BQU0sQ0FBQ0UsYUFKUDtBQURHLE9BQUQsQ0FBVDtBQVFEO0FBQ0YsR0FqQnNCO0FBQUEsQ0FBaEI7QUFtQkEsSUFBTWtDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNyQixTQUFEO0FBQUEsU0FBb0MsVUFDN0RDLEVBRDZEO0FBQUEsV0FFekMsVUFBQ3FCLE1BQUQ7QUFBQSxVQUFXQyxDQUFYLFNBQVdBLENBQVg7QUFBQSxVQUFjQyxDQUFkLFNBQWNBLENBQWQ7QUFBQSxhQUNwQnhCLFNBQVMsQ0FBQztBQUFFQyxVQUFFLEVBQUZBLEVBQUY7QUFBTUcsZUFBTyxFQUFFO0FBQUVtQixXQUFDLEVBQURBLENBQUY7QUFBS0MsV0FBQyxFQUFEQTtBQUFMO0FBQWYsT0FBRCxDQURXO0FBQUEsS0FGeUM7QUFBQSxHQUFwQztBQUFBLENBQXBCO0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ3pCLFNBQUQ7QUFBQSxTQUFvQyxVQUN6REMsRUFEeUQ7QUFBQSxXQUVuQyxVQUN0QnFCLE1BRHNCLEVBRXRCSSxVQUZzQjtBQUFBLFVBR3BCQyxXQUhvQixTQUdwQkEsV0FIb0I7QUFBQSxVQUdQQyxZQUhPLFNBR1BBLFlBSE87QUFBQSxhQUt0QjVCLFNBQVMsQ0FBQztBQUFFQyxVQUFFLEVBQUZBLEVBQUY7QUFBTUcsZUFBTyxFQUFFO0FBQUV0QixnQkFBTSxFQUFFOEMsWUFBVjtBQUF3Qi9DLGVBQUssRUFBRThDO0FBQS9CO0FBQWYsT0FBRCxDQUxhO0FBQUEsS0FGbUM7QUFBQSxHQUFwQztBQUFBLENBQWhCIiwiZmlsZSI6Ii4vdXRpbHMvYXBwcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERpc3BhdGNoLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrLCBSbmRSZXNpemVDYWxsYmFjayB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCwgQXBwQ29uc3RydWN0b3IgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgdHlwZSB7IEFwcEFjdGlvbiwgQXBwcyB9IGZyb20gJ0AvY29udGV4dHMvQXBwcyc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHsgRG9zQXBwTG9hZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0FwcHMvRG9zJztcbmltcG9ydCB7IEV4cGxvcmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0FwcHMvRXhwbG9yZXInO1xuaW1wb3J0IHsgUGRmTG9hZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0FwcHMvUGRmJztcbmltcG9ydCB7IFdpbmFtcExvYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9BcHBzL1dpbmFtcCc7XG5pbXBvcnQgeyBnZXRGaWxlRXh0ZW5zaW9uIH0gZnJvbSAnQC91dGlscy9maWxlcyc7XG5cbi8vIFE6IFdoYXQgaXMgdGhlIG92ZXJsYXAgYmV0d2VlbiBBcHBDb21wb25lbnQsIEFwcCAmIEFwcENvbnN0cnVjdG9yIHR5cGVzP1xuXG5leHBvcnQgdHlwZSBBcHBMb2FkZXIgPSB7XG4gIGxvYWRlcjogRkM8QXBwQ29tcG9uZW50PjtcbiAgbG9hZGVyT3B0aW9ucz86IFBhcnRpYWw8QXBwQ29uc3RydWN0b3I+O1xuICBsb2FkZWRBcHBPcHRpb25zPzogUGFydGlhbDxBcHBDb21wb25lbnQ+O1xufTtcblxuY29uc3QgaXNWYWxpZFVybCA9IChwb3NzaWJsZVVybDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgbmV3IFVSTChwb3NzaWJsZVVybCk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGFwcExvYWRlciA9ICh1cmw6IHN0cmluZyk6IEFwcExvYWRlciB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChpc1ZhbGlkVXJsKHVybCkpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwodXJsKSB8fCB7fTtcblxuICAgIHJldHVybiBwYXRobmFtZSA9PT0gJy8nXG4gICAgICA/IGFwcExvYWRlckJ5TmFtZShzZWFyY2hQYXJhbXMuZ2V0KCdhcHAnKSB8fCAnJylcbiAgICAgIDogYXBwTG9hZGVyQnlGaWxlVHlwZShwYXRobmFtZSwgc2VhcmNoUGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBhcHBMb2FkZXJCeUZpbGVUeXBlKHVybCk7XG59O1xuXG5jb25zdCBkb3NMb2FkZXJPcHRpb25zID0ge1xuICBoaWRlU2Nyb2xsYmFyczogdHJ1ZSxcbiAgbG9ja0FzcGVjdFJhdGlvOiB0cnVlLFxuICB3aWR0aDogMzIwLFxuICBoZWlnaHQ6IDIyNFxufTtcblxuY29uc3QgcGRmTG9hZGVyT3B0aW9ucyA9IHtcbiAgaGVpZ2h0OiA0MDAsXG4gIHdpZHRoOiA0NTBcbn07XG5cbmNvbnN0IGFwcExvYWRlckJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdkb3MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBEb3NBcHBMb2FkZXIsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IGRvc0xvYWRlck9wdGlvbnNcbiAgICAgIH07XG4gICAgY2FzZSAnZXhwbG9yZXInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBFeHBsb3JlcixcbiAgICAgICAgbG9hZGVyT3B0aW9uczoge1xuICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgaGVpZ2h0OiAyNTBcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBjYXNlICdwZGYnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyOiBQZGZMb2FkZXIsXG4gICAgICAgIGxvYWRlck9wdGlvbnM6IHBkZkxvYWRlck9wdGlvbnNcbiAgICAgIH07XG4gICAgY2FzZSAnd2luYW1wJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogV2luYW1wTG9hZGVyLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICAgICAgd2luZG93ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGFwcExvYWRlckJ5RmlsZVR5cGUgPSAoXG4gIHBhdGg6IHN0cmluZyxcbiAgc2VhcmNoUGFyYW1zPzogVVJMU2VhcmNoUGFyYW1zXG4pOiBBcHBMb2FkZXIgfCB1bmRlZmluZWQgPT4ge1xuICBzd2l0Y2ggKGdldEZpbGVFeHRlbnNpb24ocGF0aCkpIHtcbiAgICBjYXNlICdqc2Rvcyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXI6IERvc0FwcExvYWRlcixcbiAgICAgICAgbG9hZGVyT3B0aW9uczogZG9zTG9hZGVyT3B0aW9ucyxcbiAgICAgICAgbG9hZGVkQXBwT3B0aW9uczoge1xuICAgICAgICAgIHVybDogcGF0aCxcbiAgICAgICAgICBhcmdzOiBzZWFyY2hQYXJhbXMgPyBbLi4uc2VhcmNoUGFyYW1zLmVudHJpZXMoKV0uZmxhdCgpIDogW10gLy8gVE9ETzogVGhpcyBgYXJnc2AgbG9naWMgaXMgaWRlYWwgZm9yIERPUyBvbmx5XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgY2FzZSAncGRmJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcjogUGRmTG9hZGVyLFxuICAgICAgICBsb2FkZXJPcHRpb25zOiBwZGZMb2FkZXJPcHRpb25zLFxuICAgICAgICBsb2FkZWRBcHBPcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiBwYXRoXG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGFwcFRvRm9yZWdyb3VuZE90aGVyc1RvQmFja2dyb3VuZCA9IChcbiAgYXBwczogQXBwcyxcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+XG4gIGFwcHMuZm9yRWFjaCgoeyBpZDogYXBwSWQgfSkgPT4ge1xuICAgIHVwZGF0ZUFwcCh7XG4gICAgICBpZDogYXBwSWQsXG4gICAgICB1cGRhdGVzOiB7IGZvcmVncm91bmQ6IGlkID09PSBhcHBJZCB9XG4gICAgfSk7XG4gIH0pO1xuXG4vLyBUT0RPOiBTdG9wIHN0b3Jpbmcgc3RhY2tPcmRlciBpbiBldmVyeSBhcHBcbmNvbnN0IGFwcFRvU3RhY2tUb3BPbkV2ZXJ5QXBwID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCwgc3RhY2tPcmRlciB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgc3RhY2tPcmRlcjogW1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIC4uLnN0YWNrT3JkZXIuZmlsdGVyKCh3aW5kb3dJZDogc3RyaW5nKSA9PiB3aW5kb3dJZCAhPT0gaWQpXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBDbG9zZSA9IChhcHBzOiBBcHBzLCB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZyxcbiAgWywgbmV3Rm9yZWdyb3VuZEFwcElkXTogQXJyYXk8c3RyaW5nPiAvLyBUT0RPOiBEb2VzIHRoaXMgbG9naWMgbWFrZSBzZW5zZT9cbik6IHZvaWQgPT4ge1xuICBpZiAobmV3Rm9yZWdyb3VuZEFwcElkKSB7XG4gICAgYXBwRm9jdXMoYXBwcywgdXBkYXRlQXBwKShuZXdGb3JlZ3JvdW5kQXBwSWQpO1xuICB9XG5cbiAgLy8gVE9ETzogRG9lcyBzdGFja09yZGVyIG1ha2Ugc2Vuc2UgdGhlIHNhbWUgd2F5IGFueW1vcmU/XG4gIC8vIE1heWJlIGFwcHMgY2FuIGtlZXAgdHJhY2sgb2YgdGhpcyBub3cgdGhhdCBpdHMgb25seSBydW5uaW5nXG4gIHVwZGF0ZUFwcCh7IGlkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcEZvY3VzID0gKGFwcHM6IEFwcHMsIHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBmb2N1cyA9IHRydWVcbik6IHZvaWQgPT4ge1xuICBpZiAoZm9jdXMpIHtcbiAgICBhcHBUb0ZvcmVncm91bmRPdGhlcnNUb0JhY2tncm91bmQoYXBwcywgdXBkYXRlQXBwLCBpZCk7XG4gICAgYXBwVG9TdGFja1RvcE9uRXZlcnlBcHAoYXBwcywgdXBkYXRlQXBwLCBpZCk7XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlQXBwKHsgaWQsIHVwZGF0ZXM6IHsgZm9yZWdyb3VuZDogZmFsc2UgfSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFwcE1pbmltaXplID0gKHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBtaW5pbWl6ZSA9IHRydWVcbik6IHZvaWQgPT4ge1xuICBpZiAobWluaW1pemUpIHtcbiAgICB1cGRhdGVBcHAoeyB1cGRhdGVzOiB7IGZvcmVncm91bmQ6IGZhbHNlLCBtaW5pbWl6ZWQ6IHRydWUgfSwgaWQgfSk7XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlQXBwKHsgdXBkYXRlczogeyBmb3JlZ3JvdW5kOiB0cnVlLCBtaW5pbWl6ZWQ6IGZhbHNlIH0sIGlkIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwT3BlbiA9ICh1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgdXJsOiBzdHJpbmcsXG4gIGljb246IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgbG9hZGVyID0gYXBwTG9hZGVyKHVybCk7XG5cbiAgaWYgKGxvYWRlcikge1xuICAgIHVwZGF0ZUFwcCh7XG4gICAgICBhcHA6IG5ldyBBcHAoe1xuICAgICAgICBsb2FkZXIsXG4gICAgICAgIGljb24sXG4gICAgICAgIG5hbWUsXG4gICAgICAgIC4uLmxvYWRlci5sb2FkZXJPcHRpb25zXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwUG9zaXRpb24gPSAodXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmdcbik6IFJuZERyYWdDYWxsYmFjayA9PiAoX2V2ZW50LCB7IHgsIHkgfSk6IHZvaWQgPT5cbiAgdXBkYXRlQXBwKHsgaWQsIHVwZGF0ZXM6IHsgeCwgeSB9IH0pO1xuXG5leHBvcnQgY29uc3QgYXBwU2l6ZSA9ICh1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogUm5kUmVzaXplQ2FsbGJhY2sgPT4gKFxuICBfZXZlbnQsXG4gIF9kaXJlY3Rpb24sXG4gIHsgb2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCB9XG4pOiB2b2lkID0+XG4gIHVwZGF0ZUFwcCh7IGlkLCB1cGRhdGVzOiB7IGhlaWdodDogb2Zmc2V0SGVpZ2h0LCB3aWR0aDogb2Zmc2V0V2lkdGggfSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/apps.tsx\n");

/***/ })

})