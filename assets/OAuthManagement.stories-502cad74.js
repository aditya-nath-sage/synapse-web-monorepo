import{a,j as e,F as ae}from"./jsx-runtime-670450c2.js";import{r as s}from"./index-f1f749bf.js";import{f as ie}from"./DateFormatter-89500d31.js";import{d as ne}from"./dayjs.min-e0adaab4.js";import{a9 as k,dz as Se,bO as j,dA as ve,dB as be,dC as we,aZ as c,dD as _e}from"./SynapseContext-34356979.js";import{u as Y}from"./useMutation-f948ffd4.js";import{u as Te}from"./useInfiniteQuery-12240e4a.js";import{d as T}from"./ToastMessage-45d6abdb.js";import{H as oe,I as G}from"./IconSvg-4ff66f27.js";import{W as ue}from"./WarningModal-21a07260.js";import{S as ke}from"./LoadingScreen-dfc91527.js";import{M as h}from"./Modal-02fe67fa.js";import{T as U}from"./Typography-1aca7d5c.js";import{R as D}from"./Row-264af41d.js";import{C as y}from"./isArray-a82322d9.js";import{T as se}from"./Clear-4868d5d0.js";import{B as g}from"./Button-7d415009.js";import{A as Ae}from"./FullWidthAlert-2e72abf6.js";import{C as Ie}from"./CopyToClipboardInput-b9fb90d4.js";import{T as Ne}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./utc-8a3e1a17.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./MenuList-cd8a71d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8a301de6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-ef578671.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-14f92460.js";import"./index-1aacdabe.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-9273577d.js";import"./SvgIcon-80573649.js";import"./emotion-react.browser.esm-9a383ad7.js";import"./Box-3a18cc2d.js";import"./ButtonBase-428d3c85.js";import"./assertThisInitialized-081f9914.js";import"./Button-ad1d45e7.js";import"./createWithBsPrefix-e09f51dd.js";import"./Link-3d479faf.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./contains-60f9209b.js";import"./useWillUnmount-7fb15b8a.js";import"./divWithClassName-077708db.js";import"./index-4d501b15.js";import"./usePrevious-9f30f8c7.js";import"./useWaitForDOMRef-54076dc2.js";import"./hook-c05d8d9f.js";import"./IconCopy-9a72c17a.js";const V={all:i=>["oAuthClient",i]};function xe(i){const{accessToken:d}=k();return Te(V.all(d),async l=>await Se(d,l.pageParam),{...i,getNextPageParam:l=>l.nextPageToken})}function Oe(i){const d=j(),{accessToken:l}=k();return Y(t=>ve(t,l),{...i,onSuccess:async(t,p,m)=>{await d.invalidateQueries(V.all(l)),i!=null&&i.onSuccess&&await i.onSuccess(t,p,m)}})}function Me(i){const d=j(),{accessToken:l}=k();return Y(t=>be(t,l),{...i,onSuccess:async(t,p,m)=>{await d.invalidateQueries(V.all(l)),i!=null&&i.onSuccess&&await i.onSuccess(t,p,m)}})}function Ee(i){const d=j(),{accessToken:l}=k();return Y(t=>we(t,l),{...i,onSuccess:async(t,p,m)=>{await d.invalidateQueries(V.all(l)),i!=null&&i.onSuccess&&await i.onSuccess(t,p,m)}})}const Q=({isShowingModal:i=!1,isEdit:d,onClose:l,client:t,setIsShowingConfirmModal:p,isShowingConfirmModal:m,setIsShowingModal:b})=>{const{accessToken:F}=k(),[E,A]=s.useState(""),[n,S]=s.useState([{uri:""}]),[I,w]=s.useState(),[N,x]=s.useState(),[v,C]=s.useState(),[B,O]=s.useState(),[P,R]=s.useState(!1),[z,q]=s.useState(!1),[u,he]=s.useState(),[L,_]=s.useState(),me="Are you absolutely sure?",pe="Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.",Z="Click Add URI to add more Redirect URIs";s.useEffect(()=>{A((t==null?void 0:t.client_name)??""),S((t==null?void 0:t.redirect_uris.map(r=>({uri:r})))??[{uri:""}]),w((t==null?void 0:t.policy_uri)??""),x((t==null?void 0:t.client_uri)??""),C((t==null?void 0:t.sector_identifier_uri)??void 0),O((t==null?void 0:t.tos_uri)??"")},[i,t]),s.useEffect(()=>{const r=n==null?void 0:n.map(f=>f.uri),o=t==null?void 0:t.redirect_uris;t&&((r==null?void 0:r.length)!==(o==null?void 0:o.length)||!(r!=null&&r.every(f=>o==null?void 0:o.includes(f)))||v!=(t==null?void 0:t.sector_identifier_uri))?R(!0):R(!1)},[n,v,t]);const M=()=>{A(""),S([{uri:""}]),w(""),x(""),C(""),O(""),l()},$=()=>{p(!1),q(!1)},{mutate:fe}=Ee({onSuccess:()=>{T("Successfully created","success"),_(void 0),M()},onError:r=>{_(r)}}),{mutate:K,isLoading:J}=Me({onSuccess:()=>{T("Successfully saved","success"),_(void 0),M()},onError:r=>{_(r),b(!0)}}),{mutate:ge}=Oe({onSuccess:()=>{T("Successfully deleted","success"),M()},onError:r=>{T(r.reason,"danger")}}),Ce=()=>{try{if(F){const r={client_id:t==null?void 0:t.client_id,client_name:E,redirect_uris:(n==null?void 0:n.map(o=>o.uri))??[""],policy_uri:I,client_uri:N,sector_identifier_uri:v??"",tos_uri:B,etag:t==null?void 0:t.etag};he(r),P===!0?p(!0):d?K(r):fe(r)}}catch(r){T(r.reason,"danger")}},X=()=>{n&&S([...n,{uri:""}])},ee=r=>{if(n){const o=[...n];o.splice(r,1),S(o)}},te=(r,o)=>{if(n){const{name:f,value:ye}=r.target,re=[...n];re[o][f]=ye,S(re)}};return a("div",{className:"bootstrap-4-backport",children:[a(h,{show:i&&!m,animation:!1,backdrop:"static",onHide:()=>{M(),_(void 0)},size:"lg",className:"OAuthDialog bootstrap-4-backport",children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:d?"Client Details":"Create New OAuth Client"})}),a(h.Body,{children:[J&&e("div",{className:"SRC-center-text",children:e(ke,{size:40})}),!J&&a(ae,{children:[e(U,{variant:"body1",children:"To protect you and your users, your consent screen and application will need to be verified by Sage Bionetworks. Before your consent screen and application are verified by Sage Bionetworks, you can still test your application with limitations."}),d&&a(U,{style:{marginTop:"16px"},variant:"label",children:["Client ID: ",t==null?void 0:t.client_id]}),a(D,{children:[e(y,{lg:6,md:6,sm:12,xs:12,children:a(c.Group,{className:"required",children:[e(c.Label,{htmlFor:"clientName",children:"Client Name"}),e(c.Control,{required:!0,onChange:r=>A(r.target.value),placeholder:"Client Name",type:"text",value:E,id:"clientName"})]})}),a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{className:"required",htmlFor:"clientUri",children:"Client Homepage"}),e(c.Control,{onChange:r=>x(r.target.value),placeholder:"https://",type:"text",value:N,id:"clientUri"})]})]}),e(D,{children:!d&&a(ae,{children:[e(y,{lg:6,md:6,sm:12,xs:12,children:a(c.Group,{className:"required",children:[e(c.Label,{htmlFor:"redirect-uri-0",children:"Redirect URI(s)"}),e(se,{title:Z,placement:"top",children:e(oe,{className:"HelpButton"})}),n==null?void 0:n.map((r,o)=>a("div",{children:[e(c.Control,{name:"uri",required:!0,id:`redirect-uri-${o}`,onChange:f=>te(f,o),value:r.uri,placeholder:"https://",type:"text"}),n.length>1&&e("button",{onClick:()=>ee(o),children:e(G,{icon:"delete",sx:{color:"error.main"}})}),n.length-1===o&&e(g,{onClick:X,disabled:r.uri.length===0,children:"Add URI"})]},o))]})}),a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{children:"Sector Identifier URI"}),e(c.Control,{onChange:r=>C(r.target.value),placeholder:"https://",type:"text"})]})]})}),a(D,{children:[a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{children:"Link to Privacy Policy"}),e(c.Control,{onChange:r=>w(r.target.value),placeholder:"https://",type:"text",value:I})]}),a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{children:"Links to Terms of Service"}),e(c.Control,{onChange:r=>O(r.target.value),placeholder:"https://",type:"text",value:B})]})]}),d&&a("div",{className:"danger",children:[e(U,{style:{marginTop:"8px"},color:"error",variant:"headline3",children:"DANGER ZONE"}),e(U,{variant:"smallText1",children:"Editing the following information will render your client invalid and will require you to create it again and resubmit verification if needed."}),a(D,{children:[a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{htmlFor:"redirect-uri-0",children:"Redirect URI(s)"}),e(se,{title:Z,placement:"top",children:e(oe,{className:"HelpButton"})}),n==null?void 0:n.map((r,o)=>a("div",{children:[e(c.Control,{id:`redirect-uri-${o}`,required:!0,name:"uri",onChange:f=>te(f,o),value:r.uri,placeholder:"https://",type:"text"}),n.length>1&&e("button",{onClick:()=>ee(o),children:e(G,{icon:"delete",sx:{color:"error.main"}})}),n.length-1===o&&e(g,{onClick:X,disabled:r.uri.length===0,children:"Add Uri"})]},o))]}),a(y,{lg:6,md:6,sm:12,xs:12,children:[e(c.Label,{children:"Sector Identifier URI"}),e(c.Control,{onChange:r=>C(r.target.value),placeholder:"https://",type:"text",value:v})]})]}),a("button",{className:"delete-button",onClick:()=>{q(!0),p(!0)},children:[e(G,{icon:"delete",sx:{color:"error.main"}}),"DELETE CLIENT"]})]})]})]}),L&&e(Ae,{variant:"danger",children:L==null?void 0:L.reason}),a(h.Footer,{children:[e(g,{variant:"default",onClick:()=>{M(),_(void 0)},children:"CANCEL"}),e(g,{variant:"primary",onClick:Ce,children:"Save"})]})]}),e(ue,{show:m,title:me,modalBody:pe,onCancel:$,onConfirm:()=>{z?ge(t==null?void 0:t.client_id):K(u),$()},confirmButtonVariant:"danger",confirmButtonText:"Yes, Continue"})]})};try{Q.displayName="CreateOAuthModal",Q.__docgenInfo={description:"",displayName:"CreateOAuthModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},isEdit:{defaultValue:null,description:"",name:"isEdit",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},setIsShowingConfirmModal:{defaultValue:null,description:"",name:"setIsShowingConfirmModal",required:!0,type:{name:"(a: boolean) => void"}},isShowingConfirmModal:{defaultValue:null,description:"",name:"isShowingConfirmModal",required:!0,type:{name:"boolean"}},client:{defaultValue:null,description:"",name:"client",required:!1,type:{name:"OAuthClient"}},setIsShowingModal:{defaultValue:null,description:"",name:"setIsShowingModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}const W=()=>{const{accessToken:i}=k(),[d,l]=s.useState(!1),[t,p]=s.useState(!1),[m,b]=s.useState(),[F,E]=s.useState(!1),[A,n]=s.useState(!1),[S,I]=s.useState(!1),[w,N]=s.useState(),[x,v]=s.useState(!1),{data:C,hasNextPage:B,fetchNextPage:O}=xe(),P=(C==null?void 0:C.pages.flatMap(u=>u.results))??[],R="Are you absolutely sure?",z="If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.",q=async()=>{n(!1);try{const u=await _e(i,m==null?void 0:m.client_id);b(void 0),I(!0),N(u.client_secret)}catch(u){T(u.reason,"danger")}};return a("div",{className:"bootstrap-4-backport OAuthEditor",children:[e(g,{onClick:()=>{l(!0),p(!1)},style:{float:"right"},children:"Create New Client"}),a(Ne,{striped:!0,children:[e("thead",{children:a("tr",{children:[e("th",{children:"Created"}),e("th",{children:"Modified"}),e("th",{children:"ID"}),e("th",{children:"Client"}),e("th",{children:"Verified"}),e("th",{children:"App Secret"}),e("th",{children:"Actions"})]})}),e("tbody",{children:P.map(u=>a("tr",{children:[e("td",{children:ie(ne(u.createdOn))}),e("td",{children:ie(ne(u.modifiedOn))}),e("td",{children:u.client_id}),e("td",{children:u.client_name}),e("td",{children:u.verified?"Yes":e(g,{variant:"outline",size:"sm",onClick:()=>v(!0),children:"SUBMIT VERIFICATION"})}),e("td",{children:e(g,{variant:"outline",onClick:()=>{b(u),n(!0)},size:"sm",children:"GENERATE SECRET"})}),e("td",{children:e(g,{variant:"outline",onClick:()=>{b(u),p(!0),l(!0)},size:"sm",children:"EDIT"})})]},u.client_id))})]}),B&&e("div",{className:"text-center",children:e(g,{variant:"primary",onClick:()=>{O()},children:"Load more"})}),e(Q,{onClose:()=>{l(!1)},isShowingModal:d,client:t?m:void 0,isEdit:t,setIsShowingConfirmModal:E,isShowingConfirmModal:F,setIsShowingModal:l}),a(h,{show:x,animation:!1,backdrop:"static",className:"bootstrap-4-backport",onHide:()=>v(!1),children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:"Submit Verification"})}),a(h.Body,{children:[a("p",{children:["In order to verify an OAuth client please submit a request to the"," ",e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",children:"Synapse Service Desk."})]}),e("b",{children:"Please list the following items in your request:"}),a("ul",{children:[e("li",{children:"Your name"}),a("li",{children:["The ID of the client to be verified ",e("br",{})]}),e("li",{children:"A description of your application"})]})]}),e(h.Footer,{})]}),e(ue,{show:A,className:"bootstrap-4-backport",title:R,modalBody:z,onCancel:()=>{n(!1),b(void 0)},onConfirm:q,confirmButtonVariant:"danger",confirmButtonText:"Yes, Continue"}),w&&a(h,{show:S,animation:!1,backdrop:"static",className:"bootstrap-4-backport",onHide:()=>{I(!1),N(void 0)},children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:"App Secret"})}),a(h.Body,{children:[a("p",{children:[e("b",{children:"This secret will not be able to be retrieved again."})," If needed, in order to generate a new secret select Generate from the Client List."]}),e(Ie,{value:w,inputWidth:"350px"})]})]})]})};try{W.displayName="OAuthManagement",W.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}}}catch{}const Lt={title:"Synapse/OAuthManagement",component:W},H={};var le,ce,de;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:"{}",...(de=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ut=["OAuthManagementDemo"];export{H as OAuthManagementDemo,Ut as __namedExportsOrder,Lt as default};
//# sourceMappingURL=OAuthManagement.stories-502cad74.js.map
