import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{r as A}from"./index-Dl6G-zuu.js";import{I as y}from"./IconSvg-BBZ15ye5.js";import{I}from"./ImposeRestrictionDialog-pSxc2P84.js";import{u as x}from"./SynapseClient-D4gkDMC-.js";import{g as E}from"./index-0sKCi0IA.js";import{i as _,a as h}from"./RegularExpressions-CgDTvkkI.js";import"./OrientationBanner-DcDyIfis.js";import{u as L}from"./useEntity-VnPVwusp.js";import{B as b}from"./Button-CLkrjdQe.js";function a(i){var r;const{entityId:s,onACTMemberClick:c}=i,[d,e]=A.useState(!1),{data:t,isLoading:m}=L(s),{data:n,isLoading:p}=x(),l=m||p,u=(t==null?void 0:t.entity)&&!_(t.entity)&&!h(t.entity),f=t==null?void 0:t.permissions.canChangePermissions,C=((r=t==null?void 0:t.restrictionInformation)==null?void 0:r.restrictionLevel)===E.OPEN,g=!l&&C&&u&&(f||n);return o.jsxs(o.Fragment,{children:[o.jsx(I,{open:d,onClose:()=>e(!1),entityId:s}),g&&o.jsx(b,{onClick:()=>{n?c():e(!0)},startIcon:o.jsx(y,{icon:"addConditions",wrap:!1}),children:"Add Conditions for Use"})]})}try{a.displayName="AddConditionsForUseButton",a.__docgenInfo={description:"",displayName:"AddConditionsForUseButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onACTMemberClick:{defaultValue:null,description:"",name:"onACTMemberClick",required:!0,type:{name:"() => void"}}}}}catch{}export{a as A};
