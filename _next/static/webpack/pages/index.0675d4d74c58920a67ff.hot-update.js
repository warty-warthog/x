webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icon.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Icon.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icon_icon__2Pidu {\\n  color: #f8f8ff;\\n  font-size: 12px;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  width: 74px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n  place-content: space-evenly;\\n  place-items: center;\\n  z-index: 1500;\\n}\\n.Icon_icon__2Pidu:hover {\\n  background-color: rgba(0, 0, 0, 0.1);\\n  outline: 1px dotted rgba(0, 0, 0, 0.3);\\n}\\n.Icon_icon__2Pidu:focus {\\n  background-color: rgba(0, 0, 0, 0.2);\\n  outline: 1px solid rgba(0, 0, 0, 0.45);\\n}\\n.Icon_icon__2Pidu:focus:hover {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  outline: 1px solid rgba(0, 0, 0, 0.55);\\n}\\n.Icon_icon__2Pidu figure {\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  text-align: center;\\n}\\n.Icon_icon__2Pidu svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Icon.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,cAAA;EACA,eAAA;EACA,uKAAA;EAEA,WAAA;EAEA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,2BAAA;EACA,mBAAA;EAEA,aAAA;AALF;AAOE;EACE,oCAAA;EAIA,sCAAA;AARJ;AAeE;EACE,oCAAA;EAIA,sCAAA;AAhBJ;AAsBI;EACE,oCAAA;EAIA,sCAAA;AAvBN;AA+BE;ECJA,uBAAA;EACA,mBAAA;EDME,kBAAA;AA7BJ;AAgCE;EACE,WAAA;AA9BJ\",\"file\":\"Icon.module.scss\",\"sourcesContent\":[\"@import 'maps';\\n@import 'mixins';\\n\\n.icon {\\n  color: map-get($icon, text-color);\\n  font-size: map-get($icon, font-size);\\n  text-shadow: map-get($icon, text-shadow);\\n\\n  width: map-get($icon, width);\\n\\n  display: flex;\\n  flex-direction: column;\\n  place-content: space-evenly;\\n  place-items: center;\\n\\n  z-index: map-get($icon, z-index);\\n\\n  &:hover {\\n    background-color: rgba(\\n      map-get($icon, hover-bg-color),\\n      map-get($icon, hover-bg-opacity)\\n    );\\n    outline: 1px dotted\\n      rgba(\\n        map-get($icon, hover-border-color),\\n        map-get($icon, hover-border-opacity)\\n      );\\n  }\\n\\n  &:focus {\\n    background-color: rgba(\\n      map-get($icon, hover-bg-color),\\n      (map-get($icon, hover-bg-opacity) + 10%)\\n    );\\n    outline: 1px solid\\n      rgba(\\n        map-get($icon, hover-border-color),\\n        (map-get($icon, hover-border-opacity) + 15%)\\n      );\\n\\n    &:hover {\\n      background-color: rgba(\\n        map-get($icon, hover-bg-color),\\n        (map-get($icon, hover-bg-opacity) + 20%)\\n      );\\n      outline: 1px solid\\n        rgba(\\n          map-get($icon, hover-border-color),\\n          (map-get($icon, hover-border-opacity) + 25%)\\n        );\\n    }\\n  }\\n\\n  figure {\\n    @include textOverflowEllipsis;\\n\\n    text-align: center;\\n  }\\n\\n  svg {\\n    width: map-get($icon, svg-width);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"Icon_icon__2Pidu\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0ljb24ubW9kdWxlLnNjc3M/NTRjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixtQkFBbUIsb0JBQW9CLDRLQUE0SyxnQkFBZ0Isc0JBQXNCLGtCQUFrQiw4QkFBOEIsK0JBQStCLGdDQUFnQyxnQ0FBZ0Msd0JBQXdCLGtCQUFrQixHQUFHLDJCQUEyQix5Q0FBeUMsMkNBQTJDLEdBQUcsMkJBQTJCLHlDQUF5QywyQ0FBMkMsR0FBRyxpQ0FBaUMseUNBQXlDLDJDQUEyQyxHQUFHLDRCQUE0Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyxPQUFPLDJJQUEySSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsbUVBQW1FLG1CQUFtQixXQUFXLHNDQUFzQyx5Q0FBeUMsNkNBQTZDLG1DQUFtQyxvQkFBb0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsdUNBQXVDLGVBQWUsb0hBQW9ILDJJQUEySSxLQUFLLGVBQWUsNEhBQTRILGtKQUFrSixpQkFBaUIsb0lBQW9JLDRKQUE0SixPQUFPLEtBQUssY0FBYyxvQ0FBb0MsMkJBQTJCLEtBQUssV0FBVyx1Q0FBdUMsS0FBSyxHQUFHLG9CQUFvQiw4QkFBOEIsOEZBQThGLGVBQWUsaUlBQWlJLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsYUFBYSxjQUFjLFlBQVksYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixhQUFhLFlBQVksR0FBRyxpQ0FBaUMsd0ZBQXdGLHdCQUF3QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0MsbUNBQW1DLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUNqa0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL0ljb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSWNvbl9pY29uX18yUGlkdSB7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDNweCBibGFjaywgMCAxcHggM3B4IGJsYWNrO1xcbiAgd2lkdGg6IDc0cHg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTUwMDtcXG59XFxuLkljb25faWNvbl9fMlBpZHU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5JY29uX2ljb25fXzJQaWR1OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uSWNvbl9pY29uX18yUGlkdTpmb2N1czpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG59XFxuLkljb25faWNvbl9fMlBpZHUgZmlndXJlIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLkljb25faWNvbl9fMlBpZHUgc3ZnIHtcXG4gIHdpZHRoOiA0NHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9JY29uLm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUtBQUE7RUFFQSxXQUFBO0VBRUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7QUFMRjtBQU9FO0VBQ0Usb0NBQUE7RUFJQSxzQ0FBQTtBQVJKO0FBZUU7RUFDRSxvQ0FBQTtFQUlBLHNDQUFBO0FBaEJKO0FBc0JJO0VBQ0Usb0NBQUE7RUFJQSxzQ0FBQTtBQXZCTjtBQStCRTtFQ0pBLHVCQUFBO0VBQ0EsbUJBQUE7RURNRSxrQkFBQTtBQTdCSjtBQWdDRTtFQUNFLFdBQUE7QUE5QkpcIixcImZpbGVcIjpcIkljb24ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWFwcyc7XFxuQGltcG9ydCAnbWl4aW5zJztcXG5cXG4uaWNvbiB7XFxuICBjb2xvcjogbWFwLWdldCgkaWNvbiwgdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IG1hcC1nZXQoJGljb24sIGZvbnQtc2l6ZSk7XFxuICB0ZXh0LXNoYWRvdzogbWFwLWdldCgkaWNvbiwgdGV4dC1zaGFkb3cpO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJGljb24sIHdpZHRoKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXG4gIHotaW5kZXg6IG1hcC1nZXQoJGljb24sIHotaW5kZXgpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYmctY29sb3IpLFxcbiAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLW9wYWNpdHkpXFxuICAgICk7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWRcXG4gICAgICByZ2JhKFxcbiAgICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYm9yZGVyLWNvbG9yKSxcXG4gICAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1vcGFjaXR5KVxcbiAgICAgICk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1jb2xvciksXFxuICAgICAgKG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLW9wYWNpdHkpICsgMTAlKVxcbiAgICApO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWRcXG4gICAgICByZ2JhKFxcbiAgICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYm9yZGVyLWNvbG9yKSxcXG4gICAgICAgIChtYXAtZ2V0KCRpY29uLCBob3Zlci1ib3JkZXItb3BhY2l0eSkgKyAxNSUpXFxuICAgICAgKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLWNvbG9yKSxcXG4gICAgICAgIChtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KSArIDIwJSlcXG4gICAgICApO1xcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZFxcbiAgICAgICAgcmdiYShcXG4gICAgICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYm9yZGVyLWNvbG9yKSxcXG4gICAgICAgICAgKG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1vcGFjaXR5KSArIDI1JSlcXG4gICAgICAgICk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBzdmcge1xcbiAgICB3aWR0aDogbWFwLWdldCgkaWNvbiwgc3ZnLXdpZHRoKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImljb25cIjogXCJJY29uX2ljb25fXzJQaWR1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icon.module.scss\n");

/***/ })

})