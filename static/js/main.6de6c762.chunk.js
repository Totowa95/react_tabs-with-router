(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=a(6),m=a(1),u=a(16),i=function(e){var t=e.item,a=Object(u.a)(t,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,a.content))},b=function(e){var t=e.tabs,a=Object(m.e)().tabId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tabs"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(o.c,{key:e.id,to:"/tabs/".concat(e.id)},e.title)}))),r.a.createElement(m.a,{path:"/tabs/:tabId"},t.some((function(e){return e.id===a}))?r.a.createElement(i,{item:t.filter((function(e){return e.id===a}))}):r.a.createElement("p",null,"Please select a tab")))},s=(a(27),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.b,{to:"/"},"go to Home "),r.a.createElement(o.b,{to:"/tabs"},"go to Tabs "),r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement("h1",null,"Home page")),r.a.createElement(m.a,{path:"/tabs/:tabId?"},r.a.createElement(b,{tabs:s})))};c.a.render(r.a.createElement(o.a,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6de6c762.chunk.js.map