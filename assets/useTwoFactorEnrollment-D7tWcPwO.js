import{i as n,n as a,o as i,l as y}from"./SynapseClient-CyQCREGs.js";import{u as c}from"./useMutation-CBtALiAZ.js";import"./OrientationBanner-BBh8JRgP.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{g as l}from"./QueryFilterUtils-CtCMTb-L.js";import"./jsx-runtime-Du8NFWEI.js";function f(e){const{accessToken:t}=n();return c({...e,mutationFn:()=>a.start2FAEnrollment(t)})}function K(e){const{accessToken:t,keyFactory:r}=n(),u=i();return c({...e,onSuccess:async(...s)=>{e!=null&&e.onSuccess&&e.onSuccess(...s),await Promise.all([u.invalidateQueries({queryKey:r.getTwoFactorAuthStatusQueryKey()}),u.invalidateQueries({queryKey:r.getAllAccessRequirementStatusesQueryKey()}),...l(r).map(o=>u.invalidateQueries(o))])},mutationFn:s=>a.complete2FAEnrollment(s,t)})}function d(e){const{accessToken:t,keyFactory:r}=n(),u=i();return c({...e,onSuccess:async(...s)=>(e!=null&&e.onSuccess&&e.onSuccess(...s),Promise.all([u.invalidateQueries({queryKey:r.getTwoFactorAuthStatusQueryKey()}),u.invalidateQueries({queryKey:r.getAllAccessRequirementStatusesQueryKey()}),...l(r).map(o=>u.invalidateQueries(o))])),mutationFn:()=>a.disableTwoFactorAuthForCurrentUser(t)})}function g(e){const{accessToken:t,keyFactory:r}=n();return y({queryKey:r.getTwoFactorAuthStatusQueryKey(),queryFn:()=>a.getCurrentUserTwoFactorEnrollmentStatus(t),...e})}function h(e){return c({...e,mutationFn:t=>a.resetTwoFactorAuth(t)})}export{d as a,h as b,f as c,K as d,g as u};
