webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Clock.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Clock.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Clock_clock__1JkIq {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n  font-size: 12.5px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 90px;\\n  height: 30px;\\n  color: rgba(248, 248, 255, 0.8);\\n  letter-spacing: 0.1px;\\n}\\n.Clock_clock__1JkIq:hover {\\n  margin: 0;\\n  padding: 0 4px;\\n  transition: background-color 0.1s linear;\\n  background-color: rgba(255, 255, 255, 0.1);\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/Clock.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;EC6BE,eAAA;EACA,QAAA;EACA,SAAA;ED5BA,iBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,+BAAA;EACA,qBAAA;AAJF;AAKE;ECdA,SAAA;EACA,cAAA;EAEA,wCAAA;EAEA,0CAAA;ADUF\",\"file\":\"Clock.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n.clock {\\n  @include bottomRight;\\n\\n  font-size: map-get($clock, font-size);\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($clock, width);\\n  height: map-get($taskbar, height);\\n\\n  color: rgba(map-get($clock, text-color), map-get($clock, text-opacity));\\n  letter-spacing: 0.1px;\\n  &:hover {\\n    @include taskbarEntryHoverStyle;\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"clock\": \"Clock_clock__1JkIq\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9DbG9jay5tb2R1bGUuc2Nzcz8zNWZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsc0JBQXNCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsb0NBQW9DLDBCQUEwQixHQUFHLDZCQUE2QixjQUFjLG1CQUFtQiw2Q0FBNkMsK0NBQStDLEdBQUcsT0FBTyxtSkFBbUosV0FBVyxVQUFVLFVBQVUsWUFBWSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLDRFQUE0RSw0QkFBNEIsWUFBWSx5QkFBeUIsNENBQTRDLG9CQUFvQix3QkFBd0IsNEJBQTRCLG9DQUFvQyxzQ0FBc0MsOEVBQThFLDBCQUEwQixhQUFhLHNDQUFzQyxLQUFLLEdBQUcsb0JBQW9CLG1DQUFtQyxjQUFjLG1CQUFtQiwrQ0FBK0MsMkhBQTJILEdBQUcsdUJBQXVCLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLGNBQWMsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsYUFBYSxjQUFjLEdBQUcsb0JBQW9CLG9CQUFvQixXQUFXLFlBQVksR0FBRyxpQ0FBaUMsd0JBQXdCLDRCQUE0QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0Msb0NBQW9DLG9DQUFvQywwQ0FBMEMsbUNBQW1DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUNuN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9DbG9jay5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5DbG9ja19jbG9ja19fMUprSXEge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBmb250LXNpemU6IDEyLjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGNvbG9yOiByZ2JhKDI0OCwgMjQ4LCAyNTUsIDAuOCk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XFxufVxcbi5DbG9ja19jbG9ja19fMUprSXE6aG92ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9TeXN0ZW0vQ2xvY2subW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VDNkJFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFRDVCQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtFQUNBLHFCQUFBO0FBSkY7QUFLRTtFQ2RBLFNBQUE7RUFDQSxjQUFBO0VBRUEsd0NBQUE7RUFFQSwwQ0FBQTtBRFVGXCIsXCJmaWxlXCI6XCJDbG9jay5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5AaW1wb3J0ICdAL3N0eWxlcy9taXhpbnMnO1xcblxcbi5jbG9jayB7XFxuICBAaW5jbHVkZSBib3R0b21SaWdodDtcXG5cXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkY2xvY2ssIGZvbnQtc2l6ZSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJGNsb2NrLCB3aWR0aCk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICBjb2xvcjogcmdiYShtYXAtZ2V0KCRjbG9jaywgdGV4dC1jb2xvciksIG1hcC1nZXQoJGNsb2NrLCB0ZXh0LW9wYWNpdHkpKTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcXG4gICY6aG92ZXIge1xcbiAgICBAaW5jbHVkZSB0YXNrYmFyRW50cnlIb3ZlclN0eWxlO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlclN0eWxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICApO1xcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2xvY2tcIjogXCJDbG9ja19jbG9ja19fMUprSXFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Clock.module.scss\n");

/***/ })

})