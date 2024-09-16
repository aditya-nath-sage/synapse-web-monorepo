import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{U as q}from"./UserOrTeamBadge-CX-95FNE.js";import{b7 as R,au as U,b8 as h}from"./SynapseClient-Cj-XHO4n.js";import{T as D}from"./TextField-GbZ9n7Oq.js";import{M as A}from"./MenuItem-Chy-1kke.js";import{T as i}from"./Typography-5kwXSe6k.js";import{I as M}from"./IconSvgButton-DZTidrYY.js";import{S as f}from"./Stack-B3TCA9BM.js";import{U as F}from"./UserSearchBoxV2-mjVzrHCo.js";import{J as I,P as Y,a as H}from"./SynapseConstants-CnTS8uWh.js";import{I as T}from"./IconSvg-CQeDvNb8.js";import"./SkeletonButton-DkbNcQyC.js";import"./SkeletonInlineBlock-jATawT4h.js";import{S as X}from"./SkeletonTable-BTaXwfue.js";import{S as _}from"./SkeletonParagraph-u6_MNbF7.js";import{S as L}from"./Skeleton-DTl-q8yD.js";import{B as d}from"./Box-CSxp1att.js";import{T as W}from"./ButtonBase-B1PyklHR.js";import{C as z}from"./_getTag-CNUVqXoc.js";import{B as G}from"./Button-PewxtVEx.js";import{T as J}from"./Tooltip-BUEOzDXu.js";import{F as K}from"./FormControlLabel-N7jszZ_A.js";import{C as Q}from"./Checkbox-CGc3q-5A.js";import{n as Z}from"./noop-DX6rZLP_.js";const p="CUSTOM",g="Custom",y=a=>{const{currentAccessType:s,availablePermissionLevels:u,onChange:t}=a,o=R(s),c=o==null;return e.jsxs(D,{value:c?p:o,onChange:n=>{const l=U(n.target.value);t(l||s)},fullWidth:!0,select:!0,SelectProps:{renderValue:n=>n==p?g:h[n]},size:"small",children:[Object.values(u).map(n=>e.jsx(A,{value:n,children:e.jsx(i,{variant:"smallText1",noWrap:!0,children:h[n]})},n)),c&&e.jsx(A,{value:p,children:e.jsx(i,{variant:"smallText1",noWrap:!0,children:g})})]})};try{y.displayName="PermissionLevelMenu",y.__docgenInfo={description:"",displayName:"PermissionLevelMenu",props:{currentAccessType:{defaultValue:null,description:"",name:"currentAccessType",required:!0,type:{name:"ACCESS_TYPE[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessTypes: ACCESS_TYPE[]) => void"}}}}}catch{}function v(a){const{accessType:s}=a;return h[R(s)]||"Custom"}try{v.displayName="ReadOnlyPermissionLevel",v.__docgenInfo={description:"",displayName:"ReadOnlyPermissionLevel",props:{accessType:{defaultValue:null,description:"",name:"accessType",required:!0,type:{name:"ACCESS_TYPE[]"}}}}}catch{}const $="Remove from AR Permissions",x=a=>{const{resourceAccess:s,availablePermissionLevels:u,canChangePermission:t,showDeleteButton:o,onChange:c,onRemove:n,displayedPermissionLevelOverride:l}=a;return e.jsx(e.Fragment,{children:e.jsxs(f,{direction:"row",justifyContent:"space-between",alignItems:"center",gap:"10px",py:"6px",role:"row",children:[e.jsx(i,{fontSize:"16px",lineHeight:"20px",children:e.jsx(q,{principalId:s.principalId,openLinkInNewTab:!0})}),e.jsxs(f,{direction:"row",gap:"10px",alignItems:"center",width:"200px",flexShrink:0,children:[t?e.jsx(y,{currentAccessType:s.accessType,availablePermissionLevels:u,onChange:c}):e.jsx(i,{variant:"smallText1",flexGrow:1,children:l??e.jsx(v,{accessType:s.accessType})}),o&&e.jsx(M,{"aria-label":$,onClick:()=>n(),icon:"delete",sx:{"&:hover":{color:"error.main"}}})]})]})})};try{x.displayName="ResourceAccessItem",x.__docgenInfo={description:"",displayName:"ResourceAccessItem",props:{canChangePermission:{defaultValue:null,description:"",name:"canChangePermission",required:!0,type:{name:"boolean"}},showDeleteButton:{defaultValue:null,description:"",name:"showDeleteButton",required:!0,type:{name:"boolean"}},resourceAccess:{defaultValue:null,description:"",name:"resourceAccess",required:!0,type:{name:"ResourceAccess"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},displayedPermissionLevelOverride:{defaultValue:null,description:"",name:"displayedPermissionLevelOverride",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessType: ACCESS_TYPE[]) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}function ee(){return e.jsxs(f,{gap:2,role:"progressbar",children:[e.jsx(L,{height:50,width:200}),e.jsx(_,{numRows:2}),e.jsx(X,{numCols:2,numRows:4,rowHeight:"30px"}),e.jsx(L,{height:50,width:100}),e.jsx(_,{numRows:2})]})}const re="Add a user or team",se="Make Public",ne="Remove Public Access",ae="Notify people via email";function j(a){const{resourceAccessList:s,availablePermissionLevels:u,canEdit:t,canRemoveEntry:o=t,isLoading:c=!1,emptyText:n,onAddPrincipalToAcl:l,updateResourceAccessItem:E,removeResourceAccessItem:C,showAddRemovePublicButton:w,showNotifyCheckbox:S,notifyCheckboxValue:P,onNotifyCheckboxChange:V=Z,displayedPermissionLevelOverride:b}=a;if(c)return e.jsx(ee,{});const B=!!s.find(r=>I.includes(r.principalId))?{startIcon:e.jsx(T,{icon:"close",wrap:!1}),children:ne,onClick:()=>{I.forEach(r=>{C(r)})}}:{startIcon:e.jsx(T,{icon:"public",wrap:!1}),children:se,onClick:()=>{l(Y),l(H)}};return e.jsxs(d,{children:[e.jsxs(d,{mb:"30px",children:[e.jsx(i,{variant:"headline3",mb:"10px",children:"Users and Teams with Permissions"}),s.length===0?e.jsx(i,{variant:"body1Italic",children:n}):e.jsx(W,{children:s.map(r=>{const m=typeof t=="function"?t(r):t,N=typeof o=="function"?o(r):o,O=b?b(r):void 0;return e.jsx(z,{children:e.jsx(x,{resourceAccess:r,availablePermissionLevels:u,canChangePermission:m,displayedPermissionLevelOverride:O,showDeleteButton:N,onChange:k=>E(r.principalId,k),onRemove:()=>C(r.principalId)})},r.principalId)})})]}),t&&e.jsxs(d,{children:[e.jsx(i,{variant:"headline3",mb:"10px",children:"Add More"}),e.jsx(i,{sx:{variant:"body1",lineHeight:"20px",fontStyle:"italic",color:"text.secondary"},mb:"20px",children:"Search for a username or team to add. You can search by username, first or last names, or team name."}),e.jsxs(d,{children:[e.jsx(i,{component:"label",variant:"smallText2",htmlFor:"reviewer-search",children:re}),e.jsx(F,{value:null,inputId:"reviewer-search",placeholder:"Username, name (first and last) or team name.",onChange:r=>{const m=parseInt(r||"");m&&l(m)}})]}),e.jsxs(d,{display:"flex",justifyContent:"space-between",gap:2,children:[e.jsx(d,{children:w&&e.jsx(G,{size:"small",variant:"outlined",...B})}),S&&e.jsx(J,{title:"Select to notify newly added people that this item has been shared with them",children:e.jsx(K,{sx:{mr:0},control:e.jsx(Q,{value:P,onChange:()=>V(!P)}),label:e.jsx(i,{variant:"smallText1",children:ae})})})]})]}),!t&&e.jsx(i,{variant:"body1",children:"You do not have sufficient privileges to modify the sharing settings."})]})}try{j.displayName="AclEditor",j.__docgenInfo={description:"",displayName:"AclEditor",props:{resourceAccessList:{defaultValue:null,description:"",name:"resourceAccessList",required:!0,type:{name:"ResourceAccess[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:"PermissionLevel[]"}},canEdit:{defaultValue:null,description:"If true, the user can edit the ACL. If a function, it will be called with the ResourceAccess to determine if the user can edit it.",name:"canEdit",required:!0,type:{name:"boolean | ((resourceAccess: ResourceAccess) => boolean)"}},canRemoveEntry:{defaultValue:null,description:"If true, the user can remove any entry from the ACL. a function, it will be called with the ResourceAccess to determine if the user can remove it.\nIf undefined, then the behavior will fall back to the value of `canEdit`",name:"canRemoveEntry",required:!1,type:{name:"boolean | ((resourceAccess: ResourceAccess) => boolean)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!0,type:{name:"ReactNode"}},onAddPrincipalToAcl:{defaultValue:null,description:"",name:"onAddPrincipalToAcl",required:!0,type:{name:"(id: number) => void"}},updateResourceAccessItem:{defaultValue:null,description:"",name:"updateResourceAccessItem",required:!0,type:{name:"(principalId: number, accessType: ACCESS_TYPE[]) => void"}},removeResourceAccessItem:{defaultValue:null,description:"",name:"removeResourceAccessItem",required:!0,type:{name:"(principalId: number) => void"}},showAddRemovePublicButton:{defaultValue:null,description:"If true, shows a button to add/remove AUTHENTICATED and PUBLIC groups when in edit mode",name:"showAddRemovePublicButton",required:!0,type:{name:"boolean"}},showNotifyCheckbox:{defaultValue:null,description:"If present, a checkbox to notify those added to the email will be shown.",name:"showNotifyCheckbox",required:!0,type:{name:"boolean"}},notifyCheckboxValue:{defaultValue:null,description:"",name:"notifyCheckboxValue",required:!1,type:{name:"boolean"}},onNotifyCheckboxChange:{defaultValue:null,description:"",name:"onNotifyCheckboxChange",required:!1,type:{name:"((checked: boolean) => void)"}},displayedPermissionLevelOverride:{defaultValue:null,description:`In special cases, can be used to display a permission level that is different from the typical permission levels.
For example, the PUBLIC group "Can download" an entity if they have READ access and the entity is marked as
"open data" (open data status is not captured in the ResourceAccess)`,name:"displayedPermissionLevelOverride",required:!1,type:{name:"((resourceAccess: ResourceAccess) => string)"}}}}}catch{}export{j as A,ee as a};
