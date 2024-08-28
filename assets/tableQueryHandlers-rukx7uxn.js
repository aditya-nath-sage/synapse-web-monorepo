import{l}from"./index-BnUe19-C.js";import{bg as R,s as d,B as y,bh as D,bi as O}from"./SynapseClient-D4gkDMC-.js";import{B as _}from"./BasicMockedCrudService-BRYNF0mp.js";import{c as b,b as B,m as U,x as A,r as M,s as F,y as L,t as C}from"./SynapseConstants-DNR648SI.js";import{o as q}from"./omit-CSy2asyG.js";import{c as S}from"./cloneDeep-rJi3vbui.js";import{u as j}from"./uniqueId-CSw6ftlJ.js";const f=new _({idField:"id",autoGenerateId:!0});function N(e,t,n,o=d(y.REPO_ENDPOINT),r=201){return[l.rest.post(`${o}${e}`,async(a,i,s)=>{const u=f.create({request:await a.json(),response:n});return i(s.status(201),s.json({token:u.id}))}),l.rest.get(`${o}${R(":id")}`,async(a,i,s)=>{const u=a.params.id,c=f.getOneById(u);if(!u||!c)return i(s.status(404),s.json({message:"The mocked asynchronous job was not found"}));const{request:T,response:m}=c,E=typeof m=="function"?m(T):m,g=r<400?"COMPLETE":"FAILED";return i(s.status(200),s.json({jobState:g,jobCanceling:!1,requestBody:T,etag:"00000000-0000-0000-0000-000000000000",jobId:u,responseBody:E,startedByUserId:0,startedOn:"",changedOn:"",progressMessage:"",progressCurrent:100,progressTotal:100,exception:"",errorMessage:"",errorDetails:"",runtimeMS:100}))}),l.rest.get(`${o}${t(":asyncJobToken")}`,async(a,i,s)=>{const u=a.params.asyncJobToken,c=f.getOneById(u);if(!u||!c)return i(s.status(404),s.json({message:"The mocked asynchronous job was not found"}));const{request:T,response:m}=c,E=typeof m=="function"?m(T):m;return i(s.status(r),s.json(E))})]}const w=[{name:"id",columnType:"ENTITYID",id:"81721"},{name:"name",columnType:"STRING",id:"81722",maximumSize:256},{name:"description",columnType:"STRING",id:"87941",maximumSize:1e3},{name:"createdOn",columnType:"DATE",facetType:"range",id:"81723"},{name:"createdBy",columnType:"USERID",facetType:"enumeration",id:"81724"},{name:"etag",columnType:"STRING",id:"81725",maximumSize:36},{name:"modifiedOn",columnType:"DATE",facetType:"range",id:"81726"},{name:"modifiedBy",columnType:"USERID",facetType:"enumeration",id:"81727"},{name:"type",columnType:"STRING",facetType:"enumeration",id:"196992",maximumSize:20},{name:"currentVersion",columnType:"INTEGER",id:"81729"},{name:"parentId",columnType:"ENTITYID",facetType:"enumeration",id:"81730"},{name:"benefactorId",columnType:"ENTITYID",id:"81731"},{name:"projectId",columnType:"ENTITYID",facetType:"enumeration",id:"81732"},{name:"dataFileHandleId",columnType:"FILEHANDLEID",id:"81733"},{name:"dataFileName",columnType:"STRING",id:"199088",maximumSize:256},{name:"dataFileSizeBytes",columnType:"INTEGER",id:"112368"},{name:"dataFileMD5Hex",columnType:"STRING",id:"112369",maximumSize:100},{name:"dataFileConcreteType",columnType:"STRING",facetType:"enumeration",id:"196995",maximumSize:65},{name:"dataFileBucket",columnType:"STRING",facetType:"enumeration",id:"196996",maximumSize:100},{name:"dataFileKey",columnType:"STRING",id:"184972",maximumSize:700}],P={[b]:"queryResult",[B]:"queryCount",[U]:"selectColumns",[A]:"maxRowsPerPage",[M]:"columnModels",[F]:"facets",[L]:"sumFileSizes",[C]:"lastUpdatedOn"},p=new _({idField:"id",autoGenerateId:!0});function Q(e,t){const n=S(e);return Object.entries(P).forEach(([o,r])=>{t&parseInt(o)||delete n[r]}),n}function Y(e,t=25,n=0){var r;const o=S(e);return(r=o.queryResult)!=null&&r.queryResults.rows&&(o.queryResult.queryResults.rows=o.queryResult.queryResults.rows.slice(n,n+t)),o}function h(e,t){let n=t;return n=Q(n,e.partMask),n=Y(n,e.query.limit,e.query.offset),n}function I(e){return q(S(e),["limit","offset"])}function G(e){const t=p.getOneByField("query",e.query);t?p.update(t.id,{...e,id:t.id}):p.create(e)}function k(e){const t=I(e.query),n=p.getOneByField("query",t);if(n==null)throw new Error(`mockTableQueryService does not have a query result for the given query:
${JSON.stringify(e,null,2)}`);return h(e,n.result)}function V(e,t){G({query:I(e),result:t})}function W(e=d(y.REPO_ENDPOINT),t=":id"){return N(O(t),n=>D(t,n),n=>k(n),e)}function X(e,t=d(y.REPO_ENDPOINT)){return N("/repo/v1/column/view/scope/async/start",n=>`/repo/v1/column/view/scope/async/get/${n}`,e,t)}function Z(e=d(y.REPO_ENDPOINT)){return[l.rest.get(`${e}/repo/v1/column/tableview/defaults`,async(t,n,o)=>n(o.status(200),o.json({concreteType:"org.sagebionetworks.repo.model.table.ColumnModel",list:w})))]}function ee(e=d(y.REPO_ENDPOINT)){return l.rest.post(`${e}/repo/v1/column/batch`,async(t,n,o)=>{const{list:r}=await t.json();return r.forEach(a=>{a.id||(a.id=j())}),n(o.status(201),o.json({concreteType:"org.sagebionetworks.repo.model.table.ColumnModel",list:r}))})}export{Z as a,X as b,ee as c,W as g,V as r};
