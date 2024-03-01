import{j as e,a as i,F as S}from"./jsx-runtime-9dc53467.js";import{r as h}from"./index-76fb7be0.js";import{h as X,T as Y,t as N,v as E,bf as ee,bg as te,bh as ae,V as ne}from"./ApplicationSessionManager-c419e9f9.js";import{g as q,B as L}from"./getEndpoint-ac94413e.js";import{u as k,b as oe,C as ie}from"./HelpPopover-611b34ba.js";import{d as se}from"./ToastMessage-313b7aae.js";import{u as re,a as le,S as de}from"./SchemaDrivenAnnotationEditor-2ed4e0b8.js";import"./OrientationBanner-a1ca5cdb.js";import{d as ce}from"./useEntity-526746bb.js";import"./SkeletonButton-007d85cd.js";import{S as me}from"./SkeletonTable-fdb2ca5b.js";import{d as A}from"./dayjs.min-f79c4412.js";import{F as ue}from"./FullWidthAlert-706fe840.js";import{f as v}from"./DateFormatter-d7a443b6.js";import{g as _e,u as pe,a as he}from"./useUploadDestination-030e1d3f.js";import{a as O}from"./UserBadge-a4dbf2ed.js";import{B as M}from"./Button-33299b2c.js";import{S as ye}from"./Skeleton-131bd473.js";import{n as fe}from"./noop-cb277961.js";import{M as Te}from"./Tooltip-801f2a9c.js";function be(o){if(!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(o))return!1;const r=new Date(o);return r instanceof Date&&!isNaN(r.getTime())&&r.toISOString()===o}function B(o){return typeof o=="number"||typeof o=="boolean"?o.toString():be(o)?v(A(o)):o}function R(o){const{entityId:r,versionNumber:a}=o,[b,c]=h.useState(!1),{isInExperimentalMode:y}=X(),{data:m,isLoading:f,refetch:_}=ce(r,a,!0),n=m==null?void 0:m.entityMetadata,l=m==null?void 0:m.annotations,{data:p}=re(r,{enabled:y}),{data:u,refetch:s}=le(r,{enabled:y&&!!p}),d=y&&!!p,T=!!n&&!!u&&A(n.modifiedOn).diff(A(u.validatedOn))>0,g=h.useCallback(async()=>{c(!0);const t=[_(),s()];await Promise.allSettled(t),c(!1)},[_,s]);return f||b?e(me,{numRows:3,numCols:2}):i(S,{children:[n&&l&&Y(l)?i("div",{className:"placeholder",children:["This"," ",N(E(n.concreteType))," ","has no annotations."]}):null,e("table",{className:"AnnotationsTable",children:i("tbody",{children:[l&&Object.keys(l).map(t=>i("tr",{className:"AnnotationsTable__Row",children:[e("td",{className:"AnnotationsTable__Row__Key",children:t}),e("td",{className:"AnnotationsTable__Row__Value",children:Array.isArray(l[t])?l[t].map(B).join(", "):B(l[t])})]},t)),d?i("tr",{className:"AnnotationsTable__Row",children:[e("td",{className:"AnnotationsTable__Row__Key Schema",children:"Validation Schema"}),e("td",{className:"AnnotationsTable__Row__Value",children:e("a",{href:`${q(L.REPO_ENDPOINT)}/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:p.jsonSchemaVersionInfo.schemaName})})]}):null]})}),n&&d&&T&&e(ue,{variant:"warning",description:`This ${N(E(n.concreteType))} has changed since it has been last validated. If this ${N(E(n.concreteType))} is expected to have annotations derived from the Validation Schema, they may not yet be visible.`,primaryButtonConfig:{text:"Reload Annotations",onClick:()=>{g()}},isGlobal:!1})]})}try{R.displayName="AnnotationsTable",R.__docgenInfo={description:"",displayName:"AnnotationsTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const I=({entityId:o,versionNumber:r})=>{var n,l,p,u,s,d,T;const{data:a}=k(o,r),b=a&&ee(a.entity),c=a?_e(a):void 0,y=(n=a==null?void 0:a.entity)==null?void 0:n.parentId,m=c==null?void 0:c.storageLocationId,{data:f}=pe(y,m,{enabled:y!==void 0&&m!=null});let _;return c&&(_=he(c,f)),a?e("table",{className:"MetadataTable",children:i("tbody",{children:[i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Name"}),e("td",{className:"MetadataTable__Row__Value",children:(l=a.entity)==null?void 0:l.name})]}),i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Type"}),e("td",{className:"MetadataTable__Row__Value",children:N(a.entityType)})]}),i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Synapse ID"}),e("td",{className:"MetadataTable__Row__Value",children:(p=a.entity)==null?void 0:p.id})]}),b&&i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Version"}),e("td",{className:"MetadataTable__Row__Value",children:te(a.entity)})]}),_&&i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Storage"}),e("td",{className:"MetadataTable__Row__Value",children:_})]}),i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:" Last Modified By"}),i("td",{className:"MetadataTable__Row__Value",children:[e(O,{userId:(u=a.entity)==null?void 0:u.modifiedBy})," at"," ",v(A((s=a.entity)==null?void 0:s.modifiedOn))]})]}),i("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Created By"}),i("td",{className:"MetadataTable__Row__Value",children:[e(O,{userId:(d=a.entity)==null?void 0:d.createdBy})," at"," ",v(A((T=a.entity)==null?void 0:T.createdOn))]})]})]})}):null};try{I.displayName="MetadataTable",I.__docgenInfo={description:"",displayName:"MetadataTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Ne=["METADATA","ANNOTATIONS"];function D(o){const{entityId:r,versionNumber:a,show:b,onClose:c,initialTab:y="METADATA",showTabs:m=!0,onEditModeChanged:f=fe}=o,_=h.useRef(null),[n,l]=h.useState(y),[p,u]=h.useState(!1),[s,d]=h.useState(!1),[T,g]=h.useState(()=>d(!1));h.useEffect(()=>(f(s),()=>{f(!1)}),[s,f]);const{data:t}=k(r,a),x=t&&t.permissions.canEdit,V=t&&ae(t.entityType),K=V&&t.entity.isLatestVersion,$=n==="METADATA"&&t&&!window.location.href.includes(r),j=i(M,{variant:"contained",onClick:()=>window.open(`${q(L.PORTAL_ENDPOINT)}#!Synapse:${r}`,"_blank","noopener"),children:["Open"," ",t?N(t==null?void 0:t.entityType):""]}),P=n==="ANNOTATIONS"&&s,F=e(M,{variant:"contained",onClick:()=>{_.current.formElement.current.requestSubmit()},children:"Save Annotations"}),G=n==="ANNOTATIONS"&&s,U=e(M,{variant:"outlined",onClick:()=>{g(()=>()=>d(!1)),u(!0)},children:"Cancel"}),W=x&&n==="ANNOTATIONS"&&!s,C=V&&!K,H=e(Te,{title:C?"Annotations can only be edited on the latest version":void 0,children:e("span",{children:e(M,{variant:"contained",disabled:C,onClick:()=>{d(!0)},children:"Edit"})})}),J=i(S,{children:[m&&!s?e("div",{className:"Tabs",children:Ne.map(w=>e("div",{className:"Tab",role:"tab",onClick:Q=>{Q.stopPropagation(),l(w)},"aria-selected":w===n,children:w},w))}):null,e("div",{style:n==="ANNOTATIONS"?{}:{display:"none"},children:s?e(ne,{children:e(de,{entityId:r,formRef:_,hideActions:!0,onSuccess:()=>{se("Annotations successfully updated.","success"),d(!1)},onCancel:()=>d(!1)})}):e(R,{entityId:r,versionNumber:a})}),e("div",{style:n==="METADATA"?{}:{display:"none"},children:e(I,{entityId:r,versionNumber:a})})]}),Z=e(ie,{open:p,title:"Unsaved Changes",content:"Any unsaved changes will be lost. Are you sure you want to close the editor?",onCancel:()=>{u(!1)},onConfirm:()=>{u(!1),T()}}),z=h.useMemo(()=>{if(t!=null&&t.entity.name){if(n==="ANNOTATIONS")return`${s?"Edit ":""}Annotations for ${t.entity.name}`}else return e(ye,{width:"40%"});return t.entity.name},[n,t==null?void 0:t.entity.name,s]);return e(oe,{className:"EntityMetadata",open:b,onCancel:()=>{s?(u(!0),g(()=>()=>{d(!1),c()})):c()},maxWidth:s?"md":"sm",title:z,content:J,actions:i(S,{children:[Z,G&&U,P&&F,W&&H,$&&j]})})}try{D.displayName="EntityModal",D.__docgenInfo={description:"",displayName:"EntityModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},initialTab:{defaultValue:null,description:"",name:"initialTab",required:!1,type:{name:"enum",value:[{value:'"METADATA"'},{value:'"ANNOTATIONS"'}]}},showTabs:{defaultValue:null,description:"",name:"showTabs",required:!1,type:{name:"boolean"}},onEditModeChanged:{defaultValue:null,description:"",name:"onEditModeChanged",required:!1,type:{name:"((isInEditMode: boolean) => void)"}}}}}catch{}export{D as E};
