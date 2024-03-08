"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2927],{9887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(5250),n=a(6376);const i={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},r=void 0,s={id:"guides/ui/web/create-page-object",title:"\ud83d\udcc4 Create Page Object",description:"In Boyka, we have decoupled the page object from the WebDriver class. This is done by creating a Page Object class and defining locators using Locator builder class.",source:"@site/docs/framework-docs/guides/ui/web/create-page-object.md",sourceDirName:"guides/ui/web",slug:"/guides/ui/web/create-page-object",permalink:"/boyka-framework/docs/guides/ui/web/create-page-object",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/web/create-page-object.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1709443911,formattedLastUpdatedAt:"Mar 3, 2024",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/web/setup-config"},next:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/android/setup-config"}},c={},d=[{value:"Example Page Object class",id:"example-page-object-class",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In Boyka, we have decoupled the page object from the ",(0,o.jsx)(t.code,{children:"WebDriver"})," class. This is done by creating a Page Object class and defining locators using ",(0,o.jsx)(t.code,{children:"Locator"})," builder class."]}),"\n",(0,o.jsx)(t.h2,{id:"example-page-object-class",children:"Example Page Object class"}),"\n",(0,o.jsxs)(t.p,{children:["In the following example, I've used Lombok ",(0,o.jsx)(t.code,{children:"@Getter"})," to auto-generate getters for all the declared locators."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import io.github.boykaframework.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    public static LoginPage loginPage () {\n        return new LoginPage ();\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6376:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var o=a(79);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);