webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  z-index: 1750;\\n  border-radius: 5px;\\n  background-color: #3c3c3c;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n}\\n.Window_window__1lH8i header {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  height: 24px;\\n  color: #f8f8ff;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  left: 0;\\n  display: -moz-box;\\n  display: flex;\\n  padding: 5px;\\n  grid-gap: 5px;\\n  gap: 5px;\\n}\\n.Window_window__1lH8i header nav button {\\n  border: 0;\\n  background-color: transparent;\\n  border-radius: 100%;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  display: -moz-box;\\n  display: flex;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  background-color: #28c940;\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  background-color: #ff554e;\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p:hover, .Window_window__1lH8i header nav button#Window_maximize__2RTDm:hover, .Window_window__1lH8i header nav button#Window_close__BylHO:hover {\\n  background-color: unset;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  background-color: unset;\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  overflow: hidden auto;\\n  height: calc(100% - 24px);\\n  border-radius: 0 0 5px 5px;\\n  background-color: #f8f8ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n  background-color: #c8c8c8;\\n  background-clip: padding-box;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,uEAAA;AAFF;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAJJ;AAMI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAPN;AAUI;EACE,kBAAA;EACA,OAAA;EAEA,iBAAA;EAAA,aAAA;EAEA,YAAA;EAEA,aAAA;EAAA,QAAA;AAXN;AAaM;EACE,SAAA;EACA,6BAAA;EAEA,mBAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,iBAAA;EAAA,aAAA;AAZR;AAcQ;EACE,yBCpCC;EDqCD,cCrCC;ADyBX;AAeQ;EACE,yBCxCC;EDyCD,cCzCC;AD4BX;AAgBQ;EACE,yBC5CF;ED6CE,cC7CF;AD+BR;AAkBU;EACE,uBAAA;AAhBZ;AAoBQ;EACE,uBAAA;EACA,qBAAA;AAlBV;AAwBE;EAQE,qBAAA;EAEA,yBAAA;EAEA,0BAAA;EAEA,yBAAA;AAhCJ;AEJE;EACE,WFuBE;EEtBF,YFsBE;AAhBN;AEHE;EACE,8BAAA;AFKJ;AEFE;EACE,6BAAA;EACA,mBFcE;EEbF,yBFcE;EEbF,4BAAA;AFIJ;AEFI;EACE,yBAAA;AFIN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  z-index: map-get($window, z-index);\\n\\n  border-radius: 5px;\\n  background-color: map-get($window, title-bar-color);\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  header {\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($window, title-bar-height);\\n\\n    color: map-get($window, title-bar-text-color);\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      left: 0;\\n\\n      display: flex;\\n\\n      padding: 5px;\\n\\n      gap: 5px;\\n\\n      button {\\n        border: 0;\\n        background-color: transparent;\\n\\n        border-radius: 100%;\\n        height: fit-content;\\n        display: flex;\\n\\n        &#minimize {\\n          background-color: $minimize;\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          background-color: $maximize;\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          background-color: $close;\\n          color: $close;\\n        }\\n\\n        &#minimize, &#maximize, &#close {\\n          &:hover {\\n            background-color: unset;\\n          }\\n        }\\n\\n        &:hover {\\n          background-color: unset;\\n          transform: scale(1.1);\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    overflow: hidden auto;\\n\\n    height: calc(100% - #{map-get($window, title-bar-height)});\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n    background-color: map-get($window, bg-color);\\n  }\\n}\\n\",\"$bgColor: #101f34; // TODO: Share w/Vanta\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLGtCQUFrQix1QkFBdUIsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsWUFBWSxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLDJDQUEyQyxjQUFjLGtDQUFrQyx3QkFBd0IsZ0NBQWdDLDZCQUE2Qix3QkFBd0Isc0JBQXNCLGtCQUFrQixHQUFHLGtFQUFrRSw4QkFBOEIsbUJBQW1CLEdBQUcsa0VBQWtFLDhCQUE4QixtQkFBbUIsR0FBRywrREFBK0QsOEJBQThCLG1CQUFtQixHQUFHLGlOQUFpTiw0QkFBNEIsR0FBRyxpREFBaUQsNEJBQTRCLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsOEJBQThCLCtCQUErQiw4QkFBOEIsR0FBRyxvREFBb0QsZ0JBQWdCLGlCQUFpQixHQUFHLDBEQUEwRCxtQ0FBbUMsR0FBRywwREFBMEQsa0NBQWtDLHdCQUF3Qiw4QkFBOEIsaUNBQWlDLEdBQUcsZ0VBQWdFLDhCQUE4QixHQUFHLE9BQU8seUxBQXlMLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UsYUFBYSx1Q0FBdUMseUJBQXlCLHdEQUF3RCw0RUFBNEUsMkRBQTJELG9CQUFvQiwwQkFBMEIsbURBQW1ELHNEQUFzRCxZQUFZLHlFQUF5RSxzQkFBc0IsNkJBQTZCLE9BQU8sYUFBYSwyQkFBMkIsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0Isd0NBQXdDLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHdCQUF3Qix3Q0FBd0MsNkJBQTZCLFdBQVcsd0JBQXdCLHdDQUF3Qyw2QkFBNkIsV0FBVyxxQkFBcUIscUNBQXFDLDBCQUEwQixXQUFXLDZDQUE2QyxxQkFBcUIsc0NBQXNDLGFBQWEsV0FBVyxxQkFBcUIsb0NBQW9DLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLDhCQUE4Qiw4QkFBOEIsbUNBQW1DLEVBQUUsa0dBQWtHLG1EQUFtRCxLQUFLLEdBQUcsdUJBQXVCLG9EQUFvRCx1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0Isb0lBQW9JLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3hsTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIHotaW5kZXg6IDE3NTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ3JpZC1nYXA6IDVweDtcXG4gIGdhcDogNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgaGVpZ2h0OiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG4gIGNvbG9yOiAjZmZiZDJlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21heGltaXplX18yUlREbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjOTQwO1xcbiAgY29sb3I6ICMyOGM5NDA7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfY2xvc2VfX0J5bEhPIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU1NGU7XFxuICBjb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHA6aG92ZXIsIC5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfbWF4aW1pemVfXzJSVERtOmhvdmVyLCAuV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X2Nsb3NlX19CeWxITzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1RUFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBRUEsWUFBQTtFQUVBLGNBQUE7QUFKSjtBQU1JO0VBRUUsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVBOO0FBVUk7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFFQSxpQkFBQTtFQUFBLGFBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUFBLFFBQUE7QUFYTjtBQWFNO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7QUFaUjtBQWNRO0VBQ0UseUJDcENDO0VEcUNELGNDckNDO0FEeUJYO0FBZVE7RUFDRSx5QkN4Q0M7RUR5Q0QsY0N6Q0M7QUQ0Qlg7QUFnQlE7RUFDRSx5QkM1Q0Y7RUQ2Q0UsY0M3Q0Y7QUQrQlI7QUFrQlU7RUFDRSx1QkFBQTtBQWhCWjtBQW9CUTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUFsQlY7QUF3QkU7RUFRRSxxQkFBQTtFQUVBLHlCQUFBO0VBRUEsMEJBQUE7RUFFQSx5QkFBQTtBQWhDSjtBRUpFO0VBQ0UsV0Z1QkU7RUV0QkYsWUZzQkU7QUFoQk47QUVIRTtFQUNFLDhCQUFBO0FGS0o7QUVGRTtFQUNFLDZCQUFBO0VBQ0EsbUJGY0U7RUViRix5QkZjRTtFRWJGLDRCQUFBO0FGSUo7QUVGSTtFQUNFLHlCQUFBO0FGSU5cIixcImZpbGVcIjpcIldpbmRvdy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtaXhpbnMnO1xcblxcbi53aW5kb3cge1xcbiAgei1pbmRleDogbWFwLWdldCgkd2luZG93LCB6LWluZGV4KTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBjb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItdGV4dC1jb2xvcik7XFxuXFxuICAgIGgxIHtcXG4gICAgICAvLyBUT0RPOiBFbGxpcHNpcyB0byBub3QgdW5kZXJsYXAgYnV0dG9uc1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmI21pbmltaXplIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmltaXplO1xcbiAgICAgICAgICBjb2xvcjogJG1pbmltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtYXhpbWl6ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXhpbWl6ZTtcXG4gICAgICAgICAgY29sb3I6ICRtYXhpbWl6ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjY2xvc2Uge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xvc2U7XFxuICAgICAgICAgIGNvbG9yOiAkY2xvc2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI21pbmltaXplLCAmI21heGltaXplLCAmI2Nsb3NlIHtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGJhcnMoXFxuICAgICAgMTVweCxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpICogMixcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIHNjcm9sbC1iYXItY29sb3IpLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpXFxuICAgICk7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG5cXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAje21hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCl9KTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cylcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKTtcXG4gIH1cXG59XFxuXCIsXCIkYmdDb2xvcjogIzEwMWYzNDsgLy8gVE9ETzogU2hhcmUgdy9WYW50YVxcblxcbiRoaWdobGlnaHRDb2xvcjogIzY1YTllODtcXG5cXG4kdWlDb2xvcjE6ICMzYzNjM2M7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJG1pbmltaXplOiAjZmZiZDJlO1xcbiRtYXhpbWl6ZTogIzI4Yzk0MDtcXG4kY2xvc2U6ICNmZjU1NGU7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgLy8gVE9ETzogSWNvbiB0ZXh0IGlzIG5vdCB3cmFwcGluZyBzdGlsbFxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2luZG93XCI6IFwiV2luZG93X3dpbmRvd19fMWxIOGlcIixcblx0XCJtaW5pbWl6ZVwiOiBcIldpbmRvd19taW5pbWl6ZV9fMmxWNHBcIixcblx0XCJtYXhpbWl6ZVwiOiBcIldpbmRvd19tYXhpbWl6ZV9fMlJURG1cIixcblx0XCJjbG9zZVwiOiBcIldpbmRvd19jbG9zZV9fQnlsSE9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})