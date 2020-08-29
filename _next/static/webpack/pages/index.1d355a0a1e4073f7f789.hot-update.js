webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/Apps.tsx":
/*!***************************!*\
  !*** ./contexts/Apps.tsx ***!
  \***************************/
/*! exports provided: AppsContext, AppsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppsContext\", function() { return AppsContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppsProvider\", function() { return AppsProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Blog */ \"./components/Blog.tsx\");\n/* harmony import */ var _components_Games_CommanderKeen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Games/CommanderKeen */ \"./components/Games/CommanderKeen.tsx\");\n/* harmony import */ var _components_Games_Doom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Games/Doom */ \"./components/Games/Doom.tsx\");\n/* harmony import */ var _components_Games_DukeNukem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Games/DukeNukem */ \"./components/Games/DukeNukem.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/contexts/Apps.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Games = [_components_Games_Doom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _components_Games_CommanderKeen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_Games_DukeNukem__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\nvar initialApps = [_components_Blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"]].concat(Games);\n\nvar appReducer = function appReducer(apps, _ref) {\n  var update = _ref.update,\n      id = _ref.id;\n  return apps.map(function (app) {\n    return app.id === id ? _objectSpread(_objectSpread({}, app), update) : app;\n  });\n};\n\nvar AppsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({\n  apps: [],\n  updateApps: function updateApps() {\n    return null;\n  }\n});\nvar AppsProvider = function AppsProvider(_ref2) {\n  _s();\n\n  var children = _ref2.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(appReducer, initialApps),\n      apps = _useReducer[0],\n      updateApps = _useReducer[1];\n\n  return __jsx(AppsContext.Provider, {\n    value: {\n      apps: apps,\n      updateApps: updateApps\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(AppsProvider, \"kebjgX9VnJKxDSVcVgVVsI2Tb/w=\");\n\n_c = AppsProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"AppsProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXBwcy50c3g/ZGEwZCJdLCJuYW1lcyI6WyJHYW1lcyIsIkRvb20iLCJDb21tYW5kZXJLZWVuIiwiRHVrZU51a2VtIiwiaW5pdGlhbEFwcHMiLCJCbG9nIiwiYXBwUmVkdWNlciIsImFwcHMiLCJ1cGRhdGUiLCJpZCIsIm1hcCIsImFwcCIsIkFwcHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVwZGF0ZUFwcHMiLCJBcHBzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDQyw4REFBRCxFQUFPQyx1RUFBUCxFQUFzQkMsbUVBQXRCLENBQWQ7QUFTQSxJQUFNQyxXQUFpQixJQUFJQyx3REFBSixTQUFhTCxLQUFiLENBQXZCOztBQUVBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxNQUFlQyxNQUFmLFFBQWVBLE1BQWY7QUFBQSxNQUF1QkMsRUFBdkIsUUFBdUJBLEVBQXZCO0FBQUEsU0FDakJGLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUFVQSxHQUFHLENBQUNGLEVBQUosS0FBV0EsRUFBWCxtQ0FBcUJFLEdBQXJCLEdBQTZCSCxNQUE3QixJQUF3Q0csR0FBbEQ7QUFBQSxHQUFULENBRGlCO0FBQUEsQ0FBbkI7O0FBR08sSUFBTUMsV0FBVyxHQUFHQywyREFBYSxDQUdyQztBQUNETixNQUFJLEVBQUUsRUFETDtBQUVETyxZQUFVLEVBQUU7QUFBQSxXQUFNLElBQU47QUFBQTtBQUZYLENBSHFDLENBQWpDO0FBUUEsSUFBTUMsWUFBZ0IsR0FBRyxTQUFuQkEsWUFBbUIsUUFBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7O0FBQUEsb0JBQ3JCQyx3REFBVSxDQUFDWCxVQUFELEVBQWFGLFdBQWIsQ0FEVztBQUFBLE1BQ3pDRyxJQUR5QztBQUFBLE1BQ25DTyxVQURtQzs7QUFHaEQsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFUCxVQUFJLEVBQUpBLElBQUY7QUFBUU8sZ0JBQVUsRUFBVkE7QUFBUixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBREgsQ0FERjtBQUtELENBUk07O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRGlzcGF0Y2gsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG5pbXBvcnQgQmxvZyBmcm9tICdAL2NvbXBvbmVudHMvQmxvZyc7XG5pbXBvcnQgQ29tbWFuZGVyS2VlbiBmcm9tICdAL2NvbXBvbmVudHMvR2FtZXMvQ29tbWFuZGVyS2Vlbic7XG5pbXBvcnQgRG9vbSBmcm9tICdAL2NvbXBvbmVudHMvR2FtZXMvRG9vbSc7XG5pbXBvcnQgRHVrZU51a2VtIGZyb20gJ0AvY29tcG9uZW50cy9HYW1lcy9EdWtlTnVrZW0nO1xuXG5jb25zdCBHYW1lcyA9IFtEb29tLCBDb21tYW5kZXJLZWVuLCBEdWtlTnVrZW1dO1xuXG50eXBlIEFwcHMgPSBBcnJheTxBcHA+O1xuXG50eXBlIEFwcEFjdGlvbiA9IHtcbiAgdXBkYXRlOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcbiAgaWQ6IHN0cmluZztcbn07XG5cbmNvbnN0IGluaXRpYWxBcHBzOiBBcHBzID0gW0Jsb2csIC4uLkdhbWVzXTtcblxuY29uc3QgYXBwUmVkdWNlciA9IChhcHBzOiBBcHBzLCB7IHVwZGF0ZSwgaWQgfTogQXBwQWN0aW9uKSA9PlxuICBhcHBzLm1hcCgoYXBwKSA9PiAoYXBwLmlkID09PSBpZCA/IHsgLi4uYXBwLCAuLi51cGRhdGUgfSA6IGFwcCkpO1xuXG5leHBvcnQgY29uc3QgQXBwc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PHtcbiAgYXBwczogQXBwcztcbiAgdXBkYXRlQXBwczogRGlzcGF0Y2g8QXBwQWN0aW9uPjtcbn0+KHtcbiAgYXBwczogW10sXG4gIHVwZGF0ZUFwcHM6ICgpID0+IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgQXBwc1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2FwcHMsIHVwZGF0ZUFwcHNdID0gdXNlUmVkdWNlcihhcHBSZWR1Y2VyLCBpbml0aWFsQXBwcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYXBwcywgdXBkYXRlQXBwcyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/Apps.tsx\n");

/***/ })

})