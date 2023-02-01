import{a as d,F as g,j as r}from"./jsx-runtime-670450c2.js";import{r as P}from"./index-f1f749bf.js";import{a4 as U,dU as k,aF as V,dV as $,dW as H,al as w,ah as A,ak as F}from"./index-5643b5a3.js";import{I as G}from"./IconSvg-0e7cf93d.js";import{u as C}from"./react-intersection-observer.esm-8bf16175.js";import{P as x}from"./getEndpoint-5374ab4d.js";import{u as R}from"./useInfiniteQuery-2d662a61.js";import{S as v}from"./SkeletonTable-19d213c4.js";import{T as L}from"./Typography-4e56074b.js";import{S as q}from"./Skeleton-58bfd0fa.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./SynapseConstants-f1d07af3.js";import"./Button-7d415009.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Tooltip-266dd013.js";import"./SvgIcon-51e1f886.js";import"./useTheme-1b437015.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./FullWidthAlert-59d3d098.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-46957a4f.js";import"./index-4d501b15.js";import"./Fade-f3cad5fb.js";import"./isArray-a82322d9.js";import"./IconButton-4918d20b.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";import"./times-a253c348.js";import"./toInteger-9b1425fc.js";import"./isSymbol-b6149709.js";function D(e,n){const{accessToken:l}=U();return R(["getuserchallenges",e],async s=>{const t=await k(l,e,s.pageParam,10);if(t.results.length>0){const a=Array.from(t.results,p=>p.projectId),i=await V(a);return{results:Array.from(t.results,(p,c)=>({challenge:p,projectHeader:i.results[c]})),totalNumberOfResults:t.totalNumberOfResults}}return{results:[],totalNumberOfResults:t.totalNumberOfResults}},{...n,getNextPageParam:(s,t)=>{if(s.results.length>0)return t.length*10}})}function M(e,n,l){const{accessToken:s}=U();return R(["getuserprojects",e,n],async t=>$(e,{...n,nextPageToken:t.pageParam},s),{...l,getNextPageParam:t=>t.nextPageToken})}function W(e,n){const{accessToken:l}=U();return R(["getuserteams",e],async s=>H(l,e,s.pageParam,10),{...n,getNextPageParam:(s,t)=>{if(s.results.length>0)return t.length*10}})}function E({userId:e}){const n=w(),{ref:l,inView:s}=C(),{data:t,status:a,isFetching:i,isLoading:h,hasNextPage:p,fetchNextPage:c,isError:f,error:m}=D(e);P.useEffect(()=>{f&&m&&n(m)},[f,m,n]),P.useEffect(()=>{a==="success"&&!i&&p&&c&&s&&c()},[a,i,p,c,s]);const u=(t==null?void 0:t.pages.flatMap(o=>o.results))??[];return d(g,{children:[u.length>0&&d(g,{children:[u.map(o=>o&&o.challenge&&o.projectHeader?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Synapse:${o.challenge.projectId}/challenge`,children:o.projectHeader.name})},`user-challenge-list-item-${o.challenge.projectId}`):!1),r("div",{ref:l})]}),!i&&u.length==0&&r("div",{children:"Empty"}),h&&r(v,{numRows:5,numCols:1})]})}try{E.displayName="UserChallenges",E.__docgenInfo={description:"",displayName:"UserChallenges",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function j({userId:e}){const n=w(),{ref:l,inView:s}=C(),t={},{data:a,status:i,isFetching:h,isLoading:p,hasNextPage:c,fetchNextPage:f,isError:m,error:u}=M(e,t);P.useEffect(()=>{m&&u&&n(u)},[m,u,n]),P.useEffect(()=>{i==="success"&&!h&&c&&f&&s&&f()},[i,h,c,f,s]);const o=(a==null?void 0:a.pages.flatMap(_=>_.results))??[];return d(g,{children:[o.length>0&&d(g,{children:[o.map(_=>_?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Synapse:${_.id}`,children:_.name})},`user-project-list-item-${_.id}`):!1),r("div",{ref:l})]}),!h&&o.length==0&&r("div",{children:"Empty"}),p&&r(v,{numRows:5,numCols:1})]})}try{j.displayName="UserProjects",j.__docgenInfo={description:"",displayName:"UserProjects",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}function I({userId:e}){const n=w(),{ref:l,inView:s}=C(),{data:t,status:a,isFetching:i,isLoading:h,hasNextPage:p,fetchNextPage:c,isError:f,error:m}=W(e);P.useEffect(()=>{f&&m&&n(m)},[f,m,n]),P.useEffect(()=>{a==="success"&&!i&&p&&c&&s&&c()},[a,i,p,c,s]);const u=(t==null?void 0:t.pages.flatMap(o=>o.results))??[];return d(g,{children:[u.length>0&&d(g,{children:[u.map(o=>o?r("p",{children:r("a",{target:"_self",rel:"noopener noreferrer",href:`${x.PORTAL}#!Team:${o.id}`,children:o.name})},`user-team-list-item-${o.id}`):!1),r("div",{ref:l})]}),!i&&u.length==0&&r("div",{children:"Empty"}),h&&r(v,{numRows:5,numCols:1})]})}try{I.displayName="UserTeams",I.__docgenInfo={description:"",displayName:"UserTeams",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}var y=(e=>(e.PROJECTS="Projects",e.TEAMS="Teams",e.CHALLENGES="Challenges",e))(y||{});function N({userId:e}){const[n,l]=P.useState("Projects"),{data:s}=A(e);function t(a){switch(a){case"Projects":return"dashboard";case"Teams":return"peopleTwoTone";case"Challenges":return"challengesTwoTone"}}return d("div",{className:"UserProfileLinks",children:[d(L,{variant:"headline2",className:"title",children:[s&&d(g,{children:[s==null?void 0:s.userName,"'s Items"]}),!s&&r(q,{width:"75%"})]}),r("div",{className:"Tabs",children:Object.keys(y).map(a=>r("div",{className:"Tab",role:"tab",onClick:i=>{i.stopPropagation(),l(y[a])},"aria-selected":y[a]===n,children:d(L,{variant:"buttonLink",children:[r(G,{icon:t(y[a])})," ",y[a]]})},a))}),r("div",{className:"TabContent",children:d(F,{children:[n==="Projects"&&r(g,{children:r(j,{userId:e})}),n==="Teams"&&r(g,{children:r(I,{userId:e})}),n==="Challenges"&&r(g,{children:r(E,{userId:e})})]})})]})}try{N.displayName="UserProfileLinks",N.__docgenInfo={description:"",displayName:"UserProfileLinks",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}}}}}catch{}const be={title:"Synapse/UserProfileLinks",component:N},B=e=>r(N,{...e}),T=B.bind({});T.args={userId:"1131050"};var S,O,b;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:"args => <UserProfileLinks {...args} />",...(b=(O=T.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const ke=["Demo"];export{T as Demo,ke as __namedExportsOrder,be as default};
//# sourceMappingURL=UserProfileLinks.stories-4af29f16.js.map
