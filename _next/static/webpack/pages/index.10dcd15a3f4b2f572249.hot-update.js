webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n}\\n.Window_window__1lH8i header {\\n  color: #fff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 14px);\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav .Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav .Window_maximize__2RTDm {\\n  background-color: #28c940;\\n}\\n.Window_window__1lH8i header nav .Window_close__BylHO {\\n  background-color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  border-radius: 0 0 5px 5px;\\n  height: 176px;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n  -webkit-user-select: text;\\n     -moz-user-select: text;\\n      -ms-user-select: text;\\n          user-select: text;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,yBCJc;EDKd,kBAAA;EACA,uEAAA;EACA,kBAAA;EAIA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAda;AAOf;AASE;EACE,WCJmB;EDMnB,YAlBa;EAoBb,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AATJ;AAWI;EACE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAXN;AAcI;EACE,kBAAA;EACA,QAAA;EAEA,aAAA;EAEA,sCAAA;EACA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAfN;AAiBM;EACE,kBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAjBR;AAmBQ;EACE,cCpDM;ADmChB;AAqBM;EACE,yBC3CS;ADwBjB;AAsBM;EACE,yBC9CS;AD0BjB;AAuBM;EACE,yBCjDM;AD4Bd;AA0BE;EAQE,yBC7DQ;ED8DR,0BAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AA/BJ;AEAE;EACE,WFmBE;EElBF,YFkBE;AAhBN;AECE;EACE,8BAAA;AFCJ;AEEE;EACE,4BAAA;EACA,yBD5Cc;EC6Cd,6BAAA;EACA,mBFQE;AARN;AEEI;EACE,yBAAA;AFAN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n$windowHeight: 200px;\\n$titlebarHeight: 24px;\\n\\n.window {\\n  background-color: $titleBarColor; // TODO: This is actually the window color technically | opacity effect?\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n  position: absolute;\\n  // z-index: $window-z-index;\\n\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: $windowHeight;\\n\\n  header {\\n    color: $title-bar-text-color;\\n\\n    height: $titlebarHeight;\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: grid;\\n      // TODO: Replace this with set svg/icons\\n      grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        &:hover {\\n          color: $titleBarColor;\\n        }\\n      }\\n\\n      .minimize {\\n        background-color: $minimize-color;\\n      }\\n\\n      .maximize {\\n        background-color: $maximize-color;\\n      }\\n\\n      .close {\\n        background-color: $close-color;\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      $window-radius * 2,\\n      $scrollbar-color,\\n      $window-background-color\\n    );\\n\\n    background-color: $window-background-color;\\n    border-radius: 0 0 $window-radius $window-radius;\\n    height: $windowHeight - $titlebarHeight;\\n    overflow-y: auto;\\n    overflow-x: hidden;\\n    user-select: text;\\n  }\\n}\\n\",\"$highlightColor: #65a9e8;\\n$bgColor: #101f34;\\n$titleBarColor: #3c3c3c;\\n$offWhite: #f8f8ff;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n////////////\\n\\n$window-radius: 5px;\\n\\n$title-bar-text-color: #fff;\\n$minimize-color: #ffbd2e;\\n$maximize-color: #28c940;\\n$close-color: #ff554e;\\n$off-white: #f8f8ff;\\n$window-background-color: $off-white;\\n$scrollbar-color: lighten($titleBarColor, 55%);\\n$window-z-index: 8000;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLEdBQUcsZ0NBQWdDLGdCQUFnQixpQkFBaUIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsb0NBQW9DLHVCQUF1QixhQUFhLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLGFBQWEsdUJBQXVCLEdBQUcsMkNBQTJDLHVCQUF1Qix3QkFBd0IsY0FBYyxzQkFBc0IsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDREQUE0RCw4QkFBOEIsR0FBRyx5REFBeUQsOEJBQThCLEdBQUcsaUNBQWlDLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHFCQUFxQix1QkFBdUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UseUJBQXlCLHdCQUF3QixhQUFhLHFDQUFxQyxnR0FBZ0csNEVBQTRFLG9FQUFvRSxnQ0FBZ0MsaUhBQWlILGdCQUFnQixpQkFBaUIsMEJBQTBCLGNBQWMsbUNBQW1DLGdDQUFnQyxzQkFBc0IsMEJBQTBCLFlBQVksd0JBQXdCLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixpQkFBaUIsd0JBQXdCLCtGQUErRixpQkFBaUIsNkJBQTZCLGtCQUFrQiw2QkFBNkIsZ0NBQWdDLG9CQUFvQiw4QkFBOEIscUJBQXFCLGtDQUFrQyxXQUFXLFNBQVMscUJBQXFCLDRDQUE0QyxTQUFTLHFCQUFxQiw0Q0FBNEMsU0FBUyxrQkFBa0IseUNBQXlDLFNBQVMsT0FBTyxLQUFLLGVBQWUsbUlBQW1JLG1EQUFtRCx1REFBdUQsOENBQThDLHVCQUF1Qix5QkFBeUIsd0JBQXdCLEtBQUssR0FBRyw4QkFBOEIsb0JBQW9CLDBCQUEwQixxQkFBcUIsZ01BQWdNLG9CQUFvQix3Q0FBd0MsZ0NBQWdDLDJCQUEyQiwyQkFBMkIsd0JBQXdCLHNCQUFzQix1Q0FBdUMsaURBQWlELHdCQUF3QixvQkFBb0IsOEJBQThCLDhGQUE4RixlQUFlLGlJQUFpSSxLQUFLLEdBQUcsdUJBQXVCLGtCQUFrQixpQkFBaUIsc0JBQXNCLGFBQWEsY0FBYyxZQUFZLGFBQWEsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixnQkFBZ0IsYUFBYSxHQUFHLG9CQUFvQixvQkFBb0IsYUFBYSxZQUFZLEdBQUcsaUNBQWlDLHdGQUF3Rix3QkFBd0IsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG1DQUFtQywwQ0FBMEMsb0NBQW9DLG9DQUFvQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDejhNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuV2luZG93X3dpbmRvd19fMWxIOGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgbGVmdDogMTE1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgLldpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgLldpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzk0MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgLldpbmRvd19jbG9zZV9fQnlsSE8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgaGVpZ2h0OiAxNzZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0UseUJDSmM7RURLZCxrQkFBQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7RUFJQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQWRhO0FBT2Y7QUFTRTtFQUNFLFdDSm1CO0VETW5CLFlBbEJhO0VBb0JiLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFUSjtBQVdJO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVhOO0FBY0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUVBLGtCQUFBO0FBZk47QUFpQk07RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0FBakJSO0FBbUJRO0VBQ0UsY0NwRE07QURtQ2hCO0FBcUJNO0VBQ0UseUJDM0NTO0FEd0JqQjtBQXNCTTtFQUNFLHlCQzlDUztBRDBCakI7QUF1Qk07RUFDRSx5QkNqRE07QUQ0QmQ7QUEwQkU7RUFRRSx5QkM3RFE7RUQ4RFIsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBL0JKO0FFQUU7RUFDRSxXRm1CRTtFRWxCRixZRmtCRTtBQWhCTjtBRUNFO0VBQ0UsOEJBQUE7QUZDSjtBRUVFO0VBQ0UsNEJBQUE7RUFDQSx5QkQ1Q2M7RUM2Q2QsNkJBQUE7RUFDQSxtQkZRRTtBQVJOO0FFRUk7RUFDRSx5QkFBQTtBRkFOXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4kd2luZG93SGVpZ2h0OiAyMDBweDtcXG4kdGl0bGViYXJIZWlnaHQ6IDI0cHg7XFxuXFxuLndpbmRvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGl0bGVCYXJDb2xvcjsgLy8gVE9ETzogVGhpcyBpcyBhY3R1YWxseSB0aGUgd2luZG93IGNvbG9yIHRlY2huaWNhbGx5IHwgb3BhY2l0eSBlZmZlY3Q/XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLy8gVE9ETzogQmV0dGVyIHdheSB0byBtYW5hZ2Ugc2hhZG93IGVmZmVjdHNcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIHotaW5kZXg6ICR3aW5kb3ctei1pbmRleDtcXG5cXG4gIC8vIFRPRE86IFNldCB0aGlzIHN0dWZmIGluc2lkZSB0aGUganN4IG1vc3QgbGlrZWx5IHZpYSB2YXJzIGNvbWluZyBmcm9tIHRoZSBhcHBzIGFuZCBkZWZhdWx0c1xcbiAgdG9wOiA0MHB4O1xcbiAgbGVmdDogMTE1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6ICR3aW5kb3dIZWlnaHQ7XFxuXFxuICBoZWFkZXIge1xcbiAgICBjb2xvcjogJHRpdGxlLWJhci10ZXh0LWNvbG9yO1xcblxcbiAgICBoZWlnaHQ6ICR0aXRsZWJhckhlaWdodDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBzZXQgc3ZnL2ljb25zXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcblxcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICR0aXRsZUJhckNvbG9yO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubWluaW1pemUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pbmltaXplLWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICAubWF4aW1pemUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1heGltaXplLWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2xvc2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNsb3NlLWNvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGJhcnMoXFxuICAgICAgMTVweCxcXG4gICAgICAkd2luZG93LXJhZGl1cyAqIDIsXFxuICAgICAgJHNjcm9sbGJhci1jb2xvcixcXG4gICAgICAkd2luZG93LWJhY2tncm91bmQtY29sb3JcXG4gICAgKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdpbmRvdy1iYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgJHdpbmRvdy1yYWRpdXMgJHdpbmRvdy1yYWRpdXM7XFxuICAgIGhlaWdodDogJHdpbmRvd0hlaWdodCAtICR0aXRsZWJhckhlaWdodDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG4gIH1cXG59XFxuXCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICM2NWE5ZTg7XFxuJGJnQ29sb3I6ICMxMDFmMzQ7XFxuJHRpdGxlQmFyQ29sb3I6ICMzYzNjM2M7XFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXFxuLy8vLy8vLy8vLy8vXFxuXFxuJHdpbmRvdy1yYWRpdXM6IDVweDtcXG5cXG4kdGl0bGUtYmFyLXRleHQtY29sb3I6ICNmZmY7XFxuJG1pbmltaXplLWNvbG9yOiAjZmZiZDJlO1xcbiRtYXhpbWl6ZS1jb2xvcjogIzI4Yzk0MDtcXG4kY2xvc2UtY29sb3I6ICNmZjU1NGU7XFxuJG9mZi13aGl0ZTogI2Y4ZjhmZjtcXG4kd2luZG93LWJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XFxuJHNjcm9sbGJhci1jb2xvcjogbGlnaHRlbigkdGl0bGVCYXJDb2xvciwgNTUlKTtcXG4kd2luZG93LXotaW5kZXg6IDgwMDA7XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})