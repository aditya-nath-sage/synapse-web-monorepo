import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as p}from"./index-Cu9bd8lq.js";import{e as b,c as g,s as z,t as Q,u as X}from"./RegularExpressions-RV1YxBM7.js";import{U as Y,m as C,B as O,G as ee}from"./SynapseClient-DLsmXUrC.js";import{e as te,u as B}from"./useEntity-OLai_1ad.js";import{d as ae}from"./ToastMessage-8mzk2-LM.js";import{u as ne,a as se,S as oe}from"./SchemaDrivenAnnotationEditor-BIryZ3ap.js";import{aa as ie}from"./index-Cf31rgEj.js";import"./OrientationBanner-BKoSQ39U.js";import{N as re,b as le,C as de}from"./ConfirmationDialog-DEM2LcXE.js";import"./SkeletonButton-qvhv91j_.js";import"./SkeletonInlineBlock-xinjJ1wr.js";import{S as ce}from"./SkeletonTable-BnQ5noh_.js";import"./SkeletonParagraph-D8hc_zPd.js";import{d as N}from"./dayjs.min-D1RcYm3-.js";import{F as me}from"./FullWidthAlert-CpohRhD9.js";import{f as E}from"./DateFormatter-BOJgzgsC.js";import{g as ue,u as _e,a as pe}from"./FileHandleUtils-zD-hoU4y.js";import{U as I}from"./UserBadge-CGW-hOVT.js";import{B as A}from"./Button-BkvFhVsL.js";import{S as he}from"./Skeleton-D3uxr_0h.js";import{n as fe}from"./noop-DX6rZLP_.js";import{T as ye}from"./Tooltip-Cr4lETRB.js";function Te(s){if(!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(s))return!1;const i=new Date(s);return i instanceof Date&&!isNaN(i.getTime())&&i.toISOString()===s}function v(s){return typeof s=="number"||typeof s=="boolean"?s.toString():Te(s)?E(N(s)):s}function w(s){const{entityId:i,versionNumber:a}=s,[T,d]=p.useState(!1),h=re(ie.JSONSCHEMA_VALIDATION_STATUS),{data:c,isLoading:f,refetch:u}=te(i,a,!0),n=c==null?void 0:c.entityMetadata,r=c==null?void 0:c.annotations,{data:_}=ne(i,{enabled:h}),{data:m,refetch:o}=se(i,{enabled:h&&!!_}),l=h&&!!_,y=!!n&&!!m&&N(n.modifiedOn).diff(N(m.validatedOn))>0,j=p.useCallback(async()=>{d(!0);const t=[u(),o()];await Promise.allSettled(t),d(!1)},[u,o]);return f||T?e.jsx(ce,{numRows:3,numCols:2}):e.jsxs(e.Fragment,{children:[n&&r&&Y(r)?e.jsxs("div",{className:"placeholder",children:["This"," ",b(g(n.concreteType))," ","has no annotations."]}):null,e.jsx("table",{className:"AnnotationsTable",children:e.jsxs("tbody",{children:[r&&Object.keys(r).map(t=>e.jsxs("tr",{className:"AnnotationsTable__Row",children:[e.jsx("td",{className:"AnnotationsTable__Row__Key",children:t}),e.jsx("td",{className:"AnnotationsTable__Row__Value",children:Array.isArray(r[t])?r[t].map(v).join(", "):v(r[t])})]},t)),l?e.jsxs("tr",{className:"AnnotationsTable__Row",children:[e.jsx("td",{className:"AnnotationsTable__Row__Key Schema",children:"Validation Schema"}),e.jsx("td",{className:"AnnotationsTable__Row__Value",children:e.jsx("a",{href:`${C(O.REPO_ENDPOINT)}/repo/v1/schema/type/registered/${_.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:_.jsonSchemaVersionInfo.schemaName})})]}):null]})}),n&&l&&y&&e.jsx(me,{variant:"warning",description:`This ${b(g(n.concreteType))} has changed since it has been last validated. If this ${b(g(n.concreteType))} is expected to have annotations derived from the Validation Schema, they may not yet be visible.`,primaryButtonConfig:{text:"Reload Annotations",onClick:()=>{j()}},isGlobal:!1})]})}try{w.displayName="AnnotationsTable",w.__docgenInfo={description:"",displayName:"AnnotationsTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const M=({entityId:s,versionNumber:i})=>{var n,r,_,m,o,l,y;const{data:a}=B(s,i),T=a&&z(a.entity),d=a?ue(a):void 0,h=(n=a==null?void 0:a.entity)==null?void 0:n.parentId,c=d==null?void 0:d.storageLocationId,{data:f}=_e(h,c,{enabled:h!==void 0&&c!=null});let u;return d&&(u=pe(d,f)),a?e.jsx("table",{className:"MetadataTable",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Name"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:(r=a.entity)==null?void 0:r.name})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Type"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:b(a.entityType)})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Synapse ID"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:(_=a.entity)==null?void 0:_.id})]}),T&&e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Version"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:Q(a.entity)})]}),u&&e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Storage"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:u})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:" Last Modified By"}),e.jsxs("td",{className:"MetadataTable__Row__Value",children:[e.jsx(I,{userId:(m=a.entity)==null?void 0:m.modifiedBy})," at"," ",E(N((o=a.entity)==null?void 0:o.modifiedOn))]})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Created By"}),e.jsxs("td",{className:"MetadataTable__Row__Value",children:[e.jsx(I,{userId:(l=a.entity)==null?void 0:l.createdBy})," at"," ",E(N((y=a.entity)==null?void 0:y.createdOn))]})]})]})}):null};try{M.displayName="MetadataTable",M.__docgenInfo={description:"",displayName:"MetadataTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const be=["METADATA","ANNOTATIONS"];function V(s){const{entityId:i,versionNumber:a,show:T,onClose:d,initialTab:h="METADATA",showTabs:c=!0,onEditModeChanged:f=fe}=s,u=p.useRef(null),[n,r]=p.useState(h),[_,m]=p.useState(!1),[o,l]=p.useState(!1),[y,j]=p.useState(()=>l(!1));p.useEffect(()=>(f(o),()=>{f(!1)}),[o,f]);const{data:t}=B(i,a),D=t&&t.permissions.canEdit,S=t&&X(t.entityType),F=S&&t.entity.isLatestVersion,q=n==="METADATA"&&t&&!window.location.href.includes(i),L=e.jsxs(A,{variant:"contained",onClick:()=>window.open(`${C(O.PORTAL_ENDPOINT)}Synapse:${i}`,"_blank","noopener"),children:["Open"," ",t?b(t==null?void 0:t.entityType):""]}),k=n==="ANNOTATIONS"&&o,K=e.jsx(A,{variant:"contained",onClick:()=>{u.current.formElement.current.requestSubmit()},children:"Save Annotations"}),$=n==="ANNOTATIONS"&&o,G=e.jsx(A,{variant:"outlined",onClick:()=>{j(()=>()=>l(!1)),m(!0)},children:"Cancel"}),P=D&&n==="ANNOTATIONS"&&!o,R=S&&!F,U=e.jsx(ye,{title:R?"Annotations can only be edited on the latest version":void 0,children:e.jsx("span",{children:e.jsx(A,{variant:"contained",disabled:R,onClick:()=>{l(!0)},children:"Edit"})})}),W=e.jsxs(e.Fragment,{children:[c&&!o?e.jsx("div",{className:"Tabs",children:be.map(x=>e.jsx("div",{className:"Tab",role:"tab",onClick:Z=>{Z.stopPropagation(),r(x)},"aria-selected":x===n,children:x},x))}):null,e.jsx("div",{style:n==="ANNOTATIONS"?{}:{display:"none"},children:o?e.jsx(ee,{children:e.jsx(oe,{entityId:i,formRef:u,hideActions:!0,onSuccess:()=>{ae("Annotations successfully updated.","success"),l(!1)},onCancel:()=>l(!1)})}):e.jsx(w,{entityId:i,versionNumber:a})}),e.jsx("div",{style:n==="METADATA"?{}:{display:"none"},children:e.jsx(M,{entityId:i,versionNumber:a})})]}),H=e.jsx(de,{open:_,title:"Unsaved Changes",content:"Any unsaved changes will be lost. Are you sure you want to close the editor?",onCancel:()=>{m(!1)},onConfirm:()=>{m(!1),y()}}),J=p.useMemo(()=>{if(t!=null&&t.entity.name){if(n==="ANNOTATIONS")return`${o?"Edit ":""}Annotations for ${t.entity.name}`}else return e.jsx(he,{width:"40%"});return t.entity.name},[n,t==null?void 0:t.entity.name,o]);return e.jsx(le,{className:"EntityMetadata",open:T,onCancel:()=>{o?(m(!0),j(()=>()=>{l(!1),d()})):d()},maxWidth:o?"md":"sm",title:J,content:W,actions:e.jsxs(e.Fragment,{children:[H,$&&G,k&&K,P&&U,q&&L]})})}try{V.displayName="EntityModal",V.__docgenInfo={description:"",displayName:"EntityModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},initialTab:{defaultValue:null,description:"",name:"initialTab",required:!1,type:{name:"enum",value:[{value:'"METADATA"'},{value:'"ANNOTATIONS"'}]}},showTabs:{defaultValue:null,description:"",name:"showTabs",required:!1,type:{name:"boolean"}},onEditModeChanged:{defaultValue:null,description:"",name:"onEditModeChanged",required:!1,type:{name:"((isInEditMode: boolean) => void)"}}}}}catch{}export{V as E};
