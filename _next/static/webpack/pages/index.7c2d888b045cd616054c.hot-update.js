webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // TODO: Make scrollbar slightly wider?\n// TODO: No resize handle on top for mobile? (Use TouchEvent logic)\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      name = _ref.name,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      lockAspectRatio = _ref.lockAspectRatio,\n      hideScrollbars = _ref.hideScrollbars,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex;\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _windowRef$current, _windowRef$current$re, _windowRef$current$re2;\n\n    return windowRef === null || windowRef === void 0 ? void 0 : (_windowRef$current = windowRef.current) === null || _windowRef$current === void 0 ? void 0 : (_windowRef$current$re = _windowRef$current.resizableElement) === null || _windowRef$current$re === void 0 ? void 0 : (_windowRef$current$re2 = _windowRef$current$re.current) === null || _windowRef$current$re2 === void 0 ? void 0 : _windowRef$current$re2.focus();\n  }, [windowRef]); // TODO: Clicking title bar isnt focusing DOS windows?\n\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_2__[\"Rnd\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window,\n    dragHandleClassName: \"handle\",\n    cancel: \".cancel\",\n    \"default\": {\n      x: 35,\n      y: 15,\n      width: 320,\n      height: 224\n    },\n    tabIndex: tabIndex,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    ref: windowRef,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"header\", {\n    className: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, name), __jsx(\"nav\", {\n    className: \"cancel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close,\n    onClick: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.minimize,\n    onClick: onMinimize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faMinus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  })), __jsx(\"button\", {\n    id: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n    size: \"xs\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faPlus\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  })))), __jsx(\"article\", {\n    style: {\n      overflow: hideScrollbars ? 'hidden' : 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(Window, \"4UCRn3G2ElOnK7SW+HBZfyLTzR8=\");\n\n_c = Window;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJuYW1lIiwib25NaW5pbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwibG9ja0FzcGVjdFJhdGlvIiwiaGlkZVNjcm9sbGJhcnMiLCJ0YWJJbmRleCIsInpJbmRleCIsIndpbmRvd1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNpemFibGVFbGVtZW50IiwiZm9jdXMiLCJzdHlsZXMiLCJ3aW5kb3ciLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvc2UiLCJmYVRpbWVzIiwibWluaW1pemUiLCJmYU1pbnVzIiwibWF4aW1pemUiLCJmYVBsdXMiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQWNPLElBQU1BLE1BQWtCLEdBQUcsU0FBckJBLE1BQXFCLE9BWTVCO0FBQUE7O0FBQUEsTUFWSkMsUUFVSSxRQVZKQSxRQVVJO0FBQUEsTUFUSkMsSUFTSSxRQVRKQSxJQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsT0FPSSxRQVBKQSxPQU9JO0FBQUEsTUFOSkMsT0FNSSxRQU5KQSxPQU1JO0FBQUEsTUFMSkMsTUFLSSxRQUxKQSxNQUtJO0FBQUEsTUFKSkMsZUFJSSxRQUpKQSxlQUlJO0FBQUEsTUFISkMsY0FHSSxRQUhKQSxjQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJO0FBQ0osTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFNLElBQU4sQ0FBeEI7QUFFQUMseURBQVMsQ0FBQztBQUFBOztBQUFBLFdBQU1GLFNBQU4sYUFBTUEsU0FBTiw2Q0FBTUEsU0FBUyxDQUFFRyxPQUFqQixnRkFBTSxtQkFBb0JDLGdCQUExQixvRkFBTSxzQkFBc0NELE9BQTVDLDJEQUFNLHVCQUErQ0UsS0FBL0MsRUFBTjtBQUFBLEdBQUQsRUFBK0QsQ0FDdEVMLFNBRHNFLENBQS9ELENBQVQsQ0FISSxDQU9KOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFDRSxhQUFTLEVBQUVNLGlFQUFNLENBQUNDLE1BRHBCO0FBRUUsdUJBQW1CLEVBQUMsUUFGdEI7QUFHRSxVQUFNLEVBQUMsU0FIVDtBQUlFLGVBQVM7QUFDUEMsT0FBQyxFQUFFLEVBREk7QUFFUEMsT0FBQyxFQUFFLEVBRkk7QUFHUEMsV0FBSyxFQUFFLEdBSEE7QUFJUEMsWUFBTSxFQUFFO0FBSkQsS0FKWDtBQVVFLFlBQVEsRUFBRWIsUUFWWjtBQVdFLFdBQU8sRUFBRUosT0FYWDtBQVlFLFVBQU0sRUFBRUMsTUFaVjtBQWFFLE9BQUcsRUFBRUssU0FiUDtBQWNFLG1CQUFlLEVBQUVKLGVBZG5CO0FBZUUsU0FBSyxFQUFFO0FBQUVHLFlBQU0sRUFBTkE7QUFBRixLQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FpQkU7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsSUFBTCxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUVlLGlFQUFNLENBQUNNLEtBQW5CO0FBQTBCLFdBQU8sRUFBRW5CLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUEyQixRQUFJLEVBQUVvQix5RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFRLE1BQUUsRUFBRVAsaUVBQU0sQ0FBQ1EsUUFBbkI7QUFBNkIsV0FBTyxFQUFFdEIsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQTJCLFFBQUksRUFBRXVCLHlFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQVEsTUFBRSxFQUFFVCxpRUFBTSxDQUFDVSxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUMsSUFBdEI7QUFBMkIsUUFBSSxFQUFFQyx3RUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FGRixDQWpCRixFQStCRTtBQUFTLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUVyQixjQUFjLEdBQUcsUUFBSCxHQUFjO0FBQXhDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsUUFESCxDQS9CRixDQURGLENBREY7QUF1Q0QsQ0EzRE07O0dBQU1ELE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQbHVzLCBmYU1pbnVzLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuLy8gVE9ETzogTWFrZSBzY3JvbGxiYXIgc2xpZ2h0bHkgd2lkZXI/XG4vLyBUT0RPOiBObyByZXNpemUgaGFuZGxlIG9uIHRvcCBmb3IgbW9iaWxlPyAoVXNlIFRvdWNoRXZlbnQgbG9naWMpXG5cbnR5cGUgV2luZG93ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIG9uTWluaW1pemU6ICgpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gIG9uQmx1cjogKCkgPT4gdm9pZDtcbiAgbG9ja0FzcGVjdFJhdGlvOiBib29sZWFuO1xuICBoaWRlU2Nyb2xsYmFyczogYm9vbGVhbjtcbiAgdGFiSW5kZXg6IG51bWJlcjtcbiAgekluZGV4OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgV2luZG93OiBGQzxXaW5kb3c+ID0gKHtcbiAgLy8gVE9ETzogQ2FuIEkgcmVtb3ZlIHRoaXMgcmVwZXRpdGlvbiBpZiBJIC4uLmR1bXAgYW4gZW50aXJlIFwiV2luZG93XCIgaW50byB0aGUgY29tcG9uZW50P1xuICBjaGlsZHJlbixcbiAgbmFtZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25DbG9zZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIGhpZGVTY3JvbGxiYXJzLFxuICB0YWJJbmRleCxcbiAgekluZGV4XG59KSA9PiB7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB3aW5kb3dSZWY/LmN1cnJlbnQ/LnJlc2l6YWJsZUVsZW1lbnQ/LmN1cnJlbnQ/LmZvY3VzKCksIFtcbiAgICB3aW5kb3dSZWZcbiAgXSk7XG5cbiAgLy8gVE9ETzogQ2xpY2tpbmcgdGl0bGUgYmFyIGlzbnQgZm9jdXNpbmcgRE9TIHdpbmRvd3M/XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8Um5kXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd31cbiAgICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICAgIGNhbmNlbD1cIi5jYW5jZWxcIlxuICAgICAgICBkZWZhdWx0PXt7XG4gICAgICAgICAgeDogMzUsXG4gICAgICAgICAgeTogMTUsXG4gICAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgICBoZWlnaHQ6IDIyNFxuICAgICAgICB9fVxuICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICByZWY9e3dpbmRvd1JlZn1cbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgIHN0eWxlPXt7IHpJbmRleCB9fVxuICAgICAgPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhhbmRsZVwiPlxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCJ4c1wiIGljb249e2ZhVGltZXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9e3N0eWxlcy5taW5pbWl6ZX0gb25DbGljaz17b25NaW5pbWl6ZX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc2l6ZT1cInhzXCIgaWNvbj17ZmFNaW51c30gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLm1heGltaXplfT5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzaXplPVwieHNcIiBpY29uPXtmYVBsdXN9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxhcnRpY2xlIHN0eWxlPXt7IG92ZXJmbG93OiBoaWRlU2Nyb2xsYmFycyA/ICdoaWRkZW4nIDogJ2F1dG8nIH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9SbmQ+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})