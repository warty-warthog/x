webpackHotUpdate_N_E(3,{

/***/ "./node_modules/ini/ini.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./utils/files.tsx":
/*!*************************!*\
  !*** ./utils/files.tsx ***!
  \*************************/
/*! exports provided: getDirectory, getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectory\", function() { return getDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileExtension\", function() { return getFileExtension; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/apps/explorer.png */ \"./public/icons/apps/explorer.png\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/types/js.svg */ \"./public/icons/types/js.svg\");\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/icons/types/pdf.svg */ \"./public/icons/types/pdf.svg\");\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/icons/types/unknown.svg */ \"./public/icons/types/unknown.svg\");\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dates */ \"./utils/dates.tsx\");\n\n\n\n\n\n\n\n\n\nvar bytesInKB = 1024,\n    fileSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],\n    homeDir = '/';\n\nvar parseShortcut = function parseShortcut(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$readFile;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readFile = fs.readFile) === null || _fs$readFile === void 0 ? void 0 : _fs$readFile.call(fs, path, function (_error, fileBuffer) {\n      __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.t.bind(null, /*! ini */ \"./node_modules/ini/ini.js\", 7)).then(function (ini) {\n        console.log(ini);\n      }); // const {\n      //   InternetShortcut: { URL: url, IconFile }\n      // } = ini.parse(fileBuffer?.toString() || '');\n      // resolve({ url, icon: new URL(IconFile).pathname });\n    });\n  });\n};\n\nvar getBestIconMatch = function getBestIconMatch(icon, isDirectory, ext, filePath) {\n  if (icon) return icon;\n  return isDirectory ? _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default.a : getFileIcon(filePath, ext);\n};\n\nvar getDirectoryEntry = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fs, path, file, getStats) {\n    var _stats$isDirectory;\n\n    var filePath, stats, _ref2, mtime, size, ext, isDirectory, isShortcut, _ref3, url, icon;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            filePath = \"\".concat(path).concat(path === homeDir ? '' : '/').concat(file);\n\n            if (!getStats) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return getFileStat(fs, filePath);\n\n          case 4:\n            _context.t0 = _context.sent;\n            _context.next = 8;\n            break;\n\n          case 7:\n            _context.t0 = {};\n\n          case 8:\n            stats = _context.t0;\n            _ref2 = stats || {};\n            mtime = _ref2.mtime;\n            size = _ref2.size;\n            ext = getFileExtension(file);\n            isDirectory = (stats === null || stats === void 0 ? void 0 : (_stats$isDirectory = stats.isDirectory) === null || _stats$isDirectory === void 0 ? void 0 : _stats$isDirectory.call(stats)) || false;\n            isShortcut = !isDirectory && file.includes('.url');\n\n            if (!isShortcut) {\n              _context.next = 21;\n              break;\n            }\n\n            _context.next = 18;\n            return parseShortcut(fs, filePath);\n\n          case 18:\n            _context.t1 = _context.sent;\n            _context.next = 22;\n            break;\n\n          case 21:\n            _context.t1 = {};\n\n          case 22:\n            _ref3 = _context.t1;\n            url = _ref3.url;\n            icon = _ref3.icon;\n            return _context.abrupt(\"return\", {\n              name: file.replace(\".\".concat(ext), ''),\n              fullName: file,\n              path: filePath,\n              url: url && decodeURIComponent(url),\n              icon: getBestIconMatch(icon, isDirectory, ext, filePath),\n              mtime: mtime && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_8__[\"formatToLongDateTime\"])(mtime),\n              size: isDirectory ? '--' : getFormattedSize(size),\n              kind: isDirectory ? 'Folder' : getFileKind(ext)\n            });\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDirectoryEntry(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFileIcon = function getFileIcon(filePath, ext) {\n  switch (ext) {\n    case 'png':\n    case 'ico':\n    case 'svg':\n      return filePath;\n\n    case 'jsdos':\n      return '/icons/apps/dos.png';\n    // TODO: *.js\n\n    case 'js':\n    case 'json':\n    case 'min.js':\n    case 'wasm.js':\n    case 'worker.js':\n      return _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\n    // TODO: Winamp file type icons\n\n    case 'mp3':\n    case 'm3u':\n    case 'wsz':\n      return '/icons/apps/winamp.png';\n\n    case 'pdf':\n      return _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default.a;\n\n    default:\n      return _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\n  }\n};\n\nvar getFileKind = function getFileKind(ext) {\n  switch (ext) {\n    case 'txt':\n      return 'Plain Text';\n\n    case 'json':\n      return 'JSON Document';\n\n    case 'ico':\n      return 'Icon Image';\n\n    case 'woff2':\n      return 'Web Font';\n\n    case 'zip':\n      return 'ZIP Archive';\n\n    case 'mp3':\n      return 'MP3 Audio';\n\n    case 'js':\n      return 'JavaScript Document';\n\n    case 'wsz':\n      return 'Winamp Skin';\n\n    case 'url':\n      return 'Internet Shortcut';\n\n    default:\n      return '';\n  }\n};\n\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\n\nvar getFormattedSize = function getFormattedSize(size) {\n  if (size === 0) return 'Zero bytes';\n  if (size === 1) return '1 byte';\n  var sizeFactor = Math.floor(Math.log(size) / Math.log(bytesInKB)),\n      newSize = Math.round(size / Math.pow(bytesInKB, sizeFactor));\n  return \"\".concat(newSize, \" \").concat(fileSizes[sizeFactor]);\n};\n\nvar getDirectory = function getDirectory(fs, path, getDetails, cb) {\n  var _fs$readdir;\n\n  fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, path, function (_error) {\n    var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    contents.reduce( /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(entries, file) {\n        var newEntries;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.t0 = [];\n                _context2.t1 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                _context2.next = 4;\n                return entries;\n\n              case 4:\n                _context2.t2 = _context2.sent;\n                _context2.t3 = (0, _context2.t1)(_context2.t2);\n                _context2.next = 8;\n                return getDirectoryEntry(fs, path, file, getDetails);\n\n              case 8:\n                _context2.t4 = _context2.sent;\n                _context2.t5 = [_context2.t4];\n                newEntries = _context2.t0.concat.call(_context2.t0, _context2.t3, _context2.t5);\n                cb(newEntries);\n                return _context2.abrupt(\"return\", newEntries);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x5, _x6) {\n        return _ref4.apply(this, arguments);\n      };\n    }(), Promise.resolve([]));\n  });\n};\nvar getFileExtension = function getFileExtension() {\n  var _path$split, _path$split$call, _path$split$call$pop, _path$split$call$pop$, _path$split$call$pop$2;\n\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var _ref5 = (path === null || path === void 0 ? void 0 : (_path$split = path.split) === null || _path$split === void 0 ? void 0 : (_path$split$call = _path$split.call(path, '/')) === null || _path$split$call === void 0 ? void 0 : (_path$split$call$pop = _path$split$call.pop) === null || _path$split$call$pop === void 0 ? void 0 : (_path$split$call$pop$ = _path$split$call$pop.call(_path$split$call)) === null || _path$split$call$pop$ === void 0 ? void 0 : (_path$split$call$pop$2 = _path$split$call$pop$.split) === null || _path$split$call$pop$2 === void 0 ? void 0 : _path$split$call$pop$2.call(_path$split$call$pop$, '.')) || [],\n      _ref6 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref5),\n      ext = _ref6.slice(1);\n\n  return ext.length >= 2 ? ext.slice(ext.length - 2).join('.') : ext[0] || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlsZXMudHN4PzljM2QiXSwibmFtZXMiOlsiYnl0ZXNJbktCIiwiZmlsZVNpemVzIiwiaG9tZURpciIsInBhcnNlU2hvcnRjdXQiLCJmcyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwiX2Vycm9yIiwiZmlsZUJ1ZmZlciIsInRoZW4iLCJpbmkiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmVzdEljb25NYXRjaCIsImljb24iLCJpc0RpcmVjdG9yeSIsImV4dCIsImZpbGVQYXRoIiwiRXhwbG9yZXJJY29uIiwiZ2V0RmlsZUljb24iLCJnZXREaXJlY3RvcnlFbnRyeSIsImZpbGUiLCJnZXRTdGF0cyIsImdldEZpbGVTdGF0Iiwic3RhdHMiLCJtdGltZSIsInNpemUiLCJnZXRGaWxlRXh0ZW5zaW9uIiwiaXNTaG9ydGN1dCIsImluY2x1ZGVzIiwidXJsIiwibmFtZSIsInJlcGxhY2UiLCJmdWxsTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImZvcm1hdFRvTG9uZ0RhdGVUaW1lIiwiZ2V0Rm9ybWF0dGVkU2l6ZSIsImtpbmQiLCJnZXRGaWxlS2luZCIsIkpzRmlsZVR5cGVJY29uIiwiUGRmRmlsZVR5cGVJY29uIiwiVW5rbm93bkZpbGVUeXBlSWNvbiIsInN0YXQiLCJzaXplRmFjdG9yIiwiTWF0aCIsImZsb29yIiwibmV3U2l6ZSIsInJvdW5kIiwicG93IiwiZ2V0RGlyZWN0b3J5IiwiZ2V0RGV0YWlscyIsImNiIiwicmVhZGRpciIsImNvbnRlbnRzIiwicmVkdWNlIiwiZW50cmllcyIsIm5ld0VudHJpZXMiLCJzcGxpdCIsInBvcCIsImxlbmd0aCIsInNsaWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxJQUFsQjtBQUFBLElBQ0VDLFNBQVMsR0FBRyxDQUFDLE9BQUQsRUFB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QUosQ0FBVTVDLEdBQUcsQ0FBQzJDLE1BQUosR0FBYSxDQUF2QixFQUEwQkUsSUFBMUIsQ0FBK0IsR0FBL0IsQ0FBbEIsR0FBd0Q3QyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsRUFBekU7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vdXRpbHMvZmlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cGxvcmVySWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy9hcHBzL2V4cGxvcmVyLnBuZyc7XG5cbmltcG9ydCBKc0ZpbGVUeXBlSWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy90eXBlcy9qcy5zdmcnO1xuaW1wb3J0IFBkZkZpbGVUeXBlSWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy90eXBlcy9wZGYuc3ZnJztcbmltcG9ydCBVbmtub3duRmlsZVR5cGVJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL3R5cGVzL3Vua25vd24uc3ZnJztcblxuaW1wb3J0IHR5cGUgeyBGU01vZHVsZSB9IGZyb20gJ2Jyb3dzZXJmcy9kaXN0L25vZGUvY29yZS9GUyc7XG5pbXBvcnQgdHlwZSB7IFN0YXRzIH0gZnJvbSAnYnJvd3NlcmZzL2Rpc3Qvbm9kZS9nZW5lcmljL2Vtc2NyaXB0ZW5fZnMnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlFbnRyeSB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbmltcG9ydCAqIGFzIGluaSBmcm9tICdpbmknO1xuaW1wb3J0IHsgZm9ybWF0VG9Mb25nRGF0ZVRpbWUgfSBmcm9tICdAL3V0aWxzL2RhdGVzJztcblxuY29uc3QgYnl0ZXNJbktCID0gMTAyNCxcbiAgZmlsZVNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddLFxuICBob21lRGlyID0gJy8nO1xuXG50eXBlIFN0YXRzUHJvdG8gPSB7XG4gIGlzRGlyZWN0b3J5OiAoKSA9PiBib29sZWFuO1xufTtcblxudHlwZSBTaG9ydGN1dCA9IHtcbiAgdXJsOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn07XG5cbmNvbnN0IHBhcnNlU2hvcnRjdXQgPSAoZnM6IEZTTW9kdWxlLCBwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFNob3J0Y3V0PiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGZzPy5yZWFkRmlsZT8uKHBhdGgsIChfZXJyb3IsIGZpbGVCdWZmZXIpID0+IHtcbiAgICAgIGltcG9ydCgnaW5pJykudGhlbihpbmkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmkpO1xuICAgICAgfSk7XG4gICAgICAvLyBjb25zdCB7XG4gICAgICAvLyAgIEludGVybmV0U2hvcnRjdXQ6IHsgVVJMOiB1cmwsIEljb25GaWxlIH1cbiAgICAgIC8vIH0gPSBpbmkucGFyc2UoZmlsZUJ1ZmZlcj8udG9TdHJpbmcoKSB8fCAnJyk7XG5cbiAgICAgIC8vIHJlc29sdmUoeyB1cmwsIGljb246IG5ldyBVUkwoSWNvbkZpbGUpLnBhdGhuYW1lIH0pO1xuICAgIH0pO1xuICB9KTtcblxuY29uc3QgZ2V0QmVzdEljb25NYXRjaCA9IChcbiAgaWNvbjogc3RyaW5nLFxuICBpc0RpcmVjdG9yeTogYm9vbGVhbixcbiAgZXh0OiBzdHJpbmcsXG4gIGZpbGVQYXRoOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIGlmIChpY29uKSByZXR1cm4gaWNvbjtcblxuICByZXR1cm4gaXNEaXJlY3RvcnkgPyBFeHBsb3Jlckljb24gOiBnZXRGaWxlSWNvbihmaWxlUGF0aCwgZXh0KTtcbn07XG5cbmNvbnN0IGdldERpcmVjdG9yeUVudHJ5ID0gYXN5bmMgKFxuICBmczogRlNNb2R1bGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZmlsZTogc3RyaW5nLFxuICBnZXRTdGF0czogYm9vbGVhblxuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4gPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IGAke3BhdGh9JHtwYXRoID09PSBob21lRGlyID8gJycgOiAnLyd9JHtmaWxlfWAsXG4gICAgLy8gR2V0IHJpZCBvZiBpc0RpcmVjdG9yeSBhbmQganVzdCBjaGVjayBmb3IgZXh0ZW5zaW9uIChldmVudHVhbGx5IHVzaW5nIHBhdGggbG9naWMpXG4gICAgc3RhdHMgPSBnZXRTdGF0c1xuICAgICAgPyBhd2FpdCBnZXRGaWxlU3RhdChmcywgZmlsZVBhdGgpXG4gICAgICA6ICh7fSBhcyBTdGF0cyAmIFN0YXRzUHJvdG8pLFxuICAgIHsgbXRpbWUsIHNpemUgfSA9IHN0YXRzIHx8IHt9LFxuICAgIGV4dCA9IGdldEZpbGVFeHRlbnNpb24oZmlsZSksXG4gICAgaXNEaXJlY3RvcnkgPSBzdGF0cz8uaXNEaXJlY3Rvcnk/LigpIHx8IGZhbHNlLFxuICAgIGlzU2hvcnRjdXQgPSAhaXNEaXJlY3RvcnkgJiYgZmlsZS5pbmNsdWRlcygnLnVybCcpLFxuICAgIHsgdXJsLCBpY29uIH0gPSBpc1Nob3J0Y3V0XG4gICAgICA/IGF3YWl0IHBhcnNlU2hvcnRjdXQoZnMsIGZpbGVQYXRoKVxuICAgICAgOiAoe30gYXMgU2hvcnRjdXQpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogZmlsZS5yZXBsYWNlKGAuJHtleHR9YCwgJycpLFxuICAgIGZ1bGxOYW1lOiBmaWxlLFxuICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgIHVybDogdXJsICYmIGRlY29kZVVSSUNvbXBvbmVudCh1cmwpLFxuICAgIGljb246IGdldEJlc3RJY29uTWF0Y2goaWNvbiwgaXNEaXJlY3RvcnksIGV4dCwgZmlsZVBhdGgpLFxuICAgIG10aW1lOiBtdGltZSAmJiBmb3JtYXRUb0xvbmdEYXRlVGltZShtdGltZSksXG4gICAgc2l6ZTogaXNEaXJlY3RvcnkgPyAnLS0nIDogZ2V0Rm9ybWF0dGVkU2l6ZShzaXplKSxcbiAgICBraW5kOiBpc0RpcmVjdG9yeSA/ICdGb2xkZXInIDogZ2V0RmlsZUtpbmQoZXh0KVxuICB9O1xufTtcblxuY29uc3QgZ2V0RmlsZUljb24gPSAoZmlsZVBhdGg6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKGV4dCkge1xuICAgIGNhc2UgJ3BuZyc6XG4gICAgY2FzZSAnaWNvJzpcbiAgICBjYXNlICdzdmcnOlxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIGNhc2UgJ2pzZG9zJzpcbiAgICAgIHJldHVybiAnL2ljb25zL2FwcHMvZG9zLnBuZyc7XG4gICAgLy8gVE9ETzogKi5qc1xuICAgIGNhc2UgJ2pzJzpcbiAgICBjYXNlICdqc29uJzpcbiAgICBjYXNlICdtaW4uanMnOlxuICAgIGNhc2UgJ3dhc20uanMnOlxuICAgIGNhc2UgJ3dvcmtlci5qcyc6XG4gICAgICByZXR1cm4gSnNGaWxlVHlwZUljb247XG4gICAgLy8gVE9ETzogV2luYW1wIGZpbGUgdHlwZSBpY29uc1xuICAgIGNhc2UgJ21wMyc6XG4gICAgY2FzZSAnbTN1JzpcbiAgICBjYXNlICd3c3onOlxuICAgICAgcmV0dXJuICcvaWNvbnMvYXBwcy93aW5hbXAucG5nJztcbiAgICBjYXNlICdwZGYnOlxuICAgICAgcmV0dXJuIFBkZkZpbGVUeXBlSWNvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFVua25vd25GaWxlVHlwZUljb247XG4gIH1cbn07XG5cbmNvbnN0IGdldEZpbGVLaW5kID0gKGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgc3dpdGNoIChleHQpIHtcbiAgICBjYXNlICd0eHQnOlxuICAgICAgcmV0dXJuICdQbGFpbiBUZXh0JztcbiAgICBjYXNlICdqc29uJzpcbiAgICAgIHJldHVybiAnSlNPTiBEb2N1bWVudCc7XG4gICAgY2FzZSAnaWNvJzpcbiAgICAgIHJldHVybiAnSWNvbiBJbWFnZSc7XG4gICAgY2FzZSAnd29mZjInOlxuICAgICAgcmV0dXJuICdXZWIgRm9udCc7XG4gICAgY2FzZSAnemlwJzpcbiAgICAgIHJldHVybiAnWklQIEFyY2hpdmUnO1xuICAgIGNhc2UgJ21wMyc6XG4gICAgICByZXR1cm4gJ01QMyBBdWRpbyc7XG4gICAgY2FzZSAnanMnOlxuICAgICAgcmV0dXJuICdKYXZhU2NyaXB0IERvY3VtZW50JztcbiAgICBjYXNlICd3c3onOlxuICAgICAgcmV0dXJuICdXaW5hbXAgU2tpbic7XG4gICAgY2FzZSAndXJsJzpcbiAgICAgIHJldHVybiAnSW50ZXJuZXQgU2hvcnRjdXQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdldEZpbGVTdGF0ID0gKGZzOiBGU01vZHVsZSwgcGF0aDogc3RyaW5nKTogUHJvbWlzZTxTdGF0cyAmIFN0YXRzUHJvdG8+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBmcz8uc3RhdD8uKHBhdGgsIChfZXJyb3IsIHN0YXRzKSA9PiByZXNvbHZlKHN0YXRzKSkpO1xuXG5jb25zdCBnZXRGb3JtYXR0ZWRTaXplID0gKHNpemU6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmIChzaXplID09PSAwKSByZXR1cm4gJ1plcm8gYnl0ZXMnO1xuICBpZiAoc2l6ZSA9PT0gMSkgcmV0dXJuICcxIGJ5dGUnO1xuXG4gIGNvbnN0IHNpemVGYWN0b3IgPSBNYXRoLmZsb29yKE1hdGgubG9nKHNpemUpIC8gTWF0aC5sb2coYnl0ZXNJbktCKSksXG4gICAgbmV3U2l6ZSA9IE1hdGgucm91bmQoc2l6ZSAvIE1hdGgucG93KGJ5dGVzSW5LQiwgc2l6ZUZhY3RvcikpO1xuXG4gIHJldHVybiBgJHtuZXdTaXplfSAke2ZpbGVTaXplc1tzaXplRmFjdG9yXX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERpcmVjdG9yeSA9IChcbiAgZnM6IEZTTW9kdWxlLFxuICBwYXRoOiBzdHJpbmcsXG4gIGdldERldGFpbHM6IGJvb2xlYW4sXG4gIGNiOiAoZW50cmllczogQXJyYXk8RGlyZWN0b3J5RW50cnk+KSA9PiB2b2lkIC8vIERpc3BhdGNoP1xuKTogdm9pZCA9PiB7XG4gIGZzPy5yZWFkZGlyPy4ocGF0aCwgKF9lcnJvciwgY29udGVudHMgPSBbXSkgPT4ge1xuICAgIGNvbnRlbnRzLnJlZHVjZShhc3luYyAoZW50cmllcywgZmlsZSkgPT4ge1xuICAgICAgY29uc3QgbmV3RW50cmllcyA9IFtcbiAgICAgICAgLi4uKGF3YWl0IGVudHJpZXMpLFxuICAgICAgICBhd2FpdCBnZXREaXJlY3RvcnlFbnRyeShmcywgcGF0aCwgZmlsZSwgZ2V0RGV0YWlscylcbiAgICAgIF07XG5cbiAgICAgIGNiKG5ld0VudHJpZXMpO1xuXG4gICAgICByZXR1cm4gbmV3RW50cmllcztcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoW10pIGFzIFByb21pc2U8QXJyYXk8RGlyZWN0b3J5RW50cnk+Pik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZpbGVFeHRlbnNpb24gPSAocGF0aCA9ICcnKTogc3RyaW5nID0+IHtcbiAgY29uc3QgWywgLi4uZXh0XSA9IHBhdGg/LnNwbGl0Py4oJy8nKT8ucG9wPy4oKT8uc3BsaXQ/LignLicpIHx8IFtdO1xuXG4gIHJldHVybiBleHQubGVuZ3RoID49IDIgPyBleHQuc2xpY2UoZXh0Lmxlbmd0aCAtIDIpLmpvaW4oJy4nKSA6IGV4dFswXSB8fCAnJztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/files.tsx\n");

/***/ })

})