import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as h,R as k}from"./index-Dl6G-zuu.js";import{l as E,r as te,n as M,m as b,b4 as X,bI as se,bp as ne}from"./SynapseClient-BHsOBGLR.js";import{l as ie,a0 as le,L as oe,M as de,k as ue,j as ce,U as pe,x as me}from"./SynapseConstants-D_cJtnRz.js";import"./EntityTypeUtils-D1CcfD2e.js";import{g as fe,B as he,P as ee}from"./getEndpoint-CjoHA800.js";import"./OrientationBanner-D9iiRUAg.js";import{P as Ce,M as ge}from"./Menu-C2kbcWAO.js";import{F as ye}from"./Fade-Bhxuafx5.js";import{P as xe}from"./Paper-6hBhi2Vr.js";import{I as N}from"./IconSvg-BAp0YZOK.js";import{aj as Le}from"./index-CdAyn5Hz.js";import{b as ve,c as we,d as Se}from"./useFiles-CpvoRIe7.js";import{S as Re}from"./SkeletonTable-BQt6sS0P.js";import{T as _e}from"./ToastMessage-DLv4YVhE.js";import{D as Ae}from"./Divider-DJ8WkHe7.js";import{M as be}from"./MenuItem-Dw5ZhG7D.js";import{T as Ie}from"./Tooltip-Drr3vXNI.js";import{I as Ne}from"./IconButton-CLoAcDX9.js";import{C as P}from"./Card-BPGAXijX.js";import{S as $}from"./Skeleton-1jrlRaLC.js";import{A as je}from"./Avatar-VbBYm8Q1.js";import{B as Ue}from"./Box-DRYT9rh3.js";import{L as Ee}from"./Link-Cl5bQMMR.js";function Me(a){a&&clearTimeout(a)}const Ve=250,qe=500;function ae(a,r,t=Ve,s=qe,i={},l={vertical:"top",horizontal:"right"},o={vertical:"center",horizontal:"left"}){const u=h.useRef(!1),g=h.useRef(null),[m,C]=h.useState(!1);h.useEffect(()=>(u.current=!0,()=>{u.current=!1}),[]);const c=h.useCallback((f=m,y=!0)=>{Me(g.current),y?g.current=setTimeout(()=>{u.current&&C(f)},f?t:s):C(f)},[s,t,m]),p=h.useCallback((f=!0)=>{c(!0,f)},[c]),n=h.useCallback((f=!0)=>{c(!1,f)},[c]);return{OverlayComponent:h.useCallback(()=>e.jsx(Ce,{TransitionComponent:ye,anchorEl:r.current,open:m,anchorOrigin:l,transformOrigin:o,sx:{pointerEvents:"none"},children:e.jsx(xe,{...i,onMouseEnter:()=>{c(!0,!1)},onMouseLeave:()=>{n(!0)},sx:{pointerEvents:"auto",width:"max-content",minWidth:"300px",...i.sx},children:a})}),[a,m,l,r,c,n]),isShowing:m,toggleShow:p,toggleHide:n,toggle:c}}function ke(a,r){const{keyFactory:t}=E(),s=t.getUserGroupHeaderQueryKey(a);return M({...r,queryKey:s,queryFn:async()=>{const i=await b.getGroupHeadersBatch([a]);if(i.children.length!==1)throw new Error(`Expected one response in useGetUserGroupHeader for id: ${a}, got ${i.children.length}`);return i.children[0]}})}function ha(a,r){const{keyFactory:t}=E(),s=te(),i=t.getUserGroupHeaderBatchQueryKey(a);return M({...r,queryKey:i,queryFn:async()=>{const o=await b.getGroupHeadersBatch(a);return o.children.forEach(u=>{s.setQueryData(t.getUserGroupHeaderQueryKey(u.ownerId),u)}),o.children}})}function Ca(a,r,t){const{keyFactory:s}=E(),i=s.getUserGroupHeaderSearchQueryKey(a,r);return M({...t,queryKey:i,queryFn:async()=>(await b.getUserGroupHeaders(a,r)).children})}function ga(a,r){const{keyFactory:t}=E(),s=t.getUserGroupHeaderWithAliasQueryKey(a);return M({...r,queryKey:s,queryFn:async()=>(await b.postUserGroupHeadersWithAlias(a)).list})}async function ya(a){return{list:(await b.getUserProfiles(a)).list.map(s=>s.profilePicureFileHandleId?{...s,clientPreSignedURL:`${fe(he.REPO_ENDPOINT)}/repo/v1/userProfile/${s.ownerId}/image/preview?redirect=true`}:s)}}const Z=["chocolate","black","firebrick","maroon","olive","green","forestgreen","darkturquoise","teal","blue","navy","darkmagenta","purple","blue","orangered","blueviolet"],Pe=a=>{const r=a.split("").reduce((t,s)=>(t<<5)-t+s.charCodeAt(0)|0,0);return Math.abs(r)},Te=a=>{const r=Pe(a);return Z[r%Z.length]},T=a=>e.jsx("svg",{...a,className:`Icon-Copy ${a.className??""}`,width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.7368 12.7273H3.78947V3.81818H10.7368V12.7273ZM10.7368 2.54545H3.78947C3.45446 2.54545 3.13317 2.67954 2.89629 2.91823C2.6594 3.15691 2.52632 3.48063 2.52632 3.81818V12.7273C2.52632 13.0648 2.6594 13.3885 2.89629 13.6272C3.13317 13.8659 3.45446 14 3.78947 14H10.7368C11.0719 14 11.3931 13.8659 11.63 13.6272C11.8669 13.3885 12 13.0648 12 12.7273V3.81818C12 3.48063 11.8669 3.15691 11.63 2.91823C11.3931 2.67954 11.0719 2.54545 10.7368 2.54545V2.54545ZM8.8421 0H1.26316C0.928148 0 0.606858 0.134091 0.36997 0.372773C0.133082 0.611456 0 0.935179 0 1.27273V10.1818H1.26316V1.27273H8.8421V0Z"})});try{T.displayName="IconCopy",T.__docgenInfo={description:"",displayName:"IconCopy",props:{}}}catch{}const De=e.jsx("span",{className:"SRC-validatedProfileIcon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.21612 12.9284C1.00431 13.5978 1.46323 14.3024 2.16925 14.4081L2.62816 14.4786C3.12238 14.5491 3.51069 14.9366 3.61659 15.4299L3.68719 15.8879C3.7931 16.5925 4.49912 17.0153 5.20514 16.8039L5.66405 16.663C6.15827 16.5221 6.68778 16.6982 6.97019 17.121L7.2526 17.5086C7.67621 18.0723 8.48813 18.178 9.01765 17.6847L9.37066 17.3676C9.75897 17.0153 10.2885 16.9448 10.7474 17.1915L11.171 17.4029C11.8064 17.7552 12.5831 17.4733 12.8302 16.8039L13.0067 16.3811C13.1832 15.9231 13.6774 15.606 14.1716 15.6413L14.6305 15.6765C15.3365 15.7117 15.9367 15.1128 15.8661 14.4081L15.8307 13.9501C15.7954 13.4569 16.0779 12.9636 16.5721 12.7875L16.9957 12.6113C17.6664 12.3294 17.9135 11.5543 17.5605 10.9554L17.2428 10.5678C16.9957 10.145 17.0663 9.58133 17.384 9.19378L17.7017 8.84145C18.1606 8.31297 18.09 7.50264 17.4899 7.07985L17.1016 6.83322C16.678 6.55137 16.5015 6.02289 16.6427 5.52964L16.7839 5.07162C16.9957 4.40221 16.5368 3.69757 15.8307 3.59187L15.3718 3.52141C14.8776 3.45094 14.4893 3.06339 14.3834 2.57014L14.3128 2.11212C14.2069 1.40748 13.5009 0.984696 12.7949 1.19609L12.3359 1.33702C11.8417 1.47795 11.3122 1.30179 11.0298 0.879L10.7474 0.491447C10.3238 -0.072267 9.51186 -0.177963 8.98235 0.315286L8.62934 0.632375C8.24103 0.984696 7.71151 1.05516 7.2526 0.808536L6.82899 0.597143C6.19357 0.244822 5.41694 0.526679 5.16984 1.19609L4.99333 1.61887C4.81683 2.07689 4.32261 2.39398 3.8284 2.35875L3.44009 2.28828C2.73407 2.25305 2.13395 2.852 2.20455 3.55664L2.23985 4.01466C2.27515 4.50791 1.99274 5.00116 1.49853 5.17732L1.07492 5.35348C0.404196 5.63533 0.15709 6.41044 0.5101 7.00939L0.757207 7.39694C1.00431 7.81972 0.933712 8.38344 0.616003 8.77099L0.298294 9.12331C-0.16062 9.65179 -0.0900176 10.4621 0.5101 10.8849L0.898411 11.1315C1.32202 11.4134 1.49853 11.9419 1.35732 12.4351L1.21612 12.9284ZM6.37007 7.6788L7.92332 9.26424L11.6652 5.56487L13.2891 7.18555L9.54716 10.8497L7.92332 12.4704L6.29947 10.8497L4.74622 9.29947L6.37007 7.6788Z",fill:"#28A745"})})}),D=a=>{const{menuActions:r=[],userProfile:t,open:s,anchorEl:i=null,onClose:l}=a;return e.jsx(ge,{open:s,anchorEl:i,onClose:l,children:r.map((o,u)=>{const g=()=>o.callback(t);return o.field===ie?e.jsx(Ae,{},`${o.field}_${u}`):e.jsx(be,{role:"menuitem",onClick:g,children:o.field},o.field)})})};try{D.displayName="UserCardContextMenu",D.__docgenInfo={description:"",displayName:"UserCardContextMenu",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!0,type:{name:"MenuAction[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:"",name:"anchorEl",required:!1,type:{name:"HTMLElement | null"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Fe=e.jsx("span",{className:"SRC-certified-user-icon",children:e.jsxs("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M5.63578 14.1759C5.53042 14.0916 5.40399 14.0284 5.27756 14.0284L4.39256 13.9652C3.48648 13.902 2.68576 13.4384 2.15897 12.7641L0.0518096 17.2523C-0.137835 17.6738 0.220382 18.1584 0.683957 18.0741L2.5804 17.7159C2.81219 17.6738 3.06505 17.7791 3.19148 18.0109L4.11862 19.6966C4.35041 20.1181 4.94042 20.097 5.13006 19.6545L7.174 15.2927C6.85793 15.1663 6.584 14.9977 6.31007 14.7659L5.63578 14.1759Z",fill:"#58A158"}),e.jsx("path",{d:"M16.6564 17.2523L14.5492 12.7641C14.0224 13.4384 13.2217 13.8809 12.3156 13.9652L11.4306 14.0284C11.2831 14.0495 11.1778 14.0916 11.0724 14.1759L10.3981 14.7448C10.1453 14.9555 9.85025 15.1452 9.53418 15.2716L11.5781 19.6334C11.7678 20.0549 12.3788 20.0759 12.5896 19.6756L13.5167 17.9899C13.6431 17.7791 13.8749 17.6527 14.1278 17.6948L16.0242 18.0531C16.4878 18.1374 16.8671 17.6738 16.6564 17.2523Z",fill:"#58A158"}),e.jsx("path",{d:"M10.2503 13.2277C10.5453 12.9748 10.9246 12.8063 11.3249 12.7852L12.2099 12.722C13.1371 12.6588 13.8746 11.9212 13.9378 10.9941L14.001 10.1091C14.0221 9.70873 14.1906 9.32944 14.4435 9.03444L15.0335 8.36015C15.6446 7.64372 15.6446 6.61121 15.0335 5.91585L14.4435 5.24156C14.1906 4.94655 14.0221 4.56727 14.001 4.16691L13.9378 3.2819C13.8746 2.35475 13.1371 1.61724 12.2099 1.55403L11.3249 1.49081C10.9246 1.46974 10.5453 1.30117 10.2503 1.04831L9.57597 0.458307C8.85954 -0.152769 7.82703 -0.152769 7.13167 0.458307L6.45738 0.985097C6.16237 1.23796 5.78309 1.40653 5.38273 1.4276L4.49772 1.49081C3.57057 1.55403 2.83306 2.29153 2.76985 3.21868L2.70664 4.10369C2.68556 4.50405 2.51699 4.88334 2.26413 5.17834L1.67413 5.85263C1.06305 6.56907 1.06305 7.60157 1.67413 8.29694L2.26413 8.97123C2.51699 9.26623 2.68556 9.64552 2.70664 10.0459L2.76985 10.9309C2.83306 11.858 3.57057 12.5955 4.49772 12.6588L5.38273 12.722C5.78309 12.743 6.16237 12.9116 6.45738 13.1645L7.13167 13.7545C7.8481 14.3656 8.88061 14.3656 9.57597 13.7545L10.2503 13.2277ZM4.39236 7.11693C4.39236 4.92548 6.16237 3.15547 8.35382 3.15547C10.5453 3.15547 12.3153 4.92548 12.3153 7.11693C12.3153 9.30837 10.5453 11.0784 8.35382 11.0784C6.16237 11.0784 4.39236 9.2873 4.39236 7.11693Z",fill:"#58A158"}),e.jsx("path",{d:"M10.5875 6.0844L9.49182 5.87368C9.38646 5.85261 9.28111 5.7894 9.23896 5.68404L8.6911 4.69367C8.5436 4.44081 8.16431 4.44081 8.03788 4.69367L7.49002 5.68404C7.42681 5.7894 7.34252 5.85261 7.23716 5.87368L6.14144 6.0844C5.84644 6.14761 5.74108 6.50583 5.93072 6.71654L6.6893 7.53834C6.77359 7.62262 6.79466 7.72798 6.79466 7.83334L6.66823 8.95013C6.62609 9.24513 6.94216 9.45585 7.19502 9.32942L8.20646 8.84477C8.31181 8.80263 8.41717 8.80263 8.52253 8.84477L9.53396 9.32942C9.8079 9.45585 10.1029 9.24513 10.0608 8.95013L9.93433 7.83334C9.91325 7.72798 9.9554 7.60155 10.0397 7.53834L10.7983 6.71654C10.9879 6.48476 10.8825 6.14761 10.5875 6.0844Z",fill:"#C94281"})]})});function F({userProfile:a,isCertified:r}){const{summary:t,industry:s,location:i,url:l}=a;return e.jsx("div",{className:"SRC-cardMetaData",children:e.jsxs("div",{className:"SRC-cardMetaData-scroll",children:[t&&e.jsxs("div",{children:[e.jsx("p",{className:"SRC-card-metadata-title",children:" Bio "}),e.jsx("p",{children:t})]}),l&&e.jsxs("div",{children:[e.jsx("p",{className:"SRC-card-metadata-title",children:" More Info "}),e.jsx("p",{children:l})]}),s&&e.jsxs("div",{children:[e.jsx("p",{className:"SRC-card-metadata-title",children:" Industry "}),e.jsx("p",{children:s})]}),i&&e.jsxs("div",{children:[e.jsx("p",{className:"SRC-card-metadata-title",children:" Location "}),e.jsx("p",{children:i})]}),r&&e.jsxs("div",{children:[e.jsx("p",{className:"SRC-card-metadata-title",children:" Access "}),e.jsxs("p",{children:[Fe," Certified Account"]})]})]})})}try{F.displayName="UserCardLarge",F.__docgenInfo={description:"UserCardLarge wraps around UserCardMedium",displayName:"UserCardLarge",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}}}}}catch{}const Y=(a,r,t)=>s=>{s.preventDefault(),navigator.clipboard.writeText(r).then(()=>{t()})},A=({userProfile:a,menuActions:r,isLarge:t=!1,imageURL:s,hideEmail:i=!1,disableLink:l=!1,link:o,openLinkInNewTab:u=!1,isValidated:g,isCertified:m,isLoadingAvatar:C})=>{const[c,p]=k.useState(null),n=!!c,d=re=>{p(re.currentTarget)},f=()=>{p(null)},[y,x]=h.useState(!1),w=h.useRef(null),L=()=>{x(!0),setTimeout(()=>{x(!1)},4e3)},{displayName:S,userName:v,firstName:I,lastName:R,position:V,company:H}=a,{data:q}=X(a.ownerId,le),z=q==null?void 0:q.ORCID;let _="";const G=o||`${ee.PORTAL}Profile:${a.ownerId}`,B=`${v}@synapse.org`;S?_=S:I&&R?_=`${I} ${R}`:v&&(_=v);const W=e.jsx(j,{userProfile:a,imageURL:s,avatarSize:"LARGE",isLoadingAvatar:C}),K=e.jsxs(k.Fragment,{children:[!i&&e.jsx(_e,{show:y,text:"Email address copied to clipboard",autohide:!0}),l&&W,!l&&e.jsx("a",{href:G,target:u?"_blank":"",rel:u?"noreferrer":"",className:`SRC-no-border-bottom-imp ${t?"SRC-isLargeCard":""}`,children:W}),e.jsxs("div",{className:"SRC-cardContent",children:[e.jsxs("p",{className:"SRC-eqHeightRow SRC-userCardName",children:[t||l?e.jsx("span",{className:t?"SRC-whiteText":"SRC-blackText",children:_}):e.jsx("a",{href:G,target:u?"_blank":"",rel:u?"noreferrer":"",tabIndex:0,className:"SRC-hand-cursor",children:_}),g&&e.jsx(Ie,{title:"This user profile has been validated.",placement:"bottom",enterNextDelay:300,children:e.jsx("span",{children:De})})]}),(V||H)&&e.jsxs("p",{className:`${t?"SRC-whiteText":""}`,children:[V," ",V?" / ":""," ",H]}),!i&&e.jsxs("p",{ref:w,className:`${t?"SRC-whiteText":""}
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`,onClick:Y(w,B,L),onKeyPress:Y(w,B,L),tabIndex:0,children:[e.jsx("span",{style:{paddingRight:"5px",paddingBottom:"2px"},children:e.jsx("a",{className:`link ${t?"SRC-whiteText":""}`,children:`${v}@synapse.org`})}),e.jsx(T,{})]}),z&&e.jsx("a",{href:z,target:"_blank",rel:"noopener noreferrer",style:{width:"fit-content"},tabIndex:0,className:t?"SRC-whiteText":"",children:"View ORCID"})]}),r&&r.length>0&&e.jsxs(k.Fragment,{children:[e.jsx(Ne,{role:"menu",tabIndex:0,onClick:d,sx:{mx:1},children:e.jsx(N,{icon:"verticalEllipsis",wrap:!1})}),e.jsx(D,{menuActions:r,userProfile:a,anchorEl:c,onClose:f,open:n})]})]});return t?e.jsxs(P,{children:[e.jsx("div",{className:"SRC-primary-background-color SRC-userCard SRC-userCardMediumUp",children:K}),t&&e.jsx(F,{userProfile:a,isCertified:m})]}):e.jsx(P,{className:"SRC-userCard SRC-userCardMediumUp",children:K})},Q=()=>e.jsxs(P,{className:"SRC-userCard SRC-userCardMediumUp",style:{width:"380px"},children:[e.jsx($,{variant:"circular",width:"80px",height:"80px"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(Re,{numCols:1,numRows:2})})]});try{A.displayName="UserCardMedium",A.__docgenInfo={description:"",displayName:"UserCardMedium",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},menuActions:{defaultValue:null,description:"",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},hideEmail:{defaultValue:{value:"false"},description:"",name:"hideEmail",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:{value:"false"},description:"",name:"isLarge",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:{value:"false"},description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:{value:"false"},description:"",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:null,description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}}}}}catch{}try{Q.displayName="LoadingUserCardMedium",Q.__docgenInfo={description:"",displayName:"LoadingUserCardMedium",props:{}}}catch{}const Oe=250,$e=500,j=({userProfile:a,avatarSize:r="LARGE",imageURL:t,showCardOnHover:s=!1,isLoadingAvatar:i=!1,className:l})=>{const o=h.useRef(null),u=e.jsx(A,{userProfile:a,imageURL:t}),{OverlayComponent:g,isShowing:m,toggleShow:C,toggleHide:c}=ae(u,o,Oe,$e,{sx:{maxWidth:"425px"}});let p={};switch(r){case"SMALL":p={fontSize:"12px",width:"20px",height:"20px"};break;case"MEDIUM":p={fontSize:"18px",width:"30px",height:"30px"};break;case"LARGE":p={fontSize:"26px",width:"80px",height:"80px"};break}const n=s?"pointer":"unset",d=!!t,f=d?{backgroundImage:`url(${t})`}:{background:Te(a.userName)};if(i)return e.jsx($,{sx:p,variant:"circular"});let y=e.jsx(e.Fragment,{});return d||(y=a.firstName?a.firstName[0]:a.userName[0]),e.jsxs(e.Fragment,{children:[s&&e.jsx(g,{}),e.jsx(je,{ref:o,role:"img",onMouseEnter:()=>C(),onMouseLeave:()=>c(),onClick:x=>{s&&x.stopPropagation(),m?c(!1):C(!1)},className:`${l??""}`,sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",cursor:n,textDecoration:"none",...p,...f},children:y})]})};try{j.displayName="Avatar",j.__docgenInfo={description:"",displayName:"Avatar",props:{userProfile:{defaultValue:null,description:"",name:"userProfile",required:!0,type:{name:"UserProfile"}},avatarSize:{defaultValue:{value:"LARGE"},description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!1,type:{name:"string"}},showCardOnHover:{defaultValue:{value:"false"},description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},isLoadingAvatar:{defaultValue:{value:"false"},description:"",name:"isLoadingAvatar",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function U(a){var S;const{userProfile:r,preSignedURL:t,size:s,ownerId:i,alias:l,...o}=a,{data:u,isLoading:g}=se({alias:l,type:Le.USER_NAME},{enabled:!!l}),m=(S=i??(r==null?void 0:r.ownerId)??u)==null?void 0:S.toString(),{data:C,isLoading:c}=ne(m,{enabled:!!m&&!r}),p=r??C,{data:n,isLoading:d}=ve(m,{enabled:!!(!t&&m)}),f=we(t),y=Se(n),x=f??y,w=g||c,L=h.useMemo(()=>({userProfile:p,imageURL:x,isLoadingAvatar:d,...o}),[x,d,o,p]);if(w||p==null)return e.jsx(e.Fragment,{});switch(s){case ce:return e.jsx(j,{...L});case ue:return e.jsx(O,{userId:i??p.ownerId,...L});case de:return e.jsx(A,{...L});case oe:return e.jsx(A,{isLarge:!0,...L});default:return console.warn("No size specified for UserCard"),e.jsx("span",{})}}try{U.displayName="UserCard",U.__docgenInfo={description:"",displayName:"UserCard",props:{userProfile:{defaultValue:null,description:"A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId`",name:"userProfile",required:!1,type:{name:"UserProfile"}},alias:{defaultValue:null,description:"An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"alias",required:!1,type:{name:"string"}},ownerId:{defaultValue:null,description:"The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId`",name:"ownerId",required:!1,type:{name:"string"}},hideEmail:{defaultValue:null,description:"Whether to hide the user's Synapse email address",name:"hideEmail",required:!1,type:{name:"boolean"}},preSignedURL:{defaultValue:null,description:"If set, the corresponding image will be shown for the user.",name:"preSignedURL",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Specifies the card size",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},showCardOnHover:{defaultValue:null,description:"For the small user card or avatar, shows the medium user card on mouseover",name:"showCardOnHover",required:!1,type:{name:"boolean"}},hideTooltip:{defaultValue:null,description:"@deprecated For the small user card, hides the tooltip observed when hovering over the profile image.",name:"hideTooltip",required:!1,type:{name:"boolean"}},menuActions:{defaultValue:null,description:"Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen.",name:"menuActions",required:!1,type:{name:"MenuAction[]"}},link:{defaultValue:null,description:"The link to point to on the username, defaults to https://www.synapse.org/Profile:${userProfile.ownerId}",name:"link",required:!1,type:{name:"string"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination)",name:"disableLink",required:!1,type:{name:"boolean"}},isCertified:{defaultValue:null,description:"",name:"isCertified",required:!1,type:{name:"boolean"}},isValidated:{defaultValue:null,description:"",name:"isValidated",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true)",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},withAvatar:{defaultValue:null,description:"Whether to show the avatar with the name for the small user card",name:"withAvatar",required:!1,type:{name:"boolean"}},showFullName:{defaultValue:null,description:"@deprecated Whether to show the full name in the small user card",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"@deprecated show certification/validation badges for small user card",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}}}}}catch{}const He=250,ze=500,J=" ";function O(a){const{userId:r,showCardOnHover:t=!0,disableLink:s,showAccountLevelIcon:i=!1,openLinkInNewTab:l=!1,withAvatar:o=!1,avatarSize:u="SMALL",className:g,showFullName:m=!1}=a;let{link:C}=a;const c=h.useRef(null),p=pe|me,{data:n}=ke(r,{enabled:!!r,staleTime:1e3*60*15}),{data:d}=X(r,p,{enabled:!!r&&i}),f=h.useMemo(()=>e.jsx(U,{ownerId:r,size:"MEDIUM USER CARD"}),[r]);C==null&&(C=`${ee.PORTAL}Profile:${r}`);const{OverlayComponent:y,toggleShow:x,toggleHide:w}=ae(f,c,He,ze,{sx:{maxWidth:"425px"}}),L=o?e.jsx("span",{className:"SRC-inline-avatar",children:e.jsx(U,{ownerId:r,size:"AVATAR",avatarSize:u})}):e.jsx(e.Fragment,{}),S=e.jsxs(Ue,{display:"flex",gap:1,sx:{mx:1},children:[!(d!=null&&d.isCertified)&&!(d!=null&&d.isVerified)&&e.jsx(N,{icon:"accountRegistered",label:"Registered",sx:{width:"30px",height:"30px"}}),(d==null?void 0:d.isCertified)&&e.jsx(N,{icon:"accountCertified",label:"Certified",sx:{width:"30px",height:"30px"}}),(d==null?void 0:d.isVerified)&&e.jsx(N,{icon:"accountValidated",label:"Validated",sx:{width:"30px",height:"30px"}})]}),v=m&&(n!=null&&n.firstName||n!=null&&n.lastName)?e.jsxs("span",{className:"user-fullname",children:[`${(n==null?void 0:n.firstName)??""}`,n!=null&&n.firstName&&(n!=null&&n.lastName)?J:"",`${(n==null?void 0:n.lastName)??""}`]}):null,I=t||!s?Ee:"span";let R={};return t?R={whiteSpace:"nowrap"}:s&&(R={cursor:"unset"}),e.jsxs(e.Fragment,{children:[t&&e.jsx(y,{}),L,e.jsxs(I,{className:`SRC-userCard UserBadge SRC-boldText ${g??""}`,style:R,href:s?void 0:C,target:l?"_blank":"",rel:l?"noreferrer":"",ref:c,onMouseEnter:()=>x(),onMouseLeave:()=>w(),children:[v,v?`${J}(`:"",n?`@${n.userName}`:e.jsx($,{width:"100px"}),v?")":"",i&&S]})]})}try{O.displayName="UserBadge",O.__docgenInfo={description:"",displayName:"UserBadge",props:{userId:{defaultValue:null,description:"",name:"userId",required:!1,type:{name:"string"}},withAvatar:{defaultValue:null,description:"",name:"withAvatar",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},showAccountLevelIcon:{defaultValue:null,description:"",name:"showAccountLevelIcon",required:!1,type:{name:"boolean"}},openLinkInNewTab:{defaultValue:null,description:"",name:"openLinkInNewTab",required:!1,type:{name:"boolean"}},avatarSize:{defaultValue:null,description:"",name:"avatarSize",required:!1,type:{name:"enum",value:[{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'}]}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{Q as L,O as U,U as a,ha as b,Ca as c,ga as d,ya as g,ke as u};
