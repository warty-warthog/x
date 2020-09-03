webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Dos.tsx":
/*!*********************************!*\
  !*** ./components/Apps/Dos.tsx ***!
  \*********************************/
/*! exports provided: DosAppLoader, DosAppOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DosAppLoader\", function() { return DosAppLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DosAppOptions\", function() { return DosAppOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Apps_Dos_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Apps/Dos.module.scss */ \"./styles/Apps/Dos.module.scss\");\n/* harmony import */ var _styles_Apps_Dos_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Apps_Dos_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_Dos_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Dos.png */ \"./assets/icons/Dos.png\");\n/* harmony import */ var _assets_icons_Dos_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Dos_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar dosOptions = {\n  wdosboxUrl: '/libs/wdosbox.js',\n  onprogress: function onprogress() {}\n};\nvar DosAppLoader = function DosAppLoader(_ref) {\n  _s();\n\n  var _ref$args = _ref.args,\n      args = _ref$args === void 0 ? ['-c', 'CLS'] : _ref$args,\n      url = _ref.url;\n  var ci;\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null),\n      loadMain = function loadMain(main) {\n    return function () {\n      var _main;\n\n      return (_main = main(args)) === null || _main === void 0 ? void 0 : _main.then(function (value) {\n        ci = value;\n      });\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _Dos;\n\n    var _ref2 = canvasRef,\n        canvasElement = _ref2.current,\n        _ref3 = window,\n        Dos = _ref3.Dos;\n    (_Dos = Dos(canvasElement, dosOptions)) === null || _Dos === void 0 ? void 0 : _Dos.then(function (_ref4) {\n      var fs = _ref4.fs,\n          main = _ref4.main;\n\n      if (url) {\n        var _fs$extract;\n\n        fs === null || fs === void 0 ? void 0 : (_fs$extract = fs.extract(url)) === null || _fs$extract === void 0 ? void 0 : _fs$extract.then(loadMain(main));\n      } else {\n        loadMain(main)();\n      }\n    });\n    return function () {\n      var _ci;\n\n      (_ci = ci) === null || _ci === void 0 ? void 0 : _ci.exit();\n    };\n  }, [canvasRef]);\n\n  __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n  return __jsx(\"canvas\", {\n    className: _styles_Apps_Dos_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dos,\n    onClick: function onClick() {\n      var _canvasRef$current, _canvasRef$current2;\n\n      console.log((_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.closest(':not(li)[tabindex]'));\n      (_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.focus();\n    },\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(DosAppLoader, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = DosAppLoader;\nvar DosAppOptions = {\n  hideScrollbars: true,\n  lockAspectRatio: true,\n  width: 320,\n  height: 224\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_objectSpread({\n  component: DosAppLoader,\n  icon: _assets_icons_Dos_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n  name: 'DOS'\n}, DosAppOptions)));\n\nvar _c;\n\n$RefreshReg$(_c, \"DosAppLoader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL0Rvcy50c3g/ZjVjZCJdLCJuYW1lcyI6WyJkb3NPcHRpb25zIiwid2Rvc2JveFVybCIsIm9ucHJvZ3Jlc3MiLCJEb3NBcHBMb2FkZXIiLCJhcmdzIiwidXJsIiwiY2kiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJsb2FkTWFpbiIsIm1haW4iLCJ0aGVuIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjYW52YXNFbGVtZW50IiwiY3VycmVudCIsIndpbmRvdyIsIkRvcyIsImZzIiwiZXh0cmFjdCIsImV4aXQiLCJyZXF1aXJlIiwic3R5bGVzIiwiZG9zIiwiY29uc29sZSIsImxvZyIsImNsb3Nlc3QiLCJmb2N1cyIsIkRvc0FwcE9wdGlvbnMiLCJoaWRlU2Nyb2xsYmFycyIsImxvY2tBc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwiY29tcG9uZW50IiwiaWNvbiIsIkRvc0ljb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVNBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsWUFBVSxFQUFFLGtCQURLO0FBRWpCQyxZQUFVLEVBQUUsc0JBQU0sQ0FBRTtBQUZILENBQW5CO0FBS08sSUFBTUMsWUFBd0IsR0FBRyxTQUEzQkEsWUFBMkIsT0FBbUM7QUFBQTs7QUFBQSx1QkFBaENDLElBQWdDO0FBQUEsTUFBaENBLElBQWdDLDBCQUF6QixDQUFDLElBQUQsRUFBTyxLQUFQLENBQXlCO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3pFLE1BQUlDLEVBQUo7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUF4QjtBQUFBLE1BQ0VDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxXQUFxQjtBQUFBOztBQUFBLHNCQUM5QkEsSUFBSSxDQUFDTixJQUFELENBRDBCLDBDQUM5QixNQUFZTyxJQUFaLENBQWlCLFVBQUNDLEtBQUQsRUFBVztBQUMxQk4sVUFBRSxHQUFHTSxLQUFMO0FBQ0QsT0FGRCxDQUQ4QjtBQUFBLEtBQXJCO0FBQUEsR0FEYjs7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQUE7O0FBQUEsZ0JBQ3FCTixTQURyQjtBQUFBLFFBQ0dPLGFBREgsU0FDTkMsT0FETTtBQUFBLGdCQUlGQyxNQUpFO0FBQUEsUUFJVkMsR0FKVSxTQUlWQSxHQUpVO0FBTWQsWUFBQUEsR0FBRyxDQUFDSCxhQUFELEVBQWdCZCxVQUFoQixDQUFILDhDQUFnQ1csSUFBaEMsQ0FBcUMsaUJBQWtCO0FBQUEsVUFBZk8sRUFBZSxTQUFmQSxFQUFlO0FBQUEsVUFBWFIsSUFBVyxTQUFYQSxJQUFXOztBQUNyRCxVQUFJTCxHQUFKLEVBQVM7QUFBQTs7QUFDUGEsVUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRiwyQkFBQUEsRUFBRSxDQUFFQyxPQUFKLENBQVlkLEdBQVosNkRBQWtCTSxJQUFsQixDQUF1QkYsUUFBUSxDQUFDQyxJQUFELENBQS9CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELGdCQUFRLENBQUNDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FORDtBQVFBLFdBQU8sWUFBTTtBQUFBOztBQUNYLGFBQUFKLEVBQUUsVUFBRixrQ0FBSWMsSUFBSjtBQUNELEtBRkQ7QUFHRCxHQWpCUSxFQWlCTixDQUFDYixTQUFELENBakJNLENBQVQ7O0FBbUJBYyxxQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUEsU0FDRTtBQUNFLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsR0FEcEI7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFBQTs7QUFDYkMsYUFBTyxDQUFDQyxHQUFSLHVCQUFZbEIsU0FBUyxDQUFDUSxPQUF0Qix1REFBWSxtQkFBbUJXLE9BQW5CLENBQTJCLG9CQUEzQixDQUFaO0FBQ0EsNkJBQUFuQixTQUFTLENBQUNRLE9BQVYsNEVBQW1CWSxLQUFuQjtBQUNELEtBTEg7QUFNRSxPQUFHLEVBQUVwQixTQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVVELENBdkNNOztHQUFNSixZOztLQUFBQSxZO0FBeUNOLElBQU15QixhQUEyQixHQUFHO0FBQ3pDQyxnQkFBYyxFQUFFLElBRHlCO0FBRXpDQyxpQkFBZSxFQUFFLElBRndCO0FBR3pDQyxPQUFLLEVBQUUsR0FIa0M7QUFJekNDLFFBQU0sRUFBRTtBQUppQyxDQUFwQztBQU9RLG1FQUFJQyxxREFBSjtBQUNiQyxXQUFTLEVBQUUvQixZQURFO0FBRWJnQyxNQUFJLEVBQUVDLDREQUZPO0FBR2JDLE1BQUksRUFBRTtBQUhPLEdBSVZULGFBSlUsRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwcy9Eb3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9BcHBzL0Rvcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRG9zSWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9Eb3MucG5nJztcblxuaW1wb3J0IHR5cGUgeyBEb3NGYWN0b3J5LCBEb3NNYWluRm4gfSBmcm9tICdqcy1kb3MnO1xuaW1wb3J0IHR5cGUgeyBEb3NDb21tYW5kSW50ZXJmYWNlIH0gZnJvbSAnanMtZG9zL2Rpc3QvdHlwZXNjcmlwdC9qcy1kb3MtY2knO1xuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcCwgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBEb3NXaW5kb3cgPSBXaW5kb3cgJiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHsgRG9zOiBEb3NGYWN0b3J5IH07XG5cbnR5cGUgRG9zQXBwID0ge1xuICBhcmdzPzogQXJyYXk8c3RyaW5nPjtcbiAgdXJsPzogc3RyaW5nO1xufTtcblxuY29uc3QgZG9zT3B0aW9ucyA9IHtcbiAgd2Rvc2JveFVybDogJy9saWJzL3dkb3Nib3guanMnLFxuICBvbnByb2dyZXNzOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGNvbnN0IERvc0FwcExvYWRlcjogRkM8RG9zQXBwPiA9ICh7IGFyZ3MgPSBbJy1jJywgJ0NMUyddLCB1cmwgfSkgPT4ge1xuICBsZXQgY2k6IERvc0NvbW1hbmRJbnRlcmZhY2U7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCksXG4gICAgbG9hZE1haW4gPSAobWFpbjogRG9zTWFpbkZuKSA9PiAoKSA9PlxuICAgICAgbWFpbihhcmdzKT8udGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgY2kgPSB2YWx1ZTtcbiAgICAgIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjYW52YXNFbGVtZW50IH0gPSBjYW52YXNSZWYgYXMge1xuICAgICAgICBjdXJyZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgIH0sXG4gICAgICB7IERvcyB9ID0gd2luZG93IGFzIERvc1dpbmRvdztcblxuICAgIERvcyhjYW52YXNFbGVtZW50LCBkb3NPcHRpb25zKT8udGhlbigoeyBmcywgbWFpbiB9KSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGZzPy5leHRyYWN0KHVybCk/LnRoZW4obG9hZE1haW4obWFpbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZE1haW4obWFpbikoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjaT8uZXhpdCgpO1xuICAgIH07XG4gIH0sIFtjYW52YXNSZWZdKTtcblxuICByZXF1aXJlKCdqcy1kb3MnKTtcblxuICByZXR1cm4gKFxuICAgIDxjYW52YXNcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRvc31cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2FudmFzUmVmLmN1cnJlbnQ/LmNsb3Nlc3QoJzpub3QobGkpW3RhYmluZGV4XScpKTtcbiAgICAgICAgY2FudmFzUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgICB9fVxuICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEb3NBcHBPcHRpb25zOiBQYXJ0aWFsPEFwcD4gPSB7XG4gIGhpZGVTY3JvbGxiYXJzOiB0cnVlLFxuICBsb2NrQXNwZWN0UmF0aW86IHRydWUsXG4gIHdpZHRoOiAzMjAsXG4gIGhlaWdodDogMjI0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKHtcbiAgY29tcG9uZW50OiBEb3NBcHBMb2FkZXIgYXMgRkM8QXBwQ29tcG9uZW50PixcbiAgaWNvbjogRG9zSWNvbixcbiAgbmFtZTogJ0RPUycsXG4gIC4uLkRvc0FwcE9wdGlvbnNcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Apps/Dos.tsx\n");

/***/ })

})