"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",slug:"what-is-esbuild",authors:"muhammad_khabbab",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/social.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/what-is-esbuild",source:"@site/blog/2022-11-03-esbuild.md",title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",date:"2022-11-03T00:00:00.000Z",formattedDate:"November 3, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.02,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",slug:"what-is-esbuild",authors:"muhammad_khabbab",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows"},nextItem:{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method"},relatedPosts:[{title:"Kubectl config set context Tutorial and Best Practices",description:"We'll discuss the kubectl config set-context command and how it can be used to manage contexts in Kubernetes. We'll also cover some best practices for managing contexts.",permalink:"/blog/kubectl-config-set-context",formattedDate:"October 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.835,date:"2023-10-27T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.805,date:"2022-10-13T00:00:00.000Z"},{title:"Unexpected token in JSON at position 0 error",description:"We will look into the various possible causes of this error message and suggest methods to rectify it.",permalink:"/blog/unexpected-token-in-json-at-position-0-error",formattedDate:"December 9, 2022",authors:[{name:"Chukwuka Reuben",title:"Frontend Developer",imageURL:"/img/generic-profile.png",key:"chukwuka_reuben"}],readingTime:6.81,date:"2022-12-09T00:00:00.000Z"}],authorPosts:[{title:"Kubectl Restart Pod - Restarting Pods in Kubernetes",description:"We'll discuss the importance of restarting pods in Kubernetes, the different methods to do so, and the best practices to follow.",permalink:"/blog/kubectl-restart-pod",formattedDate:"October 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.14,date:"2023-10-22T00:00:00.000Z"},{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.805,date:"2022-10-13T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Why another JS bundler",id:"why-another-js-bundler",level:2},{value:"Features of esbuild",id:"features-of-esbuild",level:2},{value:"Bundling and supported content types",id:"bundling-and-supported-content-types",level:3},{value:"The build API",id:"the-build-api",level:3},{value:"Incremental compilation",id:"incremental-compilation",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Server mode",id:"server-mode",level:3},{value:"Watch mode",id:"watch-mode",level:3},{value:"Comparison with other bundlers",id:"comparison-with-other-bundlers",level:2},{value:"Why it is so fast",id:"why-it-is-so-fast",level:2},{value:"Example esbuild Usage",id:"example-esbuild-usage",level:2},{value:"Is it Production ready?",id:"is-it-production-ready",level:2},{value:"esbuild TypeScript support",id:"esbuild-typescript-support",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Bundlers are an essential component of the JavaScript ecosystem. As the name implies, bundlers generate one or more module bundles. Module bundlers process the JavaScript applications and build dependency graphs to map each module needed by your project. Generally speaking, bundlers perform the following tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bundle CSS, HTML, images, and other assets"),(0,n.kt)("li",{parentName:"ul"},"Bundle JavaScript code in required module formats"),(0,n.kt)("li",{parentName:"ul"},"Build optimizations, including code-splitting, scope-hoisting, tree-shaking, etc. "),(0,n.kt)("li",{parentName:"ul"},"Hot module replacement during the development ")),(0,n.kt)("p",null,"Many bundlers are used in developing modern JavaScript applications, including Webpack, Rollup, and parcel, but we will discuss a relatively new entrant, esbuild, which is a very fast and efficient bundler. "),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#why-another-js-bundler"},"Why another JS bundler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#features-of-esbuild"},"Features of esbuild"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#bundling-and-supported-content-types"},"Bundling and supported content types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#the-build-api"},"The build API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#incremental-compilation"},"Incremental compilation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#plugins"},"Plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#server-mode"},"Server mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#watch-mode"},"Watch mode")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#comparison-with-other-bundlers"},"Comparison with other bundlers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#why-it-is-so-fast"},"Why it is so fast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#example-esbuild-usage"},"Example esbuild Usage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#is-it-production-ready"},"Is it Production ready?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#esbuild-typescript-support"},"esbuild TypeScript support"))),(0,n.kt)("h2",{id:"why-another-js-bundler"},"Why another JS bundler"),(0,n.kt)("p",null,"Technology is progressing very fast. Every day you will see new frameworks, build tools, and libraries to speed up and improve your software applications. ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," is another example of constant innovation and improvement. It is an open-source next-generation JavaScript bundler that is very fast and more efficient than other bundlers in the industry. It is written in Go language with speed in mind; it is powered by parallel parsing, printing, and source map generation. It packages and bundles JS code for distribution on the web. Some of its features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is very fast, even without any cache. It is much faster than other bundlers. "),(0,n.kt)("li",{parentName:"ul"},"A robust API for JavaScript and Go"),(0,n.kt)("li",{parentName:"ul"},"ES6 and common JS modules"),(0,n.kt)("li",{parentName:"ul"},"Supports TypeScript and JSX syntax"),(0,n.kt)("li",{parentName:"ul"},"Source maps"),(0,n.kt)("li",{parentName:"ul"},"Minification ")),(0,n.kt)("h2",{id:"features-of-esbuild"},"Features of esbuild"),(0,n.kt)("p",null,"Let's go through some of its features in detail. "),(0,n.kt)("h3",{id:"bundling-and-supported-content-types"},"Bundling and supported content types"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"esbuild")," supports both bundling and code splitting. Bundling is when you want to deploy a single ",(0,n.kt)("inlineCode",{parentName:"p"},"app.js")," target. Code splitting is when you want to split ",(0,n.kt)("inlineCode",{parentName:"p"},"app.js")," into many targets, like ",(0,n.kt)("inlineCode",{parentName:"p"},"header.js")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebar.js")," etc.\n",(0,n.kt)("strong",{parentName:"p"},"esbuild"),' has built-in support for various content types using its component called "loaders". The loader tells esbuild how to parse a particular content type. The three common loaders enabled by default are: '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Typescript loader"),(0,n.kt)("li",{parentName:"ul"},"JavaScript loader"),(0,n.kt)("li",{parentName:"ul"},"CSS loader")),(0,n.kt)("p",null,"If we look at the content types supported by esbuild, then these are as below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JavaScript Loader: As mentioned above, the JavaScript loader is enabled by default, and it supports ",(0,n.kt)("inlineCode",{parentName:"li"},".js"),". ",(0,n.kt)("inlineCode",{parentName:"li"},".cjs"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},".mjs")," files"),(0,n.kt)("li",{parentName:"ul"},"Typescript Loader: Enabled by default for ",(0,n.kt)("inlineCode",{parentName:"li"},".ts"),". ",(0,n.kt)("inlineCode",{parentName:"li"},".tsx"),". ",(0,n.kt)("inlineCode",{parentName:"li"},"mts"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},".cts")," files. However, it does not support type-checking. "),(0,n.kt)("li",{parentName:"ul"},"JSX Loader: It is enabled by default for ",(0,n.kt)("inlineCode",{parentName:"li"},".jsx")," and ",(0,n.kt)("inlineCode",{parentName:"li"},".tsx")," files. Note that ",(0,n.kt)("inlineCode",{parentName:"li"},"JSX")," syntax is not enabled in ",(0,n.kt)("inlineCode",{parentName:"li"},".js")," files by default. You can, however, enable this by updating the configuration. "),(0,n.kt)("li",{parentName:"ul"},"JSON Loader: It is enabled by default for ",(0,n.kt)("inlineCode",{parentName:"li"},".json")," files. It parses JSON files to JavaScript objects and exports these objects. "),(0,n.kt)("li",{parentName:"ul"},"CSS Loader: It can bundle CSS files directly without importing your CSS from the JavaScript code. This loader is also enabled by default. "),(0,n.kt)("li",{parentName:"ul"},"Text Loader: It is also enabled by default for ",(0,n.kt)("inlineCode",{parentName:"li"},".txt")," files. It loads the files as a string during build time and exports the string default export. "),(0,n.kt)("li",{parentName:"ul"},"Binary Loader: It loads the file in the form of a binary buffer at build time and includes it in the bundle as Base64 encoding. It is not enabled by default. "),(0,n.kt)("li",{parentName:"ul"},"Data URL: It loads the file as a binary buffer at build time and embeds it into the bundle as a Base64 encoded data URL. This loader is useful for bundling images along with the CSS loader to load images using the method ",(0,n.kt)("inlineCode",{parentName:"li"},"url()"),". It is not enabled by default. ")),(0,n.kt)("h3",{id:"the-build-api"},"The build API"),(0,n.kt)("p",null,"esbuild has a powerful JavaScript build API through which you can customize the behavior of esbuild. It is similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the Webpack.",(0,n.kt)("br",{parentName:"p"}),"\n","If you look at the code sample below, you can see that the build function executes the esbuild in a child process and returns a promise that is resolved when the build is complete.",(0,n.kt)("br",{parentName:"p"}),"\n","Note that esbuild also provides a synchronous build API ",(0,n.kt)("inlineCode",{parentName:"p"},"buildSync")," that runs synchronously. You will need to use the asynchronous build API because esbuild plugins are compatible with only asynchronous API. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"require('esbuild').build({\n  entryPoints: ['app.jsx'],\n  bundle: true,\n  outfile: `bundle.js',\n}).catch(() => process.exit(1))\n")),(0,n.kt)("h3",{id:"incremental-compilation"},"Incremental compilation"),(0,n.kt)("p",null,"esbuild supports incremental compilation. If you are compiling the same file from different sources again and again, esbuild will work only on changed sources instead of code splitting or bundling from scratch each time. "),(0,n.kt)("h3",{id:"plugins"},"Plugins"),(0,n.kt)("p",null,"The plugins API is a very useful feature of ",(0,n.kt)("strong",{parentName:"p"},"esbuild"),". It allows you to preprocess files when they are linked. It can be very beneficial if you are converting Sass to CSS or markdown to JSX etc. You can still configure the implementation details through the plugins API. "),(0,n.kt)("h3",{id:"server-mode"},"Server mode"),(0,n.kt)("p",null,"The server mode enables you to use ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," as a web server, and you can implement your own server handler for incoming requests. This feature is very powerful because you can use the server handler to perform different functions on incoming requests, like observe events and log them. ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," utilizes code-split targets from memory instead of the disk to serve your bundled code, making it a highly performant web server as it reduces the total work spent on each request."),(0,n.kt)("h3",{id:"watch-mode"},"Watch mode"),(0,n.kt)("p",null,"Watch mode means the ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," can detect the changes in the source code as they occur. Instead of worrying about file-watchers or using libraries like ",(0,n.kt)("a",{parentName:"p",href:"hhttps://npmjs.com/package/nodemon"},"Nodemon"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://npmjs.com/package/chokidar"},"chokidar"),", etc. you can offload this responsibility to esbuild. In fact you can also implement your own watch handlers so you can log events, observe them and push ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"},"server-sent events"),". "),(0,n.kt)("h2",{id:"comparison-with-other-bundlers"},"Comparison with other bundlers"),(0,n.kt)("p",null,"If you look at the below comparison between different bundlers, you can see that esbuild has a significant performance advantage over its competitors. Image a large team with many projects and dependencies where reducing build times is crucial for product development. The magic lies in the ability of esbuild to parallelize printing, parsing, and source map generation. "),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/esbuild-chart.png",alt:"esbuild"}),(0,n.kt)("em",null," Source - https://esbuild.github.io/")),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"why-it-is-so-fast"},"Why it is so fast"),(0,n.kt)("p",null,"Here is how esbuild is able to achieve this performance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is developed using the Go language, which compiles to native code. Other bundlers are mostly written in JavaScript, and NodeJS has to spend extra time to parse the JavaScript in case of other bundlers. "),(0,n.kt)("li",{parentName:"ul"},"It is able to perform printing, parsing, and source map generation in parallel. The algorithms in esbuild are developed to fully saturate all CPU cores when possible. Note that parallelism is at the heart of Go language, and Go can make intelligent use of memory utilization as compared to JavaScript. "),(0,n.kt)("li",{parentName:"ul"},"Everything is done in very few passes instead of expensive data transformation. "),(0,n.kt)("li",{parentName:"ul"},"It has not too many features like Webpack, and its main focus is speed. ")),(0,n.kt)("h2",{id:"example-esbuild-usage"},"Example esbuild Usage"),(0,n.kt)("p",null,"First, you need to create a NodeJS project by running this command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm init \u2013y\n")),(0,n.kt)("p",null,"Go to your project directory and install the esbuild package by running the below command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install esbuild\n")),(0,n.kt)("p",null,"To verify if esbuild is correctly installed, run the below command, and it will return the esbuild version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/node_modules/.bin/esbuild \u2014 version\n")),(0,n.kt)("p",null,"This example uses using React application, so you need to run the following command to install react packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm install react react-dom\n")),(0,n.kt)("p",null,"Create an ",(0,n.kt)("inlineCode",{parentName:"p"},"app.jsx")," file having the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\nimport * as Server from 'react-dom/server'\n\nlet Greet = () => <h1>Hello, esbuild Users</h1>\n\nconsole.log(Server.renderToString(<Greet />))\n")),(0,n.kt)("p",null,"Now let's ask esbuild to bundle this application by running the below command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./node_modules/.bin/esbuild app.jsx \u2014 bundle \u2014 outfile=bundle.js\n")),(0,n.kt)("p",null,"What esbuild does here is that it bundles your application into ",(0,n.kt)("inlineCode",{parentName:"p"},"bundle.js"),", and the whole process is extremely fast."),(0,n.kt)("h2",{id:"is-it-production-ready"},"Is it Production ready?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"esbuild")," is a great tool with a lot of potentials, however, it is still a small project maintained by a single person. There are not a lot of open-source contributions to this project, and its author is the only person maintaining it. While ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," shows great performance compared to its counterparts, being a new entrant, you will not see many projects in production with ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," yet. It is better to test it on a side project and push it to production after it goes well for your need. "),(0,n.kt)("h2",{id:"esbuild-typescript-support"},"esbuild TypeScript support"),(0,n.kt)("p",null,"For TypeScript-based projects in production, you can take advantage of using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/egoist/tsup"},"tsup"),". "),(0,n.kt)("p",null,"Using tsup you can build your TypeScript applications with minimal configuration.",(0,n.kt)("br",{parentName:"p"}),"\n","It uses ",(0,n.kt)("strong",{parentName:"p"},"esbuild")," behind the scene so you get the power of esbuild along with the convenience of tsup. We, at refine, have seen remarkable performance using tsup in our project dev/build processes. "),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The world of JavaScript has a lot of great frameworks and tools. You will see many bundlers in the market, but esbuild is gaining a lot of popularity due to its amazing speed. In this article, we compared some top bundlers being used. We also discussed some of the core features of esbuild and how it delivers blazing-fast builds. "),(0,n.kt)("p",null,"We also went through some basic commands for installing and building projects with esbuild. esbuild has a lot of future, and although it is a new kid on the block, it holds tremendous potential for organizations that want to build applications quicker and faster."))}m.isMDXComponent=!0}}]);