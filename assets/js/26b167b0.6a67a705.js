"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2319],{4979:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=d(6106),r=d(3309);const n={title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},s=void 0,o={id:"project-details/action-workflows",title:"\u267b\ufe0f GitHub Actions workflows",description:"Project workflows",source:"@site/docs/contributing/project-details/action-workflows.md",sourceDirName:"project-details",slug:"/project-details/action-workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/action-workflows.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1728892178e3,sidebarPosition:4,frontMatter:{title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},sidebar:"contributing",previous:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"},next:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"}},c={},l=[{value:"Project workflows",id:"project-workflows",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"project-workflows",children:"Project workflows"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Check out all our project workflows ",(0,i.jsx)(t.a,{href:"https://github.com/BoykaFramework/boyka-framework/actions",children:"on GitHub"})]})}),"\n",(0,i.jsx)(t.p,{children:"Following are the GitHub Actions workflows that we have created for our project along with it's trigger condition:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Workflow"}),(0,i.jsx)(t.th,{children:"Event Trigger"}),(0,i.jsx)(t.th,{children:"Path Trigger"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bs-app-upload"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Every month on 25th day"}),", ",(0,i.jsx)(t.code,{children:"manual"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsx)(t.td,{children:"Will upload the Android and iOS apps on the BrowserStack cloud"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"check-commit"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PR -> main"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsxs)(t.td,{children:["Will check commit message if it complies with ",(0,i.jsx)(t.a,{href:"https://conventionalcommits.org/",children:"conventional commit specifications"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"codeql"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"push (main)"}),", ",(0,i.jsx)(t.code,{children:"PR -> main"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsxs)(t.td,{children:["Will run CodeQL on the latest commit for both ",(0,i.jsx)(t.code,{children:"java"})," and ",(0,i.jsx)(t.code,{children:"typescript"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"deploy-site"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PR -> main"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"website/"}),", ",(0,i.jsx)(t.code,{children:".github/"})]}),(0,i.jsx)(t.td,{children:"Will only test the site."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"deploy-site"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"push (main)"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"website/"}),", ",(0,i.jsx)(t.code,{children:".github/"})]}),(0,i.jsx)(t.td,{children:"Will only deploy the site to GitHub pages."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lt-app-upload"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"Every 3 months"}),", ",(0,i.jsx)(t.code,{children:"manual"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsx)(t.td,{children:"Will upload the Android and iOS apps on the LambdaTest cloud"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"pr-labeler"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PR -> (open / close)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsx)(t.td,{children:"Will label the PR with the appropriate labels."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"release"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"manual"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsx)(t.td,{children:"Will deploy the framework to Maven central, create a tag and release on GitHub based on input params."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"test-core"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"push (main)"}),", ",(0,i.jsx)(t.code,{children:"PR -> (main)"})]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"core-java/"}),", ",(0,i.jsx)(t.code,{children:".github/"})]}),(0,i.jsxs)(t.td,{children:["Will run check code styles, run tests and SonarCloud code analysis. Code analysis will only run on ",(0,i.jsx)(t.code,{children:"push(main)"})," event trigger"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tweet-release"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"release -> (published)"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"all"})}),(0,i.jsxs)(t.td,{children:["Will tweet about the release on Twitter handle ",(0,i.jsx)(t.a,{href:"https://dub.sh/boyka-twitter",children:"@BoykaFramework"}),"."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3309:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>o});var i=d(7378);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);