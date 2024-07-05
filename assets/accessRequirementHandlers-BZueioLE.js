import{l as i}from"./index-DzDa9m9N.js";import{d as R,e as g,E as l,b as f,f as T,c as _}from"./SynapseClient-CfIGNtSL.js";import{O as C,M as I,S as y}from"./index-BuHFc1uk.js";import{f as E,g as q,M,h as w,a as $,i as S,j}from"./mockAccessRequirements-SfzWITOI.js";import{m}from"./MockSubmission-Cf38ay3v.js";import{M as p}from"./mock_user_profile-DyzXylki.js";const d=new Map,N=e=>[i.rest.get(`${e}${R(":id")}`,async(n,t,r)=>{let s=404,a={reason:`Mock Service worker could not find an access requirement with ID ${n.params.id}`};const o=E.find(c=>c.id.toString()===n.params.id);return o&&(a=o,s=200),t(r.status(s),r.json(a))}),i.rest.get(`${e}${g(":id")}`,async(n,t,r)=>{let s=404,a={reason:`Mock Service worker could not find an access requirement wiki page key with AR ID ${n.params.id}`};const o=q.find(c=>c.ownerObjectType===C.ACCESS_REQUIREMENT&&String(c.ownerObjectId)===n.params.id);return o&&(a=o,s=200),t(r.status(s),r.json(a))})];function B(e){return i.rest.post(`${e}${T}`,async(n,t,r)=>{const s=await n.json();return t(r.status(201),r.json({...s,id:M,etag:w}))})}function k(e){return i.rest.put(`${e}${R(":id")}`,async(n,t,r)=>{const s=await n.json();return t(r.status(200),r.json(s))})}const U=(e,n=":entityId",t=E)=>[i.rest.get(`${e}${l(n)}`,async(r,s,a)=>{const c={results:t,totalNumberOfResults:t.length};return s(a.status(200),a.json(c))})],D=(e,n=[$])=>i.rest.get(`${e}/repo/v1/team/:teamId/accessRequirement`,async(t,r,s)=>{const o={results:n,totalNumberOfResults:n.length};return r(s.status(200),s.json(o))}),P=(e,n)=>(n&&n.forEach(t=>{d.set(t.accessRequirementId,t)}),[i.rest.get(`${e}${f(":id")}`,async(t,r,s)=>{let a;const o=E.find(u=>t.params.id===u.id.toString());let c=d.get(t.params.id);if(c&&(a=c),!a&&o){const u=o.concreteType===I;a={accessRequirementId:t.params.id,concreteType:u?"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus":"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:u?{submissionId:m.id,submittedBy:m.submittedBy,modifiedOn:m.modifiedOn,state:y.APPROVED}:void 0}}const A=a?200:404;return r(s.status(A),s.json(a))})]);function b(e){return i.rest.post(`${e}/repo/v1/accessApproval`,async(n,t,r)=>{const s=await n.json(),a=200,o={...s,id:123,etag:"mock-etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(p),modifiedBy:String(p)};return d.set(String(s.requirementId),{accessRequirementId:String(s.requirementId),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}),t(r.status(a),r.json(o))})}function h(e){return i.rest.post(`${e}${_}`,async(n,t,r)=>{let s;return(await n.json()).nextPageToken===S.nextPageToken?s=j:s=S,t(r.status(200),r.json(s))})}function G(e){return[...N(e),B(e),k(e),...U(e),D(e),...P(e),b(e),h(e)]}export{U as a,P as b,G as c,N as g};
