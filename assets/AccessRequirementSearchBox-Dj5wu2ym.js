import{j as P}from"./jsx-runtime-Du8NFWEI.js";import{b as ce}from"./createTheme-DFSTUSmt.js";import{r as n}from"./index-Dl6G-zuu.js";import{_ as fe,a as p,h as Se,b as I,c as me,u as ve,S as ge,d as he}from"./Select-49a62830.esm-D12uzRYK.js";import"./index-B6qzg4VC.js";import{k as Oe,q as z}from"./SynapseClient-D4gkDMC-.js";import"./RegularExpressions-CgDTvkkI.js";import"./OrientationBanner-DcDyIfis.js";import{h as _e}from"./useAccessRequirements-DVkWKlkk.js";import{S as ye}from"./Skeleton-1jrlRaLC.js";var Ie=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ce(t){var r=t.defaultOptions,e=r===void 0?!1:r,l=t.cacheOptions,d=l===void 0?!1:l,c=t.loadOptions;t.options;var i=t.isLoading,C=i===void 0?!1:i,h=t.onInputChange,a=t.filterOption,O=a===void 0?null:a,u=fe(t,Ie),S=u.inputValue,o=n.useRef(void 0),_=n.useRef(!1),H=n.useState(Array.isArray(e)?e:void 0),$=p(H,2),J=$[0],j=$[1],K=n.useState(typeof S<"u"?S:""),E=p(K,2),N=E[0],A=E[1],Q=n.useState(e===!0),w=p(Q,2),U=w[0],m=w[1],X=n.useState(void 0),B=p(X,2),x=B[0],L=B[1],Y=n.useState([]),D=p(Y,2),Z=D[0],b=D[1],ee=n.useState(!1),k=p(ee,2),te=k[0],y=k[1],ne=n.useState({}),M=p(ne,2),v=M[0],T=M[1],ae=n.useState(void 0),G=p(ae,2),se=G[0],re=G[1],oe=n.useState(void 0),W=p(oe,2),ie=W[0],ue=W[1];d!==ie&&(T({}),ue(d)),e!==se&&(j(Array.isArray(e)?e:void 0),re(e)),n.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var V=n.useCallback(function(g,f){if(!c)return f();var s=c(g,f);s&&typeof s.then=="function"&&s.then(f,function(){return f()})},[c]);n.useEffect(function(){e===!0&&V(N,function(g){_.current&&(j(g||[]),m(!!o.current))})},[]);var pe=n.useCallback(function(g,f){var s=Se(g,f,h);if(!s){o.current=void 0,A(""),L(""),b([]),m(!1),y(!1);return}if(d&&v[s])A(s),L(s),b(v[s]),m(!1),y(!1);else{var de=o.current={};A(s),m(!0),y(!x),V(s,function(q){_&&de===o.current&&(o.current=void 0,m(!1),L(s),b(q||[]),y(!1),T(q?I(I({},v),{},me({},s,q)):v))})}},[d,V,x,v,h]),le=te?[]:N&&x?Z:J||[];return I(I({},u),{},{options:le,isLoading:U||C,onInputChange:pe,filterOption:O})}var Ae=n.forwardRef(function(t,r){var e=Ce(t),l=ve(e);return n.createElement(ge,ce({ref:r},l))}),xe=Ae;function R(t,r){return t.toString()===r?r:`${r} (${t})`}const Le={Control:t=>P.jsx(he.Control,{...t,className:`form-control ${t.className??""}`})};function F(t){const{inputId:r,initialId:e,onChange:l,placeholder:d}=t,{accessToken:c}=Oe(),{data:i,isLoading:C}=_e(e,{enabled:!!e});async function h(a){var S;const O=parseInt(a);let u;return O&&(u=[await z.getAccessRequirementById(c,O)]),u||(u=(S=await z.searchAccessRequirements(c,{nameContains:a}))==null?void 0:S.results),(u==null?void 0:u.map(o=>({id:o.id.toString(),value:o.id.toString(),label:R(o.id,o.name)})))??[]}return e&&C?P.jsx(ye,{width:"100%"}):P.jsx(xe,{className:"bootstrap-4-backport AsyncSelect",defaultInputValue:e?R(e,(i==null?void 0:i.name)??e.toString()):void 0,defaultOptions:e?[{id:e,value:e,label:R(e,(i==null?void 0:i.name)??e.toString())}]:!0,inputId:r,cacheOptions:!0,isClearable:!0,styles:{control:a=>({...a,display:"flex !important"}),input:a=>({...a,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:Le,loadOptions:h,onChange:a=>{l(a==null?void 0:a.id.toString())},placeholder:d})}try{F.displayName="AccessRequirementSearchBox",F.__docgenInfo={description:"",displayName:"AccessRequirementSearchBox",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},initialId:{defaultValue:null,description:"",name:"initialId",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessRequirementId?: string | undefined) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{F as A};
