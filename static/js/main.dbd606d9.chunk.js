(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{14:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(16),i=c.n(n),r=(c(37),c(14),c(5)),l=(c(38),{chats:[{chatTypeId:1,message:"Help me",userType:"user",createdAt:"2020-11-12T06:30:16.446574+00:00",conversationId:60},{chatTypeId:1,message:"How but, I don't know?",userType:"admin",createdAt:"2020-11-12T06:30:42.539175+00:00",conversationId:60},{chatTypeId:1,message:"I'll explain",userType:"user",createdAt:"2020-11-12T06:32:27.783936+00:00",conversationId:60}]}),d={conversations:[{id:61,queryTypeId:4,queryStatusId:1,userId:112,user:{firstName:"Samyak",lastName:"C",profilePic:"https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"},chats:[{chatTypeId:1,message:"Hello",createdAt:"2020-11-12T06:31:54.8459+00:00"}],updatedAt:"2020-11-12T06:31:54.8459+00:00"},{id:60,queryTypeId:1,queryStatusId:1,userId:112,user:{firstName:"Samyak",lastName:"C",profilePic:"https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"},chats:[{chatTypeId:1,message:"I'll explain",createdAt:"2020-11-12T06:32:27.783936+00:00"}],updatedAt:"2020-11-12T06:30:42.573062+00:00"},{id:58,queryTypeId:2,queryStatusId:1,userId:114,user:{firstName:"Hemant",lastName:"S",profilePic:"https://firebasestorage.googleapis.com/v0/b/xbsl-dev.appspot.com/o/baseline_account_circle_white_48dp.png?alt=media&token=3334f793-68f0-4722-afef-4c421507195d"},chats:[{chatTypeId:1,message:"Oh yes, please tell me",createdAt:"2020-11-12T06:28:44.633933+00:00"}],updatedAt:"2020-11-12T06:28:44.685281+00:00"}]},j=c(0);var o=function(e){var t=Object(s.useState)(1),c=Object(r.a)(t,2),a=c[0],n=c[1],i=e.chat.user,l=i.firstName,d=i.profilePic,o=e.chat.chats[0].message,b=e.chat.updatedAt;return console.log(a),Object(j.jsxs)("div",{className:"chat",onClick:function(){return n(5)},children:[Object(j.jsx)("img",{src:d,className:"profile-pic",style:{width:"65px",height:"auto"},alt:"/"}),Object(j.jsxs)("div",{className:"chat-data",children:[Object(j.jsx)("div",{className:"data",style:{fontSize:"0.85em"},children:l}),Object(j.jsx)("div",{className:"data",children:o}),Object(j.jsx)("div",{className:"data",style:{fontSize:"0.7em"},children:function(){var e=new Date(b),t=String(e.getDate()).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear(),a=e.toString().split(" ").slice(4,5).join("");return e=t+"/"+c+"/"+s+" "+(a=a.slice(0,a.lastIndexOf(":")))}()})]})]})};var b=function(){var e=Object(s.useState)(d.conversations),t=Object(r.a)(e,2),c=t[0],a=(t[1],[null]),n=a[1],i=function(e){n(e)};return Object(j.jsx)("div",{className:"ContactConatiner",children:c.map((function(e){return Object(j.jsx)(o,{chat:e,chatsHandler:i},e.id)}))})},u=c(17),x=c.n(u),m=c(19),h=c.n(m),p=c(20),O=c.n(p),v=c(21),f=c.n(v),g=c(22),N=c.n(g),y=c(23),T=c.n(y),S=c(24),I=c.n(S),C=c(25),A=c.n(C),w=(c(40),function(){return Object(j.jsx)("div",{className:"LogoContainer",children:Object(j.jsxs)("div",{className:"side-bar",children:[Object(j.jsx)("div",{className:"icon icon1",children:Object(j.jsx)(x.a,{})}),Object(j.jsx)("div",{className:"icon con2",children:Object(j.jsx)(h.a,{})}),Object(j.jsx)("div",{className:"icon icon3",children:Object(j.jsx)(O.a,{})}),Object(j.jsx)("div",{className:"icon icon4",children:Object(j.jsx)(f.a,{})}),Object(j.jsx)("div",{className:"icon icon5",children:Object(j.jsx)(N.a,{})}),Object(j.jsx)("div",{className:"icon icon6",children:Object(j.jsx)(T.a,{})}),Object(j.jsx)("div",{className:"icon icon7",children:Object(j.jsx)(I.a,{})}),Object(j.jsx)("div",{className:"icon icon8",children:Object(j.jsx)(A.a,{})})]})})}),_=(c(46),c(27)),L=c.n(_),k=c(26),P=c.n(k),q=function(e){return Object(j.jsxs)("div",{className:"selector",children:[Object(j.jsxs)("div",{className:"selector-box",children:[Object(j.jsx)("span",{children:"Select"}),Object(j.jsxs)("div",{className:"query-type",children:["Select"," "+e.selectType]}),Object(j.jsx)("div",{className:"options-icon",children:Object(j.jsx)(L.a,{})})]}),Object(j.jsxs)("div",{className:"box-message",style:{marginLeft:"0.3rem",paddingTop:"4px",fontSize:"10px"},children:["Please select your"," "+e.selectType]})]})},F=function(){return Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsx)(q,{selectType:"Query type"}),Object(j.jsx)(q,{selectType:"Module"}),Object(j.jsx)(q,{selectType:"Sub Module"}),Object(j.jsx)(q,{selectType:"Chapter"}),Object(j.jsx)("hr",{className:"HR"}),Object(j.jsxs)("div",{className:"lower-sec",children:[Object(j.jsx)("div",{className:"cancel",children:"CANCEL"}),Object(j.jsxs)("div",{className:"apply-button",children:[Object(j.jsx)(P.a,{}),Object(j.jsx)("div",{className:"apply-text",children:"APPLY"})]})]})]})},H=c(28),D=c.n(H),M=c(29),B=c.n(M);c(47);var z=function(){return Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsxs)("div",{className:"nav-barLeft",children:[Object(j.jsx)("div",{className:"menu-icon",children:Object(j.jsx)(D.a,{})}),Object(j.jsx)("div",{className:"XBSL",children:"XBSL"})]}),Object(j.jsx)("div",{className:"nav-barRight",children:Object(j.jsxs)("div",{className:"notification",children:[Object(j.jsx)("div",{className:"notification-icon",children:Object(j.jsx)(B.a,{})}),Object(j.jsx)("div",{className:"notfication-count",children:"1"})]})})]})};var E=function(e){var t=e.chatline,c=t.message,s=t.createdAt;console.log(e.chatline.userType+" "+c);var a=0;return"admin"===e.chatline.userType&&(a=44),Object(j.jsx)("div",{className:"message-container",children:Object(j.jsxs)("div",{className:"message-box",style:{marginLeft:"".concat(a,"vw")},children:[Object(j.jsx)("div",{className:"text",children:c}),Object(j.jsx)("div",{className:"date-time",children:function(){var e=new Date(s),t=String(e.getDate()).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear(),n=e.toString().split(" ").slice(4,5).join("");return e=t+"/"+c+"/"+a+" "+(n=n.slice(0,n.lastIndexOf(":")))}()})]})})},R=c(57),Y=c(30),J=c.n(Y),X=c(31),Q=c.n(X),G=c(13),K=c.n(G);var U=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1];return console.log(c),Object(j.jsxs)("div",{className:"input-box",children:[Object(j.jsx)(J.a,{}),Object(j.jsx)("div",{className:"input-container",children:Object(j.jsx)("input",{className:"input-text",type:"text",placeholder:"Enter your message here",value:c,onChange:function(e){a(e.target.value)}})}),Object(j.jsx)(Q.a,{}),Object(j.jsx)("div",{style:{color:"#d4d0d0",paddingRight:"5px"},children:"|"}),Object(j.jsx)("div",{className:"sendColor",children:c?Object(j.jsx)(K.a,{style:{color:"#0000fff"}}):Object(j.jsx)(K.a,{})})]})};var V=function(){var e=l.chats;return console.log(e),Object(j.jsxs)("div",{className:"chat-screen",children:[e.map((function(e){return Object(j.jsx)(E,{chatline:e},Object(R.a)())})),Object(j.jsx)(U,{})]})};var W=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(F,{}),Object(j.jsx)(w,{}),Object(j.jsx)(b,{className:"ContactConatiner"}),Object(j.jsx)(V,{}),Object(j.jsx)(z,{})]})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root")),Z()}},[[49,1,2]]]);
//# sourceMappingURL=main.dbd606d9.chunk.js.map