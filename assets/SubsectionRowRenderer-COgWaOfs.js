import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as v}from"./index-Dl6G-zuu.js";import{p as V,g as k}from"./SqlFunctions-BBgGR00O.js";import{i as C,n as F}from"./SynapseClient-CyQCREGs.js";import{a as D}from"./SynapseConstants-D_Oa3fs5.js";import{C as u}from"./index-CIIvWsNs.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import{u as M}from"./use-deep-compare-effect.esm-COSQ_O61.js";import"./OrientationBanner-BBh8JRgP.js";import{M as I}from"./HelpPopover-I89slcj8.js";import{S as A}from"./SkeletonTable-1LCkZFUG.js";import{T as K}from"./Typography-CxCAiHvb.js";const O=[u.BOOLEAN_LIST,u.DATE_LIST,u.ENTITYID_LIST,u.INTEGER_LIST,u.STRING_LIST],N=({sql:d,searchParams:y,sqlOperator:_,isMarkdown:p=!1,columnLink:o,friendlyValuesMap:R,columnNameIsSectionTitle:g=!1,limit:E,additionalFiltersSessionStorageKey:q})=>{const{accessToken:h}=C(),[l,L]=v.useState(),[x,T]=v.useState();let w=!0;M(()=>(async function(){var r;T(!0);const t=V(d),m=k(q,y,_),i={partMask:D,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,query:{sql:d,limit:E,additionalFilters:m}},s=await F.getQueryTableResults(i,h);T(!1);const n=(r=s==null?void 0:s.queryResult)==null?void 0:r.queryResults;n?w&&L(n):console.log("SubsectionRowRenderer: Error getting data")}(),()=>{w=!1}),[d,h,y,_]);const f=a=>{if(!R)return a;const t=R[a];return t||a};return e.jsxs("div",{className:"SubsectionRowRenderer bootstrap-4-backport",children:[x&&e.jsx(A,{numRows:2,numCols:1}),!x&&l&&l.rows.length>0&&l.headers.map((a,t)=>o&&a.name==o.linkColumnName?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"SubsectionRowRenderer__item",role:"table",children:[e.jsx(K,{variant:g?"sectionTitle":"subsectionHeader",role:"heading",children:a.name}),g&&e.jsx("hr",{}),e.jsx("div",{role:"rowgroup",children:l.rows.map((m,b)=>{const i=m.values[t];if(!i)return e.jsx(e.Fragment,{});let s;if(O.includes(a.columnType))s=JSON.parse(i).map((r,c)=>e.jsxs("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:[p&&e.jsx(I,{markdown:f(r)}),!p&&e.jsx("p",{children:f(r)})]},c));else{let n;const r=f(i);if(p)n=e.jsx(I,{markdown:r});else if(o&&o.matchColumnName==a.name){const c=l.headers.findIndex(S=>S.name==o.linkColumnName),j=m.values;j.some(S=>S===null)&&console.warn("Row has null value(s) when no nulls expected"),c>-1?n=e.jsx("a",{rel:"noopener noreferrer",target:"_blank",href:j[c],children:r}):n=e.jsx("p",{children:r})}else n=e.jsx("p",{children:r});s=e.jsx("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:n},b)}return s})})]},`${t}`))]})};try{N.displayName="SubsectionRowRenderer",N.__docgenInfo={description:"",displayName:"SubsectionRowRenderer",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},isMarkdown:{defaultValue:{value:"false"},description:"",name:"isMarkdown",required:!1,type:{name:"boolean"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},columnLink:{defaultValue:null,description:"",name:"columnLink",required:!1,type:{name:"ColumnSpecifiedLink"}},friendlyValuesMap:{defaultValue:null,description:"",name:"friendlyValuesMap",required:!1,type:{name:"FriendlyValuesMap"}},columnNameIsSectionTitle:{defaultValue:{value:"false"},description:"",name:"columnNameIsSectionTitle",required:!1,type:{name:"boolean"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},additionalFiltersSessionStorageKey:{defaultValue:null,description:"",name:"additionalFiltersSessionStorageKey",required:!1,type:{name:"string"}}}}}catch{}export{N as S};
