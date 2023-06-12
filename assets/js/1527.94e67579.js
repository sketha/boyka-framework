"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1527],{5185:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(5721),l=a(8795),n=a(5116),o=a(1430),s=a(9149),i=a(5169);const c={sidebar:"sidebar_nOwL",sidebarItemTitle:"sidebarItemTitle_MsVd",sidebarItemList:"sidebarItemList_zhvd",sidebarItem:"sidebarItem_W0mc",sidebarItemLink:"sidebarItemLink_V9gT",sidebarItemLinkActive:"sidebarItemLinkActive_eD2K"};function m(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:c.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(5266);function d(e){let{sidebar:t}=e;return r.createElement("ul",{className:"menu__list"},t.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return r.createElement(u.Zo,{component:d,props:e})}function h(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?r.createElement(g,{sidebar:t}):r.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return r.createElement(n.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},2881:(e,t,a)=>{a.d(t,{Z:()=>O});var r=a(5721),l=a(8795),n=a(7062),o=a(9120);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,n.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??l.image;return r.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&r.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(9149);const c={title:"title_ygvq"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,n.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return r.createElement(u,{className:(0,l.Z)(c.title,t),itemProp:"headline"},o?m:r.createElement(i.Z,{itemProp:"url",to:s},m))}var u=a(5169),d=a(9234);const g={container:"container_cIuf"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:o,formattedDate:s,readingTime:i}=a;return r.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},r.createElement(p,{date:o,formattedDate:s}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(h,{readingTime:i})))}function E(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&r.createElement(E,{href:m,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const P={authorCol:"authorCol_cgT9",imageOnlyAuthorRow:"imageOnlyAuthorRow_HSm8",imageOnlyAuthorCol:"imageOnlyAuthorCol_Q3mP"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>r.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},r.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function N(){return r.createElement("header",null,r.createElement(m,null),r.createElement(b,null),r.createElement(_,null))}var C=a(9965),k=a(6368);function Z(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,n.C)();return r.createElement("div",{id:o?C.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},r.createElement(k.Z,null,t))}var I=a(792),y=a(240),T=a(4715);function w(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return r.createElement(i.Z,(0,T.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(w,null))}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_LOxA"};function M(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement(y.Z,{tags:a})),t&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(I.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},r.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function O(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(s,{className:(0,l.Z)(o,a)},r.createElement(N,null),r.createElement(Z,null,t),r.createElement(M,null))}},7062:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var r=a(5721),l=a(2639);const n=r.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return r.createElement(n.Provider,{value:o},t)}function s(){const e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}},9234:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(5721),l=a(9e3);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}},4387:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),n="/"===l||l===r?l:(o=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(l,n)}},8858:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCausalChain=void 0,t.getErrorCausalChain=function e(t){return t.cause?[t,...e(t.cause)]:[t]}},9965:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCausalChain=t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var l=a(4387);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(l).default}});var n=a(8858);Object.defineProperty(t,"getErrorCausalChain",{enumerable:!0,get:function(){return n.getErrorCausalChain}})}}]);