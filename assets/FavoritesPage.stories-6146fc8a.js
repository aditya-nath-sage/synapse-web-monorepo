import{j as r,a as i}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{S as L}from"./Sort-9fe1b4ba.js";import{D as f}from"./EntityChildren-7cd71d6e.js";import{a9 as O,aF as P,aZ as k,an as b,cj as j}from"./SynapseContext-34356979.js";import{S as A}from"./LoadingScreen-dfc91527.js";import{a as R,d as _}from"./useFavorites-1ed4a762.js";import{I as y}from"./IconSvg-4ff66f27.js";import{P as G}from"./getEndpoint-5374ab4d.js";import{E as $}from"./EntityIcon-0d54c6fa.js";import{T as z}from"./Clear-4868d5d0.js";import{T as H}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./MenuList-cd8a71d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8a301de6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-ef578671.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-14f92460.js";import"./index-1aacdabe.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./SynapseConstants-9273577d.js";import"./SvgIcon-80573649.js";import"./FullWidthAlert-2e72abf6.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-077708db.js";import"./Typography-1aca7d5c.js";import"./emotion-react.browser.esm-9a383ad7.js";import"./Box-3a18cc2d.js";import"./ButtonBase-428d3c85.js";import"./assertThisInitialized-081f9914.js";import"./Button-ad1d45e7.js";import"./Link-3d479faf.js";import"./Modal-02fe67fa.js";import"./contains-60f9209b.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./useMutation-f948ffd4.js";import"./useInfiniteQuery-12240e4a.js";function U(){const{accessToken:h}=O(),[t,u]=a.useState(void 0),[s,g]=a.useState(""),[c,N]=a.useState(void 0),[v,m]=a.useState(),{data:l,isFetching:x,isError:C,error:d}=R();a.useEffect(()=>{C&&d&&m(d)},[C,d]),a.useEffect(()=>{m(h?void 0:new Error("Please sign in to access your favorites."))},[h]);const F=(e,o)=>{const n=e.toLowerCase();return o.filter(I=>I.name.toLowerCase().indexOf(n)>=0)};a.useEffect(()=>{if(l){let e=[...l.results];t&&e.sort((o,n)=>t.direction=="DESC"?o[t.field].toLowerCase()>n[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<n[t.field].toLowerCase()?1:-1),s&&(e=F(s,e)),N(e)}},[l,s,t]);const{mutate:w}=_(),S=e=>u&&r(L,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";u({field:e,direction:o})}});return v?r(P,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[r(y,{icon:"searchOutlined"}),r(k.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{g(e.target.value)}})]}),c&&c.length>0&&r("div",{className:"bootstrap-4-backport",children:i(H,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r("thead",{children:i("tr",{children:[r("th",{}),i("th",{children:["Name",r("span",{children:S("name")})]}),i("th",{children:["Type",r("span",{children:S("type")})]})]})}),r("tbody",{children:c.map(e=>{if(e){const o=b(e.type);return i("tr",{children:[r("td",{children:r(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r("a",{onClick:()=>{w(e.id)},className:"ignoreLink",children:r(y,{icon:"fav",sx:{color:"#EDC766"}})})})}),r("td",{children:r("a",{rel:"noopener noreferrer",href:`${G.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[r($,{type:o,style:{marginRight:"5px"}}),j(o)]})]},e.id)}else return!1})})]})}),x&&r("div",{className:"placeholder",children:r(A,{size:30})})]})}const $e={title:"Synapse/FavoritesPage",component:U},p={};var E,T,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const ze=["Demo"];export{p as Demo,ze as __namedExportsOrder,$e as default};
//# sourceMappingURL=FavoritesPage.stories-6146fc8a.js.map
