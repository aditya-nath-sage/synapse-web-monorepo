import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{o as v,k as x,q as S,u as I,b4 as k,s as E}from"./SynapseClient-C1hEaEDx.js";import{U as _,w as R,x as U}from"./SynapseConstants-D3KdaG9T.js";import{r as f}from"./index-Dl6G-zuu.js";import"./RegularExpressions-D6yUxzx6.js";import"./getEndpoint-CjoHA800.js";import"./OrientationBanner-D9iiRUAg.js";import{A as P}from"./AccountLevelBadge-9DI1mu-G.js";import{u as A}from"./useMutation-D-y75A4B.js";import{d as g}from"./ToastMessage-DLv4YVhE.js";import{S as j}from"./LoadingScreen-CINnrS9w.js";import{T as m}from"./Typography-DgBbIcOX.js";import{L as B}from"./Link-Cl5bQMMR.js";import{C as T}from"./HelpPopover-D47wQWp0.js";import{B as D}from"./Box-DRYT9rh3.js";function F(o){const t=v(),{accessToken:i,keyFactory:a}=x();return A({...o,mutationFn:r=>S.revokeCertification(r,i),onSuccess:async(r,n,c)=>{await Promise.all([t.invalidateQueries({queryKey:a.getUserBundleQueryKey(n,_)})]),o!=null&&o.onSuccess&&await o.onSuccess(r,n,c)}})}function y(o){const{userId:t,buttonProps:i}=o,[a,r]=f.useState(!1),{data:n}=I(),{mutate:c,isPending:s}=F({onSettled:()=>{r(!1)},onSuccess:()=>{g("User certification revoked","success")},onError:u=>{g(u.message,"danger")}}),l=f.useMemo(()=>({children:"Revoke Certification",...i,disabled:s||i.disabled,onClick:()=>r(!0)}),[i,s]),d=f.useMemo(()=>({title:"Revoke user certification?",onCancel:()=>r(!1),open:a,content:e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"body1",sx:{fontWeight:"bold",mb:2.5},children:"This action can't be undone."}),e.jsx(m,{variant:"body1",sx:{my:2.5},children:"Revoking user certification means this user won’t be able to upload files or tables, or make new projects or folders. To become certified again, they’ll have to retake the certification quiz."}),e.jsx(m,{variant:"body1",sx:{mt:2.5},children:e.jsx(B,{href:"https://help.synapse.org/docs/Synapse-User-Account-Types.2007072795.html#SynapseUserAccountTypes-CertifiedUser",children:"More about certified users"})})]}),onConfirm:()=>{c(t)},confirmButtonProps:{children:"Revoke",disabled:s,startIcon:s?e.jsx(j,{}):null},cancelButtonProps:{disabled:s}}),[s,c,a,t]);return{showButton:n||!1,buttonProps:l,confirmationDialogProps:d}}try{y.displayName="useRevokeCertificationUI",y.__docgenInfo={description:"Hook that provides UI data and props related to revoking a user's certification.",displayName:"useRevokeCertificationUI",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:'Omit<ButtonProps, "onClick">'}}}}}catch{}const L=_|R|U,C=({userId:o})=>{var d;const{data:t,isLoading:i,error:a}=k(o,L),r={certified:(t==null?void 0:t.isCertified)||!1,validated:(t==null?void 0:t.isVerified)||!1,enabledMFA:((d=t==null?void 0:t.userProfile)==null?void 0:d.twoFactorAuthEnabled)||!1},n=Object.values(r).some(u=>u),{showButton:c,buttonProps:s,confirmationDialogProps:l}=y({userId:o,buttonProps:{variant:"outlined"}});return i?e.jsx(e.Fragment,{}):a?e.jsx(E,{error:a}):e.jsxs(e.Fragment,{children:[e.jsx(T,{...l}),n&&e.jsx(D,{display:"flex",gap:"10px",justifyContent:"flex-start",flexWrap:"wrap",children:Object.entries(r).map(([u,b])=>{const p=u,h=p==="certified"&&c?s:void 0;return b&&e.jsx(P,{badgeType:p,buttonProps:h},p)})})]})};try{C.displayName="AccountLevelBadges",C.__docgenInfo={description:"",displayName:"AccountLevelBadges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}export{C as A};
