import{b as E}from"./_getAllKeys-CDiJKbeD.js";import{a as s,S as h}from"./isArray-ggc3KxVp.js";import{e as l,j as C}from"./_Map-CWVOAJuy.js";import{g as M,b,i as A}from"./_getMatchData-BH9OQlHN.js";import{b as O}from"./isEqual-DI17sirE.js";import{i as d}from"./isSymbol-BzKS7Qf1.js";import{M as g,i as R}from"./_Uint8Array-kXJ5rGjS.js";import{t as S}from"./toString-CYyvKWOl.js";import{i as _}from"./identity-DKeuBCMA.js";var w=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;function m(n,r){if(s(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||d(n)?!0:x.test(n)||!w.test(n)||r!=null&&n in Object(r)}var D="Expected a function";function c(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new TypeError(D);var t=function(){var e=arguments,i=r?r.apply(this,e):e[0],a=t.cache;if(a.has(i))return a.get(i);var f=n.apply(this,e);return t.cache=a.set(i,f)||a,f};return t.cache=new(c.Cache||g),t}c.Cache=g;var F=500;function T(n){var r=c(n,function(e){return t.size===F&&t.clear(),e}),t=r.cache;return r}var N=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z=/\\(\\)?/g,L=T(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(N,function(t,e,i,a){r.push(i?a.replace(z,"$1"):e||t)}),r});function y(n,r){return s(n)?n:m(n,r)?[n]:L(S(n))}var $=1/0;function o(n){if(typeof n=="string"||d(n))return n;var r=n+"";return r=="0"&&1/n==-$?"-0":r}function I(n,r){r=y(r,n);for(var t=0,e=r.length;n!=null&&t<e;)n=n[o(r[t++])];return t&&t==e?n:void 0}function G(n,r,t){var e=n==null?void 0:I(n,r);return e===void 0?t:e}var p=h?h.isConcatSpreadable:void 0;function K(n){return s(n)||l(n)||!!(p&&n&&n[p])}function U(n,r,t,e,i){var a=-1,f=n.length;for(t||(t=K),i||(i=[]);++a<f;){var u=n[a];r>0&&t(u)?r>1?U(u,r-1,t,e,i):E(i,u):e||(i[i.length]=u)}return i}function P(n,r){return function(t){return t==null?!1:t[n]===r&&(r!==void 0||n in Object(t))}}function X(n){var r=M(n);return r.length==1&&r[0][2]?P(r[0][0],r[0][1]):function(t){return t===n||b(t,n,r)}}function Z(n,r){return n!=null&&r in Object(n)}function q(n,r,t){r=y(r,n);for(var e=-1,i=r.length,a=!1;++e<i;){var f=o(r[e]);if(!(a=n!=null&&t(n,f)))break;n=n[f]}return a||++e!=i?a:(i=n==null?0:n.length,!!i&&C(i)&&R(f,i)&&(s(n)||l(n)))}function H(n,r){return n!=null&&q(n,r,Z)}var Y=1,B=2;function J(n,r){return m(n)&&A(r)?P(o(n),r):function(t){var e=G(t,n);return e===void 0&&e===r?H(t,n):O(r,e,Y|B)}}function Q(n){return function(r){return r==null?void 0:r[n]}}function W(n){return function(r){return I(r,n)}}function k(n){return m(n)?Q(o(n)):W(n)}function sn(n){return typeof n=="function"?n:n==null?_:typeof n=="object"?s(n)?J(n[0],n[1]):X(n):k(n)}export{sn as a,I as b,U as c,y as d,q as e,X as f,G as g,H as h,J as i,Q as j,c as m,k as p,L as s,o as t};
