import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{r,R as p}from"./index-Dl6G-zuu.js";import{a0 as y,a1 as m,a2 as f,q as c,a3 as C,a as k,a4 as h,a5 as S,a6 as g,$ as x,a7 as w,a8 as b,a9 as E}from"./SynapseClient-D4gkDMC-.js";import"./OrientationBanner-DcDyIfis.js";import"./RegularExpressions-CgDTvkkI.js";import{S as v}from"./ToastMessage-DLv4YVhE.js";import{d as T}from"./dayjs.min-d18Up55D.js";var _=function(){return null};async function j(){let e=await S(),o;try{o=await g(e)}catch(t){throw t instanceof x&&t.status===401&&(console.error("Encountered error fetching profile: ",t,"Signing out..."),await w(),e=void 0),t}let n;return e&&b(e).then(t=>{n=T(t.authenticatedOn).format("L LT")}),{accessToken:e,profile:o,authenticatedOn:n}}const i=new y(m);function R(e){const o=E[e];window.SRC={OVERRIDE_ENDPOINT_CONFIG:o}}function l(e){const{storybookContext:o}=e,n=o.globals.stack||o.parameters.stack;r.useEffect(()=>{R(n)},[n]);const[t,d]=p.useState(void 0);f(),r.useEffect(()=>{j().then(s=>{d(s.accessToken)})}),r.useEffect(()=>{async function s(){await i.cancelQueries(),await i.resetQueries()}s()},[t,n]);const u=r.useMemo(()=>({accessToken:t,isInExperimentalMode:c.isInSynapseExperimentalMode(),utcTime:c.getUseUtcTimeFromCookie(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[t]);return a.jsx(r.Suspense,{fallback:"global suspense loading...",children:a.jsx(C,{client:i,children:a.jsxs(k,{synapseContext:u,children:[o.globals.showReactQueryDevtools&&a.jsx(_,{}),a.jsxs(h,{children:[a.jsx(v,{}),a.jsx("main",{children:e.children})]})]})})})}try{l.displayName="StorybookComponentWrapper",l.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{storybookContext:{defaultValue:null,description:"",name:"storybookContext",required:!0,type:{name:"{ globals: { stack?: SynapseStack | undefined; showReactQueryDevtools?: boolean | undefined; }; parameters: { stack?: SynapseStack | undefined; }; }"}}}}}catch{}export{l as S,j as s};
