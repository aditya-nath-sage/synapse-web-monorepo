import{ae as $,a2 as re,a0 as me,c as ve,af as pe,ag as be}from"./DocsRenderer-PKQXORMH-kOWqo7b7.js";import{R as c,r as h,g as ne}from"./index-Dl6G-zuu.js";import{r as xe}from"./index-BXtAqCP_.js";import{c as _e}from"./_getPrototype-D0JfWhwi.js";import{t as Ee,n as we}from"./now-DfOmcgp2.js";import"./iframe-DmOVE6Xe.js";import"../sb-preview/runtime.js";import"./react-18-NkUPU0k1.js";import"./index-B6qzg4VC.js";import"./index-GEGPABih.js";import"./index-D-8MO0q_.js";import"./uniq-BEq0iSV-.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CPky23Xz.js";import"./index-DrFu-skq.js";function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(e,t){if(e==null)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(r=l[n])>=0||(a[r]=e[r]);return a}function W(e){var t=h.useRef(e),r=h.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var S=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},H=function(e){return"touches"in e},V=function(e){return e&&e.ownerDocument.defaultView||self},U=function(e,t,r){var n=e.getBoundingClientRect(),a=H(t)?function(l,i){for(var o=0;o<l.length;o++)if(l[o].identifier===i)return l[o];return l[0]}(t.touches,r):t;return{left:S((a.pageX-(n.left+V(e).pageXOffset))/n.width),top:S((a.pageY-(n.top+V(e).pageYOffset))/n.height)}},J=function(e){!H(e)&&e.preventDefault()},K=c.memo(function(e){var t=e.onMove,r=e.onKey,n=G(e,["onMove","onKey"]),a=h.useRef(null),l=W(t),i=W(r),o=h.useRef(null),u=h.useRef(!1),s=h.useMemo(function(){var x=function(p){J(p),(H(p)?p.touches.length>0:p.buttons>0)&&a.current?l(U(a.current,p,o.current)):y(!1)},I=function(){return y(!1)};function y(p){var m=u.current,_=V(a.current),C=p?_.addEventListener:_.removeEventListener;C(m?"touchmove":"mousemove",x),C(m?"touchend":"mouseup",I)}return[function(p){var m=p.nativeEvent,_=a.current;if(_&&(J(m),!function(E,N){return N&&!H(E)}(m,u.current)&&_)){if(H(m)){u.current=!0;var C=m.changedTouches||[];C.length&&(o.current=C[0].identifier)}_.focus(),l(U(_,m,o.current)),y(!0)}},function(p){var m=p.which||p.keyCode;m<37||m>40||(p.preventDefault(),i({left:m===39?.05:m===37?-.05:0,top:m===40?.05:m===38?-.05:0}))},y]},[i,l]),g=s[0],d=s[1],f=s[2];return h.useEffect(function(){return f},[f]),c.createElement("div",M({},n,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),L=function(e){return e.filter(Boolean).join(" ")},A=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,l=L(["react-colorful__pointer",e.className]);return c.createElement("div",{className:l,style:{top:100*a+"%",left:100*r+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},Ce={grad:.9,turn:360,rad:360/(2*Math.PI)},ye=function(e){return le(D(e))},D=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?b(parseInt(e.substring(6,8),16)/255,2):1}},ke=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ce[t]||1)},$e=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ne({h:ke(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ne=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},Me=function(e){return Se(oe(e))},ae=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:b(e.h),s:b(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},q=function(e){var t=ae(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},B=function(e){var t=ae(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},oe=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var l=Math.floor(t),i=n*(1-r),o=n*(1-(t-l)*r),u=n*(1-(1-t+l)*r),s=l%6;return{r:b(255*[n,o,i,i,u,n][s]),g:b(255*[u,n,n,o,i,i][s]),b:b(255*[i,i,u,n,n,o][s]),a:b(a,2)}},Re=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?le({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},T=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Se=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,l=a<1?T(b(255*a)):"";return"#"+T(t)+T(r)+T(n)+l},le=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,l=Math.max(t,r,n),i=l-Math.min(t,r,n),o=i?l===t?(r-n)/i:l===r?2+(n-t)/i:4+(t-r)/i:0;return{h:b(60*(o<0?o+6:o)),s:b(l?i/l*100:0),v:b(l/255*100),a}},ie=c.memo(function(e){var t=e.hue,r=e.onChange,n=L(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(K,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:S(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(A,{className:"react-colorful__hue-pointer",left:t/360,color:q({h:t,s:100,v:100,a:1})})))}),ue=c.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:q({h:t.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(K,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:S(t.s+100*a.left,0,100),v:S(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},c.createElement(A,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:q(t)})))}),se=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},ce=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Ie=function(e,t){return e.toLowerCase()===t.toLowerCase()||se(D(e),D(t))};function fe(e,t,r){var n=W(r),a=h.useState(function(){return e.toHsva(t)}),l=a[0],i=a[1],o=h.useRef({color:t,hsva:l});h.useEffect(function(){if(!e.equal(t,o.current.color)){var s=e.toHsva(t);o.current={hsva:s,color:t},i(s)}},[t,e]),h.useEffect(function(){var s;se(l,o.current.hsva)||e.equal(s=e.fromHsva(l),o.current.color)||(o.current={hsva:l,color:s},n(s))},[l,e,n]);var u=h.useCallback(function(s){i(function(g){return Object.assign({},g,s)})},[]);return[l,u]}var Oe=typeof window<"u"?h.useLayoutEffect:h.useEffect,He=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Q=new Map,de=function(e){Oe(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Q.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Q.set(t,r);var n=He();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Le=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,l=e.onChange,i=G(e,["className","colorModel","color","onChange"]),o=h.useRef(null);de(o);var u=fe(r,a,l),s=u[0],g=u[1],d=L(["react-colorful",t]);return c.createElement("div",M({},i,{ref:o,className:d}),c.createElement(ue,{hsva:s,onChange:g}),c.createElement(ie,{hue:s.h,onChange:g,className:"react-colorful__last-control"}))},Te={defaultColor:"000",toHsva:ye,fromHsva:function(e){return Me({h:e.h,s:e.s,v:e.v,a:1})},equal:Ie},ze=function(e){return c.createElement(Le,M({},e,{colorModel:Te}))},Pe=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},r,{a:0}))+", "+B(Object.assign({},r,{a:1}))+")"},l=L(["react-colorful__alpha",t]),i=b(100*r.a);return c.createElement("div",{className:l},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(K,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:S(r.a+o.left)})},"aria-label":"Alpha","aria-valuetext":i+"%","aria-valuenow":i,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(A,{className:"react-colorful__alpha-pointer",left:r.a,color:B(r)})))},he=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,l=e.onChange,i=G(e,["className","colorModel","color","onChange"]),o=h.useRef(null);de(o);var u=fe(r,a,l),s=u[0],g=u[1],d=L(["react-colorful",t]);return c.createElement("div",M({},i,{ref:o,className:d}),c.createElement(ue,{hsva:s,onChange:g}),c.createElement(ie,{hue:s.h,onChange:g}),c.createElement(Pe,{hsva:s,onChange:g,className:"react-colorful__last-control"}))},Be={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:$e,fromHsva:B,equal:ce},Xe=function(e){return c.createElement(he,M({},e,{colorModel:Be}))},je={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Re,fromHsva:function(e){var t=oe(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ce},We=function(e){return c.createElement(he,M({},e,{colorModel:je}))},Ve=xe();const w=ne(Ve);var De=_e,j=we,Z=Ee,qe="Expected a function",Fe=Math.max,Ge=Math.min;function Ke(e,t,r){var n,a,l,i,o,u,s=0,g=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(qe);t=Z(t)||0,De(r)&&(g=!!r.leading,d="maxWait"in r,l=d?Fe(Z(r.maxWait)||0,t):l,f="trailing"in r?!!r.trailing:f);function x(v){var k=n,O=a;return n=a=void 0,s=v,i=e.apply(O,k),i}function I(v){return s=v,o=setTimeout(m,t),g?x(v):i}function y(v){var k=v-u,O=v-s,Y=t-k;return d?Ge(Y,l-O):Y}function p(v){var k=v-u,O=v-s;return u===void 0||k>=t||k<0||d&&O>=l}function m(){var v=j();if(p(v))return _(v);o=setTimeout(m,y(v))}function _(v){return o=void 0,f&&n?x(v):(n=a=void 0,i)}function C(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function E(){return o===void 0?i:_(j())}function N(){var v=j(),k=p(v);if(n=arguments,a=this,u=v,k){if(o===void 0)return I(u);if(d)return clearTimeout(o),o=setTimeout(m,t),x(u)}return o===void 0&&(o=setTimeout(m,t)),i}return N.cancel=C,N.flush=E,N}var Ae=Ke;const Ye=ne(Ae);var Ue=$.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Je=$(re)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Qe=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ze=$(me)(({theme:e})=>({fontFamily:e.typography.fonts.base})),et=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),tt=$.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),rt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ee=({value:e,style:t,...r})=>{let n=`linear-gradient(${e}, ${e}), ${rt}, linear-gradient(#fff, #fff)`;return c.createElement(tt,{...r,style:{...t,backgroundImage:n}})},nt=$(ve.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),at=$(pe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ge=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ge||{}),z=Object.values(ge),ot=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,lt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,it=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,F=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ut=/^\s*#?([0-9a-f]{3})\s*$/i,st={hex:ze,rgb:We,hsl:Xe},P={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},te=e=>{let t=e==null?void 0:e.match(ot);if(!t)return[0,0,0,1];let[,r,n,a,l=1]=t;return[r,n,a,l].map(Number)},R=e=>{if(!e)return;let t=!0;if(lt.test(e)){let[i,o,u,s]=te(e),[g,d,f]=w.rgb.hsl([i,o,u])||[0,0,0];return{valid:t,value:e,keyword:w.rgb.keyword([i,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${g}, ${d}%, ${f}%, ${s})`,hex:`#${w.rgb.hex([i,o,u]).toLowerCase()}`}}if(it.test(e)){let[i,o,u,s]=te(e),[g,d,f]=w.hsl.rgb([i,o,u])||[0,0,0];return{valid:t,value:e,keyword:w.hsl.keyword([i,o,u]),colorSpace:"hsl",rgb:`rgba(${g}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${w.hsl.hex([i,o,u]).toLowerCase()}`}}let r=e.replace("#",""),n=w.keyword.rgb(r)||w.hex.rgb(r),a=w.rgb.hsl(n),l=e;if(/[^#a-f0-9]/i.test(e)?l=r:F.test(e)&&(l=`#${r}`),l.startsWith("#"))t=F.test(l);else try{w.keyword.hex(l)}catch{t=!1}return{valid:t,value:l,keyword:w.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:l}},ct=(e,t,r)=>{if(!e||!(t!=null&&t.valid))return P[r];if(r!=="hex")return(t==null?void 0:t[r])||P[r];if(!t.hex.startsWith("#"))try{return`#${w.keyword.hex(t.hex)}`}catch{return P.hex}let n=t.hex.match(ut);if(!n)return F.test(t.hex)?t.hex:P.hex;let[a,l,i]=n[1].split("");return`#${a}${a}${l}${l}${i}${i}`},ft=(e,t)=>{let[r,n]=h.useState(e||""),[a,l]=h.useState(()=>R(r)),[i,o]=h.useState((a==null?void 0:a.colorSpace)||"hex");h.useEffect(()=>{let d=e||"",f=R(d);n(d),l(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=h.useMemo(()=>ct(r,a,i).toLowerCase(),[r,a,i]),s=h.useCallback(d=>{let f=R(d),x=(f==null?void 0:f.value)||d||"";n(x),x===""&&(l(void 0),t(void 0)),f&&(l(f),o(f.colorSpace),t(f.value))},[t]),g=h.useCallback(()=>{let d=z.indexOf(i)+1;d>=z.length&&(d=0),o(z[d]);let f=(a==null?void 0:a[z[d]])||"";n(f),t(f)},[a,i,t]);return{value:r,realValue:u,updateValue:s,color:a,colorSpace:i,cycleColorSpace:g}},X=e=>e.replace(/\s*/,"").toLowerCase(),dt=(e,t,r)=>{let[n,a]=h.useState(t!=null&&t.valid?[t]:[]);h.useEffect(()=>{t===void 0&&a([])},[t]);let l=h.useMemo(()=>(e||[]).map(o=>typeof o=="string"?R(o):o.title?{...R(o.color),keyword:o.title}:R(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),i=h.useCallback(o=>{o!=null&&o.valid&&(l.some(u=>X(u[r])===X(o[r]))||a(u=>u.concat(o)))},[r,l]);return{presets:l,addPreset:i}},ht=({name:e,value:t,onChange:r,onFocus:n,onBlur:a,presetColors:l,startOpen:i=!1,argType:o})=>{var C;let u=h.useCallback(Ye(r,200),[r]),{value:s,realValue:g,updateValue:d,color:f,colorSpace:x,cycleColorSpace:I}=ft(t,u),{presets:y,addPreset:p}=dt(l,f,x),m=st[x],_=!!((C=o==null?void 0:o.table)!=null&&C.readonly);return c.createElement(Ue,{"aria-readonly":_},c.createElement(Je,{startOpen:i,trigger:_?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>p(f),tooltip:c.createElement(Qe,null,c.createElement(m,{color:g==="transparent"?"#000000":g,onChange:d,onFocus:n,onBlur:a}),y.length>0&&c.createElement(et,null,y.map((E,N)=>c.createElement(re,{key:`${E.value}-${N}`,hasChrome:!1,tooltip:c.createElement(Ze,{note:E.keyword||E.value})},c.createElement(ee,{value:E[x],active:f&&X(E[x])===X(f[x]),onClick:()=>d(E.value)})))))},c.createElement(ee,{value:g,style:{margin:4}})),c.createElement(nt,{id:be(e),value:s,onChange:E=>d(E.target.value),onFocus:E=>E.target.select(),readOnly:_,placeholder:"Choose color..."}),s?c.createElement(at,{onClick:I}):null)},Rt=ht;export{ht as ColorControl,Rt as default};
