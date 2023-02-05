"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7684],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:20},a="Dependency Injection",c={unversionedId:"guides/dependency-injection",id:"guides/dependency-injection",title:"Dependency Injection",description:"KafkaFlow Dependency Injection framework support is extensible.",source:"@site/docs/guides/dependency-injection.md",sourceDirName:"guides",slug:"/guides/dependency-injection",permalink:"/kafkaflow/docs/guides/dependency-injection",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/dependency-injection.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/kafkaflow/docs/guides/authentication"},next:{title:"Reference",permalink:"/kafkaflow/docs/category/reference"}},p={},l=[{value:"Add support for a new Dependency Injection container",id:"add-support-for-a-new-dependency-injection-container",level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependency-injection"},"Dependency Injection"),(0,o.kt)("p",null,"KafkaFlow Dependency Injection framework support is extensible."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection/"},"Microsoft .NET DI")," and ",(0,o.kt)("a",{parentName:"p",href:"http://unitycontainer.org/articles/quickstart.html"},"Unity 5")," are natively supported. You can see ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"here")," how to use them."),(0,o.kt)("h2",{id:"add-support-for-a-new-dependency-injection-container"},"Add support for a new Dependency Injection container"),(0,o.kt)("p",null,"Other DI frameworks can be supported by implementing a set of interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IDependencyConfigurator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IDependencyResolver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IDependencyResolverScope"))),(0,o.kt)("p",null,"You can find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Farfetch/kafkaflow/tree/master/src/KafkaFlow.Unity"},"here"),"."),(0,o.kt)("p",null,"Once the interfaces are implemented, use them the same way you use Unity (",(0,o.kt)("a",{parentName:"p",href:"configuration"},"see here"),")."))}u.isMDXComponent=!0}}]);