import{z as Se,x as ve,e as be,w as xe,F as ge,H as $e,n as Oe,h as Pe,I as je,J as we,o as Fe,p as Me,T as re,K as Re,m as Te}from"./createTheme-CcAD2pPO.js";import{_ as C}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import{g as Ee,b as S}from"./index-Dl6G-zuu.js";const ke=Object.freeze(Object.defineProperty({__proto__:null,default:Se,isPlainObject:ve},Symbol.toStringTag,{value:"Module"})),qe=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),De=Object.freeze(Object.defineProperty({__proto__:null,default:xe,private_createBreakpoints:ge,unstable_applyStyles:$e},Symbol.toStringTag,{value:"Module"})),We=Object.freeze(Object.defineProperty({__proto__:null,default:Oe,extendSxProp:Pe,unstable_createStyleFunctionSx:je,unstable_defaultSxConfig:we},Symbol.toStringTag,{value:"Module"}));var oe={exports:{}},u={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=Symbol.for("react.element"),K=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),E=Symbol.for("react.context"),ze=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),ne;ne=Symbol.for("react.module.reference");function l(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case J:switch(e=e.type,e){case F:case R:case M:case q:case D:return e;default:switch(e=e&&e.$$typeof,e){case ze:case E:case k:case z:case W:case T:return e;default:return o}}case K:return o}}}u.ContextConsumer=E;u.ContextProvider=T;u.Element=J;u.ForwardRef=k;u.Fragment=F;u.Lazy=z;u.Memo=W;u.Portal=K;u.Profiler=R;u.StrictMode=M;u.Suspense=q;u.SuspenseList=D;u.isAsyncMode=function(){return!1};u.isConcurrentMode=function(){return!1};u.isContextConsumer=function(e){return l(e)===E};u.isContextProvider=function(e){return l(e)===T};u.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===J};u.isForwardRef=function(e){return l(e)===k};u.isFragment=function(e){return l(e)===F};u.isLazy=function(e){return l(e)===z};u.isMemo=function(e){return l(e)===W};u.isPortal=function(e){return l(e)===K};u.isProfiler=function(e){return l(e)===R};u.isStrictMode=function(e){return l(e)===M};u.isSuspense=function(e){return l(e)===q};u.isSuspenseList=function(e){return l(e)===D};u.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===F||e===R||e===M||e===q||e===D||e===Le||typeof e=="object"&&e!==null&&(e.$$typeof===z||e.$$typeof===W||e.$$typeof===T||e.$$typeof===E||e.$$typeof===k||e.$$typeof===ne||e.getModuleId!==void 0)};u.typeOf=l;oe.exports=u;var B=oe.exports;const ht=Ee(B),Ae=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function se(e){const o=`${e}`.match(Ae);return o&&o[1]||""}function ue(e,o=""){return e.displayName||e.name||se(e)||o}function Z(e,o,t){const r=ue(o);return e.displayName||(r!==""?`${t}(${r})`:t)}function Ce(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return ue(e,"Component");if(typeof e=="object")switch(e.$$typeof){case B.ForwardRef:return Z(e,e.render,"ForwardRef");case B.Memo:return Z(e,e.type,"memo");default:return}}}const Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ce,getFunctionName:se},Symbol.toStringTag,{value:"Module"}));function ie(e,o){const t=C({},o);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))t[r]=C({},e[r],t[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const n=e[r]||{},s=o[r];t[r]={},!s||!Object.keys(s)?t[r]=n:!n||!Object.keys(n)?t[r]=s:(t[r]=C({},s),Object.keys(n).forEach(i=>{t[r][i]=ie(n[i],s[i])}))}else t[r]===void 0&&(t[r]=e[r])}),t}function Ve(e){const{theme:o,name:t,props:r}=e;return!o||!o.components||!o.components[t]||!o.components[t].defaultProps?r:ie(o.components[t].defaultProps,r)}function Be({props:e,name:o,defaultTheme:t,themeId:r}){let n=Fe(t);return r&&(n=n[r]||n),Ve({theme:n,name:o,props:e})}function _t(e,o,t=void 0){const r={};return Object.keys(e).forEach(n=>{r[n]=e[n].reduce((s,i)=>{if(i){const d=o(i);d!==""&&s.push(d),t&&t[i]&&s.push(t[i])}return s},[]).join(" ")}),r}const ce=Me();function St({props:e,name:o}){return Be({props:e,name:o,defaultTheme:ce,themeId:re})}var g={},I={exports:{}},N;function He(){return N||(N=1,function(e){function o(){return e.exports=o=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},e.exports.__esModule=!0,e.exports.default=e.exports,o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(I)),I.exports}var V={exports:{}},ee;function Je(){return ee||(ee=1,function(e){function o(t,r){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(r.indexOf(s)>=0)continue;n[s]=t[s]}return n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}(V)),V.exports}const Ke=S(Re),Ge=S(ke),Qe=S(qe),Ue=S(Ie),Xe=S(De),Ye=S(We);var v=Te;Object.defineProperty(g,"__esModule",{value:!0});var Ze=g.default=lt,fe=g.shouldForwardProp=j;g.systemDefaultTheme=void 0;var a=v(He()),H=v(Je()),te=st(Ke),Ne=Ge;v(Qe);v(Ue);var et=v(Xe),tt=v(Ye);const rt=["ownerState"],ot=["variants"],nt=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ae(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,t=new WeakMap;return(ae=function(r){return r?t:o})(e)}function st(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=ae(o);if(t&&t.has(e))return t.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}function ut(e){return Object.keys(e).length===0}function it(e){return typeof e=="string"&&e.charCodeAt(0)>96}function j(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ct=g.systemDefaultTheme=(0,et.default)(),ft=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function P({defaultTheme:e,theme:o,themeId:t}){return ut(o)?e:o[t]||o}function at(e){return e?(o,t)=>t[e]:null}function w(e,o){let{ownerState:t}=o,r=(0,H.default)(o,rt);const n=typeof e=="function"?e((0,a.default)({ownerState:t},r)):e;if(Array.isArray(n))return n.flatMap(s=>w(s,(0,a.default)({ownerState:t},r)));if(n&&typeof n=="object"&&Array.isArray(n.variants)){const{variants:s=[]}=n;let d=(0,H.default)(n,ot);return s.forEach(c=>{let p=!0;typeof c.props=="function"?p=c.props((0,a.default)({ownerState:t},r,t)):Object.keys(c.props).forEach(_=>{(t==null?void 0:t[_])!==c.props[_]&&r[_]!==c.props[_]&&(p=!1)}),p&&(Array.isArray(d)||(d=[d]),d.push(typeof c.style=="function"?c.style((0,a.default)({ownerState:t},r,t)):c.style))}),d}return n}function lt(e={}){const{themeId:o,defaultTheme:t=ct,rootShouldForwardProp:r=j,slotShouldForwardProp:n=j}=e,s=i=>(0,tt.default)((0,a.default)({},i,{theme:P((0,a.default)({},i,{defaultTheme:t,themeId:o}))}));return s.__mui_systemSx=!0,(i,d={})=>{(0,te.internal_processStyles)(i,f=>f.filter(m=>!(m!=null&&m.__mui_systemSx)));const{name:c,slot:p,skipVariantsResolver:_,skipSx:le,overridesResolver:G=at(ft(p))}=d,de=(0,H.default)(d,nt),pe=_!==void 0?_:p&&p!=="Root"&&p!=="root"||!1,ye=le||!1;let me,$=j;p==="Root"||p==="root"?$=r:p?$=n:it(i)&&($=void 0);const L=(0,te.default)(i,(0,a.default)({shouldForwardProp:$,label:me},de)),Q=f=>typeof f=="function"&&f.__emotion_real!==f||(0,Ne.isPlainObject)(f)?m=>w(f,(0,a.default)({},m,{theme:P({theme:m.theme,defaultTheme:t,themeId:o})})):f,U=(f,...m)=>{let A=Q(f);const b=m?m.map(Q):[];c&&G&&b.push(h=>{const y=P((0,a.default)({},h,{defaultTheme:t,themeId:o}));if(!y.components||!y.components[c]||!y.components[c].styleOverrides)return null;const x=y.components[c].styleOverrides,O={};return Object.entries(x).forEach(([he,_e])=>{O[he]=w(_e,(0,a.default)({},h,{theme:y}))}),G(h,O)}),c&&!pe&&b.push(h=>{var y;const x=P((0,a.default)({},h,{defaultTheme:t,themeId:o})),O=x==null||(y=x.components)==null||(y=y[c])==null?void 0:y.variants;return w({variants:O},(0,a.default)({},h,{theme:x}))}),ye||b.push(s);const X=b.length-m.length;if(Array.isArray(f)&&X>0){const h=new Array(X).fill("");A=[...f,...h],A.raw=[...f.raw,...h]}const Y=L(A,...b);return i.muiName&&(Y.muiName=i.muiName),Y};return L.withConfig&&(U.withConfig=L.withConfig),U}}const dt=e=>fe(e)&&e!=="classes",vt=fe,bt=Ze({themeId:re,defaultTheme:ce,rootShouldForwardProp:dt});export{ht as R,Be as a,ie as b,_t as c,ce as d,vt as e,Ke as f,Ve as g,dt as r,bt as s,St as u};
