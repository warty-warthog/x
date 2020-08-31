webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Winamp.tsx":
/*!*******************************!*\
  !*** ./components/Winamp.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/Winamp.png */ \"./assets/icons/Winamp.png\");\n/* harmony import */ var _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/App */ \"./contexts/App.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Winamp.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar touchControls = \"\\n  #minimize, #close, #volume, #balance, #equalizer-button, #playlist-button, #position, #eject,\\n  .actions, .shuffle-repeat, .playlist-middle, .playlist-bottom, #playlist-close-button\";\nvar options = {\n  __initialWindowLayout: {\n    main: {\n      position: {\n        x: 0,\n        y: 0\n      }\n    },\n    playlist: {\n      position: {\n        x: 0,\n        y: 116\n      }\n    },\n    equalizer: {\n      position: {\n        x: 0,\n        y: 232\n      }\n    }\n  },\n  initialTracks: [{\n    metaData: {\n      artist: 'DJ Mike Llama',\n      title: \"Llama Whippin' Intro\"\n    },\n    url: '/mp3/llama-2.91.mp3'\n  }],\n  initialSkin: {\n    url: '/skins/SpyAMP_Professional_Edition_v5.wsz'\n  }\n};\nvar closeEqualizer = {\n  type: 'CLOSE_WINDOW',\n  windowId: 'equalizer'\n}; // TODO: Focus/foreground on load\n// TODO: Window position is 0/0 of whatever the cascade needs it to be\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      tabIndex = _ref.tabIndex,\n      zIndex = _ref.zIndex;\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null),\n      onTouchEventsOnly = function onTouchEventsOnly(e) {\n    if (e instanceof MouseEvent) {\n      e.preventDefault();\n      e.stopPropagation();\n    }\n  },\n      loadWebAmp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var _elementRef$current;\n\n      var _yield$import, Webamp, webamp, webampElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              Webamp = _yield$import[\"default\"];\n              webamp = new Webamp(options);\n              // TODO: Organize this stuff\n              webamp.store.dispatch(closeEqualizer);\n              onClose && webamp.onClose(onClose);\n              onMinimize && webamp.onMinimize(onMinimize);\n              _context.next = 10;\n              return webamp.renderWhenReady(elementRef.current);\n\n            case 10:\n              webampElement = document.getElementById('webamp');\n              webampElement && ((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.appendChild(webampElement));\n              console.log(webampElement === null || webampElement === void 0 ? void 0 : webampElement.focus());\n              webampElement === null || webampElement === void 0 ? void 0 : webampElement.focus();\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebAmp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var webamp;\n    loadWebAmp().then(function (loadedWebamp) {\n      var _loadedWebamp$_node;\n\n      console.log(loadedWebamp);\n      console.log(loadedWebamp === null || loadedWebamp === void 0 ? void 0 : (_loadedWebamp$_node = loadedWebamp._node) === null || _loadedWebamp$_node === void 0 ? void 0 : _loadedWebamp$_node.focus());\n      webamp = loadedWebamp;\n    });\n    return function () {\n      var _webamp;\n\n      (_webamp = webamp) === null || _webamp === void 0 ? void 0 : _webamp.dispose(); // Q: Why was this undefined when I clicked the taskbar entry?\n    };\n  }, [elementRef]);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_4__[\"Rnd\"], {\n    enableResizing: false,\n    dragHandleClassName: \"draggable\",\n    cancel: touchControls,\n    onDrag: onTouchEventsOnly // TODO: Some issues with focus (Maybe it works after winamp has been clicked?)\n    ,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    style: {\n      zIndex: zIndex\n    },\n    tabIndex: tabIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(\"article\", {\n    onFocus: onFocus,\n    ref: elementRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Winamp, \"CKe/C9l/PZDcdMrjDfTWxieUegY=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _contexts_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n  component: Winamp,\n  icon: _assets_icons_Winamp_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n  name: 'Winamp',\n  windowed: false\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5hbXAudHN4P2M3MWIiXSwibmFtZXMiOlsidG91Y2hDb250cm9scyIsIm9wdGlvbnMiLCJfX2luaXRpYWxXaW5kb3dMYXlvdXQiLCJtYWluIiwicG9zaXRpb24iLCJ4IiwieSIsInBsYXlsaXN0IiwiZXF1YWxpemVyIiwiaW5pdGlhbFRyYWNrcyIsIm1ldGFEYXRhIiwiYXJ0aXN0IiwidGl0bGUiLCJ1cmwiLCJpbml0aWFsU2tpbiIsImNsb3NlRXF1YWxpemVyIiwidHlwZSIsIndpbmRvd0lkIiwiV2luYW1wIiwib25DbG9zZSIsIm9uTWluaW1pemUiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJ6SW5kZXgiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwib25Ub3VjaEV2ZW50c09ubHkiLCJlIiwiTW91c2VFdmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibG9hZFdlYkFtcCIsIldlYmFtcCIsIndlYmFtcCIsInN0b3JlIiwiZGlzcGF0Y2giLCJyZW5kZXJXaGVuUmVhZHkiLCJjdXJyZW50Iiwid2ViYW1wRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJmb2N1cyIsInVzZUVmZmVjdCIsInRoZW4iLCJsb2FkZWRXZWJhbXAiLCJfbm9kZSIsImRpc3Bvc2UiLCJBcHAiLCJjb21wb25lbnQiLCJpY29uIiwiV2luYW1wSWNvbiIsIm5hbWUiLCJ3aW5kb3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBcUJBLElBQU1BLGFBQWEsK0xBQW5CO0FBSUEsSUFBTUMsT0FBaUMsR0FBRztBQUN4Q0MsdUJBQXFCLEVBQUU7QUFDckJDLFFBQUksRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBRUMsU0FBQyxFQUFFLENBQUw7QUFBUUMsU0FBQyxFQUFFO0FB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R0FBR2MsWUFBVDtBQUNELEtBSkQ7QUFNQSxXQUFPLFlBQU07QUFBQTs7QUFDWCxpQkFBQWQsTUFBTSxVQUFOLDBDQUFRZ0IsT0FBUixHQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBWlEsRUFZTixDQUFDekIsVUFBRCxDQVpNLENBQVQ7QUFjQSxTQUNFLE1BQUMsNkNBQUQ7QUFDRSxrQkFBYyxFQUFFLEtBRGxCO0FBRUUsdUJBQW1CLEVBQUMsV0FGdEI7QUFHRSxVQUFNLEVBQUV6QixhQUhWO0FBSUUsVUFBTSxFQUFFMkIsaUJBSlYsQ0FLRTtBQUxGO0FBTUUsV0FBTyxFQUFFTixPQU5YO0FBT0UsVUFBTSxFQUFFQyxNQVBWO0FBUUUsU0FBSyxFQUFFO0FBQUVFLFlBQU0sRUFBTkE7QUFBRixLQVJUO0FBU0UsWUFBUSxFQUFFRCxRQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRTtBQUFTLFdBQU8sRUFBRUYsT0FBbEI7QUFBMkIsT0FBRyxFQUFFSSxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBN0REOztHQUFNUCxNOztLQUFBQSxNO0FBK0RTLG1FQUFJaUMscURBQUosQ0FBUTtBQUNyQkMsV0FBUyxFQUFFbEMsTUFEVTtBQUVyQm1DLE1BQUksRUFBRUMsK0RBRmU7QUFHckJDLE1BQUksRUFBRSxRQUhlO0FBSXJCQyxVQUFRLEVBQUU7QUFKVyxDQUFSLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpbmFtcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2luYW1wSWNvbiBmcm9tICdAL2Fzc2V0cy9pY29ucy9XaW5hbXAucG5nJztcblxuaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIFdlYmFtcCBmcm9tICd3ZWJhbXAnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgUm5kRHJhZ0NhbGxiYWNrIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCBBcHAsIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC9jb250ZXh0cy9BcHAnO1xuXG50eXBlIFdlYmFtcFN0b3JlQWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHdpbmRvd0lkOiBzdHJpbmcgfTtcblxudHlwZSBXZWJhbXBTdG9yZSA9IHtcbiAgc3RvcmU6IHtcbiAgICBkaXNwYXRjaDogKGFjdGlvbjogV2ViYW1wU3RvcmVBY3Rpb24pID0+IHZvaWQ7XG4gIH07XG59O1xuXG50eXBlIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ/OiB7XG4gICAgW3dpbmRvd0lkOiBzdHJpbmddOiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvdWNoQ29udHJvbHMgPSBgXG4gICNtaW5pbWl6ZSwgI2Nsb3NlLCAjdm9sdW1lLCAjYmFsYW5jZSwgI2VxdWFsaXplci1idXR0b24sICNwbGF5bGlzdC1idXR0b24sICNwb3NpdGlvbiwgI2VqZWN0LFxuICAuYWN0aW9ucywgLnNodWZmbGUtcmVwZWF0LCAucGxheWxpc3QtbWlkZGxlLCAucGxheWxpc3QtYm90dG9tLCAjcGxheWxpc3QtY2xvc2UtYnV0dG9uYDtcblxuY29uc3Qgb3B0aW9uczogT3B0aW9ucyAmIFByaXZhdGVPcHRpb25zID0ge1xuICBfX2luaXRpYWxXaW5kb3dMYXlvdXQ6IHtcbiAgICBtYWluOiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSB9LFxuICAgIHBsYXlsaXN0OiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDExNiB9IH0sXG4gICAgZXF1YWxpemVyOiB7IHBvc2l0aW9uOiB7IHg6IDAsIHk6IDIzMiB9IH1cbiAgfSxcbiAgaW5pdGlhbFRyYWNrczogW1xuICAgIHtcbiAgICAgIG1ldGFEYXRhOiB7XG4gICAgICAgIGFydGlzdDogJ0RKIE1pa2UgTGxhbWEnLFxuICAgICAgICB0aXRsZTogXCJMbGFtYSBXaGlwcGluJyBJbnRyb1wiXG4gICAgICB9LFxuICAgICAgdXJsOiAnL21wMy9sbGFtYS0yLjkxLm1wMydcbiAgICB9XG4gIF0sXG4gIGluaXRpYWxTa2luOiB7XG4gICAgdXJsOiAnL3NraW5zL1NweUFNUF9Qcm9mZXNzaW9uYWxfRWRpdGlvbl92NS53c3onXG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlRXF1YWxpemVyID0ge1xuICB0eXBlOiAnQ0xPU0VfV0lORE9XJyxcbiAgd2luZG93SWQ6ICdlcXVhbGl6ZXInXG59O1xuXG4vLyBUT0RPOiBGb2N1cy9mb3JlZ3JvdW5kIG9uIGxvYWRcbi8vIFRPRE86IFdpbmRvdyBwb3NpdGlvbiBpcyAwLzAgb2Ygd2hhdGV2ZXIgdGhlIGNhc2NhZGUgbmVlZHMgaXQgdG8gYmVcblxuY29uc3QgV2luYW1wOiBGQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgb25DbG9zZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25Gb2N1cyxcbiAgb25CbHVyLFxuICB0YWJJbmRleCxcbiAgekluZGV4XG59KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpLFxuICAgIG9uVG91Y2hFdmVudHNPbmx5OiBSbmREcmFnQ2FsbGJhY2sgPSAoZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRXZWJBbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0OiBXZWJhbXAgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyksXG4gICAgICAgIHdlYmFtcCA9IG5ldyBXZWJhbXAob3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG5cbiAgICAgIC8vIFRPRE86IE9yZ2FuaXplIHRoaXMgc3R1ZmZcbiAgICAgIHdlYmFtcC5zdG9yZS5kaXNwYXRjaChjbG9zZUVxdWFsaXplcik7XG4gICAgICBvbkNsb3NlICYmIHdlYmFtcC5vbkNsb3NlKG9uQ2xvc2UpO1xuICAgICAgb25NaW5pbWl6ZSAmJiB3ZWJhbXAub25NaW5pbWl6ZShvbk1pbmltaXplKTtcbiAgICAgIGF3YWl0IHdlYmFtcC5yZW5kZXJXaGVuUmVhZHkoZWxlbWVudFJlZi5jdXJyZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGNvbnN0IHdlYmFtcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViYW1wJyk7XG4gICAgICB3ZWJhbXBFbGVtZW50ICYmIGVsZW1lbnRSZWYuY3VycmVudD8uYXBwZW5kQ2hpbGQod2ViYW1wRWxlbWVudCk7XG4gICAgICBjb25zb2xlLmxvZyh3ZWJhbXBFbGVtZW50Py5mb2N1cygpKVxuICAgICAgd2ViYW1wRWxlbWVudD8uZm9jdXMoKTtcblxuICAgICAgcmV0dXJuIHdlYmFtcDtcbiAgICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHdlYmFtcDogV2ViYW1wICYgV2ViYW1wU3RvcmU7XG5cbiAgICBsb2FkV2ViQW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhsb2FkZWRXZWJhbXApO1xuICAgICAgY29uc29sZS5sb2cobG9hZGVkV2ViYW1wPy5fbm9kZT8uZm9jdXMoKSk7XG4gICAgICB3ZWJhbXAgPSBsb2FkZWRXZWJhbXA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2ViYW1wPy5kaXNwb3NlKCk7IC8vIFE6IFdoeSB3YXMgdGhpcyB1bmRlZmluZWQgd2hlbiBJIGNsaWNrZWQgdGhlIHRhc2tiYXIgZW50cnk/XG4gICAgfTtcbiAgfSwgW2VsZW1lbnRSZWZdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGVuYWJsZVJlc2l6aW5nPXtmYWxzZX1cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgY2FuY2VsPXt0b3VjaENvbnRyb2xzfVxuICAgICAgb25EcmFnPXtvblRvdWNoRXZlbnRzT25seX1cbiAgICAgIC8vIFRPRE86IFNvbWUgaXNzdWVzIHdpdGggZm9jdXMgKE1heWJlIGl0IHdvcmtzIGFmdGVyIHdpbmFtcCBoYXMgYmVlbiBjbGlja2VkPylcbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIHN0eWxlPXt7IHpJbmRleCB9fVxuICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIG9uRm9jdXM9e29uRm9jdXN9IHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoe1xuICBjb21wb25lbnQ6IFdpbmFtcCxcbiAgaWNvbjogV2luYW1wSWNvbixcbiAgbmFtZTogJ1dpbmFtcCcsXG4gIHdpbmRvd2VkOiBmYWxzZVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Winamp.tsx\n");

/***/ })

})