(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(n,t,e){},23:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var c=e(1),o=e(0),i=e(12),r=e.n(i),u=(e(22),e(10)),a=e(16),d=e(7),l=e(3),s=(e(23),e(4));function j(){var n=Object(l.a)(["\n  padding: 4px;\n  color: black;\n\n  &:hover {\n    color: red;\n  }\n\n  & + & {\n    margin-left: 4px;\n  }\n"]);return j=function(){return n},n}function b(){var n=Object(l.a)([""]);return b=function(){return n},n}function f(){var n=Object(l.a)(["\n  color: rgba(2, 40, 77);\n  ","\n"]);return f=function(){return n},n}function O(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border: 1px solid black;\n\n  & + & {\n    margin-top: 10px; \n  }\n"]);return O=function(){return n},n}var p=s.a.div(O()),h=s.a.div(f(),(function(n){return n.isDone&&"\n    text-decoration: line-through;\n  "})),x=s.a.div(b()),g=s.a.button(j());function v(n){var t=n.className,e=n.size,o=n.todo,i=n.handleDeleteTodo,r=n.handleToggleIsDone;return Object(c.jsxs)(p,{className:t,"data-todo-id":o.id,isHiden:o.isHiden,children:[Object(c.jsx)(h,{isDone:o.isDone,size:e,children:o.content}),Object(c.jsxs)(x,{children:[Object(c.jsx)(g,{onClick:function(){r(o.id)},children:o.isDone?"\u672a\u5b8c\u6210":"\u5df2\u5b8c\u6210"}),Object(c.jsx)(g,{onClick:function(){i(o.id)},children:"\u522a\u9664"})]})]})}var D={all:function(){return!0},done:function(n){return n.isDone},undone:function(n){return!n.isDone}};function m(){var n=Object(o.useState)([]),t=Object(d.a)(n,2),e=t[0],i=t[1],r=Object(o.useState)(""),l=Object(d.a)(r,2),s=l[0],j=l[1],b=Object(o.useState)("all"),f=Object(d.a)(b,2),O=f[0],p=f[1],h=Object(o.useRef)(1),x=function(n){i(e.map((function(t){return t.id!==n?t:Object(u.a)(Object(u.a)({},t),{},{isDone:!t.isDone})})))},g=function(n){i(e.filter((function(t){return t.id!==n})))},m=function(n){p(n)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("input",{type:"text",placeholder:"todo",value:s,onChange:function(n){j(n.target.value)}}),Object(c.jsx)("button",{onClick:function(){i([{id:h.current,content:s,isDone:!1}].concat(Object(a.a)(e))),j(""),h.current++},children:"Add todo"}),Object(c.jsx)("button",{onClick:function(){i([])},children:"\u6e05\u7a7a"}),Object(c.jsx)("button",{onClick:function(){return m("all")},children:"ALL"}),Object(c.jsx)("button",{onClick:function(){return m("done")},children:"\u5df2\u5b8c\u6210"}),Object(c.jsx)("button",{onClick:function(){return m("undone")},children:"\u672a\u5b8c\u6210"}),e.filter(D[O]).map((function(n){return Object(c.jsx)(v,{todo:n,handleDeleteTodo:g,handleToggleIsDone:x},n.id)}))]})}var k=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),c(n),o(n),i(n),r(n)}))};r.a.render(Object(c.jsx)(m,{}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.e50530b2.chunk.js.map