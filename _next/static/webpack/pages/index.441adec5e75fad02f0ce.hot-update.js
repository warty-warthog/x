webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Taskbar.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Taskbar.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Taskbar_taskbar__3GK24 {\\n  background-color: rgba(9, 9, 9, 0.6);\\n  height: 28px;\\n  width: 100%;\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 2000;\\n}\\n.Taskbar_taskbar__3GK24 ol {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  height: 28px;\\n  width: calc(100% - 90px);\\n  display: -moz-box;\\n  display: flex;\\n  list-style-type: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Taskbar.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,oCAAA;EAKA,YAAA;EACA,WAAA;EAEA,eAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;AARF;AAUE;ECSA,eAAA;EAEA,SAAA;EACA,OAAA;EDTE,YAAA;EACA,wBAAA;EAEA,iBAAA;EAAA,aAAA;EACA,qBAAA;AARJ\",\"file\":\"Taskbar.module.scss\",\"sourcesContent\":[\"@import 'maps';\\n@import 'mixins';\\n\\n.taskbar {\\n  background-color: rgba(\\n    darken(map-get($taskbar, bg-color), 20%),\\n    map-get($taskbar, bg-opacity)\\n  );\\n\\n  height: map-get($taskbar, height);\\n  width: 100%;\\n\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n\\n  z-index: map-get($taskbar, z-index);\\n\\n  ol {\\n    @include bottomLeft;\\n\\n    height: map-get($taskbar, height);\\n    width: calc(100% - #{map-get($clock, width)});\\n\\n    display: flex;\\n    list-style-type: none;\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"taskbar\": \"Taskbar_taskbar__3GK24\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1Rhc2tiYXIubW9kdWxlLnNjc3M/MmRjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0Qix5Q0FBeUMsaUJBQWlCLGdCQUFnQixvQkFBb0IsY0FBYyxZQUFZLGtCQUFrQixHQUFHLDhCQUE4QixvQkFBb0IsY0FBYyxZQUFZLGlCQUFpQiw2QkFBNkIsc0JBQXNCLGtCQUFrQiwwQkFBMEIsR0FBRyxPQUFPLDhJQUE4SSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcscUVBQXFFLG1CQUFtQixjQUFjLG1IQUFtSCx3Q0FBd0MsZ0JBQWdCLHNCQUFzQixjQUFjLFlBQVksMENBQTBDLFVBQVUsMEJBQTBCLDBDQUEwQywyQkFBMkIsdUJBQXVCLEVBQUUsc0JBQXNCLDRCQUE0QixLQUFLLEdBQUcsb0JBQW9CLDhCQUE4Qiw4RkFBOEYsZUFBZSxpSUFBaUksS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixhQUFhLGNBQWMsWUFBWSxhQUFhLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsZ0JBQWdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsWUFBWSxHQUFHLGlDQUFpQyx3RkFBd0Ysd0JBQXdCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxtQ0FBbUMsMENBQTBDLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQy9nRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvVGFza2Jhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyX3Rhc2tiYXJfXzNHSzI0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwgOSwgOSwgMC42KTtcXG4gIGhlaWdodDogMjhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbi5UYXNrYmFyX3Rhc2tiYXJfXzNHSzI0IG9sIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL1Rhc2tiYXIubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usb0NBQUE7RUFLQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLGFBQUE7QUFSRjtBQVVFO0VDU0EsZUFBQTtFQUVBLFNBQUE7RUFDQSxPQUFBO0VEVEUsWUFBQTtFQUNBLHdCQUFBO0VBRUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7QUFSSlwiLFwiZmlsZVwiOlwiVGFza2Jhci5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtYXBzJztcXG5AaW1wb3J0ICdtaXhpbnMnO1xcblxcbi50YXNrYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGRhcmtlbihtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvciksIDIwJSksXFxuICAgIG1hcC1nZXQoJHRhc2tiYXIsIGJnLW9wYWNpdHkpXFxuICApO1xcblxcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcblxcbiAgei1pbmRleDogbWFwLWdldCgkdGFza2Jhciwgei1pbmRleCk7XFxuXFxuICBvbCB7XFxuICAgIEBpbmNsdWRlIGJvdHRvbUxlZnQ7XFxuXFxuICAgIGhlaWdodDogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7bWFwLWdldCgkY2xvY2ssIHdpZHRoKX0pO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnbWFwcyc7XFxuXFxuQG1peGluIHRhc2tiYXJFbnRyeUhvdmVyIHtcXG4gIC8vIFRPRE86IFBhZGRpbmcgb24gbGVmdC9yaWdodCBvZiBlYWNoIGVudHJ5IHRoYXQgaW5jcmVhc2VzIG9uIGhvdmVyXFxuICB0cmFuc2l0aW9uOiAwLjE1cztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgaG92ZXItYmctb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuQG1peGluIGZ1bGxTY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgLy8gVE9ETzogRml4IGBvdmVyZmxvdzogaGlkZGVuYCBjdXR0aW5nIG9mZiB0ZXh0IHNoYWRvd3NcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRib3JkZXItcmFkaXVzLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6ICRzaXplO1xcbiAgICBoZWlnaHQ6ICRzaXplO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGZvcmVncm91bmQtY29sb3IsIDEwJSk7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZm9yZWdyb3VuZC1jb2xvciwgMjAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0YXNrYmFyXCI6IFwiVGFza2Jhcl90YXNrYmFyX18zR0syNFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Taskbar.module.scss\n");

/***/ })

})