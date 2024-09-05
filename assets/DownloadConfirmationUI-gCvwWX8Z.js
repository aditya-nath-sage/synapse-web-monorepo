import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{c as U,g as V,r as O}from"./index-Cu9bd8lq.js";import{j as Q,k as ee,by as te,i as G,bo as ne,bz as se}from"./SynapseClient-CZkcD3lR.js";import"./OrientationBanner-BKoSQ39U.js";import"./RegularExpressions-RV1YxBM7.js";import{u as ie}from"./useDownloadList-BuFp7fwX.js";import{F as oe}from"./index-Cf31rgEj.js";import{d as Y}from"./dayjs.min-D1RcYm3-.js";import{T as P}from"./SynapseTableConstants-2qH3fDlQ.js";import{S as k}from"./SkeletonInlineBlock-xinjJ1wr.js";import{I as re,L as ae}from"./LayersTwoTone-qdhO3ukl.js";import{T as z}from"./Tooltip-Cr4lETRB.js";import{c as de}from"./createSvgIcon--fcRVpp9.js";import{A as le}from"./Alert-DevAguyB.js";import{B}from"./Button-BkvFhVsL.js";import{B as ce}from"./Box-tOdEuW_y.js";import{T as A}from"./Typography-Ctk8_6Bo.js";const ue=de([n.jsx("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m4.2 12.2L11 13V7h1.5v5.2l4.5 2.7z",opacity:".3"},"0"),n.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7z"},"1")],"WatchLaterTwoTone"),me=200,q="ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME",R="ESTIMATED_DOWNLOAD_SPEED",fe="syn12600511",he=h=>new Promise((f,a)=>{const o=localStorage.getItem(q),m=localStorage.getItem(R);if(o&&m&&new Date().getTime()<Number(o)){f(Number(m));return}Q(h,fe).then(d=>{const p=d,w={includeFileHandles:!0,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:[{associateObjectId:p.id,associateObjectType:oe.FileEntity,fileHandleId:p.dataFileHandleId}]};ee(w,h).then(s=>{const c=s.requestedFiles[0].preSignedURL,v=s.requestedFiles[0].fileHandle,y=new Date().getTime();return te(v,c).then(()=>{const $=v.contentSize/((new Date().getTime()-y-me)/1e3),g=new Date().getTime();localStorage.setItem(q,(g+1e3*60*5).toString()),localStorage.setItem(R,$.toString()),f($)})})}).catch(d=>a(d))});var Z={exports:{}};(function(h,f){(function(a,o){h.exports=o()})(U,function(){var a,o,m=1e3,d=6e4,p=36e5,T=864e5,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=31536e6,c=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:s,months:c,days:T,hours:p,minutes:d,seconds:m,milliseconds:1,weeks:6048e5},$=function(i){return i instanceof I},g=function(i,t,e){return new I(i,e,t.$l)},D=function(i){return o.p(i)+"s"},b=function(i){return i<0},M=function(i){return b(i)?Math.ceil(i):Math.floor(i)},F=function(i){return Math.abs(i)},C=function(i,t){return i?b(i)?{negative:!0,format:""+F(i)+t}:{negative:!1,format:""+i+t}:{negative:!1,format:""}},I=function(){function i(e,r,u){var l=this;if(this.$d={},this.$l=u,e===void 0&&(this.$ms=0,this.parseFromMilliseconds()),r)return g(e*y[D(r)],this);if(typeof e=="number")return this.$ms=e,this.parseFromMilliseconds(),this;if(typeof e=="object")return Object.keys(e).forEach(function(E){l.$d[D(E)]=e[E]}),this.calMilliseconds(),this;if(typeof e=="string"){var x=e.match(v);if(x){var S=x.slice(2).map(function(E){return E!=null?Number(E):0});return this.$d.years=S[0],this.$d.months=S[1],this.$d.weeks=S[2],this.$d.days=S[3],this.$d.hours=S[4],this.$d.minutes=S[5],this.$d.seconds=S[6],this.calMilliseconds(),this}}return this}var t=i.prototype;return t.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce(function(r,u){return r+(e.$d[u]||0)*y[u]},0)},t.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=M(e/s),e%=s,this.$d.months=M(e/c),e%=c,this.$d.days=M(e/T),e%=T,this.$d.hours=M(e/p),e%=p,this.$d.minutes=M(e/d),e%=d,this.$d.seconds=M(e/m),e%=m,this.$d.milliseconds=e},t.toISOString=function(){var e=C(this.$d.years,"Y"),r=C(this.$d.months,"M"),u=+this.$d.days||0;this.$d.weeks&&(u+=7*this.$d.weeks);var l=C(u,"D"),x=C(this.$d.hours,"H"),S=C(this.$d.minutes,"M"),E=this.$d.seconds||0;this.$d.milliseconds&&(E+=this.$d.milliseconds/1e3,E=Math.round(1e3*E)/1e3);var L=C(E,"S"),X=e.negative||r.negative||l.negative||x.negative||S.negative||L.negative,J=x.format||S.format||L.format?"T":"",N=(X?"-":"")+"P"+e.format+r.format+l.format+J+x.format+S.format+L.format;return N==="P"||N==="-P"?"P0D":N},t.toJSON=function(){return this.toISOString()},t.format=function(e){var r=e||"YYYY-MM-DDTHH:mm:ss",u={Y:this.$d.years,YY:o.s(this.$d.years,2,"0"),YYYY:o.s(this.$d.years,4,"0"),M:this.$d.months,MM:o.s(this.$d.months,2,"0"),D:this.$d.days,DD:o.s(this.$d.days,2,"0"),H:this.$d.hours,HH:o.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:o.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:o.s(this.$d.seconds,2,"0"),SSS:o.s(this.$d.milliseconds,3,"0")};return r.replace(w,function(l,x){return x||String(u[l])})},t.as=function(e){return this.$ms/y[D(e)]},t.get=function(e){var r=this.$ms,u=D(e);return u==="milliseconds"?r%=1e3:r=u==="weeks"?M(r/y[u]):this.$d[u],r||0},t.add=function(e,r,u){var l;return l=r?e*y[D(r)]:$(e)?e.$ms:g(e,this).$ms,g(this.$ms+l*(u?-1:1),this)},t.subtract=function(e,r){return this.add(e,r,!0)},t.locale=function(e){var r=this.clone();return r.$l=e,r},t.clone=function(){return g(this.$ms,this)},t.humanize=function(e){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},t.valueOf=function(){return this.asMilliseconds()},t.milliseconds=function(){return this.get("milliseconds")},t.asMilliseconds=function(){return this.as("milliseconds")},t.seconds=function(){return this.get("seconds")},t.asSeconds=function(){return this.as("seconds")},t.minutes=function(){return this.get("minutes")},t.asMinutes=function(){return this.as("minutes")},t.hours=function(){return this.get("hours")},t.asHours=function(){return this.as("hours")},t.days=function(){return this.get("days")},t.asDays=function(){return this.as("days")},t.weeks=function(){return this.get("weeks")},t.asWeeks=function(){return this.as("weeks")},t.months=function(){return this.get("months")},t.asMonths=function(){return this.as("months")},t.years=function(){return this.get("years")},t.asYears=function(){return this.as("years")},i}(),j=function(i,t,e){return i.add(t.years()*e,"y").add(t.months()*e,"M").add(t.days()*e,"d").add(t.hours()*e,"h").add(t.minutes()*e,"m").add(t.seconds()*e,"s").add(t.milliseconds()*e,"ms")};return function(i,t,e){a=e,o=e().$utils(),e.duration=function(l,x){var S=e.locale();return g(l,{$l:S},x)},e.isDuration=$;var r=t.prototype.add,u=t.prototype.subtract;t.prototype.add=function(l,x){return $(l)?j(this,l,1):r.bind(this)(l,x)},t.prototype.subtract=function(l,x){return $(l)?j(this,l,-1):u.bind(this)(l,x)}}})})(Z);var pe=Z.exports;const ye=V(pe);var K={exports:{}};(function(h,f){(function(a,o){h.exports=o()})(U,function(){return function(a,o,m){a=a||{};var d=o.prototype,p={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(s,c,v,y){return d.fromToBase(s,c,v,y)}m.en.relativeTime=p,d.fromToBase=function(s,c,v,y,$){for(var g,D,b,M=v.$locale().relativeTime||p,F=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],C=F.length,I=0;I<C;I+=1){var j=F[I];j.d&&(g=y?m(s).diff(v,j.d,!0):v.diff(s,j.d,!0));var i=(a.rounding||Math.round)(Math.abs(g));if(b=g>0,i<=j.r||!j.r){i<=1&&I>0&&(j=F[I-1]);var t=M[j.l];$&&(i=$(""+i)),D=typeof t=="string"?t.replace("%d",i):t(i,c,j.l,b);break}}if(c)return D;var e=b?M.future:M.past;return typeof e=="function"?e(D):e.replace("%s",D)},d.to=function(s,c){return T(s,c,this,!0)},d.from=function(s,c){return T(s,c,this)};var w=function(s){return s.$u?m.utc():m()};d.toNow=function(s){return this.to(w(this),s)},d.fromNow=function(s){return this.from(w(this),s)}}})})(K);var ge=K.exports;const xe=V(ge);Y.extend(ye);Y.extend(xe);function H(h){const{numFiles:f,numBytes:a}=h,{accessToken:o}=G(),m=!!a,[d,p]=O.useState({isLoading:m,downloadSpeed:0}),{isLoading:T,downloadSpeed:w}=d;O.useEffect(()=>{o&&he(o).then(D=>{p({isLoading:!1,downloadSpeed:D})})},[o]);const s=T||w===0||!a?0:a/w,c=s===0,v=c?"":Y.duration({seconds:s}).humanize(),y=f===0,$=y?"SRC-inactive":"SRC-primary-text-color",g=c?"SRC-inactive":"SRC-primary-text-color";return n.jsxs("span",{className:"download-details-container",children:[n.jsxs("span",{children:[n.jsx(re,{className:$}),y?n.jsx(k,{width:50}):n.jsxs(n.Fragment,{children:[f.toLocaleString()," files"]})]}),m&&n.jsx(z,{title:"This is the total size of all files. Zipped package(s) will likely be smaller.",enterNextDelay:P,placement:"top",children:n.jsxs("span",{"data-testid":"numBytesUI",children:[n.jsx(ae,{className:g}),c?n.jsx(k,{width:50}):ne(a)]})}),m&&n.jsx(z,{title:"This is an estimate of how long package download will take.",enterNextDelay:P,placement:"top",children:n.jsxs("span",{"data-testid":"downloadTimeEstimateUI",children:[n.jsx(ue,{className:g}),T&&f>0?n.jsx(k,{width:50}):v]})})]})}try{H.displayName="DownloadDetails",H.__docgenInfo={description:`Displays download information including number of files, size of download, and time to download.
Prefer to use {@link ../DownloadCart/DownloadDetails} instead, particularly when you have information about file packaging in/eligibility`,displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!1,type:{name:"number"}}}}}catch{}const _={2:{severity:"info",infoText:"Would you like to add these files to the download cart?",closeText:"Cancel"},3:{severity:"info",infoText:n.jsxs(n.Fragment,{children:["Note: Files that you add will be mixed in with the files already in your download cart.",n.jsx("br",{}),"If you don't want to mix these files, clear your download cart before continuing."]}),closeText:"Cancel"},1:{severity:"info",infoText:"Adding files to download cart",closeText:"Cancel"},0:{severity:"info",infoText:"Calculating file size",closeText:"Cancel"},4:{severity:"error",closeText:"Close",infoText:n.jsxs(n.Fragment,{children:["Please ",n.jsx(se,{})," to add files to your download cart."]})}};function Te(h){const{status:f,fileCount:a,fileSize:o}=h;switch(f){case 0:case 1:return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"spinner white"}),n.jsx(A,{variant:"smallText1",children:_[f].infoText})]});case 4:return n.jsx(A,{variant:"smallText1",children:_[f].infoText});case 2:case 3:return n.jsxs(n.Fragment,{children:[n.jsx(H,{numFiles:a,numBytes:o}),n.jsx(A,{variant:"smallText1",sx:{flexGrow:1},children:_[f].infoText})]});default:return n.jsx(n.Fragment,{})}}function W(h){const{onAddToDownloadCart:f,onCancel:a,fileCount:o,fileSize:m,isLoadingStats:d=!1,isAddingToDownloadCart:p=!1}=h,{accessToken:T}=G(),{data:w}=ie(),s=O.useMemo(()=>T?d?0:p?1:w&&w.totalNumberOfFiles>0?3:2:4,[T,d,p,w]);return n.jsx(n.Fragment,{children:n.jsx(le,{sx:{pr:4,py:1,display:"flex",justifyContent:"space-between",alignItems:"center"},icon:_[s].severity==="error"?void 0:!1,severity:_[s].severity,className:"download-confirmation",action:n.jsxs(n.Fragment,{children:[s!==1&&n.jsx(B,{variant:"text",color:"primary",onClick:a,children:_[s].closeText}),(s===2||s===3)&&n.jsx(B,{variant:"contained",color:"primary",onClick:()=>{f()},sx:{ml:"5px"},children:"Add"})]}),children:n.jsx(ce,{display:"flex",alignItems:"center",gap:1,children:n.jsx(Te,{status:s,fileCount:o,fileSize:m})})})})}try{W.displayName="DownloadConfirmationUI",W.__docgenInfo={description:`This component is used to display the download confirmation dialog that presents to a user the number of files and the
total size of the files they are about to add to their download cart.`,displayName:"DownloadConfirmationUI",props:{onAddToDownloadCart:{defaultValue:null,description:"",name:"onAddToDownloadCart",required:!0,type:{name:"() => void"}},fileCount:{defaultValue:null,description:"",name:"fileCount",required:!0,type:{name:"number"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},isLoadingStats:{defaultValue:null,description:"",name:"isLoadingStats",required:!1,type:{name:"boolean"}},isAddingToDownloadCart:{defaultValue:null,description:"",name:"isAddingToDownloadCart",required:!1,type:{name:"boolean"}}}}}catch{}export{W as D,ye as d,xe as r};
