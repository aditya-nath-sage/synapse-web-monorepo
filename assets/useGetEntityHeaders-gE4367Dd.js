import{k as i,o as p,p as g,q as m}from"./SynapseClient-C1hEaEDx.js";import"./OrientationBanner-D9iiRUAg.js";import{n as l}from"./RegularExpressions-D6yUxzx6.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";function K(t,o){const{accessToken:y,keyFactory:r}=i(),s=p();t=t.map(n=>({...n,targetId:l(n.targetId)}));const c=async()=>{const n=await m.getEntityHeaders(t,y);return n.results.forEach(e=>{const a=t.find(u=>u.targetVersionNumber?u.targetId===e.id&&u.targetVersionNumber===e.versionNumber:u.targetId===e.id);if(a&&(s.setQueryData(r.getEntityHeadersQueryKey([a]),{results:[e],totalNumberOfResults:1}),s.setQueryData(r.getEntityHeaderQueryKey(a.targetId,a.targetVersionNumber),e),a.targetVersionNumber&&e.isLatestVersion)){const u={targetId:e.id};s.setQueryData(r.getEntityHeadersQueryKey([u]),{results:[e],totalNumberOfResults:1}),s.setQueryData(r.getEntityHeaderQueryKey(a.targetId),e)}}),n};return g({...o,queryKey:r.getEntityHeadersQueryKey(t),queryFn:c})}function N(t="",o,y){const{accessToken:r,keyFactory:s}=i();return t&&(t=l(t)),g({enabled:!!t,...y,queryKey:s.getEntityHeaderQueryKey(t,o),queryFn:()=>m.getEntityHeader(t,o,r)})}export{K as a,N as u};
