webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // TODO: Make scrollbar slightly wider?\n// TODO: No resize handle on top for mobile? (Use TouchEvent logic)\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    return windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, [windowRef]); // TODO: Clicking title bar isnt focusing DOS windows?\n\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    enableUserSelectHack: false,\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    \"default\": {\n      x: 0,\n      y: 0,\n      width: 320,\n      height: 224\n    },\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: function onDragStart(_ref2) {\n      var _ref3;\n\n      var target = _ref2.target;\n      console.log((_ref3 = target) === null || _ref3 === void 0 ? void 0 : _ref3.closest(\".\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window)));\n    },\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJuYW1lIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJ0YWJJbmRleCIsInpJbmRleCIsIndpbmRvd1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNpemFibGVFbGVtZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJ3aW5kb3ciLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImNsb3Nlc3QiLCJjbG9zZSIsImZhVGltZXMiLCJtaW5pbWl6ZSIsImZhTWludXMiLCJtYXhpbWl6ZSIsImZhUGx1cyIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBY08sSUFBTUEsTUFBa0IsR0FBRyxTQUFyQkEsTUFBcUIsT0FZNUI7QUFBQTs7QUFBQSxNQVZKQyxRQVVJLFFBVkpBLFFBVUk7QUFBQSxNQVRKQyxJQVNJLFFBVEpBLElBU0k7QUFBQSxNQVJKQyxVQVFJLFFBUkpBLFVBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxNQUtJLFFBTEpBLE1BS0k7QUFBQSxNQUpKQyxlQUlJLFFBSkpBLGVBSUk7QUFBQSxNQUhKQyxjQUdJLFFBSEpBLGNBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxNQUNJLFFBREpBLE1BQ0k7QUFDSixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQU0sSUFBTixDQUF4QjtBQUVBQyx5REFBUyxDQUFDO0FBQUE7O0FBQUEsV0FBTUYsU0FBTixhQUFNQSxTQUFOLDZDQUFNQSxTQUFTLENBQUVHLE9BQWpCLGdGQUFNLG1CQUFvQkMsZ0JBQTFCLG9GQUFNLHNCQUFzQ0QsT0FBNUMsMkRBQU0sdUJBQStDRSxLQUEvQyxFQUFOO0FBQUEsR0FBRCxFQUErRCxDQUN0RUwsU0FEc0UsQ0FBL0QsQ0FBVCxDQUhJLENBT0o7O0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLHdCQUFvQixFQUFFLEtBRHhCO0FBRUUsYUFBUyxFQUFFTSxpRUFBTSxDQUFDQyxNQUZwQjtBQUdFLHVCQUFtQixFQUFDLFFBSHRCO0FBSUUsVUFBTSxFQUFDLFNBSlQ7QUFLRSxlQUFTO0FBQ1BDLE9BQUMsRUFBRSxDQURJO0FBRVBDLE9BQUMsRUFBRSxDQUZJO0FBR1BDLFdBQUssRUFBRSxHQUhBO0FBSVBDLFlBQU0sRUFBRTtBQUpELEtBTFg7QUFXRSxZQUFRLEVBQUViLFFBWFo7QUFZRSxXQUFPLEVBQUVKLE9BWlg7QUFhRSxVQUFNLEVBQUVDLE1BYlY7QUFjRSxlQUFXLEVBQUUsNEJBQWdCO0FBQUE7O0FBQUEsVUFBYmlCLE1BQWEsU0FBYkEsTUFBYTtBQUMzQkMsYUFBTyxDQUFDQyxHQUFSLFVBQWFGLE1BQWIsMENBQVksTUFBeUJHLE9BQXpCLFlBQXFDVCxpRUFBTSxDQUFDQyxNQUE1QyxFQUFaO0FBQ0QsS0FoQkg7QUFpQkUsT0FBRyxFQUFFUCxTQWpCUDtBQWtCRSxtQkFBZSxFQUFFSixlQWxCbkI7QUFtQkUsU0FBSyxFQUFFO0FBQUVHLFlBQU0sRUFBTkE7QUFBRixLQW5CVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcUJFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLElBQUwsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFFZSxpRUFBTSxDQUFDVSxLQUFuQjtBQUEwQixXQUFPLEVBQUV2QixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFd0IseUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBUSxNQUFFLEVBQUVYLGlFQUFNLENBQUNZLFFBQW5CO0FBQTZCLFdBQU8sRUFBRTFCLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUUyQix5RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFRLE1BQUUsRUFBRWIsaUVBQU0sQ0FBQ2MsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRUMsd0VBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBRkYsQ0FyQkYsRUFtQ0U7QUFBUyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFekIsY0FBYyxHQUFHLFFBQUgsR0FBYztBQUF4QyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLFFBREgsQ0FuQ0YsQ0FERixDQURGO0FBMkNELENBL0RNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhUGx1cywgZmFNaW51cywgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbi8vIFRPRE86IE1ha2Ugc2Nyb2xsYmFyIHNsaWdodGx5IHdpZGVyP1xuLy8gVE9ETzogTm8gcmVzaXplIGhhbmRsZSBvbiB0b3AgZm9yIG1vYmlsZT8gKFVzZSBUb3VjaEV2ZW50IGxvZ2ljKVxuXG50eXBlIFdpbmRvdyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBvbk1pbmltaXplOiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkZvY3VzOiAoKSA9PiB2b2lkO1xuICBvbkJsdXI6ICgpID0+IHZvaWQ7XG4gIGxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbjtcbiAgaGlkZVNjcm9sbGJhcnM6IGJvb2xlYW47XG4gIHRhYkluZGV4OiBudW1iZXI7XG4gIHpJbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IFdpbmRvdzogRkM8V2luZG93PiA9ICh7XG4gIC8vIFRPRE86IENhbiBJIHJlbW92ZSB0aGlzIHJlcGV0aXRpb24gaWYgSSAuLi5kdW1wIGFuIGVudGlyZSBcIldpbmRvd1wiIGludG8gdGhlIGNvbXBvbmVudD9cbiAgY2hpbGRyZW4sXG4gIG5hbWUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgbG9ja0FzcGVjdFJhdGlvLFxuICBoaWRlU2Nyb2xsYmFycyxcbiAgdGFiSW5kZXgsXG4gIHpJbmRleFxufSkgPT4ge1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWY8Um5kPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gd2luZG93UmVmPy5jdXJyZW50Py5yZXNpemFibGVFbGVtZW50Py5jdXJyZW50Py5mb2N1cygpLCBbXG4gICAgd2luZG93UmVmXG4gIF0pO1xuXG4gIC8vIFRPRE86IENsaWNraW5nIHRpdGxlIGJhciBpc250IGZvY3VzaW5nIERPUyB3aW5kb3dzP1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPFJuZFxuICAgICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17ZmFsc2V9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd31cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICAgIGNhbmNlbD1cIi5jYW5jZWxcIlxuICAgICAgICBkZWZhdWx0PXt7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgaGVpZ2h0OiAyMjRcbiAgICAgICAgfX1cbiAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25EcmFnU3RhcnQ9eyh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coKHRhcmdldCBhcyBIVE1MRWxlbWVudCk/LmNsb3Nlc3QoYC4ke3N0eWxlcy53aW5kb3d9YCkpO1xuICAgICAgICB9fVxuICAgICAgICByZWY9e3dpbmRvd1JlZn1cbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgIHN0eWxlPXt7IHpJbmRleCB9fVxuICAgICAgPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhhbmRsZVwiPlxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGltZXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5taW5pbWl6ZX0gb25DbGljaz17b25NaW5pbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFNaW51c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1heGltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVBsdXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlIHN0eWxlPXt7IG92ZXJmbG93OiBoaWRlU2Nyb2xsYmFycyA/ICdoaWRkZW4nIDogJ2F1dG8nIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9SbmQ+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})