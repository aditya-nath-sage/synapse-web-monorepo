import{j as t}from"./jsx-runtime-670450c2.js";import{I as f}from"./IconSvg-0e7cf93d.js";import{a4 as u}from"./index-5643b5a3.js";import"./index-f1f749bf.js";import{b as g,c as h,d as y}from"./useFavorites-0037f9d8.js";import{C as F}from"./ConditionalWrapper-1e5f9ce7.js";import{S as I}from"./Skeleton-58bfd0fa.js";import{T as x}from"./Tooltip-266dd013.js";import{I as _}from"./IconButton-4918d20b.js";function s(r){const{entityId:e}=r,{accessToken:d}=u(),n=!!d,{isFavorite:o,isLoading:a}=g(e),{mutate:p,isLoading:c}=h(),{mutate:m,isLoading:l}=y(),v=a||c||l||!n;let i="Add to Favorites";return n?o&&(i="Remove from Favorites"):i="Sign in to add this to your favorites",t(F,{condition:a,wrapper:I,children:t(x,{title:i,placement:"top",children:t("span",{children:t(_,{size:"small",disabled:v,onClick:()=>{o?m(e):p(e)},sx:{padding:"2px"},children:t(f,{icon:o?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{s.displayName="FavoriteButton",s.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{s as F};
//# sourceMappingURL=FavoriteButton-32ddba28.js.map
