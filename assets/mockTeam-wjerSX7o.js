import{M as e,b as a}from"./mock_user_profile-CyZOyNQ0.js";import{A as o}from"./SynapseConstants-DtXcmkMQ.js";import{u as d}from"./uniqueId-CSw6ftlJ.js";const m=987654,u=987655,l=987656,f=987657,p=987658,b=987659,n={id:String(m),name:"Mock Team",description:"A team that already has super cool fake users",icon:"",canPublicJoin:!0,canRequestMembership:!0,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},s={id:String(u),name:"Mock team public can join",description:"A team for fake users to join",icon:"",canPublicJoin:!0,canRequestMembership:!1,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},r={id:String(l),name:"Mock team public can request to join",description:"A team for fake users to request to join",icon:"",canPublicJoin:!1,canRequestMembership:!0,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},t={id:String(f),name:"Mock team with open invitation",description:"A team that fake users have been invited to join",icon:"",canPublicJoin:!1,canRequestMembership:!1,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},c={id:String(p),name:"Mock team with open request",description:"A team that fake users have already requested to join",icon:"",canPublicJoin:!1,canRequestMembership:!0,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},h={id:String(b),name:"Mock team with open invitation",description:"A team that users must join to participate in the challenge",icon:"",canPublicJoin:!0,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},g={id:String(o),name:"Mock Synapse ACT",description:"Same hard-coded ID as the ACT, but this is a mocked version",icon:"",canPublicJoin:!1,etag:"f29b79d6-5b63-4641-93c7-30d954b4328c",createdOn:"2013-11-02T01:01:18.373Z",modifiedOn:"2019-01-31T20:34:40.057Z",createdBy:String(e),modifiedBy:String(a)},S=[n,s,r,t,c,h,g],O=S.map(i=>({id:parseInt(i.id),userProfile:null,userBundle:null,userGroupHeader:{ownerId:String(i.id),userName:i.name,isIndividual:!1}})),A=[{teamId:n.id,userId:String(e),isMember:!0,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!0,membershipApprovalRequired:!0,hasUnmetAccessRequirement:!1,canSendEmail:!0},{teamId:s.id,userId:String(e),isMember:!1,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!0,membershipApprovalRequired:!1,hasUnmetAccessRequirement:!1,canSendEmail:!1},{teamId:r.id,userId:String(e),isMember:!1,hasOpenInvitation:!1,hasOpenRequest:!1,canJoin:!1,membershipApprovalRequired:!0,hasUnmetAccessRequirement:!1,canSendEmail:!1},{teamId:t.id,userId:String(e),isMember:!1,hasOpenInvitation:!0,hasOpenRequest:!1,canJoin:!1,membershipApprovalRequired:!0,hasUnmetAccessRequirement:!1,canSendEmail:!1},{teamId:c.id,userId:String(e),isMember:!1,hasOpenInvitation:!1,hasOpenRequest:!0,canJoin:!1,membershipApprovalRequired:!0,hasUnmetAccessRequirement:!1,canSendEmail:!1}],q=[{id:d(),createdOn:new Date().toISOString(),createdBy:String(a),teamId:t.id,inviteeId:String(e),message:"Come join my cool team so we can submit to the challenge together!"}];export{m as M,u as a,l as b,f as c,p as d,b as e,S as f,A as g,q as h,O as m};
