(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{F9RA:function(n,t,e){"use strict";e.r(t),e.d(t,"Taskbar",(function(){return w}));var a=e("wx14"),o=e("ODXe"),i=e("q1tI"),r=e.n(i),u=e("tf9x"),l=e.n(u),c=e("a6RD"),s=e.n(c),b=e("2g1b"),d=e("bB1l"),p=e("ZMKu"),f=r.a.createElement,k=s()((function(){return e.e(21).then(e.bind(null,"A7eR"))}),{loadableGenerated:{webpack:function(){return["A7eR"]},modules:["@/components/System/Taskbar/Clock"]}}),m=s()((function(){return e.e(23).then(e.bind(null,"T/bh"))}),{loadableGenerated:{webpack:function(){return["T/bh"]},modules:["@/components/System/Taskbar/TaskbarEntry"]}}),x={initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{x:{type:"spring"}},exit:{opacity:0,width:0,transition:{duration:.3},x:-100}},w=function(){var n=Object(i.useContext)(b.AppsContext),t=n.apps,e=n.focus,r=n.minimize;return f("nav",{className:l.a.taskbar},f("ol",null,f(p.a,null,null===t||void 0===t?void 0:t.sort(d.b).map((function(n){var t=n.id,i=n.icon,u=n.minimized,l=n.name,c=n.foreground,s=n.stackOrder;return f(p.b.li,Object(a.a)({key:t},x),f(m,{foreground:c,icon:i,name:l,onClick:function(){u?null===r||void 0===r||r(t,!1):Object(o.a)(s,1)[0]===t?null===r||void 0===r||r(t):null===e||void 0===e||e(t)}}))})))),f(k,null))};t.default=w},tf9x:function(n,t,e){n.exports={taskbar:"Taskbar_taskbar__1F5ru"}}}]);