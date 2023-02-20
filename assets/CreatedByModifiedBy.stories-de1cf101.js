import{j as t,a as r,F as k}from"./jsx-runtime-670450c2.js";import{r as V,i as S}from"./SynapseConstants-9273577d.js";import{aR as y,cj as z,an as G,aE as P}from"./SynapseContext-34356979.js";import{u as K}from"./useEntity-58b7fc43.js";import{b as Q}from"./useGetQueryResultBundle-fe152e50.js";import{U as C}from"./UserCard-e81b5584.js";import{f as h}from"./DateFormatter-89500d31.js";import{C as M}from"./ConditionalWrapper-1e5f9ce7.js";import{d as u}from"./dayjs.min-e0adaab4.js";import{B as H}from"./Box-3a18cc2d.js";import{B as J}from"./Breadcrumbs-2af0067d.js";import{S as N}from"./Skeleton-444b9e51.js";import{T as d}from"./Typography-1aca7d5c.js";import{T as f}from"./Clear-4868d5d0.js";import{I as b}from"./FullWidthAlert-2e72abf6.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./MenuList-cd8a71d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8a301de6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-ef578671.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-14f92460.js";import"./index-1aacdabe.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-80573649.js";import"./IconSvg-4ff66f27.js";import"./emotion-react.browser.esm-9a383ad7.js";import"./Button-ad1d45e7.js";import"./ButtonBase-428d3c85.js";import"./assertThisInitialized-081f9914.js";import"./createWithBsPrefix-e09f51dd.js";import"./Link-3d479faf.js";import"./useMutation-f948ffd4.js";import"./useInfiniteQuery-12240e4a.js";import"./queryKeys-dd803d9a.js";import"./pick-7ebca1a8.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./_baseClone-83ba0af9.js";import"./_Set-2f46d2f0.js";import"./_baseSlice-cf92e063.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-de04eecb.js";import"./times-962f3a9c.js";import"./toInteger-034cbabf.js";import"./ToastMessage-45d6abdb.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./Overlay-8c20c2f5.js";import"./contains-60f9209b.js";import"./usePopperMarginModifiers-54a691cd.js";import"./useWaitForDOMRef-54076dc2.js";import"./divWithClassName-077708db.js";import"./utc-8a3e1a17.js";import"./hook-c05d8d9f.js";function X(){return t(d,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function g(T){var w;const{entityId:p,versionNumber:m}=T,i=`${p}${m?`.${m}`:""}`,{data:e}=K(p,m),{data:c}=Q({entityId:p,query:{sql:`SELECT * FROM ${i} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&y(e))}),x=(w=c==null?void 0:c.responseBody)==null?void 0:w.lastUpdatedOn,o=e?z(G(e.concreteType)):"",F="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",R=r(k,{children:[r("p",{children:["This is when the configuration of this ",o," was last changed."]}),t("p",{children:"Configuration changes may be triggered by (for example):"}),r("ul",{children:[r("li",{children:["Editing the name of the ",o]}),r("li",{children:["Updating the schema used by the ",o]})]}),r("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),q=`This is when the configuration of this ${o} was last changed.`,W=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,B=`${i}-createdByTooltip`,I=`${i}-modifiedByTooltip`,_=`${i}-lastUpdatedTooltip`,l={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return t(H,{sx:{bgcolor:"grey.100",py:"10px"},children:r(J,{separator:t(X,{}),sx:{"& .MuiBreadcrumbs-ol":{justifyContent:"center"}},children:[t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":B,children:[o," created by"," ",t(C,{ownerId:e==null?void 0:e.createdBy,size:S})," on"," ",h(u(e==null?void 0:e.createdOn)),e&&P(e)&&t(f,{id:B,title:F,children:t(b,{sx:l})})]})}),t(M,{condition:!e,wrapper:N,children:r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&y(e)?"Configuration":o," last modified by"," ",t(C,{ownerId:e==null?void 0:e.modifiedBy,size:S})," on"," ",h(u(e==null?void 0:e.modifiedOn)),e&&y(e)&&t(f,{id:I,title:R,"aria-label":q,children:t(b,{sx:l})})]})}),x&&r(d,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":_,children:[o," last rebuilt on ",h(u(x)),t(f,{title:W,id:_,children:t(b,{sx:l})})]})]})})}try{g.displayName="CreatedByModifiedBy",g.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const pt={title:"Synapse/EntityPage/CreatedByModifiedBy",component:g},a={args:{entityId:"syn36695878",versionNumber:1}},s={args:{entityId:"syn35197546"}},n={args:{entityId:"syn26302617"}};var v,E,D;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    entityId: 'syn36695878',
    versionNumber: 1
  }
}`,...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var U,L,O;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    entityId: 'syn35197546'
  }
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var $,A,j;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26302617'
  }
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const mt=["File","Table","Dataset"];export{n as Dataset,a as File,s as Table,mt as __namedExportsOrder,pt as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-de1cf101.js.map
