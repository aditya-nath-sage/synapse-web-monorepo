import{a as k,b as w}from"./_baseFlatten-CLm95RgQ.js";import{a as g}from"./toString-CYyvKWOl.js";import{b as A}from"./_baseIteratee-B9eV7LvB.js";import{b as B}from"./_baseFor-CpEDs2Sd.js";import{k as o}from"./_getAllKeys-BsAuleaE.js";import{a as c,b as C}from"./_Map-CWVOAJuy.js";import{i as d}from"./isSymbol-BzKS7Qf1.js";import{i as F}from"./identity-DKeuBCMA.js";import{a as M}from"./isArray-ggc3KxVp.js";import{b as O}from"./_baseRest-DLYcpUSj.js";import{i as s}from"./_isIterateeCall-DQ3bmrSf.js";function x(n,r){return n&&B(n,r,o)}function y(n,r){return function(i,a){if(i==null)return i;if(!c(i))return n(i,a);for(var m=i.length,u=r?m:-1,f=Object(i);(r?u--:++u<m)&&a(f[u],u,f)!==!1;);return i}}var E=y(x);function L(n,r){var i=-1,a=c(n)?Array(n.length):[];return E(n,function(m,u,f){a[++i]=r(m,u,f)}),a}function G(n,r){var i=n.length;for(n.sort(r);i--;)n[i]=n[i].value;return n}function U(n,r){if(n!==r){var i=n!==void 0,a=n===null,m=n===n,u=d(n),f=r!==void 0,b=r===null,p=r===r,t=d(r);if(!b&&!t&&!u&&n>r||u&&f&&p&&!b&&!t||a&&f&&p||!i&&p||!m)return 1;if(!a&&!u&&!t&&n<r||t&&i&&m&&!a&&!u||b&&i&&m||!f&&m||!p)return-1}return 0}function h(n,r,i){for(var a=-1,m=n.criteria,u=r.criteria,f=m.length,b=i.length;++a<f;){var p=U(m[a],u[a]);if(p){if(a>=b)return p;var t=i[a];return p*(t=="desc"?-1:1)}}return n.index-r.index}function j(n,r,i){r.length?r=g(r,function(u){return M(u)?function(f){return k(f,u.length===1?u[0]:u)}:u}):r=[F];var a=-1;r=g(r,C(A));var m=L(n,function(u,f,b){var p=g(r,function(t){return t(u)});return{criteria:p,index:++a,value:u}});return G(m,function(u,f){return h(u,f,i)})}var Y=O(function(n,r){if(n==null)return[];var i=r.length;return i>1&&s(n,r[0],r[1])?r=[]:i>2&&s(r[0],r[1],r[2])&&(r=[r[0]]),j(n,w(r,1),[])});export{x as a,E as b,y as c,L as d,j as e,U as f,Y as s};
