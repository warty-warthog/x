webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icon.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Icon.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icon_icon__2Pidu {\\n  color: #f8f8ff;\\n  font-size: 12px;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  width: 74px;\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n  place-content: space-evenly;\\n  place-items: center;\\n  z-index: 1500;\\n}\\n.Icon_icon__2Pidu:focus {\\n  background-color: rgba(255, 255, 255, 0.3);\\n  outline: 1px solid rgba(255, 255, 255, 0.2);\\n}\\n.Icon_icon__2Pidu:focus:hover {\\n  background-color: rgba(255, 255, 255, 0.5);\\n}\\n.Icon_icon__2Pidu:hover {\\n  background-color: rgba(0, 0, 0, 0.1);\\n  outline: 1px solid rgba(0, 0, 0, 0.3);\\n  outline-style: dotted;\\n}\\n.Icon_icon__2Pidu figure {\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  text-align: center;\\n}\\n.Icon_icon__2Pidu svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Icon.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,cAAA;EACA,eAAA;EACA,uKAAA;EAEA,WAAA;EAEA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,2BAAA;EACA,mBAAA;EAEA,aAAA;AAPF;AASE;EACE,0CAAA;EACA,2CAAA;AAPJ;AASI;EACE,0CAAA;AAPN;AAWE;EACE,oCAAA;EAIA,qCAAA;EAKA,qBAAA;AAhBJ;AAmBE;ECQA,uBAAA;EACA,mBAAA;EDNE,kBAAA;AAjBJ;AAoBE;EACE,WAAA;AAlBJ\",\"file\":\"Icon.module.scss\",\"sourcesContent\":[\"@import 'maps';\\n@import 'mixins';\\n\\n// TODO: Selected and Dragging styles\\n\\n.icon {\\n  color: map-get($icon, text-color);\\n  font-size: map-get($icon, font-size);\\n  text-shadow: map-get($icon, text-shadow);\\n\\n  width: map-get($icon, width);\\n\\n  display: flex;\\n  flex-direction: column;\\n  place-content: space-evenly;\\n  place-items: center;\\n\\n  z-index: map-get($icon, z-index);\\n\\n  &:focus {\\n    background-color: rgba(255, 255, 255, 0.3);\\n    outline: 1px solid rgba(255, 255, 255, 0.2);\\n  \\n    &:hover {\\n      background-color: rgba(255, 255, 255, 0.5);\\n    }\\n  }\\n\\n  &:hover {\\n    background-color: rgba(\\n      map-get($icon, hover-bg-color),\\n      map-get($icon, hover-bg-opacity)\\n    );\\n    outline: 1px solid\\n      rgba(\\n        map-get($icon, hover-border-color),\\n        map-get($icon, hover-border-opacity)\\n      );\\n    outline-style: dotted;\\n  }\\n\\n  figure {\\n    @include textOverflowEllipsis;\\n\\n    text-align: center;\\n  }\\n\\n  svg {\\n    width: map-get($icon, svg-width);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHover {\\n  // TODO: Padding on left/right of each entry that increases on hover\\n  transition: 0.15s;\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-bg-opacity)\\n    );\\n  }\\n}\\n\\n@mixin fullScreen {\\n  height: 100vh;\\n  width: 100vw;\\n\\n  position: fixed;\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  // TODO: Fix `overflow: hidden` cutting off text shadows\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    background-clip: padding-box;\\n    background-color: $foreground-color;\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"Icon_icon__2Pidu\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0ljb24ubW9kdWxlLnNjc3M/NTRjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixtQkFBbUIsb0JBQW9CLDRLQUE0SyxnQkFBZ0Isc0JBQXNCLGtCQUFrQiw4QkFBOEIsK0JBQStCLGdDQUFnQyxnQ0FBZ0Msd0JBQXdCLGtCQUFrQixHQUFHLDJCQUEyQiwrQ0FBK0MsZ0RBQWdELEdBQUcsaUNBQWlDLCtDQUErQyxHQUFHLDJCQUEyQix5Q0FBeUMsMENBQTBDLDBCQUEwQixHQUFHLDRCQUE0Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyxPQUFPLDJJQUEySSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsbUVBQW1FLG1CQUFtQixvREFBb0Qsc0NBQXNDLHlDQUF5Qyw2Q0FBNkMsbUNBQW1DLG9CQUFvQiwyQkFBMkIsZ0NBQWdDLHdCQUF3Qix1Q0FBdUMsZUFBZSxpREFBaUQsa0RBQWtELG1CQUFtQixtREFBbUQsT0FBTyxLQUFLLGVBQWUsb0hBQW9ILDBJQUEwSSw0QkFBNEIsS0FBSyxjQUFjLG9DQUFvQywyQkFBMkIsS0FBSyxXQUFXLHVDQUF1QyxLQUFLLEdBQUcsb0JBQW9CLDhCQUE4Qiw4RkFBOEYsZUFBZSxpSUFBaUksS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixhQUFhLGNBQWMsWUFBWSxhQUFhLEdBQUcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsZ0JBQWdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsWUFBWSxHQUFHLGlDQUFpQyx3RkFBd0Ysd0JBQXdCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxtQ0FBbUMsMENBQTBDLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQzV1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvSWNvbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5JY29uX2ljb25fXzJQaWR1IHtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggM3B4IGJsYWNrLCAwIDFweCAzcHggYmxhY2s7XFxuICB3aWR0aDogNzRweDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxNTAwO1xcbn1cXG4uSWNvbl9pY29uX18yUGlkdTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4uSWNvbl9pY29uX18yUGlkdTpmb2N1czpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5JY29uX2ljb25fXzJQaWR1OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBvdXRsaW5lLXN0eWxlOiBkb3R0ZWQ7XFxufVxcbi5JY29uX2ljb25fXzJQaWR1IGZpZ3VyZSB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5JY29uX2ljb25fXzJQaWR1IHN2ZyB7XFxuICB3aWR0aDogNDRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvSWNvbi5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVLQUFBO0VBRUEsV0FBQTtFQUVBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0FBUEY7QUFTRTtFQUNFLDBDQUFBO0VBQ0EsMkNBQUE7QUFQSjtBQVNJO0VBQ0UsMENBQUE7QUFQTjtBQVdFO0VBQ0Usb0NBQUE7RUFJQSxxQ0FBQTtFQUtBLHFCQUFBO0FBaEJKO0FBbUJFO0VDUUEsdUJBQUE7RUFDQSxtQkFBQTtFRE5FLGtCQUFBO0FBakJKO0FBb0JFO0VBQ0UsV0FBQTtBQWxCSlwiLFwiZmlsZVwiOlwiSWNvbi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdtYXBzJztcXG5AaW1wb3J0ICdtaXhpbnMnO1xcblxcbi8vIFRPRE86IFNlbGVjdGVkIGFuZCBEcmFnZ2luZyBzdHlsZXNcXG5cXG4uaWNvbiB7XFxuICBjb2xvcjogbWFwLWdldCgkaWNvbiwgdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IG1hcC1nZXQoJGljb24sIGZvbnQtc2l6ZSk7XFxuICB0ZXh0LXNoYWRvdzogbWFwLWdldCgkaWNvbiwgdGV4dC1zaGFkb3cpO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJGljb24sIHdpZHRoKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXG4gIHotaW5kZXg6IG1hcC1nZXQoJGljb24sIHotaW5kZXgpO1xcblxcbiAgJjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLWNvbG9yKSxcXG4gICAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWRcXG4gICAgICByZ2JhKFxcbiAgICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYm9yZGVyLWNvbG9yKSxcXG4gICAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1vcGFjaXR5KVxcbiAgICAgICk7XFxuICAgIG91dGxpbmUtc3R5bGU6IGRvdHRlZDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBzdmcge1xcbiAgICB3aWR0aDogbWFwLWdldCgkaWNvbiwgc3ZnLXdpZHRoKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXIge1xcbiAgLy8gVE9ETzogUGFkZGluZyBvbiBsZWZ0L3JpZ2h0IG9mIGVhY2ggZW50cnkgdGhhdCBpbmNyZWFzZXMgb24gaG92ZXJcXG4gIHRyYW5zaXRpb246IDAuMTVzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICAvLyBUT0RPOiBGaXggYG92ZXJmbG93OiBoaWRkZW5gIGN1dHRpbmcgb2ZmIHRleHQgc2hhZG93c1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImljb25cIjogXCJJY29uX2ljb25fXzJQaWR1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Icon.module.scss\n");

/***/ })

})