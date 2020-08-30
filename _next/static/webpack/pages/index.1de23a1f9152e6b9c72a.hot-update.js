webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar options = {\n  __initialWindowLayout: {\n    main: {\n      position: {\n        x: 0,\n        y: 0\n      }\n    },\n    playlist: {\n      position: {\n        x: 0,\n        y: 116\n      }\n    }\n  },\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  },\n  zIndex: 1750\n};\nvar closeEqualizer = {\n  type: 'CLOSE_WINDOW',\n  windowId: 'equalizer'\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize;\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      onTouchEventsOnly = function onTouchEventsOnly(e) {\n    if (e instanceof MouseEvent) {\n      e.preventDefault();\n      e.stopPropagation();\n    }\n  },\n      loadWebAmp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _elementRef$current;\n\n      var _yield$import, Webamp, webamp;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              Webamp = _yield$import[\"default\"];\n              webamp = new Webamp(options);\n              webamp.store.dispatch(closeEqualizer);\n              onClose && webamp.onClose(onClose);\n              onMinimize && webamp.onMinimize(onMinimize);\n              _context.next = 10;\n              return webamp.renderWhenReady(elementRef.current);\n\n            case 10:\n              (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.appendChild(document.getElementById('webamp') || new HTMLElement());\n              return _context.abrupt(\"return\", webamp);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebAmp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var webamp;\n    loadWebAmp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return function () {\n      webamp.dispose();\n    };\n  }, [elementRef]);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_4__[\"Rnd\"], {\n    enableResizing: false,\n    dragHandleClassName: \"#title-bar\",\n    cancel: \"#minimize, #close\",\n    onDrag: onTouchEventsOnly,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"](Winamp, _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default.a, 'winamp', 'Winamp', false));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsib3B0aW9ucyIsIl9faW5pdGlhbFdpbmRvd0xheW91dCIsIm1haW4iLCJwb3NpdGlvbiIsIngiLCJ5IiwicGxheWxpc3QiLCJpbml0aWFsVHJhY2tzIiwibWV0YURhdGEiLCJhcnRpc3QiLCJ0aXRsZSIsInVybCIsImluaXRpYWxTa2luIiwiekluZGV4IiwiY2xvc2VFcXVhbGl6ZXIiLCJ0eXBlIiwid2luZG93SWQiLCJXaW5hbXAiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJvblRvdWNoRXZlbnRzT25seSIsImUiLCJNb3VzZUV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJsb2FkV2ViQW1wIiwiV2ViYW1wIiwid2ViYW1wIiwic3RvcmUiLCJkaXNwYXRjaCIsInJlbmRlcldoZW5SZWFkeSIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIVE1MRWxlbWVudCIsInVzZUVmZmVjdCIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJkaXNwb3NlIiwiQXBwIiwiV2luYW1wSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBcUJBLElBQU1BLE9BQWlDLEdBQUc7QUFDeENDLHVCQUFxQixFQUFFO0FBQ3JCQyxRQUFJLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQUVDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRTtBQUFYO0FBQVosS0FEZTtBQUVyQkMsWUFBUSxFQUFFO0FBQUVILGNBQVEsRUFBRTtBQUFFQyxTQUFDLEVBQUUsQ0FBTDtBQUFRQyxTQUFDLEVBQUU7QUFBWDtBQUFaO0FBRlcsR0FEaUI7QUFLeENFLGVBQWEsRUFBRSxDQUNiO0FBQ0VDLFlBQVEsRUFBRTtBQUNSQyxZQUFNLEVBQUUsZUFEQTtBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQURaO0FBS0VDLE9BQUcsRUFBRTtBQUxQLEdBRGEsQ0FMeUI7QUFjeENDLGFBQVcsRUFBRTtBQUNYRCxPQUFHLEVBQUU7QUFETSxHQWQyQjtBQWlCeENFLFFBQU0sRUFBRTtBQWpCZ0MsQ0FBMUM7QUFvQkEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUUsY0FEZTtBQUVyQkMsVUFBUSxFQUFFO0FBRlcsQ0FBdkI7O0FBS0EsSUFBTUMsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDNUQsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFjLElBQWQsQ0FBekI7QUFBQSxNQUNFQyxpQkFBa0MsR0FBRyxTQUFyQ0EsaUJBQXFDLENBQUNDLENBQUQsRUFBYTtBQUNoRCxRQUFJQSxDQUFDLFlBQVlDLFVBQWpCLEVBQTZCO0FBQzNCRCxPQUFDLENBQUNFLGNBQUY7QUFDQUYsT0FBQyxDQUFDRyxlQUFGO0FBQ0Q7QUFDRixHQU5IO0FBQUEsTUFPRUMsVUFBVTtBQUFBLGlNQUFHO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1QixnSkFEdkI7O0FBQUE7QUFBQTtBQUNNQyxvQkFETjtBQUVUQyxvQkFGUyxHQUVBLElBQUlELE1BQUosQ0FBVzVCLE9BQVgsQ0FGQTtBQUlYNkIsb0JBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxRQUFiLENBQXNCakIsY0FBdEI7QUFDQUkscUJBQU8sSUFBSVcsTUFBTSxDQUFDWCxPQUFQLENBQWVBLE9BQWYsQ0FBWDtBQUNBQyx3QkFBVSxJQUFJVSxNQUFNLENBQUNWLFVBQVAsQ0FBa0JBLFVBQWxCLENBQWQ7QUFOVztBQUFBLHFCQU9MVSxNQUFNLENBQUNHLGVBQVAsQ0FBdUJaLFVBQVUsQ0FBQ2EsT0FBbEMsQ0FQSzs7QUFBQTtBQVNYLHFDQUFBYixVQUFVLENBQUNhLE9BQVgsNEVBQW9CQyxXQUFwQixDQUNFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsS0FBcUMsSUFBSUMsV0FBSixFQUR2QztBQVRXLCtDQWFKUixNQWJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FQWjs7QUF1QkFXLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULE1BQUo7QUFFQUYsY0FBVSxHQUFHWSxJQUFiLENBQWtCLFVBQUNDLFlBQUQsRUFBa0I7QUFDbENYLFlBQU0sR0FBR1csWUFBVDtBQUNELEtBRkQ7QUFJQSxXQUFPLFlBQU07QUFDWFgsWUFBTSxDQUFDWSxPQUFQO0FBQ0QsS0FGRDtBQUdELEdBVlEsRUFVTixDQUFDckIsVUFBRCxDQVZNLENBQVQ7QUFZQSxTQUNFLE1BQUMsNkNBQUQ7QUFDRSxrQkFBYyxFQUFFLEtBRGxCO0FBRUUsdUJBQW1CLEVBQUMsWUFGdEI7QUFHRSxVQUFNLEVBQUMsbUJBSFQ7QUFJRSxVQUFNLEVBQUVFLGlCQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFTLE9BQUcsRUFBRUYsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVVELENBOUNEOztHQUFNSCxNOztLQUFBQSxNO0FBZ0RTLG1FQUFJeUIscURBQUosQ0FBUXpCLE1BQVIsRUFBZ0IwQiwrREFBaEIsRUFBNEIsUUFBNUIsRUFBc0MsUUFBdEMsRUFBZ0QsS0FBaEQsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luYW1wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaW5hbXBJY29uIGZyb20gJ0AvYXNzZXRzL2ljb25zL1dpbmFtcC5wbmcnO1xuXG5pbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgV2ViYW1wIGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgdHlwZSB7IE9wdGlvbnMgfSBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBSbmREcmFnQ2FsbGJhY2sgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IEFwcCwgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL2NvbnRleHRzL0FwcCc7XG5cbnR5cGUgV2ViYW1wU3RvcmVBY3Rpb24gPSB7IHR5cGU6IHN0cmluZzsgd2luZG93SWQ6IHN0cmluZyB9O1xuXG50eXBlIFdlYmFtcFN0b3JlID0ge1xuICBzdG9yZToge1xuICAgIGRpc3BhdGNoOiAoYWN0aW9uOiBXZWJhbXBTdG9yZUFjdGlvbikgPT4gdm9pZDtcbiAgfTtcbn07XG5cbnR5cGUgUHJpdmF0ZU9wdGlvbnMgPSB7XG4gIF9faW5pdGlhbFdpbmRvd0xheW91dD86IHtcbiAgICBbd2luZG93SWQ6IHN0cmluZ106IHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IG51bWJlcjtcbiAgICAgICAgeTogbnVtYmVyO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3Qgb3B0aW9uczogT3B0aW9ucyAmIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ6IHtcbiAgICBtYWluOiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSB9LFxuICAgIHBsYXlsaXN0OiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDExNiB9IH1cbiAgfSxcbiAgaW5pdGlhbFRyYWNrczogW1xuICAgIHtcbiAgICAgIG1ldGFEYXRhOiB7XG4gICAgICAgIGFydGlzdDogJ0RKIE1pa2UgTGxhbWEnLFxuICAgICAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gICAgICB9LFxuICAgICAgdXJsOiAnL21wMy9sbGFtYS0yLjkxLm1wMydcbiAgICB9XG4gIF0sXG4gIGluaXRpYWxTa2luOiB7XG4gICAgdXJsOiAnL3NraW5zL1NweUFNUF9Qcm9mZXNzaW9uYWxfRWRpdGlvbl92NS53c3onXG4gIH0sXG4gIHpJbmRleDogMTc1MFxufTtcblxuY29uc3QgY2xvc2VFcXVhbGl6ZXIgPSB7XG4gIHR5cGU6ICdDTE9TRV9XSU5ET1cnLFxuICB3aW5kb3dJZDogJ2VxdWFsaXplcidcbn07XG5cbmNvbnN0IFdpbmFtcDogRkM8QXBwQ29tcG9uZW50PiA9ICh7IG9uQ2xvc2UsIG9uTWluaW1pemUgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKSxcbiAgICBvblRvdWNoRXZlbnRzT25seTogUm5kRHJhZ0NhbGxiYWNrID0gKGUpOiB2b2lkID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkV2ViQW1wID0gYXN5bmMgKCk6IFByb21pc2U8V2ViYW1wICYgV2ViYW1wU3RvcmU+ID0+IHtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wIH0gPSBhd2FpdCBpbXBvcnQoJ3dlYmFtcCcpLFxuICAgICAgICB3ZWJhbXAgPSBuZXcgV2ViYW1wKG9wdGlvbnMpIGFzIFdlYmFtcCAmIFdlYmFtcFN0b3JlO1xuXG4gICAgICB3ZWJhbXAuc3RvcmUuZGlzcGF0Y2goY2xvc2VFcXVhbGl6ZXIpO1xuICAgICAgb25DbG9zZSAmJiB3ZWJhbXAub25DbG9zZShvbkNsb3NlKTtcbiAgICAgIG9uTWluaW1pemUgJiYgd2ViYW1wLm9uTWluaW1pemUob25NaW5pbWl6ZSk7XG4gICAgICBhd2FpdCB3ZWJhbXAucmVuZGVyV2hlblJlYWR5KGVsZW1lbnRSZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgIGVsZW1lbnRSZWYuY3VycmVudD8uYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSB8fCBuZXcgSFRNTEVsZW1lbnQoKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHdlYmFtcDtcbiAgICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wICYgV2ViYW1wU3RvcmU7XG5cbiAgICBsb2FkV2ViQW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICB3ZWJhbXAgPSBsb2FkZWRXZWJhbXA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2ViYW1wLmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbZWxlbWVudFJlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgZW5hYmxlUmVzaXppbmc9e2ZhbHNlfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cIiN0aXRsZS1iYXJcIlxuICAgICAgY2FuY2VsPVwiI21pbmltaXplLCAjY2xvc2VcIlxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICA+XG4gICAgICA8YXJ0aWNsZSByZWY9e2VsZW1lbnRSZWZ9IC8+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKFdpbmFtcCwgV2luYW1wSWNvbiwgJ3dpbmFtcCcsICdXaW5hbXAnLCBmYWxzZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})