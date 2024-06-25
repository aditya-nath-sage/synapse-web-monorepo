import{g as bt,a as pt,e as Pt,_ as rt,b as L}from"./createTheme-CcAD2pPO.js";import{_ as f}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import{r as d}from"./index-Dl6G-zuu.js";import{s as j,u as ht,c as mt}from"./styled-Sx1jgj-B.js";import{j as m}from"./jsx-runtime-Du8NFWEI.js";import{B as Lt}from"./ButtonBase-DE7aKxis.js";import{u as Nt}from"./index-DgT9Y5QJ.js";import{u as Zt}from"./utils-DkbdKabZ.js";import{a as te}from"./useForkRef-CEBgoE3Z.js";import{o as kt,d as Ft}from"./ownerWindow-BN2rbQ_G.js";import{a as lt}from"./Grow-DK1F46qr.js";import{u as ut}from"./TransitionGroupContext-DGN18uA0.js";import{c as At}from"./createSvgIcon-DSqIFKhr.js";import{o as ee}from"./ownerDocument-DW-IO8s5.js";let U;function Ot(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function oe(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(Ot()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function le(t){return pt("MuiTab",t)}const $=bt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),re=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ne=t=>{const{classes:e,textColor:r,fullWidth:i,wrapped:s,icon:c,label:h,selected:p,disabled:u}=t,x={root:["root",c&&h&&"labelIcon",`textColor${Pt(r)}`,i&&"fullWidth",s&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return mt(x,le,e)},se=j(Lt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Pt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>f({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${$.iconWrapper}`]:f({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${$.selected}`]:{opacity:1},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),De=d.forwardRef(function(e,r){const i=ht({props:e,name:"MuiTab"}),{className:s,disabled:c=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:x="top",indicator:C,label:y,onChange:v,onClick:w,onFocus:N,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:M,wrapped:nt=!1}=i,D=rt(i,re),Y=f({},i,{disabled:c,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:x,label:!!y,fullWidth:p,textColor:H,wrapped:nt}),X=ne(Y),k=u&&y&&d.isValidElement(u)?d.cloneElement(u,{className:L(X.iconWrapper,u.props.className)}):u,J=R=>{!I&&v&&v(R,M),w&&w(R)},_=R=>{g&&!I&&v&&v(R,M),N&&N(R)};return m.jsxs(se,f({focusRipple:!h,className:L(X.root,s),ref:r,role:"tab","aria-selected":I,disabled:c,onClick:J,onFocus:_,ownerState:Y,tabIndex:I?0:-1},D,{children:[x==="top"||x==="start"?m.jsxs(d.Fragment,{children:[k,y]}):m.jsxs(d.Fragment,{children:[y,k]}),C]}))}),ie=At(m.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),ae=At(m.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function ce(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function de(t,e,r,i={},s=()=>{}){const{ease:c=ce,duration:h=300}=i;let p=null;const u=e[t];let x=!1;const C=()=>{x=!0},y=v=>{if(x){s(new Error("Animation cancelled"));return}p===null&&(p=v);const w=Math.min(1,(v-p)/h);if(e[t]=c(w)*(r-u)+u,w>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(y)};return u===r?(s(new Error("Element already at target position")),C):(requestAnimationFrame(y),C)}const ue=["onChange"],fe={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function be(t){const{onChange:e}=t,r=rt(t,ue),i=d.useRef(),s=d.useRef(null),c=()=>{i.current=s.current.offsetHeight-s.current.clientHeight};return te(()=>{const h=Ft(()=>{const u=i.current;c(),u!==i.current&&e(i.current)}),p=kt(s.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{c(),e(i.current)},[e]),m.jsx("div",f({style:fe,ref:s},r))}function pe(t){return pt("MuiTabScrollButton",t)}const he=bt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),me=["className","slots","slotProps","direction","orientation","disabled"],ve=t=>{const{classes:e,orientation:r,disabled:i}=t;return mt({root:["root",r,i&&"disabled"]},pe,e)},Se=j(Lt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>f({width:40,flexShrink:0,opacity:.8,[`&.${he.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),xe=d.forwardRef(function(e,r){var i,s;const c=ht({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:x}=c,C=rt(c,me),y=Nt(),v=f({isRtl:y},c),w=ve(v),N=(i=p.StartScrollButtonIcon)!=null?i:ie,I=(s=p.EndScrollButtonIcon)!=null?s:ae,g=lt({elementType:N,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),H=lt({elementType:I,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return m.jsx(Se,f({component:"div",className:L(w.root,h),ref:r,role:null,ownerState:v,tabIndex:null},C,{children:x==="left"?m.jsx(N,f({},g)):m.jsx(I,f({},H))}))});function ge(t){return pt("MuiTabs",t)}const ft=bt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ye=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,zt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,r)=>{let i=!1,s=r(t,e);for(;s;){if(s===t.firstChild){if(i)return;i=!0}const c=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||c)s=r(t,s);else{s.focus();return}}},Be=t=>{const{vertical:e,fixed:r,hideScrollbar:i,scrollableX:s,scrollableY:c,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return mt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",i&&"hideScrollbar",s&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},ge,u)},Ce=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ft.scrollButtons}`]:e.scrollButtons},{[`& .${ft.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ft.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),we=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ie=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>f({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Te=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Ee=j(be)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Wt={},Xe=d.forwardRef(function(e,r){const i=ht({props:e,name:"MuiTabs"}),s=Zt(),c=Nt(),{"aria-label":h,"aria-labelledby":p,action:u,centered:x=!1,children:C,className:y,component:v="div",allowScrollButtonsMobile:w=!1,indicatorColor:N="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=xe,scrollButtons:M="auto",selectionFollowsFocus:nt,slots:D={},slotProps:Y={},TabIndicatorProps:X={},TabScrollButtonProps:k={},textColor:J="primary",value:_,variant:R="standard",visibleScrollbar:st=!1}=i,$t=rt(i,ye),T=R==="scrollable",B=g==="vertical",K=B?"scrollTop":"scrollLeft",Q=B?"top":"left",Z=B?"bottom":"right",it=B?"clientHeight":"clientWidth",V=B?"height":"width",F=f({},i,{component:v,allowScrollButtonsMobile:w,indicatorColor:N,orientation:g,vertical:B,scrollButtons:M,textColor:J,variant:R,visibleScrollbar:st,fixed:!T,hideScrollbar:T&&!st,scrollableX:T&&!B,scrollableY:T&&B,centered:x&&!T,scrollButtonsHideMobile:!w}),W=Be(F),jt=lt({elementType:D.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:F}),Ht=lt({elementType:D.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:F}),[vt,Dt]=d.useState(!1),[A,St]=d.useState(Wt),[xt,Xt]=d.useState(!1),[gt,_t]=d.useState(!1),[yt,Ut]=d.useState(!1),[Bt,Yt]=d.useState({overflow:"hidden",scrollbarWidth:0}),Ct=new Map,z=d.useRef(null),O=d.useRef(null),wt=()=>{const o=z.current;let l;if(o){const n=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:oe(o,c?"rtl":"ltr"),scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let a;if(o&&_!==!1){const n=O.current.children;if(n.length>0){const b=n[Ct.get(_)];a=b?b.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:a}},q=ut(()=>{const{tabsMeta:o,tabMeta:l}=wt();let a=0,n;if(B)n="top",l&&o&&(a=l.top-o.top+o.scrollTop);else if(n=c?"right":"left",l&&o){const S=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;a=(c?-1:1)*(l[n]-o[n]+S)}const b={[n]:a,[V]:l?l[V]:0};if(isNaN(A[n])||isNaN(A[V]))St(b);else{const S=Math.abs(A[n]-b[n]),E=Math.abs(A[V]-b[V]);(S>=1||E>=1)&&St(b)}}),at=(o,{animation:l=!0}={})=>{l?de(K,z.current,o,{duration:s.transitions.duration.standard}):z.current[K]=o},It=o=>{let l=z.current[K];B?l+=o:(l+=o*(c?-1:1),l*=c&&Ot()==="reverse"?-1:1),at(l)},Tt=()=>{const o=z.current[it];let l=0;const a=Array.from(O.current.children);for(let n=0;n<a.length;n+=1){const b=a[n];if(l+b[it]>o){n===0&&(l=o);break}l+=b[it]}return l},Kt=()=>{It(-1*Tt())},Vt=()=>{It(Tt())},qt=d.useCallback(o=>{Yt({overflow:null,scrollbarWidth:o})},[]),Gt=()=>{const o={};o.scrollbarSizeListener=T?m.jsx(Ee,{onChange:qt,className:L(W.scrollableX,W.hideScrollbar)}):null;const a=T&&(M==="auto"&&(xt||gt)||M===!0);return o.scrollButtonStart=a?m.jsx(H,f({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:jt},orientation:g,direction:c?"right":"left",onClick:Kt,disabled:!xt},k,{className:L(W.scrollButtons,k.className)})):null,o.scrollButtonEnd=a?m.jsx(H,f({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ht},orientation:g,direction:c?"left":"right",onClick:Vt,disabled:!gt},k,{className:L(W.scrollButtons,k.className)})):null,o},Et=ut(o=>{const{tabsMeta:l,tabMeta:a}=wt();if(!(!a||!l)){if(a[Q]<l[Q]){const n=l[K]+(a[Q]-l[Q]);at(n,{animation:o})}else if(a[Z]>l[Z]){const n=l[K]+(a[Z]-l[Z]);at(n,{animation:o})}}}),tt=ut(()=>{T&&M!==!1&&Ut(!yt)});d.useEffect(()=>{const o=Ft(()=>{z.current&&q()});let l;const a=S=>{S.forEach(E=>{E.removedNodes.forEach(G=>{var P;(P=l)==null||P.unobserve(G)}),E.addedNodes.forEach(G=>{var P;(P=l)==null||P.observe(G)})}),o(),tt()},n=kt(z.current);n.addEventListener("resize",o);let b;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(O.current.children).forEach(S=>{l.observe(S)})),typeof MutationObserver<"u"&&(b=new MutationObserver(a),b.observe(O.current,{childList:!0})),()=>{var S,E;o.clear(),n.removeEventListener("resize",o),(S=b)==null||S.disconnect(),(E=l)==null||E.disconnect()}},[q,tt]),d.useEffect(()=>{const o=Array.from(O.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&M!==!1){const a=o[0],n=o[l-1],b={root:z.current,threshold:.99},S=dt=>{Xt(!dt[0].isIntersecting)},E=new IntersectionObserver(S,b);E.observe(a);const G=dt=>{_t(!dt[0].isIntersecting)},P=new IntersectionObserver(G,b);return P.observe(n),()=>{E.disconnect(),P.disconnect()}}},[T,M,yt,C==null?void 0:C.length]),d.useEffect(()=>{Dt(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Et(Wt!==A)},[Et,A]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const Mt=m.jsx(Te,f({},X,{className:L(W.indicator,X.className),ownerState:F,style:f({},A,X.style)}));let et=0;const Jt=d.Children.map(C,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?et:o.props.value;Ct.set(l,et);const a=l===_;return et+=1,d.cloneElement(o,f({fullWidth:R==="fullWidth",indicator:a&&!vt&&Mt,selected:a,selectionFollowsFocus:nt,onChange:I,textColor:J,value:l},et===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Qt=o=>{const l=O.current,a=ee(l).activeElement;if(a.getAttribute("role")!=="tab")return;let b=g==="horizontal"?"ArrowLeft":"ArrowUp",S=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&c&&(b="ArrowRight",S="ArrowLeft"),o.key){case b:o.preventDefault(),ot(l,a,zt);break;case S:o.preventDefault(),ot(l,a,Rt);break;case"Home":o.preventDefault(),ot(l,null,Rt);break;case"End":o.preventDefault(),ot(l,null,zt);break}},ct=Gt();return m.jsxs(Ce,f({className:L(W.root,y),ownerState:F,ref:r,as:v},$t,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,m.jsxs(we,{className:W.scroller,ownerState:F,style:{overflow:Bt.overflow,[B?`margin${c?"Left":"Right"}`:"marginBottom"]:st?void 0:-Bt.scrollbarWidth},ref:z,children:[m.jsx(Ie,{"aria-label":h,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:W.flexContainer,ownerState:F,onKeyDown:Qt,ref:O,role:"tablist",children:Jt}),vt&&Mt]}),ct.scrollButtonEnd]}))});export{ae as K,Xe as T,De as a,ie as b,ft as t};
