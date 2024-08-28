import{r as A}from"./index-Dl6G-zuu.js";import{u as G}from"./useQueries-Gre6fUe3.js";import{bj as I,bk as K,k as a,q as o,p as m,o as d}from"./SynapseClient-D4gkDMC-.js";import{u as E}from"./useMutation-BrriwhYv.js";import{u as L}from"./useInfiniteQuery-XcJaVaVN.js";import{r as h}from"./RegularExpressions-CgDTvkkI.js";import{i as M}from"./isEqualWith-DihPwTBB.js";import{a as C}from"./isArray-ggc3KxVp.js";import{i as T}from"./_Map-CWVOAJuy.js";import{i as w,o as Q,p as B}from"./pick-DLWpS9wS.js";import"./OrientationBanner-DcDyIfis.js";import"./jsx-runtime-Du8NFWEI.js";import{i as F}from"./QueryFilterUtils-CLCheuDv.js";import{g as D}from"./InfiniteQueryUtils-CKlRW-xB.js";import{t as k}from"./index-0sKCi0IA.js";import{o as v}from"./omit-CSy2asyG.js";const P=(e,n)=>{if(!(C(e)||C(n))&&!(!T(e)||!T(n))&&!(!w(e,void 0)&&!w(n,void 0)))return M(Q(e,s=>s===void 0),Q(n,s=>s===void 0),P)};function J(e,n){return M(e,n,P)}function U(e,n){const s=new Set;for(const c of e)s.add(c.id);for(const c of n)if(c.id!=null&&!s.has(c.id))throw new Error(`Proposed schema contains a new column model with ID ${c.id} that is not in the old schema.`)}async function V(e,n,s,c){U(s,c);const t=new Map;for(const l of s)t.set(l.id,l);let u=[];for(const l of c){const y={...l};if(y.id!=null){const g=t.get(y.id);g!=null&&!J(g,y)&&delete y.id}u.push(y)}const r=(await I(e,u)).list,i=[],f=new Set;for(let l=0;l<c.length;l++){const y=c[l].id??null,g=r[l].id;y!=null&&f.add(y),f.add(g),y!=null&&y!==g?i.push({oldColumnId:y,newColumnId:g}):y==null&&i.push({oldColumnId:null,newColumnId:g})}for(const l of s){const y=l.id;f.has(y)||i.push({oldColumnId:y,newColumnId:null})}return{concreteType:"org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest",entityId:n,changes:[{concreteType:"org.sagebionetworks.repo.model.table.TableSchemaChangeRequest",entityId:n,changes:i,orderedColumnIds:r.map(l=>l.id)}]}}function q(e,n,s=k){const{accessToken:c,keyFactory:t}=a();return{queryKey:t.getEntityBundleQueryKey(e,n,s),queryFn:()=>o.getEntityBundleV2(e,s,n,c)}}function ce(e,n,s=k,c){const t=q(e,n,s);return m({...c,...t})}function ue(e,n,s=k,c){const t=q(e,n,s);return K({...c,...t})}function re(e,n,s){const{accessToken:c,keyFactory:t}=a();return m({...s,queryKey:t.getEntityVersionQueryKey(e,n),queryFn:()=>o.getEntity(c,e,n==null?void 0:n.toString())})}function ae(e,n){const{accessToken:s,keyFactory:c}=a(),t=A.useMemo(()=>({queries:e.map(u=>({queryKey:c.getEntityVersionQueryKey(u.id,u.versionNumber),queryFn:()=>o.getEntity(s,u.id,u.versionNumber),options:n}))}),[s,e,c,n]);return G(t)}function oe(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({mutationFn:t=>o.createEntity(t,s),onSuccess:async(t,u,r)=>{const i=c.getEntityQueryKey(t.id);n.setQueryData(i,t),await F(n,c,t.id,i),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function ie(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>o.updateEntity(t,s),onSuccess:async(t,u,r)=>{const i=c.getEntityQueryKey(t.id);n.setQueryData(i,t),await F(n,c,t.id,i),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function ye(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>o.deleteEntity(s,t),onSuccess:async(t,u,r)=>{await F(n,c,u),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function le(e,n){const{accessToken:c,keyFactory:t}=a();return L({...n,queryKey:t.getEntityVersionsQueryKey(e),queryFn:async u=>await o.getEntityVersions(e,c,u.pageParam,200),initialPageParam:void 0,getNextPageParam:D})}function O(e){return B(e,h[e.concreteType])}function x(e){return v(e,h[e.concreteType])}function fe(e,n,s,c){const{accessToken:t,keyFactory:u}=a();return m({...c,queryKey:u.getEntityJsonQueryKey(e,n,s),queryFn:()=>o.getEntityJson(e,n,s,t),select:r=>{const i=O(r),f=x(r);return{entity:r,entityMetadata:i,annotations:f}}})}function me(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>{const u=t.id;return o.updateEntityJson(u,t,s)},onSuccess:async(t,u,r)=>{const i=t.id,f=c.getEntityJsonQueryKey(i,void 0,!1);n.setQueryData(f,t),await F(n,c,i,f),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function de(e,n){const{accessToken:s,keyFactory:c}=a();return m({...n,queryKey:c.getEntityPathQueryKey(e),queryFn:()=>o.getEntityPath(e,s)})}function Ee(e,n){const{accessToken:s,keyFactory:c}=a();return m({...n,queryKey:c.getEntityPathQueryKey(e),queryFn:()=>o.getEntityACL(e,s)})}function ge(e,n){const{accessToken:s,keyFactory:c}=a();return m({...n,queryKey:c.getEntityAliasQueryKey(e),queryFn:()=>o.getEntityAlias(e,s)})}function Fe(e,n,s){const{accessToken:c,keyFactory:t}=a();return m({...s,queryKey:t.getEntityEvaluationsQueryKey(e),queryFn:()=>o.getAllEntityEvaluations(e,n,c)})}function ke(e,n){const{accessToken:s,keyFactory:c}=a();return m({...n,queryKey:c.getEntityPermissionsQueryKey(e),queryFn:()=>o.getEntityPermissions(e,s)})}const S=async(e,n,s,c)=>{const t=c.getEntityACLQueryKey(e);n&&s.setQueryData(t,n),await F(s,c,e,t)};function qe(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>o.createEntityACL(t,s),onSuccess:async(t,u,r)=>{await S(t.id,t,n,c),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function Se(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>o.updateEntityACL(t,s),onSuccess:async(t,u,r)=>{await S(t.id,t,n,c),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function Ce(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:t=>o.deleteEntityACL(t,s),onSuccess:async(t,u,r)=>{await S(u,null,n,c),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}function R(e){return{...q(e,void 0,{includeBenefactorACL:!0}),select:s=>s.benefactorAcl}}function Te(e,n){const s=R(e);return K({...n,...s})}function we(e){const n=d(),{accessToken:s,keyFactory:c}=a();return E({...e,mutationFn:async t=>{const u=await V(s,t.entityId,t.originalColumnModels,t.newColumnModels);return o.updateTable(u,s)},onSuccess:async(t,u,r)=>{await F(n,c,u.entityId),e!=null&&e.onSuccess&&await e.onSuccess(t,u,r)}})}export{re as a,ie as b,we as c,de as d,fe as e,ae as f,Fe as g,Se as h,ge as i,Ee as j,ke as k,oe as l,me as m,ye as n,le as o,ue as p,Te as q,qe as r,Ce as s,ce as u};
