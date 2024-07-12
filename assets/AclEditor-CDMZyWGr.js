import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{U as y}from"./UserOrTeamBadge-BIeWVKcd.js";import{b1 as x,b2 as S,b3 as u}from"./SynapseClient-B9wl3b07.js";import{T as h}from"./TextField-x8Micm4J.js";import{M as f}from"./MenuItem-BEeFhL08.js";import{T as n}from"./Typography-CxCAiHvb.js";import{I as A}from"./IconSvgButton-_jDl32c8.js";import{S as p}from"./Stack-CqpovyXN.js";import{U as T}from"./UserSearchBoxV2-OhDNywML.js";import{S as g}from"./LoadingScreen-BKn5Y0i1.js";import{B as l}from"./Box--1V6nYGL.js";import{T as L}from"./ButtonBase-DE7aKxis.js";import{C as j}from"./_getTag-BQOryPI7.js";const d=s=>{const{currentAccessType:i,availablePermissionLevels:t,onChange:o}=s;return e.jsx(h,{value:x(i)||null,onChange:r=>{const c=S(r.target.value);c||console.error(`ACCESS_TYPE[] not found for PermissionLevel: ${r.target.value}`),o(c||null)},fullWidth:!0,select:!0,SelectProps:{renderValue:r=>u[r]},size:"small",children:Object.values(t).map(r=>e.jsx(f,{value:r,children:e.jsx(n,{variant:"smallText1",noWrap:!0,children:u[r]})},r))})};try{d.displayName="PermissionLevelMenu",d.__docgenInfo={description:"",displayName:"PermissionLevelMenu",props:{currentAccessType:{defaultValue:null,description:"",name:"currentAccessType",required:!0,type:{name:"ACCESS_TYPE[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:'("CAN_REVIEW_SUBMISSIONS" | "IS_EXEMPTION_ELIGIBLE" | "CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE")[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessTypes: ACCESS_TYPE[]) => void"}}}}}catch{}const C="Remove from AR Permissions",m=s=>{const{resourceAccess:i,availablePermissionLevels:t,onChange:o,onRemove:r}=s;return e.jsx(e.Fragment,{children:e.jsxs(p,{direction:"row",justifyContent:"space-between",alignItems:"center",gap:"10px",py:"6px",role:"row",children:[e.jsx(n,{fontSize:"16px",lineHeight:"20px",children:e.jsx(y,{principalId:i.principalId})}),e.jsxs(p,{direction:"row",gap:"10px",alignItems:"center",width:"225px",children:[e.jsx(d,{currentAccessType:i.accessType,availablePermissionLevels:t,onChange:o}),e.jsx(A,{"aria-label":C,onClick:()=>r(),icon:"delete",sx:{"&:hover":{color:"error.main"}}})]})]})})};try{m.displayName="ResourceAccessItem",m.__docgenInfo={description:"",displayName:"ResourceAccessItem",props:{resourceAccess:{defaultValue:null,description:"",name:"resourceAccess",required:!0,type:{name:"ResourceAccess"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:'("CAN_REVIEW_SUBMISSIONS" | "IS_EXEMPTION_ELIGIBLE" | "CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE")[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessType: ACCESS_TYPE[]) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}function I(s){const{isLoading:i,resourceAccessList:t,availablePermissionLevels:o,emptyText:r,addResourceAccessItem:c,updateResourceAccessItem:_,removeResourceAccessItem:v}=s;return i?e.jsx(l,{display:"flex",justifyContent:"center",height:"150px",children:e.jsx(g,{size:50})}):e.jsxs(l,{children:[e.jsxs(l,{mb:"30px",children:[e.jsx(n,{variant:"headline3",mb:"10px",children:"Users and Teams with Permissions"}),t.length===0?e.jsx(n,{variant:"body1Italic",children:r}):e.jsx(L,{children:t.map(a=>e.jsx(j,{children:e.jsx(m,{resourceAccess:a,availablePermissionLevels:o,onChange:E=>_(a.principalId,E),onRemove:()=>v(a.principalId)},a.principalId)},a.principalId))})]}),e.jsxs(l,{children:[e.jsx(n,{variant:"headline3",mb:"10px",children:"Add More"}),e.jsx(n,{sx:{variant:"body1",lineHeight:"20px",fontStyle:"italic",color:"grey.900"},mb:"20px",children:"Search for a username or team to add. You can search by username, first or last names, or team name"}),e.jsxs(l,{children:[e.jsx(n,{component:"label",variant:"smallText2",htmlFor:"reviewer-search",children:"Add a user or team"}),e.jsx(T,{value:null,inputId:"reviewer-search",placeholder:"Username, name (first and last) or team name.",onChange:a=>c(a)})]})]})]})}try{I.displayName="AclEditor",I.__docgenInfo={description:"",displayName:"AclEditor",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},resourceAccessList:{defaultValue:null,description:"",name:"resourceAccessList",required:!0,type:{name:"ResourceAccess[]"}},availablePermissionLevels:{defaultValue:null,description:"",name:"availablePermissionLevels",required:!0,type:{name:'("CAN_REVIEW_SUBMISSIONS" | "IS_EXEMPTION_ELIGIBLE" | "CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE")[]'}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!0,type:{name:"ReactNode"}},addResourceAccessItem:{defaultValue:null,description:"",name:"addResourceAccessItem",required:!0,type:{name:"(newReviewerId: string | null) => void"}},updateResourceAccessItem:{defaultValue:null,description:"",name:"updateResourceAccessItem",required:!0,type:{name:"(principalId: number, accessType: ACCESS_TYPE[]) => void"}},removeResourceAccessItem:{defaultValue:null,description:"",name:"removeResourceAccessItem",required:!0,type:{name:"(principalId: number) => void"}}}}}catch{}export{I as A};
