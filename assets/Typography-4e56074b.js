import{_ as y}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as i}from"./extends-98964cd2.js";import{r as T}from"./index-f1f749bf.js";import{m as B,n as C,g as W,d as _,s as M,o as f,e as $,h as j,i as R}from"./styled-abc8f272.js";import{j as U}from"./jsx-runtime-670450c2.js";const A=["sx"],N=r=>{var t,o;const e={systemProps:{},otherProps:{}},n=(t=r==null||(o=r.theme)==null?void 0:o.unstable_sxConfig)!=null?t:B;return Object.keys(r).forEach(a=>{n[a]?e.systemProps[a]=r[a]:e.otherProps[a]=r[a]}),e};function O(r){const{sx:t}=r,o=y(r,A),{systemProps:e,otherProps:n}=N(o);let a;return Array.isArray(t)?a=[e,...t]:typeof t=="function"?a=(...p)=>{const s=t(...p);return C(s)?i({},e,s):e}:a=i({},e,t),i({},n,{sx:a})}function E(r){return W("MuiTypography",r)}_("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],S=r=>{const{align:t,gutterBottom:o,noWrap:e,paragraph:n,variant:a,classes:p}=r,s={root:["root",a,r.align!=="inherit"&&`align${f(t)}`,o&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return R(s,E,p)},k=M("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${f(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:r,ownerState:t})=>i({margin:0},t.variant&&r.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=r=>w[r]||r,D=T.forwardRef(function(t,o){const e=$({props:t,name:"MuiTypography"}),n=z(e.color),a=O(i({},e,{color:n})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:x=!1,paragraph:c=!1,variant:l="body1",variantMapping:g=u}=a,v=y(a,L),m=i({},a,{align:p,color:n,className:s,component:h,gutterBottom:d,noWrap:x,paragraph:c,variant:l,variantMapping:g}),b=h||(c?"p":g[l]||u[l])||"span",P=S(m);return U(k,i({as:b,ref:o,ownerState:m,className:j(P.root,s)},v))}),H=D;export{H as T,O as e};
//# sourceMappingURL=Typography-4e56074b.js.map
