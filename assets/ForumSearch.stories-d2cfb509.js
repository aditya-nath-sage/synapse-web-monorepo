import{j as t,a as n,F as N}from"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import{a4 as V,cV as L,dk as P,cU as O,aX as U,d1 as q,dl as E,ab as A}from"./index-5643b5a3.js";import{d as K}from"./dayjs.min-c95aebbe.js";import{U as z}from"./UserCard-abb8fee0.js";import{h as G}from"./SynapseConstants-f1d07af3.js";import{I as T}from"./IconSvg-0e7cf93d.js";import{S as B}from"./SkeletonTable-19d213c4.js";import{P as H}from"./getEndpoint-5374ab4d.js";import{f as X}from"./DateFormatter-eaea2760.js";import{R as J}from"./Row-264af41d.js";import{C as j}from"./isArray-a82322d9.js";import{S as Q}from"./Skeleton-58bfd0fa.js";import{T as g}from"./Typography-4e56074b.js";import{s as W}from"./NoSearchResults-597d4337.js";import{d as Y}from"./ToastMessage-0a73fdf4.js";import{B as Z}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Tooltip-266dd013.js";import"./SvgIcon-51e1f886.js";import"./useTheme-1b437015.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./FullWidthAlert-59d3d098.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-46957a4f.js";import"./index-4d501b15.js";import"./Fade-f3cad5fb.js";import"./IconButton-4918d20b.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";import"./IconCopy-9a72c17a.js";import"./Overlay-56c2d608.js";import"./contains-60f9209b.js";import"./usePopperMarginModifiers-3c86461d.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./times-a253c348.js";import"./toInteger-9b1425fc.js";import"./isSymbol-b6149709.js";import"./utc-8a3e1a17.js";import"./removeClass-164fd327.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";const x=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),w=r=>{const{threadId:p,replyId:c}=r,{accessToken:a}=V(),[s,l]=o.useState(),[h,f]=o.useState(""),[i,d]=o.useState(),[S,I]=o.useState(),[y,R]=o.useState(!1),v=async()=>{let u;const e=await L(p,a);if(R(!0),c){const m=await P(c,a);u=await O(m.messageKey,a),I(await U(a,m.createdBy)),d(m)}else I(await U(a,e.createdBy)),u=await q(e.messageKey,a);f(await x(u.messageUrl)),l(e),R(!1)};return o.useEffect(()=>{v()},[]),t("div",{className:"search-result-container",children:n(J,{children:[t(j,{xs:1,children:y?t(Q,{variant:"circular",width:"40px",height:"40px"}):c?t(T,{icon:"replyTwoTone"}):t(T,{icon:"chatTwoTone"})}),t(j,{xs:11,children:y?t(B,{numCols:1,numRows:4}):n(N,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,m)=>{let k=`${H.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return m&&(k+=`&replyId=${m}`),k})(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(z,{size:G,ownerId:S==null?void 0:S.ownerId})," ",X(K(i==null?void 0:i.createdOn))]})]})})]})})};try{x.displayName="getMessage",x.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{w.displayName="DiscussionSearchResult",w.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const b=r=>{const{onSearchResultsVisible:p}=r,{accessToken:c}=V(),[a,s]=o.useState(""),[l,h]=o.useState(),[f,i]=o.useState(),[d,S]=o.useState(),[I,y]=o.useState(!1),R=async()=>{p&&p(!0);try{h(void 0),y(!1);const e=await E({searchString:a,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){Y(e.reason,"danger")}},v=()=>{p&&p(!1),s(""),h(void 0),y(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const m=await A(c,r.projectId);S(m)}})()},[c,r.projectId]);const C=()=>n("div",{className:"text-center",children:[W,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await E({searchString:a,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(T,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&R()}}),a&&t("button",{className:"ClearSearchIcon",onClick:()=>{v()},children:t(T,{icon:"clear"})})]}),I&&n(N,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:["No results for '",a,"' in ",d==null?void 0:d.name]}),t(C,{})]}),f&&n(N,{children:[r.projectId&&!I&&n(g,{variant:"body1Italic",className:"ResultsText",children:["Results for '",a,"' in ",d==null?void 0:d.name]}),f.map(e=>t("div",{children:t(w,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(Z,{variant:"primary",onClick:u,children:"Load more"})})]})},$=b;try{b.displayName="ForumSearch",b.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const rt={title:"Synapse/ForumSearch",component:$,argTypes:{}},ee=r=>t($,{...r}),_=ee.bind({});_.args={forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)};var F,D,M;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:"args => <ForumSearch {...args} />",...(M=(D=_.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const at=["Demo"];export{_ as Demo,at as __namedExportsOrder,rt as default};
//# sourceMappingURL=ForumSearch.stories-d2cfb509.js.map
