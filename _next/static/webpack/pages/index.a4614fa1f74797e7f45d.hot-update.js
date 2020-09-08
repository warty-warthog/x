webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/files.tsx":
/*!*************************!*\
  !*** ./utils/files.tsx ***!
  \*************************/
/*! exports provided: getDirectory, getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDirectory\", function() { return getDirectory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFileExtension\", function() { return getFileExtension; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/apps/explorer.png */ \"./public/icons/apps/explorer.png\");\n/* harmony import */ var _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/types/unknown.png */ \"./public/icons/types/unknown.png\");\n/* harmony import */ var _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ini */ \"./node_modules/ini/ini.js\");\n/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ini__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dates */ \"./utils/dates.tsx\");\n\n\n\n\n\n\n\n\nvar bytesInKB = 1024,\n    fileSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],\n    homeDir = '/';\n\nvar parseShortcut = function parseShortcut(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$readFile;\n\n    fs === null || fs === void 0 ? void 0 : (_fs$readFile = fs.readFile) === null || _fs$readFile === void 0 ? void 0 : _fs$readFile.call(fs, path, function (_error, fileBuffer) {\n      var _ini$parse = ini__WEBPACK_IMPORTED_MODULE_6__[\"parse\"]((fileBuffer === null || fileBuffer === void 0 ? void 0 : fileBuffer.toString()) || ''),\n          _ini$parse$InternetSh = _ini$parse.InternetShortcut,\n          url = _ini$parse$InternetSh.URL,\n          IconFile = _ini$parse$InternetSh.IconFile;\n\n      resolve({\n        url: url,\n        icon: new URL(IconFile).pathname\n      });\n    });\n  });\n};\n\nvar getDirectoryEntry = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fs, path, file, getStats) {\n    var _stats$isDirectory;\n\n    var filePath, stats, _ref2, mtime, size, ext, isDirectory, isShortcut, _ref3, url, icon;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            filePath = \"\".concat(path).concat(path === homeDir ? '' : '/').concat(file);\n\n            if (!getStats) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 4;\n            return getFileStat(fs, filePath);\n\n          case 4:\n            _context.t0 = _context.sent;\n            _context.next = 8;\n            break;\n\n          case 7:\n            _context.t0 = {};\n\n          case 8:\n            stats = _context.t0;\n            _ref2 = stats || {};\n            mtime = _ref2.mtime;\n            size = _ref2.size;\n            ext = getFileExtension(file);\n            isDirectory = (stats === null || stats === void 0 ? void 0 : (_stats$isDirectory = stats.isDirectory) === null || _stats$isDirectory === void 0 ? void 0 : _stats$isDirectory.call(stats)) || false;\n            isShortcut = !isDirectory && file.includes('.url');\n\n            if (!isShortcut) {\n              _context.next = 21;\n              break;\n            }\n\n            _context.next = 18;\n            return parseShortcut(fs, filePath);\n\n          case 18:\n            _context.t1 = _context.sent;\n            _context.next = 22;\n            break;\n\n          case 21:\n            _context.t1 = {};\n\n          case 22:\n            _ref3 = _context.t1;\n            url = _ref3.url;\n            icon = _ref3.icon;\n            return _context.abrupt(\"return\", {\n              name: file.replace(\".\".concat(ext), ''),\n              fullName: file,\n              path: filePath,\n              url: url && decodeURIComponent(url),\n              icon: icon ? icon : isDirectory ? _public_icons_apps_explorer_png__WEBPACK_IMPORTED_MODULE_4___default.a : ext === 'ico' ? path : getFileIcon(ext),\n              mtime: mtime && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_7__[\"formatToLongDateTime\"])(mtime),\n              size: isDirectory ? '--' : getFormattedSize(size),\n              kind: isDirectory ? 'Folder' : getFileKind(ext)\n            });\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getDirectoryEntry(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getFileIcon = function getFileIcon(ext) {\n  switch (ext) {\n    default:\n      return _public_icons_types_unknown_png__WEBPACK_IMPORTED_MODULE_5___default.a;\n  }\n};\n\nvar getFileKind = function getFileKind(ext) {\n  switch (ext) {\n    case 'txt':\n      return 'Plain Text';\n\n    case 'json':\n      return 'JSON Document';\n\n    case 'ico':\n      return 'Icon Image';\n\n    case 'woff2':\n      return 'Web Font';\n\n    case 'zip':\n      return 'ZIP Archive';\n\n    case 'mp3':\n      return 'MP3 Audio';\n\n    case 'js':\n      return 'JavaScript Document';\n\n    case 'wsz':\n      return 'Winamp Skin';\n\n    case 'url':\n      return 'Internet Shortcut';\n\n    default:\n      return '';\n  }\n};\n\nvar getFileStat = function getFileStat(fs, path) {\n  return new Promise(function (resolve) {\n    var _fs$stat;\n\n    return fs === null || fs === void 0 ? void 0 : (_fs$stat = fs.stat) === null || _fs$stat === void 0 ? void 0 : _fs$stat.call(fs, path, function (_error, stats) {\n      return resolve(stats);\n    });\n  });\n};\n\nvar getFormattedSize = function getFormattedSize(size) {\n  if (size === 0) return 'Zero bytes';\n  if (size === 1) return '1 byte';\n  var sizeFactor = Math.floor(Math.log(size) / Math.log(bytesInKB)),\n      newSize = Math.round(size / Math.pow(bytesInKB, sizeFactor));\n  return \"\".concat(newSize, \" \").concat(fileSizes[sizeFactor]);\n};\n\nvar getDirectory = function getDirectory(fs, path, getDetails, cb) {\n  var _fs$readdir;\n\n  fs === null || fs === void 0 ? void 0 : (_fs$readdir = fs.readdir) === null || _fs$readdir === void 0 ? void 0 : _fs$readdir.call(fs, path, function (_error) {\n    var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    contents.reduce( /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(entries, file) {\n        var newEntries;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.t0 = [];\n                _context2.t1 = _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n                _context2.next = 4;\n                return entries;\n\n              case 4:\n                _context2.t2 = _context2.sent;\n                _context2.t3 = (0, _context2.t1)(_context2.t2);\n                _context2.next = 8;\n                return getDirectoryEntry(fs, path, file, getDetails);\n\n              case 8:\n                _context2.t4 = _context2.sent;\n                _context2.t5 = [_context2.t4];\n                newEntries = _context2.t0.concat.call(_context2.t0, _context2.t3, _context2.t5);\n                cb(newEntries);\n                return _context2.abrupt(\"return\", newEntries);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x5, _x6) {\n        return _ref4.apply(this, arguments);\n      };\n    }(), Promise.resolve([]));\n  });\n};\nvar getFileExtension = function getFileExtension() {\n  var _path$split, _path$split$call, _path$split$call$pop, _path$split$call$pop$, _path$split$call$pop$2;\n\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var _ref5 = (path === null || path === void 0 ? void 0 : (_path$split = path.split) === null || _path$split === void 0 ? void 0 : (_path$split$call = _path$split.call(path, '/')) === null || _path$split$call === void 0 ? void 0 : (_path$split$call$pop = _path$split$call.pop) === null || _path$split$call$pop === void 0 ? void 0 : (_path$split$call$pop$ = _path$split$call$pop.call(_path$split$call)) === null || _path$split$call$pop$ === void 0 ? void 0 : (_path$split$call$pop$2 = _path$split$call$pop$.split) === null || _path$split$call$pop$2 === void 0 ? void 0 : _path$split$call$pop$2.call(_path$split$call$pop$, '.')) || [],\n      _ref6 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref5),\n      ext = _ref6.slice(1);\n\n  return (ext || []).join();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlsZXMudHN4PzljM2QiXSwibmFtZXMiOlsiYnl0ZXNJbktCIiwiZmlsZVNpemVzIiwiaG9tZURpciIsInBhcnNlU2hvcnRjdXQiLCJmcyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwiX2Vycm9yIiwiZmlsZUJ1ZmZlciIsImluaSIsInRvU3RyaW5nIiwiSW50ZXJuZXRTaG9ydGN1dCIsInVybCIsIlVSTCIsIkljb25GaWxlIiwiaWNvbiIsInBhdGhuYW1lIiwiZ2V0RGlyZWN0b3J5RW50cnkiLCJmaWxlIiwiZ2V0U3RhdHMiLCJmaWxlUGF0aCIsImdldEZpbGVTdGF0Iiwic3RhdHMiLCJtdGltZSIsInNpemUiLCJleHQiLCJnZXRGaWxlRXh0ZW5zaW9uIiwiaXNEaXJlY3RvcnkiLCJpc1Nob3J0Y3V0IiwiaW5jbHVkZXMiLCJuYW1lIiwicmVwbGFjZSIsImZ1bGxOYW1lIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiRXhwbG9yZXJJY29uIiwiZ2V0RmlsZUljb24iLCJmb3JtYXRUb0xvbmdEYXRlVGltZSIsImdldEZvcm1hdHRlZFNpemUiLCJraW5kIiwiZ2V0RmlsZUtpbmQiLCJVbmtub3duRmlsZVR5cGVJY29uIiwic3RhdCIsInNpemVGYWN0b3IiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJuZXdTaXplIiwicm91bmQiLCJwb3ciLCJnZXREaXJlY3RvcnkiLCJnZXREZXRhaWxzIiwiY2IiLCJyZWFkZGlyIiwiY29udGVudHMiLCJyZWR1Y2UiLCJlbnRyaWVzIiwibmV3RW50cmllcyIsInNwbGl0IiwicG9wIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLElBQWxCO0FBQUEsSUFDRUMsU0FBUyxHQUFHLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIs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RUFBS0MsSUFBTCxFQUFXZSxJQUFYLEVBQWlCZ0MsVUFBakIsQ0FIWDs7QUFBQTtBQUFBO0FBQUE7QUFDUk0sMEJBRFE7QUFNZEwsa0JBQUUsQ0FBQ0ssVUFBRCxDQUFGO0FBTmMsa0RBUVBBLFVBUk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FTR3BELE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixFQUFoQixDQVRIO0FBVUQsR0FYQyxDQUFGO0FBWUQsQ0FsQk07QUFvQkEsSUFBTXFCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBdUI7QUFBQTs7QUFBQSxNQUF0QnZCLElBQXNCLHVFQUFmLEVBQWU7O0FBQUEsY0FDbEMsQ0FBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwyQkFBQUEsSUFBSSxDQUFFc0QsS0FBTixxRkFBQXRELElBQUksRUFBVSxHQUFWLENBQUosOEZBQW9CdUQsR0FBcEIsdU9BQTZCRCxLQUE3Qiw4R0FBcUMsR0FBckMsTUFBNkMsRUFEWDtBQUFBO0FBQUEsTUFDekNoQyxHQUR5Qzs7QUFHckQsU0FBTyxDQUFDQSxHQUFHLElBQUksRUFBUixFQUFZa0MsSUFBWixFQUFQO0FBQ0QsQ0FKTSIsImZpbGUiOiIuL3V0aWxzL2ZpbGVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBsb3Jlckljb24gZnJvbSAnQC9wdWJsaWMvaWNvbnMvYXBwcy9leHBsb3Jlci5wbmcnO1xuaW1wb3J0IFVua25vd25GaWxlVHlwZUljb24gZnJvbSAnQC9wdWJsaWMvaWNvbnMvdHlwZXMvdW5rbm93bi5wbmcnO1xuXG5pbXBvcnQgdHlwZSB7IEZTTW9kdWxlIH0gZnJvbSAnYnJvd3NlcmZzL2Rpc3Qvbm9kZS9jb3JlL0ZTJztcbmltcG9ydCB0eXBlIHsgU3RhdHMgfSBmcm9tICdicm93c2VyZnMvZGlzdC9ub2RlL2dlbmVyaWMvZW1zY3JpcHRlbl9mcyc7XG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeUVudHJ5IH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5JztcblxuaW1wb3J0ICogYXMgaW5pIGZyb20gJ2luaSc7XG5pbXBvcnQgeyBmb3JtYXRUb0xvbmdEYXRlVGltZSB9IGZyb20gJ0AvdXRpbHMvZGF0ZXMnO1xuXG5jb25zdCBieXRlc0luS0IgPSAxMDI0LFxuICBmaWxlU2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ10sXG4gIGhvbWVEaXIgPSAnLyc7XG5cbnR5cGUgU3RhdHNQcm90byA9IHtcbiAgaXNEaXJlY3Rvcnk6ICgpID0+IGJvb2xlYW47XG59O1xuXG50eXBlIFNob3J0Y3V0ID0ge1xuICB1cmw6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xufTtcblxuY29uc3QgcGFyc2VTaG9ydGN1dCA9IChmczogRlNNb2R1bGUsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8U2hvcnRjdXQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgZnM/LnJlYWRGaWxlPy4ocGF0aCwgKF9lcnJvciwgZmlsZUJ1ZmZlcikgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBJbnRlcm5ldFNob3J0Y3V0OiB7IFVSTDogdXJsLCBJY29uRmlsZSB9XG4gICAgICB9ID0gaW5pLnBhcnNlKGZpbGVCdWZmZXI/LnRvU3RyaW5nKCkgfHwgJycpO1xuXG4gICAgICByZXNvbHZlKHsgdXJsLCBpY29uOiBuZXcgVVJMKEljb25GaWxlKS5wYXRobmFtZSB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbmNvbnN0IGdldERpcmVjdG9yeUVudHJ5ID0gYXN5bmMgKFxuICBmczogRlNNb2R1bGUsXG4gIHBhdGg6IHN0cmluZyxcbiAgZmlsZTogc3RyaW5nLFxuICBnZXRTdGF0czogYm9vbGVhblxuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4gPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IGAke3BhdGh9JHtwYXRoID09PSBob21lRGlyID8gJycgOiAnLyd9JHtmaWxlfWAsXG4gICAgLy8gVE9ETzogRG9uJ3QgbmVlZCBzdGF0cyBmb3IgVmlld0ljb25zIG9yIERpcmVjdG9yaWVzXG4gICAgLy8gR2V0IHJpZCBvZiBpc0RpcmVjdG9yeSBhbmQganVzdCBjaGVjayBmb3IgZXh0ZW5zaW9uIChldmVudHVhbGx5IHVzaW5nIHBhdGggbG9naWMpXG4gICAgc3RhdHMgPSBnZXRTdGF0c1xuICAgICAgPyBhd2FpdCBnZXRGaWxlU3RhdChmcywgZmlsZVBhdGgpXG4gICAgICA6ICh7fSBhcyBTdGF0cyAmIFN0YXRzUHJvdG8pLFxuICAgIHsgbXRpbWUsIHNpemUgfSA9IHN0YXRzIHx8IHt9LFxuICAgIGV4dCA9IGdldEZpbGVFeHRlbnNpb24oZmlsZSksXG4gICAgaXNEaXJlY3RvcnkgPSBzdGF0cz8uaXNEaXJlY3Rvcnk/LigpIHx8IGZhbHNlLFxuICAgIGlzU2hvcnRjdXQgPSAhaXNEaXJlY3RvcnkgJiYgZmlsZS5pbmNsdWRlcygnLnVybCcpLFxuICAgIHsgdXJsLCBpY29uIH0gPSBpc1Nob3J0Y3V0XG4gICAgICA/IGF3YWl0IHBhcnNlU2hvcnRjdXQoZnMsIGZpbGVQYXRoKVxuICAgICAgOiAoe30gYXMgU2hvcnRjdXQpO1xuLy8gY29uc29sZS5sb2coe1xuLy8gICBuYW1lOiBmaWxlLnJlcGxhY2UoYC4ke2V4dH1gLCAnJyksXG4vLyAgIGZ1bGxOYW1lOiBmaWxlLFxuLy8gICBwYXRoOiBmaWxlUGF0aCxcbi8vICAgdXJsOiB1cmwgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHVybCksXG4vLyAgIGljb246IGljb24gPyBpY29uIDogaXNEaXJlY3RvcnkgPyBFeHBsb3Jlckljb24gOiBleHQgPT09ICdpY28nID8gdXJsIDogZ2V0RmlsZUljb24oZXh0KSxcbi8vICAgbXRpbWU6IG10aW1lICYmIGZvcm1hdFRvTG9uZ0RhdGVUaW1lKG10aW1lKSxcbi8vICAgc2l6ZTogaXNEaXJlY3RvcnkgPyAnLS0nIDogZ2V0Rm9ybWF0dGVkU2l6ZShzaXplKSxcbi8vICAga2luZDogaXNEaXJlY3RvcnkgPyAnRm9sZGVyJyA6IGdldEZpbGVLaW5kKGV4dClcbi8vIH0pXG4gIHJldHVybiB7XG4gICAgbmFtZTogZmlsZS5yZXBsYWNlKGAuJHtleHR9YCwgJycpLFxuICAgIGZ1bGxOYW1lOiBmaWxlLFxuICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgIHVybDogdXJsICYmIGRlY29kZVVSSUNvbXBvbmVudCh1cmwpLFxuICAgIGljb246IGljb24gPyBpY29uIDogaXNEaXJlY3RvcnkgPyBFeHBsb3Jlckljb24gOiBleHQgPT09ICdpY28nID8gcGF0aCA6IGdldEZpbGVJY29uKGV4dCksXG4gICAgbXRpbWU6IG10aW1lICYmIGZvcm1hdFRvTG9uZ0RhdGVUaW1lKG10aW1lKSxcbiAgICBzaXplOiBpc0RpcmVjdG9yeSA/ICctLScgOiBnZXRGb3JtYXR0ZWRTaXplKHNpemUpLFxuICAgIGtpbmQ6IGlzRGlyZWN0b3J5ID8gJ0ZvbGRlcicgOiBnZXRGaWxlS2luZChleHQpXG4gIH07XG59O1xuXG5jb25zdCBnZXRGaWxlSWNvbiA9IChleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAoZXh0KSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBVbmtub3duRmlsZVR5cGVJY29uO1xuICB9XG59O1xuXG5jb25zdCBnZXRGaWxlS2luZCA9IChleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAoZXh0KSB7XG4gICAgY2FzZSAndHh0JzpcbiAgICAgIHJldHVybiAnUGxhaW4gVGV4dCc7XG4gICAgY2FzZSAnanNvbic6XG4gICAgICByZXR1cm4gJ0pTT04gRG9jdW1lbnQnO1xuICAgIGNhc2UgJ2ljbyc6XG4gICAgICByZXR1cm4gJ0ljb24gSW1hZ2UnO1xuICAgIGNhc2UgJ3dvZmYyJzpcbiAgICAgIHJldHVybiAnV2ViIEZvbnQnO1xuICAgIGNhc2UgJ3ppcCc6XG4gICAgICByZXR1cm4gJ1pJUCBBcmNoaXZlJztcbiAgICBjYXNlICdtcDMnOlxuICAgICAgcmV0dXJuICdNUDMgQXVkaW8nO1xuICAgIGNhc2UgJ2pzJzpcbiAgICAgIHJldHVybiAnSmF2YVNjcmlwdCBEb2N1bWVudCc7XG4gICAgY2FzZSAnd3N6JzpcbiAgICAgIHJldHVybiAnV2luYW1wIFNraW4nO1xuICAgIGNhc2UgJ3VybCc6XG4gICAgICByZXR1cm4gJ0ludGVybmV0IFNob3J0Y3V0JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZXRGaWxlU3RhdCA9IChmczogRlNNb2R1bGUsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8U3RhdHMgJiBTdGF0c1Byb3RvPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gZnM/LnN0YXQ/LihwYXRoLCAoX2Vycm9yLCBzdGF0cykgPT4gcmVzb2x2ZShzdGF0cykpKTtcblxuY29uc3QgZ2V0Rm9ybWF0dGVkU2l6ZSA9IChzaXplOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBpZiAoc2l6ZSA9PT0gMCkgcmV0dXJuICdaZXJvIGJ5dGVzJztcbiAgaWYgKHNpemUgPT09IDEpIHJldHVybiAnMSBieXRlJztcblxuICBjb25zdCBzaXplRmFjdG9yID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzaXplKSAvIE1hdGgubG9nKGJ5dGVzSW5LQikpLFxuICAgIG5ld1NpemUgPSBNYXRoLnJvdW5kKHNpemUgLyBNYXRoLnBvdyhieXRlc0luS0IsIHNpemVGYWN0b3IpKTtcblxuICByZXR1cm4gYCR7bmV3U2l6ZX0gJHtmaWxlU2l6ZXNbc2l6ZUZhY3Rvcl19YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREaXJlY3RvcnkgPSAoXG4gIGZzOiBGU01vZHVsZSxcbiAgcGF0aDogc3RyaW5nLFxuICBnZXREZXRhaWxzOiBib29sZWFuLFxuICBjYjogKGVudHJpZXM6IEFycmF5PERpcmVjdG9yeUVudHJ5PikgPT4gdm9pZCAvLyBEaXNwYXRjaD9cbik6IHZvaWQgPT4ge1xuICBmcz8ucmVhZGRpcj8uKHBhdGgsIChfZXJyb3IsIGNvbnRlbnRzID0gW10pID0+IHtcbiAgICBjb250ZW50cy5yZWR1Y2UoYXN5bmMgKGVudHJpZXMsIGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0VudHJpZXMgPSBbXG4gICAgICAgIC4uLihhd2FpdCBlbnRyaWVzKSxcbiAgICAgICAgYXdhaXQgZ2V0RGlyZWN0b3J5RW50cnkoZnMsIHBhdGgsIGZpbGUsIGdldERldGFpbHMpXG4gICAgICBdO1xuXG4gICAgICBjYihuZXdFbnRyaWVzKTtcblxuICAgICAgcmV0dXJuIG5ld0VudHJpZXM7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKFtdKSBhcyBQcm9taXNlPEFycmF5PERpcmVjdG9yeUVudHJ5Pj4pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlRXh0ZW5zaW9uID0gKHBhdGggPSAnJyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFssIC4uLmV4dF0gPSBwYXRoPy5zcGxpdD8uKCcvJyk/LnBvcD8uKCk/LnNwbGl0Py4oJy4nKSB8fCBbXTtcblxuICByZXR1cm4gKGV4dCB8fCBbXSkuam9pbigpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/files.tsx\n");

/***/ })

})