import{r as u}from"./index-f1f749bf.js";function o(){var r=u.useRef(!0),n=u.useRef(function(){return r.current});return u.useEffect(function(){return r.current=!0,function(){r.current=!1}},[]),n.current}var e=Function.prototype.bind.call(Function.prototype.call,[].slice);function c(r,n){return e(r.querySelectorAll(n))}function s(r){var n=u.useRef(null);return u.useEffect(function(){n.current=r}),n.current}function a(){return u.useState(null)}function i(r,n){if(r.contains)return r.contains(n);if(r.compareDocumentPosition)return r===n||!!(r.compareDocumentPosition(n)&16)}export{s as a,a as b,i as c,c as q,o as u};
//# sourceMappingURL=contains-e27fcc5c.js.map
