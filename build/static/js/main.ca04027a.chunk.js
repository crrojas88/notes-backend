(this["webpackJsonpcourse-content"]=this["webpackJsonpcourse-content"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),i=n(3),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},l=n(4),f=n.n(l),b="/api/notes",d={getAll:function(){return f.a.get(b).then((function(t){return t.data}))},create:function(t){return f.a.post(b,t).then((function(t){return t.data}))},update:function(t,e){return f.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))}},m=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},O=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),f=l[0],b=l[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),h=p[0],v=p[1],x=Object(a.useState)(null),g=Object(i.a)(x,2),S=g[0],k=g[1];Object(a.useEffect)((function(){d.getAll().then((function(t){c(t)}))}),[]);var y=h?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return v(!h)},children:["Show ",h?"important":"all"]})}),Object(u.jsx)("ul",{children:y.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});d.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){k("Note '".concat(e.content,"' was already removed from server.")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5};d.create(e).then((function(t){c(n.concat(t)),b("")}))},children:[Object(u.jsx)("input",{value:f,onChange:function(t){b(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Save"})]}),Object(u.jsx)(m,{})]})};n(39);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ca04027a.chunk.js.map