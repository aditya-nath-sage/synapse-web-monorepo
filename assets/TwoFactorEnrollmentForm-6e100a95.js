import{a as b,j as p,F as jt}from"./jsx-runtime-ad672792.js";import{r as k}from"./index-f1f749bf.js";import{S as Yt}from"./LeftRightPanel-22edfb62.js";import{ah as W,dv as qt,bt as Ft,dw as Wt,dx as Zt,aj as Xt,dy as te,dz as ee}from"./SynapseContext-507c3a52.js";import{T as ne}from"./TextField-d206ee00.js";import{S as oe}from"./LoadingScreen-3d2fd44b.js";import{F as re}from"./FullWidthAlert-a48640a7.js";import{u as pt}from"./useMutation-9746f1a3.js";import{I as Mt}from"./IconSvg-01aeb0cc.js";import{m as ie}from"./Typography-fd50ec33.js";import{b as se,D as ae,a as ce}from"./DialogContent-9f0338c0.js";import{D as ue}from"./DialogTitle-46a1e47a.js";import{S as ut}from"./Stack-ca2b6dbb.js";import{B as D}from"./Box-c351c4b2.js";import{I as Pt}from"./IconButton-70665fb9.js";import{T as M}from"./Typography-45de53fa.js";import{B as Rt}from"./Button-cf647528.js";import{P as le}from"./Paper-ec662342.js";import{L as U}from"./Link-49aaf42c.js";import{D as At}from"./Divider-e0d2f778.js";import{s as Lt}from"./styled-e754afc3.js";var fe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Dt={},I={};let yt;const de=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];I.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};I.getSymbolTotalCodewords=function(e){return de[e]};I.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};I.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');yt=e};I.isKanjiModeEnabled=function(){return typeof yt<"u"};I.toSJIS=function(e){return yt(e)};var Z={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,n){if(t.isValid(r))return r;try{return e(r)}catch{return n}}})(Z);function _t(){this.buffer=[],this.length=0}_t.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var he=_t;function $(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}$.prototype.set=function(t,e,i,r){const n=t*this.size+e;this.data[n]=i,r&&(this.reservedBit[n]=!0)};$.prototype.get=function(t,e){return this.data[t*this.size+e]};$.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};$.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ge=$,vt={};(function(t){const e=I.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*n-2))*2,c=[o-7];for(let a=1;a<n-1;a++)c[a]=c[a-1]-s;return c.push(6),c.reverse()},t.getPositions=function(r){const n=[],o=t.getRowColCoords(r),s=o.length;for(let c=0;c<s;c++)for(let a=0;a<s;a++)c===0&&a===0||c===0&&a===s-1||c===s-1&&a===0||n.push([o[c],o[a]]);return n}})(vt);var kt={};const me=I.getSymbolSize,Tt=7;kt.getPositions=function(e){const i=me(e);return[[0,0],[i-Tt,0],[0,i-Tt]]};var Ut={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},t.from=function(n){return t.isValid(n)?parseInt(n,10):void 0},t.getPenaltyN1=function(n){const o=n.size;let s=0,c=0,a=0,u=null,l=null;for(let A=0;A<o;A++){c=a=0,u=l=null;for(let f=0;f<o;f++){let d=n.get(A,f);d===u?c++:(c>=5&&(s+=e.N1+(c-5)),u=d,c=1),d=n.get(f,A),d===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=d,a=1)}c>=5&&(s+=e.N1+(c-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(n){const o=n.size;let s=0;for(let c=0;c<o-1;c++)for(let a=0;a<o-1;a++){const u=n.get(c,a)+n.get(c,a+1)+n.get(c+1,a)+n.get(c+1,a+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(n){const o=n.size;let s=0,c=0,a=0;for(let u=0;u<o;u++){c=a=0;for(let l=0;l<o;l++)c=c<<1&2047|n.get(u,l),l>=10&&(c===1488||c===93)&&s++,a=a<<1&2047|n.get(l,u),l>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(n){let o=0;const s=n.data.length;for(let a=0;a<s;a++)o+=n.data[a];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function i(r,n,o){switch(r){case t.Patterns.PATTERN000:return(n+o)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(n+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return n*o%2+n*o%3===0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(n,o){const s=o.size;for(let c=0;c<s;c++)for(let a=0;a<s;a++)o.isReserved(a,c)||o.xor(a,c,i(n,a,c))},t.getBestMask=function(n,o){const s=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let u=0;u<s;u++){o(u),t.applyMask(u,n);const l=t.getPenaltyN1(n)+t.getPenaltyN2(n)+t.getPenaltyN3(n)+t.getPenaltyN4(n);t.applyMask(u,n),l<a&&(a=l,c=u)}return c}})(Ut);var X={};const _=Z,G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];X.getBlocksCount=function(e,i){switch(i){case _.L:return G[(e-1)*4+0];case _.M:return G[(e-1)*4+1];case _.Q:return G[(e-1)*4+2];case _.H:return G[(e-1)*4+3];default:return}};X.getTotalCodewordsCount=function(e,i){switch(i){case _.L:return Q[(e-1)*4+0];case _.M:return Q[(e-1)*4+1];case _.Q:return Q[(e-1)*4+2];case _.H:return Q[(e-1)*4+3];default:return}};var zt={},tt={};const O=new Uint8Array(512),Y=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)O[i]=e,Y[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)O[i]=O[i-255]})();tt.log=function(e){if(e<1)throw new Error("log("+e+")");return Y[e]};tt.exp=function(e){return O[e]};tt.mul=function(e,i){return e===0||i===0?0:O[Y[e]+Y[i]]};(function(t){const e=tt;t.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<n.length;c++)o[s+c]^=e.mul(r[s],n[c]);return o},t.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const s=o[0];for(let a=0;a<n.length;a++)o[a]^=e.mul(n[a],s);let c=0;for(;c<o.length&&o[c]===0;)c++;o=o.slice(c)}return o},t.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}})(zt);const Vt=zt;function wt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}wt.prototype.initialize=function(e){this.degree=e,this.genPoly=Vt.generateECPolynomial(this.degree)};wt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const r=Vt.mod(i,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var pe=wt,xt={},v={},Ct={};Ct.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var P={};const Kt="[0-9]+",ye="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const we="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(J,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(we,"g");P.NUMERIC=new RegExp(Kt,"g");P.ALPHANUMERIC=new RegExp(ye,"g");const Ce=new RegExp("^"+J+"$"),Ee=new RegExp("^"+Kt+"$"),Be=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(e){return Ce.test(e)};P.testNumeric=function(e){return Ee.test(e)};P.testAlphanumeric=function(e){return Be.test(e)};(function(t){const e=Ct,i=P;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return i.testNumeric(o)?t.NUMERIC:i.testAlphanumeric(o)?t.ALPHANUMERIC:i.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(v);(function(t){const e=I,i=X,r=Z,n=v,o=Ct,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,c=e.getBCHDigit(s);function a(f,d,y){for(let w=1;w<=40;w++)if(d<=t.getCapacity(w,y,f))return w}function u(f,d){return n.getCharCountIndicator(f,d)+4}function l(f,d){let y=0;return f.forEach(function(w){const E=u(w.mode,d);y+=E+w.getBitsLength()}),y}function A(f,d){for(let y=1;y<=40;y++)if(l(f,y)<=t.getCapacity(y,d,n.MIXED))return y}t.from=function(d,y){return o.isValid(d)?parseInt(d,10):y},t.getCapacity=function(d,y,w){if(!o.isValid(d))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=n.BYTE);const E=e.getSymbolTotalCodewords(d),m=i.getTotalCodewordsCount(d,y),C=(E-m)*8;if(w===n.MIXED)return C;const g=C-u(w,d);switch(w){case n.NUMERIC:return Math.floor(g/10*3);case n.ALPHANUMERIC:return Math.floor(g/11*2);case n.KANJI:return Math.floor(g/13);case n.BYTE:default:return Math.floor(g/8)}},t.getBestVersionForData=function(d,y){let w;const E=r.from(y,r.M);if(Array.isArray(d)){if(d.length>1)return A(d,E);if(d.length===0)return 1;w=d[0]}else w=d;return a(w.mode,w.getLength(),E)},t.getEncodedBits=function(d){if(!o.isValid(d)||d<7)throw new Error("Invalid QR Code version");let y=d<<12;for(;e.getBCHDigit(y)-c>=0;)y^=s<<e.getBCHDigit(y)-c;return d<<12|y}})(xt);var Ht={};const lt=I,Ot=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Ae=1<<14|1<<12|1<<10|1<<4|1<<1,St=lt.getBCHDigit(Ot);Ht.getEncodedBits=function(e,i){const r=e.bit<<3|i;let n=r<<10;for(;lt.getBCHDigit(n)-St>=0;)n^=Ot<<lt.getBCHDigit(n)-St;return(r<<10|n)^Ae};var Jt={};const Te=v;function z(t){this.mode=Te.NUMERIC,this.data=t.toString()}z.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(e){let i,r,n;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),n=parseInt(r,10),e.put(n,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),n=parseInt(r,10),e.put(n,o*3+1))};var Se=z;const be=v,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function V(t){this.mode=be.ALPHANUMERIC,this.data=t}V.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ot.indexOf(this.data[i])*45;r+=ot.indexOf(this.data[i+1]),e.put(r,11)}this.data.length%2&&e.put(ot.indexOf(this.data[i]),6)};var Ie=V,Ne=function(e){for(var i=[],r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var s=e.charCodeAt(n+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,n+=1)}if(o<128){i.push(o);continue}if(o<2048){i.push(o>>6|192),i.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){i.push(o>>12|224),i.push(o>>6&63|128),i.push(o&63|128);continue}if(o>=65536&&o<=1114111){i.push(o>>18|240),i.push(o>>12&63|128),i.push(o>>6&63|128),i.push(o&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Fe=Ne,Me=v;function x(t){this.mode=Me.BYTE,typeof t=="string"&&(t=Fe(t)),this.data=new Uint8Array(t)}x.getBitsLength=function(e){return e*8};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var Pe=x;const Re=v,Le=I;function K(t){this.mode=Re.KANJI,this.data=t}K.getBitsLength=function(e){return e*13};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=Le.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var De=K,ft={},_e={get exports(){return ft},set exports(t){ft=t}};(function(t){var e={single_source_shortest_paths:function(i,r,n){var o={},s={};s[r]=0;var c=e.PriorityQueue.make();c.push(r,0);for(var a,u,l,A,f,d,y,w,E;!c.empty();){a=c.pop(),u=a.value,A=a.cost,f=i[u]||{};for(l in f)f.hasOwnProperty(l)&&(d=f[l],y=A+d,w=s[l],E=typeof s[l]>"u",(E||w>y)&&(s[l]=y,c.push(l,y),o[l]=u))}if(typeof n<"u"&&typeof s[n]>"u"){var m=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(m)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var n=[],o=r;o;)n.push(o),i[o],o=i[o];return n.reverse(),n},find_path:function(i,r,n){var o=e.single_source_shortest_paths(i,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(i){var r=e.PriorityQueue,n={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=i.sorter||r.default_sorter,n},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var n={value:i,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(_e);(function(t){const e=v,i=Se,r=Ie,n=Pe,o=De,s=P,c=I,a=ft;function u(m){return unescape(encodeURIComponent(m)).length}function l(m,C,g){const h=[];let B;for(;(B=m.exec(g))!==null;)h.push({data:B[0],index:B.index,mode:C,length:B[0].length});return h}function A(m){const C=l(s.NUMERIC,e.NUMERIC,m),g=l(s.ALPHANUMERIC,e.ALPHANUMERIC,m);let h,B;return c.isKanjiModeEnabled()?(h=l(s.BYTE,e.BYTE,m),B=l(s.KANJI,e.KANJI,m)):(h=l(s.BYTE_KANJI,e.BYTE,m),B=[]),C.concat(g,h,B).sort(function(S,N){return S.index-N.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function f(m,C){switch(C){case e.NUMERIC:return i.getBitsLength(m);case e.ALPHANUMERIC:return r.getBitsLength(m);case e.KANJI:return o.getBitsLength(m);case e.BYTE:return n.getBitsLength(m)}}function d(m){return m.reduce(function(C,g){const h=C.length-1>=0?C[C.length-1]:null;return h&&h.mode===g.mode?(C[C.length-1].data+=g.data,C):(C.push(g),C)},[])}function y(m){const C=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case e.NUMERIC:C.push([h,{data:h.data,mode:e.ALPHANUMERIC,length:h.length},{data:h.data,mode:e.BYTE,length:h.length}]);break;case e.ALPHANUMERIC:C.push([h,{data:h.data,mode:e.BYTE,length:h.length}]);break;case e.KANJI:C.push([h,{data:h.data,mode:e.BYTE,length:u(h.data)}]);break;case e.BYTE:C.push([{data:h.data,mode:e.BYTE,length:u(h.data)}])}}return C}function w(m,C){const g={},h={start:{}};let B=["start"];for(let T=0;T<m.length;T++){const S=m[T],N=[];for(let L=0;L<S.length;L++){const F=S[L],H=""+T+L;N.push(H),g[H]={node:F,lastCount:0},h[H]={};for(let nt=0;nt<B.length;nt++){const R=B[nt];g[R]&&g[R].node.mode===F.mode?(h[R][H]=f(g[R].lastCount+F.length,F.mode)-f(g[R].lastCount,F.mode),g[R].lastCount+=F.length):(g[R]&&(g[R].lastCount=F.length),h[R][H]=f(F.length,F.mode)+4+e.getCharCountIndicator(F.mode,C))}}B=N}for(let T=0;T<B.length;T++)h[B[T]].end=0;return{map:h,table:g}}function E(m,C){let g;const h=e.getBestModeForData(m);if(g=e.from(C,h),g!==e.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(g)+`.
 Suggested mode is: `+e.toString(h));switch(g===e.KANJI&&!c.isKanjiModeEnabled()&&(g=e.BYTE),g){case e.NUMERIC:return new i(m);case e.ALPHANUMERIC:return new r(m);case e.KANJI:return new o(m);case e.BYTE:return new n(m)}}t.fromArray=function(C){return C.reduce(function(g,h){return typeof h=="string"?g.push(E(h,null)):h.data&&g.push(E(h.data,h.mode)),g},[])},t.fromString=function(C,g){const h=A(C,c.isKanjiModeEnabled()),B=y(h),T=w(B,g),S=a.find_path(T.map,"start","end"),N=[];for(let L=1;L<S.length-1;L++)N.push(T.table[S[L]].node);return t.fromArray(d(N))},t.rawSplit=function(C){return t.fromArray(A(C,c.isKanjiModeEnabled()))}})(Jt);const et=I,rt=Z,ve=he,ke=ge,Ue=vt,ze=kt,dt=Ut,ht=X,Ve=pe,q=xt,xe=Ht,Ke=v,it=Jt;function He(t,e){const i=t.size,r=ze.getPositions(e);for(let n=0;n<r.length;n++){const o=r[n][0],s=r[n][1];for(let c=-1;c<=7;c++)if(!(o+c<=-1||i<=o+c))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(o+c,s+a,!0,!0):t.set(o+c,s+a,!1,!0))}}function Oe(t){const e=t.size;for(let i=8;i<e-8;i++){const r=i%2===0;t.set(i,6,r,!0),t.set(6,i,r,!0)}}function Je(t,e){const i=Ue.getPositions(e);for(let r=0;r<i.length;r++){const n=i[r][0],o=i[r][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(n+s,o+c,!0,!0):t.set(n+s,o+c,!1,!0)}}function $e(t,e){const i=t.size,r=q.getEncodedBits(e);let n,o,s;for(let c=0;c<18;c++)n=Math.floor(c/3),o=c%3+i-8-3,s=(r>>c&1)===1,t.set(n,o,s,!0),t.set(o,n,s,!0)}function st(t,e,i){const r=t.size,n=xe.getEncodedBits(e,i);let o,s;for(o=0;o<15;o++)s=(n>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function Ge(t,e){const i=t.size;let r=-1,n=i-1,o=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(n,c-a)){let u=!1;s<e.length&&(u=(e[s]>>>o&1)===1),t.set(n,c-a,u),o--,o===-1&&(s++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}function Qe(t,e,i){const r=new ve;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Ke.getCharCountIndicator(a.mode,t)),a.write(r)});const n=et.getSymbolTotalCodewords(t),o=ht.getTotalCodewordsCount(t,e),s=(n-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(s-r.getLengthInBits())/8;for(let a=0;a<c;a++)r.put(a%2?17:236,8);return je(r,t,e)}function je(t,e,i){const r=et.getSymbolTotalCodewords(e),n=ht.getTotalCodewordsCount(e,i),o=r-n,s=ht.getBlocksCount(e,i),c=r%s,a=s-c,u=Math.floor(r/s),l=Math.floor(o/s),A=l+1,f=u-l,d=new Ve(f);let y=0;const w=new Array(s),E=new Array(s);let m=0;const C=new Uint8Array(t.buffer);for(let S=0;S<s;S++){const N=S<a?l:A;w[S]=C.slice(y,y+N),E[S]=d.encode(w[S]),y+=N,m=Math.max(m,N)}const g=new Uint8Array(r);let h=0,B,T;for(B=0;B<m;B++)for(T=0;T<s;T++)B<w[T].length&&(g[h++]=w[T][B]);for(B=0;B<f;B++)for(T=0;T<s;T++)g[h++]=E[T][B];return g}function Ye(t,e,i,r){let n;if(Array.isArray(t))n=it.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const l=it.rawSplit(t);u=q.getBestVersionForData(l,i)}n=it.fromString(t,u||40)}else throw new Error("Invalid data");const o=q.getBestVersionForData(n,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=Qe(e,i,n),c=et.getSymbolSize(e),a=new ke(c);return He(a,e),Oe(a),Je(a,e),st(a,i,0),e>=7&&$e(a,e),Ge(a,s),isNaN(r)&&(r=dt.getBestMask(a,st.bind(null,a,i))),dt.applyMask(r,a),st(a,i,r),{modules:a,version:e,errorCorrectionLevel:i,maskPattern:r,segments:n}}Dt.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let r=rt.M,n,o;return typeof i<"u"&&(r=rt.from(i.errorCorrectionLevel,rt.M),n=q.from(i.version),o=dt.from(i.maskPattern),i.toSJISFunc&&et.setToSJISFunction(i.toSJISFunc)),Ye(e,n,r,o)};var $t={},Et={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:n,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},t.getImageWidth=function(r,n){const o=t.getScale(r,n);return Math.floor((r+n.margin*2)*o)},t.qrToImageData=function(r,n,o){const s=n.modules.size,c=n.modules.data,a=t.getScale(s,o),u=Math.floor((s+o.margin*2)*a),l=o.margin*a,A=[o.color.light,o.color.dark];for(let f=0;f<u;f++)for(let d=0;d<u;d++){let y=(f*u+d)*4,w=o.color.light;if(f>=l&&d>=l&&f<u-l&&d<u-l){const E=Math.floor((f-l)/a),m=Math.floor((d-l)/a);w=A[c[E*s+m]?1:0]}r[y++]=w.r,r[y++]=w.g,r[y++]=w.b,r[y]=w.a}}})(Et);(function(t){const e=Et;function i(n,o,s){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,c){let a=c,u=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(u=r()),a=e.getOptions(a);const l=e.getImageWidth(o.modules.size,a),A=u.getContext("2d"),f=A.createImageData(l,l);return e.qrToImageData(f.data,o,a),i(A,u,l),A.putImageData(f,0,0),u},t.renderToDataURL=function(o,s,c){let a=c;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const u=t.render(o,s,a),l=a.type||"image/png",A=a.rendererOpts||{};return u.toDataURL(l,A.quality)}})($t);var Gt={};const qe=Et;function bt(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function at(t,e,i){let r=t+e;return typeof i<"u"&&(r+=" "+i),r}function We(t,e,i){let r="",n=0,o=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),u=Math.floor(c/e);!a&&!o&&(o=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(r+=o?at("M",a+i,.5+u+i):at("m",n,0),n=0,o=!1),a+1<e&&t[c+1]||(r+=at("h",s),s=0)):n++}return r}Gt.render=function(e,i,r){const n=qe.getOptions(i),o=e.modules.size,s=e.modules.data,c=o+n.margin*2,a=n.color.light.a?"<path "+bt(n.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+bt(n.color.dark,"stroke")+' d="'+We(s,o,n.margin)+'"/>',l='viewBox="0 0 '+c+" "+c+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof r=="function"&&r(null,f),f};const Ze=fe,gt=Dt,Qt=$t,Xe=Gt;function Bt(t,e,i,r,n){const o=[].slice.call(arguments,1),s=o.length,c=typeof o[s-1]=="function";if(!c&&!Ze())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(n=i,i=e,e=r=void 0):s===3&&(e.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=i,i=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=e,e=r=void 0):s===2&&!e.getContext&&(r=i,i=e,e=void 0),new Promise(function(a,u){try{const l=gt.create(i,r);a(t(l,e,r))}catch(l){u(l)}})}try{const a=gt.create(i,r);n(null,t(a,e,r))}catch(a){n(a)}}gt.create;var tn=Bt.bind(null,Qt.render);Bt.bind(null,Qt.renderToDataURL);Bt.bind(null,function(t,e,i){return Xe.render(t,i)});function en(t){const{accessToken:e}=W();return pt({...t,mutationFn:()=>qt(e)})}function nn(t){const{accessToken:e,keyFactory:i}=W(),r=Ft();return pt({...t,onSuccess:async(...n)=>{t!=null&&t.onSuccess&&t.onSuccess(...n),await r.invalidateQueries(i.getTwoFactorAuthStatusQueryKey())},mutationFn:n=>Wt(n,e)})}function In(t){const{accessToken:e,keyFactory:i}=W(),r=Ft();return pt({...t,onSuccess:async(...n)=>{t!=null&&t.onSuccess&&t.onSuccess(...n),await r.invalidateQueries(i.getTwoFactorAuthStatusQueryKey())},mutationFn:()=>Zt(e)})}function Nn(t){const{accessToken:e,keyFactory:i}=W();return Xt(i.getTwoFactorAuthStatusQueryKey(),()=>te(e),{...t})}function mt(t){const{secret:e,open:i,onClose:r}=t;return b(se,{open:i,onClose:r,children:[p(ue,{children:b(ut,{direction:"row",alignItems:"center",gap:"5px",children:["Use this code to set up 2FA ",p(D,{sx:{flexGrow:1}}),p(Pt,{"aria-label":"Close",onClick:r,children:p(Mt,{icon:"close",wrap:!1,sx:{color:"grey.700"}})})]})}),b(ae,{children:[p(M,{variant:"body1",children:"Your authenticator app will ask for a code to activate two-factor authentication. Use the code below:"}),p(D,{sx:n=>({my:2,p:2,width:"100%",textAlign:"center",background:n.palette.grey[200],fontFamily:ie,letterSpacing:"2px",fontSize:"16px"}),children:e}),p(M,{variant:"body1",children:"After setup, you don’t need to save this code."})]}),p(ce,{children:p(Rt,{variant:"contained",onClick:r,children:"Done"})})]})}try{mt.displayName="TwoFactorSecretDialog",mt.__docgenInfo={description:"",displayName:"TwoFactorSecretDialog",props:{secret:{defaultValue:null,description:"",name:"secret",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}function on(t,e){return`otpauth://totp/Synapse:${e}?secret=${t.secret}&issuer=Sage%20Bionetworks&algorithm=${t.alg}&digits=${t.digits}&period=${t.period}`}const j=Lt(t=>p(D,{sx:{my:3,...t.sx},...t}),{label:"Section"})(()=>({})),ct=Lt(t=>p(D,{...t}),{label:"SectionInnerGrid"})(({theme:t})=>({display:"grid",gridTemplateColumns:"auto 200px",columnGap:t.spacing(5)})),It="";function Nt(t){const{onTwoFactorEnrollmentSuccess:e,onBackClicked:i}=t,[r,n]=k.useState(""),[o,s]=k.useState(!1),[c,a]=k.useState(!1),{data:u}=ee(),l=k.useRef(null),{mutate:A,data:f}=en(),{mutate:d,isLoading:y,error:w}=nn({onSuccess:e});return k.useEffect(()=>{A()},[]),k.useEffect(()=>{async function E(){f&&u&&l.current&&(await tn(l.current,on(f,u.email),{version:10,margin:0,scale:3.5}),s(!0))}E()},[f,u]),p(Yt,{children:b(le,{sx:{position:"relative",width:"800px",py:6.5,px:8,mx:"auto"},children:[i&&p(Pt,{type:"button",onClick:()=>{i()},sx:E=>({position:"absolute",top:E.spacing(2),left:E.spacing(2)}),children:p(Mt,{icon:"arrowBack",wrap:!1,sx:{height:"24px",width:"24px"}})}),b(j,{children:[p(M,{variant:"headline2",sx:{mb:3},children:"Activate Two-factor Authentication"}),b(M,{variant:"body1",children:["After setting up 2FA, you’ll use an authenticator app as part of your login process, in addition to your existing password. If you log in using your Google"," ",!1," account, you may need to use 2FA as part of","that process as well.",It.length>0&&b(jt,{children:[" ",p(U,{href:It,children:"Learn more about 2FA"}),"."]})]})]}),p(j,{children:b(ct,{children:[b(D,{children:[p(M,{variant:"body1",sx:{fontWeight:700},children:"Step 1. Get one of these apps"}),p(M,{variant:"body1",children:"Download and install one of these authentication apps to set up 2FA on your mobile device, tablet, or desktop. If you have one of these apps already installed, you can skip this step."})]}),b(ut,{justifyContent:"space-between",sx:{flexShrink:0},children:[p(U,{href:"https://authy.com/download/",children:"Authy"}),p(U,{href:"https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app",children:"DUO Mobile"}),p(U,{href:"https://googleauthenticator.net/",children:"Google Authenticator"}),p(U,{href:"https://www.microsoft.com/en-us/security/mobile-authenticator-app",children:"Microsoft Authenticator"})]})]})}),p(At,{}),p(j,{children:b(ct,{children:[b(D,{children:[p(M,{variant:"body1",sx:{fontWeight:700},children:"Step 2. Scan the QR Code"}),b(M,{component:"ol",variant:"body1",sx:{pl:2,my:1},children:[p("li",{children:"Open your authenticator app"}),p("li",{children:'Tap the "+" button'}),p("li",{children:"Use your camera to scan the image to the right"})]}),p(U,{onClick:()=>{a(!0)},children:"Can't use your camera?"}),p(mt,{secret:(f==null?void 0:f.secret)??"",open:c,onClose:()=>a(!1)})]}),b(D,{display:"flex",justifyContent:"center",alignItems:"middle",height:"auto",children:[!o&&p(oe,{size:50}),p("canvas",{style:{display:o?void 0:"none"},ref:l})]})]})}),p(At,{}),p(j,{children:b(ct,{children:[b(D,{children:[p(M,{variant:"body1",sx:{fontWeight:700},children:"Step 3. Enter the Verification Code"}),p(M,{variant:"body1",children:"After scanning in the QR code in step 2, your app will provide a 6-digit code. Enter it in in the field to the right."})]}),p("form",{onSubmit:E=>{E.preventDefault(),d({secretId:f.secretId,totp:r})},children:b(ut,{direction:"row",gap:2,height:"48px",children:[p(ne,{noWrapInFormControl:!0,inputProps:{maxLength:f==null?void 0:f.digits},value:r,onChange:E=>{n(E.target.value)}}),p(Rt,{type:"submit",variant:"contained",sx:{flexShrink:0},disabled:y||r.length!=(f==null?void 0:f.digits),children:"Activate"})]})})]})}),w&&p(re,{variant:"danger",isGlobal:!1,description:w.reason})]})})}try{Nt.displayName="TwoFactorEnrollmentForm",Nt.__docgenInfo={description:"",displayName:"TwoFactorEnrollmentForm",props:{onTwoFactorEnrollmentSuccess:{defaultValue:null,description:"",name:"onTwoFactorEnrollmentSuccess",required:!0,type:{name:"() => void"}},onBackClicked:{defaultValue:null,description:"",name:"onBackClicked",required:!0,type:{name:"() => void"}}}}}catch{}export{It as T,In as a,Nt as b,Nn as u};
//# sourceMappingURL=TwoFactorEnrollmentForm-6e100a95.js.map
