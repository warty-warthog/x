webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  z-index: 1750;\\n  border-radius: 5px;\\n  background-color: #3c3c3c;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n}\\n.Window_window__1lH8i header {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  height: 24px;\\n  color: #f8f8ff;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  right: 0;\\n  display: -moz-box;\\n  display: flex;\\n  padding: 5px;\\n  grid-gap: 5px;\\n  gap: 5px;\\n}\\n.Window_window__1lH8i header nav button {\\n  border: 0;\\n  background-color: transparent;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p {\\n  color: #ffbd2e;\\n}\\n.Window_window__1lH8i header nav button#Window_maximize__2RTDm {\\n  color: #28c940;\\n}\\n.Window_window__1lH8i header nav button#Window_close__BylHO {\\n  color: #ff554e;\\n}\\n.Window_window__1lH8i header nav button svg:hover {\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  overflow: hidden auto;\\n  height: -24px;\\n  border-radius: 0 0 5px 5px;\\n  background-color: #f8f8ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n  background-color: #c8c8c8;\\n  background-clip: padding-box;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EAEE,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,uEAAA;AAHF;AAKE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AALJ;AAOI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AARN;AAWI;EACE,kBAAA;EACA,QAAA;EAEA,iBAAA;EAAA,aAAA;EAEA,YAAA;EAEA,aAAA;EAAA,QAAA;AAZN;AAcM;EACE,SAAA;EACA,6BAAA;AAZR;AAcQ;EACE,cCjCC;ADqBX;AAeQ;EACE,cCpCC;ADuBX;AAgBQ;EACE,cCvCF;ADyBR;AAiBQ;EACE,qBAAA;AAfV;AAqBE;EAQE,qBAAA;EAEA,aAAA;EAEA,0BAAA;EAEA,yBAAA;AA7BJ;AEME;EACE,WFUE;EETF,YFSE;AAbN;AEOE;EACE,8BAAA;AFLJ;AEQE;EACE,6BAAA;EACA,mBFCE;EEAF,yBFCE;EEAF,4BAAA;AFNJ;AEQI;EACE,yBAAA;AFNN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  // position: absolute;\\n  z-index: map-get($window, z-index);\\n\\n  border-radius: 5px;\\n  background-color: map-get($window, title-bar-color);\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  header {\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($window, title-bar-height);\\n\\n    color: map-get($window, title-bar-text-color);\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      right: 0;\\n\\n      display: flex;\\n\\n      padding: 5px;\\n\\n      gap: 5px;\\n\\n      button {\\n        border: 0;\\n        background-color: transparent;\\n\\n        &#minimize {\\n          color: $minimize;\\n        }\\n\\n        &#maximize {\\n          color: $maximize;\\n        }\\n\\n        &#close {\\n          color: $close;\\n        }\\n\\n        svg:hover {\\n          transform: scale(1.1);\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    overflow: hidden auto;\\n\\n    height: map-get($window, height) - map-get($window, title-bar-height);\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n    background-color: map-get($window, bg-color);\\n  }\\n}\\n\",\"$bgColor: #101f34; // TODO: Share w/Vanta\\n\\n$highlightColor: #65a9e8;\\n\\n$uiColor1: #3c3c3c;\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: #ffbd2e;\\n$maximize: #28c940;\\n$close: #ff554e;\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLGtCQUFrQix1QkFBdUIsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsYUFBYSxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLDJDQUEyQyxjQUFjLGtDQUFrQyxHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxrRUFBa0UsbUJBQW1CLEdBQUcsK0RBQStELG1CQUFtQixHQUFHLHFEQUFxRCwwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLGtCQUFrQiwrQkFBK0IsOEJBQThCLEdBQUcsb0RBQW9ELGdCQUFnQixpQkFBaUIsR0FBRywwREFBMEQsbUNBQW1DLEdBQUcsMERBQTBELGtDQUFrQyx3QkFBd0IsOEJBQThCLGlDQUFpQyxHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyxPQUFPLHlMQUF5TCxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLHNFQUFzRSxhQUFhLDBCQUEwQix1Q0FBdUMseUJBQXlCLHdEQUF3RCw0RUFBNEUsMkRBQTJELG9CQUFvQiwwQkFBMEIsbURBQW1ELHNEQUFzRCxZQUFZLHlFQUF5RSxzQkFBc0IsNkJBQTZCLE9BQU8sYUFBYSwyQkFBMkIsaUJBQWlCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0Isd0NBQXdDLHdCQUF3Qiw2QkFBNkIsV0FBVyx3QkFBd0IsNkJBQTZCLFdBQVcscUJBQXFCLDBCQUEwQixXQUFXLHVCQUF1QixrQ0FBa0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxlQUFlLHdLQUF3Syw4QkFBOEIsOEVBQThFLGtHQUFrRyxtREFBbUQsS0FBSyxHQUFHLHVCQUF1QixvREFBb0QsdUJBQXVCLG1CQUFtQix1QkFBdUIsdUJBQXVCLHFCQUFxQixrQkFBa0IsZ01BQWdNLG9CQUFvQixvQkFBb0IsOEJBQThCLDhGQUE4RixlQUFlLGlJQUFpSSxLQUFLLEdBQUcsdUJBQXVCLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLGNBQWMsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsYUFBYSxjQUFjLEdBQUcsb0JBQW9CLG9CQUFvQixXQUFXLFlBQVksR0FBRyxpQ0FBaUMsd0JBQXdCLG9JQUFvSSxHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0Msb0NBQW9DLG9DQUFvQywwQ0FBMEMsbUNBQW1DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUMvbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICB6LWluZGV4OiAxNzUwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBncmlkLWdhcDogNXB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19taW5pbWl6ZV9fMmxWNHAge1xcbiAgY29sb3I6ICNmZmJkMmU7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfbWF4aW1pemVfXzJSVERtIHtcXG4gIGNvbG9yOiAjMjhjOTQwO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X2Nsb3NlX19CeWxITyB7XFxuICBjb2xvcjogI2ZmNTU0ZTtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHN2Zzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gIGhlaWdodDogLTI0cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmY7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvV2luZG93Lm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFFRSxhQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVFQUFBO0FBSEY7QUFLRTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7RUFFQSxZQUFBO0VBRUEsY0FBQTtBQUxKO0FBT0k7RUFFRSxlQUFBO0VBRUEsV0FBQTtFQUVBLGtCQUFBO0FBUk47QUFXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQUEsUUFBQTtBQVpOO0FBY007RUFDRSxTQUFBO0VBQ0EsNkJBQUE7QUFaUjtBQWNRO0VBQ0UsY0NqQ0M7QURxQlg7QUFlUTtFQUNFLGNDcENDO0FEdUJYO0FBZ0JRO0VBQ0UsY0N2Q0Y7QUR5QlI7QUFpQlE7RUFDRSxxQkFBQTtBQWZWO0FBcUJFO0VBUUUscUJBQUE7RUFFQSxhQUFBO0VBRUEsMEJBQUE7RUFFQSx5QkFBQTtBQTdCSjtBRU1FO0VBQ0UsV0ZVRTtFRVRGLFlGU0U7QUFiTjtBRU9FO0VBQ0UsOEJBQUE7QUZMSjtBRVFFO0VBQ0UsNkJBQUE7RUFDQSxtQkZDRTtFRUFGLHlCRkNFO0VFQUYsNEJBQUE7QUZOSjtBRVFJO0VBQ0UseUJBQUE7QUZOTlwiLFwiZmlsZVwiOlwiV2luZG93Lm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ21peGlucyc7XFxuXFxuLndpbmRvdyB7XFxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiBtYXAtZ2V0KCR3aW5kb3csIHotaW5kZXgpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8vIFRPRE86IEJldHRlciB3YXkgdG8gbWFuYWdlIHNoYWRvdyBlZmZlY3RzXFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGNvbG9yOiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci10ZXh0LWNvbG9yKTtcXG5cXG4gICAgaDEge1xcbiAgICAgIC8vIFRPRE86IEVsbGlwc2lzIHRvIG5vdCB1bmRlcmxhcCBidXR0b25zXFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBuYXYge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICAmI21pbmltaXplIHtcXG4gICAgICAgICAgY29sb3I6ICRtaW5pbWl6ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYjbWF4aW1pemUge1xcbiAgICAgICAgICBjb2xvcjogJG1heGltaXplO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiNjbG9zZSB7XFxuICAgICAgICAgIGNvbG9yOiAkY2xvc2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmc6aG92ZXIge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgQGluY2x1ZGUgc2Nyb2xsYmFycyhcXG4gICAgICAxNXB4LFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgYm9yZGVyLXJhZGl1cykgKiAyLFxcbiAgICAgIG1hcC1nZXQoJHdpbmRvdywgc2Nyb2xsLWJhci1jb2xvciksXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBiZy1jb2xvcilcXG4gICAgKTtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHdpbmRvdywgaGVpZ2h0KSAtIG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWhlaWdodCk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCBiZy1jb2xvcik7XFxuICB9XFxufVxcblwiLFwiJGJnQ29sb3I6ICMxMDFmMzQ7IC8vIFRPRE86IFNoYXJlIHcvVmFudGFcXG5cXG4kaGlnaGxpZ2h0Q29sb3I6ICM2NWE5ZTg7XFxuXFxuJHVpQ29sb3IxOiAjM2MzYzNjO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiAjZjhmOGZmO1xcblxcbiRtaW5pbWl6ZTogI2ZmYmQyZTtcXG4kbWF4aW1pemU6ICMyOGM5NDA7XFxuJGNsb3NlOiAjZmY1NTRlO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIC8vIFRPRE86IEljb24gdGV4dCBpcyBub3Qgd3JhcHBpbmcgc3RpbGxcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})