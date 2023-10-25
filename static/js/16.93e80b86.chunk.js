"use strict";(self.webpackChunkvetmedika=self.webpackChunkvetmedika||[]).push([[16],{1541:function(n,r,t){var a=t(1413),e=t(885),i=t(5987),o=t(2791),c=t(6812),s=t(2506),u=t(184),p=["name","value"];r.Z=function(n){var r=n.name,t=n.value,d=(0,i.Z)(n,p),l=(0,s.u6)().setFieldValue,m=(0,s.U$)(r),h=(0,e.Z)(m,2),f=h[0],v=h[1],g=(0,a.Z)((0,a.Z)((0,a.Z)({},f),d),{},{fullWidth:!0});return v&&v.touched&&v.error&&(g.error=!0,g.helperText=v.error),(0,o.useEffect)((function(){(r&&void 0!==t||void 0!==t)&&l(r,t)}),[r,t,l]),(0,u.jsx)(c.Z,(0,a.Z)({},g))}},1016:function(n,r,t){t.r(r),t.d(r,{default:function(){return rn}});var a=t(1413),e=t(168),i=t(2982),o=t(4942),c=t(3366),s=t(7462),u=t(2791),p=t(8182),d=t(1184),l=t(2466),m=t(114),h=["sx"];function f(n){var r,t=n.sx,a=function(n){var r={systemProps:{},otherProps:{}};return Object.keys(n).forEach((function(t){m.Gc[t]?r.systemProps[t]=n[t]:r.otherProps[t]=n[t]})),r}((0,c.Z)(n,h)),e=a.systemProps,o=a.otherProps;return r=Array.isArray(t)?[e].concat((0,i.Z)(t)):"function"===typeof t?function(){var n=t.apply(void 0,arguments);return(0,l.P)(n)?(0,s.Z)({},e,n):e}:(0,s.Z)({},e,t),(0,s.Z)({},o,{sx:r})}var v=t(4419),g=t(6056),x=t(5873),b=t(4142);var Z=u.createContext(),w=t(1217),y=t(5878);function k(n){return(0,w.Z)("MuiGrid",n)}var S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=(0,y.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,i.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,i.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,i.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,i.Z)(S.map((function(n){return"grid-xs-".concat(n)}))),(0,i.Z)(S.map((function(n){return"grid-sm-".concat(n)}))),(0,i.Z)(S.map((function(n){return"grid-md-".concat(n)}))),(0,i.Z)(S.map((function(n){return"grid-lg-".concat(n)}))),(0,i.Z)(S.map((function(n){return"grid-xl-".concat(n)}))))),W=t(184),M=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function P(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function N(n){var r=n.breakpoints,t=n.values,a="";Object.keys(t).forEach((function(n){""===a&&0!==t[n]&&(a=n)}));var e=Object.keys(r).sort((function(n,t){return r[n]-r[t]}));return e.slice(0,e.indexOf(a))}var B=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,a=t.container,e=t.direction,o=t.item,c=t.spacing,s=t.wrap,u=t.zeroMinWidth,p=t.breakpoints,d=[];a&&(d=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var a=[];return r.forEach((function(r){var e=n[r];Number(e)>0&&a.push(t["spacing-".concat(r,"-").concat(String(e))])})),a}(c,p,r));var l=[];return p.forEach((function(n){var a=t[n];a&&l.push(r["grid-".concat(n,"-").concat(String(a))])})),[r.root,a&&r.container,o&&r.item,u&&r.zeroMinWidth].concat((0,i.Z)(d),["row"!==e&&r["direction-xs-".concat(String(e))],"wrap"!==s&&r["wrap-xs-".concat(String(s))]],l)}})((function(n){var r=n.ownerState;return(0,s.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,t=n.ownerState,a=(0,d.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,d.k9)({theme:r},a,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(j.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,a=t.container,e=t.rowSpacing,i={};if(a&&0!==e){var c,s=(0,d.P$)({values:e,breakpoints:r.breakpoints.values});"object"===typeof s&&(c=N({breakpoints:r.breakpoints.values,values:s})),i=(0,d.k9)({theme:r},s,(function(n,t){var a,e=r.spacing(n);return"0px"!==e?(0,o.Z)({marginTop:"-".concat(P(e))},"& > .".concat(j.item),{paddingTop:P(e)}):null!=(a=c)&&a.includes(t)?{}:(0,o.Z)({marginTop:0},"& > .".concat(j.item),{paddingTop:0})}))}return i}),(function(n){var r=n.theme,t=n.ownerState,a=t.container,e=t.columnSpacing,i={};if(a&&0!==e){var c,s=(0,d.P$)({values:e,breakpoints:r.breakpoints.values});"object"===typeof s&&(c=N({breakpoints:r.breakpoints.values,values:s})),i=(0,d.k9)({theme:r},s,(function(n,t){var a,e=r.spacing(n);return"0px"!==e?(0,o.Z)({width:"calc(100% + ".concat(P(e),")"),marginLeft:"-".concat(P(e))},"& > .".concat(j.item),{paddingLeft:P(e)}):null!=(a=c)&&a.includes(t)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(j.item),{paddingLeft:0})}))}return i}),(function(n){var r,t=n.theme,a=n.ownerState;return t.breakpoints.keys.reduce((function(n,e){var i={};if(a[e]&&(r=a[e]),!r)return n;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,d.P$)({values:a.columns,breakpoints:t.breakpoints.values}),c="object"===typeof o?o[e]:o;if(void 0===c||null===c)return n;var u="".concat(Math.round(r/c*1e8)/1e6,"%"),p={};if(a.container&&a.item&&0!==a.columnSpacing){var l=t.spacing(a.columnSpacing);if("0px"!==l){var m="calc(".concat(u," + ").concat(P(l),")");p={flexBasis:m,maxWidth:m}}}i=(0,s.Z)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===t.breakpoints.values[e]?Object.assign(n,i):n[t.breakpoints.up(e)]=i,n}),{})}));var z=function(n){var r=n.classes,t=n.container,a=n.direction,e=n.item,o=n.spacing,c=n.wrap,s=n.zeroMinWidth,u=n.breakpoints,p=[];t&&(p=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return r.forEach((function(r){var a=n[r];if(Number(a)>0){var e="spacing-".concat(r,"-").concat(String(a));t.push(e)}})),t}(o,u));var d=[];u.forEach((function(r){var t=n[r];t&&d.push("grid-".concat(r,"-").concat(String(t)))}));var l={root:["root",t&&"container",e&&"item",s&&"zeroMinWidth"].concat((0,i.Z)(p),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],d)};return(0,v.Z)(l,k,r)},L=u.forwardRef((function(n,r){var t=(0,x.Z)({props:n,name:"MuiGrid"}),a=(0,b.Z)().breakpoints,e=f(t),i=e.className,o=e.columns,d=e.columnSpacing,l=e.component,m=void 0===l?"div":l,h=e.container,v=void 0!==h&&h,g=e.direction,w=void 0===g?"row":g,y=e.item,k=void 0!==y&&y,S=e.rowSpacing,j=e.spacing,P=void 0===j?0:j,N=e.wrap,L=void 0===N?"wrap":N,R=e.zeroMinWidth,T=void 0!==R&&R,E=(0,c.Z)(e,M),G=S||P,O=d||P,C=u.useContext(Z),A=v?o||12:C,$={},F=(0,s.Z)({},E);a.keys.forEach((function(n){null!=E[n]&&($[n]=E[n],delete F[n])}));var U=(0,s.Z)({},e,{columns:A,container:v,direction:w,item:k,rowSpacing:G,columnSpacing:O,wrap:L,zeroMinWidth:T,spacing:P},$,{breakpoints:a.keys}),q=z(U);return(0,W.jsx)(Z.Provider,{value:A,children:(0,W.jsx)(B,(0,s.Z)({ownerState:U,className:(0,p.Z)(q.root,i),as:m,ref:r},F))})})),R=L,T=t(8789),E=t(7103),G=t(2506),O=t(9853);function C(n){return(0,w.Z)("MuiTypography",n)}(0,y.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var A,$,F,U=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],q=(0,g.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r["align".concat((0,O.Z)(t.align))],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((function(n){var r=n.theme,t=n.ownerState;return(0,s.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),J={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},V={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=u.forwardRef((function(n,r){var t=(0,x.Z)({props:n,name:"MuiTypography"}),a=function(n){return V[n]||n}(t.color),e=f((0,s.Z)({},t,{color:a})),i=e.align,o=void 0===i?"inherit":i,u=e.className,d=e.component,l=e.gutterBottom,m=void 0!==l&&l,h=e.noWrap,g=void 0!==h&&h,b=e.paragraph,Z=void 0!==b&&b,w=e.variant,y=void 0===w?"body1":w,k=e.variantMapping,S=void 0===k?J:k,j=(0,c.Z)(e,U),M=(0,s.Z)({},e,{align:o,color:a,className:u,component:d,gutterBottom:m,noWrap:g,paragraph:Z,variant:y,variantMapping:S}),P=d||(Z?"p":S[y]||J[y])||"span",N=function(n){var r=n.align,t=n.gutterBottom,a=n.noWrap,e=n.paragraph,i=n.variant,o=n.classes,c={root:["root",i,"inherit"!==n.align&&"align".concat((0,O.Z)(r)),t&&"gutterBottom",a&&"noWrap",e&&"paragraph"]};return(0,v.Z)(c,C,o)}(M);return(0,W.jsx)(q,(0,s.Z)({as:P,ref:r,ownerState:M,className:(0,p.Z)(N.root,u)},j))})),D=t(9541),K=t(2745),H=t(1541),I=T.ZP.div(A||(A=(0,e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  width: 100%;\n"]))),Q=T.ZP.div($||($=(0,e.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: max-content;\n  border-radius: 2px;\n  border: 3px solid #50c878;\n  @media (max-width: 700px) {\n    border: 0;\n  }\n"]))),X=T.ZP.div(F||(F=(0,e.Z)(["\n  border-radius: 10px 0px 0px 10px;\n  background-color: white;\n  flex: 1;\n  padding: 60px 60px;\n  max-width: 600px;\n"]))),Y={username:"",password:""},nn=E.Ry().shape({username:E.Z_().required("Unesite korisni\u010dko ime."),password:E.Z_().required("Unesite lozinku").min(5,"Lozinka mora imati minimum 5 karaktera")}),rn=function(){var n=(0,K.a)().login;return(0,W.jsx)(I,{children:(0,W.jsx)(Q,{children:(0,W.jsx)(X,{children:(0,W.jsx)(G.J9,{initialValues:(0,a.Z)({},Y),validationSchema:nn,onSubmit:n,children:function(n){var r=n.isSubmitting;return(0,W.jsx)(G.l0,{children:(0,W.jsxs)(R,{container:!0,spacing:4,justifyContent:"center",children:[(0,W.jsx)(R,{item:!0,xs:12,children:(0,W.jsx)(_,{variant:"h5",sx:{color:"#6B6A6A"},children:"Prijava"})}),(0,W.jsx)(R,{item:!0,xs:12,children:(0,W.jsx)(H.Z,{name:"username",variant:"standard",label:"Korisni\u010dko ime"})}),(0,W.jsx)(R,{item:!0,xs:12,children:(0,W.jsx)(H.Z,{name:"password",type:"password",variant:"standard",label:"Lozinka"})}),(0,W.jsx)(R,{item:!0,xs:12,sx:{mt:3},children:(0,W.jsxs)(D.Z,{fullWidth:!0,disabled:r,type:"submit",variant:"contained",sx:{fontFamily:"Lato",fontSize:"1.2rem",background:"linear-gradient(to right, #50c878 , #50c85a)",borderRadius:"2px",border:"2px solid #50c878",boxShadow:"none",transition:"none",":hover":{background:"white",color:"#50c878",boxShadow:"none"}},children:["Prijava"," ",(0,W.jsx)("i",{className:"fa-sharp fa-solid fa-arrow-right-to-bracket",style:{marginLeft:"5px"}})]})})]})})}})})})})}}}]);
//# sourceMappingURL=16.93e80b86.chunk.js.map