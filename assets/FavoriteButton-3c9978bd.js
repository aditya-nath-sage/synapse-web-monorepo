import{j as t}from"./jsx-runtime-670450c2.js";import{I as f}from"./IconSvg-4ff66f27.js";import{a9 as u}from"./SynapseContext-34356979.js";import"./index-f1f749bf.js";import{b as g,c as h,d as y}from"./useFavorites-1ed4a762.js";import{C as F}from"./ConditionalWrapper-1e5f9ce7.js";import{S as I}from"./Skeleton-444b9e51.js";import{T as x}from"./Clear-4868d5d0.js";import{I as _}from"./Box-3a18cc2d.js";function s(r){const{entityId:e}=r,{accessToken:d}=u(),n=!!d,{isFavorite:o,isLoading:a}=g(e),{mutate:p,isLoading:c}=h(),{mutate:m,isLoading:l}=y(),v=a||c||l||!n;let i="Add to Favorites";return n?o&&(i="Remove from Favorites"):i="Sign in to add this to your favorites",t(F,{condition:a,wrapper:I,children:t(x,{title:i,placement:"top",children:t("span",{children:t(_,{size:"small",disabled:v,onClick:()=>{o?m(e):p(e)},sx:{padding:"2px"},children:t(f,{icon:o?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{s.displayName="FavoriteButton",s.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{s as F};
//# sourceMappingURL=FavoriteButton-3c9978bd.js.map
