(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return w});var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(195),c=a.n(o),u=a(152),m=a(197),s=a.n(m),d=a(347),g=a(350),h=a(348),f=a(349),p=a(351),b=a(326),E=a(327),v=a(191),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),a=e.excerpt,n=this.props.pageContext,r=n.previous,i=n.next;return l.a.createElement(v.a,{location:this.props.location},l.a.createElement("article",null,l.a.createElement(d.a,{round:"small",margin:"small"},l.a.createElement("header",null,l.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+t}),null===e.frontmatter.cover?"":l.a.createElement(d.a,{basis:"medium",fill:"true"},l.a.createElement(g.a,{round:"small",fit:"cover",title:e.frontmatter.title,alt:e.frontmatter.title,src:e.frontmatter.cover.childImageSharp.fluid.src})),l.a.createElement(d.a,{pad:{left:"medium",right:"medium",top:"medium"}},l.a.createElement(h.a,{margin:"small",level:"1"},e.frontmatter.title),l.a.createElement(f.a,{margin:{bottom:"small"}},e.frontmatter.date))),l.a.createElement(d.a,{pad:{left:"medium",right:"medium"}},l.a.createElement("main",null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))),l.a.createElement("aside",null,l.a.createElement(d.a,{direction:"row",justify:"center",gap:"large",margin:"medium"},r&&l.a.createElement(u.Link,{to:r.fields.slug},l.a.createElement(p.a,{onClick:!0,icon:l.a.createElement(b.a,null),label:"Previous"})),i&&l.a.createElement(u.Link,{to:i.fields.slug},l.a.createElement(p.a,{onClick:!0,icon:l.a.createElement(E.a,null),label:"Next",reverse:!0}))))))},t}(l.a.Component);t.default=y;var w="4112036649"},145:function(e,t){e.exports={title:"Starter Gatsby Blog",description:"This is a DEMO site! SSG - Gatsby JS, UI - Grommet v2",siteUrl:"https://ganevru.github.io/gatsby-starter-blog-grommet/",footerText:"**2018**<br><br>Go here: site-config.js, and replace this text with your own",author:"Ivan Ganev",authorImage:"https://pbs.twimg.com/profile_images/986603715732934656/7A4Nt68k_400x400.jpg",authorBio:"Hello, I'm Ivan Ganev and I made this blog starter for Gatsby js using UI Grommet v2. <br><br>Repo of this starter: [github.com/ganevru/gatsby-starter-blog-grommet](https://github.com/ganevru/gatsby-starter-blog-grommet) <br><br>Go here: site-config.js, and replace this text with your own",social:{twitter:"ganevru",github:"ganevru",reddit:"ganevru"},googleAnalyticsTrackingId:"ADD YOUR TRACKING ID HERE",font:"Roboto",fontHeadings:"Merriweather",brandColor:"#7D4CDB",backgroundColor:"#fff"}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(144),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var m=a(162),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var g=r.a.createContext({}),h=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},162:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},173:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(1),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},191:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(201),l=a.n(i),o=a(0),c=a.n(o),u=a(345),m=a(347),s=a(143),d=a(145),g=a.n(d),h={global:{font:{family:g.a.font},colors:{brand:g.a.brandColor}},heading:{font:{family:g.a.fontHeadings}}},f=a(348),p=a(349),b=a(152),E=function(){return c.a.createElement("header",null,c.a.createElement(m.a,{margin:"small"},c.a.createElement(b.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},c.a.createElement(f.a,{textAlign:"center",color:"brand",margin:"small"},g.a.title)),c.a.createElement(p.a,{textAlign:"center",color:"brand"},g.a.description)))},v=a(350),y=a(351),w=a(346),x=a(342),k=a(343),C=a(344),G=function(){return c.a.createElement("section",null,c.a.createElement(m.a,{round:"small",pad:"medium",margin:"small",background:"light-2"},c.a.createElement(m.a,{direction:"row"},c.a.createElement(m.a,{pad:{top:"none",bottom:"medium",right:"medium",left:"none"},round:"large",height:"xsmall",width:"xsmall"},c.a.createElement(v.a,{fit:"contain",title:g.a.author,alt:g.a.author,src:g.a.authorImage})),c.a.createElement(m.a,null,c.a.createElement(p.a,{weight:"bold",size:"large",margin:{left:"small"}},g.a.author),c.a.createElement(m.a,{direction:"row"},g.a.social.twitter.length>1?c.a.createElement(y.a,{href:"https://twitter.com/"+g.a.social.twitter,icon:c.a.createElement(x.a,{color:"brand",size:"small"})}):"",g.a.social.github.length>1?c.a.createElement(y.a,{href:"https://github.com/"+g.a.social.github,icon:c.a.createElement(k.a,{color:"brand",size:"small"})}):"",g.a.social.reddit.length>1?c.a.createElement(y.a,{href:"https://reddit.com/user/"+g.a.social.reddit,icon:c.a.createElement(C.a,{color:"brand",size:"small"})}):""))),c.a.createElement(p.a,{size:"small"},c.a.createElement(w.a,null,g.a.authorBio))))},I=function(){return c.a.createElement("footer",null,c.a.createElement(m.a,{background:"light-2",pad:"large",align:"center"},c.a.createElement(w.a,null,g.a.footerText)))};function R(){var e=l()(["\n  img {\n    border-radius: 14px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.9;\n  }\n"]);return R=function(){return e},e}a.d(t,"a",function(){return S}),Object(s.c)(R());var S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement(u.a,{theme:h},c.a.createElement(m.a,{background:g.a.backgroundColor,style:{minHeight:"100vh"},responsive:!0,margin:"small",align:"center"},c.a.createElement(E,null),c.a.createElement(m.a,{direction:"row-responsive"},c.a.createElement(m.a,{width:"large"},this.props.children),c.a.createElement("aside",null,c.a.createElement(m.a,{width:"medium"},c.a.createElement(G,null))))),c.a.createElement(I,null)))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b7d7df3ff135dd41d7df.js.map