(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{380:function(e,n,a){"use strict";a.r(n);var s=a(42),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"代码分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码分割"}},[e._v("#")]),e._v(" 代码分割")]),e._v(" "),a("h2",{attrs:{id:"代码分割的做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码分割的做法"}},[e._v("#")]),e._v(" 代码分割的做法")]),e._v(" "),a("p",[e._v("两种：")]),e._v(" "),a("ul",[a("li",[e._v("分离业务代码和第三方库（ vendor ）")]),e._v(" "),a("li",[e._v("按需加载（利用 import() 语法）")])]),e._v(" "),a("p",[e._v("之所以把业务代码和第三方库代码分离出来，是因为需求是源源不断的，因此业务代码更新频率大，==相反第三方库代码更新迭代相对较慢且可以锁版本，所以可以充分利用浏览器的缓存来加载这些第三方库。==")]),e._v(" "),a("p",[e._v("而按需加载的适用场景，比如说「==访问某个路由的时候再去加载对应的组件==」，用户不一定会访问所有的路由，所以没必要把所有路由对应的组件都先在开始的加载完；更典型的例子是「某些用户他们的权限只能访问某些页面」，所以没必要把他们没权限访问的页面的代码也加载。")]),e._v(" "),a("h2",{attrs:{id:"静态分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态分割"}},[e._v("#")]),e._v(" 静态分割")]),e._v(" "),a("p",[e._v("静态代码分割是指：在代码中明确声明需要异步加载的代码。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Listener from './listeners.js'\nconst getModal = () => import('./src/modal.js') Listener.on('didSomethingToWarrentModalBeingLoaded', () => {  // Async fetching modal code from a separate chunk  getModal().then((module) => {    const modalTarget = document.getElementById('Modal')    module.initModal(modalTarget)  })})\nconst getModal = () => import('./src/modal.js') \n\n")])])]),a("p",[e._v("每当你调用一个声明了异步加载代码的变量时，它总是返回一个 Promise 对象。")]),e._v(" "),a("p",[e._v("⚠️ 注意：==在 Vue 中，可以直接使用 import() 关键字做到这一点==，而在 React 中，你需要使用 react-loadable 去完成同样的事。")]),e._v(" "),a("p",[e._v("使用场景")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("你正在使用一个非常大的库或框架")]),e._v("：如果在页面初始化时你不需要使用它，就不要在页面初载时加载它；")]),e._v(" "),a("li",[a("strong",[e._v("任何临时的资源")]),e._v("：指不在页面初始化时被使用，被使用后又会立即被销毁的资源，例如模态框，对话框，tooltip 等（任何一开始不显示在页面上的东西都可以有条件的加载）；")]),e._v(" "),a("li",[a("strong",[e._v("路由")]),e._v("：既然用户不会一下子看到所有页面，那么只把当前页面相关资源给用户就是个明智的做法；")])]),e._v(" "),a("h2",{attrs:{id:"动态分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分割"}},[e._v("#")]),e._v(" 动态分割")]),e._v(" "),a("p",[e._v("在代码调用时根据当前的状态，「动态地」异步加载对应的代码块。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const getTheme = (themeName) => import(`./src/themes/${themeName}`)\n\n")])])]),a("p",[e._v("Webpack 会在构建时==将你声明的目录下的所有可能分离的代码都抽象为一个文件==（这被称为 contextModule 模块），因此无论你最终声明了调用哪个文件，==本质上就和静态代码分割一样，在请求一个早已准备好的，静态的文件==。")]),e._v(" "),a("p",[e._v("使用场景")]),e._v(" "),a("ol",[a("li",[e._v("A/B Test：你不需要在代码中引入不需要的 UI 代码；")]),e._v(" "),a("li",[e._v("加载主题：根据用户的设置，动态加载相应的主题；")]),e._v(" "),a("li",[e._v("为了方便：本质上，你可以用静态代码分割代替「动态」代码分割，但是后者比前者拥有更少的代码量；（少指代码数上的少）")]),e._v(" "),a("li",[e._v("企业后台lang的打包")])]),e._v(" "),a("h2",{attrs:{id:"魔术注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#魔术注释"}},[e._v("#")]),e._v(" 魔术注释")]),e._v(" "),a("p",[e._v("魔术注释是由 Webpack 提供的，可以为代码分割服务的一种技术。==通过在 import 关键字后的括号中使用指定注释，我们可以对代码分割后的 chunk 有更多的控制权==")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// index.js\nimport (\n  /* webpackChunkName: “my-chunk-name” */\n  './footer'\n)\n")])])]),a("p",[e._v("同时，也要在 webpack.config.js 中做一些改动：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\n{\n  output: {\n    filename: “bundle.js”,\n    chunkFilename: “[name].lazy-chunk.js” //可以对分离出的 chunk 进行命名\n  }\n}\n")])])]),a("h3",{attrs:{id:"webpack-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-modes"}},[e._v("#")]),e._v(" Webpack Modes")]),e._v(" "),a("p",[e._v("==webpackMode 的默认值为 lazy 它会使所有异步模块都会被单独抽离成单一的 chunk==，若设置该值为 lazy-once，Webpack 就会将所有带有标记的异步加载模块放在同一个 chunk 中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import (\n  /* webpackChunkName: “my-chunk-name” */\n  /* webpackMode: lazy */\n  './someModule'\n)\n")])])]),a("h3",{attrs:{id:"prefetch-or-preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefetch-or-preload"}},[e._v("#")]),e._v(" Prefetch or Preload")]),e._v(" "),a("p",[e._v("通过添加 webpackPrefetch 魔术注释，Webpack 令我们可以使用与 "),a("code",[e._v("<link rel=“prefetch”>")]),e._v("相同的特性。让浏览器会在 Idle 状态时预先帮我们加载所需的资源，善用这个技术可以使我们的应用交互变得更加流畅。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import(\n  /* webpackPrefetch: true */\n  './someModule'\n)\n")])])]),a("h2",{attrs:{id:"实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[e._v("#")]),e._v(" 实战")]),e._v(" "),a("p",[e._v("第一次打包的情况：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\nmodule.exports = {\n  entry: {\n     app: './src/main.js', // entry chunk\n  },\n}\n")])])]),a("p",[e._v("当前只有一个 "),a("code",[e._v("chunk")]),e._v("也就是"),a("code",[e._v("app.js")]),e._v("，他是一个 "),a("code",[e._v("entry chunk")]),e._v(" 。app.js 包含了我们的第三方库 "),a("code",[e._v("vue")]),e._v(" 和 "),a("code",[e._v("axios")]),e._v(" ，以及我们的业务代码 src 。")]),e._v(" "),a("h3",{attrs:{id:"分离-vendor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离-vendor"}},[e._v("#")]),e._v(" 分离 Vendor")]),e._v(" "),a("p",[e._v("加一个 entry")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\nmodule.exports = {\n  entry: {\n    app: './src/main.js',\n    vendor: ['vue', 'axios'],//本次增加的\n  },\n}\n")])])]),a("p",[e._v("虽然 vendor.js 这个 entry chunk 包含了我们想要的 vue 和 axios，但是app.js 中也有 vue 和 axios。\n原因：\n每个 entry 都包含了他自己的依赖，这样他才能作为一个入口，独立地跑起来。")]),e._v(" "),a("h3",{attrs:{id:"提取公共模块commonschunkplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取公共模块commonschunkplugin"}},[e._v("#")]),e._v(" 提取公共模块CommonsChunkPlugin")]),e._v(" "),a("p",[e._v("webpack v4 legato中已删除CommonsChunkPlugin。要了解如何在最新版本中处理块，请查看"),a("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SplitChunksPlugi"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("增加这一行，找到依赖2次及以上的模块，然后移到 vendor 这个 chunk 里面。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//webpack.config.js\nnew webpack.optimize.CommonsChunkPlugin({\n  name: 'vendor',\n}),\n")])])]),a("p",[e._v("但是！随着业务的增长，我们依赖的第三方库代码很可能会越来越多，这时候我们的 webpack.config.js 就变成这样了：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  entry: {\n    app: './src/main.js',\n    vendor: [\n      'vue',\n      'axio',\n      'vue-router',\n      'vuex',\n      'element-ui',\n      // 很长很长\n    ],\n  },\n}\n")])])]),a("p",[e._v("vendor entry 会变成很长很长，更糟糕的是，我们每次引入了新的第三方库，都需要在 vendor 手动增加对应的包名。")]),e._v(" "),a("h3",{attrs:{id:"自动化分离-vendor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化分离-vendor"}},[e._v("#")]),e._v(" 自动化分离 vendor")]),e._v(" "),a("p",[e._v("看见某些模块是来自 node_modules 目录的，并且名字是 .js 结尾的话，把他们都移到 vendor chunk 里去，如果 vendor chunk 不存在的话，就创建一个新的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("entry: {\n  // vendor: ['vue', 'axios'] // 删掉!\n},\n\nnew webpack.optimize.CommonsChunkPlugin({\n  name: 'vendor',\n  minChunks: ({ resource }) => (\n    resource &&\n    resource.indexOf('node_modules') >= 0 &&\n    resource.match(/\\.js$/)\n  ),\n}),\n")])])]),a("p",[e._v("以下配置就能从网页 A 和网页 B 中抽离出公共部分，放到 common 中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');\n\nnew CommonsChunkPlugin({\n  // 从哪些 Chunk 中提取\n  chunks: ['a', 'b'],\n  // 提取出的公共部分形成一个新的 Chunk，这个新 Chunk 的名称\n  name: 'common'\n})\n")])])]),a("p",[e._v("通过以上配置输出的 common Chunk 中会包含所有页面都依赖的基础运行库 react、react-dom，为了把基础运行库从 common 中抽离到 base 中去，还需要做一些处理。")]),e._v(" "),a("p",[e._v("首先需要先配置一个 Chunk，这个 Chunk 中只依赖所有页面都依赖的基础库以及所有页面都使用的样式，为此需要在项目中写一个文件 base.js 来描述 base Chunk 所依赖的模块，文件内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//base.js\n// 所有页面都依赖的基础库\nimport 'react';\nimport 'react-dom';\n// 所有页面都使用的样式\nimport './base.css';\n")])])]),a("p",[e._v("接着再修改 Webpack 配置，在 entry 中加入 base，相关修改如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  entry: {\n    base: './base.js'\n  },\n};\n")])])]),a("p",[e._v("以上就完成了对新 Chunk base 的配置。")]),e._v(" "),a("p",[e._v("为了从 common 中提取出 base 也包含的部分，还需要配置一个 CommonsChunkPlugin，相关代码如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new CommonsChunkPlugin({\n  // 从 common 和 base 两个现成的 Chunk 中提取公共的部分\n  chunks: ['common', 'base'],\n  // 把公共的部分放到 base 中\n  name: 'base'\n})\n")])])]),a("p",[e._v("由于 common 和 base 公共的部分就是 base 目前已经包含的部分，所以==这样配置后 common 将会变小，而 base 将保持不变。==\n以上都配置好后重新执行构建，你将会得到四个文件，它们分别是：")]),e._v(" "),a("ul",[a("li",[e._v("base.js：所有网页都依赖的基础库组成的代码；")]),e._v(" "),a("li",[e._v("common.js：网页A、B都需要的，但又不在 base.js 文件中出现过的代码；")]),e._v(" "),a("li",[e._v("a.js：网页 A 单独需要的代码；")]),e._v(" "),a("li",[e._v("b.js：网页 B 单独需要的代码。")])]),e._v(" "),a("p",[e._v("以上方法可能会出现 common.js 中没有代码的情况，原因是去掉基础运行库外很难再找到所有页面都会用上的模块。 在出现这种情况时，你可以采取以下做法之一：")]),e._v(" "),a("ul",[a("li",[e._v("==CommonsChunkPlugin 提供一个选项 minChunks，表示文件要被提取出来时需要在指定的 Chunks 中最小出现最小次数==。 假如 minChunks=2、 chunks=['a','b','c','d']，任何一个文件只要在 ['a','b','c','d'] 中任意两个以上的 Chunk 中都出现过，这个文件就会被提取出来。 你可以根据自己的需求去调整 minChunks 的值，==minChunks 越小越多的文件会被提取到 common.js 中去，但这也会导致部分页面加载的不相关的资源越多==； minChunks 越大越少的文件会被提取到 common.js 中去，但这会导致 common.js 变小、效果变弱。")]),e._v(" "),a("li",[e._v("==根据各个页面之间的相关性选取其中的部分页面用 CommonsChunkPlugin 去提取这部分被选出的页面的公共部分，而不是提取所有页面的公共部分，而且这样的操作可以叠加多次。 这样做的效果会很好==，但缺点是配置复杂，你需要根据页面之间的关系去思考如何配置，该方法不通用。")])]),e._v(" "),a("h3",{attrs:{id:"按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[e._v("#")]),e._v(" 按需加载")]),e._v(" "),a("p",[e._v("如果我们想「按需加载」路由组件的话，修改以下几行。由直接导入改成使用时调用导入。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// router.js\n\x3c!--import Emoji from './pages/Emoji.vue' 旧的写法--\x3e\n\x3c!--import Photos from './pages/photos.vue'旧的写法 --\x3e\n\nconst Emoji = () => import(\n  /* webpackChunkName: \"Emoji\" */\n  './pages/Emoji.vue')//返回一个\n\nconst Photos = () => import(\n  /* webpackChunkName: \"Photos\" */\n  './pages/Photos.vue')\n")])])]),a("p",[e._v("我们使用了 webpack v2.4 的新功能，可以设置 chunk 的名字；同时别忘了还要改 webpack 配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("output: {\n  chunkFilename: '[name].chunk.js',\n}\n")])])]),a("p",[e._v("如果你用了 Babel ，就需要装上这个插件：babel plugin syntax dynamic import 来解析 import() 语法。修改 .babelrc ：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "plugins": ["syntax-dynamic-import"]\n}\n')])])]),a("h3",{attrs:{id:"自动抽离公共文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动抽离公共文件"}},[e._v("#")]),e._v(" 自动抽离公共文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new webpack.optimize.CommonsChunkPlugin({\n  async: 'used-twice',\n  minChunks: (module, count) => (\n    count >= 2\n  ),\n})\n")])])]),a("p",[e._v("在所有的 async chunk ( Emoji.chunk.js 和 Photos.chunk.js ) 中找到引用 2 次以上的模块，也就是 MagicBtn 咯，那把他挪到 used-twice chunk 中，如果 used-twice 不存在的话，那就创建一个。")]),e._v(" "),a("p",[e._v("CommonsChunkPlugin 提供一个选项 minChunks，表示文件要被提取出来时需要在指定的 Chunks 中最小出现最小次数。 假如 minChunks=2、 chunks=['a','b','c','d']，任何一个文件只要在 ['a','b','c','d'] 中任意两个以上的 Chunk 中都出现过，这个文件就会被提取出来。")]),e._v(" "),a("h2",{attrs:{id:"企业后台打包构建相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#企业后台打包构建相关"}},[e._v("#")]),e._v(" 企业后台打包构建相关")]),e._v(" "),a("h3",{attrs:{id:"在webpack配置中设置分析的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在webpack配置中设置分析的插件"}},[e._v("#")]),e._v(" 在webpack配置中设置分析的插件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\n//开启构建报告\nif (process.env.npm_config_report) {\n    const SpeedMeasurePlugin = require(\"speed-measure-webpack-plugin\");\n    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;\n    const smp = new SpeedMeasurePlugin();\n    webpackConfig = smp.wrap(webpackConfig);\n    webpackConfig.plugins.push(new BundleAnalyzerPlugin());\n}\n")])])]),a("p",[e._v("在命令中开启")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//package.json\n{\n "scripts": {\n      "build-report": "cross-env NODE_ENV=production npm_config_report=true webpack --config build/webpack.config.js",\n }\n }\n')])])]),a("h3",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[e._v("#")]),e._v(" 优化")]),e._v(" "),a("h4",{attrs:{id:"vendor-chunk-体积优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vendor-chunk-体积优化"}},[e._v("#")]),e._v(" vendor chunk 体积优化")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//main.js\nimport VueCodeMirror from 'vue-codemirror';\nimport VueECharts from 'echarts'\nimport 'codemirror/lib/codemirror.css';\n\nVue.use(VueCodeMirror);\nVue.prototype.$echarts = VueECharts;\n")])])]),a("p",[e._v("发现main.js中有以上代码。删掉，然后在有需要的代码中再引入。")]),e._v(" "),a("h4",{attrs:{id:"common-chunk-体积优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-chunk-体积优化"}},[e._v("#")]),e._v(" common chunk 体积优化")]),e._v(" "),a("p",[e._v("可以看到 ol库占用了相当多的体积，ol 是openlayer地图库，只有三个 chunk 中有用到，分别是：设备墙地图、geofencing地图、geofencing围栏管理。\n所以这个依赖应该仅在这三个功能模块加载时候再下载。")]),e._v(" "),a("p",[e._v("另外可以看到其实有一些文件也不适合打包到 common chunk，例如上面显示的一些，devices ，kiosk， geofencing 模块中才用到的复用组件，或者是类似 只有ams与geofencing 两个模块使用到的组件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * 代码分割\n * 文档：https://webpack.docschina.org/plugins/split-chunks-plugin/\n */\nsplitChunks: {\n    cacheGroups: {\n        vendors: {\n            test: /[\\\\/]node_modules[\\\\/]/,\n            name: 'vendors',\n            chunks: 'initial',\n        },\n        // 公共引入的包\n        commons: {\n            chunks: 'all',\n            //至少有3个chunk中引入的代码，才会被构建到 common chunk\n            minChunks: 3,\n            minSize: 30000,\n            name: 'commons',\n            //优先级10\n            priority: 10,\n        },\n        //因为openlayer有在3个chunk中引入，但是又不需要打包为公共chunk，所以将openLayer单独打包\n        openLayer: {\n            test: /[\\\\/]node_modules[\\\\/](ol)[\\\\/]/,\n            chunks: 'all',\n            name: 'openLayer',\n            //优先级20，比上面commons高，所有openlayer的打包会优先于上面，上面打包出的common chunk中就不会打包openlayer\n            priority: 20,\n        },\n    }\n}\n")])])]),a("h4",{attrs:{id:"moment-js-体积优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#moment-js-体积优化"}},[e._v("#")]),e._v(" moment.js 体积优化")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//webpack.config.common.js\n//优化moment构建后的体积，仅仅打包需要的语言文件\nnew webpack.ContextReplacementPlugin(/moment[/\\\\]locale$/, /ru|zh-cn|zh-tw/),\n")])])]),a("h4",{attrs:{id:"语言包按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言包按需加载"}},[e._v("#")]),e._v(" 语言包按需加载")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//i18n.js\nloadLangPack();\n\nasync function loadLangPack() {\n  const fileNames = {\n    'en': 'en',\n    'zh-cn': 'zh-CN',\n    'zh-tw': 'zh-TW',\n    'ru': 'ru'\n  }\n\n  const airUiLangPacks = {\n    'en': airEn,\n    'zh-cn': airZH_CN,\n    'zh-tw': airZH_TW,\n    'ru': airRU_RU\n  }\n\n  const langPack = await import( /* webpackChunkName: \"lang\" */ `./lang/${fileNames[lang]}.json` )\n\n  i18n.setLocaleMessage(lang, { ...langPack, ...airUiLangPacks[lang] })\n}\n")])])]),a("p",[e._v("这样会把语言包文件每个都分别打包，在这里按需加载。\n上述处理有一个缺点，执行i18n翻译的代码，不能早于语言包加载完成。否则就会出现没有翻译的情况。好在早于语言包加载就执行翻译的地方不多，很容易就处理了，但是这点今后需要注意。")]),e._v(" "),a("h4",{attrs:{id:"store优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store优化"}},[e._v("#")]),e._v(" store优化")]),e._v(" "),a("p",[e._v("目的是将各个功能模块的store文件，打包到功能模块的chunk中。\n例如pricing模块：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//store/pricing.js\nconst moduleName = 'pricing'\n\n/**\n * 引入的时候再动态注册此模块的 store\n */\n!store.hasModule(moduleName) && store.registerModule(moduleName, {\n    //store 的内容\n});\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//view/pricing/index.vue\n//加载此模块时才会注册store\nimport 'STORE/pricing';\n")])])]),a("h4",{attrs:{id:"代码压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[e._v("#")]),e._v(" 代码压缩")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("optimization: {\n    minimizer: [\n            //压缩css\n            new OptimizeCSSAssetsPlugin({\n                cssProcessorPluginOptions: {\n                    preset: ['default', { discardComments: { removeAll: true } }],\n                }\n            }),\n            //压缩js\n            new UglifyJSPlugin({\n                cache: true,\n                parallel: true,\n                sourceMap: false,\n                uglifyOptions: {\n                    output: {\n                        comments: false,\n                    },\n                    compress: {\n                        warnings: false,\n                        drop_debugger: isProd,\n                        drop_console: isProd\n                    }\n                },\n            })\n        ],\n}\n")])])]),a("p",[e._v("参考文章")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26710831",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 大法之 Code Splitting"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Splitting"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.xbhub.com/wiki/webpack/4%E4%BC%98%E5%8C%96/4-11%E6%8F%90%E5%8F%96%E5%85%AC%E5%85%B1%E4%BB%A3%E7%A0%81.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("4-11 提取公共代码"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("打包分析插件"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);