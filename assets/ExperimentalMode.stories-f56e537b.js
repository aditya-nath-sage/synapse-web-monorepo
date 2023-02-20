import{a as W,j as C}from"./jsx-runtime-670450c2.js";import{r as s,R as l}from"./index-f1f749bf.js";import{dp as ie,i as se}from"./SynapseContext-34356979.js";import{E as X}from"./SynapseConstants-9273577d.js";import{u as H,c as L,B as le}from"./Button-7d415009.js";import{_ as x}from"./extends-98964cd2.js";import{_ as y}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as pe}from"./inheritsLoose-d541526f.js";import{u as ce,c as ue}from"./contains-60f9209b.js";import{u as me}from"./useWillUnmount-7fb15b8a.js";import{s as de}from"./usePopperMarginModifiers-54a691cd.js";import{a as fe}from"./hook-c05d8d9f.js";import{O as ve}from"./Overlay-8c20c2f5.js";import{a as he}from"./IconSvg-4ff66f27.js";import"./isRequiredForA11y-0a29da5f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./MenuList-cd8a71d3.js";import"./styled-8a301de6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-ef578671.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./Clear-4868d5d0.js";import"./useIsFocusVisible-14f92460.js";import"./SvgIcon-80573649.js";import"./index-1aacdabe.js";import"./isArray-a82322d9.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./FullWidthAlert-2e72abf6.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-077708db.js";import"./Typography-1aca7d5c.js";import"./emotion-react.browser.esm-9a383ad7.js";import"./Box-3a18cc2d.js";import"./ButtonBase-428d3c85.js";import"./assertThisInitialized-081f9914.js";import"./Button-ad1d45e7.js";import"./Link-3d479faf.js";import"./setPrototypeOf-0bb37fbe.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";var I=Math.pow(2,31)-1;function q(e,r,t){var o=t-Date.now();e.current=o<=I?setTimeout(r,o):setTimeout(function(){return q(e,r,t)},I)}function ge(){var e=ce(),r=s.useRef();return me(function(){return clearTimeout(r.current)}),s.useMemo(function(){var t=function(){return clearTimeout(r.current)};function o(a,i){i===void 0&&(i=0),e()&&(t(),i<=I?r.current=setTimeout(a,i):q(r,a,Date.now()+i))}return{set:o,clear:t}},[])}var xe=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"],we=function(e){pe(r,e);function r(){return e.apply(this,arguments)||this}var t=r.prototype;return t.render=function(){return this.props.children},r}(l.Component);function Ee(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function z(e,r,t){var o=r[0],a=o.currentTarget,i=o.relatedTarget||o.nativeEvent[t];(!i||i!==a)&&!ue(a,i)&&e.apply(void 0,r)}var Ce={defaultShow:!1,trigger:["hover","focus"]};function Q(e){var r=e.trigger,t=e.overlay,o=e.children,a=e.popperConfig,i=a===void 0?{}:a,m=e.show,u=e.defaultShow,O=u===void 0?!1:u,T=e.onToggle,S=e.delay,w=e.placement,v=e.flip,Z=v===void 0?w&&w.indexOf("auto")!==-1:v,_=y(e,xe),k=s.useRef(null),h=ge(),P=s.useRef(""),U=fe(m,O,T),R=U[0],d=U[1],g=Ee(S),$=typeof o!="function"?l.Children.only(o).props:{},D=$.onFocus,A=$.onBlur,B=$.onClick,ee=s.useCallback(function(){return de(k.current)},[]),b=s.useCallback(function(){if(h.clear(),P.current="show",!g.show){d(!0);return}h.set(function(){P.current==="show"&&d(!0)},g.show)},[g.show,d,h]),E=s.useCallback(function(){if(h.clear(),P.current="hide",!g.hide){d(!1);return}h.set(function(){P.current==="hide"&&d(!1)},g.hide)},[g.hide,d,h]),re=s.useCallback(function(){b();for(var p=arguments.length,c=new Array(p),n=0;n<p;n++)c[n]=arguments[n];D==null||D.apply(void 0,c)},[b,D]),oe=s.useCallback(function(){E();for(var p=arguments.length,c=new Array(p),n=0;n<p;n++)c[n]=arguments[n];A==null||A.apply(void 0,c)},[E,A]),te=s.useCallback(function(){d(!R),B&&B.apply(void 0,arguments)},[B,d,R]),ae=s.useCallback(function(){for(var p=arguments.length,c=new Array(p),n=0;n<p;n++)c[n]=arguments[n];z(b,c,"fromElement")},[b]),ne=s.useCallback(function(){for(var p=arguments.length,c=new Array(p),n=0;n<p;n++)c[n]=arguments[n];z(E,c,"toElement")},[E]),F=r==null?[]:[].concat(r),f={};return F.indexOf("click")!==-1&&(f.onClick=te),F.indexOf("focus")!==-1&&(f.onFocus=re,f.onBlur=oe),F.indexOf("hover")!==-1&&(f.onMouseOver=ae,f.onMouseOut=ne),l.createElement(l.Fragment,null,typeof o=="function"?o(x({},f,{ref:k})):l.createElement(we,{ref:k},s.cloneElement(o,f)),l.createElement(ve,x({},_,{show:R,onHide:E,flip:Z,placement:w,popperConfig:i,target:ee}),t))}Q.defaultProps=Ce;var Pe=["as","bsPrefix","className","children"],be=l.forwardRef(function(e,r){var t=e.as,o=t===void 0?"div":t,a=e.bsPrefix,i=e.className,m=e.children,u=y(e,Pe);return a=H(a,"popover-header"),l.createElement(o,x({ref:r},u,{className:L(a,i)}),m)});const Me=be;var ye=["as","bsPrefix","className","children"],Ne=l.forwardRef(function(e,r){var t=e.as,o=t===void 0?"div":t,a=e.bsPrefix,i=e.className,m=e.children,u=y(e,ye);return a=H(a,"popover-body"),l.createElement(o,x({ref:r},u,{className:L(i,a)}),m)});const V=Ne;var Oe=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],Te={placement:"right"},N=l.forwardRef(function(e,r){var t=e.bsPrefix,o=e.placement,a=e.className,i=e.style,m=e.children,u=e.content,O=e.arrowProps;e.popper,e.show;var T=y(e,Oe),S=H(t,"popover"),w=(o==null?void 0:o.split("-"))||[],v=w[0];return l.createElement("div",x({ref:r,role:"tooltip",style:i,"x-placement":v,className:L(a,S,v&&"bs-popover-"+v)},T),l.createElement("div",x({className:"arrow"},O)),u?l.createElement(V,null,m):m)});N.defaultProps=Te;N.Title=Me;N.Content=V;const G=N,j=()=>{const[e,r]=s.useState(!1),t=new ie;let o=!0;return s.useEffect(()=>(o&&se()&&r(!0),()=>{o=!1}),[]),W("span",{className:"experimental-mode-wrapper",children:[W(le,{className:"experimental-mode",variant:"link",onClick:e?()=>{document.cookie=`${X}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`,r(!1)}:()=>{t.set(X,{path:"/"}),r(!0)},children:["Experimental mode is ",e?"on":"off"]}),C(Q,{trigger:"click",placement:"top",overlay:({...u})=>C("div",{className:"bootstrap-4-backport",children:C(G,{id:"experimental-mode-popover",...u,children:C(G.Content,{children:"This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade."})})}),children:C(he,{style:{verticalAlign:"middle"}})})]})};try{j.displayName="ExperimentalMode",j.__docgenInfo={description:"",displayName:"ExperimentalMode",props:{}}}catch{}const gr={title:"Authentication/ExperimentalMode",component:j},M={};var J,K,Y;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(Y=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const xr=["Demo"];export{M as Demo,xr as __namedExportsOrder,gr as default};
//# sourceMappingURL=ExperimentalMode.stories-f56e537b.js.map
