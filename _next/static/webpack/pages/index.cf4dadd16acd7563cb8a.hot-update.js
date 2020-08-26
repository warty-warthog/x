webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      tabIndex = _ref.tabIndex;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    return windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, []);\n  return __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_1__[\"Rnd\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\" // MIN/MAX constraints\n    // Drag constraints on top only\n    ,\n    \"default\": {\n      x: 25,\n      y: 25,\n      width: 225,\n      height: 225\n    },\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    ref: windowRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faTimes\"],\n    size: \"xs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinus\"],\n    transform: {\n      size: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"fa-layers fa-fw\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCaretUp\"],\n    size: \"xs\",\n    transform: {\n      rotate: 45,\n      x: 4,\n      y: -4\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCaretUp\"],\n    size: \"xs\",\n    transform: {\n      rotate: 225,\n      x: -4,\n      y: 4\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }))))), __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJuYW1lIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicmVzaXphYmxlRWxlbWVudCIsImZvY3VzIiwic3R5bGVzIiwid2luZG93IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNsb3NlIiwiZmFUaW1lcyIsIm1pbmltaXplIiwiZmFNaW51cyIsInNpemUiLCJtYXhpbWl6ZSIsImZhQ2FyZXRVcCIsInJvdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVdPLElBQU1BLE1BQWtCLEdBQUcsU0FBckJBLE1BQXFCLE9BUTVCO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsT0FJSSxRQUpKQSxPQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFNLElBQU4sQ0FBeEI7QUFFQUMseURBQVMsQ0FBQztBQUFBOztBQUFBLFdBQU1GLFNBQU4sYUFBTUEsU0FBTiw2Q0FBTUEsU0FBUyxDQUFFRyxPQUFqQixnRkFBTSxtQkFBb0JDLGdCQUExQixvRkFBTSxzQkFBc0NELE9BQTVDLDJEQUFNLHVCQUErQ0UsS0FBL0MsRUFBTjtBQUFBLEdBQUQsRUFBK0QsRUFBL0QsQ0FBVDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSxhQUFTLEVBQUVDLGlFQUFNLENBQUNDLE1BRHBCO0FBRUUsdUJBQW1CLEVBQUMsUUFGdEI7QUFHRSxVQUFNLEVBQUMsU0FIVCxDQUlFO0FBQ0E7QUFMRjtBQU1FLGVBQVM7QUFDUEMsT0FBQyxFQUFFLEVBREk7QUFFUEMsT0FBQyxFQUFFLEVBRkk7QUFHUEMsV0FBSyxFQUFFLEdBSEE7QUFJUEMsWUFBTSxFQUFFO0FBSkQsS0FOWDtBQVlFLFlBQVEsRUFBRVosUUFaWjtBQWFFLFdBQU8sRUFBRUYsT0FiWDtBQWNFLFVBQU0sRUFBRUMsTUFkVjtBQWVFLE9BQUcsRUFBRUUsU0FmUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaUJFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtOLElBQUwsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFFWSxpRUFBTSxDQUFDTSxLQUFuQjtBQUEwQixXQUFPLEVBQUVoQixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVpQix5RUFBdkI7QUFBZ0MsUUFBSSxFQUFDLElBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxNQUFFLEVBQUVQLGlFQUFNLENBQUNRLFFBQW5CO0FBQTZCLFdBQU8sRUFBRW5CLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRW9CLHlFQUF2QjtBQUFnQyxhQUFTLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRVYsaUVBQU0sQ0FBQ1csUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDJFQUF2QjtBQUFrQyxRQUFJLEVBQUMsSUFBdkM7QUFBNEMsYUFBUyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNYLE9BQUMsRUFBRSxDQUFqQjtBQUFvQkMsT0FBQyxFQUFFLENBQUM7QUFBeEIsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVTLDJFQUF2QjtBQUFrQyxRQUFJLEVBQUMsSUFBdkM7QUFBNEMsYUFBUyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxHQUFWO0FBQWVYLE9BQUMsRUFBRSxDQUFDLENBQW5CO0FBQXNCQyxPQUFDLEVBQUU7QUFBekIsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FQRixDQUZGLENBakJGLEVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVWhCLFFBQVYsQ0FsQ0YsQ0FERixDQURGO0FBd0NELENBckRNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge1xuICBmYUNpcmNsZSxcbiAgZmFDYXJldFVwLFxuICBmYU1pbnVzLFxuICBmYVRpbWVzXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3MnO1xuXG50eXBlIFdpbmRvdyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBvbk1pbmltaXplOiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkZvY3VzOiAoKSA9PiB2b2lkO1xuICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gIHRhYkluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgV2luZG93OiBGQzxXaW5kb3c+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG5hbWUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgdGFiSW5kZXhcbn0pID0+IHtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPFJuZD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHdpbmRvd1JlZj8uY3VycmVudD8ucmVzaXphYmxlRWxlbWVudD8uY3VycmVudD8uZm9jdXMoKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPFJuZFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3d9XG4gICAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJoYW5kbGVcIlxuICAgICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgICAgLy8gTUlOL01BWCBjb25zdHJhaW50c1xuICAgICAgICAvLyBEcmFnIGNvbnN0cmFpbnRzIG9uIHRvcCBvbmx5XG4gICAgICAgIGRlZmF1bHQ9e3tcbiAgICAgICAgICB4OiAyNSxcbiAgICAgICAgICB5OiAyNSxcbiAgICAgICAgICB3aWR0aDogMjI1LFxuICAgICAgICAgIGhlaWdodDogMjI1XG4gICAgICAgIH19XG4gICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIHJlZj17d2luZG93UmVmfVxuICAgICAgPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhhbmRsZVwiPlxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXN9IHNpemU9XCJ4c1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5taW5pbWl6ZX0gb25DbGljaz17b25NaW5pbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFNaW51c30gdHJhbnNmb3JtPXt7IHNpemU6IDEwIH19IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5tYXhpbWl6ZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLWxheWVycyBmYS1md1wiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldFVwfSBzaXplPVwieHNcIiB0cmFuc2Zvcm09e3sgcm90YXRlOiA0NSwgeDogNCwgeTogLTQgfX0gLz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRVcH0gc2l6ZT1cInhzXCIgdHJhbnNmb3JtPXt7IHJvdGF0ZTogMjI1LCB4OiAtNCwgeTogNCB9fSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlPntjaGlsZHJlbn08L2FydGljbGU+XG4gICAgICA8L1JuZD5cbiAgICA8L2xpPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})