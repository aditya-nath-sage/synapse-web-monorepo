import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{k as m,I as u,J as p}from"./SynapseClient-a1CHU3Vr.js";import{S as d}from"./SynapseConstants-B24gj1jK.js";import"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import"./OrientationBanner-3uSg5E6m.js";import{R as h,a as s}from"./RequirementItem-4duZDKS9.js";import{T as n}from"./Typography-CxCAiHvb.js";import{L as i}from"./Link-kkaQjRHX.js";function o(){const{accessToken:a}=m(),{data:t}=u(),c=p("/register1"),r=!!a;return e.jsxs(h,{status:r?s.COMPLETE:s.LOCKED,children:[!r&&e.jsx(e.Fragment,{children:e.jsxs(n,{variant:"body1",children:[e.jsx(i,{className:d,children:"Sign in"})," ","with a Sage Platform (Synapse) user account. If you do not have a Sage account, you can"," ",e.jsx(i,{href:c.toString(),children:"register for free."})]})}),r&&e.jsxs(n,{variant:"body1",children:["You have signed in with the Sage Platform (Synapse) user account"," ",e.jsxs("b",{children:[t==null?void 0:t.userName,"@synapse.org"]})]})]})}try{o.displayName="AuthenticatedRequirement",o.__docgenInfo={description:"Displays a data access request requirement prompts the user to authenticate if not already signed in.",displayName:"AuthenticatedRequirement",props:{}}}catch{}export{o as A};
