import{S as _}from"./_Uint8Array-C_0-6m9o.js";import{c as T,k as p,g as N,h as F,e as K,a as R,d as v,i as W,f as Y}from"./_initCloneObject-zwD3o7pM.js";import{k as C,b as E,s as q,a as H,c as J,g as Q}from"./_getAllKeys-DkHuXZgR.js";import{g as j}from"./_getTag-BMDz5CIC.js";import{S as $,i as B,a as V}from"./isArray-ggc3KxVp.js";import{n as u,b as x,a as X}from"./_Map-D_yNWmGD.js";import{i as Z}from"./isObject-C3e4t58V.js";function k(r,t){for(var n=-1,o=r==null?0:r.length;++n<o&&t(r[n],n,r)!==!1;);return r}function z(r,t){return r&&T(t,C(t),r)}function rr(r,t){return r&&T(t,p(t),r)}function tr(r,t){return T(r,E(r),t)}var er=Object.getOwnPropertySymbols,L=er?function(r){for(var t=[];r;)H(t,E(r)),r=N(r);return t}:q;function nr(r,t){return T(r,L(r),t)}function ar(r){return J(r,p,L)}var or=Object.prototype,sr=or.hasOwnProperty;function ir(r){var t=r.length,n=new r.constructor(t);return t&&typeof r[0]=="string"&&sr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function cr(r,t){var n=t?F(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var fr=/\w*$/;function gr(r){var t=new r.constructor(r.source,fr.exec(r));return t.lastIndex=r.lastIndex,t}var O=$?$.prototype:void 0,w=O?O.valueOf:void 0;function br(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",ur="[object Date]",Tr="[object Map]",lr="[object Number]",pr="[object RegExp]",jr="[object Set]",Ar="[object String]",mr="[object Symbol]",dr="[object ArrayBuffer]",Sr="[object DataView]",$r="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",hr="[object Int32Array]",Fr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Br="[object Uint32Array]";function xr(r,t,n){var o=r.constructor;switch(t){case dr:return F(r);case yr:case ur:return new o(+r);case Sr:return cr(r,n);case $r:case Or:case wr:case Ir:case hr:case Fr:case Cr:case Er:case Br:return K(r,n);case Tr:return new o;case lr:case Ar:return new o(r);case pr:return gr(r);case jr:return new o;case mr:return br(r)}}var Lr="[object Map]";function Mr(r){return B(r)&&j(r)==Lr}var I=u&&u.isMap,Ur=I?x(I):Mr,Pr="[object Set]";function Dr(r){return B(r)&&j(r)==Pr}var h=u&&u.isSet,Gr=h?x(h):Dr,_r=1,Nr=2,Kr=4,M="[object Arguments]",Rr="[object Array]",vr="[object Boolean]",Wr="[object Date]",Yr="[object Error]",U="[object Function]",qr="[object GeneratorFunction]",Hr="[object Map]",Jr="[object Number]",P="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",kr="[object WeakMap]",zr="[object ArrayBuffer]",rt="[object DataView]",tt="[object Float32Array]",et="[object Float64Array]",nt="[object Int8Array]",at="[object Int16Array]",ot="[object Int32Array]",st="[object Uint8Array]",it="[object Uint8ClampedArray]",ct="[object Uint16Array]",ft="[object Uint32Array]",e={};e[M]=e[Rr]=e[zr]=e[rt]=e[vr]=e[Wr]=e[tt]=e[et]=e[nt]=e[at]=e[ot]=e[Hr]=e[Jr]=e[P]=e[Qr]=e[Vr]=e[Xr]=e[Zr]=e[st]=e[it]=e[ct]=e[ft]=!0;e[Yr]=e[U]=e[kr]=!1;function l(r,t,n,o,g,s){var a,b=t&_r,y=t&Nr,D=t&Kr;if(n&&(a=g?n(r,o,g,s):n(r)),a!==void 0)return a;if(!Z(r))return r;var A=V(r);if(A){if(a=ir(r),!b)return R(r,a)}else{var f=j(r),m=f==U||f==qr;if(X(r))return v(r,b);if(f==P||f==M||m&&!g){if(a=y||m?{}:W(r),!b)return y?nr(r,rr(a,r)):tr(r,z(a,r))}else{if(!e[f])return g?r:{};a=xr(r,f,b)}}s||(s=new _);var d=s.get(r);if(d)return d;s.set(r,a),Gr(r)?r.forEach(function(i){a.add(l(i,t,n,i,r,s))}):Ur(r)&&r.forEach(function(i,c){a.set(c,l(i,t,n,c,r,s))});var G=D?y?ar:Q:y?p:C,S=A?void 0:G(r);return k(S||r,function(i,c){S&&(c=i,i=r[c]),Y(a,c,l(i,t,n,c,r,s))}),a}export{k as a,l as b,z as c,Gr as d,ar as g,Ur as i};
