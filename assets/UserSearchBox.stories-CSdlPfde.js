import{j as D}from"./jsx-runtime-Du8NFWEI.js";import{P as o}from"./index-BfyspvgH.js";import{r as re}from"./index-Dl6G-zuu.js";import"./index-bJQ9dxLr.js";import{bm as Fe}from"./SynapseClient-Dj7tMv3Y.js";import{U as qe}from"./UserOrTeamBadge-Bc8arCwr.js";import"./OrientationBanner-D9RUUnWX.js";import"./FullWidthAlert-DPoiEavU.js";import"./Alert-Aa0bm5Nm.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./styled-D9wW3ABP.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-gkOuU5-G.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./Typography-DgBbIcOX.js";import"./utils-Bdp_oNP4.js";import"./index-B6qzg4VC.js";import"./Grow-lFU1cKdF.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Drr3vXNI.js";import"./index-hJhP8EJR.js";import"./Button-CLkrjdQe.js";import"./index-CIIvWsNs.js";import"./SynapseConstants-CmcZ9bEt.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./getEndpoint-CjoHA800.js";import"./dayjs.min-d18Up55D.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";import"./UserBadge-CX5JkbEN.js";import"./Menu-C2kbcWAO.js";import"./Modal-aC3wK9dy.js";import"./Backdrop-Cf-zGjSh.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-CWcqbzO9.js";import"./List-JFp8Imct.js";import"./IconSvg-JqGqYHpW.js";import"./ErrorOutlined-CnICwQW0.js";import"./GetAppTwoTone-CEgy4oXX.js";import"./InfoOutlined-DJDm_gVQ.js";import"./useFiles-W-FSO-ir.js";import"./cloneDeep-DCoGJ7oU.js";import"./_baseClone-fSJhb1mi.js";import"./_Uint8Array-kXJ5rGjS.js";import"./_baseTimes-DoMoQz2v.js";import"./_initCloneObject-CtX8iLDk.js";import"./_defineProperty-Df4ZcNZr.js";import"./_getAllKeys-YRYHGnch.js";import"./SkeletonTable-BQt6sS0P.js";import"./times-CNSOYeu0.js";import"./identity-DKeuBCMA.js";import"./toInteger-CoOs-5Xi.js";import"./isSymbol-BzKS7Qf1.js";import"./Skeleton-1jrlRaLC.js";import"./ToastMessage-C57fs1PG.js";import"./CSSTransition-DN5fTu4E.js";import"./hasClass-D5ZjVvBY.js";import"./uniqueId-CSw6ftlJ.js";import"./toString-CYyvKWOl.js";import"./Divider-DJ8WkHe7.js";import"./dividerClasses-B5r-ooM0.js";import"./MenuItem-Dw5ZhG7D.js";import"./Card-BPGAXijX.js";import"./Avatar-VbBYm8Q1.js";import"./TeamBadge-CRyG42qR.js";function ge(i){return typeof i=="object"&&i!=null&&i.nodeType===1}function me(i,s){return(!s||i!=="hidden")&&i!=="visible"&&i!=="clip"}function se(i,s){if(i.clientHeight<i.scrollHeight||i.clientWidth<i.scrollWidth){var t=getComputedStyle(i,null);return me(t.overflowY,s)||me(t.overflowX,s)||function(e){var u=function(d){if(!d.ownerDocument||!d.ownerDocument.defaultView)return null;try{return d.ownerDocument.defaultView.frameElement}catch{return null}}(e);return!!u&&(u.clientHeight<e.scrollHeight||u.clientWidth<e.scrollWidth)}(i)}return!1}function X(i,s,t,e,u,d,h,p){return d<i&&h>s||d>i&&h<s?0:d<=i&&p<=t||h>=s&&p>=t?d-i-e:h>s&&p<t||d<i&&p>t?h-s+u:0}var Ye=function(i,s){var t=window,e=s.scrollMode,u=s.block,d=s.inline,h=s.boundary,p=s.skipOverflowHiddenElements,C=typeof h=="function"?h:function(_e){return _e!==h};if(!ge(i))throw new TypeError("Invalid target");for(var I,w,n=document.scrollingElement||document.documentElement,r=[],l=i;ge(l)&&C(l);){if((l=(w=(I=l).parentElement)==null?I.getRootNode().host||null:w)===n){r.push(l);break}l!=null&&l===document.body&&se(l)&&!se(document.documentElement)||l!=null&&se(l,p)&&r.push(l)}for(var a=t.visualViewport?t.visualViewport.width:innerWidth,c=t.visualViewport?t.visualViewport.height:innerHeight,f=window.scrollX||pageXOffset,m=window.scrollY||pageYOffset,g=i.getBoundingClientRect(),S=g.height,v=g.width,H=g.top,E=g.right,A=g.bottom,P=g.left,x=u==="start"||u==="nearest"?H:u==="end"?A:H+S/2,b=d==="center"?P+v/2:d==="end"?E:P,ee=[],te=0;te<r.length;te++){var y=r[te],V=y.getBoundingClientRect(),K=V.height,U=V.width,W=V.top,ne=V.right,ie=V.bottom,k=V.left;if(e==="if-needed"&&H>=0&&P>=0&&A<=c&&E<=a&&H>=W&&A<=ie&&P>=k&&E<=ne)return ee;var $=getComputedStyle(y),j=parseInt($.borderLeftWidth,10),B=parseInt($.borderTopWidth,10),_=parseInt($.borderRightWidth,10),F=parseInt($.borderBottomWidth,10),N=0,R=0,q="offsetWidth"in y?y.offsetWidth-y.clientWidth-j-_:0,Y="offsetHeight"in y?y.offsetHeight-y.clientHeight-B-F:0,de="offsetWidth"in y?y.offsetWidth===0?0:U/y.offsetWidth:0,he="offsetHeight"in y?y.offsetHeight===0?0:K/y.offsetHeight:0;if(n===y)N=u==="start"?x:u==="end"?x-c:u==="nearest"?X(m,m+c,c,B,F,m+x,m+x+S,S):x-c/2,R=d==="start"?b:d==="center"?b-a/2:d==="end"?b-a:X(f,f+a,a,j,_,f+b,f+b+v,v),N=Math.max(0,N+m),R=Math.max(0,R+f);else{N=u==="start"?x-W-B:u==="end"?x-ie+F+Y:u==="nearest"?X(W,ie,K,B,F+Y,x,x+S,S):x-(W+K/2)+Y/2,R=d==="start"?b-k-j:d==="center"?b-(k+U/2)+q/2:d==="end"?b-ne+_+q:X(k,ne,U,j,_+q,b,b+v,v);var pe=y.scrollLeft,ce=y.scrollTop;x+=ce-(N=Math.max(0,Math.min(ce+N/he,y.scrollHeight-K/he+Y))),b+=pe-(R=Math.max(0,Math.min(pe+R/de,y.scrollWidth-U/de+q)))}ee.push({el:y,top:N,left:R})}return ee},J=function(){return J=Object.assign||function(s){for(var t,e=1,u=arguments.length;e<u;e++){t=arguments[e];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(s[d]=t[d])}return s},J.apply(this,arguments)};let Xe=0;function fe(i){return typeof i=="function"?i:M}function M(){}function Ce(i,s){if(!i)return;Ye(i,{boundary:s,block:"nearest",scrollMode:"if-needed"}).forEach(e=>{let{el:u,top:d,left:h}=e;u.scrollTop=d,u.scrollLeft=h})}function Ie(i,s,t){return i===s||s instanceof t.Node&&i.contains&&i.contains(s)}function ae(i,s){let t;function e(){t&&clearTimeout(t)}function u(){for(var d=arguments.length,h=new Array(d),p=0;p<d;p++)h[p]=arguments[p];e(),t=setTimeout(()=>{t=null,i(...h)},s)}return u.cancel=e,u}function O(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return function(e){for(var u=arguments.length,d=new Array(u>1?u-1:0),h=1;h<u;h++)d[h-1]=arguments[h];return s.some(p=>(p&&p(e,...d),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault))}}function ve(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return e=>{s.forEach(u=>{typeof u=="function"?u(e):u&&(u.current=e)})}}function ze(){return String(Xe++)}function Ee(i){let{isOpen:s,resultCount:t,previousResultCount:e}=i;return s?t?t!==e?`${t} result${t===1?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`:"":"No results are available.":""}function ye(i,s){return i=Array.isArray(i)?i[0]:i,!i&&s?s:i}function Qe(i){return typeof i.type=="string"}function Ze(i){return i.props}const Ge=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function z(i){i===void 0&&(i={});const s={};return Ge.forEach(t=>{i.hasOwnProperty(t)&&(s[t]=i[t])}),s}function Je(i,s){return Object.keys(i).reduce((t,e)=>(t[e]=le(s,e)?s[e]:i[e],t),{})}function le(i,s){return i[s]!==void 0}function Se(i){const{key:s,keyCode:t}=i;return t>=37&&t<=40&&s.indexOf("Arrow")!==0?`Arrow${s}`:s}function oe(i,s,t,e,u){if(u===void 0&&(u=!0),t===0)return-1;const d=t-1;(typeof s!="number"||s<0||s>=t)&&(s=i>0?-1:d+1);let h=s+i;h<0?h=u?d:0:h>d&&(h=u?0:d);const p=L(i,h,t,e,u);return p===-1?s>=t?-1:s:p}function L(i,s,t,e,u){const d=e(s);if(!d||!d.hasAttribute("disabled"))return s;if(i>0){for(let h=s+1;h<t;h++)if(!e(h).hasAttribute("disabled"))return h}else for(let h=s-1;h>=0;h--)if(!e(h).hasAttribute("disabled"))return h;return u?i>0?L(1,0,t,e,!1):L(-1,t-1,t,e,!1):-1}function we(i,s,t,e){return e===void 0&&(e=!0),s.some(u=>u&&(Ie(u,i,t)||e&&Ie(u,t.document.activeElement,t)))}const et=ae(i=>{De(i).textContent=""},500);function Oe(i,s){const t=De(s);i&&(t.textContent=i,et(s))}function De(i){i===void 0&&(i=document);let s=i.getElementById("a11y-status-message");return s||(s=i.createElement("div"),s.setAttribute("id","a11y-status-message"),s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.setAttribute("aria-relevant","additions text"),Object.assign(s.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),i.body.appendChild(s),s)}const Me=0,Ae=1,Ne=2,Z=3,G=4,Re=5,Pe=6,Ve=7,Te=8,Le=9,Ke=10,Ue=11,We=12,ke=13,$e=14,je=15,Be=16;var tt=Object.freeze({__proto__:null,unknown:Me,mouseUp:Ae,itemMouseEnter:Ne,keyDownArrowUp:Z,keyDownArrowDown:G,keyDownEscape:Re,keyDownEnter:Pe,keyDownHome:Ve,keyDownEnd:Te,clickItem:Le,blurInput:Ke,changeInput:Ue,keyDownSpaceButton:We,clickButton:ke,blurButton:$e,controlledPropUpdatedSelectedItem:je,touchEnd:Be});const nt=(()=>{class i extends re.Component{constructor(t){var e;super(t),e=this,this.id=this.props.id||`downshift-${ze()}`,this.menuId=this.props.menuId||`${this.id}-menu`,this.labelId=this.props.labelId||`${this.id}-label`,this.inputId=this.props.inputId||`${this.id}-input`,this.getItemId=this.props.getItemId||(n=>`${this.id}-item-${n}`),this.input=null,this.items=[],this.itemCount=null,this.previousResultCount=0,this.timeoutIds=[],this.internalSetTimeout=(n,r)=>{const l=setTimeout(()=>{this.timeoutIds=this.timeoutIds.filter(a=>a!==l),n()},r);this.timeoutIds.push(l)},this.setItemCount=n=>{this.itemCount=n},this.unsetItemCount=()=>{this.itemCount=null},this.setHighlightedIndex=function(n,r){n===void 0&&(n=e.props.defaultHighlightedIndex),r===void 0&&(r={}),r=z(r),e.internalSetState({highlightedIndex:n,...r})},this.clearSelection=n=>{this.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:this.props.defaultHighlightedIndex,isOpen:this.props.defaultIsOpen},n)},this.selectItem=(n,r,l)=>{r=z(r),this.internalSetState({isOpen:this.props.defaultIsOpen,highlightedIndex:this.props.defaultHighlightedIndex,selectedItem:n,inputValue:this.props.itemToString(n),...r},l)},this.selectItemAtIndex=(n,r,l)=>{const a=this.items[n];a!=null&&this.selectItem(a,r,l)},this.selectHighlightedItem=(n,r)=>this.selectItemAtIndex(this.getState().highlightedIndex,n,r),this.internalSetState=(n,r)=>{let l,a;const c={},f=typeof n=="function";return!f&&n.hasOwnProperty("inputValue")&&this.props.onInputValueChange(n.inputValue,{...this.getStateAndHelpers(),...n}),this.setState(m=>{m=this.getState(m);let g=f?n(m):n;g=this.props.stateReducer(m,g),l=g.hasOwnProperty("selectedItem");const S={};return l&&g.selectedItem!==m.selectedItem&&(a=g.selectedItem),g.type=g.type||Me,Object.keys(g).forEach(v=>{m[v]!==g[v]&&(c[v]=g[v]),v!=="type"&&(g[v],le(this.props,v)||(S[v]=g[v]))}),f&&g.hasOwnProperty("inputValue")&&this.props.onInputValueChange(g.inputValue,{...this.getStateAndHelpers(),...g}),S},()=>{fe(r)(),Object.keys(c).length>1&&this.props.onStateChange(c,this.getStateAndHelpers()),l&&this.props.onSelect(n.selectedItem,this.getStateAndHelpers()),a!==void 0&&this.props.onChange(a,this.getStateAndHelpers()),this.props.onUserAction(c,this.getStateAndHelpers())})},this.rootRef=n=>this._rootNode=n,this.getRootProps=function(n,r){let{refKey:l="ref",ref:a,...c}=n===void 0?{}:n,{suppressRefError:f=!1}=r===void 0?{}:r;e.getRootProps.called=!0,e.getRootProps.refKey=l,e.getRootProps.suppressRefError=f;const{isOpen:m}=e.getState();return{[l]:ve(a,e.rootRef),role:"combobox","aria-expanded":m,"aria-haspopup":"listbox","aria-owns":m?e.menuId:null,"aria-labelledby":e.labelId,...c}},this.keyDownHandlers={ArrowDown(n){if(n.preventDefault(),this.getState().isOpen){const r=n.shiftKey?5:1;this.moveHighlightedIndex(r,{type:G})}else this.internalSetState({isOpen:!0,type:G},()=>{const r=this.getItemCount();if(r>0){const{highlightedIndex:l}=this.getState(),a=oe(1,l,r,c=>this.getItemNodeFromIndex(c));this.setHighlightedIndex(a,{type:G})}})},ArrowUp(n){if(n.preventDefault(),this.getState().isOpen){const r=n.shiftKey?-5:-1;this.moveHighlightedIndex(r,{type:Z})}else this.internalSetState({isOpen:!0,type:Z},()=>{const r=this.getItemCount();if(r>0){const{highlightedIndex:l}=this.getState(),a=oe(-1,l,r,c=>this.getItemNodeFromIndex(c));this.setHighlightedIndex(a,{type:Z})}})},Enter(n){if(n.which===229)return;const{isOpen:r,highlightedIndex:l}=this.getState();if(r&&l!=null){n.preventDefault();const a=this.items[l],c=this.getItemNodeFromIndex(l);if(a==null||c&&c.hasAttribute("disabled"))return;this.selectHighlightedItem({type:Pe})}},Escape(n){n.preventDefault(),this.reset({type:Re,...!this.state.isOpen&&{selectedItem:null,inputValue:""}})}},this.buttonKeyDownHandlers={...this.keyDownHandlers," "(n){n.preventDefault(),this.toggleMenu({type:We})}},this.inputKeyDownHandlers={...this.keyDownHandlers,Home(n){const{isOpen:r}=this.getState();if(!r)return;n.preventDefault();const l=this.getItemCount();if(l<=0||!r)return;const a=L(1,0,l,c=>this.getItemNodeFromIndex(c),!1);this.setHighlightedIndex(a,{type:Ve})},End(n){const{isOpen:r}=this.getState();if(!r)return;n.preventDefault();const l=this.getItemCount();if(l<=0||!r)return;const a=L(-1,l-1,l,c=>this.getItemNodeFromIndex(c),!1);this.setHighlightedIndex(a,{type:Te})}},this.getToggleButtonProps=function(n){let{onClick:r,onPress:l,onKeyDown:a,onKeyUp:c,onBlur:f,...m}=n===void 0?{}:n;const{isOpen:g}=e.getState(),S={onClick:O(r,e.buttonHandleClick),onKeyDown:O(a,e.buttonHandleKeyDown),onKeyUp:O(c,e.buttonHandleKeyUp),onBlur:O(f,e.buttonHandleBlur)},v=m.disabled?{}:S;return{type:"button",role:"button","aria-label":g?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0,...v,...m}},this.buttonHandleKeyUp=n=>{n.preventDefault()},this.buttonHandleKeyDown=n=>{const r=Se(n);this.buttonKeyDownHandlers[r]&&this.buttonKeyDownHandlers[r].call(this,n)},this.buttonHandleClick=n=>{n.preventDefault(),this.props.environment.document.activeElement===this.props.environment.document.body&&n.target.focus(),this.internalSetTimeout(()=>this.toggleMenu({type:ke}))},this.buttonHandleBlur=n=>{const r=n.target;this.internalSetTimeout(()=>{!this.isMouseDown&&(this.props.environment.document.activeElement==null||this.props.environment.document.activeElement.id!==this.inputId)&&this.props.environment.document.activeElement!==r&&this.reset({type:$e})})},this.getLabelProps=n=>({htmlFor:this.inputId,id:this.labelId,...n}),this.getInputProps=function(n){let{onKeyDown:r,onBlur:l,onChange:a,onInput:c,onChangeText:f,...m}=n===void 0?{}:n,g,S={};g="onChange";const{inputValue:v,isOpen:H,highlightedIndex:E}=e.getState();return m.disabled||(S={[g]:O(a,c,e.inputHandleChange),onKeyDown:O(r,e.inputHandleKeyDown),onBlur:O(l,e.inputHandleBlur)}),{"aria-autocomplete":"list","aria-activedescendant":H&&typeof E=="number"&&E>=0?e.getItemId(E):null,"aria-controls":H?e.menuId:null,"aria-labelledby":e.labelId,autoComplete:"off",value:v,id:e.inputId,...S,...m}},this.inputHandleKeyDown=n=>{const r=Se(n);r&&this.inputKeyDownHandlers[r]&&this.inputKeyDownHandlers[r].call(this,n)},this.inputHandleChange=n=>{this.internalSetState({type:Ue,isOpen:!0,inputValue:n.target.value,highlightedIndex:this.props.defaultHighlightedIndex})},this.inputHandleBlur=()=>{this.internalSetTimeout(()=>{const n=this.props.environment.document&&!!this.props.environment.document.activeElement&&!!this.props.environment.document.activeElement.dataset&&this.props.environment.document.activeElement.dataset.toggle&&this._rootNode&&this._rootNode.contains(this.props.environment.document.activeElement);!this.isMouseDown&&!n&&this.reset({type:Ke})})},this.menuRef=n=>{this._menuNode=n},this.getMenuProps=function(n,r){let{refKey:l="ref",ref:a,...c}=n===void 0?{}:n,{suppressRefError:f=!1}=r===void 0?{}:r;return e.getMenuProps.called=!0,e.getMenuProps.refKey=l,e.getMenuProps.suppressRefError=f,{[l]:ve(a,e.menuRef),role:"listbox","aria-labelledby":c&&c["aria-label"]?null:e.labelId,id:e.menuId,...c}},this.getItemProps=function(n){let{onMouseMove:r,onMouseDown:l,onClick:a,onPress:c,index:f,item:m=void 0,...g}=n===void 0?{}:n;f===void 0?(e.items.push(m),f=e.items.indexOf(m)):e.items[f]=m;const S="onClick",v=a,H={onMouseMove:O(r,()=>{f!==e.getState().highlightedIndex&&(e.setHighlightedIndex(f,{type:Ne}),e.avoidScrolling=!0,e.internalSetTimeout(()=>e.avoidScrolling=!1,250))}),onMouseDown:O(l,A=>{A.preventDefault()}),[S]:O(v,()=>{e.selectItemAtIndex(f,{type:Le})})},E=g.disabled?{onMouseDown:H.onMouseDown}:H;return{id:e.getItemId(f),role:"option","aria-selected":e.getState().highlightedIndex===f,...E,...g}},this.clearItems=()=>{this.items=[]},this.reset=function(n,r){n===void 0&&(n={}),n=z(n),e.internalSetState(l=>{let{selectedItem:a}=l;return{isOpen:e.props.defaultIsOpen,highlightedIndex:e.props.defaultHighlightedIndex,inputValue:e.props.itemToString(a),...n}},r)},this.toggleMenu=function(n,r){n===void 0&&(n={}),n=z(n),e.internalSetState(l=>{let{isOpen:a}=l;return{isOpen:!a,...a&&{highlightedIndex:e.props.defaultHighlightedIndex},...n}},()=>{const{isOpen:l,highlightedIndex:a}=e.getState();l&&e.getItemCount()>0&&typeof a=="number"&&e.setHighlightedIndex(a,n),fe(r)()})},this.openMenu=n=>{this.internalSetState({isOpen:!0},n)},this.closeMenu=n=>{this.internalSetState({isOpen:!1},n)},this.updateStatus=ae(()=>{const n=this.getState(),r=this.items[n.highlightedIndex],l=this.getItemCount(),a=this.props.getA11yStatusMessage({itemToString:this.props.itemToString,previousResultCount:this.previousResultCount,resultCount:l,highlightedItem:r,...n});this.previousResultCount=l,Oe(a,this.props.environment.document)},200);const{defaultHighlightedIndex:u,initialHighlightedIndex:d=u,defaultIsOpen:h,initialIsOpen:p=h,initialInputValue:C="",initialSelectedItem:I=null}=this.props,w=this.getState({highlightedIndex:d,isOpen:p,inputValue:C,selectedItem:I});w.selectedItem!=null&&this.props.initialInputValue===void 0&&(w.inputValue=this.props.itemToString(w.selectedItem)),this.state=w}internalClearTimeouts(){this.timeoutIds.forEach(t=>{clearTimeout(t)}),this.timeoutIds=[]}getState(t){return t===void 0&&(t=this.state),Je(t,this.props)}getItemCount(){let t=this.items.length;return this.itemCount!=null?t=this.itemCount:this.props.itemCount!==void 0&&(t=this.props.itemCount),t}getItemNodeFromIndex(t){return this.props.environment.document.getElementById(this.getItemId(t))}scrollHighlightedItemIntoView(){{const t=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(t,this._menuNode)}}moveHighlightedIndex(t,e){const u=this.getItemCount(),{highlightedIndex:d}=this.getState();if(u>0){const h=oe(t,d,u,p=>this.getItemNodeFromIndex(p));this.setHighlightedIndex(h,e)}}getStateAndHelpers(){const{highlightedIndex:t,inputValue:e,selectedItem:u,isOpen:d}=this.getState(),{itemToString:h}=this.props,{id:p}=this,{getRootProps:C,getToggleButtonProps:I,getLabelProps:w,getMenuProps:n,getInputProps:r,getItemProps:l,openMenu:a,closeMenu:c,toggleMenu:f,selectItem:m,selectItemAtIndex:g,selectHighlightedItem:S,setHighlightedIndex:v,clearSelection:H,clearItems:E,reset:A,setItemCount:P,unsetItemCount:x,internalSetState:b}=this;return{getRootProps:C,getToggleButtonProps:I,getLabelProps:w,getMenuProps:n,getInputProps:r,getItemProps:l,reset:A,openMenu:a,closeMenu:c,toggleMenu:f,selectItem:m,selectItemAtIndex:g,selectHighlightedItem:S,setHighlightedIndex:v,clearSelection:H,clearItems:E,setItemCount:P,unsetItemCount:x,setState:b,itemToString:h,id:p,highlightedIndex:t,inputValue:e,isOpen:d,selectedItem:u}}componentDidMount(){{const t=()=>{this.isMouseDown=!0},e=C=>{this.isMouseDown=!1,!we(C.target,[this._rootNode,this._menuNode],this.props.environment)&&this.getState().isOpen&&this.reset({type:Ae},()=>this.props.onOuterClick(this.getStateAndHelpers()))},u=()=>{this.isTouchMove=!1},d=()=>{this.isTouchMove=!0},h=C=>{const I=we(C.target,[this._rootNode,this._menuNode],this.props.environment,!1);!this.isTouchMove&&!I&&this.getState().isOpen&&this.reset({type:Be},()=>this.props.onOuterClick(this.getStateAndHelpers()))},{environment:p}=this.props;p.addEventListener("mousedown",t),p.addEventListener("mouseup",e),p.addEventListener("touchstart",u),p.addEventListener("touchmove",d),p.addEventListener("touchend",h),this.cleanup=()=>{this.internalClearTimeouts(),this.updateStatus.cancel(),p.removeEventListener("mousedown",t),p.removeEventListener("mouseup",e),p.removeEventListener("touchstart",u),p.removeEventListener("touchmove",d),p.removeEventListener("touchend",h)}}}shouldScroll(t,e){const{highlightedIndex:u}=this.props.highlightedIndex===void 0?this.getState():this.props,{highlightedIndex:d}=e.highlightedIndex===void 0?t:e;return u&&this.getState().isOpen&&!t.isOpen||u!==d}componentDidUpdate(t,e){le(this.props,"selectedItem")&&this.props.selectedItemChanged(t.selectedItem,this.props.selectedItem)&&this.internalSetState({type:je,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(e,t)&&this.scrollHighlightedItemIntoView(),this.updateStatus()}componentWillUnmount(){this.cleanup()}render(){const t=ye(this.props.children,M);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;const e=ye(t(this.getStateAndHelpers()));if(!e)return null;if(this.getRootProps.called||this.props.suppressRefError)return e;if(Qe(e))return re.cloneElement(e,this.getRootProps(Ze(e)))}}return i.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:Ee,itemToString:s=>s==null?"":String(s),onStateChange:M,onInputValueChange:M,onUserAction:M,onChange:M,onSelect:M,onOuterClick:M,selectedItemChanged:(s,t)=>s!==t,environment:typeof window>"u"?{}:window,stateReducer:(s,t)=>t,suppressRefError:!1,scrollIntoView:Ce},i.stateChangeTypes=tt,i})();var it=nt;function st(i,s){return s.changes}function ot(i){const{selectedItem:s,itemToString:t}=i;return s?`${t(s)} has been selected.`:""}ae((i,s)=>{Oe(i(),s)},200);function rt(i){return i?String(i):""}const T={itemToString:rt,stateReducer:st,getA11ySelectionMessage:ot,scrollIntoView:Ce,circularNavigation:!1,environment:typeof window>"u"?{}:window};o.array.isRequired,o.func,o.func,o.func,o.bool,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.func,o.string,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});function lt(i){var s=i.isOpen,t=i.resultCount,e=i.previousResultCount;return s?t?t!==e?"".concat(t," result").concat(t===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}J(J({},T),{getA11yStatusMessage:lt});o.array.isRequired,o.func,o.func,o.func,o.bool,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.string,o.string,o.string,o.func,o.string,o.string,o.func,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});({...T});function ut(i){const{removedSelectedItem:s,itemToString:t}=i;return`${t(s)} has been removed.`}o.array,o.array,o.array,o.func,o.func,o.func,o.number,o.number,o.number,o.func,o.func,o.string,o.string,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});T.itemToString,T.stateReducer,T.environment;const ue=i=>{const{id:s,onSelectCallback:t,filterUserIds:e,typeFilter:u}=i,[d,h]=re.useState([]),p=async I=>{try{const w=await Fe(I,u),n=e!=null&&e.length?w.children.filter(r=>!e.includes(r.ownerId)):w.children;h(n)}catch(w){console.log("onInputValueChange",w)}},C=I=>{t&&t(I)};return D.jsx(D.Fragment,{children:D.jsx(it,{onInputValueChange:I=>{p(I)},onChange:I=>C(I),itemToString:I=>I!=null&&I.name?I.name:"",children:({getInputProps:I,getMenuProps:w,getItemProps:n,isOpen:r,inputValue:l})=>D.jsxs("div",{className:"user-search-box",children:[D.jsx("input",{...I({className:"form-control",id:s,type:"search",role:"searchbox",placeholder:"Enter the name..."}),style:{marginBottom:"0"}}),D.jsx("ul",{...w(),className:r?"users-visible":"",role:"list",children:r?d.filter(a=>!l||`${a.firstName} ${a.lastName}`.includes(l)||a.userName.includes(l)).map((a,c)=>D.jsx("li",{...n({key:a.ownerId,index:c,item:a}),children:D.jsx(qe,{userGroupHeader:a,disableHref:!0,showFullName:!0})},`userSearchBox-${c}`)):null})]})})})};try{ue.displayName="UserSearchBox",ue.__docgenInfo={description:"",displayName:"UserSearchBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onSelectCallback:{defaultValue:null,description:"",name:"onSelectCallback",required:!1,type:{name:"((selected: UserGroupHeader) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterUserIds:{defaultValue:null,description:"",name:"filterUserIds",required:!1,type:{name:"string[]"}}}}}catch{}const _n={title:"UI/UserSearchBox",component:ue},Q={};var xe,be,He;Q.parameters={...Q.parameters,docs:{...(xe=Q.parameters)==null?void 0:xe.docs,source:{originalSource:"{}",...(He=(be=Q.parameters)==null?void 0:be.docs)==null?void 0:He.source}}};const Fn=["Demo"];export{Q as Demo,Fn as __namedExportsOrder,_n as default};
