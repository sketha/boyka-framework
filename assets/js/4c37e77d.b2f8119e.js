"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4217],{167:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(5721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(4715),i=(n(5721),n(167));const o={title:"INavigateActionsListener",sidebar_position:6},a=void 0,l={unversionedId:"actions/interfaces/listeners/drivers/navigate-actions-listener",id:"actions/interfaces/listeners/drivers/navigate-actions-listener",title:"INavigateActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/navigate-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/navigate-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/navigate-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/navigate-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1684151568,formattedLastUpdatedAt:"May 15, 2023",sidebarPosition:6,frontMatter:{title:"INavigateActionsListener",sidebar_position:6},sidebar:"api",previous:{title:"IFrameActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/frame-actions-listener"},next:{title:"IWindowActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/window-actions-listener"}},s={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onBack</code>",id:"on-back",level:2},{value:"<code>onForward</code>",id:"on-forward",level:2},{value:"<code>onGetUrl</code>",id:"on-forward",level:2},{value:"<code>onRefresh</code>",id:"on-refresh",level:2},{value:"<code>onTo (url)</code>",id:"on-to",level:2},{value:"<code>onVerifyUrl</code>",id:"on-verify-url",level:2}],d={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling Web navigation actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-back"},(0,i.kt)("inlineCode",{parentName:"h2"},"onBack")),(0,i.kt)("p",null,"This method will get executed after navigating back on the web page."),(0,i.kt)("h2",{id:"on-forward"},(0,i.kt)("inlineCode",{parentName:"h2"},"onForward")),(0,i.kt)("p",null,"This method will get executed after navigating forward on the web page."),(0,i.kt)("h2",{id:"on-forward"},(0,i.kt)("inlineCode",{parentName:"h2"},"onGetUrl")),(0,i.kt)("p",null,"This method will get executed after getting the current page URL."),(0,i.kt)("h2",{id:"on-refresh"},(0,i.kt)("inlineCode",{parentName:"h2"},"onRefresh")),(0,i.kt)("p",null,"This method will get executed after refreshing the page."),(0,i.kt)("h2",{id:"on-to"},(0,i.kt)("inlineCode",{parentName:"h2"},"onTo (url)")),(0,i.kt)("p",null,"This method will get executed after navigating to the provided URL."),(0,i.kt)("h2",{id:"on-verify-url"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyUrl")),(0,i.kt)("p",null,"This method will get executed after verifying the current page URL."))}f.isMDXComponent=!0}}]);