webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n  min-width: 185px;\\n  z-index: 1750;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  background-color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n}\\n.Window_window__1lH8i header nav button:focus {\\n  outline: unset;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i header nav button svg:hover {\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  height: 176px;\\n  border-radius: 0 0 5px 5px;\\n  overflow: hidden auto;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EAEA,kBAAA;EACA,uEAAA;EAEA,kBAAA;EAEA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EAEA,aAAA;AALF;AAOE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAPJ;AASI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAVN;AAaI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAGA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAfN;AAiBM;EACE,6BAAA;EAEA,mBAAA;EACA,SAAA;AAhBR;AAkBQ;EACE,cAAA;AAhBV;AAmBQ;EACE,cChDC;AD+BX;AAoBQ;EACE,cCnDC;ADiCX;AAqBQ;EACE,cCtDF;ADmCR;AAsBQ;EACE,qBAAA;AApBV;AA0BE;EAQE,yBAAA;EAEA,aAAA;EAEA,0BAAA;EAGA,qBAAA;AAnCJ;AEDE;EACE,WFsBE;EErBF,YFqBE;AAlBN;AEAE;EACE,8BAAA;AFEJ;AECE;EACE,4BAAA;EACA,yBFcE;EEbF,6BAAA;EACA,mBFWE;AAVN;AECI;EACE,yBAAA;AFCN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  background-color: map-get($window, title-bar-color);\\n\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  position: absolute;\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n  min-width: 185px;\\n\\n  z-index: map-get($window, z-index);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n      // TODO: Replace this with set svg/icons\\n      // grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        background-color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        &:focus {\\n          outline: unset;\\n        }\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n\\n        svg:hover {\\n          transform: scale(1.1);\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    background-color: map-get($window, bg-color);\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n\\n    overflow: hidden auto;\\n  }\\n}\\n\",\"$bgColor: #101f34;\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLGFBQWEsc0JBQXNCLGtCQUFrQixrQkFBa0IsYUFBYSx1QkFBdUIsR0FBRywyQ0FBMkMsa0NBQWtDLHdCQUF3QixjQUFjLEdBQUcsaURBQWlELG1CQUFtQixHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsK0RBQStELG1CQUFtQixHQUFHLHFEQUFxRCwwQkFBMEIsR0FBRyxpQ0FBaUMsOEJBQThCLGtCQUFrQiwrQkFBK0IsMEJBQTBCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsc0VBQXNFLGFBQWEsd0RBQXdELHlCQUF5Qiw0RUFBNEUsc0VBQXNFLCtHQUErRyxnQkFBZ0IsbUNBQW1DLHFDQUFxQyxxQkFBcUIseUNBQXlDLGNBQWMsb0RBQW9ELG1EQUFtRCxzQkFBc0IsMEJBQTBCLFlBQVkseUVBQXlFLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixpQkFBaUIsd0JBQXdCLGtHQUFrRyxpQkFBaUIsNkJBQTZCLGtCQUFrQix3Q0FBd0MsZ0NBQWdDLG9CQUFvQixxQkFBcUIsMkJBQTJCLFdBQVcsd0JBQXdCLDZCQUE2QixXQUFXLHdCQUF3Qiw2QkFBNkIsV0FBVyxxQkFBcUIsMEJBQTBCLFdBQVcsdUJBQXVCLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLHFEQUFxRCw4RUFBOEUsa0dBQWtHLDhCQUE4QixLQUFLLEdBQUcsdUJBQXVCLDZCQUE2Qix1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixhQUFhLFlBQVksR0FBRyxpQ0FBaUMsd0ZBQXdGLHdCQUF3QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0MsbUNBQW1DLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUMveE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtaW4td2lkdGg6IDE4NXB4O1xcbiAgei1pbmRleDogMTc1MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciB7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDVweDtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNnB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogdW5zZXQ7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfbWluaW1pemVfXzJsVjRwIHtcXG4gIGNvbG9yOiAjZmZiZDJlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21heGltaXplX18yUlREbSB7XFxuICBjb2xvcjogIzI4Yzk0MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19jbG9zZV9fQnlsSE8ge1xcbiAgY29sb3I6ICNmZjU1NGU7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiBzdmc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbiAgaGVpZ2h0OiAxNzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UseUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVFQUFBO0VBRUEsa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FBTEY7QUFPRTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBRUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtBQVBKO0FBU0k7RUFFRSxlQUFBO0VBRUEsV0FBQTtFQUVBLGtCQUFBO0FBVk47QUFhSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUdBLGFBQUE7RUFBQSxRQUFBO0VBRUEsa0JBQUE7QUFmTjtBQWlCTTtFQUNFLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0FBaEJSO0FBa0JRO0VBQ0UsY0FBQTtBQWhCVjtBQW1CUTtFQUNFLGNDaERDO0FEK0JYO0FBb0JRO0VBQ0UsY0NuREM7QURpQ1g7QUFxQlE7RUFDRSxjQ3RERjtBRG1DUjtBQXNCUTtFQUNFLHFCQUFBO0FBcEJWO0FBMEJFO0VBUUUseUJBQUE7RUFFQSxhQUFBO0VBRUEsMEJBQUE7RUFHQSxxQkFBQTtBQW5DSjtBRURFO0VBQ0UsV0ZzQkU7RUVyQkYsWUZxQkU7QUFsQk47QUVBRTtFQUNFLDhCQUFBO0FGRUo7QUVDRTtFQUNFLDRCQUFBO0VBQ0EseUJGY0U7RUViRiw2QkFBQTtFQUNBLG1CRldFO0FBVk47QUVDSTtFQUNFLHlCQUFBO0FGQ05cIixcImZpbGVcIjpcIldpbmRvdy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtaXhpbnMnO1xcblxcbi53aW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItY29sb3IpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8vIFRPRE86IEJldHRlciB3YXkgdG8gbWFuYWdlIHNoYWRvdyBlZmZlY3RzXFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvLyBUT0RPOiBTZXQgdGhpcyBzdHVmZiBpbnNpZGUgdGhlIGpzeCBtb3N0IGxpa2VseSB2aWEgdmFycyBjb21pbmcgZnJvbSB0aGUgYXBwcyBhbmQgZGVmYXVsdHNcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDExNXB4O1xcbiAgd2lkdGg6IG1hcC1nZXQoJHdpbmRvdywgd2lkdGgpO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIGhlaWdodCk7XFxuICBtaW4td2lkdGg6IDE4NXB4O1xcblxcbiAgei1pbmRleDogbWFwLWdldCgkd2luZG93LCB6LWluZGV4KTtcXG5cXG4gIGhlYWRlciB7XFxuICAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci10ZXh0LWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoMSB7XFxuICAgICAgLy8gVE9ETzogRWxsaXBzaXMgdG8gbm90IHVuZGVybGFwIGJ1dHRvbnNcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGlzIHdpdGggc2V0IHN2Zy9pY29uc1xcbiAgICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDE0cHgpO1xcbiAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcblxcbiAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgIG91dGxpbmU6IHVuc2V0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtaW5pbWl6ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkbWluaW1pemU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI21heGltaXplIHtcXG4gICAgICAgICAgY29sb3I6ICRtYXhpbWl6ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjY2xvc2Uge1xcbiAgICAgICAgICBjb2xvcjogJGNsb3NlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3ZnOmhvdmVyIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGJhcnMoXFxuICAgICAgMTVweCxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpICogMixcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIHNjcm9sbC1iYXItY29sb3IpLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpXFxuICAgICk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgaGVpZ2h0KSAtIG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgfVxcbn1cXG5cIixcIiRiZ0NvbG9yOiAjMTAxZjM0O1xcblxcbiRoaWdobGlnaHRDb2xvcjogIzY1YTllODtcXG5cXG4kdWlDb2xvcjE6ICMzYzNjM2M7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJG1pbmltaXplOiAjZmZiZDJlO1xcbiRtYXhpbWl6ZTogIzI4Yzk0MDtcXG4kY2xvc2U6ICNmZjU1NGU7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIC8vIFRPRE86IEZpeCBgb3ZlcmZsb3c6IGhpZGRlbmAgY3V0dGluZyBvZmYgdGV4dCBzaGFkb3dzXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2luZG93XCI6IFwiV2luZG93X3dpbmRvd19fMWxIOGlcIixcblx0XCJtaW5pbWl6ZVwiOiBcIldpbmRvd19taW5pbWl6ZV9fMmxWNHBcIixcblx0XCJtYXhpbWl6ZVwiOiBcIldpbmRvd19tYXhpbWl6ZV9fMlJURG1cIixcblx0XCJjbG9zZVwiOiBcIldpbmRvd19jbG9zZV9fQnlsSE9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})