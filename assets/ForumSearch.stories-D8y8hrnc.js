import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as o}from"./index-Dl6G-zuu.js";import{i as $,b7 as D,b8 as F,b9 as M,ba as w,bb as P,bc as k,j as O}from"./SynapseClient-Dj7tMv3Y.js";import{d as q}from"./dayjs.min-d18Up55D.js";import{I as j}from"./IconSvg-JqGqYHpW.js";import{S as L}from"./SkeletonTable-BQt6sS0P.js";import{P as A}from"./getEndpoint-CjoHA800.js";import{f as K}from"./DateFormatter-DSXrZmiu.js";import{U as B}from"./UserBadge-CX5JkbEN.js";import{R as G}from"./Row-BehYN1O2.js";import{C}from"./Col-ZdD-k7N_.js";import{S as z}from"./Skeleton-1jrlRaLC.js";import{T as x}from"./Typography-DgBbIcOX.js";import{N as H}from"./NoSearchResults-DonV60wB.js";import{d as J}from"./ToastMessage-C57fs1PG.js";import{B as Q}from"./Button-CLkrjdQe.js";import"./OrientationBanner-D9RUUnWX.js";import"./FullWidthAlert-DPoiEavU.js";import"./Alert-Aa0bm5Nm.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./styled-D9wW3ABP.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-gkOuU5-G.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./utils-Bdp_oNP4.js";import"./index-B6qzg4VC.js";import"./Grow-lFU1cKdF.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Drr3vXNI.js";import"./index-hJhP8EJR.js";import"./index-CIIvWsNs.js";import"./SynapseConstants-CmcZ9bEt.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";import"./ErrorOutlined-CnICwQW0.js";import"./GetAppTwoTone-CEgy4oXX.js";import"./InfoOutlined-DJDm_gVQ.js";import"./times-CNSOYeu0.js";import"./_baseTimes-DoMoQz2v.js";import"./identity-DKeuBCMA.js";import"./toInteger-CoOs-5Xi.js";import"./isSymbol-BzKS7Qf1.js";import"./timezone-Cq1SAuLw.js";import"./Menu-C2kbcWAO.js";import"./Modal-aC3wK9dy.js";import"./Backdrop-Cf-zGjSh.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-CWcqbzO9.js";import"./List-JFp8Imct.js";import"./useFiles-W-FSO-ir.js";import"./cloneDeep-DCoGJ7oU.js";import"./_baseClone-fSJhb1mi.js";import"./_Uint8Array-kXJ5rGjS.js";import"./_initCloneObject-CtX8iLDk.js";import"./_defineProperty-Df4ZcNZr.js";import"./_getAllKeys-YRYHGnch.js";import"./Divider-DJ8WkHe7.js";import"./dividerClasses-B5r-ooM0.js";import"./MenuItem-Dw5ZhG7D.js";import"./Card-BPGAXijX.js";import"./Avatar-VbBYm8Q1.js";import"./ThemeProvider-D_KqLH_M.js";import"./CSSTransition-DN5fTu4E.js";import"./hasClass-D5ZjVvBY.js";import"./uniqueId-CSw6ftlJ.js";import"./toString-CYyvKWOl.js";const R=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),v=r=>{const{threadId:p,replyId:n}=r,{accessToken:a}=$(),[s,c]=o.useState(),[d,u]=o.useState(""),[i,m]=o.useState(),[y,g]=o.useState(),[h,I]=o.useState(!1),b=async()=>{let t;const l=await D(p,a);if(I(!0),n){const f=await F(n,a);t=await M(f.messageKey,a),g(await w(f.createdBy)),m(f)}else g(await w(l.createdBy)),t=await P(l.messageKey,a);u(await R(t.messageUrl)),c(l),I(!1)};o.useEffect(()=>{b()},[]);const N=(t,l,f)=>{let T=`${A.PORTAL}Synapse:${l}/discussion/threadId=${t}`;return f&&(T+=`&replyId=${f}`),T};return e.jsx("div",{className:"bootstrap-4-backport search-result-container",children:e.jsxs(G,{children:[e.jsx(C,{xs:1,children:h?e.jsx(z,{variant:"circular",width:"40px",height:"40px"}):n?e.jsx(j,{icon:"replyTwoTone"}):e.jsx(j,{icon:"chatTwoTone"})}),e.jsx(C,{xs:11,children:h?e.jsx(L,{numCols:1,numRows:4}):e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"headline3",children:e.jsx("a",{className:"link",href:N(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),e.jsx("div",{className:"truncated",children:e.jsx(x,{variant:"body1",children:d})}),e.jsxs("div",{className:"search-result-footer",children:[n?"Reply":"Thread"," by"," ",e.jsx(B,{userId:y==null?void 0:y.ownerId})," ",K(q(i==null?void 0:i.createdOn))]})]})})]})})};try{R.displayName="getMessage",R.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{v.displayName="DiscussionSearchResult",v.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const W=()=>e.jsxs("div",{className:"text-center",children:[e.jsx(H,{className:"no-search-results",display:"block",height:"181px",sx:{pt:"40px",pb:"10px"}}),e.jsx(x,{variant:"body1",children:"No results with this query"}),e.jsx(x,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),_=r=>{const{onSearchResultsVisible:p}=r,{accessToken:n}=$(),[a,s]=o.useState(""),[c,d]=o.useState(),[u,i]=o.useState(),[m,y]=o.useState(),[g,h]=o.useState(!1),I=async()=>{p&&p(!0);try{d(void 0),h(!1);const t=await k({searchString:a,nextPageToken:void 0},r.forumId,n);t.matches.length==0&&h(!0),d(t),i(t.matches)}catch(t){J(t.reason,"danger")}},b=()=>{p&&p(!1),s(""),d(void 0),h(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const l=await O(n,r.projectId);y(l)}})()},[n,r.projectId]);const N=async()=>{const t=await k({searchString:a,nextPageToken:c==null?void 0:c.nextPageToken},r.forumId,n);d(t),u&&i([...u,...t.matches])};return e.jsxs("div",{className:"ForumSearch",children:[e.jsxs("div",{children:[e.jsx("span",{className:"SearchIcon",children:e.jsx(j,{icon:"search"})}),e.jsx("input",{role:"textbox",type:"search",className:`SearchBar  ${c?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:t=>{s(t.target.value)},onKeyDown:t=>{t.key==="Enter"&&I()}}),a&&e.jsx("button",{className:"ClearSearchIcon",onClick:()=>{b()},children:e.jsx(j,{icon:"clear"})})]}),g&&e.jsxs(e.Fragment,{children:[r.projectId&&e.jsxs(x,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',a,'" in ',m==null?void 0:m.name]}),e.jsx(W,{})]}),u&&e.jsxs(e.Fragment,{children:[r.projectId&&!g&&e.jsxs(x,{variant:"body1Italic",className:"ResultsText",children:['Results for "',a,'" in ',m==null?void 0:m.name]}),u.map(t=>e.jsx("div",{children:e.jsx(v,{threadId:t.threadId,replyId:t.replyId})},`${t.forumId}-${t.threadId}-${t.replyId}`))]}),(c==null?void 0:c.nextPageToken)&&e.jsx("div",{className:"text-center",children:e.jsx(Q,{variant:"contained",color:"primary",onClick:()=>{N()},children:"Load more"})})]})};try{_.displayName="ForumSearch",_.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const $t={title:"Synapse/ForumSearch",component:_},S={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var E,U,V;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Dt=["Demo"];export{S as Demo,Dt as __namedExportsOrder,$t as default};
