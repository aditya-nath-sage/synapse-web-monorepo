import{i as l,l as u,o as f,n as o}from"./SynapseClient-CyQCREGs.js";import"./OrientationBanner-BBh8JRgP.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";import{c as m}from"./cloneDeep-B4bBaQow.js";function R(e,t,n,s){t.requestedFiles.length!==1&&console.warn("useGetPresignedUrlContent only supports one file at a time");const{accessToken:r,keyFactory:a}=l(),i=async()=>{const c=await o.getFiles(t,r);return await o.getFileHandleContent(e,c.requestedFiles[0].preSignedURL,n)};return u({...s,queryKey:a.getPresignedUrlContentQueryKey(e,t,n),queryFn:i,staleTime:1/0})}function k(e,t=!1,n){const{accessToken:s,keyFactory:r}=l(),a=async()=>{const i=await o.getFiles({requestedFiles:[e],includeFileHandles:!0,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1},t?void 0:s);return await o.getFileHandleContent(i.requestedFiles[0].fileHandle,i.requestedFiles[0].preSignedURL)};return u({...n,queryKey:r.getPresignedUrlFromFHAContentQueryKey(e,t),queryFn:a,staleTime:1/0})}function G(e,t){const{keyFactory:n}=l(),s=async()=>{const r=await o.getProfilePicPreviewPresignedUrl(e);return r?await(await fetch(r,{method:"GET",mode:"cors",cache:"no-cache"})).blob():null};return u({...t,queryKey:n.getProfileImageQueryKey(e),queryFn:s,staleTime:1/0})}function I(e,t){const{accessToken:n,keyFactory:s}=l(),r=f(),a=async()=>{const i=await o.getFiles(e,n);return i.requestedFiles.forEach(c=>{const d=e.requestedFiles.find(g=>g.fileHandleId===c.fileHandleId),y={...m(e),requestedFiles:[d]},F={requestedFiles:[c]};r.setQueryData(s.getBatchOfFiles(y),F)}),i};if(e.includePreSignedURLs||e.includePreviewPreSignedURLs)throw new Error("useGetFileBatch does not support pre-signed URLs.");return u({...t,queryKey:s.getBatchOfFiles(e),queryFn:a})}export{k as a,G as b,R as c,I as u};
