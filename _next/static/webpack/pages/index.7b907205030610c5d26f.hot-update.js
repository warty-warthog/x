webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/TaskbarEntry.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/TaskbarEntry.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".TaskbarEntry_taskbarEntry__3eSin {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  min-width: 65px;\\n  height: 30px;\\n  margin: 0 4px;\\n  border-bottom: 2px solid #71c0ff;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin:hover {\\n  margin: 0;\\n  padding: 0 4px;\\n  transition: background-color 0.1s linear;\\n  background-color: rgba(255, 255, 255, 0.1);\\n  margin: 0;\\n  padding: 0 4px;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure {\\n  font-size: 12px;\\n  display: flex;\\n  align-items: center;\\n  height: 28px;\\n  color: #f8f8ff;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure img {\\n  width: 16px;\\n  margin: 0 2px 0 5px;\\n}\\n.TaskbarEntry_taskbarEntry__3eSin figure figcaption {\\n  width: 130px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  padding-right: 5px;\\n}\\n\\n.TaskbarEntry_foreground__ECJ5M {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(255, 255, 255, 0.15);\\n}\\n.TaskbarEntry_foreground__ECJ5M:hover {\\n  background-color: rgba(255, 255, 255, 0.2);\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/System/TaskbarEntry.module.scss\",\"/Users/dustin/Git/x/styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAIA;ECwCE,mBAAA;EACA,uBAAA;EDtCA,eAAA;EACA,YAAA;EACA,aAAA;EAEA,gCAAA;AAJF;AAME;ECVA,SAAA;EACA,cAAA;EAEA,wCAAA;EAEA,0CAAA;EDQE,SAAA;EACA,cAAA;AAFJ;AAKE;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EAEA,cAAA;AANJ;AAQI;EACE,WAAA;EACA,mBAAA;AANN;AASI;EACE,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;AAPN;;AAYA;EACE,SAAA;EACA,cAAA;EAEA,2CAAA;AAVF;AAeE;EACE,0CAAA;AAbJ\",\"file\":\"TaskbarEntry.module.scss\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n@import '@/styles/variables';\\n\\n.taskbarEntry {\\n  @include textOverflowEllipsis;\\n\\n  min-width: map-get($taskbarEntry, text-width) / 2;\\n  height: map-get($taskbar, height);\\n  margin: 0 4px;\\n\\n  border-bottom: $thickLine solid lighten($highlightColor, 30%);\\n\\n  &:hover {\\n    @include taskbarEntryHoverStyle;\\n\\n    margin: 0;\\n    padding: 0 4px;\\n  }\\n\\n  figure {\\n    font-size: map-get($taskbarEntry, font-size);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($taskbar, height) - $thickLine;\\n\\n    color: map-get($taskbarEntry, text-color);\\n\\n    img {\\n      width: map-get($taskbarEntry, icon-width);\\n      margin: 0 2px 0 5px;\\n    }\\n\\n    figcaption {\\n      width: map-get($taskbarEntry, text-width);\\n      overflow: hidden;\\n      text-overflow: ellipsis;\\n      padding-right: 5px;\\n    }\\n  }\\n}\\n\\n.foreground {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, foreground-bg-opacity)\\n  );\\n\\n  &:hover {\\n    background-color: rgba(\\n      invert(map-get($taskbar, bg-color)),\\n      map-get($taskbarEntry, hover-foreground-bg-opacity)\\n    );\\n  }\\n}\\n\",\"@import 'maps';\\n\\n@mixin taskbarEntryHoverStyle {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  transition: background-color 0.1s linear;\\n\\n  background-color: rgba(\\n    invert(map-get($taskbar, bg-color)),\\n    map-get($taskbarEntry, hover-bg-opacity)\\n  );\\n}\\n\\n@mixin fullScreen {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"taskbarEntry\": \"TaskbarEntry_taskbarEntry__3eSin\",\n\t\"foreground\": \"TaskbarEntry_foreground__ECJ5M\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3M/Y2NjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNDQUFzQyx3QkFBd0IsNEJBQTRCLG9CQUFvQixpQkFBaUIsa0JBQWtCLHFDQUFxQyxHQUFHLDJDQUEyQyxjQUFjLG1CQUFtQiw2Q0FBNkMsK0NBQStDLGNBQWMsbUJBQW1CLEdBQUcsNENBQTRDLG9CQUFvQixrQkFBa0Isd0JBQXdCLGlCQUFpQixtQkFBbUIsR0FBRyxnREFBZ0QsZ0JBQWdCLHdCQUF3QixHQUFHLHVEQUF1RCxpQkFBaUIscUJBQXFCLDRCQUE0Qix1QkFBdUIsR0FBRyxxQ0FBcUMsY0FBYyxtQkFBbUIsZ0RBQWdELEdBQUcseUNBQXlDLCtDQUErQyxHQUFHLE9BQU8sMEpBQTBKLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLG1GQUFtRiw0QkFBNEIsK0JBQStCLG1CQUFtQixrQ0FBa0Msd0RBQXdELHNDQUFzQyxrQkFBa0Isb0VBQW9FLGVBQWUsc0NBQXNDLGtCQUFrQixxQkFBcUIsS0FBSyxjQUFjLG1EQUFtRCxzQkFBc0IsMEJBQTBCLHVEQUF1RCxrREFBa0QsYUFBYSxrREFBa0QsNEJBQTRCLE9BQU8sb0JBQW9CLGtEQUFrRCx5QkFBeUIsZ0NBQWdDLDJCQUEyQixPQUFPLEtBQUssR0FBRyxpQkFBaUIsY0FBYyxtQkFBbUIsZ0lBQWdJLGVBQWUsNElBQTRJLEtBQUssR0FBRyxvQkFBb0IsbUNBQW1DLGNBQWMsbUJBQW1CLCtDQUErQywySEFBMkgsR0FBRyx1QkFBdUIsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksbUJBQW1CLGtCQUFrQixHQUFHLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3A4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1pbi13aWR0aDogNjVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMCA0cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzcxYzBmZjtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luOmhvdmVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbn1cXG4uVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fM2VTaW4gZmlndXJlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X18zZVNpbiBmaWd1cmUgaW1nIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbWFyZ2luOiAwIDJweCAwIDVweDtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfXzNlU2luIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLlRhc2tiYXJFbnRyeV9mb3JlZ3JvdW5kX19FQ0o1TSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxufVxcbi5UYXNrYmFyRW50cnlfZm9yZWdyb3VuZF9fRUNKNU06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9TeXN0ZW0vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQ3dDRSxtQkFBQTtFQUNBLHVCQUFBO0VEdENBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdDQUFBO0FBSkY7QUFNRTtFQ1ZBLFNBQUE7RUFDQSxjQUFBO0VBRUEsd0NBQUE7RUFFQSwwQ0FBQTtFRFFFLFNBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEsY0FBQTtBQU5KO0FBUUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVlBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFFQSwyQ0FBQTtBQVZGO0FBZUU7RUFDRSwwQ0FBQTtBQWJKXCIsXCJmaWxlXCI6XCJUYXNrYmFyRW50cnkubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi50YXNrYmFyRW50cnkge1xcbiAgQGluY2x1ZGUgdGV4dE92ZXJmbG93RWxsaXBzaXM7XFxuXFxuICBtaW4td2lkdGg6IG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgdGV4dC13aWR0aCkgLyAyO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbWFyZ2luOiAwIDRweDtcXG5cXG4gIGJvcmRlci1ib3R0b206ICR0aGlja0xpbmUgc29saWQgbGlnaHRlbigkaGlnaGxpZ2h0Q29sb3IsIDMwJSk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgdGFza2JhckVudHJ5SG92ZXJTdHlsZTtcXG5cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGFza2JhckVudHJ5LCBmb250LXNpemUpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCkgLSAkdGhpY2tMaW5lO1xcblxcbiAgICBjb2xvcjogbWFwLWdldCgkdGFza2JhckVudHJ5LCB0ZXh0LWNvbG9yKTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLXdpZHRoKTtcXG4gICAgICBtYXJnaW46IDAgMnB4IDAgNXB4O1xcbiAgICB9XFxuXFxuICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgIHdpZHRoOiBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIHRleHQtd2lkdGgpO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5mb3JlZ3JvdW5kIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG4gICAgaW52ZXJ0KG1hcC1nZXQoJHRhc2tiYXIsIGJnLWNvbG9yKSksXFxuICAgIG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgZm9yZWdyb3VuZC1iZy1vcGFjaXR5KVxcbiAgKTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcbiAgICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXJFbnRyeSwgaG92ZXItZm9yZWdyb3VuZC1iZy1vcGFjaXR5KVxcbiAgICApO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21hcHMnO1xcblxcbkBtaXhpbiB0YXNrYmFyRW50cnlIb3ZlclN0eWxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuICAgIGludmVydChtYXAtZ2V0KCR0YXNrYmFyLCBiZy1jb2xvcikpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyRW50cnksIGhvdmVyLWJnLW9wYWNpdHkpXFxuICApO1xcbn1cXG5cXG5AbWl4aW4gZnVsbFNjcmVlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gYm90dG9tUmlnaHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbkBtaXhpbiB0b3BMZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiB0ZXh0T3ZlcmZsb3dFbGxpcHNpcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkYm9yZGVyLXJhZGl1cywgJGZvcmVncm91bmQtY29sb3IsICRiYWNrZ3JvdW5kLWNvbG9yKSB7XFxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAkc2l6ZTtcXG4gICAgaGVpZ2h0OiAkc2l6ZTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGVuKCRmb3JlZ3JvdW5kLWNvbG9yLCAxMCUpO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvcmVncm91bmQtY29sb3IsIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGFza2JhckVudHJ5XCI6IFwiVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fM2VTaW5cIixcblx0XCJmb3JlZ3JvdW5kXCI6IFwiVGFza2JhckVudHJ5X2ZvcmVncm91bmRfX0VDSjVNXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/TaskbarEntry.module.scss\n");

/***/ })

})