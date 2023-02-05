"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6230],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>k});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),f=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=f(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=f(a),k=n,u=p["".concat(s,".").concat(k)]||p[k]||d[k]||l;return a?t.createElement(u,o(o({ref:r},c),{},{components:a})):t.createElement(u,o({ref:r},c))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var f=2;f<l;f++)o[f]=a[f];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2529:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>f});var t=a(7462),n=(a(7294),a(3905));const l={},o="KafkaFlow.Serializer assembly",i={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow.Serializer",id:"reference/KafkaFlow.Serializer/KafkaFlow.Serializer",title:"KafkaFlow.Serializer assembly",description:"KafkaFlow namespace",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow.Serializer.md",sourceDirName:"reference/KafkaFlow.Serializer",slug:"/reference/KafkaFlow.Serializer/",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow.Serializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SingleMessageTypeResolver.OnProduce method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/OnProduce"},next:{title:"KafkaFlow.Serializer.JsonCore",permalink:"/kafkaflow/docs/category/kafkaflowserializerjsoncore"}},s={},f=[{value:"KafkaFlow namespace",id:"kafkaflow-namespace",level:2}],c={toc:f};function d(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kafkaflowserializer-assembly"},"KafkaFlow.Serializer assembly"),(0,n.kt)("h2",{id:"kafkaflow-namespace"},"KafkaFlow namespace"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"public type"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ConsumerMiddlewareConfigurationBuilderExtensions/"},"ConsumerMiddlewareConfigurationBuilderExtensions")),(0,n.kt)("td",{parentName:"tr",align:null},"No needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interface\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IAsyncMessageTypeResolver/"},"IAsyncMessageTypeResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"Used by the serializer middleware to resolve the type when consuming and store it when producing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interface\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"Used by the serializer middleware to resolve the type when consuming and store it when producing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,n.kt)("td",{parentName:"tr",align:null},"No needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/"},"SerializerConsumerMiddleware")),(0,n.kt)("td",{parentName:"tr",align:null},"Middleware to deserialize messages when consuming")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerProducerMiddleware/"},"SerializerProducerMiddleware")),(0,n.kt)("td",{parentName:"tr",align:null},"Middleware to serialize messages when producing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SingleMessageTypeResolver/"},"SingleMessageTypeResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"The message type resolver to be used when all messages are the same type")))))}d.isMDXComponent=!0}}]);