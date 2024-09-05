import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as a,a as ee}from"./index-Cu9bd8lq.js";import{a as ie,v as le,V as de,W,y as ce,X as ue,Y as me,Z as pe,_ as ye,$ as fe}from"./ConfirmationDialog-DEM2LcXE.js";import{S as Z,e as ge,g as xe,n as Y}from"./RegularExpressions-RV1YxBM7.js";import"./SynapseClient-DLsmXUrC.js";import"./OrientationBanner-BKoSQ39U.js";import{a as he}from"./useGetEntityHeaders-ltLkM4ZT.js";import{I as Ce,A as we}from"./IconSvg-NbK5fVNG.js";import"./SkeletonButton-qvhv91j_.js";import"./SkeletonInlineBlock-xinjJ1wr.js";import{S as Se}from"./SkeletonTable-BnQ5noh_.js";import"./SkeletonParagraph-D8hc_zPd.js";import{p as be}from"./papaparse.min-aI5f60TX.js";import{u as Ie}from"./UserSearchBoxV2-DLcTD4P_.js";import{T as te}from"./TextField-CW8JUN8v.js";import{C as Ee,a as je,E as Fe,b as Ve,c as Re}from"./EntityHeaderTableCellRenderers-DvIT02aJ.js";import{E as _e}from"./EntityFinderModal-rGAiTxYo.js";import{V as De,F as Te}from"./useEntitySelection-ByYYn8Ma.js";import{c as J}from"./cloneDeep-3gVogPC8.js";import{p as ve}from"./pluralize-D3rOHoU0.js";import{a as He}from"./ThemesPlot-BWHf7hGR.js";import{B as h}from"./Box-tOdEuW_y.js";import{T as X}from"./Typography-Ctk8_6Bo.js";import{B as P}from"./Button-BkvFhVsL.js";import{I as K}from"./IconButton-rjGZl5Ij.js";import{I as ke}from"./InputLabel-HjQ8NhiL.js";import{T as Ae}from"./Tooltip-Cr4lETRB.js";import{A as Me}from"./Alert-DevAguyB.js";import{A as Ne}from"./AlertTitle-F01TNSvq.js";import{n as qe}from"./noop-DX6rZLP_.js";function B({initialValue:s,onChange:u,options:r,delay:d=250,...p}){const[c,y]=a.useState(s);return Ie(()=>{u(c)},[u,c],d),e.jsx(ie,{freeSolo:!0,disablePortal:!0,isOptionEqualToValue:(f,i)=>i.length==0||f===i,options:r,value:c,onChange:(f,i)=>{y(i??"")},sx:{marginRight:"10px"},renderInput:f=>e.jsx(te,{...f,...p,value:c,onChange:i=>y(i.target.value)})})}try{B.displayName="DebouncedInput",B.__docgenInfo={description:"",displayName:"DebouncedInput",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},delay:{defaultValue:{value:"250"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}function U({column:s,table:u}){var c;const r=(c=u.getPreFilteredRowModel().flatRows[0])==null?void 0:c.getValue(s.id),d=s.getFilterValue()??"",p=ee.useMemo(()=>typeof r=="number"?[]:Array.from(s.getFacetedUniqueValues().keys()).sort(),[s.getFacetedUniqueValues()]);return e.jsx(B,{type:"text",options:p,initialValue:d,onChange:y=>s.setFilterValue(y),label:`Filter by ${s.columnDef.header} (${s.getFacetedUniqueValues().size})`})}try{U.displayName="Filter",U.__docgenInfo={description:"",displayName:"Filter",props:{column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"Column<any, unknown>"}},table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<any>"}}}}}catch{}const H=s=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"mask0_6722_37828",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_6722_37828)",children:e.jsx("path",{d:"M18 20V17H15V15H18V12H20V15H23V17H20V20H18ZM3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V5C1 4.45 1.19583 3.97917 1.5875 3.5875C1.97917 3.19583 2.45 3 3 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V10H17V8H3V19H16V21H3ZM3 6H17V5H3V6Z",fill:"#395979"})})]});try{H.displayName="AddAd",H.__docgenInfo={description:"",displayName:"AddAd",props:{}}}catch{}function Pe(s,u,r){const[d,p]=a.useState({}),[c,y]=a.useState(J(s)),[f,i]=a.useState(""),[k,F]=a.useState([]);a.useEffect(()=>{y(J(s))},[s]);const b=a.useCallback(m=>{i(m),u&&u(m)},[u]),A=a.useCallback(m=>{p({}),y(m),r&&r(m),F([]),b("")},[r,b]);return{rowSelection:d,setRowSelection:p,refsInState:c,setRefsInState:A,newEntityIDs:f,setNewEntityIDs:b,parseErrors:k,setParseErrors:F}}const Be={selectMultiple:!0,versionSelection:De.DISALLOWED,initialScope:Te.ALL_PROJECTS,initialContainer:"root"},Ue=10,Q=s=>{const{references:u,isEditable:r,disabled:d,onUpdate:p=qe,removeSelectedRowsButtonText:c="Remove Selected Rows",onUpdateEntityIDsTextbox:y,objectNameCopy:f="entity",hideTextFieldToPasteValue:i=!1,entityFinderConfiguration:k=Be}=s,[F,b]=a.useState([]),[A,m]=a.useState(!1),{rowSelection:V,setRowSelection:ne,refsInState:g,setRefsInState:I,newEntityIDs:l,setNewEntityIDs:R,parseErrors:_,setParseErrors:E}=Pe(u,y,p),M=a.useCallback(n=>{E([`Invalid Synapse ID(s): ${n.join(",")}`])},[E]),N=a.useCallback(n=>{const t=n.map(o=>({targetId:o.trim()}));I([...g,...t])},[g,I]),se=a.useCallback(()=>{l?l.includes(",")?be.parse(l,{complete:n=>{if(n.errors.length>0){const t=n.errors.map(o=>o.message);E(t)}else{const t=n.data[0],o=t.filter(w=>!w.trim().match(Z));o.length>0?M(o):N(t)}}}):l.trim().match(Z)?N([l]):M([l]):(E([]),R(""))},[N,l,M,R,E]),S=He(ve(f)),z=a.useMemo(()=>[{id:"select",header:Ee,cell:je}],[]),q=a.useMemo(()=>[{accessorFn:n=>n.name,id:"name",cell:Fe,header:"Name"},{accessorFn:n=>n.id,id:"id",cell:Ve,header:"SynID"},{accessorFn:n=>n.isDummy?"-":ge(xe(n)),id:"type",header:"Type",cell:Re,filterFn:"includesString"}],[]),ae=a.useMemo(()=>r?z.concat(q):q,[q,r,z]),L=Object.keys(V).length,{data:j,isSuccess:oe,isLoading:O}=he(g,{throwOnError:!0}),D=a.useMemo(()=>{const n=j?j==null?void 0:j.results:[],t=new Set;n.forEach(x=>t.add(Y(x.id)));const w=g.filter(x=>!t.has(Y(x.targetId))).map(x=>({id:x.targetId,name:x.targetId,benefactorId:-1,type:"org.sagebionetworks.repo.model.Project",createdOn:"",modifiedOn:"",createdBy:"",modifiedBy:"",isLatestVersion:!0,isDummy:!0}));return n.concat(w)},[g,j]),C=le({data:D,columns:ae,state:{rowSelection:V,columnFilters:F},enableRowSelection:r,onRowSelectionChange:ne,onColumnFiltersChange:b,getCoreRowModel:ce(),getFilteredRowModel:ue(),getSortedRowModel:me(),getFacetedRowModel:pe(),getFacetedUniqueValues:ye(),getFacetedMinMaxValues:fe(),columnResizeMode:"onChange"}),re=a.useCallback(()=>{const t=D.filter((o,w)=>V[w]!==!0).map(o=>({targetId:o.id}));I(t)},[D,V,I]),$=L>0,T=D.length,G=C.getPrePaginationRowModel().rows.length,v=T>Ue;return a.useEffect(function(){v||C.setColumnFilters([])},[C,v]),O?e.jsx(Se,{numCols:3,numRows:Math.min(10,g.length)}):oe?e.jsxs("div",{children:[e.jsxs(h,{display:"flex",justifyContent:"space-between",p:"12px 10px 10px 5px",children:[v&&e.jsxs(X,{variant:"body1",sx:{marginBottom:"10px"},children:[T," ",S," ",G<T?`(${G} visible)`:"",$&&e.jsx("span",{children:` (${L} selected)`})]}),r&&g.length>0&&e.jsx(P,{variant:"contained",disabled:!$||d,onClick:re,children:c})]}),e.jsx(h,{display:"flex",pb:2,children:C.getHeaderGroups().map(n=>n.headers.map(t=>t.isPlaceholder?null:e.jsx(ee.Fragment,{children:t.column.getCanFilter()&&v?e.jsx(h,{sx:{flexGrow:1},children:e.jsx(U,{column:t.column,table:C})}):null},t.column.id)))}),T>0&&e.jsx(de,{sx:{th:{zIndex:100,maxHeight:"250px"}},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:C.getHeaderGroups().map(n=>e.jsx("tr",{children:n.headers.map(t=>{let o="5%";switch(t.id){case"name":o="50%";break;case"id":o="22%";break;case"type":o="22%";break}return e.jsxs("th",{colSpan:t.colSpan,style:{width:o,position:"sticky",top:"0px"},children:[t.isPlaceholder?null:e.jsxs(h,{display:"flex",alignItems:"center",children:[W(t.column.columnDef.header,t.getContext()),e.jsx(h,{mx:"auto"}),t.column.getCanSort()&&e.jsx(K,{onClick:t.column.getToggleSortingHandler(),size:"small",sx:{marginLeft:"auto",marginRight:"16px"},children:e.jsx(Ce,{icon:t.column.getIsSorted()==="asc"?"sortUp":"sortDown",wrap:!1,fontSize:"inherit",sx:{color:t.column.getIsSorted()?"primary.main":"grey.700",backgroundColor:"none"}})})]}),t.column.getCanResize()&&e.jsx("div",{className:`resizer ${t.column.getIsResizing()?"isResizing":""}`,onMouseDown:t.getResizeHandler(),onTouchStart:t.getResizeHandler()})]},t.id)})},n.id))}),e.jsx("tbody",{children:C.getRowModel().rows.map(n=>e.jsx("tr",{style:{height:"30px"},children:n.getVisibleCells().map(t=>e.jsx("td",{style:{width:t.column.getSize()},children:W(t.column.columnDef.cell,t.getContext())},t.id))},n.id))})]})}),e.jsx(_e,{configuration:k,promptCopy:`Select ${S} to add to the Synapse ID list`,show:A,title:`Select ${S}`,confirmButtonCopy:`Add ${S}`,onConfirm:n=>{if(i){const t=[...g,...n];I(t),p(t)}else{const t=n.map(x=>x.targetId),w=(l.trim().length>0?l.concat(","):l).concat(t.join(","));R(w)}m(!1)},onCancel:()=>m(!1)}),r&&e.jsxs(h,{sx:{marginTop:"10px"},children:[i&&e.jsxs(P,{variant:"outlined",onClick:()=>{m(!0)},startIcon:e.jsx(H,{}),disabled:d,children:["Add ",S]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(ke,{htmlFor:"synIDs",children:"Add Synapse IDs"}),e.jsxs(h,{sx:{display:"grid",gridTemplateColumns:"auto 50px 150px"},children:[e.jsx(te,{id:"synIDs",name:"synIDs",fullWidth:!0,onChange:n=>{R(n.target.value)},value:l,placeholder:"Enter a list of Synapse IDs (i.e. 'syn123, syn456')",disabled:d}),e.jsx(h,{sx:{padding:"5px 0px 0px 5px"},children:e.jsx(Ae,{title:"Add a Synapse ID to the list via the Entity Finder",children:e.jsx(K,{disabled:d,onClick:()=>{m(!0)},children:e.jsx(H,{})})})}),e.jsxs(P,{variant:"outlined",onClick:se,disabled:O||l.trim().length==0||d,startIcon:e.jsx(we,{}),children:["Add ",S]})]})]}),_&&_.length>0&&e.jsxs(Me,{severity:"error",sx:{my:2},children:[e.jsx(Ne,{children:"Parsing errors encountered:"}),e.jsx("ul",{children:_.map((n,t)=>e.jsx(X,{component:_.length>1?"li":"span",lineHeight:1.5,variant:"smallText1",children:n},t))})]})]})]}):e.jsx(e.Fragment,{})};try{Q.displayName="EntityHeaderTable",Q.__docgenInfo={description:`Renders a sortable/filterable table for a set of entity references.  If editable, onUpdate will be called back
on any entity added/removed.`,displayName:"EntityHeaderTable",props:{references:{defaultValue:null,description:"",name:"references",required:!0,type:{name:"ReferenceList"}},isEditable:{defaultValue:null,description:"",name:"isEditable",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!1,type:{name:"((updatedRefs: ReferenceList) => void)"}},removeSelectedRowsButtonText:{defaultValue:null,description:"",name:"removeSelectedRowsButtonText",required:!1,type:{name:"string"}},onUpdateEntityIDsTextbox:{defaultValue:null,description:"",name:"onUpdateEntityIDsTextbox",required:!1,type:{name:"((value: string) => void)"}},objectNameCopy:{defaultValue:null,description:"",name:"objectNameCopy",required:!1,type:{name:"string"}},hideTextFieldToPasteValue:{defaultValue:null,description:"",name:"hideTextFieldToPasteValue",required:!1,type:{name:"boolean"}},entityFinderConfiguration:{defaultValue:null,description:"",name:"entityFinderConfiguration",required:!1,type:{name:'Omit<EntityFinderProps, "onSelectedChange">'}}}}}catch{}export{Q as E};
