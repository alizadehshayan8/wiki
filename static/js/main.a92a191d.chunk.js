(this.webpackJsonpwikipedia=this.webpackJsonpwikipedia||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),i=n.n(s),r=n(3),o=n(0),l=function(e){var t=e.items,n=Object(c.useState)(null),s=Object(r.a)(n,2),i=s[0],l=s[1],u=t.map((function(e,t){var n=t===i?"active":"";return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsxs)("div",{onClick:function(){return function(e){l(e)}(t)},className:"title ".concat(n),children:[Object(o.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(o.jsx)("div",{className:"content ".concat(n),children:Object(o.jsx)("p",{children:e.content})})]},e.title)}));return Object(o.jsx)("div",{className:"ui styled accordion",children:u})},u=n(7),d=n.n(u),j=n(17),h=n(18),b=n.n(h),f=function(){var e=Object(c.useState)("React"),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(r.a)(s,2),l=i[0],u=i[1];Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:n}});case 2:t=e.sent,c=t.data,u(c.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setTimeout((function(){n&&e()}),500);return function(){clearTimeout(t)}}),[n]);var h=l.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"right floated content",children:Object(o.jsx)("a",{href:"https://en.wikipedia.org?curid=".concat(e.pageid),className:"ui button",children:"Read More"})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"header",children:e.title}),Object(o.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"ui form",children:Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{children:"Enter Search Term"}),Object(o.jsx)("input",{value:n,onChange:function(e){a(e.target.value)},className:"input"})]})}),Object(o.jsx)("div",{className:"ui celled list",children:h})]})},m=function(e){var t=e.options,n=e.selected,a=e.onSelectedChange,s=e.label,i=Object(c.useState)(!1),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(c.useRef)();Object(c.useEffect)((function(){var e=function(e){j.current.contains(e.target)||d(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);var h=t.map((function(e){return e.value===n.value?null:Object(o.jsx)("div",{onClick:function(){return a(e)},className:"item",children:e.label},e.value)}));return Object(o.jsx)("div",{ref:j,className:"ui form",children:Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:s}),Object(o.jsxs)("div",{onClick:function(){return d(!u)},className:"ui selection dropdown ".concat(u?"visible active":""),children:[Object(o.jsx)("i",{className:"dropdown icon"}),Object(o.jsx)("div",{className:"text",children:n.label}),Object(o.jsx)("div",{className:"menu ".concat(u?"visible transition":""),children:h})]})]})})},p=function(e){var t=e.path,n=e.children,a=Object(c.useState)(window.location.path),s=Object(r.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var e=function(){o(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===t?n:null},v=function(e){var t=e.className,n=e.href,c=e.children;return Object(o.jsx)("a",{onClick:function(e){if(!e.metakey&&!e.ctrlkey){e.preventDefault(),window.history.pushState({},"",n);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},className:t,href:n,children:c})},O=function(){return Object(o.jsxs)("div",{className:" ui secondary pointing menu",children:[Object(o.jsx)(v,{href:"/",className:"item",children:"Accordion"}),Object(o.jsx)(v,{href:"/list",className:"item",children:"List"}),Object(o.jsx)(v,{href:"/dropdown",className:"item",children:"Dropdown"})]})},x=[{title:"What is hooks in React?",content:"Hooks are functions that let you \u201chook into\u201d React state and lifecycle features from function components. Hooks don't work inside classes \u2014 they let you use React without classes. ... You can also create your own Hooks to reuse stateful behavior between different components."},{title:"Why hooks are used in React? ",content:"Why hooks are used in React? What are Hooks? \u201cHooks are a new addition to React in version 16.8 that allows you use state and other React features, like lifecycle methods, without writing a class."},{title:"How hooks work in React?",content:"A Hook is a react function that lets you use state and react features from a function based component."}],w=[{label:"the color is Red",value:"red"},{label:"the color is Green",value:"green"},{label:"the color is Blue",value:"blue"}],k=function(){var e=Object(c.useState)(w[0]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{}),Object(o.jsx)(p,{path:"/",children:Object(o.jsx)(l,{items:x})}),Object(o.jsx)(p,{path:"/list",children:Object(o.jsx)(f,{})}),Object(o.jsx)(p,{path:"/dropdown",children:Object(o.jsx)(m,{label:"select a color",options:w,selected:n,onSelectedChange:a})})]})};i.a.render(Object(o.jsx)(k,{}),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a92a191d.chunk.js.map