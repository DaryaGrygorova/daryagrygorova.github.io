"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[117],{1117:function(s,e,t){t.r(e),t.d(e,{default:function(){return H}});var n=t(2791),a=t(8687),i="contact_wrapper__YmhYJ",c="contact_photo__iKxsi",r="contact_name__yDdZR",o=t(3504),l=t(184),u=n.memo((function(s){return(0,l.jsxs)(o.OL,{className:i,to:"/dialogs/".concat(s.id),children:[(0,l.jsx)("img",{className:c,src:"https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6",alt:"User",with:"40",height:"40"}),(0,l.jsx)("h2",{className:r,children:s.name})]})})),h="dialogs_container__o3HA8",m="dialogs_title__FblDW",_="dialogs_contacts__gMmsv",d="dialogs_line__uVurV",p="dialogs_wrapper__6o8eb",g=t(5862),x="chat_container__n5xRy",j="chat_title__jXa3a",f="chat_wrapper__-CFzi",w="chat_thumb__Fufoc",v="chat_photo__t-ojA",N="chat_name__OZct1",M="chat_button__7HcnG",y="message_wrapper__c54iH",k="message_description__+nUjN",b="message_photo__IJlN1",C="message_name__RMtR5",D="message_text__V2R2o",T="message_data__gfFZu",Z=n.memo((function(s){return(0,l.jsxs)("div",{className:y,children:[(0,l.jsxs)("div",{className:k,children:[(0,l.jsx)("img",{className:b,src:"https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6",alt:"User",width:"40",height:"40"}),(0,l.jsx)("h2",{className:C,children:s.name})]}),(0,l.jsx)("p",{className:D,children:s.message}),(0,l.jsx)("p",{className:T,children:s.time})]})})),A=t(5705),F=t(7897),R=function(s){return(0,l.jsx)(A.J9,{initialValues:{newMessText:""},onSubmit:function(e,t){(0,t.setSubmitting)(!1),s.onClick(e.newMessText)},validate:function(s){var e={};return s.newMessText.length>=300&&(e.newMessText="Your message is very long"),e},children:function(e){e.touched,e.errors;var t=e.isSubmitting;return(0,l.jsxs)(A.l0,{className:w,children:[(0,l.jsx)(A.gN,{component:F.C,as:"textarea",name:"newMessText",rows:"1",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",required:!0,value:s.newMessText}),(0,l.jsx)("button",{type:"submit",disabled:t,className:"".concat(M," button"),children:"Send"})]})}})},P=function(s){var e=s.MessData.map((function(s){return(0,l.jsx)(Z,{id:s.id,message:s.message,name:s.name,time:s.time},s.id)}));return(0,l.jsxs)("div",{className:x,children:[(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)("img",{className:v,src:"https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6",alt:"User",width:"40",height:"40"}),(0,l.jsx)("h2",{className:N,children:"\u0418\u041c\u042f \u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u0422\u0415\u041b\u042f"})]}),(0,l.jsx)("div",{className:f,children:e}),(0,l.jsx)(R,{newMessText:s.newMessText,onClick:s.onClick})]})},S=(0,a.$j)((function(s){return{MessData:s.MessagePage.MessData,newMessText:s.MessagePage.newMessText}}),(function(s){return{onClick:function(e){return s((0,g.y)(e))}}}))(P),U=function(s){var e=s.ContactsData.map((function(s){return(0,l.jsx)(u,{id:s.id,name:s.name},s.id)}));return(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("main",{className:h,children:[(0,l.jsxs)("div",{className:_,children:[(0,l.jsx)("h1",{className:m,children:"Dialogs"}),e]}),(0,l.jsx)("span",{className:d}),(0,l.jsx)("div",{className:p,children:(0,l.jsx)(S,{})})]})})},V=t(956),H=(0,t(7781).qC)((0,a.$j)((function(s){return{ContactsData:s.MessagePage.ContactsData}})),V.D)(U)},956:function(s,e,t){t.d(e,{D:function(){return m}});var n=t(8683),a=t(5671),i=t(3144),c=t(9340),r=t(5716),o=t(6871),l=t(2791),u=t(8687),h=t(184),m=function(s){var e=function(e){(0,c.Z)(l,e);var t=(0,r.Z)(l);function l(){return(0,a.Z)(this,l),t.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(s,(0,n.Z)({},this.props)):(0,h.jsx)(o.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)((function(s){return{isAuth:s.AuthPage.isAuth}}))(e)}}}]);
//# sourceMappingURL=117.e9403475.chunk.js.map