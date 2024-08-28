import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{r as o}from"./index-Dl6G-zuu.js";import{T as w,v as M}from"./SynapseClient-D4gkDMC-.js";import{u as m,s as C,v as E}from"./index-0sKCi0IA.js";import"./RegularExpressions-CgDTvkkI.js";import{h as F,S as L}from"./SynapseConstants-DNR648SI.js";import"./OrientationBanner-DcDyIfis.js";import{u as R,a as A}from"./useForum-BOO0i_qw.js";import{a as O}from"./useSubscription-DspY65UV.js";import{d as V}from"./ToastMessage-DLv4YVhE.js";import{d as U}from"./dayjs.min-d18Up55D.js";import{I as k}from"./IconSvg-BBZ15ye5.js";import{U as z,a as B}from"./UserBadge-CSoq-Vcy.js";import{v as P,w as q,x as l,y as H,z as G,C as Y}from"./HelpPopover-C02K7KMJ.js";import{B as S}from"./Button-CLkrjdQe.js";import{L as X}from"./Link-Cl5bQMMR.js";import{F as W}from"./ForumThreadEditor-CMjvHie9.js";import{S as J}from"./SubscribersModal-BOn7Oopz.js";import{T as K}from"./Typography-DgBbIcOX.js";const d=G();function Q(t){return[d.accessor("title",{header:e=>r.jsx(l,{...e,title:"Topic"}),cell:({row:e})=>r.jsxs(X,{onClick:()=>t(e.original.id),children:[e.original.isPinned?r.jsx(k,{icon:"pushpin"}):r.jsx(r.Fragment,{}),e.original.title]}),enableSorting:!0,size:250}),d.accessor("createdBy",{header:e=>r.jsx(l,{...e,title:"Author"}),cell:({getValue:e})=>r.jsx(z,{userId:e()}),enableSorting:!1,size:60}),d.accessor("activeAuthors",{header:e=>r.jsx(l,{...e,title:"Active Users"}),cell:({getValue:e})=>e().map(i=>r.jsx("div",{className:"avatarContainer",children:r.jsx(B,{showCardOnHover:!0,className:"ActiveUsers",size:F,avatarSize:"MEDIUM",ownerId:i})},i)),enableSorting:!1}),d.accessor("numberOfReplies",{header:e=>r.jsx(l,{...e,title:"Replies"}),cell:({getValue:e})=>e().toLocaleString(),enableSorting:!0,minSize:10,size:20}),d.accessor("numberOfViews",{header:e=>r.jsx(l,{...e,title:"Views"}),cell:({getValue:e})=>e().toLocaleString(),enableSorting:!0,minSize:10,size:20}),d.accessor("lastActivity",{header:e=>r.jsx(l,{...e,title:"Activity"}),cell:({getValue:e})=>U(e()).format("L"),enableSorting:!0,size:30})]}const g=({forumId:t,limit:e,filter:i,onClickLink:p})=>{var f;const[a,T]=o.useState([{desc:!0,id:"lastActivity"}]),c=o.useMemo(()=>{if(!w(a)){if(a[0].id=="lastActivity")return m.PINNED_AND_LAST_ACTIVITY;if(a[0].id=="numberOfReplies")return m.NUMBER_OF_REPLIES;if(a[0].id=="title")return m.THREAD_TITLE;if(a[0].id=="numberOfViews")return m.NUMBER_OF_VIEWS}return m.PINNED_AND_LAST_ACTIVITY},[a]),{data:s,hasNextPage:b,fetchNextPage:_}=R(t,e,c,!((f=a[0])!=null&&f.desc),i),y=o.useMemo(()=>(s==null?void 0:s.pages.flatMap(u=>u.results))??[],[s]),h=o.useMemo(()=>Q(p),[p]),x=P({data:y,columns:h,state:{sorting:a},onSortingChange:T,getRowId:u=>u.id,getCoreRowModel:H(),columnResizeMode:"onChange",manualSorting:!0,enableMultiSort:!1,enableFilters:!1});return r.jsxs("div",{className:"ForumTable",children:[r.jsx(q,{table:x,styledTableContainerProps:{sx:{my:2,maxHeight:"250px"}}}),b&&r.jsx(S,{variant:"outlined",color:"primary",onClick:()=>{_()},children:"Show more results"})]})};try{g.displayName="ForumTable",g.__docgenInfo={description:"",displayName:"ForumTable",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(threadId: string) => void"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"enum",value:[{value:'"NO_FILTER"'},{value:'"DELETED_ONLY"'},{value:'"EXCLUDE_DELETED"'}]}}}}}catch{}const Z="You will need to sign in for access to that resource",v=({forumId:t,limit:e,onClickLink:i})=>{const[p,a]=o.useState(!1),[T,c]=o.useState(!1),[s,b]=o.useState(!1),[_,y]=o.useState(!1),{subscription:h,isLoading:x,toggleSubscribed:f}=O(t,C.FORUM);function u(){try{f()}catch(D){V(D.reason,"danger")}}const{data:j}=A(t),{data:n}=M(),N=j==null?void 0:j.results.includes((n==null?void 0:n.ownerId)??""),I=()=>{(n==null?void 0:n.userName)=="anonymous"?c(!0):a(!0)};return r.jsxs("div",{className:"ForumTable",children:[r.jsxs("div",{className:"ForumTable__top-level-control",children:[r.jsx(J,{id:t,objectType:C.FORUM,showModal:_,handleModal:y}),r.jsx(S,{variant:h?"outlined":"contained",color:"primary",onClick:()=>u(),disabled:x,children:h?"Unfollow":"Follow"}),r.jsx(S,{variant:"contained",color:"primary",onClick:()=>I(),children:"New Thread"}),N&&r.jsx(S,{variant:"contained",color:"primary",onClick:()=>b(!s),children:s?"Hide Deleted Threads":"Show Deleted Threads"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(K,{variant:"h4",children:"Deleted Threads"}),r.jsx(g,{onClickLink:i,forumId:t,limit:e,filter:E.DELETED_ONLY})]}),r.jsx(g,{onClickLink:i,forumId:t,limit:e,filter:E.EXCLUDE_DELETED}),r.jsx(W,{isReply:!1,id:t,onClose:()=>a(!1),isDialog:!0,openDialog:p}),r.jsx(Y,{open:T,title:"Sign In Required",content:Z,onCancel:()=>c(!1),hasCancelButton:!1,onConfirm:()=>c(!1),confirmButtonProps:{children:"Sign In",className:L}})]})};try{v.displayName="ForumPage",v.__docgenInfo={description:"",displayName:"ForumPage",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(threadId: string) => void"}}}}}catch{}export{v as F};
