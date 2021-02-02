_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"69LN":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),r=a("dV/x"),l=a("mXGw"),d=a.n(l),o=a("/FXl"),i=a("pu0P"),c=a.n(i),u=(d.a.createElement,{title:"Merging Quickly",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/welcome/quick-merge.mdx",__scans:{}}),s={frontMatter:u},m=c.a;function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"One caveat of ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," is that you need to be mindful of merging multiple PRs at once.\nYou ",Object(o.mdx)("strong",{parentName:"p"},"must not")," merge a PR while another is publishing (ex: during ",Object(o.mdx)("inlineCode",{parentName:"p"},"lerna publish"),").\nWhile this window is small, it exists and you should know about it."),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," works by looking at the ",Object(o.mdx)("inlineCode",{parentName:"p"},"git")," tree to calculate the version bump then makes commits for the ",Object(o.mdx)("inlineCode",{parentName:"p"},"CHANGELOG.md")," and the new version.\nIf you merge a PR while another is publishing:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"they might try to publish the same version number"),Object(o.mdx)("li",{parentName:"ul"},"one will try to push over the other's changes and fail")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"If you ensure that the last build on ",Object(o.mdx)("inlineCode",{parentName:"p"},"baseBrach")," has finished you shouldn't run into any problems!")),Object(o.mdx)("h3",{id:"beware-long-publishes"},Object(o.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#beware-long-publishes"}),"Beware Long Publishes")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," will do the following before trying to ",Object(o.mdx)("inlineCode",{parentName:"p"},"publish")," and push its commits:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Check for commits on the remote"),Object(o.mdx)("li",{parentName:"ul"},"Run the platform specific ",Object(o.mdx)("inlineCode",{parentName:"li"},"publish")," step")),Object(o.mdx)("p",null,"If your ",Object(o.mdx)("inlineCode",{parentName:"p"},"publish")," step runs a lengthy build, then the window for conflicts is extended.\nThe recommended approach is to build your code before running ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," so the window for errors stays small.\nThis may make sense on some platforms and not others."),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Example: When using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"npm")," plugin don't use the script ",Object(o.mdx)("inlineCode",{parentName:"p"},"prepublishOnly")," to build your code")),Object(o.mdx)("h2",{id:"with-skip-release"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#with-skip-release"}),"With ",Object(o.mdx)("inlineCode",{parentName:"a"},"skip-release"))),Object(o.mdx)("p",null,"The one exception to this rule with when merging a bunch of PRs with ",Object(o.mdx)("inlineCode",{parentName:"p"},"skip-release")," labels."),Object(o.mdx)("p",null,"You still can't merge a PR that triggers a release and then merge a PR with ",Object(o.mdx)("inlineCode",{parentName:"p"},"skip-release"),".\nThis will result in problem 3 from above."),Object(o.mdx)("pre",{className:"language-txt"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),'1. Merge PR #4 "patch"\n2. Merge PR #5 "skip-release"\n\nResult: #4 tries to push commits over #5 and fails\n')),Object(o.mdx)("p",null,"But you can merge a bunch of PRs with ",Object(o.mdx)("inlineCode",{parentName:"p"},"skip-release")," then merge a PR that triggers a release."),Object(o.mdx)("pre",{className:"language-txt"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),'1. Merge PR #4 "skip-release"\n2. Merge PR #5 "skip-release"\n3. Merge PR #7 "patch"\n\nResult: 1 "patch" released w/all PRs\n')),Object(o.mdx)("p",null,"Because ",Object(o.mdx)("inlineCode",{parentName:"p"},"skip-release")," is present no commits are made and the release is fine!"))}f.isMDXComponent=!0},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),l=n(a("mXGw")),d=n(a("pWCa")),o=a("I08b"),i=a("GDok"),c=a("nZpd"),u=a("AFBu"),s=a("0oBi"),m=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var m=(0,s.useDarkMode)();return l.default.createElement(c.MobileMenuContext.Provider,{value:a.menuState||n},l.default.createElement(d.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(m?"favicon-dark.png":"favicon.png")})),l.default.createElement(o.SkipNavLink,null),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},l.default.createElement(i.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),t))};t.default=m},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e;if(r.default.basename(e).includes("#"))return e.replace("#",".html#");return"".concat(e,".html")};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),l=n(a("RiSW")),d=n(a("nxTg")),o=n(a("mXGw")),i=n(a("5dyF")),c=n(a("pWCa")),u=n(a("O2/E")),s=n(a("PDtE")),m=a("/FXl"),f=a("dAGg"),p=a("nZpd"),h=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=o.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=b;var v=function(e){var t=e.href,a=e.children,n=o.default.useContext(b),r=(0,m.useMDXComponents)().SidebarLink,l=u.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=l).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),o.default.createElement(i.default,{passHref:!0,href:(0,h.postFixHTML)(d)},o.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,h.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,i=o.default.useContext(p.MobileMenuContext),x=(0,d.default)(i,1)[0],O="/".concat(r),w=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(O),j=function(t){var a=(0,f.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?u.default.relative("/auto",a.pathname):u.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,h.formatPath)(r.__resourcePath)}}(n),E=(0,m.useMDXComponents)(),k=E.SidebarItemWrapper,N=(E.SidebarLink,E.SidebarTitle),y=E.SidebarDivider,P=E.SidebarList,_=E.Sidebar,M=(0,l.default)(E,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return o.default.createElement(b.Provider,{value:g(g({},j),{},{sidebarFileLocation:w?O:""})},o.default.createElement(m.MDXProvider,{components:g(g({},M),{},{li:k,ul:P,a:v,p:N,hr:y})},o.default.createElement(c.default,null,o.default.createElement("title",null,j.title.replace(/\\`/g,"`"))),o.default.createElement(_,{className:(0,s.default)(!x&&"hidden","lg:block")},w?o.default.createElement(w,null):o.default.createElement(P,null,n.map((function(e){return o.default.createElement(k,{key:e.__resourcePath},o.default.createElement(v,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),l=n(a("8VmE")),d=n(a("RiSW")),o=n(a("mXGw")),i=n(a("5dyF")),c=a("V5Fo"),u=a("/FXl"),s=n(a("PDtE")),m=a("nZpd"),f=a("AFBu"),p=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return o.default.createElement("svg",(0,l.default)({className:(0,s.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},h=function(){var e=(0,u.useMDXComponents)().SearchInput;return o.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},o.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=o.default.useContext(m.MobileMenuContext),l=(0,r.default)(n,2),d=l[0],s=l[1],x=(0,u.useMDXComponents)(),g=x.Logo,b=x.NavBarWrapper,v=x.NavBar,O=x.NavBarItem,w=x.MobileMenuButton;return o.default.createElement(o.default.Fragment,null,o.default.createElement(b,null,o.default.createElement(v,null,a?o.default.createElement(i.default,{passHref:!0,href:(0,f.postFixHTML)("/index")},o.default.createElement(g,null)):o.default.createElement(g,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},o.default.createElement(h,null),o.default.createElement(w,{open:d,setOpen:s,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return o.default.createElement(i.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},o.default.createElement(O,null,(0,c.titleCase)(e)))})),o.default.createElement(O,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(p,null)))))),d&&o.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return o.default.createElement(i.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},o.default.createElement(O,null,(0,c.titleCase)(e)))})),o.default.createElement(O,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("O2/E")),o=a("/FXl"),i=n(a("PDtE")),c=a("I08b"),u=a("C3pV"),s=n(a("6f/q")),m=n(a("x3GE")),f=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=l.default.useState(!1),p=(0,r.default)(n,2),h=p[0],x=p[1],g=(0,o.useMDXComponents)(),b=a.__resourcePath.split("/")[0],v=(0,m.default)(),O=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(b)})).map((function(e){return v.find((function(t){return t.__resourcePath===e}))}));return l.default.createElement(s.default,{menuState:[h,x]},l.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},l.default.createElement(u.Sidebar,{links:O,folder:b}),l.default.createElement(c.SkipNavContent,null),l.default.createElement("main",{className:(0,i.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",h&&"hidden")},a.title&&l.default.createElement(g.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");f.test(n);){var d=n.match(f),o=(0,r.default)(d,4),i=o[1],c=o[2],u=o[3];a.push(i),a.push(l.default.createElement(e.inlineCode,null,c)),n=u}return a.push(n),l.default.createElement("div",null,a)}}(g,a.title)),t)))};t.default=p},qXQD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/welcome/quick-merge",function(){return a("69LN")}])},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[];try{var r=a("jmz1");n=r.keys().map(r)}catch(d){}var l=function(){try{return n}catch(d){return[]}};t.default=l}},[["qXQD",0,1,2,3,4]]]);