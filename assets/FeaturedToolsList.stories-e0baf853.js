import{a as b,j as e}from"./jsx-runtime-670450c2.js";import{a4 as w,aA as Y}from"./index-5643b5a3.js";import{g as m}from"./queryUtils-18daf43a.js";import{u as B}from"./useGetQueryResultBundle-b427b6c4.js";import{r as f}from"./index-f1f749bf.js";import{d as P}from"./dayjs.min-c95aebbe.js";import{f as k}from"./DateFormatter-eaea2760.js";import{n as O,i as j}from"./SynapseConstants-f1d07af3.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Button-7d415009.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Tooltip-266dd013.js";import"./SvgIcon-51e1f886.js";import"./useTheme-1b437015.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./FullWidthAlert-59d3d098.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-46957a4f.js";import"./index-4d501b15.js";import"./Typography-4e56074b.js";import"./Fade-f3cad5fb.js";import"./isArray-a82322d9.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-0e7cf93d.js";import"./IconButton-4918d20b.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";import"./QueryFilter-422779f1.js";import"./cloneDeep-4fd27594.js";import"./_baseClone-2235d922.js";import"./_Set-bb23dcec.js";import"./useInfiniteQuery-2d662a61.js";import"./queryKeys-dd803d9a.js";import"./utc-8a3e1a17.js";const _=({id:t,name:c,description:i,type:s,toolDetailPageURL:n,date:d,...o})=>b("div",{...o,className:`cardContainer FeaturedToolCard bootstrap-4-backport ${o.className??""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:s})}),e("div",{className:"FeaturedToolCard__Date",children:k(P(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:c}),e("div",{className:"FeaturedToolCard__Description",children:i}),e("div",{children:e("a",{className:"FeaturedToolCard__Link",href:`${n}${t}`,children:"View Tool"})})]});try{_.displayName="FeaturedToolCard",_.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}const g=({entityId:t,toolDetailPageURL:c,idColumnName:i="id",nameColumnName:s="name",descriptionColumnName:n="description",typeColumnName:d="type",dateColumnName:o="date"})=>{const E=`SELECT "${i}", "${s}", "${n}", "${d}", "${o}" FROM ${t} ORDER BY ROW_ID DESC LIMIT 3`,R={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:O|j,query:{sql:E}},{accessToken:v}=w(),[h,V]=f.useState([]),[T,x]=f.useState(),{data:r,error:y}=B(R);return f.useEffect(()=>{(()=>{try{const u=m(i,r),I=m(s,r),S=m(d,r),U=m(n,r),M=m(o,r),C=(r==null?void 0:r.queryResult.queryResults.rows.map(N=>{N.values.some($=>$===null)&&console.warn("Row has null value(s)");const l=N.values;return{name:l[I],description:l[U],type:l[S],id:l[u],date:l[M]}}))??[];if(y)throw y;if(C.length===0)return;V(C)}catch(u){console.error(u),x(u)}})()},[t,v,r,y,i,s,d,n,o]),T?e(Y,{error:T}):e("div",{className:"FeaturedToolList",children:h.map(a=>e(_,{name:a.name,type:a.type,description:a.description,id:a.id,date:a.date,toolDetailPageURL:c},a.id))})},F=g;try{g.displayName="FeaturedToolsList",g.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"date"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}}}catch{}const be={title:"Home Page/FeaturedToolsList",component:F},A=t=>e(F,{...t}),p=A.bind({});p.args={entityId:"syn26450069",idColumnName:"resourceId",nameColumnName:"resourceName",descriptionColumnName:"description",typeColumnName:"resourceType",dateColumnName:"dateAdded",toolDetailPageURL:"/Explore/Tools/DetailsPage?Resource_id="};var L,q,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:"args => <FeaturedToolsList {...args} />",...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const we=["Demo"];export{p as Demo,we as __namedExportsOrder,be as default};
//# sourceMappingURL=FeaturedToolsList.stories-e0baf853.js.map
