webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Icon.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Icon_icon__1MiKh {\\n  font-size: 12.5px;\\n  z-index: 1500;\\n  display: flex;\\n  flex-direction: column;\\n  width: 77px;\\n  min-height: 72px;\\n  max-height: 87px;\\n  margin: 0 0 12px 0;\\n  color: #f8f8ff;\\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 3px black, 0 1px 3px black;\\n  place-content: space-evenly;\\n  place-items: center;\\n}\\n.Icon_icon__1MiKh:last-child {\\n  margin-bottom: unset;\\n}\\n.Icon_icon__1MiKh:hover {\\n  outline: 1px solid rgba(0, 0, 0, 0.2);\\n  outline-offset: -2px;\\n  background-color: rgba(0, 0, 0, 0.1);\\n}\\n.Icon_icon__1MiKh:focus {\\n  outline: 1px dotted rgba(0, 0, 0, 0.3);\\n  outline-offset: -2px;\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n.Icon_icon__1MiKh:focus:hover {\\n  outline: 1px solid rgba(0, 0, 0, 0.4);\\n  outline-offset: -2px;\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n.Icon_icon__1MiKh figure {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  text-align: center;\\n  margin: 3px 0;\\n}\\n.Icon_icon__1MiKh figure figcaption {\\n  white-space: break-spaces;\\n}\\n.Icon_icon__1MiKh svg {\\n  width: 44px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/Icon.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAgBA;EACE,iBAAA;EAEA,aAAA;EAEA,aAAA;EACA,sBAAA;EAEA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EAEA,cAAA;EACA,uKAAA;EAEA,2BAAA;EACA,mBAAA;AApBF;AAsBE;EACE,oBAAA;AApBJ;AAuBE;EAnCA,qCAAA;EAKA,oBAAA;EACA,oCAAA;AAWF;AAsBE;EAvCA,sCAAA;EAKA,oBAAA;EACA,oCAAA;AAgBF;AAoBI;EA1CF,qCAAA;EAKA,oBAAA;EACA,oCAAA;AAqBF;AAoBE;ECPA,mBAAA;EACA,uBAAA;EDSE,kBAAA;EACA,aAAA;AAlBJ;AAoBI;EACE,yBAAA;AAlBN;AAsBE;EACE,WAAA;AApBJ\",\"file\":\"Icon.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n@mixin iconContainerColors($borderStyle, $darker: 0) {\\n  outline: 1px $borderStyle\\n    rgba(\\n      map-get($icon, hover-border-color),\\n      (map-get($icon, hover-border-opacity) + $darker)\\n    );\\n  outline-offset: -2px;\\n  background-color: rgba(\\n    map-get($icon, hover-bg-color),\\n    (map-get($icon, hover-bg-opacity) + $darker)\\n  );\\n}\\n\\n.icon {\\n  font-size: map-get($icon, font-size);\\n\\n  z-index: map-get($icon, z-index);\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: map-get($icon, width);\\n  min-height: map-get($icon, min-height);\\n  max-height: map-get($icon, max-height);\\n  margin: 0 0 map-get($icons, padding) 0;\\n\\n  color: map-get($icon, text-color);\\n  text-shadow: map-get($icon, text-shadow);\\n\\n  place-content: space-evenly;\\n  place-items: center;\\n\\n  &:last-child {\\n    margin-bottom: unset;\\n  }\\n\\n  &:hover {\\n    @include iconContainerColors(solid);\\n  }\\n\\n  &:focus {\\n    @include iconContainerColors(dotted, 10%);\\n\\n    &:hover {\\n      @include iconContainerColors(solid, 20%);\\n    }\\n  }\\n\\n  figure {\\n    @include textOverflowEllipsis;\\n\\n    text-align: center;\\n    margin: 3px 0;\\n\\n    figcaption {\\n      white-space: break-spaces;\\n    }\\n  }\\n\\n  svg {\\n    width: map-get($icon, svg-width);\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeftWithIconBorderBuffer {\\n  position: fixed;\\n  top: 0;\\n  left: 1px;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"Icon_icon__1MiKh\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9JY29uLm1vZHVsZS5zY3NzP2E0OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0Isc0JBQXNCLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdCQUFnQixxQkFBcUIscUJBQXFCLHVCQUF1QixtQkFBbUIsNEtBQTRLLGdDQUFnQyx3QkFBd0IsR0FBRyxnQ0FBZ0MseUJBQXlCLEdBQUcsMkJBQTJCLDBDQUEwQyx5QkFBeUIseUNBQXlDLEdBQUcsMkJBQTJCLDJDQUEyQyx5QkFBeUIseUNBQXlDLEdBQUcsaUNBQWlDLDBDQUEwQyx5QkFBeUIseUNBQXlDLEdBQUcsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyw4QkFBOEIsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcsT0FBTyxtSkFBbUosV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsNEVBQTRFLDRCQUE0QiwwREFBMEQsbUpBQW1KLHlCQUF5Qix3SEFBd0gsR0FBRyxXQUFXLHlDQUF5Qyx1Q0FBdUMsb0JBQW9CLDJCQUEyQixtQ0FBbUMsMkNBQTJDLDJDQUEyQywyQ0FBMkMsd0NBQXdDLDZDQUE2QyxrQ0FBa0Msd0JBQXdCLG9CQUFvQiwyQkFBMkIsS0FBSyxlQUFlLDBDQUEwQyxLQUFLLGVBQWUsZ0RBQWdELGlCQUFpQixpREFBaUQsT0FBTyxLQUFLLGNBQWMsb0NBQW9DLDJCQUEyQixvQkFBb0Isb0JBQW9CLGtDQUFrQyxPQUFPLEtBQUssV0FBVyx1Q0FBdUMsS0FBSyxHQUFHLG9CQUFvQixtQ0FBbUMsY0FBYyxtQkFBbUIsK0NBQStDLDJIQUEySCxHQUFHLHVCQUF1QixvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxHQUFHLHdDQUF3QyxvQkFBb0IsV0FBVyxjQUFjLEdBQUcsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG9DQUFvQyxvQ0FBb0MsMENBQTBDLG1DQUFtQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDN3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vSWNvbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5JY29uX2ljb25fXzFNaUtoIHtcXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xcbiAgei1pbmRleDogMTUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDc3cHg7XFxuICBtaW4taGVpZ2h0OiA3MnB4O1xcbiAgbWF4LWhlaWdodDogODdweDtcXG4gIG1hcmdpbjogMCAwIDEycHggMDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggM3B4IGJsYWNrLCAwIDFweCAzcHggYmxhY2s7XFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xcbn1cXG4uSWNvbl9pY29uX18xTWlLaDpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5JY29uX2ljb25fXzFNaUtoOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5JY29uX2ljb25fXzFNaUtoOmZvY3VzOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLkljb25faWNvbl9fMU1pS2ggZmlndXJlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogM3B4IDA7XFxufVxcbi5JY29uX2ljb25fXzFNaUtoIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxufVxcbi5JY29uX2ljb25fXzFNaUtoIHN2ZyB7XFxuICB3aWR0aDogNDRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvU3lzdGVtL0ljb24ubW9kdWxlLnNjc3NcIixcIi9Vc2Vycy9kdXN0aW4vR2l0L3gvc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTtFQUNFLGlCQUFBO0VBRUEsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsdUtBQUE7RUFFQSwyQkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBc0JFO0VBQ0Usb0JBQUE7QUFwQko7QUF1QkU7RUFuQ0EscUNBQUE7RUFLQSxvQkFBQTtFQUNBLG9DQUFBO0FBV0Y7QUFzQkU7RUF2Q0Esc0NBQUE7RUFLQSxvQkFBQTtFQUNBLG9DQUFBO0FBZ0JGO0FBb0JJO0VBMUNGLHFDQUFBO0VBS0Esb0JBQUE7RUFDQSxvQ0FBQTtBQXFCRjtBQW9CRTtFQ1BBLG1CQUFBO0VBQ0EsdUJBQUE7RURTRSxrQkFBQTtFQUNBLGFBQUE7QUFsQko7QUFvQkk7RUFDRSx5QkFBQTtBQWxCTjtBQXNCRTtFQUNFLFdBQUE7QUFwQkpcIixcImZpbGVcIjpcIkljb24ubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5cXG5AbWl4aW4gaWNvbkNvbnRhaW5lckNvbG9ycygkYm9yZGVyU3R5bGUsICRkYXJrZXI6IDApIHtcXG4gIG91dGxpbmU6IDFweCAkYm9yZGVyU3R5bGVcXG4gICAgcmdiYShcXG4gICAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1ib3JkZXItY29sb3IpLFxcbiAgICAgIChtYXAtZ2V0KCRpY29uLCBob3Zlci1ib3JkZXItb3BhY2l0eSkgKyAkZGFya2VyKVxcbiAgICApO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICBtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1jb2xvciksXFxuICAgIChtYXAtZ2V0KCRpY29uLCBob3Zlci1iZy1vcGFjaXR5KSArICRkYXJrZXIpXFxuICApO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IG1hcC1nZXQoJGljb24sIGZvbnQtc2l6ZSk7XFxuXFxuICB6LWluZGV4OiBtYXAtZ2V0KCRpY29uLCB6LWluZGV4KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJGljb24sIHdpZHRoKTtcXG4gIG1pbi1oZWlnaHQ6IG1hcC1nZXQoJGljb24sIG1pbi1oZWlnaHQpO1xcbiAgbWF4LWhlaWdodDogbWFwLWdldCgkaWNvbiwgbWF4LWhlaWdodCk7XFxuICBtYXJnaW46IDAgMCBtYXAtZ2V0KCRpY29ucywgcGFkZGluZykgMDtcXG5cXG4gIGNvbG9yOiBtYXAtZ2V0KCRpY29uLCB0ZXh0LWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiBtYXAtZ2V0KCRpY29uLCB0ZXh0LXNoYWRvdyk7XFxuXFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lckNvbG9ycyhzb2xpZCk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lckNvbG9ycyhkb3R0ZWQsIDEwJSk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIGljb25Db250YWluZXJDb2xvcnMoc29saWQsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIEBpbmNsdWRlIHRleHRPdmVyZmxvd0VsbGlwc2lzO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogM3B4IDA7XFxuXFxuICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiBtYXAtZ2V0KCRpY29uLCBzdmctd2lkdGgpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlclN0eWxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICApO1xcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0V2l0aEljb25Cb3JkZXJCdWZmZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMXB4O1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImljb25cIjogXCJJY29uX2ljb25fXzFNaUtoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Icon.module.scss\n");

/***/ })

})