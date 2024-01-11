"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[643],{6643:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var i=r(4420),a=r(9273),l=r(824),t=r(5350),s=r(7438),o=r(7236),d=r(7653),u=r(184),c=function(){var e=(0,i.I0)();return(0,u.jsx)(l.xu,{maxW:"300px",mx:"auto",mt:"10",textAlign:"center",children:(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.email.value,i=n.target.password.value;e((0,a.x4)({email:r,password:i}))},children:[(0,u.jsxs)(t.NI,{mb:"10",children:[(0,u.jsx)(s.l,{htmlFor:"email",textAlign:"center",children:"Email"}),(0,u.jsx)(o.I,{id:"email",name:"email",type:"email"})]}),(0,u.jsxs)(t.NI,{mb:"3",children:[(0,u.jsx)(s.l,{htmlFor:"password",textAlign:"center",children:"Password"}),(0,u.jsx)(o.I,{id:"password",name:"password",type:"password",autoComplete:"off"}),(0,u.jsx)(d.z,{type:"submit",colorScheme:"green",mt:"8",children:"Login"})]})]})})},m=r(3050),v=r(8410),h=r(6484),x=r(9589),f=r(2715),p=r(1087);function b(){return(0,u.jsxs)(m.B6,{children:[(0,u.jsx)(m.ql,{children:(0,u.jsx)("title",{children:"Log In"})}),(0,u.jsx)(v.W,{maxW:"2xl",centerContent:!0,children:(0,u.jsx)(h.M,{children:(0,u.jsxs)(l.xu,{padding:"6",mt:"10",children:[(0,u.jsx)(x.X,{as:"h1",mb:"4",textAlign:"center",children:"Login"}),(0,u.jsx)(c,{}),(0,u.jsx)(l.xu,{textAlign:"center",children:(0,u.jsxs)(f.x,{children:["Don't have an account?"," ",(0,u.jsx)(p.OL,{to:"/register",style:{textDecoration:"underline"},children:"Register here"})]})})]})})})]})}},5350:function(e,n,r){r.d(n,{NI:function(){return _},NJ:function(){return N},e:function(){return g}});var i=r(1413),a=r(4925),l=r(9439),t=r(9886),s=r(4591),o=r(5597),d=r(6516),u=r(2996),c=r(5113),m=r(6992),v=r(2791),h=r(184),x=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],p=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(p,2),Z=b[0],g=b[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),j=I[0],N=I[1];var _=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,x),c=(0,v.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),p="".concat(h,"-feedback"),b="".concat(h,"-helptext"),Z=(0,v.useState)(!1),g=(0,l.Z)(Z,2),y=g[0],I=g[1],j=(0,v.useState)(!1),N=(0,l.Z)(j,2),_=N[0],q=N[1],R=(0,v.useState)(!1),k=(0,l.Z)(R,2),C=k[0],F=k[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&q(!0)}))})}),[b]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,C,t,d,f]),D=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:p},e),{},{ref:(0,s.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[p]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group","data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d)})}),[u,o,C,t,d]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!C,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:_,setHasHelpText:q,id:h,labelId:f,feedbackId:p,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:D,getRootProps:O,getLabelProps:B,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),o=t.getRootProps,p=(t.htmlProps,(0,a.Z)(t,f)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(j,{value:p,children:(0,h.jsx)(Z,{value:r,children:(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:r.container}))})})}));_.displayName="FormControl",(0,o.G)((function(e,n){var r=N(),a=g(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:l}))})).displayName="FormHelperText"},7438:function(e,n,r){r.d(n,{l:function(){return v}});var i=r(1413),a=r(4925),l=r(5350),t=r(5597),s=r(6516),o=r(2996),d=r(5113),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,n){var r,t=(0,s.mq)("FormLabel",e),v=(0,o.Lr)(e),x=(v.className,v.children),f=v.requiredIndicator,p=void 0===f?(0,c.jsx)(h,{}):f,b=v.optionalIndicator,Z=void 0===b?null:b,g=(0,a.Z)(v,m),y=(0,l.NJ)(),I=null!=(r=null==y?void 0:y.getLabelProps(g,n))?r:(0,i.Z)({ref:n},g);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[x,(null==y?void 0:y.isRequired)?p:Z]}))}));v.displayName="FormLabel";var h=(0,t.G)((function(e,n){var r=(0,l.NJ)(),a=(0,l.e)();if(!(null==r?void 0:r.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},7236:function(e,n,r){r.d(n,{I:function(){return f}});var i=r(1413),a=r(4925),l=r(5350),t=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,x=e.isInvalid,f=e.isReadOnly,p=e.isDisabled,b=e.onFocus,Z=e.onBlur,g=(0,a.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:p)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:f)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=x?x:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,Z)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,a.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=r(5597),c=r(6516),m=r(2996),v=r(5113),h=r(184),x=["htmlSize"],f=(0,u.G)((function(e,n){var r=e.htmlSize,l=(0,a.Z)(e,x),s=(0,c.jC)("Input",l),o=d((0,m.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));f.displayName="Input",f.id="Input"},8410:function(e,n,r){r.d(n,{W:function(){return m}});var i=r(1413),a=r(4925),l=r(5597),t=r(2996),s=r(6516),o=r(5113),d=r(6992),u=r(184),c=["className","centerContent"],m=(0,l.G)((function(e,n){var r=(0,t.Lr)(e),l=r.className,m=r.centerContent,v=(0,a.Z)(r,c),h=(0,s.mq)("Container",e);return(0,u.jsx)(o.m.div,(0,i.Z)((0,i.Z)({ref:n,className:(0,d.cx)("chakra-container",l)},v),{},{__css:(0,i.Z)((0,i.Z)({},h),m&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));m.displayName="Container"},6484:function(e,n,r){r.d(n,{M:function(){return d}});var i=r(1413),a=r(4925),l=r(5113),t=r(5597),s=r(184),o=["axis"],d=(0,l.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});d.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,t.G)((function(e,n){var r=e.axis,t=void 0===r?"both":r,d=(0,a.Z)(e,o);return(0,s.jsx)(l.m.div,(0,i.Z)((0,i.Z)({ref:n,__css:u[t]},d),{},{position:"absolute"}))}))}}]);
//# sourceMappingURL=643.a83cfd07.chunk.js.map