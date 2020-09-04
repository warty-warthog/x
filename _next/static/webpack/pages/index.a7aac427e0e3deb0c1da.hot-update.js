webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/utils.tsx":
/*!*************************!*\
  !*** ./utils/utils.tsx ***!
  \*************************/
/*! exports provided: appendElement, appToFocus, appToUnfocus, appToBackground, appToForeground, appToStackTop, focusOnDrag, lockDocumentTitle, updatePosition, updateSize, focusResizableElementRef, sortByLastRunning, newDateTimeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendElement\", function() { return appendElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appToFocus\", function() { return appToFocus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appToUnfocus\", function() { return appToUnfocus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appToBackground\", function() { return appToBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appToForeground\", function() { return appToForeground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appToStackTop\", function() { return appToStackTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusOnDrag\", function() { return focusOnDrag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lockDocumentTitle\", function() { return lockDocumentTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePosition\", function() { return updatePosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSize\", function() { return updateSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusResizableElementRef\", function() { return focusResizableElementRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortByLastRunning\", function() { return sortByLastRunning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newDateTimeFormat\", function() { return newDateTimeFormat; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nvar appendElement = function appendElement(parentElement, childElement) {\n  if (parentElement && childElement) {\n    var _parentElement$append;\n\n    (_parentElement$append = parentElement.appendChild) === null || _parentElement$append === void 0 ? void 0 : _parentElement$append.call(parentElement, childElement);\n  }\n};\nvar appToFocus = function appToFocus(apps, updateApp, id) {\n  appToForeground(apps, updateApp, id);\n  appToStackTop(apps, updateApp, id);\n};\nvar appToUnfocus = function appToUnfocus(apps, updateApp, id) {\n  return appToBackground(apps, updateApp, id);\n};\nvar appToBackground = function appToBackground(apps, updateApp, id) {\n  return updateApp({\n    id: id,\n    updates: {\n      foreground: false\n    }\n  });\n};\nvar appToForeground = function appToForeground(apps, updateApp, id) {\n  return apps.forEach(function (_ref) {\n    var appId = _ref.id;\n    updateApp({\n      id: appId,\n      updates: {\n        foreground: id === appId\n      }\n    });\n  });\n};\nvar appToStackTop = function appToStackTop(apps, updateApp, id) {\n  return apps.forEach(function (_ref2) {\n    var appId = _ref2.id,\n        stackOrder = _ref2.stackOrder;\n    updateApp({\n      id: appId,\n      updates: {\n        stackOrder: [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder.filter(function (windowId) {\n          return windowId !== id;\n        })))\n      }\n    });\n  });\n};\nvar focusOnDrag = function focusOnDrag(_event, _ref3) {\n  var node = _ref3.node;\n  return node.focus();\n};\nvar lockDocumentTitle = function lockDocumentTitle() {\n  var _Object$getOwnPropert;\n\n  if (typeof ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(document, 'title')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set) === 'undefined') {\n    Object.defineProperty(document, 'title', {\n      set: function set() {}\n    });\n  }\n};\nvar updatePosition = function updatePosition(updateApp, id) {\n  return function (_event, _ref4) {\n    var x = _ref4.x,\n        y = _ref4.y;\n    return updateApp({\n      id: id,\n      updates: {\n        x: x,\n        y: y\n      }\n    });\n  };\n};\nvar updateSize = function updateSize(updateApp, id) {\n  return function (_event, _direction, _ref5) {\n    var offsetWidth = _ref5.offsetWidth,\n        offsetHeight = _ref5.offsetHeight;\n    return updateApp({\n      id: id,\n      updates: {\n        height: offsetHeight,\n        width: offsetWidth\n      }\n    });\n  };\n};\nvar focusResizableElementRef = function focusResizableElementRef(elementRef) {\n  var _elementRef$current, _elementRef$current$r, _elementRef$current$r2, _elementRef$current$r3;\n\n  return elementRef === null || elementRef === void 0 ? void 0 : (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : (_elementRef$current$r = _elementRef$current.resizableElement) === null || _elementRef$current$r === void 0 ? void 0 : (_elementRef$current$r2 = _elementRef$current$r.current) === null || _elementRef$current$r2 === void 0 ? void 0 : (_elementRef$current$r3 = _elementRef$current$r2.focus) === null || _elementRef$current$r3 === void 0 ? void 0 : _elementRef$current$r3.call(_elementRef$current$r2);\n};\nvar sortByLastRunning = function sortByLastRunning(a, b) {\n  return a.lastRunning.getTime() - b.lastRunning.getTime();\n};\nvar newDateTimeFormat = function newDateTimeFormat(options) {\n  return new Intl.DateTimeFormat(\"en-US\", options);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbHMudHN4PzZjMWQiXSwibmFtZXMiOlsiYXBwZW5kRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJjaGlsZEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFwcFRvRm9jdXMiLCJhcHBzIiwidXBkYXRlQXBwIiwiaWQiLCJhcHBUb0ZvcmVncm91bmQiLCJhcHBUb1N0YWNrVG9wIiwiYXBwVG9VbmZvY3VzIiwiYXBwVG9CYWNrZ3JvdW5kIiwidXBkYXRlcyIsImZvcmVncm91bmQiLCJmb3JFYWNoIiwiYXBwSWQiLCJzdGFja09yZGVyIiwiZmlsdGVyIiwid2luZG93SWQiLCJmb2N1c09uRHJhZyIsIl9ldmVudCIsIm5vZGUiLCJmb2N1cyIsImxvY2tEb2N1bWVudFRpdGxlIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZG9jdW1lbnQiLCJzZXQiLCJkZWZpbmVQcm9wZXJ0eSIsInVwZGF0ZVBvc2l0aW9uIiwieCIsInkiLCJ1cGRhdGVTaXplIiwiX2RpcmVjdGlvbiIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJlbGVtZW50UmVmIiwiY3VycmVudCIsInJlc2l6YWJsZUVsZW1lbnQiLCJzb3J0QnlMYXN0UnVubmluZyIsImEiLCJiIiwibGFzdFJ1bm5pbmciLCJnZXRUaW1lIiwibmV3RGF0ZVRpbWVGb3JtYXQiLCJvcHRpb25zIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVdPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDM0JDLGFBRDJCLEVBRTNCQyxZQUYyQixFQUdsQjtBQUNULE1BQUlELGFBQWEsSUFBSUMsWUFBckIsRUFBbUM7QUFBQTs7QUFDakMsNkJBQUFELGFBQWEsQ0FBQ0UsV0FBZCxxRkFBQUYsYUFBYSxF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LFNBQUMsRUFBREE7QUFBTDtBQUFmLEtBQUQsQ0FEVztBQUFBLEdBSFE7QUFBQSxDQUF2QjtBQU1BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQ3hCMUIsU0FEd0IsRUFFeEJDLEVBRndCO0FBQUEsU0FHRixVQUN0QmEsTUFEc0IsRUFFdEJhLFVBRnNCO0FBQUEsUUFHcEJDLFdBSG9CLFNBR3BCQSxXQUhvQjtBQUFBLFFBR1BDLFlBSE8sU0FHUEEsWUFITztBQUFBLFdBS3RCN0IsU0FBUyxDQUFDO0FBQUVDLFFBQUUsRUFBRkEsRUFBRjtBQUFNSyxhQUFPLEVBQUU7QUFBRXdCLGNBQU0sRUFBRUQsWUFBVjtBQUF3QkUsYUFBSyxFQUFFSDtBQUEvQjtBQUFmLEtBQUQsQ0FMYTtBQUFBLEdBSEU7QUFBQSxDQUFuQjtBQVVBLElBQU1JLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsVUFBRDtBQUFBOztBQUFBLFNBQ3RDQSxVQURzQyxhQUN0Q0EsVUFEc0MsOENBQ3RDQSxVQUFVLENBQUVDLE9BRDBCLGlGQUN0QyxvQkFBcUJDLGdCQURpQixvRkFDdEMsc0JBQXVDRCxPQURELHFGQUN0Qyx1QkFBZ0RsQixLQURWLDJEQUN0QyxtREFEc0M7QUFBQSxDQUFqQztBQUdBLElBQU1vQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBU0MsQ0FBVDtBQUFBLFNBQy9CRCxDQUFDLENBQUNFLFdBQUYsQ0FBY0MsT0FBZCxLQUEwQkYsQ0FBQyxDQUFDQyxXQUFGLENBQWNDLE9BQWQsRUFESztBQUFBLENBQTFCO0FBR0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxPQUFEO0FBQUEsU0FDL0IsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCQyxPQUF4QixFQUE0Q0gsT0FBNUMsQ0FEK0I7QUFBQSxDQUExQiIsImZpbGUiOiIuL3V0aWxzL3V0aWxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgRHJhZ2dhYmxlRGF0YSxcbiAgUm5kLFxuICBSbmREcmFnQ2FsbGJhY2ssXG4gIFJuZERyYWdFdmVudCxcbiAgUm5kUmVzaXplQ2FsbGJhY2tcbn0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB0eXBlIHsgQXBwQWN0aW9uLCBBcHBzIH0gZnJvbSAnQC9jb250ZXh0cy9BcHBzJztcbmltcG9ydCB0eXBlIHsgRGlzcGF0Y2gsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIEFwcCBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRFbGVtZW50ID0gKFxuICBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2hpbGRFbGVtZW50OiBIVE1MRWxlbWVudFxuKTogdm9pZCA9PiB7XG4gIGlmIChwYXJlbnRFbGVtZW50ICYmIGNoaWxkRWxlbWVudCkge1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQ/LihjaGlsZEVsZW1lbnQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXBwVG9Gb2N1cyA9IChcbiAgYXBwczogQXBwcyxcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+IHtcbiAgYXBwVG9Gb3JlZ3JvdW5kKGFwcHMsIHVwZGF0ZUFwcCwgaWQpO1xuICBhcHBUb1N0YWNrVG9wKGFwcHMsIHVwZGF0ZUFwcCwgaWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcFRvVW5mb2N1cyA9IChcbiAgYXBwczogQXBwcyxcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+IGFwcFRvQmFja2dyb3VuZChhcHBzLCB1cGRhdGVBcHAsIGlkKTtcblxuZXhwb3J0IGNvbnN0IGFwcFRvQmFja2dyb3VuZCA9IChcbiAgYXBwczogQXBwcyxcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiB2b2lkID0+XG4gIHVwZGF0ZUFwcCh7XG4gICAgaWQsXG4gICAgdXBkYXRlczogeyBmb3JlZ3JvdW5kOiBmYWxzZSB9XG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYXBwVG9Gb3JlZ3JvdW5kID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHsgZm9yZWdyb3VuZDogaWQgPT09IGFwcElkIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBUb1N0YWNrVG9wID0gKFxuICBhcHBzOiBBcHBzLFxuICB1cGRhdGVBcHA6IERpc3BhdGNoPEFwcEFjdGlvbj4sXG4gIGlkOiBzdHJpbmdcbik6IHZvaWQgPT5cbiAgYXBwcy5mb3JFYWNoKCh7IGlkOiBhcHBJZCwgc3RhY2tPcmRlciB9KSA9PiB7XG4gICAgdXBkYXRlQXBwKHtcbiAgICAgIGlkOiBhcHBJZCxcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgc3RhY2tPcmRlcjogW1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIC4uLnN0YWNrT3JkZXIuZmlsdGVyKCh3aW5kb3dJZDogc3RyaW5nKSA9PiB3aW5kb3dJZCAhPT0gaWQpXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmb2N1c09uRHJhZyA9IChcbiAgX2V2ZW50OiBSbmREcmFnRXZlbnQsXG4gIHsgbm9kZSB9OiBEcmFnZ2FibGVEYXRhXG4pOiB2b2lkID0+IG5vZGUuZm9jdXMoKTtcblxuZXhwb3J0IGNvbnN0IGxvY2tEb2N1bWVudFRpdGxlID0gKCk6IHZvaWQgPT4ge1xuICBpZiAoXG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZG9jdW1lbnQsICd0aXRsZScpPy5zZXQgPT09XG4gICAgJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAndGl0bGUnLCB7IHNldDogKCkgPT4ge30gfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChcbiAgdXBkYXRlQXBwOiBEaXNwYXRjaDxBcHBBY3Rpb24+LFxuICBpZDogc3RyaW5nXG4pOiBSbmREcmFnQ2FsbGJhY2sgPT4gKF9ldmVudCwgeyB4LCB5IH0pOiB2b2lkID0+XG4gIHVwZGF0ZUFwcCh7IGlkLCB1cGRhdGVzOiB7IHgsIHkgfSB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNpemUgPSAoXG4gIHVwZGF0ZUFwcDogRGlzcGF0Y2g8QXBwQWN0aW9uPixcbiAgaWQ6IHN0cmluZ1xuKTogUm5kUmVzaXplQ2FsbGJhY2sgPT4gKFxuICBfZXZlbnQsXG4gIF9kaXJlY3Rpb24sXG4gIHsgb2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCB9XG4pOiB2b2lkID0+XG4gIHVwZGF0ZUFwcCh7IGlkLCB1cGRhdGVzOiB7IGhlaWdodDogb2Zmc2V0SGVpZ2h0LCB3aWR0aDogb2Zmc2V0V2lkdGggfSB9KTtcblxuZXhwb3J0IGNvbnN0IGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiA9IChlbGVtZW50UmVmOiBSZWZPYmplY3Q8Um5kPik6IHZvaWQgPT5cbiAgZWxlbWVudFJlZj8uY3VycmVudD8ucmVzaXphYmxlRWxlbWVudD8uY3VycmVudD8uZm9jdXM/LigpO1xuXG5leHBvcnQgY29uc3Qgc29ydEJ5TGFzdFJ1bm5pbmcgPSAoYTogQXBwLCBiOiBBcHApOiBudW1iZXIgPT5cbiAgYS5sYXN0UnVubmluZy5nZXRUaW1lKCkgLSBiLmxhc3RSdW5uaW5nLmdldFRpbWUoKTtcblxuZXhwb3J0IGNvbnN0IG5ld0RhdGVUaW1lRm9ybWF0ID0gKG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zKTogSW50bC5EYXRlVGltZUZvcm1hdCA9PlxuICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChwcm9jZXNzLmVudi5sb2NhbGUsIG9wdGlvbnMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/utils.tsx\n");

/***/ })

})