webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n}\\n.Window_window__1lH8i header {\\n  color: #fff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 14px);\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav #Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav #Window_maximize__2RTDm {\\n  background-color: #28c940;\\n}\\n.Window_window__1lH8i header nav #Window_close__BylHO {\\n  background-color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  border-radius: 0 0 5px 5px;\\n  height: 176px;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  -webkit-user-select: text;\\n     -moz-user-select: text;\\n      -ms-user-select: text;\\n          user-select: text;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #3333ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: blue;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #000099;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAMA;EACE,yBCLc;EDMd,kBAAA;EACA,uEAAA;EACA,kBAAA;EAIA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAfa;AAOf;AAUE;EACE,WCLmB;EDOnB,YAlBa;EAoBb,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAVJ;AAYI;EACE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAZN;AAeI;EACE,kBAAA;EACA,QAAA;EAEA,aAAA;EAEA,sCAAA;EACA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAhBN;AAkBM;EACE,kBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAlBR;AAoBQ;EACE,cCrDM;ADmChB;AAsBM;EACE,yBC5CS;ADwBjB;AAuBM;EACE,yBC/CS;AD0BjB;AAwBM;EACE,yBClDM;AD4Bd;AA2BE;EAQE,yBC9DQ;ED+DR,0BAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AAhCJ;AEAE;EACE,WFoBE;EEnBF,YFmBE;AAjBN;AECE;EACE,8BAAA;AFCJ;AEEE;EACE,4BAAA;EACA,sBFYE;EEXF,6BAAA;EACA,mBFSE;AATN;AEEI;EACE,yBAAA;AFAN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n$windowHeight: 200px;\\n$windowBorderRadius: 5px;\\n$titlebarHeight: 24px;\\n\\n.window {\\n  background-color: $titleBarColor; // TODO: This is actually the window color technically | opacity effect?\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n  position: absolute;\\n  // z-index: $window-z-index;\\n\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: $windowHeight;\\n\\n  header {\\n    color: $title-bar-text-color;\\n\\n    height: $titlebarHeight;\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: grid;\\n      // TODO: Replace this with set svg/icons\\n      grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        &:hover {\\n          color: $titleBarColor;\\n        }\\n      }\\n\\n      #minimize {\\n        background-color: $minimize-color;\\n      }\\n\\n      #maximize {\\n        background-color: $maximize-color;\\n      }\\n\\n      #close {\\n        background-color: $close-color;\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      $windowBorderRadius * 2,\\n      blue,\\n      $window-background-color\\n    );\\n\\n    background-color: $window-background-color;\\n    border-radius: 0 0 $windowBorderRadius $windowBorderRadius;\\n    height: $windowHeight - $titlebarHeight;\\n    overflow-y: auto;\\n    overflow-x: hidden;\\n    user-select: text;\\n  }\\n}\\n\",\"$highlightColor: #65a9e8;\\n$bgColor: #101f34;\\n$titleBarColor: #3c3c3c;\\n$offWhite: #f8f8ff;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n////////////\\n\\n$window-radius: 5px;\\n\\n$title-bar-text-color: #fff;\\n$minimize-color: #ffbd2e;\\n$maximize-color: #28c940;\\n$close-color: #ff554e;\\n$off-white: #f8f8ff;\\n$window-background-color: $off-white;\\n$scrollbar-color: lighten($titleBarColor, 55%);\\n$window-z-index: 8000;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0NBQWdDLGdCQUFnQixpQkFBaUIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsb0NBQW9DLHVCQUF1QixhQUFhLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLGFBQWEsdUJBQXVCLEdBQUcsMkNBQTJDLHVCQUF1Qix3QkFBd0IsY0FBYyxzQkFBc0IsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDREQUE0RCw4QkFBOEIsR0FBRyx5REFBeUQsOEJBQThCLEdBQUcsaUNBQWlDLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHFCQUFxQix1QkFBdUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQywyQkFBMkIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UseUJBQXlCLDJCQUEyQix3QkFBd0IsYUFBYSxxQ0FBcUMsZ0dBQWdHLDRFQUE0RSxvRUFBb0UsZ0NBQWdDLGlIQUFpSCxnQkFBZ0IsaUJBQWlCLDBCQUEwQixjQUFjLG1DQUFtQyxnQ0FBZ0Msc0JBQXNCLDBCQUEwQixZQUFZLHdCQUF3QixzQkFBc0IsNkJBQTZCLE9BQU8sYUFBYSwyQkFBMkIsaUJBQWlCLHdCQUF3QiwrRkFBK0YsaUJBQWlCLDZCQUE2QixrQkFBa0IsNkJBQTZCLGdDQUFnQyxvQkFBb0IsOEJBQThCLHFCQUFxQixrQ0FBa0MsV0FBVyxTQUFTLHFCQUFxQiw0Q0FBNEMsU0FBUyxxQkFBcUIsNENBQTRDLFNBQVMsa0JBQWtCLHlDQUF5QyxTQUFTLE9BQU8sS0FBSyxlQUFlLDRIQUE0SCxtREFBbUQsaUVBQWlFLDhDQUE4Qyx1QkFBdUIseUJBQXlCLHdCQUF3QixLQUFLLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIscUJBQXFCLGdNQUFnTSxvQkFBb0Isd0NBQXdDLGdDQUFnQywyQkFBMkIsMkJBQTJCLHdCQUF3QixzQkFBc0IsdUNBQXVDLGlEQUFpRCx3QkFBd0Isb0JBQW9CLDhCQUE4Qiw4RkFBOEYsZUFBZSxpSUFBaUksS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixhQUFhLGNBQWMsWUFBWSxhQUFhLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsZ0JBQWdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsWUFBWSxHQUFHLGlDQUFpQyx3RkFBd0Ysd0JBQXdCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxtQ0FBbUMsMENBQTBDLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ24rTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNjM2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDExNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDE0cHgpO1xcbiAgZ3JpZC1nYXA6IDVweDtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNnB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24ge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMzYzNjM2M7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2ICNXaW5kb3dfbWluaW1pemVfXzJsVjRwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJkMmU7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2ICNXaW5kb3dfbWF4aW1pemVfXzJSVERtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGM5NDA7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2ICNXaW5kb3dfY2xvc2VfX0J5bEhPIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU1NGU7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzM2ZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDk5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLHlCQ0xjO0VETWQsa0JBQUE7RUFDQSx1RUFBQTtFQUNBLGtCQUFBO0VBSUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFmYTtBQU9mO0FBVUU7RUFDRSxXQ0xtQjtFRE9uQixZQWxCYTtFQW9CYixpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0FBVko7QUFZSTtFQUNFLGVBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7QUFaTjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBRUEsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFFQSxrQkFBQTtBQWhCTjtBQWtCTTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxTQUFBO0VBRUEsaUJBQUE7QUFsQlI7QUFvQlE7RUFDRSxjQ3JETTtBRG1DaEI7QUFzQk07RUFDRSx5QkM1Q1M7QUR3QmpCO0FBdUJNO0VBQ0UseUJDL0NTO0FEMEJqQjtBQXdCTTtFQUNFLHlCQ2xETTtBRDRCZDtBQTJCRTtFQVFFLHlCQzlEUTtFRCtEUiwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFoQ0o7QUVBRTtFQUNFLFdGb0JFO0VFbkJGLFlGbUJFO0FBakJOO0FFQ0U7RUFDRSw4QkFBQTtBRkNKO0FFRUU7RUFDRSw0QkFBQTtFQUNBLHNCRllFO0VFWEYsNkJBQUE7RUFDQSxtQkZTRTtBQVROO0FFRUk7RUFDRSx5QkFBQTtBRkFOXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4kd2luZG93SGVpZ2h0OiAyMDBweDtcXG4kd2luZG93Qm9yZGVyUmFkaXVzOiA1cHg7XFxuJHRpdGxlYmFySGVpZ2h0OiAyNHB4O1xcblxcbi53aW5kb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRpdGxlQmFyQ29sb3I7IC8vIFRPRE86IFRoaXMgaXMgYWN0dWFsbHkgdGhlIHdpbmRvdyBjb2xvciB0ZWNobmljYWxseSB8IG9wYWNpdHkgZWZmZWN0P1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8vIFRPRE86IEJldHRlciB3YXkgdG8gbWFuYWdlIHNoYWRvdyBlZmZlY3RzXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvLyB6LWluZGV4OiAkd2luZG93LXotaW5kZXg7XFxuXFxuICAvLyBUT0RPOiBTZXQgdGhpcyBzdHVmZiBpbnNpZGUgdGhlIGpzeCBtb3N0IGxpa2VseSB2aWEgdmFycyBjb21pbmcgZnJvbSB0aGUgYXBwcyBhbmQgZGVmYXVsdHNcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDExNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAkd2luZG93SGVpZ2h0O1xcblxcbiAgaGVhZGVyIHtcXG4gICAgY29sb3I6ICR0aXRsZS1iYXItdGV4dC1jb2xvcjtcXG5cXG4gICAgaGVpZ2h0OiAkdGl0bGViYXJIZWlnaHQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcblxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGlzIHdpdGggc2V0IHN2Zy9pY29uc1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDE0cHgpO1xcbiAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICAgIGJvcmRlcjogMDtcXG5cXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAkdGl0bGVCYXJDb2xvcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgI21pbmltaXplIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaW5pbWl6ZS1jb2xvcjtcXG4gICAgICB9XFxuXFxuICAgICAgI21heGltaXplIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXhpbWl6ZS1jb2xvcjtcXG4gICAgICB9XFxuXFxuICAgICAgI2Nsb3NlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbG9zZS1jb2xvcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXJzKFxcbiAgICAgIDE1cHgsXFxuICAgICAgJHdpbmRvd0JvcmRlclJhZGl1cyAqIDIsXFxuICAgICAgYmx1ZSxcXG4gICAgICAkd2luZG93LWJhY2tncm91bmQtY29sb3JcXG4gICAgKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdpbmRvdy1iYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgJHdpbmRvd0JvcmRlclJhZGl1cyAkd2luZG93Qm9yZGVyUmFkaXVzO1xcbiAgICBoZWlnaHQ6ICR3aW5kb3dIZWlnaHQgLSAkdGl0bGViYXJIZWlnaHQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XFxuICB9XFxufVxcblwiLFwiJGhpZ2hsaWdodENvbG9yOiAjNjVhOWU4O1xcbiRiZ0NvbG9yOiAjMTAxZjM0O1xcbiR0aXRsZUJhckNvbG9yOiAjM2MzYzNjO1xcbiRvZmZXaGl0ZTogI2Y4ZjhmZjtcXG5cXG4kdGV4dFNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSxcXG4gIDAgMXB4IDNweCByZ2IoMCwgMCwgMCksIDAgMXB4IDNweCByZ2IoMCwgMCwgMCk7XFxuXFxuJHRoaWNrTGluZTogMnB4O1xcblxcbi8vLy8vLy8vLy8vL1xcblxcbiR3aW5kb3ctcmFkaXVzOiA1cHg7XFxuXFxuJHRpdGxlLWJhci10ZXh0LWNvbG9yOiAjZmZmO1xcbiRtaW5pbWl6ZS1jb2xvcjogI2ZmYmQyZTtcXG4kbWF4aW1pemUtY29sb3I6ICMyOGM5NDA7XFxuJGNsb3NlLWNvbG9yOiAjZmY1NTRlO1xcbiRvZmYtd2hpdGU6ICNmOGY4ZmY7XFxuJHdpbmRvdy1iYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xcbiRzY3JvbGxiYXItY29sb3I6IGxpZ2h0ZW4oJHRpdGxlQmFyQ29sb3IsIDU1JSk7XFxuJHdpbmRvdy16LWluZGV4OiA4MDAwO1xcblwiLFwiQGltcG9ydCAnbWFwcyc7XFxuXFxuQG1peGluIHRhc2tiYXJFbnRyeUhvdmVyIHtcXG4gIC8vIFRPRE86IFBhZGRpbmcgb24gbGVmdC9yaWdodCBvZiBlYWNoIGVudHJ5IHRoYXQgaW5jcmVhc2VzIG9uIGhvdmVyXFxuICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgaG92ZXItYmctb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGZ1bGxTY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRib3JkZXItcmFkaXVzLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6ICRzaXplO1xcbiAgICBoZWlnaHQ6ICRzaXplO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGZvcmVncm91bmQtY29sb3IsIDEwJSk7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZm9yZWdyb3VuZC1jb2xvciwgMjAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ3aW5kb3dcIjogXCJXaW5kb3dfd2luZG93X18xbEg4aVwiLFxuXHRcIm1pbmltaXplXCI6IFwiV2luZG93X21pbmltaXplX18ybFY0cFwiLFxuXHRcIm1heGltaXplXCI6IFwiV2luZG93X21heGltaXplX18yUlREbVwiLFxuXHRcImNsb3NlXCI6IFwiV2luZG93X2Nsb3NlX19CeWxIT1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})