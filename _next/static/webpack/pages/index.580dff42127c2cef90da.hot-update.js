webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  background-color: #3c3c3c;\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n  position: absolute;\\n  top: 40px;\\n  left: 115px;\\n  width: 200px;\\n  height: 200px;\\n  min-width: 100px;\\n  z-index: 1750;\\n}\\n.Window_window__1lH8i header {\\n  color: #f8f8ff;\\n  height: 24px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 14px);\\n  grid-gap: 5px;\\n  gap: 5px;\\n  padding-right: 6px;\\n}\\n.Window_window__1lH8i header nav button {\\n  color: transparent;\\n  border-radius: 100%;\\n  border: 0;\\n  transition: 0.15s;\\n}\\n.Window_window__1lH8i header nav button:hover {\\n  color: #3c3c3c;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  background-color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  background-color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  background-color: #ff554e;\\n}\\n.Window_window__1lH8i article {\\n  background-color: #f8f8ff;\\n  height: 176px;\\n  border-radius: 0 0 5px 5px;\\n  overflow: hidden auto;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  background-clip: padding-box;\\n  background-color: #c8c8c8;\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBAAA;EAEA,kBAAA;EACA,uEAAA;EAEA,kBAAA;EAEA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EAEA,gBAAA;EAEA,aAAA;AANF;AAQE;EACE,cAAA;EAEA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;AARJ;AAUI;EACE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAVN;AAaI;EACE,kBAAA;EACA,QAAA;EAEA,aAAA;EAEA,sCAAA;EACA,aAAA;EAAA,QAAA;EAEA,kBAAA;AAdN;AAgBM;EACE,kBAAA;EAEA,mBAAA;EACA,SAAA;EAEA,iBAAA;AAhBR;AAkBQ;EACE,cAAA;AAhBV;AAmBQ;EACE,yBClDC;ADiCX;AAoBQ;EACE,yBCrDC;ADmCX;AAqBQ;EACE,yBCxDF;ADqCR;AAyBE;EAQE,yBAAA;EAEA,aAAA;EAEA,0BAAA;EAEA,qBAAA;AAjCJ;AEAE;EACE,WFoBE;EEnBF,YFmBE;AAjBN;AECE;EACE,8BAAA;AFCJ;AEEE;EACE,4BAAA;EACA,yBFYE;EEXF,6BAAA;EACA,mBFSE;AATN;AEEI;EACE,yBAAA;AFAN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  background-color: map-get($window, title-bar-color);\\n\\n  border-radius: 5px;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  position: absolute;\\n  // TODO: Set this stuff inside the jsx most likely via vars coming from the apps and defaults\\n  top: 40px;\\n  left: 115px;\\n  width: map-get($window, width);\\n  height: map-get($window, height);\\n\\n  min-width: 100px;\\n\\n  z-index: map-get($window, z-index);\\n\\n  header {\\n    color: map-get($window, title-bar-text-color);\\n\\n    height: map-get($window, title-bar-height);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    h1 {\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: grid;\\n      // TODO: Replace this with set svg/icons\\n      grid-template-columns: repeat(3, 14px);\\n      gap: 5px;\\n\\n      padding-right: 6px;\\n\\n      button {\\n        color: transparent;\\n\\n        border-radius: 100%;\\n        border: 0;\\n\\n        transition: 0.15s;\\n\\n        &:hover {\\n          color: map-get($window, title-bar-color);\\n        }\\n\\n        &#minimize {\\n          background-color: $minimize;\\n        }\\n\\n        &#maximize {\\n          background-color: $maximize;\\n        }\\n\\n        &#close {\\n          background-color: $close;\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    background-color: map-get($window, bg-color);\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius) map-get($window, border-radius);\\n\\n    overflow: hidden auto;\\n  }\\n}\\n\",\"$bgColor: #101f34;\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsNEVBQTRFLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFCQUFxQixrQkFBa0IsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsR0FBRyxtQ0FBbUMsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLGFBQWEsa0JBQWtCLDJDQUEyQyxrQkFBa0IsYUFBYSx1QkFBdUIsR0FBRywyQ0FBMkMsdUJBQXVCLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLGlEQUFpRCxtQkFBbUIsR0FBRyxrRUFBa0UsOEJBQThCLEdBQUcsa0VBQWtFLDhCQUE4QixHQUFHLCtEQUErRCw4QkFBOEIsR0FBRyxpQ0FBaUMsOEJBQThCLGtCQUFrQiwrQkFBK0IsMEJBQTBCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGlDQUFpQyw4QkFBOEIsa0NBQWtDLHdCQUF3QixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxzRUFBc0UsYUFBYSx3REFBd0QseUJBQXlCLDRFQUE0RSxzRUFBc0UsK0dBQStHLGdCQUFnQixtQ0FBbUMscUNBQXFDLHVCQUF1Qix5Q0FBeUMsY0FBYyxvREFBb0QsbURBQW1ELHNCQUFzQiwwQkFBMEIsWUFBWSx3QkFBd0Isc0JBQXNCLDZCQUE2QixPQUFPLGFBQWEsMkJBQTJCLGlCQUFpQix3QkFBd0IsK0ZBQStGLGlCQUFpQiw2QkFBNkIsa0JBQWtCLDZCQUE2QixnQ0FBZ0Msb0JBQW9CLDhCQUE4QixxQkFBcUIscURBQXFELFdBQVcsd0JBQXdCLHdDQUF3QyxXQUFXLHdCQUF3Qix3Q0FBd0MsV0FBVyxxQkFBcUIscUNBQXFDLFdBQVcsU0FBUyxPQUFPLEtBQUssZUFBZSx3S0FBd0sscURBQXFELDhFQUE4RSwyRkFBMkYsOEJBQThCLEtBQUssR0FBRyx1QkFBdUIsNkJBQTZCLHVCQUF1QixtQkFBbUIsdUJBQXVCLHVCQUF1QixxQkFBcUIsa0JBQWtCLGdNQUFnTSxvQkFBb0Isb0JBQW9CLDhCQUE4Qiw4RkFBOEYsZUFBZSxpSUFBaUksS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixhQUFhLGNBQWMsWUFBWSxhQUFhLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsZ0JBQWdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsWUFBWSxHQUFHLGlDQUFpQyx3RkFBd0Ysd0JBQXdCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxtQ0FBbUMsMENBQTBDLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3R0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNjM2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDExNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB6LWluZGV4OiAxNzUwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzNjM2MzYztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4Yzk0MDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19jbG9zZV9fQnlsSE8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZjtcXG4gIGhlaWdodDogMTc2cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU5NTk1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1RUFBQTtFQUVBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBRUEsYUFBQTtBQU5GO0FBUUU7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7QUFSSjtBQVVJO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVZOO0FBYUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUVBLGtCQUFBO0FBZE47QUFnQk07RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0FBaEJSO0FBa0JRO0VBQ0UsY0FBQTtBQWhCVjtBQW1CUTtFQUNFLHlCQ2xEQztBRGlDWDtBQW9CUTtFQUNFLHlCQ3JEQztBRG1DWDtBQXFCUTtFQUNFLHlCQ3hERjtBRHFDUjtBQXlCRTtFQVFFLHlCQUFBO0VBRUEsYUFBQTtFQUVBLDBCQUFBO0VBRUEscUJBQUE7QUFqQ0o7QUVBRTtFQUNFLFdGb0JFO0VFbkJGLFlGbUJFO0FBakJOO0FFQ0U7RUFDRSw4QkFBQTtBRkNKO0FFRUU7RUFDRSw0QkFBQTtFQUNBLHlCRllFO0VFWEYsNkJBQUE7RUFDQSxtQkZTRTtBQVROO0FFRUk7RUFDRSx5QkFBQTtBRkFOXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4ud2luZG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLy8gVE9ETzogU2V0IHRoaXMgc3R1ZmYgaW5zaWRlIHRoZSBqc3ggbW9zdCBsaWtlbHkgdmlhIHZhcnMgY29taW5nIGZyb20gdGhlIGFwcHMgYW5kIGRlZmF1bHRzXFxuICB0b3A6IDQwcHg7XFxuICBsZWZ0OiAxMTVweDtcXG4gIHdpZHRoOiBtYXAtZ2V0KCR3aW5kb3csIHdpZHRoKTtcXG4gIGhlaWdodDogbWFwLWdldCgkd2luZG93LCBoZWlnaHQpO1xcblxcbiAgbWluLXdpZHRoOiAxMDBweDtcXG5cXG4gIHotaW5kZXg6IG1hcC1nZXQoJHdpbmRvdywgei1pbmRleCk7XFxuXFxuICBoZWFkZXIge1xcbiAgICBjb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItdGV4dC1jb2xvcik7XFxuXFxuICAgIGhlaWdodDogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItaGVpZ2h0KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBzZXQgc3ZnL2ljb25zXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTRweCk7XFxuICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcblxcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjbWluaW1pemUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWluaW1pemU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI21heGltaXplIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1heGltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNjbG9zZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbG9zZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXJzKFxcbiAgICAgIDE1cHgsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKSAqIDIsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBzY3JvbGwtYmFyLWNvbG9yKSxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKVxcbiAgICApO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKTtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIGhlaWdodCkgLSBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKSBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICB9XFxufVxcblwiLFwiJGJnQ29sb3I6ICMxMDFmMzQ7XFxuXFxuJGhpZ2hsaWdodENvbG9yOiAjNjVhOWU4O1xcblxcbiR1aUNvbG9yMTogIzNjM2MzYztcXG4kdWlDb2xvcjI6IGJsYWNrO1xcblxcbiRvZmZXaGl0ZTogI2Y4ZjhmZjtcXG5cXG4kbWluaW1pemU6ICNmZmJkMmU7XFxuJG1heGltaXplOiAjMjhjOTQwO1xcbiRjbG9zZTogI2ZmNTU0ZTtcXG5cXG4kdGV4dFNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSxcXG4gIDAgMXB4IDNweCByZ2IoMCwgMCwgMCksIDAgMXB4IDNweCByZ2IoMCwgMCwgMCk7XFxuXFxuJHRoaWNrTGluZTogMnB4O1xcblwiLFwiQGltcG9ydCAnbWFwcyc7XFxuXFxuQG1peGluIHRhc2tiYXJFbnRyeUhvdmVyIHtcXG4gIC8vIFRPRE86IFBhZGRpbmcgb24gbGVmdC9yaWdodCBvZiBlYWNoIGVudHJ5IHRoYXQgaW5jcmVhc2VzIG9uIGhvdmVyXFxuICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgaG92ZXItYmctb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGZ1bGxTY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRib3JkZXItcmFkaXVzLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6ICRzaXplO1xcbiAgICBoZWlnaHQ6ICRzaXplO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGZvcmVncm91bmQtY29sb3IsIDEwJSk7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZm9yZWdyb3VuZC1jb2xvciwgMjAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ3aW5kb3dcIjogXCJXaW5kb3dfd2luZG93X18xbEg4aVwiLFxuXHRcIm1pbmltaXplXCI6IFwiV2luZG93X21pbmltaXplX18ybFY0cFwiLFxuXHRcIm1heGltaXplXCI6IFwiV2luZG93X21heGltaXplX18yUlREbVwiLFxuXHRcImNsb3NlXCI6IFwiV2luZG93X2Nsb3NlX19CeWxIT1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})