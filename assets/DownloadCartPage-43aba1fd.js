import{a,j as e,F as D}from"./jsx-runtime-9dc53467.js";import{r as d}from"./index-76fb7be0.js";import"./OrientationBanner-450e6652.js";import{P as te}from"./getEndpoint-ac94413e.js";import{h as x,B as re,bk as X,m as ee,T as le,bv as oe,bw as se,z as ce}from"./ApplicationSessionManager-7bf0c8e1.js";import{D as V}from"./index-4a1b1a67.js";import{b as de,c as me,u as ue}from"./useDownloadList-29afd896.js";import{u as pe}from"./index-e4fc7078.js";import{d as H}from"./dayjs.min-f79c4412.js";import{S as he}from"./Sort-81520fd2.js";import{I as g,D as fe}from"./IconSvg-a84585a8.js";import{T as L}from"./SynapseTableConstants-5f56c39f.js";import"./SkeletonButton-4e246cf8.js";import{a1 as ge,N as ye,a2 as we,a3 as be,a4 as ve,H as J,P as Se,a5 as Ne}from"./HelpPopover-81611696.js";import{S as De}from"./SkeletonTable-3361182b.js";import{d as K}from"./ToastMessage-3dbe47cb.js";import{B as ke}from"./LoadingScreen-7bb66db3.js";import{l as Ie}from"./timezone-f53425a4.js";import{a as Ce}from"./UserBadge-a79e8c12.js";import{D as E}from"./Dropdown-38810c77.js";import{T as Fe}from"./Table-449a053f.js";import{M as F}from"./Tooltip-248f4fe4.js";import{p as z}from"./pluralize-9f2b9a2f.js";import{L as _e}from"./ActionRequiredCard-06e89f16.js";import{B as ae}from"./Box-f6adec47.js";import{t as Pe}from"./times-8d386772.js";import{F as ie}from"./FullWidthAlert-149d754f.js";import{M as Ae}from"./TextField-4e593128.js";import{I as Te}from"./InputAdornment-2caeeb7c.js";import{B as P}from"./Button-065a21d4.js";import{T as _}from"./Typography-f217f607.js";const Ee="TESTING_TRASH_BTN_CLASS";H.extend(Ie);function M(t){const{filesStatistics:o,refetchStatistics:r}=t,{accessToken:m}=x(),u=re(),{ref:s,inView:c}=pe(),[f,k]=d.useState(!1),[l,w]=d.useState(void 0),[I,n]=d.useState(void 0),{data:p,status:h,isFetchingNextPage:y,isLoading:b,hasNextPage:v,fetchNextPage:B,isError:Y,error:O,refetch:A}=de(l,I);d.useEffect(()=>{A&&A()},[o,A]),d.useEffect(()=>{Y&&O&&u(O)},[Y,O,u]);const T=(p==null?void 0:p.pages.flatMap(i=>i.page))??[];d.useEffect(()=>{h==="success"&&!y&&v&&B&&(c||f)?B():!v&&f&&(()=>{const N=T.map(C=>`${C.fileEntityId}.${C.versionNumber}`).join(`
`);navigator.clipboard.writeText(N).then(()=>{K("Successfully copied to clipboard")}),k(!1)})()},[h,y,v,B,c,f,T]);const R=i=>i?i=="eligibleForPackaging"?"Only Eligible":"Only Ineligible":"All",Z=async(i,N,C)=>{try{await ee.removeItemFromDownloadListV2(i,m),K(`${N} has been removed from your list.`,"success",{title:C}),A(),r()}catch(q){console.error(q)}},S=({columnSortBy:i})=>e("span",{children:w&&e(he,{role:"button",style:{height:"20px"},active:(l==null?void 0:l.field)===i,direction:(l==null?void 0:l.field)===i?l.direction==="DESC"?V.DESC:V.ASC:V.DESC,onClick:()=>{const N=i===(l==null?void 0:l.field)?l.direction==="ASC"?"DESC":"ASC":"DESC";w({field:i,direction:N})}})}),ne=[void 0,"eligibleForPackaging","ineligibleForPackaging"];return a("div",{className:"bootstrap-4-backport",children:[e(ke,{show:f}),a("div",{className:"filterFilesContainer",children:[e("span",{className:"filterFilesByText",children:"Filter Files By"}),a(E,{children:[e(E.Toggle,{variant:"gray-primary-500",id:"dropdown-basic",children:R(I)}),e(E.Menu,{role:"menu",children:ne.map(i=>e(E.Item,{role:"menuitem",onClick:()=>{n(i)},children:R(i)},`${R(i)}-filter-option`))})]})]}),T.length>0&&e(D,{children:a(Fe,{striped:!0,responsive:!0,className:"DownloadListTableV2",children:[e("thead",{children:a("tr",{children:[e("th",{}),a("th",{children:["Name",e(S,{columnSortBy:"fileName"})]}),a("th",{children:["Size",e(S,{columnSortBy:"fileSize"})]}),a("th",{children:["SynID",e(ge,{size:"small",onCopy:()=>{k(!0)}}),e(S,{columnSortBy:"synId"})]}),a("th",{children:["Project",e(S,{columnSortBy:"projectName"})]}),a("th",{children:["Added On",e(S,{columnSortBy:"addedOn"})]}),a("th",{children:["Created By",e(S,{columnSortBy:"createdBy"})]}),a("th",{children:["Created On",e(S,{columnSortBy:"createdOn"})]}),e("th",{className:"stickyColumn",children:"Actions"})]})}),a("tbody",{children:[T.map(i=>{if(i){const N=H(i.addedOn).format("L LT"),C=H(i.createdOn).format("L LT");return a("tr",{children:[a("td",{className:i.isEligibleForPackaging?"":"ineligibleForPackagingTd",children:[i.isEligibleForPackaging&&e(F,{title:"Eligible for packaging",enterNextDelay:L,placement:"right",children:e("span",{className:"eligibileIcon",children:e(g,{wrap:!1,icon:"packagableFile"})})}),!i.isEligibleForPackaging&&e(F,{title:"This file is ineligible for Web packaging because it is >100MB, or it is an external link, or it is not stored on Synapse native storage",enterNextDelay:L,placement:"right",children:e("span",{className:"ineligibileIcon",children:e(g,{wrap:!1,icon:"warningOutlined"})})})]}),e("td",{children:e("a",{target:"_blank",rel:"noopener noreferrer",href:`${te.PORTAL}#!Synapse:${i.fileEntityId}.${i.versionNumber}`,children:i.fileName})}),e("td",{children:i.fileSizeBytes&&X(i.fileSizeBytes)}),e("td",{children:`${i.fileEntityId}${i.versionNumber?`.${i.versionNumber}`:""}`}),e("td",{children:i.projectName}),e("td",{children:N}),e("td",{children:e(Ce,{userId:i.createdBy})}),e("td",{children:C}),e("td",{className:"stickyColumn",children:a("div",{className:"actionsContainer",children:[e("span",{className:"downloadItem",children:e(ye,{entityId:i.fileEntityId,entityVersionNumber:i.versionNumber,displayFileName:!1,onClickCallback:q=>{q||Z({fileEntityId:i.fileEntityId,versionNumber:i.versionNumber},i.fileName,"File Downloaded")}})}),e("span",{className:"programmaticAccessItem",children:e(we,{entityId:i.fileEntityId,version:i.versionNumber})}),e(F,{title:"Remove from Download Cart",placement:"left",enterNextDelay:L,children:e("span",{className:"removeItem",children:e("button",{className:Ee,onClick:()=>{Z({fileEntityId:i.fileEntityId,versionNumber:i.versionNumber},i.fileName,"File Removed")},children:e(g,{icon:"removeCircle"})})})})]})})]},i.fileEntityId)}else return!1}),e("tr",{ref:s})]})]})}),b&&e(De,{numCols:5,numRows:3})]})}try{M.displayName="DownloadListTable",M.__docgenInfo={description:"",displayName:"DownloadListTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}}}catch{}function $(t){const{accessToken:o}=x();return o?e(le,{children:t.filesStatistics&&e(M,{...t})}):e(D,{})}try{$.displayName="AvailableForDownloadTable",$.__docgenInfo={description:"Table of the files added to the Download Cart that are currently available for download.",displayName:"AvailableForDownloadTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}}}catch{}function G(t){const{numFiles:o,numPackagableFiles:r,numBytes:m}=t,u=o-r,s=o===0,c=s?"SRC-inactive":"SRC-primary-text-color";return a("span",{className:"DownloadDetailsV2",children:[e("span",{className:"item",children:!s&&a(D,{children:[o.toLocaleString()," ",z("File",o)]})}),a("span",{className:"item",children:[e("span",{className:c,children:e(g,{wrap:!1,icon:"packagableFile"})}),!s&&a(D,{children:[r.toLocaleString()," ",z("File",r)," eligible for packaging"]})]}),m>0&&e(F,{title:"This is the total size of all files in the Download Cart that are available to download.",enterNextDelay:L,placement:"top",children:e("span",{className:"item",children:X(m)})}),u>0&&a("span",{className:"item",children:[e("span",{className:"SRC-warning-color",children:e(g,{icon:"warningOutlined"})}),!s&&a(D,{children:[u.toLocaleString()," ",z("File",u)," ineligible for packaging"]})]})]})}try{G.displayName="DownloadDetails",G.__docgenInfo={description:"",displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}}}catch{}function W(t){const{numFiles:o,numPackagableFiles:r,numBytes:m}=t;return e("div",{children:e(G,{numFiles:o,numPackagableFiles:r,numBytes:m})})}try{W.displayName="DownloadListStats",W.__docgenInfo={description:"",displayName:"DownloadListStats",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}}}catch{}function U(t){const{onViewSharingSettingsClicked:o}=t,{data:r,isLoading:m}=me({throwOnError:!0}),u=be(r);return e(D,{children:a(ae,{sx:{pt:5},display:"flex",flexDirection:"column",gap:3,children:[u.map((s,c)=>s?e(ve,{action:s.action,count:s.count,onViewSharingSettingsClicked:o},c):!1),m&&Pe(3).map(s=>e(_e,{},s))]})})}try{U.displayName="DownloadListActionsRequired",U.__docgenInfo={description:"",displayName:"DownloadListActionsRequired",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}const Le="Please provide a package file name and try again.",j=t=>{const{accessToken:o}=x(),[r,m]=d.useState(!1),[u,s]=d.useState(""),[c,f]=d.useState(),[k,l]=d.useState(void 0),{onPackageCreation:w}=t,I=async p=>{if(p.preventDefault(),!u){f({message:Le,variant:"danger"});return}m(!0);try{const h=`${u}.zip`,y=await oe(h,o);l(y);const{resultFileHandleId:b}=y;try{window.location.href=await se(b,o),s(""),l(void 0),w()}catch(v){console.error("Err on getFileHandleByIdURL = ",v)}}catch(h){f({message:h.reason,variant:"danger"})}finally{m(!1)}};return a(D,{children:[e("div",{className:"CreatePackageV2",children:a("div",{className:"createPackageStep",children:[e("span",{className:"createPackageTitle",children:"Create your Download Package"}),e("span",{className:"createPackageDescription",children:"Name your download package and select Download Package to get started."}),!r&&!k&&a(ae,{display:"flex",alignItems:"stretch",children:[e(Ae,{onChange:p=>{s(p.target.value)},type:"text",placeholder:"PackageName",sx:{width:"233px"},InputProps:{endAdornment:e(Te,{position:"end",children:".zip"})}}),e(P,{variant:"contained",color:"primary",onClick:p=>{I(p)},sx:{marginLeft:"20px"},disabled:!u,children:"Download Package"})]}),r&&a("div",{className:"creatingPackage",children:[e("span",{className:"spinner"}),e("span",{style:{marginLeft:5},children:"Creating package..."})]})]})}),e(ie,{show:!!c,variant:c!=null&&c.variant?c.variant:"success",description:c==null?void 0:c.message,autoCloseAfterDelayInSeconds:10,onClose:()=>{f(void 0)}})]})};try{j.displayName="CreatePackageV2",j.__docgenInfo={description:"",displayName:"CreatePackageV2",props:{onPackageCreation:{defaultValue:null,description:"",name:"onPackageCreation",required:!0,type:{name:"() => void"}}}}}catch{}const xe=`${Ne}
dl_list_file_entities = syn.get_download_list()`,Be="synapse get-download-list",Q=t=>{const{accessToken:o}=x(),[r,m]=d.useState(0),[u,s]=d.useState(!1),[c,f]=d.useState(!1),[k,l]=d.useState(!1),[w,I]=d.useState(),{data:n,isLoading:p,isError:h,error:y,refetch:b}=ue();if(d.useEffect(()=>{h&&y&&I(y)},[h,y]),d.useEffect(()=>{n&&n.numberOfFilesRequiringAction==0&&m(1)},[n]),w)return e(ce,{error:w});const v=async()=>{await ee.clearDownloadListV2(o),b()};return a("div",{className:"DownloadCartPage",children:[e("div",{children:a("div",{className:"pageHeader",children:[a("div",{className:"grid",children:[e("h3",{className:"pageHeaderTitle",children:"Your Download Cart"}),e(F,{title:"Immediately removes all items from your download cart",enterNextDelay:300,placement:"right",children:e(P,{onClick:()=>{v()},variant:"text",color:"primary",startIcon:e(fe,{}),children:"Clear Your Download Cart"})})]}),e(_,{className:"description",variant:"body1",children:"You may find your added files in the tabs below. Any files which require actions before download can be found in the Access Actions Required tab, while any that can be downloaded now can be found in the Download List tab."})]})}),e("div",{className:"tabs-container",children:e("div",{className:"container",children:a("ul",{className:"nav nav-tabs",children:[e("li",{className:`nav-item ${r==0?"active":""}`,"aria-selected":r==0,children:a("button",{onClick:()=>m(0),children:["Access Actions Required",!h&&!p&&n&&e("span",{className:"fileCount",children:n.totalNumberOfFiles-n.numberOfFilesAvailableForDownload})]})}),e("li",{className:`nav-item ${r==1?"active":""}`,"aria-selected":r==1,children:a("button",{onClick:()=>m(1),children:["Download List",!h&&!p&&n&&e("span",{className:"fileCount",children:n.numberOfFilesAvailableForDownload})]})})]})})}),a("div",{style:{display:r==0&&!h&&!p&&n?"block":"none"},children:[(n==null?void 0:n.numberOfFilesRequiringAction)&&n.numberOfFilesRequiringAction>0&&e("div",{children:e("div",{className:"actionsRequiredContainer container",children:e(U,{...t})})}),(n==null?void 0:n.numberOfFilesRequiringAction)===0&&e("div",{className:"placeholder",children:e("div",{children:"No actions are currently required."})})]}),r==1&&!h&&!p&&n&&a("div",{children:[n.numberOfFilesAvailableForDownload>0&&a("div",{className:"DownloadListTabContent",children:[e("div",{className:"subSectionOverviewContainer",children:a("div",{className:"subSectionOverview container",children:[a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(_,{variant:"headline3",sx:{mb:2},children:[e(g,{icon:"packagableFile"})," Web Download (.ZIP Packages)"]}),e(J,{markdownText:"This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"})]}),e(_,{variant:"body1",component:"div",sx:{mb:2},children:a("ul",{children:[e("li",{children:"Eligible files will be added to .ZIP packages of up to 1GB in size"}),e("li",{children:"If you have more than 1GB, you can create multiple packages"}),e("li",{children:"Will only include files which are hosted on Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),n.numberOfFilesAvailableForDownloadAndEligibleForPackaging>0&&e(P,{variant:"contained",onClick:()=>{s(!0)},startIcon:e(g,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"}),n.numberOfFilesAvailableForDownloadAndEligibleForPackaging==0&&e(F,{title:"You cannot create a .zip package because there are no eligible files.",enterNextDelay:300,placement:"top",children:e("span",{children:e(P,{variant:"contained",disabled:!0,startIcon:e(g,{icon:"download",wrap:!1}),children:"Download As .Zip Packages"})})})]}),a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(_,{variant:"headline3",sx:{mb:2},children:[e(g,{icon:"code"})," Programmatic Download"]}),e(J,{markdownText:"This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren’t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"})]}),e(_,{variant:"body1",component:"div",sx:{mb:2},children:a("ul",{children:[e("li",{children:"Requires installation of a programmatic client (R, Python, CLI)"}),e("li",{children:"No limit to the file size or the size of the package that can be downloaded"}),e("li",{children:"Will include files which are hosted on and off Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),e(P,{variant:"contained",onClick:()=>{f(!0)},startIcon:e(g,{icon:"code",wrap:!1}),children:"Create Programmatic Package"})]})]})}),a("div",{className:"availableForDownloadTableContainer container",children:[u&&e(j,{onPackageCreation:()=>{l(!0),b()}}),e(W,{numBytes:n.sumOfFileSizesAvailableForDownload,numPackagableFiles:n.numberOfFilesAvailableForDownloadAndEligibleForPackaging,numFiles:n.numberOfFilesAvailableForDownload}),e($,{filesStatistics:n,refetchStatistics:b})]})]}),n.numberOfFilesAvailableForDownload===0&&e("div",{className:"placeholder",children:e("div",{children:"Your Download Cart is currently empty."})})]}),e(ie,{show:k,variant:"success",title:"Package Created",description:"A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages.",autoCloseAfterDelayInSeconds:10,onClose:()=>{l(!1)}}),c&&e(Se,{show:!0,onClose:()=>f(!1),title:"Download Programmatically",pythonCode:xe,cliCode:Be})]})};try{Q.displayName="DownloadCartPage",Q.__docgenInfo={description:"Show the Download Cart page.",displayName:"DownloadCartPage",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!1,type:{name:"((benefactorId: string) => void)"}}}}}catch{}export{Q as D};
