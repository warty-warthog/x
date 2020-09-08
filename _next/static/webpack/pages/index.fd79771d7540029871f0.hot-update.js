webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Apps/Winamp.tsx":
/*!************************************!*\
  !*** ./components/Apps/Winamp.tsx ***!
  \************************************/
/*! exports provided: WinampLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WinampLoader\", function() { return WinampLoader; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.tsx\");\n/* harmony import */ var _contexts_Apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/Apps */ \"./contexts/Apps.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Apps/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar touchControls = \"\\n  #minimize, #close, #volume, #balance, #equalizer-button, #playlist-button, #position, #eject,\\n  .actions, .shuffle-repeat, .playlist-middle, .playlist-bottom, #playlist-close-button, #equalizer-window\";\nvar demoTrack = {\n  metaData: {\n    artist: 'DJ Mike Llama',\n    title: \"Llama Whippin' Intro\"\n  },\n  url: '/mp3/demo.mp3'\n};\nvar options = {\n  __initialWindowLayout: {\n    main: {\n      position: {\n        x: 0,\n        y: 0\n      }\n    },\n    playlist: {\n      position: {\n        x: 0,\n        y: 116\n      }\n    },\n    equalizer: {\n      position: {\n        x: 0,\n        y: 232\n      }\n    }\n  },\n  availableSkins: [{\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz',\n    name: 'SpyAMP Professional Edition v5'\n  }]\n};\nvar closeEqualizer = {\n  type: 'CLOSE_WINDOW',\n  windowId: 'equalizer'\n};\nvar WinampLoader = function WinampLoader(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      foreground = _ref.foreground,\n      _ref$x = _ref.x,\n      x = _ref$x === void 0 ? 0 : _ref$x,\n      _ref$y = _ref.y,\n      y = _ref$y === void 0 ? 0 : _ref$y,\n      url = _ref.url;\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_Apps__WEBPACK_IMPORTED_MODULE_5__[\"AppsContext\"]),\n      position = _useContext.position,\n      onTouchEventsOnly = function onTouchEventsOnly(e) {\n    if (e instanceof MouseEvent) {\n      e.preventDefault();\n      e.stopPropagation();\n    }\n  },\n      loadWebAmp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _webamp$store;\n\n      var _yield$import, Webamp, webamp, _ref3, containerElement, webampElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              Webamp = _yield$import[\"default\"];\n              webamp = new Webamp(options);\n              _ref3 = elementRef;\n              containerElement = _ref3.current;\n              webamp === null || webamp === void 0 ? void 0 : (_webamp$store = webamp.store) === null || _webamp$store === void 0 ? void 0 : _webamp$store.dispatch(closeEqualizer);\n              onClose && (webamp === null || webamp === void 0 ? void 0 : webamp.onClose(onClose));\n              onMinimize && (webamp === null || webamp === void 0 ? void 0 : webamp.onMinimize(onMinimize)); // TODO: Doesn't hide seek bar if playing\n\n              _context.next = 12;\n              return webamp === null || webamp === void 0 ? void 0 : webamp.renderWhenReady(containerElement);\n\n            case 12:\n              webampElement = document.getElementById('webamp');\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"appendElement\"])(containerElement, webampElement);\n              webampElement === null || webampElement === void 0 ? void 0 : webampElement.focus();\n              onFocus === null || onFocus === void 0 ? void 0 : onFocus();\n\n              if (url === null || url === void 0 ? void 0 : url.includes('.wsz')) {\n                webamp === null || webamp === void 0 ? void 0 : webamp.appendTracks([demoTrack]);\n                webamp === null || webamp === void 0 ? void 0 : webamp.setSkinFromUrl(url);\n              } else {\n                webamp === null || webamp === void 0 ? void 0 : webamp.setTracksToPlay([url ? {\n                  url: url,\n                  metaData: {\n                    artist: '',\n                    title: ''\n                  }\n                } : demoTrack]);\n              }\n\n              return _context.abrupt(\"return\", webamp);\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebAmp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var webamp;\n    loadWebAmp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return function () {\n      var _webamp;\n\n      (_webamp = webamp) === null || _webamp === void 0 ? void 0 : _webamp.dispose();\n    };\n  }, [elementRef]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (foreground) {\n      var _elementRef$current, _elementRef$current$c;\n\n      elementRef === null || elementRef === void 0 ? void 0 : (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : (_elementRef$current$c = _elementRef$current.click) === null || _elementRef$current$c === void 0 ? void 0 : _elementRef$current$c.call(_elementRef$current); // elementRef?.current?.parentElement?.focus();\n    }\n  }, [foreground, elementRef]);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_3__[\"Rnd\"], {\n    \"default\": {\n      x: x / 2,\n      y: y / 2,\n      width: 275,\n      height: 232\n    },\n    enableResizing: false,\n    enableUserSelectHack: false,\n    dragHandleClassName: \"draggable\",\n    cancel: touchControls,\n    onDrag: onTouchEventsOnly,\n    onFocus: onFocus,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"focusOnDrag\"],\n    onDragStop: position === null || position === void 0 ? void 0 : position('winamp'),\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(WinampLoader, \"cwE+ZmVSQ3A3Q6hLMzLHb3y3jVg=\");\n\n_c = WinampLoader;\n\nvar _c;\n\n$RefreshReg$(_c, \"WinampLoader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBzL1dpbmFtcC50c3g/YzQ5ZSJdLCJuYW1lcyI6WyJ0b3VjaENvbnRyb2xzIiwiZGVtb1RyYWNrIiwibWV0YURhdGEiLCJhcnRpc3QiLCJ0aXRsZSIsInVybCIsIm9wdGlvbnMiLCJfX2luaXRpYWxXaW5kb3dMYXlvdXQiLCJtYWluIiwicG9zaXRpb24iLCJ4IiwieSIsInBsYXlsaXN0IiwiZXF1YWxpemVyIiwiYXZhaWxhYmxlU2tpbnMiLCJuYW1lIiwiY2xvc2VFcXVhbGl6ZXIiLCJ0eXBlIiwid2luZG93SWQiLCJXaW5hbXBMb2FkZXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJ6SW5kZXgiLCJtaW5pbWl6ZWQiLCJmb3JlZ3JvdW5kIiwiZWxlbWVudFJlZiIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJBcHBzQ29udGV4dCIsIm9uVG91Y2hFdmVudHNPbmx5IiwiZSIsIk1vdXNlRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImxvYWRXZWJBbXAiLCJXZWJhbXAiLCJ3ZWJhbXAiLCJjb250YWluZXJFbGVtZW50IiwiY3VycmVudCIsInN0b3JlIiwiZGlzcGF0Y2giLCJyZW5kZXJXaGVuUmVhZHkiLCJ3ZWJhbXBFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZEVsZW1lbnQiLCJmb2N1cyIsImluY2x1ZGVzIiwiYXBwZW5kVHJhY2tzIiwic2V0U2tpbkZyb21VcmwiLCJzZXRUcmFja3NUb1BsYXkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwibG9hZGVkV2ViYW1wIiwiZGlzcG9zZSIsImNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJmb2N1c09uRHJhZyIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQXFCQSxJQUFNQSxhQUFhLGtOQUFuQjtBQUlBLElBQU1D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LElBQUFBLFVBQVUsV0FBVixtQ0FBQUEsVUFBVSxDQUFFYSxPQUFaLHFHQUFxQmlCLEtBQXJCLDBHQURjLENBRWQ7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDL0IsVUFBRCxFQUFhQyxVQUFiLENBTE0sQ0FBVDtBQU9BLFNBQ0UsTUFBQyw2Q0FBRDtBQUNFLGVBQVM7QUFBRWhCLE9BQUMsRUFBRUEsQ0FBQyxHQUFHLENBQVQ7QUFBWUMsT0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBbkI7QUFBc0I4QyxXQUFLLEVBQUUsR0FBN0I7QUFBa0NDLFlBQU0sRUFBRTtBQUExQyxLQURYO0FBRUUsa0JBQWMsRUFBRSxLQUZsQjtBQUdFLHdCQUFvQixFQUFFLEtBSHhCO0FBSUUsdUJBQW1CLEVBQUMsV0FKdEI7QUFLRSxVQUFNLEVBQUUxRCxhQUxWO0FBTUUsVUFBTSxFQUFFOEIsaUJBTlY7QUFPRSxXQUFPLEVBQUVSLE9BUFg7QUFRRSxlQUFXLEVBQUVxQywyREFSZjtBQVNFLGNBQVUsRUFBRWxELFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFHLFFBQUgsQ0FUdEI7QUFVRSxTQUFLLEVBQUU7QUFBRWMsWUFBTSxFQUFOQSxNQUFGO0FBQVVxQyxnQkFBVSxFQUFFcEMsU0FBUyxHQUFHLFFBQUgsR0FBYztBQUE3QyxLQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUFTLE9BQUcsRUFBRUUsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERjtBQWdCRCxDQWhGTTs7R0FBTVAsWTs7S0FBQUEsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwcy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrIH0gZnJvbSAncmVhY3Qtcm5kJztcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHsgYXBwZW5kRWxlbWVudCwgZm9jdXNPbkRyYWcgfSBmcm9tICdAL3V0aWxzL2VsZW1lbnRzJztcbmltcG9ydCBBcHAgZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuaW1wb3J0IHsgQXBwc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL0FwcHMnO1xuXG50eXBlIFdlYmFtcFN0b3JlQWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHdpbmRvd0lkOiBzdHJpbmcgfTtcblxudHlwZSBXZWJhbXBTdG9yZSA9IHtcbiAgc3RvcmU6IHtcbiAgICBkaXNwYXRjaDogKGFjdGlvbjogV2ViYW1wU3RvcmVBY3Rpb24pID0+IHZvaWQ7XG4gIH07XG59O1xuXG50eXBlIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ/OiB7XG4gICAgW3dpbmRvd0lkOiBzdHJpbmddOiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvdWNoQ29udHJvbHMgPSBgXG4gICNtaW5pbWl6ZSwgI2Nsb3NlLCAjdm9sdW1lLCAjYmFsYW5jZSwgI2VxdWFsaXplci1idXR0b24sICNwbGF5bGlzdC1idXR0b24sICNwb3NpdGlvbiwgI2VqZWN0LFxuICAuYWN0aW9ucywgLnNodWZmbGUtcmVwZWF0LCAucGxheWxpc3QtbWlkZGxlLCAucGxheWxpc3QtYm90dG9tLCAjcGxheWxpc3QtY2xvc2UtYnV0dG9uLCAjZXF1YWxpemVyLXdpbmRvd2A7XG5cbmNvbnN0IGRlbW9UcmFjayA9IHtcbiAgbWV0YURhdGE6IHtcbiAgICBhcnRpc3Q6ICdESiBNaWtlIExsYW1hJyxcbiAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gIH0sXG4gIHVybDogJy9tcDMvZGVtby5tcDMnXG59O1xuXG5jb25zdCBvcHRpb25zOiBPcHRpb25zICYgUHJpdmF0ZU9wdGlvbnMgPSB7XG4gIF9faW5pdGlhbFdpbmRvd0xheW91dDoge1xuICAgIG1haW46IHsgcG9zaXRpb246IHsgeDogMCwgeTogMCB9IH0sXG4gICAgcGxheWxpc3Q6IHsgcG9zaXRpb246IHsgeDogMCwgeTogMTE2IH0gfSxcbiAgICBlcXVhbGl6ZXI6IHsgcG9zaXRpb246IHsgeDogMCwgeTogMjMyIH0gfVxuICB9LFxuICBhdmFpbGFibGVTa2luczogW1xuICAgIHtcbiAgICAgIHVybDogJy9za2lucy9TcHlBTVBfUHJvZmVzc2lvbmFsX0VkaXRpb25fdjUud3N6JyxcbiAgICAgIG5hbWU6ICdTcHlBTVAgUHJvZmVzc2lvbmFsIEVkaXRpb24gdjUnXG4gICAgfVxuICBdXG59O1xuXG5jb25zdCBjbG9zZUVxdWFsaXplciA9IHtcbiAgdHlwZTogJ0NMT1NFX1dJTkRPVycsXG4gIHdpbmRvd0lkOiAnZXF1YWxpemVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IFdpbmFtcExvYWRlcjogRkM8UGFydGlhbDxBcHA+ICYgQXBwQ29tcG9uZW50PiA9ICh7XG4gIG9uQ2xvc2UsXG4gIG9uTWluaW1pemUsXG4gIG9uRm9jdXMsXG4gIHpJbmRleCxcbiAgbWluaW1pemVkLFxuICBmb3JlZ3JvdW5kLFxuICB4ID0gMCxcbiAgeSA9IDAsXG4gIHVybFxufSkgPT4ge1xuICBjb25zdCBlbGVtZW50UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKSxcbiAgICB7IHBvc2l0aW9uIH0gPSB1c2VDb250ZXh0KEFwcHNDb250ZXh0KSxcbiAgICBvblRvdWNoRXZlbnRzT25seTogUm5kRHJhZ0NhbGxiYWNrID0gKGUpOiB2b2lkID0+IHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkV2ViQW1wID0gYXN5bmMgKCk6IFByb21pc2U8V2ViYW1wICYgV2ViYW1wU3RvcmU+ID0+IHtcbiAgICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wIH0gPSBhd2FpdCBpbXBvcnQoJ3dlYmFtcCcpLFxuICAgICAgICB3ZWJhbXAgPSBuZXcgV2ViYW1wKG9wdGlvbnMpIGFzIFdlYmFtcCAmIFdlYmFtcFN0b3JlLFxuICAgICAgICB7IGN1cnJlbnQ6IGNvbnRhaW5lckVsZW1lbnQgfSA9IGVsZW1lbnRSZWYgYXMgeyBjdXJyZW50OiBIVE1MRWxlbWVudCB9O1xuXG4gICAgICB3ZWJhbXA/LnN0b3JlPy5kaXNwYXRjaChjbG9zZUVxdWFsaXplcik7XG4gICAgICBvbkNsb3NlICYmIHdlYmFtcD8ub25DbG9zZShvbkNsb3NlKTtcbiAgICAgIG9uTWluaW1pemUgJiYgd2ViYW1wPy5vbk1pbmltaXplKG9uTWluaW1pemUpOyAvLyBUT0RPOiBEb2Vzbid0IGhpZGUgc2VlayBiYXIgaWYgcGxheWluZ1xuXG4gICAgICBhd2FpdCB3ZWJhbXA/LnJlbmRlcldoZW5SZWFkeShjb250YWluZXJFbGVtZW50KTtcblxuICAgICAgY29uc3Qgd2ViYW1wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGFwcGVuZEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCwgd2ViYW1wRWxlbWVudCk7XG4gICAgICB3ZWJhbXBFbGVtZW50Py5mb2N1cygpO1xuICAgICAgb25Gb2N1cz8uKCk7XG5cbiAgICAgIGlmICh1cmw/LmluY2x1ZGVzKCcud3N6JykpIHtcbiAgICAgICAgd2ViYW1wPy5hcHBlbmRUcmFja3MoW2RlbW9UcmFja10pO1xuICAgICAgICB3ZWJhbXA/LnNldFNraW5Gcm9tVXJsKHVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZWJhbXA/LnNldFRyYWNrc1RvUGxheShbdXJsID8geyB1cmw6IHVybCwgbWV0YURhdGE6IHsgYXJ0aXN0OiAnJywgdGl0bGU6ICcnIH0gfSA6IGRlbW9UcmFja10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2ViYW1wO1xuICAgIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgd2ViYW1wOiBXZWJhbXAgJiBXZWJhbXBTdG9yZTtcblxuICAgIGxvYWRXZWJBbXAoKS50aGVuKChsb2FkZWRXZWJhbXApID0+IHtcbiAgICAgIHdlYmFtcCA9IGxvYWRlZFdlYmFtcDtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3ZWJhbXA/LmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbZWxlbWVudFJlZl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcmVncm91bmQpIHtcbiAgICAgIGVsZW1lbnRSZWY/LmN1cnJlbnQ/LmNsaWNrPy4oKTtcbiAgICAgIC8vIGVsZW1lbnRSZWY/LmN1cnJlbnQ/LnBhcmVudEVsZW1lbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZCwgZWxlbWVudFJlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgZGVmYXVsdD17eyB4OiB4IC8gMiwgeTogeSAvIDIsIHdpZHRoOiAyNzUsIGhlaWdodDogMjMyIH19XG4gICAgICBlbmFibGVSZXNpemluZz17ZmFsc2V9XG4gICAgICBlbmFibGVVc2VyU2VsZWN0SGFjaz17ZmFsc2V9XG4gICAgICBkcmFnSGFuZGxlQ2xhc3NOYW1lPVwiZHJhZ2dhYmxlXCJcbiAgICAgIGNhbmNlbD17dG91Y2hDb250cm9sc31cbiAgICAgIG9uRHJhZz17b25Ub3VjaEV2ZW50c09ubHl9XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgb25EcmFnU3RhcnQ9e2ZvY3VzT25EcmFnfVxuICAgICAgb25EcmFnU3RvcD17cG9zaXRpb24/Lignd2luYW1wJyl9XG4gICAgICBzdHlsZT17eyB6SW5kZXgsIHZpc2liaWxpdHk6IG1pbmltaXplZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnIH19XG4gICAgPlxuICAgICAgPGFydGljbGUgcmVmPXtlbGVtZW50UmVmfSAvPlxuICAgIDwvUm5kPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Apps/Winamp.tsx\n");

/***/ })

})