import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{L as k}from"./LeftRightPanel-D34nVlxk.js";import{u as A}from"./useShowDesktop-CPh-208G.js";import{u as L,L as d,T as u,a as F}from"./Constants-D7tQ-e3L.js";import{S as x}from"./SystemUseNotification-uAjI_WY3.js";import{s as D}from"./styled-D9wW3ABP.js";import{T as r}from"./Typography-DgBbIcOX.js";import{u as U}from"./utils-Bdp_oNP4.js";import{B as i}from"./Box-DRYT9rh3.js";import{L as N}from"./Link-Cl5bQMMR.js";import{S as g}from"./Stack-D3AEdRlD.js";import{s as P}from"./StorybookComponentWrapper-Bc-FzWSl.js";import{d as V}from"./ToastMessage-DLv4YVhE.js";import"./index-Dl6G-zuu.js";import"./Paper-6hBhi2Vr.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./index-0sKCi0IA.js";import"./SynapseConstants-DNR648SI.js";import"./OrientationBanner-DcDyIfis.js";import"./FullWidthAlert-Q7pb-Dsc.js";import"./Alert-Aa0bm5Nm.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-gkOuU5-G.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./AlertTitle-DKLb405u.js";import"./Grow-lFU1cKdF.js";import"./index-B6qzg4VC.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Drr3vXNI.js";import"./index-hJhP8EJR.js";import"./Button-CLkrjdQe.js";import"./useMutation-BrriwhYv.js";import"./SynapseClient-D4gkDMC-.js";import"./RegularExpressions-CgDTvkkI.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-O0ZMhOlq.js";import"./useTwoFactorEnrollment-Bj4JM4qZ.js";import"./QueryFilterUtils-CLCheuDv.js";import"./isEqual-D41zhIvk.js";import"./_Uint8Array-kXJ5rGjS.js";import"./_baseTimes-DoMoQz2v.js";import"./_cacheHas-CXp-3pXr.js";import"./_setToArray-CSiN_fit.js";import"./_getAllKeys-BsAuleaE.js";import"./isNumber-BM-UBS4N.js";import"./noop-DX6rZLP_.js";import"./TextField-BGOD0HKv.js";import"./StyledFormControl-CcY1_a8C.js";import"./FormControl-ocCBLRGJ.js";import"./useFormControl-CQLCXd-P.js";import"./ownerWindow-BN2rbQ_G.js";import"./isMuiElement-DAcuSkv2.js";import"./InputLabel-BOqZ1_7u.js";import"./LoginMethodButton-Bcnuar_4.js";import"./IconSvg-BBZ15ye5.js";import"./ErrorOutlined-CnICwQW0.js";import"./GetAppTwoTone-CEgy4oXX.js";import"./InfoOutlined-DJDm_gVQ.js";import"./LastLoginInfo-DTfeYiY0.js";import"./DateFormatter-CM_rM3ny.js";import"./timezone-Cq1SAuLw.js";import"./TextField-CM8oUPj4.js";import"./Select-Dp0kuqFw.js";import"./Menu-C2kbcWAO.js";import"./Modal-aC3wK9dy.js";import"./Backdrop-Cf-zGjSh.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-CWcqbzO9.js";import"./List-JFp8Imct.js";import"./OutlinedInput-XA1EaikJ.js";import"./CSSTransition-DN5fTu4E.js";import"./hasClass-D5ZjVvBY.js";import"./uniqueId-CSw6ftlJ.js";import"./toString-CYyvKWOl.js";import"./isSymbol-BzKS7Qf1.js";const z=encodeURIComponent("Lost access to my Synapse account"),B=encodeURIComponent("<Please provide your username and/or email address associated with your account.>"),Y=`https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${z}&description=${B}`,m=D(r,{label:"Tagline"})(({theme:e})=>({marginBottom:e.spacing(2),font:"300 24px/34px DM Sans, sans-serif"}));function h(e){return t.jsxs(t.Fragment,{children:[t.jsx(r,{...e,children:"Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens, like this:"}),t.jsx(r,{...e,component:"div",variant:"monospace",sx:{my:1,fontSize:"18px"},children:"xxxx-xxxx-xxxx-xxxx"}),t.jsxs(r,{...e,children:["Each code can only be used once. If you don’t have access to these codes, please"," ",t.jsx(N,{href:Y,children:"contact us"}),"."]})]})}function p(e){const{ssoRedirectUrl:j,sessionCallback:b,ssoState:E,twoFactorAuthResetUri:S}=e,s=A(910),c=U(),{step:o,onStepChange:a,submitUsernameAndPassword:_,submitOneTimePassword:I,errorMessage:T,loginIsPending:O,beginTwoFactorAuthReset:R,twoFactorAuthResetIsPending:v,twoFactorAuthResetIsSuccess:w}=L({sessionCallback:b}),l=t.jsxs(g,{alignItems:"stretch",sx:{height:"100%",width:"330px",mx:"auto"},children:[!s&&t.jsx(g,{flexDirection:"row",children:t.jsx(d,{step:o,onStepChange:a})}),t.jsxs(i,{sx:{mb:4,textAlign:"center",maxWidth:"90vw"},children:[t.jsx("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),!s&&t.jsx(r,{variant:"body1",align:"center",sx:{my:1},children:"Organize. Get credit. Collaborate."})]}),!s&&o==="VERIFICATION_CODE"&&t.jsx(r,{variant:"body1",align:"center",sx:{my:1},children:u}),!s&&o==="RECOVERY_CODE"&&t.jsx(h,{variant:"body1",align:"center",sx:{my:1}}),t.jsx(F,{ssoRedirectUrl:j,step:o,onStepChange:a,submitUsernameAndPassword:_,submitOneTimePassword:I,errorMessage:T,loginIsPending:O,beginTwoFactorAuthReset:R,twoFactorAuthResetIsPending:v,twoFactorAuthResetIsSuccess:w,ssoState:E,twoFactorAuthResetUri:S})]});return s?t.jsx(k,{leftContent:t.jsx(t.Fragment,{children:t.jsxs(i,{sx:{py:15,px:8,height:"100%",position:"relative"},children:[t.jsx(d,{step:o,onStepChange:a,sx:{position:"absolute",top:c.spacing(2),left:c.spacing(2)}}),l]})}),rightContent:t.jsx(i,{sx:{py:15,height:"100%",background:"url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 5px"},children:t.jsxs(i,{sx:{px:9,color:"#1e4964"},children:[o==="VERIFICATION_CODE"&&t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"headline1",sx:{mb:4},children:"Enter your verification code"}),t.jsx(r,{variant:"headline2",sx:{lineHeight:"30px"},children:u})]}),o==="RECOVERY_CODE"&&t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"headline1",sx:{mb:4},children:"Enter your backup code"}),t.jsx(h,{variant:"body1",sx:{fontSize:"18px",lineHeight:"30px"}})]}),o!=="VERIFICATION_CODE"&&o!=="RECOVERY_CODE"&&t.jsxs(t.Fragment,{children:[t.jsxs(m,{variant:"headline2",children:[t.jsx("strong",{children:"Organize"})," your digital research assets."]}),t.jsxs(m,{variant:"headline2",children:[t.jsx("strong",{children:"Get credit"})," for your research."]}),t.jsxs(m,{variant:"headline2",children:[t.jsx("strong",{children:"Collaborate"})," with your colleagues and the public."]})]}),t.jsx(x,{})]})})}):t.jsxs(i,{sx:{px:0,py:12,height:"95vh",background:"#fff url('https://s3.amazonaws.com/static.synapse.org/images/SynapseMobileLogInFull.svg') 50% 50%",backgroundSize:"contain"},children:[l,t.jsx(x,{})]})}try{p.displayName="LoginPage",p.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}},ssoState:{defaultValue:null,description:"",name:"ssoState",required:!1,type:{name:"OAuth2State"}},twoFactorAuthResetUri:{defaultValue:null,description:"",name:"twoFactorAuthResetUri",required:!1,type:{name:"string"}}}}}catch{}const ve={title:"Authentication/LoginPage",component:p},n={args:{sessionCallback:()=>{P().then(({profile:e})=>{V(`You are currently logged in as ${e.userName}`,"info",{autoCloseInMs:5e3})})}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    }
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const we=["Demo"];export{n as Demo,we as __namedExportsOrder,ve as default};
