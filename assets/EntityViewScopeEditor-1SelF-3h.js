import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as c}from"./index-Dl6G-zuu.js";import{E as m}from"./EntityHeaderTable-BszvAYx4.js";import{e as u}from"./index-7Z2-YRMp.js";import{V as E,F as y}from"./useEntitySelection-Dx3SmQ6s.js";import{E as f}from"./RegularExpressions-D6yUxzx6.js";import{T as n}from"./Typography-DgBbIcOX.js";const T=f.CONTAINER,S=[u.PROJECT];function a(r){const{scopeIds:t,isProjectView:i=!1,onChange:s,disabled:p}=r,l=c.useMemo(()=>t.map(o=>({targetId:o})),[t]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"body1",mb:1.25,sx:{fontWeight:700},children:"Scope"}),t.length===0&&e.jsx(n,{variant:"smallText1",color:"grey.600",children:"Empty! Add items to populate your view"}),e.jsx(m,{references:l,isEditable:!0,disabled:p,onUpdate:o=>{s(o.map(d=>d.targetId))},removeSelectedRowsButtonText:"Remove Selected Items from View Scope",objectNameCopy:i?"project":"container",hideTextFieldToPasteValue:!0,entityFinderConfiguration:{selectMultiple:!0,versionSelection:E.DISALLOWED,initialScope:y.ALL_PROJECTS,initialContainer:"root",selectableTypes:i?S:T}})]})}try{a.displayName="EntityViewScopeEditor",a.__docgenInfo={description:"",displayName:"EntityViewScopeEditor",props:{scopeIds:{defaultValue:null,description:"",name:"scopeIds",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(scopeIds: string[]) => void"}},isProjectView:{defaultValue:null,description:"",name:"isProjectView",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{a as E};
