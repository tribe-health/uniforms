/*! For license information please see 95d13d39.adf2c1d9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(211),r=n(0),o=n.n(r);function c(e){var t=e.language,n=e.replace,r=e.section,c=e.source;if("object"==typeof c&&"default"in c&&(c=c.default),r){var i=new RegExp("// <"+r+">\\s([\\s\\S]*?)\\s// </"+r+">\\s","g");c=c.split(i).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(c=c.replace(/\/\/ <.*?\n/g,""),n)for(var s=0,l=Object.entries(n);s<l.length;s++){var u=l[s],p=u[0],m=u[1];c=c.replace(new RegExp(p,"gs"),m)}return(c=c.trim()).includes("\n")||(c+="\n"),o.a.createElement(a.a.pre,null,o.a.createElement(a.a.code,{children:c,className:"language-"+t,mdxType:"code",originalType:"code",parentName:"pre"}))}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=Object.create(null),o=Object.create(null);function c(e){var t=Object(a.useState)(r[e]||0),n=t[0],c=t[1],i=Object(a.useCallback)((function(t){return function(e,t){r[e]=t,o[e].forEach((function(e){e(t)}))}(e,t)}),[e]);return Object(a.useEffect)((function(){return function(e,t){return void 0===o[e]&&(r[e]=0,o[e]=[]),o[e].push(t),function(){o[e].splice(o[e].indexOf(t),1)}}(e,c)}),[e]),{activeTab:n,onTab:i}}},211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(207),c=n(3),i=n(126),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(24).a,theme:s};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=p({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?p({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),u(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,i=[],s=[i];c>-1;){for(;(o=a[c]++)<r[c];){var l=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],l=p):(u=f(u,p.type),p.alias&&(u=f(u,p.alias)),l=p.content),"string"==typeof l){var y=l.split(m),h=y.length;i.push({types:u,content:y[0]});for(var g=1;g<h;g++)d(i),s.push(i=[]),i.push({types:u,content:y[g]})}else c++,t.push(u),n.push(l),a.push(0),r.push(l.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return d(i),s}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var b=n(212),v=n.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(220),O=n(133),T=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||k,a=e.darkTheme||n;return t?a:n},x=n(186),E=n(63),C=n.n(E),N=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/(?:title=")(.*)(?:")/;function L(e){var t=e.children,n=e.className,o=e.metastring,s=Object(O.useThemeConfig)().prism,u=Object(a.useState)(!1),p=u[0],m=u[1],d=Object(a.useState)(!1),f=d[0],y=d[1];Object(a.useEffect)((function(){y(!0)}),[]);var h=Object(a.useRef)(null),b=[],k="",j=T(),E=Array.isArray(t)?t.join(""):t;if(o&&N.test(o)){var L=o.match(N)[1];b=v()(L).filter((function(e){return e>0}))}o&&S.test(o)&&(k=o.match(S)[1]);var B=n&&n.replace(/language-/,"");!B&&s.defaultLanguage&&(B=s.defaultLanguage);var D=E.replace(/\n$/,"");if(0===b.length&&void 0!==B){for(var P,A="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(B),R=E.replace(/\n$/,"").split("\n"),F=0;F<R.length;){var z=F+1,$=R[F].match(I);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=z+",";break;case"highlight-start":P=z;break;case"highlight-end":A+=P+"-"+(z-1)+","}R.splice(F,1)}else F+=1}b=v()(A),D=R.join("\n")}var J=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(D),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.a.createElement(g,Object(c.a)({},l,{key:String(f),theme:j,code:D,language:B}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,s=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:C.a.codeBlockContainer},k&&r.a.createElement("div",{style:a,className:C.a.codeBlockTitle},k),r.a.createElement("div",{className:Object(i.a)(C.a.codeBlockContent,B)},r.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,C.a.codeBlock,"thin-scrollbar",(t={},t[C.a.codeBlockWithTitle]=k,t))},r.a.createElement("div",{className:C.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(c.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(c.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:h,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(C.a.copyButton),onClick:J},p?r.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var B=n(9),D=(n(64),n(65)),P=n.n(D),A=function(e){return function(t){var n,a=t.id,o=Object(B.a)(t,["id"]),c=Object(O.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",(n={},n[P.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(x.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},I={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(L,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(o.a,e)},pre:function(e){var t=e.children;return r.a.createElement(L,Object(a.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")};t.a=I},212:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},220:function(e,t,n){"use strict";var a=n(0),r=n(378);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},373:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(115),r=n.n(a),o=n(0),c=n.n(o),i=n(62),s=n.n(i),l=n(210);function u(e){var t=e.activeTab,n=e.items,a=e.onTab;return c.a.createElement("div",{className:s.a.tabs},n.map((function(e,n){var r=e.name;return c.a.createElement(p,{active:t===n,key:n,onClick:function(){return a(n)}},r)})))}function p(e){var t=e.active,n=e.children,a=e.onClick;return c.a.createElement("span",{className:r()(s.a.item,t&&s.a.active),onClick:a,onKeyDown:function(e){return"Enter"===e.key&&a()},role:"button",tabIndex:0},n)}function m(e){var t=e.children,n=e.group,a=e.tabs,r=Object(l.a)(n),o=r.activeTab,i=r.onTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{activeTab:o,items:a,onTab:i}),t(a[o]))}},378:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(9),o=n(0),c=n.n(o),i=n(187),s=n(208),l=n(373),u={id:"installation",title:"Installation"},p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Core package first.",source:"@site/../docs/installation.mdx",slug:"/installation",permalink:"/docs/installation",version:"current",sidebar:"docs",previous:{title:"Comparison matrix",permalink:"/docs/compare-matrix"},next:{title:"FAQ",permalink:"/docs/faq"}},m=[],d={toc:m};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Core package first."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install uniforms\n")),Object(i.b)("p",null,"Now the schema package."),Object(i.b)(l.a,{group:"bridge",tabs:[{name:"GraphQL"},{name:"JSON-Schema"},{name:"Simple-Schema"},{name:"Simple-Schema-2"}],mdxType:"Tabs"},(function(e){var t=e.name;return Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{language:"shell",source:"npm install uniforms-bridge-"+t.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"Finally, pick your theme."),Object(i.b)(l.a,{group:"theme",tabs:[{name:"Semantic"},{name:"Material"},{name:"Bootstrap3"},{name:"Bootstrap4"},{name:"Bootstrap5"},{name:"AntD"},{name:"Unstyled"}],mdxType:"Tabs"},(function(e){var n=e.name;return Object(i.b)(c.a.Fragment,null,Object(i.b)(s.a,{language:"shell",source:"npm install uniforms-"+n.toLowerCase(),mdxType:"CodeSection"}),Object(i.b)("p",null,"TL;DR; Just let me copy it!"),Object(i.b)(s.a,{language:"shell",source:"npm install uniforms uniforms-bridge-"+t.toLowerCase()+" uniforms-"+n.toLowerCase(),mdxType:"CodeSection"}))})))})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you are going to use a themed package - remember to include correct styles!"))}f.isMDXComponent=!0}}]);