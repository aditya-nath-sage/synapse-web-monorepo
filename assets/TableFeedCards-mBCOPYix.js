import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{i as N,S as F}from"./SynapseClient-CZkcD3lR.js";import{e as v}from"./SynapseConstants-aOjNjjyw.js";import{r as l}from"./index-Cu9bd8lq.js";import"./RegularExpressions-RV1YxBM7.js";import"./OrientationBanner-BKoSQ39U.js";import{d as R}from"./dayjs.min-D1RcYm3-.js";import{M as T}from"./ConfirmationDialog-CCJDI89A.js";import{l as _}from"./LoadingScreen-DeBdHOeH.js";import{L as M}from"./LargeButton-eXyOXBMo.js";const p=({tableEntityId:o})=>{const{accessToken:m}=N(),[r,x]=l.useState(),[d,f]=l.useState(3);let u=!0;if(l.useEffect(()=>((()=>{if(u){if(r)return;const n={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${o} ORDER BY "date" desc`},entityId:o,partMask:v};F.getQueryTableResults(n,m).then(s=>{var a;x((a=s.queryResult)==null?void 0:a.queryResults)})}})(),()=>{u=!1}),[o,m]),!r)return _;const i=r.headers,y=i.findIndex(t=>t.name==="categories"),h=i.findIndex(t=>t.name==="date"),I=i.findIndex(t=>t.name==="title"),g=i.findIndex(t=>t.name==="mdDescription");return e.jsxs("div",{className:"Feed",children:[e.jsx("div",{className:"FeedItems",children:r.rows.map((t,n)=>{if(n>d-1)return;const s=t.values;s.some(c=>c===null)&&console.warn("Row has null value(s) when no nulls expected");const a=JSON.parse(s[y]),w=s[h],S=s[I],C=s[g];return e.jsx("div",{className:"FeedItem",children:e.jsxs("div",{children:[a&&e.jsx("div",{className:"FeedItemCategories",children:a.map((c,j)=>e.jsx("div",{className:"FeedItemCategory",children:c},`row-${n},categoryIndex-${j}`))}),e.jsx("p",{className:"FeedItemDate",children:R(new Date(parseInt(w))).format("MMMM YYYY")}),e.jsx("p",{className:"FeedItemTitle",children:S}),e.jsx("div",{className:"FeedItemDescription",children:e.jsx(T,{markdown:C})})]})},`row-${n}`)})}),r.rows.length>d&&e.jsx("div",{className:"FeedViewAllNewsButtonContainer",children:e.jsx(M,{color:"primary",variant:"contained",onClick:()=>f(d+3),children:"View More News"})})]})};try{p.displayName="TableFeedCards",p.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}}}catch{}export{p as T};
