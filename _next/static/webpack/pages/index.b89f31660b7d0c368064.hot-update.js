webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      tabIndex = _ref.tabIndex;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    return windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, []);\n  return __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_1__[\"Rnd\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\" // MIN/MAX constraints\n    // Drag constraints on top only\n    ,\n    \"default\": {\n      x: 25,\n      y: 25,\n      width: 225,\n      height: 225\n    },\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    ref: windowRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faTimes\"],\n    size: \"xs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinus\"],\n    transform: {\n      size: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"fa-layers fa-fw\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCaretUp\"],\n    transform: {\n      size: 12,\n      rotate: 45,\n      x: 3,\n      y: -3\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCaretUp\"],\n    size: \"xs\",\n    transform: {\n      rotate: 225,\n      x: -3,\n      y: 3\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }))))), __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJuYW1lIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicmVzaXphYmxlRWxlbWVudCIsImZvY3VzIiwic3R5bGVzIiwid2luZG93IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNsb3NlIiwiZmFUaW1lcyIsIm1pbmltaXplIiwiZmFNaW51cyIsInNpemUiLCJtYXhpbWl6ZSIsImZhQ2FyZXRVcCIsInJvdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVdPLElBQU1BLE1BQWtCLEdBQUcsU0FBckJBLE1BQXFCLE9BUTVCO0FBQUE7O0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsT0FJSSxRQUpKQSxPQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFNLElBQU4sQ0FBeEI7QUFFQUMseURBQVMsQ0FBQztBQUFBOztBQUFBLFdBQU1GLFNBQU4sYUFBTUEsU0FBTiw2Q0FBTUEsU0FBUyxDQUFFRyxPQUFqQixnRkFBTSxtQkFBb0JDLGdCQUExQixvRkFBTSxzQkFBc0NELE9BQTVDLDJEQUFNLHVCQUErQ0UsS0FBL0MsRUFBTjtBQUFBLEdBQUQsRUFBK0QsRUFBL0QsQ0FBVDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSxhQUFTLEVBQUVDLGlFQUFNLENBQUNDLE1BRHBCO0FBRUUsdUJBQW1CLEVBQUMsUUFGdEI7QUFHRSxVQUFNLEVBQUMsU0FIVCxDQUlFO0FBQ0E7QUFMRjtBQU1FLGVBQVM7QUFDUEMsT0FBQyxFQUFFLEVBREk7QUFFUEMsT0FBQyxFQUFFLEVBRkk7QUFHUEMsV0FBSyxFQUFFLEdBSEE7QUFJUEMsWUFBTSxFQUFFO0FBSkQsS0FOWDtBQVlFLFlBQVEsRUFBRVosUUFaWjtBQWFFLFdBQU8sRUFBRUYsT0FiWDtBQWNFLFVBQU0sRUFBRUMsTUFkVjtBQWVFLE9BQUcsRUFBRUUsU0FmUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaUJFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtOLElBQUwsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFFWSxpRUFBTSxDQUFDTSxLQUFuQjtBQUEwQixXQUFPLEVBQUVoQixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVpQix5RUFBdkI7QUFBZ0MsUUFBSSxFQUFDLElBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxNQUFFLEVBQUVQLGlFQUFNLENBQUNRLFFBQW5CO0FBQTZCLFdBQU8sRUFBRW5CLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRW9CLHlFQUF2QjtBQUFnQyxhQUFTLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRVYsaUVBQU0sQ0FBQ1csUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLDJFQUF2QjtBQUFrQyxhQUFTLEVBQUU7QUFBRUYsVUFBSSxFQUFFLEVBQVI7QUFBWUcsWUFBTSxFQUFFLEVBQXBCO0FBQXdCWCxPQUFDLEVBQUUsQ0FBM0I7QUFBOEJDLE9BQUMsRUFBRSxDQUFDO0FBQWxDLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFUywyRUFBdkI7QUFBa0MsUUFBSSxFQUFDLElBQXZDO0FBQTRDLGFBQVMsRUFBRTtBQUFFQyxZQUFNLEVBQUUsR0FBVjtBQUFlWCxPQUFDLEVBQUUsQ0FBQyxDQUFuQjtBQUFzQkMsT0FBQyxFQUFFO0FBQXpCLEtBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBUEYsQ0FGRixDQWpCRixFQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVoQixRQUFWLENBbENGLENBREYsQ0FERjtBQXdDRCxDQXJETTs7R0FBTUQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtcbiAgZmFDaXJjbGUsXG4gIGZhQ2FyZXRVcCxcbiAgZmFNaW51cyxcbiAgZmFUaW1lc1xufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzJztcblxudHlwZSBXaW5kb3cgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgb25NaW5pbWl6ZTogKCkgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25Gb2N1czogKCkgPT4gdm9pZDtcbiAgb25CbHVyOiAoKSA9PiB2b2lkO1xuICB0YWJJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IFdpbmRvdzogRkM8V2luZG93PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBuYW1lLFxuICBvbk1pbmltaXplLFxuICBvbkNsb3NlLFxuICBvbkZvY3VzLFxuICBvbkJsdXIsXG4gIHRhYkluZGV4XG59KSA9PiB7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB3aW5kb3dSZWY/LmN1cnJlbnQ/LnJlc2l6YWJsZUVsZW1lbnQ/LmN1cnJlbnQ/LmZvY3VzKCksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxSbmRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud2luZG93fVxuICAgICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiaGFuZGxlXCJcbiAgICAgICAgY2FuY2VsPVwiLmNhbmNlbFwiXG4gICAgICAgIC8vIE1JTi9NQVggY29uc3RyYWludHNcbiAgICAgICAgLy8gRHJhZyBjb25zdHJhaW50cyBvbiB0b3Agb25seVxuICAgICAgICBkZWZhdWx0PXt7XG4gICAgICAgICAgeDogMjUsXG4gICAgICAgICAgeTogMjUsXG4gICAgICAgICAgd2lkdGg6IDIyNSxcbiAgICAgICAgICBoZWlnaHQ6IDIyNVxuICAgICAgICB9fVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICByZWY9e3dpbmRvd1JlZn1cbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoYW5kbGVcIj5cbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNhbmNlbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmNsb3NlfSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBzaXplPVwieHNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWluaW1pemV9IG9uQ2xpY2s9e29uTWluaW1pemV9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTWludXN9IHRyYW5zZm9ybT17eyBzaXplOiAxMCB9fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMubWF4aW1pemV9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1sYXllcnMgZmEtZndcIj5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRVcH0gdHJhbnNmb3JtPXt7IHNpemU6IDEyLCByb3RhdGU6IDQ1LCB4OiAzLCB5OiAtMyB9fSAvPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldFVwfSBzaXplPVwieHNcIiB0cmFuc2Zvcm09e3sgcm90YXRlOiAyMjUsIHg6IC0zLCB5OiAzIH19IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGFydGljbGU+e2NoaWxkcmVufTwvYXJ0aWNsZT5cbiAgICAgIDwvUm5kPlxuICAgIDwvbGk+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})