"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[378],{7378:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var i=n(3073),a=(n(2791),{dialogs:"Dialogs_dialogs__oe96H",dialogsItems:"Dialogs_dialogsItems__zeEWD",activeLink:"Dialogs_activeLink__mpzNi",messages:"Dialogs_messages__Cg2l+"}),t=n(1523),r=n(184),o=function(e){var s="/dialogs/"+e.id;return(0,r.jsx)("div",{className:a.dialog,children:(0,r.jsx)(t.OL,{to:s,activeClassName:a.activeLink,children:e.name})})},d=function(e){return(0,r.jsx)("div",{className:a.message,children:e.message})},u=n(6139),l=n(704),c=n(1117),g=n(6763),m=(0,g.D)(50),f=(0,l.Z)({form:"dialogAddMessageForm"})((function(e){return(0,r.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{component:c.gx,name:"newMessageBody",validate:[g.C,m],placeholder:"Enter your message"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{children:"Send"})})]})})),h=n(8687),v=n(7781),j=n(2932),x=(0,v.qC)((0,h.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessageBody:function(s){e((0,i.X)(s))}}})),j.D)((function(e){var s=e.dialogsPage.dialogs.map((function(e){return(0,r.jsx)(o,{id:e.id,name:e.name},e.id)})),n=e.dialogsPage.messages.map((function(e){return(0,r.jsx)(d,{message:e.message},e.id)}));return(0,r.jsxs)("div",{className:a.dialogs,children:[(0,r.jsx)("div",{className:a.dialogsItems,children:s}),(0,r.jsx)("div",{className:a.messages,children:(0,r.jsx)("div",{children:n})}),(0,r.jsx)(f,{onSubmit:function(s){e.sendMessageBody(s.newMessageBody)}})]})}))},2932:function(e,s,n){n.d(s,{D:function(){return h}});var i=n(8683),a=n(5987),t=n(5671),r=n(3144),o=n(136),d=n(5716),u=n(2791),l=n(9271),c=n(8687),g=n(184),m=["isAuth"],f=function(e){return{isAuth:e.auth.isAuth}};function h(e){var s=function(s){(0,o.Z)(u,s);var n=(0,d.Z)(u);function u(){return(0,t.Z)(this,u),n.apply(this,arguments)}return(0,r.Z)(u,[{key:"render",value:function(){var s=this.props,n=s.isAuth,t=(0,a.Z)(s,m);return n?(0,g.jsx)(e,(0,i.Z)({},t)):(0,g.jsx)(l.l_,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(f)(s)}}}]);
//# sourceMappingURL=378.3d299d94.chunk.js.map