var w=Object.defineProperty;var E=(t,l,e)=>l in t?w(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e;var y=(t,l,e)=>E(t,typeof l!="symbol"?l+"":l,e);import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{r as h,R as V}from"./index-Dl6G-zuu.js";import{a5 as I,L as F,a6 as k}from"./HelpPopover-CardoQFV.js";import"./isPlainObject-B-UZsxEQ.js";import"./uniq-BEq0iSV-.js";import"./_getPrototype-D0JfWhwi.js";import{s as C}from"./styled-D9wW3ABP.js";import{bw as B,p as m,bx as R,j as M}from"./SynapseClient-BZSwUuIi.js";import{u as P}from"./OrientationBanner-D9RUUnWX.js";import{t as L,u as _}from"./EntityTypeUtils-BpOAC-k-.js";import"./getEndpoint-CjoHA800.js";import{F as j,O as G}from"./index-CIIvWsNs.js";import{O as A}from"./IconSvg-lIXrpHNP.js";import{B as H}from"./Box-DRYT9rh3.js";import{d as D}from"./dayjs.min-d18Up55D.js";import{u as O}from"./RequestDownloadCard-Ck_vY5Q7.js";import{b as W}from"./useWiki-BmU33pjs.js";let S=!1;const U=t=>{const[l]=P();return h.useEffect(()=>{var e;if(l.analyticsAllowed&&!S){const a=window,i=document,n="script",o="dataLayer",r=t??"GTM-KPW4KS62";a[o]=a[o]||[],a[o].push({"gtm.start":new Date().getTime(),event:"gtm.js"});const u=i.getElementsByTagName(n)[0],d=i.createElement(n),g="";d.async=!0,d.src="https://www.googletagmanager.com/gtm.js?id="+r+g,(e=u.parentNode)==null||e.insertBefore(d,u),S=!0}},[l,t]),S};class f extends V.Component{constructor(e){super(e);y(this,"formRef");y(this,"submitForm",()=>{this.formRef.current.submit()});y(this,"refresh",()=>{if(this.context.accessToken){const e=[m.getUserProfile(this.context.accessToken),m.getEntity(this.context.accessToken,this.props.formSchemaEntityId),m.getEntity(this.context.accessToken,this.props.formUiSchemaEntityId)];Promise.all(e).then(a=>{const i=a[0];this.getTargetContainer(i,this.context.accessToken).then(n=>{const o=a[1],r=a[2];this.getSchemaFileContent(n,o,r)})}).catch(a=>{this.onError(a)})}});y(this,"getSchemaFileContent",(e,a,i)=>{const n=[m.getFileResult(a,this.context.accessToken,!0,!0),m.getFileResult(i,this.context.accessToken,!0,!0)];Promise.all(n).then(o=>{try{const r=o.map(u=>R(u.fileHandle,u.preSignedURL));Promise.all(r).then(u=>{const d=JSON.parse(u[0]),g=JSON.parse(u[1]);this.getExistingFileData(e,d,g)}).catch(u=>{console.log("getSchemaFileContent: Error getting form content",u)})}catch(r){console.log("getSchemaFileContent: Error getting schema content",r)}}).catch(o=>{this.onError(o)})});y(this,"getExistingFileData",(e,a,i)=>{const o={entityName:`${a.title}.json`,parentId:e};let r,u;m.lookupChildEntity(o,this.context.accessToken).then(d=>m.getEntity(this.context.accessToken,d.id).then(g=>(u=g,this.props.initFormData?m.getFileResult(u,this.context.accessToken,!0,!0).then(async c=>{try{const p=await R(c.fileHandle,c.preSignedURL);r=JSON.parse(p)}catch(p){console.log("getExistingFileData: Error setting form data",p)}}):Promise.resolve()))).finally(()=>{this.setState({formData:r,currentFileEntity:u,formSchema:a,formUiSchema:i})})});y(this,"getTargetContainer",async(e,a)=>{const i={entityName:e.ownerId,parentId:this.props.parentContainerId};try{const n=await m.lookupChildEntity(i,a);return console.log(`EntityForm uploading to https://www.synapse.org/Synapse:${n.id}`),this.setState({userprofile:e,containerId:n.id,isLoading:!1}),n.id}catch(n){return n.status===404?this.onError(new Error("Your folder has not yet been set up, please retry in a few minutes.")):this.onError(n)}});y(this,"finishedProcessing",()=>{this.setState({isLoading:!1,successfullyUploaded:!0})});y(this,"onError",e=>{this.setState({error:e,isLoading:!1,successfullyUploaded:!1})});y(this,"onSubmit",({formData:e})=>{this.setState({isLoading:!0,successfullyUploaded:!1});const a=new Blob([JSON.stringify(e)],{type:"text/json"});this.createEntityFile(a)});y(this,"createEntityFile",e=>{const a=`${this.state.formSchema.title}.json`;m.uploadFile(this.context.accessToken,a,e).then(i=>{const n=i.fileHandleId;if(this.state.currentFileEntity){const r={...this.state.currentFileEntity,dataFileHandleId:n};return this.setState({currentFileEntity:r}),m.updateEntity(r,this.context.accessToken)}const o={parentId:this.state.containerId,name:a,concreteType:"org.sagebionetworks.repo.model.FileEntity",dataFileHandleId:n};return m.createEntity(o,this.context.accessToken)}).then(i=>{this.finishedProcessing(),this.props.synIdCallback&&this.props.synIdCallback(i.id)}).catch(i=>{this.onError(i)})});this.formRef=V.createRef(),this.state={isLoading:!0,successfullyUploaded:!1}}componentDidMount(){this.refresh()}render(){return s.jsxs("div",{children:[this.state.error&&s.jsxs("div",{className:"panel panel-danger errors",children:[s.jsx("div",{className:"panel-heading",children:s.jsx("h3",{className:"panel-title",children:"Error"})}),s.jsx("ul",{className:"list-group",children:s.jsxs("li",{className:"list-group-item text-danger",children:[this.state.error.name," ",this.state.error.reason,this.state.error.message]})})]}),this.context.accessToken&&!this.state.isLoading&&!this.state.successfullyUploaded&&this.state.formSchema&&this.state.formUiSchema&&!this.state.error&&s.jsx(I,{validator:F,formData:this.state.formData,schema:this.state.formSchema,uiSchema:this.state.formUiSchema,onSubmit:this.onSubmit,ref:this.formRef,children:s.jsx("div",{style:{display:"none"},children:s.jsx("button",{type:"submit",className:"btn btn-info",children:"Submit"})})}),!this.state.error&&this.context.accessToken&&this.state.isLoading&&s.jsxs(V.Fragment,{children:[s.jsx("span",{children:"Saving…"}),s.jsx("span",{style:{marginLeft:"2px"},className:"spinner"})]})]})}}y(f,"contextType",B);try{f.displayName="EntityForm",f.__docgenInfo={description:"",displayName:"EntityForm",props:{parentContainerId:{defaultValue:null,description:"",name:"parentContainerId",required:!0,type:{name:"string"}},formSchemaEntityId:{defaultValue:null,description:"",name:"formSchemaEntityId",required:!0,type:{name:"string"}},formUiSchemaEntityId:{defaultValue:null,description:"",name:"formUiSchemaEntityId",required:!0,type:{name:"string"}},initFormData:{defaultValue:null,description:"",name:"initFormData",required:!0,type:{name:"boolean"}},synIdCallback:{defaultValue:null,description:"",name:"synIdCallback",required:!0,type:{name:"(synId: string) => void"}}}}}catch{}try{f.contextType.displayName="EntityForm.contextType",f.contextType.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"EntityForm.contextType",props:{}}}catch{}const v=t=>{const{accessToken:l}=M(),{synId:e,className:a}=t,[i,n]=h.useState(void 0);h.useEffect(()=>{(async()=>{try{const d=await m.getEntity(l,e);if(!L(d))throw new Error(`File Entity expected but found ${d}`);const g={requestedFiles:[{associateObjectId:e,associateObjectType:j.FileEntity,fileHandleId:d.dataFileHandleId}],includeFileHandles:!0,includePreSignedURLs:!1,includePreviewPreSignedURLs:!1},p=(await m.getFiles(g,l)).requestedFiles[0].fileHandle;if(p&&_(p))n({externalFileHandle:p,fileEntity:d});else throw new Error(`Not an external file handle: ${p==null?void 0:p.id}`)}catch(d){console.error("Error on getting external file handle = ",d)}})()},[e,l]);const o=i==null?void 0:i.externalFileHandle,r=i==null?void 0:i.fileEntity;return o?s.jsx("a",{href:o.externalURL,className:a,target:"_blank",rel:"noopener noreferrer",children:s.jsxs("span",{children:[r==null?void 0:r.name,s.jsx(A,{style:{marginLeft:5}})]})}):s.jsx(s.Fragment,{})};try{v.displayName="ExternalFileHandleLink",v.__docgenInfo={description:"",displayName:"ExternalFileHandleLink",props:{synId:{defaultValue:null,description:"",name:"synId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N=t=>{const{measurementId:l}=t;return U(l),s.jsx(s.Fragment,{})};try{N.displayName="GoogleAnalytics",N.__docgenInfo={description:`GoogleAnalytics is a component wrapper for the useGoogleAnalytics() hook.
This is exported for use in the Synapse.org GWT codebase.`,displayName:"GoogleAnalytics",props:{measurementId:{defaultValue:null,description:"",name:"measurementId",required:!1,type:{name:"string"}}}}}catch{}const T=C(H,{label:"MuiContainer"})(({theme:t})=>({paddingRight:15,paddingLeft:15,marginRight:"auto",marginLeft:"auto",[t.breakpoints.up("md")]:{width:920},[t.breakpoints.up("lg")]:{width:1170},[t.breakpoints.up("xl")]:{width:1366}}));try{T.displayName="MuiContainer",T.__docgenInfo={description:"Drop in MUI substitute class for Bootstrap Container component",displayName:"MuiContainer",props:{zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | readonly NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "none" | (string & {}) | "inset" | "hidden" | "inherit" | "medium" | "initial" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "thick" | "thin" | "dashed" | ... 184 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | readonly NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | readonly NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Color>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | readonly NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | readonly NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | readonly NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | readonly NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | readonly NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | readonly NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | readonly NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | readonly NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | readonly NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | readonly NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | readonly NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | readonly NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | readonly NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | readonly NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockEnd:{defaultValue:null,description:"",name:"marginBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockEnd<string | number> | readonly NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockStart:{defaultValue:null,description:"",name:"marginBlockStart",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockStart<string | number> | readonly NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineEnd:{defaultValue:null,description:"",name:"marginInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineEnd<string | number> | readonly NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineStart:{defaultValue:null,description:"",name:"marginInlineStart",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineStart<string | number> | readonly NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | readonly NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | readonly NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | readonly NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | readonly NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | readonly NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | readonly NonNullable<...>[] | undefined>)"}},paddingBlockEnd:{defaultValue:null,description:"",name:"paddingBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockEnd<string | number> | readonly NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlockStart:{defaultValue:null,description:"",name:"paddingBlockStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockStart<string | number> | readonly NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineEnd<string | number> | readonly NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineStart<string | number> | readonly NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | readonly NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | readonly NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | readonly NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | readonly NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | readonly NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | readonly NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | readonly NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | WhiteSpace> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | WhiteSpace>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | readonly NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | readonly NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | readonly NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | readonly NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | readonly NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | readonly NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | readonly NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | readonly NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | readonly NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | readonly NonNullable<...>[] | undefined>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlock:{defaultValue:null,description:"",name:"marginBlock",required:!1,type:{name:"ResponsiveStyleValue<MarginBlock<string | number> | readonly NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInline:{defaultValue:null,description:"",name:"marginInline",required:!1,type:{name:"ResponsiveStyleValue<MarginInline<string | number> | readonly NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlock:{defaultValue:null,description:"",name:"paddingBlock",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlock<string | number> | readonly NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInline:{defaultValue:null,description:"",name:"paddingInline",required:!1,type:{name:"ResponsiveStyleValue<PaddingInline<string | number> | readonly NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}}}}}catch{}const J=t=>{h.useEffect(()=>{const l=document.querySelector("head"),e=document.createElement("script");e.setAttribute("type","application/ld+json");const a=document.createTextNode(JSON.stringify(t));return e.appendChild(a),l==null||l.appendChild(e),()=>{l==null||l.removeChild(e)}},[t])},z=k({html:!0}),$=t=>{const l=document.createElement("div");return l.innerHTML=t,l.textContent||l.innerText||""},x=({entityId:t,version:l,searchParams:e})=>{let a,i;t?(a=t,i=l):e&&(a=e.id,e.version&&(i=parseInt(e.version)));const{data:n}=O(a,i),o={ownerObjectType:G.ENTITY,ownerObjectId:a,wikiPageId:""},{data:r}=W(o),u=z.renderInline((r==null?void 0:r.markdown)??""),d=$(u),g=d.length>0?d:`${n==null?void 0:n.entity.name} (Synapse ID: ${n==null?void 0:n.entity.id}) is a data set on Synapse.  Synapse is a platform for supporting scientific collaborations centered around shared biomedical data sets.`,c=n==null?void 0:n.annotations.annotations,p=c?Object.keys(c).map(b=>`${b}, ${c[b].value.join(", ")}`):[],q={"@context":"https://schema.org","@type":"Dataset",name:n==null?void 0:n.entity.name,description:g,url:window.location.href,version:i,keywords:p,includedInDataCatalog:{"@type":"DataCatalog",name:"Synapse",url:"https://www.synapse.org"},isAccessibleForFree:!0,dateModified:D(n==null?void 0:n.entity.modifiedOn).toISOString()};return J(q),s.jsx(s.Fragment,{})};try{x.displayName="DatasetJsonLdScript",x.__docgenInfo={description:"This component will add a Dataset json ld script tag to the page when rendered.",displayName:"DatasetJsonLdScript",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!1,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"number"}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"{ [key: string]: string; }"}}}}}catch{}
