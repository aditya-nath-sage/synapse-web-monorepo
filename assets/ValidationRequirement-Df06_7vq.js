import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{B as n,z as d}from"./SynapseClient-CyQCREGs.js";import"./OrientationBanner-BBh8JRgP.js";import"./EntityTypeUtils-XIHPFPjD.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{R as m,a as i}from"./RequirementItem-4duZDKS9.js";import{T as a}from"./Typography-CxCAiHvb.js";import{L as p}from"./Link-kkaQjRHX.js";function o(){const{data:e,isLoading:t}=n(),s=d("/authenticated/myaccount",void 0,"trust");return r.jsxs(m,{status:t?i.LOADING:e.isVerified?i.COMPLETE:i.LOCKED,children:[r.jsxs(a,{variant:"body1",children:["You must first apply to have your"," ",r.jsx(p,{href:s.toString(),target:"_blank",children:"user profile validated"})]}),t&&r.jsx("span",{className:"spinner"}),(e==null?void 0:e.isVerified)&&r.jsx(a,{variant:"body1",children:"Your user profile is validated."})]})}try{o.displayName="ValidationRequirement",o.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user has a validated profile.

This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.`,displayName:"ValidationRequirement",props:{}}}catch{}export{o as V};
