webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n  min-width: 185px;\\n  z-index: 1750;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  background-color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button svg:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  height: 176px;\\n  border-radius: 0 0 5px 5px;\\n  overflow: hidden auto;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EAEA,kBAAA;EACA,uEAAA;EAEA,kBAAA;EAEA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EAEA,aAAA;AALF;AAOE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AAPJ;AASI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAVN;AAaI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAGA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAfN;AAiBM;EACE,6BAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAjBR;AAsBU;EACE,cAAA;AApBZ;AAwBQ;EACE,cCtDC;ADgCX;AAyBQ;EACE,cCzDC;ADkCX;AA0BQ;EACE,cC5DF;ADoCR;AA8BE;EAQE,yBAAA;EAEA,aAAA;EAEA,0BAAA;EAGA,qBAAA;AAvCJ;AECE;EACE,WFwBE;EEvBF,YFuBE;AAtBN;AEEE;EACE,8BAAA;AFAJ;AEGE;EACE,4BAAA;EACA,yBFgBE;EEfF,6BAAA;EACA,mBFaE;AAdN;AEGI;EACE,yBAAA;AFDN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  background-color: map-get($window, title-bar-color);\\n\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  position: absolute;\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n  min-width: 185px;\\n\\n  z-index: map-get($window, z-index);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n      // TODO: Replace this with set svg/icons\\n      // grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        background-color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        \\n\\n        svg {\\n          &:hover {\\n            color: map-get($window, title-bar-color);\\n          }\\n        }\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    background-color: map-get($window, bg-color);\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n\\n    overflow: hidden auto;\\n  }\\n}\\n\",\"$bgColor: #101f34;\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLGFBQWEsc0JBQXNCLGtCQUFrQixrQkFBa0IsYUFBYSx1QkFBdUIsR0FBRywyQ0FBMkMsa0NBQWtDLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsa0VBQWtFLG1CQUFtQixHQUFHLCtEQUErRCxtQkFBbUIsR0FBRyxpQ0FBaUMsOEJBQThCLGtCQUFrQiwrQkFBK0IsMEJBQTBCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UsYUFBYSx3REFBd0QseUJBQXlCLDRFQUE0RSxzRUFBc0UsK0dBQStHLGdCQUFnQixtQ0FBbUMscUNBQXFDLHFCQUFxQix5Q0FBeUMsY0FBYyxvREFBb0QsbURBQW1ELHNCQUFzQiwwQkFBMEIsWUFBWSx5RUFBeUUsc0JBQXNCLDZCQUE2QixPQUFPLGFBQWEsMkJBQTJCLGlCQUFpQix3QkFBd0Isa0dBQWtHLGlCQUFpQiw2QkFBNkIsa0JBQWtCLHdDQUF3QyxnQ0FBZ0Msb0JBQW9CLDhCQUE4Qiw2QkFBNkIscUJBQXFCLHVEQUF1RCxhQUFhLFdBQVcsd0JBQXdCLDZCQUE2QixXQUFXLHdCQUF3Qiw2QkFBNkIsV0FBVyxxQkFBcUIsMEJBQTBCLFdBQVcsU0FBUyxPQUFPLEtBQUssZUFBZSx3S0FBd0sscURBQXFELDhFQUE4RSxrR0FBa0csOEJBQThCLEtBQUssR0FBRyx1QkFBdUIsNkJBQTZCLHVCQUF1QixtQkFBbUIsdUJBQXVCLHVCQUF1QixxQkFBcUIsa0JBQWtCLGdNQUFnTSxvQkFBb0Isb0JBQW9CLDhCQUE4Qiw4RkFBOEYsZUFBZSxpSUFBaUksS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixhQUFhLGNBQWMsWUFBWSxhQUFhLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsZ0JBQWdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsWUFBWSxHQUFHLGlDQUFpQyx3RkFBd0Ysd0JBQXdCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxtQ0FBbUMsMENBQTBDLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQzV2TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNjM2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDExNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1pbi13aWR0aDogMTg1cHg7XFxuICB6LWluZGV4OiAxNzUwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjE1cztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHN2Zzpob3ZlciB7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgY29sb3I6ICNmZmJkMmU7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfbWF4aW1pemVfXzJSVERtIHtcXG4gIGNvbG9yOiAjMjhjOTQwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X2Nsb3NlX19CeWxITyB7XFxuICBjb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU5NTk1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1RUFBQTtFQUVBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFQSjtBQVNJO0VBRUUsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVZOO0FBYUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxpQkFBQTtFQUFBLGFBQUE7RUFHQSxhQUFBO0VBQUEsUUFBQTtFQUVBLGtCQUFBO0FBZk47QUFpQk07RUFDRSw2QkFBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0FBakJSO0FBc0JVO0VBQ0UsY0FBQTtBQXBCWjtBQXdCUTtFQUNFLGNDdERDO0FEZ0NYO0FBeUJRO0VBQ0UsY0N6REM7QURrQ1g7QUEwQlE7RUFDRSxjQzVERjtBRG9DUjtBQThCRTtFQVFFLHlCQUFBO0VBRUEsYUFBQTtFQUVBLDBCQUFBO0VBR0EscUJBQUE7QUF2Q0o7QUVDRTtFQUNFLFdGd0JFO0VFdkJGLFlGdUJFO0FBdEJOO0FFRUU7RUFDRSw4QkFBQTtBRkFKO0FFR0U7RUFDRSw0QkFBQTtFQUNBLHlCRmdCRTtFRWZGLDZCQUFBO0VBQ0EsbUJGYUU7QUFkTjtBRUdJO0VBQ0UseUJBQUE7QUZETlwiLFwiZmlsZVwiOlwiV2luZG93Lm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ21peGlucyc7XFxuXFxuLndpbmRvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1jb2xvcik7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLy8gVE9ETzogQmV0dGVyIHdheSB0byBtYW5hZ2Ugc2hhZG93IGVmZmVjdHNcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8vIFRPRE86IFNldCB0aGlzIHN0dWZmIGluc2lkZSB0aGUganN4IG1vc3QgbGlrZWx5IHZpYSB2YXJzIGNvbWluZyBmcm9tIHRoZSBhcHBzIGFuZCBkZWZhdWx0c1xcbiAgdG9wOiA0MHB4O1xcbiAgbGVmdDogMTE1cHg7XFxuICB3aWR0aDogbWFwLWdldCgkd2luZG93LCB3aWR0aCk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgaGVpZ2h0KTtcXG4gIG1pbi13aWR0aDogMTg1cHg7XFxuXFxuICB6LWluZGV4OiBtYXAtZ2V0KCR3aW5kb3csIHotaW5kZXgpO1xcblxcbiAgaGVhZGVyIHtcXG4gICAgY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLXRleHQtY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICAvLyBUT0RPOiBFbGxpcHNpcyB0byBub3QgdW5kZXJsYXAgYnV0dG9uc1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBzZXQgc3ZnL2ljb25zXFxuICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IDA7XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG4gICAgICAgIFxcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtaW5pbWl6ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkbWluaW1pemU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI21heGltaXplIHtcXG4gICAgICAgICAgY29sb3I6ICRtYXhpbWl6ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjY2xvc2Uge1xcbiAgICAgICAgICBjb2xvcjogJGNsb3NlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGJhcnMoXFxuICAgICAgMTVweCxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpICogMixcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIHNjcm9sbC1iYXItY29sb3IpLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpXFxuICAgICk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgYmctY29sb3IpO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgaGVpZ2h0KSAtIG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgfVxcbn1cXG5cIixcIiRiZ0NvbG9yOiAjMTAxZjM0O1xcblxcbiRoaWdobGlnaHRDb2xvcjogIzY1YTllODtcXG5cXG4kdWlDb2xvcjE6ICMzYzNjM2M7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJG1pbmltaXplOiAjZmZiZDJlO1xcbiRtYXhpbWl6ZTogIzI4Yzk0MDtcXG4kY2xvc2U6ICNmZjU1NGU7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIC8vIFRPRE86IEZpeCBgb3ZlcmZsb3c6IGhpZGRlbmAgY3V0dGluZyBvZmYgdGV4dCBzaGFkb3dzXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2luZG93XCI6IFwiV2luZG93X3dpbmRvd19fMWxIOGlcIixcblx0XCJtaW5pbWl6ZVwiOiBcIldpbmRvd19taW5pbWl6ZV9fMmxWNHBcIixcblx0XCJtYXhpbWl6ZVwiOiBcIldpbmRvd19tYXhpbWl6ZV9fMlJURG1cIixcblx0XCJjbG9zZVwiOiBcIldpbmRvd19jbG9zZV9fQnlsSE9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})