import{j as l}from"./jsx-runtime-Du8NFWEI.js";import{R as i}from"./index-Dl6G-zuu.js";import"./SynapseClient-Dsm6YORQ.js";import{d as m}from"./SynapseConstants-CvwD-3Gl.js";import"./getEndpoint-CjoHA800.js";import{p as c}from"./SqlFunctions-CDg12rgX.js";import{u as d}from"./useGetQueryResultBundle-BMqPwkMP.js";function n(r){var a;const{query:o,parens:s}=r,u=c(o.sql),p={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:o,entityId:u,partMask:m},{data:e}=d(p),t=(a=e==null?void 0:e.queryCount)==null?void 0:a.toLocaleString();return l.jsx(i.Fragment,{children:t&&(s?`(${t})`:t)})}try{n.displayName="QueryCount",n.__docgenInfo={description:"Shows the total count of results for a table query.",displayName:"QueryCount",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"Query"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}}}catch{}export{n as Q};
