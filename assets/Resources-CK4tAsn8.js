import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{I as w}from"./SynapseClient-CyQCREGs.js";import{n as E,a as I}from"./SynapseConstants-D_Oa3fs5.js";import{r as g}from"./index-Dl6G-zuu.js";import{g as _}from"./queryUtils-D7WV-YsF.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import{u as M}from"./useGetQueryResultBundle-y-Cuc92v.js";import{u as S}from"./useShowDesktop-CPh-208G.js";import"./OrientationBanner-BBh8JRgP.js";import{M as y}from"./HelpPopover-I89slcj8.js";import{E as b}from"./ExpandableContent-CseU0qxI.js";function l({data:s}){const[t,a]=g.useState(0);return e.jsxs("div",{className:"control-container",children:[e.jsxs("div",{className:"button-container",children:[s==null?void 0:s.map((o,r)=>e.jsx("button",{className:t===r?"isSelected":"",onClick:()=>a(r),children:o.name},o.name)),e.jsx("button",{className:"gap-fill"})]}),e.jsx("div",{className:"content-container",children:s==null?void 0:s.map((o,r)=>{const{ownerId:n,wikiId:i}=o;return e.jsx("span",{className:t===r?"":"hide",children:e.jsx(y,{ownerId:n,wikiId:i})},n)})})]})}try{l.displayName="ResourcesDesktop",l.__docgenInfo={description:"",displayName:"ResourcesDesktop",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}}}catch{}function u({data:s}){return e.jsx("div",{className:"Resources_Mobile",children:s.map(({name:t,ownerId:a,wikiId:o})=>{const r=e.jsxs(e.Fragment,{children:[" ",t," "]}),n=e.jsx(y,{ownerId:a,wikiId:o});return e.jsx(b,{title:r,content:n},t)})})}try{u.displayName="ResourcesMobile",u.__docgenInfo={description:"",displayName:"ResourcesMobile",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}}}catch{}const x=s=>{var d;const{entityId:t}=s,a=S(),o={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:E|I,query:{sql:`SELECT Name, Wiki FROM ${t} ORDER BY ItemOrder`}},{data:r,error:n}=M(o),i=_("Name",r),R=_("Wiki",r),p=((d=r==null?void 0:r.queryResult)==null?void 0:d.queryResults.rows.map(f=>{const c=f.values;c.some(h=>h===null)&&console.warn("Row has null value(s) when no nulls expected");const N=c[i],m=(c[R]??"").split("/"),j=m[0],k=m[2];return{name:N,ownerId:j,wikiId:k}}))??[];return e.jsxs("div",{className:"Resources",children:[e.jsx(w,{error:n}),a?e.jsx(l,{data:p}):e.jsx(u,{data:p})]})};try{x.displayName="Resources",x.__docgenInfo={description:"",displayName:"Resources",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{x as R};
