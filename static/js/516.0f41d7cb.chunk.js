"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[516],{2683:function(e,t,s){s.d(t,{Z:function(){return i}});s(2791);var n=s.p+"static/media/loaders.d765ef7d60cb045d67a07083a92a045b.svg",r="isFetching_preloader_preloader__8O5uU",a=s(184),i=function(){return(0,a.jsxs)("div",{className:r,children:[" ",(0,a.jsx)("img",{src:n,alt:"Loading..."})," "]})}},956:function(e,t,s){s.d(t,{D:function(){return d}});var n=s(8683),r=s(5671),a=s(3144),i=s(9340),o=s(5716),u=s(6871),c=s(2791),l=s(8687),p=s(184),d=function(e){var t=function(t){(0,i.Z)(c,t);var s=(0,o.Z)(c);function c(){return(0,r.Z)(this,c),s.apply(this,arguments)}return(0,a.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(e,(0,n.Z)({},this.props)):(0,p.jsx)(u.Fg,{to:"/login"})}}]),c}(c.Component);return(0,l.$j)((function(e){return{isAuth:e.AuthPage.isAuth}}))(t)}},5230:function(e,t,s){s.r(t),s.d(t,{default:function(){return B}});var n=s(8683),r=s(5671),a=s(3144),i=s(9340),o=s(5716),u=s(2791),c="profile_wrapper__pKR4l",l="userInfo_wrapper__5oqn0",p="userInfo_thumb__WWAQV",d="userInfo_photo__WARB7",h="userInfo_description__LEs7q",f="userInfo_name__oLH51",m="userInfo_about__tc5lQ",_="userInfo_status__6LjNv",g="userInfo_input__zv7dV",x=s(8650),P=s(2683),j=s.p+"static/media/Baner.f616abefd5f5e2c10d65.jpg",v=s(885),N=s(184),I=function(e){var t=(0,u.useState)(!1),s=(0,v.Z)(t,2),n=s[0],r=s[1],a=(0,u.useState)(""),i=(0,v.Z)(a,2),o=i[0],c=i[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);return(0,N.jsx)("div",{children:n?(0,N.jsx)("input",{className:g,value:o,type:"text",onBlur:function(){r(!1),e.updateStatus(o)},onChange:function(e){c(e.currentTarget.value)},autoFocus:!0}):(0,N.jsx)("p",{className:_,onDoubleClick:function(){r(!0)},children:e.status})})},b=u.memo((function(e){return e.Profile?(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:l,children:(0,N.jsx)("img",{src:j,alt:"banner",width:"1200",height:"300"})}),(0,N.jsxs)("div",{className:p,children:[(0,N.jsx)("img",{className:d,src:null!=e.Profile.photos.large?e.Profile.photos.large:x,alt:"User",width:"260",height:"250"}),(0,N.jsxs)("div",{className:h,children:[(0,N.jsx)("h1",{className:f,children:e.Profile.fullName}),(0,N.jsxs)("p",{className:m,children:["User ID: ",e.Profile.userId]}),(0,N.jsx)(I,{status:e.status,updateStatus:e.updateStatus})]})]})]}):(0,N.jsx)(P.Z,{})})),w={wrapper:"post_wrapper__YYR7K",description:"post_description__kQRlz",photo:"post_photo__avwhg",data:"post_data__bZs4X",name:"post_name__G7Dyi",text:"post_text__WMs90",button:"post_button__TOd1M",likeCounter:"post_likeCounter__GIOsA"};var D=s.p+"static/media/likeHeart.87d7a326e9594150e1c8cdbc10a1020b.svg",C=s(403),k=u.memo((function(e){return(0,N.jsxs)("div",{className:w.wrapper,children:[(0,N.jsxs)("div",{className:w.description,children:[(0,N.jsx)("img",{className:w.photo,src:C,alt:"User",width:"40",height:"40"}),(0,N.jsxs)("div",{className:w.about,children:[(0,N.jsx)("h2",{className:w.name,children:e.name}),(0,N.jsx)("p",{className:w.data,children:e.time})]})]}),(0,N.jsx)("p",{className:w.text,children:e.message}),(0,N.jsxs)("button",{className:"".concat(w.button," button"),type:"button",children:["Like",(0,N.jsx)("span",{className:w.likeCounter,children:e.likeCounter}),(0,N.jsx)("img",{src:D,width:"25",height:"25",alt:"heart"})]})]})})),U="myPost_thumb__0IDgE",Z="myPost_button__3J50H",y="myPost_title__K3Muv",S=s(5705),T=s(7897),A=u.memo((function(e){var t=e.PostsData.map((function(e){return(0,N.jsx)(k,{id:e.id,name:e.name,message:e.message,likeCounter:e.likeCounter,time:e.time},e.id)}));return(0,N.jsxs)("div",{children:[(0,N.jsx)("h2",{className:y,children:"My posts"}),(0,N.jsx)(q,{NewPostText:e.NewPostText,onClick:e.onClick}),t]})})),q=function(e){return(0,N.jsx)(S.J9,{initialValues:{NewPostText:""},onSubmit:function(t,s){(0,s.setSubmitting)(!1),e.onClick(t.NewPostText)},validate:function(e){var t={};return e.NewPostText.length>=300&&(t.NewPostText="Your post is very long"),t},children:function(t){t.touched,t.errors;var s=t.isSubmitting;return(0,N.jsxs)(S.l0,{className:U,children:[(0,N.jsx)(S.gN,{component:T.C,as:"textarea",name:"NewPostText",placeholder:"Enter the text...",row:"3",required:!0,value:e.NewPostText}),(0,N.jsx)("button",{type:"submit",disabled:s,className:"".concat(Z," button"),children:"Send"})]})}})},R=A,F=s(6871),L=function(e){var t=(0,F.UO)(),s=parseInt(t.id);return s!==e.UserID&&s&&e.setUserID(s),(0,N.jsxs)("main",{className:"content",children:[(0,N.jsx)(b,{Profile:e.Profile,status:e.status,updateStatus:e.updateStatus}),(0,N.jsx)("div",{className:c,children:(0,N.jsx)(R,{PostsData:e.PostsData,NewPostText:e.NewPostText,onClick:e.addPost})})]})},M=s(6394),z=s(8687),E=s(956),O=s(7781),W=function(e){(0,i.Z)(s,e);var t=(0,o.Z)(s);function s(){var e;(0,r.Z)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.isFetching||e.props.isRequestsInProgress||(e.props.setUserID(t),e.props.getProfile(t),e.props.getStatus(t))},e}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props.UserID;e||(e=this.props.authorizedUserId,this.onPageChanged(e))}},{key:"componentDidUpdate",value:function(e,t,s){this.props.UserID===e.UserID||this.props.isFetching||this.props.toggleIsRequestsInProgress||this.onPageChanged(this.props.UserID)}},{key:"render",value:function(){return(0,N.jsxs)("div",{children:[this.props.isFetching||this.props.isRequestsInProgress?(0,N.jsx)(P.Z,{}):null,(0,N.jsx)(L,(0,n.Z)((0,n.Z)({},this.props),{},{onPageChanged:this.onPageChanged.bind(this)}))]})}}]),s}(u.Component),B=(0,O.qC)((0,z.$j)((function(e){return{Profile:e.ProfilePage.Profile,PostsData:e.ProfilePage.PostsData,NewPostText:e.ProfilePage.NewPostText,UserID:e.ProfilePage.UserID,isFetching:e.ProfilePage.isFetching,status:e.ProfilePage.status,authorizedUserId:e.AuthPage.UserID,isAuth:e.AuthPage.isAuth,isRequestsInProgress:e.ProfilePage.isRequestsInProgress}}),{addPost:M.q2,setUserID:M.uC,getProfile:M.aI,getStatus:M.xD,updateStatus:M.NN}),E.D)(W)},8650:function(e,t,s){e.exports=s.p+"static/media/customer_person_people_man.9fd756d218a4568b10c9.png"}}]);
//# sourceMappingURL=516.0f41d7cb.chunk.js.map