(self.webpackChunkvetmedika=self.webpackChunkvetmedika||[]).push([[560],{1541:function(e,n,t){"use strict";var r=t(1413),a=t(885),i=t(5987),s=t(2791),o=t(6812),c=t(2506),l=t(184),u=["name","value"];n.Z=function(e){var n=e.name,t=e.value,d=(0,i.Z)(e,u),f=(0,c.u6)().setFieldValue,m=(0,c.U$)(n),p=(0,a.Z)(m,2),h=p[0],v=p[1],x=(0,r.Z)((0,r.Z)((0,r.Z)({},h),d),{},{fullWidth:!0});return v&&v.touched&&v.error&&(x.error=!0,x.helperText=v.error),(0,s.useEffect)((function(){(n&&void 0!==t||void 0!==t)&&f(n,t)}),[n,t,f]),(0,l.jsx)(o.Z,(0,r.Z)({},x))}},4560:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return de}});var r,a,i=t(4165),s=t(5861),o=t(885),c=t(168),l=t(2791),u=t(9541),d=t(184),f=function(e){var n=e.label,t=e.onClick,r=e.disabled;return(0,d.jsx)(u.Z,{sx:{fontSize:"1.25rem",fontFamily:"Lato",background:"linear-gradient(to right, #50c878 , #50c85a)",transition:"none",padding:"10px 25px",boxShadow:"none",border:"2px solid #50c878","&:hover":{background:"white",color:"#50c878",boxShadow:"none"},borderRadius:"2px",margin:"10px auto"},variant:"contained",onClick:t,disabled:r,children:(0,d.jsxs)("span",{children:[n," ",(0,d.jsx)("i",{className:"fa-sharp fa-plus"})]})})},m=t(8789),p=m.ZP.div(r||(r=(0,c.Z)(["\n  min-width: 200px;\n  min-height: 200px;\n  border: 4px solid #50c878;\n  padding: 15px;\n  margin: 15px;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  word-wrap: break-word;\n  text-align: center;\n  justify-content: space-between;\n  @media (max-width: 700px) {\n    width: 80%;\n    margin: 10px auto;\n  }\n"]))),h=m.ZP.h3(a||(a=(0,c.Z)(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 250px; /* some width */\n  margin: 10px auto;\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),v=function(e){var n=e.action,t=e.editAction,r=e.deleteAction;return(0,d.jsxs)(p,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{children:n.title}),(0,d.jsxs)("p",{children:["Traje od ",n.from," do ",n.to]}),(0,d.jsxs)("p",{style:{marginTop:10},children:["Aktivna:"," ",(0,d.jsxs)("span",{style:{fontWeight:n.active?"bolder":"normal"},children:[" ",n.active?"Da":"Ne"]})]})]}),(0,d.jsxs)("div",{style:{width:"100%",textAlign:"center",display:"flex",flexDirection:"row"},children:[(0,d.jsx)(u.Z,{variant:"contained",style:{margin:"10px auto"},onClick:function(){return t(n)},children:"Izmeni"}),(0,d.jsx)(u.Z,{color:"error",variant:"contained",style:{margin:"10px auto"},onClick:function(){return r(n)},children:"Obri\u0161i"})]})]})},x=t(3366),j=t(7462),Z=t(8182),b=t(4419),w=t(2554),g=t(9853),k=t(5873),y=t(6056),S=t(1217);function N(e){return(0,S.Z)("MuiCircularProgress",e)}(0,t(5878).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var R,C,D,M,O,P,z,F,_=["className","color","disableShrink","size","style","thickness","value","variant"],I=44,W=(0,w.F4)(O||(O=R||(R=(0,c.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),G=(0,w.F4)(P||(P=C||(C=(0,c.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),L=(0,y.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["color".concat((0,g.Z)(t.color))]]}})((function(e){var n=e.ownerState,t=e.theme;return(0,j.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,w.iv)(z||(z=D||(D=(0,c.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),W)})),A=(0,y.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),E=(0,y.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var t=e.ownerState;return[n.circle,n["circle".concat((0,g.Z)(t.variant))],t.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,t=e.theme;return(0,j.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,w.iv)(F||(F=M||(M=(0,c.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),G)})),T=l.forwardRef((function(e,n){var t=(0,k.Z)({props:e,name:"MuiCircularProgress"}),r=t.className,a=t.color,i=void 0===a?"primary":a,s=t.disableShrink,o=void 0!==s&&s,c=t.size,l=void 0===c?40:c,u=t.style,f=t.thickness,m=void 0===f?3.6:f,p=t.value,h=void 0===p?0:p,v=t.variant,w=void 0===v?"indeterminate":v,y=(0,x.Z)(t,_),S=(0,j.Z)({},t,{color:i,disableShrink:o,size:l,thickness:m,value:h,variant:w}),R=function(e){var n=e.classes,t=e.variant,r=e.color,a=e.disableShrink,i={root:["root",t,"color".concat((0,g.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,g.Z)(t)),a&&"circleDisableShrink"]};return(0,b.Z)(i,N,n)}(S),C={},D={},M={};if("determinate"===w){var O=2*Math.PI*((I-m)/2);C.strokeDasharray=O.toFixed(3),M["aria-valuenow"]=Math.round(h),C.strokeDashoffset="".concat(((100-h)/100*O).toFixed(3),"px"),D.transform="rotate(-90deg)"}return(0,d.jsx)(L,(0,j.Z)({className:(0,Z.Z)(R.root,r),style:(0,j.Z)({width:l,height:l},D,u),ownerState:S,ref:n,role:"progressbar"},M,y,{children:(0,d.jsx)(A,{className:R.svg,ownerState:S,viewBox:"".concat(22," ").concat(22," ").concat(I," ").concat(I),children:(0,d.jsx)(E,{className:R.circle,style:C,ownerState:S,cx:I,cy:I,r:(I-m)/2,fill:"none",strokeWidth:m})})}))})),V=t(4893),q=t(2506),H=t(7103),J=t(1541),U=t(1413),B=t(5987),Y=["children","buttonStyles"],$=function(e){var n=e.children,t=(e.buttonStyles,(0,B.Z)(e,Y)),r=(0,q.u6)().submitForm,a=(0,U.Z)({color:"primary",fullWidth:!0,onSubmit:function(){r()}},t);return(0,d.jsx)(u.Z,(0,U.Z)((0,U.Z)({},a),{},{children:n}))},K=t(5730);function Q(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var X=H.Ry().shape({title:H.Z_().required("Obavezno polje")});function ee(e){var n=e.modalOpen,t=e.setModal,r=e.setRefresh,a=l.useState(Q),c=(0,o.Z)(a,1)[0],f=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,K.v.post("/api/action",n);case 4:t(!1),r(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),m=(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{style:c,className:"paper",children:[(0,d.jsx)("h2",{className:"title",children:"Nova akcija"}),(0,d.jsx)(q.J9,{initialValues:{title:"",description:"",from:"",to:""},validationSchema:X,onSubmit:function(e){return f(e)},children:function(e){var n=e.isSubmitting;e.values,e.setFieldValue;return(0,d.jsx)(q.l0,{children:(0,d.jsxs)("div",{className:"formDiv",children:[(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Naslov"}),(0,d.jsx)(J.Z,{name:"title"})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Opis"}),(0,d.jsx)(J.Z,{name:"description"})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Datum trajanja OD"}),(0,d.jsx)(J.Z,{name:"from",placeholder:"DD.MM.GGGG."})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Datum trajanja DO"}),(0,d.jsx)(J.Z,{name:"to",placeholder:"DD.MM.GGGG."})]}),(0,d.jsx)($,{type:"submit",fullWidth:!0,disabled:n,startIcon:n?(0,d.jsx)(T,{size:"0.9rem"}):void 0,variant:"contained",style:{margin:"10px 0"},children:"Napravi akciju"}),(0,d.jsx)(u.Z,{variant:"outlined",color:"error",fullWidth:!0,onClick:function(){return t(!1)},children:"Odustani"})]})})}})]})});return(0,d.jsx)("div",{children:(0,d.jsx)(V.Z,{open:n,onClose:function(){return t(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:m})})}function ne(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var te=H.Ry().shape({title:H.Z_().required("Obavezno polje")});function re(e){var n=e.data,t=e.modalOpen,r=e.setModal,a=e.setRefresh,c=l.useState(ne),f=(0,o.Z)(c,1)[0],m=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,K.v.patch("/api/action/".concat(n._id),t);case 4:r(!1),a(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{style:f,className:"paper",children:[(0,d.jsx)("h2",{className:"title",children:"Izmena akcije"}),(0,d.jsx)(q.J9,{initialValues:{title:n.title,description:n.description,from:n.from,to:n.to},validationSchema:te,onSubmit:function(e){return m(e)},children:function(e){var n=e.isSubmitting;return(0,d.jsx)(q.l0,{children:(0,d.jsxs)("div",{className:"formDiv",children:[(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Naslov"}),(0,d.jsx)(J.Z,{name:"title"})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Opis"}),(0,d.jsx)(J.Z,{name:"description"})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Datum trajanja OD"}),(0,d.jsx)(J.Z,{name:"from"})]}),(0,d.jsxs)("div",{className:"tableRow",children:[(0,d.jsx)("span",{className:"tableRowLabel",children:"Datum trajanja DO"}),(0,d.jsx)(J.Z,{name:"to"})]}),(0,d.jsx)($,{type:"submit",fullWidth:!0,disabled:n,startIcon:n?(0,d.jsx)(T,{size:"0.9rem"}):void 0,variant:"contained",style:{margin:"10px 0"},children:"Izmeni akciju"}),(0,d.jsx)(u.Z,{variant:"outlined",color:"error",fullWidth:!0,onClick:function(){return r(!1)},children:"Odustani"})]})})}})]})});return(0,d.jsx)("div",{children:(0,d.jsx)(V.Z,{open:t,onClose:function(){return r(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:p})})}var ae=t(1964);function ie(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var se,oe,ce=function(e){var n=e.data,t=e.modalOpen,r=e.setModal,a=e.setRefresh,c=(e.setSeverityHandler,e.setSnackbarHandler,l.useState(ie)),f=(0,o.Z)(c,1)[0],m=(0,l.useState)(!1),p=(0,o.Z)(m,2),h=p[0],v=p[1],x=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),a(!0),e.next=5,K.v.delete("/api/action/".concat(n));case 5:v(!1),r(!1),a(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),j=(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{style:f,className:"paper",children:[(0,d.jsxs)("div",{className:"formDiv",style:{textAlign:"center"},children:[(0,d.jsx)(ae.Z,{className:"warning",style:{fontSize:50}}),(0,d.jsx)("h3",{children:"Da li ste sigurni?"}),(0,d.jsx)(u.Z,{variant:"contained",color:"error",fullWidth:!0,startIcon:h?(0,d.jsx)(T,{size:"0.9rem"}):void 0,onClick:function(){return x(n._id)},style:{margin:"10px 0"},children:"Obri\u0161i"}),(0,d.jsx)(u.Z,{variant:"outlined",color:"error",fullWidth:!0,onClick:function(){return r(!1)},children:"Odustani"})]})," "]})});return(0,d.jsx)("div",{children:(0,d.jsx)(V.Z,{open:t,onClose:function(){return r(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:j})})},le=m.ZP.div(se||(se=(0,c.Z)(["\n  text-align: left;\n  padding: 15px;\n"]))),ue=m.ZP.div(oe||(oe=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 700px) {\n    justify-content: center;\n  }\n"]))),de=function(){var e=(0,l.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(!1),c=(0,o.Z)(a,2),u=c[0],m=c[1],p=(0,l.useState)(!1),h=(0,o.Z)(p,2),x=h[0],j=h[1],Z=(0,l.useState)(!1),b=(0,o.Z)(Z,2),w=b[0],g=b[1],k=(0,l.useState)(!1),y=(0,o.Z)(k,2),S=y[0],N=y[1],R=(0,l.useState)(null),C=(0,o.Z)(R,2),D=C[0],M=C[1],O=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.v.get("/api/action");case 3:n=e.sent,t=n.data,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=function(e){M(e),j(!0)},z=function(e){M(e),g(!0)};return(0,l.useEffect)((function(){S||O()}),[S]),(0,d.jsxs)(le,{children:[u&&(0,d.jsx)(ee,{modalOpen:u,setModal:m,setRefresh:N}),x&&D&&(0,d.jsx)(re,{data:D,modalOpen:x,setModal:j,setRefresh:N}),w&&D&&(0,d.jsx)(ce,{data:D,modalOpen:w,setModal:g,setRefresh:N}),(0,d.jsx)(f,{label:"Dodaj akciju",onClick:function(){return m(!0)}}),(0,d.jsx)(ue,{children:t.map((function(e){return(0,d.jsx)(v,{action:e,editAction:P,deleteAction:z},e._id)}))})]})}},1964:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var a=r(t(5649)),i=t(184),s=(0,a.default)((0,i.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");n.Z=s},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(5741)},5741:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return s.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h},unsupportedProp:function(){return v},useControlled:function(){return x.Z},useEventCallback:function(){return j.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return b.Z}});var r=t(5902),a=t(9853),i=t(8949).Z,s=t(1245),o=t(2977);var c=function(e,n){return function(){return null}},l=t(6258),u=t(5783),d=t(8195);t(7462);var f=function(e,n){return function(){return null}},m=t(2971).Z,p=t(3026),h=t(6248).Z;var v=function(e,n,t,r,a){return null},x=t(4938),j=t(9511),Z=t(7933),b=t(2763),w={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=560.147a82a1.chunk.js.map