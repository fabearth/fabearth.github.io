(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[691],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),l=new RegExp(o.source+n.source,"gu"),s=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,a,n)=>{let o=!1,i=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];o&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),o=!1,l=i,i=!0,s++):i&&l&&r.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=i,i=!1,o=!0):(o=a(c)===c&&n(c)!==c,l=i,i=n(c)===c&&a(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,r)=>t(r))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return A},L:function(){return p},M:function(){return E},P:function(){return x},S:function(){return U},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return s}});var a=r(7294),n=(r(3204),r(5697)),o=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(r=o[a])>=0||(n[r]=e[r]);return n}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,o,l,s){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const f=["children"],g=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,r=l(e,f);return a.createElement(a.Fragment,null,a.createElement(g,i({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:n,alt:o="",shouldLoad:s}=e,c=l(e,m);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,alt:o}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,o=l(e,h);const s=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,i({},o,t,{sizes:s,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return a.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:s})})),c):c};var y;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,r=l(e,w);return t?a.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(y=v.propTypes)?void 0:y.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,i({},e)),a.createElement("noscript",null,a.createElement(v,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],I=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:o().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],z=new Set;let T,j;const O=function(e){let{as:t="div",image:n,style:o,backgroundColor:u,className:d,class:f,onStartLoad:g,onLoad:p,onError:m}=e,h=l(e,L);const{width:b,height:v,layout:y}=n,w=c(b,v,y),{style:x,className:E}=w,k=l(w,N),C=(0,a.useRef)(),I=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);f&&(d=f);const S=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(y,b,v);return(0,a.useEffect)((()=>{T||(T=Promise.all([r.e(774),r.e(731)]).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(I);if(j&&z.has(I))return;let t,a;return T.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=r(i({isLoading:!0,isLoaded:z.has(I),image:n},h)),z.has(I)||(t=requestAnimationFrame((()=>{C.current&&(a=l(C.current,I,z,o,g,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{z.has(I)&&j&&(C.current.innerHTML=j(i({isLoading:z.has(I),isLoaded:z.has(I),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},k,{style:i({},x,o,{backgroundColor:u}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},A=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));A.propTypes=_,A.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:r,__imageData:n,__error:o}=t,s=l(t,R);return o&&console.warn(o),n?a.createElement(e,i({image:n},s)):(console.warn("Image not loaded",r),null)}}const Z=q((function(e){let{as:t="div",className:r,class:n,style:o,image:s,loading:f="lazy",imgClassName:g,imgStyle:m,backgroundColor:h,objectFit:b,objectPosition:v}=e,y=l(e,k);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),m=i({objectFit:b,objectPosition:v,backgroundColor:h},m);const{width:w,height:S,layout:_,images:L,placeholder:N,backgroundColor:z}=s,T=c(w,S,_),{style:j,className:O}=T,A=l(T,C),R={fallback:void 0,sources:[]};return L.fallback&&(R.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?I(L.fallback.srcSet):void 0})),L.sources&&(R.sources=L.sources.map((e=>i({},e,{srcSet:I(e.srcSet)})))),a.createElement(t,i({},A,{style:i({},j,o,{backgroundColor:h}),className:O+(r?" "+r:"")}),a.createElement(p,{layout:_,width:w,height:S},a.createElement(x,i({},d(N,!1,_,w,S,z,b,v))),a.createElement(E,i({"data-gatsby-image-ssr":"",className:g},y,u("eager"===f,!1,R,f,m)))))})),P=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:S,width:P,height:P,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Z.displayName="StaticImage",Z.propTypes=M;const U=q(A);U.displayName="StaticImage",U.propTypes=M},3427:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var a=r(5785),n=r(7294),o=r(2788),i=r(3009),l=r(3622),s=r(3951),c=r(1883),u=r(2307),d=r(3247),f=r(8032);const g=e=>{let{src:t,alt:r}=e;const a=(0,c.useStaticQuery)("1044384444"),o=(0,n.useMemo)((()=>{const e=a.allImageSharp.edges.find((e=>e.node.id===t));return null==e?void 0:e.node.gatsbyImageData}),[t,a.allImageSharp.edges]);return n.createElement(p,null,n.createElement(m,null,n.createElement(f.G,{image:o,loading:"eager",alt:null!=r?r:"Thumbnail Image"})))},p=o.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-ku254p-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),m=o.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-ku254p-1"})(["overflow:hidden;"]);var h=n.memo(g);const b=e=>{let{thumbnail:t,alt:r,category:a,title:o,desc:i,date:l}=e;return n.createElement(v,null,n.createElement(h,{src:t,alt:r}),n.createElement(y,null,n.createElement("div",null,n.createElement(u.Z,null,a),n.createElement(w,null,o)),n.createElement(d.Z,{dateTime:l},l)))},v=o.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-nx3lqc-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),y=o.default.div.withConfig({displayName:"card__Text",componentId:"sc-nx3lqc-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),w=o.default.h3.withConfig({displayName:"card__Title",componentId:"sc-nx3lqc-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(e=>{let{theme:t}=e;return t.device.md}),(e=>{let{theme:t}=e;return t.device.sm}));o.default.p.withConfig({displayName:"card__Desc",componentId:"sc-nx3lqc-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]);var x=n.memo(b);var E=e=>{let{posts:t,scrollEdgeRef:r,maxPostNum:o=10,offsetY:i=400}=e;const{0:l,1:s}=(0,n.useState)(!1),{0:c,1:u}=(0,n.useState)([]),{0:d,1:f}=(0,n.useState)(!1),{0:g,1:p}=(0,n.useState)(!1),m=(0,n.useRef)();return(0,n.useLayoutEffect)((()=>{t.length&&!d&&(s(t.length>o),u((0,a.Z)(t.slice(0,o))),f(!0))}),[d,t,o]),(0,n.useEffect)((()=>{const e=r.current,n={rootMargin:"0px 0px "+i+"px 0px",threshold:[0]};return m.current=new IntersectionObserver((e=>{l&&e.forEach((e=>{g?e.isIntersecting&&(()=>{const e=c.length,r=e<t.length,n=r?t.slice(e,e+o):[];s(r),u([].concat((0,a.Z)(c),(0,a.Z)(n)))})():p(!0)}))}),n),m.current.observe(e),()=>m.current&&m.current.disconnect()})),c};const k=o.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-14uqf8l-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(e=>{let{theme:t}=e;return t.device.sm})),C=o.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-14uqf8l-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],p,p,(e=>{let{theme:t}=e;return t.device.sm}));var I=e=>{let{posts:t}=e;const r=(0,n.useRef)(null),a=E({posts:t,scrollEdgeRef:r,maxPostNum:10,offsetY:200});return n.createElement(k,{role:"list"},a.map((e=>{const{id:t,slug:r,title:a,desc:o,date:i,category:l,thumbnail:s,alt:u}=e,d=a+" - "+l+" - Posted on "+i;return n.createElement(C,{key:t,role:"listitem"},n.createElement(c.Link,{to:null!=r?r:"","aria-label":d},n.createElement(x,{thumbnail:s,alt:u,category:l,title:a,desc:o,date:i})))})),n.createElement("div",{ref:r}))},S=r(1804),_=r.n(S);var L=e=>{let{ref:t,targetId:r}=e;(0,n.useLayoutEffect)((()=>{const e=t.current;if(!e)return;if(!(e.scrollWidth>=e.offsetWidth))return;const a=e.querySelector("#"+r);if(!a)return;const n=a.offsetLeft-e.offsetLeft;e.scrollTo(n-e.offsetWidth/2+a.offsetWidth/2,0)}),[t,r])};const N="active",z=o.default.nav.withConfig({displayName:"categoryFilter__Nav",componentId:"sc-p3qwnv-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;}"],(e=>{let{theme:t}=e;return t.device.sm})),T=o.default.em.withConfig({displayName:"categoryFilter__CategoryTitle",componentId:"sc-p3qwnv-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(e=>{let{theme:t}=e;return t.device.sm})),j=(0,o.default)(c.Link).withConfig({displayName:"categoryFilter__CategoryButton",componentId:"sc-p3qwnv-2"})(["cursor:pointer;display:block;background-color:var(--color-category-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]),O=o.default.div.withConfig({displayName:"categoryFilter__Divider",componentId:"sc-p3qwnv-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),A=o.default.ul.withConfig({displayName:"categoryFilter__CategoryUl",componentId:"sc-p3qwnv-4"})(["display:flex;list-style:none;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}"]);var R=e=>{let{categoryList:t}=e;const r=(0,n.useRef)(null),o=e=>{let{isCurrent:t}=e;return t?{id:N,tabIndex:-1}:{}};L({ref:r,targetId:N});const i=(0,n.useMemo)((()=>(0,a.Z)(t).sort(((e,t)=>t.totalCount-e.totalCount))),[t]);return n.createElement(z,{"aria-label":"Category Filter"},n.createElement(T,null,"Category"),n.createElement(j,{getProps:o,to:"/"},"All"),n.createElement(O,null),n.createElement(A,{ref:r,className:"invisible-scrollbar"},i.map((e=>{const{fieldValue:t}=e;return n.createElement("li",{key:t},n.createElement(j,{getProps:o,to:"/category/"+_()(t)+"/"},t))}))))};var q=e=>{let{category:t,src:a}=e;return"All"==t||null==t?n.createElement(f.S,{src:"../images/hero.png",alt:"",layout:"fullWidth",__imageData:r(9380)}):null};const Z=o.default.main.withConfig({displayName:"pages__Main",componentId:"sc-1891g3r-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),P=o.default.div.withConfig({displayName:"pages__Content",componentId:"sc-1891g3r-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(e=>{let{theme:t}=e;return t.device.sm})),W=o.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-1891g3r-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(e=>{let{theme:t}=e;return t.device.sm}));var M=e=>{let{pageContext:t,data:r}=e;const{0:o,1:c}=(0,n.useState)([]),u=t.category,d=r.allMarkdownRemark.edges;(0,n.useLayoutEffect)((()=>{(u?d.filter((e=>{var t;let{node:r}=e;return(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.category)===u})):d).forEach((e=>{let{node:t}=e;const{id:r}=t,{slug:n}=t.fields,{title:o,desc:i,date:l,category:s,thumbnail:u,alt:d}=t.frontmatter,{childImageSharp:f}=u;c((e=>[].concat((0,a.Z)(e),[{id:r,slug:n,title:o,desc:i,date:l,category:s,thumbnail:null==f?void 0:f.id,alt:d}])))}))}),[u,d]);const f=(0,i.Z)(),g=u||f.postTitle;return n.createElement(l.Z,null,n.createElement(s.Z,{title:"Home"}),n.createElement(Z,null,n.createElement(q,{category:u,src:f.hero}),n.createElement(P,null,n.createElement(R,{categoryList:r.allMarkdownRemark.group}),n.createElement(W,null,g),n.createElement(I,{posts:o}))))}},2307:function(e,t,r){"use strict";const a=r(2788).default.span.withConfig({displayName:"category__Category",componentId:"sc-wcpv1v-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=a},3247:function(e,t,r){"use strict";const a=r(2788).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-105pimp-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=a},2705:function(e,t,r){var a=r(5639).Symbol;e.exports=a},9932:function(e){e.exports=function(e,t){for(var r=-1,a=null==e?0:e.length,n=Array(a);++r<a;)n[r]=t(e[r],r,e);return n}},2663:function(e){e.exports=function(e,t,r,a){var n=-1,o=null==e?0:e.length;for(a&&o&&(r=e[++n]);++n<o;)r=t(r,e[n],n,e);return r}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,r){var a=r(2705),n=r(9607),o=r(2333),i=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?n(e):o(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,r){var a=r(2705),n=r(9932),o=r(1469),i=r(3448),l=a?a.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return n(t,e)+"";if(i(t))return s?s.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},5393:function(e,t,r){var a=r(2663),n=r(3816),o=r(8748),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(n(t).replace(i,"")),e,"")}}},9389:function(e,t,r){var a=r(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},1957:function(e,t,r){var a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=a},9607:function(e,t,r){var a=r(2705),n=Object.prototype,o=n.hasOwnProperty,i=n.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var a=!0}catch(s){}var n=i.call(e);return a&&(t?e[l]=r:delete e[l]),n}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var a=r(1957),n="object"==typeof self&&self&&self.Object===Object&&self,o=a||n||Function("return this")();e.exports=o},2757:function(e){var t="\\ud800-\\udfff",r="\\u2700-\\u27bf",a="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",l="\\d+",s="["+r+"]",c="["+a+"]",u="[^"+t+o+l+r+a+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",g="["+n+"]",p="(?:"+c+"|"+u+")",m="(?:"+g+"|"+u+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",b="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",w=y+v+("(?:\\u200d(?:"+["[^"+t+"]",d,f].join("|")+")"+y+v+")*"),x="(?:"+[s,d,f].join("|")+")"+w,E=RegExp([g+"?"+c+"+"+h+"(?="+[i,g,"$"].join("|")+")",m+"+"+b+"(?="+[i,g+p,"$"].join("|")+")",g+"?"+p+"+"+h,g+"+"+b,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,x].join("|"),"g");e.exports=function(e){return e.match(E)||[]}},3816:function(e,t,r){var a=r(9389),n=r(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(o,a).replace(i,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var a=r(4239),n=r(7005);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==a(e)}},1804:function(e,t,r){var a=r(5393)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=a},9833:function(e,t,r){var a=r(531);e.exports=function(e){return null==e?"":a(e)}},8748:function(e,t,r){var a=r(9029),n=r(3157),o=r(9833),i=r(2757);e.exports=function(e,t,r){return e=o(e),void 0===(t=r?void 0:t)?n(e)?i(e):a(e):e.match(t)||[]}},9380:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#4878c8","images":{"fallback":{"src":"/static/aa6ea6f6bf09a1f98c5660bf99c998b7/d32d8/hero.png","srcSet":"/static/aa6ea6f6bf09a1f98c5660bf99c998b7/76a4f/hero.png 750w,\\n/static/aa6ea6f6bf09a1f98c5660bf99c998b7/a902f/hero.png 1080w,\\n/static/aa6ea6f6bf09a1f98c5660bf99c998b7/d32d8/hero.png 1280w","sizes":"100vw"},"sources":[{"srcSet":"/static/aa6ea6f6bf09a1f98c5660bf99c998b7/66907/hero.webp 750w,\\n/static/aa6ea6f6bf09a1f98c5660bf99c998b7/27610/hero.webp 1080w,\\n/static/aa6ea6f6bf09a1f98c5660bf99c998b7/9ba0b/hero.webp 1280w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.75}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e7a20bca5c89f01dcf2e.js.map