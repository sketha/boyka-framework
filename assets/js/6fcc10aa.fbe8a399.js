"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[376],{167:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(5721);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(t),f=i,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(4715),i=(t(5721),t(167));const o={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},a=void 0,s={unversionedId:"guides/ui/android/setup-config",id:"guides/ui/android/setup-config",title:"\ud83e\ude9b Setup Configuration",description:"You can set multiple configurations in the configuration file with different key name for different Android devices.",source:"@site/docs/framework-docs/guides/ui/android/setup-config.md",sourceDirName:"guides/ui/android",slug:"/guides/ui/android/setup-config",permalink:"/boyka-framework/docs/guides/ui/android/setup-config",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/android/setup-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1684151568,formattedLastUpdatedAt:"May 15, 2023",sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/web/create-page-object"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/android/create-page-object"}},u={},d=[{value:"Details of each Android configurations",id:"android-config-details",level:2}],c={toc:d},l="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can set multiple configurations in the configuration file with different key name for different Android devices."),(0,i.kt)("p",null,"Let's see how to set configuration in the configuration file for Android application to run on different devices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',title:'"src/test/resources/boyka-config.json"'},'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": [\n        "bugreport"\n      ]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "mobile": {\n      "test_local_sauce_android": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4723,\n          "base_path": "/wd/hub",\n          "session_override": true,\n          "driver": "UI_AUTOMATOR",\n          "allow_insecure": [\n            "get_server_logs"\n          ]\n        },\n        "device": {\n          "os": "ANDROID",\n          "version": "11",\n          "name": "Pixel_6_Pro",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "ignore_unimportant_views": true,\n          "swipe": {\n            "distance": 25,\n            "max_swipe_until_found": 5\n          },\n          "application": {\n            "path": "/apps/android/sauce-demo.apk",\n            "install_timeout": 180\n          },\n          "virtual_device": {\n            "name": "Pixel_6_Pro",\n            "headless": true\n          }\n        }\n      },\n      "test_bs_android": {\n        "server": {\n          "target": "BROWSER_STACK",\n          "user_name": "${env:BS_USER}",\n          "password": "${env:BS_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "UI_AUTOMATOR"\n        },\n        "device": {\n          "os": "ANDROID",\n          "version": "11.0",\n          "name": "Google Pixel 5",\n          "type": "CLOUD",\n          "ignore_unimportant_views": true,\n          "application": {\n            "path": "AndroidApp",\n            "external": true,\n            "install_timeout": 180\n          },\n          "capabilities": {\n            "projectName": "BrowserStack Android Project",\n            "buildName": "Test BrowserStack Build",\n            "sessionName": "Test BrowserStack Session",\n            "appiumVersion": "2.0.0",\n            "automationVersion": "latest",\n            "deviceLogs": true,\n            "networkLogs": true,\n            "debug": true,\n            "video": true,\n            "appiumLogs": true\n          }\n        }\n      },\n      "test_lt_android": {\n        "server": {\n          "target": "LAMBDA_TEST_MOBILE",\n          "user_name": "${env:LT_USER}",\n          "password": "${env:LT_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "UI_AUTOMATOR"\n        },\n        "device": {\n          "type": "CLOUD",\n          "application": {\n            "install_timeout": 180\n          },\n          "ignore_unimportant_views": true,\n          "capabilities": {\n            "platformName": "Android",\n            "deviceName": "Pixel 5",\n            "platformVersion": "11",\n            "app": "${env:LT_APP_ANDROID}",\n            "project": "LambdaTest Android Project",\n            "build": "Test LambdaTest Build",\n            "name": "Test LambdaTest Session",\n            "devicelog": true,\n            "network": true,\n            "visual": true,\n            "video": true,\n            "autoGrantPermissions": true,\n            "autoAcceptAlerts": true,\n            "isRealMobile": true,\n            "w3c": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about API configurations, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#mobile-config"},"Mobile configuration guide"),".")),(0,i.kt)("h2",{id:"android-config-details"},"Details of each Android configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_sauce_android"),": This is the configuration for running the test on local Android Emulator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_bs_android"),": This is the configuration for running the test on the BrowserStack cloud Android device."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_lt_android"),": This is the configuration for running the test on the LambdaTest cloud Android device.")))}p.isMDXComponent=!0}}]);