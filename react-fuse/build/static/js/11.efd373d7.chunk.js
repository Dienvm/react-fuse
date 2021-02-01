(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[11],{899:function(e,t,r){"use strict";var a=r(3),n=r(0),o=r.n(n),i=r(291),l=(r(427),o.a.forwardRef((function(e,t){var r=o.a.cloneElement(e.children,{style:Object(a.a)(Object(a.a)({},e.children.style),{},{visibility:"hidden"})});return o.a.createElement(i.VelocityComponent,Object.assign({ref:t},e),r)})));l.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var c=o.a.memo(l);r.d(t,"a",(function(){return c}))},903:function(e,t,r){"use strict";var a=r(69),n=r(152),o=r(878),i=r(11),l=r(0),c=r.n(l),s=r(881),p=r(9);var d=function(e){var t=Object(p.c)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},u=r(39),m=r(898),f=r(896);var b=function(e){var t=Object(p.c)((function(e){return e.fuse.settings.mainThemeDark})),r=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(i.a)(r.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(n.a,{className:r.sidebarContent,enable:e.innerScroll},e.content))};var g=c.a.forwardRef((function(e,t){var r=Object(l.useState)(!1),a=Object(u.a)(r,2),n=a[0],o=a[1],s=e.classes;Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:p}}));var p=function(){o(!n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{lgUp:"permanent"===e.variant},c.a.createElement(m.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return p()},classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(b,e))),"permanent"===e.variant&&c.a.createElement(f.a,{mdDown:!0},c.a.createElement(m.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(b,e))))})),h=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(a.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(a.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),y=c.a.forwardRef((function(e,t){var r=Object(l.useRef)(null),a=Object(l.useRef)(null),o=Object(l.useRef)(null),s=h(e),p=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(i.a)(s.root,e.innerScroll&&s.innerScroll),ref:o},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},u&&c.a.createElement(g,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:o}),c.a.createElement("div",{className:Object(i.a)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",p&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(d,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(i.a)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),p&&c.a.createElement(g,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o})))}));y.defaultProps={};var v=c.a.memo(y);r.d(t,"a",(function(){return v}))},917:function(e,t,r){"use strict";var a=r(87),n=r(1),o=(r(2),r(870));var i=function(e,t){return t?Object(o.a)(e,t,{clone:!1}):e};var l=function(e){var t=function(t){var r=e(t);return t.css?Object(n.a)({},i(r,e(Object(n.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(a.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?i(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},s=r(21),p=r(153),d={xs:0,sm:600,md:960,lg:1280,xl:1920},u={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(d[e],"px)")}};function m(e,t,r){if(Array.isArray(t)){var a=e.theme.breakpoints||u;return t.reduce((function(e,n,o){return e[a.up(a.keys[o])]=r(t[o]),e}),{})}if("object"===Object(p.a)(t)){var n=e.theme.breakpoints||u;return Object.keys(t).reduce((function(e,a){return e[n.up(a)]=r(t[a]),e}),{})}return r(t)}function f(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var b=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,n=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=f(e.theme,n)||{};return m(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=f(i,e)||e,o&&(t=o(t))),!1===a?t:Object(s.a)({},a,t)}))};return i.propTypes={},i.filterProps=[t],i};function g(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var h=c(b({prop:"border",themeKey:"borders",transform:g}),b({prop:"borderTop",themeKey:"borders",transform:g}),b({prop:"borderRight",themeKey:"borders",transform:g}),b({prop:"borderBottom",themeKey:"borders",transform:g}),b({prop:"borderLeft",themeKey:"borders",transform:g}),b({prop:"borderColor",themeKey:"palette"}),b({prop:"borderRadius",themeKey:"shape"})),y=c(b({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),b({prop:"display"}),b({prop:"overflow"}),b({prop:"textOverflow"}),b({prop:"visibility"}),b({prop:"whiteSpace"})),v=c(b({prop:"flexBasis"}),b({prop:"flexDirection"}),b({prop:"flexWrap"}),b({prop:"justifyContent"}),b({prop:"alignItems"}),b({prop:"alignContent"}),b({prop:"order"}),b({prop:"flex"}),b({prop:"flexGrow"}),b({prop:"flexShrink"}),b({prop:"alignSelf"}),b({prop:"justifyItems"}),b({prop:"justifySelf"})),x=c(b({prop:"gridGap"}),b({prop:"gridColumnGap"}),b({prop:"gridRowGap"}),b({prop:"gridColumn"}),b({prop:"gridRow"}),b({prop:"gridAutoFlow"}),b({prop:"gridAutoColumns"}),b({prop:"gridAutoRows"}),b({prop:"gridTemplateColumns"}),b({prop:"gridTemplateRows"}),b({prop:"gridTemplateAreas"}),b({prop:"gridArea"})),O=c(b({prop:"position"}),b({prop:"zIndex",themeKey:"zIndex"}),b({prop:"top"}),b({prop:"right"}),b({prop:"bottom"}),b({prop:"left"})),j=c(b({prop:"color",themeKey:"palette"}),b({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),E=b({prop:"boxShadow",themeKey:"shadows"});function S(e){return e<=1?"".concat(100*e,"%"):e}var w=b({prop:"width",transform:S}),k=b({prop:"maxWidth",transform:S}),C=b({prop:"minWidth",transform:S}),N=b({prop:"height",transform:S}),P=b({prop:"maxHeight",transform:S}),R=b({prop:"minHeight",transform:S}),T=(b({prop:"size",cssProperty:"width",transform:S}),b({prop:"size",cssProperty:"height",transform:S}),c(w,k,C,N,P,R,b({prop:"boxSizing"}))),I=r(181);var A={m:"margin",p:"padding"},B={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},H={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},K=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){if(e.length>2){if(!H[e])return[e];e=H[e]}var t=e.split(""),r=Object(I.a)(t,2),a=r[0],n=r[1],o=A[a],i=B[n]||"";return Array.isArray(i)?i.map((function(e){return o+e})):[o+i]})),D=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function W(e,t){return function(r){return e.reduce((function(e,a){return e[a]=function(e,t){if("string"===typeof t)return t;var r=e(Math.abs(t));return t>=0?r:"number"===typeof r?-r:"-".concat(r)}(t,r),e}),{})}}function z(e){var t=function(e){var t=e.spacing||8;return"number"===typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"===typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(r){if(-1===D.indexOf(r))return null;var a=W(K(r),t),n=e[r];return m(e,n,a)})).reduce(i,{})}z.propTypes={},z.filterProps=D;var L=z,M=c(b({prop:"fontFamily",themeKey:"typography"}),b({prop:"fontSize",themeKey:"typography"}),b({prop:"fontStyle",themeKey:"typography"}),b({prop:"fontWeight",themeKey:"typography"}),b({prop:"letterSpacing"}),b({prop:"lineHeight"}),b({prop:"textAlign"})),V=r(4),F=r(0),G=r.n(F);function X(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=X(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var Y=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=X(e))&&(a&&(a+=" "),a+=t);return a},_=r(101),q=r.n(_),J=r(837);function U(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}var Q=r(128),$=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.name,o=Object(V.a)(r,["name"]);var i,l=a,c="function"===typeof t?function(e){return{root:function(r){return t(Object(n.a)({theme:e},r))}}}:{root:t},s=Object(J.a)(c,Object(n.a)({Component:e,name:a||e.displayName,classNamePrefix:l},o));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=G.a.forwardRef((function(t,r){var a=t.children,o=t.className,l=t.clone,c=t.component,p=Object(V.a)(t,["children","className","clone","component"]),d=s(t),u=Y(d.root,o),m=p;if(i&&(m=U(m,i)),l)return G.a.cloneElement(a,Object(n.a)({className:Y(a.props.className,u)},m));if("function"===typeof a)return a(Object(n.a)({className:u},m));var f=c||e;return G.a.createElement(f,Object(n.a)({ref:r,className:u},m),a)}));return q()(p,e),p}}(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:Q.a},r))}},Z=l(c(h,y,v,x,O,j,E,T,L,M)),ee=$("div")(Z,{name:"MuiBox"});t.a=ee},965:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(903),i=r(899),l=r(917),c=r(875),s=r(179),p=r(224),d=r(823),u=r(9),m=r(901),f=r.n(m),b=r(12),g=Object(a.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.order.orders.searchText})),r=Object(a.useCallback)((function(t){e(b.I(t))}),[]);return n.a.createElement(l.a,{className:"flex flex-1 w-full items-center justify-between"},n.a.createElement(l.a,{className:"flex items-center"},n.a.createElement(i.a,{animation:"transition.expandIn",delay:300},n.a.createElement(c.a,{className:"text-32"},"add_shopping_cart")),n.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(s.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Orders"))),n.a.createElement(l.a,{className:"flex flex-1 items-center justify-center px-12"},n.a.createElement(i.a,{animation:"transition.slideDownIn",delay:300},n.a.createElement(p.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},n.a.createElement(c.a,{color:"action"},"search"),n.a.createElement(d.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return r(e)}})))))}),f.a),h=r(39),y=r(152),v=r(27),x=r(14),O=r(956),j=r(967),E=r(74),S=r(936),w=r(874),k=r(893),C=r(887),N=r(404),P=r(876),R=r(826),T=r(954),I=r(952),A=r(953),B=r(972),H=r(884),K=r(8),D=r(11),W=[{id:"orderId",align:"left",disablePadding:!1,label:"OrderID",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}],z=function(e){var t=Object(K.b)(e),r=Object(a.useState)(null),o=Object(h.a)(r,2),i=o[0],l=o[1],s=function(){l(null)};return n.a.createElement(I.a,null,n.a.createElement(A.a,{className:"h-64"},n.a.createElement(T.a,{padding:"none",className:"relative w-64 text-center"},n.a.createElement(S.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&n.a.createElement("div",{className:Object(D.a)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",t.actionsButtonWrapper)},n.a.createElement(w.a,{"aria-owns":i?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},n.a.createElement(c.a,null,"more_horiz")),n.a.createElement(N.a,{id:"selectedOrdersMenu",anchorEl:i,open:Boolean(i),onClose:s},n.a.createElement(R.a,null,n.a.createElement(P.a,{onClick:function(){e.handleRemoveOrder(),s()}},n.a.createElement(k.a,{className:"min-w-40"},n.a.createElement(c.a,null,"delete")),n.a.createElement(C.a,{primary:"Remove"})))))),W.map((function(t){return n.a.createElement(T.a,{key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&n.a.createElement(H.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},n.a.createElement(B.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,function(t){e.onRequestSort(t,r)})},t.label)));var r}))))},L=r(955),M=r(59),V=Object(a.memo)((function(e){var t=e.dataOrdered,r=e.selected,o=e.setSelected,i=e.history,l=Object(a.useCallback)((function(e){i.push("/orders/".concat(e))}),[]),c=Object(a.useCallback)((function(e){var t=Object(M.c)(e,r);o(t)}),[r]);return n.a.createElement(L.a,null,t.map((function(e){var t=e.id,a=e.customer,o=e.orderId,i=e.total,s=e.payment,p=e.status,d=e.date,u=-1!==r.indexOf(t);return n.a.createElement(A.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":u,tabIndex:-1,key:t,selected:u,onClick:function(){return l(t)}},n.a.createElement(T.a,{className:"w-64 text-center",padding:"none"},n.a.createElement(S.a,{checked:u,onClick:function(e){return e.stopPropagation()},onChange:function(){return c(t)}})),n.a.createElement(T.a,{component:"th",scope:"row"},o),n.a.createElement(T.a,{className:"truncate",component:"th",scope:"row"},"".concat(a.firstName," ").concat(a.lastName)),n.a.createElement(T.a,{component:"th",scope:"row",align:"right"},n.a.createElement("span",null,"$"),i),n.a.createElement(T.a,{component:"th",scope:"row"},s.method),n.a.createElement(T.a,{component:"th",scope:"row"},n.a.createElement("div",{className:"inline text-12 p-4 rounded truncate', ".concat(p.color)},p.name)),n.a.createElement(T.a,{component:"th",scope:"row"},d))})))}),(function(e,t){return f()(e.dataOrdered,t.dataOrdered)&&f()(e.selected,t.selected)})),F=Object(E.i)((function(e){var t=Object(u.b)(),r=Object(u.c)((function(e){return e.order.orders.data})),o=Object(u.c)((function(e){return e.order.orders.searchText})),i=Object(a.useState)([]),l=Object(h.a)(i,2),c=l[0],s=l[1],p=Object(a.useState)(r),d=Object(h.a)(p,2),m=d[0],f=d[1],g=Object(a.useState)(0),E=Object(h.a)(g,2),S=E[0],w=E[1],k=Object(a.useState)(10),C=Object(h.a)(k,2),N=C[0],P=C[1],R=Object(a.useState)({direction:"asc",id:null}),T=Object(h.a)(R,2),I=T[0],A=T[1];Object(a.useEffect)((function(){t(b.s())}),[]),Object(a.useEffect)((function(){0!==o.length?(f(v.a.filterArrayByString(r,o)),w(0)):f(r)}),[r,o]);var B=x.a.orderBy(m,[function(e){switch(I.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[I.id]}}],[I.direction]).slice(S*N,S*N+N);return n.a.createElement("div",{className:"w-full flex flex-col"},n.a.createElement(y.a,{className:"flex-grow overflow-x-auto"},n.a.createElement(O.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},n.a.createElement(z,{numSelected:c.length,order:I,onSelectAllClick:function(e){e.target.checked?s(m.map((function(e){return e.id}))):s([])},onRequestSort:function(e,t){var r=t,a="desc";I.id===t&&"desc"===I.direction&&(a="asc"),A({direction:a,id:r})},rowCount:m.length,handleRemoveOrder:function(){t(b.C(c))}}),n.a.createElement(V,{dataOrdered:B,selected:c,setSelected:s,history:e.history}))),n.a.createElement(j.a,{className:"overflow-hidden",component:"div",count:m.length,rowsPerPage:N,page:S,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){w(t)},onChangeRowsPerPage:function(e){P(e.target.value)}}))}));t.default=function(e){return n.a.createElement(o.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:n.a.createElement(g,null),content:n.a.createElement(F,null),innerScroll:!0})}}}]);