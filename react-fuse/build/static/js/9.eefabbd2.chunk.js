(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{1214:function(e,a,t){"use strict";var n=t(6),r=t(0),l=t.n(r),o=t(376),i=(t(553),l.a.forwardRef((function(e,a){var t=l.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return l.a.createElement(o.VelocityComponent,Object.assign({ref:a},e),t)})));i.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var c=l.a.memo(i);t.d(a,"a",(function(){return c}))},1269:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t(46),l=t(0),o=t.n(l),i=t(8),c=t(10),s=t(40),m=t(49),u=t(1218),p=t.n(u),d=t(156),f=t(1214),g=t(13),h=t(1207);var b=o.a.memo(Object(u.withFormsy)((function(e){var a=g.a.pick(e,["autoComplete","autoFocus","children","className","defaultValue","disabled","FormHelperTextProps","fullWidth","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","variant"]),t=e.getErrorMessage(),n=e.getValue()||"";return o.a.createElement(h.a,Object.assign({},a,{onChange:function(a){e.setValue(a.currentTarget.value),e.onChange&&e.onChange(a)},value:n,error:Boolean(t),helperText:t}))}))),v=t(1272),E=t(1137),O=t(1267),j=t(1142);o.a.memo(Object(u.withFormsy)((function(e){var a=g.a.pick(e,["checkedIcon","classes","color","disabled","disableRipple","icon","id","indeterminate","indeterminateIcon","inputProps","inputRef","onChange","variant"]),t=e.getErrorMessage(),n=e.getValue();return o.a.createElement(E.a,{error:Boolean(t),className:e.className},o.a.createElement(O.a,{control:o.a.createElement(v.a,Object.assign({},a,{type:"checkbox",checked:n,onChange:function(a){e.setValue(a.target.checked),e.onChange&&e.onChange(a)}})),label:e.label}),Boolean(t)&&o.a.createElement(j.a,null,t))})));var x=t(1149),N=t(1274);o.a.memo(Object(u.withFormsy)((function(e){var a=g.a.pick(e,["children","name","onBlur","onChange","onKeyDown","variant"]),t=e.getErrorMessage(),n=e.getValue();return o.a.createElement(E.a,{error:Boolean(t),className:e.className},o.a.createElement(E.a,{component:"fieldset",required:e.required,error:Boolean(t)},e.label&&o.a.createElement(x.a,{component:"legend"},e.label),o.a.createElement(N.a,Object.assign({},a,{value:n,onChange:function(a,t){e.setValue(t),e.onChange&&e.onChange(a)}})),Boolean(t)&&o.a.createElement(j.a,null,t)))})));var y=t(1147),C=t(1139),w=t(1148),P=t(1152),V=t(1151);o.a.memo(Object(u.withFormsy)((function(e){var a=g.a.pick(e,["autoWidth","children","classes","displayEmpty","input","inputProps","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]),t=e.getErrorMessage(),n=e.getValue();return o.a.createElement(E.a,{error:Boolean(t),className:e.className,variant:a.variant},e.label&&o.a.createElement(w.a,{htmlFor:e.name},e.label),o.a.createElement(V.a,Object.assign({},a,{value:n,onChange:function(a){e.setValue(a.target.value),e.onChange&&e.onChange(a)},input:function(){switch(a.variant){case"outlined":return o.a.createElement(P.a,{labelWidth:8*e.label.length,id:e.name});case"filled":return o.a.createElement(y.a,{id:e.name});default:return o.a.createElement(C.a,{id:e.name})}}()})),Boolean(t)&&o.a.createElement(j.a,null,t))})));var k=t(94),F=t(268),M=t(1276),I=t(1191),R=t(280),B=t(1193),L=t(1215),q=t(217),S=t(1242),T=t(1241),W=Object(B.a)((function(e){return{root:{"& .fuse-chip-select__input":{color:e.palette.text.primary},"&.standard":{"& $placeholder":{},"& $valueContainer":{paddingTop:4}},"&.filled":{"& $placeholder":{left:12},"& $valueContainer":{paddingTop:24,paddingLeft:12},"& $chip":{border:"1px solid rgba(0, 0, 0, 0.12)"}},"&.outlined":{"& $placeholder":{left:12},"& $valueContainer":{paddingLeft:12,paddingTop:12}}},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",paddingBottom:4,paddingTop:12,minHeight:40},chip:{margin:"4px 4px 4px 0"},chipFocused:{backgroundColor:Object(L.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(e.spacing(),"px ").concat(e.spacing(2),"px")},singleValue:{fontSize:16},placeholder:{position:"absolute",left:0,fontSize:16,margin:0},paper:{position:"absolute",zIndex:2,marginTop:e.spacing(),left:0,right:0},divider:{height:e.spacing(2)}}}));function $(e){var a=e.inputRef,t=Object(F.a)(e,["inputRef"]);return o.a.createElement("div",Object.assign({ref:a},t))}var z={Control:function(e){var a=W();return o.a.createElement(h.a,Object.assign({fullWidth:!0,className:Object(c.a)(a.root,e.selectProps.textFieldProps.variant),required:e.selectProps.required,InputProps:{inputComponent:$,inputProps:Object(n.a)({className:a.input,inputRef:e.innerRef,children:e.children},e.innerProps)}},e.selectProps.textFieldProps))},Menu:function(e){var a=W();return o.a.createElement(R.a,Object.assign({square:!0,className:a.paper},e.innerProps),e.children)},MultiValue:function(e){var a=W();return o.a.createElement(M.a,{tabIndex:-1,label:e.children,className:Object(c.a)(a.chip,Object(k.a)({},a.chipFocused,e.isFocused),e.data.class),onDelete:function(a){e.removeProps.onClick(),e.removeProps.onMouseDown(a)}})},NoOptionsMessage:function(e){var a=W();return o.a.createElement(q.a,Object.assign({color:"textSecondary",className:a.noOptionsMessage},e.innerProps),e.children)},Option:function(e){return o.a.createElement(I.a,Object.assign({buttonRef:e.innerRef,selected:e.isFocused,component:"div",style:{fontWeight:e.isSelected?600:400}},e.innerProps),e.children)},Placeholder:function(e){var a=W();return o.a.createElement(q.a,Object.assign({color:"textSecondary",className:a.placeholder},e.innerProps),e.children)},SingleValue:function(e){var a=W();return o.a.createElement(q.a,Object.assign({className:a.singleValue},e.innerProps),e.children)},ValueContainer:function(e){var a=W();return o.a.createElement("div",{className:a.valueContainer},e.children)}};var D=o.a.memo((function(e){var a=function(a){null===a&&(a=[]),e.onChange&&e.onChange(a)};return"fixed"===e.variant?o.a.createElement(S.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:z,onChange:a})):o.a.createElement(T.a,Object.assign({classNamePrefix:"fuse-chip-select"},e,{components:z,onChange:a}))}));o.a.memo(Object(u.withFormsy)((function(e){var a=g.a.pick(e,["children","classes","className","defaultValue","disabled","fullWidth","id","label","name","onBlur","onChange","onFocus","placeholder","required","textFieldProps","variant","isMulti","options","errorMessage"]),t=e.getErrorMessage(),n=e.getValue();return o.a.createElement(E.a,{error:Boolean(t),className:Object(c.a)(e.className,e.showRequired()?"required":"",e.showError()?"error":null),variant:a.variant},e.label&&o.a.createElement(w.a,{htmlFor:e.name},e.label),o.a.createElement(D,Object.assign({},a,{value:n,onChange:function(a,t){e.multiple?e.setValue(t.map((function(e){return e.value}))):e.setValue(a)}})),Boolean(t)&&o.a.createElement(j.a,null,t))})));var A=t(1209),G=t(1225),_=t(1226),H=t(1206),J=t(1186),U=t(1188),K=Object(B.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(L.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=K(),a=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.login})),u=Object(l.useState)(!1),g=Object(r.a)(u,2),h=g[0],j=g[1],x=Object(l.useRef)(null),N=Object(d.b)({email:"",password:"",remember:!0}),y=N.form,C=N.handleChange;Object(l.useEffect)((function(){t.error&&(t.error.username||t.error.password)&&(x.current.updateInputsWithError(Object(n.a)({},t.error)),w())}),[t.error]);var w=function(){j(!1)};return o.a.createElement("div",{className:Object(c.a)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},o.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},o.a.createElement(f.a,{animation:"transition.expandIn"},o.a.createElement(G.a,{className:"w-full max-w-384"},o.a.createElement(_.a,{className:"flex flex-col items-center justify-center p-32"},o.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),o.a.createElement(q.a,{variant:"h6",className:"mt-16 mb-32"},"LOGIN TO YOUR ACCOUNT"),o.a.createElement(p.a,{onValidSubmit:function(e){a(m.n(e))},onValid:function(){j(!0)},onInvalid:w,ref:x,className:"flex flex-col justify-center w-full"},o.a.createElement(b,{className:"mb-16",type:"text",name:"username",label:"Email",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(U.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0}),o.a.createElement(b,{className:"mb-16",type:"password",name:"password",label:"Password",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(U.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0}),o.a.createElement("div",{className:"flex items-center justify-between"},o.a.createElement(E.a,null,o.a.createElement(O.a,{control:o.a.createElement(v.a,{name:"remember",checked:y.remember,onChange:C}),label:"Remember Me"})),o.a.createElement(s.a,{className:"font-medium",to:"/forgot-password"},"Forgot Password?")),o.a.createElement(A.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case mt-16","aria-label":"LOG IN",disabled:!h},"Log in")),o.a.createElement("div",{className:"my-24 flex items-center justify-center"},o.a.createElement(H.a,{className:"w-32"}),o.a.createElement("span",{className:"mx-8 font-bold"},"OR"),o.a.createElement(H.a,{className:"w-32"})),o.a.createElement(A.a,{variant:"contained",color:"secondary",size:"small",className:"normal-case w-192 mb-8"},"Log in with Google"),o.a.createElement(A.a,{variant:"contained",color:"primary",size:"small",className:"normal-case w-192"},"Log in with Facebook"),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement("span",{className:"font-medium"},"Don't have an account?"),o.a.createElement(s.a,{className:"font-medium",to:"/register"},"Create an account")))))))}}}]);