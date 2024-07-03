import{l as u}from"./index-DzDa9m9N.js";import{g as A}from"./entityHandlers-CUCff_0N.js";import{g as H,a as w}from"./userProfileHandlers-vvmPiGx6.js";import{g as $,B as R}from"./getEndpoint-CjoHA800.js";import{c as P}from"./accessRequirementHandlers-Cgxegykt.js";import{b as M}from"./MockSubmission-BWO0hZa0.js";import{a as C,g as N}from"./fileHandlers-BnJO-eYe.js";import{g as U}from"./researchProjectHandlers-MXRpruFM.js";import{bG as y,bH as j,bI as B,bJ as F,bK as _}from"./SynapseClient-CAQcZ9i4.js";import{v as d,t as h}from"./index-Jpdv6DNM.js";import{m as T,a as E}from"./mock_discussion-Cm7ypSOW.js";import{M as m}from"./mock_user_profile-DyzXylki.js";import{m as L}from"./mockProject-C5SMmWY2.js";import{B as D}from"./BasicMockedCrudService-Meq6LLUE.js";import{f as S}from"./fakerUtils-JZNSDtdI.js";import{c as O,b as G,a as K}from"./tableQueryHandlers-DOQU_to4.js";import{a as g}from"./mockEvaluationQueue-BiYUFHwS.js";import{M as V}from"./mockAnnotationColumns-Cxm-dIwz.js";import{g as W}from"./personalAccessTokenHandlers-CKxpFkm8.js";import{g as X,a as Y}from"./teamHandlers-CvQgfRS8.js";import{g as q}from"./accessRequirementAclHandlers-DL-ql6Rf.js";import{g as J}from"./resetTwoFactorAuthHandlers-CTK7DxfS.js";const z=new D({initialData:T,idField:"id",autoGenerateId:!0}),I=new D({initialData:E,idField:"id",autoGenerateId:!0});function Q(t,s){return I.getMany(r=>r.forumId===t).filter(r=>{switch(s){case d.NO_FILTER:return!0;case d.DELETED_ONLY:return r.isDeleted;case d.EXCLUDE_DELETED:return!r.isDeleted}})}function Z(t){return[u.rest.get(`${t}${y}/:id`,async(s,r,e)=>{let o=404,a={reason:`MSW could not find a mock forum object with ID ${s.params.id}`};const n=z.getOneById(s.params.id);return n&&(o=200,a=n),r(e.status(o),e.json(a))}),u.rest.get(`${t}${j}/:id`,async(s,r,e)=>{let o=404,a={reason:`MSW could not find a mock discussion thread bundle object with ID ${s.params.id}`};s.params.id==="messageUrl"&&(a={reason:"GET /thread/messageUrl is not yet implemented"});const n=I.getOneById(s.params.id);return n&&(o=200,a=n),r(e.status(o),e.json(a))}),u.rest.post(`${t}${j}`,async(s,r,e)=>{const o=await s.json(),a=I.create({forumId:o.forumId,projectId:L.id,title:o.title,createdOn:new Date().toISOString(),createdBy:String(m),modifiedOn:new Date().toISOString(),etag:"etag",messageKey:"todo key",numberOfViews:0,numberOfReplies:0,lastActivity:new Date().toISOString(),activeAuthors:[String(m)],isEdited:!1,isDeleted:!1,isPinned:!1});return r(e.status(201),e.json(a))}),u.rest.get(`${t}${B(":forumId")}`,async(s,r,e)=>{const o=s.url.searchParams.get("offset"),a=o?parseInt(o):0,n=s.url.searchParams.get("limit"),i=n?parseInt(n):10,l=s.params.filter??d.EXCLUDE_DELETED,c=Q(s.params.forumId,l),f={results:c.slice(a,a+i),totalNumberOfResults:c.length};return r(e.status(200),e.json(f))}),u.rest.get(`${t}${y}/:id/moderators`,async(s,r,e)=>{const o={results:[String(m)],totalNumberOfResults:1};return r(e.status(200),e.json(o))})]}function v(t){return{subscriptionId:String(S.number.int({min:1e3,max:9999})),subscriberId:String(m),createdOn:S.date.anytime().toISOString(),...t}}const x=T.map(t=>v({objectId:t.id,objectType:h.FORUM})),k=E.map(t=>v({objectType:h.THREAD,objectId:t.id})),p=new D({initialData:[...x,...k],idField:"subscriptionId",autoGenerateId:!0});function b(t,s="ASC",r=0,e=10,o){const a=p.getAll().filter(i=>t?i.objectType===t:!0).filter(i=>o?o.includes(i.objectId):!0).sort((i,l)=>{const c=new Date(l.createdOn).getTime()-new Date(i.createdOn).getTime();return s==="ASC"?c:-1*c}),n=a.length;return{results:a.slice(r,r+e),totalNumberOfResults:n}}function tt(t){return[u.rest.get(`${t}/repo/v1/subscription/all`,async(s,r,e)=>{const o=s.url.searchParams.get("objectType")??void 0,a=s.url.searchParams.get("sortDirection")??void 0,n=s.url.searchParams.get("offset"),i=n?parseInt(n):void 0,l=s.url.searchParams.get("limit"),c=l?parseInt(l):void 0,f=b(o??void 0,a,i,c);return r(e.status(200),e.json(f))}),u.rest.post(`${t}/repo/v1/subscription/list`,async(s,r,e)=>{const o=await s.json(),a=b(o.objectType,o.sortDirection,void 0,void 0,o.idList);return r(e.status(200),e.json(a))}),u.rest.post(`${t}/repo/v1/subscription`,async(s,r,e)=>{const o=await s.json(),a=p.create({subscriberId:String(m),objectId:o.objectId,objectType:o.objectType,createdOn:new Date().toISOString()});return r(e.status(201),e.json(a))}),u.rest.delete(`${t}/repo/v1/subscription/:id`,async(s,r,e)=>{const o=s.params.id;return p.delete(o),r(e.status(200),e.body(""))}),u.rest.post(`${t}/repo/v1/subscription/subscribers`,async(s,r,e)=>{const o=await s.json(),n={subscribers:p.getMany(i=>i.objectType===o.objectType&&i.objectId===o.objectId).map(i=>i.subscriberId)};return r(e.status(200),e.json(n))})]}function et(t){return[u.rest.get(`${t}${F(":evaluationId")}`,async(s,r,e)=>{let o=404,a={reason:`Mock Service worker could not find a mock evaluation queue with ID ${s.params.evaluationId}`};const n=g.find(i=>i.id===s.params.entityId);return n&&(a=n,o=200),r(e.status(o),e.json(a))}),u.rest.get(`${t}${_}`,async(s,r,e)=>{let o=200,a={results:g,totalNumberOfResults:g.length};return r(e.status(o),e.json(a))})]}const st=t=>[u.rest.options("*",async(s,r,e)=>r(e.status(200))),u.rest.get(`${t}/auth/v1/authenticatedOn`,async(s,r,e)=>r(e.status(200),e.json({authenticatedOn:new Date().toISOString()}))),...A(t),...H(t),w(t,!0,!0),...M(t),...P(t),...q(t),...C(t),...U(t),...N(t),...Z(t),...tt(t),...et(t),O(t),...G(V,t),...K(t),...W(t),...X(t),...Y(t),...J(t)];st($(R.REPO_ENDPOINT));export{st as g};
