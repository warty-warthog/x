webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n  z-index: 1750;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 14px);\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  background-color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  background-color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  height: 176px;\\n  border-radius: 0 0 5px 5px;\\n  overflow: hidden auto;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EAEA,kBAAA;EACA,uEAAA;EAEA,kBAAA;EAEA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EAEA,aAAA;AALF;AAOE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAPJ;AASI;EACE,eAAA;EAEA,WAAA;EAEA,kBAAA;AATN;AAYI;EACE,kBAAA;EACA,QAAA;EAEA,aAAA;EAEA,sCAAA;EACA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAbN;AAeM;EACE,kBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAfR;AAiBQ;EACE,cAAA;AAfV;AAkBQ;EACE,yBAAA;AAhBV;AAmBQ;EACE,yBAAA;AAjBV;AAoBQ;EACE,yBAAA;AAlBV;AAwBE;EAQE,yBAAA;EAEA,aAAA;EAEA,0BAAA;EAEA,qBAAA;AAhCJ;ACCE;EACE,WDkBE;ECjBF,YDiBE;AAhBN;ACEE;EACE,8BAAA;ADAJ;ACGE;EACE,4BAAA;EACA,yBDUE;ECTF,6BAAA;EACA,mBDOE;AARN;ACGI;EACE,yBAAA;ADDN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  background-color: map-get($window, title-bar-color);\\n\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  position: absolute;\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n\\n  z-index: map-get($window, z-index);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: grid;\\n      // TODO: Replace this with set svg/icons\\n      grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        &:hover {\\n          color: map-get($window, title-bar-color);\\n        }\\n\\n        &#minimize {\\n          background-color: #ffbd2e;\\n        }\\n\\n        &#maximize {\\n          background-color: #28c940;\\n        }\\n\\n        &#close {\\n          background-color: #ff554e;\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    background-color: map-get($window, bg-color);\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius) map-get($window, border-radius);\\n\\n    overflow: hidden auto;\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLGtCQUFrQixHQUFHLGdDQUFnQyxtQkFBbUIsaUJBQWlCLHNCQUFzQixrQkFBa0IsMkJBQTJCLDZCQUE2QixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsYUFBYSxrQkFBa0IsMkNBQTJDLGtCQUFrQixhQUFhLHVCQUF1QixHQUFHLDJDQUEyQyx1QkFBdUIsd0JBQXdCLGNBQWMsc0JBQXNCLEdBQUcsaURBQWlELG1CQUFtQixHQUFHLGtFQUFrRSw4QkFBOEIsR0FBRyxrRUFBa0UsOEJBQThCLEdBQUcsK0RBQStELDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsa0JBQWtCLCtCQUErQiwwQkFBMEIsR0FBRyxvREFBb0QsZ0JBQWdCLGlCQUFpQixHQUFHLDBEQUEwRCxtQ0FBbUMsR0FBRywwREFBMEQsaUNBQWlDLDhCQUE4QixrQ0FBa0Msd0JBQXdCLEdBQUcsZ0VBQWdFLDhCQUE4QixHQUFHLE9BQU8sNklBQTZJLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UsYUFBYSx3REFBd0QseUJBQXlCLDRFQUE0RSxzRUFBc0UsK0dBQStHLGdCQUFnQixtQ0FBbUMscUNBQXFDLHlDQUF5QyxjQUFjLG9EQUFvRCxtREFBbUQsc0JBQXNCLDBCQUEwQixZQUFZLHdCQUF3QixzQkFBc0IsNkJBQTZCLE9BQU8sYUFBYSwyQkFBMkIsaUJBQWlCLHdCQUF3QiwrRkFBK0YsaUJBQWlCLDZCQUE2QixrQkFBa0IsNkJBQTZCLGdDQUFnQyxvQkFBb0IsOEJBQThCLHFCQUFxQixxREFBcUQsV0FBVyx3QkFBd0Isc0NBQXNDLFdBQVcsd0JBQXdCLHNDQUFzQyxXQUFXLHFCQUFxQixzQ0FBc0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxlQUFlLHdLQUF3SyxxREFBcUQsOEVBQThFLDJGQUEyRiw4QkFBOEIsS0FBSyxHQUFHLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixhQUFhLFlBQVksR0FBRyxpQ0FBaUMsd0ZBQXdGLHdCQUF3QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0MsbUNBQW1DLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUNudUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB6LWluZGV4OiAxNzUwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzk0MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19jbG9zZV9fQnlsSE8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU5NTk1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UseUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVFQUFBO0VBRUEsa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVROO0FBWUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUVBLGtCQUFBO0FBYk47QUFlTTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBRUEsaUJBQUE7QUFmUjtBQWlCUTtFQUNFLGNBQUE7QUFmVjtBQWtCUTtFQUNFLHlCQUFBO0FBaEJWO0FBbUJRO0VBQ0UseUJBQUE7QUFqQlY7QUFvQlE7RUFDRSx5QkFBQTtBQWxCVjtBQXdCRTtFQVFFLHlCQUFBO0VBRUEsYUFBQTtFQUVBLDBCQUFBO0VBRUEscUJBQUE7QUFoQ0o7QUNDRTtFQUNFLFdEa0JFO0VDakJGLFlEaUJFO0FBaEJOO0FDRUU7RUFDRSw4QkFBQTtBREFKO0FDR0U7RUFDRSw0QkFBQTtFQUNBLHlCRFVFO0VDVEYsNkJBQUE7RUFDQSxtQkRPRTtBQVJOO0FDR0k7RUFDRSx5QkFBQTtBREROXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4ud2luZG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gVE9ETzogU2V0IHRoaXMgc3R1ZmYgaW5zaWRlIHRoZSBqc3ggbW9zdCBsaWtlbHkgdmlhIHZhcnMgY29taW5nIGZyb20gdGhlIGFwcHMgYW5kIGRlZmF1bHRzXFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiBtYXAtZ2V0KCR3aW5kb3csIHdpZHRoKTtcXG4gIGhlaWdodDogbWFwLWdldCgkd2luZG93LCBoZWlnaHQpO1xcblxcbiAgei1pbmRleDogbWFwLWdldCgkd2luZG93LCB6LWluZGV4KTtcXG5cXG4gIGhlYWRlciB7XFxuICAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci10ZXh0LWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIC8vIFRPRE86IFJlcGxhY2UgdGhpcyB3aXRoIHNldCBzdmcvaWNvbnNcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxNHB4KTtcXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IDA7XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItY29sb3IpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtaW5pbWl6ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJkMmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI21heGltaXplIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzk0MDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjY2xvc2Uge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NTRlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGJhcnMoXFxuICAgICAgMTVweCxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpICogMixcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIHNjcm9sbC1iYXItY29sb3IpLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpXFxuICAgICk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgaGVpZ2h0KSAtIG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})