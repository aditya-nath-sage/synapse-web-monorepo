import{l}from"./index-DzDa9m9N.js";import{a3 as k,a4 as I,a5 as f,a6 as S,a7 as g,a8 as _,a9 as N,aa as $,ab as T}from"./SynapseClient-CyQCREGs.js";import{Y as m}from"./index-CIIvWsNs.js";import{m as v}from"./index-pkXYpAVj.js";import{a as b}from"./mockEntity-DzPhzdZh.js";import{m as L}from"./mockSchema-QU10_uTK.js";import{a as O}from"./mockProject-C1gNptpI.js";import"./OrientationBanner-BBh8JRgP.js";import{n as E}from"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";import{u as w}from"./uniqueId-CSw6ftlJ.js";const U=1111,j=2222,A=3333,M=4444,y={storageLocationId:k,uploadType:m.S3,banner:"",concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"},D={...y,baseKey:"exampleS3BaseKey",stsEnabled:!0,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"},h={...D,storageLocationId:U,endpointUrl:"https://my-endpoint.fake",bucket:"myExternalS3Bucket",concreteType:"org.sagebionetworks.repo.model.file.ExternalS3UploadDestination"},C={...y,baseKey:"exampleGCPBaseKey",storageLocationId:j,uploadType:m.GOOGLECLOUDSTORAGE,bucket:"myExternalGCPBucket",concreteType:"org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination"},G={...y,storageLocationId:A,uploadType:m.HTTPS,url:"https://myurl.fake",concreteType:"org.sagebionetworks.repo.model.file.ExternalUploadDestination"},R={...y,storageLocationId:M,uploadType:m.HTTPS,endpointUrl:"https://my-endpoint.fake",bucket:"myExternalObjectStoreBucket",keyPrefixUUID:"uuidKeyPrefix",concreteType:"org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination"},B=[D,h,C,G,R];function P(a){const n=a.map(E);return v.filter(r=>n.includes(E(r.id)))}function p(a){const n=P([a]);if(n.length!=0)return n[0]}function K(a,n){return l.rest.post(`${a}${T(":entityId")}`,async(r,t,o)=>{let e=404,s={reason:`Mock Service worker could not find a mock entity bundle with ID ${r.params.entityId}`};{const i=p(r.params.entityId);i!=null&&i.bundle&&(s=i.bundle,e=200)}return t(o.status(e),o.json(s))})}function Y(a,n){return l.rest.post(`${a}${T(":entityId",":versionNumber")}`,async(r,t,o)=>{const e=r.params.entityId,s=parseInt(r.params.versionNumber);let i=404,c={reason:`Mock Service worker could not find a mock entity bundle with ID ${e}`};{const d=p(e);if(d){const u=d.bundle;d.versions&&d.versions[s]?c={...u,entity:d.versions[s]}:c=u,i=200}}return t(o.status(i),o.json(c))})}const ot=a=>[l.rest.post(`${a}${I}`,async(n,r,t)=>{let o=200;const e=await n.json();let s={reason:"..."};return e?e.name===b?(s.reason="Invalid project name",o=403):s={id:w("syn"),...e}:(o=400,s={reason:`Mock service worker received the following malformed body for PUT ${I} : ${JSON.stringify(e)}`}),r(t.status(o),t.json(s))}),l.rest.get(`${a}${f(":entityId")}`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find a mock entity with ID ${n.params.entityId}`};const s=p(n.params.entityId);return s&&(e=s.entity,o=200),r(t.status(o),t.json(e))}),l.rest.get(`${a}${S(":entityId")}`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find mock entity versions for ID ${n.params.entityId}`};const s=p(n.params.entityId);return s&&s.versionInfo&&(e={results:s.versionInfo},o=200),r(t.status(o),t.json(e))}),l.rest.get(`${a}${g(":entityId",":versionNumber")}`,async(n,r,t)=>{let o=404;const e=n.params.entityId,s=n.params.versionNumber.toString(),i=parseInt(s);let c={reason:`Mock Service worker could not find a mock versioned entity with ID ${e}.${s}`};const d=p(n.params.entityId);return d&&d.versions&&d.versions[i]&&(c=d.versions[i],o=200),r(t.status(o),t.json(c))}),K(a),Y(a),l.rest.get(`${a}${_(":entityId")}`,async(n,r,t)=>r(t.status(200),t.json(L))),l.rest.get(`${a}${N(":entityId")}`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const s=p(n.params.entityId);return s!=null&&s.json&&(e=s.json,o=200),r(t.status(o),t.json(e))}),l.rest.post(`${a}${$}`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find a mock entity bundle with ID ${n.params.entityId}`};const i=n.body.references.map(c=>{var u;const d=(u=p(c.targetId))==null?void 0:u.entityHeader;if(d)return{...d,id:c.targetId}}).filter(c=>!!c);return i&&(e={results:i},o=200),r(t.status(o),t.json(e))}),l.rest.get(`${a}${f(":entityId")}/path`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find a mock entity path using ID ${n.params.entityId}`};const s=p(n.params.entityId);return s&&s.path&&(e=s.path,o=200),r(t.status(o),t.json(e))}),l.rest.get(`${a}/file/v1/entity/:id/uploadDestination`,async(n,r,t)=>{const o={banner:"",storageLocationId:1,uploadType:m.S3,concreteType:"org.sagebionetworks.repo.model.file.S3UploadDestination"};return r(t.status(200),t.json(o))}),l.rest.get(`${a}/file/v1/entity/:id/uploadDestination/:storageLocationId`,async(n,r,t)=>{let o=404,e={reason:`Mock Service worker could not find an uploadDestination using storageLocationId ${n.params.storageLocationId}`};const s=B.find(i=>Number(n.params.storageLocationId)===i.storageLocationId);return s&&(e=s,o=200),r(t.status(o),t.json(e))}),l.rest.get(`${a}/repo/v1/projects`,async(n,r,t)=>{const o={results:O.map(e=>({name:e.name,id:e.id,lastActivity:"2024-01-04T21:11:59.000Z",modifiedBy:parseInt(e.entity.modifiedBy),modifiedOn:e.entity.modifiedOn}))};return r(t.status(200),t.json(o))})];export{ot as g};
