import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{i as b,S,u as x,aL as I,n as k}from"./SynapseClient-DLsmXUrC.js";import{U as _,u as E,v as R}from"./SynapseConstants-aOjNjjyw.js";import{r as f}from"./index-Cu9bd8lq.js";import"./RegularExpressions-RV1YxBM7.js";import"./OrientationBanner-BKoSQ39U.js";import{A as U}from"./AccountLevelBadge-CuXy5VC7.js";import{u as P}from"./useQuery-ChYzlhEH.js";import{u as A}from"./useMutation-DAMF4D7y.js";import{d as g}from"./ToastMessage-8mzk2-LM.js";import{S as j}from"./LoadingScreen-DeBdHOeH.js";import{T as m}from"./Typography-Ctk8_6Bo.js";import{L as B}from"./Link-ceK_fu-q.js";import{C as T}from"./ConfirmationDialog-DEM2LcXE.js";import{B as L}from"./Box-tOdEuW_y.js";function D(o){const t=P(),{accessToken:i,keyFactory:a}=b();return A({...o,mutationFn:r=>S.revokeCertification(r,i),onSuccess:async(r,n,c)=>{await Promise.all([t.invalidateQueries({queryKey:a.getUserBundleQueryKey(n,_)})]),o!=null&&o.onSuccess&&await o.onSuccess(r,n,c)}})}function y(o){const{userId:t,buttonProps:i}=o,[a,r]=f.useState(!1),{data:n}=x(),{mutate:c,isPending:s}=D({onSettled:()=>{r(!1)},onSuccess:()=>{g("User certification revoked","success")},onError:u=>{g(u.message,"danger")}}),l=f.useMemo(()=>({children:"Revoke Certification",...i,disabled:s||i.disabled,onClick:()=>r(!0)}),[i,s]),d=f.useMemo(()=>({title:"Revoke user certification?",onCancel:()=>r(!1),open:a,content:e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"body1",sx:{fontWeight:"bold",mb:2.5},children:"This action can't be undone."}),e.jsx(m,{variant:"body1",sx:{my:2.5},children:"Revoking user certification means this user won’t be able to upload files or tables, or make new projects or folders. To become certified again, they’ll have to retake the certification quiz."}),e.jsx(m,{variant:"body1",sx:{mt:2.5},children:e.jsx(B,{href:"https://help.synapse.org/docs/Synapse-User-Account-Types.2007072795.html#SynapseUserAccountTypes-CertifiedUser",children:"More about certified users"})})]}),onConfirm:()=>{c(t)},confirmButtonProps:{children:"Revoke",disabled:s,startIcon:s?e.jsx(j,{}):null},cancelButtonProps:{disabled:s}}),[s,c,a,t]);return{showButton:n||!1,buttonProps:l,confirmationDialogProps:d}}try{y.displayName="useRevokeCertificationUI",y.__docgenInfo={description:"Hook that provides UI data and props related to revoking a user's certification.",displayName:"useRevokeCertificationUI",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:'Omit<ButtonProps, "onClick">'}}}}}catch{}const F=_|E|R,C=({userId:o})=>{var d;const{data:t,isLoading:i,error:a}=I(o,F),r={certified:(t==null?void 0:t.isCertified)||!1,validated:(t==null?void 0:t.isVerified)||!1,enabledMFA:((d=t==null?void 0:t.userProfile)==null?void 0:d.twoFactorAuthEnabled)||!1},n=Object.values(r).some(u=>u),{showButton:c,buttonProps:s,confirmationDialogProps:l}=y({userId:o,buttonProps:{variant:"outlined"}});return i?e.jsx(e.Fragment,{}):a?e.jsx(k,{error:a}):e.jsxs(e.Fragment,{children:[e.jsx(T,{...l}),n&&e.jsx(L,{display:"flex",gap:"10px",justifyContent:"flex-start",flexWrap:"wrap",children:Object.entries(r).map(([u,h])=>{const p=u,v=p==="certified"&&c?s:void 0;return h&&e.jsx(U,{badgeType:p,buttonProps:v},p)})})]})};try{C.displayName="AccountLevelBadges",C.__docgenInfo={description:"",displayName:"AccountLevelBadges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}export{C as A};
