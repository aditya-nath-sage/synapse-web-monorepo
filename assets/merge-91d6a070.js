import{h as C,b as M,j as v,c as q,l as w,m as F,i as I,n as P,S}from"./_baseClone-1bedfb1c.js";import{e as D}from"./_MapCache-44fd72d5.js";import{b as G}from"./_baseFor-d254fa1e.js";import{bw as L,bx as R,bo as A,bq as _,bU as T}from"./SynapseContext-46d661f7.js";import{a as h}from"./isArray-5e3f9107.js";import{b as U,i as V}from"./isArrayLikeObject-9fe081b8.js";import{i as $}from"./_isIterateeCall-618e0dc2.js";function B(n){return U(function(e,i){var l=-1,r=i.length,a=r>1?i[r-1]:void 0,s=r>2?i[2]:void 0;for(a=n.length>3&&typeof a=="function"?(r--,a):void 0,s&&$(i[0],i[1],s)&&(a=r<3?void 0:a,r=1),e=Object(e);++l<r;){var f=i[l];f&&n(e,f,l,a)}return e})}function p(n,e,i){(i!==void 0&&!D(n[e],i)||i===void 0&&!(e in n))&&C(n,e,i)}function g(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function E(n){return M(n,v(n))}function H(n,e,i,l,r,a,s){var f=g(n,i),t=g(e,i),b=s.get(t);if(b){p(n,i,b);return}var d=a?a(f,t,i+"",n,e,s):void 0,o=d===void 0;if(o){var u=h(t),m=!u&&L(t),O=!u&&!m&&R(t);d=t,u||m||O?h(f)?d=f:V(f)?d=q(f):m?(o=!1,d=w(t,!0)):O?(o=!1,d=F(t,!0)):d=[]:I(t)||A(t)?(d=f,A(f)?d=E(f):(!_(f)||T(f))&&(d=P(t))):o=!1}o&&(s.set(t,d),r(d,t,l,a,s),s.delete(t)),p(n,i,d)}function x(n,e,i,l,r){n!==e&&G(e,function(a,s){if(r||(r=new S),_(a))H(n,e,s,i,x,l,r);else{var f=l?l(g(n,s),a,s+"",n,e,r):void 0;f===void 0&&(f=a),p(n,s,f)}},v)}var J=B(function(n,e,i){x(n,e,i)});const y=J;export{x as b,B as c,y as m,E as t};
//# sourceMappingURL=merge-91d6a070.js.map
