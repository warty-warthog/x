webpackHotUpdate_N_E(3,{

/***/ "./utils/dates.tsx":
false,

/***/ "./utils/files.tsx":
/*!*************************!*\
  !*** ./utils/files.tsx ***!
  \*************************/
/*! exports provided: hasExtension, getDirectory, getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasExtension\", function() { return hasExtension; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectory\", function() { return getDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileExtension\", function() { return getFileExtension; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/apps/explorer.png */ \"./public/icons/apps/explorer.png\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/types/js.svg */ \"./public/icons/types/js.svg\");\n/* harmony import */ var _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/icons/types/pdf.svg */ \"./public/icons/types/pdf.svg\");\n/* harmony import */ var _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/icons/types/unknown.svg */ \"./public/icons/types/unknown.svg\");\n/* harmony import */ var _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n// import { formatToLongDateTime } from '@/utils/dates';\nvar bytesInKB = 1024,\n    fileSizes = ['bytes', 'KB', 'MB', 'GB', 'TB'],\n    homeDir = '/';\n\nvar parseShortcut = function parseShortcut(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$readFile;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readFile = fs.readFile) === null || _fs$readFile === void 0 ? void 0 : _fs$readFile.call(fs, path, function (_error, fileBuffer) {\n      __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.t.bind(null, /*! ini */ \"./node_modules/ini/ini.js\", 7)).then(function (_ref) {\n        var ini = _ref[\"default\"];\n\n        var _ini$parse = ini.parse((fileBuffer === null || fileBuffer === void 0 ? void 0 : fileBuffer.toString()) || ''),\n            _ini$parse$InternetSh = _ini$parse.InternetShortcut,\n            url = _ini$parse$InternetSh.URL,\n            IconFile = _ini$parse$InternetSh.IconFile;\n\n        resolve({\n          url: url,\n          icon: new URL(IconFile).pathname\n        });\n      });\n    });\n  });\n};\n\nvar getBestIconMatch = function getBestIconMatch(icon, isDirectory, ext, filePath) {\n  if (icon) return icon;\n  return isDirectory ? _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default.a : getFileIcon(filePath, ext);\n};\n\nvar hasExtension = function hasExtension() {\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return getFileExtension(path) === '';\n};\n\nvar getDirectoryEntry = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fs, path, file, getStats) {\n    var filePath, isDirectory, stats, _ref3, size, ext, isShortcut, _ref4, url, icon;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            filePath = \"\".concat(path).concat(path === homeDir ? '' : '/').concat(file);\n            isDirectory = hasExtension(filePath);\n\n            if (!(isDirectory && getStats)) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 5;\n            return getFileStat(fs, filePath);\n\n          case 5:\n            _context.t0 = _context.sent;\n            _context.next = 9;\n            break;\n\n          case 8:\n            _context.t0 = {};\n\n          case 9:\n            stats = _context.t0;\n            _ref3 = stats || {};\n            size = _ref3.size;\n            ext = getFileExtension(file);\n            isShortcut = !isDirectory && file.includes('.url');\n\n            if (!isShortcut) {\n              _context.next = 20;\n              break;\n            }\n\n            _context.next = 17;\n            return parseShortcut(fs, filePath);\n\n          case 17:\n            _context.t1 = _context.sent;\n            _context.next = 21;\n            break;\n\n          case 20:\n            _context.t1 = {};\n\n          case 21:\n            _ref4 = _context.t1;\n            url = _ref4.url;\n            icon = _ref4.icon;\n            return _context.abrupt(\"return\", {\n              name: file.replace(\".\".concat(ext), ''),\n              fullName: file,\n              path: filePath,\n              url: url && decodeURIComponent(url),\n              icon: getBestIconMatch(icon, isDirectory, ext, filePath),\n              size: isDirectory ? '--' : getFormattedSize(size),\n              kind: isDirectory ? 'Folder' : getFileKind(ext)\n            });\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDirectoryEntry(_x, _x2, _x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getFileIcon = function getFileIcon(filePath, ext) {\n  switch (ext) {\n    case 'png':\n    case 'ico':\n    case 'svg':\n      return filePath;\n\n    case 'jsdos':\n      return '/icons/apps/dos.png';\n\n    case 'js':\n    case 'json':\n    case 'min.js':\n    case 'wasm.js':\n    case 'worker.js':\n      return _public_icons_types_js_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\n\n    case 'mp3':\n    case 'm3u':\n    case 'wsz':\n      return '/icons/apps/winamp.png';\n\n    case 'pdf':\n      return _public_icons_types_pdf_svg__WEBPACK_IMPORTED_MODULE_6___default.a;\n\n    default:\n      return _public_icons_types_unknown_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\n  }\n};\n\nvar getFileKind = function getFileKind(ext) {\n  switch (ext) {\n    case 'txt':\n      return 'Plain Text';\n\n    case 'json':\n      return 'JSON Document';\n\n    case 'ico':\n      return 'Icon Image';\n\n    case 'woff2':\n      return 'Web Font';\n\n    case 'zip':\n      return 'ZIP Archive';\n\n    case 'mp3':\n      return 'MP3 Audio';\n\n    case 'js':\n      return 'JavaScript Document';\n\n    case 'wsz':\n      return 'Winamp Skin';\n\n    case 'url':\n      return 'Internet Shortcut';\n\n    default:\n      return '';\n  }\n};\n\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\n\nvar getFormattedSize = function getFormattedSize(size) {\n  if (size === 0) return 'Zero bytes';\n  if (size === 1) return '1 byte';\n  var sizeFactor = Math.floor(Math.log(size) / Math.log(bytesInKB)),\n      newSize = Math.round(size / Math.pow(bytesInKB, sizeFactor));\n  return \"\".concat(newSize, \" \").concat(fileSizes[sizeFactor]);\n};\n\nvar getDirectory = function getDirectory(fs, path, getDetails, cb) {\n  var _fs$readdir;\n\n  fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, path, function (_error) {\n    var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    contents.reduce( /*#__PURE__*/function () {\n      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(entries, file) {\n        var newEntries;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.t0 = [];\n                _context2.t1 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                _context2.next = 4;\n                return entries;\n\n              case 4:\n                _context2.t2 = _context2.sent;\n                _context2.t3 = (0, _context2.t1)(_context2.t2);\n                _context2.next = 8;\n                return getDirectoryEntry(fs, path, file, getDetails);\n\n              case 8:\n                _context2.t4 = _context2.sent;\n                _context2.t5 = [_context2.t4];\n                newEntries = _context2.t0.concat.call(_context2.t0, _context2.t3, _context2.t5);\n                cb(newEntries);\n                return _context2.abrupt(\"return\", newEntries);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x5, _x6) {\n        return _ref5.apply(this, arguments);\n      };\n    }(), Promise.resolve([]));\n  });\n};\nvar getFileExtension = function getFileExtension() {\n  var _path$split, _path$split$call, _path$split$call$pop, _path$split$call$pop$, _path$split$call$pop$2;\n\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var _ref6 = (path === null || path === void 0 ? void 0 : (_path$split = path.split) === null || _path$split === void 0 ? void 0 : (_path$split$call = _path$split.call(path, '/')) === null || _path$split$call === void 0 ? void 0 : (_path$split$call$pop = _path$split$call.pop) === null || _path$split$call$pop === void 0 ? void 0 : (_path$split$call$pop$ = _path$split$call$pop.call(_path$split$call)) === null || _path$split$call$pop$ === void 0 ? void 0 : (_path$split$call$pop$2 = _path$split$call$pop$.split) === null || _path$split$call$pop$2 === void 0 ? void 0 : _path$split$call$pop$2.call(_path$split$call$pop$, '.')) || [],\n      _ref7 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref6),\n      ext = _ref7.slice(1);\n\n  return ext.length >= 2 ? ext.slice(ext.length - 2).join('.') : ext[0] || '';\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlsZXMudHN4PzljM2QiXSwibmFtZXMiOlsiYnl0ZXNJbktCIiwiZmlsZVNpemVzIiwiaG9tZURpciIsInBhcnNlU2hvcnRjdXQiLCJmcyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwiX2Vycm9yIiwiZmlsZUJ1ZmZlciIsInRoZW4iLCJpbmkiLCJwYXJzZSIsInRvU3RyaW5nIiwiSW50ZXJuZXRTaG9ydGN1dCIsInVybCIsIlVSTCIsIkljb25GaWxlIiwiaWNvbiIsInBhdGhuYW1lIiwiZ2V0QmVzdEljb25NYXRjaCIsImlzRGlyZWN0b3J5IiwiZXh0IiwiZmlsZVBhdGgiLCJFeHBsb3Jlckljb24iLCJnZXRGaWxlSWNvbiIsImhhc0V4dGVuc2lvbiIsImdldEZpbGVFeHRlbnNpb24iLCJnZXREaXJlY3RvcnlFbnRyeSIsImZpbGUiLCJnZXRTdGF0cyIsImdldEZpbGVTdGF0Iiwic3RhdHMiLCJzaXplIiwiaXNTaG9ydGN1dCIsImluY2x1ZGVzIiwibmFtZSIsInJlcGxhY2UiLCJmdWxsTmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImdldEZvcm1hdHRlZFNpemUiLCJraW5kIiwiZ2V0RmlsZUtpbmQiLCJKc0ZpbGVUeXBlSWNvbiIsIlBkZkZpbGVUeXBlSWNvbiIsIlVua25vd25GaWxlVHlwZUljb24iLCJzdGF0Iiwic2l6ZUZhY3RvciIsIk1hdGgiLCJmbG9vciIsImxvZyIsIm5ld1NpemUiLCJyb3VuZCIsInBvdyIsImdldERpcmVjdG9yeSIsImdldERldGFpbHMiLCJjYiIsInJlYWRkaXIiLCJjb250ZW50cyIsInJlZHVjZSIsImVudHJpZXMiLCJuZXdFbnRyaWVzIiwic3BsaXQiLCJwb3AiLCJsZW5ndGgiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcs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QUFBLE1BQXRCdkIsSUFBc0IsdUVBQWYsRUFBZTs7QUFBQSxjQUNsQyxDQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUUwRCxLQUFOLHFGQUFBMUQsSUFBSSxFQUFVLEdBQVYsQ0FBSiw4RkFBb0IyRCxHQUFwQix1T0FBNkJELEtBQTdCLDhHQUFxQyxHQUFyQyxNQUE2QyxFQURYO0FBQUE7QUFBQSxNQUN6Q3hDLEdBRHlDOztBQUdyRCxTQUFPQSxHQUFHLENBQUMwQyxNQUFKLElBQWMsQ0FBZCxHQUFrQjFDLEdBQUcsQ0FBQzJDLEtBQUosQ0FBVTNDLEdBQUcsQ0FBQzBDLE1BQUosR0FBYSxDQUF2QixFQUEwQkUsSUFBMUIsQ0FBK0IsR0FBL0IsQ0FBbEIsR0FBd0Q1QyxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsRUFBekU7QUFDRCxDQUpNIiwiZmlsZSI6Ii4vdXRpbHMvZmlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cGxvcmVySWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy9hcHBzL2V4cGxvcmVyLnBuZyc7XG5cbmltcG9ydCBKc0ZpbGVUeXBlSWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy90eXBlcy9qcy5zdmcnO1xuaW1wb3J0IFBkZkZpbGVUeXBlSWNvbiBmcm9tICdAL3B1YmxpYy9pY29ucy90eXBlcy9wZGYuc3ZnJztcbmltcG9ydCBVbmtub3duRmlsZVR5cGVJY29uIGZyb20gJ0AvcHVibGljL2ljb25zL3R5cGVzL3Vua25vd24uc3ZnJztcblxuaW1wb3J0IHR5cGUgeyBGU01vZHVsZSB9IGZyb20gJ2Jyb3dzZXJmcy9kaXN0L25vZGUvY29yZS9GUyc7XG5pbXBvcnQgdHlwZSB7IFN0YXRzIH0gZnJvbSAnYnJvd3NlcmZzL2Rpc3Qvbm9kZS9nZW5lcmljL2Vtc2NyaXB0ZW5fZnMnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlFbnRyeSB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbi8vIGltcG9ydCB7IGZvcm1hdFRvTG9uZ0RhdGVUaW1lIH0gZnJvbSAnQC91dGlscy9kYXRlcyc7XG5cbmNvbnN0IGJ5dGVzSW5LQiA9IDEwMjQsXG4gIGZpbGVTaXplcyA9IFsnYnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXSxcbiAgaG9tZURpciA9ICcvJztcblxudHlwZSBTdGF0c1Byb3RvID0ge1xuICBpc0RpcmVjdG9yeTogKCkgPT4gYm9vbGVhbjtcbn07XG5cbnR5cGUgU2hvcnRjdXQgPSB7XG4gIHVybDogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBwYXJzZVNob3J0Y3V0ID0gKGZzOiBGU01vZHVsZSwgcGF0aDogc3RyaW5nKTogUHJvbWlzZTxTaG9ydGN1dD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBmcz8ucmVhZEZpbGU/LihwYXRoLCAoX2Vycm9yLCBmaWxlQnVmZmVyKSA9PiB7XG4gICAgICBpbXBvcnQoJ2luaScpLnRoZW4oKHsgZGVmYXVsdDogaW5pIH0pID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIEludGVybmV0U2hvcnRjdXQ6IHsgVVJMOiB1cmwsIEljb25GaWxlIH1cbiAgICAgICAgfSA9IGluaS5wYXJzZShmaWxlQnVmZmVyPy50b1N0cmluZygpIHx8ICcnKTtcblxuICAgICAgICByZXNvbHZlKHsgdXJsLCBpY29uOiBuZXcgVVJMKEljb25GaWxlKS5wYXRobmFtZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuY29uc3QgZ2V0QmVzdEljb25NYXRjaCA9IChcbiAgaWNvbjogc3RyaW5nLFxuICBpc0RpcmVjdG9yeTogYm9vbGVhbixcbiAgZXh0OiBzdHJpbmcsXG4gIGZpbGVQYXRoOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIGlmIChpY29uKSByZXR1cm4gaWNvbjtcblxuICByZXR1cm4gaXNEaXJlY3RvcnkgPyBFeHBsb3Jlckljb24gOiBnZXRGaWxlSWNvbihmaWxlUGF0aCwgZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXNFeHRlbnNpb24gPSAocGF0aCA9ICcnKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBnZXRGaWxlRXh0ZW5zaW9uKHBhdGgpID09PSAnJztcbn07XG5cbmNvbnN0IGdldERpcmVjdG9yeUVudHJ5ID0gYXN5bmMgKFxuICBmczogRlNNb2R1bGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZmlsZTogc3RyaW5nLFxuICBnZXRTdGF0czogYm9vbGVhblxuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4gPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IGAke3BhdGh9JHtwYXRoID09PSBob21lRGlyID8gJycgOiAnLyd9JHtmaWxlfWAsXG4gICAgaXNEaXJlY3RvcnkgPSBoYXNFeHRlbnNpb24oZmlsZVBhdGgpLCAvLyBUT0RPOiBNb3JlIGVmZmljZW50IHRoYW4gY2FsbGluZyBnZXRGaWxlU3RhdFxuICAgIHN0YXRzID0gaXNEaXJlY3RvcnkgJiYgZ2V0U3RhdHNcbiAgICAgID8gYXdhaXQgZ2V0RmlsZVN0YXQoZnMsIGZpbGVQYXRoKVxuICAgICAgOiAoe30gYXMgU3RhdHMgJiBTdGF0c1Byb3RvKSxcbiAgICB7IHNpemUgfSA9IHN0YXRzIHx8IHt9LFxuICAgIGV4dCA9IGdldEZpbGVFeHRlbnNpb24oZmlsZSksXG4gICAgaXNTaG9ydGN1dCA9ICFpc0RpcmVjdG9yeSAmJiBmaWxlLmluY2x1ZGVzKCcudXJsJyksXG4gICAgeyB1cmwsIGljb24gfSA9IGlzU2hvcnRjdXRcbiAgICAgID8gYXdhaXQgcGFyc2VTaG9ydGN1dChmcywgZmlsZVBhdGgpXG4gICAgICA6ICh7fSBhcyBTaG9ydGN1dCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWxlLnJlcGxhY2UoYC4ke2V4dH1gLCAnJyksXG4gICAgZnVsbE5hbWU6IGZpbGUsXG4gICAgcGF0aDogZmlsZVBhdGgsXG4gICAgdXJsOiB1cmwgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHVybCksXG4gICAgaWNvbjogZ2V0QmVzdEljb25NYXRjaChpY29uLCBpc0RpcmVjdG9yeSwgZXh0LCBmaWxlUGF0aCksXG4gICAgc2l6ZTogaXNEaXJlY3RvcnkgPyAnLS0nIDogZ2V0Rm9ybWF0dGVkU2l6ZShzaXplKSxcbiAgICBraW5kOiBpc0RpcmVjdG9yeSA/ICdGb2xkZXInIDogZ2V0RmlsZUtpbmQoZXh0KVxuICB9O1xufTtcblxuY29uc3QgZ2V0RmlsZUljb24gPSAoZmlsZVBhdGg6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKGV4dCkge1xuICAgIGNhc2UgJ3BuZyc6XG4gICAgY2FzZSAnaWNvJzpcbiAgICBjYXNlICdzdmcnOlxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIGNhc2UgJ2pzZG9zJzpcbiAgICAgIHJldHVybiAnL2ljb25zL2FwcHMvZG9zLnBuZyc7XG4gICAgY2FzZSAnanMnOlxuICAgIGNhc2UgJ2pzb24nOlxuICAgIGNhc2UgJ21pbi5qcyc6XG4gICAgY2FzZSAnd2FzbS5qcyc6XG4gICAgY2FzZSAnd29ya2VyLmpzJzpcbiAgICAgIHJldHVybiBKc0ZpbGVUeXBlSWNvbjtcbiAgICBjYXNlICdtcDMnOlxuICAgIGNhc2UgJ20zdSc6XG4gICAgY2FzZSAnd3N6JzpcbiAgICAgIHJldHVybiAnL2ljb25zL2FwcHMvd2luYW1wLnBuZyc7XG4gICAgY2FzZSAncGRmJzpcbiAgICAgIHJldHVybiBQZGZGaWxlVHlwZUljb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBVbmtub3duRmlsZVR5cGVJY29uO1xuICB9XG59O1xuXG5jb25zdCBnZXRGaWxlS2luZCA9IChleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAoZXh0KSB7XG4gICAgY2FzZSAndHh0JzpcbiAgICAgIHJldHVybiAnUGxhaW4gVGV4dCc7XG4gICAgY2FzZSAnanNvbic6XG4gICAgICByZXR1cm4gJ0pTT04gRG9jdW1lbnQnO1xuICAgIGNhc2UgJ2ljbyc6XG4gICAgICByZXR1cm4gJ0ljb24gSW1hZ2UnO1xuICAgIGNhc2UgJ3dvZmYyJzpcbiAgICAgIHJldHVybiAnV2ViIEZvbnQnO1xuICAgIGNhc2UgJ3ppcCc6XG4gICAgICByZXR1cm4gJ1pJUCBBcmNoaXZlJztcbiAgICBjYXNlICdtcDMnOlxuICAgICAgcmV0dXJuICdNUDMgQXVkaW8nO1xuICAgIGNhc2UgJ2pzJzpcbiAgICAgIHJldHVybiAnSmF2YVNjcmlwdCBEb2N1bWVudCc7XG4gICAgY2FzZSAnd3N6JzpcbiAgICAgIHJldHVybiAnV2luYW1wIFNraW4nO1xuICAgIGNhc2UgJ3VybCc6XG4gICAgICByZXR1cm4gJ0ludGVybmV0IFNob3J0Y3V0JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXRGaWxlU3RhdCA9IChmczogRlNNb2R1bGUsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8U3RhdHMgJiBTdGF0c1Byb3RvPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gZnM/LnN0YXQ/LihwYXRoLCAoX2Vycm9yLCBzdGF0cykgPT4gcmVzb2x2ZShzdGF0cykpKTtcblxuY29uc3QgZ2V0Rm9ybWF0dGVkU2l6ZSA9IChzaXplOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBpZiAoc2l6ZSA9PT0gMCkgcmV0dXJuICdaZXJvIGJ5dGVzJztcbiAgaWYgKHNpemUgPT09IDEpIHJldHVybiAnMSBieXRlJztcblxuICBjb25zdCBzaXplRmFjdG9yID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzaXplKSAvIE1hdGgubG9nKGJ5dGVzSW5LQikpLFxuICAgIG5ld1NpemUgPSBNYXRoLnJvdW5kKHNpemUgLyBNYXRoLnBvdyhieXRlc0luS0IsIHNpemVGYWN0b3IpKTtcblxuICByZXR1cm4gYCR7bmV3U2l6ZX0gJHtmaWxlU2l6ZXNbc2l6ZUZhY3Rvcl19YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREaXJlY3RvcnkgPSAoXG4gIGZzOiBGU01vZHVsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBnZXREZXRhaWxzOiBib29sZWFuLFxuICBjYjogKGVudHJpZXM6IEFycmF5PERpcmVjdG9yeUVudHJ5PikgPT4gdm9pZFxuKTogdm9pZCA9PiB7XG4gIGZzPy5yZWFkZGlyPy4ocGF0aCwgKF9lcnJvciwgY29udGVudHMgPSBbXSkgPT4ge1xuICAgIGNvbnRlbnRzLnJlZHVjZShhc3luYyAoZW50cmllcywgZmlsZSkgPT4ge1xuICAgICAgY29uc3QgbmV3RW50cmllcyA9IFtcbiAgICAgICAgLi4uKGF3YWl0IGVudHJpZXMpLFxuICAgICAgICBhd2FpdCBnZXREaXJlY3RvcnlFbnRyeShmcywgcGF0aCwgZmlsZSwgZ2V0RGV0YWlscylcbiAgICAgIF07XG5cbiAgICAgIGNiKG5ld0VudHJpZXMpO1xuXG4gICAgICByZXR1cm4gbmV3RW50cmllcztcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoW10pIGFzIFByb21pc2U8QXJyYXk8RGlyZWN0b3J5RW50cnk+Pik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZpbGVFeHRlbnNpb24gPSAocGF0aCA9ICcnKTogc3RyaW5nID0+IHtcbiAgY29uc3QgWywgLi4uZXh0XSA9IHBhdGg/LnNwbGl0Py4oJy8nKT8ucG9wPy4oKT8uc3BsaXQ/LignLicpIHx8IFtdO1xuXG4gIHJldHVybiBleHQubGVuZ3RoID49IDIgPyBleHQuc2xpY2UoZXh0Lmxlbmd0aCAtIDIpLmpvaW4oJy4nKSA6IGV4dFswXSB8fCAnJztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/files.tsx\n");

/***/ })

})