import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{a as m}from"./index-Cu9bd8lq.js";import{f as e}from"./index--5FOymzB.js";import{e as u}from"./RegularExpressions-C2ZZh8jv.js";import{I as d,t as y}from"./IconSvg-i1h80S3j.js";const E=t=>{switch(t){case e.PROJECT:case e.FOLDER:case e.FILE:case e.TABLE:case e.LINK:case e.ENTITY_VIEW:case e.DOCKER_REPO:case e.SUBMISSION_VIEW:case e.DATASET:case e.DATASET_COLLECTION:case e.MATERIALIZED_VIEW:case e.VIRTUAL_TABLE:return y[t];default:return""}},o=t=>{const{type:a,style:l,className:s,includeTooltip:i=!0,...c}=t;if(!a)return n.jsx(n.Fragment,{});const r=E(a);if(r==="")return console.warn("Could not retrieve icon for Entity with type: ",a),n.jsx(m.Fragment,{});const p=i?u(a):void 0;return n.jsx("span",{style:l,className:s,children:n.jsx(d,{icon:r,label:p,...c})})};try{o.displayName="EntityTypeIcon",o.__docgenInfo={description:"",displayName:"EntityTypeIcon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},includeTooltip:{defaultValue:null,description:"",name:"includeTooltip",required:!1,type:{name:"boolean"}}}}}catch{}export{o as E};
