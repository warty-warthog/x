webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  z-index: 1750;\\n  border-radius: 5px;\\n  background-color: #3c3c3c;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n}\\n.Window_window__1lH8i header {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  height: 24px;\\n  color: #f8f8ff;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  padding: 5px;\\n  grid-gap: 5px;\\n  gap: 5px;\\n}\\n.Window_window__1lH8i header nav button {\\n  border: 0;\\n  background-color: transparent;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i header nav button svg:hover {\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  overflow: hidden auto;\\n  height: 100%;\\n  border-radius: 0 0 5px 5px;\\n  background-color: #f8f8ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n  background-color: #c8c8c8;\\n  background-clip: padding-box;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,uEAAA;AAFF;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAJJ;AAMI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAPN;AAUI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAEA,YAAA;EAEA,aAAA;EAAA,QAAA;AAXN;AAaM;EACE,SAAA;EACA,6BAAA;AAXR;AAaQ;EACE,cChCC;ADqBX;AAcQ;EACE,cCnCC;ADuBX;AAeQ;EACE,cCtCF;ADyBR;AAgBQ;EACE,qBAAA;AAdV;AAoBE;EAQE,qBAAA;EAEA,YAAA;EAEA,0BAAA;EAEA,yBAAA;AA5BJ;AEME;EACE,WFSE;EERF,YFQE;AAZN;AEOE;EACE,8BAAA;AFLJ;AEQE;EACE,6BAAA;EACA,mBAAA;EACA,yBAAA;EACA,4BAAA;AFNJ;AEQI;EACE,yBAAA;AFNN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  z-index: map-get($window, z-index);\\n\\n  border-radius: 5px;\\n  background-color: map-get($window, title-bar-color);\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  header {\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($window, title-bar-height);\\n\\n    color: map-get($window, title-bar-text-color);\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n\\n      padding: 5px;\\n\\n      gap: 5px;\\n\\n      button {\\n        border: 0;\\n        background-color: transparent;\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n\\n        svg:hover {\\n          transform: scale(1.1);\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    overflow: hidden auto;\\n\\n    height: 100%;\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n    background-color: map-get($window, bg-color);\\n  }\\n}\\n\",\"$bgColor: #101f34; // TODO: Share w/Vanta\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLGtCQUFrQix1QkFBdUIsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsYUFBYSxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLDJDQUEyQyxjQUFjLGtDQUFrQyxHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsK0RBQStELG1CQUFtQixHQUFHLHFEQUFxRCwwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGtDQUFrQyx3QkFBd0IsOEJBQThCLGlDQUFpQyxHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLHNFQUFzRSxhQUFhLHVDQUF1Qyx5QkFBeUIsd0RBQXdELDRFQUE0RSwyREFBMkQsb0JBQW9CLDBCQUEwQixtREFBbUQsc0RBQXNELFlBQVkseUVBQXlFLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixpQkFBaUIsd0JBQXdCLHVCQUF1QixtQkFBbUIsa0JBQWtCLG9CQUFvQix3Q0FBd0Msd0JBQXdCLDZCQUE2QixXQUFXLHdCQUF3Qiw2QkFBNkIsV0FBVyxxQkFBcUIsMEJBQTBCLFdBQVcsdUJBQXVCLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLDhCQUE4QixxQkFBcUIsa0dBQWtHLG1EQUFtRCxLQUFLLEdBQUcsdUJBQXVCLG9EQUFvRCx1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0Isb0lBQW9JLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQzFpTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIHotaW5kZXg6IDE3NTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBnYXA6IDVweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21pbmltaXplX18ybFY0cCB7XFxuICBjb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgY29sb3I6ICMyOGM5NDA7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfY2xvc2VfX0J5bEhPIHtcXG4gIGNvbG9yOiAjZmY1NTRlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24gc3ZnOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1RUFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBRUEsWUFBQTtFQUVBLGNBQUE7QUFKSjtBQU1JO0VBRUUsZUFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBQVBOO0FBVUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxpQkFBQTtFQUFBLGFBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUFBLFFBQUE7QUFYTjtBQWFNO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0FBWFI7QUFhUTtFQUNFLGNDaENDO0FEcUJYO0FBY1E7RUFDRSxjQ25DQztBRHVCWDtBQWVRO0VBQ0UsY0N0Q0Y7QUR5QlI7QUFnQlE7RUFDRSxxQkFBQTtBQWRWO0FBb0JFO0VBUUUscUJBQUE7RUFFQSxZQUFBO0VBRUEsMEJBQUE7RUFFQSx5QkFBQTtBQTVCSjtBRU1FO0VBQ0UsV0ZTRTtFRVJGLFlGUUU7QUFaTjtBRU9FO0VBQ0UsOEJBQUE7QUZMSjtBRVFFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUZOSjtBRVFJO0VBQ0UseUJBQUE7QUZOTlwiLFwiZmlsZVwiOlwiV2luZG93Lm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ21peGlucyc7XFxuXFxuLndpbmRvdyB7XFxuICB6LWluZGV4OiBtYXAtZ2V0KCR3aW5kb3csIHotaW5kZXgpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8vIFRPRE86IEJldHRlciB3YXkgdG8gbWFuYWdlIHNoYWRvdyBlZmZlY3RzXFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci10ZXh0LWNvbG9yKTtcXG5cXG4gICAgaDEge1xcbiAgICAgIC8vIFRPRE86IEVsbGlwc2lzIHRvIG5vdCB1bmRlcmxhcCBidXR0b25zXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICAmI21pbmltaXplIHtcXG4gICAgICAgICAgY29sb3I6ICRtaW5pbWl6ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjbWF4aW1pemUge1xcbiAgICAgICAgICBjb2xvcjogJG1heGltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNjbG9zZSB7XFxuICAgICAgICAgIGNvbG9yOiAkY2xvc2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmc6aG92ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgQGluY2x1ZGUgc2Nyb2xsYmFycyhcXG4gICAgICAxNXB4LFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cykgKiAyLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgc2Nyb2xsLWJhci1jb2xvciksXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBiZy1jb2xvcilcXG4gICAgKTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCBiZy1jb2xvcik7XFxuICB9XFxufVxcblwiLFwiJGJnQ29sb3I6ICMxMDFmMzQ7IC8vIFRPRE86IFNoYXJlIHcvVmFudGFcXG5cXG4kaGlnaGxpZ2h0Q29sb3I6ICM2NWE5ZTg7XFxuXFxuJHVpQ29sb3IxOiAjM2MzYzNjO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogI2ZmYmQyZTtcXG4kbWF4aW1pemU6ICMyOGM5NDA7XFxuJGNsb3NlOiAjZmY1NTRlO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIC8vIFRPRE86IEljb24gdGV4dCBpcyBub3Qgd3JhcHBpbmcgc3RpbGxcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})