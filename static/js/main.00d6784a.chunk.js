(this.webpackJsonpuchet_trenirovok=this.webpackJsonpuchet_trenirovok||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(6),d=n.n(a),i=(n(11),n(3)),j=n(2),o=n(5),u=(n(12),[{text:"5.7",date:"2019-07-20",id:1},{text:"14.2",date:"2019-07-01",id:2},{text:"3.4",date:"2019-07-10",id:3}]),s=n(0),b=function(t){var e=t.formHandler,n=t.addHandler;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"date",name:"date",onChange:e}),Object(s.jsx)("input",{type:"text",name:"text",onChange:e}),Object(s.jsx)("button",{onClick:n,children:"OK"})]})},l=function(t){var e=t.state,n=t.deleteHandler;return Object(s.jsx)("table",{children:Object(s.jsx)("tbody",{children:e.map((function(t){return Object(s.jsx)(O,Object(j.a)(Object(j.a)({},t),{},{deleteHandler:n}),t.id)}))})})},O=function(t){var e=t.date,n=t.text,c=t.id,r=t.deleteHandler;return console.log(123,c),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("span",{children:e})}),Object(s.jsx)("td",{children:Object(s.jsx)("span",{children:n})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{children:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(s.jsx)("button",{onClick:function(){r(c)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},x=function(){var t=Object(c.useState)(u),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)({}),d=Object(o.a)(a,2),O=d[0],x=d[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{formHandler:function(t){return x((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t.target.name,t.target.value))}))},addHandler:function(){r((function(t){return t.concat({date:O.date,text:O.text,id:t.length+1})}))}}),Object(s.jsx)(l,{state:function(t){return[].concat(t.sort((function(t,e){return t.date>e.date?-1:1})))}(n),deleteHandler:function(t){return r((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};d.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.00d6784a.chunk.js.map