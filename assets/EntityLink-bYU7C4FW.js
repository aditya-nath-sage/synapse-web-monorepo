import{j as u}from"./jsx-runtime-Du8NFWEI.js";import{k as g,q as N,ag as E,o as v,p as b,aU as k,aV as T,M as q}from"./SynapseClient-Dsm6YORQ.js";import{g as V,B as H}from"./getEndpoint-CjoHA800.js";import"./OrientationBanner-tb7WDFcR.js";import"./index-Dl6G-zuu.js";import{u as I}from"./useEntity-CONrSU3w.js";import{E as m}from"./EntityIcon-BFC0bk39.js";import{E as Q}from"./ErrorChip-BcrQAr_n.js";import{L}from"./Link-EkQ0dGSu.js";import{S as _}from"./Skeleton-C2B0Utez.js";function G(t,r){const{accessToken:l,keyFactory:n}=g(),i=N();t=t.map(o=>({...o,targetId:E(o.targetId)}));const d=async()=>{const o=await b.getEntityHeaders(t,l);return o.results.forEach(e=>{const s=t.find(a=>a.targetVersionNumber?a.targetId===e.id&&a.targetVersionNumber===e.versionNumber:a.targetId===e.id);if(s&&(i.setQueryData(n.getEntityHeadersQueryKey([s]),{results:[e],totalNumberOfResults:1}),i.setQueryData(n.getEntityHeaderQueryKey(s.targetId,s.targetVersionNumber),e),s.targetVersionNumber&&e.isLatestVersion)){const a={targetId:e.id};i.setQueryData(n.getEntityHeadersQueryKey([a]),{results:[e],totalNumberOfResults:1}),i.setQueryData(n.getEntityHeaderQueryKey(s.targetId),e)}}),o};return v({...r,queryKey:n.getEntityHeadersQueryKey(t),queryFn:d})}function j(t="",r,l){const{accessToken:n,keyFactory:i}=g();return t&&(t=E(t)),v({enabled:!!t,...l,queryKey:i.getEntityHeaderQueryKey(t,r),queryFn:()=>b.getEntityHeader(t,r,n)})}const f=t=>{const{entity:r,className:l,versionNumber:n,displayTextField:i="name",link:d=!0,showIcon:o=!0}=t;let e="";typeof r=="string"&&(e=r);const s=!!e&&typeof r=="string",{data:a,isLoading:h}=j(e,n,{enabled:s}),x=s&&a==null&&!h,{error:c}=I(e,n,{enabled:x});if(a||typeof r!="string"){const y=a??r;let p;return"concreteType"in y?p=k(y.concreteType):p=T(y),d?u.jsxs(L,{className:l,target:"_blank",rel:"noopener noreferrer",href:typeof d=="string"?d:`${V(H.PORTAL_ENDPOINT)}#!Synapse:${y.id}${n?`.${n}`:""}`,children:[o&&u.jsx(m,{type:p,style:{marginRight:"6px"}}),y[i]]}):u.jsxs("p",{className:l,children:[o&&u.jsx(m,{type:p,style:{marginRight:"6px"}}),y[i]]})}else return c?e?u.jsx(Q,{chipText:e,error:c}):u.jsx(q,{error:c}):u.jsx(_,{variant:"rectangular",width:"100"})};try{f.displayName="EntityLink",f.__docgenInfo={description:"",displayName:"EntityLink",props:{entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"string | EntityHeader | Entity"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},link:{defaultValue:null,description:"Whether the component should link to the entity page in Synapse. Link can be overriden by passing a string. Default true",name:"link",required:!1,type:{name:"string | boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIcon:{defaultValue:null,description:"Whether to display an icon identifying the entity type. Default true",name:"showIcon",required:!1,type:{name:"boolean"}},displayTextField:{defaultValue:null,description:"The field of the entity to display. Default is 'name'",name:"displayTextField",required:!1,type:{name:"enum",value:[{value:'"name"'},{value:'"type"'},{value:'"id"'},{value:'"modifiedOn"'},{value:'"modifiedBy"'},{value:'"benefactorId"'},{value:'"isLatestVersion"'},{value:'"versionNumber"'},{value:'"versionLabel"'},{value:'"createdOn"'},{value:'"createdBy"'},{value:'"description"'},{value:'"etag"'},{value:'"parentId"'},{value:'"concreteType"'}]}}}}}catch{}export{f as E,j as a,G as u};
