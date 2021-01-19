(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[16],{1048:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),i=t(328),o=(t(481),l.a.forwardRef((function(e,a){var t=l.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return l.a.createElement(i.VelocityComponent,Object.assign({ref:a},e),t)})));o.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var c=l.a.memo(o);t.d(a,"a",(function(){return c}))},1051:function(e,a,t){"use strict";var n=t(85),r=t(167),l=t(979),i=t(11),o=t(0),c=t.n(o),s=t(1030),d=t(9);var m=function(e){var a=Object(d.c)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:a},e.header))},u=t(45),p=t(1047),b=t(1045);var f=function(e){var a=Object(d.c)((function(e){return e.fuse.settings.mainThemeDark})),t=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:a},c.a.createElement("div",{className:Object(i.a)(t.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:t.sidebarContent,enable:e.innerScroll},e.content))};var h=c.a.forwardRef((function(e,a){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),r=n[0],l=n[1],s=e.classes;Object(o.useImperativeHandle)(a,(function(){return{toggleSidebar:d}}));var d=function(){l(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{lgUp:"permanent"===e.variant},c.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(f,e))),"permanent"===e.variant&&c.a.createElement(b.a,{mdDown:!0},c.a.createElement(p.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(f,e))))})),g=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,a){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),l=Object(o.useRef)(null),s=g(e),d=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(a,(function(){return{rootRef:l,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(i.a)(s.root,e.innerScroll&&s.innerScroll),ref:l},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},u&&c.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:t,rootRef:l}),c.a.createElement("div",{className:Object(i.a)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(m,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(i.a)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&c.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:l})))}));v.defaultProps={};var E=c.a.memo(v);t.d(a,"a",(function(){return E}))},1109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1051),i=t(9),o=t(43),c=t(1048),s=t(1043),d=t(1025),m=t(972),u=t(249),p=t(197),b=t(12),f=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.user.searchText}));return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.a,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32"},"burst_mode")),r.a.createElement(c.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(p.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Users"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(c.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement(u.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{color:"action"},"search"),r.a.createElement(m.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(a){e(b.J(a.target.value))}})))),r.a.createElement(c.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(s.a,{component:o.a,to:"/profile/new",className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New User"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},h=t(45),g=t(167),v=t(14),E=t(1093),x=t(1094),S=t(1091),j=t(1092),w=t(1081),O=t(1110),k=t(76),N=t(329),y=t(11),C=t(1090),P=t(1024),R=t(461),H=t(975),I=t(1026),T=t(1042),B=t(1036),D=t(1033),U=t(1115),W=t(337),V=[{id:"image",align:"left",disablePadding:!0,label:"Avatar",sort:!0},{id:"name",align:"left",disablePadding:!1,label:"User name",sort:!0},{id:"role",align:"left",disablePadding:!1,label:"Role",sort:!0},{id:"email",align:"left",disablePadding:!1,label:"Email",sort:!0},{id:"phoneNumber",align:"left",disablePadding:!1,label:"Phone number",sort:!0},{id:"active",align:"left",disablePadding:!1,label:"Active",sort:!0}],z=function(e){var a=e.numSelected,t=e.order,l=e.onSelectAllClick,i=e.onRequestSort,o=e.rowCount,c=e.handleRemoveUsers,s=Object(W.a)(),m=Object(n.useState)(null),u=Object(h.a)(m,2),p=u[0],b=u[1],f=function(){b(null)};return r.a.createElement(C.a,null,r.a.createElement(S.a,{className:"h-64"},r.a.createElement(j.a,{padding:"none",className:"relative w-64 text-center"},r.a.createElement(w.a,{indeterminate:a>0&&a<o,checked:a===o,onChange:l}),a>0&&r.a.createElement("div",{className:Object(y.a)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",s.actionsButtonWrapper)},r.a.createElement(P.a,{"aria-owns":p?"selectedUsersMenu":null,"aria-haspopup":"true",onClick:function(e){b(e.currentTarget)}},r.a.createElement(d.a,null,"more_horiz")),r.a.createElement(R.a,{id:"selectedUsersMenu",anchorEl:p,open:Boolean(p),onClose:f},r.a.createElement(H.a,null,r.a.createElement(I.a,{onClick:function(){f(),c()}},r.a.createElement(T.a,{className:"min-w-40"},r.a.createElement(d.a,null,"delete")),r.a.createElement(B.a,{primary:"Remove"})))))),V.map((function(e){return r.a.createElement(j.a,{key:e.id,align:e.align,padding:e.disablePadding?"none":"default",sortDirection:t.id===e.id&&t.direction},e.sort&&r.a.createElement(D.a,{title:"Sort",placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(U.a,{active:t.id===e.id,direction:t.direction,onClick:(a=e.id,function(e){i(e,a)})},e.label)));var a}))))},L=Object(k.i)((function(e){var a=Object(i.b)(),t=Object(i.c)((function(e){return e.user.users})),l=Object(i.c)((function(e){return e.user.users.searchText})),o=Object(n.useState)([]),c=Object(h.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(t.data),p=Object(h.a)(u,2),f=p[0],k=p[1],y=Object(n.useState)(0),C=Object(h.a)(y,2),P=C[0],R=C[1],H=Object(n.useState)(10),I=Object(h.a)(H,2),T=I[0],B=I[1],D=Object(n.useState)({direction:"asc",id:null}),U=Object(h.a)(D,2),W=U[0],V=U[1];Object(n.useEffect)((function(){t.data.length>0&&k(t.data)}),[t.data]),Object(n.useEffect)((function(){a(b.v())}),[a]),Object(n.useEffect)((function(){0!==l.length?(k(f.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))),R(0)):k(f)}),[f,l]),Object(n.useEffect)((function(){t.type===b.i&&a(b.v())}),[t,a]);var L=Object(n.useCallback)((function(e){var a=Object(N.b)(e,s);m(a)}),[m,s]);return r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(g.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(E.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},r.a.createElement(z,{numSelected:s.length,order:W,onSelectAllClick:function(e){e.target.checked?m(f.map((function(e){return e.id}))):m([])},onRequestSort:function(e,a){var t=a,n="desc";W.id===a&&"desc"===W.direction&&(n="asc"),V({direction:n,id:t})},rowCount:f.length,handleRemoveUsers:function(){a(b.D(s))}}),r.a.createElement(x.a,null,v.a.orderBy(f,[function(e){switch(W.id){case"displayName":return e.displayName;default:return e[W.id]}}],[W.direction]).slice(P*T,P*T+T).map((function(a){var t=-1!==s.indexOf(a.id);return r.a.createElement(S.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t,onClick:function(t){return n=a,void e.history.push("/profile/".concat(n.id));var n}},r.a.createElement(j.a,{className:"w-64 text-center",padding:"none"},r.a.createElement(w.a,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return L(e,a.id)}})),r.a.createElement(j.a,{className:"w-52",component:"th",scope:"row",padding:"none"},a.photoURL?r.a.createElement("img",{className:"w-full block rounded",src:a.photoURL,alt:a.displayName}):r.a.createElement("img",{className:"w-full block rounded circle",src:"assets/images/avatars/profile.jpg",alt:a.displayName})),r.a.createElement(j.a,{component:"th",scope:"row"},a.displayName),r.a.createElement(j.a,{component:"th",scope:"row"},a.role.join(",")),r.a.createElement(j.a,{className:"truncate",component:"th",scope:"row"},a.email),r.a.createElement(j.a,{component:"th",scope:"row"},a.phoneNumber),r.a.createElement(j.a,{component:"th",scope:"row"},a.active?r.a.createElement(d.a,{className:"text-green text-20"},"check_circle"):r.a.createElement(d.a,{className:"text-red text-20"},"remove_circle")))}))))),r.a.createElement(O.a,{className:"overflow-hidden",component:"div",count:f.length,rowsPerPage:T,page:P,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,a){R(a)},onChangeRowsPerPage:function(e){B(e.target.value)}}))}));a.default=function(e){return r.a.createElement(l.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(f,null),content:r.a.createElement(L,null),innerScroll:!0})}}}]);