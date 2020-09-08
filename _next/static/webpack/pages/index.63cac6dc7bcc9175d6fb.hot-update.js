webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Directory/DirectoryList.tsx":
/*!*******************************************************!*\
  !*** ./components/System/Directory/DirectoryList.tsx ***!
  \*******************************************************/
/*! exports provided: DirectoryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectoryList\", function() { return DirectoryList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Apps/Explorer.module.scss */ \"./styles/Apps/Explorer.module.scss\");\n/* harmony import */ var _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Directory/DirectoryList.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // TODO: Fix this not being DirectoryList\n\n\nvar homeDir = '/';\nvar DirectoryList = function DirectoryList(_ref) {\n  var onDoubleClick = _ref.onDoubleClick,\n      cwd = _ref.cwd,\n      entries = _ref.entries;\n  return __jsx(\"table\", {\n    className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.directory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"tr\", {\n    className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Name\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Date Modified\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"Size\"), __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Kind\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, cwd !== homeDir && __jsx(\"tr\", {\n    onClick: new _utils_events__WEBPACK_IMPORTED_MODULE_2__[\"ClickHandler\"]({\n      doubleClick: onDoubleClick('..')\n    }).clickHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"td\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"..\"), __jsx(\"td\", {\n    colSpan: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  })), entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        kind = _ref2.kind,\n        mtime = _ref2.mtime,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url,\n        size = _ref2.size,\n        fullName = _ref2.fullName;\n    return __jsx(\"tr\", {\n      key: path,\n      onClick: new _utils_events__WEBPACK_IMPORTED_MODULE_2__[\"ClickHandler\"]({\n        doubleClick: onDoubleClick(path, url, icon, name)\n      }).clickHandler // tabIndex={0} // Fix flickering / re-rendering\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, __jsx(\"td\", {\n      className: _styles_Apps_Explorer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n      title: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }\n    }, __jsx(\"figure\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, __jsx(\"figcaption\", {\n      title: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, fullName)), __jsx(\"img\", {\n      alt: name,\n      src: icon,\n      draggable: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }), fullName), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }\n    }, mtime), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, size), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }\n    }, kind));\n  })));\n};\n_c = DirectoryList;\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRGlyZWN0b3J5L0RpcmVjdG9yeUxpc3QudHN4P2VlMWYiXSwibmFtZXMiOlsiaG9tZURpciIsIkRpcmVjdG9yeUxpc3QiLCJvbkRvdWJsZUNsaWNrIiwiY3dkIiwiZW50cmllcyIsInN0eWxlcyIsImRpcmVjdG9yeSIsImVtcGhhc2lzIiwiQ2xpY2tIYW5kbGVyIiwiZG91YmxlQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJtYXAiLCJpY29uIiwia2luZCIsIm10aW1lIiwibmFtZSIsInBhdGgiLCJ1cmwiLCJzaXplIiwiZnVsbE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUF5RDs7QUFLekQ7QUFFQSxJQUFNQSxPQUFPLEdBQUcsR0FBaEI7QUFFTyxJQUFNQyxhQUFnQyxHQUFHLFNBQW5DQSxhQUFtQztBQUFBLE1BQzlDQyxhQUQ4QyxRQUM5Q0EsYUFEOEM7QUFBQSxNQUU5Q0MsR0FGOEMsUUFFOUNBLEdBRjhDO0FBQUEsTUFHOUNDLE9BSDhDLFFBRzlDQSxPQUg4QztBQUFBLFNBSzlDO0FBQU8sYUFBUyxFQUFFQyx3RUFBTSxDQUFDQyxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRCx3RUFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixDQURGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLEdBQUcsS0FBS0gsT0FBUixJQUNDO0FBQ0UsV0FBTyxFQUNMLElBQUlRLDBEQUFKLENBQWlCO0FBQ2ZDLGlCQUFXLEVBQUVQLGFBQWEsQ0FBQyxJQUFEO0FBRFgsS0FBakIsRUFFR1EsWUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBGLEVBUUU7QUFBSSxXQUFPLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FGSixFQWFHTixPQUFPLENBQUNPLEdBQVIsQ0FBWTtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsU0FBU0EsSUFBVDtBQUFBLFFBQWVDLEtBQWYsU0FBZUEsS0FBZjtBQUFBLFFBQXNCQyxJQUF0QixTQUFzQkEsSUFBdEI7QUFBQSxRQUE0QkMsSUFBNUIsU0FBNEJBLElBQTVCO0FBQUEsUUFBa0NDLEdBQWxDLFNBQWtDQSxHQUFsQztBQUFBLFFBQXVDQyxJQUF2QyxTQUF1Q0EsSUFBdkM7QUFBQSxRQUE2Q0MsUUFBN0MsU0FBNkNBLFFBQTdDO0FBQUEsV0FDWDtBQUNFLFNBQUcsRUFBRUgsSUFEUDtBQUVFLGFBQU8sRUFDTCxJQUFJUiwwREFBSixDQUFpQjtBQUNmQyxtQkFBVyxFQUFFUCxhQUFhLENBQUNjLElBQUQsRUFBT0MsR0FBUCxFQUFZTCxJQUFaLEVBQWtCRyxJQUFsQjtBQURYLE9BQWpCLEVBRUdMLFlBTFAsQ0FPRTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRTtBQUFJLGVBQVMsRUFBRUwsd0VBQU0sQ0FBQ0UsUUFBdEI7QUFBZ0MsV0FBSyxFQUFFUSxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVksV0FBSyxFQUFFQSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCSSxRQUExQixDQURGLENBREYsRUFJRTtBQUFLLFNBQUcsRUFBRUosSUFBVjtBQUFnQixTQUFHLEVBQUVILElBQXJCO0FBQTJCLGVBQVMsRUFBRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLR08sUUFMSCxDQVRGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0wsS0FBTCxDQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtJLElBQUwsQ0FqQkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTCxJQUFMLENBbEJGLENBRFc7QUFBQSxHQUFaLENBYkgsQ0FURixDQUw4QztBQUFBLENBQXpDO0tBQU1aLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5TGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0FwcHMvRXhwbG9yZXIubW9kdWxlLnNjc3MnOyAvLyBUT0RPOiBGaXggdGhpcyBub3QgYmVpbmcgRGlyZWN0b3J5TGlzdFxuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlWaWV3IH0gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9EaXJlY3RvcnkvRGlyZWN0b3J5JztcblxuaW1wb3J0IHsgQ2xpY2tIYW5kbGVyIH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuXG5jb25zdCBob21lRGlyID0gJy8nO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0b3J5TGlzdDogRkM8RGlyZWN0b3J5Vmlldz4gPSAoe1xuICBvbkRvdWJsZUNsaWNrLFxuICBjd2QsXG4gIGVudHJpZXNcbn0pID0+IChcbiAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeX0+XG4gICAgPHRoZWFkPlxuICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLmVtcGhhc2lzfT5cbiAgICAgICAgPHRkPk5hbWU8L3RkPlxuICAgICAgICA8dGQ+RGF0ZSBNb2RpZmllZDwvdGQ+XG4gICAgICAgIDx0ZD5TaXplPC90ZD5cbiAgICAgICAgPHRkPktpbmQ8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIHtjd2QgIT09IGhvbWVEaXIgJiYgKFxuICAgICAgICA8dHJcbiAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgIG5ldyBDbGlja0hhbmRsZXIoe1xuICAgICAgICAgICAgICBkb3VibGVDbGljazogb25Eb3VibGVDbGljaygnLi4nKVxuICAgICAgICAgICAgfSkuY2xpY2tIYW5kbGVyXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPHRkPi4uPC90ZD5cbiAgICAgICAgICA8dGQgY29sU3Bhbj17M30+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICl9XG4gICAgICB7ZW50cmllcy5tYXAoKHsgaWNvbiwga2luZCwgbXRpbWUsIG5hbWUsIHBhdGgsIHVybCwgc2l6ZSwgZnVsbE5hbWUgfSkgPT4gKFxuICAgICAgICA8dHJcbiAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICBuZXcgQ2xpY2tIYW5kbGVyKHtcbiAgICAgICAgICAgICAgZG91YmxlQ2xpY2s6IG9uRG91YmxlQ2xpY2socGF0aCwgdXJsLCBpY29uLCBuYW1lKVxuICAgICAgICAgICAgfSkuY2xpY2tIYW5kbGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHRhYkluZGV4PXswfSAvLyBGaXggZmxpY2tlcmluZyAvIHJlLXJlbmRlcmluZ1xuICAgICAgICA+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLmVtcGhhc2lzfSB0aXRsZT17bmFtZX0+XG4gICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiB0aXRsZT17bmFtZX0+e2Z1bGxOYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgPGltZyBhbHQ9e25hbWV9IHNyYz17aWNvbn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIHtmdWxsTmFtZX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZD57bXRpbWV9PC90ZD5cbiAgICAgICAgICA8dGQ+e3NpemV9PC90ZD5cbiAgICAgICAgICA8dGQ+e2tpbmR9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICkpfVxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Directory/DirectoryList.tsx\n");

/***/ })

})