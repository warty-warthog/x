webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/TaskbarEntry.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/TaskbarEntry.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".TaskbarEntry_taskbarEntry__3eSin {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  min-width: 67.5px;\\n  height: 30px;\\n  margin: 0 4px;\\n  border-bottom: 2px solid #71c0ff;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin:hover {\\n  margin: 0;\\n  padding: 0 4px;\\n  transition: background-color 0.1s linear;\\n  background-color: rgba(255, 255, 255, 0.1);\\n  margin: 0;\\n  padding: 0 4px;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure {\\n  font-size: 12px;\\n  display: flex;\\n  align-items: center;\\n  height: 28px;\\n  color: #f8f8ff;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure img {\\n  width: 16px;\\n  margin: 0 5px;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure figcaption {\\n  width: 135px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  letter-spacing: 0px;\\n  padding-right: 5px;\\n}\\n\\n.TaskbarEntry_foreground__ECJ5M {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(255, 255, 255, 0.15);\\n}\\n.TaskbarEntry_foreground__ECJ5M:hover {\\n  background-color: rgba(255, 255, 255, 0.2);\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/TaskbarEntry.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAIA;ECwCE,mBAAA;EACA,uBAAA;EDtCA,iBAAA;EACA,YAAA;EACA,aAAA;EAEA,gCAAA;AAJF;AAME;ECVA,SAAA;EACA,cAAA;EAEA,wCAAA;EAEA,0CAAA;EDQE,SAAA;EACA,cAAA;AAFJ;AAKE;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EAEA,cAAA;AANJ;AAQI;EACE,WAAA;EACA,aAAA;AANN;AASI;EACE,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAPN;;AAYA;EACE,SAAA;EACA,cAAA;EAEA,2CAAA;AAVF;AAeE;EACE,0CAAA;AAbJ\",\"file\":\"TaskbarEntry.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n@import '@/styles/variables';\\n\\n.taskbarEntry {\\n  @include textOverflowEllipsis;\\n\\n  min-width: map-get($taskbarEntry, text-width) / 2;\\n  height: map-get($taskbar, height);\\n  margin: 0 4px;\\n\\n  border-bottom: $thickLine solid lighten($highlightColor, 30%);\\n\\n  &:hover {\\n    @include taskbarEntryHoverStyle;\\n\\n    margin: 0;\\n    padding: 0 4px;\\n  }\\n\\n  figure {\\n    font-size: map-get($taskbarEntry, font-size);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($taskbar, height) - $thickLine;\\n\\n    color: map-get($taskbarEntry, text-color);\\n\\n    img {\\n      width: map-get($taskbarEntry, icon-width);\\n      margin: 0 map-get($taskbarEntry, icon-margin);\\n    }\\n\\n    figcaption {\\n      width: map-get($taskbarEntry, text-width);\\n      overflow: hidden;\\n      text-overflow: ellipsis;\\n      letter-spacing: 0px;\\n      padding-right: 5px;\\n    }\\n  }\\n}\\n\\n.foreground {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, foreground-bg-opacity)\\n  );\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-foreground-bg-opacity)\\n    );\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"taskbarEntry\": \"TaskbarEntry_taskbarEntry__3eSin\",\n\t\"foreground\": \"TaskbarEntry_foreground__ECJ5M\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3M/Y2NjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNDQUFzQyx3QkFBd0IsNEJBQTRCLHNCQUFzQixpQkFBaUIsa0JBQWtCLHFDQUFxQyxHQUFHLDJDQUEyQyxjQUFjLG1CQUFtQiw2Q0FBNkMsK0NBQStDLGNBQWMsbUJBQW1CLEdBQUcsNENBQTRDLG9CQUFvQixrQkFBa0Isd0JBQXdCLGlCQUFpQixtQkFBbUIsR0FBRyxnREFBZ0QsZ0JBQWdCLGtCQUFrQixHQUFHLHVEQUF1RCxpQkFBaUIscUJBQXFCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEdBQUcscUNBQXFDLGNBQWMsbUJBQW1CLGdEQUFnRCxHQUFHLHlDQUF5QywrQ0FBK0MsR0FBRyxPQUFPLDBKQUEwSixZQUFZLFdBQVcsWUFBWSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLG1GQUFtRiw0QkFBNEIsK0JBQStCLG1CQUFtQixrQ0FBa0Msd0RBQXdELHNDQUFzQyxrQkFBa0Isb0VBQW9FLGVBQWUsc0NBQXNDLGtCQUFrQixxQkFBcUIsS0FBSyxjQUFjLG1EQUFtRCxzQkFBc0IsMEJBQTBCLHVEQUF1RCxrREFBa0QsYUFBYSxrREFBa0Qsc0RBQXNELE9BQU8sb0JBQW9CLGtEQUFrRCx5QkFBeUIsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLGNBQWMsbUJBQW1CLGdJQUFnSSxlQUFlLDRJQUE0SSxLQUFLLEdBQUcsb0JBQW9CLG1DQUFtQyxjQUFjLG1CQUFtQiwrQ0FBK0MsMkhBQTJILEdBQUcsdUJBQXVCLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsb0JBQW9CLGNBQWMsWUFBWSxHQUFHLHdCQUF3QixvQkFBb0IsYUFBYSxjQUFjLEdBQUcsb0JBQW9CLG9CQUFvQixXQUFXLFlBQVksR0FBRyxpQ0FBaUMsd0JBQXdCLDRCQUE0QixHQUFHLG9GQUFvRiwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGtDQUFrQyw2REFBNkQsS0FBSyxrQ0FBa0Msb0NBQW9DLG9DQUFvQywwQ0FBMEMsbUNBQW1DLGlCQUFpQix5REFBeUQsT0FBTyxLQUFLLEdBQUcsS0FBSztBQUN6aEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X18zZVNpbiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtaW4td2lkdGg6IDY3LjVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzcxYzBmZjtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luOmhvdmVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbn1cXG4uVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fM2VTaW4gZmlndXJlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X18zZVNpbiBmaWd1cmUgaW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIHdpZHRoOiAxMzVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5UYXNrYmFyRW50cnlfZm9yZWdyb3VuZF9fRUNKNU0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcbn1cXG4uVGFza2JhckVudHJ5X2ZvcmVncm91bmRfX0VDSjVNOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvU3lzdGVtL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzc1wiLFwiL1VzZXJzL2R1c3Rpbi9HaXQveC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUN3Q0UsbUJBQUE7RUFDQSx1QkFBQTtFRHRDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsZ0NBQUE7QUFKRjtBQU1FO0VDVkEsU0FBQTtFQUNBLGNBQUE7RUFFQSx3Q0FBQTtFQUVBLDBDQUFBO0VEUUUsU0FBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFFQSxjQUFBO0FBTko7QUFRSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBTk47QUFTSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVlBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFFQSwyQ0FBQTtBQVZGO0FBZUU7RUFDRSwwQ0FBQTtBQWJKXCIsXCJmaWxlXCI6XCJUYXNrYmFyRW50cnkubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi50YXNrYmFyRW50cnkge1xcbiAgQGluY2x1ZGUgdGV4dE92ZXJmbG93RWxsaXBzaXM7XFxuXFxuICBtaW4td2lkdGg6IG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgdGV4dC13aWR0aCkgLyAyO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbWFyZ2luOiAwIDRweDtcXG5cXG4gIGJvcmRlci1ib3R0b206ICR0aGlja0xpbmUgc29saWQgbGlnaHRlbigkaGlnaGxpZ2h0Q29sb3IsIDMwJSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgdGFza2JhckVudHJ5SG92ZXJTdHlsZTtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGFza2JhckVudHJ5LCBmb250LXNpemUpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCkgLSAkdGhpY2tMaW5lO1xcblxcbiAgICBjb2xvcjogbWFwLWdldCgkdGFza2JhckVudHJ5LCB0ZXh0LWNvbG9yKTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLXdpZHRoKTtcXG4gICAgICBtYXJnaW46IDAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLW1hcmdpbik7XFxuICAgIH1cXG5cXG4gICAgZmlnY2FwdGlvbiB7XFxuICAgICAgd2lkdGg6IG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgdGV4dC13aWR0aCk7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uZm9yZWdyb3VuZCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGZvcmVncm91bmQtYmctb3BhY2l0eSlcXG4gICk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWZvcmVncm91bmQtYmctb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdtYXBzJztcXG5cXG5AbWl4aW4gdGFza2JhckVudHJ5SG92ZXJTdHlsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICBpbnZlcnQobWFwLWdldCgkdGFza2JhciwgYmctY29sb3IpKSxcXG4gICAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBob3Zlci1iZy1vcGFjaXR5KVxcbiAgKTtcXG59XFxuXFxuQG1peGluIGZ1bGxTY3JlZW4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcblxcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRhc2tiYXJFbnRyeVwiOiBcIlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luXCIsXG5cdFwiZm9yZWdyb3VuZFwiOiBcIlRhc2tiYXJFbnRyeV9mb3JlZ3JvdW5kX19FQ0o1TVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/TaskbarEntry.module.scss\n");

/***/ })

})