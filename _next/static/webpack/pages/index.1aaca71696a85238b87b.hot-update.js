webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Apps/Explorer.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/Apps/Explorer.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Explorer_directory__25ams {\\n  display: inline-table;\\n  border: none;\\n  word-wrap: break-word;\\n  overflow: scroll;\\n  font-size: 12.5px;\\n  border-top: 1px solid black;\\n  width: 100%;\\n  color: #a5a5a5;\\n  border-spacing: 0px;\\n  background-color: #2a282b;\\n}\\n.Explorer_directory__25ams td {\\n  line-height: 20px;\\n  height: 20px;\\n  min-height: 20px;\\n  max-height: 20px;\\n}\\n.Explorer_directory__25ams td .Explorer_emphasis__1eCQg {\\n  color: #e1e1e1;\\n}\\n.Explorer_directory__25ams thead {\\n  background: #373538;\\n}\\n.Explorer_directory__25ams thead tr {\\n  border-bottom: 1px solid #5b5b60;\\n}\\n.Explorer_directory__25ams thead tr td {\\n  border-bottom: 1px solid #5b5b60;\\n  border-right: 1px solid #4c4c51;\\n  padding-left: 10px;\\n}\\n.Explorer_directory__25ams thead tr td:last-child {\\n  border-right: none;\\n}\\n.Explorer_directory__25ams tbody tr:nth-child(even) {\\n  background: #2a282b;\\n}\\n.Explorer_directory__25ams tbody tr:nth-child(odd) {\\n  background: #343235;\\n}\\n.Explorer_directory__25ams tbody tr.Explorer_selected__MRVD3 {\\n  background-color: #0058d0;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/dustin/Git/x/styles/Apps/Explorer.module.scss\",\"/Users/dustin/Git/x/styles/variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAEE,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EAEA,iBCSS;EDPT,2BAAA;EAEA,WAAA;EAEA,cAAA;EAEA,mBAAA;EAEA,yBAAA;AARF;AAYE;EACE,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAVJ;AAWI;EACE,cAAA;AATN;AAaE;EACE,mBAAA;AAXJ;AAYI;EACE,gCAAA;AAVN;AAWM;EACE,gCAAA;EACA,+BAAA;EACA,kBAAA;AATR;AAWQ;EACE,kBAAA;AATV;AAiBM;EAAmB,mBAAA;AAdzB;AAeM;EAAkB,mBAAA;AAZxB;AAaM;EACE,yBAAA;AAXR\",\"file\":\"Explorer.module.scss\",\"sourcesContent\":[\"@import '@/styles/variables';\\n\\n.directory {\\n\\n  display: inline-table;\\n  border: none; \\n  word-wrap:break-word;\\n  overflow:scroll;\\n\\n  font-size: $fontSize;\\n\\n  border-top: 1px solid black;\\n\\n  width: 100%;\\n\\n  color: rgb(165,165,165);\\n\\n  border-spacing: 0px;\\n\\n  background-color: rgba(42,40,43);\\n\\n\\n\\n  td {\\n    line-height: 20px;\\n    height: 20px;\\n    min-height: 20px;\\n    max-height: 20px;\\n    .emphasis {\\n      color: rgb(225,225,225);\\n    }\\n  }\\n\\n  thead{\\n    background: rgba(55,53,56);\\n    tr {\\n      border-bottom: 1px solid rgb(91,91,96);\\n      td {\\n        border-bottom: 1px solid rgb(91,91,96);\\n        border-right: 1px solid rgb(76,76,81);\\n        padding-left: 10px;\\n\\n        &:last-child {\\n          border-right: none;\\n        }\\n      }\\n    }\\n  }\\n\\n  tbody{\\n    tr {\\n      &:nth-child(even) {background: rgba(42,40,43)}\\n      &:nth-child(odd) {background: rgb(52,50,53)}\\n      &.selected {\\n        background-color: rgb(0, 88, 208);\\n      }\\n    }\\n  }\\n}\\n\\n\\n// name and title curret color\\n// details in 165,165,165\",\"$highlightColor: #0078d7; // Default blue\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: #f8f8ff;\\n\\n$minimize: rgb(255, 192, 46);\\n$maximize: rgb(40, 208, 66);\\n$close: rgb(255, 87, 79);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"directory\": \"Explorer_directory__25ams\",\n\t\"emphasis\": \"Explorer_emphasis__1eCQg\",\n\t\"selected\": \"Explorer_selected__MRVD3\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcHMvRXhwbG9yZXIubW9kdWxlLnNjc3M/ZWZmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLCtCQUErQiwwQkFBMEIsaUJBQWlCLDBCQUEwQixxQkFBcUIsc0JBQXNCLGdDQUFnQyxnQkFBZ0IsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsR0FBRyxpQ0FBaUMsc0JBQXNCLGlCQUFpQixxQkFBcUIscUJBQXFCLEdBQUcsMkRBQTJELG1CQUFtQixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyx1Q0FBdUMscUNBQXFDLEdBQUcsMENBQTBDLHFDQUFxQyxvQ0FBb0MsdUJBQXVCLEdBQUcscURBQXFELHVCQUF1QixHQUFHLHVEQUF1RCx3QkFBd0IsR0FBRyxzREFBc0Qsd0JBQXdCLEdBQUcsZ0VBQWdFLDhCQUE4QixHQUFHLE9BQU8sdUpBQXVKLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLG9GQUFvRixnQkFBZ0IsNEJBQTRCLGlCQUFpQiwwQkFBMEIsb0JBQW9CLDJCQUEyQixrQ0FBa0Msa0JBQWtCLDhCQUE4QiwwQkFBMEIsdUNBQXVDLGNBQWMsd0JBQXdCLG1CQUFtQix1QkFBdUIsdUJBQXVCLGlCQUFpQixnQ0FBZ0MsT0FBTyxLQUFLLFlBQVksaUNBQWlDLFVBQVUsK0NBQStDLFlBQVksaURBQWlELGdEQUFnRCw2QkFBNkIsMEJBQTBCLCtCQUErQixXQUFXLFNBQVMsT0FBTyxLQUFLLFlBQVksVUFBVSwyQkFBMkIsMkJBQTJCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLDRDQUE0QyxTQUFTLE9BQU8sS0FBSyxHQUFHLDJGQUEyRix1REFBdUQsK0JBQStCLG1CQUFtQix1QkFBdUIsaUNBQWlDLDhCQUE4QiwyQkFBMkIsZ01BQWdNLG9CQUFvQixzQkFBc0IsS0FBSztBQUM1cUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9BcHBzL0V4cGxvcmVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkV4cGxvcmVyX2RpcmVjdG9yeV9fMjVhbXMge1xcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2E1YTVhNTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyODJiO1xcbn1cXG4uRXhwbG9yZXJfZGlyZWN0b3J5X18yNWFtcyB0ZCB7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uRXhwbG9yZXJfZGlyZWN0b3J5X18yNWFtcyB0ZCAuRXhwbG9yZXJfZW1waGFzaXNfXzFlQ1FnIHtcXG4gIGNvbG9yOiAjZTFlMWUxO1xcbn1cXG4uRXhwbG9yZXJfZGlyZWN0b3J5X18yNWFtcyB0aGVhZCB7XFxuICBiYWNrZ3JvdW5kOiAjMzczNTM4O1xcbn1cXG4uRXhwbG9yZXJfZGlyZWN0b3J5X18yNWFtcyB0aGVhZCB0ciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzViNWI2MDtcXG59XFxuLkV4cGxvcmVyX2RpcmVjdG9yeV9fMjVhbXMgdGhlYWQgdHIgdGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1YjViNjA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGM0YzUxO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uRXhwbG9yZXJfZGlyZWN0b3J5X18yNWFtcyB0aGVhZCB0ciB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLkV4cGxvcmVyX2RpcmVjdG9yeV9fMjVhbXMgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQ6ICMyYTI4MmI7XFxufVxcbi5FeHBsb3Jlcl9kaXJlY3RvcnlfXzI1YW1zIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6ICMzNDMyMzU7XFxufVxcbi5FeHBsb3Jlcl9kaXJlY3RvcnlfXzI1YW1zIHRib2R5IHRyLkV4cGxvcmVyX3NlbGVjdGVkX19NUlZEMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1OGQwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy9BcHBzL0V4cGxvcmVyLm1vZHVsZS5zY3NzXCIsXCIvVXNlcnMvZHVzdGluL0dpdC94L3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUVFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkNTUztFRFBULDJCQUFBO0VBRUEsV0FBQTtFQUVBLGNBQUE7RUFFQSxtQkFBQTtFQUVBLHlCQUFBO0FBUkY7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVdJO0VBQ0UsY0FBQTtBQVROO0FBYUU7RUFDRSxtQkFBQTtBQVhKO0FBWUk7RUFDRSxnQ0FBQTtBQVZOO0FBV007RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdRO0VBQ0Usa0JBQUE7QUFUVjtBQWlCTTtFQUFtQixtQkFBQTtBQWR6QjtBQWVNO0VBQWtCLG1CQUFBO0FBWnhCO0FBYU07RUFDRSx5QkFBQTtBQVhSXCIsXCJmaWxlXCI6XCJFeHBsb3Jlci5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi5kaXJlY3Rvcnkge1xcblxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgYm9yZGVyOiBub25lOyBcXG4gIHdvcmQtd3JhcDpicmVhay13b3JkO1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcblxcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XFxuXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGNvbG9yOiByZ2IoMTY1LDE2NSwxNjUpO1xcblxcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsNDAsNDMpO1xcblxcblxcblxcbiAgdGQge1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcbiAgICAuZW1waGFzaXMge1xcbiAgICAgIGNvbG9yOiByZ2IoMjI1LDIyNSwyMjUpO1xcbiAgICB9XFxuICB9XFxuXFxuICB0aGVhZHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NSw1Myw1Nik7XFxuICAgIHRyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDkxLDkxLDk2KTtcXG4gICAgICB0ZCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDkxLDkxLDk2KTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYig3Niw3Niw4MSk7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICB0Ym9keXtcXG4gICAgdHIge1xcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiByZ2JhKDQyLDQwLDQzKX1cXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiByZ2IoNTIsNTAsNTMpfVxcbiAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDg4LCAyMDgpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG4vLyBuYW1lIGFuZCB0aXRsZSBjdXJyZXQgY29sb3JcXG4vLyBkZXRhaWxzIGluIDE2NSwxNjUsMTY1XCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICMwMDc4ZDc7IC8vIERlZmF1bHQgYmx1ZVxcbiRoaWdobGlnaHRDb2xvcjI6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG5cXG4kdWlDb2xvcjE6IHJnYig1NSwgNTUsIDU1KTtcXG4kdWlDb2xvcjI6IGJsYWNrO1xcblxcbiRvZmZXaGl0ZTogI2Y4ZjhmZjtcXG5cXG4kbWluaW1pemU6IHJnYigyNTUsIDE5MiwgNDYpO1xcbiRtYXhpbWl6ZTogcmdiKDQwLCAyMDgsIDY2KTtcXG4kY2xvc2U6IHJnYigyNTUsIDg3LCA3OSk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJkaXJlY3RvcnlcIjogXCJFeHBsb3Jlcl9kaXJlY3RvcnlfXzI1YW1zXCIsXG5cdFwiZW1waGFzaXNcIjogXCJFeHBsb3Jlcl9lbXBoYXNpc19fMWVDUWdcIixcblx0XCJzZWxlY3RlZFwiOiBcIkV4cGxvcmVyX3NlbGVjdGVkX19NUlZEM1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Apps/Explorer.module.scss\n");

/***/ })

})