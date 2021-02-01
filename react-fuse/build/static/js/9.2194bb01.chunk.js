(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{899:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r),o=a(291),c=(a(427),i.a.forwardRef((function(e,t){var a=i.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return i.a.createElement(o.VelocityComponent,Object.assign({ref:t},e),a)})));c.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var l=i.a.memo(c);a.d(t,"a",(function(){return l}))},901:function(e,t){var a="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(l=c;0!==l--;)if(!e(t[l],o[l]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(l=c;0!==l--;)if(t[l]!==o[l])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=c;0!==l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(a&&t instanceof Element)return!1;for(l=c;0!==l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],o[s[l]]))return!1;return!0}return t!==t&&o!==o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},903:function(e,t,a){"use strict";var n=a(69),r=a(152),i=a(878),o=a(11),c=a(0),l=a.n(c),s=a(881),u=a(9);var d=function(e){var t=Object(u.c)((function(e){return e.fuse.settings.mainThemeDark}));return l.a.createElement("div",{className:e.classes.header},e.header&&l.a.createElement(s.a,{theme:t},e.header))},p=a(39),m=a(898),f=a(896);var b=function(e){var t=Object(u.c)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return l.a.createElement(l.a.Fragment,null,e.header&&l.a.createElement(s.a,{theme:t},l.a.createElement("div",{className:Object(o.a)(a.sidebarHeader,e.variant)},e.header)),e.content&&l.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var g=l.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),n=Object(p.a)(a,2),r=n[0],i=n[1],s=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){i(!r)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{lgUp:"permanent"===e.variant},l.a.createElement(m.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return u()},classes:{root:Object(o.a)(s.sidebarWrapper,e.variant),paper:Object(o.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},l.a.createElement(b,e))),"permanent"===e.variant&&l.a.createElement(f.a,{mdDown:!0},l.a.createElement(m.a,{variant:"permanent",className:Object(o.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(o.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},l.a.createElement(b,e))))})),h=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=l.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useRef)(null),s=h(e),u=e.rightSidebarHeader||e.rightSidebarContent,p=e.leftSidebarHeader||e.leftSidebarContent;return l.a.useImperativeHandle(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),l.a.createElement("div",{className:Object(o.a)(s.root,e.innerScroll&&s.innerScroll),ref:i},l.a.createElement("div",{className:s.topBg}),l.a.createElement("div",{className:"flex container w-full"},p&&l.a.createElement(g,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:i}),l.a.createElement("div",{className:Object(o.a)(s.contentWrapper,p&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",u&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},l.a.createElement(d,{header:e.header,classes:s}),l.a.createElement("div",{className:Object(o.a)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&l.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&l.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),u&&l.a.createElement(g,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:i})))}));v.defaultProps={};var y=l.a.memo(v);a.d(t,"a",(function(){return y}))},910:function(e,t,a){"use strict";var n=a(69),r=a(3),i=a(184),o=a(971),c=a(876),l=a(224),s=a(878),u=a(296),d=a(892),p=a(179),m=a(11),f=a(0),b=a.n(f),g=a(923),h=a(919),v=Object(s.a)((function(e){return{root:{"& .fuse-chip-select__input":{color:e.palette.text.primary},"&.standard":{"& $placeholder":{},"& $valueContainer":{paddingTop:4}},"&.filled":{"& $placeholder":{left:12},"& $valueContainer":{paddingTop:24,paddingLeft:12},"& $chip":{border:"1px solid rgba(0, 0, 0, 0.12)"}},"&.outlined":{"& $placeholder":{left:12},"& $valueContainer":{paddingLeft:12,paddingTop:12}}},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",paddingBottom:4,paddingTop:12,minHeight:40},chip:{margin:"4px 4px 4px 0"},chipFocused:{backgroundColor:Object(u.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(e.spacing(),"px ").concat(e.spacing(2),"px")},singleValue:{fontSize:16},placeholder:{position:"absolute",left:0,fontSize:16,margin:0},paper:{position:"absolute",zIndex:2,marginTop:e.spacing(),left:0,right:0},divider:{height:e.spacing(2)}}}));function y(e){var t=e.inputRef,a=Object(i.a)(e,["inputRef"]);return b.a.createElement("div",Object.assign({ref:t},a))}var O={Control:function(e){var t=v();return b.a.createElement(d.a,Object.assign({fullWidth:!0,className:Object(m.a)(t.root,e.selectProps.textFieldProps.variant),required:e.selectProps.required,InputProps:{inputComponent:y,"data-cy":e.selectProps.dataCy,inputProps:Object(r.a)({className:t.input,inputRef:e.innerRef,children:e.children,"data-cy":e.selectProps.dataCy},e.innerProps)}},e.selectProps.textFieldProps,{"data-cy":e.selectProps.dataCy}))},Menu:function(e){var t=v();return b.a.createElement(l.a,Object.assign({square:!0,className:t.paper},e.innerProps),e.children)},MultiValue:function(e){var t=v();return b.a.createElement(o.a,{tabIndex:-1,label:e.children,className:Object(m.a)(t.chip,Object(n.a)({},t.chipFocused,e.isFocused),e.data.class),onDelete:function(t){e.removeProps.onClick(),e.removeProps.onMouseDown(t)}})},NoOptionsMessage:function(e){var t=v();return b.a.createElement(p.a,Object.assign({color:"textSecondary",className:t.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return b.a.createElement(c.a,Object.assign({buttonRef:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?600:400}},e.innerProps),e.children)},Placeholder:function(e){var t=v();return b.a.createElement(p.a,Object.assign({color:"textSecondary",className:t.placeholder},e.innerProps),e.children)},SingleValue:function(e){var t=v();return b.a.createElement(p.a,Object.assign({className:t.singleValue},e.innerProps),e.children)},ValueContainer:function(e){var t=v();return b.a.createElement("div",{className:t.valueContainer},e.children)}};var j=b.a.memo((function(e){var t=function(t){null===t&&(t=[]),e.onChange&&e.onChange(t)};return"fixed"===e.variant?b.a.createElement(g.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:O,onChange:t})):b.a.createElement(h.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:O,onChange:t}))}));a.d(t,"a",(function(){return j}))},968:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(901),o=a.n(i),c=a(903),l=a(33),s=a(69),u=a(3),d=a(39),p=a(9),m=a(12),f=a(892),b=a(875),g=a(894),h=a(129),v=a(27),y=a(17),O=a(18),j=a(8),x=a(59),E=a(74),S=a(11),w=a(910),C=a(298),N=a(899),k=Object(E.i)(Object(n.memo)((function(e){var t=Object(p.b)(),a=Object(p.c)((function(e){return e.product.product.data})),i=Object(p.c)((function(e){return e.product.product.type})),c=Object(j.b)(e),k=Object(h.b)(null),P=k.form,I=k.handleChange,R=k.setForm,F=Object(n.useState)(!1),T=Object(d.a)(F,2),H=T[0],D=T[1],M=Object(E.h)().productId;Object(n.useEffect)((function(){t("new"===M?m.B():m.t(M))}),[M]),Object(n.useEffect)((function(){(a&&!P||a&&P&&a.id!==P.id)&&R(a)}),[P,a,R]),Object(n.useEffect)((function(){i!==m.k&&i!==m.p||e.history.push({pathname:O.c.products})}),[i]);var V=Object(n.useCallback)((function(e,t){R(Object(u.a)(Object(u.a)({},P),{},Object(s.a)({},t,e.map((function(e){return e.value})))))}),[P,R]),W=Object(n.useCallback)((function(e){R(Object(u.a)(Object(u.a)({},P),{},{featuredImageId:e}))}),[P,R]);return!a||a&&M!==a.id&&"new"!==M?r.a.createElement(C.a,null):P&&r.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},r.a.createElement("div",null,r.a.createElement(f.a,{className:"mt-8 mb-16",error:""===P.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:P.name,onChange:I,variant:"outlined",fullWidth:!0,inputProps:{"data-cy":"cy-product-input-name"}}),r.a.createElement(f.a,{className:"mt-8 mb-16",id:"description",name:"description",onChange:I,label:"Description",type:"text",value:P.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0,inputProps:{"data-cy":"cy-product-input-description"}}),r.a.createElement(w.a,{className:"mt-8 mb-24",value:P.categories.map((function(e){return{value:e,label:e}})),onChange:function(e){return V(e,"categories")},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},inputProps:{"data-cy":"cy-product-input-categories"},isMulti:!0,dataCy:"cy-product-input-categories"}),r.a.createElement(w.a,{className:"mt-8 mb-16",value:P.tags.map((function(e){return{value:e,label:e}})),onChange:function(e){return V(e,"tags")},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0,"data-cy":"cy-product-input-tags"},variant:"outlined"},dataCy:"cy-product-input-tags",isMulti:!0})),r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-8"},r.a.createElement("label",{htmlFor:"button-file",className:Object(S.a)(c.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},r.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(e){var t=e.target.files[0];t&&y.a.storage.ref("".concat(x.a.PRODUCTS,"/").concat(t.name)).put(t).on("state_changed",(function(e){D(!0)}),(function(e){D(!1)}),(function(){y.a.storage.ref(x.a.PRODUCTS).child(t.name).getDownloadURL().then((function(e){D(!1),R(Object(u.a)(Object(u.a)({},P),{},{images:[{id:v.a.generateGUID(),url:e,type:"image"}].concat(Object(l.a)(P.images))}))}))}))}}),r.a.createElement(b.a,{fontSize:"large",color:"action"},"cloud_upload")),P.images.map((function(e){return r.a.createElement("div",{onClick:function(){return W(e.id)},onKeyDown:function(){return W(e.id)},role:"button",tabIndex:0,className:Object(S.a)(c.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",e.id===P.featuredImageId&&"featured"),key:e.id},r.a.createElement(b.a,{className:c.productImageFeaturedStar},"star"),r.a.createElement("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"}))})),H&&r.a.createElement("div",{className:"flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"},r.a.createElement(C.a,null)))),r.a.createElement(f.a,{className:"mt-8 mb-16",label:"Price",id:"price",name:"price",value:P.price,onChange:I,inputProps:{"data-cy":"cy-product-input-price"},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),r.a.createElement(f.a,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:P.quantity,onChange:I,variant:"outlined",type:"number",fullWidth:!0,inputProps:{"data-cy":"cy-product-input-quantity"}}),r.a.createElement(f.a,{className:"mt-8 mb-16",label:"Shipping Fee",id:"extraShippingFee",name:"extraShippingFee",value:P.extraShippingFee,onChange:I,variant:"outlined",inputProps:{"data-cy":"cy-product-input-shipping"},fullWidth:!0}),r.a.createElement(N.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(g.a,{className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!(P.name.length>0&&!o()(a,P)),onClick:function(){t("new"===M?m.F(P):m.M(M,P))},"data-cy":"cy-product-save"},"Save")))}),o.a)),P=a(43),I=a(179),R=Object(n.memo)((function(){var e=Object(E.h)().productId;return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(N.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(I.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6","data-cy":"cy-product-title"},"new"===e?"New":"Update"," Product"))),r.a.createElement(N.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(g.a,{component:P.a,to:O.c.products,className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary","data-cy":"cy-product-back-button"},r.a.createElement("span",{className:"flex"},"Back"))))}),o.a);t.default=Object(n.memo)((function(e){return r.a.createElement(c.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(R,null),content:r.a.createElement(k,null),innerScroll:!0})}),o.a)}}]);