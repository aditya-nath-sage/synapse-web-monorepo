import{d as s}from"./_getPrototype-DSx75BAr.js";import{i as m}from"./uniq-QoZudxtQ.js";var f=/\s/;function a(r){for(var t=r.length;t--&&f.test(r.charAt(t)););return t}var o=a,c=o,d=/^\s+/;function b(r){return r&&r.slice(0,c(r)+1).replace(d,"")}var p=b,I=p,e=s,x=m,n=NaN,y=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,_=/^0o[0-7]+$/i,$=parseInt;function N(r){if(typeof r=="number")return r;if(x(r))return n;if(e(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=e(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=I(r);var i=O.test(r);return i||_.test(r)?$(r.slice(2),i?2:8):y.test(r)?n:+r}var E=N;export{E as t};
