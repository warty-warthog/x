webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  z-index: 1750;\\n  border-radius: 5px;\\n  background-color: #3c3c3c;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n}\\n.Window_window__1lH8i header {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  height: 24px;\\n  color: #f8f8ff;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  padding: 5px;\\n  grid-gap: 5px;\\n  gap: 5px;\\n}\\n.Window_window__1lH8i header nav button {\\n  border: 0;\\n  background-color: transparent;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i header nav button svg:hover {\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  overflow: hidden auto;\\n  height: calc(100% - 24px);\\n  border-radius: 0 0 5px 5px;\\n  background-color: #f8f8ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n  background-color: #c8c8c8;\\n  background-clip: padding-box;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,uEAAA;AAFF;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAJJ;AAMI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAPN;AAUI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAEA,YAAA;EAEA,aAAA;EAAA,QAAA;AAXN;AAaM;EACE,SAAA;EACA,6BAAA;AAXR;AAaQ;EACE,cChCC;ADqBX;AAcQ;EACE,cCnCC;ADuBX;AAeQ;EACE,cCtCF;ADyBR;AAgBQ;EACE,qBAAA;AAdV;AAoBE;EAQE,qBAAA;EAEA,yBAAA;EAEA,0BAAA;EAEA,yBAAA;AA5BJ;AEME;EACE,WFSE;EERF,YFQE;AAZN;AEOE;EACE,8BAAA;AFLJ;AEQE;EACE,6BAAA;EACA,mBAAA;EACA,yBAAA;EACA,4BAAA;AFNJ;AEQI;EACE,yBAAA;AFNN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  z-index: map-get($window, z-index);\\n\\n  border-radius: 5px;\\n  background-color: map-get($window, title-bar-color);\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  header {\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($window, title-bar-height);\\n\\n    color: map-get($window, title-bar-text-color);\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n\\n      padding: 5px;\\n\\n      gap: 5px;\\n\\n      button {\\n        border: 0;\\n        background-color: transparent;\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n\\n        svg:hover {\\n          transform: scale(1.1);\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    overflow: hidden auto;\\n\\n    height: calc(100% - #{ map-get($window, title-bar-height) });\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n    background-color: map-get($window, bg-color);\\n  }\\n}\\n\",\"$bgColor: #101f34; // TODO: Share w/Vanta\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLGtCQUFrQix1QkFBdUIsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsYUFBYSxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLDJDQUEyQyxjQUFjLGtDQUFrQyxHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsK0RBQStELG1CQUFtQixHQUFHLHFEQUFxRCwwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLDhCQUE4QiwrQkFBK0IsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGtDQUFrQyx3QkFBd0IsOEJBQThCLGlDQUFpQyxHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLHNFQUFzRSxhQUFhLHVDQUF1Qyx5QkFBeUIsd0RBQXdELDRFQUE0RSwyREFBMkQsb0JBQW9CLDBCQUEwQixtREFBbUQsc0RBQXNELFlBQVkseUVBQXlFLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixpQkFBaUIsd0JBQXdCLHVCQUF1QixtQkFBbUIsa0JBQWtCLG9CQUFvQix3Q0FBd0Msd0JBQXdCLDZCQUE2QixXQUFXLHdCQUF3Qiw2QkFBNkIsV0FBVyxxQkFBcUIsMEJBQTBCLFdBQVcsdUJBQXVCLGtDQUFrQyxXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLDhCQUE4Qiw4QkFBOEIscUNBQXFDLEVBQUUsa0dBQWtHLG1EQUFtRCxLQUFLLEdBQUcsdUJBQXVCLG9EQUFvRCx1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscUJBQXFCLGtCQUFrQixnTUFBZ00sb0JBQW9CLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0Isb0lBQW9JLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3htTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLldpbmRvd193aW5kb3dfXzFsSDhpIHtcXG4gIHotaW5kZXg6IDE3NTA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBnYXA6IDVweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21pbmltaXplX18ybFY0cCB7XFxuICBjb2xvcjogI2ZmYmQyZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG0ge1xcbiAgY29sb3I6ICMyOGM5NDA7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfY2xvc2VfX0J5bEhPIHtcXG4gIGNvbG9yOiAjZmY1NTRlO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24gc3ZnOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmZjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTU5NTk1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9XaW5kb3cubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFFQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUVBQUE7QUFGRjtBQUlFO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQUVBLFlBQUE7RUFFQSxjQUFBO0FBSko7QUFNSTtFQUVFLGVBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7QUFQTjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBRUEsaUJBQUE7RUFBQSxhQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFBQSxRQUFBO0FBWE47QUFhTTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtBQVhSO0FBYVE7RUFDRSxjQ2hDQztBRHFCWDtBQWNRO0VBQ0UsY0NuQ0M7QUR1Qlg7QUFlUTtFQUNFLGNDdENGO0FEeUJSO0FBZ0JRO0VBQ0UscUJBQUE7QUFkVjtBQW9CRTtFQVFFLHFCQUFBO0VBRUEseUJBQUE7RUFFQSwwQkFBQTtFQUVBLHlCQUFBO0FBNUJKO0FFTUU7RUFDRSxXRlNFO0VFUkYsWUZRRTtBQVpOO0FFT0U7RUFDRSw4QkFBQTtBRkxKO0FFUUU7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBRk5KO0FFUUk7RUFDRSx5QkFBQTtBRk5OXCIsXCJmaWxlXCI6XCJXaW5kb3cubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJztcXG5cXG4ud2luZG93IHtcXG4gIHotaW5kZXg6IG1hcC1nZXQoJHdpbmRvdywgei1pbmRleCk7XFxuXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLy8gVE9ETzogQmV0dGVyIHdheSB0byBtYW5hZ2Ugc2hhZG93IGVmZmVjdHNcXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItaGVpZ2h0KTtcXG5cXG4gICAgY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLXRleHQtY29sb3IpO1xcblxcbiAgICBoMSB7XFxuICAgICAgLy8gVE9ETzogRWxsaXBzaXMgdG8gbm90IHVuZGVybGFwIGJ1dHRvbnNcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuXFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG5hdiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAwO1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgcGFkZGluZzogNXB4O1xcblxcbiAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICYjbWluaW1pemUge1xcbiAgICAgICAgICBjb2xvcjogJG1pbmltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNtYXhpbWl6ZSB7XFxuICAgICAgICAgIGNvbG9yOiAkbWF4aW1pemU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmI2Nsb3NlIHtcXG4gICAgICAgICAgY29sb3I6ICRjbG9zZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHN2Zzpob3ZlciB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXJzKFxcbiAgICAgIDE1cHgsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKSAqIDIsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBzY3JvbGwtYmFyLWNvbG9yKSxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKVxcbiAgICApO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3sgbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItaGVpZ2h0KSB9KTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cylcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKTtcXG4gIH1cXG59XFxuXCIsXCIkYmdDb2xvcjogIzEwMWYzNDsgLy8gVE9ETzogU2hhcmUgdy9WYW50YVxcblxcbiRoaWdobGlnaHRDb2xvcjogIzY1YTllODtcXG5cXG4kdWlDb2xvcjE6ICMzYzNjM2M7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6ICNmOGY4ZmY7XFxuXFxuJG1pbmltaXplOiAjZmZiZDJlO1xcbiRtYXhpbWl6ZTogIzI4Yzk0MDtcXG4kY2xvc2U6ICNmZjU1NGU7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgLy8gVE9ETzogSWNvbiB0ZXh0IGlzIG5vdCB3cmFwcGluZyBzdGlsbFxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2luZG93XCI6IFwiV2luZG93X3dpbmRvd19fMWxIOGlcIixcblx0XCJtaW5pbWl6ZVwiOiBcIldpbmRvd19taW5pbWl6ZV9fMmxWNHBcIixcblx0XCJtYXhpbWl6ZVwiOiBcIldpbmRvd19tYXhpbWl6ZV9fMlJURG1cIixcblx0XCJjbG9zZVwiOiBcIldpbmRvd19jbG9zZV9fQnlsSE9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})