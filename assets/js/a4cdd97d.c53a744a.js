"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1214],{3571:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(5250),n=i(9040);const r={title:"AlertActions",sidebar_position:1},c=void 0,a={id:"actions/drivers/alert-actions",title:"AlertActions",description:"Static methods",source:"@site/docs/api/actions/drivers/alert-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/alert-actions",permalink:"/boyka-framework/api/actions/drivers/alert-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/alert-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1699876543,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:1,frontMatter:{title:"AlertActions",sidebar_position:1},sidebar:"api",previous:{title:"DeviceActions",permalink:"/boyka-framework/api/actions/device/device-actions"},next:{title:"ContextActions",permalink:"/boyka-framework/api/actions/drivers/context-actions"}},o={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onAlert</code>",id:"on-alert",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>accept (text)</code>",id:"accept-prompt",level:3},{value:"<code>accept</code>",id:"accept",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3},{value:"<code>verifyAccept</code>",id:"verify-accept",level:2},{value:"<code>verifyAccept (text)</code>",id:"verify-accept-alert",level:2},{value:"<code>verifyDismiss</code>",id:"verify-dismiss",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,s.jsx)(t.h3,{id:"on-alert",children:(0,s.jsx)(t.code,{children:"onAlert"})}),"\n",(0,s.jsxs)(t.p,{children:["This will return ",(0,s.jsx)(t.code,{children:"IAlertActions"})," which will expose different methods to handle Alerts."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"IAlertActions alertActions = AlertActions.onAlert ();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,s.jsx)(t.h3,{id:"accept-prompt",children:(0,s.jsx)(t.code,{children:"accept (text)"})}),"\n",(0,s.jsx)(t.p,{children:"This method will enter the text in the prompt, accept the Alert and will return the Alert message."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ("some text");\n'})}),"\n",(0,s.jsx)(t.h3,{id:"accept",children:(0,s.jsx)(t.code,{children:"accept"})}),"\n",(0,s.jsx)(t.p,{children:"This method will accept the Alert and return the Alert message."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"dismiss",children:(0,s.jsx)(t.code,{children:"dismiss"})}),"\n",(0,s.jsx)(t.p,{children:"This method will dismiss the Alert and return the Alert message."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().dismiss ();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"verify-accept",children:(0,s.jsx)(t.code,{children:"verifyAccept"})}),"\n",(0,s.jsx)(t.p,{children:"This method is used to verify the alert message after accepting the alert."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ().isEqualTo ("Swag Labs");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"verify-accept-alert",children:(0,s.jsx)(t.code,{children:"verifyAccept (text)"})}),"\n",(0,s.jsx)(t.p,{children:"This method is used to verify the alert message after entering the text in the prompt and accepting it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ("Sample text").isEqualTo ("Swag Labs");\n'})}),"\n",(0,s.jsx)(t.h2,{id:"verify-dismiss",children:(0,s.jsx)(t.code,{children:"verifyDismiss"})}),"\n",(0,s.jsx)(t.p,{children:"This method is used to verify the alert message after dismissing the alert."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyDismiss ().isEqualTo ("Swag Labs");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9040:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>c});var s=i(79);const n={},r=s.createContext(n);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);