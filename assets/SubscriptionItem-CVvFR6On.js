import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{s as n}from"./index-0sKCi0IA.js";import{T as m}from"./Topic-Cgjn8TPH.js";import{b as _}from"./useForum-BOO0i_qw.js";import{s as b,B as l}from"./SynapseClient-D4gkDMC-.js";import"./RegularExpressions-CgDTvkkI.js";import"./OrientationBanner-DcDyIfis.js";import"./index-Dl6G-zuu.js";import{a as f}from"./useEntity-VnPVwusp.js";import{a as T}from"./useSubscription-DspY65UV.js";import{u as y}from"./useThread-z1BI4EKN.js";function a(t){const{subscription:i}=t,{data:e}=_(i.objectId),{data:r}=f(e==null?void 0:e.projectId,void 0,{enabled:!!e}),{isSubscribed:c,isLoading:p,toggleSubscribed:s}=T(i.objectId,n.FORUM);let u;return e&&(u=`${b(l.PORTAL_ENDPOINT)}Synapse:${e.projectId}/discussion`),o.jsx(m,{isLoading:p,isSubscribed:c,icon:"dashboard",name:r==null?void 0:r.name,nameHref:u,onToggleSubscribe:s})}try{a.displayName="ForumTopic",a.__docgenInfo={description:"",displayName:"ForumTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function S(t){const{subscription:i}=t,{threadData:e}=y(i.objectId),{isSubscribed:r,isLoading:c,toggleSubscribed:p}=T(i.objectId,n.THREAD);let s;return e&&(s=`${b(l.PORTAL_ENDPOINT)}Synapse:${e.projectId}/discussion/threadId=${i.objectId}`),o.jsx(m,{isLoading:c,isSubscribed:r,icon:"discussion",name:e==null?void 0:e.title,nameHref:s,onToggleSubscribe:p})}try{ThreadTopic.displayName="ThreadTopic",ThreadTopic.__docgenInfo={description:"",displayName:"ThreadTopic",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}function d(t){const{subscription:i}=t;switch(i.objectType){case n.FORUM:return o.jsx(a,{subscription:i});case n.THREAD:return o.jsx(S,{subscription:i});default:return console.warn(`Subscription type ${t.subscription.objectType} not supported in UI`),o.jsx(o.Fragment,{})}}try{d.displayName="SubscriptionItem",d.__docgenInfo={description:`Simple discriminator component that maps a {@link Subscription} rendered on the {@link SubscriptionPage } to
a {@link Topic } component`,displayName:"SubscriptionItem",props:{subscription:{defaultValue:null,description:"",name:"subscription",required:!0,type:{name:"Subscription"}}}}}catch{}export{d as S};
