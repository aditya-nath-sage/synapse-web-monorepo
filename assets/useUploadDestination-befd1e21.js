import{G as n,r as c,s as i,P as E,E as a,b as g,U as _}from"./index-4a1b1a67.js";import{h as u,l,aD as f,aE as p}from"./ApplicationSessionManager-7bf0c8e1.js";import"./OrientationBanner-450e6652.js";import"./index-76fb7be0.js";import"./getEndpoint-ac94413e.js";import"./jsx-runtime-9dc53467.js";const T="Synapse Storage";function N(e,t){switch(e.concreteType){case a:return{endpoint:e.endpointUrl,bucket:e.bucket,fileKey:e.fileKey};case E:case i:return{url:s(e,t)};case c:case n:return{location:s(e,t)};default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function s(e,t){switch(e.concreteType){case E:return e.filePath;case a:case c:case n:return t?b(t):e.concreteType===a?e.bucket:e.bucketName;case i:return e.externalURL;default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}function O(e){let t;return e.entityType===g.FILE&&(t=e.fileHandles.filter(r=>r.id===e.entity.dataFileHandleId)[0]),t}function b(e){let t="";if(e)switch(e.concreteType){case"org.sagebionetworks.repo.model.file.S3UploadDestination":t=T;break;case"org.sagebionetworks.repo.model.file.ExternalUploadDestination":if(t=e.url,e.uploadType===_.SFTP){const r=t.lastIndexOf("/");r&&(t=t.substring(0,r))}break;case"org.sagebionetworks.repo.model.file.ExternalS3UploadDestination":t="s3://"+e.bucket+"/",e.baseKey!=null&&(t+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination":t="gs://"+e.bucket+"/",e.baseKey!=null&&(t+=e.baseKey);break;case"org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination":t=e.endpointUrl+"/"+e.bucket;break}return t}function C(e,t){const{accessToken:r,keyFactory:o}=u();return l({...t,queryKey:o.getDefaultUploadDestinationQueryKey(e),queryFn:()=>f(e,r)})}function d(e,t,r){const{accessToken:o,keyFactory:y}=u();return l({...r,queryKey:y.getUploadDestinationForStorageLocationQueryKey(e,t),queryFn:()=>p(e,t,o)})}export{s as a,C as b,N as c,b as d,O as g,d as u};
