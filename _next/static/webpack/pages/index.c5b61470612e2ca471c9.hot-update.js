webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icons.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Icons.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icons_icons__3qOqA {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: calc(100% - 28px);\\n  padding: 12px 0;\\n}\\n.Icons_icons__3qOqA ol {\\n  display: grid;\\n  height: 100%;\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  grid-template-rows: repeat(auto-fit, 74px);\\n  grid-auto-flow: column;\\n  grid-row-gap: 12px;\\n  row-gap: 12px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Icons.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;ECmCE,eAAA;EACA,MAAA;EACA,OAAA;EDlCA,WAAA;EACA,yBAAA;EACA,eAAA;AADF;AAGE;EACE,aAAA;EAEA,YAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EAEA,0CAAA;EACA,sBAAA;EACA,kBAAA;EAAA,aAAA;AAHJ\",\"file\":\"Icons.module.scss\",\"sourcesContent\":[\"@import 'maps';\\n@import 'mixins';\\n\\n.icons {\\n  @include topLeft;\\n\\n  width: 100%;\\n  height: calc(100% - #{map-get($taskbar, height)});\\n  padding: map-get($icons, padding) 0;\\n\\n  ol {\\n    display: grid;\\n\\n    height: 100%;\\n    width: fit-content;\\n\\n    grid-template-rows: repeat(auto-fit, map-get($icon, width));\\n    grid-auto-flow: column;\\n    row-gap: map-get($icons, padding);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  // TODO: Icon text is not wrapping still\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icons\": \"Icons_icons__3qOqA\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0ljb25zLm1vZHVsZS5zY3NzPzY3MjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyx3QkFBd0Isb0JBQW9CLFdBQVcsWUFBWSxnQkFBZ0IsOEJBQThCLG9CQUFvQixHQUFHLDBCQUEwQixrQkFBa0IsaUJBQWlCLCtCQUErQiw0QkFBNEIsdUJBQXVCLCtDQUErQywyQkFBMkIsdUJBQXVCLGtCQUFrQixHQUFHLE9BQU8sNElBQTRJLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxtRUFBbUUsbUJBQW1CLFlBQVkscUJBQXFCLGtCQUFrQiwwQkFBMEIsMEJBQTBCLEVBQUUsd0NBQXdDLFVBQVUsb0JBQW9CLHFCQUFxQix5QkFBeUIsb0VBQW9FLDZCQUE2Qix3Q0FBd0MsS0FBSyxHQUFHLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0Isb0lBQW9JLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3gvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvSWNvbnMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSWNvbnNfaWNvbnNfXzNxT3FBIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjhweCk7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxufVxcbi5JY29uc19pY29uc19fM3FPcUEgb2wge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNzRweCk7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxMnB4O1xcbiAgcm93LWdhcDogMTJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvSWNvbnMubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VDbUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFRGxDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBRUEsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQUhKXCIsXCJmaWxlXCI6XCJJY29ucy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtYXBzJztcXG5AaW1wb3J0ICdtaXhpbnMnO1xcblxcbi5pY29ucyB7XFxuICBAaW5jbHVkZSB0b3BMZWZ0O1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7bWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KX0pO1xcbiAgcGFkZGluZzogbWFwLWdldCgkaWNvbnMsIHBhZGRpbmcpIDA7XFxuXFxuICBvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWFwLWdldCgkaWNvbiwgd2lkdGgpKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcm93LWdhcDogbWFwLWdldCgkaWNvbnMsIHBhZGRpbmcpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlciB7XFxuICAvLyBUT0RPOiBQYWRkaW5nIG9uIGxlZnQvcmlnaHQgb2YgZWFjaCBlbnRyeSB0aGF0IGluY3JlYXNlcyBvbiBob3ZlclxcbiAgdHJhbnNpdGlvbjogMC4xNXM7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblxcbkBtaXhpbiBmdWxsU2NyZWVuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgLy8gVE9ETzogSWNvbiB0ZXh0IGlzIG5vdCB3cmFwcGluZyBzdGlsbFxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaWNvbnNcIjogXCJJY29uc19pY29uc19fM3FPcUFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icons.module.scss\n");

/***/ })

})