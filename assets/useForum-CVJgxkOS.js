import{a as n}from"./useQuery-ChYzlhEH.js";import{u as F}from"./useInfiniteQuery-qf0Ukl-A.js";import{i as o,S as s}from"./SynapseClient-DLsmXUrC.js";import"./RegularExpressions-RV1YxBM7.js";import"./OrientationBanner-BKoSQ39U.js";import"./index-Cu9bd8lq.js";import{g}from"./InfiniteQueryUtils-CKlRW-xB.js";import"./jsx-runtime-DoxjgJx5.js";function f(e,r){const{accessToken:t,keyFactory:a}=o();return n({...r,queryKey:a.getForumModeratorsQueryKey(e),queryFn:()=>s.getModerators(t,e)})}function Q(e,r){const{accessToken:t,keyFactory:a}=o();return n({...r,queryKey:a.getForumMetadataQueryKey(e),queryFn:()=>s.getForumMetadata(t,e)})}function x(e,r,t,a,u,y){const{accessToken:m,keyFactory:i}=o();return F({...y,queryKey:i.getForumThreadsQueryKey(e,r,t,a,u),queryFn:async c=>s.getForumThreads(m,e,c.pageParam,r,t,a,u),initialPageParam:void 0,getNextPageParam:g})}export{f as a,Q as b,x as u};
