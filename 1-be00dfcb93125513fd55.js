(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{163:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return o});var n=a(164),r=Object(n.b)({mobile:1,tablet:600,laptop:1024,desktop:1600,mobileSm:1,mobileMd:375,mobileLg:425,tabletSm:600,tabletMd:768,tabletLg:900,laptopSm:1024,laptopMd:1366,laptopLg:1440,desktopSm:1600,desktopMd:1700,desktopLg:1920,_sm:960,_md:1130}),i=Object(n.d)({xxs:2,xs:4,sm:8,md:16,lg:32,xl:64,xxl:128}),o={text:{grey:{heading:"#333",body:"#777"},blue:{lightest:"#AFC8D4",light:"#B1BFC6",medium:"#3186b1",dark:"#263E5B"}},bg:{grey:{lightest:"#f6f6f6"},blue:{light:"#EFF5F8",normal:"#D6E3E9",medium:"#89ADDB",dark:"#263E5B"}},border:{blue:{light:"#e0ebf1",normal:"#CDDEE6",medium:"#add2e4"}},shadow:{blue:{light:"#CFDEE5"}}}},164:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return c}),a(85),a(53),a(208),a(54);var n=function(e,t){return void 0===t&&(t=16),"number"==typeof e&&0!==e?e/t+"em":e},r=function(e,t){return void 0===t&&(t=16),"number"==typeof e&&0!==e?e/t+"rem":e},i=function(e){return"@media (min-width: "+n(e)+")"},o=function(e){return Object.entries(e).reduce(function(e,t){var a=t[0],r=t[1];return e[a]=i(r),e.min[a]=i(r),e.max[a]="@media (max-width: "+n(r-1)+")",e.query[a]="(min-width: "+n(r)+")",e.query.min[a]="(min-width: "+n(r)+")",e.query.max[a]="(max-width: "+n(r-1)+")",e},{px:e,em:n(e),query:{min:{},max:{}},min:{},max:{}})},c=function(e){return Object.entries(e).reduce(function(e,t){var a=t[0],n=t[1];return e[a]=r(n),e},{px:e})}},165:function(e,t,a){"use strict";a.d(t,"u",function(){return E}),a.d(t,"h",function(){return C}),a.d(t,"o",function(){return w}),a.d(t,"d",function(){return k}),a.d(t,"e",function(){return z}),a.d(t,"t",function(){return L}),a.d(t,"r",function(){return S}),a.d(t,"p",function(){return q}),a.d(t,"s",function(){return _}),a.d(t,"q",function(){return I}),a.d(t,"a",function(){return N}),a.d(t,"b",function(){return R}),a.d(t,"c",function(){return T}),a.d(t,"i",function(){return M}),a.d(t,"l",function(){return H}),a.d(t,"m",function(){return B}),a.d(t,"k",function(){return D}),a.d(t,"j",function(){return V}),a.d(t,"n",function(){return F}),a.d(t,"g",function(){return G}),a.d(t,"f",function(){return W});var n,r,i,o,c,l=a(82),s=a(167),d=a.n(s),m=(a(52),a(0)),u=a.n(m),b=a(166),g=a(169),p=a(230),f=a.n(p),h=a(231),O=a.n(h),j=a(170),v=a(163),y=a(164),x={fontSize:Object(y.c)(16),lineHeight:1.6,color:v.a.text.grey.body},E=Object.assign({},x,{"> * + *":{marginTop:Object(y.c)(14)},"> img + *, > * + img, > .EmbedVideo + *, > * + .EmbedVideo":{marginTop:Object(y.c)(28)},"> p > img, > p > .EmbedVideo":{margin:Object(y.c)(28)+" auto"},"h1, h2, h3, h4, h5, h6":{fontWeight:700},h2:{fontSize:24},"h3, h4, h5, h6":{fontSize:20},li:{listStyle:"disc",marginLeft:Object(y.c)(19)},a:{color:v.a.text.blue.medium,textDecoration:"underline",":hover":{transition:"color .2s",":hover":{color:v.a.text.blue.dark}}},img:{display:"block",maxHeight:"90vh",marginLeft:"auto",marginRight:"auto"},"img, .EmbedVideo":{borderRadius:5,overflow:"hidden"}}),C=Object(b.a)("p",{target:"e1qa4zar0"})(x,function(e){return"lg"===e.size&&{fontSize:Object(y.c)(48)}}),w=Object(b.a)("strong",{target:"e1qa4zar1"})({fontWeight:800}),k=Object(b.a)(g.Link,{target:"e1qa4zar2"})({display:"flex",alignItems:"center",fontWeight:800,fontSize:Object(y.c)(20),lineHeight:1,color:v.a.text.blue.dark,background:"rgba(239, 245, 248, 0.9)",boxShadow:"0 0 30px 30px rgba(239, 245, 248, 0.9)"}),z=Object(b.a)("span",{target:"e1qa4zar3"})({fontWeight:800,fontSize:Object(y.c)(18),lineHeight:1.2,color:v.a.text.blue.dark}),L=Object(b.a)("span",{target:"e1qa4zar4"})(((n={display:"inline-block",padding:v.c.md,color:v.a.text.blue.light,fontWeight:900,fontSize:Object(y.c)(10),textTransform:"uppercase",letterSpacing:Object(y.a)(2.5,10)})[v.b.tabletMd]={letterSpacing:Object(y.a)(4,10)},n),function(e){var t=e.verticalUp,a=e.verticalDown,n=e.size;return Object.assign({},"md"===n&&{fontSize:Object(y.c)(11)},{writingMode:(t||a)&&"vertical-lr",transform:t&&"rotate(180deg)"})}),S=Object(b.a)(L,{target:"e1qa4zar5"})({padding:0,marginBottom:Object(y.c)(5)}).withComponent("label",{target:"e1qa4zar6"}),q=Object(b.a)(L,{target:"e1qa4zar7"})({transition:"color .2s",":hover":{color:v.a.text.blue.dark}}).withComponent("button",{target:"e1qa4zar8"}),_=Object(b.a)(L,{target:"e1qa4zar9"})({transition:"color .2s",":hover":{color:v.a.text.blue.dark}}).withComponent(g.Link,{target:"e1qa4zar10"}),I=Object(b.a)(L,{target:"e1qa4zar11"})({transition:"color .2s",":hover":{color:v.a.text.blue.dark}}).withComponent(j.a,{target:"e1qa4zar12"}),N=Object(b.a)("div",{target:"e1qa4zar13"})({display:"inline-flex",justifyContent:"center",alignItems:"center",padding:Object(y.c)(7)+" "+Object(y.c)(14),position:"relative",zIndex:1,fontWeight:800,fontSize:Object(y.c)(14),textAlign:"center",color:"white",borderRadius:"5px",transition:"color .2s","::before":{content:'""',display:"block",width:"100%",height:"100%",position:"absolute",zIndex:-1,left:0,top:0,borderRadius:"inherit",transition:"inherit"}},function(e){return{"::before":{background:e.color}}}),R=N.withComponent(g.Link,{target:"e1qa4zar14"}),T=Object(b.a)("span",{target:"e1qa4zar15"})(((r={fontWeight:800,fontSize:Object(y.c)(14),lineHeight:1.2})[v.b._sm]={fontWeight:600,fontSize:Object(y.c)(24)},r[v.b._md]={fontSize:Object(y.c)(40)},r));T.Detail=Object(b.a)("span",{target:"e1qa4zar16"})(((i={})[v.b._sm]={display:"block",fontWeight:700,fontSize:Object(y.c)(14)},i[v.b._md]={fontSize:Object(y.c)(18)},i));var M=Object(b.a)("div",{target:"e1qa4zar17"})({fontWeight:800,fontSize:Object(y.c)(12),color:"white",whiteSpace:"nowrap"}),H=function(e){var t,a=e.bigger,n=e.truncate,r=void 0!==n&&n,i=e.children,o=d()(e,["bigger","truncate","children"]),c=((t={fontWeight:800,fontSize:Object(y.c)(a?18:16)})[v.b._sm]={fontSize:Object(y.c)(19)},t.color=v.a.text.grey.heading,t);return r?u.a.createElement(f.a,Object.assign({textElement:"h3",line:2,text:i,className:Object(l.css)(c)},o)):u.a.createElement("h3",Object.assign({className:Object(l.css)(c)},o),i)},B=Object(b.a)("span",{target:"e1qa4zar18"})({display:"block",marginTop:Object(y.c)(3),fontSize:Object(y.c)(14),color:v.a.text.grey.body,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}),D=C.withComponent(function(e){var t=e.children,a=d()(e,["children"]);return u.a.createElement(f.a,Object.assign({textElement:"p",line:2,truncateText:"…",text:O()(t)},a))},{target:"e1qa4zar19"}),V=Object(b.a)("div",{target:"e1qa4zar20"})({fontSize:Object(y.c)(13),color:v.a.text.blue.light}),F=Object(b.a)(j.a,{target:"e1qa4zar21"})({transition:"color .2s",":hover":{color:v.a.text.blue.dark}}),G=Object(b.a)("span",{target:"e1qa4zar22"})(((o={display:"flex",alignItems:"center",lineHeight:1,fontWeight:800,fontSize:Object(y.c)(14)})[v.b._sm]={fontSize:Object(y.c)(16)},o),function(e){var t;return"md"===e.size&&((t={})[v.b._sm]={fontSize:Object(y.c)(24)},t)}),W=Object(b.a)(G,{target:"e1qa4zar23"})((c={transition:"color .2s"},c[v.b._sm]={":hover":{color:v.a.text.blue.dark}},c)).withComponent(g.Link,{target:"e1qa4zar24"})},169:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return b}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(180),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(47);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(207),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var u=a(48);a.d(t,"parsePath",function(){return u.a});var b=r.a.createContext({}),g=function(e){return r.a.createElement(b.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},170:function(e,t,a){"use strict";a(52);var n=a(167),r=a.n(n),i=a(0),o=a.n(i);t.a=function(e){var t=e.children,a=e.noindex,n=r()(e,["children","noindex"]);return o.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer "+(a?"noindex":"")},n),t)}},172:function(e,t,a){"use strict";a.d(t,"c",function(){return s}),a.d(t,"b",function(){return d}),a.d(t,"a",function(){return m});var n,r,i,o=a(166),c=a(163),l=a(164),s=Object(o.a)("div",{target:"e1msvi540"})(((n={display:"grid",WebkitOverflowScrolling:"touch",gridTemplate:'\n    "OuterLayoutContent"\n    / 1fr\n  '})[c.b._sm]={gridTemplate:'\n      "OuterLayoutLeftBar . OuterLayoutContent ."\n      / '+Object(l.c)(50)+" 2.5% calc(92.5% - "+Object(l.c)(50)+") 5%\n    "},n[c.b._md]={gridTemplate:'\n      "OuterLayoutLeftBar . OuterLayoutContent . OuterLayoutRightBar"\n      / '+Object(l.c)(80)+" 2.5% calc(94% - "+Object(l.c)(160)+") 3.5% "+Object(l.c)(80)+"\n    "},n)),d=Object(o.a)("div",{target:"e1msvi541"})(((r={display:"grid",gridTemplate:'\n    "." '+Object(l.c)(22)+'\n    "InnerLayoutHeader" auto\n    "." '+Object(l.c)(22)+'\n    "InnerLayoutNavbar" auto\n    "InnerLayoutContent" 1fr\n    / 1fr\n  '})[c.b._sm]={gridTemplate:'\n      ". ." '+c.c.lg+'\n      "InnerLayoutHeader InnerLayoutNavbar" auto\n      ". ." '+c.c.lg+'\n      "InnerLayoutContent InnerLayoutContent" 1fr\n      / 20% 80%\n    '},r[c.b._md]={gridTemplate:'\n      ". ." '+Object(l.c)(32)+'\n      "InnerLayoutHeader InnerLayoutNavbar" auto\n      ". ." '+Object(l.c)(34)+'\n      "InnerLayoutContent InnerLayoutContent" 1fr\n      / 25% 75%\n    '},r[c.b.desktop]={gridTemplate:'\n      ". ." '+Object(l.c)(32)+'\n      "InnerLayoutHeader InnerLayoutNavbar" auto\n      ". ." '+Object(l.c)(34)+'\n      "InnerLayoutContent InnerLayoutContent" 1fr\n      / 25% '+Object(l.c)(1e3)+"\n    "},r)),m=Object(o.a)("div",{target:"e1msvi542"})(((i={display:"grid",alignItems:"start",paddingBottom:Object(l.c)(50),gridTemplate:'\n    "ContentLayoutSidebar"\n    "ContentLayoutContent"\n    / 1fr\n  '})[c.b._sm]={paddingBottom:c.c.xxl,gridTemplate:'\n      "ContentLayoutSidebar ContentLayoutContent"\n      / 20% 80%\n    '},i[c.b._md]={gridTemplate:'\n      "ContentLayoutSidebar ContentLayoutContent"\n      / 25% 75%\n    '},i[c.b.desktop]={gridTemplate:'\n      "ContentLayoutSidebar ContentLayoutContent"\n      / minmax(25%, 1fr) '+Object(l.c)(1e3)+"\n    "},i))},177:function(e,t,a){e.exports=a.p+"static/saijo-george-0c1f6a77e49896ceee0cf1ca6aa74588.png"},178:function(e,t,a){"use strict";var n,r=a(166),i=a(163),o=a(164),c=Object(r.a)("nav",{target:"eo571530"})(((n={display:"flex",alignItems:"center",height:Object(o.c)(70),position:"sticky",top:0,zIndex:3,color:"white"})[i.b._sm]={paddingTop:Object(o.c)(15),paddingBottom:Object(o.c)(15),color:i.a.text.blue.light,backgroundColor:i.a.bg.blue.light,boxShadow:"0 0 30px 15px "+i.a.bg.blue.light+", 30px 0 30px 15px "+i.a.bg.blue.light},n[i.b.max._sm]={height:Object(o.c)(53),padding:Object(o.c)(10),whiteSpace:"nowrap",backgroundColor:i.a.bg.blue.dark,overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch"},n));t.a=c},179:function(e,t,a){"use strict";var n=a(82),r=(a(52),a(167)),i=a.n(r),o=a(218),c=a(0),l=a.n(c),s=a(219),d=a.n(s),m=a(169),u=a(166),b={facebook:function(e){return l.a.createElement("svg",Object.assign({viewBox:"0 0 21 20"},e),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 4.47705 15.5229 0 10 0C4.47705 0 0 4.47705 0 10C0 15.5229 4.47705 20 10 20C15.5229 20 20 15.5229 20 10ZM9.99951 9.17529H15V11.3921H9.99951V12.5H8.27637V11.3921H7.2417C5.83594 11.3921 5 10.7671 5 8.98975V7.51025H6.72339V8.43506C6.72339 9.12695 6.96436 9.17285 7.41357 9.17285L8.27612 9.17529V7.5L9.99951 7.6958V9.17529Z",transform:"translate(20.667) rotate(90)"}))},linkedIn:function(e){return l.a.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 4.47705 15.5229 0 10 0C4.47705 0 0 4.47705 0 10C0 15.5229 4.47705 20 10 20C15.5229 20 20 15.5229 20 10ZM7.71045 12.0859H13.333V14.0508H7.71045V12.0859ZM5.97119 11.9565C5.41992 11.9692 5 12.3833 5 13.0557C5 13.7275 5.41992 14.167 5.97119 14.167C6.51099 14.167 6.94312 13.7407 6.94312 13.0811V13.0684C6.94312 12.3833 6.51099 11.9565 5.97119 11.9565ZM7.57837 7.2627C7.57837 5.96973 8.38208 5.00049 10.1091 5.00049H13.333V6.96533H10.325C9.56934 6.96533 9.05371 7.24951 9.05371 7.96094C9.05371 8.50342 9.40137 8.82666 9.73706 8.96875C9.85742 9.021 10.0249 9.03369 10.1931 9.03369H13.3333V10.9985C13.3333 10.9985 8.23804 10.9727 7.71045 10.9985V9.03369H8.50684C8.12402 8.77295 7.57837 8.30566 7.57837 7.2627Z",transform:"translate(20) rotate(90)"}))},twitter:function(e){return l.a.createElement("svg",Object.assign({viewBox:"0 0 21 20"},e),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 4.47705 15.5229 0 10 0C4.47705 0 0 4.47705 0 10C0 15.5229 4.47705 20 10 20C15.5229 20 20 15.5229 20 10ZM8.98633 9.71631L8.66187 9.73975C7.82104 9.81006 7.05322 9.19189 6.75513 8.21338C6.64917 7.85352 6.63599 7.24268 6.72876 6.84375C6.75049 6.75781 6.80005 6.62939 6.86011 6.49609C6.90967 6.38672 6.96631 6.27393 7.02002 6.17822L7.23853 5.79443L7.12598 5.37207C7.06641 5.13721 6.96704 4.82422 6.90088 4.68311C6.85229 4.57422 6.82129 4.47607 6.82227 4.44385C6.82251 4.43652 6.82446 4.43262 6.82812 4.43262C6.94067 4.43262 7.32446 4.72217 7.53638 4.96484C7.83423 5.29346 7.86084 5.19971 7.66211 4.53418C7.54956 4.13525 7.54956 4.12744 7.67554 4.20557C7.7417 4.25244 7.97339 4.49512 8.1853 4.75342C8.54932 5.19189 8.58911 5.21533 8.89355 5.21533C9.36353 5.21533 10.3435 5.48145 10.8796 5.74756C11.886 6.24072 12.9253 7.29736 13.4482 8.35449C14.1831 9.8418 14.3687 11.8218 13.9382 13.4893C13.7927 14.0449 13.4219 15 13.3557 15C13.3359 15 13.3093 14.7104 13.3027 14.3579C13.2896 13.6226 13.1174 12.8867 12.8127 12.2603L12.6011 11.8374L12.4619 12.3228C12.2634 13.0117 11.8066 13.6304 11.3762 13.7866C11.2371 13.8335 11.2305 13.8179 11.2305 13.3799L11.2239 12.9258L11.0718 13.3091C10.8796 13.7632 10.5552 14.1782 10.2244 14.3818C9.98584 14.5303 9.38354 14.7183 9.33716 14.6636C9.31738 14.6479 9.35693 14.4834 9.40991 14.2954C9.46313 14.1216 9.49512 13.9966 9.50488 13.917C9.52515 13.75 9.44629 13.7856 9.25781 13.998C8.75464 14.585 8.00635 14.7651 7.2981 14.4834L6.98022 14.3501L7.41064 13.8335C8.27783 12.7769 8.79419 11.5322 8.94653 10.1079L8.98633 9.71631Z",transform:"translate(20.333) rotate(90)"}))},mail:function(e){return l.a.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 0C15.5229 0 20 4.47705 20 10C20 15.5229 15.5229 20 10 20C4.47705 20 0 15.5229 0 10C0 4.47705 4.47705 0 10 0ZM9.43872 10C9.43872 10.813 7.15649 15 7.15649 15H6.80005C6.3584 15 6 14.627 6 14.167V5.8335C6 5.37305 6.3584 5 6.80005 5L7.19995 5.00684C7.19995 5.00684 9.43872 9.14844 9.43872 10ZM8.3999 5.00684C8.3999 5.00684 10.5386 9.10938 10.5386 10C10.5386 10.813 8.3999 14.9937 8.3999 14.9932L13.2 15C13.4607 15 13.6926 14.8701 13.8386 14.6689C13.9399 14.5293 14 14.3555 14 14.167V5.8335C14 5.37305 13.6416 5 13.2 5L8.3999 5.00684Z",transform:"translate(20) rotate(90)"}))}},g=function(e){var t=e.icon,a=i()(e,["icon"]),n=b[t];if(!n)throw new Error("Invalid icon name");return l.a.createElement(n,Object.assign({width:20,height:20,fill:"currentColor"},a))},p=a(170),f=a(197),h=a(172),O=a(165),j=a(163);Object(n.injectGlobal)("html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}ul{list-style:none;}button,input,select,textarea{margin:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}img,embed,iframe,object,audio,video{height:auto;max-width:100%;}iframe{border:0;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;text-align:left;}a{text-decoration:none;color:inherit;}button,input{font:inherit;color:inherit;background:none;border:none;}body{font-family:Nunito,sans-serif;background-color:",j.a.bg.blue.light,";}");var v=a(164),y=a(177),x=a.n(y),E=O.e.withComponent("h4",{target:"e121b4jm0"}),C=Object(u.a)("div",{target:"e121b4jm1"})({display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",position:"sticky",top:0,padding:j.c.md+" "+j.c.lg}),w=function(e){var t=e.horizontal,a=i()(e,["horizontal"]);return l.a.createElement("ul",Object.assign({className:Object(n.css)(Object.assign({},t&&{display:"flex","> li:not(:last-of-type)":{marginRight:Object(v.c)(13)},svg:{width:Object(v.c)(24),height:Object(v.c)(24)}},{margin:Object(v.c)(j.c.px.md-j.c.px.xs)+" 0","a, svg":{display:"block"},a:{padding:j.c.xs+" 0",color:j.a.text.blue.light,borderRadius:"50%",transform:!t&&"rotate(-90deg)",transition:".2s",":hover":{color:j.a.text.blue.dark,transform:"rotate(0deg)"}}}))},a),l.a.createElement("li",null,l.a.createElement(p.a,{href:"http://linkedin.com/in/saijogeorge"},l.a.createElement(g,{icon:"linkedIn"}))),l.a.createElement("li",null,l.a.createElement(p.a,{href:"http://facebook.com/saijogeorge"},l.a.createElement(g,{icon:"facebook"}))),l.a.createElement("li",null,l.a.createElement(p.a,{href:"http://twitter.com/saijogeorge"},l.a.createElement(g,{icon:"twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:contact@tldrmarketing.com"},l.a.createElement(g,{icon:"mail"}))))},k=function(e){var t;return l.a.createElement(C,Object.assign({className:Object(n.css)((t={},t[j.b.max._sm]={display:"none"},t))},e),l.a.createElement(O.s,{verticalUp:!0,to:"/about"},"about"),l.a.createElement(O.s,{verticalUp:!0,to:"/sponsored"},"sponsored"),l.a.createElement(O.t,{verticalUp:!0,className:Object(n.css)({marginTop:"auto"})},"share"),l.a.createElement(w,null))},z=function(e){var t;return l.a.createElement(C,Object.assign({className:Object(n.css)((t={},t[j.b.max._md]={display:"none"},t))},e),l.a.createElement(O.s,{to:"newsletter",verticalDown:!0},"sign up for newsletter"),l.a.createElement(O.t,{verticalDown:!0,className:Object(n.css)({marginTop:"auto"})},"©2018"))},L=function(e){var t,a,r,i,o;return l.a.createElement("header",Object.assign({className:Object(n.css)((t={},t[j.b._sm]={position:"sticky",zIndex:4,top:j.c.lg},t))},e),l.a.createElement("div",{className:Object(n.css)((a={display:"flex",paddingLeft:j.c.md},a[j.b.mobileLg]={paddingLeft:Object(v.c)(24)},a[j.b._sm]={height:Object(v.c)(70),paddingLeft:0},a))},l.a.createElement(O.d,{to:"/",className:Object(n.css)({width:"80%"})},"tl;dr",l.a.createElement("br",null),"marketing"),l.a.createElement("ul",{className:Object(n.css)((r={display:"flex"},r[j.b._sm]={display:"none"},r))},l.a.createElement("li",null,l.a.createElement(O.s,{to:"/sponsored"},"Sponsored")),l.a.createElement("li",null,l.a.createElement(O.s,{to:"/about"},"About")))),l.a.createElement("div",{className:Object(n.css)((i={display:"flex",alignItems:"center"},i[j.b._sm]={display:"none"},i.marginTop=Object(v.c)(32),i.marginBottom=Object(v.c)(15),i.padding="0 "+j.c.md,i[j.b.mobileLg]={padding:"0 "+Object(v.c)(24)},i))},l.a.createElement("div",{className:Object(n.css)({display:"flex",alignItems:"center"})},l.a.createElement("img",{src:x.a,alt:"Saijo George",className:Object(n.css)({width:Object(v.c)(45),height:Object(v.c)(45),borderRadius:"50%",filter:"grayscale(1)"})}),l.a.createElement(E,{className:Object(n.css)({marginLeft:Object(v.c)(10),fontSize:Object(v.c)(15)})},"Created by",l.a.createElement("br",null),"Saijo George")),l.a.createElement("div",{className:Object(n.css)({marginLeft:"auto"})},l.a.createElement(w,{horizontal:!0}))),l.a.createElement(f.a,{name:"mobile",className:Object(n.css)((o={},o[j.b._sm]={display:"none"},o))}))};t.a=function(e){var t=e.children;return l.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,e.site.siteMetadata.title),l.a.createElement("meta",{name:"description",content:"Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."}),l.a.createElement("meta",{name:"author",content:"Saijo George"}),l.a.createElement("meta",{name:"theme-color",content:j.a.bg.blue.light}),l.a.createElement("meta",{name:"google-site-verification",content:"80K9pINH7T-5zO28ITfloeGP_rcF6EH8zPlv24NtKaE"}),l.a.createElement("meta",{name:"msvalidate.01",content:"89C6D119C6589A0D7695ABCD238F2C9D"}),l.a.createElement("meta",{name:"yandex-verification",content:"00fa43a53556943b"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito:400,700,800,900",rel:"stylesheet"}),l.a.createElement("link",{rel:"canonical",href:"https://tldrmarketing.com"}),l.a.createElement("meta",{property:"og:url",content:"https://tldrmarketing.com"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:title",content:"SEO News - 𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘"}),l.a.createElement("meta",{property:"og:description",content:"Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."}),l.a.createElement("meta",{property:"og:site_name",content:"tl;dr Marketing"}),l.a.createElement("meta",{property:"og:locale",content:"en_US"}),l.a.createElement("meta",{property:"article:author",content:"Saijo George"}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:creator",content:"@SaijoGeorge"}),l.a.createElement("meta",{name:"twitter:url",content:"https://tldrmarketing.com"}),l.a.createElement("meta",{name:"twitter:title",content:"SEO News - 𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘"}),l.a.createElement("meta",{name:"twitter:description",content:"Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."})),l.a.createElement(h.c,null,l.a.createElement(k,{style:{gridArea:"OuterLayoutLeftBar"}}),l.a.createElement(h.b,{style:{gridArea:"OuterLayoutContent"}},l.a.createElement(L,{style:{gridArea:"InnerLayoutHeader"}}),t),l.a.createElement(z,{style:{gridArea:"OuterLayoutRightBar"}})))},data:o})}},197:function(e,t,a){"use strict";var n,r,i,o=a(82),c=(a(229),a(167)),l=a.n(c),s=(a(52),a(0)),d=a.n(s),m=a(166),u=a(165),b=a(163),g=a(164),p=function(e){return d.a.createElement("div",{className:Object(o.css)({width:"100%",height:"100%",position:"absolute",zIndex:-1,top:0,left:0,overflow:"hidden"})},d.a.createElement("svg",Object.assign({width:"372",height:"202",viewBox:"0 0 372 202",fill:"none",className:Object(o.css)({width:"40%",height:"auto",position:"absolute",top:"-11%",right:"-12%",transform:"rotate(-45deg)"})},e),d.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M76.88 37.78c0-8.74 7.67-15.95 17.28-15.95h182.86c9.63 0 17.29 7.2 17.3 15.94l-.14 7.87-.5.26a1084.78 1084.78 0 0 1-13.46 6.88c-8.8 4.44-20.74 10.37-33.26 16.3a676.68 676.68 0 0 1-36.73 16.28 192.77 192.77 0 0 1-14.85 5.35c-4.27 1.3-7.61 2-9.79 2-2.06 0-5.32-.72-9.53-2.04-4.18-1.3-9.2-3.19-14.75-5.45a706 706 0 0 1-36.83-16.6 1586.03 1586.03 0 0 1-47.1-23.63l-.5-.26v-6.95zm218.75 9.36l-.03-.06c.03.06.03.06.02.07l-.06.03-.2.1-.76.4a1015.76 1015.76 0 0 1-13.48 6.88 1501.76 1501.76 0 0 1-33.3 16.32c-12.54 5.94-25.67 11.88-36.85 16.34a194.4 194.4 0 0 1-15.01 5.4c-4.29 1.3-7.87 2.09-10.37 2.09-2.4 0-5.9-.8-10.13-2.13a197.74 197.74 0 0 1-14.91-5.5 707.95 707.95 0 0 1-36.93-16.66 1586.08 1586.08 0 0 1-47.16-23.66l-.78-.4-.2-.1-.05-.03-.01-.01.46-.88-.46.88-.54-.28v-8.16c0-9.98 8.7-17.95 19.28-17.95h182.86c10.6 0 19.3 7.97 19.3 17.95v.02l-.15 8.47-.01.6-.53.27zm.54 24.55v-1.62l-1.45.72.05.1a.48.48 0 0 0-.06-.1v.01l-.06.03-.19.1-.75.37a1073.84 1073.84 0 0 1-13.35 6.57 1441.3 1441.3 0 0 1-33.06 15.57A659.91 659.91 0 0 1 210.6 109a193.98 193.98 0 0 1-14.96 5.1c-4.32 1.24-7.75 1.92-10.04 1.92-2.08 0-5.34-.67-9.55-1.91-4.18-1.23-9.2-2.99-14.74-5.1a727.47 727.47 0 0 1-36.78-15.57A1619.09 1619.09 0 0 1 77.51 71.3l-.48-.23v-.38h-1c-.39.3-.54.67-.58 1h-.42l-.15 101.73c0 9.98 8.71 17.95 19.28 17.95h182.86c10.6 0 19.3-7.97 19.3-17.95l-.15-101.73zm-4.46 2.84l2.46-1.22.14 100.1c0 8.75-7.66 15.96-17.29 15.96H94.16c-9.6 0-17.28-7.21-17.28-15.95l.15-100.12a1356.67 1356.67 0 0 0 13.18 6.37 1626 1626 0 0 0 33.5 15.6 731.34 731.34 0 0 0 36.88 15.6 206.29 206.29 0 0 0 14.9 5.16c4.22 1.24 7.72 1.99 10.1 1.99 2.6 0 6.25-.75 10.6-1.99 4.37-1.25 9.52-3.03 15.13-5.16a662.47 662.47 0 0 0 36.8-15.6 1440.7 1440.7 0 0 0 43.59-20.74z",fill:"#EFF5F8"})))},f=Object(m.a)("div",{target:"epk46920"})(((n={})[b.b._sm]={boxShadow:"0 5px 25px "+b.a.shadow.blue.light,backgroundColor:"white",borderRadius:"8px"},n)),h=Object(m.a)("div",{target:"epk46921"})(((r={position:"relative",zIndex:0,padding:b.c.md})[b.b.mobileLg]={padding:Object(g.c)(24)},r[b.b._sm]={padding:Object(g.c)(32)},r)),O=Object(m.a)("div",{target:"epk46922"})({display:"flex",flexDirection:"column"}),j=Object(m.a)("input",{target:"epk46923"})({padding:Object(g.a)(12),fontWeight:700,fontSize:Object(g.c)(16),color:b.a.text.blue.dark,borderRadius:5,border:"solid 2px "+b.a.border.blue.normal,backgroundColor:"transparent","::placeholder":{color:b.a.text.blue.lightest}}),v=Object(m.a)("button",{target:"epk46924"})(((i={alignSelf:"end",gridArea:"2 / 1 / 3 / 3"})[b.b._sm]={gridArea:"1 / 3 / 2 / 4"},i.padding=Object(g.a)(18),i.fontWeight=700,i.fontSize=Object(g.c)(14),i.color="white",i.borderRadius=5,i.backgroundColor=b.a.bg.blue.medium,i.cursor="pointer",i));t.a=function(e){var t,a,n,r,i=e.name,c=l()(e,["name"]);return d.a.createElement(f,c,d.a.createElement(h,null,d.a.createElement("div",{className:Object(o.css)((t={},t[b.b.max._sm]={display:"none"},t.marginBottom=Object(g.c)(30),t))},d.a.createElement(u.l,null,"Sign up for our newsletter"),d.a.createElement(u.h,{className:Object(o.css)({marginTop:Object(g.c)(5)})},"Get daily dose of marketing news in quick TL;DR style.")),d.a.createElement("form",{className:Object(o.css)((a={display:"grid",gridGap:Object(g.c)(16),gridTemplate:"\n            auto\n            auto\n            / minmax(50px, 1fr) minmax(50px, 2fr)\n          "},a[b.b._sm]={gridTemplate:"\n              auto\n              / minmax(50px, 1fr) minmax(50px, 2fr) minmax(50px, 1fr)\n            "},a))},d.a.createElement(O,null,d.a.createElement(u.r,{size:"md",htmlFor:i+"-name"},"Name"),d.a.createElement(j,{id:i+"-name",name:"name",type:"text",placeholder:"John"})),d.a.createElement(O,null,d.a.createElement(u.r,{size:"md",htmlFor:i+"-email"},"Email"),d.a.createElement(j,{id:i+"-email",name:"email",type:"email",placeholder:"john-doe@gmail.com"})),d.a.createElement(v,null,d.a.createElement("span",{className:Object(o.css)((n={},n[b.b.min._sm]={display:"none"},n))},"Sign up for our newsletter"),d.a.createElement("span",{className:Object(o.css)((r={},r[b.b.max._sm]={display:"none"},r))},"Sign up"))),d.a.createElement(p,null)))}},207:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},218:function(e){e.exports={data:{site:{siteMetadata:{title:"𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘"}}}}},228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(49),l=a(1),s=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=1-be00dfcb93125513fd55.js.map