"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4583],{5392:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});i(7378);var s=i(5018),r=i(3372);const o="features_ez_S",a="featureSvg_bdXF";var n=i(8755),l=i(6106);const d=e=>{let{title:t,image:i}=e;return(0,l.jsx)("div",{className:"text--center",children:(0,l.jsx)("img",{className:a,alt:t,src:(0,n.Ay)(i)})})},c=e=>{let{title:t,description:i}=e;return(0,l.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,l.jsx)("h2",{children:t}),(0,l.jsx)("p",{children:i})]})},m=e=>{let{title:t,image:i,description:s}=e;return(0,l.jsxs)("div",{className:(0,r.A)("col col--4"),children:[(0,l.jsx)(d,{title:t,image:i}),(0,l.jsx)(c,{title:t,description:s})]})},g=e=>{let{features:t}=e;return(0,l.jsx)("section",{className:o,children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)(m,{...e},t)))})})})},u=JSON.parse('{"Sl":"/img/boyka-banner.png","DD":"","h_":"Ultimate Test Automation framework for Web, API, Android and iOS automation testing","Uo":[{"id":1,"text":"Get Started","type":"button--primary","href":"/docs/intro","target":"_self"},{"id":2,"text":"View on GitHub","type":"button--info","href":"https://git.new/boyka-github","target":"_self"},{"id":3,"text":"Join us on Discord","type":"button--info","href":"https://dub.sh/boyka-discord","target":"_blank"}],"MV":[{"id":1,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Star"},{"id":2,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Watch"},{"id":3,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Fork"},{"id":4,"userId":"BoykaFramework"}],"qT":[{"title":"Zero boilerplate code","image":"img/home/no-code.svg","description":"Exposes ready to use static methods to perform various actions on web, mobile and API platforms, thus reducing the need to write any boilerplate codes"},{"title":"Configurable","image":"img/home/configurable.svg","description":"Highly configurable via JSON files and environment variables. It is easy to extend and customize the framework"},{"title":"API Testing","image":"img/home/api-testing.svg","description":"Supports API testing with simple and easy to write test cases"},{"title":"Web Testing","image":"img/home/web-testing.svg","description":"Supports Web testing with Chrome, Firefox, Edge and Safari browsers"},{"title":"Mobile Testing","image":"img/home/mobile_devices.svg","description":"Supports Mobile testing with Android and iOS platforms for Native, Hybrid and Web applications"},{"title":"Video Recording","image":"img/home/video-recording.svg","description":"Allows video recording of Mobile automation tests"},{"title":"Cloud Support","image":"img/home/cloud-support.svg","description":"Provides facility to run tests on Cloud platforms like BrowserStack"},{"title":"Parallel execution","image":"img/home/parallel.svg","description":"Allows parallel and sequential execution of tests using any testing framework"},{"title":"Multi-Platform Testing","image":"img/home/real_time.svg","description":"Test multi-user multi-platform applications"},{"title":"Logging events","image":"img/home/logging.svg","description":"Provides logging support using Log4J2 to log all events occurred during test execution"},{"title":"In-built verification","image":"img/home/inline-check.svg","description":"Provides inbuilt verification for inline assertion of element properties and API responses"},{"title":"Response schema verification","image":"img/home/schema-validation.svg","description":"Provides API response schema verification for Rest APIs"}]}'),p="HeroContainer_v2Am",h="HeroContent_wUuq",b="HeroTitle_d7d0",f="HeroDescription_Bq3r",v="CallToActions_tDGG",x="ctaButtons_Nl6G",y="SocialButtons_sdl9";var k=i(1296);const w=e=>{let{userId:t,repoName:i,type:s="Follow"}=e,r=`${t}`,o=`${s}`,a=`${s}`;return"Follow"!==s&&i&&(r+=`/${i}`,o+=` ${r}`),"Watch"===s?r+="/subscription":"Fork"===s?r+="/fork":"Follow"===s&&(a+=` @${t}`),(0,l.jsx)(k.A,{href:`https://github.com/${r}`,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":`${o} on GitHub`,children:a})};var j=i(4816);const N=e=>{let{href:t,type:i,target:s,text:o}=e;return(0,l.jsx)(j.A,{className:(0,r.A)("button",i),to:(0,n.Ay)(t),target:s,children:o})};var A=i(4497),_=i.n(A);const I=e=>{let{title:t,tagLine:i}=e;return(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h1",{className:b,children:t}),(0,l.jsx)(_(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1},children:(0,l.jsx)("p",{className:f,children:i})})]})},S=e=>{let{buttons:t}=e;return(0,l.jsx)("div",{className:x,children:t?.map((e=>(0,l.jsx)(N,{href:e.href,text:e.text,type:e.type,target:e.target},e.id)))})},P=e=>{let{gitButtons:t}=e;return(0,l.jsx)("div",{className:y,children:t?.map((e=>(0,l.jsx)(w,{id:e.id,userId:e.userId,repoName:e.repoName,type:e.type},e.id)))})},B=e=>{let{title:t,tagLine:i,image:s,buttons:r=[],gitButtons:o=[]}=e;return(0,l.jsxs)("section",{className:p,style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(0,n.Ay)(s)})`},children:[(0,l.jsx)(I,{title:t,tagLine:i}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)(S,{buttons:r}),(0,l.jsx)(P,{gitButtons:o})]})]})},D=()=>(0,l.jsx)(s.A,{title:u.DD,description:u.h_,children:(0,l.jsxs)("main",{children:[(0,l.jsx)(B,{title:u.DD,tagLine:u.h_,image:u.Sl,buttons:u.Uo,gitButtons:u.MV}),(0,l.jsx)(g,{features:u.qT})]})})}}]);