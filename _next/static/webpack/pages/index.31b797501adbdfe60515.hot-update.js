webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Pdf.tsx":
/*!*********************************!*\
  !*** ./components/Apps/Pdf.tsx ***!
  \*********************************/
/*! exports provided: PDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PDF\", function() { return PDF; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Pdf.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar PDF = function PDF(_ref) {\n  _s();\n\n  var _ref$url = _ref.url,\n      url = _ref$url === void 0 ? '/example.pdf' : _ref$url;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      numPages = _useState[0],\n      setNumPages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      pageNumber = _useState2[0],\n      setPageNumber = _useState2[1];\n\n  function onDocumentLoadSuccess(_ref2) {\n    var numPages = _ref2.numPages;\n    setNumPages(numPages);\n  }\n\n  return __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__[\"Document\"], {\n    file: url,\n    onLoadSuccess: onDocumentLoadSuccess,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    pageNumber: pageNumber,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Page \", pageNumber, \" of \", numPages));\n};\n\n_s(PDF, \"G3hud0ji4HDPzK3Ht+Jk8KGe6O8=\");\n\n_c = PDF;\n\nvar _c;\n\n$RefreshReg$(_c, \"PDF\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL1BkZi50c3g/MDE0YSJdLCJuYW1lcyI6WyJQREYiLCJ1cmwiLCJ1c2VTdGF0ZSIsIm51bVBhZ2VzIiwic2V0TnVtUGFnZXMiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsIm9uRG9jdW1lbnRMb2FkU3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFHTyxJQUFNQSxHQUFxQixHQUFHLFNBQXhCQSxHQUF3QixPQUE4QjtBQUFBOztBQUFBLHNCQUEzQkMsR0FBMkI7QUFBQSxNQUEzQkEsR0FBMkIseUJBQXJCLGNBQXFCOztBQUFBLGtCQUNqQ0Msc0RBQVEsQ0FBUyxDQUFULENBRHlCO0FBQUEsTUFDMURDLFFBRDBEO0FBQUEsTUFDaERDLFdBRGdEOztBQUFBLG1CQUU3QkYsc0RBQVEsQ0FBQyxDQUFELENBRnFCO0FBQUEsTUFFMURHLFVBRjBEO0FBQUEsTUFFOUNDLGFBRjhDOztBQUlqRSxXQUFTQyxxQkFBVCxRQUFtRTtBQUFBLFFBQWxDSixRQUFrQyxTQUFsQ0EsUUFBa0M7QUFDakVDLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBRUYsR0FEUjtBQUVFLGlCQUFhLEVBQUVNLHFCQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw4Q0FBRDtBQUFNLGNBQVUsRUFBRUYsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVNBLFVBQVQsVUFBeUJGLFFBQXpCLENBUEYsQ0FERjtBQVdELENBbkJNOztHQUFNSCxHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBzL1BkZi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEb2N1bWVudCwgUGFnZSB9IGZyb20gJ3JlYWN0LXBkZic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmV4cG9ydCBjb25zdCBQREY6IEZDPEFwcENvbXBvbmVudD4gPSAoeyB1cmwgPSAnL2V4YW1wbGUucGRmJyB9KSA9PiB7XG4gIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMSk7XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRTdWNjZXNzKHsgbnVtUGFnZXMgfTogeyBudW1QYWdlczogbnVtYmVyIH0pIHtcbiAgICBzZXROdW1QYWdlcyhudW1QYWdlcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPERvY3VtZW50XG4gICAgICAgIGZpbGU9e3VybH1cbiAgICAgICAgb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfVxuICAgICAgPlxuICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfSAvPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICAgIDxwPlBhZ2Uge3BhZ2VOdW1iZXJ9IG9mIHtudW1QYWdlc308L3A+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Apps/Pdf.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Document.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/DocumentContext.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/LinkService.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Message.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Outline.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/OutlineContext.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/OutlineItem.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page/AnnotationLayer.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page/PageCanvas.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page/PageSVG.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page/TextLayer.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Page/TextLayerItem.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/PageContext.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/PasswordResponses.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/Ref.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/entry.webpack.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/eventBus.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/shared/propTypes.js":
false,

/***/ "./node_modules/react-pdf/dist/umd/shared/utils.js":
false,

/***/ "./node_modules/worker-loader/dist/cjs.js!./node_modules/react-pdf/dist/umd/pdf.worker.entry.js":
false

})