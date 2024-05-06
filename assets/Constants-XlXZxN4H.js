import{r as C,R as P}from"./index-Dl6G-zuu.js";import{k as de}from"./index-Pxtlv3yl.js";import{I as J,J as pe,K as me,g as ge,N as Z,Q as fe}from"./SynapseConstants-DcrAutld.js";import{u as ee}from"./useMutation-CkekK703.js";import{p as B,k as he}from"./SynapseClient-D75IXDSx.js";import{g as ue,B as le}from"./getEndpoint-CjoHA800.js";import{b as Ee}from"./useTwoFactorEnrollment-CoFtSLXK.js";import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{n as te}from"./noop-DX6rZLP_.js";import"./OrientationBanner-BV5RFxzC.js";import{F as Oe}from"./FullWidthAlert-xeBFwHL5.js";import{T as Y}from"./TextField-BYZwcPau.js";import{L as N}from"./Link-EkQ0dGSu.js";import{B as H}from"./Button-mb55Lwfk.js";import{L as W}from"./LoginMethodButton-Cu7XKE5y.js";import{B as L}from"./Box-DRdN2jdb.js";import{s as _e}from"./styled-OgyJf9MH.js";import{M as Re}from"./TextField-BYBL0P0S.js";import{T as Te}from"./Typography-B88_J_TK.js";import{M as Ae}from"./Alert-HJYNNEvY.js";import{I as ye}from"./IconSvg-Cxw84VIm.js";import{I as Ie}from"./IconButton-CgTC7RgJ.js";function lt(n){const{sessionCallback:s=te,twoFaErrorResponse:u,onTwoFactorAuthRequired:i=te}=n,[d,r]=C.useState("CHOOSE_AUTH_METHOD"),[p,o]=C.useState(),[c,g]=C.useState();C.useEffect(()=>{u&&g(u)},[u]),C.useEffect(()=>{const l=new URL(window.location.href.replaceAll("#","/")),{searchParams:R}=l;if(R){const y=R.get("userId"),q=R.get("twoFaToken");y&&q&&(g({errorCode:de.TWO_FA_REQUIRED,reason:"",userId:parseInt(y,10),twoFaToken:q,concreteType:"org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse"}),["VERIFICATION_CODE","RECOVERY_CODE","LOGGED_IN"].includes(d)||r("VERIFICATION_CODE"))}},[d]),C.useEffect(()=>{c&&(g(c),["VERIFICATION_CODE","RECOVERY_CODE","LOGGED_IN"].includes(d)||r("VERIFICATION_CODE"))},[c]),C.useEffect(()=>{c&&i(c)},[i,c]),C.useEffect(()=>{o(void 0)},[d]);async function f(l){await B.setAccessTokenCookie(l.accessToken),localStorage.setItem(J,l.authenticationReceipt),r("LOGGED_IN"),s&&s()}const{mutate:D,isPending:S}=ee({mutationFn:({username:l,password:R,authenticationReceipt:y})=>B.login(l,R,y),onError:l=>{o(l.reason)},onSuccess:async l=>{l&&("errorCode"in l?(r("VERIFICATION_CODE"),g(l)):await f(l))}}),{mutate:b,isPending:A}=ee({mutationFn:B.loginWith2fa,onError:l=>{o(l.reason),(l.reason.includes("The provided twoFaToken is invalid")||l.reason.includes("Token has expired"))&&(console.warn(l),o("Something went wrong. Refresh the page and try again."),window.location.href.includes("twoFaToken")&&window.history.replaceState({},document.title,window.location.href.replaceAll(/(twoFaToken|userId)=[^&]*&?/g,"")))},onSuccess:f}),{mutate:O,isSuccess:V,isPending:U}=Ee({onError:l=>{o(l.reason)}}),x=(l,R)=>{o(void 0);const y=localStorage.getItem(J);D({username:l,password:R,authenticationReceipt:y})};function v(l){return l==null?(o("You did not first log in with your password or a third-party identity provider."),!1):!0}return{step:d,onStepChange:r,submitUsernameAndPassword:x,submitOneTimePassword:(l,R=d==="RECOVERY_CODE"?"RECOVERY_CODE":"TOTP")=>{if(o(void 0),v(c)){const y={userId:c.userId,twoFaToken:c.twoFaToken,otpCode:l,otpType:R};b(y)}},errorMessage:p,loginIsPending:S||A,beginTwoFactorAuthReset:l=>{if(o(void 0),v(c)){const R={userId:c.userId,twoFaToken:c.twoFaToken,twoFaResetEndpoint:l};O(R)}},twoFactorAuthResetIsPending:U,twoFactorAuthResetIsSuccess:V}}function $(n){const{resetPasswordUrl:s=`${ue(le.PORTAL_ENDPOINT)}#!PasswordReset:0`,onSubmit:u,loginIsPending:i,hideForgotPasswordButton:d}=n,[r,p]=C.useState(""),[o,c]=C.useState("");function g(f){f.preventDefault(),u(r,o)}return t.jsxs("form",{onSubmit:f=>{g(f)},children:[t.jsx(Y,{required:!0,fullWidth:!0,autoFocus:!0,autoComplete:"username",label:"Username or Email Address",id:"username",type:"text",value:r,onChange:f=>p(f.target.value)}),t.jsx(Y,{required:!0,fullWidth:!0,autoComplete:"current-password",label:"Password",id:"current-password",type:"password",value:o,onChange:f=>c(f.target.value)}),!d&&t.jsx(N,{href:s,children:"Forgot password?"}),t.jsx(H,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",disabled:i,sx:{height:"50px",mt:4,mb:2},children:i?"Logging you in...":"Sign in"})]})}try{$.displayName="UsernamePasswordForm",$.__docgenInfo={description:"",displayName:"UsernamePasswordForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(username: string, password: string) => void"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},hideForgotPasswordButton:{defaultValue:null,description:"",name:"hideForgotPasswordButton",required:!1,type:{name:"boolean"}}}}}catch{}function X(n){const{onBeginOAuthSignIn:s,ssoRedirectUrl:u,onSelectUsernameAndPassword:i,state:d}=n;function r(p,o){s&&s(),p.preventDefault();const c=u?`${u}${o}`:`${B.getRootURL()}?provider=${o}`;B.oAuthUrlRequest(o,c,d).then(g=>{window.location=g.authorizationUrl}).catch(g=>{console.log("Error on oAuth url ",g)})}return t.jsxs(L,{children:[t.jsx(W,{loginMethod:pe,iconName:"google24",onClick:p=>{r(p,Z.GOOGLE)}}),t.jsx(W,{loginMethod:me,iconName:"orcid",onClick:p=>{r(p,Z.ORCID)}}),t.jsx(W,{loginMethod:ge,iconName:"email",onClick:i})]})}try{X.displayName="AuthenticationMethodSelection",X.__docgenInfo={description:`To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.`,displayName:"AuthenticationMethodSelection",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},onSelectUsernameAndPassword:{defaultValue:null,description:"",name:"onSelectUsernameAndPassword",required:!0,type:{name:"() => void"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"OAuth2State"}}}}}catch{}const Ce=_e(Re)`
  input {
    text-align: center;
  }
`,Se={TextFieldStyled:Ce},Fe=n=>t.jsx(Se.TextFieldStyled,{...n}),M={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace",home:"Home",end:"End"};function we(n,s){return n<=0?[]:Array.from({length:n},s)}function Pe(n,s,u){return n.map((i,d)=>s===d?u:i)}function ne(n){return n.join("")}function oe(n,s){return[...n,s]}function De(n,s,u){return n.reduce((i,d,r)=>{const{characters:p,restArrayMerged:o}=i;if(r<u)return{restArrayMerged:o,characters:oe(p,d)};const[c,...g]=o;return{restArrayMerged:g,characters:oe(p,c||"")}},{restArrayMerged:s,characters:[]}).characters}function xe(n){return n.split("")}function re(n){const s=P.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return P.useInsertionEffect(()=>{s.current=n}),P.useCallback((...u)=>{var i;return(i=s.current)==null?void 0:i.call(s,...u)},[])}const ve=()=>!0,be=P.forwardRef((n,s)=>{const{value:u="",length:i=4,autoFocus:d=!1,onChange:r,TextFieldsProps:p,onComplete:o,validateChar:c=ve,className:g,onBlur:f,...D}=n,S=P.useRef(u),b=re(o),A=re(e=>{const a=e.slice(0,i);return{isCompleted:a.length===i,finalValue:a}});P.useEffect(()=>{const{isCompleted:e,finalValue:a}=A(S.current);e&&b(a)},[i,b,A]);const O=we(i,(e,a)=>({character:u[a]||"",inputRef:P.createRef()})),V=e=>O.findIndex(({inputRef:a})=>a.current===e),U=()=>O.map(({character:e})=>e),x=(e,a)=>{const m=Pe(U(),e,a);return ne(m)},v=e=>{var a,m;(m=(a=O[e])==null?void 0:a.inputRef.current)==null||m.focus()},_=e=>{var a,m;(m=(a=O[e])==null?void 0:a.inputRef.current)==null||m.select()},j=e=>{e+1!==i&&(O[e+1].character?_(e+1):v(e+1))},l=(e,a)=>typeof c!="function"?!0:c(e,a),R=e=>{const a=V(e.target);if(a===0&&e.target.value.length>1){const{finalValue:w,isCompleted:k}=A(e.target.value);r==null||r(w),k&&(o==null||o(w)),_(w.length-1);return}const m=e.target.value[0]||"";let T=m;T&&!l(T,a)&&(T="");const h=x(a,T);r==null||r(h);const{isCompleted:F,finalValue:I}=A(h);F&&(o==null||o(I)),T!==""?h.length-1<a?_(h.length):j(a):m===""&&h.length<=a&&_(a-1)},y=e=>{const a=e.target,m=a.selectionStart,T=a.selectionEnd,h=V(a),F=m===0&&T===0;if(a.value===e.key)e.preventDefault(),j(h);else if(M.backspace===e.key){if(!a.value)e.preventDefault(),_(h-1);else if(F){e.preventDefault();const I=x(h,"");r==null||r(I),I.length<=h&&_(h-1)}}else M.left===e.key?(e.preventDefault(),_(h-1)):M.right===e.key?(e.preventDefault(),_(h+1)):M.home===e.key?(e.preventDefault(),_(0)):M.end===e.key&&(e.preventDefault(),_(O.length-1))},q=e=>{const a=e.clipboardData.getData("text/plain"),m=e.target,T=O.findIndex(({character:E,inputRef:G})=>E===""||G.current===m),h=U(),F=De(h,xe(a),T).map((E,G)=>l(E,G)?E:""),I=ne(F);r==null||r(I);const{isCompleted:w,finalValue:k}=A(I);w?(o==null||o(k),_(i-1)):_(I.length)},ce=e=>{if(!O.some(({inputRef:a})=>a.current===e.relatedTarget)){const{isCompleted:a,finalValue:m}=A(u);f==null||f(m,a)}};return t.jsx(L,{display:"flex",gap:"20px",alignItems:"center",ref:s,className:`MuiOtpInput-Box ${g||""}`,...D,children:O.map(({character:e,inputRef:a},m)=>{const{onPaste:T,onFocus:h,onKeyDown:F,className:I,onBlur:w,...k}=typeof p=="function"?p(m)||{}:p||{};return t.jsx(Fe,{autoFocus:d?m===0:!1,autoComplete:"one-time-code",value:e,inputRef:a,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${m+1} ${I||""}`,onPaste:E=>{E.preventDefault(),q(E),T==null||T(E)},onFocus:E=>{E.preventDefault(),E.target.select(),h==null||h(E)},onChange:R,onKeyDown:E=>{y(E),F==null||F(E)},onBlur:E=>{w==null||w(E),ce(E)},...k},m)})})}),ae=6,Ve=["0","1","2","3","4","5","6","7","8","9"];function K(n){const{onSubmit:s,loginIsPending:u}=n,[i,d]=P.useState("");return t.jsxs(L,{children:[t.jsx(be,{autoFocus:!0,length:ae,value:i,onChange:d,onComplete:s,validateChar:r=>Ve.includes(r)||r==="",gap:"2px",sx:{mx:"auto",maxWidth:"350px",".MuiInputBase-root":{paddingLeft:"5px",paddingRight:"5px"},".MuiFormControl-root:first-of-type > .MuiInputBase-root":{borderTopRightRadius:0,borderBottomRightRadius:0},".MuiFormControl-root:last-of-type > .MuiInputBase-root":{borderTopLeftRadius:0,borderBottomLeftRadius:0},".MuiFormControl-root:not(:first-of-type):not(:last-of-type) > .MuiInputBase-root":{borderRadius:0}}}),t.jsx(H,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:i.length!==ae||u,onClick:r=>{r.preventDefault(),s(i)},children:u?"Verifying...":"Submit"})]})}try{K.displayName="TOTPForm",K.__docgenInfo={description:"",displayName:"TOTPForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}}}}}catch{}const Ue=19;function z(n){const{onSubmit:s,loginIsPending:u}=n,[i,d]=P.useState("");return t.jsxs(L,{children:[t.jsx(Y,{placeholder:"Enter backup code",value:i,onChange:r=>{const p=r.target.value.toLowerCase().replace(/[^a-z0-9-]/gi,"");d(p)}}),t.jsx(H,{fullWidth:!0,type:"submit",color:"primary",variant:"contained",sx:{height:"50px",mt:4,mb:2},disabled:i.length!==Ue||u,onClick:r=>{r.preventDefault(),s(i)},children:u?"Verifying...":"Submit"})]})}try{z.displayName="RecoveryCodeForm",z.__docgenInfo={description:"",displayName:"RecoveryCodeForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(value: string) => void"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}}}}}catch{}const Ne="Use a backup code instead",ke="Use authenticator app instead",Me="Lost access to your codes?",Be="Send Instructions";function Q(n){const{step:s,loginIsPending:u,onSubmit:i,onClickUseBackupCode:d,onClickUseTOTP:r,hideReset2FA:p,onClickPromptReset2FA:o,onClickReset2FA:c,twoFactorAuthResetIsSuccess:g,twoFactorAuthResetIsPending:f}=n,{isInExperimentalMode:D}=he();return t.jsxs(t.Fragment,{children:[s==="VERIFICATION_CODE"&&t.jsxs(t.Fragment,{children:[t.jsx(K,{loginIsPending:u,onSubmit:S=>{i(S,"TOTP")}}),t.jsx(N,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{d()},children:Ne})]}),s==="RECOVERY_CODE"&&t.jsxs(t.Fragment,{children:[t.jsx(z,{loginIsPending:u,onSubmit:S=>{i(S,"RECOVERY_CODE")}}),t.jsx(N,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{r()},children:ke})]}),!p&&o&&c&&s!=="DISABLE_2FA_PROMPT"&&D&&t.jsx(N,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{o()},children:Me}),s==="DISABLE_2FA_PROMPT"&&c&&t.jsxs(t.Fragment,{children:[t.jsx(Te,{variant:"body1",align:"center",sx:{my:2},children:"To reset two-factor authentication on your account, an email containing instructions will be sent to the primary email address on your account."}),t.jsx(H,{fullWidth:!0,variant:"contained",onClick:c,disabled:f||g,sx:{my:2},children:Be}),g&&t.jsx(Ae,{severity:"success",sx:{my:1},children:"Instructions to reset two-factor authentication were sent to the primary email address associated with your account."}),t.jsx(N,{align:"center",color:"grey.700",sx:{display:"block",mx:"auto",my:2},onClick:()=>{r()},children:"Go back"})]})]})}try{Q.displayName="OneTimePasswordForm",Q.__docgenInfo={description:`Component that allows the user to enter a one-time password second authentication factor,
such as a timed one-time password (TOTP) generated using a shared secret, or a single-use recovery code.

The user may also use this UI to begin the process of disabling 2FA on their account.`,displayName:"OneTimePasswordForm",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'}]}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},onClickUseTOTP:{defaultValue:null,description:"",name:"onClickUseTOTP",required:!0,type:{name:"() => void"}},onClickUseBackupCode:{defaultValue:null,description:"",name:"onClickUseBackupCode",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(code: string, otpType: TwoFactorAuthOtpType) => void"}},hideReset2FA:{defaultValue:null,description:"",name:"hideReset2FA",required:!1,type:{name:"boolean"}},onClickPromptReset2FA:{defaultValue:null,description:"",name:"onClickPromptReset2FA",required:!1,type:{name:"(() => void)"}},onClickReset2FA:{defaultValue:null,description:"",name:"onClickReset2FA",required:!1,type:{name:"(() => void)"}},twoFactorAuthResetIsSuccess:{defaultValue:null,description:"",name:"twoFactorAuthResetIsSuccess",required:!0,type:{name:"boolean"}},twoFactorAuthResetIsPending:{defaultValue:null,description:"",name:"twoFactorAuthResetIsPending",required:!0,type:{name:"boolean"}}}}}catch{}function se(n){const{ssoRedirectUrl:s,ssoState:u,registerAccountUrl:i=`${ue(le.PORTAL_ENDPOINT)}#!RegisterAccount:0`,resetPasswordUrl:d,onBeginOAuthSignIn:r,onStepChange:p,step:o,submitUsernameAndPassword:c,submitOneTimePassword:g,errorMessage:f,loginIsPending:D,beginTwoFactorAuthReset:S,hideRegisterButton:b,hideForgotPasswordButton:A,twoFactorAuthResetIsSuccess:O,twoFactorAuthResetIsPending:V,twoFactorAuthResetUri:U=`${window.location.origin}/reset2FA?twoFAResetToken=`}=n;return t.jsxs(t.Fragment,{children:[o=="CHOOSE_AUTH_METHOD"&&t.jsx(X,{onSelectUsernameAndPassword:()=>p("USERNAME_PASSWORD"),onBeginOAuthSignIn:r,ssoRedirectUrl:s,state:u}),o==="USERNAME_PASSWORD"&&t.jsx($,{loginIsPending:D,resetPasswordUrl:d,onSubmit:(x,v)=>{c(x,v)},hideForgotPasswordButton:A}),(o==="VERIFICATION_CODE"||o==="RECOVERY_CODE"||o==="DISABLE_2FA_PROMPT")&&t.jsx(Q,{step:o,loginIsPending:D,onSubmit:(x,v)=>{g(x,v)},onClickUseTOTP:()=>{p("VERIFICATION_CODE")},onClickUseBackupCode:()=>{p("RECOVERY_CODE")},onClickPromptReset2FA:()=>{p("DISABLE_2FA_PROMPT")},onClickReset2FA:()=>{S(U)},twoFactorAuthResetIsPending:V,twoFactorAuthResetIsSuccess:O}),!b&&(o==="CHOOSE_AUTH_METHOD"||o==="USERNAME_PASSWORD")&&t.jsx(L,{sx:{display:"flex",justifyContent:"center",mt:"10px"},children:t.jsx(N,{href:i,align:"center",children:"Don't have an account? Create one now"})}),f&&t.jsx(Oe,{variant:"warning",isGlobal:!1,description:f})]})}try{se.displayName="LoginForm",se.__docgenInfo={description:"",displayName:"LoginForm",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},registerAccountUrl:{defaultValue:null,description:"",name:"registerAccountUrl",required:!1,type:{name:"string"}},resetPasswordUrl:{defaultValue:null,description:"",name:"resetPasswordUrl",required:!1,type:{name:"string"}},onBeginOAuthSignIn:{defaultValue:null,description:"",name:"onBeginOAuthSignIn",required:!1,type:{name:"(() => void)"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | ONE_TIME_PASSWORD_STEP | "LOGGED_IN") => void'}},twoFactorAuthenticationRequired:{defaultValue:null,description:"",name:"twoFactorAuthenticationRequired",required:!1,type:{name:"TwoFactorAuthErrorResponse"}},submitUsernameAndPassword:{defaultValue:null,description:"",name:"submitUsernameAndPassword",required:!0,type:{name:"(username: string, password: string) => void"}},submitOneTimePassword:{defaultValue:null,description:"",name:"submitOneTimePassword",required:!0,type:{name:"(code: string, otpType?: TwoFactorAuthOtpType | undefined) => void"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string | undefined"}},loginIsPending:{defaultValue:null,description:"",name:"loginIsPending",required:!0,type:{name:"boolean"}},beginTwoFactorAuthReset:{defaultValue:null,description:"",name:"beginTwoFactorAuthReset",required:!0,type:{name:"(twoFaResetEndpoint: string) => void"}},twoFactorAuthResetIsSuccess:{defaultValue:null,description:"",name:"twoFactorAuthResetIsSuccess",required:!0,type:{name:"boolean"}},twoFactorAuthResetIsPending:{defaultValue:null,description:"",name:"twoFactorAuthResetIsPending",required:!0,type:{name:"boolean"}},hideRegisterButton:{defaultValue:null,description:"",name:"hideRegisterButton",required:!1,type:{name:"boolean"}},hideForgotPasswordButton:{defaultValue:null,description:"",name:"hideForgotPasswordButton",required:!1,type:{name:"boolean"}},ssoState:{defaultValue:null,description:"",name:"ssoState",required:!1,type:{name:"OAuth2State"}},twoFactorAuthResetUri:{defaultValue:null,description:"",name:"twoFactorAuthResetUri",required:!1,type:{name:"string"}}}}}catch{}function Le(n){switch(n){case"CHOOSE_AUTH_METHOD":return"CHOOSE_AUTH_METHOD";case"USERNAME_PASSWORD":return"CHOOSE_AUTH_METHOD";case"VERIFICATION_CODE":return"CHOOSE_AUTH_METHOD";case"RECOVERY_CODE":return"VERIFICATION_CODE";case"DISABLE_2FA_PROMPT":return"VERIFICATION_CODE";case"LOGGED_IN":return"LOGGED_IN"}}function ie(n){const{step:s,onStepChange:u,sx:i}=n;return s==="USERNAME_PASSWORD"||s==="VERIFICATION_CODE"||s==="RECOVERY_CODE"?t.jsx(Ie,{className:fe,type:"button",onClick:()=>{u(Le(s))},sx:i,children:t.jsx(ye,{icon:"arrowBack",wrap:!1,sx:{height:"24px",width:"24px"}})}):null}try{ie.displayName="LoginFlowBackButton",ie.__docgenInfo={description:"",displayName:"LoginFlowBackButton",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"enum",value:[{value:'"CHOOSE_AUTH_METHOD"'},{value:'"USERNAME_PASSWORD"'},{value:'"VERIFICATION_CODE"'},{value:'"RECOVERY_CODE"'},{value:'"DISABLE_2FA_PROMPT"'},{value:'"LOGGED_IN"'}]}},onStepChange:{defaultValue:null,description:"",name:"onStepChange",required:!0,type:{name:'(step: "CHOOSE_AUTH_METHOD" | "USERNAME_PASSWORD" | ONE_TIME_PASSWORD_STEP | "LOGGED_IN") => void'}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}const ct="Enter the 6-digit, time-based verification code provided by your authenticator app.",dt="Enter a one-time backup code. Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens.";export{ie as L,Q as O,dt as R,ct as T,se as a,lt as u};
