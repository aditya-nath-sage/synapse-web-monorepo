import{a as m,u as y}from"./useQuery-ChYzlhEH.js";import{u as o}from"./useMutation-DAMF4D7y.js";import{u as S}from"./useInfiniteQuery-qf0Ukl-A.js";import{i as r,S as i}from"./SynapseClient-DLsmXUrC.js";import"./RegularExpressions-RV1YxBM7.js";import"./OrientationBanner-BKoSQ39U.js";import"./index-Cu9bd8lq.js";import"./jsx-runtime-DoxjgJx5.js";function k(s,t){const{accessToken:u,keyFactory:a}=r();return m({...t,queryKey:a.getDataAccessSubmissionQueryKey(String(s.toString())),queryFn:()=>i.getSubmissionById(s,u)})}function p(s,t){const{accessToken:u,keyFactory:a}=r();return S({...t,queryKey:a.searchDataAccessSubmissionQueryKey(s),queryFn:async e=>await i.searchAccessSubmission({...s,nextPageToken:e.pageParam},u),initialPageParam:void 0,getNextPageParam:e=>e.nextPageToken})}function D(s){const t=y(),{accessToken:u,keyFactory:a}=r();return o({...s,mutationFn:e=>i.updateSubmissionStatus(e,u),onSuccess:async(e,c,n)=>{await t.invalidateQueries({queryKey:a.searchDataAccessSubmissionQueryKey()}),t.setQueryData(a.getDataAccessSubmissionQueryKey(c.submissionId),e)}})}function q(s){const t=y(),{accessToken:u,keyFactory:a}=r();return o({...s,mutationFn:async({request:e,accessRequirementId:c})=>{if(e.subjectId==null||e.subjectType==null){const{subjects:n}=await i.getSubjects(u,c);e.subjectId=n[0].id,e.subjectType=n[0].type}return i.submitDataAccessRequest(e,u)},onSuccess:async(e,c,n)=>{await t.invalidateQueries({queryKey:a.getAccessRequirementStatusQueryKey(c.accessRequirementId)}),await t.invalidateQueries({queryKey:a.searchDataAccessSubmissionQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(e,c,n)}})}export{k as a,p as b,q as c,D as u};
