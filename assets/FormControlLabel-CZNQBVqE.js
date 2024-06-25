import{g as S,a as E,e as R,_ as U,b as L}from"./createTheme-CcAD2pPO.js";import{_ as p}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import{r as v}from"./index-Dl6G-zuu.js";import{s as k,u as A,c as D}from"./styled-Sx1jgj-B.js";import{u as w,f as W}from"./useFormControl-CQLCXd-P.js";import{j as m}from"./jsx-runtime-Du8NFWEI.js";import{T as F}from"./Typography-CxCAiHvb.js";import{S as z}from"./Stack-CqpovyXN.js";function B(e){return E("MuiFormControlLabel",e)}const a=S("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],I=e=>{const{classes:o,disabled:l,labelPlacement:n,error:t,required:r}=e,d={root:["root",l&&"disabled",`labelPlacement${R(n)}`,t&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",t&&"error"]};return D(d,B,o)},G=k("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${a.label}`]:o.label},o.root,o[`labelPlacement${R(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${a.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${a.label}`]:{[`&.${a.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),J=k("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${a.error}`]:{color:(e.vars||e).palette.error.main}})),oe=v.forwardRef(function(o,l){var n,t;const r=A({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:q={},control:i,disabled:C,disableTypography:$,label:j,labelPlacement:T="end",required:h,slotProps:_={}}=r,N=U(r,H),b=w(),y=(n=C??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const M=W({props:r,muiFormControl:b,states:["error"]}),f=p({},r,{disabled:y,labelPlacement:T,required:u,error:M.error}),g=I(f),P=(t=_.typography)!=null?t:q.typography;let s=j;return s!=null&&s.type!==F&&!$&&(s=m.jsx(F,p({component:"span"},P,{className:L(g.label,P==null?void 0:P.className),children:s}))),m.jsxs(G,p({className:L(g.root,d),ownerState:f,ref:l},N,{children:[v.cloneElement(i,x),u?m.jsxs(z,{display:"block",children:[s,m.jsxs(J,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{oe as F};
