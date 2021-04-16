(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{356:function(e,r,t){"use strict";t.r(r);var a=t(42),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"service-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[e._v("#")]),e._v(" Service Worker")]),e._v(" "),t("p",[e._v("Service Worker是浏览器在后台独立于网页运行的脚本，它打开了通向不需要网页或用户交互的功能的大门。 现在，它们已包括如推送通知和后台同步等功能。 将来，Service Worker将会支持如定期同步或地理围栏等其他功能。")]),e._v(" "),t("h2",{attrs:{id:"生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),t("p",[e._v("第一次访问时Service Worker的生命周期\ninstalling → installed → activating → activated")]),e._v(" "),t("p",[e._v("在js没有修改的情况下刷新，直接显示当前激活态\ninstalled（注册成功） → activated")]),e._v(" "),t("p",[e._v("修改了Service Worker注册JS，然后重载的时候旧的Service Worker还在跑，新的Service Worker已经安装等待激活\n注册成功 → waiting → installed")]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("通过注册 Service Worker，你可以告诉浏览器你的 Service Worker 的 JavaScript 文件的位置。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if(serviceWorker in navigator){\n    window.addEventListener('load',function(){\n        navigator.serviceWorker.register('/sw.js').then(function(registration){\n            console.log('ServiceWorker registration successful');\n        },function(err){\n            console.log('ServiceWorker registration failed',err);\n        })\n    })\n}\n")])])]),t("ul",[t("li",[e._v("每次页面加载时都可以调用 "),t("code",[e._v("navigator.serviceWorker.register()")]),e._v(" 方法，浏览器会判断 Service Worker 是否已经注册，根据注册情况会对应的给出正确处理。"),t("code",[e._v("register()")]),e._v("方法的一个重要细节是 Service Worker 文件的位置。在本例中，可以看到 Service Worker 文件位于域的根目录，这个 Service Worker 将为这个域中的所有内容接收 fetch 事件。")]),e._v(" "),t("li",[e._v("用户第一次访问你的 Web 应用程序。目前还没有 Service Worker，浏览器无法预先知道最终是否会安装 Service Worker。如果安装了 Service Worker，浏览器将需要为这个额外的线程花费额外的 CPU 和内存，否则浏览器将把这些额外的 CPU 和内存用于呈现 Web 页面。")]),e._v(" "),t("li",[e._v("如果在页面上安装一个 Service Worker，就可能会有延迟加载和渲染的风险 —— 而不是尽快让你的用户可以使用该页面。")]),e._v(" "),t("li",[e._v("注意，这种情况对第一次的访问页面时才会有。后续的页面访问不会受到 Service Worker 安装的影响。一旦 Service Worker 在第一次访问页面时被激活，它就可以处理加载/缓存事件，以便后续访问 Web 应用程序。")])]),e._v(" "),t("h2",{attrs:{id:"激活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激活"}},[e._v("#")]),e._v(" 激活")]),e._v(" "),t("p",[e._v("在激活步骤之后，Service Worker 将控制所有属于其范围的页面，尽管第一次注册 Service Worker 的页面将不会被控制，直到再次加载。\nService Worker 一旦掌控，它将处于以下两种状态之一：")]),e._v(" "),t("ul",[t("li",[e._v("处理从网页发出网络请求或消息时发生的提取和消息事件")]),e._v(" "),t("li",[e._v("Service Worker 将被终止以节省内存")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 缓存更新\nself.addEventListener('activate', function(event) {\n  event.waitUntil(\n  //检索缓存中所有键\n    caches.keys().then(function(cacheNames) {\n      return Promise.all(\n      //遍历所有缓存文件\n        cacheNames.map(function(cacheName) {\n          // 如果当前版本和缓存版本不一致则删除\n          if (cacheName !== VERSION) {\n            return caches.delete(cacheName);\n          }\n        })\n      );\n    })\n  );\n});\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('activate', function(event) { /* 激活后... */ });\n")])])]),t("blockquote",[t("p",[e._v("'activate'用来缓存更新")])]),e._v(" "),t("h2",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("以下是处理安装事件时需要采取的步骤:")]),e._v(" "),t("ul",[t("li",[e._v("开启一个缓存")]),e._v(" "),t("li",[e._v("缓存我们的文件")]),e._v(" "),t("li",[e._v("确认是否缓存了所有必需的资源")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const pluckDeep = ke;\nvar CACHE_NAME = 'my-web-app-cache';\nvar urlToCache = [\n   '/',\n   '/styles/main.css',\n   '/scripts/app.js',\n   '/scripts/lib.js'\n];\nself.addEventListener('install',function(event){\n    // event.waitUntil 需要一个promise ，以了解安装需要多长时间\n    event.waitUntil(\n        caches.open(CACHE_NAME).then(function(cache){\n            console.log('Opened cache');\n            return cache.addAll(urlToCache);\n        })\n    );\n});\n")])])]),t("p",[e._v("调用了caches.open() 和我们想要的缓存名称, 之后调用 cache.addAll() 并传入文件数组。 这是一个promise 链（ caches.open() 和 cache.addAll() ）。 event.waitUntil() 方法接受一个承诺，并使用它来知道安装需要多长时间，以及它是否成功。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('install', function(event) { /* 安装后... */ });\n")])])]),t("blockquote",[t("p",[e._v("'install'用来缓存文件")])]),e._v(" "),t("h2",{attrs:{id:"fetch事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch事件"}},[e._v("#")]),e._v(" fetch事件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 捕获请求并返回缓存数据\nself.addEventListener('fetch', function(event) {\n  event.respondWith(\n   //此方法查看请求，并从Service worker创建的所有缓存中找到已缓存的结果\n  caches.match(event.request).catch(function() {\n    return fetch(event.request);\n  }).then(function(response) {\n    caches.open(VERSION).then(function(cache) {\n    //将请求添加到缓存中以备将来查询\n      cache.put(event.request, response);\n    });\n    return response.clone();\n  }).catch(function() {\n    return caches.match('./static/mm1.jpg');\n  }));\n});\n")])])]),t("p",[e._v("Service Worker还支持fetch事件，来响应和拦截各种请求。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("self.addEventListener('fetch', function(event) { /* 请求后... */ });\n")])])]),t("blockquote",[t("p",[e._v("'fetch'用来拦截请求直接返回缓存数据")])]),e._v(" "),t("h2",{attrs:{id:"要求-https-的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#要求-https-的原因"}},[e._v("#")]),e._v(" 要求 HTTPS 的原因")]),e._v(" "),t("p",[e._v("在构建 Web 应用程序时，通过 localhost 使用 Service Workers，但是一旦将其部署到生产环境中，就需要准备好 HTTPS( 这是使用HTTPS 的最后一个原因)。\n使用 Service Worker，可以很容易被劫持连接并伪造响应。如果不使用 HTTPs，人的web应用程序就容易受到黑客的攻击。\n为了更安全，你需要在通过 HTTPS 提供的页面上注册 Service Worker，以便知道浏览器接收的 Service Worker 在通过网络传输时未被修改。")]),e._v(" "),t("h2",{attrs:{id:"pwa技术（待补充）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwa技术（待补充）"}},[e._v("#")]),e._v(" PWA技术（待补充）")]),e._v(" "),t("p",[e._v("PWA全称为“Progressive Web Apps”，渐进式网页应用。功效显著，收益明显\nPWA的核心技术包括：")]),e._v(" "),t("ul",[t("li",[e._v("Web App Manifest – 在主屏幕添加app图标，定义手机标题栏颜色之类")]),e._v(" "),t("li",[e._v("Service Worker – 缓存，离线开发，以及地理位置信息处理等")]),e._v(" "),t("li",[e._v("App Shell – 先显示APP的主结构，再填充主数据，更快显示更好体验")]),e._v(" "),t("li",[e._v("Push Notification – 消息推送，之前有写过“简单了解HTML5中的Web Notification桌面通知”\nService Worker仅仅是PWA技术中的一部分，但是又独立于PWA。")])]),e._v(" "),t("p",[e._v("参考链接")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("借助Service Worker和cacheStorage缓存及离线开发"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qq449245884/xiaozhi/issues/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 是如何工作的：Service Worker 的生命周期及使用场景"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/6844904052166230030#heading-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("PWA概念通识面试题"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);