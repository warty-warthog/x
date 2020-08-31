webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar touchControls = \"\\n  #minimize, #close, #volume, #balance, #equalizer-button, #playlist-button, #position, #eject,\\n  .actions, .shuffle-repeat, .playlist-middle, .playlist-bottom, #playlist-close-button\";\nvar options = {\n  __initialWindowLayout: {\n    main: {\n      position: {\n        x: 0,\n        y: 0\n      }\n    },\n    playlist: {\n      position: {\n        x: 0,\n        y: 116\n      }\n    },\n    equalizer: {\n      position: {\n        x: 0,\n        y: 232\n      }\n    }\n  },\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  }\n};\nvar closeEqualizer = {\n  type: 'CLOSE_WINDOW',\n  windowId: 'equalizer'\n}; // TODO: Focus/foreground on load\n// TODO: Window position is 0/0 of whatever the cascade needs it to be\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex;\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      onTouchEventsOnly = function onTouchEventsOnly(e) {\n    if (e instanceof MouseEvent) {\n      e.preventDefault();\n      e.stopPropagation();\n    }\n  },\n      loadWebAmp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _elementRef$current;\n\n      var _yield$import, Webamp, webamp, webampElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              Webamp = _yield$import[\"default\"];\n              webamp = new Webamp(options);\n              webampElement = document.getElementById('webamp');\n              webamp.store.dispatch(closeEqualizer);\n              onClose && webamp.onClose(onClose);\n              onMinimize && webamp.onMinimize(onMinimize);\n              _context.next = 11;\n              return webamp.renderWhenReady(elementRef.current);\n\n            case 11:\n              console.log(webampElement);\n              webampElement && ((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.appendChild(webampElement));\n              webampElement === null || webampElement === void 0 ? void 0 : webampElement.focus();\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebAmp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var webamp;\n    loadWebAmp().then(function (loadedWebamp) {\n      webamp = loadedWebamp;\n    });\n    return function () {\n      var _webamp;\n\n      (_webamp = webamp) === null || _webamp === void 0 ? void 0 : _webamp.dispose(); // Q: Why was this undefined when I clicked the taskbar entry?\n    };\n  }, [elementRef]);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_4__[\"Rnd\"], {\n    enableResizing: false,\n    dragHandleClassName: \"draggable\",\n    cancel: touchControls,\n    onDrag: onTouchEventsOnly // TODO: Some issues with focus (Maybe it works after winamp has been clicked?)\n    ,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    style: {\n      zIndex: zIndex\n    },\n    tabIndex: tabIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  component: Winamp,\n  icon: _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n  name: 'Winamp',\n  windowed: false\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsidG91Y2hDb250cm9scyIsIm9wdGlvbnMiLCJfX2luaXRpYWxXaW5kb3dMYXlvdXQiLCJtYWluIiwicG9zaXRpb24iLCJ4IiwieSIsInBsYXlsaXN0IiwiZXF1YWxpemVyIiwiaW5pdGlhbFRyYWNrcyIsIm1ldGFEYXRhIiwiYXJ0aXN0IiwidGl0bGUiLCJ1cmwiLCJpbml0aWFsU2tpbiIsImNsb3NlRXF1YWxpemVyIiwidHlwZSIsIndpbmRvd0lkIiwiV2luYW1wIiwib25DbG9zZSIsIm9uTWluaW1pemUiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJ6SW5kZXgiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwib25Ub3VjaEV2ZW50c09ubHkiLCJlIiwiTW91c2VFdmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibG9hZFdlYkFtcCIsIldlYmFtcCIsIndlYmFtcCIsIndlYmFtcEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RvcmUiLCJkaXNwYXRjaCIsInJlbmRlcldoZW5SZWFkeSIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInVzZUVmZmVjdCIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJkaXNwb3NlIiwiQXBwIiwiY29tcG9uZW50IiwiaWNvbiIsIldpbmFtcEljb24iLCJuYW1lIiwid2luZG93ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQXFCQSxJQUFNQSxhQUFhLCtMQUFuQjtBQUlBLElBQU1DLE9BQWlDLEdBQUc7QUFDeENDLHVCQUFxQixFQUFFO0FBQ3JCQyxRQUFJLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQUVDLFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRTtBQUFYO0FBQVos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dUJBQW1CLEVBQUMsV0FGdEI7QUFHRSxVQUFNLEVBQUV6QixhQUhWO0FBSUUsVUFBTSxFQUFFMkIsaUJBSlYsQ0FLRTtBQUxGO0FBTUUsV0FBTyxFQUFFTixPQU5YO0FBT0UsVUFBTSxFQUFFQyxNQVBWO0FBUUUsU0FBSyxFQUFFO0FBQUVFLFlBQU0sRUFBTkE7QUFBRixLQVJUO0FBU0UsWUFBUSxFQUFFRCxRQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRTtBQUFTLE9BQUcsRUFBRUUsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBMUREOztHQUFNUCxNOztLQUFBQSxNO0FBNERTLG1FQUFJZ0MscURBQUosQ0FBUTtBQUNyQkMsV0FBUyxFQUFFakMsTUFEVTtBQUVyQmtDLE1BQUksRUFBRUMsK0RBRmU7QUFHckJDLE1BQUksRUFBRSxRQUhlO0FBSXJCQyxVQUFRLEVBQUU7QUFKVyxDQUFSLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmFtcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luYW1wSWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9XaW5hbXAucG5nJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCBBcHAsIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG50eXBlIFdlYmFtcFN0b3JlQWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHdpbmRvd0lkOiBzdHJpbmcgfTtcblxudHlwZSBXZWJhbXBTdG9yZSA9IHtcbiAgc3RvcmU6IHtcbiAgICBkaXNwYXRjaDogKGFjdGlvbjogV2ViYW1wU3RvcmVBY3Rpb24pID0+IHZvaWQ7XG4gIH07XG59O1xuXG50eXBlIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ/OiB7XG4gICAgW3dpbmRvd0lkOiBzdHJpbmddOiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvdWNoQ29udHJvbHMgPSBgXG4gICNtaW5pbWl6ZSwgI2Nsb3NlLCAjdm9sdW1lLCAjYmFsYW5jZSwgI2VxdWFsaXplci1idXR0b24sICNwbGF5bGlzdC1idXR0b24sICNwb3NpdGlvbiwgI2VqZWN0LFxuICAuYWN0aW9ucywgLnNodWZmbGUtcmVwZWF0LCAucGxheWxpc3QtbWlkZGxlLCAucGxheWxpc3QtYm90dG9tLCAjcGxheWxpc3QtY2xvc2UtYnV0dG9uYDtcblxuY29uc3Qgb3B0aW9uczogT3B0aW9ucyAmIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ6IHtcbiAgICBtYWluOiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSB9LFxuICAgIHBsYXlsaXN0OiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDExNiB9IH0sXG4gICAgZXF1YWxpemVyOiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDIzMiB9IH1cbiAgfSxcbiAgaW5pdGlhbFRyYWNrczogW1xuICAgIHtcbiAgICAgIG1ldGFEYXRhOiB7XG4gICAgICAgIGFydGlzdDogJ0RKIE1pa2UgTGxhbWEnLFxuICAgICAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gICAgICB9LFxuICAgICAgdXJsOiAnL21wMy9sbGFtYS0yLjkxLm1wMydcbiAgICB9XG4gIF0sXG4gIGluaXRpYWxTa2luOiB7XG4gICAgdXJsOiAnL3NraW5zL1NweUFNUF9Qcm9mZXNzaW9uYWxfRWRpdGlvbl92NS53c3onXG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlRXF1YWxpemVyID0ge1xuICB0eXBlOiAnQ0xPU0VfV0lORE9XJyxcbiAgd2luZG93SWQ6ICdlcXVhbGl6ZXInXG59O1xuXG4vLyBUT0RPOiBGb2N1cy9mb3JlZ3JvdW5kIG9uIGxvYWRcbi8vIFRPRE86IFdpbmRvdyBwb3NpdGlvbiBpcyAwLzAgb2Ygd2hhdGV2ZXIgdGhlIGNhc2NhZGUgbmVlZHMgaXQgdG8gYmVcblxuY29uc3QgV2luYW1wOiBGQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgb25DbG9zZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICB0YWJJbmRleCxcbiAgekluZGV4XG59KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpLFxuICAgIG9uVG91Y2hFdmVudHNPbmx5OiBSbmREcmFnQ2FsbGJhY2sgPSAoZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRXZWJBbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0OiBXZWJhbXAgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyksXG4gICAgICAgIHdlYmFtcCA9IG5ldyBXZWJhbXAob3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmUsXG4gICAgICAgIHdlYmFtcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViYW1wJyk7XG5cbiAgICAgIHdlYmFtcC5zdG9yZS5kaXNwYXRjaChjbG9zZUVxdWFsaXplcik7XG4gICAgICBvbkNsb3NlICYmIHdlYmFtcC5vbkNsb3NlKG9uQ2xvc2UpO1xuICAgICAgb25NaW5pbWl6ZSAmJiB3ZWJhbXAub25NaW5pbWl6ZShvbk1pbmltaXplKTtcbiAgICAgIGF3YWl0IHdlYmFtcC5yZW5kZXJXaGVuUmVhZHkoZWxlbWVudFJlZi5jdXJyZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYmFtcEVsZW1lbnQpO1xuICAgICAgd2ViYW1wRWxlbWVudCAmJiBlbGVtZW50UmVmLmN1cnJlbnQ/LmFwcGVuZENoaWxkKHdlYmFtcEVsZW1lbnQpO1xuICAgICAgd2ViYW1wRWxlbWVudD8uZm9jdXMoKTtcblxuICAgICAgcmV0dXJuIHdlYmFtcDtcbiAgICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wICYgV2ViYW1wU3RvcmU7XG5cbiAgICBsb2FkV2ViQW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICB3ZWJhbXAgPSBsb2FkZWRXZWJhbXA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2ViYW1wPy5kaXNwb3NlKCk7IC8vIFE6IFdoeSB3YXMgdGhpcyB1bmRlZmluZWQgd2hlbiBJIGNsaWNrZWQgdGhlIHRhc2tiYXIgZW50cnk/XG4gICAgfTtcbiAgfSwgW2VsZW1lbnRSZWZdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGVuYWJsZVJlc2l6aW5nPXtmYWxzZX1cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgY2FuY2VsPXt0b3VjaENvbnRyb2xzfVxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICAgIC8vIFRPRE86IFNvbWUgaXNzdWVzIHdpdGggZm9jdXMgKE1heWJlIGl0IHdvcmtzIGFmdGVyIHdpbmFtcCBoYXMgYmVlbiBjbGlja2VkPylcbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIHN0eWxlPXt7IHpJbmRleCB9fVxuICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoe1xuICBjb21wb25lbnQ6IFdpbmFtcCxcbiAgaWNvbjogV2luYW1wSWNvbixcbiAgbmFtZTogJ1dpbmFtcCcsXG4gIHdpbmRvd2VkOiBmYWxzZVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})