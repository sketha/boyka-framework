"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7601],{7519:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=o(5250),l=o(9040);const i={title:"IDropDownActionsListener",sidebar_position:2},d=void 0,c={id:"actions/interfaces/listeners/elements/drop-down-actions-listener",title:"IDropDownActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/drop-down-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/drop-down-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/drop-down-actions-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/drop-down-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1699876543,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:2,frontMatter:{title:"IDropDownActionsListener",sidebar_position:2},sidebar:"api",previous:{title:"IClickableActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/clickable-actions-listener"},next:{title:"IElementActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/element-actions-listener"}},r={},s=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onDeselectAll (locator)</code>",id:"on-deselect-all",level:2},{value:"<code>onDeselectByIndex (locator, index)</code>",id:"on-deselect-by-index",level:2},{value:"<code>onDeselectByText (locator, text)</code>",id:"on-deselect-by-text",level:2},{value:"<code>onDeselectByValue (locator, value)</code>",id:"on-deselect-by-value",level:2},{value:"<code>onSelectByIndex (locator, index)</code>",id:"on-select-by-index",level:2},{value:"<code>onSelectByText (locator, text)</code>",id:"on-select-by-text",level:2},{value:"<code>onSelectByValue (locator, value)</code>",id:"on-select-by-value",level:2},{value:"<code>onSelectedItem (locator)</code>",id:"on-selected-item",level:2},{value:"<code>onSelectedItems (locator)</code>",id:"on-selected-items",level:2},{value:"<code>onVerifySelectedItem (locator)</code>",id:"on-verify-selected-item",level:2},{value:"<code>onVerifySelectedItems (locator)</code>",id:"on-verify-selected-items",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling the Drop down related actions, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,n.jsx)(t.h2,{id:"on-deselect-all",children:(0,n.jsx)(t.code,{children:"onDeselectAll (locator)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after deselecting all the items from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-deselect-by-index",children:(0,n.jsx)(t.code,{children:"onDeselectByIndex (locator, index)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after deselecting an item at the provided index from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-deselect-by-text",children:(0,n.jsx)(t.code,{children:"onDeselectByText (locator, text)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after deselecting an item by its provided text from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-deselect-by-value",children:(0,n.jsx)(t.code,{children:"onDeselectByValue (locator, value)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after deselecting an item by its provided value from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-select-by-index",children:(0,n.jsx)(t.code,{children:"onSelectByIndex (locator, index)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after selecting an item at the provided index from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-select-by-text",children:(0,n.jsx)(t.code,{children:"onSelectByText (locator, text)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after selecting an item by its provided text from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-select-by-value",children:(0,n.jsx)(t.code,{children:"onSelectByValue (locator, value)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after selecting an item by its provided value from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-selected-item",children:(0,n.jsx)(t.code,{children:"onSelectedItem (locator)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after getting the selected item from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-selected-items",children:(0,n.jsx)(t.code,{children:"onSelectedItems (locator)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after getting all the selected items from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-verify-selected-item",children:(0,n.jsx)(t.code,{children:"onVerifySelectedItem (locator)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after verifying the selected item from the dropdown element located by using the provided locator."}),"\n",(0,n.jsx)(t.h2,{id:"on-verify-selected-items",children:(0,n.jsx)(t.code,{children:"onVerifySelectedItems (locator)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will get executed after verifying all the selected items from the dropdown element located by using the provided locator."})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},9040:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>d});var n=o(79);const l={},i=n.createContext(l);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);