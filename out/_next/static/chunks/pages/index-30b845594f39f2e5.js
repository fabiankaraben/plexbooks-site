(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4186)}])},5769:function(e,t,a){"use strict";a.d(t,{w:function(){return o}});var r=a(4051),n=a.n(r),i=a(6690),l=a(1720);function s(e,t,a,r,n,i,l){try{var s=e[i](l),c=s.value}catch(o){return void a(o)}s.done?t(c):Promise.resolve(c).then(r,n)}var c=function(e){var t=e.title,a=void 0===t?"Plexbooks DEV News":t,r=(0,l.useRef)(null),c=(0,l.useState)(!1),o=c[0],d=c[1],m=(0,l.useState)(""),u=m[0],p=m[1],h=(0,l.useState)(!1),y=h[0],g=h[1],x=function(){var e,t=(e=n().mark((function e(t){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://plexbooks-newsletters.xeodev.workers.dev",{body:JSON.stringify({email:r.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!e.sent.error){e.next=11;break}return d(!0),p("\xa1Tu direcci\xf3n de correo electr\xf3nico no es v\xe1lida o ya est\xe1s suscrito!"),e.abrupt("return");case 11:r.current.value="",d(!1),g(!0),p("\xa1\xc9xito! \ud83c\udf89 Ya est\xe1s suscrito.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function l(e){s(i,r,n,l,c,"next",e)}function c(e){s(i,r,n,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,i.BX)("div",{className:"mx-auto max-w-md rounded-xl border border-purple-600 py-5 px-4",children:[(0,i.tZ)("div",{className:"pb-1 text-xl font-semibold uppercase text-purple-600 dark:text-gray-100",children:"\ud83d\udc4b ".concat(a," \ud83d\uddde")}),(0,i.tZ)("div",{className:"pb-4 text-base text-gray-800 dark:text-gray-100",children:"Ent\xe9rate de todas las novedades del mundo DEV en un solo correo semanal. \ud83d\ude4c"}),(0,i.BX)("form",{className:"flex flex-col msm:flex-row",onSubmit:x,children:[(0,i.BX)("div",{className:"w-full",children:[(0,i.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Direcci\xf3n de email"}),(0,i.tZ)("input",{autoComplete:"email",className:"w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black msm:w-72",id:"email-input",name:"email",placeholder:y?"Ahora est\xe1s suscrito! \ud83c\udf89":"Ingresa tu email",ref:r,required:!0,type:"email",disabled:y})]}),(0,i.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm msm:mt-0 msm:ml-2",children:(0,i.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"\xa1Gracias!":"UNIRME"})})]}),o&&(0,i.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:u})]})};t.Z=c;var o=function(e){var t=e.title;return(0,i.tZ)("div",{className:"flex items-center justify-center",children:(0,i.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,i.tZ)(c,{title:t})})})}},9829:function(e,t,a){"use strict";a.d(t,{$t:function(){return m},TQ:function(){return d},Uy:function(){return u}});var r=a(6690),n=a(9008),i=a.n(n),l=a(1163),s=a(1576),c=a.n(s),o=function(e){var t=e.title,a=e.description,n=e.ogType,s=e.ogImage,o=e.twImage,d=e.canonicalUrl,m=e.noIndex,u=(e.includeAdsense,(0,l.useRouter)());return!1,(0,r.BX)(i(),{children:[(0,r.tZ)("title",{children:t}),(0,r.tZ)("meta",{name:"robots",content:m?"follow, noindex":"follow, index"}),(0,r.tZ)("meta",{name:"description",content:a}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(u.asPath)}),(0,r.tZ)("meta",{property:"og:type",content:n}),(0,r.tZ)("meta",{property:"og:site_name",content:c().title}),(0,r.tZ)("meta",{property:"og:description",content:a}),(0,r.tZ)("meta",{property:"og:title",content:t}),Array.isArray(s)?s.map((function(e){var t=e.url;return(0,r.tZ)("meta",{property:"og:image",content:t},t)})):(0,r.tZ)("meta",{property:"og:image",content:s},s),(0,r.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,r.tZ)("meta",{name:"twitter:title",content:t}),(0,r.tZ)("meta",{name:"twitter:description",content:a}),(0,r.tZ)("meta",{name:"twitter:image",content:o}),(0,r.tZ)("link",{rel:"canonical",href:d||"".concat(c().siteUrl).concat(u.asPath)}),false]})},d=function(e){var t=e.title,a=e.description,n=e.noIndex,i=void 0!==n&&n,l=e.includeAdsense,s=void 0!==l&&l,d=c().siteUrl+c().socialBanner,m=c().siteUrl+c().socialBanner;return(0,r.tZ)(o,{title:t,description:a,ogType:"website",ogImage:d,twImage:m,noIndex:i,includeAdsense:s})},m=function(e){var t=e.title,a=e.description,n=e.noIndex,s=void 0!==n&&n,d=e.includeAdsense,m=void 0!==d&&d,u=c().siteUrl+c().socialBanner,p=c().siteUrl+c().socialBanner,h=(0,l.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.tZ)(o,{title:t,description:a,ogType:"website",ogImage:u,twImage:p,noIndex:s,includeAdsense:m}),(0,r.tZ)(i(),{children:(0,r.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(a," - RSS feed"),href:"".concat(c().siteUrl).concat(h.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,a=e.title,n=e.summary,l=e.date,s=e.lastmod,d=e.url,m=e.images,u=void 0===m?[]:m,p=e.canonicalUrl,h=new Date(l).toISOString(),y=new Date(s||l).toISOString(),g=(0===u.length?[c().socialBanner]:"string"===typeof u?[u]:u).map((function(e){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(e)}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:a,image:g,datePublished:h,dateModified:y,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:n},f=g[0].url;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(o,{title:a,description:n,ogType:"article",ogImage:g,twImage:f,canonicalUrl:p,noIndex:!1,includeAdsense:!0}),(0,r.BX)(i(),{children:[l&&(0,r.tZ)("meta",{property:"article:published_time",content:h}),s&&(0,r.tZ)("meta",{property:"article:modified_time",content:y}),(0,r.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},4186:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return o},default:function(){return d}});var r=a(6690),n=a(7966),i=a(9829),l=a(1576),s=a.n(l),c=a(5769),o=!0;function d(e){var t=e.javaScriptBookPosts,a=e.pythonBookPosts;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.TQ,{title:s().title,description:s().description}),(0,r.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,r.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,r.tZ)("h2",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"What is Plexbooks?"}),(0,r.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:s().description})]}),(0,r.BX)("div",{className:"mt-7 space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,r.tZ)("h2",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"JavaScript book"}),(0,r.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Read the latest lessons published in our JavaScript book"}),t.length>3&&(0,r.tZ)("div",{className:"flex justify-start text-base font-medium leading-6",children:(0,r.tZ)(n.Z,{href:"/javascript",className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":"All JavaScript lessons",children:"All JavaScript lessons \u2192"})})]}),(0,r.tZ)("div",{children:(0,r.BX)("ul",{className:"mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700",children:[!t.length&&"No publications found.",t.slice(0,3).map((function(e){var t=e.slug,a=e.title,i=e.summary;return(0,r.tZ)("li",{className:"py-12",children:(0,r.tZ)("article",{children:(0,r.tZ)("div",{className:"space-y-2",children:(0,r.BX)("div",{className:"space-y-5 xl:col-span-3",children:[(0,r.BX)("div",{className:"space-y-6",children:[(0,r.tZ)("div",{children:(0,r.tZ)("h2",{className:"text-4xl font-bold leading-14 tracking-tight",children:(0,r.tZ)(n.Z,{href:"/javascript/".concat(t),className:"text-gray-900 dark:text-gray-100",children:a})})}),(0,r.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:i})]}),(0,r.tZ)("div",{className:"text-base font-medium leading-6",children:(0,r.tZ)(n.Z,{href:"/javascript/".concat(t),className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":'Read "'.concat(a,'"'),children:"Read more \u2192"})})]})})})},t)}))]})}),(0,r.BX)("div",{className:"mt-16 space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,r.tZ)("h2",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14",children:"Python book"}),(0,r.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Read the latest lessons published in our Python book"}),a.length>3&&(0,r.tZ)("div",{className:"flex justify-start text-base font-medium leading-6",children:(0,r.tZ)(n.Z,{href:"/python",className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":"All JavaScript lessons",children:"All Python lessons \u2192"})})]}),(0,r.tZ)("div",{children:(0,r.BX)("ul",{className:"mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700",children:[!a.length&&"No publications found.",a.slice(0,3).map((function(e){var t=e.slug,a=e.title,i=e.summary;return(0,r.tZ)("li",{className:"py-12",children:(0,r.tZ)("article",{children:(0,r.tZ)("div",{className:"space-y-2",children:(0,r.BX)("div",{className:"space-y-5 xl:col-span-3",children:[(0,r.BX)("div",{className:"space-y-6",children:[(0,r.tZ)("div",{children:(0,r.tZ)("h2",{className:"text-4xl font-bold leading-14 tracking-tight",children:(0,r.tZ)(n.Z,{href:"/python/".concat(t),className:"text-gray-900 dark:text-gray-100",children:a})})}),(0,r.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:i})]}),(0,r.tZ)("div",{className:"text-base font-medium leading-6",children:(0,r.tZ)(n.Z,{href:"/python/".concat(t),className:"text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400","aria-label":'Read "'.concat(a,'"'),children:"Read more \u2192"})})]})})})},t)}))]})})]}),""!==s().newsletter.provider&&(0,r.tZ)("div",{className:"flex items-center justify-center pt-8",children:(0,r.tZ)(c.Z,{})})]})}},1163:function(e,t,a){e.exports=a(880)}},function(e){e.O(0,[888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);