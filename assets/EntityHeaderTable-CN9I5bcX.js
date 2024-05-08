import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as a,R as ee}from"./index-Dl6G-zuu.js";import{a as ie,u as le,v as Z,x as de,Z as ce,_ as ue,$ as me,a0 as pe,a1 as fe}from"./HelpPopover-BmXMm3Un.js";import{x as ye,aV as ge,ag as W}from"./SynapseClient-FKD_6oQs.js";import"./OrientationBanner-Dih8CVog.js";import{S as J}from"./RegularExpressions-D_Bl7pBr.js";import"./getEndpoint-CjoHA800.js";import{u as xe}from"./EntityLink-B8WdjlaN.js";import{I as he,A as Ce}from"./IconSvg-D-78-NmD.js";import"./SkeletonButton-2OUtbWJw.js";import{S as Se}from"./SkeletonTable-CULGn8eZ.js";import{p as we}from"./papaparse.min-D3VSFJh2.js";import{u as be}from"./UserSearchBoxV2-yJkhsVQr.js";import{M as te}from"./TextField-BYBL0P0S.js";import{C as Ie,a as Ee,E as je,b as Fe,c as Re}from"./EntityHeaderTableCellRenderers-Dy6__1us.js";import{E as Ve}from"./EntityFinderModal-CzrpTXA-.js";import{V as _e,F as De}from"./useEntitySelection-WgO6FbwV.js";import{c as Y}from"./cloneDeep-CwQXpD5Z.js";import{p as Te}from"./pluralize-CVwSCrA2.js";import{S as ve}from"./StyledTableContainer-Br28iU_B.js";import{a as Me}from"./ThemesPlot-O85fLbOr.js";import{B as h}from"./Box-DRdN2jdb.js";import{T as X}from"./Typography-B88_J_TK.js";import{B as P}from"./Button-mb55Lwfk.js";import{I as K}from"./IconButton-CgTC7RgJ.js";import{I as He}from"./InputLabel-D0wmCbAz.js";import{M as ke}from"./Tooltip-CYVQ1vhC.js";import{M as Ae}from"./Alert-HJYNNEvY.js";import{A as Ne}from"./AlertTitle-DKiwjjrh.js";import{n as qe}from"./noop-DX6rZLP_.js";function B({initialValue:s,onChange:u,options:r,delay:d=250,...p}){const[c,f]=a.useState(s);return be(()=>{u(c)},[u,c],d),e.jsx(ie,{freeSolo:!0,disablePortal:!0,isOptionEqualToValue:(y,i)=>i.length==0||y===i,options:r,value:c,onChange:(y,i)=>{f(i??"")},sx:{marginRight:"10px"},renderInput:y=>e.jsx(te,{...y,...p,value:c,onChange:i=>f(i.target.value)})})}try{B.displayName="DebouncedInput",B.__docgenInfo={description:"",displayName:"DebouncedInput",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},delay:{defaultValue:{value:"250"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}function U({column:s,table:u}){var c;const r=(c=u.getPreFilteredRowModel().flatRows[0])==null?void 0:c.getValue(s.id),d=s.getFilterValue()??"",p=ee.useMemo(()=>typeof r=="number"?[]:Array.from(s.getFacetedUniqueValues().keys()).sort(),[s.getFacetedUniqueValues()]);return e.jsx(B,{type:"text",options:p,initialValue:d,onChange:f=>s.setFilterValue(f),label:`Filter by ${s.columnDef.header} (${s.getFacetedUniqueValues().size})`})}try{U.displayName="Filter",U.__docgenInfo={description:"",displayName:"Filter",props:{column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"Column<any, unknown>"}},table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<any>"}}}}}catch{}const M=s=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_6722_37828",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_6722_37828)",children:e.jsx("path",{d:"M18 20V17H15V15H18V12H20V15H23V17H20V20H18ZM3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V5C1 4.45 1.19583 3.97917 1.5875 3.5875C1.97917 3.19583 2.45 3 3 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V10H17V8H3V19H16V21H3ZM3 6H17V5H3V6Z",fill:"#395979"})})]});try{M.displayName="AddAd",M.__docgenInfo={description:"",displayName:"AddAd",props:{}}}catch{}function Pe(s,u,r){const[d,p]=a.useState({}),[c,f]=a.useState(Y(s)),[y,i]=a.useState(""),[H,F]=a.useState([]);a.useEffect(()=>{f(Y(s))},[s]);const b=a.useCallback(m=>{i(m),u&&u(m)},[u]),k=a.useCallback(m=>{p({}),f(m),r&&r(m),F([]),b("")},[r,b]);return{rowSelection:d,setRowSelection:p,refsInState:c,setRefsInState:k,newEntityIDs:y,setNewEntityIDs:b,parseErrors:H,setParseErrors:F}}const Be={selectMultiple:!0,versionSelection:_e.DISALLOWED,initialScope:De.ALL_PROJECTS,initialContainer:"root"},Ue=10,Q=s=>{const{references:u,isEditable:r,disabled:d,onUpdate:p=qe,removeSelectedRowsButtonText:c="Remove Selected Rows",onUpdateEntityIDsTextbox:f,objectNameCopy:y="entity",hideTextFieldToPasteValue:i=!1,entityFinderConfiguration:H=Be}=s,[F,b]=a.useState([]),[k,m]=a.useState(!1),{rowSelection:R,setRowSelection:ne,refsInState:g,setRefsInState:I,newEntityIDs:l,setNewEntityIDs:V,parseErrors:_,setParseErrors:E}=Pe(u,f,p),A=a.useCallback(n=>{E([`Invalid Synapse ID(s): ${n.join(",")}`])},[E]),N=a.useCallback(n=>{const t=n.map(o=>({targetId:o.trim()}));I([...g,...t])},[g,I]),se=a.useCallback(()=>{l?l.includes(",")?we.parse(l,{complete:n=>{if(n.errors.length>0){const t=n.errors.map(o=>o.message);E(t)}else{const t=n.data[0],o=t.filter(S=>!S.trim().match(J));o.length>0?A(o):N(t)}}}):l.trim().match(J)?N([l]):A([l]):(E([]),V(""))},[N,l,A,V,E]),w=Me(Te(y)),z=a.useMemo(()=>[{id:"select",header:Ie,cell:Ee}],[]),q=a.useMemo(()=>[{accessorFn:n=>n.name,id:"name",cell:je,header:"Name"},{accessorFn:n=>n.id,id:"id",cell:Fe,header:"SynID"},{accessorFn:n=>n.isDummy?"-":ye(ge(n)),id:"type",header:"Type",cell:Re,filterFn:"includesString"}],[]),ae=a.useMemo(()=>r?z.concat(q):q,[q,r,z]),L=Object.keys(R).length,{data:j,isSuccess:oe,isLoading:O}=xe(g,{throwOnError:!0}),D=a.useMemo(()=>{const n=j?j==null?void 0:j.results:[],t=new Set;n.forEach(x=>t.add(W(x.id)));const S=g.filter(x=>!t.has(W(x.targetId))).map(x=>({id:x.targetId,name:x.targetId,benefactorId:-1,type:"org.sagebionetworks.repo.model.Project",createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:"",isLatestVersion:!0,isDummy:!0}));return n.concat(S)},[g,j]),C=le({data:D,columns:ae,state:{rowSelection:R,columnFilters:F},enableRowSelection:r,onRowSelectionChange:ne,onColumnFiltersChange:b,getCoreRowModel:de(),getFilteredRowModel:ce(),getSortedRowModel:ue(),getFacetedRowModel:me(),getFacetedUniqueValues:pe(),getFacetedMinMaxValues:fe(),columnResizeMode:"onChange"}),re=a.useCallback(()=>{const t=D.filter((o,S)=>R[S]!==!0).map(o=>({targetId:o.id}));I(t)},[D,R,I]),$=L>0,T=D.length,G=C.getPrePaginationRowModel().rows.length,v=T>Ue;return a.useEffect(function(){v||C.setColumnFilters([])},[C,v]),O?e.jsx(Se,{numCols:3,numRows:Math.min(10,g.length)}):oe?e.jsxs("div",{children:[e.jsxs(h,{display:"flex",justifyContent:"space-between",p:"12px 10px 10px 5px",children:[v&&e.jsxs(X,{variant:"body1",sx:{marginBottom:"10px"},children:[T," ",w," ",G<T?`(${G} visible)`:"",$&&e.jsx("span",{children:` (${L} selected)`})]}),r&&g.length>0&&e.jsx(P,{variant:"contained",disabled:!$||d,onClick:re,children:c})]}),e.jsx(h,{display:"flex",pb:2,children:C.getHeaderGroups().map(n=>n.headers.map(t=>t.isPlaceholder?null:e.jsx(ee.Fragment,{children:t.column.getCanFilter()&&v?e.jsx(h,{sx:{flexGrow:1},children:e.jsx(U,{column:t.column,table:C})}):null},t.column.id)))}),T>0&&e.jsx(ve,{sx:{th:{zIndex:100}},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:C.getHeaderGroups().map(n=>e.jsx("tr",{children:n.headers.map(t=>{let o="5%";switch(t.id){case"name":o="50%";break;case"id":o="22%";break;case"type":o="22%";break}return e.jsxs("th",{colSpan:t.colSpan,style:{width:o,position:"sticky",top:"0px"},children:[t.isPlaceholder?null:e.jsxs(h,{display:"flex",alignItems:"center",children:[Z(t.column.columnDef.header,t.getContext()),e.jsx(h,{mx:"auto"}),t.column.getCanSort()&&e.jsx(K,{onClick:t.column.getToggleSortingHandler(),size:"small",sx:{marginLeft:"auto",marginRight:"16px"},children:e.jsx(he,{icon:t.column.getIsSorted()==="asc"?"sortUp":"sortDown",wrap:!1,fontSize:"inherit",sx:{color:t.column.getIsSorted()?"primary.main":"grey.700",backgroundColor:"none"}})})]}),t.column.getCanResize()&&e.jsx("div",{className:`resizer ${t.column.getIsResizing()?"isResizing":""}`,onMouseDown:t.getResizeHandler(),onTouchStart:t.getResizeHandler()})]},t.id)})},n.id))}),e.jsx("tbody",{children:C.getRowModel().rows.map(n=>e.jsx("tr",{style:{height:"30px"},children:n.getVisibleCells().map(t=>e.jsx("td",{style:{width:t.column.getSize()},children:Z(t.column.columnDef.cell,t.getContext())},t.id))},n.id))})]})}),e.jsx(Ve,{configuration:H,promptCopy:`Select ${w} to add to the Synapse ID list`,show:k,title:`Select ${w}`,confirmButtonCopy:`Add ${w}`,onConfirm:n=>{if(i){const t=[...g,...n];I(t),p(t)}else{const t=n.map(x=>x.targetId),S=(l.trim().length>0?l.concat(","):l).concat(t.join(","));V(S)}m(!1)},onCancel:()=>m(!1)}),r&&e.jsxs(h,{sx:{marginTop:"10px"},children:[i&&e.jsxs(P,{variant:"outlined",onClick:()=>{m(!0)},startIcon:e.jsx(M,{}),disabled:d,children:["Add ",w]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(He,{htmlFor:"synIDs",children:"Add Synapse IDs"}),e.jsxs(h,{sx:{display:"grid",gridTemplateColumns:"auto 50px 150px"},children:[e.jsx(te,{id:"synIDs",name:"synIDs",fullWidth:!0,onChange:n=>{V(n.target.value)},value:l,placeholder:"Enter a list of Synapse IDs (i.e. 'syn123, syn456')",disabled:d}),e.jsx(h,{sx:{padding:"5px 0px 0px 5px"},children:e.jsx(ke,{title:"Add a Synapse ID to the list via the Entity Finder",children:e.jsx(K,{disabled:d,onClick:()=>{m(!0)},children:e.jsx(M,{})})})}),e.jsxs(P,{variant:"outlined",onClick:se,disabled:O||l.trim().length==0||d,startIcon:e.jsx(Ce,{}),children:["Add ",w]})]})]}),_&&_.length>0&&e.jsxs(Ae,{severity:"error",sx:{my:2},children:[e.jsx(Ne,{children:"Parsing errors encountered:"}),e.jsx("ul",{children:_.map((n,t)=>e.jsx(X,{component:_.length>1?"li":"span",lineHeight:1.5,variant:"smallText1",children:n},t))})]})]})]}):e.jsx(e.Fragment,{})};try{Q.displayName="EntityHeaderTable",Q.__docgenInfo={description:`Renders a sortable/filterable table for a set of entity references.  If editable, onUpdate will be called back
on any entity added/removed.`,displayName:"EntityHeaderTable",props:{references:{defaultValue:null,description:"",name:"references",required:!0,type:{name:"ReferenceList"}},isEditable:{defaultValue:null,description:"",name:"isEditable",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((updatedRefs: ReferenceList) => void)"}},removeSelectedRowsButtonText:{defaultValue:null,description:"",name:"removeSelectedRowsButtonText",required:!1,type:{name:"string"}},onUpdateEntityIDsTextbox:{defaultValue:null,description:"",name:"onUpdateEntityIDsTextbox",required:!1,type:{name:"((value: string) => void)"}},objectNameCopy:{defaultValue:null,description:"",name:"objectNameCopy",required:!1,type:{name:"string"}},hideTextFieldToPasteValue:{defaultValue:null,description:"",name:"hideTextFieldToPasteValue",required:!1,type:{name:"boolean"}},entityFinderConfiguration:{defaultValue:null,description:"",name:"entityFinderConfiguration",required:!1,type:{name:'Omit<EntityFinderProps, "onSelectedChange">'}}}}}catch{}export{Q as E};
