import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{q as s}from"./SynapseClient-C1hEaEDx.js";import"./OrientationBanner-D9iiRUAg.js";import"./RegularExpressions-D6yUxzx6.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{d as p}from"./ToastMessage-DLv4YVhE.js";import{S as l}from"./SageFullLogo-qFTVCX4w.js";import{P as m}from"./Paper-6hBhi2Vr.js";import{T as t}from"./Typography-DgBbIcOX.js";import{B as g}from"./Button-CLkrjdQe.js";function r(o){const{onLogout:a,logo:i=e.jsx(l,{width:"100%"})}=o;return e.jsxs(m,{sx:{width:"450px",px:8,py:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[i,e.jsx(t,{variant:"headline3",my:1,children:"Already Logged In"}),e.jsx(t,{variant:"smallText1",my:1,children:"To register an account, please log out first"}),e.jsx(g,{variant:"contained",size:"large",fullWidth:!0,sx:{p:1.5,mt:5,fontSize:"16px"},onClick:()=>{s.signOut().then(()=>{a()}).catch(n=>{p(n.message,"danger")})},children:"Log Out"})]})}try{r.displayName="RegisterPageLogoutPrompt",r.__docgenInfo={description:"",displayName:"RegisterPageLogoutPrompt",props:{onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as R};
