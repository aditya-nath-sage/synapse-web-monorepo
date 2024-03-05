var C=(r,t,s)=>{if(!t.has(r))throw TypeError("Cannot "+s)};var e=(r,t,s)=>(C(r,t,"read from private field"),s?s.call(r):t.get(r)),l=(r,t,s)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,s)},b=(r,t,s,i)=>(C(r,t,"write to private field"),i?i.call(r,s):t.set(r,s),s);var p=(r,t,s)=>(C(r,t,"access private method"),s);import{r as f}from"./index-76fb7be0.js";import{ad as U,aq as k,ar as w,as as q,ae as R,n as L,at as j}from"./ApplicationSessionManager-7bf0c8e1.js";var n,u,o,h,m,g,v,E,K,A=(K=class extends U{constructor(t,s){super();l(this,m);l(this,v);l(this,n,void 0);l(this,u,void 0);l(this,o,void 0);l(this,h,void 0);b(this,n,t),this.setOptions(s),this.bindMethods(),p(this,m,g).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=e(this,n).defaultMutationOptions(t),k(this.options,s)||e(this,n).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():(i=e(this,o))==null||i.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){p(this,m,g).call(this),p(this,v,E).call(this,t)}getCurrentResult(){return e(this,u)}reset(){var t;(t=e(this,o))==null||t.removeObserver(this),b(this,o,void 0),p(this,m,g).call(this),p(this,v,E).call(this)}mutate(t,s){var i;return b(this,h,s),(i=e(this,o))==null||i.removeObserver(this),b(this,o,e(this,n).getMutationCache().build(e(this,n),this.options)),e(this,o).addObserver(this),e(this,o).execute(t)}},n=new WeakMap,u=new WeakMap,o=new WeakMap,h=new WeakMap,m=new WeakSet,g=function(){var s;const t=((s=e(this,o))==null?void 0:s.state)??q();b(this,u,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},v=new WeakSet,E=function(t){R.batch(()=>{var s,i,a,y,c,O,S,x;if(e(this,h)&&this.hasListeners()){const d=e(this,u).variables,M=e(this,u).context;(t==null?void 0:t.type)==="success"?((i=(s=e(this,h)).onSuccess)==null||i.call(s,t.data,d,M),(y=(a=e(this,h)).onSettled)==null||y.call(a,t.data,null,d,M)):(t==null?void 0:t.type)==="error"&&((O=(c=e(this,h)).onError)==null||O.call(c,t.error,d,M),(x=(S=e(this,h)).onSettled)==null||x.call(S,void 0,t.error,d,M))}this.listeners.forEach(d=>{d(e(this,u))})})},K);function T(r,t){const s=L(t),[i]=f.useState(()=>new A(s,r));f.useEffect(()=>{i.setOptions(r)},[i,r]);const a=f.useSyncExternalStore(f.useCallback(c=>i.subscribe(R.batchCalls(c)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),y=f.useCallback((c,O)=>{i.mutate(c,O).catch(D)},[i]);if(a.error&&j(i.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:y,mutateAsync:a.mutate}}function D(){}export{T as u};
