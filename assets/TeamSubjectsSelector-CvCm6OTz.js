import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{R as g}from"./index-CIIvWsNs.js";import{r as T}from"./index-Dl6G-zuu.js";import{I as w,A as O,H as M}from"./IconSvg-DMEhcShK.js";import{aT as L}from"./SynapseClient-CyQCREGs.js";import"./OrientationBanner-BBh8JRgP.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import{u as B}from"./useTeam-BDgJ37fE.js";import{T as C}from"./TeamBadge-gyvr2m5I.js";import{S as _}from"./Stack-CqpovyXN.js";import{T as b}from"./Typography-CxCAiHvb.js";import{S as U}from"./Skeleton-DgVklRTa.js";import{B as k}from"./Box--1V6nYGL.js";import{I as q}from"./IconButton-DYXdVn2C.js";import{I as P}from"./InputLabel-eJTTrjzY.js";import{T as V}from"./TextField-x8Micm4J.js";import{B as G}from"./Button-DBz2LXAC.js";import{T as $}from"./Tooltip-Drs5efNb.js";import{A as F}from"./Alert-C43IQeyU.js";import{n as H}from"./noop-DX6rZLP_.js";const x=r=>{const{teamId:s}=r,{data:a,isLoading:m,error:o}=B(s);return o?e.jsxs(_,{gap:"5px",direction:"row",alignItems:"center",role:"alert",children:[e.jsx(L,{color:"error"}),e.jsx(b,{variant:"smallText1",color:"error",children:(o==null?void 0:o.reason)||`Error: ${s}`})]}):m||!a?e.jsx(U,{width:125,height:30}):e.jsx(C,{teamId:a.id,teamName:a.name})};try{x.displayName="TeamBadgeOrError",x.__docgenInfo={description:"",displayName:"TeamBadgeOrError",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}}}}}catch{}const f=r=>`Team ${r} has already been added to this AR.`,E=r=>`Parsing errors encountered. Invalid Team ID: ${r}`,Y="No teams selected.",W="Remove from Access Requirement",j="Enter Team IDs (i.e. 123, 456)",y="",A=r=>{const{subjects:s,onUpdate:a,onUpdateTeamIDsTextbox:m=H}=r,[o,S]=T.useState(y),[I,l]=T.useState(null),n=T.useMemo(()=>s.filter(t=>t.type===g.TEAM?t:null),[s]),h=t=>{S(t),m(t)},R=t=>{const p=n.filter(i=>i.id!==t);a(p)},D=t=>{const p=t==null?void 0:t.split(",").map(c=>c.trim()),i=[...new Set(p)];if(i&&i.length>0){const c=[...n];for(const d of i){const v=/^\d+$/.test(d),N=n.some(u=>u.id===d);if(v)if(N){l(f(d));return}else{const u={id:d,type:g.TEAM};c.push(u)}else{l(E(d));return}}h(y),a(c)}l(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{display:"flex",flexWrap:"wrap",gap:"0px 15px",pb:"10px",children:[n.length===0&&e.jsx(b,{variant:"body1Italic",pb:2,children:Y}),n.map(t=>e.jsxs(_,{direction:"row",alignItems:"center",pb:1,"data-testid":"selected-team",children:[e.jsx(x,{teamId:t.id}),e.jsx(q,{"aria-label":W,onClick:()=>R(t.id),sx:{"&:hover":{color:"error.main"}},children:e.jsx(w,{icon:"delete",fontSize:"inherit",wrap:!1})})]},t.id))]}),e.jsx(P,{htmlFor:"teamIDs",children:"Add Team IDs"}),e.jsxs(_,{direction:"row",gap:1,alignItems:"center",mb:2,children:[e.jsx(V,{id:"teamIDs",name:"teamIDs",placeholder:j,value:o,onChange:t=>h(t.target.value),fullWidth:!0}),e.jsx(G,{startIcon:e.jsx(O,{}),variant:"outlined",sx:{flexShrink:0,height:"53px"},onClick:()=>D(o),disabled:o==="",children:"Add Teams"}),e.jsx($,{title:j,placement:"right",children:e.jsx(M,{sx:{color:"grey.600"}})})]}),I&&e.jsx(F,{severity:"warning",children:I})]})};try{f.displayName="TEAM_ALREADY_SELECTED",f.__docgenInfo={description:"",displayName:"TEAM_ALREADY_SELECTED",props:{}}}catch{}try{E.displayName="TEAM_PARSING_ERROR",E.__docgenInfo={description:"",displayName:"TEAM_PARSING_ERROR",props:{}}}catch{}try{A.displayName="TeamSubjectsSelector",A.__docgenInfo={description:"",displayName:"TeamSubjectsSelector",props:{subjects:{defaultValue:null,description:"",name:"subjects",required:!0,type:{name:"RestrictableObjectDescriptor[]"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!0,type:{name:"(subjects: RestrictableObjectDescriptor[]) => void"}},onUpdateTeamIDsTextbox:{defaultValue:null,description:"",name:"onUpdateTeamIDsTextbox",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}export{A as T};
