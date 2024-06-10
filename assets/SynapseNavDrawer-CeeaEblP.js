import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{S as ue,W as fe,D as he}from"./index-S3N2_v0E.js";import{r as x}from"./index-Dl6G-zuu.js";import{k as xe,K as ge,J as ve,p as ye}from"./SynapseClient-MbtLKuZM.js";import"./OrientationBanner-Dih8CVog.js";import"./getEndpoint-CjoHA800.js";import{b as je}from"./useDataAccessSubmission-DPPURAHd.js";import{u as we}from"./useDownloadList-DYR3Dxoo.js";import{C as Se}from"./CreateProjectModal-BmvLzsrQ.js";import{I as H}from"./IconSvg-na56wJu8.js";import{a as ke}from"./UserBadge-BUDJSr6F.js";import{_ as B,a as Te,g as Ne,e as V,b as $,d as P}from"./createTheme-CwlmBDro.js";import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{u as be}from"./index-aEXBT5Ni.js";import{u as re,T as Re,r as Fe,g as Y}from"./utils-C1pLSGi5.js";import{s as G,r as oe,u as ne,c as ae}from"./styled-OgyJf9MH.js";import{M as Ie}from"./Modal-BRilODZK.js";import{P as Le}from"./Paper-BWoP1bRz.js";import{u as se,a as De}from"./useForkRef-CEBgoE3Z.js";import{d as $e,o as ie}from"./ownerWindow-BN2rbQ_G.js";import{a as q,L as X}from"./List-DP5ytkvU.js";import{M as le}from"./Tooltip-CYVQ1vhC.js";import{a as J}from"./Form--9Y-bW00.js";import{l as M,g as Oe}from"./listItemButtonClasses-CAT3t28y.js";import{B as Me}from"./ButtonBase-5SeL_6IU.js";import{a8 as _e}from"./HelpPopover-BiLENmTe.js";const Ee=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Pe(t,r,n){const o=r.getBoundingClientRect(),s=n&&n.getBoundingClientRect(),u=ie(r);let p;if(r.fakeTransform)p=r.fakeTransform;else{const c=u.getComputedStyle(r);p=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let C=0,m=0;if(p&&p!=="none"&&typeof p=="string"){const c=p.split("(")[1].split(")")[0].split(",");C=parseInt(c[4],10),m=parseInt(c[5],10)}return t==="left"?s?`translateX(${s.right+C-o.left}px)`:`translateX(${u.innerWidth+C-o.left}px)`:t==="right"?s?`translateX(-${o.right-s.left-C}px)`:`translateX(-${o.left+o.width-C}px)`:t==="up"?s?`translateY(${s.bottom+m-o.top}px)`:`translateY(${u.innerHeight+m-o.top}px)`:s?`translateY(-${o.top-s.top+o.height-m}px)`:`translateY(-${o.top+o.height-m}px)`}function Ae(t){return typeof t=="function"?t():t}function A(t,r,n){const o=Ae(n),s=Pe(t,r,o);s&&(r.style.webkitTransform=s,r.style.transform=s)}const He=x.forwardRef(function(r,n){const o=re(),s={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},u={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:p,appear:C=!0,children:m,container:c,direction:f="down",easing:T=s,in:v,onEnter:N,onEntered:h,onEntering:a,onExit:b,onExited:I,onExiting:k,style:w,timeout:R=u,TransitionComponent:y=Re}=r,l=B(r,Ee),j=x.useRef(null),O=se(m.ref,j,n),d=i=>S=>{i&&(S===void 0?i(j.current):i(j.current,S))},D=d((i,S)=>{A(f,i,c),Fe(i),N&&N(i,S)}),L=d((i,S)=>{const Z=Y({timeout:R,style:w,easing:T},{mode:"enter"});i.style.webkitTransition=o.transitions.create("-webkit-transform",g({},Z)),i.style.transition=o.transitions.create("transform",g({},Z)),i.style.webkitTransform="none",i.style.transform="none",a&&a(i,S)}),_=d(h),E=d(k),pe=d(i=>{const S=Y({timeout:R,style:w,easing:T},{mode:"exit"});i.style.webkitTransition=o.transitions.create("-webkit-transform",S),i.style.transition=o.transitions.create("transform",S),A(f,i,c),b&&b(i)}),Ce=d(i=>{i.style.webkitTransition="",i.style.transition="",I&&I(i)}),me=i=>{p&&p(j.current,i)},U=x.useCallback(()=>{j.current&&A(f,j.current,c)},[f,c]);return x.useEffect(()=>{if(v||f==="down"||f==="right")return;const i=$e(()=>{j.current&&A(f,j.current,c)}),S=ie(j.current);return S.addEventListener("resize",i),()=>{i.clear(),S.removeEventListener("resize",i)}},[f,v,c]),x.useEffect(()=>{v||U()},[v,U]),e.jsx(y,g({nodeRef:j,onEnter:D,onEntered:_,onEntering:L,onExit:pe,onExited:Ce,onExiting:E,addEndListener:me,appear:C,in:v,timeout:R},l,{children:(i,S)=>x.cloneElement(m,g({ref:O,style:g({visibility:i==="exited"&&!v?"hidden":void 0},w,m.props.style)},S))}))}),Be=He;function Ve(t){return Te("MuiDrawer",t)}Ne("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ge=["BackdropProps"],We=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ce=(t,r)=>{const{ownerState:n}=t;return[r.root,(n.variant==="permanent"||n.variant==="persistent")&&r.docked,r.modal]},ze=t=>{const{classes:r,anchor:n,variant:o}=t,s={root:["root"],docked:[(o==="permanent"||o==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${V(n)}`,o!=="temporary"&&`paperAnchorDocked${V(n)}`]};return ae(s,Ve,r)},Ue=G(Ie,{name:"MuiDrawer",slot:"Root",overridesResolver:ce})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),K=G("div",{shouldForwardProp:oe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ce})({flex:"0 0 auto"}),Ze=G(Le,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.paper,r[`paperAnchor${V(n.anchor)}`],n.variant!=="temporary"&&r[`paperAnchorDocked${V(n.anchor)}`]]}})(({theme:t,ownerState:r})=>g({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),de={left:"right",right:"left",top:"down",bottom:"up"};function Ye(t){return["left","right"].indexOf(t)!==-1}function qe({direction:t},r){return t==="rtl"&&Ye(r)?de[r]:r}const Xe=x.forwardRef(function(r,n){const o=ne({props:r,name:"MuiDrawer"}),s=re(),u=be(),p={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:C="left",BackdropProps:m,children:c,className:f,elevation:T=16,hideBackdrop:v=!1,ModalProps:{BackdropProps:N}={},onClose:h,open:a=!1,PaperProps:b={},SlideProps:I,TransitionComponent:k=Be,transitionDuration:w=p,variant:R="temporary"}=o,y=B(o.ModalProps,Ge),l=B(o,We),j=x.useRef(!1);x.useEffect(()=>{j.current=!0},[]);const O=qe({direction:u?"rtl":"ltr"},C),D=g({},o,{anchor:C,elevation:T,open:a,variant:R},l),L=ze(D),_=e.jsx(Ze,g({elevation:R==="temporary"?T:0,square:!0},b,{className:$(L.paper,b.className),ownerState:D,children:c}));if(R==="permanent")return e.jsx(K,g({className:$(L.root,L.docked,f),ownerState:D,ref:n},l,{children:_}));const E=e.jsx(k,g({in:a,direction:de[O],timeout:w,appear:j.current},I,{children:_}));return R==="persistent"?e.jsx(K,g({className:$(L.root,L.docked,f),ownerState:D,ref:n},l,{children:E})):e.jsx(Ue,g({BackdropProps:g({},m,N,{transitionDuration:w}),className:$(L.root,L.modal,f),open:a,ownerState:D,onClose:h,hideBackdrop:v,ref:n},l,y,{children:E}))}),Q=Xe,Je=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Ke=(t,r)=>{const{ownerState:n}=t;return[r.root,n.dense&&r.dense,n.alignItems==="flex-start"&&r.alignItemsFlexStart,n.divider&&r.divider,!n.disableGutters&&r.gutters]},Qe=t=>{const{alignItems:r,classes:n,dense:o,disabled:s,disableGutters:u,divider:p,selected:C}=t,c=ae({root:["root",o&&"dense",!u&&"gutters",p&&"divider",s&&"disabled",r==="flex-start"&&"alignItemsFlexStart",C&&"selected"]},Oe,n);return g({},n,c)},et=G(Me,{shouldForwardProp:t=>oe(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Ke})(({theme:t,ownerState:r})=>g({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${M.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${M.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},r.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},r.alignItems==="flex-start"&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})),tt=x.forwardRef(function(r,n){const o=ne({props:r,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:u=!1,component:p="div",children:C,dense:m=!1,disableGutters:c=!1,divider:f=!1,focusVisibleClassName:T,selected:v=!1,className:N}=o,h=B(o,Je),a=x.useContext(q),b=x.useMemo(()=>({dense:m||a.dense||!1,alignItems:s,disableGutters:c}),[s,a.dense,m,c]),I=x.useRef(null);De(()=>{u&&I.current&&I.current.focus()},[u]);const k=g({},o,{alignItems:s,dense:b.dense,disableGutters:c,divider:f,selected:v}),w=Qe(k),R=se(I,n);return e.jsx(q.Provider,{value:b,children:e.jsx(et,g({ref:R,href:h.href||h.to,component:(h.href||h.to)&&p==="div"?"button":p,focusVisibleClassName:$(w.focusVisible,T),ownerState:k,className:$(w.root,N)},h,{classes:w,children:C}))})}),rt=tt,W=t=>e.jsxs("svg",{...t,width:"30",height:"33",viewBox:"0 0 30 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.80432 14.0604L20.8862 6.64159",stroke:"#F8F9FA"}),e.jsx("path",{d:"M25.2369 8.80366L25.2369 23.9155",stroke:"#F8F9FA"}),e.jsx("path",{d:"M7.62979 19.3677L20.5417 26.9974",stroke:"#F8F9FA"}),e.jsx("circle",{cx:"24.65",cy:"4.69524",r:"4.19524",stroke:"#F8F9FA"}),e.jsx("circle",{cx:"24.65",cy:"28.1713",r:"4.19524",stroke:"#F8F9FA"}),e.jsx("circle",{cx:"4.69524",cy:"16.4335",r:"4.19524",stroke:"#F8F9FA"})]});try{W.displayName="SynapseIconWhite",W.__docgenInfo={description:"",displayName:"SynapseIconWhite",props:{}}}catch{}const z=t=>e.jsxs("svg",{width:"109",height:"15",viewBox:"0 0 109 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9.31503 2.91881C9.25595 3.01716 9.19032 3.09255 9.11809 3.145C9.05246 3.19089 8.97039 3.21384 8.87192 3.21384C8.76031 3.21384 8.62906 3.15812 8.47806 3.04666C8.32706 2.9352 8.13672 2.81392 7.90695 2.68279C7.68377 2.54511 7.41131 2.42055 7.08967 2.30909C6.77457 2.19763 6.39055 2.14191 5.9376 2.14191C5.51091 2.14191 5.13346 2.20091 4.80523 2.31892C4.48357 2.43038 4.21114 2.58445 3.98795 2.78113C3.77132 2.97782 3.60721 3.21056 3.49561 3.47937C3.38402 3.74161 3.32822 4.0268 3.32822 4.33495C3.32822 4.72832 3.42341 5.05613 3.61378 5.31837C3.81071 5.57406 4.06673 5.79371 4.38182 5.97727C4.70348 6.16082 5.06453 6.32146 5.46496 6.45914C5.87197 6.59028 6.28554 6.72796 6.70565 6.87218C7.13236 7.0164 7.54592 7.18034 7.94633 7.36389C8.35335 7.54091 8.71438 7.7671 9.02948 8.04246C9.35112 8.31782 9.60713 8.65548 9.79752 9.05539C9.99445 9.4553 10.0929 9.94701 10.0929 10.5305C10.0929 11.1468 9.98791 11.727 9.77783 12.2712C9.56775 12.8088 9.25925 13.2776 8.85223 13.6775C8.45182 14.0774 7.95618 14.3921 7.36538 14.6216C6.78112 14.8511 6.11484 14.9658 5.36649 14.9658C4.44746 14.9658 3.61378 14.8019 2.86542 14.4741C2.11707 14.1397 1.47704 13.6906 0.945312 13.1268L1.49673 12.222C1.54925 12.1499 1.61161 12.0909 1.68382 12.045C1.76259 11.9925 1.84793 11.9663 1.93983 11.9663C2.02517 11.9663 2.12036 12.0024 2.22539 12.0745C2.33698 12.14 2.46171 12.2253 2.59956 12.3302C2.73742 12.4351 2.89496 12.5498 3.0722 12.6744C3.24945 12.7989 3.44966 12.9137 3.67286 13.0186C3.90261 13.1235 4.16191 13.212 4.45075 13.2841C4.73959 13.3497 5.06453 13.3825 5.42557 13.3825C5.87852 13.3825 6.28224 13.3202 6.63672 13.1956C6.9912 13.0711 7.2899 12.8973 7.53277 12.6744C7.78224 12.4449 7.97258 12.1728 8.10388 11.8581C8.23519 11.5435 8.30082 11.1927 8.30082 10.8059C8.30082 10.3797 8.20235 10.0323 8.00542 9.76345C7.81503 9.48809 7.56231 9.25861 7.24722 9.07505C6.93212 8.8915 6.57109 8.7374 6.16408 8.61284C5.75708 8.4817 5.34352 8.35061 4.92339 8.21947C4.50326 8.0818 4.0897 7.92445 3.6827 7.74743C3.2757 7.57041 2.91466 7.34093 2.59956 7.05903C2.28447 6.77713 2.02845 6.42635 1.83152 6.00677C1.64115 5.5806 1.54596 5.05613 1.54596 4.43329C1.54596 3.93502 1.64115 3.45314 1.83152 2.98765C2.02845 2.52216 2.31073 2.10913 2.67834 1.74854C3.05251 1.38795 3.50875 1.09948 4.04703 0.883124C4.59189 0.66677 5.21551 0.558594 5.91791 0.558594C6.70565 0.558594 7.42116 0.68316 8.06449 0.932294C8.71438 1.18143 9.28549 1.54202 9.77783 2.01406L9.31503 2.91881Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M21.9847 9.19294V14.8083H20.0745V9.19294L14.9049 0.71582H16.5789C16.7496 0.71582 16.8841 0.758435 16.9826 0.843666C17.0811 0.922339 17.1664 1.02724 17.2386 1.15836L20.4683 6.63604C20.5865 6.86552 20.6948 7.08187 20.7933 7.2851C20.8917 7.48178 20.9771 7.68176 21.0493 7.88499C21.1215 7.68176 21.2035 7.48178 21.2955 7.2851C21.3874 7.08187 21.4891 6.86552 21.6007 6.63604L24.8206 1.15836C24.8797 1.04691 24.9617 0.945286 25.0668 0.853499C25.1718 0.761713 25.3064 0.71582 25.4705 0.71582H27.1543L21.9847 9.19294Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M43.6078 0.71582V14.8083H42.6527C42.5017 14.8083 42.3737 14.7821 42.2687 14.7296C42.1702 14.6772 42.0717 14.5886 41.9733 14.4641L33.8104 3.84311C33.8235 4.00701 33.8333 4.16764 33.8399 4.32499C33.8465 4.48234 33.8497 4.62985 33.8497 4.76753V14.8083H32.1758V0.71582H33.1605C33.2458 0.71582 33.318 0.722376 33.3771 0.735489C33.4361 0.742045 33.4887 0.758435 33.5346 0.784659C33.5806 0.804328 33.6265 0.83711 33.6725 0.883003C33.7184 0.92234 33.7677 0.974788 33.8202 1.04035L41.9831 11.6515C41.97 11.481 41.9569 11.3171 41.9438 11.1598C41.9372 10.9959 41.9339 10.8418 41.9339 10.6976V0.71582H43.6078Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M58.4023 9.57648L56.1868 3.84311C56.1208 3.67265 56.0519 3.47596 55.98 3.25306C55.9076 3.02359 55.8387 2.78101 55.7732 2.52532C55.6354 3.05637 55.4941 3.49891 55.3498 3.85295L53.1343 9.57648H58.4023ZM62.3804 14.8083H60.9034C60.7325 14.8083 60.5947 14.7657 60.4898 14.6805C60.3844 14.5952 60.3057 14.4871 60.2535 14.3559L58.934 10.9533H52.6026L51.2831 14.3559C51.2437 14.4739 51.1679 14.5788 51.0566 14.6706C50.9449 14.7624 50.807 14.8083 50.6431 14.8083H49.1661L54.8083 0.71582H56.7382L62.3804 14.8083Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M72.5866 8.02267C73.1317 8.02267 73.6107 7.95053 74.0243 7.80631C74.4442 7.66209 74.7958 7.46212 75.0779 7.20642C75.3669 6.94419 75.5835 6.63274 75.7277 6.27217C75.872 5.9116 75.9444 5.51493 75.9444 5.08223C75.9444 4.18403 75.6652 3.48252 75.1074 2.9777C74.556 2.47287 73.7156 2.22046 72.5866 2.22046H70.3219V8.02267H72.5866ZM72.5866 0.71582C73.4793 0.71582 74.2542 0.820719 74.9105 1.03052C75.5736 1.23376 76.1216 1.52551 76.5549 1.90576C76.9881 2.28602 77.3096 2.74495 77.5198 3.28256C77.7365 3.82016 77.8448 4.42005 77.8448 5.08223C77.8448 5.73783 77.7301 6.33772 77.5002 6.88189C77.2702 7.42607 76.9325 7.89482 76.4859 8.28819C76.0463 8.68156 75.4978 8.98972 74.8415 9.21261C74.1917 9.42896 73.4399 9.53714 72.5866 9.53714H70.3219V14.8083H68.4215V0.71582H72.5866Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M92.1441 2.91881C92.085 3.01716 92.0195 3.09255 91.9472 3.145C91.8817 3.19089 91.7995 3.21384 91.701 3.21384C91.5897 3.21384 91.4583 3.15812 91.3071 3.04666C91.1565 2.9352 90.9659 2.81392 90.736 2.68279C90.513 2.54511 90.2407 2.42055 89.9187 2.30909C89.6036 2.19763 89.2196 2.14191 88.7667 2.14191C88.3403 2.14191 87.9627 2.20091 87.6343 2.31892C87.3128 2.43038 87.0405 2.58445 86.817 2.78113C86.6004 2.97782 86.4364 3.21056 86.3247 3.47937C86.2134 3.74161 86.1573 4.0268 86.1573 4.33495C86.1573 4.72832 86.2528 5.05613 86.4428 5.31837C86.6398 5.57406 86.8958 5.79371 87.2109 5.97727C87.5329 6.16082 87.8938 6.32146 88.294 6.45914C88.7012 6.59028 89.1148 6.72796 89.5347 6.87218C89.9616 7.0164 90.3751 7.18034 90.7754 7.36389C91.1826 7.54091 91.5434 7.7671 91.8585 8.04246C92.1805 8.31782 92.4365 8.65548 92.6266 9.05539C92.8235 9.4553 92.922 9.94701 92.922 10.5305C92.922 11.1468 92.8171 11.727 92.6069 12.2712C92.3972 12.8088 92.0885 13.2776 91.6813 13.6775C91.281 14.0774 90.7852 14.3921 90.1944 14.6216C89.6105 14.8511 88.9439 14.9658 88.1956 14.9658C87.2769 14.9658 86.4428 14.8019 85.6945 14.4741C84.9461 14.1397 84.3061 13.6906 83.7744 13.1268L84.3258 12.222C84.3785 12.1499 84.441 12.0909 84.5129 12.045C84.5917 11.9925 84.6773 11.9663 84.7689 11.9663C84.8546 11.9663 84.9496 12.0024 85.0545 12.0745C85.1662 12.14 85.2908 12.2253 85.4286 12.3302C85.5665 12.4351 85.724 12.5498 85.9013 12.6744C86.0785 12.7989 86.2789 12.9137 86.5019 13.0186C86.7319 13.1235 86.9913 13.212 87.2798 13.2841C87.5688 13.3497 87.8938 13.3825 88.2546 13.3825C88.7076 13.3825 89.1113 13.3202 89.4658 13.1956C89.8203 13.0711 90.1191 12.8973 90.3618 12.6744C90.6115 12.4449 90.802 12.1728 90.9329 11.8581C91.0644 11.5435 91.1299 11.1927 91.1299 10.8059C91.1299 10.3797 91.0314 10.0323 90.8345 9.76345C90.6444 9.48809 90.3914 9.25861 90.0763 9.07505C89.7612 8.8915 89.4003 8.7374 88.9931 8.61284C88.5865 8.4817 88.1729 8.35061 87.7525 8.21947C87.3325 8.0818 86.9189 7.92445 86.5118 7.74743C86.1051 7.57041 85.7437 7.34093 85.4286 7.05903C85.1135 6.77713 84.8575 6.42635 84.6606 6.00677C84.4705 5.5806 84.375 5.05613 84.375 4.43329C84.375 3.93502 84.4705 3.45314 84.6606 2.98765C84.8575 2.52216 85.1401 2.10913 85.5074 1.74854C85.8816 1.38795 86.338 1.09948 86.8761 0.883124C87.4211 0.66677 88.0449 0.558594 88.747 0.558594C89.5347 0.558594 90.2506 0.68316 90.8936 0.932294C91.5435 1.18143 92.1146 1.54202 92.6069 2.01406L92.1441 2.91881Z",fill:"#F8F9FA"}),e.jsx("path",{d:"M108.999 13.2545L108.989 14.8083H100.295V0.71582H108.989V2.26963H102.205V6.95073H107.699V8.44554H102.205V13.2545H108.999Z",fill:"#F8F9FA"})]});try{z.displayName="SynapseLogoName",z.__docgenInfo={description:"",displayName:"SynapseLogoName",props:{}}}catch{}const ee={queryTerm:[],booleanQuery:[{key:"node_type",value:"project"}],facetOptions:[{name:"EntityType",maxResultCount:300,sortType:"COUNT"},{name:"Consortium",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedOn",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedBy",maxResultCount:300,sortType:"COUNT"},{name:"CreatedOn",maxResultCount:300,sortType:"COUNT"},{name:"Tissue",maxResultCount:300,sortType:"COUNT"},{name:"CreatedBy",maxResultCount:300,sortType:"COUNT"}],start:0,size:30},F=t=>{const{tooltip:r,iconName:n,onClickOpenNavMenu:o,onClickGoToUrl:s,additionalChildren:u,badgeContent:p,isCurrentlySelectedItem:C=!1,handleDrawerClose:m,handleDrawerOpen:c}=t,f=C||s?m:()=>{c(o)},T=n?e.jsxs(e.Fragment,{children:[e.jsx(H,{icon:n})," ",u," "]}):u,v=e.jsx(le,{title:r,placement:"right",children:e.jsx(rt,{onClick:f,className:"SRC-whiteText",selected:C,children:e.jsx(_e,{badgeContent:p,color:"secondary",children:T})},n)});return s?e.jsx("li",{children:e.jsx("a",{href:s,rel:"noopener noreferrer",className:"SRC-whiteText",children:v})}):e.jsx("li",{children:v})},te=({initIsOpen:t=!1,signoutCallback:r})=>{const[n,o]=x.useState(t),[s,u]=x.useState(),[p,C]=x.useState(""),[m,c]=x.useState(""),[f,T]=x.useState(!1),{accessToken:v}=xe(),N=!!v,{data:h}=ge(),a=N&&h?h.userProfile:void 0,{data:b}=we({enabled:N}),I=b==null?void 0:b.totalNumberOfFiles,{data:k}=je({submissionState:ue.SUBMITTED,sort:[{field:fe.CREATED_ON,direction:he.DESC}]},{enabled:h==null?void 0:h.isARReviewer});let w=(k==null?void 0:k.pages[0].results.length)??0;k!=null&&k.pages[0].nextPageToken&&(w=`${w}+`);const R=async()=>{r?r():(await ye.signOut(),window.location.reload())},y=d=>{o(!0),u(d)},l=()=>{o(!1),u(void 0)},j=d=>{ee.queryTerm=d.split(/[ ,]+/),window.location.href=`/Search:${encodeURI(JSON.stringify(ee))}`},O=ve("/authenticated/myaccount");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"SynapseNavDrawer",children:[e.jsxs(Q,{variant:"permanent",className:`SynapseNavDrawerMenu ${n?"tempDrawerOpen":""}`,children:[e.jsx("div",{onClick:l,children:e.jsx("a",{className:"synapseIcon",rel:"noopener noreferrer",href:"/Home:0","aria-label":"Synapse Home",children:e.jsx(W,{})})}),e.jsxs(X,{children:[N&&a&&e.jsxs(e.Fragment,{children:[e.jsx(F,{tooltip:"Projects",iconName:"dashboard",onClickOpenNavMenu:0,isCurrentlySelectedItem:s==0,handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Favorites",iconName:"favTwoTone",onClickGoToUrl:`/Profile:${a.ownerId}/favorites`,handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Teams",iconName:"peopleTwoTone",onClickGoToUrl:`/Profile:${a.ownerId}/teams`,handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Challenges",iconName:"challengesTwoTone",onClickGoToUrl:`/Profile:${a.ownerId}/challenges`,handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Download Cart",iconName:"download",onClickGoToUrl:"/DownloadCart:0",badgeContent:I,handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Trash Can",iconName:"delete",onClickGoToUrl:"/Trash:0",handleDrawerClose:l,handleDrawerOpen:y}),(h==null?void 0:h.isARReviewer)&&e.jsx(F,{tooltip:"Data Access Management",iconName:"accessManagement",onClickGoToUrl:"/DataAccessManagement:default/Submissions",badgeContent:w,handleDrawerClose:l,handleDrawerOpen:y})]}),e.jsx(F,{tooltip:"Search",iconName:"search",onClickGoToUrl:"/Search:",handleDrawerClose:l,handleDrawerOpen:y})]}),e.jsx("div",{className:"filler"}),e.jsxs(X,{children:[N&&a&&e.jsx(F,{tooltip:"Your Account",onClickOpenNavMenu:6,additionalChildren:e.jsx(ke,{userProfile:a,size:"AVATAR",avatarSize:"SMALL"}),isCurrentlySelectedItem:s==6,handleDrawerClose:l,handleDrawerOpen:y}),!N&&e.jsx(F,{tooltip:"Sign in",iconName:"login",onClickGoToUrl:"/LoginPlace:0",handleDrawerClose:l,handleDrawerOpen:y}),e.jsx(F,{tooltip:"Help",iconName:"helpOutlined",onClickOpenNavMenu:7,isCurrentlySelectedItem:s==7,handleDrawerClose:l,handleDrawerOpen:y})]})]}),e.jsxs(Q,{variant:"temporary",open:n,className:"SynapseNavContentDrawer",onClose:l,children:[e.jsx("div",{className:"synapseLogoNameContainer",children:e.jsx(z,{})}),e.jsxs("div",{className:"navContentContainer",children:[s==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"header projectHeader",children:"Projects"}),e.jsx(le,{title:"Create a New Project",placement:"right",children:e.jsx("a",{className:"createProjectLink",onClick:()=>{T(!0),l()},children:e.jsx(H,{icon:"addCircleOutline"})})}),e.jsxs("div",{className:"searchInputWithIcon",children:[e.jsx(H,{icon:"searchOutlined"}),e.jsx(J.Control,{type:"search",placeholder:"Search All Projects",value:p,onChange:d=>{C(d.target.value)},onKeyDown:d=>{d.key==="Enter"&&d.target.value!==""&&(C(""),l(),j(d.target.value))}})]}),e.jsxs("div",{className:"linkList",onClick:l,children:[e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/projects/all`,rel:"noopener noreferrer",children:"All"}),e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/projects/created_by_me`,rel:"noopener noreferrer",children:"Created By Me"}),e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/projects/favorites`,rel:"noopener noreferrer",children:"Favorite Projects"}),e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/projects/shared_directly_with_me`,rel:"noopener noreferrer",children:"Shared With Me"}),e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/projects/all_my_team_projects`,rel:"noopener noreferrer",children:"Team Projects"})]})]}),s==6&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"header",children:["Welcome Back,",e.jsx("br",{}),a==null?void 0:a.userName,"!"]}),e.jsxs("div",{className:"linkList",onClick:l,children:[e.jsx("a",{className:"SRC-whiteText",href:`/Profile:${a==null?void 0:a.ownerId}/profile`,rel:"noopener noreferrer",children:"View Profile"}),e.jsx("a",{className:"SRC-whiteText",href:O.toString(),target:"_blank",rel:"noopener noreferrer",children:"Account Settings"}),e.jsx("a",{className:"SRC-whiteText",href:"/Following:0",rel:"noopener noreferrer",children:"Following"}),e.jsx("a",{className:"SRC-whiteText",onClick:()=>{R()},rel:"noopener noreferrer",children:"Sign Out"})]})]}),s==7&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"header",children:"Help"}),e.jsxs("div",{className:"searchInputWithIcon",children:[e.jsx(H,{icon:"searchOutlined"}),e.jsx(J.Control,{type:"search",placeholder:"Search Synapse Documentation",value:m,onChange:d=>{c(d.target.value)},onKeyDown:d=>{d.key==="Enter"&&d.target.value!==""&&(window.open(`https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(d.target.value)}`),c(""),l())}})]}),e.jsxs("div",{className:"linkList",onClick:l,children:[e.jsx("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/Getting-Started.2055471150.html",rel:"noopener noreferrer",target:"_blank",children:"Getting Started"}),e.jsx("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/",rel:"noopener noreferrer",target:"_blank",children:"Synapse Documentation"}),e.jsx("a",{className:"SRC-whiteText",href:"/SynapseForum:default",rel:"noopener noreferrer",children:"Help Forum"}),e.jsx("a",{className:"SRC-whiteText",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",rel:"noopener noreferrer",target:"_blank",children:"Contact Us"})]})]})]})]})]}),e.jsx(Se,{onClose:()=>T(!1),isShowingModal:f})]})};try{te.displayName="SynapseNavDrawer",te.__docgenInfo={description:"Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.",displayName:"SynapseNavDrawer",props:{initIsOpen:{defaultValue:{value:"false"},description:"",name:"initIsOpen",required:!1,type:{name:"boolean"}},signoutCallback:{defaultValue:null,description:"",name:"signoutCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}export{te as S};
