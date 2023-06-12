"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"\ud83d\udc4b Introduction","href":"/boyka-framework/docs/intro","docId":"intro"},{"type":"category","label":"\ud83d\udea6 Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd0 Framework Architecture","href":"/boyka-framework/docs/getting-started/architecture","docId":"getting-started/architecture"},{"type":"link","label":"\ud83d\udea9 Pre-Requisite","href":"/boyka-framework/docs/getting-started/pre-requisite","docId":"getting-started/pre-requisite"},{"type":"link","label":"\ud83d\udc68\u200d\ud83e\uddbc Usage","href":"/boyka-framework/docs/getting-started/usage","docId":"getting-started/usage"}]},{"type":"category","label":"\ud83c\udfd6\ufe0f Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udd29 Configuration","href":"/boyka-framework/docs/guides/configuration","docId":"guides/configuration"},{"type":"category","label":"\ud83e\udea2 API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83e\ude9b Setup API Configuration","href":"/boyka-framework/docs/guides/api/setup-config","docId":"guides/api/setup-config"},{"type":"link","label":"\ud83c\udfd7\ufe0f Compose Request","href":"/boyka-framework/docs/guides/api/compose-request","docId":"guides/api/compose-request"},{"type":"link","label":"\ud83d\udd2b Execute Request","href":"/boyka-framework/docs/guides/api/execute-request","docId":"guides/api/execute-request"},{"type":"link","label":"\u2705 Verify Response","href":"/boyka-framework/docs/guides/api/verify-response","docId":"guides/api/verify-response"}]},{"type":"category","label":"\ud83d\udda5\ufe0f UI","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"\ud83c\udf0d Web","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83e\ude9b Setup Configuration","href":"/boyka-framework/docs/guides/ui/web/setup-config","docId":"guides/ui/web/setup-config"},{"type":"link","label":"\ud83d\udcc4 Create Page Object","href":"/boyka-framework/docs/guides/ui/web/create-page-object","docId":"guides/ui/web/create-page-object"}]},{"type":"category","label":"\ud83d\udcf2 Android","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83e\ude9b Setup Configuration","href":"/boyka-framework/docs/guides/ui/android/setup-config","docId":"guides/ui/android/setup-config"},{"type":"link","label":"\ud83d\udcc4 Create Page Object","href":"/boyka-framework/docs/guides/ui/android/create-page-object","docId":"guides/ui/android/create-page-object"}]},{"type":"category","label":"\ud83d\udcf1 iOS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83e\ude9b Setup Configuration","href":"/boyka-framework/docs/guides/ui/ios/setup-config","docId":"guides/ui/ios/setup-config"},{"type":"link","label":"\ud83d\udcc4 Create Page Object","href":"/boyka-framework/docs/guides/ui/ios/create-page-object","docId":"guides/ui/ios/create-page-object"}]},{"type":"link","label":"\ud83c\udfd7\ufe0f Create Page Action class","href":"/boyka-framework/docs/guides/ui/page-action","docId":"guides/ui/page-action"},{"type":"link","label":"\u2705 Write Test for Web","href":"/boyka-framework/docs/guides/ui/write-test","docId":"guides/ui/write-test"}]}]}]},"docs":{"getting-started/architecture":{"id":"getting-started/architecture","title":"\ud83d\udcd0 Framework Architecture","description":"\u270f\ufe0f Design","sidebar":"docs"},"getting-started/pre-requisite":{"id":"getting-started/pre-requisite","title":"\ud83d\udea9 Pre-Requisite","description":"In order to use this framework, you need to have the following pre-requisites installed on your machine:","sidebar":"docs"},"getting-started/usage":{"id":"getting-started/usage","title":"\ud83d\udc68\u200d\ud83e\uddbc Usage","description":"Add as Maven dependency","sidebar":"docs"},"guides/api/compose-request":{"id":"guides/api/compose-request","title":"\ud83c\udfd7\ufe0f Compose Request","description":"For API automation, we have created ApiRequest class which you can utilize to build API requests.","sidebar":"docs"},"guides/api/execute-request":{"id":"guides/api/execute-request","title":"\ud83d\udd2b Execute Request","description":"Once you have composed your API request, you can execute it using class ApiActions and method withRequest.","sidebar":"docs"},"guides/api/setup-config":{"id":"guides/api/setup-config","title":"\ud83e\ude9b Setup API Configuration","description":"We can set multiple configurations in the configuration file with different key name for different end points.","sidebar":"docs"},"guides/api/verify-response":{"id":"guides/api/verify-response","title":"\u2705 Verify Response","description":"Once the ApiResponse object is returned from the withRequest method, it can be used to verify that the response is valid.","sidebar":"docs"},"guides/configuration":{"id":"guides/configuration","title":"\ud83d\udd29 Configuration","description":"The framework is highly configurable. You can configure repeated setting for your test in the framework configuration file.","sidebar":"docs"},"guides/ui/android/create-page-object":{"id":"guides/ui/android/create-page-object","title":"\ud83d\udcc4 Create Page Object","description":"Example Page Object class","sidebar":"docs"},"guides/ui/android/setup-config":{"id":"guides/ui/android/setup-config","title":"\ud83e\ude9b Setup Configuration","description":"You can set multiple configurations in the configuration file with different key name for different Android devices.","sidebar":"docs"},"guides/ui/ios/create-page-object":{"id":"guides/ui/ios/create-page-object","title":"\ud83d\udcc4 Create Page Object","description":"Example Page Object class","sidebar":"docs"},"guides/ui/ios/setup-config":{"id":"guides/ui/ios/setup-config","title":"\ud83e\ude9b Setup Configuration","description":"You can set multiple configurations in the configuration file with different key name for different iOS devices.","sidebar":"docs"},"guides/ui/page-action":{"id":"guides/ui/page-action","title":"\ud83c\udfd7\ufe0f Create Page Action class","description":"Since we have a common page object for all the three platforms (i.e.: Web. Android and iOS), we will create an Action class for the application where we will expose different methods which will take care of each page specific user flow.","sidebar":"docs"},"guides/ui/web/create-page-object":{"id":"guides/ui/web/create-page-object","title":"\ud83d\udcc4 Create Page Object","description":"In Boyka, we have decoupled the page object from the WebDriver class. This is done by creating a Page Object class and defining locators using Locator builder class.","sidebar":"docs"},"guides/ui/web/setup-config":{"id":"guides/ui/web/setup-config","title":"\ud83e\ude9b Setup Configuration","description":"Before starting to automate Web applications, we need to first setup the configuration file for our Application under test.","sidebar":"docs"},"guides/ui/write-test":{"id":"guides/ui/write-test","title":"\u2705 Write Test for Web","description":"Once the page object class is created with locators for all the platforms and the application action class is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class.","sidebar":"docs"},"intro":{"id":"intro","title":"\ud83d\udc4b Introduction","description":"\ud83d\udc4b Welcome to Boyka Framework!","sidebar":"docs"}}}')}}]);