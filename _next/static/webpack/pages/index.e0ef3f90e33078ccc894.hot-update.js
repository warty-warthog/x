webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Window.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Window_window__1lH8i {\\n  z-index: 1750;\\n  border-radius: 5px;\\n  background-color: #3c3c3c;\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3);\\n}\\n.Window_window__1lH8i header {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  height: 24px;\\n  color: #f8f8ff;\\n}\\n.Window_window__1lH8i header h1 {\\n  font-size: 12px;\\n  width: 100%;\\n  text-align: center;\\n}\\n.Window_window__1lH8i header nav {\\n  position: absolute;\\n  left: 0;\\n  display: -moz-box;\\n  display: flex;\\n  padding: 5px;\\n  grid-gap: 5px;\\n  gap: 5px;\\n}\\n.Window_window__1lH8i header nav button {\\n  border: 0;\\n  border-radius: 100%;\\n  height: -webkit-fit-content;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  display: -moz-box;\\n  display: flex;\\n  transition: 0.3s;\\n  -moz-box-align: center;\\n       align-items: center;\\n  -moz-box-pack: center;\\n       justify-content: center;\\n  background-color: #7c7c7c;\\n  color: #7c7c7c;\\n}\\n.Window_window__1lH8i header nav button#Window_minimize__2lV4p:hover, .Window_window__1lH8i header nav button#Window_maximize__2RTDm:hover, .Window_window__1lH8i header nav button#Window_close__BylHO:hover {\\n  background-color: unset;\\n  transform: scale(1.1);\\n}\\n.Window_window__1lH8i article {\\n  overflow: hidden auto;\\n  height: calc(100% - 24px);\\n  border-radius: 0 0 5px 5px;\\n  background-color: #f8f8ff;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar {\\n  width: 15px;\\n  height: 15px;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-track {\\n  border-left: 1px solid #e2e2e2;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb {\\n  border: 4px solid transparent;\\n  border-radius: 10px;\\n  background-color: #c8c8c8;\\n  background-clip: padding-box;\\n}\\n.Window_window__1lH8i article::-webkit-scrollbar-thumb:hover {\\n  background-color: #959595;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Window.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EAEA,kBAAA;EACA,yBAAA;EACA,uEAAA;AAFF;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAJJ;AAMI;EAEE,eAAA;EAEA,WAAA;EAEA,kBAAA;AAPN;AAUI;EACE,kBAAA;EACA,OAAA;EAEA,iBAAA;EAAA,aAAA;EAEA,YAAA;EAEA,aAAA;EAAA,QAAA;AAXN;AAaM;EACE,SAAA;EAGA,mBAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,iBAAA;EAAA,aAAA;EACA,gBAAA;EACA,sBAAA;OAAA,mBAAA;EACA,qBAAA;OAAA,uBAAA;EAEA,yBAAA;EACA,cAAA;AAdR;AAgCU;EACE,uBAAA;EACA,qBAAA;AA9BZ;AAqCE;EAQE,qBAAA;EAEA,yBAAA;EAEA,0BAAA;EAEA,yBAAA;AA7CJ;ACOE;EACE,WDyBE;ECxBF,YDwBE;AA7BN;ACQE;EACE,8BAAA;ADNJ;ACSE;EACE,6BAAA;EACA,mBDgBE;ECfF,yBDgBE;ECfF,4BAAA;ADPJ;ACSI;EACE,yBAAA;ADPN\",\"file\":\"Window.module.scss\",\"sourcesContent\":[\"@import 'mixins';\\n\\n.window {\\n  z-index: map-get($window, z-index);\\n\\n  border-radius: 5px;\\n  background-color: map-get($window, title-bar-color);\\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 5px 50px rgba(0, 0, 0, 0.3); // TODO: Better way to manage shadow effects\\n\\n  header {\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($window, title-bar-height);\\n\\n    color: map-get($window, title-bar-text-color);\\n\\n    h1 {\\n      // TODO: Ellipsis to not underlap buttons\\n      font-size: 12px;\\n\\n      width: 100%;\\n\\n      text-align: center;\\n    }\\n\\n    nav {\\n      position: absolute;\\n      left: 0;\\n\\n      display: flex;\\n\\n      padding: 5px;\\n\\n      gap: 5px;\\n\\n      button {\\n        border: 0;\\n        //background-color: transparent;\\n\\n        border-radius: 100%;\\n        height: fit-content;\\n        display: flex;\\n        transition: 0.3s;\\n        align-items: center;\\n        justify-content: center;\\n\\n        background-color: lighten(map-get($window, title-bar-color), 25%);\\n        color: lighten(map-get($window, title-bar-color), 25%);\\n\\n        // &#minimize {\\n        //   background-color: $minimize;\\n        //   color: $minimize;\\n        // }\\n\\n        // &#maximize {\\n        //   background-color: $maximize;\\n        //   color: $maximize;\\n        // }\\n\\n        // &#close {\\n        //   background-color: $close;\\n        //   color: $close;\\n        // }\\n\\n        &#minimize, &#maximize, &#close {\\n          &:hover {\\n            background-color: unset;\\n            transform: scale(1.1);\\n          }\\n        }\\n      }\\n    }\\n  }\\n\\n  article {\\n    @include scrollbars(\\n      15px,\\n      map-get($window, border-radius) * 2,\\n      map-get($window, scroll-bar-color),\\n      map-get($window, bg-color)\\n    );\\n\\n    overflow: hidden auto;\\n\\n    height: calc(100% - #{map-get($window, title-bar-height)});\\n\\n    border-radius: 0 0 map-get($window, border-radius)\\n      map-get($window, border-radius);\\n    background-color: map-get($window, bg-color);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s; // TODO: Var?\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"window\": \"Window_window__1lH8i\",\n\t\"minimize\": \"Window_minimize__2lV4p\",\n\t\"maximize\": \"Window_maximize__2RTDm\",\n\t\"close\": \"Window_close__BylHO\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcz9jY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLGtCQUFrQix1QkFBdUIsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLG9DQUFvQyx1QkFBdUIsWUFBWSxzQkFBc0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsYUFBYSxHQUFHLDJDQUEyQyxjQUFjLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLHdCQUF3QixzQkFBc0Isa0JBQWtCLHFCQUFxQiwyQkFBMkIsNkJBQTZCLDBCQUEwQixpQ0FBaUMsOEJBQThCLG1CQUFtQixHQUFHLGlOQUFpTiw0QkFBNEIsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQiw4QkFBOEIsK0JBQStCLDhCQUE4QixHQUFHLG9EQUFvRCxnQkFBZ0IsaUJBQWlCLEdBQUcsMERBQTBELG1DQUFtQyxHQUFHLDBEQUEwRCxrQ0FBa0Msd0JBQXdCLDhCQUE4QixpQ0FBaUMsR0FBRyxnRUFBZ0UsOEJBQThCLEdBQUcsT0FBTyw2SUFBNkksVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLHNFQUFzRSxhQUFhLHVDQUF1Qyx5QkFBeUIsd0RBQXdELDRFQUE0RSwyREFBMkQsb0JBQW9CLDBCQUEwQixtREFBbUQsc0RBQXNELFlBQVkseUVBQXlFLHNCQUFzQiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixnQkFBZ0Isd0JBQXdCLHVCQUF1QixtQkFBbUIsa0JBQWtCLG9CQUFvQiwwQ0FBMEMsZ0NBQWdDLDhCQUE4Qix3QkFBd0IsMkJBQTJCLDhCQUE4QixrQ0FBa0MsOEVBQThFLGlFQUFpRSwyQkFBMkIsMkNBQTJDLGdDQUFnQyxjQUFjLDJCQUEyQiwyQ0FBMkMsZ0NBQWdDLGNBQWMsd0JBQXdCLHdDQUF3Qyw2QkFBNkIsY0FBYyw2Q0FBNkMscUJBQXFCLHNDQUFzQyxvQ0FBb0MsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLGVBQWUsd0tBQXdLLDhCQUE4Qiw4QkFBOEIsbUNBQW1DLEVBQUUsa0dBQWtHLG1EQUFtRCxLQUFLLEdBQUcsb0JBQW9CLDhCQUE4Qiw4RkFBOEYsNkJBQTZCLGlJQUFpSSxLQUFLLEdBQUcsdUJBQXVCLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLGNBQWMsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsYUFBYSxjQUFjLEdBQUcsb0JBQW9CLG9CQUFvQixXQUFXLFlBQVksR0FBRyxpQ0FBaUMsd0JBQXdCLG9JQUFvSSxHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0Msb0NBQW9DLG9DQUFvQywwQ0FBMEMsbUNBQW1DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUNwaE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5XaW5kb3dfd2luZG93X18xbEg4aSB7XFxuICB6LWluZGV4OiAxNzUwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdyaWQtZ2FwOiA1cHg7XFxuICBnYXA6IDVweDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2M3YztcXG4gIGNvbG9yOiAjN2M3YzdjO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgaGVhZGVyIG5hdiBidXR0b24jV2luZG93X21pbmltaXplX18ybFY0cDpob3ZlciwgLldpbmRvd193aW5kb3dfXzFsSDhpIGhlYWRlciBuYXYgYnV0dG9uI1dpbmRvd19tYXhpbWl6ZV9fMlJURG06aG92ZXIsIC5XaW5kb3dfd2luZG93X18xbEg4aSBoZWFkZXIgbmF2IGJ1dHRvbiNXaW5kb3dfY2xvc2VfX0J5bEhPOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI0cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uV2luZG93X3dpbmRvd19fMWxIOGkgYXJ0aWNsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTI7XFxufVxcbi5XaW5kb3dfd2luZG93X18xbEg4aSBhcnRpY2xlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuLldpbmRvd193aW5kb3dfXzFsSDhpIGFydGljbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVFQUFBO0FBRkY7QUFJRTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7RUFFQSxZQUFBO0VBRUEsY0FBQTtBQUpKO0FBTUk7RUFFRSxlQUFBO0VBRUEsV0FBQTtFQUVBLGtCQUFBO0FBUE47QUFVSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQUEsUUFBQTtBQVhOO0FBYU07RUFDRSxTQUFBO0VBR0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7RUFDQSxxQkFBQTtPQUFBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0FBZFI7QUFnQ1U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FBOUJaO0FBcUNFO0VBUUUscUJBQUE7RUFFQSx5QkFBQTtFQUVBLDBCQUFBO0VBRUEseUJBQUE7QUE3Q0o7QUNPRTtFQUNFLFdEeUJFO0VDeEJGLFlEd0JFO0FBN0JOO0FDUUU7RUFDRSw4QkFBQTtBRE5KO0FDU0U7RUFDRSw2QkFBQTtFQUNBLG1CRGdCRTtFQ2ZGLHlCRGdCRTtFQ2ZGLDRCQUFBO0FEUEo7QUNTSTtFQUNFLHlCQUFBO0FEUE5cIixcImZpbGVcIjpcIldpbmRvdy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtaXhpbnMnO1xcblxcbi53aW5kb3cge1xcbiAgei1pbmRleDogbWFwLWdldCgkd2luZG93LCB6LWluZGV4KTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBUT0RPOiBCZXR0ZXIgd2F5IHRvIG1hbmFnZSBzaGFkb3cgZWZmZWN0c1xcblxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpO1xcblxcbiAgICBjb2xvcjogbWFwLWdldCgkd2luZG93LCB0aXRsZS1iYXItdGV4dC1jb2xvcik7XFxuXFxuICAgIGgxIHtcXG4gICAgICAvLyBUT0RPOiBFbGxpcHNpcyB0byBub3QgdW5kZXJsYXAgYnV0dG9uc1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICBnYXA6IDVweDtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKSwgMjUlKTtcXG4gICAgICAgIGNvbG9yOiBsaWdodGVuKG1hcC1nZXQoJHdpbmRvdywgdGl0bGUtYmFyLWNvbG9yKSwgMjUlKTtcXG5cXG4gICAgICAgIC8vICYjbWluaW1pemUge1xcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWluaW1pemU7XFxuICAgICAgICAvLyAgIGNvbG9yOiAkbWluaW1pemU7XFxuICAgICAgICAvLyB9XFxuXFxuICAgICAgICAvLyAmI21heGltaXplIHtcXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJG1heGltaXplO1xcbiAgICAgICAgLy8gICBjb2xvcjogJG1heGltaXplO1xcbiAgICAgICAgLy8gfVxcblxcbiAgICAgICAgLy8gJiNjbG9zZSB7XFxuICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRjbG9zZTtcXG4gICAgICAgIC8vICAgY29sb3I6ICRjbG9zZTtcXG4gICAgICAgIC8vIH1cXG5cXG4gICAgICAgICYjbWluaW1pemUsICYjbWF4aW1pemUsICYjY2xvc2Uge1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXJzKFxcbiAgICAgIDE1cHgsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKSAqIDIsXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBzY3JvbGwtYmFyLWNvbG9yKSxcXG4gICAgICBtYXAtZ2V0KCR3aW5kb3csIGJnLWNvbG9yKVxcbiAgICApO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3ttYXAtZ2V0KCR3aW5kb3csIHRpdGxlLWJhci1oZWlnaHQpfSk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBtYXAtZ2V0KCR3aW5kb3csIGJvcmRlci1yYWRpdXMpXFxuICAgICAgbWFwLWdldCgkd2luZG93LCBib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkd2luZG93LCBiZy1jb2xvcik7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnbWFwcyc7XFxuXFxuQG1peGluIHRhc2tiYXJFbnRyeUhvdmVyIHtcXG4gIC8vIFRPRE86IFBhZGRpbmcgb24gbGVmdC9yaWdodCBvZiBlYWNoIGVudHJ5IHRoYXQgaW5jcmVhc2VzIG9uIGhvdmVyXFxuICB0cmFuc2l0aW9uOiAwLjE1czsgLy8gVE9ETzogVmFyP1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIC8vIFRPRE86IEljb24gdGV4dCBpcyBub3Qgd3JhcHBpbmcgc3RpbGxcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndpbmRvd1wiOiBcIldpbmRvd193aW5kb3dfXzFsSDhpXCIsXG5cdFwibWluaW1pemVcIjogXCJXaW5kb3dfbWluaW1pemVfXzJsVjRwXCIsXG5cdFwibWF4aW1pemVcIjogXCJXaW5kb3dfbWF4aW1pemVfXzJSVERtXCIsXG5cdFwiY2xvc2VcIjogXCJXaW5kb3dfY2xvc2VfX0J5bEhPXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Window.module.scss\n");

/***/ })

})