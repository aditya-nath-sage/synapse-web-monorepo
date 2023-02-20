import{a as S,j as t,F as W}from"./jsx-runtime-670450c2.js";import{r as T,R as V}from"./index-f1f749bf.js";import{I as ne}from"./IconSvg-4ff66f27.js";import{cM as se,dJ as ce,aF as ie,cr as de,cR as ue,az as me}from"./SynapseContext-34356979.js";import{u as pe}from"./useDataAccessSubmission-b054fa25.js";import{at as he,j as fe}from"./SynapseConstants-9273577d.js";import{c as be}from"./useGetQueryResultBundle-fe152e50.js";import{S as ge}from"./immutable.es-16d68e74.js";import{S as ye}from"./ManagedACTAccessRequirementStatus-9671fe8d.js";import{S as Ce}from"./LoadingScreen-dfc91527.js";import{F as xe}from"./FullWidthAlert-2e72abf6.js";import{d as Re}from"./ToastMessage-45d6abdb.js";import{M as Ie,D as Se,a as ke}from"./DialogContent-ae7ed0de.js";import{D as ve}from"./DialogTitle-777ac347.js";import{S as Y}from"./Stack-d8cf6874.js";import{B as oe,I as Ee}from"./Box-3a18cc2d.js";import{B as $}from"./Button-ad1d45e7.js";import{T as k}from"./Typography-1aca7d5c.js";import{_ as H}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as g}from"./extends-98964cd2.js";import{g as J,a as Q,s as z,i as O,k as L,c as X,r as we,p as Te,f as re}from"./styled-8a301de6.js";import{B as Be}from"./ButtonBase-428d3c85.js";import{a as _e,c as K}from"./Clear-4868d5d0.js";function Pe(e){return J("PrivateSwitchBase",e)}Q("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Fe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Me=e=>{const{classes:o,checked:s,disabled:r,edge:n}=e,a={root:["root",s&&"checked",r&&"disabled",n&&`edge${L(n)}`],input:["input"]};return X(a,Pe,o)},qe=z(Be)(({ownerState:e})=>g({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Le=z("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ne=T.forwardRef(function(o,s){const{autoFocus:r,checked:n,checkedIcon:a,className:p,defaultChecked:u,disabled:m,disableFocusRipple:d=!1,edge:y=!1,icon:C,id:c,inputProps:R,inputRef:l,name:f,onBlur:I,onChange:v,onFocus:b,readOnly:P,required:F=!1,tabIndex:E,type:x,value:q}=o,N=H(o,Fe),[i,B]=_e({controlled:n,default:Boolean(u),name:"SwitchBase",state:"checked"}),h=se(),_=w=>{b&&b(w),h&&h.onFocus&&h.onFocus(w)},U=w=>{I&&I(w),h&&h.onBlur&&h.onBlur(w)},j=w=>{if(w.nativeEvent.defaultPrevented)return;const ee=w.target.checked;B(ee),v&&v(w,ee)};let M=m;h&&typeof M>"u"&&(M=h.disabled);const le=x==="checkbox"||x==="radio",D=g({},o,{checked:i,disabled:M,disableFocusRipple:d,edge:y}),Z=Me(D);return S(qe,g({component:"span",className:O(Z.root,p),centerRipple:!0,focusRipple:!d,disabled:M,tabIndex:null,role:void 0,onFocus:_,onBlur:U,ownerState:D,ref:s},N,{children:[t(Le,g({autoFocus:r,checked:n,defaultChecked:u,className:Z.input,disabled:M,id:le&&c,name:f,onChange:j,readOnly:P,ref:l,required:F,ownerState:D,tabIndex:E,type:x},x==="checkbox"&&q===void 0?{}:{value:q},R)),i?a:C]}))}),je=Ne,$e=K(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ae=K(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Oe=K(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ze(e){return J("MuiCheckbox",e)}const Ue=Q("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),G=Ue,De=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ge=e=>{const{classes:o,indeterminate:s,color:r}=e,n={root:["root",s&&"indeterminate",`color${L(r)}`]},a=X(n,ze,o);return g({},o,a)},Ve=z(je,{shouldForwardProp:e=>we(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,s.color!=="default"&&o[`color${L(s.color)}`]]}})(({theme:e,ownerState:o})=>g({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Te(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${G.checked}, &.${G.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${G.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),We=t(Ae,{}),Ye=t($e,{}),He=t(Oe,{}),Je=T.forwardRef(function(o,s){var r,n;const a=re({props:o,name:"MuiCheckbox"}),{checkedIcon:p=We,color:u="primary",icon:m=Ye,indeterminate:d=!1,indeterminateIcon:y=He,inputProps:C,size:c="medium",className:R}=a,l=H(a,De),f=d?y:m,I=d?y:p,v=g({},a,{color:u,indeterminate:d,size:c}),b=Ge(v);return t(Ve,g({type:"checkbox",inputProps:g({"data-indeterminate":d},C),icon:T.cloneElement(f,{fontSize:(r=f.props.fontSize)!=null?r:c}),checkedIcon:T.cloneElement(I,{fontSize:(n=I.props.fontSize)!=null?n:c}),ownerState:v,ref:s,className:O(b.root,R)},l,{classes:b}))}),Qe=Je;function Xe(e){return J("MuiFormControlLabel",e)}const Ke=Q("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),A=Ke,Ze=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],eo=e=>{const{classes:o,disabled:s,labelPlacement:r,error:n}=e,a={root:["root",s&&"disabled",`labelPlacement${L(r)}`,n&&"error"],label:["label",s&&"disabled"]};return X(a,Xe,o)},oo=z("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${A.label}`]:o.label},o.root,o[`labelPlacement${L(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>g({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${A.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${A.label}`]:{[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),to=T.forwardRef(function(o,s){var r;const n=re({props:o,name:"MuiFormControlLabel"}),{className:a,componentsProps:p={},control:u,disabled:m,disableTypography:d,label:y,labelPlacement:C="end",slotProps:c={}}=n,R=H(n,Ze),l=se();let f=m;typeof f>"u"&&typeof u.props.disabled<"u"&&(f=u.props.disabled),typeof f>"u"&&l&&(f=l.disabled);const I={disabled:f};["checked","name","onChange","value","inputRef"].forEach(x=>{typeof u.props[x]>"u"&&typeof n[x]<"u"&&(I[x]=n[x])});const v=ce({props:n,muiFormControl:l,states:["error"]}),b=g({},n,{disabled:f,labelPlacement:C,error:v.error}),P=eo(b),F=(r=c.typography)!=null?r:p.typography;let E=y;return E!=null&&E.type!==k&&!d&&(E=t(k,g({component:"span"},F,{className:O(P.label,F==null?void 0:F.className),children:E}))),S(oo,g({className:O(P.root,a),ownerState:b,ref:s},R,{children:[T.cloneElement(u,I),E]}))}),no=to,ae="category",so="category email prompt",ro="rejection reason",ao="email text",lo=`Thank you for submitting your data access request.
`,co=`
If you have questions, do not respond to this email address. Instead, reply to:
act@sagebionetworks.org`;function io(e){const{category:o,rows:s,selectedRowIds:r,setSelectedRowIds:n,rejectionReasonFormTextIndex:a}=e,[p,u]=V.useState(!1);return S(W,{children:[S(k,{variant:"body1",onClick:()=>u(!p),sx:{fontWeight:700,cursor:"pointer",my:1},children:[t(ne,{icon:p?"expandMore":"chevronRight",sx:{color:"grey.700"},wrap:!1}),o]}),t(me,{in:p,children:t(Y,{sx:{ml:3},children:(s??[]).map(m=>t(no,{control:t(Qe,{checked:r.has(m.rowId),size:"small",onChange:d=>{d.target.checked?n(r.add(m.rowId)):n(r.remove(m.rowId))}}),label:t(k,{variant:"smallText1",children:m.values[a]})},m.rowId))})})]})}function uo(e){var y,C;const{tableQuery:o,selectedRowIds:s,setSelectedRowIds:r}=e,{data:n,isLoading:a,error:p}=o,u=(y=n==null?void 0:n.queryResult)==null?void 0:y.queryResults.headers.findIndex(c=>c.name.toLowerCase()===ae),m=(C=n==null?void 0:n.queryResult)==null?void 0:C.queryResults.headers.findIndex(c=>c.name.toLowerCase()===ro),d=n&&n.queryResult&&n.queryResult.queryResults.rows.reduce((c,R)=>{const l=R.values[u];return c[l]=[...c[l]||[],R],c},{});return S(W,{children:[t(k,{variant:"headline3",gutterBottom:!0,children:"Reasons for rejecting"}),t(k,{variant:"body1",gutterBottom:!0,children:"You may wish to reject the user's data access request for a specific reason. The list below contains some common rejection reasons. You will have a chance to edit the response before submitting it, including adding any rejection reason(s) not listed here."}),a&&t(Y,{sx:{my:2},children:t(Ce,{size:30})}),p&&t(ie,{error:p}),d&&t(de,{children:Object.keys(d).map(c=>t(io,{category:c,rows:d[c],selectedRowIds:s,setSelectedRowIds:r,rejectionReasonFormTextIndex:m},c))}),t(k,{variant:"headline3",sx:{mt:1},gutterBottom:!0,children:"We’ll generate a response email message based on your selections."}),t(k,{variant:"body1",gutterBottom:!0,children:"If your reasons for rejecting are not shown here, that’s okay! You can edit the complete text of the message on the next screen before sending it."})]})}function mo(e){const{emailText:o,setEmailText:s}=e;return S(W,{children:[t(k,{variant:"headline3",gutterBottom:!0,children:"Edit the text of the rejection message"}),t(k,{variant:"body1",gutterBottom:!0,children:"This message will be sent to the data requester. You may edit it, or add custom text to the message."}),t(ue,{multiline:!0,fullWidth:!0,rows:15,value:o,onChange:r=>{s(r.target.value)}})]})}function te(e){var x,q,N;const{open:o,tableId:s=he,onClose:r,submissionId:n}=e,[a,p]=V.useState(1),[u,m]=V.useState(null),[d,y]=T.useState(""),[C,c]=T.useState(ge()),R=be({entityId:s,query:{sql:`SELECT * FROM ${s}`},partMask:fe,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest"}),{data:l}=R,f=(x=l==null?void 0:l.queryResult)==null?void 0:x.queryResults.headers.findIndex(i=>i.name.toLowerCase()===ae),I=(q=l==null?void 0:l.queryResult)==null?void 0:q.queryResults.headers.findIndex(i=>i.name.toLowerCase()===so),v=(N=l==null?void 0:l.queryResult)==null?void 0:N.queryResults.headers.findIndex(i=>i.name.toLowerCase()===ao),b=l&&l.queryResult&&C.reduce((i,B)=>{const h=l.queryResult.queryResults.rows.find(M=>M.rowId===B),_=h.values[f],U=h.values[I],j=h.values[v];return i[_]?i[_].reasons=[...i[_].reasons,j]:i[_]={sectionText:U,reasons:[j]},i},{}),P=b&&lo+Object.keys(b).reduce((i,B)=>{const h=b[B].sectionText;i+=`
`+h+`
`;for(const _ of b[B].reasons)i+=`
* `+_+`
`;return i},"")+co;T.useEffect(()=>{P&&y(P)},[C]);const{mutate:F}=pe();function E(i){F({submissionId:n.toString(),newState:ye.REJECTED,rejectedReason:i},{onSuccess:()=>{m(null),Re("Submission rejected and message sent to requester","info"),r()},onError:B=>{m(B)}})}return S(Ie,{open:o,onClose:r,maxWidth:"md",fullWidth:!0,children:[t(ve,{children:S(Y,{direction:"row",alignItems:"center",gap:"5px",children:["Reject Request?",t(oe,{sx:{flexGrow:1}}),t(Ee,{onClick:r,children:t(ne,{icon:"close",wrap:!1,sx:{color:"grey.700"}})})]})}),S(Se,{children:[a===1&&t(uo,{tableQuery:R,selectedRowIds:C,setSelectedRowIds:c}),a===2&&t(mo,{emailText:d,setEmailText:y}),u&&t(xe,{variant:"danger",description:u.reason,isGlobal:!1})]}),S(ke,{children:[a===2&&t($,{variant:"outlined",onClick:()=>p(1),children:"Back"}),t(oe,{sx:{flexGrow:1}}),t($,{variant:"outlined",onClick:r,children:"Cancel"}),a===1&&t($,{variant:"contained",onClick:()=>p(2),children:"Generate Email"}),a===2&&t($,{variant:"contained",onClick:()=>{E(d)},children:"Reject and Notify Requester"})]})]})}try{te.displayName="RejectDataAccessRequestModal",te.__docgenInfo={description:`Modal component presented to a data access submission reviewer when they decide to reject a request.
The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
After crafting a message, the user can reject the submission and send the message to the requester.`,displayName:"RejectDataAccessRequestModal",props:{submissionId:{defaultValue:null,description:"",name:"submissionId",required:!0,type:{name:"string | number"}},tableId:{defaultValue:null,description:"",name:"tableId",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{te as R};
//# sourceMappingURL=RejectDataAccessRequestModal-5cfb8948.js.map
