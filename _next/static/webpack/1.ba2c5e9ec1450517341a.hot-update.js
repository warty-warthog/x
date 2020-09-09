webpackHotUpdate_N_E(1,{

/***/ "./components/Apps/Pdf.tsx":
/*!*********************************!*\
  !*** ./components/Apps/Pdf.tsx ***!
  \*********************************/
/*! exports provided: Pdf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pdf\", function() { return Pdf; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Pdf.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar baseWidth = 400;\nvar Pdf = function Pdf(_ref) {\n  _s();\n\n  var _ref$url = _ref.url,\n      url = _ref$url === void 0 ? '/' : _ref$url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      numPages = _useState[0],\n      setNumPages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      pageNumber = _useState2[0],\n      setPageNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      zoom = _useState3[0],\n      setZoom = _useState3[1];\n\n  function onDocumentLoadSuccess(_ref2) {\n    var numPages = _ref2.numPages;\n    setNumPages(numPages);\n    setPageNumber(1);\n  }\n\n  function changePage(offset) {\n    setPageNumber(function (prevPageNumber) {\n      return prevPageNumber + offset;\n    });\n  }\n\n  function previousPage() {\n    changePage(-1);\n  }\n\n  function nextPage() {\n    changePage(1);\n  } // display: flex;\n  // justify-content: space-evenly;\n  // background-color: grey;\n  // div>span> user-select: text;\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    style: {\n      backgroundColor: 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Page \", pageNumber || (numPages ? 1 : '--'), \" of \", numPages || '--'), __jsx(\"button\", {\n    type: \"button\",\n    disabled: pageNumber <= 1,\n    onClick: previousPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Previous\"), __jsx(\"button\", {\n    type: \"button\",\n    disabled: pageNumber >= numPages,\n    onClick: nextPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"Next\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      setZoom(1.25);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Zoom 125%\")), __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__[\"Document\"], {\n    file: url,\n    onLoadSuccess: onDocumentLoadSuccess,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    pageNumber: pageNumber,\n    width: baseWidth * zoom,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Pdf, \"xXny1hhl8yIaggUcmyaTxwEKkq8=\");\n\n_c = Pdf;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pdf);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pdf\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL1BkZi50c3g/MDE0YSJdLCJuYW1lcyI6WyJiYXNlV2lkdGgiLCJQZGYiLCJ1cmwiLCJ1c2VTdGF0ZSIsIm51bVBhZ2VzIiwic2V0TnVtUGFnZXMiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInpvb20iLCJzZXRab29tIiwib25Eb2N1bWVudExvYWRTdWNjZXNzIiwiY2hhbmdlUGFnZSIsIm9mZnNldCIsInByZXZQYWdlTnVtYmVyIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHLEdBQWxCO0FBRU8sSUFBTUMsR0FBcUIsR0FBRyxTQUF4QkEsR0FBd0IsT0FBbUI7QUFBQTs7QUFBQSxzQkFBaEJDLEdBQWdCO0FBQUEsTUFBaEJBLEdBQWdCLHlCQUFWLEdBQVU7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFTLENBQVQsQ0FEYztBQUFBLE1BQy9DQyxRQUQrQztBQUFBLE1BQ3JDQyxXQURxQzs7QUFBQSxtQkFFbEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZVO0FBQUEsTUFFL0NHLFVBRitDO0FBQUEsTUFFbkNDLGFBRm1DOztBQUFBLG1CQUc5Qkosc0RBQVEsQ0FBQyxDQUFELENBSHNCO0FBQUEsTUFHL0NLLElBSCtDO0FBQUEsTUFHekNDLE9BSHlDOztBQUt0RCxXQUFTQyxxQkFBVCxRQUFtRTtBQUFBLFFBQWxDTixRQUFrQyxTQUFsQ0EsUUFBa0M7QUFDakVDLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0FHLGlCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBU0ksVUFBVCxDQUFvQkMsTUFBcEIsRUFBb0M7QUFDbENMLGlCQUFhLENBQUMsVUFBQ00sY0FBRDtBQUFBLGFBQW9CQSxjQUFjLEdBQUdELE1BQXJDO0FBQUEsS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBU0UsWUFBVCxHQUF3QjtBQUN0QkgsY0FBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0FBQ0Q7O0FBRUQsV0FBU0ksUUFBVCxHQUFvQjtBQUNsQkosY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNELEdBcEJxRCxDQXNCdEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0UsbUVBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUsscUJBQWUsRUFBRTtBQUFuQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1FWLFVBQVUsS0FBS0YsUUFBUSxHQUFHLENBQUgsR0FBTyxJQUFwQixDQURsQixVQUNpREEsUUFBUSxJQUFJLElBRDdELENBREYsRUFJRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBRUUsVUFBVSxJQUFJLENBQTlDO0FBQWlELFdBQU8sRUFBRVEsWUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQU9FO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFRLEVBQUVSLFVBQVUsSUFBSUYsUUFGMUI7QUFHRSxXQUFPLEVBQUVXLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBY0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiTixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLENBREYsRUF3QkUsTUFBQyxrREFBRDtBQUFVLFFBQUksRUFBRVAsR0FBaEI7QUFBcUIsaUJBQWEsRUFBRVEscUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU0sY0FBVSxFQUFFSixVQUFsQjtBQUE4QixTQUFLLEVBQUVOLFNBQVMsR0FBR1EsSUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBeEJGLENBREY7QUE4QkQsQ0F6RE07O0dBQU1QLEc7O0tBQUFBLEc7QUEyREVBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBzL1BkZi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSB9IGZyb20gJ3JlYWN0LXBkZic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcblxuZXhwb3J0IGNvbnN0IFBkZjogRkM8QXBwQ29tcG9uZW50PiA9ICh7IHVybCA9ICcvJyB9KSA9PiB7XG4gIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkU3VjY2Vzcyh7IG51bVBhZ2VzIH06IHsgbnVtUGFnZXM6IG51bWJlciB9KSB7XG4gICAgc2V0TnVtUGFnZXMobnVtUGFnZXMpO1xuICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKG9mZnNldDogbnVtYmVyKSB7XG4gICAgc2V0UGFnZU51bWJlcigocHJldlBhZ2VOdW1iZXIpID0+IHByZXZQYWdlTnVtYmVyICsgb2Zmc2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZpb3VzUGFnZSgpIHtcbiAgICBjaGFuZ2VQYWdlKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlKCkge1xuICAgIGNoYW5nZVBhZ2UoMSk7XG4gIH1cblxuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLy8gZGl2PnNwYW4+IHVzZXItc2VsZWN0OiB0ZXh0O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICA8cD5cbiAgICAgICAgICBQYWdlIHtwYWdlTnVtYmVyIHx8IChudW1QYWdlcyA/IDEgOiAnLS0nKX0gb2Yge251bVBhZ2VzIHx8ICctLSd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3BhZ2VOdW1iZXIgPD0gMX0gb25DbGljaz17cHJldmlvdXNQYWdlfT5cbiAgICAgICAgICBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlTnVtYmVyID49IG51bVBhZ2VzfVxuICAgICAgICAgIG9uQ2xpY2s9e25leHRQYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFpvb20oMS4yNSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFpvb20gMTI1JVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERvY3VtZW50IGZpbGU9e3VybH0gb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfT5cbiAgICAgICAgPFBhZ2UgcGFnZU51bWJlcj17cGFnZU51bWJlcn0gd2lkdGg9e2Jhc2VXaWR0aCAqIHpvb219IC8+XG4gICAgICA8L0RvY3VtZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGRmO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Apps/Pdf.tsx\n");

/***/ })

})