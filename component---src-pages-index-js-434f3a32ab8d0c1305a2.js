(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){"use strict";a.r(t);var o,r=a(0),i=a.n(r),n=a(181),s=a(179),c=a(196),l=a(82),d=(a(85),a(53),a(207),a(83),a(166)),p=a(178),m=a(204),g=a(165),u=a(176),h=a(163),b=a(164),w=Object(d.a)("ul",{target:"e616z6q0"})(((o={display:"flex",alignContent:"center",alignItems:"center",width:"100%",color:h.a.text.blue.dark,"> li":{marginRight:Object(b.c)(10)},"> li a":{display:"flex"}})[h.b._sm]={"> li:last-of-type":{marginRight:0},display:"flex",flexWrap:"wrap",justifyContent:"space-between"},o[h.b.laptopMd]={"> li":{flex:1}},o)),f=function(e){var t;return i.a.createElement(p.a,e,i.a.createElement(w,null,Object.entries(u.a).map(function(e){var t=e[0],a=e[1],o=a.color,r=a.label;return i.a.createElement("li",{key:t},i.a.createElement(g.b,{color:o,to:"/categories/"+t},r))}),i.a.createElement("li",{className:Object(l.css)((t={},t[h.b.max._sm]={order:-1},t))},i.a.createElement(g.b,{to:"/search",color:h.a.text.blue.light},i.a.createElement(m.a,{className:Object(l.css)({marginRight:Object(b.c)(5)})}),"Search"))))},y=a(174),v=a(183),j=a(187),O=a(172),E=a(182);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(f,{style:{gridArea:"InnerLayoutNavbar"}}),i.a.createElement("main",{style:{gridArea:"InnerLayoutContent"}},i.a.createElement(y.a,null),i.a.createElement(v.a,{date:{day:"tuesday",date:"09/04"},posts:E.a}),i.a.createElement(n.a,{query:h.b.query._sm},function(e){return e&&i.a.createElement(O.a,null,i.a.createElement(c.a,{style:{gridArea:"ContentLayoutContent"}}))}),i.a.createElement(v.a,{date:{day:"monday",date:"09/03"},posts:E.a}),i.a.createElement(j.a,null,"Loading...")))}},168:function(e,t,a){"use strict";var o=a(82),r=a(0),i=a.n(r);t.a=function(e){var t=e.type,a=e.id,r=e.src,n=e.ratio,s=void 0===n?"56.25%":n,c=e.cover,l={youtube:"https://www.youtube.com/embed",vimeo:"https://player.vimeo.com/video"}[t];return i.a.createElement("div",{className:Object(o.css)(c?{"&, > *":{width:"100%",height:"100%"},backgroundColor:"black"}:{width:"100%",height:0,position:"relative",paddingTop:s,backgroundColor:"black","> *":{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:0}})+" EmbedVideo"},"video"===t?i.a.createElement("video",{src:r,controls:!0}):i.a.createElement("iframe",{src:l+"/"+a,title:"Embeded video",allowFullScreen:!0}))}},173:function(e,t,a){"use strict";a(52);var o=a(167),r=a.n(o),i=a(0),n=a.n(i),s=a(184),c=a.n(s),l=a(186),d=a.n(l),p=a(82),m=a(169),g=a(170),u=a(168),h=a(165),b=Object(p.css)(h.t);t.a=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,i=r()(e,["children","className"]);return n.a.createElement(c.a,Object.assign({renderers:{link:g.a,shortcode:function(e){var t=e.identifier,a=e.attributes;return"youtube"!==t&&"vimeo"!==t||!a.id?"video"===t&&a.src?n.a.createElement(u.a,{type:t,src:a.src}):"link"===t&&a.to&&a.text?n.a.createElement(m.Link,{to:a.to},a.text):"":n.a.createElement(u.a,{type:t,id:a.id})}},escapeHtml:!1,source:t,className:b+" "+o,plugins:[[d.a]]},i))}},174:function(e,t,a){"use strict";a(52);var o=a(82),r=a(0),i=a.n(r),n=a(165),s=a(163),c=a(164),l=a(177),d=a.n(l),p=n.e.withComponent("h4",{target:"epe3in70"});t.a=function(e){var t;return i.a.createElement("div",Object.assign({className:Object(o.css)((t={},t[s.b.max._sm]={display:"none"},t.position="fixed",t.zIndex=4,t.bottom=s.c.lg,t.background="rgba(239, 245, 248, 0.9)",t.boxShadow="0 0 30px 30px rgba(239, 245, 248, 0.9)",t))},e),i.a.createElement("img",{src:d.a,alt:"Saijo George",className:Object(o.css)({width:Object(c.c)(45),height:Object(c.c)(45),borderRadius:"50%",filter:"grayscale(1)",transformOrigin:"left bottom",transition:".3s","*:hover > &":{transform:"scale(2)",filter:"grayscale(0)"}})}),i.a.createElement(p,{className:Object(o.css)({marginTop:Object(c.c)(13),marginBottom:Object(c.c)(13)})},"Created by",i.a.createElement("br",null),"Saijo George"),i.a.createElement(n.r,{to:"/about",className:Object(o.css)({padding:0})},"Read more"))}},176:function(e,t,a){"use strict";t.a={seo:{color:"#4FB996",label:"SEO"},"paid-media":{color:"#F4A93A",label:"Paid Media"},"social-media":{color:"#4E8ED9",label:"Social Media"},general:{color:"#DE83B4",label:"General"},jobs:{color:"#C583DE",label:"Jobs"},"tips-and-tricks":{color:"#E0697D",label:"Tips & Tricks"}}},182:function(e,t,a){"use strict";var o=a(169),r=[{slug:"post-01",title:"Not Secure Label Is Now Live For HTTP Sites On Chrome",url:"https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html",resource:{type:"youtube",id:"Kch8n4tcOZQ"},description:'\nIt looks like with the latest version of Chrome (just go in and manually update if it did not auto update for you) HTTP sites are now marked with the Not Secure label along with the 🛈 mark in the address bar.\n    \n![Some test image](https://images.unsplash.com/photo-1536641480196-ed8d5b3ed21f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e32ed3893fed0e0e5a1c5ef59861d3a&auto=format&fit=crop&w=2100&q=80)\n\n[[ vimeo id="286945944" ]]\n  ',category:"sponsored",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-02",title:"Not Secure Label Is Now Live For HTTP Sites On Chrome",url:"https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html",resource:{type:"vimeo",id:"286945944"},description:"It looks like with the latest version of Chrome (just go in and manually update if it did not auto update for you) HTTP sites are now marked with the Not Secure label along with the 🛈 mark in the address bar.",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-03",title:"Mark Up Sections Of A News Article To Be Read Aloud By The Google Assistant",url:"https://webmasters.googleblog.com/2018/07/hey-google-whats-latest-news.html",resource:{type:"video",src:"http://asista.pl/f/ati.mp4"},alt:"",description:"Google has announced a new schema.org structured data specification (still pending) called [speakable](https://pending.schema.org/speakable) for **[eligible publishers](https://developers.google.com/search/docs/data-types/speakable#eligibility)** to mark up sections of a news article that are most relevant to be read aloud by the Google Assistant.The speakable property works on Google Home devices for English-speaking users in the U.S. only.Links : [Technical Details](https://developers.google.com/search/docs/data-types/speakable) & [Submit your Interest](https://services.google.com/fb/forms/speakablenewsinterest/) if you are a Google News Publisher. ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-04",title:"Google Tests New Design For Image Search Results",url:"https://www.searchenginejournal.com/google-tests-new-design-for-image-search-results/262641/",resource:{type:"img",src:Object(o.withPrefix)("/images/p3.png"),w:1e3,h:380},alt:"",description:"\nGoogle has been spotted testing a new design for image search results pages. The redesign includes an in-line photo viewer, which opens on the left-hand side of the SERPs. There are captions and URLs in the new layout.\nIt does not show up for me, so this could be a limited test or a gradual rollout. ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-05",title:"Google Tests Price Insights For Hotel Listings",url:"https://alakov.com/blog/price-insights-test",resource:{type:"img",src:Object(o.withPrefix)("/images/p4.png"),w:827,h:657},alt:"",description:"Google is testing a new feature in hotels’ listings called **Price Insights**. In this test, a box appears in the hotel’s knowledge panel that informs users of how prices at the hotel compare against similar hotels in the area followed by “Explore Insights” CTA.\n\n  There are some very aggressive messages in there like:\n  * The hotel costs more than similar hotels nearby.\n  * Prices comparable at similar hotel nearby.\n\n\n  And some favourable ones like:\n  * The hotel is 20% less than usual.\n\n\n  I image the last few weeks would have been quite stressful if you are an SEO working in the Hotel Industry with all these new changes.",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-06",title:"GMB Dashboard Starts Showing Competitor's Google Posts",url:"https://twitter.com/brodieseo/status/1021545487558537218",resource:{type:"img",src:Object(o.withPrefix)("/images/p5.jpg"),w:468,h:347},alt:"",description:"\nLooks like Google really wants you to add more things through Google Posts and the latest tactic is to show you what you competitors are posting. You can add those in through your [GMB Dashboard](https://business.google.com/locations).",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-07",title:"Alphabet Q2 Reported At 32.7 Billion Up 26% YoY",url:"https://www.cnbc.com/2018/07/23/alphabet-earnings-q2-2018.html",resource:{type:"img",src:Object(o.withPrefix)("/images/p6.png"),w:567,h:207},alt:"",description:"\nDespite the fine imposed by the EU, things are looking good for Google. The Q2 2018 report was able to come back looking so good namely thanks to Google’s ad revenues which had gone from $22.6bn in Q2 2017 to $28bn in Q2 2018.\n\n[Report PDF](https://abc.xyz/investor/pdf/2018Q2_alphabet_earnings_release.pdf)",category:"general",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-08",title:"Pinterest Nears 1 Billion In Ad Sales",url:"http://www.thesempost.com/google-search-quality-rater-guidelines-updated/",img:"",description:"\nAfter hitting $500 million in sales in 2017, Pinterest is on pace to almost double that this year by anonymous sources.\nPinterest is having particular success with mobile ads, as the site becomes a more popular place for big fashion and beauty brands to get in front of the company's 200 million monthly active users.\nReaching $1 billion in revenue will mark a significant milestone, but it's way below previous estimates. In 2015, [TechCrunch](https://techcrunch.com/2015/10/16/leaked-pinterest-documents-show-revenue-growth-forecasts/) reported on leaked financial documents that showed Pinterest was then projecting sales of $2.8 billion by 2018. It's a tall task to break up the digital advertising duopoly of Google and Facebook, which control a combined 57 percent of U.S. digital ad spending, according to [eMarketer](https://www.emarketer.com/content/google-and-facebook-s-digital-dominance-fading-as-rivals-share-grows). ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-09",title:"Google Seems To Have Hijacked The Search Box For TheFreeDictionary.com",url:"https://www.seroundtable.com/google-dictionary-branded-free-dictionary-26091.html",resource:{type:"img",src:Object(o.withPrefix)("/images/p8.png"),w:654,h:365},alt:"",description:"\nWhen you use The Free Dictionary site search box in the SERP for something that takes you within Google's dictionary over their internal site search.\nThey also show Google's dictionary widget at  position zero for the query [free dictionary](https://www.google.com.au/search?q=free+dictionary), [dictionary](https://www.google.com.au/search?q=free+dictionary), etc",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-10",title:"IAB Survey Finds Podcast Ad Revenue Is Growing Fast",url:"https://www.searchenginejournal.com/podcast-ad-revenues/262655/",resource:{type:"img",src:Object(o.withPrefix)("/images/p9.png"),w:696,h:334},alt:"",description:"\nA new report indicates that podcasting revenues are a fast growing areas of digital advertising. The Internet Advertising Bureau (IAB) released a [research study -PDF](https://www.iab.com/wp-content/uploads/2018/06/2018_IAB_Podcast_Ad_Rev_Study_vFinal.pdf) showing that podcasting is experience accelerated growth and is forecast to keep on rising.",category:"paid-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-11",title:"YouTube Tests An Explore Tab To Help Users Discover Videos Based On Viewing Activity",url:"https://www.searchenginejournal.com/youtubes-new-explore-tab-helps-users-discover-videos-based-on-viewing-activity/262823/",resource:{type:"img",src:Object(o.withPrefix)("/images/p10.jpg"),w:760,h:400},alt:"",description:"\nYouTube is testing a new tab in the iPhone app that is designed to help users find videos they may not have discovered on their own. The aim of the Explore tab will be to help expose YouTube viewers to new creators.\nThose who have been selected for the test group will notice that the Explore tab exists in place of the Trending tab.",category:"social-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-12",title:"Amazon Sponsored Products Could Be Coming To A Website Near You",url:"http://adage.com/article/digital/amazon-tests-ground-product-ads/314321/",img:"",description:"\nIn its latest bid to close the gap with Google and Facebook in digital ad sales, Amazon plans to dramatically increase the available space for one of its most important formats, Sponsored Products: It could let brands run them across the internet, not just within its own properties.\nAmazon is talking with top agencies and brands about participating in a test that would expand the scope of product ads, delivering them to outside websites by retargeting consumers who visit Amazon.",category:"paid-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-13",title:"Declines In Pay TV Subscriptions Have Exceeded Previous Estimates",url:"https://www.recode.net/2018/7/24/17604218/partnering-with-netflix-and-hulu-hasnt-stopped-pay-tv-providers-from-losing-customers",resource:{type:"img",src:Object(o.withPrefix)("/images/p12.png"),w:845,h:292},alt:"",description:"The number of cord-cutters in the U.S. is expected to increase 33 percent this year to 33 million, according to eMarketer. Last year, the research firm had predicted a 22 percent rise in people who have canceled their pay TV service, but have since had to revise that estimate upward.",category:"general",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"}];t.a=r},183:function(e,t,a){"use strict";a(52),a(83);var o=a(82),r=a(167),i=a.n(r),n=a(0),s=a.n(n),c=a(166),l=a(190),d=a(191),p=a.n(d),m=a(181),g=a(12),u=a.n(g),h=a(192),b=a.n(h),w=a(193),f=a.n(w);a(194),a(195),Object(o.injectGlobal)({".pswp__top-bar":{background:"none !important"}});var y,v,j,O=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).initGallery=function(){var e=[t.props.img],a={history:!1,captionEl:!1,shareEl:!1,counterEl:!1,fullscreenEl:!1,showHideOpacity:!0,bgOpacity:.8,getThumbBoundsFn:function(){var e=window.pageYOffset||document.documentElement.scrollTop,a=t.thumb.getBoundingClientRect();return{x:a.left,y:a.top+e,w:a.width}}};t.gallery=new b.a(t.pswpElement,f.a,e,a),t.gallery.init()},t.getOpenerProps=function(e){var a=(void 0===e?{}:e).onClick,o=void 0===a?function(){}:a;return{ref:function(e){return t.thumb=e},onClick:function(){o(),t.initGallery()}}},t}return u()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement(s.a.Fragment,null,this.props.children({getOpenerProps:this.getOpenerProps}),s.a.createElement("div",{ref:function(t){return e.pswpElement=t},className:"pswp",tabIndex:"-1",role:"dialog","aria-hidden":"true"},s.a.createElement("div",{className:"pswp__bg"}),s.a.createElement("div",{className:"pswp__scroll-wrap"},s.a.createElement("div",{className:"pswp__container"},s.a.createElement("div",{className:"pswp__item"}),s.a.createElement("div",{className:"pswp__item"}),s.a.createElement("div",{className:"pswp__item"})),s.a.createElement("div",{className:"pswp__ui pswp__ui--hidden"},s.a.createElement("div",{className:"pswp__top-bar"},s.a.createElement("button",{className:"pswp__button pswp__button--close",title:"Close (Esc)"}),s.a.createElement("button",{className:"pswp__button pswp__button--zoom",title:"Zoom in/out"}),s.a.createElement("div",{className:"pswp__preloader"},s.a.createElement("div",{className:"pswp__preloader__icn"},s.a.createElement("div",{className:"pswp__preloader__cut"},s.a.createElement("div",{className:"pswp__preloader__donut"})))))))))},t}(n.Component),E=a(173),x=a(170),k=a(168),_=a(165),S=a(163),N=a(164),T=a(176),G=Object(c.a)("div",{target:"ew0ifvj0"})(function(e){var t,a=e.isOpen,o=e.isDefaultOpen;return(t={display:"flex",alignItems:"center",flexWrap:a?"wrap":"nowrap",position:"relative",background:"white"})[S.b._sm]={flexWrap:"nowrap",padding:Object(N.c)(20),paddingBottom:!o&&0},t[S.b.max._sm]=Object.assign({},a&&{borderBottom:"none !important",marginTop:Object(N.c)(30),marginBottom:Object(N.c)(30)+" !important"}),t}),B=Object(c.a)("div",{target:"ew0ifvj1"})(function(e){var t,a=e.isOpen,o=e.isDefaultOpen;return(t={flexBasis:a?"100%":"62%",order:a?2:1,padding:S.c.md,paddingBottom:!o&&S.c.sm})[S.b.mobileLg]={padding:Object(N.c)(24),paddingBottom:!o&&Object(N.c)(12)},t[S.b._sm]={flexBasis:"65%",padding:Object(N.c)(12),paddingRight:Object(N.c)(24),order:1},t.overflow="hidden",t}),C=Object(c.a)("div",{target:"ew0ifvj2"})(function(e){var t,a=e.isOpen;return(t={alignSelf:"stretch",flexBasis:a?"100%":"38%",order:a?1:2,position:"relative"})[S.b.max._sm]={"::after":a&&{content:'""',width:"100%",height:"1px",position:"absolute",bottom:0,backgroundColor:"rgba(0, 0, 0, .07)"}},t[S.b._sm]={alignSelf:"flex-start",flexBasis:"35%",marginBottom:Object(N.c)(20),order:2},t}),R=Object(c.a)("img",{target:"ew0ifvj3"})({display:"block",width:"100%"}),L=s.a.forwardRef(function(e,t){var a,r=e.src,n=e.alt,c=i()(e,["src","alt"]);return s.a.createElement("div",Object.assign({ref:t,role:"img","aria-label":n,className:Object(o.css)((a={height:"100%",position:"relative",zIndex:0,backgroundImage:"url("+r+")",backgroundPosition:"center",backgroundSize:"cover",backgroundColor:S.a.bg.blue.normal,backgroundBlendMode:"luminosity"},a[S.b._sm]={border:"solid 1px #e0ebf1",borderRadius:5},a["::after"]={content:'""',display:"block",width:"100%",height:0,position:"relative",zIndex:1,paddingBottom:"58%"},a[":hover"]={cursor:"zoom-in",backgroundBlendMode:"normal"},a))},c))}),P=function(e){var t=e.img,a=i()(e,["img"]);return s.a.createElement(O,{img:Object.assign({},t,{msrc:t.src})},function(e){var o=e.getOpenerProps;return s.a.createElement(L,Object.assign({},o(),{src:t.src,alt:t.alt},a))})},I=Object(c.a)("div",{target:"ew0ifvj4"})(((y={height:"100%",position:"relative",zIndex:0,backgroundColor:S.a.bg.grey.lightest})[S.b._sm]={backgroundColor:"transparent",border:"solid 1px "+S.a.border.blue.light,borderRadius:"5px"},y["::before"]={content:'"- No media -"',display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"absolute",color:S.a.text.blue.light,fontWeight:900,fontSize:Object(N.c)(10),textTransform:"uppercase",letterSpacing:Object(N.c)(4)},y["::after"]={content:'""',display:"block",width:"100%",height:0,position:"relative",zIndex:1,paddingBottom:"58%"},y),function(e){return e.short&&{"::after":{paddingBottom:"30%"}}}),A=Object(c.a)(x.a,{target:"ew0ifvj5"})({display:"block",borderRadius:"2px",transition:"box-shadow .3s",boxShadow:"0 0 0 5px white, 0 0 0 5px transparent",":hover":{boxShadow:"0 0 0 5px white, 0 0 0 8px "+S.a.border.blue.medium}}),D=function(e){var t,a,r=e.isOpen,n=e.bottom,c=e.color,l=e.children,d=i()(e,["isOpen","bottom","color","children"]);return s.a.createElement("div",Object.assign({className:Object(o.css)((t={position:"absolute",zIndex:1,left:r?Object(N.c)(15):"62%"},t[S.b.mobileLg]={left:r?Object(N.c)(23):"62%"},t.top=n?null:0,t.bottom=n?0:null,t[S.b._sm]={left:"100%",paddingTop:"24%",transform:"translateY(-50%)"},t))},d),s.a.createElement(_.i,{className:Object(o.css)((a={padding:Object(N.c)(4)+" "+Object(N.c)(16),backgroundColor:c,borderRadius:n?"7px 7px 0 0":"0 0 7px 0",border:n?"solid 1px":null,borderRight:n?null:"solid 1px",borderBottom:n?"none":"solid 1px"},a[S.b._sm]={padding:Object(N.c)(16)+" "+Object(N.c)(4),writingMode:"vertical-lr",borderRadius:"0 5px 5px 0"},a))},l))},U=function(e){var t,a=e.direction,r=void 0===a?"bottom":a;return s.a.createElement("svg",{className:Object(o.css)((t={width:Object(N.c)(9),height:Object(N.c)(6)},t[S.b._sm]={width:Object(N.c)(10),height:Object(N.c)(7)},t)),viewBox:"0 0 10 7",fill:"none",stroke:"currentColor"},s.a.createElement("path",{d:"M0 0L4 4L8 0",transform:{bottom:"translate(1 1)",top:"translate(9 6) rotate(-180)"}[r],strokeWidth:"1.6"}))},F=function(e){var t=e.data,a=t.slug,r=t.title,c=t.url,d=t.resource,g=t.senderName,u=t.senderURL,h=t.description,b=t.category,w=t.isDefaultOpen,f=i()(e,["data"]),y=p()(c),v=y.hostname,j=y.pathname,O=y.query,F=y.hash,z=c+"?utm_source=tldrmarketing.com&utm_medium=referral",M=v+j+O+F,H="sponsored"===b?S.a.bg.blue.dark:T.a[b].color,q="sponsored"===b?"Sponsored":T.a[b].label,W=g||u,Y=W&&s.a.createElement(n.Fragment,null,"Submitted by:"," ",s.a.createElement(_.n,null,u?s.a.createElement(x.a,{noindex:!0,href:u},g):g));return s.a.createElement(l.a,{defaultOn:w},function(e){var t=e.on,i=e.setOn,c=e.setOff;return s.a.createElement(m.a,{query:S.b.query._sm},function(e){var p,m,g,u;return s.a.createElement(G,Object.assign({isOpen:t,isDefaultOpen:w},f),(e||!e&&!t)&&s.a.createElement(D,{isOpen:t,color:H},q),s.a.createElement(B,{isOpen:t,isDefaultOpen:w},s.a.createElement(l.a,null,function(a){var o=a.on,i=a.setOn,n=a.setOff;return s.a.createElement(A,Object.assign({href:z},e&&{onMouseOver:i,onMouseLeave:n}),s.a.createElement(_.l,{bigger:t,truncate:t?null:{lines:2}},r),s.a.createElement(_.m,null,o?M:v))}),t?s.a.createElement(E.a,{className:Object(o.css)({marginTop:Object(N.c)(20)})},h):s.a.createElement(_.k,{className:Object(o.css)((p={},p[S.b.max.tablet]={display:"none"},p.marginTop=Object(N.c)(20),p))},h),s.a.createElement("div",{className:Object(o.css)({display:"flex"})},!w&&(t?s.a.createElement(_.o,{onClick:c,className:Object(o.css)({flex:1,paddingTop:Object(N.c)(24),paddingLeft:0,textAlign:"left",cursor:"pointer",outline:"none"})},"Show less ",s.a.createElement(U,{direction:"top"})):s.a.createElement(_.r,{to:"/posts/"+a,rel:"nofollow",onClick:function(e){e.preventDefault(),i()},className:Object(o.css)({flex:1,paddingTop:Object(N.c)(24),paddingLeft:0})},"Show more ",s.a.createElement(U,{direction:"bottom"}))),t&&W&&s.a.createElement(_.j,{className:Object(o.css)((m={},m[S.b._sm]={display:"none"},m.marginTop=Object(N.c)(22),m))},Y))),s.a.createElement(C,{isOpen:t},d?s.a.createElement(n.Fragment,null,"img"===d.type&&e&&s.a.createElement(P,{img:d}),"img"===d.type&&!e&&!t&&s.a.createElement(L,{onClick:i,src:d.src,alt:d.alt}),"img"===d.type&&!e&&t&&s.a.createElement(R,{src:d.src,alt:d.alt}),("youtube"===d.type||"vimeo"===d.type||"video"===d.type)&&(d.id||d.src)&&s.a.createElement("div",{onClick:function(){return!e&&!t&&i()},className:Object(o.css)((g={"> *":{pointerEvents:!e&&!t&&"none"},width:"100%",height:"100%"},g[S.b._sm]={border:"solid 1px #e0ebf1",borderRadius:5,overflow:"hidden"},g))},s.a.createElement(k.a,{type:d.type,id:d.id,src:d.src,ratio:"58%",cover:!e&&!t}))):s.a.createElement(I,{onClick:i,short:!e&&t}),t&&W&&s.a.createElement(_.j,{className:Object(o.css)((u={},u[S.b.max._sm]={display:"none"},u.marginTop=Object(N.c)(13),u))},Y),t&&!e&&s.a.createElement(D,{isOpen:t,color:H,bottom:!0},q)))})})},z=a(172),M=_.c.withComponent("h4",{target:"e1sriyh40"}),H=Object(c.a)("div",{target:"e1sriyh41"})(((v={position:"sticky",top:Object(N.c)(53),zIndex:2,paddingTop:Object(N.c)(12),paddingBottom:Object(N.c)(12),paddingLeft:S.c.md})[S.b.mobileLg]={paddingLeft:Object(N.c)(24)},v.color="white",v.backgroundColor=S.a.bg.blue.medium,v[S.b._sm]={top:Object(N.c)(150),padding:0,marginBottom:0,color:S.a.text.blue.dark,backgroundColor:"initial"},v)),q=Object(c.a)("div",{target:"e1sriyh42"})(((j={backgroundColor:S.a.bg.blue.normal,"> *:first-child":{marginTop:"0 !important"},"> *:last-child":{marginBottom:"0 !important"},"> *:not(:last-child)":{marginBottom:"1px"}})[S.b._sm]={boxShadow:"0 5px 25px "+S.a.shadow.blue.light,borderRadius:"8px","> *":{"&:first-child":{borderRadius:"8px 8px 0 0"},"&:last-child":{borderRadius:"0 0 8px 8px"}},"> :only-child":{borderRadius:"8px"}},j));t.a=function(e){var t,a=e.date,r=a.day,n=a.date,c=e.posts,l=i()(e,["date","posts"]);return s.a.createElement(z.a,Object.assign({className:Object(o.css)((t={paddingBottom:Object(N.c)(50)},t[S.b._sm]={paddingBottom:S.c.xxl},t))},l),s.a.createElement(H,{style:{gridArea:"ContentLayoutSidebar"}},s.a.createElement(M,null,r+" ",s.a.createElement(_.c.Detail,null,n))),s.a.createElement("div",{style:{gridArea:"ContentLayoutContent"}},s.a.createElement(q,null,c.map(function(e,t){return s.a.createElement(F,{key:t,data:e})}))))}},187:function(e,t,a){"use strict";var o,r=a(166),i=a(163),n=a(164),s=Object(r.a)("div",{target:"ep24n230"})(((o={maxWidth:Object(n.c)(1e3),marginBottom:Object(n.c)(100),marginLeft:"auto",padding:Object(n.c)(23),fontWeight:800,fontSize:Object(n.c)(19),textAlign:"center",color:i.a.text.blue.light,border:"solid 2px "+i.a.border.blue.light})[i.b._sm]={width:"80%",marginTop:Object(n.c)(-50),borderRadius:"10px"},o[i.b._md]={width:"75%"},o));t.a=s},204:function(e,t,a){"use strict";a(52);var o=a(0),r=a.n(o);t.a=function(e){return r.a.createElement("svg",Object.assign({width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",stroke:"currentColor",strokeWidth:"2"},e),r.a.createElement("circle",{cx:"4.57143",cy:"4.57143",r:"3.57143"}),r.a.createElement("path",{d:"M0 0L4.57143 4.57143",transform:"translate(7.42847 7.42871)"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-434f3a32ab8d0c1305a2.js.map