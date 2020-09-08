webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Directory/Directory.tsx":
/*!***************************************************!*\
  !*** ./components/System/Directory/Directory.tsx ***!
  \***************************************************/
/*! exports provided: View, Directory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Directory\", function() { return Directory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_System_Directory_DirectoryIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/System/Directory/DirectoryIcons */ \"./components/System/Directory/DirectoryIcons.tsx\");\n/* harmony import */ var _components_System_Directory_DirectoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Directory/DirectoryList */ \"./components/System/Directory/DirectoryList.tsx\");\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/files */ \"./utils/files.tsx\");\n/* harmony import */ var _contexts_Files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/Files */ \"./contexts/Files.tsx\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/Directory.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar View;\n\n(function (View) {\n  View[View[\"Icons\"] = 0] = \"Icons\";\n  View[View[\"List\"] = 1] = \"List\";\n})(View || (View = {}));\n\nvar isDirectory = function isDirectory() {\n  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log(Object(_utils_files__WEBPACK_IMPORTED_MODULE_3__[\"getFileExtension\"])(path));\n  return !Object(_utils_files__WEBPACK_IMPORTED_MODULE_3__[\"getFileExtension\"])(path);\n};\n\nvar Directory = function Directory(_ref) {\n  _s();\n\n  var path = _ref.path,\n      view = _ref.view;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(path),\n      cwd = _useState[0],\n      cd = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      entries = _useState2[0],\n      setEntries = _useState2[1],\n      fs = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Files__WEBPACK_IMPORTED_MODULE_4__[\"FilesContext\"]),\n      _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_5__[\"AppsContext\"]),\n      open = _useContext.open,\n      onDoubleClick = function onDoubleClick(path, url) {\n    var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n    return function () {\n      if (!url && isDirectory(path)) {// cd(path === '..' ? resolve(cwd, '..') : path);\n      } else {\n        // TODO: Don't allow opening app twice\n        open === null || open === void 0 ? void 0 : open(url || path || '', icon, name);\n      }\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_utils_files__WEBPACK_IMPORTED_MODULE_3__[\"getDirectory\"])(fs, cwd, view === View.List, setEntries);\n  }, [fs, cwd]);\n\n  switch (view) {\n    case View.Icons:\n      return __jsx(_components_System_Directory_DirectoryIcons__WEBPACK_IMPORTED_MODULE_1__[\"DirectoryIcons\"], {\n        entries: entries,\n        onDoubleClick: onDoubleClick,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 14\n        }\n      });\n\n    case View.List:\n      return __jsx(_components_System_Directory_DirectoryList__WEBPACK_IMPORTED_MODULE_2__[\"DirectoryList\"], {\n        entries: entries,\n        onDoubleClick: onDoubleClick,\n        cwd: cwd,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }\n      });\n\n    default:\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 14\n        }\n      }, \"Unknown View Type\");\n  }\n};\n\n_s(Directory, \"TcI2jsVgSuthAFxegF661hw7XRE=\");\n\n_c = Directory;\n\nvar _c;\n\n$RefreshReg$(_c, \"Directory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeS50c3g/ZDZkNSJdLCJuYW1lcyI6WyJWaWV3IiwiaXNEaXJlY3RvcnkiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImdldEZpbGVFeHRlbnNpb24iLCJEaXJlY3RvcnkiLCJ2aWV3IiwidXNlU3RhdGUiLCJjd2QiLCJjZCIsImVudHJpZXMiLCJzZXRFbnRyaWVzIiwiZnMiLCJ1c2VDb250ZXh0IiwiRmlsZXNDb250ZXh0IiwiQXBwc0NvbnRleHQiLCJvcGVuIiwib25Eb3VibGVDbGljayIsInVybCIsImljb24iLCJuYW1lIiwidXNlRWZmZWN0IiwiZ2V0RGlyZWN0b3J5IiwiTGlzdCIsIkljb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBS0EsSUFBWjs7V0FBWUEsSTtBQUFBQSxNLENBQUFBLEk7QUFBQUEsTSxDQUFBQSxJO0dBQUFBLEksS0FBQUEsSTs7QUE0QlosSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBZTtBQUFBLE1BQWRDLElBQWMsdUVBQVAsRUFBTztBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlDLHFFQUFnQixDQUFDSCxJQUFELENBQTVCO0FBQ0EsU0FBTyxDQUFDRyxxRUFBZ0IsQ0FBQ0gsSUFBRCxDQUF4QjtBQUNELENBSEQ7O0FBS08sSUFBTUksU0FHWCxHQUFHLFNBSFFBLFNBR1IsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkosSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEssSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDTixJQUFELENBREg7QUFBQSxNQUNoQk8sR0FEZ0I7QUFBQSxNQUNYQyxFQURXO0FBQUEsbUJBRUdGLHNEQUFRLENBQXdCLEVBQXhCLENBRlg7QUFBQSxNQUVwQkcsT0FGb0I7QUFBQSxNQUVYQyxVQUZXO0FBQUEsTUFHckJDLEVBSHFCLEdBR2hCQyx3REFBVSxDQUFDQyw0REFBRCxDQUhNO0FBQUEsb0JBSVZELHdEQUFVLENBQUNFLDBEQUFELENBSkE7QUFBQSxNQUluQkMsSUFKbUIsZUFJbkJBLElBSm1CO0FBQUEsTUFLckJDLGFBTHFCLEdBS0wsU0FBaEJBLGFBQWdCLENBQUNoQixJQUFELEVBQWdCaUIsR0FBaEI7QUFBQSxRQUE4QkMsSUFBOUIsdUVBQXFDLEVBQXJDO0FBQUEsUUFBeUNDLElBQXpDLHVFQUFnRCxFQUFoRDtBQUFBLFdBQXVELFlBQU07QUFDM0UsVUFBSSxDQUFDRixHQUFELElBQVFsQixXQUFXLENBQUNDLElBQUQsQ0FBdkIsRUFBK0IsQ0FDN0I7QUFDRCxPQUZELE1BRU87QUFDTDtBQUNBZSxZQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBR0UsR0FBRyxJQUFJakIsSUFBUCxJQUFlLEVBQWxCLEVBQXNCa0IsSUFBdEIsRUFBNEJDLElBQTVCLENBQUo7QUFDRDtBQUNGLEtBUGU7QUFBQSxHQUxLOztBQWN2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHFFQUFZLENBQUNWLEVBQUQsRUFBS0osR0FBTCxFQUFVRixJQUFJLEtBQUtQLElBQUksQ0FBQ3dCLElBQXhCLEVBQThCWixVQUE5QixDQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNDLEVBQUQsRUFBS0osR0FBTCxDQUZNLENBQVQ7O0FBSUEsVUFBUUYsSUFBUjtBQUNFLFNBQUtQLElBQUksQ0FBQ3lCLEtBQVY7QUFDRSxhQUFPLE1BQUMsMEZBQUQ7QUFBZ0IsZUFBTyxFQUFFZCxPQUF6QjtBQUFrQyxxQkFBYSxFQUFFTyxhQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBS2xCLElBQUksQ0FBQ3dCLElBQVY7QUFDRSxhQUNFLE1BQUMsd0ZBQUQ7QUFDRSxlQUFPLEVBQUViLE9BRFg7QUFFRSxxQkFBYSxFQUFFTyxhQUZqQjtBQUdFLFdBQUcsRUFBRVQsR0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7O0FBT0Y7QUFDRSxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQVA7QUFaSjtBQWNELENBbkNNOztHQUFNSCxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpcmVjdG9yeUljb25zIH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5SWNvbnMnO1xuaW1wb3J0IHsgRGlyZWN0b3J5TGlzdCB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUxpc3QnO1xuaW1wb3J0IHsgZ2V0RGlyZWN0b3J5LCBnZXRGaWxlRXh0ZW5zaW9uIH0gZnJvbSAnQC91dGlscy9maWxlcyc7XG5pbXBvcnQgeyBGaWxlc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0ZpbGVzJztcbmltcG9ydCB7IEFwcHNDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcblxuZXhwb3J0IGVudW0gVmlldyB7XG4gIEljb25zLFxuICBMaXN0XG59XG5cbmV4cG9ydCB0eXBlIERpcmVjdG9yeUVudHJ5ID0ge1xuICBpY29uOiBzdHJpbmc7XG4gIGtpbmQ6IHN0cmluZztcbiAgbXRpbWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIHNpemU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlWaWV3ID0ge1xuICBlbnRyaWVzOiBBcnJheTxEaXJlY3RvcnlFbnRyeT47XG4gIGN3ZD86IHN0cmluZztcbiAgLy8gVE9ETzogR2VuZXJpYyB0eXBlIGRhdGE/IFNob3J0Y3V0P1xuICBvbkRvdWJsZUNsaWNrOiAoXG4gICAgcGF0aD86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgaWNvbj86IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nXG4gICkgPT4gKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGlzRGlyZWN0b3J5ID0gKHBhdGggPSAnJykgPT4ge1xuICBjb25zb2xlLmxvZyhnZXRGaWxlRXh0ZW5zaW9uKHBhdGgpKVxuICByZXR1cm4gIWdldEZpbGVFeHRlbnNpb24ocGF0aCk7XG59O1xuXG5leHBvcnQgY29uc3QgRGlyZWN0b3J5OiBGQzx7XG4gIHBhdGg6IHN0cmluZztcbiAgdmlldzogVmlldztcbn0+ID0gKHsgcGF0aCwgdmlldyB9KSA9PiB7XG4gIGNvbnN0IFtjd2QsIGNkXSA9IHVzZVN0YXRlKHBhdGgpLFxuICAgIFtlbnRyaWVzLCBzZXRFbnRyaWVzXSA9IHVzZVN0YXRlPEFycmF5PERpcmVjdG9yeUVudHJ5Pj4oW10pLFxuICAgIGZzID0gdXNlQ29udGV4dChGaWxlc0NvbnRleHQpLCAvLyBUT0RPOiBHZXQgcGF0aCB3b3JraW5nXG4gICAgeyBvcGVuIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBvbkRvdWJsZUNsaWNrID0gKHBhdGg/OiBzdHJpbmcsIHVybD86IHN0cmluZywgaWNvbiA9ICcnLCBuYW1lID0gJycpID0+ICgpID0+IHtcbiAgICAgIGlmICghdXJsICYmIGlzRGlyZWN0b3J5KHBhdGgpKSB7XG4gICAgICAgIC8vIGNkKHBhdGggPT09ICcuLicgPyByZXNvbHZlKGN3ZCwgJy4uJykgOiBwYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IERvbid0IGFsbG93IG9wZW5pbmcgYXBwIHR3aWNlXG4gICAgICAgIG9wZW4/Lih1cmwgfHwgcGF0aCB8fCAnJywgaWNvbiwgbmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERpcmVjdG9yeShmcywgY3dkLCB2aWV3ID09PSBWaWV3Lkxpc3QsIHNldEVudHJpZXMpO1xuICB9LCBbZnMsIGN3ZF0pO1xuXG4gIHN3aXRjaCAodmlldykge1xuICAgIGNhc2UgVmlldy5JY29uczpcbiAgICAgIHJldHVybiA8RGlyZWN0b3J5SWNvbnMgZW50cmllcz17ZW50cmllc30gb25Eb3VibGVDbGljaz17b25Eb3VibGVDbGlja30gLz47XG4gICAgY2FzZSBWaWV3Lkxpc3Q6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGlyZWN0b3J5TGlzdFxuICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XG4gICAgICAgICAgb25Eb3VibGVDbGljaz17b25Eb3VibGVDbGlja31cbiAgICAgICAgICBjd2Q9e2N3ZH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiA8cD5Vbmtub3duIFZpZXcgVHlwZTwvcD47XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Directory/Directory.tsx\n");

/***/ })

})