webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n  min-width: 185px;\\n  z-index: 1750;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  background-color: red;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  height: 176px;\\n  border-radius: 0 0 5px 5px;\\n  overflow: hidden auto;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EAEA,kBAAA;EACA,uEAAA;EAEA,kBAAA;EAEA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EAEA,aAAA;AALF;AAOE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAPJ;AASI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAVN;AAaI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAGA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAfN;AAiBM;EACE,qBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAjBR;AA2BQ;EACE,cCtDC;AD6BX;AA4BQ;EACE,cCzDC;AD+BX;AA6BQ;EACE,cC5DF;ADiCR;AAiCE;EAQE,yBAAA;EAEA,aAAA;EAEA,0BAAA;EAGA,qBAAA;AA1CJ;AEIE;EACE,WFwBE;EEvBF,YFuBE;AAzBN;AEKE;EACE,8BAAA;AFHJ;AEME;EACE,4BAAA;EACA,yBFgBE;EEfF,6BAAA;EACA,mBFaE;AAjBN;AEMI;EACE,yBAAA;AFJN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  background-color: map-get($window, title-bar-color);\\n\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  position: absolute;\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n  min-width: 185px;\\n\\n  z-index: map-get($window, z-index);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n      // TODO: Replace this with set svg/icons\\n      // grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        background-color: red;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n\\n\\n        svg {\\n          // &:hover {\\n          //   color: map-get($window, title-bar-color);\\n          // }\\n        }\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    background-color: map-get($window, bg-color);\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n\\n    overflow: hidden auto;\\n  }\\n}\\n\",\"$bgColor: #101f34;\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLGFBQWEsc0JBQXNCLGtCQUFrQixrQkFBa0IsYUFBYSx1QkFBdUIsR0FBRywyQ0FBMkMsMEJBQTBCLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsK0RBQStELG1CQUFtQixHQUFHLGlDQUFpQyw4QkFBOEIsa0JBQWtCLCtCQUErQiwwQkFBMEIsR0FBRyxvREFBb0QsZ0JBQWdCLGlCQUFpQixHQUFHLDBEQUEwRCxtQ0FBbUMsR0FBRywwREFBMEQsaUNBQWlDLDhCQUE4QixrQ0FBa0Msd0JBQXdCLEdBQUcsZ0VBQWdFLDhCQUE4QixHQUFHLE9BQU8seUxBQXlMLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLHNFQUFzRSxhQUFhLHdEQUF3RCx5QkFBeUIsNEVBQTRFLHNFQUFzRSwrR0FBK0csZ0JBQWdCLG1DQUFtQyxxQ0FBcUMscUJBQXFCLHlDQUF5QyxjQUFjLG9EQUFvRCxtREFBbUQsc0JBQXNCLDBCQUEwQixZQUFZLHlFQUF5RSxzQkFBc0IsNkJBQTZCLE9BQU8sYUFBYSwyQkFBMkIsaUJBQWlCLHdCQUF3QixrR0FBa0csaUJBQWlCLDZCQUE2QixrQkFBa0IsZ0NBQWdDLGdDQUFnQyxvQkFBb0IsOEJBQThCLHFCQUFxQix3QkFBd0IsMERBQTBELGdCQUFnQixXQUFXLHdCQUF3Qiw2QkFBNkIsV0FBVyx3QkFBd0IsNkJBQTZCLFdBQVcscUJBQXFCLDBCQUEwQixXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLHFEQUFxRCw4RUFBOEUsa0dBQWtHLDhCQUE4QixLQUFLLEdBQUcsdUJBQXVCLDZCQUE2Qix1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixhQUFhLFlBQVksR0FBRyxpQ0FBaUMsd0ZBQXdGLHdCQUF3QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0MsbUNBQW1DLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUM3b007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtaW4td2lkdGg6IDE4NXB4O1xcbiAgei1pbmRleDogMTc1MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciB7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDVweDtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNnB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21pbmltaXplX18ybFY0cCB7XFxuICBjb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgY29sb3I6ICMyOGM5NDA7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfY2xvc2VfX0J5bEhPIHtcXG4gIGNvbG9yOiAjZmY1NTRlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbiAgaGVpZ2h0OiAxNzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UseUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVFQUFBO0VBRUEsa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FBTEY7QUFPRTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBRUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtBQVBKO0FBU0k7RUFFRSxlQUFBO0VBRUEsV0FBQTtFQUVBLGtCQUFBO0FBVk47QUFhSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUdBLGFBQUE7RUFBQSxRQUFBO0VBRUEsa0JBQUE7QUFmTjtBQWlCTTtFQUNFLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBRUEsaUJBQUE7QUFqQlI7QUEyQlE7RUFDRSxjQ3REQztBRDZCWDtBQTRCUTtFQUNFLGNDekRDO0FEK0JYO0FBNkJRO0VBQ0UsY0M1REY7QURpQ1I7QUFpQ0U7RUFRRSx5QkFBQTtFQUVBLGFBQUE7RUFFQSwwQkFBQTtFQUdBLHFCQUFBO0FBMUNKO0FFSUU7RUFDRSxXRndCRTtFRXZCRixZRnVCRTtBQXpCTjtBRUtFO0VBQ0UsOEJBQUE7QUZISjtBRU1FO0VBQ0UsNEJBQUE7RUFDQSx5QkZnQkU7RUVmRiw2QkFBQTtFQUNBLG1CRmFFO0FBakJOO0FFTUk7RUFDRSx5QkFBQTtBRkpOXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4ud2luZG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gVE9ETzogU2V0IHRoaXMgc3R1ZmYgaW5zaWRlIHRoZSBqc3ggbW9zdCBsaWtlbHkgdmlhIHZhcnMgY29taW5nIGZyb20gdGhlIGFwcHMgYW5kIGRlZmF1bHRzXFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiBtYXAtZ2V0KCR3aW5kb3csIHdpZHRoKTtcXG4gIGhlaWdodDogbWFwLWdldCgkd2luZG93LCBoZWlnaHQpO1xcbiAgbWluLXdpZHRoOiAxODVweDtcXG5cXG4gIHotaW5kZXg6IG1hcC1nZXQoJHdpbmRvdywgei1pbmRleCk7XFxuXFxuICBoZWFkZXIge1xcbiAgICBjb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItdGV4dC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItaGVpZ2h0KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgIC8vIFRPRE86IEVsbGlwc2lzIHRvIG5vdCB1bmRlcmxhcCBidXR0b25zXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC8vIFRPRE86IFJlcGxhY2UgdGhpcyB3aXRoIHNldCBzdmcvaWNvbnNcXG4gICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxNHB4KTtcXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IDA7XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG5cXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgIC8vICY6aG92ZXIge1xcbiAgICAgICAgICAvLyAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1jb2xvcik7XFxuICAgICAgICAgIC8vIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjbWluaW1pemUge1xcbiAgICAgICAgICBjb2xvcjogJG1pbmltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtYXhpbWl6ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkbWF4aW1pemU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI2Nsb3NlIHtcXG4gICAgICAgICAgY29sb3I6ICRjbG9zZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXJzKFxcbiAgICAgIDE1cHgsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKSAqIDIsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBzY3JvbGwtYmFyLWNvbG9yKSxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKVxcbiAgICApO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIGhlaWdodCkgLSBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKVxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gIH1cXG59XFxuXCIsXCIkYmdDb2xvcjogIzEwMWYzNDtcXG5cXG4kaGlnaGxpZ2h0Q29sb3I6ICM2NWE5ZTg7XFxuXFxuJHVpQ29sb3IxOiAjM2MzYzNjO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogI2ZmYmQyZTtcXG4kbWF4aW1pemU6ICMyOGM5NDA7XFxuJGNsb3NlOiAjZmY1NTRlO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})