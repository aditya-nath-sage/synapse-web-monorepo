import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as i}from"./index-Dl6G-zuu.js";import{S as I}from"./Sort-CA0FKbZu.js";import{D as d}from"./index-0sKCi0IA.js";import{k as w,t as L,P as O}from"./SynapseClient-D4gkDMC-.js";import{S as P}from"./LoadingScreen-CINnrS9w.js";import{c as k,b}from"./useFavorites-Bt-HQoNf.js";import{I as v}from"./IconSvg-BBZ15ye5.js";import{c as R,e as A}from"./RegularExpressions-CgDTvkkI.js";import{E as _}from"./EntityIcon-CwtYiboG.js";import{a as G}from"./Form-DUuQEw8v.js";import{T as $}from"./Table-C934jAZX.js";import{T as z}from"./Tooltip-Drr3vXNI.js";import"./OrientationBanner-DcDyIfis.js";import"./FullWidthAlert-Q7pb-Dsc.js";import"./Alert-Aa0bm5Nm.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./styled-D9wW3ABP.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-gkOuU5-G.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ButtonBase-BgDXtZj-.js";import"./TransitionGroupContext-B611AcNu.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./Typography-DgBbIcOX.js";import"./utils-Bdp_oNP4.js";import"./index-B6qzg4VC.js";import"./Grow-lFU1cKdF.js";import"./ClickAwayListener-5odGQiyi.js";import"./ownerDocument-DW-IO8s5.js";import"./Button-CLkrjdQe.js";import"./SynapseConstants-DNR648SI.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./index-hJhP8EJR.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-O0ZMhOlq.js";import"./Backdrop-Cf-zGjSh.js";import"./LinearProgress-CT4xaOaH.js";import"./useMutation-BrriwhYv.js";import"./useInfiniteQuery-XcJaVaVN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./ErrorOutlined-CnICwQW0.js";import"./GetAppTwoTone-CEgy4oXX.js";import"./InfoOutlined-DJDm_gVQ.js";import"./ThemeProvider-D_KqLH_M.js";import"./Col-ZdD-k7N_.js";import"./createWithBsPrefix-BnX5d2nT.js";function H(){const{accessToken:f}=w(),[t,h]=i.useState(void 0),[s,y]=i.useState(""),[m,T]=i.useState(void 0),[x,p]=i.useState(),{data:c,isFetching:D,isError:u,error:l}=k();i.useEffect(()=>{u&&l&&p(l)},[u,l]),i.useEffect(()=>{p(f?void 0:new Error("Please sign in to access your favorites."))},[f]);const g=(r,o)=>{const a=r.toLowerCase();return o.filter(F=>F.name.toLowerCase().indexOf(a)>=0)};i.useEffect(()=>{if(c){let r=[...c.results];t&&r.sort((o,a)=>t.direction=="DESC"?o[t.field].toLowerCase()>a[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<a[t.field].toLowerCase()?1:-1),s&&(r=g(s,r)),T(r)}},[c,s,t]);const{mutate:N}=b(),j=r=>h&&e.jsx(I,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===r,direction:(t==null?void 0:t.field)===r?t.direction==="DESC"?d.DESC:d.ASC:d.DESC,onClick:()=>{const o=r===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";h({field:r,direction:o})}});return x?e.jsx(L,{error:x}):e.jsxs("div",{className:"FavoritesPage",children:[e.jsxs("div",{className:"searchInputWithIcon",children:[e.jsx(v,{icon:"searchOutlined"}),e.jsx(G.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:r=>{y(r.target.value)}})]}),m&&m.length>0&&e.jsx("div",{className:"bootstrap-4-backport",children:e.jsxs($,{striped:!0,responsive:!0,className:"FavoritesTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsxs("th",{children:["Name",e.jsx("span",{children:j("name")})]}),e.jsxs("th",{children:["Type",e.jsx("span",{children:j("type")})]})]})}),e.jsx("tbody",{children:m.map(r=>{if(r){const o=R(r.type);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:e.jsx("a",{onClick:()=>{N(r.id)},className:"ignoreLink",children:e.jsx(v,{icon:"fav",sx:{color:"#EDC766"}})})})}),e.jsx("td",{children:e.jsx("a",{rel:"noopener noreferrer",href:`${O.PORTAL}Synapse:${r.id}`,children:r.name})}),e.jsxs("td",{children:[e.jsx(_,{type:o,style:{marginRight:"5px"}}),A(o)]})]},r.id)}else return!1})})]})}),D&&e.jsx("div",{className:"placeholder",children:e.jsx(P,{size:30})})]})}const Be={title:"Synapse/FavoritesPage",component:H},n={};var C,S,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const er=["Demo"];export{n as Demo,er as __namedExportsOrder,Be as default};
