import{k as i,q as c,p as o,o as F}from"./SynapseClient-Dsm6YORQ.js";import{u as y}from"./useMutation-UC6-jCcy.js";import{u as m}from"./useInfiniteQuery-CNqeJ8dy.js";import"./OrientationBanner-tb7WDFcR.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";import{g as v}from"./InfiniteQueryUtils-CKlRW-xB.js";function P(e){var r;const{data:t,isLoading:a}=d();return{isFavorite:(r=t==null?void 0:t.results)==null?void 0:r.some(u=>u.id===e),isLoading:a}}function T(e){const{accessToken:t,keyFactory:a}=i(),s=c();return y({...e,mutationFn:r=>o.addUserFavorite(r,t),mutationKey:["addFavorite"],onSuccess:async(r,u,n)=>{if(await s.invalidateQueries({queryKey:a.getFavoritesQueryKey()}),e!=null&&e.onSuccess)return e.onSuccess(r,u,n)}})}function l(e){const{accessToken:t}=i(),a=c(),{keyFactory:s}=i();return y({...e,mutationFn:r=>o.removeUserFavorite(r,t),mutationKey:["removeFavorite"],onSuccess:async(r,u,n)=>{if(await a.invalidateQueries({queryKey:s.getFavoritesQueryKey()}),e!=null&&e.onSuccess)return e.onSuccess(r,u,n)}})}function d(e="FAVORITED_ON",t="DESC",a){const{accessToken:s,keyFactory:r}=i();return F({...a,queryKey:r.getUserFavoritesQueryKey(e,t),queryFn:()=>o.getUserFavorites(s,void 0,void 0,e,t)})}function C(e="FAVORITED_ON",t="DESC",a){const{accessToken:r,keyFactory:u}=i();return m({...a,queryKey:u.getUserFavoritesInfiniteQueryKey(e,t),queryFn:async n=>o.getUserFavorites(r,n.pageParam,10,e,t),initialPageParam:void 0,getNextPageParam:v})}export{T as a,l as b,d as c,C as d,P as u};
