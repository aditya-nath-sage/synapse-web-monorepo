import{k as d,D as m}from"./index-CdAyn5Hz.js";import{l as y,r as l,m as p,n as b,O as g}from"./SynapseClient-BHsOBGLR.js";import{u as S}from"./useMutation-DIWUsof1.js";import{u as f}from"./useInfiniteQuery-Cx3gNQUJ.js";import"./OrientationBanner-D9iiRUAg.js";import{r as Q}from"./index-Dl6G-zuu.js";import"./EntityTypeUtils-D1CcfD2e.js";import"./getEndpoint-CjoHA800.js";import"./jsx-runtime-Du8NFWEI.js";function L(t,e){const{accessToken:s,keyFactory:r}=y();return b({...e,queryKey:r.getSubscribersQueryKey(t.objectId,t.objectType),queryFn:()=>p.getSubscribers(s,t)})}function K(t,e,s){const{accessToken:r,keyFactory:n}=y(),i=async()=>{const u={objectType:e,idList:[t],sortByType:d.OBJECT_ID,sortDirection:m.ASC},o=await p.postSubscriptionList(r,u);return g(o.results)?null:o.results[0]};return b({...s,queryKey:n.getSubscriptionQueryKey(t,e),queryFn:i})}function w(t,e,s){const{accessToken:r,keyFactory:n}=y(),i=l();return f({...e,queryKey:s??n.getAllSubscriptionsQueryKey(t),queryFn:async u=>{const o=u.pageParam,c=await p.getAllSubscriptions(r,10,o,t);return c.results.forEach(a=>{i.setQueryData(n.getSubscriptionQueryKey(a.objectId,a.objectType),a)}),c},initialPageParam:void 0,getNextPageParam:(u,o)=>{const c=o.flatMap(a=>a.results).length;if(u.totalNumberOfResults>c)return c}})}function q(t){const e=l(),{accessToken:s,keyFactory:r}=y();return S({...t,mutationFn:n=>p.postSubscription(s,n),onSuccess:async(n,i,u)=>{await Promise.all([e.invalidateQueries({queryKey:r.getAllSubscriptionsQueryKey()}),e.invalidateQueries({queryKey:r.getSubscriptionQueryKey(i.objectId,i.objectType)}),e.invalidateQueries({queryKey:r.getSubscribersQueryKey(i.objectId,i.objectType)})])}})}function k(t){const e=l(),{accessToken:s,keyFactory:r}=y();return S({...t,mutationFn:n=>p.deleteSubscription(s,n.subscriptionId),onSuccess:async(n,i,u)=>{await Promise.all([e.invalidateQueries({queryKey:r.getAllSubscriptionsQueryKey()}),e.invalidateQueries({queryKey:r.getSubscriptionQueryKey(i.objectId,i.objectType)}),e.invalidateQueries({queryKey:r.getSubscribersQueryKey(i.objectId,i.objectType)})])}})}const B=(t,e)=>{const{data:s,isLoading:r}=K(t,e),{mutate:n,isPending:i}=q(),{mutate:u,isPending:o}=k(),c=r||i||o,a=Q.useCallback(()=>{s?u(s):n({objectId:t,objectType:e})},[u,t,e,n,s]);return{isLoading:c,subscription:s,toggleSubscribed:a,isSubscribed:!!s}};export{B as a,w as b,L as u};
