import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as x}from"./index-Dl6G-zuu.js";import{F as T}from"./index-0sKCi0IA.js";import{k as D,t as V,n as w}from"./SynapseClient-D4gkDMC-.js";import{m as F,c as U}from"./SynapseConstants-DNR648SI.js";import"./RegularExpressions-CgDTvkkI.js";import{u as A,g as d}from"./useGetQueryResultBundle-bp8lCwqb.js";import{u as H}from"./useShowDesktop-CPh-208G.js";import"./OrientationBanner-DcDyIfis.js";import{E as O}from"./ExpandableContent-BW5pl0rL.js";import{Q as C}from"./QueryCount-Dh6uGcsZ.js";import{B as I}from"./Button-CLkrjdQe.js";function g({link:a,summary:n,countSql:o,title:r}){const c=e.jsxs("div",{className:"Goals__Mobile__Header",children:[o&&e.jsx("span",{className:"Goals__Mobile__Header__Count",children:e.jsx(C,{parens:!1,query:{sql:o}})}),e.jsxs("span",{className:"Goals__Mobile__Header__Title",children:[" ",r," "]})]}),m=e.jsxs("div",{className:"Goals__Mobile__Content",children:[e.jsx("p",{children:n}),e.jsx(I,{variant:"contained",color:"secondary",className:"Goals__Mobile__Content__Link",href:a,children:"Explore"})]});return e.jsx(O,{title:c,content:m})}try{g.displayName="GoalsMobile",g.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}function h({asset:a,link:n,summary:o,countSql:r,title:c}){return e.jsxs("div",{className:"Goals__Card",children:[e.jsx("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:e.jsxs("p",{children:[e.jsxs("span",{className:"Goals__Card__header__title",children:[" ",c," "]}),r&&e.jsx("span",{className:"Goals__Card__header__count",children:e.jsx(C,{parens:!1,query:{sql:r}})})]})}),e.jsxs("div",{className:"Goals__Card__summary",children:[e.jsxs("p",{children:[" ",o," "]}),e.jsx(I,{className:"Goals__Card__summary__link",variant:"contained",color:"secondary",href:n,children:"Explore"})]})]})}try{h.displayName="GoalsDesktop",h.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}}}catch{}const B=1200,S=a=>{const{entityId:n}=a,{accessToken:o}=D(),[r,c]=x.useState(),[m,q]=x.useState(),j=H(B),b={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:n,partMask:F|U,query:{sql:`select * from ${n} order by ItemOrder`}},{data:s}=A(b);x.useEffect(()=>{(async()=>{try{const i=d("Asset",s),u=((s==null?void 0:s.queryResult.queryResults.rows.map(t=>t.values[i]))??[]).filter(t=>t!=null&&t!==void 0);if(u.length===0)return;const y={includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:u.map(t=>({associateObjectId:n,associateObjectType:T.TableEntity,fileHandleId:t}))},f=await w(y,o);q(void 0),c(f.requestedFiles.filter(t=>t.preSignedURL!==void 0).map(t=>t.preSignedURL))}catch(i){console.error("Error on get data",i),q(i)}})()},[n,o,s]);const G=d("TableId",s),_=d("CountSql",s),k=d("Title",s),v=d("Summary",s),R=d("Link",s);return e.jsxs("div",{className:`Goals${j?"__Desktop":""}`,children:[m&&e.jsx(V,{error:m}),s==null?void 0:s.queryResult.queryResults.rows.map((E,i)=>{const l=E.values;l.some(M=>M===null)&&console.warn("Row has null value(s) when no nulls expected");const u=G>-1?l[G]:void 0;let p;_>-1&&l[_]?p=l[_]:u&&(p=`SELECT * FROM ${u}`);const y=l[k],f=l[v],t=l[R],L=(r==null?void 0:r[i])??"",N={countSql:p,title:y,summary:f,link:t,asset:L};return j?e.jsx(h,{...N}):e.jsx(g,{...N})})]})};try{S.displayName="Goals",S.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{S as G};
