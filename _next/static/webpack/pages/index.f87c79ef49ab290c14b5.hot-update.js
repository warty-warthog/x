webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Directory/DirectoryList.tsx":
/*!*******************************************************!*\
  !*** ./components/System/Directory/DirectoryList.tsx ***!
  \*******************************************************/
/*! exports provided: DirectoryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryList\", function() { return DirectoryList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Apps/Explorer.module.scss */ \"./styles/Apps/Explorer.module.scss\");\n/* harmony import */ var _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryList.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // TODO: Fix this not being DirectoryList\n\n\nvar homeDir = '/';\nvar DirectoryList = function DirectoryList(_ref) {\n  _s();\n\n  var onDoubleClick = _ref.onDoubleClick,\n      cwd = _ref.cwd,\n      entries = _ref.entries;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  return __jsx(\"table\", {\n    className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.directory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"tr\", {\n    className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Name\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"Date Modified\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"Size\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, \"Kind\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, cwd !== homeDir && __jsx(\"tr\", {\n    onDoubleClick: onDoubleClick('..'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"..\"), __jsx(\"td\", {\n    colSpan: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        kind = _ref2.kind,\n        mtime = _ref2.mtime,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url,\n        size = _ref2.size,\n        fullName = _ref2.fullName;\n    return __jsx(\"tr\", {\n      key: path,\n      className: selected === path ? _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected : '',\n      onClick: function onClick() {\n        return setSelected(path || '');\n      },\n      onDoubleClick: onDoubleClick(path, url, icon, name) // tabIndex={0} // TODO: Why does focus flicker?\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }, __jsx(\"td\", {\n      className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }), fullName), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, mtime), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 15\n      }\n    }, size), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, kind));\n  })));\n};\n\n_s(DirectoryList, \"18RT5nPrBTPIyYXVolwVU2o0VQI=\");\n\n_c = DirectoryList;\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUxpc3QudHN4P2VlMWYiXSwibmFtZXMiOlsiaG9tZURpciIsIkRpcmVjdG9yeUxpc3QiLCJvbkRvdWJsZUNsaWNrIiwiY3dkIiwiZW50cmllcyIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInN0eWxlcyIsImRpcmVjdG9yeSIsImVtcGhhc2lzIiwibWFwIiwiaWNvbiIsImtpbmQiLCJtdGltZSIsIm5hbWUiLCJwYXRoIiwidXJsIiwic2l6ZSIsImZ1bGxOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FBeUQ7O0FBS3pEO0FBRUEsSUFBTUEsT0FBTyxHQUFHLEdBQWhCO0FBRU8sSUFBTUMsYUFBZ0MsR0FBRyxTQUFuQ0EsYUFBbUMsT0FJMUM7QUFBQTs7QUFBQSxNQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEM7QUFBQSxNQUNHQyxRQURIO0FBQUEsTUFDYUMsV0FEYjs7QUFHSixTQUNFO0FBQU8sYUFBUyxFQUFFQyx3RUFBTSxDQUFDQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRCx3RUFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixDQURGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLEdBQUcsS0FBS0gsT0FBUixJQUNDO0FBQUksaUJBQWEsRUFBRUUsYUFBYSxDQUFDLElBQUQsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQUksV0FBTyxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkosRUFPR0UsT0FBTyxDQUFDTyxHQUFSLENBQ0M7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlQyxLQUFmLFNBQWVBLEtBQWY7QUFBQSxRQUFzQkMsSUFBdEIsU0FBc0JBLElBQXRCO0FBQUEsUUFBNEJDLElBQTVCLFNBQTRCQSxJQUE1QjtBQUFBLFFBQWtDQyxHQUFsQyxTQUFrQ0EsR0FBbEM7QUFBQSxRQUF1Q0MsSUFBdkMsU0FBdUNBLElBQXZDO0FBQUEsUUFBNkNDLFFBQTdDLFNBQTZDQSxRQUE3QztBQUFBLFdBQ0U7QUFDRSxTQUFHLEVBQUVILElBRFA7QUFFRSxlQUFTLEVBQUVWLFFBQVEsS0FBS1UsSUFBYixHQUFvQlIsd0VBQU0sQ0FBQ0YsUUFBM0IsR0FBc0MsRUFGbkQ7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNQyxXQUFXLENBQUNTLElBQUksSUFBSSxFQUFULENBQWpCO0FBQUEsT0FIWDtBQUlFLG1CQUFhLEVBQUVkLGFBQWEsQ0FBQ2MsSUFBRCxFQUFPQyxHQUFQLEVBQVlMLElBQVosRUFBa0JHLElBQWxCLENBSjlCLENBS0U7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0U7QUFBSSxlQUFTLEVBQUVQLHdFQUFNLENBQUNFLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUssSUFBVjtBQUFnQixTQUFHLEVBQUVILElBQXJCO0FBQTJCLGVBQVMsRUFBRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFR08sUUFGSCxDQVBGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTCxLQUFMLENBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtJLElBQUwsQ0FaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0wsSUFBTCxDQWJGLENBREY7QUFBQSxHQURELENBUEgsQ0FURixDQURGO0FBdUNELENBOUNNOztHQUFNWixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BcHBzL0V4cGxvcmVyLm1vZHVsZS5zY3NzJzsgLy8gVE9ETzogRml4IHRoaXMgbm90IGJlaW5nIERpcmVjdG9yeUxpc3RcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRGlyZWN0b3J5VmlldyB9IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeSc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBob21lRGlyID0gJy8nO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0b3J5TGlzdDogRkM8RGlyZWN0b3J5Vmlldz4gPSAoe1xuICBvbkRvdWJsZUNsaWNrLFxuICBjd2QsXG4gIGVudHJpZXNcbn0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0b3J5fT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLmVtcGhhc2lzfT5cbiAgICAgICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICAgICAgPHRkPkRhdGUgTW9kaWZpZWQ8L3RkPlxuICAgICAgICAgIDx0ZD5TaXplPC90ZD5cbiAgICAgICAgICA8dGQ+S2luZDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7Y3dkICE9PSBob21lRGlyICYmIChcbiAgICAgICAgICA8dHIgb25Eb3VibGVDbGljaz17b25Eb3VibGVDbGljaygnLi4nKX0+XG4gICAgICAgICAgICA8dGQ+Li48L3RkPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKX1cbiAgICAgICAge2VudHJpZXMubWFwKFxuICAgICAgICAgICh7IGljb24sIGtpbmQsIG10aW1lLCBuYW1lLCBwYXRoLCB1cmwsIHNpemUsIGZ1bGxOYW1lIH0pID0+IChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IHBhdGggPyBzdHlsZXMuc2VsZWN0ZWQgOiAnJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQocGF0aCB8fCAnJyl9XG4gICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e29uRG91YmxlQ2xpY2socGF0aCwgdXJsLCBpY29uLCBuYW1lKX1cbiAgICAgICAgICAgICAgLy8gdGFiSW5kZXg9ezB9IC8vIFRPRE86IFdoeSBkb2VzIGZvY3VzIGZsaWNrZXI/XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5lbXBoYXNpc30+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9e25hbWV9IHNyYz17aWNvbn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICB7ZnVsbE5hbWV9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bXRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntzaXplfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57a2luZH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryList.tsx\n");

/***/ })

})