import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{r as i}from"./index-Dl6G-zuu.js";import{d as u}from"./ToastMessage-CyCjbTLE.js";import{u as x}from"./useChangePasswordFormState-CmA1brUB.js";import{M as c}from"./TextField-BYBL0P0S.js";import{B as C}from"./Button-mb55Lwfk.js";import{M as y}from"./Alert-HJYNNEvY.js";function l(a){const{passwordChangeToken:m,onSuccess:p}=a,[r,t]=i.useState(""),[o,n]=i.useState(""),{promptForTwoFactorAuth:w,TwoFactorAuthPrompt:h,isPending:f,handleChangePasswordWithResetToken:g,error:d}=x({onChangePasswordSuccess:()=>{t(""),n(""),u("Password successfully changed.","success"),p()}}),P=e=>{e.preventDefault(),r!==o?u("Passwords do not match.","danger"):g(r,m)};return s.jsxs("div",{children:[w?s.jsx(h,{}):s.jsxs("form",{onSubmit:e=>{P(e)},children:[s.jsx(c,{fullWidth:!0,required:!0,type:"password",id:"newPassword",name:"newPassword",label:"New password",onChange:e=>t(e.target.value),value:r||"",sx:{mb:2}}),s.jsx(c,{fullWidth:!0,required:!0,type:"password",id:"confirmPassword",name:"confirmPassword",label:"Confirm password",onChange:e=>n(e.target.value),value:o||"",sx:{mb:2}}),s.jsx(C,{variant:"contained",type:"submit",fullWidth:!0,disabled:!r||!o||f,sx:{mt:3,py:2},children:"Change Password"})]}),d&&s.jsx(y,{severity:"error",sx:{my:2},children:d.reason})]})}try{l.displayName="ChangePasswordWithToken",l.__docgenInfo={description:"",displayName:"ChangePasswordWithToken",props:{passwordChangeToken:{defaultValue:null,description:"",name:"passwordChangeToken",required:!0,type:{name:"PasswordResetSignedToken"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!0,type:{name:"() => void"}}}}}catch{}export{l as C};
