import{j as P}from"./jsx-runtime-670450c2.js";import{_ as le}from"./extends-98964cd2.js";import{r as n}from"./index-f1f749bf.js";import{_ as ce,h as fe,a as I,u as Se,S as me,d as ve}from"./Select-40119e12.esm-dfca749b.js";import{f as p,c as ge}from"./toConsumableArray-85fcc1b5.js";import"./index-96c5f47c.js";import{a4 as he,c9 as Oe,cc as _e}from"./index-5643b5a3.js";import{b as ye}from"./useAccessRequirements-1d87bf42.js";import{S as Ie}from"./Skeleton-58bfd0fa.js";var Ce=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ae(t){var r=t.defaultOptions,e=r===void 0?!1:r,d=t.cacheOptions,l=d===void 0?!1:d,c=t.loadOptions;t.options;var i=t.isLoading,C=i===void 0?!1:i,h=t.onInputChange,a=t.filterOption,O=a===void 0?null:a,u=ce(t,Ce),S=u.inputValue,o=n.useRef(void 0),_=n.useRef(!1),F=n.useState(Array.isArray(e)?e:void 0),$=p(F,2),H=$[0],E=$[1],J=n.useState(typeof S<"u"?S:""),N=p(J,2),j=N[0],A=N[1],K=n.useState(e===!0),w=p(K,2),Q=w[0],m=w[1],U=n.useState(void 0),B=p(U,2),L=B[0],V=B[1],X=n.useState([]),D=p(X,2),Y=D[0],b=D[1],Z=n.useState(!1),k=p(Z,2),ee=k[0],y=k[1],te=n.useState({}),M=p(te,2),v=M[0],T=M[1],ne=n.useState(void 0),G=p(ne,2),ae=G[0],se=G[1],re=n.useState(void 0),W=p(re,2),oe=W[0],ie=W[1];l!==oe&&(T({}),ie(l)),e!==ae&&(E(Array.isArray(e)?e:void 0),se(e)),n.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var x=n.useCallback(function(g,f){if(!c)return f();var s=c(g,f);s&&typeof s.then=="function"&&s.then(f,function(){return f()})},[c]);n.useEffect(function(){e===!0&&x(j,function(g){_.current&&(E(g||[]),m(!!o.current))})},[]);var ue=n.useCallback(function(g,f){var s=fe(g,f,h);if(!s){o.current=void 0,A(""),V(""),b([]),m(!1),y(!1);return}if(l&&v[s])A(s),V(s),b(v[s]),m(!1),y(!1);else{var de=o.current={};A(s),m(!0),y(!L),x(s,function(q){_&&de===o.current&&(o.current=void 0,m(!1),V(s),b(q||[]),y(!1),T(q?I(I({},v),{},ge({},s,q)):v))})}},[l,x,L,v,h]),pe=ee?[]:j&&L?Y:H||[];return I(I({},u),{},{options:pe,isLoading:Q||C,onInputChange:ue,filterOption:O})}var Le=n.forwardRef(function(t,r){var e=Ae(t),d=Se(e);return n.createElement(me,le({ref:r},d))});const Ve=Le;function R(t,r){return t.toString()===r?r:`${r} (${t})`}const be={Control:t=>P(ve.Control,{...t,className:`form-control ${t.className??""}`})};function z(t){const{inputId:r,initialId:e,onChange:d,placeholder:l}=t,{accessToken:c}=he(),{data:i,isLoading:C}=ye(e,{enabled:!!e});async function h(a){var S;const O=parseInt(a);let u;return O&&(u=[await Oe(c,O)]),u||(u=(S=await _e(c,{nameContains:a}))==null?void 0:S.results),(u==null?void 0:u.map(o=>({id:o.id.toString(),value:o.id.toString(),label:R(o.id,o.name)})))??[]}return e&&C?P(Ie,{width:"100%"}):P(Ve,{className:"bootstrap-4-backport",defaultInputValue:e?R(e,(i==null?void 0:i.name)??e.toString()):void 0,defaultOptions:e?[{id:e,value:e,label:R(e,(i==null?void 0:i.name)??e.toString())}]:!0,inputId:r,cacheOptions:!0,isClearable:!0,styles:{control:a=>({...a,display:"flex !important"}),input:a=>({...a,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:be,loadOptions:h,onChange:a=>{d(a==null?void 0:a.id.toString())},placeholder:l})}try{z.displayName="AccessRequirementSearchBox",z.__docgenInfo={description:"",displayName:"AccessRequirementSearchBox",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},initialId:{defaultValue:null,description:"",name:"initialId",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessRequirementId?: string | undefined) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{z as A};
//# sourceMappingURL=AccessRequirementSearchBox-b94b8ba2.js.map
