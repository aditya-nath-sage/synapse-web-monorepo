import{r as M}from"./index-f1f749bf.js";import{a4 as l,a6 as c,ap as S,c5 as T,c6 as p,c7 as d}from"./index-5643b5a3.js";import{u as k}from"./useInfiniteQuery-2d662a61.js";import{i,v as b}from"./SynapseConstants-f1d07af3.js";import{e as f}from"./queryKeys-dd803d9a.js";const y={staleTime:1e3*60*30};function _(s,t){const{accessToken:a}=l();return c(f.tableQueryResult(s,!1),()=>T(s,a),{...y,...t})}function R(s,t,a){const{accessToken:r}=l();return c(f.tableQueryResultWithAsyncStatus(s,!1),()=>d(s,r,a),{...y,...t})}function E(s,t,a){const r=s.partMask&i,e={...s,partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return R(e,{...t,enabled:u},a)}function v(s,t,a){const r=s.partMask&~i,e={...s,query:{...s.query,offset:void 0,limit:void 0,sort:void 0},partMask:r},u=r>0?t==null?void 0:t.enabled:!1;return R(e,{...t,enabled:u},a)}function w(s,t,a){const r=E(s,t,a),e=v(s,t,a);return M.useMemo(()=>r.status==="error"?r:e.status==="error"?e:r.status==="loading"?r:e.status==="loading"?e:r.status==="idle"?p({},r,e):p({},e,r),[r,e])}function L(s,t,a){const{accessToken:r}=l();return k(f.tableQueryResult(s,!0),e=>{const u=e.pageParam?parseInt(e.pageParam):0;return d({...s,query:{...s.query,offset:u},partMask:u!==0?s.partMask&i:s.partMask},r,a)},{...y,...t,select:e=>{const u=e==null?void 0:e.pages[0];if(u.responseBody)for(let n=0;n<e.pages.length;n++){const o=e.pages[n];o.responseBody!=null&&(e.pages[n].responseBody={...u.responseBody,queryResult:o.responseBody.queryResult})}return e},getPreviousPageParam:e=>{if(e.jobState!=="COMPLETE")return;const u=e.requestBody;if(u.query.offset==null||u.query.offset===0)return;const n=u.query.limit??b;return Math.max(u.query.offset-n,0)},getNextPageParam:(e,u)=>{var Q,g;if(e.jobState!=="COMPLETE")return;const n=e.requestBody,o=n.query.limit??b,m=(Q=u[0].responseBody)==null?void 0:Q.queryCount;if(!(m!=null&&(n.query.offset??0)+o>=m))return((g=e.responseBody.queryResult)==null?void 0:g.queryResults.rows.length)===o?(n.query.offset??0)+o:void 0}})}function q(s,t){const{accessToken:a}=l();return c(f.fullTableQueryResult(s),()=>S(s,a),{...y,...t})}export{L as a,w as b,q as c,_ as u};
//# sourceMappingURL=useGetQueryResultBundle-b427b6c4.js.map
