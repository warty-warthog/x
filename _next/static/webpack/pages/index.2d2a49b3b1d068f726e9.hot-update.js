webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Icon.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icon_icon__1MiKh {\\n  font-size: 13px;\\n  z-index: 1500;\\n  display: flex;\\n  flex-direction: column;\\n  width: 75px;\\n  min-height: 72px;\\n  margin: 0 0 12px 0;\\n  color: #f8f8ff;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  place-content: space-evenly;\\n  place-items: center;\\n}\\n.Icon_icon__1MiKh:last-child {\\n  margin-bottom: unset;\\n}\\n.Icon_icon__1MiKh:hover {\\n  outline: 1px dotted rgba(0, 0, 0, 0.35);\\n  background-color: rgba(0, 0, 0, 0.1);\\n}\\n.Icon_icon__1MiKh:focus {\\n  outline: 1px solid rgba(0, 0, 0, 0.45);\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n.Icon_icon__1MiKh:focus:hover {\\n  outline: 1px solid rgba(0, 0, 0, 0.55);\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n.Icon_icon__1MiKh figure {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  text-align: center;\\n}\\n.Icon_icon__1MiKh figure figcaption {\\n  white-space: break-spaces;\\n}\\n.Icon_icon__1MiKh svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/Icon.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAeA;EACE,eAAA;EAEA,aAAA;EAEA,aAAA;EACA,sBAAA;EAEA,WAAA;EACA,gBAAA;EACA,kBAAA;EAEA,cAAA;EACA,uKAAA;EAEA,2BAAA;EACA,mBAAA;AAnBF;AAqBE;EACE,oBAAA;AAnBJ;AAsBE;EAjCA,uCAAA;EAKA,oCAAA;AAUF;AAsBE;EArCA,sCAAA;EAKA,oCAAA;AAcF;AAqBI;EAxCF,sCAAA;EAKA,oCAAA;AAkBF;AAsBE;ECLA,mBAAA;EACA,uBAAA;EDOE,kBAAA;AApBJ;AAsBI;EACE,yBAAA;AApBN;AAwBE;EACE,WAAA;AAtBJ\",\"file\":\"Icon.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n@mixin iconContainerColors($borderStyle, $darker: 0) {\\n  outline: 1px $borderStyle\\n    rgba(\\n      map-get($icon, hover-border-color),\\n      (map-get($icon, hover-border-opacity) + $darker + 5%)\\n    );\\n  background-color: rgba(\\n    map-get($icon, hover-bg-color),\\n    (map-get($icon, hover-bg-opacity) + $darker)\\n  );\\n}\\n\\n.icon {\\n  font-size: map-get($icon, font-size);\\n\\n  z-index: map-get($icon, z-index);\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: map-get($icon, width);\\n  min-height: map-get($icon, min-height);\\n  margin: 0 0 map-get($icons, padding) 0;\\n\\n  color: map-get($icon, text-color);\\n  text-shadow: map-get($icon, text-shadow);\\n\\n  place-content: space-evenly;\\n  place-items: center;\\n\\n  &:last-child {\\n    margin-bottom: unset;\\n  }\\n\\n  &:hover {\\n    @include iconContainerColors(dotted);\\n  }\\n\\n  &:focus {\\n    @include iconContainerColors(solid, 10%);\\n\\n    &:hover {\\n      @include iconContainerColors(solid, 20%);\\n    }\\n  }\\n\\n  figure {\\n    @include textOverflowEllipsis;\\n\\n    text-align: center;\\n\\n    figcaption {\\n      white-space: break-spaces;\\n    }\\n  }\\n\\n  svg {\\n    width: map-get($icon, svg-width);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"Icon_icon__1MiKh\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9JY29uLm1vZHVsZS5zY3NzP2E0OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0Isb0JBQW9CLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdCQUFnQixxQkFBcUIsdUJBQXVCLG1CQUFtQiw0S0FBNEssZ0NBQWdDLHdCQUF3QixHQUFHLGdDQUFnQyx5QkFBeUIsR0FBRywyQkFBMkIsNENBQTRDLHlDQUF5QyxHQUFHLDJCQUEyQiwyQ0FBMkMseUNBQXlDLEdBQUcsaUNBQWlDLDJDQUEyQyx5Q0FBeUMsR0FBRyw0QkFBNEIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsR0FBRyx1Q0FBdUMsOEJBQThCLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLE9BQU8sa0pBQWtKLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsNEVBQTRFLDRCQUE0QiwwREFBMEQsd0pBQXdKLHdIQUF3SCxHQUFHLFdBQVcseUNBQXlDLHVDQUF1QyxvQkFBb0IsMkJBQTJCLG1DQUFtQywyQ0FBMkMsMkNBQTJDLHdDQUF3Qyw2Q0FBNkMsa0NBQWtDLHdCQUF3QixvQkFBb0IsMkJBQTJCLEtBQUssZUFBZSwyQ0FBMkMsS0FBSyxlQUFlLCtDQUErQyxpQkFBaUIsaURBQWlELE9BQU8sS0FBSyxjQUFjLG9DQUFvQywyQkFBMkIsb0JBQW9CLGtDQUFrQyxPQUFPLEtBQUssV0FBVyx1Q0FBdUMsS0FBSyxHQUFHLG9CQUFvQixtQ0FBbUMsY0FBYyxtQkFBbUIsK0NBQStDLDJIQUEySCxHQUFHLHVCQUF1QixvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsV0FBVyxZQUFZLEdBQUcsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG9DQUFvQyxvQ0FBb0MsMENBQTBDLG1DQUFtQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDMStIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vSWNvbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5JY29uX2ljb25fXzFNaUtoIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHotaW5kZXg6IDE1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgbWluLWhlaWdodDogNzJweDtcXG4gIG1hcmdpbjogMCAwIDEycHggMDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggM3B4IGJsYWNrLCAwIDFweCAzcHggYmxhY2s7XFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5JY29uX2ljb25fXzFNaUtoOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpmb2N1czpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLkljb25faWNvbl9fMU1pS2ggZmlndXJlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLkljb25faWNvbl9fMU1pS2ggZmlndXJlIGZpZ2NhcHRpb24ge1xcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXG59XFxuLkljb25faWNvbl9fMU1pS2ggc3ZnIHtcXG4gIHdpZHRoOiA0NHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9TeXN0ZW0vSWNvbi5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZUE7RUFDRSxlQUFBO0VBRUEsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtFQUNBLHVLQUFBO0VBRUEsMkJBQUE7RUFDQSxtQkFBQTtBQW5CRjtBQXFCRTtFQUNFLG9CQUFBO0FBbkJKO0FBc0JFO0VBakNBLHVDQUFBO0VBS0Esb0NBQUE7QUFVRjtBQXNCRTtFQXJDQSxzQ0FBQTtFQUtBLG9DQUFBO0FBY0Y7QUFxQkk7RUF4Q0Ysc0NBQUE7RUFLQSxvQ0FBQTtBQWtCRjtBQXNCRTtFQ0xBLG1CQUFBO0VBQ0EsdUJBQUE7RURPRSxrQkFBQTtBQXBCSjtBQXNCSTtFQUNFLHlCQUFBO0FBcEJOO0FBd0JFO0VBQ0UsV0FBQTtBQXRCSlwiLFwiZmlsZVwiOlwiSWNvbi5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5AaW1wb3J0ICdAL3N0eWxlcy9taXhpbnMnO1xcblxcbkBtaXhpbiBpY29uQ29udGFpbmVyQ29sb3JzKCRib3JkZXJTdHlsZSwgJGRhcmtlcjogMCkge1xcbiAgb3V0bGluZTogMXB4ICRib3JkZXJTdHlsZVxcbiAgICByZ2JhKFxcbiAgICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1jb2xvciksXFxuICAgICAgKG1hcC1nZXQoJGljb24sIGhvdmVyLWJvcmRlci1vcGFjaXR5KSArICRkYXJrZXIgKyA1JSlcXG4gICAgKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLWNvbG9yKSxcXG4gICAgKG1hcC1nZXQoJGljb24sIGhvdmVyLWJnLW9wYWNpdHkpICsgJGRhcmtlcilcXG4gICk7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkaWNvbiwgZm9udC1zaXplKTtcXG5cXG4gIHotaW5kZXg6IG1hcC1nZXQoJGljb24sIHotaW5kZXgpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICB3aWR0aDogbWFwLWdldCgkaWNvbiwgd2lkdGgpO1xcbiAgbWluLWhlaWdodDogbWFwLWdldCgkaWNvbiwgbWluLWhlaWdodCk7XFxuICBtYXJnaW46IDAgMCBtYXAtZ2V0KCRpY29ucywgcGFkZGluZykgMDtcXG5cXG4gIGNvbG9yOiBtYXAtZ2V0KCRpY29uLCB0ZXh0LWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiBtYXAtZ2V0KCRpY29uLCB0ZXh0LXNoYWRvdyk7XFxuXFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lckNvbG9ycyhkb3R0ZWQpO1xcbiAgfVxcblxcbiAgJjpmb2N1cyB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXJDb2xvcnMoc29saWQsIDEwJSk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIGljb25Db250YWluZXJDb2xvcnMoc29saWQsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiBtYXAtZ2V0KCRpY29uLCBzdmctd2lkdGgpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlclN0eWxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICApO1xcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaWNvblwiOiBcIkljb25faWNvbl9fMU1pS2hcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss\n");

/***/ })

})