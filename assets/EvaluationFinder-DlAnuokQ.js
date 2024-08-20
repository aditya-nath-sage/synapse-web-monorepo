import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{r as v}from"./index-Dl6G-zuu.js";import{k as g,o as h,q as E,p as S}from"./SynapseClient-C1hEaEDx.js";import{u as T}from"./useInfiniteQuery-CKL60yJt.js";import"./OrientationBanner-D9iiRUAg.js";import"./RegularExpressions-D6yUxzx6.js";import"./getEndpoint-CjoHA800.js";import{g as N}from"./InfiniteQueryUtils-CKlRW-xB.js";import{H as A}from"./HelpPopover-D47wQWp0.js";import{C as _}from"./Checkbox-C63vyfGV.js";import{L as C}from"./LinearProgress-CT4xaOaH.js";import{A as M}from"./Alert-Aa0bm5Nm.js";import{F as O}from"./FormControl-ocCBLRGJ.js";import{F as D}from"./FormGroup-CduZx8Vk.js";import{T as F}from"./Typography-DgBbIcOX.js";import{B as j}from"./Box-DRYT9rh3.js";import{B as m}from"./Button-CLkrjdQe.js";function $(t,o){const{accessToken:u,keyFactory:s}=g();return S({...o,queryKey:s.getEvaluationByIdQueryKey(t),queryFn:()=>E.getEvaluation(t,u)})}function B(t={},o){const{accessToken:s,keyFactory:i}=g(),n=h();return T({...o,queryKey:i.getEvaluationsQueryKey(t),queryFn:async l=>{const r=await E.getEvaluations({...t,limit:20,offset:l.pageParam},s);return r.results.forEach(c=>{n.setQueryData(i.getEvaluationByIdQueryKey(c.id),c)}),r},initialPageParam:void 0,getNextPageParam:N})}function p(t){var d;const{accessType:o,activeOnly:u,selectedIds:s=[],onChange:i}=t,[n,l]=v.useState(0),{data:r,isLoading:c,hasNextPage:y,fetchNextPage:f,isFetchingNextPage:I}=B({accessType:o,activeOnly:u},{placeholderData:e=>e,throwOnError:!0});if(c)return a.jsx(C,{});if(!(r!=null&&r.pages))return a.jsx(M,{severity:"error",children:"An unexpected error occurred and evaluations could not be loaded"});const x=r.pages.length-1>n||y&&!I;return a.jsxs(a.Fragment,{children:[a.jsx(O,{children:a.jsx(D,{sx:{gap:1},children:(d=r.pages[n])==null?void 0:d.results.map(e=>a.jsx(_,{label:a.jsxs(F,{variant:"smallText1",component:"span",children:[e.name," ",e.submissionInstructionsMessage&&e.submissionInstructionsMessage.length>0&&a.jsx(A,{markdownText:e.submissionInstructionsMessage,placement:"right"})]}),"aria-label":e.name,checked:s.includes(e.id),onChange:()=>{s.includes(e.id)?i(s.filter(P=>P!==e.id)):i([...s,e.id])}},e.id))})}),a.jsxs(j,{display:"flex",my:2,gap:1,children:[n>0&&a.jsx(m,{variant:"outlined",onClick:()=>l(e=>e-1),children:"Previous Page"}),a.jsx(m,{variant:"outlined",disabled:!x,onClick:()=>{r.pages[n+1]?l(e=>e+1):f().then(()=>l(e=>e+1)).catch(()=>{console.error("Error fetching next page of evaluations")})},children:"Next Page"})]})]})}try{p.displayName="EvaluationFinder",p.__docgenInfo={description:"",displayName:"EvaluationFinder",props:{accessType:{defaultValue:null,description:"",name:"accessType",required:!1,type:{name:"enum",value:[{value:'"CREATE"'},{value:'"READ"'},{value:'"UPDATE"'},{value:'"DELETE"'},{value:'"CHANGE_PERMISSIONS"'},{value:'"DOWNLOAD"'},{value:'"UPLOAD"'},{value:'"PARTICIPATE"'},{value:'"SUBMIT"'},{value:'"READ_PRIVATE_SUBMISSION"'},{value:'"UPDATE_SUBMISSION"'},{value:'"DELETE_SUBMISSION"'},{value:'"TEAM_MEMBERSHIP_UPDATE"'},{value:'"SEND_MESSAGE"'},{value:'"CHANGE_SETTINGS"'},{value:'"MODERATE"'},{value:'"REVIEW_SUBMISSIONS"'},{value:'"EXEMPTION_ELIGIBLE"'}]}},activeOnly:{defaultValue:null,description:"",name:"activeOnly",required:!1,type:{name:"boolean"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newSelectedIds: string[]) => void"}}}}}catch{}export{p as E,$ as u};
