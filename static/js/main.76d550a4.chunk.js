(this.webpackJsonpgrocery_list=this.webpackJsonpgrocery_list||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),r=n.n(i),a=(n(13),n(14),n(4)),o=n(7),u=n(0);var j=function(){var e=Object(c.useContext)(h),t=e.list,n=e.setList,s=Object(c.useState)(""),i=Object(a.a)(s,2),r=i[0],j=i[1],l=Object(c.useState)(),b=Object(a.a)(l,2),d=b[0],O=b[1],m=!0;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"input-form",onSubmit:function(e){e.preventDefault(),d>=1?(t.map((function(e){e.listItem.toLowerCase()===r.toLowerCase()&&(e.repetation=e.repetation+parseInt(d,10),j(""),O(),n(Object(o.a)(t)),m=!1,document.getElementById("numberInput").value="")})),m&&(n([].concat(Object(o.a)(t),[{listItem:r,repetation:parseInt(d,10),isPurchased:!1}])),j(""),O(),document.getElementById("numberInput").value="")):(document.getElementById("showNotification").innerHTML="Quantity must be greater than 0.",j(""),O(),document.getElementById("numberInput").value="")},children:[Object(u.jsx)("input",{id:"textInput",type:"text",name:"item",placeholder:"Add New Item",value:r,onChange:function(e){var t=e.target.value;console.log(t),j(t)},onClick:function(){document.getElementById("showNotification").innerHTML=""},required:!0}),Object(u.jsx)("input",{id:"numberInput",type:"number",name:"numberOfItem",placeholder:"Quantity",onChange:function(e){var t=e.target.value;console.log(t),O(t),console.log(d)},required:!0}),Object(u.jsx)("button",{id:"add-btn",className:"btn",type:"submit",children:"Add"}),Object(u.jsx)("button",{className:"btn",type:"button",onClick:function(){n([])},children:"Remove All"})]}),Object(u.jsx)("p",{id:"showNotification"})]})},l=n(2);var b=function(){var e=Object(c.useContext)(h),t=e.list,n=e.setList;return Object(u.jsx)("div",{className:"grocery-list",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Items"}),Object(u.jsx)("th",{children:"Quantity"}),Object(u.jsx)("th",{children:"Purchase"}),Object(u.jsx)("th",{children:"Remove"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{}),Object(u.jsx)("td",{})]}),t.map((function(e){console.log(e.listItem);var c=e.listItem,s=e.repetation,i=e.isPurchased;if(!e.isDeleted)return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{style:{background:i?"red":"white"},children:[Object(u.jsx)("td",{onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(l.a)(Object(l.a)({},e),{},{isPurchased:!e.isPurchased}):e}));n(e)},children:c}),Object(u.jsx)("td",{children:s}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"purchase_btn",onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(l.a)(Object(l.a)({},e),{},{isPurchased:!e.isPurchased}):e}));n(e)},children:"Purchase"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){var e=t.map((function(e){return e.listItem===c?Object(l.a)(Object(l.a)({},e),{},{isDeleted:!e.isDeleted}):e}));n(e)},children:"Remove"})})]})})}))]})})};var d=function(){var e,t=Object(c.useContext)(h),n=t.list,s=t.setList,i=0;return e=0===n.length?[0]:n.map((function(e){return e.isDeleted||(i+=e.repetation),i})),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:["Total number of Grocery items :"," ",e[e.length-1]]}),Object(u.jsx)("button",{className:"btn",onClick:function(){s(n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isPurchased:!0})})))},children:"Purchase All"})]})},h=Object(c.createContext)();var O=function(){var e=Object(c.useState)([{listItem:"Honey",repetation:1,isPurchased:!1,isDeleted:!1}]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(u.jsx)(h.Provider,{value:{list:n,setList:s},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"title",children:"Grocery List"}),Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsx)(d,{})]})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.76d550a4.chunk.js.map