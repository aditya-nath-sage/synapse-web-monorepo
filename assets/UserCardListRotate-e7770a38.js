import{a as h,j as d}from"./jsx-runtime-095bf462.js";import{r as p}from"./index-8db94870.js";import{p as N,g as T}from"./SqlFunctions-06808d65.js";import{R as V,m as b}from"./SynapseConstants-1ebc8be6.js";import"./getEndpoint-ac94413e.js";import{u as k,S as w,b0 as x}from"./SynapseClient-3acc417d.js";import{b as O}from"./use-deep-compare-effect.esm-08e85271.js";import{U as M}from"./UserCardList-643d097c.js";import{L as Q}from"./UserCard-96f40f26.js";import{B as F}from"./Button-5637ed55.js";const B="sage_rotate_uids",J=3,j=(e=[],s=J,r)=>{let o=[],t=[];const i=localStorage.getItem(r);if(i!=null&&(o=JSON.parse(i)),o.length){const a=e.filter(n=>!o.includes(n));if(a.length>=s)return t=a.slice(0,s),localStorage.setItem(r,JSON.stringify(o.concat(t))),t;{localStorage.removeItem(r);const n=e.slice(0,s-a.length);return localStorage.setItem(r,JSON.stringify(n)),a.concat(n)}}else return t=e.slice(0,s),localStorage.setItem(r,JSON.stringify(t)),t},L=({sql:e,count:s,useQueryResultUserData:r=!1,size:o=V,summaryLink:t,summaryLinkText:i,selectedFacets:a,searchParams:n,sqlOperator:f})=>{const{accessToken:y}=k(),[c,E]=p.useState([]),[U,_]=p.useState(),[m,R]=p.useState();let g=!0;const C=`${B}-${e}-${JSON.stringify(a)}`;return O(()=>(async function(){R(!0);const S=N(e),D=T(S,n,f),A={partMask:b,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:S,query:{sql:e,additionalFilters:D,selectedFacets:a}},I=await w.getFullQueryTableResults(A,y),{queryResult:u}=I;if(u!=null&&u.queryResults.rows){const q=u.queryResults.headers.findIndex(l=>l.columnType===x.USERID),v=u.queryResults.rows.map(l=>l.values[q]).filter(l=>l!==null);if(g){const l=j(v,s,C);E(l),r&&_(I),R(!1)}}else console.log("UserCardListRotate: Error getting data")}(),()=>{g=!1}),[e,a,s,y,n,f]),h("div",{className:"UserCardListRotate bootstrap-4-backport",children:[m&&d(Q,{}),!m&&c.length===0&&d("p",{className:"font-italic",children:"No one was found."}),!m&&c.length>0&&d(M,{list:c,size:o,data:U}),t&&i&&d("div",{className:"UserCardListRotate__summary",children:d(F,{variant:"secondary",size:"lg",href:t,children:i})})]})};try{L.displayName="UserCardListRotate",L.__docgenInfo={description:"",displayName:"UserCardListRotate",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:{value:"false"},description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LARGE USER CARD"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnRequest[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"EQUAL"'},{value:'"IN"'},{value:'"HAS"'},{value:'"HAS_LIKE"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}}}}}catch{}export{L as U};
//# sourceMappingURL=UserCardListRotate-e7770a38.js.map
