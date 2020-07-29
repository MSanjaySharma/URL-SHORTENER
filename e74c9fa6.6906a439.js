(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(72)),i=n(75),l=n(76),c={id:"put-updateLink",title:"Update a Link",hide_title:!0,sidebar_label:"Update a Link"},s={unversionedId:"put-updateLink",id:"put-updateLink",isDocsHomePage:!1,title:"Update a Link",description:"PUT &nbsp;&nbsp;Update a link",source:"@site/docs\\put-updateLink.md",permalink:"/URL-SHORTENER/put-updateLink",sidebar_label:"Update a Link",sidebar:"someSidebar",previous:{title:"Retrieve a Link",permalink:"/URL-SHORTENER/get-retrieveLink"},next:{title:"Delete a Link",permalink:"/URL-SHORTENER/delete-deleteLink"}},u=[{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{style:{color:"#2196f3",display:"inline"}},"PUT \xa0\xa0"),Object(o.b)("h2",{style:{display:"inline"}},"Update a link"),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"http://localhost:3333/urls/:{URL_ID}\n")),Object(o.b)("h4",{id:"body-raw"},"BODY (RAW)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "title": "stoplight.io",\n  "originalUrl": "https://stoplight.io/"\n}\n')),Object(o.b)("h3",{id:"example-request"},"Example Request"),Object(o.b)("div",{style:{background:"#292d3e",borderRadius:"5px"}},Object(o.b)(i.a,{defaultValue:"axios",values:[{label:"NodeJs Axios",value:"axios"},{label:"NodeJs Native",value:"native"},{label:"Javascript Fetch",value:"fetch"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"axios",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var axios = require('axios');\nvar data = '{\n\\n\"title\":\"stoplight.io\",\n\\n\"originalUrl\":\"https://stoplight.io/\"\n\\n}';\n\nvar config = {\n  method: 'put',\n  url: 'http://localhost:3333/urls/5f212b8771698524c062fcfd',\n  headers: { },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n\n"))),Object(o.b)(l.a,{value:"native",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'var http = require("follow-redirects").http;\nvar fs = require("fs");\n\nvar options = {\n  method: "PUT",\n  hostname: "localhost",\n  port: 3333,\n  path: "/urls/5f212b8771698524c062fcfd",\n  headers: {},\n  maxRedirects: 20,\n};\n\nvar req = http.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function (chunk) {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n\n  res.on("error", function (error) {\n    console.error(error);\n  });\n});\n\nvar postData =\n  \'{\\r\\n"title":"stoplight.io",\\r\\n"originalUrl":"https://stoplight.io/"\\r\\n}\';\n\nreq.write(postData);\n\nreq.end();\n'))),Object(o.b)(l.a,{value:"fetch",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'var raw = "{\n\\n\\"title\\":\\"stoplight.io\\",\n\\n\\"originalUrl\\":\\"https://stoplight.io/\\"\n\\n}";\n\nvar requestOptions = {\n  method: \'PUT\',\n  body: raw,\n  redirect: \'follow\'\n};\n\nfetch("http://localhost:3333/urls/5f212b8771698524c062fcfd", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n'))))),Object(o.b)("h3",{id:"example-response"},"Example Response"),Object(o.b)("div",{style:{background:"#292d3e",borderRadius:"5px"}},Object(o.b)(i.a,{defaultValue:"body",values:[{label:"Body",value:"body"},{label:"Headers",value:"headers"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"body",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "5f212b8771698524c062fcfd",\n  "title": "stoplight.io",\n  "originalUrl": "https://stoplight.io/",\n  "createdAt": "2020-07-29T07:55:51.902Z",\n  "clicks": [],\n  "hashedUrl": "Z11CP7K",\n  "__v": 0\n}\n'))),Object(o.b)(l.a,{value:"headers",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'X-Powered-By: Express\nContent-Type: application/json; charset=utf-8\nContent-Length: 176\nETag: W/"b0-gqdbF6gXA1bkrdchr/+vAsd9z4g"\nDate: Wed, 29 Jul 2020 07:58:30 GMT\nConnection: keep-alive\n'))))))}b.isMDXComponent=!0},70:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},74:function(e,t,n){"use strict";var r=n(0),a=n(73);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},75:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(74),i=n(70),l=n(47),c=n.n(l),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,b=e.groupId,d=Object(o.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(r.useState)(l),v=h[0],O=h[1];if(null!=b){var g=f[b];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&O(g)}var j=function(e){O(e),null!=b&&m(b,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},76:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);