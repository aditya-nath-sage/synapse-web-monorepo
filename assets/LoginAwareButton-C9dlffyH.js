import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{L as s}from"./react-router-dom-C0RkmXxX.js";import{S as c}from"./SynapseConstants-D_Oa3fs5.js";import{i as m}from"./SynapseClient-CyQCREGs.js";import"./index-Dl6G-zuu.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import"./OrientationBanner-BBh8JRgP.js";import{B as p}from"./Button-DBz2LXAC.js";const a=t=>{const{accessToken:l}=m(),r=!!l,e={...t},n={to:t.to,replace:t.replace};delete e.to,delete e.replace,r||(delete e.href,e.className=c);let o=i.jsx(p,{...e,children:e.children});return r&&n.to&&!e.href&&(o=i.jsx(s,{to:n.to,replace:n.replace,children:o})),o};try{a.displayName="LoginAwareButton",a.__docgenInfo={description:"",displayName:"LoginAwareButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}export{a as L};
