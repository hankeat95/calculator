(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),i=n(12),o=n.n(i),a=(n(20),n(3)),r=(n(21),n(13)),l=n.n(r),u=n(1);var j=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)("0"),o=Object(a.a)(i,2),r=o[0],j=o[1],b=Object(c.useState)(""),d=Object(a.a)(b,2),h=d[0],f=d[1],x=Object(c.useState)(""),O=Object(a.a)(x,2),m=O[0],p=O[1],C=Object(c.useState)(""),g=Object(a.a)(C,2),k=g[0],N=g[1],y=Object(c.useState)(""),v=Object(a.a)(y,2),S=v[0],F=v[1];Object(c.useEffect)((function(){var t;document.getElementsByClassName("textDisplay")[0].style.fontSize="64px";do{var e=document.getElementsByClassName("textDisplay")[0].clientWidth,n=document.getElementsByClassName("textDisplay")[0].scrollWidth,c=parseFloat(window.getComputedStyle(document.getElementsByClassName("textDisplay")[0],null).getPropertyValue("font-size"));(t=n-e>0)&&(document.getElementsByClassName("textDisplay")[0].style.fontSize=c-1+"px")}while(t)}),[r,h,n]);var B=function(t){if(0!==t){var e=t.toString();if(!n&&(m||k||S))return j(e),p(""),N(""),void F("");n?f((function(t){return t&&"0"!==t?t+e:e})):j((function(t){return t&&"0"!==t?t+e:e}))}},D=function(t){r&&(r.endsWith(".")&&j((function(t){return t.substring(0,t.length-1)})),h&&E(),s(t))},E=function(){var t="";if(r&&h&&n){switch(n){case"+":t=parseFloat(r)+parseFloat(h);break;case"-":s("-"),t=parseFloat(r)-parseFloat(h);break;case"\xd7":s("\xd7"),t=parseFloat(r)*parseFloat(h);break;case"\xf7":s("\xf7"),t=parseFloat(r)/parseFloat(h)}t=t.toString().includes(".")?t.toFixed(5):t,p(r),N(h),F(n),j(t.toString()),f(""),s("")}},T=function(){j("0"),f(""),s(""),p(""),N(""),F("")};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("span",{children:"The Calculator"})}),Object(u.jsx)("div",{className:"App-content",children:Object(u.jsxs)("div",{className:"calculatorContainer",children:[Object(u.jsxs)("div",{className:"historyText",children:[Object(u.jsx)("span",{className:"firstValueText",children:m}),Object(u.jsx)("span",{className:"operationText",children:S}),Object(u.jsx)("span",{className:"secondValueText",children:k})]}),Object(u.jsxs)("div",{className:"textDisplay",children:[r," ",n," ",h]}),Object(u.jsxs)("div",{className:"buttonsDiv",children:[Object(u.jsx)("button",{onClick:T,className:"secondaryButtons",children:"AC"}),Object(u.jsx)("button",{onClick:function(){0!==r.length&&1!==r.length?((S||m||k)&&T(),n&&h?f((function(t){return t.substring(0,t.length-1)})):n?s(""):n||!r||j((function(t){return t.substring(0,t.length-1)}))):j("0")},className:"secondaryButtons",children:Object(u.jsx)(l.a,{})}),Object(u.jsx)("button",{onClick:function(){if(r&&"0"!==r){var t=parseFloat(r)/100;p(r),N(100),F("\xf7"),j(t.toString()),f(""),s("")}},className:"secondaryButtons",children:"%"}),Object(u.jsx)("button",{onClick:function(){return D("\xf7")},className:"actionButtons",children:"\xf7"}),Object(u.jsx)("button",{onClick:function(){return B(7)},children:"7"}),Object(u.jsx)("button",{onClick:function(){return B(8)},children:"8"}),Object(u.jsx)("button",{onClick:function(){return B(9)},children:"9"}),Object(u.jsx)("button",{onClick:function(){return D("\xd7")},className:"actionButtons",children:"\xd7"}),Object(u.jsx)("button",{onClick:function(){return B(4)},children:"4"}),Object(u.jsx)("button",{onClick:function(){return B(5)},children:"5"}),Object(u.jsx)("button",{onClick:function(){return B(6)},children:"6"}),Object(u.jsx)("button",{onClick:function(){return D("-")},className:"actionButtons",children:"-"}),Object(u.jsx)("button",{onClick:function(){return B(1)},children:"1"}),Object(u.jsx)("button",{onClick:function(){return B(2)},children:"2"}),Object(u.jsx)("button",{onClick:function(){return B(3)},children:"3"}),Object(u.jsx)("button",{onClick:function(){return D("+")},className:"actionButtons",children:"+"}),Object(u.jsx)("button",{onClick:function(){return B(0)},children:"0"}),Object(u.jsx)("button",{onClick:function(){n&&!h&&f("0."),r&&!r.includes(".")&&j((function(t){return t+"."})),h&&!h.includes(".")&&f((function(t){return t+"."}))},children:"."}),Object(u.jsx)("button",{onClick:E,className:"equalSign",children:"="})]})]})})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),i(t),o(t)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b(console.log)}},[[31,1,2]]]);
//# sourceMappingURL=main.0b8a6fe4.chunk.js.map