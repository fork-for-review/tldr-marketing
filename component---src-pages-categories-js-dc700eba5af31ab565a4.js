(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,a){"use strict";a.r(t);var o=a(82),r=a(0),i=a.n(r),s=a(17),n=a(179),c=a(178),l=a(174),d=a(183),p=a(187),m=a(181),g=a(165),u=a(163),h=a(164),b=a(176),w=a(182),f=function(e){var t,a=e.categorySlug;return i.a.createElement(r.Fragment,null,i.a.createElement(c.a,{style:{gridArea:"InnerLayoutNavbar"}},i.a.createElement("h1",{className:Object(o.css)({display:"flex"})},i.a.createElement(g.a,{color:b.a[a].color,className:Object(o.css)((t={},t[u.b._sm]={fontSize:Object(h.c)(16)},t))},b.a[a].label)," ",i.a.createElement(g.g,{className:Object(o.css)({marginLeft:Object(h.c)(10)})},"news roundup")),i.a.createElement("div",{className:Object(o.css)({marginLeft:"auto"})},i.a.createElement(m.a,null))),i.a.createElement("main",{style:{gridArea:"InnerLayoutContent"}},i.a.createElement(l.a,null),i.a.createElement(d.a,{date:{day:"tuesday",date:"09/04"},posts:w.a.concat().reverse()}),i.a.createElement(d.a,{date:{day:"monday",date:"09/03"},posts:w.a}),i.a.createElement(p.a,null,"Loading...")))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(s.Router,{primary:!1,component:r.Fragment},i.a.createElement(f,{path:"/categories/:categorySlug"})))}},168:function(e,t,a){"use strict";a(52);var o=a(82),r=a(0),i=a.n(r),s=a(163);t.a=function(e){var t,a=e.type,r=e.id,n=e.src,c=e.ratio,l=void 0===c?"56.25%":c,d=e.cover,p={youtube:"https://www.youtube.com/embed",vimeo:"https://player.vimeo.com/video"}[a];return i.a.createElement("div",{className:Object(o.css)(Object.assign({width:"100%",height:0,position:"relative",paddingTop:l,backgroundColor:"black",overflow:"hidden","> *":{width:"100%",height:"100%",position:"absolute",top:0,left:0,border:0}},d&&(t={},t[s.b.max._sm]={"&, > *":{width:"100%",height:"100%"}},t)))+" EmbedVideo"},"video"===a?i.a.createElement("video",{src:n,controls:!0}):i.a.createElement("iframe",{src:p+"/"+r,title:"Embeded video",allowFullScreen:!0}))}},173:function(e,t,a){"use strict";a(52);var o=a(167),r=a.n(o),i=a(0),s=a.n(i),n=a(184),c=a.n(n),l=a(186),d=a.n(l),p=a(82),m=a(169),g=a(170),u=a(168),h=a(165),b=Object(p.css)(h.u);t.a=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,i=r()(e,["children","className"]);return s.a.createElement(c.a,Object.assign({renderers:{link:g.a,shortcode:function(e){var t=e.identifier,a=e.attributes;return"youtube"!==t&&"vimeo"!==t||!a.id?"video"===t&&a.src?s.a.createElement(u.a,{type:t,src:a.src}):"link"===t&&a.to&&a.text?s.a.createElement(m.Link,{to:a.to},a.text):"":s.a.createElement(u.a,{type:t,id:a.id})}},escapeHtml:!1,source:t,className:b+" "+o,plugins:[[d.a]]},i))}},174:function(e,t,a){"use strict";a(52);var o=a(82),r=a(0),i=a.n(r),s=a(165),n=a(163),c=a(164),l=a(177),d=a.n(l),p=s.e.withComponent("h4",{target:"epe3in70"});t.a=function(e){var t;return i.a.createElement("div",Object.assign({className:Object(o.css)((t={},t[n.b.max._sm]={display:"none"},t.position="fixed",t.zIndex=4,t.bottom=n.c.lg,t.background="rgba(239, 245, 248, 0.9)",t.boxShadow="0 0 30px 30px rgba(239, 245, 248, 0.9)",t))},e),i.a.createElement("img",{src:d.a,alt:"Saijo George",className:Object(o.css)({width:Object(c.c)(45),height:Object(c.c)(45),borderRadius:"50%",filter:"grayscale(1)",transformOrigin:"left bottom",transition:".3s","*:hover > &":{transform:"scale(2)",filter:"grayscale(0)"}})}),i.a.createElement(p,{className:Object(o.css)({marginTop:Object(c.c)(13),marginBottom:Object(c.c)(13)})},"Created by",i.a.createElement("br",null),"Saijo George"),i.a.createElement(s.s,{to:"/about",className:Object(o.css)({padding:0})},"Read more"))}},176:function(e,t,a){"use strict";t.a={seo:{color:"#4FB996",label:"SEO"},"paid-media":{color:"#F4A93A",label:"Paid Media"},"social-media":{color:"#4E8ED9",label:"Social Media"},general:{color:"#DE83B4",label:"General"},jobs:{color:"#C583DE",label:"Jobs"},"tips-and-tricks":{color:"#E0697D",label:"Tips & Tricks"}}},181:function(e,t,a){"use strict";var o=a(82),r=a(0),i=a.n(r),s=a(165),n=a(164);t.a=function(){return i.a.createElement(s.f,{to:"/"},i.a.createElement("svg",{viewBox:"0 0 24 24",className:Object(o.css)({width:Object(n.a)(26),height:Object(n.a)(26),marginRight:Object(n.a)(5),fill:"currentColor"})},i.a.createElement("path",{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"})),"Go back")}},182:function(e,t,a){"use strict";var o=a(169),r=[{slug:"post-01",title:"Not Secure Label Is Now Live For HTTP Sites On Chrome",url:"https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html",resource:{type:"youtube",id:"Kch8n4tcOZQ"},description:'\nIt looks like with the latest version of Chrome (just go in and manually update if it did not auto update for you) HTTP sites are now marked with the Not Secure label along with the 🛈 mark in the address bar.\n    \n![Some test image](https://images.unsplash.com/photo-1536641480196-ed8d5b3ed21f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e32ed3893fed0e0e5a1c5ef59861d3a&auto=format&fit=crop&w=2100&q=80)\n\n[[ vimeo id="286945944" ]]\n  ',category:"sponsored",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-02",title:"Not Secure Label Is Now Live For HTTP Sites On Chrome",url:"https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html",resource:{type:"vimeo",id:"286945944"},description:"It looks like with the latest version of Chrome (just go in and manually update if it did not auto update for you) HTTP sites are now marked with the Not Secure label along with the 🛈 mark in the address bar.",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-03",title:"Mark Up Sections Of A News Article To Be Read Aloud By The Google Assistant",url:"https://webmasters.googleblog.com/2018/07/hey-google-whats-latest-news.html",resource:{type:"video",src:"http://asista.pl/f/ati.mp4"},alt:"",description:"Google has announced a new schema.org structured data specification (still pending) called [speakable](https://pending.schema.org/speakable) for **[eligible publishers](https://developers.google.com/search/docs/data-types/speakable#eligibility)** to mark up sections of a news article that are most relevant to be read aloud by the Google Assistant.The speakable property works on Google Home devices for English-speaking users in the U.S. only.Links : [Technical Details](https://developers.google.com/search/docs/data-types/speakable) & [Submit your Interest](https://services.google.com/fb/forms/speakablenewsinterest/) if you are a Google News Publisher. ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-04",title:"Google Tests New Design For Image Search Results",url:"https://www.searchenginejournal.com/google-tests-new-design-for-image-search-results/262641/",resource:{type:"img",src:Object(o.withPrefix)("/images/p3.png"),w:1e3,h:380},alt:"",description:"\nGoogle has been spotted testing a new design for image search results pages. The redesign includes an in-line photo viewer, which opens on the left-hand side of the SERPs. There are captions and URLs in the new layout.\nIt does not show up for me, so this could be a limited test or a gradual rollout. ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-05",title:"Google Tests Price Insights For Hotel Listings",url:"https://alakov.com/blog/price-insights-test",resource:{type:"img",src:Object(o.withPrefix)("/images/p4.png"),w:827,h:657},alt:"",description:"Google is testing a new feature in hotels’ listings called **Price Insights**. In this test, a box appears in the hotel’s knowledge panel that informs users of how prices at the hotel compare against similar hotels in the area followed by “Explore Insights” CTA.\n\n  There are some very aggressive messages in there like:\n  * The hotel costs more than similar hotels nearby.\n  * Prices comparable at similar hotel nearby.\n\n\n  And some favourable ones like:\n  * The hotel is 20% less than usual.\n\n\n  I image the last few weeks would have been quite stressful if you are an SEO working in the Hotel Industry with all these new changes.",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-06",title:"GMB Dashboard Starts Showing Competitor's Google Posts",url:"https://twitter.com/brodieseo/status/1021545487558537218",resource:{type:"img",src:Object(o.withPrefix)("/images/p5.jpg"),w:468,h:347},alt:"",description:"\nLooks like Google really wants you to add more things through Google Posts and the latest tactic is to show you what you competitors are posting. You can add those in through your [GMB Dashboard](https://business.google.com/locations).",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-07",title:"Alphabet Q2 Reported At 32.7 Billion Up 26% YoY",url:"https://www.cnbc.com/2018/07/23/alphabet-earnings-q2-2018.html",resource:{type:"img",src:Object(o.withPrefix)("/images/p6.png"),w:567,h:207},alt:"",description:"\nDespite the fine imposed by the EU, things are looking good for Google. The Q2 2018 report was able to come back looking so good namely thanks to Google’s ad revenues which had gone from $22.6bn in Q2 2017 to $28bn in Q2 2018.\n\n[Report PDF](https://abc.xyz/investor/pdf/2018Q2_alphabet_earnings_release.pdf)",category:"general",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-08",title:"Pinterest Nears 1 Billion In Ad Sales",url:"http://www.thesempost.com/google-search-quality-rater-guidelines-updated/",img:"",description:"\nAfter hitting $500 million in sales in 2017, Pinterest is on pace to almost double that this year by anonymous sources.\nPinterest is having particular success with mobile ads, as the site becomes a more popular place for big fashion and beauty brands to get in front of the company's 200 million monthly active users.\nReaching $1 billion in revenue will mark a significant milestone, but it's way below previous estimates. In 2015, [TechCrunch](https://techcrunch.com/2015/10/16/leaked-pinterest-documents-show-revenue-growth-forecasts/) reported on leaked financial documents that showed Pinterest was then projecting sales of $2.8 billion by 2018. It's a tall task to break up the digital advertising duopoly of Google and Facebook, which control a combined 57 percent of U.S. digital ad spending, according to [eMarketer](https://www.emarketer.com/content/google-and-facebook-s-digital-dominance-fading-as-rivals-share-grows). ",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-09",title:"Google Seems To Have Hijacked The Search Box For TheFreeDictionary.com",url:"https://www.seroundtable.com/google-dictionary-branded-free-dictionary-26091.html",resource:{type:"img",src:Object(o.withPrefix)("/images/p8.png"),w:654,h:365},alt:"",description:"\nWhen you use The Free Dictionary site search box in the SERP for something that takes you within Google's dictionary over their internal site search.\nThey also show Google's dictionary widget at  position zero for the query [free dictionary](https://www.google.com.au/search?q=free+dictionary), [dictionary](https://www.google.com.au/search?q=free+dictionary), etc",category:"seo",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-10",title:"IAB Survey Finds Podcast Ad Revenue Is Growing Fast",url:"https://www.searchenginejournal.com/podcast-ad-revenues/262655/",resource:{type:"img",src:Object(o.withPrefix)("/images/p9.png"),w:696,h:334},alt:"",description:"\nA new report indicates that podcasting revenues are a fast growing areas of digital advertising. The Internet Advertising Bureau (IAB) released a [research study -PDF](https://www.iab.com/wp-content/uploads/2018/06/2018_IAB_Podcast_Ad_Rev_Study_vFinal.pdf) showing that podcasting is experience accelerated growth and is forecast to keep on rising.",category:"paid-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-11",title:"YouTube Tests An Explore Tab To Help Users Discover Videos Based On Viewing Activity",url:"https://www.searchenginejournal.com/youtubes-new-explore-tab-helps-users-discover-videos-based-on-viewing-activity/262823/",resource:{type:"img",src:Object(o.withPrefix)("/images/p10.jpg"),w:760,h:400},alt:"",description:"\nYouTube is testing a new tab in the iPhone app that is designed to help users find videos they may not have discovered on their own. The aim of the Explore tab will be to help expose YouTube viewers to new creators.\nThose who have been selected for the test group will notice that the Explore tab exists in place of the Trending tab.",category:"social-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-12",title:"Amazon Sponsored Products Could Be Coming To A Website Near You",url:"http://adage.com/article/digital/amazon-tests-ground-product-ads/314321/",img:"",description:"\nIn its latest bid to close the gap with Google and Facebook in digital ad sales, Amazon plans to dramatically increase the available space for one of its most important formats, Sponsored Products: It could let brands run them across the internet, not just within its own properties.\nAmazon is talking with top agencies and brands about participating in a test that would expand the scope of product ads, delivering them to outside websites by retargeting consumers who visit Amazon.",category:"paid-media",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"},{slug:"post-13",title:"Declines In Pay TV Subscriptions Have Exceeded Previous Estimates",url:"https://www.recode.net/2018/7/24/17604218/partnering-with-netflix-and-hulu-hasnt-stopped-pay-tv-providers-from-losing-customers",resource:{type:"img",src:Object(o.withPrefix)("/images/p12.png"),w:845,h:292},alt:"",description:"The number of cord-cutters in the U.S. is expected to increase 33 percent this year to 33 million, according to eMarketer. Last year, the research firm had predicted a 22 percent rise in people who have canceled their pay TV service, but have since had to revise that estimate upward.",category:"general",senderName:"Saijo George",senderURL:"https://twitter.com/@SaijoGeorge"}];t.a=r},183:function(e,t,a){"use strict";a(52),a(83);var o=a(82),r=a(167),i=a.n(r),s=a(0),n=a.n(s),c=a(166),l=a(190),d=a(191),p=a.n(d),m=a(192),g=a(12),u=a.n(g),h=a(193),b=a.n(h),w=a(194),f=a.n(w);a(195),a(196),Object(o.injectGlobal)({".pswp__top-bar":{background:"none !important"}});var v=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).initGallery=function(){var e=[t.props.img],a={history:!1,captionEl:!1,shareEl:!1,counterEl:!1,fullscreenEl:!1,showHideOpacity:t.props.showHideOpacity,bgOpacity:.8,getThumbBoundsFn:function(){var e=window.pageYOffset||document.documentElement.scrollTop,a=t.thumb.getBoundingClientRect();return{x:a.left,y:a.top+e,w:a.width}}};t.gallery=new b.a(t.pswpElement,f.a,e,a),t.gallery.init()},t.getOpenerProps=function(e){var a,o=void 0===e?{}:e,r=o.onClick,i=void 0===r?function(){}:r,s=o.useInnerRef;return(a={})[void 0!==s&&s?"innerRef":"ref"]=function(e){return t.thumb=e},a.onClick=function(){i(),t.initGallery()},a},t}return u()(t,e),t.prototype.render=function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.props.children({getOpenerProps:this.getOpenerProps}),n.a.createElement("div",{ref:function(t){return e.pswpElement=t},className:"pswp",tabIndex:"-1",role:"dialog","aria-hidden":"true"},n.a.createElement("div",{className:"pswp__bg"}),n.a.createElement("div",{className:"pswp__scroll-wrap"},n.a.createElement("div",{className:"pswp__container"},n.a.createElement("div",{className:"pswp__item"}),n.a.createElement("div",{className:"pswp__item"}),n.a.createElement("div",{className:"pswp__item"})),n.a.createElement("div",{className:"pswp__ui pswp__ui--hidden"},n.a.createElement("div",{className:"pswp__top-bar"},n.a.createElement("button",{className:"pswp__button pswp__button--close",title:"Close (Esc)"}),n.a.createElement("button",{className:"pswp__button pswp__button--zoom",title:"Zoom in/out"}),n.a.createElement("div",{className:"pswp__preloader"},n.a.createElement("div",{className:"pswp__preloader__icn"},n.a.createElement("div",{className:"pswp__preloader__cut"},n.a.createElement("div",{className:"pswp__preloader__donut"})))))))))},t}(s.Component);v.defaultProps={showHideOpacity:!0};var y,j,O,E,x=v,k=a(173),_=a(170),S=a(168),N=a(165),T=a(163),G=a(164),L=a(176),R=Object(c.a)("div",{target:"ew0ifvj0"})(function(e){var t,a=e.isOpen,o=e.isDefaultOpen;return(t={display:"flex",alignItems:"center",flexWrap:a?"wrap":"nowrap",position:"relative",background:"white"})[T.b._sm]={padding:Object(G.c)(20),paddingBottom:!o&&0},t[T.b.max._sm]=Object.assign({},a&&{marginTop:Object(G.c)(30),marginBottom:Object(G.c)(30)+" !important"}),t}),B=Object(c.a)("div",{target:"ew0ifvj1"})(function(e){var t,a=e.isOpen,o=e.isDefaultOpen;return(t={flexBasis:a?"100%":"62%",order:a?2:1,padding:T.c.md,paddingBottom:!o&&T.c.sm})[T.b.mobileLg]={padding:Object(G.c)(24),paddingBottom:!o&&Object(G.c)(12)},t[T.b._sm]={flexBasis:a?"100%":"65%",padding:Object(G.c)(12),paddingRight:!a&&Object(G.c)(24)},t.overflow="hidden",t}),P=Object(c.a)("div",{target:"ew0ifvj2"})(function(e){var t,a=e.isOpen;return(t={alignSelf:"stretch",flexBasis:a?"100%":"38%",order:a?1:2,position:"relative"})[T.b.max._sm]={"::after":a&&{content:'""',width:"100%",height:"1px",position:"absolute",bottom:0,backgroundColor:"rgba(0, 0, 0, .07)"}},t[T.b._sm]={alignSelf:"flex-start",flexBasis:a?"100%":"35%",marginBottom:Object(G.c)(20),padding:a&&Object(G.c)(12),paddingBottom:0},t}),C=Object(c.a)("img",{target:"ew0ifvj3"})(((y={display:"block",width:"100%",cursor:"zoom-in"})[T.b._sm]={border:"solid 1px #e0ebf1",borderRadius:5},y)),I=function(e){var t=e.img,a=i()(e,["img"]);return n.a.createElement(x,{img:Object.assign({},t,{msrc:t.src})},function(e){var o=e.getOpenerProps;return n.a.createElement(C,Object.assign({},o({useInnerRef:!0}),{src:t.src,alt:t.alt},a))})},A=n.a.forwardRef(function(e,t){var a,r=e.src,s=e.alt,c=i()(e,["src","alt"]);return n.a.createElement("div",Object.assign({ref:t,role:"img","aria-label":s,className:Object(o.css)((a={height:"100%",position:"relative",zIndex:0,backgroundImage:"url("+r+")",backgroundPosition:"center",backgroundSize:"cover",backgroundColor:T.a.bg.blue.normal,cursor:"zoom-in"},a[T.b._sm]={border:"solid 1px #e0ebf1",borderRadius:5},a["::after"]={content:'""',display:"block",width:"100%",height:0,position:"relative",zIndex:1,paddingBottom:"58%"},a))},c))}),D=function(e){var t=e.img,a=i()(e,["img"]);return n.a.createElement(x,{img:Object.assign({},t,{msrc:t.src})},function(e){var o=e.getOpenerProps;return n.a.createElement(A,Object.assign({},o(),{src:t.src,alt:t.alt},a))})},F=Object(c.a)("div",{target:"ew0ifvj4"})(((j={height:"100%",position:"relative",zIndex:0,backgroundColor:T.a.bg.grey.lightest})[T.b._sm]={backgroundColor:"transparent",border:"solid 1px "+T.a.border.blue.light,borderRadius:"5px"},j["::before"]={content:'"- No media -"',display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"absolute",color:T.a.text.blue.light,fontWeight:900,fontSize:Object(G.c)(10),textTransform:"uppercase",letterSpacing:Object(G.c)(4)},j["::after"]={content:'""',display:"block",width:"100%",height:0,position:"relative",zIndex:1,paddingBottom:"58%"},j),function(e){var t;return e.short&&{"::after":(t={paddingBottom:"30%"},t[T.b._sm]={paddingBottom:"10%"},t)}}),U=Object(c.a)(_.a,{target:"ew0ifvj5"})({display:"block",borderRadius:"2px",transition:"box-shadow .3s",boxShadow:"0 0 0 5px white, 0 0 0 5px transparent",":hover":{boxShadow:"0 0 0 5px white, 0 0 0 8px "+T.a.border.blue.medium}}),z=function(e){var t,a,r=e.isOpen,s=e.bottom,c=e.color,l=e.children,d=i()(e,["isOpen","bottom","color","children"]);return n.a.createElement("div",Object.assign({className:Object(o.css)((t={position:"absolute",zIndex:1,left:r?Object(G.c)(15):"62%"},t[T.b.mobileLg]={left:r?Object(G.c)(23):"62%"},t.top=s?null:0,t.bottom=s?0:null,t[T.b._sm]={left:"100%",paddingTop:"24%",transform:"translateY(-50%)"},t))},d),n.a.createElement(N.i,{className:Object(o.css)((a={padding:Object(G.c)(4)+" "+Object(G.c)(16),backgroundColor:c,borderRadius:s?"7px 7px 0 0":"0 0 7px 0",border:s?"solid 1px":null,borderRight:s?null:"solid 1px",borderBottom:s?"none":"solid 1px"},a[T.b._sm]={padding:Object(G.c)(16)+" "+Object(G.c)(4),writingMode:"vertical-lr",borderRadius:"0 5px 5px 0"},a))},l))},H=function(e){var t,a=e.direction,r=void 0===a?"bottom":a;return n.a.createElement("svg",{className:Object(o.css)((t={width:Object(G.c)(9),height:Object(G.c)(6)},t[T.b._sm]={width:Object(G.c)(10),height:Object(G.c)(7)},t)),viewBox:"0 0 10 7",fill:"none",stroke:"currentColor"},n.a.createElement("path",{d:"M0 0L4 4L8 0",transform:{bottom:"translate(1 1)",top:"translate(9 6) rotate(-180)"}[r],strokeWidth:"1.6"}))},M=function(e){var t=e.data,a=t.slug,r=t.title,c=t.url,d=t.resource,g=t.senderName,u=t.senderURL,h=t.description,b=t.category,w=t.isDefaultOpen,f=i()(e,["data"]),v=p()(c),y=v.hostname,j=v.pathname,O=v.query,E=v.hash,x=c+"?utm_source=tldrmarketing.com&utm_medium=referral",_=y+j+O+E,C="sponsored"===b?T.a.bg.blue.dark:L.a[b].color,M="sponsored"===b?"Sponsored":L.a[b].label,q=g||u,Y=q&&n.a.createElement(s.Fragment,null,"Submitted by:"," ",n.a.createElement(N.o,null,u?n.a.createElement(N.n,{noindex:!0,href:u},g):g));return n.a.createElement(l.a,{defaultOn:w},function(e){var t=e.on,i=e.setOn,c=e.setOff;return n.a.createElement(m.a,{query:T.b.query._sm},function(e){var p,m;return n.a.createElement(R,Object.assign({isOpen:t,isDefaultOpen:w},f),(e||!e&&!t)&&n.a.createElement(z,{isOpen:t,color:C},M),n.a.createElement(B,{isOpen:t,isDefaultOpen:w},n.a.createElement(l.a,null,function(a){var o=a.on,i=a.setOn,s=a.setOff;return n.a.createElement(U,Object.assign({href:x},e&&{onMouseOver:i,onMouseLeave:s}),n.a.createElement(N.l,{bigger:t,truncate:t?null:{lines:2}},r),n.a.createElement(N.m,null,o?_:y))}),t?n.a.createElement(k.a,{className:Object(o.css)({marginTop:Object(G.c)(20)})},h):n.a.createElement(N.k,{className:Object(o.css)((p={},p[T.b.max.tablet]={display:"none"},p.marginTop=Object(G.c)(20),p))},h),n.a.createElement("div",{className:Object(o.css)({display:"flex"})},!w&&(t?n.a.createElement(N.p,{onClick:c,className:Object(o.css)({flex:1,paddingTop:Object(G.c)(24),paddingLeft:0,textAlign:"left",cursor:"pointer",outline:"none"})},"Show less ",n.a.createElement(H,{direction:"top"})):n.a.createElement(N.s,{to:"/posts/"+a,rel:"nofollow",onClick:function(e){e.preventDefault(),i()},className:Object(o.css)({flex:1,paddingTop:Object(G.c)(24),paddingLeft:0})},"Show more ",n.a.createElement(H,{direction:"bottom"}))),t&&q&&n.a.createElement(N.j,{className:Object(o.css)({marginTop:Object(G.c)(22)})},Y))),n.a.createElement(P,{isOpen:t},d?n.a.createElement(s.Fragment,null,"img"===d.type&&e&&!t&&n.a.createElement(D,{img:d}),"img"===d.type&&!e&&!t&&n.a.createElement(A,{onClick:i,src:d.src,alt:d.alt}),"img"===d.type&&t&&n.a.createElement(I,{img:d}),("youtube"===d.type||"vimeo"===d.type||"video"===d.type)&&(d.id||d.src)&&n.a.createElement("div",{onClick:function(){return!e&&!t&&i()},className:Object(o.css)((m={width:"100%",height:"100%"},m[T.b._sm]={border:"solid 1px #e0ebf1",borderRadius:5,overflow:"hidden"},m[T.b.max._sm]={"> *":{pointerEvents:!t&&"none"}},m))},n.a.createElement(S.a,{type:d.type,id:d.id,src:d.src,ratio:"58%",cover:!0}))):n.a.createElement(F,{onClick:i,short:t}),t&&!e&&n.a.createElement(z,{isOpen:t,color:C,bottom:!0},M)))})})},q=a(172),Y=N.c.withComponent("h4",{target:"e1sriyh40"}),W=Object(c.a)("div",{target:"e1sriyh41"})(((O={position:"sticky",top:Object(G.c)(53),zIndex:2,paddingTop:Object(G.c)(12),paddingBottom:Object(G.c)(12),paddingLeft:T.c.md})[T.b.mobileLg]={paddingLeft:Object(G.c)(24)},O.color="white",O.backgroundColor=T.a.bg.blue.medium,O[T.b._sm]={top:Object(G.c)(150),padding:0,marginBottom:0,color:T.a.text.blue.dark,backgroundColor:"initial"},O)),Q=Object(c.a)("div",{target:"e1sriyh42"})(((E={backgroundColor:T.a.bg.blue.normal,"> *:first-child":{marginTop:"0 !important"},"> *:last-child":{marginBottom:"0 !important"},"> *:not(:last-child)":{marginBottom:"1px"}})[T.b._sm]={boxShadow:"0 5px 25px "+T.a.shadow.blue.light,borderRadius:"8px","> *":{"&:first-child":{borderRadius:"8px 8px 0 0"},"&:last-child":{borderRadius:"0 0 8px 8px"}},"> :only-child":{borderRadius:"8px"}},E));t.a=function(e){var t,a=e.date,r=a.day,s=a.date,c=e.posts,l=i()(e,["date","posts"]);return n.a.createElement(q.a,Object.assign({className:Object(o.css)((t={paddingBottom:Object(G.c)(50)},t[T.b._sm]={paddingBottom:T.c.xxl},t))},l),n.a.createElement(W,{style:{gridArea:"ContentLayoutSidebar"}},n.a.createElement(Y,null,r+" ",n.a.createElement(N.c.Detail,null,s))),n.a.createElement("div",{style:{gridArea:"ContentLayoutContent"}},n.a.createElement(Q,null,c.map(function(e,t){return n.a.createElement(M,{key:t,data:e})}))))}},187:function(e,t,a){"use strict";var o,r=a(166),i=a(163),s=a(164),n=Object(r.a)("div",{target:"ep24n230"})(((o={maxWidth:Object(s.c)(1e3),marginBottom:Object(s.c)(100),marginLeft:"auto",padding:Object(s.c)(23),fontWeight:800,fontSize:Object(s.c)(19),textAlign:"center",color:i.a.text.blue.light,border:"solid 2px "+i.a.border.blue.light})[i.b._sm]={width:"80%",marginTop:Object(s.c)(-50),borderRadius:"10px"},o[i.b._md]={width:"75%"},o));t.a=n}}]);
//# sourceMappingURL=component---src-pages-categories-js-dc700eba5af31ab565a4.js.map