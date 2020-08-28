webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      tabIndex = _ref.tabIndex;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    return windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, []);\n  return (// TODO: BG required for transparent issue?\n    // TODO: Z-index on windows\n    // TODO: Why did foreground not work? maybe stop using focus?\n    __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }\n    }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n      className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n      dragHandleClassName: \"handle\",\n      cancel: \".cancel\" // MIN/MAX constraints\n      // Drag constraints on top only\n      ,\n      \"default\": {\n        x: 25,\n        y: 25,\n        width: 320,\n        height: 224\n      },\n      tabIndex: tabIndex,\n      onFocus: onFocus,\n      onBlur: onBlur,\n      ref: windowRef,\n      lockAspectRatio: true // TODO: Only for some windows like DOS\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }\n    }, __jsx(\"header\", {\n      className: \"handle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }\n    }, __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, name), __jsx(\"nav\", {\n      className: \"cancel\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }\n    }, __jsx(\"button\", {\n      id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n      onClick: onClose,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n      size: \"xs\",\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 15\n      }\n    })), __jsx(\"button\", {\n      id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n      onClick: onMinimize,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n      size: \"xs\",\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    })), __jsx(\"button\", {\n      id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n      size: \"xs\",\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 15\n      }\n    })))), __jsx(\"article\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }\n    }, children)))\n  );\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJuYW1lIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicmVzaXphYmxlRWxlbWVudCIsImZvY3VzIiwic3R5bGVzIiwid2luZG93IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNsb3NlIiwiZmFUaW1lcyIsIm1pbmltaXplIiwiZmFNaW51cyIsIm1heGltaXplIiwiZmFQbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBV08sSUFBTUEsTUFBa0IsR0FBRyxTQUFyQkEsTUFBcUIsT0FRNUI7QUFBQTs7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxPQUdJLFFBSEpBLE9BR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7QUFDSixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQU0sSUFBTixDQUF4QjtBQUVBQyx5REFBUyxDQUFDO0FBQUE7O0FBQUEsV0FBTUYsU0FBTixhQUFNQSxTQUFOLDZDQUFNQSxTQUFTLENBQUVHLE9BQWpCLGdGQUFNLG1CQUFvQkMsZ0JBQTFCLG9GQUFNLHNCQUFzQ0QsT0FBNUMsMkRBQU0sdUJBQStDRSxLQUEvQyxFQUFOO0FBQUEsR0FBRCxFQUErRCxFQUEvRCxDQUFUO0FBRUEsU0FDRTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2Q0FBRDtBQUNFLGVBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsTUFEcEI7QUFFRSx5QkFBbUIsRUFBQyxRQUZ0QjtBQUdFLFlBQU0sRUFBQyxTQUhULENBSUU7QUFDQTtBQUxGO0FBTUUsaUJBQVM7QUFDUEMsU0FBQyxFQUFFLEVBREk7QUFFUEMsU0FBQyxFQUFFLEVBRkk7QUFHUEMsYUFBSyxFQUFFLEdBSEE7QUFJUEMsY0FBTSxFQUFFO0FBSkQsT0FOWDtBQVlFLGNBQVEsRUFBRVosUUFaWjtBQWFFLGFBQU8sRUFBRUYsT0FiWDtBQWNFLFlBQU0sRUFBRUMsTUFkVjtBQWVFLFNBQUcsRUFBRUUsU0FmUDtBQWdCRSxxQkFBZSxFQUFFLElBaEJuQixDQWdCeUI7QUFoQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FrQkU7QUFBUSxlQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS04sSUFBTCxDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxRQUFFLEVBQUVZLGlFQUFNLENBQUNNLEtBQW5CO0FBQTBCLGFBQU8sRUFBRWhCLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhFQUFEO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUEyQixVQUFJLEVBQUVpQix5RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFRLFFBQUUsRUFBRVAsaUVBQU0sQ0FBQ1EsUUFBbkI7QUFBNkIsYUFBTyxFQUFFbkIsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOEVBQUQ7QUFBaUIsVUFBSSxFQUFDLElBQXRCO0FBQTJCLFVBQUksRUFBRW9CLHlFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FKRixFQU9FO0FBQVEsUUFBRSxFQUFFVCxpRUFBTSxDQUFDVSxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUMsSUFBdEI7QUFBMkIsVUFBSSxFQUFFQyx3RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUEYsQ0FGRixDQWxCRixFQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVV4QixRQUFWLENBaENGLENBREY7QUFKRjtBQXlDRCxDQXRETTs7R0FBTUQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBsdXMsIGZhTWludXMsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG50eXBlIFdpbmRvdyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBvbk1pbmltaXplOiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkZvY3VzOiAoKSA9PiB2b2lkO1xuICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gIHRhYkluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgV2luZG93OiBGQzxXaW5kb3c+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG5hbWUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgdGFiSW5kZXhcbn0pID0+IHtcbiAgY29uc3Qgd2luZG93UmVmID0gdXNlUmVmPFJuZD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHdpbmRvd1JlZj8uY3VycmVudD8ucmVzaXphYmxlRWxlbWVudD8uY3VycmVudD8uZm9jdXMoKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gVE9ETzogQkcgcmVxdWlyZWQgZm9yIHRyYW5zcGFyZW50IGlzc3VlP1xuICAgIC8vIFRPRE86IFotaW5kZXggb24gd2luZG93c1xuICAgIC8vIFRPRE86IFdoeSBkaWQgZm9yZWdyb3VuZCBub3Qgd29yaz8gbWF5YmUgc3RvcCB1c2luZyBmb2N1cz9cbiAgICA8bGk+XG4gICAgICA8Um5kXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd31cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICAgIGNhbmNlbD1cIi5jYW5jZWxcIlxuICAgICAgICAvLyBNSU4vTUFYIGNvbnN0cmFpbnRzXG4gICAgICAgIC8vIERyYWcgY29uc3RyYWludHMgb24gdG9wIG9ubHlcbiAgICAgICAgZGVmYXVsdD17e1xuICAgICAgICAgIHg6IDI1LFxuICAgICAgICAgIHk6IDI1LFxuICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgaGVpZ2h0OiAyMjRcbiAgICAgICAgfX1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgcmVmPXt3aW5kb3dSZWZ9XG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbz17dHJ1ZX0gLy8gVE9ETzogT25seSBmb3Igc29tZSB3aW5kb3dzIGxpa2UgRE9TXG4gICAgICA+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGFuZGxlXCI+XG4gICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFUaW1lc30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1pbmltaXplfSBvbkNsaWNrPXtvbk1pbmltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYU1pbnVzfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWF4aW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhUGx1c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGU+e2NoaWxkcmVufTwvYXJ0aWNsZT5cbiAgICAgIDwvUm5kPlxuICAgIDwvbGk+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})