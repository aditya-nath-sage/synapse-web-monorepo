import{i,l as Q,n as g,S as m}from"./SynapseClient-CZkcD3lR.js";import{n as l}from"./RegularExpressions-RV1YxBM7.js";import"./OrientationBanner-BKoSQ39U.js";import"./index-Cu9bd8lq.js";import"./jsx-runtime-DoxjgJx5.js";function K(t,y){const{accessToken:o,keyFactory:r}=i(),s=Q();t=t.map(n=>({...n,targetId:l(n.targetId)}));const c=async()=>{const n=await m.getEntityHeaders(t,o);return n.results.forEach(e=>{const a=t.find(u=>u.targetVersionNumber?u.targetId===e.id&&u.targetVersionNumber===e.versionNumber:u.targetId===e.id);if(a&&(s.setQueryData(r.getEntityHeadersQueryKey([a]),{results:[e],totalNumberOfResults:1}),s.setQueryData(r.getEntityHeaderQueryKey(a.targetId,a.targetVersionNumber),e),a.targetVersionNumber&&e.isLatestVersion)){const u={targetId:e.id};s.setQueryData(r.getEntityHeadersQueryKey([u]),{results:[e],totalNumberOfResults:1}),s.setQueryData(r.getEntityHeaderQueryKey(a.targetId),e)}}),n};return g({...y,queryKey:r.getEntityHeadersQueryKey(t),queryFn:c})}function q(t="",y,o){const{accessToken:r,keyFactory:s}=i();return t&&(t=l(t)),g({enabled:!!t,...o,queryKey:s.getEntityHeaderQueryKey(t,y),queryFn:()=>m.getEntityHeader(t,y,r)})}export{K as a,q as u};
