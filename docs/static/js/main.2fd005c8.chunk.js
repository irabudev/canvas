(this["webpackJsonpcanvas-sketch"]=this["webpackJsonpcanvas-sketch"]||[]).push([[0],[,function(e,t,a){e.exports={container:"style_container__36K-m",header:"style_header__17xw3",name:"style_name__35A3P",items:"style_items__29j0j",item:"style_item__3T0r_",footer:"style_footer__1wfJv",icon:"style_icon__3xXbR",button:"style_button__1P2MY"}},,,,,,function(e,t,a){e.exports={container:"style_container__38gpi"}},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(5),r=a(8),o=a(6),l=a(9),i={"Key Partnerships":[],"Key Activities":[],"Key Resources":[],"Value Propositions":[],"Customer Relationships":[],Channels:[],"Customer Segments":[],"Cost Structure":[],"Revenue Streams":[]},m=Object(c.createContext)("canvas"),h=function(e){var t=e.children,a=Object(c.useState)(localStorage.canvas?JSON.parse(decodeURIComponent(escape(atob(localStorage.canvas)))):i),s=Object(l.a)(a,2),h=s[0],v=s[1],u=function(e,t){var a,c=Object.assign({},h,Object(o.a)({},e,t(h[e])));v(c),a=c,localStorage.canvas=btoa(unescape(encodeURIComponent(JSON.stringify(a))))},w={state:h,getBlockActions:function(e){return{addItem:function(){var t=prompt("Enter new ".concat(e," item"));t&&t.replace(/ /g,"")&&u(e,(function(e){return[].concat(Object(r.a)(e),[t])}))},removeItem:function(t){window.confirm("Remove item?")&&u(e,(function(e){return e.filter((function(e,a){return a!==t}))}))}}}};return n.a.createElement(m.Provider,{value:w,children:t})},v=a(1),u=a.n(v),w=function(e){var t=e.Icon,a=e.name,c=e.items,s=e.actions;return n.a.createElement("div",{className:u.a.container},n.a.createElement("header",{className:u.a.header},n.a.createElement("span",{className:u.a.name},a),n.a.createElement(t,{className:u.a.icon})),n.a.createElement("ol",{className:u.a.items},c.map(function(e){return function(t,a){return n.a.createElement("li",{className:u.a.item,key:t,item:t,onClick:e.removeItem.bind(void 0,a)},t)}}(s))),n.a.createElement("footer",{className:u.a.footer},n.a.createElement("button",{className:u.a.button,onClick:s.addItem},"Add")))},p=function(e){var t=e.Icon,a=e.name,s=Object(c.useContext)(m),r=s.state,o=s.getBlockActions;return n.a.createElement(w,{Icon:t,name:a,items:r[a],actions:o(a)})},g=a(7),d=a.n(g),f=["Key Partnerships","Key Activities","Key Resources","Value Propositions","Customer Relationships","Channels","Customer Segments","Cost Structure","Revenue Streams"],E=[function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 32 32",width:"100",height:"100"},n.a.createElement("path",{d:"M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"}),n.a.createElement("path",{d:"M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M14.5 2h-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2h-4.5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5zM8 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM14 15h-12v-12h2v1.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v12z"}),n.a.createElement("path",{d:"M7 13.414l-3.207-3.707 0.914-0.914 2.293 1.793 4.293-3.793 0.914 0.914z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM8 9.356c1.812 0 3.535-0.481 5-1.327-0.228 2.788-2.393 4.971-5 4.971s-4.772-2.186-5-4.973c1.465 0.845 3.188 1.329 5 1.329zM4 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5zM10 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M11.8 1c-1.682 0-3.129 1.368-3.799 2.797-0.671-1.429-2.118-2.797-3.8-2.797-2.318 0-4.2 1.882-4.2 4.2 0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.050 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M6 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.38 3.602c1.56 0.846 2.62 2.498 2.62 4.398s-1.059 3.552-2.62 4.398c0.689-1.096 1.12-2.66 1.12-4.398s-0.431-3.302-1.12-4.398zM4.5 8c0 1.738 0.431 3.302 1.12 4.398-1.56-0.846-2.62-2.498-2.62-4.398s1.059-3.552 2.62-4.398c-0.689 1.096-1.12 2.66-1.12 4.398zM1.5 8c0 2.686 0.85 5.097 2.198 6.746-2.223-1.421-3.698-3.911-3.698-6.746s1.474-5.325 3.698-6.746c-1.348 1.649-2.198 4.060-2.198 6.746zM12.302 1.254c2.223 1.421 3.698 3.911 3.698 6.746s-1.474 5.325-3.698 6.746c1.348-1.649 2.198-4.060 2.198-6.746s-0.85-5.097-2.198-6.746z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M12 12.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"}),n.a.createElement("path",{d:"M5.112 12.427c0.864-0.565 1.939-0.994 3.122-1.256-0.235-0.278-0.449-0.588-0.633-0.922-0.475-0.863-0.726-1.813-0.726-2.748 0-1.344 0-2.614 0.478-3.653 0.464-1.008 1.299-1.633 2.488-1.867-0.264-1.195-0.968-1.98-2.841-1.98-3 0-3 2.015-3 4.5 0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h4.359c0.227-0.202 0.478-0.393 0.753-0.573z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M15.25 0h-6c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l7.439-7.439c0.292-0.292 0.53-0.868 0.53-1.28v-6c0-0.412-0.338-0.75-0.75-0.75zM11.5 6c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"}))},function(e){var t=e.className;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 16 16",width:"100",height:"100"},n.a.createElement("path",{d:"M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM7.5 14.5c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zM8 8v-2h2v-1h-2v-1h-1v1h-2v4h2v2h-2v1h2v1h1v-1h2l-0-4h-2zM7 8h-1v-2h1v2zM9 11h-1v-2h1v2z"}))}],M=function(e,t){return n.a.createElement(p,{name:e,Icon:E[t],key:e})},N=function(){return n.a.createElement("div",{className:d.a.container},f.map(M))};a(15);Object(s.render)(n.a.createElement(h,null,n.a.createElement(N,null)),document.querySelector(".app"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2fd005c8.chunk.js.map