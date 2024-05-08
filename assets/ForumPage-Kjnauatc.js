import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as n}from"./index-Dl6G-zuu.js";import{U as M,I as R}from"./SynapseClient-FKD_6oQs.js";import{u as p,t as C,v as E}from"./index-Pxtlv3yl.js";import{k as F,S as L}from"./SynapseConstants-BdplthnD.js";import"./getEndpoint-CjoHA800.js";import{u as A,a as z}from"./useForum-BQUbOfi-.js";import{a as O}from"./useSubscription-vDa1CBqe.js";import{d as V}from"./ToastMessage-CsPwcNWl.js";import{d as U}from"./dayjs.min-d18Up55D.js";import{I as k}from"./IconSvg-D-78-NmD.js";import{U as B,a as H}from"./UserBadge-CUUMpula.js";import{S as P}from"./StyledTableContainer-Br28iU_B.js";import{u as q,v as N,w as c,x as G,y as Y,C as X}from"./HelpPopover-BmXMm3Un.js";import{B as x}from"./Button-mb55Lwfk.js";import{L as W}from"./Link-EkQ0dGSu.js";import{F as $}from"./ForumThreadEditor-BFPQ4cZk.js";import{S as J}from"./SubscribersModal-BJOZVBxm.js";import{T as K}from"./Typography-B88_J_TK.js";const u=Y();function Q(s){return[u.accessor("title",{header:t=>e.jsx(c,{...t,title:"Topic"}),cell:({row:t})=>e.jsxs(W,{onClick:()=>s(t.original.id),children:[t.original.isPinned?e.jsx(k,{icon:"pushpin"}):e.jsx(e.Fragment,{}),t.original.title]}),enableSorting:!0,size:250}),u.accessor("createdBy",{header:t=>e.jsx(c,{...t,title:"Author"}),cell:({getValue:t})=>e.jsx(B,{userId:t()}),enableSorting:!1,size:60}),u.accessor("activeAuthors",{header:t=>e.jsx(c,{...t,title:"Active Users"}),cell:({getValue:t})=>t().map(l=>e.jsx("div",{className:"avatarContainer",children:e.jsx(H,{showCardOnHover:!0,className:"ActiveUsers",size:F,avatarSize:"MEDIUM",ownerId:l})},l)),enableSorting:!1}),u.accessor("numberOfReplies",{header:t=>e.jsx(c,{...t,title:"Replies"}),cell:({getValue:t})=>t().toLocaleString(),enableSorting:!0,minSize:10,size:20}),u.accessor("numberOfViews",{header:t=>e.jsx(c,{...t,title:"Views"}),cell:({getValue:t})=>t().toLocaleString(),enableSorting:!0,minSize:10,size:20}),u.accessor("lastActivity",{header:t=>e.jsx(c,{...t,title:"Activity"}),cell:({getValue:t})=>U(t()).format("L"),enableSorting:!0,size:30})]}const T=({forumId:s,limit:t,filter:l,onClickLink:h})=>{var S;const[a,b]=n.useState([{desc:!0,id:"lastActivity"}]),m=n.useMemo(()=>{if(!M(a)){if(a[0].id=="lastActivity")return p.PINNED_AND_LAST_ACTIVITY;if(a[0].id=="numberOfReplies")return p.NUMBER_OF_REPLIES;if(a[0].id=="title")return p.THREAD_TITLE;if(a[0].id=="numberOfViews")return p.NUMBER_OF_VIEWS}return p.PINNED_AND_LAST_ACTIVITY},[a]),{data:o,hasNextPage:y,fetchNextPage:j}=A(s,t,m,!((S=a[0])!=null&&S.desc),l),_=n.useMemo(()=>(o==null?void 0:o.pages.flatMap(i=>i.results))??[],[o]),f=n.useMemo(()=>Q(h),[h]),g=q({data:_,columns:f,state:{sorting:a},onSortingChange:b,getRowId:i=>i.id,getCoreRowModel:G(),columnResizeMode:"onChange",manualSorting:!0,enableMultiSort:!1});return e.jsxs("div",{className:"ForumTable",children:[e.jsx(P,{sx:{my:2,"th,td":{px:1},td:{py:1}},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:g.getHeaderGroups().map(i=>e.jsx("tr",{children:i.headers.map(r=>e.jsxs("th",{colSpan:r.colSpan,style:{width:r.getSize()},children:[r.isPlaceholder?null:N(r.column.columnDef.header,r.getContext()),r.column.getCanResize()&&e.jsx("div",{className:`resizer ${r.column.getIsResizing()?"isResizing":""}`,onMouseDown:r.getResizeHandler(),onTouchStart:r.getResizeHandler()})]},r.id))},i.id))}),e.jsx("tbody",{children:g.getRowModel().rows.map(i=>e.jsx("tr",{children:i.getVisibleCells().map(r=>e.jsx("td",{style:{width:r.column.getSize()},children:N(r.column.columnDef.cell,r.getContext())},r.id))},i.id))})]})}),y&&e.jsx(x,{variant:"outlined",color:"primary",onClick:()=>{j()},children:"Show more results"})]})};try{T.displayName="ForumTable",T.__docgenInfo={description:"",displayName:"ForumTable",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(threadId: string) => void"}},filter:{defaultValue:null,description:"",name:"filter",required:!0,type:{name:"enum",value:[{value:'"NO_FILTER"'},{value:'"DELETED_ONLY"'},{value:'"EXCLUDE_DELETED"'}]}}}}}catch{}const Z="You will need to sign in for access to that resource",v=({forumId:s,limit:t,onClickLink:l})=>{const[h,a]=n.useState(!1),[b,m]=n.useState(!1),[o,y]=n.useState(!1),[j,_]=n.useState(!1),{subscription:f,isLoading:g,toggleSubscribed:S}=O(s,C.FORUM);function i(){try{S()}catch(D){V(D.reason,"danger")}}const{data:r}=z(s),{data:d}=R(),w=r==null?void 0:r.results.includes((d==null?void 0:d.ownerId)??""),I=()=>{(d==null?void 0:d.userName)=="anonymous"?m(!0):a(!0)};return e.jsxs("div",{className:"ForumTable",children:[e.jsxs("div",{className:"ForumTable__top-level-control",children:[e.jsx(J,{id:s,objectType:C.FORUM,showModal:j,handleModal:_}),e.jsx(x,{variant:f?"outlined":"contained",color:"primary",onClick:()=>i(),disabled:g,children:f?"Unfollow":"Follow"}),e.jsx(x,{variant:"contained",color:"primary",onClick:()=>I(),children:"New Thread"}),w&&e.jsx(x,{variant:"contained",color:"primary",onClick:()=>y(!o),children:o?"Hide Deleted Threads":"Show Deleted Threads"})]}),o&&e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"h4",children:"Deleted Threads"}),e.jsx(T,{onClickLink:l,forumId:s,limit:t,filter:E.DELETED_ONLY})]}),e.jsx(T,{onClickLink:l,forumId:s,limit:t,filter:E.EXCLUDE_DELETED}),e.jsx($,{isReply:!1,id:s,onClose:()=>a(!1),isDialog:!0,openDialog:h}),e.jsx(X,{open:b,title:"Sign In Required",content:Z,onCancel:()=>m(!1),hasCancelButton:!1,onConfirm:()=>m(!1),confirmButtonProps:{children:"Sign In",className:L}})]})};try{v.displayName="ForumPage",v.__docgenInfo={description:"",displayName:"ForumPage",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"(threadId: string) => void"}}}}}catch{}export{v as F};
