import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{r as L}from"./index-Cu9bd8lq.js";import{d as y}from"./ExitToApp-DyPwRh-i.js";import{S as s}from"./SpinnerButton-r_3r2yCZ.js";import{k,p as E}from"./SynapseClient-CAoqyBZW.js";import"./RegularExpressions-CnhXF8jT.js";import"./OrientationBanner-DX4L_rZP.js";import{u as j}from"./useGetEntityChallenge-Hf57zQYV.js";import{u as _}from"./useTeamMembers-D4hnZ0r5.js";import{u as w}from"./useGetUserTeams-DCIDOD_-.js";import{B}from"./Box-tOdEuW_y.js";const p=({projectId:a,onError:t,onJoinClick:d,onLeaveClick:l})=>{const{accessToken:m}=k(),i=!!m,{data:r}=E({enabled:i}),{data:e,isLoading:g,error:f}=j(a,{enabled:i}),{data:h,isLoading:b,error:C}=_(e==null?void 0:e.participantTeamId,r==null?void 0:r.ownerId,{enabled:!!e&&!!r}),x=!!h,{data:u,error:v,isLoading:S}=w(e==null?void 0:e.id,20,0,{enabled:!!e&&i}),T=u&&u.results.length>0,c=x&&T,n=f||C||v;return L.useEffect(()=>{n&&t&&t(n)},[n,t]),g||b||S?o.jsx(s,{showSpinner:!0,children:"Loading..."}):o.jsxs(B,{children:[!c&&o.jsx(s,{disableElevation:!0,variant:"contained",onClick:()=>m&&d?d():void 0,sx:{color:"white",backgroundColor:"#109488",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white",backgroundColor:"#109488"},":active":{color:"white",backgroundColor:"#109488"},":visited":{color:"white",backgroundColor:"#109488"}},children:"Register for this Challenge"}),c&&o.jsx(s,{disableElevation:!0,variant:"outlined",endIcon:o.jsx(y,{}),onClick:()=>l?l():void 0,sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},children:"Leave Challenge"})]})};try{p.displayName="ChallengeRegisterButton",p.__docgenInfo={description:"",displayName:"ChallengeRegisterButton",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: SynapseClientError) => void)"}},onJoinClick:{defaultValue:null,description:"",name:"onJoinClick",required:!1,type:{name:"(() => void)"}},onLeaveClick:{defaultValue:null,description:"",name:"onLeaveClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{p as C};
