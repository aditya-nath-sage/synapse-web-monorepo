import{_ as P}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import{_ as R}from"./createTheme-CcAD2pPO.js";import{u as E,c as N}from"./ThemeProvider-D_KqLH_M.js";import{R as f}from"./index-Dl6G-zuu.js";var w=["bsPrefix","className","noGutters","as"],G=["xl","lg","md","sm","xs"],h={noGutters:!1},i=f.forwardRef(function(s,p){var u=s.bsPrefix,m=s.className,n=s.noGutters,t=s.as,d=t===void 0?"div":t,o=R(s,w),l=E(u,"row"),v=l+"-cols",c=[];return G.forEach(function(e){var a=o[e];delete o[e];var r;a!=null&&typeof a=="object"?r=a.cols:r=a;var x=e!=="xs"?"-"+e:"";r!=null&&c.push(""+v+x+"-"+r)}),f.createElement(d,P({ref:p},o,{className:N.apply(void 0,[m,l,n&&"no-gutters"].concat(c))}))});i.displayName="Row";i.defaultProps=h;export{i as R};
