webpackHotUpdate_N_E(1,{

/***/ "./components/Apps/Pdf.tsx":
/*!*********************************!*\
  !*** ./components/Apps/Pdf.tsx ***!
  \*********************************/
/*! exports provided: Pdf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pdf\", function() { return Pdf; });\n/* harmony import */ var _styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/Apps/Pdf.module.scss */ \"./styles/Apps/Pdf.module.scss\");\n/* harmony import */ var _styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Pdf.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar baseWidth = 400;\nvar Pdf = function Pdf(_ref) {\n  _s();\n\n  var _ref$url = _ref.url,\n      url = _ref$url === void 0 ? '/' : _ref$url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      numPages = _useState[0],\n      setNumPages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      pageNumber = _useState2[0],\n      setPageNumber = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      zoom = _useState3[0],\n      setZoom = _useState3[1];\n\n  function onDocumentLoadSuccess(_ref2) {\n    var numPages = _ref2.numPages;\n    setNumPages(numPages);\n    setPageNumber(1);\n  }\n\n  function changePage(offset) {\n    setPageNumber(function (prevPageNumber) {\n      return prevPageNumber + offset;\n    });\n  }\n\n  function previousPage() {\n    changePage(-1);\n  }\n\n  function nextPage() {\n    changePage(1);\n  } // display: flex;\n  // justify-content: space-evenly;\n  // background-color: grey;\n  // div>span> user-select: text;\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: _styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.controls,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    type: \"button\",\n    disabled: pageNumber <= 1,\n    onClick: previousPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Previous\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Page \", pageNumber || (numPages ? 1 : '--'), \" of \", numPages || '--'), __jsx(\"button\", {\n    type: \"button\",\n    disabled: pageNumber >= numPages,\n    onClick: nextPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"Next\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      setZoom(zoom + 0.25);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Zoom In\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Zoom \", zoom * 100, \"%\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      setZoom(zoom - 0.25);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"Zoom Out\")), __jsx(\"div\", {\n    className: _styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.document,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_2__[\"Document\"], {\n    className: _styles_Apps_Pdf_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.reactDocument,\n    file: url,\n    onLoadSuccess: onDocumentLoadSuccess,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    pageNumber: pageNumber,\n    width: baseWidth * zoom,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Pdf, \"xXny1hhl8yIaggUcmyaTxwEKkq8=\");\n\n_c = Pdf;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pdf);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pdf\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL1BkZi50c3g/MDE0YSJdLCJuYW1lcyI6WyJiYXNlV2lkdGgiLCJQZGYiLCJ1cmwiLCJ1c2VTdGF0ZSIsIm51bVBhZ2VzIiwic2V0TnVtUGFnZXMiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInpvb20iLCJzZXRab29tIiwib25Eb2N1bWVudExvYWRTdWNjZXNzIiwiY2hhbmdlUGFnZSIsIm9mZnNldCIsInByZXZQYWdlTnVtYmVyIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJzdHlsZXMiLCJjb250cm9scyIsImRvY3VtZW50IiwicmVhY3REb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHLEdBQWxCO0FBRU8sSUFBTUMsR0FBcUIsR0FBRyxTQUF4QkEsR0FBd0IsT0FBbUI7QUFBQTs7QUFBQSxzQkFBaEJDLEdBQWdCO0FBQUEsTUFBaEJBLEdBQWdCLHlCQUFWLEdBQVU7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFTLENBQVQsQ0FEYztBQUFBLE1BQy9DQyxRQUQrQztBQUFBLE1BQ3JDQyxXQURxQzs7QUFBQSxtQkFFbEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZVO0FBQUEsTUFFL0NHLFVBRitDO0FBQUEsTUFFbkNDLGFBRm1DOztBQUFBLG1CQUc5Qkosc0RBQVEsQ0FBQyxDQUFELENBSHNCO0FBQUEsTUFHL0NLLElBSCtDO0FBQUEsTUFHekNDLE9BSHlDOztBQUt0RCxXQUFTQyxxQkFBVCxRQUFtRTtBQUFBLFFBQWxDTixRQUFrQyxTQUFsQ0EsUUFBa0M7QUFDakVDLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0FHLGlCQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBU0ksVUFBVCxDQUFvQkMsTUFBcEIsRUFBb0M7QUFDbENMLGlCQUFhLENBQUMsVUFBQ00sY0FBRDtBQUFBLGFBQW9CQSxjQUFjLEdBQUdELE1BQXJDO0FBQUEsS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsV0FBU0UsWUFBVCxHQUF3QjtBQUN0QkgsY0FBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0FBQ0Q7O0FBRUQsV0FBU0ksUUFBVCxHQUFvQjtBQUNsQkosY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNELEdBcEJxRCxDQXNCdEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVLLG1FQUFNLENBQUNDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBRVgsVUFBVSxJQUFJLENBQTlDO0FBQWlELFdBQU8sRUFBRVEsWUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDUVIsVUFBVSxLQUFLRixRQUFRLEdBQUcsQ0FBSCxHQUFPLElBQXBCLENBRGxCLFVBQ2lEQSxRQUFRLElBQUksSUFEN0QsQ0FKRixFQU9FO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFRLEVBQUVFLFVBQVUsSUFBSUYsUUFGMUI7QUFHRSxXQUFPLEVBQUVXLFFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBY0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNiTixhQUFPLENBQUNELElBQUksR0FBRyxJQUFSLENBQVA7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1FBLElBQUksR0FBRyxHQURmLE1BdEJGLEVBeUJFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYkMsYUFBTyxDQUFDRCxJQUFJLEdBQUcsSUFBUixDQUFQO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRixDQURGLEVBbUNFO0FBQUssYUFBUyxFQUFFUSxtRUFBTSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFVLGFBQVMsRUFBRUYsbUVBQU0sQ0FBQ0csYUFBNUI7QUFBMkMsUUFBSSxFQUFFakIsR0FBakQ7QUFBc0QsaUJBQWEsRUFBRVEscUJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU0sY0FBVSxFQUFFSixVQUFsQjtBQUE4QixTQUFLLEVBQUVOLFNBQVMsR0FBR1EsSUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FuQ0YsQ0FERjtBQTJDRCxDQXRFTTs7R0FBTVAsRzs7S0FBQUEsRztBQXdFRUEsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcHMvUGRmLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvQXBwcy9QZGYubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSB9IGZyb20gJ3JlYWN0LXBkZic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmNvbnN0IGJhc2VXaWR0aCA9IDQwMDtcblxuZXhwb3J0IGNvbnN0IFBkZjogRkM8QXBwQ29tcG9uZW50PiA9ICh7IHVybCA9ICcvJyB9KSA9PiB7XG4gIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkU3VjY2Vzcyh7IG51bVBhZ2VzIH06IHsgbnVtUGFnZXM6IG51bWJlciB9KSB7XG4gICAgc2V0TnVtUGFnZXMobnVtUGFnZXMpO1xuICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKG9mZnNldDogbnVtYmVyKSB7XG4gICAgc2V0UGFnZU51bWJlcigocHJldlBhZ2VOdW1iZXIpID0+IHByZXZQYWdlTnVtYmVyICsgb2Zmc2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZpb3VzUGFnZSgpIHtcbiAgICBjaGFuZ2VQYWdlKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlKCkge1xuICAgIGNoYW5nZVBhZ2UoMSk7XG4gIH1cblxuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLy8gZGl2PnNwYW4+IHVzZXItc2VsZWN0OiB0ZXh0O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cGFnZU51bWJlciA8PSAxfSBvbkNsaWNrPXtwcmV2aW91c1BhZ2V9PlxuICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD5cbiAgICAgICAgICBQYWdlIHtwYWdlTnVtYmVyIHx8IChudW1QYWdlcyA/IDEgOiAnLS0nKX0gb2Yge251bVBhZ2VzIHx8ICctLSd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlTnVtYmVyID49IG51bVBhZ2VzfVxuICAgICAgICAgIG9uQ2xpY2s9e25leHRQYWdlfVxuICAgICAgICA+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFpvb20oem9vbSArIDAuMjUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBab29tIEluXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD5cbiAgICAgICAgICBab29tIHt6b29tICogMTAwfSVcbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0Wm9vbSh6b29tIC0gMC4yNSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFpvb20gT3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvY3VtZW50fT5cbiAgICAgICAgPERvY3VtZW50IGNsYXNzTmFtZT17c3R5bGVzLnJlYWN0RG9jdW1lbnR9IGZpbGU9e3VybH0gb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfT5cbiAgICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSB3aWR0aD17YmFzZVdpZHRoICogem9vbX0gLz5cbiAgICAgICAgPC9Eb2N1bWVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGRmO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Apps/Pdf.tsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Apps/Pdf.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Apps/Pdf.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Pdf_controls__1XlqY {\\n  display: flex;\\n  justify-content: space-around;\\n  background-color: #b1b1b1;\\n  padding: 5px;\\n}\\n\\n.Pdf_document__148Jt {\\n  background-color: #d7d7d7;\\n  padding: 25px;\\n  height: calc(100% - 31px);\\n  overflow: auto;\\n}\\n.Pdf_document__148Jt .Pdf_reactDocument__1cE6K {\\n  display: flex;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Apps/Pdf.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAA;EACA,6BAAA;EACA,yBAAA;EACA,YAAA;AACF;;AAEA;EACE,yBAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;AACF;AACE;EACE,aAAA;EACA,uBAAA;AACJ\",\"file\":\"Pdf.module.scss\",\"sourcesContent\":[\".controls {\\n  display: flex;\\n  justify-content: space-around;\\n  background-color: #b1b1b1;\\n  padding: 5px;\\n}\\n\\n.document {\\n  background-color: #d7d7d7;\\n  padding: 25px;\\n  height: calc(100% - 31px);\\n  overflow: auto;\\n\\n  .reactDocument {\\n    display: flex;\\n    justify-content: center;\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"controls\": \"Pdf_controls__1XlqY\",\n\t\"document\": \"Pdf_document__148Jt\",\n\t\"reactDocument\": \"Pdf_reactDocument__1cE6K\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcHMvUGRmLm1vZHVsZS5zY3NzP2VhYzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsa0JBQWtCLGtDQUFrQyw4QkFBOEIsaUJBQWlCLEdBQUcsMEJBQTBCLDhCQUE4QixrQkFBa0IsOEJBQThCLG1CQUFtQixHQUFHLGtEQUFrRCxrQkFBa0IsNEJBQTRCLEdBQUcsT0FBTyxzR0FBc0csVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLDZEQUE2RCxrQkFBa0Isa0NBQWtDLDhCQUE4QixpQkFBaUIsR0FBRyxlQUFlLDhCQUE4QixrQkFBa0IsOEJBQThCLG1CQUFtQixzQkFBc0Isb0JBQW9CLDhCQUE4QixLQUFLLEdBQUcsS0FBSztBQUMxOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9BcHBzL1BkZi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QZGZfY29udHJvbHNfXzFYbHFZIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5QZGZfZG9jdW1lbnRfXzE0OEp0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDc7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMXB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uUGRmX2RvY3VtZW50X18xNDhKdCAuUGRmX3JlYWN0RG9jdW1lbnRfXzFjRTZLIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvQXBwcy9QZGYubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDSlwiLFwiZmlsZVwiOlwiUGRmLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFiMWIxO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZG9jdW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMxcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuXFxuICAucmVhY3REb2N1bWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250cm9sc1wiOiBcIlBkZl9jb250cm9sc19fMVhscVlcIixcblx0XCJkb2N1bWVudFwiOiBcIlBkZl9kb2N1bWVudF9fMTQ4SnRcIixcblx0XCJyZWFjdERvY3VtZW50XCI6IFwiUGRmX3JlYWN0RG9jdW1lbnRfXzFjRTZLXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Apps/Pdf.module.scss\n");

/***/ })

})