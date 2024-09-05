import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as je}from"./index-Cu9bd8lq.js";import"./isPlainObject-BDeK4qKc.js";import"./uniq-QoZudxtQ.js";import"./_getPrototype-DSx75BAr.js";import{F as be,T as R,g as K,a as I,e as ve,f as oe,l as k,h as w,i as Fe,j as Te,t as Se,k as ie,c as _e,m as Be,A as Ce,s as Ie,n as Ae,o as ae,p as De,q as Le,r as A,u as se,w as Re}from"./index-B77M9cvK.js";import"./styled-uoyYAB-L.js";import{n as q}from"./createTheme-CFwAOJQC.js";import{r as O}from"./createSvgIcon-dpHOCPVS.js";import{I as le}from"./IconButton-rjGZl5Ij.js";import{G as S}from"./Grid-B0LRLE4N.js";import{B as L}from"./Box-tOdEuW_y.js";import{P as Y}from"./Paper-C3XTRciO.js";import{T as J,F as de}from"./TextField-CW8JUN8v.js";import{T as W}from"./Typography-Ctk8_6Bo.js";import{L as ce}from"./List-DCKeaqo7.js";import{L as ue}from"./ListItem-CRhDLg2K.js";import{L as ke,a as we}from"./ListItemText-CSuCWIOE.js";import{d as qe}from"./ContentCopy-C1M41ygd.js";import{F as Oe}from"./FormControl-D2SAlsbf.js";import{B as $e}from"./Button-BkvFhVsL.js";import{D as Me}from"./Divider-YtPnVIiX.js";import{F as Q}from"./FormControlLabel-GzIHkHAg.js";import{C as me}from"./Checkbox-x_qQJTR0.js";import{F as X}from"./InputLabel-HjQ8NhiL.js";import{F as Ve}from"./FormGroup-BMVVpVNb.js";import{R as Ee}from"./RadioGroup-C3RSOIJ5.js";import{a as We}from"./Radio-CzZtCHO7.js";import{S as Pe}from"./Slider-BDJ67xFL.js";import{M as ze}from"./MenuItem-HgtBOeWe.js";function Ne(r){return je.forwardRef(({fields:t,widgets:n,templates:o,...a},s)=>{var u;return t={...r==null?void 0:r.fields,...t},n={...r==null?void 0:r.widgets,...n},o={...r==null?void 0:r.templates,...o,ButtonTemplates:{...(u=r==null?void 0:r.templates)===null||u===void 0?void 0:u.ButtonTemplates,...o==null?void 0:o.ButtonTemplates}},e.jsx(be,{...r,...a,fields:t,widgets:n,templates:o,ref:s})})}var Z={},Ue=q;Object.defineProperty(Z,"__esModule",{value:!0});var pe=Z.default=void 0,Ge=Ue(O()),He=e;pe=Z.default=(0,Ge.default)((0,He.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");function Ke({uiSchema:r,registry:t,...n}){const{translateString:o}=t;return e.jsx(le,{title:o(R.AddItemButton),...n,color:"primary",children:e.jsx(pe,{})})}function Ye(r){const{children:t,disabled:n,hasToolbar:o,hasCopy:a,hasMoveDown:s,hasMoveUp:u,hasRemove:x,index:l,onCopyIndexClick:f,onDropIndexClick:y,onReorderClick:d,readonly:i,uiSchema:m,registry:p}=r,{CopyButton:v,MoveDownButton:b,MoveUpButton:g,RemoveButton:c}=p.templates.ButtonTemplates,T={flex:1,paddingLeft:6,paddingRight:6,fontWeight:"bold",minWidth:0};return e.jsxs(S,{container:!0,alignItems:"center",children:[e.jsx(S,{item:!0,xs:!0,style:{overflow:"auto"},children:e.jsx(L,{mb:2,children:e.jsx(Y,{elevation:2,children:e.jsx(L,{p:2,children:t})})})}),o&&e.jsxs(S,{item:!0,children:[(u||s)&&e.jsx(g,{style:T,disabled:n||i||!u,onClick:d(l,l-1),uiSchema:m,registry:p}),(u||s)&&e.jsx(b,{style:T,disabled:n||i||!s,onClick:d(l,l+1),uiSchema:m,registry:p}),a&&e.jsx(v,{style:T,disabled:n||i,onClick:f(l),uiSchema:m,registry:p}),x&&e.jsx(c,{style:T,disabled:n||i,onClick:y(l),uiSchema:m,registry:p})]})]})}function Je(r){const{canAdd:t,disabled:n,idSchema:o,uiSchema:a,items:s,onAddClick:u,readonly:x,registry:l,required:f,schema:y,title:d}=r,i=K(a),m=I("ArrayFieldDescriptionTemplate",l,i),p=I("ArrayFieldItemTemplate",l,i),v=I("ArrayFieldTitleTemplate",l,i),{ButtonTemplates:{AddButton:b}}=l.templates;return e.jsx(Y,{elevation:2,children:e.jsxs(L,{p:2,children:[e.jsx(v,{idSchema:o,title:i.title||d,schema:y,uiSchema:a,required:f,registry:l}),e.jsx(m,{idSchema:o,description:i.description||y.description,schema:y,uiSchema:a,registry:l}),s&&s.map(({key:g,...c})=>e.jsx(p,{...c},g)),t&&e.jsx(S,{container:!0,justifyContent:"flex-end",children:e.jsx(S,{item:!0,children:e.jsx(L,{mt:2,children:e.jsx(b,{className:"array-item-add",onClick:u,disabled:n||x,uiSchema:a,registry:l})})})})]})})}const Qe=["date","datetime-local","file","time"];function Xe(r){const{id:t,name:n,placeholder:o,required:a,readonly:s,disabled:u,type:x,label:l,hideLabel:f,hideError:y,value:d,onChange:i,onChangeOverride:m,onBlur:p,onFocus:v,autofocus:b,options:g,schema:c,uiSchema:T,rawErrors:h=[],formContext:j,registry:F,InputLabelProps:_,...D}=r,$=ve(c,x,g),{step:M,min:z,max:N,...U}=$,V={inputProps:{step:M,min:z,max:N,...c.examples?{list:oe(t)}:void 0},...U},B=({target:{value:C}})=>i(C===""?g.emptyValue:C),G=({target:{value:C}})=>p(t,C),E=({target:{value:C}})=>v(t,C),H=Qe.includes(x)?{..._,shrink:!0}:_;return e.jsxs(e.Fragment,{children:[e.jsx(J,{id:t,name:t,placeholder:o,label:k(l||void 0,f,void 0),autoFocus:b,required:a,disabled:u||s,...V,value:d||d===0?d:"",error:h.length>0,onChange:m||B,onBlur:G,onFocus:E,InputLabelProps:H,...D,"aria-describedby":w(t,!!c.examples)}),Array.isArray(c.examples)&&e.jsx("datalist",{id:oe(t),children:c.examples.concat(c.default&&!c.examples.includes(c.default)?[c.default]:[]).map(C=>e.jsx("option",{value:C},C))})]})}function Ze(r){const{id:t,description:n}=r;return n?e.jsx(W,{id:t,variant:"subtitle2",style:{marginTop:"5px"},children:n}):null}var ee={},et=q;Object.defineProperty(ee,"__esModule",{value:!0});var he=ee.default=void 0,tt=et(O()),rt=e;he=ee.default=(0,tt.default)((0,rt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"Error");function nt({errors:r,registry:t}){const{translateString:n}=t;return e.jsx(Y,{elevation:2,children:e.jsxs(L,{mb:2,p:2,children:[e.jsx(W,{variant:"h6",children:n(R.ErrorsLabel)}),e.jsx(ce,{dense:!0,children:r.map((o,a)=>e.jsxs(ue,{children:[e.jsx(ke,{children:e.jsx(he,{color:"error"})}),e.jsx(we,{primary:o.stack})]},a))})]})})}var te={},ot=q;Object.defineProperty(te,"__esModule",{value:!0});var fe=te.default=void 0,it=ot(O()),at=e;fe=te.default=(0,it.default)((0,at.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");var re={},st=q;Object.defineProperty(re,"__esModule",{value:!0});var xe=re.default=void 0,lt=st(O()),dt=e;xe=re.default=(0,lt.default)((0,dt.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");var ne={},ct=q;Object.defineProperty(ne,"__esModule",{value:!0});var ye=ne.default=void 0,ut=ct(O()),mt=e;ye=ne.default=(0,ut.default)((0,mt.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function P(r){const{icon:t,color:n,uiSchema:o,registry:a,...s}=r;return e.jsx(le,{...s,size:"small",color:n,children:t})}function pt(r){const{registry:{translateString:t}}=r;return e.jsx(P,{title:t(R.CopyButton),...r,icon:e.jsx(qe,{fontSize:"small"})})}function ht(r){const{registry:{translateString:t}}=r;return e.jsx(P,{title:t(R.MoveDownButton),...r,icon:e.jsx(fe,{fontSize:"small"})})}function ft(r){const{registry:{translateString:t}}=r;return e.jsx(P,{title:t(R.MoveUpButton),...r,icon:e.jsx(xe,{fontSize:"small"})})}function xt(r){const{iconType:t,...n}=r,{registry:{translateString:o}}=n;return e.jsx(P,{title:o(R.RemoveButton),...n,color:"error",icon:e.jsx(ye,{fontSize:t==="default"?void 0:"small"})})}function yt(r){const{errors:t=[],idSchema:n}=r;if(t.length===0)return null;const o=Fe(n);return e.jsx(ce,{id:o,dense:!0,disablePadding:!0,children:t.map((a,s)=>e.jsx(ue,{disableGutters:!0,children:e.jsx(de,{component:"div",id:`${o}-${s}`,children:a})},s))})}function gt(r){const{idSchema:t,help:n}=r;if(!n)return null;const o=Te(t);return e.jsx(de,{component:"div",id:o,children:n})}function jt(r){const{id:t,children:n,classNames:o,style:a,disabled:s,displayLabel:u,hidden:x,label:l,onDropPropertyClick:f,onKeyChange:y,readonly:d,required:i,rawErrors:m=[],errors:p,help:v,description:b,rawDescription:g,schema:c,uiSchema:T,registry:h}=r,j=K(T),F=I("WrapIfAdditionalTemplate",h,j);return x?e.jsx("div",{style:{display:"none"},children:n}):e.jsx(F,{classNames:o,style:a,disabled:s,id:t,label:l,onDropPropertyClick:f,onKeyChange:y,readonly:d,required:i,schema:c,uiSchema:T,registry:h,children:e.jsxs(Oe,{fullWidth:!0,error:!!m.length,required:i,children:[n,u&&g?e.jsx(W,{variant:"caption",color:"textSecondary",children:b}):null,p,v]})})}function bt(r){const{description:t,title:n,properties:o,required:a,disabled:s,readonly:u,uiSchema:x,idSchema:l,schema:f,formData:y,onAddClick:d,registry:i}=r,m=K(x),p=I("TitleFieldTemplate",i,m),v=I("DescriptionFieldTemplate",i,m),{ButtonTemplates:{AddButton:b}}=i.templates;return e.jsxs(e.Fragment,{children:[n&&e.jsx(p,{id:Se(l),title:n,required:a,schema:f,uiSchema:x,registry:i}),t&&e.jsx(v,{id:ie(l),description:t,schema:f,uiSchema:x,registry:i}),e.jsxs(S,{container:!0,spacing:2,style:{marginTop:"10px"},children:[o.map((g,c)=>g.hidden?g.content:e.jsx(S,{item:!0,xs:12,style:{marginBottom:"10px"},children:g.content},c)),_e(f,x,y)&&e.jsx(S,{container:!0,justifyContent:"flex-end",children:e.jsx(S,{item:!0,children:e.jsx(b,{className:"object-property-expand",onClick:d(f),disabled:s||u,uiSchema:x,registry:i})})})]})]})}function vt({uiSchema:r}){const{submitText:t,norender:n,props:o={}}=Be(r);return n?null:e.jsx(L,{marginTop:3,children:e.jsx($e,{type:"submit",variant:"contained",color:"primary",...o,children:t})})}function Ft({id:r,title:t}){return e.jsxs(L,{id:r,mb:1,mt:1,children:[e.jsx(W,{variant:"h5",children:t}),e.jsx(Me,{})]})}function Tt(r){const{children:t,classNames:n,style:o,disabled:a,id:s,label:u,onDropPropertyClick:x,onKeyChange:l,readonly:f,required:y,schema:d,uiSchema:i,registry:m}=r,{templates:p,translateString:v}=m,{RemoveButton:b}=p.ButtonTemplates,g=v(R.KeyLabel,[u]),c=Ce in d,T={flex:1,paddingLeft:6,paddingRight:6,fontWeight:"bold"};if(!c)return e.jsx("div",{className:n,style:o,children:t});const h=({target:j})=>l(j.value);return e.jsxs(S,{container:!0,alignItems:"center",spacing:2,className:n,style:o,children:[e.jsx(S,{item:!0,xs:!0,children:e.jsx(J,{fullWidth:!0,required:y,label:g,defaultValue:u,disabled:a||f,id:`${s}-key`,name:`${s}-key`,onBlur:f?void 0:h,type:"text"})}),e.jsx(S,{item:!0,xs:!0,children:t}),e.jsx(S,{item:!0,children:e.jsx(b,{iconType:"default",style:T,disabled:a||f,onClick:x(u),uiSchema:i,registry:m})})]},`${s}-key`)}function St(){return{ArrayFieldItemTemplate:Ye,ArrayFieldTemplate:Je,BaseInputTemplate:Xe,ButtonTemplates:{AddButton:Ke,CopyButton:pt,MoveDownButton:ht,MoveUpButton:ft,RemoveButton:xt,SubmitButton:vt},DescriptionFieldTemplate:Ze,ErrorListTemplate:nt,FieldErrorTemplate:yt,FieldHelpTemplate:gt,FieldTemplate:jt,ObjectFieldTemplate:bt,TitleFieldTemplate:Ft,WrapIfAdditionalTemplate:Tt}}function _t(r){var t;const{schema:n,id:o,value:a,disabled:s,readonly:u,label:x="",hideLabel:l,autofocus:f,onChange:y,onBlur:d,onFocus:i,registry:m,options:p,uiSchema:v}=r,b=I("DescriptionFieldTemplate",m,p),g=Ie(n),c=(F,_)=>y(_),T=({target:{value:F}})=>d(o,F),h=({target:{value:F}})=>i(o,F),j=(t=p.description)!==null&&t!==void 0?t:n.description;return e.jsxs(e.Fragment,{children:[!l&&!!j&&e.jsx(b,{id:ie(o),description:j,schema:n,uiSchema:v,registry:m}),e.jsx(Q,{control:e.jsx(me,{id:o,name:o,checked:typeof a>"u"?!1:!!a,required:g,disabled:s||u,autoFocus:f,onChange:c,onBlur:T,onFocus:h,"aria-describedby":w(o)}),label:k(x,l,!1)})]})}function Bt({label:r,hideLabel:t,id:n,disabled:o,options:a,value:s,autofocus:u,readonly:x,required:l,onChange:f,onBlur:y,onFocus:d}){const{enumOptions:i,enumDisabled:m,inline:p,emptyValue:v}=a,b=Array.isArray(s)?s:[s],g=h=>({target:{checked:j}})=>{f(j?De(h,b,i):Le(h,b,i))},c=({target:{value:h}})=>y(n,A(h,i,v)),T=({target:{value:h}})=>d(n,A(h,i,v));return e.jsxs(e.Fragment,{children:[k(e.jsx(X,{required:l,htmlFor:n,children:r||void 0}),t),e.jsx(Ve,{id:n,row:!!p,children:Array.isArray(i)&&i.map((h,j)=>{const F=Ae(h.value,b),_=Array.isArray(m)&&m.indexOf(h.value)!==-1,D=e.jsx(me,{id:ae(n,j),name:n,checked:F,disabled:o||_||x,autoFocus:u&&j===0,onChange:g(j),onBlur:c,onFocus:T,"aria-describedby":w(n)});return e.jsx(Q,{control:D,label:h.label},j)})})]})}function Ct({id:r,options:t,value:n,required:o,disabled:a,readonly:s,label:u,hideLabel:x,onChange:l,onBlur:f,onFocus:y}){var d;const{enumOptions:i,enumDisabled:m,emptyValue:p}=t,v=(h,j)=>l(A(j,i,p)),b=({target:{value:h}})=>f(r,A(h,i,p)),g=({target:{value:h}})=>y(r,A(h,i,p)),c=t?t.inline:!1,T=(d=se(n,i))!==null&&d!==void 0?d:null;return e.jsxs(e.Fragment,{children:[k(e.jsx(X,{required:o,htmlFor:r,children:u||void 0}),x),e.jsx(Ee,{id:r,name:r,value:T,row:c,onChange:v,onBlur:b,onFocus:g,"aria-describedby":w(r),children:Array.isArray(i)&&i.map((h,j)=>{const F=Array.isArray(m)&&m.indexOf(h.value)!==-1;return e.jsx(Q,{control:e.jsx(We,{name:r,id:ae(r,j),color:"primary"}),label:h.label,value:String(j),disabled:a||F||s},j)})})]})}function It(r){const{value:t,readonly:n,disabled:o,onBlur:a,onFocus:s,options:u,schema:x,onChange:l,required:f,label:y,hideLabel:d,id:i}=r,m={value:t,label:y,id:i,name:i,...Re(x)},p=(g,c)=>{l(c??u.emptyValue)},v=({target:{value:g}})=>a(i,g),b=({target:{value:g}})=>s(i,g);return e.jsxs(e.Fragment,{children:[k(e.jsx(X,{required:f,htmlFor:i,children:y||void 0}),d),e.jsx(Pe,{disabled:o||n,onChange:p,onBlur:v,onFocus:b,valueLabelDisplay:"auto",...m,"aria-describedby":w(i)})]})}function At({schema:r,id:t,name:n,options:o,label:a,hideLabel:s,required:u,disabled:x,placeholder:l,readonly:f,value:y,multiple:d,autofocus:i,onChange:m,onBlur:p,onFocus:v,rawErrors:b=[],registry:g,uiSchema:c,hideError:T,formContext:h,...j}){const{enumOptions:F,enumDisabled:_,emptyValue:D}=o;d=typeof d>"u"?!1:!!d;const $=d?[]:"",M=typeof y>"u"||d&&y.length<1||!d&&y===$,z=({target:{value:B}})=>m(A(B,F,D)),N=({target:{value:B}})=>p(t,A(B,F,D)),U=({target:{value:B}})=>v(t,A(B,F,D)),V=se(y,F,d);return e.jsx(J,{id:t,name:t,label:k(a||void 0,s,void 0),value:!M&&typeof V<"u"?V:$,required:u,disabled:x||f,autoFocus:i,placeholder:l,error:b.length>0,onChange:z,onBlur:N,onFocus:U,...j,select:!0,InputLabelProps:{...j.InputLabelProps,shrink:!M},SelectProps:{...j.SelectProps,multiple:d},"aria-describedby":w(t),children:Array.isArray(F)&&F.map(({value:B,label:G},E)=>{const H=Array.isArray(_)&&_.indexOf(B)!==-1;return e.jsx(ze,{value:String(E),disabled:H,children:G},E)})})}function Dt(r){const{options:t,registry:n}=r,o=I("BaseInputTemplate",n,t);let a=5;return(typeof t.rows=="string"||typeof t.rows=="number")&&(a=t.rows),e.jsx(o,{...r,multiline:!0,rows:a})}function ge(){return{CheckboxWidget:_t,CheckboxesWidget:Bt,RadioWidget:Ct,RangeWidget:It,SelectWidget:At,TextareaWidget:Dt}}const dr=ge();function Lt(){return{templates:St(),widgets:ge()}}function Rt(){return Ne(Lt())}const cr=Rt();export{cr as M,dr as W};
