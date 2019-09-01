(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,n){e.exports=n(72)},64:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(64),n(117)),l=n(73),u=n(115),s=n(116),d=n(32),m=n(109),f=n(14),g=n(111),E=n(119),h=n(113),v=n(112),p=n(110),w=n(49),b=n.n(w),k=n(48),O=n.n(k),j=n(118),y=function(e){var t=Object(a.useState)(e),n=Object(f.a)(t,2),r=n[0],o=n[1];return[r,function(e){return o(e.target.value)},function(){return o("")}]},C=n(35),x=n(50),T=n(40),D=n.n(T),S=function(e,t){switch(t.type){case"ADD":return[].concat(Object(x.a)(e),[{id:D()(),task:t.task,completed:!1}]);case"DELETE":return e.filter(function(e){return e.id!==t.id});case"TOGGLE":return e.map(function(e){return e.id===t.id?Object(C.a)({},e,{completed:!e.completed}):e});case"EDIT":return e.map(function(e){return e.id===t.id?Object(C.a)({},e,{task:t.task}):e});default:return e}},I=function(e,t,n){var r=Object(a.useReducer)(n,JSON.parse(window.localStorage.getItem(e))||t),o=Object(f.a)(r,2),c=o[0],i=o[1];return Object(a.useEffect)(function(){return window.localStorage.setItem(e,JSON.stringify(c))},[c,e]),[c,i]},L=Object(a.createContext)(),W=Object(a.createContext)();function F(e){var t=e.children,n=I("todos",[],S),a=Object(f.a)(n,2),o=a[0],c=a[1];return r.a.createElement(L.Provider,{value:o},r.a.createElement(W.Provider,{value:c},t))}var N=n(46),G=n.n(N),J=n(47),M=n.n(J);function R(e){var t=e.initialValue,n=e.editMode,o=e.id,c=e.toggleEditMode,i=y(t||""),l=Object(f.a)(i,3),u=l[0],s=l[1],d=l[2],m=Object(a.useContext)(W);function g(){m({type:"EDIT",task:u,id:o}),c()}return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n?g():m({type:"ADD",task:u}),d()},style:n&&{marginLeft:"0.8rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(j.a,{fullWidth:!0,value:u,label:!n&&"New Task",onChange:s,style:{marginRight:"1rem"},autoFocus:n}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{onClick:g},r.a.createElement(G.a,null)),r.a.createElement(p.a,{onClick:c},r.a.createElement(M.a,null))))}var A=Object(a.memo)(function(e){var t=e.id,n=e.task,o=e.completed,c=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(f.a)(t,2),r=n[0],o=n[1];return[r,function(){return o(!r)}]}(),i=Object(f.a)(c,2),l=i[0],u=i[1],s=Object(a.useContext)(W);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{textDecoration:o&&"line-through",height:"64px"}},l?r.a.createElement(R,{editMode:!0,id:t,toggleEditMode:u,initialValue:n}):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{checked:o,tabIndex:-1,onClick:function(){return s({type:"TOGGLE",id:t})}}),r.a.createElement(v.a,null,n),r.a.createElement(h.a,null,r.a.createElement(p.a,{onClick:u},r.a.createElement(O.a,null)),r.a.createElement(p.a,{onClick:function(){return s({type:"DELETE",id:t})}},r.a.createElement(b.a,null))))))}),B=n(114);function P(){var e=Object(a.useContext)(L);return e.length<=0?null:r.a.createElement(l.a,null,r.a.createElement(m.a,null,e.map(function(t,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(A,Object.assign({key:t.id},t)),n<e.length-1&&r.a.createElement(B.a,null))})))}var V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(function(){return r.a.createElement(l.a,{style:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa",borderRadius:0},elevation:0},r.a.createElement(u.a,{color:"primary",position:"static",style:{height:"64px"}},r.a.createElement(s.a,null,r.a.createElement(d.a,{color:"inherit"},"Todos"))),r.a.createElement(i.a,{container:!0,justify:"center",style:{marginTop:"2rem"}},r.a.createElement(i.a,{item:!0,xs:11,sm:10,md:8,lg:6},r.a.createElement(F,null,r.a.createElement(l.a,{style:{margin:"1rem 0",padding:"0.5rem 1rem 1rem"}},r.a.createElement(R,null)),r.a.createElement(P,null)))))},null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/todo-hooks",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/todo-hooks","/service-worker.js");V?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Q(e)})}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.5a83e6d9.chunk.js.map