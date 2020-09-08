webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/files.tsx":
/*!*************************!*\
  !*** ./utils/files.tsx ***!
  \*************************/
/*! exports provided: getDirectory, getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectory\", function() { return getDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileExtension\", function() { return getFileExtension; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/apps/explorer.png */ \"./public/icons/apps/explorer.png\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/types/unknown.png */ \"./public/icons/types/unknown.png\");\n/* harmony import */ var _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ini */ \"./node_modules/ini/ini.js\");\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ini__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dates */ \"./utils/dates.tsx\");\n\n\n\n\n\n\n\n\nvar bytesInKB = 1024,\n    fileSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],\n    homeDir = '/';\n\nvar parseShortcut = function parseShortcut(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$readFile;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readFile = fs.readFile) === null || _fs$readFile === void 0 ? void 0 : _fs$readFile.call(fs, path, function (_error, fileBuffer) {\n      var _ini$parse = ini__WEBPACK_IMPORTED_MODULE_6__[\"parse\"]((fileBuffer === null || fileBuffer === void 0 ? void 0 : fileBuffer.toString()) || ''),\n          _ini$parse$InternetSh = _ini$parse.InternetShortcut,\n          url = _ini$parse$InternetSh.URL,\n          IconFile = _ini$parse$InternetSh.IconFile;\n\n      resolve({\n        url: url,\n        icon: new URL(IconFile).pathname\n      });\n    });\n  });\n};\n\nvar getDirectoryEntry = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fs, path, file, getStats) {\n    var _stats$isDirectory;\n\n    var filePath, stats, _ref2, mtime, size, ext, isDirectory, isShortcut, _ref3, url, icon;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            filePath = \"\".concat(path).concat(path === homeDir ? '' : '/').concat(file);\n\n            if (!getStats) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return getFileStat(fs, filePath);\n\n          case 4:\n            _context.t0 = _context.sent;\n            _context.next = 8;\n            break;\n\n          case 7:\n            _context.t0 = {};\n\n          case 8:\n            stats = _context.t0;\n            _ref2 = stats || {};\n            mtime = _ref2.mtime;\n            size = _ref2.size;\n            ext = getFileExtension(file);\n            isDirectory = (stats === null || stats === void 0 ? void 0 : (_stats$isDirectory = stats.isDirectory) === null || _stats$isDirectory === void 0 ? void 0 : _stats$isDirectory.call(stats)) || false;\n            isShortcut = !isDirectory && file.includes('.url');\n\n            if (!isShortcut) {\n              _context.next = 21;\n              break;\n            }\n\n            _context.next = 18;\n            return parseShortcut(fs, filePath);\n\n          case 18:\n            _context.t1 = _context.sent;\n            _context.next = 22;\n            break;\n\n          case 21:\n            _context.t1 = {};\n\n          case 22:\n            _ref3 = _context.t1;\n            url = _ref3.url;\n            icon = _ref3.icon;\n            console.log(file);\n            return _context.abrupt(\"return\", {\n              name: file.replace(\".\".concat(ext), ''),\n              fullName: file,\n              path: filePath,\n              url: url && decodeURIComponent(url),\n              icon: icon ? icon : isDirectory ? _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default.a : ext === 'ico' ? url : getFileIcon(ext),\n              mtime: mtime && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_7__[\"formatToLongDateTime\"])(mtime),\n              size: isDirectory ? '--' : getFormattedSize(size),\n              kind: isDirectory ? 'Folder' : getFileKind(ext)\n            });\n\n          case 27:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDirectoryEntry(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFileIcon = function getFileIcon(ext) {\n  switch (ext) {\n    default:\n      return _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default.a;\n  }\n};\n\nvar getFileKind = function getFileKind(ext) {\n  switch (ext) {\n    case 'txt':\n      return 'Plain Text';\n\n    case 'json':\n      return 'JSON Document';\n\n    case 'ico':\n      return 'Icon Image';\n\n    case 'woff2':\n      return 'Web Font';\n\n    case 'zip':\n      return 'ZIP Archive';\n\n    case 'mp3':\n      return 'MP3 Audio';\n\n    case 'js':\n      return 'JavaScript Document';\n\n    case 'wsz':\n      return 'Winamp Skin';\n\n    case 'url':\n      return 'Internet Shortcut';\n\n    default:\n      return '';\n  }\n};\n\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\n\nvar getFormattedSize = function getFormattedSize(size) {\n  if (size === 0) return 'Zero bytes';\n  if (size === 1) return '1 byte';\n  var sizeFactor = Math.floor(Math.log(size) / Math.log(bytesInKB)),\n      newSize = Math.round(size / Math.pow(bytesInKB, sizeFactor));\n  return \"\".concat(newSize, \" \").concat(fileSizes[sizeFactor]);\n};\n\nvar getDirectory = function getDirectory(fs, path, getDetails, cb) {\n  var _fs$readdir;\n\n  fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, path, function (_error) {\n    var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    contents.reduce( /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(entries, file) {\n        var newEntries;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.t0 = [];\n                _context2.t1 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                _context2.next = 4;\n                return entries;\n\n              case 4:\n                _context2.t2 = _context2.sent;\n                _context2.t3 = (0, _context2.t1)(_context2.t2);\n                _context2.next = 8;\n                return getDirectoryEntry(fs, path, file, getDetails);\n\n              case 8:\n                _context2.t4 = _context2.sent;\n                _context2.t5 = [_context2.t4];\n                newEntries = _context2.t0.concat.call(_context2.t0, _context2.t3, _context2.t5);\n                cb(newEntries);\n                return _context2.abrupt(\"return\", newEntries);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x5, _x6) {\n        return _ref4.apply(this, arguments);\n      };\n    }(), Promise.resolve([]));\n  });\n};\nvar getFileExtension = function getFileExtension() {\n  var _path$split, _path$split$call, _path$split$call$pop, _path$split$call$pop$, _path$split$call$pop$2;\n\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var _ref5 = (path === null || path === void 0 ? void 0 : (_path$split = path.split) === null || _path$split === void 0 ? void 0 : (_path$split$call = _path$split.call(path, '/')) === null || _path$split$call === void 0 ? void 0 : (_path$split$call$pop = _path$split$call.pop) === null || _path$split$call$pop === void 0 ? void 0 : (_path$split$call$pop$ = _path$split$call$pop.call(_path$split$call)) === null || _path$split$call$pop$ === void 0 ? void 0 : (_path$split$call$pop$2 = _path$split$call$pop$.split) === null || _path$split$call$pop$2 === void 0 ? void 0 : _path$split$call$pop$2.call(_path$split$call$pop$, '.')) || [],\n      _ref6 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref5),\n      ext = _ref6.slice(1);\n\n  return (ext || []).join();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlsZXMudHN4PzljM2QiXSwibmFtZXMiOlsiYnl0ZXNJbktCIiwiZmlsZVNpemVzIiwiaG9tZURpciIsInBhcnNlU2hvcnRjdXQiLCJmcyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwiX2Vycm9yIiwiZmlsZUJ1ZmZlciIsImluaSIsInRvU3RyaW5nIiwiSW50ZXJuZXRTaG9ydGN1dCIsInVybCIsIlVSTCIsIkljb25GaWxlIiwiaWNvbiIsInBhdGhuYW1lIiwiZ2V0RGlyZWN0b3J5RW50cnkiLCJmaWxlIiwiZ2V0U3RhdHMiLCJmaWxlUGF0aCIsImdldEZpbGVTdGF0Iiwic3RhdHMiLCJtdGltZSIsInNpemUiLCJleHQiLCJnZXRGaWxlRXh0ZW5zaW9uIiwiaXNEaXJlY3RvcnkiLCJpc1Nob3J0Y3V0IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInJlcGxhY2UiLCJmdWxsTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIkV4cGxvcmVySWNvbiIsImdldEZpbGVJY29uIiwiZm9ybWF0VG9Mb25nRGF0ZVRpbWUiLCJnZXRGb3JtYXR0ZWRTaXplIiwia2luZCIsImdldEZpbGVLaW5kIiwiVW5rbm93bkZpbGVUeXBlSWNvbiIsInN0YXQiLCJzaXplRmFjdG9yIiwiTWF0aCIsImZsb29yIiwibmV3U2l6ZSIsInJvdW5kIiwicG93IiwiZ2V0RGlyZWN0b3J5IiwiZ2V0RGV0YWlscyIsImNiIiwicmVhZGRpciIsImNvbnRlbnRzIiwicmVkdWNlIiwiZW50cmllcyIsIm5ld0VudHJpZXMiLCJzcGxpdCIsInBvcCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxJQUFsQjtBQUFBLElBQ0VDLFNBQVMsR0FBRyxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFHTnZDLGlCQUFpQixDQUFDZixFQUFELEVBQUtDLElBQUwsRUFBV2UsSUFBWCxFQUFpQmlDLFVBQWpCLENBSFg7O0FBQUE7QUFBQTtBQUFBO0FBQ1JNLDBCQURRO0FBTWRMLGtCQUFFLENBQUNLLFVBQUQsQ0FBRjtBQU5jLGtEQVFQQSxVQVJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBU0dyRCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FUSDtBQVVELEdBWEMsQ0FBRjtBQVlELENBbEJNO0FBb0JBLElBQU1xQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQXVCO0FBQUE7O0FBQUEsTUFBdEJ2QixJQUFzQix1RUFBZixFQUFlOztBQUFBLGNBQ2xDLENBQUFBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMkJBQUFBLElBQUksQ0FBRXVELEtBQU4scUZBQUF2RCxJQUFJLEVBQVUsR0FBVixDQUFKLDhGQUFvQndELEdBQXBCLHVPQUE2QkQsS0FBN0IsOEdBQXFDLEdBQXJDLE1BQTZDLEVBRFg7QUFBQTtBQUFBLE1BQ3pDakMsR0FEeUM7O0FBR3JELFNBQU8sQ0FBQ0EsR0FBRyxJQUFJLEVBQVIsRUFBWW1DLElBQVosRUFBUDtBQUNELENBSk0iLCJmaWxlIjoiLi91dGlscy9maWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwbG9yZXJJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL2FwcHMvZXhwbG9yZXIucG5nJztcbmltcG9ydCBVbmtub3duRmlsZVR5cGVJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL3R5cGVzL3Vua25vd24ucG5nJztcblxuaW1wb3J0IHR5cGUgeyBGU01vZHVsZSB9IGZyb20gJ2Jyb3dzZXJmcy9kaXN0L25vZGUvY29yZS9GUyc7XG5pbXBvcnQgdHlwZSB7IFN0YXRzIH0gZnJvbSAnYnJvd3NlcmZzL2Rpc3Qvbm9kZS9nZW5lcmljL2Vtc2NyaXB0ZW5fZnMnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlFbnRyeSB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbmltcG9ydCAqIGFzIGluaSBmcm9tICdpbmknO1xuaW1wb3J0IHsgZm9ybWF0VG9Mb25nRGF0ZVRpbWUgfSBmcm9tICdAL3V0aWxzL2RhdGVzJztcblxuY29uc3QgYnl0ZXNJbktCID0gMTAyNCxcbiAgZmlsZVNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddLFxuICBob21lRGlyID0gJy8nO1xuXG50eXBlIFN0YXRzUHJvdG8gPSB7XG4gIGlzRGlyZWN0b3J5OiAoKSA9PiBib29sZWFuO1xufTtcblxudHlwZSBTaG9ydGN1dCA9IHtcbiAgdXJsOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn07XG5cbmNvbnN0IHBhcnNlU2hvcnRjdXQgPSAoZnM6IEZTTW9kdWxlLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFNob3J0Y3V0PiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGZzPy5yZWFkRmlsZT8uKHBhdGgsIChfZXJyb3IsIGZpbGVCdWZmZXIpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgSW50ZXJuZXRTaG9ydGN1dDogeyBVUkw6IHVybCwgSWNvbkZpbGUgfVxuICAgICAgfSA9IGluaS5wYXJzZShmaWxlQnVmZmVyPy50b1N0cmluZygpIHx8ICcnKTtcblxuICAgICAgcmVzb2x2ZSh7IHVybCwgaWNvbjogbmV3IFVSTChJY29uRmlsZSkucGF0aG5hbWUgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG5jb25zdCBnZXREaXJlY3RvcnlFbnRyeSA9IGFzeW5jIChcbiAgZnM6IEZTTW9kdWxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGZpbGU6IHN0cmluZyxcbiAgZ2V0U3RhdHM6IGJvb2xlYW5cbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+ID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBgJHtwYXRofSR7cGF0aCA9PT0gaG9tZURpciA/ICcnIDogJy8nfSR7ZmlsZX1gLFxuICAgIC8vIFRPRE86IERvbid0IG5lZWQgc3RhdHMgZm9yIFZpZXdJY29ucyBvciBEaXJlY3Rvcmllc1xuICAgIC8vIEdldCByaWQgb2YgaXNEaXJlY3RvcnkgYW5kIGp1c3QgY2hlY2sgZm9yIGV4dGVuc2lvbiAoZXZlbnR1YWxseSB1c2luZyBwYXRoIGxvZ2ljKVxuICAgIHN0YXRzID0gZ2V0U3RhdHNcbiAgICAgID8gYXdhaXQgZ2V0RmlsZVN0YXQoZnMsIGZpbGVQYXRoKVxuICAgICAgOiAoe30gYXMgU3RhdHMgJiBTdGF0c1Byb3RvKSxcbiAgICB7IG10aW1lLCBzaXplIH0gPSBzdGF0cyB8fCB7fSxcbiAgICBleHQgPSBnZXRGaWxlRXh0ZW5zaW9uKGZpbGUpLFxuICAgIGlzRGlyZWN0b3J5ID0gc3RhdHM/LmlzRGlyZWN0b3J5Py4oKSB8fCBmYWxzZSxcbiAgICBpc1Nob3J0Y3V0ID0gIWlzRGlyZWN0b3J5ICYmIGZpbGUuaW5jbHVkZXMoJy51cmwnKSxcbiAgICB7IHVybCwgaWNvbiB9ID0gaXNTaG9ydGN1dFxuICAgICAgPyBhd2FpdCBwYXJzZVNob3J0Y3V0KGZzLCBmaWxlUGF0aClcbiAgICAgIDogKHt9IGFzIFNob3J0Y3V0KTtcbmNvbnNvbGUubG9nKGZpbGUpXG4gIHJldHVybiB7XG4gICAgbmFtZTogZmlsZS5yZXBsYWNlKGAuJHtleHR9YCwgJycpLFxuICAgIGZ1bGxOYW1lOiBmaWxlLFxuICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgIHVybDogdXJsICYmIGRlY29kZVVSSUNvbXBvbmVudCh1cmwpLFxuICAgIGljb246IGljb24gPyBpY29uIDogaXNEaXJlY3RvcnkgPyBFeHBsb3Jlckljb24gOiBleHQgPT09ICdpY28nID8gdXJsIDogZ2V0RmlsZUljb24oZXh0KSxcbiAgICBtdGltZTogbXRpbWUgJiYgZm9ybWF0VG9Mb25nRGF0ZVRpbWUobXRpbWUpLFxuICAgIHNpemU6IGlzRGlyZWN0b3J5ID8gJy0tJyA6IGdldEZvcm1hdHRlZFNpemUoc2l6ZSksXG4gICAga2luZDogaXNEaXJlY3RvcnkgPyAnRm9sZGVyJyA6IGdldEZpbGVLaW5kKGV4dClcbiAgfTtcbn07XG5cbmNvbnN0IGdldEZpbGVJY29uID0gKGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChleHQpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFVua25vd25GaWxlVHlwZUljb247XG4gIH1cbn07XG5cbmNvbnN0IGdldEZpbGVLaW5kID0gKGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChleHQpIHtcbiAgICBjYXNlICd0eHQnOlxuICAgICAgcmV0dXJuICdQbGFpbiBUZXh0JztcbiAgICBjYXNlICdqc29uJzpcbiAgICAgIHJldHVybiAnSlNPTiBEb2N1bWVudCc7XG4gICAgY2FzZSAnaWNvJzpcbiAgICAgIHJldHVybiAnSWNvbiBJbWFnZSc7XG4gICAgY2FzZSAnd29mZjInOlxuICAgICAgcmV0dXJuICdXZWIgRm9udCc7XG4gICAgY2FzZSAnemlwJzpcbiAgICAgIHJldHVybiAnWklQIEFyY2hpdmUnO1xuICAgIGNhc2UgJ21wMyc6XG4gICAgICByZXR1cm4gJ01QMyBBdWRpbyc7XG4gICAgY2FzZSAnanMnOlxuICAgICAgcmV0dXJuICdKYXZhU2NyaXB0IERvY3VtZW50JztcbiAgICBjYXNlICd3c3onOlxuICAgICAgcmV0dXJuICdXaW5hbXAgU2tpbic7XG4gICAgY2FzZSAndXJsJzpcbiAgICAgIHJldHVybiAnSW50ZXJuZXQgU2hvcnRjdXQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdldEZpbGVTdGF0ID0gKGZzOiBGU01vZHVsZSwgcGF0aDogc3RyaW5nKTogUHJvbWlzZTxTdGF0cyAmIFN0YXRzUHJvdG8+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBmcz8uc3RhdD8uKHBhdGgsIChfZXJyb3IsIHN0YXRzKSA9PiByZXNvbHZlKHN0YXRzKSkpO1xuXG5jb25zdCBnZXRGb3JtYXR0ZWRTaXplID0gKHNpemU6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmIChzaXplID09PSAwKSByZXR1cm4gJ1plcm8gYnl0ZXMnO1xuICBpZiAoc2l6ZSA9PT0gMSkgcmV0dXJuICcxIGJ5dGUnO1xuXG4gIGNvbnN0IHNpemVGYWN0b3IgPSBNYXRoLmZsb29yKE1hdGgubG9nKHNpemUpIC8gTWF0aC5sb2coYnl0ZXNJbktCKSksXG4gICAgbmV3U2l6ZSA9IE1hdGgucm91bmQoc2l6ZSAvIE1hdGgucG93KGJ5dGVzSW5LQiwgc2l6ZUZhY3RvcikpO1xuXG4gIHJldHVybiBgJHtuZXdTaXplfSAke2ZpbGVTaXplc1tzaXplRmFjdG9yXX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERpcmVjdG9yeSA9IChcbiAgZnM6IEZTTW9kdWxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGdldERldGFpbHM6IGJvb2xlYW4sXG4gIGNiOiAoZW50cmllczogQXJyYXk8RGlyZWN0b3J5RW50cnk+KSA9PiB2b2lkIC8vIERpc3BhdGNoP1xuKTogdm9pZCA9PiB7XG4gIGZzPy5yZWFkZGlyPy4ocGF0aCwgKF9lcnJvciwgY29udGVudHMgPSBbXSkgPT4ge1xuICAgIGNvbnRlbnRzLnJlZHVjZShhc3luYyAoZW50cmllcywgZmlsZSkgPT4ge1xuICAgICAgY29uc3QgbmV3RW50cmllcyA9IFtcbiAgICAgICAgLi4uKGF3YWl0IGVudHJpZXMpLFxuICAgICAgICBhd2FpdCBnZXREaXJlY3RvcnlFbnRyeShmcywgcGF0aCwgZmlsZSwgZ2V0RGV0YWlscylcbiAgICAgIF07XG5cbiAgICAgIGNiKG5ld0VudHJpZXMpO1xuXG4gICAgICByZXR1cm4gbmV3RW50cmllcztcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoW10pIGFzIFByb21pc2U8QXJyYXk8RGlyZWN0b3J5RW50cnk+Pik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZpbGVFeHRlbnNpb24gPSAocGF0aCA9ICcnKTogc3RyaW5nID0+IHtcbiAgY29uc3QgWywgLi4uZXh0XSA9IHBhdGg/LnNwbGl0Py4oJy8nKT8ucG9wPy4oKT8uc3BsaXQ/LignLicpIHx8IFtdO1xuXG4gIHJldHVybiAoZXh0IHx8IFtdKS5qb2luKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/files.tsx\n");

/***/ })

})