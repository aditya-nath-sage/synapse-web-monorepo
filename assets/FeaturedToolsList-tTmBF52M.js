import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{k as j,t as S}from"./SynapseClient-D4gkDMC-.js";import{m as I,c as M}from"./SynapseConstants-DNR648SI.js";import{r as y}from"./index-Dl6G-zuu.js";import"./RegularExpressions-CgDTvkkI.js";import{u as U,g as u}from"./useGetQueryResultBundle-bp8lCwqb.js";import"./OrientationBanner-DcDyIfis.js";import{d as $}from"./dayjs.min-d18Up55D.js";import{f as w}from"./DateFormatter-CM_rM3ny.js";import{S as Y}from"./ShowMore-3GYd1R3g.js";const f=({id:r,name:p,description:n,type:o,toolDetailPageURL:i,date:d,...t})=>e.jsxs("div",{...t,className:`cardContainer FeaturedToolCard ${t.className??""}`,children:[e.jsx("div",{className:"FeaturedToolCard__Type",children:e.jsx("span",{className:"SRC-tag",children:o})}),e.jsx("div",{className:"FeaturedToolCard__Date",children:w($(parseInt(d)),"MMMM YYYY")}),e.jsx("div",{className:"FeaturedToolCard__Name",children:p}),e.jsx("div",{className:"FeaturedToolCard__Description",children:e.jsx(Y,{summary:n})}),e.jsx("a",{className:"FeaturedToolCard__Link",href:`${i}${r}`,children:"View Tool"})]});try{f.displayName="FeaturedToolCard",f.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}const x=({entityId:r,toolDetailPageURL:p,idColumnName:n="id",nameColumnName:o="name",descriptionColumnName:i="description",typeColumnName:d="type",dateColumnName:t="dateAdded"})=>{const q=`SELECT "${n}", "${o}", "${i}", "${d}", "${t}" FROM ${r} ORDER BY ${t} DESC LIMIT 3`,C={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:r,partMask:I|M,query:{sql:q}},{accessToken:h}=j(),[v,E]=y.useState([]),[_,F]=y.useState(),{data:a,error:m}=U(C);return y.useEffect(()=>{(()=>{try{const c=u(n,a),R=u(o,a),L=u(d,a),N=u(i,a),D=u(t,a),g=(a==null?void 0:a.queryResult.queryResults.rows.map(T=>{T.values.some(V=>V===null)&&console.warn("Row has null value(s)");const l=T.values;return{name:l[R],description:l[N],type:l[L],id:l[c],date:l[D]}}))??[];if(m)throw m;if(g.length===0)return;E(g)}catch(c){console.error(c),F(c)}})()},[r,h,a,m,n,o,d,i,t]),_?e.jsx(S,{error:_}):e.jsx("div",{className:"FeaturedToolList",children:v.map(s=>e.jsx(f,{name:s.name,type:s.type,description:s.description,id:s.id,date:s.date,toolDetailPageURL:p},s.id))})};try{x.displayName="FeaturedToolsList",x.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"dateAdded"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}}}catch{}export{x as F};
