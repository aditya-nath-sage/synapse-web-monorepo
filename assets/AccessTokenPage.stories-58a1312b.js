import{a as o,j as e,F as w}from"./jsx-runtime-670450c2.js";import{r as n}from"./index-f1f749bf.js";import{a4 as x,dx as X,al as J,dy as D,aU as K,aA as F,dz as Z,ak as $}from"./index-5643b5a3.js";import{u as ee}from"./useInfiniteQuery-2d662a61.js";import{l as H}from"./LoadingScreen-bca9d5a7.js";import{d as A}from"./dayjs.min-c95aebbe.js";import{I as B}from"./IconSvg-0e7cf93d.js";import{W as oe}from"./WarningModal-d71b6cd8.js";import{r as ae}from"./relativeTime-93b00284.js";import{T as se}from"./Tooltip-266dd013.js";import{B as y}from"./Button-7d415009.js";import{C as re}from"./CopyToClipboardInput-711f7add.js";import{C as S}from"./Checkbox-44f336ac.js";import{M as _,a as te}from"./Modal-03fc1f7b.js";import{c as E,b as ne}from"./isArray-a82322d9.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./SynapseConstants-f1d07af3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-1b437015.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./FullWidthAlert-59d3d098.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-46957a4f.js";import"./index-4d501b15.js";import"./Typography-4e56074b.js";import"./Fade-f3cad5fb.js";import"./getEndpoint-5374ab4d.js";import"./SvgIcon-51e1f886.js";import"./IconButton-4918d20b.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";import"./IconCopy-9a72c17a.js";import"./ToastMessage-0a73fdf4.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./contains-60f9209b.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./useWaitForDOMRef-54076dc2.js";function ie(a){const{accessToken:d}=x();return ee(["getPersonalAccessTokens"],async r=>await X(d,r.pageParam),{...a,getNextPageParam:r=>r.nextPageToken})}const u={openid:{displayName:"OpenID",description:"Access to your Synapse identity and certain user information"},view:{displayName:"View",description:"Permission to view the content which you can view"},modify:{displayName:"Modify",description:"Permission to modify the content which you can modify (create, change, delete)"},download:{displayName:"Download",description:"Permission to download the content which you can download"},authorize:{displayName:"Authorize",description:"Permission to authorize others to access the resources you control"},offline_access:{displayName:"Offline Access",description:"Permission to access the resources authorized here when you are not logged in, until you explicitly revoke access"}};A.extend(ae);const P=({accessToken:a,onDelete:d})=>{const{accessToken:r}=x(),[l,i]=n.useState(!1),t=J(),c=a.state==="EXPIRED";return o("div",{className:"cardContainer PersonalAccessTokenCard"+(c?" bg-warning":""),children:[e(oe,{title:"Confirm Deletion",modalBody:o(w,{children:[e("p",{children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e("p",{className:"SRC-boldText",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>i(!1),onConfirm:s=>{D(s,r).then(()=>{d(),i(!1)}).catch(k=>{t(k)})},confirmButtonVariant:"danger",show:l,onConfirmCallbackArgs:[a.id,r]}),o("div",{className:"SRC-cardContent",children:[o("div",{className:"SRC-eqHeightRow SRC-userCardName",children:[e("span",{className:"SRC-blackText",children:a.name}),c&&e(se,{title:"This token has expired. It no longer works and can only be deleted.",enterNextDelay:100,children:e("span",{"aria-hidden":"true",children:e(B,{icon:"warning"})})})]}),o("div",{className:"SRC-eqHeightRow",children:[e("span",{children:"Permissions: "}),a.scopes.map(s=>e("span",{className:"PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex","data-tip":u[s].description,children:u[s].displayName},s))]}),o("div",{className:"SRC-eqHeightRow",children:[o("span",{children:["Last used ",A(a.lastUsed).fromNow()]}),e("span",{className:"SRC-deemphasized-text",children:" | "}),o("span",{children:["Created ",A(a.createdOn).fromNow()]})]})]}),e("div",{className:"PersonalAccessTokenCard__DeleteButton",children:e(y,{variant:"default","aria-label":"delete",onClick:()=>{c?D(a.id,r).then(()=>{d()}).catch(s=>{t(s)}):i(!0)},children:e(B,{icon:"delete","aria-hidden":"true"})})})]})};try{P.displayName="AccessTokenCard",P.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(...args: any[]) => void"}}}}}catch{}const ce="You must provide a token name and at least one permission.",b=({onClose:a,onCreate:d})=>{const{accessToken:r}=x(),[l,i]=n.useState(""),[t,c]=n.useState(!0),[s,k]=n.useState(!1),[h,f]=n.useState(!1),[T,m]=n.useState(!1),[M,z]=n.useState(!1),[j,O]=n.useState(""),[U,R]=n.useState(""),[W,I]=n.useState(!1),G=g=>{i(g.target.value)},Y=(g,p)=>!!g&&p.some(v=>v),Q=async g=>{if(g.preventDefault(),Y(l,[t,s,h]))try{const p={scope:[],name:l};t&&p.scope.push("view"),s&&p.scope.push("download"),h&&p.scope.push("modify"),m(!0);const v=await Z(p,r);m(!1),O(v.token),z(!0),d()}catch(p){m(!1),R(p.reason),I(!0)}else R(ce),I(!0)};return e(_,{className:"bootstrap-4-backport AccessTokenModal",animation:!1,show:!0,onHide:a,backdrop:"static",children:o(K,{children:[e(_.Header,{closeButton:!0,children:e(_.Title,{children:"Create New Personal Access Token"})}),e(te,{children:T?H:M?o(w,{children:[e("span",{className:"SRC-boldText",children:"This token will not be able to be retrieved again."})," ",e("span",{children:"If needed, generate a new personal access token, and delete this one."}),e("div",{className:"AccessTokenModal__CopyToClipboardContainer",children:e(re,{value:j,inputWidth:"350px"})}),e("p",{children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{className:"SRC-marginFive",children:[o("div",{className:"SRC-marginBottomTen",children:[e(E,{className:"SRC-boldText",children:"Token Name"}),e(ne,{autoFocus:!0,className:"AccessTokenModal__TokenNameInput",value:l,onChange:G,type:"text",placeholder:"e.g. Synapse command line access on my laptop"})]}),o("div",{className:"SRC-marginBottomTop",children:[e(E,{className:"SRC-boldText",children:"Token Permissions"}),e(S,{label:u.view.displayName,checked:t,onChange:()=>c(!t),children:o("div",{className:"AccessTokenModal__ScopeDescription",children:[u.view.description,". Required to use Synapse programmatic clients."]})}),e(S,{label:u.download.displayName,checked:s,onChange:()=>k(!s),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:u.download.description})}),e(S,{label:u.modify.displayName,checked:h,onChange:()=>f(!h),children:e("div",{className:"AccessTokenModal__ScopeDescription",children:u.modify.description})})]}),e("div",{className:"SRC-center-text",children:W&&e(F,{error:U})})]})}),e(_.Footer,{children:M?e(y,{variant:"outline",onClick:a,children:"Close"}):o(w,{children:[e(y,{variant:"outline",onClick:a,children:"Cancel"}),e(y,{type:"submit",variant:"sds-primary",onClick:Q,children:"Create Token"})]})})]})})};try{b.displayName="CreateAccessTokenModal",b.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(...args: any[]) => void"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"(...args: any[]) => void"}}}}}catch{}const N=({title:a,body:d})=>{const[r,l]=n.useState(!1),{data:i,isLoading:t,error:c,refetch:s,fetchNextPage:k,hasNextPage:h}=ie(),f=()=>{s()},T=(i==null?void 0:i.pages.flatMap(m=>m.results))??[];return o("div",{className:"PersonalAccessTokenPage bootstrap-4-backport",children:[o("div",{className:"PersonalAccessTokenPage__Header",children:[o("div",{className:"PersonalAccessTokenPage__Header__CopyText",children:[e("h1",{children:a}),d]}),e("div",{className:"PersonalAccessTokenPage__Header__CreateButton",children:e(y,{variant:"sds-primary",onClick:()=>l(!0),children:"Create New Token"})})]}),o($,{children:[r&&e(b,{onClose:()=>l(!1),onCreate:f}),o("div",{children:[!t&&T.length===0&&e("div",{className:"PersonalAccessTokenPage__NoTokensMessage SRC-text-title",children:"You currently have no personal access tokens."}),o("div",{className:"PersonalAccessTokenPage__CardList",children:[T.map(m=>e(P,{accessToken:m,onDelete:f},m.id)),t&&H,!t&&h&&!c&&e("div",{className:"PersonalAccessTokenPage__CardList__LoadMore",children:e(y,{className:"PersonalAccessTokenPage__CardList__LoadMore__Button",variant:"sds-primary",onClick:()=>{k()},children:"Load More"})})]}),c&&e(F,{error:c})]})]})]})};try{N.displayName="AccessTokenPage",N.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | Element"}}}}}catch{}const lo={title:"Synapse/AccessTokenPage",component:N},de=a=>e(N,{...a}),C=de.bind({});C.args={title:"Personal Access Tokens",body:"Create and manage tokens that can be used to access your Synapse account programmatically."};var L,q,V;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:"args => <AccessTokenPage {...args} />",...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const mo=["Demo"];export{C as Demo,mo as __namedExportsOrder,lo as default};
//# sourceMappingURL=AccessTokenPage.stories-58a1312b.js.map
