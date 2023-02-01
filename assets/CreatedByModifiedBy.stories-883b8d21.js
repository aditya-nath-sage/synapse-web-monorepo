import{j as r,a as t,F as z}from"./jsx-runtime-670450c2.js";import{q as V,h as w}from"./SynapseConstants-f1d07af3.js";import{aM as f,ce as G,ai as P,az as K}from"./index-5643b5a3.js";import{u as Q}from"./useEntity-b7cbc5fe.js";import{b as H}from"./useGetQueryResultBundle-b427b6c4.js";import{U as S}from"./UserCard-abb8fee0.js";import{f as u}from"./DateFormatter-eaea2760.js";import{C as E}from"./ConditionalWrapper-1e5f9ce7.js";import{d as b}from"./dayjs.min-c95aebbe.js";import{B as J}from"./Box-d3ffd5d5.js";import{B as X}from"./Breadcrumbs-560bb609.js";import{S as N}from"./Skeleton-58bfd0fa.js";import{T as p}from"./Typography-4e56074b.js";import{T as g}from"./Tooltip-266dd013.js";import{I as T}from"./FullWidthAlert-59d3d098.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Button-7d415009.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-1b437015.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./Fade-f3cad5fb.js";import"./isArray-a82322d9.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-51e1f886.js";import"./IconSvg-0e7cf93d.js";import"./createWithBsPrefix-e09f51dd.js";import"./IconButton-4918d20b.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";import"./useMutation-40c5a537.js";import"./useInfiniteQuery-2d662a61.js";import"./queryKeys-dd803d9a.js";import"./pick-871c2e0e.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./_baseClone-2235d922.js";import"./_Set-bb23dcec.js";import"./_baseSlice-cf92e063.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-19d213c4.js";import"./times-a253c348.js";import"./toInteger-9b1425fc.js";import"./ToastMessage-0a73fdf4.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./Overlay-56c2d608.js";import"./contains-60f9209b.js";import"./usePopperMarginModifiers-3c86461d.js";import"./useWaitForDOMRef-54076dc2.js";import"./divWithClassName-46957a4f.js";import"./utc-8a3e1a17.js";import"./index-1aacdabe.js";import"./hook-c05d8d9f.js";function Y(){return r(p,{variant:"breadcrumb1",sx:{color:"grey.700"},children:"/"})}function m(d){var M;const{entityId:c,versionNumber:l}=d,n=`${c}${l?`.${l}`:""}`,{data:e}=Q(c,l),{data:y}=H({entityId:c,query:{sql:`SELECT * FROM ${n} LIMIT 0`},partMask:V,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"},{enabled:!!(e&&f(e))}),x=(M=y==null?void 0:y.responseBody)==null?void 0:M.lastUpdatedOn,o=e?G(P(e.concreteType)):"",R="This is the user who created this Dataset. This may not be the same person who generated the files in this Dataset, or who originally uploaded these files to Synapse.",j=t(z,{children:[t("p",{children:["This is when the configuration of this ",o," was last changed."]}),r("p",{children:"Configuration changes may be triggered by (for example):"}),t("ul",{children:[t("li",{children:["Editing the name of the ",o]}),t("li",{children:["Updating the schema used by the ",o]})]}),t("p",{children:["This does NOT reflect changes to the data displayed in the the"," ",o,"."]})]}),W=`This is when the configuration of this ${o} was last changed.`,k=`When data changes, the ${o} is rebuilt to reflect those changes. This is the last time changes were made to the data.`,_=`${n}-createdByTooltip`,I=`${n}-modifiedByTooltip`,C=`${n}-lastUpdatedTooltip`,h={width:"16px",height:"16px",ml:"4px",verticalAlign:"text-bottom"};return r(J,{sx:{bgcolor:"grey.100",px:"40px",py:"10px"},children:t(X,{separator:r(Y,{}),children:[r(E,{condition:!e,wrapper:N,children:t(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":_,children:[o," created by"," ",r(S,{ownerId:e==null?void 0:e.createdBy,size:w})," on"," ",u(b(e==null?void 0:e.createdOn)),e&&K(e)&&r(g,{id:_,title:R,children:r(T,{sx:h})})]})}),r(E,{condition:!e,wrapper:N,children:t(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":I,children:[e&&f(e)?"Configuration":o," last modified by"," ",r(S,{ownerId:e==null?void 0:e.modifiedBy,size:w})," on"," ",u(b(e==null?void 0:e.modifiedOn)),e&&f(e)&&r(g,{id:I,title:j,"aria-label":W,children:r(T,{sx:h})})]})}),x&&t(p,{sx:{color:"grey.700"},variant:"breadcrumb1","aria-describedby":C,children:[o," last rebuilt on ",u(b(x)),r(g,{title:k,id:C,children:r(T,{sx:h})})]})]})})}try{m.displayName="CreatedByModifiedBy",m.__docgenInfo={description:"",displayName:"CreatedByModifiedBy",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const cr={title:"Synapse/EntityPage/CreatedByModifiedBy",component:m,argTypes:{}},B=d=>r(m,{...d}),i=B.bind({});i.args={entityId:"syn36695878",versionNumber:1};const a=B.bind({});a.args={entityId:"syn35197546"};const s=B.bind({});s.args={entityId:"syn26302617"};var v,D,U;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"args => <CreatedByModifiedBy {...args} />",...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var L,O,$;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:"args => <CreatedByModifiedBy {...args} />",...($=(O=a.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var A,q,F;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:"args => <CreatedByModifiedBy {...args} />",...(F=(q=s.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const lr=["File","Table","Dataset"];export{s as Dataset,i as File,a as Table,lr as __namedExportsOrder,cr as default};
//# sourceMappingURL=CreatedByModifiedBy.stories-883b8d21.js.map
