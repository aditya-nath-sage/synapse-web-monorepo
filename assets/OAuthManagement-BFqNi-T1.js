import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as a}from"./index-Dl6G-zuu.js";import{f as se}from"./DateFormatter-CM_rM3ny.js";import{d as ae}from"./dayjs.min-d18Up55D.js";import{k as M,q as O,o as Y}from"./SynapseClient-D4gkDMC-.js";import"./RegularExpressions-CgDTvkkI.js";import"./OrientationBanner-DcDyIfis.js";import{u as J}from"./useMutation-BrriwhYv.js";import{u as _e}from"./useInfiniteQuery-XcJaVaVN.js";import{d as R}from"./ToastMessage-DLv4YVhE.js";import{a8 as we}from"./index-0sKCi0IA.js";import{u as Ie}from"./UserSearchBoxV2-DUepyknZ.js";import{W as me}from"./WarningDialog-C74gdycf.js";import{d as ie}from"./DeleteTwoTone-CLqgCLya.js";import{S as be}from"./LoadingScreen-CINnrS9w.js";import{C as Ae,x as y,v as Re,w as Me,b as oe,z as Oe,y as Te}from"./HelpPopover-C02K7KMJ.js";import{T as C}from"./TextField-CM8oUPj4.js";import{I as ke}from"./InputAdornment-yqqSrKmP.js";import{I as Ne}from"./IconButton-CLoAcDX9.js";import{B as S}from"./Button-CLkrjdQe.js";import{T as V}from"./Typography-DgBbIcOX.js";import{G as h}from"./Grid-C9QvQxlp.js";import{M as le}from"./MenuItem-Dw5ZhG7D.js";import{B as he}from"./Box-DRYT9rh3.js";import{A as qe}from"./Alert-Aa0bm5Nm.js";import{C as De}from"./CopyToClipboardInput-eP8ClUa_.js";import{A as Ue}from"./IconSvg-BBZ15ye5.js";import{L as Pe}from"./Link-Cl5bQMMR.js";function Ee(s){const{accessToken:l,keyFactory:c}=M();return _e({...s,queryKey:c.getMyOAuthClientsQueryKey(),queryFn:async t=>await O.getOAuth2(l,t.pageParam),initialPageParam:void 0,getNextPageParam:t=>t.nextPageToken})}function We(s){const l=Y(),{accessToken:c,keyFactory:t}=M();return J({...s,mutationFn:o=>O.deleteOAuthClient(o,c),onSuccess:async(o,u,m)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,u,m)}})}function Be(s){const l=Y(),{accessToken:c,keyFactory:t}=M();return J({...s,mutationFn:o=>O.updateOAuthClient(o,c),onSuccess:async(o,u,m)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,u,m)}})}function Fe(s){const l=Y(),{accessToken:c,keyFactory:t}=M();return J({...s,mutationFn:o=>O.createOAuthClient(o,c),onSuccess:async(o,u,m)=>{await l.invalidateQueries({queryKey:t.getMyOAuthClientsQueryKey()}),s!=null&&s.onSuccess&&await s.onSuccess(o,u,m)}})}const E="JSON",Le="Are you absolutely sure?",Ve="Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.",Ge=500,f=12,p=6,ce=1,ue=2,z=({isShowingModal:s=!1,isEdit:l,onClose:c,client:t,setIsShowingConfirmModal:o,isShowingConfirmModal:u,setIsShowingModal:m})=>{const{accessToken:j}=M(),[T,k]=a.useState(""),[i,x]=a.useState([{uri:""}]),[v,_]=a.useState(""),[w,N]=a.useState(""),[I,g]=a.useState(""),[q,D]=a.useState(""),[b,U]=a.useState(E),[G,Q]=a.useState(!1),[K,B]=a.useState(!1),[r,fe]=a.useState(),[F,P]=a.useState(),A=a.useMemo(()=>({client_id:t==null?void 0:t.client_id,client_name:T,redirect_uris:(i==null?void 0:i.map(n=>n.uri))??[""],policy_uri:v,client_uri:w,sector_identifier_uri:I,userinfo_signed_response_alg:b===E?void 0:b,tos_uri:q,etag:t==null?void 0:t.etag}),[t==null?void 0:t.client_id,t==null?void 0:t.etag,T,w,v,i,I,b,q]);a.useEffect(()=>{k((t==null?void 0:t.client_name)??""),x((t==null?void 0:t.redirect_uris.map(n=>({uri:n})))??[{uri:""}]),_((t==null?void 0:t.policy_uri)??""),N((t==null?void 0:t.client_uri)??""),g((t==null?void 0:t.sector_identifier_uri)??""),U((t==null?void 0:t.userinfo_signed_response_alg)??E),D((t==null?void 0:t.tos_uri)??"")},[s,t]),Ie(()=>{j&&A.client_id&&O.isOAuthClientReverificationRequired(A,j).then(n=>{Q(n.reverificationRequired)})},[j,A],Ge);const L=()=>{k(""),x([{uri:""}]),_(""),N(""),g(""),U(E),D(""),c()},Z=()=>{o(!1),B(!1)},{mutate:pe}=Fe({onSuccess:()=>{R("Successfully created","success"),P(void 0),L()},onError:n=>{P(n)}}),{mutate:$,isPending:X}=Be({onSuccess:()=>{R("Successfully saved","success"),P(void 0),L()},onError:n=>{P(n),m(!0)}}),{mutate:ge}=We({onSuccess:()=>{R("Successfully deleted","success"),L()},onError:n=>{R(n.reason,"danger")}}),xe=()=>{try{j&&(fe(A),G===!0?o(!0):l?$(A):pe(A))}catch(n){R(n.reason,"danger")}},ye=()=>{i&&x([...i,{uri:""}])},Ce=n=>{if(i){const d=[...i];d.splice(n,1),x(d)}},Se=(n,d)=>{if(i){const{name:H,value:ve}=n.target,ne=[...i];ne[d][H]=ve,x(ne)}},ee={color:l?"error.main":void 0,"&.Mui-focused":{color:l?"error.main":void 0}},te=e.jsx(C,{onChange:n=>g(n.target.value),placeholder:"https://",type:"text",value:I,id:"sectorURI",label:"Sector Identifier URI",margin:"normal",InputLabelProps:{sx:ee},fullWidth:!0}),re=e.jsx(e.Fragment,{children:i==null?void 0:i.map((n,d)=>e.jsxs("div",{children:[e.jsx(C,{required:d===0,InputLabelProps:{sx:ee},label:d===0&&"Redirect URI(s)",name:"uri",fullWidth:!0,id:`redirect-uri-${d}`,onChange:H=>Se(H,d),value:n.uri,placeholder:"https://",type:"text",InputProps:{endAdornment:i.length>1&&e.jsx(ke,{position:"end",children:e.jsx(Ne,{onClick:()=>Ce(d),children:e.jsx(ie,{sx:{color:"error.main"}})})})},margin:d===0?"normal":"dense"}),i.length-1===d&&e.jsx(S,{variant:"contained",color:"primary",onClick:ye,disabled:n.uri.length===0,sx:{my:"10px"},children:"Add URI"})]},d))}),je=e.jsxs(e.Fragment,{children:[X&&e.jsx("div",{className:"SRC-center-text",children:e.jsx(be,{size:40})}),!X&&e.jsxs(e.Fragment,{children:[e.jsx(V,{variant:"body1",mb:"10px",children:"To protect you and your users, your consent screen and application will need to be verified by Sage Bionetworks. Before your consent screen and application are verified by Sage Bionetworks, you can still test your application with limitations."}),l&&e.jsxs(V,{sx:{mt:"16px"},variant:"label",children:["Client ID: ",t==null?void 0:t.client_id]}),e.jsxs(h,{container:!0,rowSpacing:ce,columnSpacing:ue,children:[e.jsx(h,{item:!0,md:p,xs:f,children:e.jsx(C,{label:"Client Name",required:!0,onChange:n=>k(n.target.value),placeholder:"Client Name",type:"text",value:T,id:"clientName",margin:"normal",fullWidth:!0})}),e.jsx(h,{item:!0,md:p,xs:f,children:e.jsx(C,{label:"Client Homepage",onChange:n=>N(n.target.value),placeholder:"https://",type:"text",value:w,id:"clientUri",fullWidth:!0,margin:"normal"})}),!l&&e.jsxs(e.Fragment,{children:[e.jsx(h,{item:!0,md:p,xs:f,children:re}),e.jsx(h,{item:!0,md:p,xs:f,children:te})]}),e.jsx(h,{item:!0,md:p,xs:f,children:e.jsx(C,{label:"Link to Privacy Policy",onChange:n=>_(n.target.value),placeholder:"https://",type:"text",value:v,fullWidth:!0,margin:"normal"})}),e.jsx(h,{item:!0,md:p,xs:f,children:e.jsx(C,{label:"Links to Terms of Service",onChange:n=>D(n.target.value),placeholder:"https://",type:"text",value:q,fullWidth:!0,margin:"normal"})}),e.jsx(h,{item:!0,md:p,xs:f,children:e.jsxs(C,{label:"User Info Signed Response Algorithm",value:b,onChange:n=>U(n.target.value),select:!0,fullWidth:!0,margin:"normal",children:[e.jsx(le,{value:E,children:"JSON"}),e.jsx(le,{value:we.RS256,children:"JWT"})]})})]}),l&&e.jsxs(he,{sx:{backgroundColor:"rgb(178, 36, 42, 0.03)"},mt:"10px",padding:1,children:[e.jsx(V,{sx:{my:1},color:"error",variant:"headline3",children:"DANGER ZONE"}),e.jsx(V,{variant:"smallText1",children:"Editing the following information will render your client invalid and will require you to create it again and resubmit verification if needed."}),e.jsxs(h,{container:!0,rowSpacing:ce,columnSpacing:ue,children:[e.jsx(h,{item:!0,md:p,xs:f,children:re}),e.jsx(h,{item:!0,md:p,xs:f,children:te})]}),e.jsx(S,{onClick:()=>{B(!0),o(!0)},color:"error",variant:"text",startIcon:e.jsx(ie,{}),sx:{padding:0,mb:1},children:"DELETE CLIENT"})]})]}),F&&e.jsx(qe,{severity:"error",children:F==null?void 0:F.reason})]});return e.jsxs(e.Fragment,{children:[e.jsx(Ae,{open:s&&!u,onCancel:()=>{L(),P(void 0)},maxWidth:"md",title:l?"Client Details":"Create New OAuth Client",content:je,onConfirm:xe,confirmButtonProps:{children:"Save"}}),e.jsx(me,{open:u,title:Le,content:Ve,onCancel:Z,onConfirm:()=>{K?ge(t==null?void 0:t.client_id):$(r),Z()},confirmButtonColor:"error",confirmButtonText:"Yes, Continue"})]})};try{z.displayName="CreateOAuthModal",z.__docgenInfo={description:"",displayName:"CreateOAuthModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},isEdit:{defaultValue:null,description:"",name:"isEdit",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},setIsShowingConfirmModal:{defaultValue:null,description:"",name:"setIsShowingConfirmModal",required:!0,type:{name:"(a: boolean) => void"}},isShowingConfirmModal:{defaultValue:null,description:"",name:"isShowingConfirmModal",required:!0,type:{name:"boolean"}},client:{defaultValue:null,description:"",name:"client",required:!1,type:{name:"OAuthClient"}},setIsShowingModal:{defaultValue:null,description:"",name:"setIsShowingModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}const W=Oe(),de=()=>{const{accessToken:s}=M(),[l,c]=a.useState(!1),[t,o]=a.useState(!1),[u,m]=a.useState(),[j,T]=a.useState(!1),[k,i]=a.useState(!1),[x,v]=a.useState(!1),[_,w]=a.useState(),[N,I]=a.useState(!1),{data:g,hasNextPage:q,fetchNextPage:D}=Ee(),b=a.useMemo(()=>(g==null?void 0:g.pages.flatMap(r=>r.results))??[],[g]),U="Are you absolutely sure?",G="If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.",Q=async()=>{i(!1);try{const r=await O.createOAuthClientSecret(s,u==null?void 0:u.client_id);m(void 0),v(!0),w(r.client_secret)}catch(r){R(r.reason,"danger")}},K=a.useMemo(()=>[W.accessor("createdOn",{header:r=>e.jsx(y,{...r,title:"Created"}),cell:r=>se(ae(r.getValue()))}),W.accessor("modifiedOn",{header:r=>e.jsx(y,{...r,title:"Modified"}),cell:r=>se(ae(r.getValue()))}),W.accessor("client_id",{header:r=>e.jsx(y,{...r,title:"ID"})}),W.accessor("client_name",{header:r=>e.jsx(y,{...r,title:"Client"})}),W.accessor("verified",{header:r=>e.jsx(y,{...r,title:"Verified"}),cell:({getValue:r})=>r()?"Yes":e.jsx(S,{variant:"outlined",size:"small",onClick:()=>I(!0),children:"Submit Verification"})}),{id:"generateSecret",header:r=>e.jsx(y,{...r,title:"App Secret"}),cell:({row:r})=>e.jsx(S,{variant:"outlined",onClick:()=>{m(r.original),i(!0)},size:"small",children:"Generate Secret"})},{id:"actions",header:r=>e.jsx(y,{...r,title:"Actions"}),cell:({row:r})=>e.jsx(S,{variant:"outlined",onClick:()=>{m(r.original),o(!0),c(!0)},size:"small",children:"Edit"})}],[]),B=Re({data:b,columns:K,getRowId:r=>r.client_id,enableRowSelection:!0,enableSorting:!1,getCoreRowModel:Te(),columnResizeMode:"onChange"});return e.jsxs("div",{children:[e.jsx(he,{display:"flex",width:"100%",justifyContent:"flex-end",mb:2,children:e.jsx(S,{variant:"contained",color:"primary",onClick:()=>{c(!0),o(!1)},sx:{float:"right"},startIcon:e.jsx(Ue,{}),children:"Create New Client"})}),e.jsx(Me,{table:B}),q&&e.jsx("div",{className:"text-center",children:e.jsx(S,{variant:"contained",color:"primary",onClick:()=>{D()},children:"Load more"})}),e.jsx(z,{onClose:()=>{c(!1)},isShowingModal:l,client:t?u:void 0,isEdit:t,setIsShowingConfirmModal:T,isShowingConfirmModal:j,setIsShowingModal:c}),e.jsx(oe,{open:N,onCancel:()=>I(!1),title:"Submit Verification",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["In order to verify an OAuth client please submit a request to the"," ",e.jsx(Pe,{target:"_blank",rel:"noopener noreferrer",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",children:"Synapse Service Desk."})]}),e.jsx("b",{children:"Please list the following items in your request:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Your name"}),e.jsxs("li",{children:["The ID of the client to be verified ",e.jsx("br",{})]}),e.jsx("li",{children:"A description of your application"})]})]})}),e.jsx(me,{open:k,title:U,content:G,onCancel:()=>{i(!1),m(void 0)},onConfirm:Q,confirmButtonColor:"error",confirmButtonText:"Yes, Continue"}),_&&e.jsx(oe,{open:x,title:"App Secret",onCancel:()=>{v(!1),w(void 0)},content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"This secret will not be able to be retrieved again."})," If needed, in order to generate a new secret select Generate from the Client List."]}),e.jsx(De,{value:_,inputWidth:"400px"})]})})]})};try{de.displayName="OAuthManagement",de.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}}}catch{}export{de as O};
