import{l as i}from"./index-BnUe19-C.js";import{g as P}from"./entityHandlers-BYPNT1vY.js";import{g as _,a as w}from"./userProfileHandlers-CqWDQDTX.js";import{bB as y,bC as j,bD as N,bE as C,bF as F,bG as h,s as D,B as T}from"./SynapseClient-D4gkDMC-.js";import{c as O}from"./accessRequirementHandlers-BRTJRyQF.js";import{b as M}from"./MockSubmission-C0KZ_LPx.js";import{g as L}from"./dataAccessRequestHandlers-BGzmZRK1.js";import{g as U}from"./researchProjectHandlers-CVC9sLgU.js";import{g as B}from"./fileHandlers-BX_VIe5j.js";import{v as p,s as v,aa as d}from"./index-0sKCi0IA.js";import{m as R,a as H}from"./mock_discussion-BrHKyp2Z.js";import{M as m}from"./mock_user_profile-DyzXylki.js";import{m as V}from"./mockProject-C5hkJfO-.js";import{B as S}from"./BasicMockedCrudService-BRYNF0mp.js";import{f as A}from"./fakerUtils-JZNSDtdI.js";import{c as G,b as q,a as K,g as W}from"./tableQueryHandlers-rukx7uxn.js";import{a as I}from"./mockEvaluationQueue-BiYUFHwS.js";import{M as Y}from"./mockAnnotationColumns-Xs58V-QE.js";import{g as X}from"./personalAccessTokenHandlers-CvvqE55K.js";import{g as J,a as Q}from"./teamHandlers-Bk6a_EjL.js";import{g as z}from"./accessRequirementAclHandlers-Dm40En5c.js";import{g as Z}from"./resetTwoFactorAuthHandlers-BYieUUXZ.js";import"./RegularExpressions-CgDTvkkI.js";import"./OrientationBanner-DcDyIfis.js";import"./index-Dl6G-zuu.js";import"./jsx-runtime-Du8NFWEI.js";const x=new S({initialData:R,idField:"id",autoGenerateId:!0}),E=new S({initialData:H,idField:"id",autoGenerateId:!0});function k(t,r){return E.getMany(o=>o.forumId===t).filter(o=>{switch(r){case p.NO_FILTER:return!0;case p.DELETED_ONLY:return o.isDeleted;case p.EXCLUDE_DELETED:return!o.isDeleted}})}function tt(t){return[i.rest.get(`${t}${y}/:id`,async(r,o,e)=>{let s=404,a={reason:`MSW could not find a mock forum object with ID ${r.params.id}`};const n=x.getOneById(r.params.id);return n&&(s=200,a=n),o(e.status(s),e.json(a))}),i.rest.get(`${t}${j}/:id`,async(r,o,e)=>{let s=404,a={reason:`MSW could not find a mock discussion thread bundle object with ID ${r.params.id}`};r.params.id==="messageUrl"&&(a={reason:"GET /thread/messageUrl is not yet implemented"});const n=E.getOneById(r.params.id);return n&&(s=200,a=n),o(e.status(s),e.json(a))}),i.rest.post(`${t}${j}`,async(r,o,e)=>{const s=await r.json(),a=E.create({forumId:s.forumId,projectId:V.id,title:s.title,createdOn:new Date().toISOString(),createdBy:String(m),modifiedOn:new Date().toISOString(),etag:"etag",messageKey:"todo key",numberOfViews:0,numberOfReplies:0,lastActivity:new Date().toISOString(),activeAuthors:[String(m)],isEdited:!1,isDeleted:!1,isPinned:!1});return o(e.status(201),e.json(a))}),i.rest.get(`${t}${N(":forumId")}`,async(r,o,e)=>{const s=r.url.searchParams.get("offset"),a=s?parseInt(s):0,n=r.url.searchParams.get("limit"),u=n?parseInt(n):10,c=r.params.filter??p.EXCLUDE_DELETED,l=k(r.params.forumId,c),g={results:l.slice(a,a+u),totalNumberOfResults:l.length};return o(e.status(200),e.json(g))}),i.rest.get(`${t}${y}/:id/moderators`,async(r,o,e)=>{const s={results:[String(m)],totalNumberOfResults:1};return o(e.status(200),e.json(s))})]}function $(t){return{subscriptionId:String(A.number.int({min:1e3,max:9999})),subscriberId:String(m),createdOn:A.date.anytime().toISOString(),...t}}const et=R.map(t=>$({objectId:t.id,objectType:v.FORUM})),st=H.map(t=>$({objectType:v.THREAD,objectId:t.id})),f=new S({initialData:[...et,...st],idField:"subscriptionId",autoGenerateId:!0});function b(t,r="ASC",o=0,e=10,s){const a=f.getAll().filter(u=>t?u.objectType===t:!0).filter(u=>s?s.includes(u.objectId):!0).sort((u,c)=>{const l=new Date(c.createdOn).getTime()-new Date(u.createdOn).getTime();return r==="ASC"?l:-1*l}),n=a.length;return{results:a.slice(o,o+e),totalNumberOfResults:n}}function rt(t){return[i.rest.get(`${t}/repo/v1/subscription/all`,async(r,o,e)=>{const s=r.url.searchParams.get("objectType")??void 0,a=r.url.searchParams.get("sortDirection")??void 0,n=r.url.searchParams.get("offset"),u=n?parseInt(n):void 0,c=r.url.searchParams.get("limit"),l=c?parseInt(c):void 0,g=b(s??void 0,a,u,l);return o(e.status(200),e.json(g))}),i.rest.post(`${t}/repo/v1/subscription/list`,async(r,o,e)=>{const s=await r.json(),a=b(s.objectType,s.sortDirection,void 0,void 0,s.idList);return o(e.status(200),e.json(a))}),i.rest.post(`${t}/repo/v1/subscription`,async(r,o,e)=>{const s=await r.json(),a=f.create({subscriberId:String(m),objectId:s.objectId,objectType:s.objectType,createdOn:new Date().toISOString()});return o(e.status(201),e.json(a))}),i.rest.delete(`${t}/repo/v1/subscription/:id`,async(r,o,e)=>{const s=r.params.id;return f.delete(s),o(e.status(200),e.body(""))}),i.rest.post(`${t}/repo/v1/subscription/subscribers`,async(r,o,e)=>{const s=await r.json(),n={subscribers:f.getMany(u=>u.objectType===s.objectType&&u.objectId===s.objectId).map(u=>u.subscriberId)};return o(e.status(200),e.json(n))})]}function ot(t){return[i.rest.get(`${t}${C(":evaluationId")}`,async(r,o,e)=>{let s=404,a={reason:`Mock Service worker could not find a mock evaluation queue with ID ${r.params.evaluationId}`};const n=I.find(u=>u.id===r.params.entityId);return n&&(a=n,s=200),o(e.status(s),e.json(a))}),i.rest.get(`${t}${F}`,async(r,o,e)=>{let s=200,a={results:I,totalNumberOfResults:I.length};return o(e.status(s),e.json(a))})]}function at(t){return[i.rest.post(`${t}${h}/message`,async(r,o,e)=>{const s=await r.json();return o(e.status(201),e.json(s))})]}const nt={[d.DESCRIPTION_FIELD]:!1,[d.VIRTUALTABLE_SUPPORT]:!1,[d.JSONSCHEMA_VALIDATION_STATUS]:!1,[d.REACT_ENTITY_ACL_EDITOR]:!1};function it(t={portalOrigin:D(T.PORTAL_ENDPOINT),overrides:{}}){const{portalOrigin:r,overrides:o}=t;return i.rest.get(`${r}Portal/featureflags`,(e,s,a)=>s(a.status(200),a.json({...nt,...o}),a.set("Content-Type","application/json")))}const ut={creators:[{creatorName:"Farnsworth, Hubert"},{creatorName:"Wong, Amy"}],titles:[{title:"Mathematics of quantum neutrino fields"}],publicationYear:3024};function lt(t,r=ut){return[i.rest.get(`${t}${h}/doi`,async(o,e,s)=>e(s.status(201),s.json(r)))]}const ct=(t,r)=>[i.rest.options("*",async(o,e,s)=>e(s.status(200))),i.rest.get(`${t}/auth/v1/authenticatedOn`,async(o,e,s)=>e(s.status(200),s.json({authenticatedOn:new Date().toISOString()}))),...P(t),..._(t),w(t,!0,!0),...M(t),...O(t),...z(t),...L(t),...U(t),...B(t),...tt(t),...rt(t),...ot(t),G(t),...q(Y,t),...K(t),...X(t),...J(t),...Q(t),...Z(t),...at(t),it({portalOrigin:r}),...W(t),...lt(t)];ct(D(T.REPO_ENDPOINT),D(T.PORTAL_ENDPOINT));export{ct as g};
