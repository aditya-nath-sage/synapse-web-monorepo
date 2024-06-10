import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{r as o}from"./index-Dl6G-zuu.js";import{u as O}from"./useMutation-DRYH0H5u.js";import{p as S}from"./SynapseClient-MbtLKuZM.js";import"./OrientationBanner-Dih8CVog.js";import"./getEndpoint-CjoHA800.js";import{T as _,R as I,O as k}from"./Constants-DQCoZAxw.js";import"./LastLoginInfo-CYE3kq1y.js";import"./StandaloneLoginForm-4cnZSh8f.js";import"./TwoFactorAuthSettingsPanel-q3b0sESM.js";import"./TwoFactorEnrollmentForm-BwfHvCWE.js";import"./TwoFactorBackupCodes-CWwMHDPl.js";import{T as C}from"./Typography-B88_J_TK.js";import{M as A}from"./Alert-HJYNNEvY.js";function x(t){return O({...t,mutationFn:u=>S.changePassword(u)})}function P(t){const[u,p]=o.useState(""),[n,m]=o.useState(),[i,g]=o.useState("VERIFICATION_CODE"),[T,f]=o.useState(!1),{mutate:a,isPending:d,error:E}=x({onSuccess:e=>{e?m(e):(f(!0),m(void 0),t!=null&&t.onChangePasswordSuccess&&t.onChangePasswordSuccess())}}),R=o.useCallback((e,r,c)=>{p(c),a({username:e,currentPassword:r,newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword"})},[a]),F=o.useCallback((e,r)=>{p(e),a({newPassword:e,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithToken",passwordChangeToken:r})},[a]),l=o.useCallback((e,r,c)=>{if(n){const w={newPassword:e,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken",userId:n.userId,twoFaToken:n.twoFaToken,otpType:c,otpCode:r};a(w)}},[a,n]),h=!!n,y=o.useCallback(()=>h?s.jsxs(s.Fragment,{children:[i==="VERIFICATION_CODE"&&s.jsx(C,{variant:"body1",sx:{my:2},align:"center",children:_}),i==="RECOVERY_CODE"&&s.jsx(C,{variant:"body1",sx:{my:2},align:"center",children:I}),s.jsx(k,{step:i,onClickUseTOTP:()=>{g("VERIFICATION_CODE")},onClickUseBackupCode:()=>{g("RECOVERY_CODE")},loginIsPending:d,onSubmit:(e,r)=>l(u,e,r),hideReset2FA:!0,twoFactorAuthResetIsPending:!1,twoFactorAuthResetIsSuccess:!1}),s.jsx(A,{severity:"info",sx:{my:2},children:"Two-factor authentication is required to change your password."})]}):s.jsx(s.Fragment,{}),[l,d,u,i,h]);return{successfullyChangedPassword:T,isPending:d,error:E,promptForTwoFactorAuth:h,TwoFactorAuthPrompt:y,handleChangePasswordWithCurrentPassword:R,handleChangePasswordWithResetToken:F}}try{P.displayName="useChangePasswordFormState",P.__docgenInfo={description:"Hook that handles submitting a change password request and prompting the user for 2FA if necessary.",displayName:"useChangePasswordFormState",props:{onChangePasswordSuccess:{defaultValue:null,description:"",name:"onChangePasswordSuccess",required:!1,type:{name:"(() => void)"}}}}}catch{}export{P as u};
