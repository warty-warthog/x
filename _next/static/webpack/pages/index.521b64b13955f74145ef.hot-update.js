webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 14px);\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav #Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav #Window_maximize__2RTDm {\\n  background-color: #28c940;\\n}\\n.Window_window__1lH8i header nav #Window_close__BylHO {\\n  background-color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  border-radius: 0 0 5px 5px;\\n  height: 176px;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  -webkit-user-select: text;\\n     -moz-user-select: text;\\n      -ms-user-select: text;\\n          user-select: text;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAgBA;EACE,yBAAA;EACA,kBAAA;EACA,uEAAA;EACA,kBAAA;EAIA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;AAlBF;AAoBE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AApBJ;AAsBI;EACE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAtBN;AAyBI;EACE,kBAAA;EACA,QAAA;EAEA,aAAA;EAEA,sCAAA;EACA,aAAA;EAAA,QAAA;EAEA,kBAAA;AA1BN;AA4BM;EACE,kBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AA5BR;AA8BQ;EACE,cAAA;AA5BV;AAgCM;EACE,yBAAA;AA9BR;AAiCM;EACE,yBAAA;AA/BR;AAkCM;EACE,yBAAA;AAhCR;AAqCE;EAQE,yBCxFO;EDyFP,0BAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AA1CJ;AEAE;EACE,WF8BE;EE7BF,YF6BE;AA3BN;AECE;EACE,8BAAA;AFCJ;AEEE;EACE,4BAAA;EACA,yBFsBE;EErBF,6BAAA;EACA,mBFmBE;AAnBN;AEEI;EACE,yBAAA;AFAN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n$window: (\\n  // bg-color: #101f34,\\n  height: 200px,\\n  width: 200px,\\n  border-radius: 5px,\\n  title-bar-color: $uiColor,\\n  title-bar-text-color: $offWhite,\\n  title-bar-height: 24px,\\n  scroll-bar-color: lighten($uiColor, 55%),\\n  z-index: map-get($zIndex, windows)\\n);\\n\\n$window-background-color: $offWhite;\\n\\n.window {\\n  background-color: map-get($window, title-bar-color); // TODO: This is actually the window color technically | opacity effect?\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n  position: absolute;\\n  // z-index: $window-z-index;\\n\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: grid;\\n      // TODO: Replace this with set svg/icons\\n      grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        &:hover {\\n          color: map-get($window, title-bar-color);\\n        }\\n      }\\n\\n      #minimize {\\n        background-color: #ffbd2e;\\n      }\\n\\n      #maximize {\\n        background-color: #28c940;\\n      }\\n\\n      #close {\\n        background-color: #ff554e;\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      $window-background-color\\n    );\\n\\n    background-color: $window-background-color;\\n    border-radius: 0 0 map-get($window, border-radius) map-get($window, border-radius);\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n    overflow-y: auto;\\n    overflow-x: hidden;\\n    user-select: text;\\n  }\\n}\\n\",\"$highlightColor: #65a9e8;\\n$uiColor: #3c3c3c;\\n\\n$offWhite: #f8f8ff;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0NBQWdDLG1CQUFtQixpQkFBaUIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsb0NBQW9DLHVCQUF1QixhQUFhLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLGFBQWEsdUJBQXVCLEdBQUcsMkNBQTJDLHVCQUF1Qix3QkFBd0IsY0FBYyxzQkFBc0IsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDREQUE0RCw4QkFBOEIsR0FBRyx5REFBeUQsOEJBQThCLEdBQUcsaUNBQWlDLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHFCQUFxQix1QkFBdUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLDBMQUEwTCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssV0FBVyxzRUFBc0UscVJBQXFSLHdDQUF3QyxhQUFhLHdEQUF3RCxnR0FBZ0csNEVBQTRFLG9FQUFvRSxnQ0FBZ0MsaUhBQWlILGdCQUFnQixtQ0FBbUMscUNBQXFDLGNBQWMsb0RBQW9ELG1EQUFtRCxzQkFBc0IsMEJBQTBCLFlBQVksd0JBQXdCLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixpQkFBaUIsd0JBQXdCLCtGQUErRixpQkFBaUIsNkJBQTZCLGtCQUFrQiw2QkFBNkIsZ0NBQWdDLG9CQUFvQiw4QkFBOEIscUJBQXFCLHFEQUFxRCxXQUFXLFNBQVMscUJBQXFCLG9DQUFvQyxTQUFTLHFCQUFxQixvQ0FBb0MsU0FBUyxrQkFBa0Isb0NBQW9DLFNBQVMsT0FBTyxLQUFLLGVBQWUsc0tBQXNLLG1EQUFtRCx5RkFBeUYsNEVBQTRFLHVCQUF1Qix5QkFBeUIsd0JBQXdCLEtBQUssR0FBRyw4QkFBOEIsb0JBQW9CLHVCQUF1QixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixhQUFhLFlBQVksR0FBRyxpQ0FBaUMsd0ZBQXdGLHdCQUF3QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0MsbUNBQW1DLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUN4bE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIge1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxNHB4KTtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjM2MzYzNjO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiAjV2luZG93X21pbmltaXplX18ybFY0cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDJlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiAjV2luZG93X21heGltaXplX18yUlREbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjOTQwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiAjV2luZG93X2Nsb3NlX19CeWxITyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NTRlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBoZWlnaHQ6IDE3NnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7RUFJQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBbEJGO0FBb0JFO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0FBcEJKO0FBc0JJO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQXRCTjtBQXlCSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBRUEsa0JBQUE7QUExQk47QUE0Qk07RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0FBNUJSO0FBOEJRO0VBQ0UsY0FBQTtBQTVCVjtBQWdDTTtFQUNFLHlCQUFBO0FBOUJSO0FBaUNNO0VBQ0UseUJBQUE7QUEvQlI7QUFrQ007RUFDRSx5QkFBQTtBQWhDUjtBQXFDRTtFQVFFLHlCQ3hGTztFRHlGUCwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUExQ0o7QUVBRTtFQUNFLFdGOEJFO0VFN0JGLFlGNkJFO0FBM0JOO0FFQ0U7RUFDRSw4QkFBQTtBRkNKO0FFRUU7RUFDRSw0QkFBQTtFQUNBLHlCRnNCRTtFRXJCRiw2QkFBQTtFQUNBLG1CRm1CRTtBQW5CTjtBRUVJO0VBQ0UseUJBQUE7QUZBTlwiLFwiZmlsZVwiOlwiV2luZG93Lm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ21peGlucyc7XFxuXFxuJHdpbmRvdzogKFxcbiAgLy8gYmctY29sb3I6ICMxMDFmMzQsXFxuICBoZWlnaHQ6IDIwMHB4LFxcbiAgd2lkdGg6IDIwMHB4LFxcbiAgYm9yZGVyLXJhZGl1czogNXB4LFxcbiAgdGl0bGUtYmFyLWNvbG9yOiAkdWlDb2xvcixcXG4gIHRpdGxlLWJhci10ZXh0LWNvbG9yOiAkb2ZmV2hpdGUsXFxuICB0aXRsZS1iYXItaGVpZ2h0OiAyNHB4LFxcbiAgc2Nyb2xsLWJhci1jb2xvcjogbGlnaHRlbigkdWlDb2xvciwgNTUlKSxcXG4gIHotaW5kZXg6IG1hcC1nZXQoJHpJbmRleCwgd2luZG93cylcXG4pO1xcblxcbiR3aW5kb3ctYmFja2dyb3VuZC1jb2xvcjogJG9mZldoaXRlO1xcblxcbi53aW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItY29sb3IpOyAvLyBUT0RPOiBUaGlzIGlzIGFjdHVhbGx5IHRoZSB3aW5kb3cgY29sb3IgdGVjaG5pY2FsbHkgfCBvcGFjaXR5IGVmZmVjdD9cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gei1pbmRleDogJHdpbmRvdy16LWluZGV4O1xcblxcbiAgLy8gVE9ETzogU2V0IHRoaXMgc3R1ZmYgaW5zaWRlIHRoZSBqc3ggbW9zdCBsaWtlbHkgdmlhIHZhcnMgY29taW5nIGZyb20gdGhlIGFwcHMgYW5kIGRlZmF1bHRzXFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiBtYXAtZ2V0KCR3aW5kb3csIHdpZHRoKTtcXG4gIGhlaWdodDogbWFwLWdldCgkd2luZG93LCBoZWlnaHQpO1xcblxcbiAgaGVhZGVyIHtcXG4gICAgY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLXRleHQtY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcblxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGlzIHdpdGggc2V0IHN2Zy9pY29uc1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDE0cHgpO1xcbiAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG5cXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1jb2xvcik7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgICNtaW5pbWl6ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDJlO1xcbiAgICAgIH1cXG5cXG4gICAgICAjbWF4aW1pemUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzk0MDtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nsb3NlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU1NGU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgQGluY2x1ZGUgc2Nyb2xsYmFycyhcXG4gICAgICAxNXB4LFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cykgKiAyLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgc2Nyb2xsLWJhci1jb2xvciksXFxuICAgICAgJHdpbmRvdy1iYWNrZ3JvdW5kLWNvbG9yXFxuICAgICk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aW5kb3ctYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cykgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIGhlaWdodCkgLSBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgfVxcbn1cXG5cIixcIiRoaWdobGlnaHRDb2xvcjogIzY1YTllODtcXG4kdWlDb2xvcjogIzNjM2MzYztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIC8vIFRPRE86IEZpeCBgb3ZlcmZsb3c6IGhpZGRlbmAgY3V0dGluZyBvZmYgdGV4dCBzaGFkb3dzXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2luZG93XCI6IFwiV2luZG93X3dpbmRvd19fMWxIOGlcIixcblx0XCJtaW5pbWl6ZVwiOiBcIldpbmRvd19taW5pbWl6ZV9fMmxWNHBcIixcblx0XCJtYXhpbWl6ZVwiOiBcIldpbmRvd19tYXhpbWl6ZV9fMlJURG1cIixcblx0XCJjbG9zZVwiOiBcIldpbmRvd19jbG9zZV9fQnlsSE9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})