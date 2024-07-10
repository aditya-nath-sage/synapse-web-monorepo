import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as s,R as M}from"./index-Dl6G-zuu.js";import{T as b}from"./TextField-RwHEkKyq.js";import{i as S,o as F,n as N,L as q}from"./SynapseClient-CyQCREGs.js";import"./OrientationBanner-BBh8JRgP.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import{u as V}from"./useMutation-CBtALiAZ.js";import{a as O}from"./useTeam-BDgJ37fE.js";import{d as k}from"./useTeamMembers-97u0kpcy.js";import{p as W}from"./papaparse.min-D3VSFJh2.js";import{B as h}from"./Box--1V6nYGL.js";import{T as E}from"./Typography-CxCAiHvb.js";import{A as B}from"./Alert-C43IQeyU.js";import{n as w}from"./noop-DX6rZLP_.js";function L(g){const{accessToken:f,keyFactory:l}=S(),m=F();return V({...g,mutationFn:d=>N.registerChallengeTeam(d,f),onSuccess:async(d,i,a)=>{await m.invalidateQueries({queryKey:l.getChallengeTeamListQueryKey(i.challengeId)})}})}function Q(){const{mutateAsync:g,isPending:f,error:l}=O(),{mutateAsync:m,isPending:d,error:i}=k(),{mutateAsync:a,isPending:j,error:u}=L(),C=s.useCallback(async(c,p,n)=>{const y=[];for(const r of p){const o=await m({teamId:c,inviteeEmail:r.trim(),message:n});y.push(o)}return y},[m]),v=s.useCallback(async(c,p,n,y)=>{const r=await g(c),o=a({teamId:r.id,challengeId:p}),I=C(r.id,n,y);return Promise.all([Promise.resolve(r),o,I])},[g,C,a]),R=s.useMemo(()=>l||i||u?[l,i,u].filter(n=>n!=null):void 0,[u,l,i]);return{createAndRegisterTeam:v,isPending:f||d||j,errors:R}}const U=3,D="Please limit the initial number of invited members to three. You may add additional members after the team has been created.",_=M.forwardRef(function(f,l){const{challengeId:m,onCanSubmitChange:d=w,onFinished:i=w}=f,[a,j]=s.useState({name:"",description:""}),[u,C]=s.useState(""),[v,R]=s.useState(""),c=e=>{const T={...a,...e};j(T)},{inviteesParseResult:p,parsedInvitees:n}=s.useMemo(()=>{const e=W.parse(v,{delimiter:",",transform(A){return A.trim()}}),T=e.data[0]||[];return{inviteesParseResult:e,parsedInvitees:T}},[v]),r=n.length>U,o=!!(a&&a.name&&a.name.length>1&&!r);s.useEffect(()=>{d(o)},[o,d]);const{createAndRegisterTeam:I,isPending:x,errors:P}=Q();return s.useImperativeHandle(l,()=>({submit(){if(!o){console.warn("Attempted to submit when form data was not valid. Nothing will happen.");return}I(a,m,n,u).then(([e])=>{i(e.id)}).catch(()=>{})}}),[o,n,I,a,m,u,i]),t.jsxs(h,{children:[t.jsx(E,{variant:"body1",sx:{lineHeight:"20px"},children:"Create a new team for this Challenge!"}),t.jsx(b,{id:"name",label:"Team Name",value:a.name,fullWidth:!0,autoFocus:!0,required:!0,onChange:e=>c({name:e.target.value}),disabled:x}),t.jsx(h,{display:"flex",children:t.jsx(b,{id:"description",label:t.jsx(h,{display:"flex",gap:2,children:t.jsx(h,{children:"Team Description"})}),value:a.description,fullWidth:!0,multiline:!0,rows:4,onChange:e=>c({description:e.target.value}),disabled:x})}),t.jsx(h,{display:"flex",children:t.jsx(b,{id:"message",label:t.jsx(h,{display:"flex",gap:2,children:t.jsx(h,{children:"Recruitment Message"})}),value:u,fullWidth:!0,multiline:!0,rows:4,onChange:e=>C(e.target.value),disabled:x})}),t.jsx(b,{id:"invitees",label:"Emails of Additional Members to Invite (max 3)",placeholder:"Enter emails separated by comma",value:v,fullWidth:!0,onChange:e=>R(e.target.value),disabled:x}),(r||!q(p.errors)||P)&&t.jsxs(B,{severity:"error",children:[r&&t.jsx(E,{variant:"body1",children:D}),p.errors.map((e,T)=>t.jsx(E,{variant:"body1",children:e.message},T)),P&&P.map(e=>t.jsx(E,{variant:"body1",children:e.reason},e.reason))]})]})});try{_.displayName="CreateChallengeTeam",_.__docgenInfo={description:"",displayName:"CreateChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCanSubmitChange:{defaultValue:null,description:"",name:"onCanSubmitChange",required:!1,type:{name:"((canSubmit: boolean) => void)"}},onFinished:{defaultValue:null,description:"",name:"onFinished",required:!1,type:{name:"((teamId: string) => void)"}}}}}catch{}export{_ as C};
