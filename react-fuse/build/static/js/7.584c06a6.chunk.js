(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[7],{1214:function(e,a,t){"use strict";var n=t(6),r=t(0),l=t.n(r),i=t(376),o=(t(553),l.a.forwardRef((function(e,a){var t=l.a.cloneElement(e.children,{style:Object(n.a)(Object(n.a)({},e.children.style),{},{visibility:"hidden"})});return l.a.createElement(i.VelocityComponent,Object.assign({ref:a},e),t)})));o.defaultProps={animation:"transition.fadeIn",runOnMount:!0,targetQuerySelector:null,interruptBehavior:"stop",visibility:"visible",duration:300,delay:50,easing:[.4,0,.2,1],display:null,setRef:void 0};var s=l.a.memo(o);t.d(a,"a",(function(){return s}))},1215:function(e,a,t){"use strict";function n(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(a,e),t)}function r(e){e=e.substr(1);var a=new RegExp(".{1,".concat(e.length/3,"}"),"g"),t=e.match(a);return t&&1===t[0].length&&(t=t.map((function(e){return e+e}))),t?"rgb(".concat(t.map((function(e){return parseInt(e,16)})).join(", "),")"):""}function l(e){var a=(e=i(e)).values,t=a[0],n=a[1]/100,r=a[2]/100,l=n*Math.min(r,1-r),s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+t/30)%12;return r-l*Math.max(Math.min(a-3,9-a,1),-1)},c="rgb",u=[Math.round(255*s(0)),Math.round(255*s(8)),Math.round(255*s(4))];return"hsla"===e.type&&(c+="a",u.push(a[3])),o({type:c,values:u})}function i(e){if(e.type)return e;if("#"===e.charAt(0))return i(r(e));var a=e.indexOf("("),t=e.substring(0,a);if(-1===["rgb","rgba","hsl","hsla"].indexOf(t))throw new Error(["Material-UI: unsupported `".concat(e,"` color."),"We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."].join("\n"));var n=e.substring(a+1,e.length-1).split(",");return{type:t,values:n=n.map((function(e){return parseFloat(e)}))}}function o(e){var a=e.type,t=e.values;return-1!==a.indexOf("rgb")?t=t.map((function(e,a){return a<3?parseInt(e,10):e})):-1!==a.indexOf("hsl")&&(t[1]="".concat(t[1],"%"),t[2]="".concat(t[2],"%")),"".concat(a,"(").concat(t.join(", "),")")}function s(e){var a="hsl"===(e=i(e)).type?i(l(e)).values:e.values;return a=a.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*a[0]+.7152*a[1]+.0722*a[2]).toFixed(3))}function c(e,a){if(e=i(e),a=n(a),-1!==e.type.indexOf("hsl"))e.values[2]*=1-a;else if(-1!==e.type.indexOf("rgb"))for(var t=0;t<3;t+=1)e.values[t]*=1-a;return o(e)}function u(e,a){if(e=i(e),a=n(a),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*a;else if(-1!==e.type.indexOf("rgb"))for(var t=0;t<3;t+=1)e.values[t]+=(255-e.values[t])*a;return o(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.hexToRgb=r,a.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var a=i(e).values;return"#".concat(a.map((function(e){return function(e){var a=e.toString(16);return 1===a.length?"0".concat(a):a}(e)})).join(""))},a.hslToRgb=l,a.decomposeColor=i,a.recomposeColor=o,a.getContrastRatio=function(e,a){var t=s(e),n=s(a);return(Math.max(t,n)+.05)/(Math.min(t,n)+.05)},a.getLuminance=s,a.emphasize=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return s(e)>.5?c(e,a):u(e,a)},a.fade=function(e,a){e=i(e),a=n(a),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=a,o(e)},a.darken=c,a.lighten=u},1225:function(e,a,t){"use strict";var n=t(1),r=t(3),l=t(0),i=t.n(l),o=(t(2),t(5)),s=t(280),c=t(7),u=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,c=e.raised,u=void 0!==c&&c,m=Object(r.a)(e,["classes","className","raised"]);return i.a.createElement(s.a,Object(n.a)({className:Object(o.a)(t.root,l),elevation:u?8:1,ref:a},m))}));a.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},1226:function(e,a,t){"use strict";var n=t(1),r=t(3),l=t(0),i=t.n(l),o=(t(2),t(5)),s=t(7),c=i.a.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.component,c=void 0===s?"div":s,u=Object(r.a)(e,["classes","className","component"]);return i.a.createElement(c,Object(n.a)({className:Object(o.a)(t.root,l),ref:a},u))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},1255:function(e,a,t){"use strict";t.r(a);var n=t(1214),r=t(156),l=t(1209),i=t(1225),o=t(1226),s=t(1193),c=t(1215),u=t(1207),m=t(217),f=t(10),d=t(0),p=t.n(d),v=t(40),h=Object(s.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(c.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=h(),a=Object(r.b)({name:"",email:"",password:"",passwordConfirm:""}),t=a.form,s=a.handleChange,c=a.resetForm;return p.a.createElement("div",{className:Object(f.a)(e.root,"flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")},p.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},p.a.createElement(n.a,{animation:"transition.expandIn"},p.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),p.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},p.a.createElement(m.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),p.a.createElement(n.a,{delay:400},p.a.createElement(m.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),p.a.createElement(n.a,{animation:{translateX:[0,"100%"]}},p.a.createElement(i.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},p.a.createElement(o.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128"},p.a.createElement(m.a,{variant:"h6",className:"md:w-full mb-32"},"RESET YOUR PASSWORD"),p.a.createElement("form",{name:"resetForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),c()}},p.a.createElement(u.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t.email,onChange:s,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(u.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:s,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(u.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:s,variant:"outlined",required:!0,fullWidth:!0}),p.a.createElement(l.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:!(t.email.length>0&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm),type:"submit"},"RESET MY PASSWORD")),p.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},p.a.createElement(v.a,{className:"font-medium",to:"login"},"Go back to login"))))))}}}]);