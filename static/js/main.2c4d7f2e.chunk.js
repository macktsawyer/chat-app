(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),s=n(17),i=n.n(s),r=(n(22),n(11)),o=n.n(r),u=n(15),l=n(9),d=(n(24),n(25),n(3)),j=function(e){var t=e.onClick,n=void 0===t?null:t,a=e.children,c=void 0===a?null:a;return Object(d.jsx)("button",{className:"button",onClick:n,children:c})},p=n(12),b=(n(27),n(28),n(8)),h=function(e){var t=e.user,n=void 0===t?null:t,c=e.db,s=void 0===c?null:c,i=Object(a.useState)(),r=Object(l.a)(i,2),o=r[0],u=r[1],j=n.uid,p=n.displayName,h=n.photoURL;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&s.collection("messages").add({text:o,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:j,displayName:p,photoURL:h}),u("")},children:[Object(d.jsx)("input",{value:o,onChange:function(e){u(e.target.value)},type:"text",name:"chat",className:"InputBox"}),Object(d.jsx)("button",{type:"submit",name:"submit",className:"SubmitButton",children:"Send"})]})})},f=n(36),v=(n(29),function(e){var t=e.createdAt,n=void 0===t?null:t,a=e.text,c=void 0===a?"":a,s=e.displayName,i=void 0===s?"":s,r=e.photoURL,o=void 0===r?"":r;return Object(d.jsxs)("div",{className:"messageStyle",children:[o?Object(d.jsx)("img",{src:o,alt:"Avatar",className:"avatarImage"}):null,i?Object(d.jsx)("p",{children:"".concat(i," - ")}):null,(null===n||void 0===n?void 0:n.seconds)?Object(d.jsx)("span",{className:"timeStamp",children:"".concat(Object(f.a)(new Date(1e3*n.seconds),new Date)," - ")}):null,Object(d.jsx)("p",{children:c})]})}),m=function(e){var t=e.user,n=void 0===t?null:t,c=e.db,s=void 0===c?null:c,i=Object(a.useState)([]),r=Object(l.a)(i,2),o=r[0],u=r[1];return Object(a.useEffect)((function(){if(s)return s.collection("messages").orderBy("createdAt").limit(100).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[s]),Object(d.jsx)("div",{className:"Window",children:Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)("div",{className:"ChatTitle",children:Object(d.jsx)("h1",{children:"Chat Room"})}),Object(d.jsx)("div",{className:"ChatWindow",children:Object(d.jsx)("ul",{className:"MessagesList",children:o.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(v,Object(p.a)({},e))},e.id)}))})}),Object(d.jsx)("div",{className:"InputDiv",children:n?Object(d.jsx)(h,{user:n,db:s,className:"input"}):Object(d.jsx)("div",{className:"loggedOutText",children:"'Need to log in to chat'"})})]})})};n(30),n(34);b.a.initializeApp({apiKey:"AIzaSyBP0k0xnRbw8KvqhLarf-X4kfS2ieJs7eA",authDomain:"chat-app-595f7.firebaseapp.com",projectId:"chat-app-595f7",storageBucket:"chat-app-595f7.appspot.com",messagingSenderId:"382137305552",appId:"1:382137305552:web:5a6aafd241e01c2f9091d5",measurementId:"G-K0XKN6NYWL"});var O=b.a.auth(),x=b.a.firestore();var g=function(){var e=Object(a.useState)((function(){return O.currentUser})),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(l.a)(s,2),r=i[0],p=i[1];Object(a.useEffect)((function(){return O.onAuthStateChanged((function(e){c(e||null),r&&p(!1)}))}),[r]);var h=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,O.useDeviceLanguage(),e.prev=2,e.next=5,O.signInWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r?"Loading...":Object(d.jsxs)("div",{className:"App",children:[n?Object(d.jsx)(j,{className:"signOutButton",onClick:f,children:"Sign Out"}):Object(d.jsx)(j,{onClick:h,children:"Sign In With Google"}),Object(d.jsx)(m,{user:n,db:x})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.2c4d7f2e.chunk.js.map