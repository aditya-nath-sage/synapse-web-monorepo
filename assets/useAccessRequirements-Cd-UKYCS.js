import{u as k}from"./useQueries-DZcNdDl4.js";import{ag as g,h as u,l as i,n as y,o,ah as l,ai as F,aj as f}from"./ApplicationSessionManager-Bh3rhePL.js";import{u as m}from"./useMutation-DnFyVAvq.js";import{u as K}from"./useInfiniteQuery-BISO5YIc.js";import"./OrientationBanner-CPsBxF8o.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";import{u as S}from"./utils-C1pLSGi5.js";import{u as Q}from"./useMediaQuery-BVccMj50.js";import{s as d}from"./sortBy-DLfoUNR6.js";import{g as A}from"./QueryFilterUtils-CTzTyfZH.js";const T=async(e,t)=>{const s=t.map(c=>g(e,c)),r=await Promise.all(s);return d(t,c=>-1*Number(r.find(n=>c===n.accessRequirementId).isApproved))};function W(){const e=S();return Q(e.breakpoints.up("md"))}function E(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getAccessRequirementQueryKey(String(e)),queryFn:()=>y.getAccessRequirementById(s,e)})}function I(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getEntityAccessRequirementsQueryKey(e),queryFn:()=>y.getAllAccessRequirements(s,e)})}function M(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getTeamAccessRequirementsQueryKey(e),queryFn:()=>y.getTeamAccessRequirements(s,e)})}function b(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getAccessRequirementWikiPageKey(e),queryFn:()=>y.getWikiPageKeyForAccessRequirement(s,e)})}function N(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getAccessRequirementAclQueryKey(e),queryFn:()=>y.getAccessRequirementAcl(s,e)})}function z(e){const t=o(),{accessToken:s,keyFactory:r}=u();return m({...e,mutationFn:c=>l(s,c),onSuccess:async(c,n,a)=>{await t.invalidateQueries({queryKey:r.getAccessRequirementAclQueryKey(n)}),e!=null&&e.onSuccess&&await e.onSuccess(c,n,a)}})}function O(e){const t=o(),{accessToken:s,keyFactory:r}=u();return m({...e,mutationFn:c=>F(s,c),onSuccess:async(c,n,a)=>{const q=r.getAccessRequirementAclQueryKey(c.id);if(t.setQueryData(q,c),e!=null&&e.onSuccess)return await e.onSuccess(c,n,a)}})}function H(e){const t=o(),{accessToken:s,keyFactory:r}=u();return m({...e,mutationFn:c=>f(s,c),onSuccess:async(c,n,a)=>{const q=r.getAccessRequirementAclQueryKey(c.id);if(t.setQueryData(q,c),e!=null&&e.onSuccess)return await e.onSuccess(c,n,a)}})}function J(e,t){const{accessToken:s,keyFactory:r}=u();return K({...t,queryKey:r.searchAccessRequirementsQueryKey(e),queryFn:async c=>await y.searchAccessRequirements(s,{...e,nextPageToken:c.pageParam}),initialPageParam:void 0,getNextPageParam:c=>c.nextPageToken})}function V(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getAccessRequirementRestrictionInformationQueryKey(e),queryFn:()=>y.getRestrictionInformation(e,s)})}function X(e){const{accessToken:t}=u(),s=o(),{keyFactory:r}=u();return m({...e,mutationFn:c=>y.createLockAccessRequirement(c,t),mutationKey:["createLockAccessRequirement"],onSuccess:async(c,n,a)=>{if(await Promise.all([s.invalidateQueries({queryKey:r.getAccessRequirementQueryKey()}),s.invalidateQueries({queryKey:r.getAllEntityDataQueryKey()}),...A(r).map(q=>s.invalidateQueries(q))]),e!=null&&e.onSuccess)return e.onSuccess(c,n,a)}})}function R(e,t,s){return{queryKey:e.getAccessRequirementStatusQueryKey(s),queryFn:()=>y.getAccessRequirementStatus(t,s)}}function Y(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,...R(r,s,e)})}function Z(e){const{accessToken:t,keyFactory:s}=u();return k({queries:e.map(r=>R(s,t,r))})}function _(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getSortedAccessRequirementsAndStatusQueryKey(e),queryFn:()=>T(s,e)})}function $(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getAccessRequirementResearchProjectQueryKey(e),queryFn:()=>y.getResearchProject(e,s)})}function p(e){const{accessToken:t}=u(),s=o(),{keyFactory:r}=u();return m({...e,mutationFn:c=>y.updateResearchProject(c,t),onSuccess:async(c,n,a)=>{if(await s.invalidateQueries({queryKey:r.getAccessRequirementResearchProjectQueryKey(c.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(c,n,a)}})}function ee(e,t){const{accessToken:s,keyFactory:r}=u();return i({...t,queryKey:r.getDataAccessRequestForUpdateQueryKey(e),queryFn:()=>y.getDataAccessRequestForUpdate(e,s)})}function se(e){const{accessToken:t}=u(),s=o(),{keyFactory:r}=u();return m({...e,mutationFn:c=>y.updateDataAccessRequest(c,t),onSuccess:async(c,n,a)=>{if(await s.invalidateQueries({queryKey:r.getDataAccessRequestForUpdateQueryKey(c.accessRequirementId)}),e!=null&&e.onSuccess)return e.onSuccess(c,n,a)}})}function te(e){const{accessToken:t}=u(),s=o(),{keyFactory:r}=u();return m({...e,mutationFn:c=>y.createAccessApproval(t,c),onSuccess:async(c,n,a)=>{if(await Promise.all([s.invalidateQueries({queryKey:r.getAccessRequirementStatusQueryKey(String(n.requirementId))}),...A(r).map(q=>s.invalidateQueries(q))]),e!=null&&e.onSuccess)return e.onSuccess(c,n,a)}})}function ce(e){const{accessToken:t}=u(),s=o(),{keyFactory:r}=u();return m({...e,mutationFn:c=>y.cancelDataAccessRequest(c.submissionId,t),onSuccess:async(c,n,a)=>{if(await s.invalidateQueries({queryKey:r.getAccessRequirementStatusQueryKey(String(n.accessRequirementId))}),e!=null&&e.onSuccess)return e.onSuccess(c,n,a)}})}export{J as a,E as b,N as c,b as d,z as e,O as f,H as g,M as h,Z as i,se as j,W as k,$ as l,p as m,ee as n,Y as o,ce as p,te as q,I as r,_ as s,V as t,X as u};
