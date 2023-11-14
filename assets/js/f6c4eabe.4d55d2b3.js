"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8307],{4076:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=t(5250),i=t(9040);const n={title:"DriverSession",sidebar_position:1,slug:"/sessions/driver-session"},r=void 0,o={id:"manager/driver-session",title:"DriverSession",description:"clearListeners",source:"@site/docs/api/manager/driver-session.md",sourceDirName:"manager",slug:"/sessions/driver-session",permalink:"/boyka-framework/api/sessions/driver-session",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/manager/driver-session.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1699876543,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:1,frontMatter:{title:"DriverSession",sidebar_position:1,slug:"/sessions/driver-session"},sidebar:"api",previous:{title:"Locator",permalink:"/boyka-framework/api/builders/locator"},next:{title:"ParallelSession",permalink:"/boyka-framework/api/sessions/parallel-session"}},l={},d=[{value:"<code>clearListeners</code>",id:"clear-listeners",level:2},{value:"<code>clearSharedData</code>",id:"clear-shared-data",level:2},{value:"<code>getApiSetting</code>",id:"get-api-setting",level:2},{value:"<code>getListener (listenerType)</code>",id:"get-listener",level:2},{value:"<code>getMobileSetting</code>",id:"get-mobile-setting",level:2},{value:"<code>getSharedData (key)</code>",id:"get-shared-data",level:2},{value:"<code>getWebSetting</code>",id:"get-web-setting",level:2},{value:"<code>removeSharedData (key)</code>",id:"remove-shared-data",level:2},{value:"<code>setSharedData (key, value)</code>",id:"set-shared-data",level:2}];function c(e){const s={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"clear-listeners",children:(0,a.jsx)(s.code,{children:"clearListeners"})}),"\n",(0,a.jsx)(s.p,{children:"This method will clear all the listeners for the session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().clearListeners ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"clear-shared-data",children:(0,a.jsx)(s.code,{children:"clearSharedData"})}),"\n",(0,a.jsx)(s.p,{children:"This method will clear all the shared data for the session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().clearSharedData ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"get-api-setting",children:(0,a.jsx)(s.code,{children:"getApiSetting"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the API settings for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar apiSetting = getSession ().getApiSetting ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"get-listener",children:(0,a.jsx)(s.code,{children:"getListener (listenerType)"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the Boyka listener for the given listener type."}),"\n",(0,a.jsx)(s.admonition,{title:"Important!!",type:"danger",children:(0,a.jsx)(s.p,{children:"This method is for internal use only."})}),"\n",(0,a.jsx)(s.h2,{id:"get-mobile-setting",children:(0,a.jsx)(s.code,{children:"getMobileSetting"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the Mobile settings for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar mobileSetting = getSession ().getMobileSetting ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"get-shared-data",children:(0,a.jsx)(s.code,{children:"getSharedData (key)"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the shared data for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar mobileSetting = getSession ().getSharedData ("sample.key");\n'})}),"\n",(0,a.jsx)(s.h2,{id:"get-web-setting",children:(0,a.jsx)(s.code,{children:"getWebSetting"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the Web settings for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar webSetting = getSession ().getWebSetting ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"remove-shared-data",children:(0,a.jsx)(s.code,{children:"removeSharedData (key)"})}),"\n",(0,a.jsx)(s.p,{children:"This method removes the shared data for a particular key for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar value = getSession ().removeSharedData ("some.key");\n'})}),"\n",(0,a.jsx)(s.h2,{id:"set-shared-data",children:(0,a.jsx)(s.code,{children:"setSharedData (key, value)"})}),"\n",(0,a.jsx)(s.p,{children:"This method sets the shared data for a particular key for the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().setSharedData ("some.key", "some value");\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9040:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var a=t(79);const i={},n=a.createContext(i);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);