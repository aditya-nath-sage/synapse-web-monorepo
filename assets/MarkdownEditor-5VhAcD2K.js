import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as o}from"./index-Dl6G-zuu.js";import{Z as R,a3 as N,a4 as y}from"./index-CIIvWsNs.js";import{I as E}from"./IconSvg-DMEhcShK.js";import{b as A,M as U}from"./HelpPopover-I89slcj8.js";import{U as W}from"./UserSearchBoxV2-DaZPWn4G.js";import{s as V}from"./ThemesPlot-9INsBo_B.js";const M=({show:d,onClose:s,handleUserTag:i})=>{const u=o.useCallback((m,l)=>{m&&l&&i(l.userName),s()},[s,i]);return t.jsx(t.Fragment,{children:t.jsx(A,{open:d,onCancel:s,title:"Find User or Team",content:t.jsx(W,{placeholder:"Search for a user or team name",onChange:u,typeFilter:R.ALL,focusOnSelect:!0}),sx:{".MuiDialog-paperFullWidth":{overflowY:"visible",".MuiDialogContent-root":{overflowY:"visible"}}}})})};try{M.displayName="UserMentionModal",M.__docgenInfo={description:"",displayName:"UserMentionModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},handleUserTag:{defaultValue:null,description:"",name:"handleUserTag",required:!0,type:{name:"(user: string) => void"}}}}}catch{}const $=["WRITE","PREVIEW"],_=({placeholder:d,text:s,setText:i})=>{const[u,m]=o.useState("WRITE"),[l,x]=o.useState(0),[S,b]=o.useState(!1),[k,w]=o.useState(!1),n=o.useRef(null);o.useEffect(()=>{const e=n.current;e&&e.setSelectionRange(l,l)},[n,l]),o.useEffect(()=>{var e;(e=n.current)==null||e.focus()},[S]);const v=e=>{const r=[],a=n.current;if(a){const c=a==null?void 0:a.selectionStart,p=s.substring(0,c),g=s.substring(c,s.length);x(c+e.length),r.push(p,`${k?"":"@"}${e.replace(/\s/g,"")}`,g)}i(r.join("")),w(!1)},C=e=>{const r=n.current&&n.current.selectionStart;r&&r>0&&e.charAt(r-1)==="@"&&(w(!0),b(!0))},I=e=>{const r=n.current;if(r){const a=r.selectionStart,c=r.selectionEnd,p=s.substring(a,c),g=s.substring(0,a),T=s.substring(c,s.length),f=y[e].openSyntax,j=y[e].closeSyntax;switch(e){case"code":{const h=[];h.push(g,f,p,j,T),i(h.join(`\r
`)),r.focus(),x(a+f.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const h=`${g}${f}${p}${j}${T}`;r.focus(),x(a+f.length),i(h)}}}};return t.jsxs("div",{className:"bootstrap-4-backport MarkdownEditor",children:[t.jsxs("div",{className:"MarkdownEditorControls",children:[t.jsx("div",{className:"Tabs",children:$.map(e=>t.jsx("button",{className:"Tab",role:"tab","aria-selected":e===u,onClick:r=>{r.stopPropagation(),m(e)},children:e},e))}),u==="WRITE"&&t.jsxs("div",{className:"MarkdownEditorControlsToolbar",children:[N.map(e=>t.jsx("button",{onClick:()=>I(e),children:t.jsx(E,{icon:e,label:V(e)})},e)),t.jsx("button",{onClick:()=>b(!0),children:t.jsx(E,{icon:"tag",label:"Mention"})})]})]}),t.jsx("div",{children:u==="WRITE"?t.jsx("textarea",{"aria-label":"markdown",onChange:e=>{i(e.target.value),C(e.target.value)},style:{width:"100%"},rows:6,value:s,ref:n,placeholder:d}):s?t.jsx(U,{markdown:s}):"Nothing to preview"}),t.jsx(M,{show:S,onClose:()=>b(!1),handleUserTag:v})]})};try{_.displayName="MarkdownEditor",_.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},setText:{defaultValue:null,description:"",name:"setText",required:!0,type:{name:"(text: string) => void"}}}}}catch{}export{_ as M};
