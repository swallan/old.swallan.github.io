(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("6Gk8"),i=a("Bl7J"),c=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes;return 0===s.length?n.a.createElement(i.a,{location:l,title:m},n.a.createElement(c.a,{title:"Home"}),n.a.createElement(o.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(i.a,{location:l,title:m},n.a.createElement(c.a,{title:"Home"}),n.a.createElement(o.a,null),n.a.createElement("ol",{style:{listStyle:"none"}},s.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date," - ",!0===e.frontmatter.isCurrent?n.a.createElement(n.a.Fragment,null,"Present"):e.frontmatter.endDate," ")),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};var m="463306171"}}]);
//# sourceMappingURL=component---src-pages-index-js-0183df778b7882ee1a68.js.map