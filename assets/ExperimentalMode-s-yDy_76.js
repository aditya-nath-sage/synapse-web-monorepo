import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as n}from"./index-Dl6G-zuu.js";import{C as f}from"./OrientationBanner-DcDyIfis.js";import{M as u}from"./SynapseClient-CIGEnLOQ.js";import{E as s}from"./SynapseConstants-DNR648SI.js";import{a as x}from"./index.prod-CtaNrJ90.js";import{u as h}from"./utils-Bdp_oNP4.js";import{B as E}from"./Box-DRYT9rh3.js";import{T as I}from"./Typography-DgBbIcOX.js";import{T as M}from"./Tooltip-Drr3vXNI.js";import{I as y}from"./IconButton-CLoAcDX9.js";import{I as _}from"./InfoOutlined-DJDm_gVQ.js";const i="experimental-mode",g="This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade.",l=({onExperimentalModeToggle:t})=>{const[r,o]=n.useState(!1),m=new f;let a=!0;const p=h();n.useEffect(()=>(a&&u()&&o(!0),()=>{a=!1}),[]);const d=()=>{m.set(s,{path:"/"}),o(!0),t&&t(!0)},c=()=>{document.cookie=`${s}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`,o(!1),t&&t(!1)};return e.jsxs(E,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(I,{component:"label",variant:"body1",htmlFor:i,children:"Experimental Mode"}),e.jsx(M,{title:g,arrow:!0,placement:"top",children:e.jsx(y,{"aria-label":"info",color:"inherit",sx:{"&:hover":{backgroundColor:"transparent"}},children:e.jsx(_,{sx:{verticalAlign:"middle"}})})}),e.jsx(x,{id:i,width:35,height:20,onColor:p.palette.secondary.main,checkedIcon:!1,uncheckedIcon:!1,checked:r,onChange:r?c:d})]})};try{l.displayName="ExperimentalMode",l.__docgenInfo={description:"",displayName:"ExperimentalMode",props:{onExperimentalModeToggle:{defaultValue:null,description:"",name:"onExperimentalModeToggle",required:!1,type:{name:"((newValue: boolean) => void)"}}}}}catch{}export{l as E};
