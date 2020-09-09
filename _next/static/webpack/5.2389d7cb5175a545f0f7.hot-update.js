webpackHotUpdate_N_E(5,{

/***/ "./utils/files.tsx":
/*!*************************!*\
  !*** ./utils/files.tsx ***!
  \*************************/
/*! exports provided: getDirectory, getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectory\", function() { return getDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileExtension\", function() { return getFileExtension; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/apps/explorer.png */ \"./public/icons/apps/explorer.png\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/types/js.svg */ \"./public/icons/types/js.svg\");\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/icons/types/pdf.svg */ \"./public/icons/types/pdf.svg\");\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/icons/types/unknown.svg */ \"./public/icons/types/unknown.svg\");\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dates */ \"./utils/dates.tsx\");\n\n\n\n\n\n\n\n\n\nvar bytesInKB = 1024,\n    fileSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],\n    homeDir = '/';\n\nvar parseShortcut = function parseShortcut(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$readFile;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readFile = fs.readFile) === null || _fs$readFile === void 0 ? void 0 : _fs$readFile.call(fs, path, function (_error, fileBuffer) {// import('ini').then(ini => {\n      //   console.log(ini);\n      // });\n      // const {\n      //   InternetShortcut: { URL: url, IconFile }\n      // } = ini.parse(fileBuffer?.toString() || '');\n      // resolve({ url, icon: new URL(IconFile).pathname });\n    });\n  });\n};\n\nvar getBestIconMatch = function getBestIconMatch(icon, isDirectory, ext, filePath) {\n  if (icon) return icon;\n  return isDirectory ? _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default.a : getFileIcon(filePath, ext);\n};\n\nvar getDirectoryEntry = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fs, path, file, getStats) {\n    var _stats$isDirectory;\n\n    var filePath, stats, _ref2, mtime, size, ext, isDirectory, isShortcut, _ref3, url, icon;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            filePath = \"\".concat(path).concat(path === homeDir ? '' : '/').concat(file);\n\n            if (!getStats) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return getFileStat(fs, filePath);\n\n          case 4:\n            _context.t0 = _context.sent;\n            _context.next = 8;\n            break;\n\n          case 7:\n            _context.t0 = {};\n\n          case 8:\n            stats = _context.t0;\n            _ref2 = stats || {};\n            mtime = _ref2.mtime;\n            size = _ref2.size;\n            ext = getFileExtension(file);\n            isDirectory = (stats === null || stats === void 0 ? void 0 : (_stats$isDirectory = stats.isDirectory) === null || _stats$isDirectory === void 0 ? void 0 : _stats$isDirectory.call(stats)) || false;\n            isShortcut = !isDirectory && file.includes('.url');\n\n            if (!isShortcut) {\n              _context.next = 21;\n              break;\n            }\n\n            _context.next = 18;\n            return parseShortcut(fs, filePath);\n\n          case 18:\n            _context.t1 = _context.sent;\n            _context.next = 22;\n            break;\n\n          case 21:\n            _context.t1 = {};\n\n          case 22:\n            _ref3 = _context.t1;\n            url = _ref3.url;\n            icon = _ref3.icon;\n            return _context.abrupt(\"return\", {\n              name: file.replace(\".\".concat(ext), ''),\n              fullName: file,\n              path: filePath,\n              url: url && decodeURIComponent(url),\n              icon: getBestIconMatch(icon, isDirectory, ext, filePath),\n              mtime: mtime && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_8__[\"formatToLongDateTime\"])(mtime),\n              size: isDirectory ? '--' : getFormattedSize(size),\n              kind: isDirectory ? 'Folder' : getFileKind(ext)\n            });\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDirectoryEntry(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFileIcon = function getFileIcon(filePath, ext) {\n  switch (ext) {\n    case 'png':\n    case 'ico':\n    case 'svg':\n      return filePath;\n\n    case 'jsdos':\n      return '/icons/apps/dos.png';\n    // TODO: *.js\n\n    case 'js':\n    case 'json':\n    case 'min.js':\n    case 'wasm.js':\n    case 'worker.js':\n      return _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\n    // TODO: Winamp file type icons\n\n    case 'mp3':\n    case 'm3u':\n    case 'wsz':\n      return '/icons/apps/winamp.png';\n\n    case 'pdf':\n      return _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default.a;\n\n    default:\n      return _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\n  }\n};\n\nvar getFileKind = function getFileKind(ext) {\n  switch (ext) {\n    case 'txt':\n      return 'Plain Text';\n\n    case 'json':\n      return 'JSON Document';\n\n    case 'ico':\n      return 'Icon Image';\n\n    case 'woff2':\n      return 'Web Font';\n\n    case 'zip':\n      return 'ZIP Archive';\n\n    case 'mp3':\n      return 'MP3 Audio';\n\n    case 'js':\n      return 'JavaScript Document';\n\n    case 'wsz':\n      return 'Winamp Skin';\n\n    case 'url':\n      return 'Internet Shortcut';\n\n    default:\n      return '';\n  }\n};\n\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\n\nvar getFormattedSize = function getFormattedSize(size) {\n  if (size === 0) return 'Zero bytes';\n  if (size === 1) return '1 byte';\n  var sizeFactor = Math.floor(Math.log(size) / Math.log(bytesInKB)),\n      newSize = Math.round(size / Math.pow(bytesInKB, sizeFactor));\n  return \"\".concat(newSize, \" \").concat(fileSizes[sizeFactor]);\n};\n\nvar getDirectory = function getDirectory(fs, path, getDetails, cb) {\n  var _fs$readdir;\n\n  fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, path, function (_error) {\n    var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    contents.reduce( /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(entries, file) {\n        var newEntries;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.t0 = [];\n                _context2.t1 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                _context2.next = 4;\n                return entries;\n\n              case 4:\n                _context2.t2 = _context2.sent;\n                _context2.t3 = (0, _context2.t1)(_context2.t2);\n                _context2.next = 8;\n                return getDirectoryEntry(fs, path, file, getDetails);\n\n              case 8:\n                _context2.t4 = _context2.sent;\n                _context2.t5 = [_context2.t4];\n                newEntries = _context2.t0.concat.call(_context2.t0, _context2.t3, _context2.t5);\n                cb(newEntries);\n                return _context2.abrupt(\"return\", newEntries);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x5, _x6) {\n        return _ref4.apply(this, arguments);\n      };\n    }(), Promise.resolve([]));\n  });\n};\nvar getFileExtension = function getFileExtension() {\n  var _path$split, _path$split$call, _path$split$call$pop, _path$split$call$pop$, _path$split$call$pop$2;\n\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var _ref5 = (path === null || path === void 0 ? void 0 : (_path$split = path.split) === null || _path$split === void 0 ? void 0 : (_path$split$call = _path$split.call(path, '/')) === null || _path$split$call === void 0 ? void 0 : (_path$split$call$pop = _path$split$call.pop) === null || _path$split$call$pop === void 0 ? void 0 : (_path$split$call$pop$ = _path$split$call$pop.call(_path$split$call)) === null || _path$split$call$pop$ === void 0 ? void 0 : (_path$split$call$pop$2 = _path$split$call$pop$.split) === null || _path$split$call$pop$2 === void 0 ? void 0 : _path$split$call$pop$2.call(_path$split$call$pop$, '.')) || [],\n      _ref6 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref5),\n      ext = _ref6.slice(1);\n\n  return ext.length >= 2 ? ext.slice(ext.length - 2).join('.') : ext[0] || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlsZXMudHN4PzljM2QiXSwibmFtZXMiOlsiYnl0ZXNJbktCIiwiZmlsZVNpemVzIiwiaG9tZURpciIsInBhcnNlU2hvcnRjdXQiLCJmcyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwiX2Vycm9yIiwiZmlsZUJ1ZmZlciIsImdldEJlc3RJY29uTWF0Y2giLCJpY29uIiwiaXNEaXJlY3RvcnkiLCJleHQiLCJmaWxlUGF0aCIsIkV4cGxvcmVySWNvbiIsImdldEZpbGVJY29uIiwiZ2V0RGlyZWN0b3J5RW50cnkiLCJmaWxlIiwiZ2V0U3RhdHMiLCJnZXRGaWxlU3RhdCIsInN0YXRzIiwibXRpbWUiLCJzaXplIiwiZ2V0RmlsZUV4dGVuc2lvbiIsImlzU2hvcnRjdXQiLCJpbmNsdWRlcyIsInVybCIsIm5hbWUiLCJyZXBsYWNlIiwiZnVsbE5hbWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJmb3JtYXRUb0xvbmdEYXRlVGltZSIsImdldEZvcm1hdHRlZFNpemUiLCJraW5kIiwiZ2V0RmlsZUtpbmQiLCJKc0ZpbGVUeXBlSWNvbiIsIlBkZkZpbGVUeXBlSWNvbiIsIlVua25vd25GaWxlVHlwZUljb24iLCJzdGF0Iiwic2l6ZUZhY3RvciIsIk1hdGgiLCJmbG9vciIsImxvZyIsIm5ld1NpemUiLCJyb3VuZCIsInBvdyIsImdldERpcmVjdG9yeSIsImdldERldGFpbHMiLCJjYiIsInJlYWRkaXIiLCJjb250ZW50cyIsInJlZHVjZSIsImVudHJpZXMiLCJuZXdFbnRyaWVzIiwic3BsaXQiLCJwb3AiLCJsZW5ndGgiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsSUFBbEI7QUFBQSxJQUNFQyxTQUFTLEdBQUcsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFz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RTtBQUNELENBSk0iLCJmaWxlIjoiLi91dGlscy9maWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwbG9yZXJJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL2FwcHMvZXhwbG9yZXIucG5nJztcblxuaW1wb3J0IEpzRmlsZVR5cGVJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL3R5cGVzL2pzLnN2Zyc7XG5pbXBvcnQgUGRmRmlsZVR5cGVJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL3R5cGVzL3BkZi5zdmcnO1xuaW1wb3J0IFVua25vd25GaWxlVHlwZUljb24gZnJvbSAnQC9wdWJsaWMvaWNvbnMvdHlwZXMvdW5rbm93bi5zdmcnO1xuXG5pbXBvcnQgdHlwZSB7IEZTTW9kdWxlIH0gZnJvbSAnYnJvd3NlcmZzL2Rpc3Qvbm9kZS9jb3JlL0ZTJztcbmltcG9ydCB0eXBlIHsgU3RhdHMgfSBmcm9tICdicm93c2VyZnMvZGlzdC9ub2RlL2dlbmVyaWMvZW1zY3JpcHRlbl9mcyc7XG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeUVudHJ5IH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5JztcblxuaW1wb3J0ICogYXMgaW5pIGZyb20gJ2luaSc7XG5pbXBvcnQgeyBmb3JtYXRUb0xvbmdEYXRlVGltZSB9IGZyb20gJ0AvdXRpbHMvZGF0ZXMnO1xuXG5jb25zdCBieXRlc0luS0IgPSAxMDI0LFxuICBmaWxlU2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ10sXG4gIGhvbWVEaXIgPSAnLyc7XG5cbnR5cGUgU3RhdHNQcm90byA9IHtcbiAgaXNEaXJlY3Rvcnk6ICgpID0+IGJvb2xlYW47XG59O1xuXG50eXBlIFNob3J0Y3V0ID0ge1xuICB1cmw6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xufTtcblxuY29uc3QgcGFyc2VTaG9ydGN1dCA9IChmczogRlNNb2R1bGUsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8U2hvcnRjdXQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZnM/LnJlYWRGaWxlPy4ocGF0aCwgKF9lcnJvciwgZmlsZUJ1ZmZlcikgPT4ge1xuICAgICAgLy8gaW1wb3J0KCdpbmknKS50aGVuKGluaSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGluaSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIGNvbnN0IHtcbiAgICAgIC8vICAgSW50ZXJuZXRTaG9ydGN1dDogeyBVUkw6IHVybCwgSWNvbkZpbGUgfVxuICAgICAgLy8gfSA9IGluaS5wYXJzZShmaWxlQnVmZmVyPy50b1N0cmluZygpIHx8ICcnKTtcblxuICAgICAgLy8gcmVzb2x2ZSh7IHVybCwgaWNvbjogbmV3IFVSTChJY29uRmlsZSkucGF0aG5hbWUgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG5jb25zdCBnZXRCZXN0SWNvbk1hdGNoID0gKFxuICBpY29uOiBzdHJpbmcsXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuLFxuICBleHQ6IHN0cmluZyxcbiAgZmlsZVBhdGg6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgaWYgKGljb24pIHJldHVybiBpY29uO1xuXG4gIHJldHVybiBpc0RpcmVjdG9yeSA/IEV4cGxvcmVySWNvbiA6IGdldEZpbGVJY29uKGZpbGVQYXRoLCBleHQpO1xufTtcblxuY29uc3QgZ2V0RGlyZWN0b3J5RW50cnkgPSBhc3luYyAoXG4gIGZzOiBGU01vZHVsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBmaWxlOiBzdHJpbmcsXG4gIGdldFN0YXRzOiBib29sZWFuXG4pOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYCR7cGF0aH0ke3BhdGggPT09IGhvbWVEaXIgPyAnJyA6ICcvJ30ke2ZpbGV9YCxcbiAgICAvLyBHZXQgcmlkIG9mIGlzRGlyZWN0b3J5IGFuZCBqdXN0IGNoZWNrIGZvciBleHRlbnNpb24gKGV2ZW50dWFsbHkgdXNpbmcgcGF0aCBsb2dpYylcbiAgICBzdGF0cyA9IGdldFN0YXRzXG4gICAgICA/IGF3YWl0IGdldEZpbGVTdGF0KGZzLCBmaWxlUGF0aClcbiAgICAgIDogKHt9IGFzIFN0YXRzICYgU3RhdHNQcm90byksXG4gICAgeyBtdGltZSwgc2l6ZSB9ID0gc3RhdHMgfHwge30sXG4gICAgZXh0ID0gZ2V0RmlsZUV4dGVuc2lvbihmaWxlKSxcbiAgICBpc0RpcmVjdG9yeSA9IHN0YXRzPy5pc0RpcmVjdG9yeT8uKCkgfHwgZmFsc2UsXG4gICAgaXNTaG9ydGN1dCA9ICFpc0RpcmVjdG9yeSAmJiBmaWxlLmluY2x1ZGVzKCcudXJsJyksXG4gICAgeyB1cmwsIGljb24gfSA9IGlzU2hvcnRjdXRcbiAgICAgID8gYXdhaXQgcGFyc2VTaG9ydGN1dChmcywgZmlsZVBhdGgpXG4gICAgICA6ICh7fSBhcyBTaG9ydGN1dCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWxlLnJlcGxhY2UoYC4ke2V4dH1gLCAnJyksXG4gICAgZnVsbE5hbWU6IGZpbGUsXG4gICAgcGF0aDogZmlsZVBhdGgsXG4gICAgdXJsOiB1cmwgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHVybCksXG4gICAgaWNvbjogZ2V0QmVzdEljb25NYXRjaChpY29uLCBpc0RpcmVjdG9yeSwgZXh0LCBmaWxlUGF0aCksXG4gICAgbXRpbWU6IG10aW1lICYmIGZvcm1hdFRvTG9uZ0RhdGVUaW1lKG10aW1lKSxcbiAgICBzaXplOiBpc0RpcmVjdG9yeSA/ICctLScgOiBnZXRGb3JtYXR0ZWRTaXplKHNpemUpLFxuICAgIGtpbmQ6IGlzRGlyZWN0b3J5ID8gJ0ZvbGRlcicgOiBnZXRGaWxlS2luZChleHQpXG4gIH07XG59O1xuXG5jb25zdCBnZXRGaWxlSWNvbiA9IChmaWxlUGF0aDogc3RyaW5nLCBleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAoZXh0KSB7XG4gICAgY2FzZSAncG5nJzpcbiAgICBjYXNlICdpY28nOlxuICAgIGNhc2UgJ3N2Zyc6XG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgY2FzZSAnanNkb3MnOlxuICAgICAgcmV0dXJuICcvaWNvbnMvYXBwcy9kb3MucG5nJztcbiAgICAvLyBUT0RPOiAqLmpzXG4gICAgY2FzZSAnanMnOlxuICAgIGNhc2UgJ2pzb24nOlxuICAgIGNhc2UgJ21pbi5qcyc6XG4gICAgY2FzZSAnd2FzbS5qcyc6XG4gICAgY2FzZSAnd29ya2VyLmpzJzpcbiAgICAgIHJldHVybiBKc0ZpbGVUeXBlSWNvbjtcbiAgICAvLyBUT0RPOiBXaW5hbXAgZmlsZSB0eXBlIGljb25zXG4gICAgY2FzZSAnbXAzJzpcbiAgICBjYXNlICdtM3UnOlxuICAgIGNhc2UgJ3dzeic6XG4gICAgICByZXR1cm4gJy9pY29ucy9hcHBzL3dpbmFtcC5wbmcnO1xuICAgIGNhc2UgJ3BkZic6XG4gICAgICByZXR1cm4gUGRmRmlsZVR5cGVJY29uO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gVW5rbm93bkZpbGVUeXBlSWNvbjtcbiAgfVxufTtcblxuY29uc3QgZ2V0RmlsZUtpbmQgPSAoZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKGV4dCkge1xuICAgIGNhc2UgJ3R4dCc6XG4gICAgICByZXR1cm4gJ1BsYWluIFRleHQnO1xuICAgIGNhc2UgJ2pzb24nOlxuICAgICAgcmV0dXJuICdKU09OIERvY3VtZW50JztcbiAgICBjYXNlICdpY28nOlxuICAgICAgcmV0dXJuICdJY29uIEltYWdlJztcbiAgICBjYXNlICd3b2ZmMic6XG4gICAgICByZXR1cm4gJ1dlYiBGb250JztcbiAgICBjYXNlICd6aXAnOlxuICAgICAgcmV0dXJuICdaSVAgQXJjaGl2ZSc7XG4gICAgY2FzZSAnbXAzJzpcbiAgICAgIHJldHVybiAnTVAzIEF1ZGlvJztcbiAgICBjYXNlICdqcyc6XG4gICAgICByZXR1cm4gJ0phdmFTY3JpcHQgRG9jdW1lbnQnO1xuICAgIGNhc2UgJ3dzeic6XG4gICAgICByZXR1cm4gJ1dpbmFtcCBTa2luJztcbiAgICBjYXNlICd1cmwnOlxuICAgICAgcmV0dXJuICdJbnRlcm5ldCBTaG9ydGN1dCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2V0RmlsZVN0YXQgPSAoZnM6IEZTTW9kdWxlLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFN0YXRzICYgU3RhdHNQcm90bz4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGZzPy5zdGF0Py4ocGF0aCwgKF9lcnJvciwgc3RhdHMpID0+IHJlc29sdmUoc3RhdHMpKSk7XG5cbmNvbnN0IGdldEZvcm1hdHRlZFNpemUgPSAoc2l6ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHNpemUgPT09IDApIHJldHVybiAnWmVybyBieXRlcyc7XG4gIGlmIChzaXplID09PSAxKSByZXR1cm4gJzEgYnl0ZSc7XG5cbiAgY29uc3Qgc2l6ZUZhY3RvciA9IE1hdGguZmxvb3IoTWF0aC5sb2coc2l6ZSkgLyBNYXRoLmxvZyhieXRlc0luS0IpKSxcbiAgICBuZXdTaXplID0gTWF0aC5yb3VuZChzaXplIC8gTWF0aC5wb3coYnl0ZXNJbktCLCBzaXplRmFjdG9yKSk7XG5cbiAgcmV0dXJuIGAke25ld1NpemV9ICR7ZmlsZVNpemVzW3NpemVGYWN0b3JdfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGlyZWN0b3J5ID0gKFxuICBmczogRlNNb2R1bGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZ2V0RGV0YWlsczogYm9vbGVhbixcbiAgY2I6IChlbnRyaWVzOiBBcnJheTxEaXJlY3RvcnlFbnRyeT4pID0+IHZvaWQgLy8gRGlzcGF0Y2g/XG4pOiB2b2lkID0+IHtcbiAgZnM/LnJlYWRkaXI/LihwYXRoLCAoX2Vycm9yLCBjb250ZW50cyA9IFtdKSA9PiB7XG4gICAgY29udGVudHMucmVkdWNlKGFzeW5jIChlbnRyaWVzLCBmaWxlKSA9PiB7XG4gICAgICBjb25zdCBuZXdFbnRyaWVzID0gW1xuICAgICAgICAuLi4oYXdhaXQgZW50cmllcyksXG4gICAgICAgIGF3YWl0IGdldERpcmVjdG9yeUVudHJ5KGZzLCBwYXRoLCBmaWxlLCBnZXREZXRhaWxzKVxuICAgICAgXTtcblxuICAgICAgY2IobmV3RW50cmllcyk7XG5cbiAgICAgIHJldHVybiBuZXdFbnRyaWVzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZShbXSkgYXMgUHJvbWlzZTxBcnJheTxEaXJlY3RvcnlFbnRyeT4+KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZUV4dGVuc2lvbiA9IChwYXRoID0gJycpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbLCAuLi5leHRdID0gcGF0aD8uc3BsaXQ/LignLycpPy5wb3A/LigpPy5zcGxpdD8uKCcuJykgfHwgW107XG5cbiAgcmV0dXJuIGV4dC5sZW5ndGggPj0gMiA/IGV4dC5zbGljZShleHQubGVuZ3RoIC0gMikuam9pbignLicpIDogZXh0WzBdIHx8ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/files.tsx\n");

/***/ })

})