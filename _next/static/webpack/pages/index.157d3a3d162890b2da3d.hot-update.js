webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Icon.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icon_icon__1MiKh {\\n  font-size: 12.5px;\\n  z-index: 1500;\\n  display: flex;\\n  flex-direction: column;\\n  width: 77px;\\n  min-height: 72px;\\n  max-height: 87px;\\n  margin: 0 0 12px 0;\\n  color: #f8f8ff;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  place-content: space-evenly;\\n  place-items: center;\\n}\\n.Icon_icon__1MiKh:last-child {\\n  margin-bottom: unset;\\n}\\n.Icon_icon__1MiKh:hover {\\n  outline: 1px solid rgba(0, 0, 0, 0.1);\\n  margin: -1px 0 11px 0;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  background-color: rgba(0, 0, 0, 0.1);\\n}\\n.Icon_icon__1MiKh:focus {\\n  outline: 1px dotted rgba(0, 0, 0, 0.2);\\n  margin: -1px 0 11px 0;\\n  border: 1px dotted rgba(0, 0, 0, 0.3);\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n.Icon_icon__1MiKh:focus:hover {\\n  outline: 1px solid rgba(0, 0, 0, 0.3);\\n  margin: -1px 0 11px 0;\\n  border: 1px solid rgba(0, 0, 0, 0.4);\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n.Icon_icon__1MiKh figure {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  text-align: center;\\n  margin: 3px 0;\\n}\\n.Icon_icon__1MiKh figure figcaption {\\n  white-space: break-spaces;\\n}\\n.Icon_icon__1MiKh svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/Icon.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAqBA;EACE,iBAAA;EAEA,aAAA;EAEA,aAAA;EACA,sBAAA;EAEA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EAEA,cAAA;EACA,uKAAA;EAEA,2BAAA;EACA,mBAAA;AAzBF;AA2BE;EACE,oBAAA;AAzBJ;AA4BE;EAxCA,qCAAA;EAKA,qBAAA;EACA,oCAAA;EAKA,oCAAA;AAOF;AA0BE;EA5CA,sCAAA;EAKA,qBAAA;EACA,qCAAA;EAKA,oCAAA;AAaF;AAuBI;EA/CF,qCAAA;EAKA,qBAAA;EACA,oCAAA;EAKA,oCAAA;AAmBF;AAsBE;ECZA,mBAAA;EACA,uBAAA;EDcE,kBAAA;EACA,aAAA;AApBJ;AAsBI;EACE,yBAAA;AApBN;AAwBE;EACE,WAAA;AAtBJ\",\"file\":\"Icon.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n@mixin iconContainerColors($borderStyle, $darker: 0) {\\n  outline: 1px $borderStyle\\n    rgba(\\n      map-get($icon, hover-border-color),\\n      (map-get($icon, hover-bg-opacity) + $darker)\\n    );\\n  margin: -1px 0 (map-get($icons, padding) - 1px) 0;\\n  border: 1px $borderStyle\\n    rgba(\\n      map-get($icon, hover-border-color),\\n      (map-get($icon, hover-border-opacity) + $darker)\\n    );\\n  background-color: rgba(\\n    map-get($icon, hover-bg-color),\\n    (map-get($icon, hover-bg-opacity) + $darker)\\n  );\\n}\\n\\n.icon {\\n  font-size: map-get($icon, font-size);\\n\\n  z-index: map-get($icon, z-index);\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: map-get($icon, width);\\n  min-height: map-get($icon, min-height);\\n  max-height: map-get($icon, max-height);\\n  margin: 0 0 map-get($icons, padding) 0;\\n\\n  color: map-get($icon, text-color);\\n  text-shadow: map-get($icon, text-shadow);\\n\\n  place-content: space-evenly;\\n  place-items: center;\\n\\n  &:last-child {\\n    margin-bottom: unset;\\n  }\\n\\n  &:hover {\\n    @include iconContainerColors(solid);\\n  }\\n\\n  &:focus {\\n    @include iconContainerColors(dotted, 10%);\\n\\n    &:hover {\\n      @include iconContainerColors(solid, 20%);\\n    }\\n  }\\n\\n  figure {\\n    @include textOverflowEllipsis;\\n\\n    text-align: center;\\n    margin: 3px 0;\\n\\n    figcaption {\\n      white-space: break-spaces;\\n    }\\n  }\\n\\n  svg {\\n    width: map-get($icon, svg-width);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeftWithIconBorderBuffer {\\n  position: fixed;\\n  top: 0;\\n  left: 1px;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"Icon_icon__1MiKh\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9JY29uLm1vZHVsZS5zY3NzP2E0OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0Isc0JBQXNCLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdCQUFnQixxQkFBcUIscUJBQXFCLHVCQUF1QixtQkFBbUIsNEtBQTRLLGdDQUFnQyx3QkFBd0IsR0FBRyxnQ0FBZ0MseUJBQXlCLEdBQUcsMkJBQTJCLDBDQUEwQywwQkFBMEIseUNBQXlDLHlDQUF5QyxHQUFHLDJCQUEyQiwyQ0FBMkMsMEJBQTBCLDBDQUEwQyx5Q0FBeUMsR0FBRyxpQ0FBaUMsMENBQTBDLDBCQUEwQix5Q0FBeUMseUNBQXlDLEdBQUcsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyw4QkFBOEIsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcsT0FBTyxtSkFBbUosV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsNEVBQTRFLDRCQUE0QiwwREFBMEQsK0lBQStJLHNEQUFzRCxrSkFBa0osd0hBQXdILEdBQUcsV0FBVyx5Q0FBeUMsdUNBQXVDLG9CQUFvQiwyQkFBMkIsbUNBQW1DLDJDQUEyQywyQ0FBMkMsMkNBQTJDLHdDQUF3Qyw2Q0FBNkMsa0NBQWtDLHdCQUF3QixvQkFBb0IsMkJBQTJCLEtBQUssZUFBZSwwQ0FBMEMsS0FBSyxlQUFlLGdEQUFnRCxpQkFBaUIsaURBQWlELE9BQU8sS0FBSyxjQUFjLG9DQUFvQywyQkFBMkIsb0JBQW9CLG9CQUFvQixrQ0FBa0MsT0FBTyxLQUFLLFdBQVcsdUNBQXVDLEtBQUssR0FBRyxvQkFBb0IsbUNBQW1DLGNBQWMsbUJBQW1CLCtDQUErQywySEFBMkgsR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyx3Q0FBd0Msb0JBQW9CLFdBQVcsY0FBYyxHQUFHLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3ZrSjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL0ljb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSWNvbl9pY29uX18xTWlLaCB7XFxuICBmb250LXNpemU6IDEyLjVweDtcXG4gIHotaW5kZXg6IDE1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3N3B4O1xcbiAgbWluLWhlaWdodDogNzJweDtcXG4gIG1heC1oZWlnaHQ6IDg3cHg7XFxuICBtYXJnaW46IDAgMCAxMnB4IDA7XFxuICBjb2xvcjogI2Y4ZjhmZjtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDNweCBibGFjaywgMCAxcHggM3B4IGJsYWNrO1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLkljb25faWNvbl9fMU1pS2g6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiB1bnNldDtcXG59XFxuLkljb25faWNvbl9fMU1pS2g6aG92ZXIge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1hcmdpbjogLTFweCAwIDExcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLkljb25faWNvbl9fMU1pS2g6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBtYXJnaW46IC0xcHggMCAxMXB4IDA7XFxuICBib3JkZXI6IDFweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpmb2N1czpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbWFyZ2luOiAtMXB4IDAgMTFweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaCBmaWd1cmUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzcHggMDtcXG59XFxuLkljb25faWNvbl9fMU1pS2ggZmlndXJlIGZpZ2NhcHRpb24ge1xcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXG59XFxuLkljb25faWNvbl9fMU1pS2ggc3ZnIHtcXG4gIHdpZHRoOiA0NHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9TeXN0ZW0vSWNvbi5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBcUJBO0VBQ0UsaUJBQUE7RUFFQSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSx1S0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7QUF6QkY7QUEyQkU7RUFDRSxvQkFBQTtBQXpCSjtBQTRCRTtFQXhDQSxxQ0FBQTtFQUtBLHFCQUFBO0VBQ0Esb0NBQUE7RUFLQSxvQ0FBQTtBQU9GO0FBMEJFO0VBNUNBLHNDQUFBO0VBS0EscUJBQUE7RUFDQSxxQ0FBQTtFQUtBLG9DQUFBO0FBYUY7QUF1Qkk7RUEvQ0YscUNBQUE7RUFLQSxxQkFBQTtFQUNBLG9DQUFBO0VBS0Esb0NBQUE7QUFtQkY7QUFzQkU7RUNaQSxtQkFBQTtFQUNBLHVCQUFBO0VEY0Usa0JBQUE7RUFDQSxhQUFBO0FBcEJKO0FBc0JJO0VBQ0UseUJBQUE7QUFwQk47QUF3QkU7RUFDRSxXQUFBO0FBdEJKXCIsXCJmaWxlXCI6XCJJY29uLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL21peGlucyc7XFxuXFxuQG1peGluIGljb25Db250YWluZXJDb2xvcnMoJGJvcmRlclN0eWxlLCAkZGFya2VyOiAwKSB7XFxuICBvdXRsaW5lOiAxcHggJGJvcmRlclN0eWxlXFxuICAgIHJnYmEoXFxuICAgICAgbWFwLWdldCgkaWNvbiwgaG92ZXItYm9yZGVyLWNvbG9yKSxcXG4gICAgICAobWFwLWdldCgkaWNvbiwgaG92ZXItYmctb3BhY2l0eSkgKyAkZGFya2VyKVxcbiAgICApO1xcbiAgbWFyZ2luOiAtMXB4IDAgKG1hcC1nZXQoJGljb25zLCBwYWRkaW5nKSAtIDFweCkgMDtcXG4gIGJvcmRlcjogMXB4ICRib3JkZXJTdHlsZVxcbiAgICByZ2JhKFxcbiAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1jb2xvciksXFxuICAgICAgKG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1vcGFjaXR5KSArICRkYXJrZXIpXFxuICAgICk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1jb2xvciksXFxuICAgIChtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KSArICRkYXJrZXIpXFxuICApO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IG1hcC1nZXQoJGljb24sIGZvbnQtc2l6ZSk7XFxuXFxuICB6LWluZGV4OiBtYXAtZ2V0KCRpY29uLCB6LWluZGV4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJGljb24sIHdpZHRoKTtcXG4gIG1pbi1oZWlnaHQ6IG1hcC1nZXQoJGljb24sIG1pbi1oZWlnaHQpO1xcbiAgbWF4LWhlaWdodDogbWFwLWdldCgkaWNvbiwgbWF4LWhlaWdodCk7XFxuICBtYXJnaW46IDAgMCBtYXAtZ2V0KCRpY29ucywgcGFkZGluZykgMDtcXG5cXG4gIGNvbG9yOiBtYXAtZ2V0KCRpY29uLCB0ZXh0LWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiBtYXAtZ2V0KCRpY29uLCB0ZXh0LXNoYWRvdyk7XFxuXFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lckNvbG9ycyhzb2xpZCk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lckNvbG9ycyhkb3R0ZWQsIDEwJSk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIGljb25Db250YWluZXJDb2xvcnMoc29saWQsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogM3B4IDA7XFxuXFxuICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiBtYXAtZ2V0KCRpY29uLCBzdmctd2lkdGgpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlclN0eWxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICApO1xcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0V2l0aEljb25Cb3JkZXJCdWZmZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMXB4O1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImljb25cIjogXCJJY29uX2ljb25fXzFNaUtoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss\n");

/***/ })

})