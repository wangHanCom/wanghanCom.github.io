(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{379:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" Loader")]),e._v(" "),a("p",[e._v("Webpack 原生不支持解析 CSS 文件。要支持非 JavaScript 类型的文件，需要使用 Webpack 的 Loader 机制。")]),e._v(" "),a("h2",{attrs:{id:"配置和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置和使用"}},[e._v("#")]),e._v(" 配置和使用")]),e._v(" "),a("h3",{attrs:{id:"config中配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config中配置"}},[e._v("#")]),e._v(" config中配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  // JavaScript 执行入口文件\n  entry: './main.js',\n  output: {\n  //....\n  },\n  module: {\n    rules: [\n      {\n        // 用正则去匹配要用该 loader 转换的 CSS 文件\n        test: /\\.css$/,\n        use: [\n            'style-loader', \n              {\n                loader:'css-loader',\n                options:{\n                  minimize:true,//开启压缩\n                }\n              }\n        ],\n      }\n    ]\n  }\n};\n")])])]),a("p",[e._v("配置里的 module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。 如上配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。")]),e._v(" "),a("ul",[a("li",[e._v("Loader 的执行顺序是==由后到前==的。")]),e._v(" "),a("li",[e._v("每一个 Loader 都可以通过"),a("code",[e._v("URL querystring")]),e._v("的方式传入参数，例如 "),a("code",[e._v("css-loader?minimize")]),e._v("中的 "),a("code",[e._v("minimize")]),e._v(" 告诉"),a("code",[e._v("css-loader")]),e._v("要开启 CSS 压缩。")])]),e._v(" "),a("p",[e._v("Webpack 构建前要先安装新引入的 Loader")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i -D style-loader css-loader\n")])])]),a("p",[e._v("安装成功后重新执行构建时，你会发现 bundle.js 文件被更新了，==里面注入了在 main.css 中写的 CSS，而不是会额外生成一个 CSS 文件。CSS 被写在了 JavaScript 里。== style-loader 它的工作原理大概是把 CSS 内容用 JavaScript 里的字符串存储起来， 在网页执行 JavaScript 时==通过 DOM 操作动态地往 HTML head 标签里插入 HTML style 标签==。")]),e._v(" "),a("h3",{attrs:{id:"内联写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内联写法"}},[e._v("#")]),e._v(" 内联写法")]),e._v(" "),a("p",[e._v("可以在 import 等语句里指定 Loader，使用 ! 来将 Loader分开：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("require('style-loader!css-loader?minimize!./main.css');\n")])])]),a("p",[e._v("这样就能指定对"),a("code",[e._v("./main.css")]),e._v("这个文件先采用 "),a("code",[e._v("css-loader")]),e._v("在采用 "),a("code",[e._v("style-loader")]),e._v("转换。")]),e._v(" "),a("h2",{attrs:{id:"loader-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-类型"}},[e._v("#")]),e._v(" Loader 类型")]),e._v(" "),a("h3",{attrs:{id:"同步-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步-loader"}},[e._v("#")]),e._v(" 同步 Loader")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = function(source) {\n  const result = someSyncOperation(source); // 同步逻辑\n  return result;\n}\n")])])]),a("p",[a("code",[e._v("Loader")]),e._v("都是同步的，通过 "),a("code",[e._v("return")]),e._v("或者"),a("code",[e._v("this.callback")]),e._v(" 来同步地返回"),a("code",[e._v("source")]),e._v("转换后的结果。")]),e._v(" "),a("h3",{attrs:{id:"异步loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步loader"}},[e._v("#")]),e._v(" 异步Loader")]),e._v(" "),a("p",[e._v("有的时候，我们需要在 Loader 里做一些异步的事情，比如说需要发送网络请求。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = function(source) {\n  // 告诉 webpack 这次转换是异步的\n  const callback = this.async();\n  // 异步逻辑\n  someAsyncOperation(content, function(err, result) {\n    if (err) return callback(err);\n    // 通过 callback 来返回异步处理的结果\n    callback(null, result, map, meta);\n  });\n};\n")])])]),a("h3",{attrs:{id:"pitching-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pitching-loader"}},[e._v("#")]),e._v(" Pitching Loader")]),e._v(" "),a("p",[a("code",[e._v("Pitching Loader")]),e._v("是一个比较重要的概念，之前在 "),a("code",[e._v("style-loader")]),e._v(" 里有提到过。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  test: /\\.js$/,\n  use: [\n    { loader: 'aa-loader' },\n    { loader: 'bb-loader' },\n    { loader: 'cc-loader' },\n  ]\n}\n")])])]),a("p",[e._v("Loader 总是从右到左被调用。上面配置的 Loader，就会按照以下顺序执行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//  cc-loader -> bb-loader -> aa-loader\n")])])]),a("p",[e._v("每个"),a("code",[e._v("Loader")]),e._v(" 都支持一个 "),a("code",[e._v("pitch")]),e._v("属性，通过"),a("code",[e._v("module.exports.pitch")]),e._v(" 声明。如果该 "),a("code",[e._v("Loader")]),e._v("声明了"),a("code",[e._v("pitch")]),e._v("，则该方法会优先于"),a("code",[e._v("Loader")]),e._v(" 的实际方法先执行。==先从左向右执行一次每个 Loader 的 pitch 方法==，再按照从右向左的顺序执行其实际方法。")]),e._v(" "),a("h3",{attrs:{id:"raw-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-loader"}},[e._v("#")]),e._v(" Raw Loader")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export const raw = true;\n")])])]),a("p",[e._v("默认情况下，webpack 会把文件进行 UTF-8 编码，然后传给 Loader。==通过设置 raw，Loader 就可以接受到原始的 Buffer 数据==。")]),e._v(" "),a("h2",{attrs:{id:"vue-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader"}},[e._v("#")]),e._v(" vue-loader")]),e._v(" "),a("p",[e._v("「vue-loader」 是一个 webpack 的 loader，它允许你以一种名为单文件组件的格式撰写 Vue 组件。")]),e._v(" "),a("h3",{attrs:{id:"安装与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用"}},[e._v("#")]),e._v(" 安装与使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" Vue 框架运行需要的库\nnpm i -S vue\n# 构建所需的依赖\nnpm i -D vue-loader css-loader vue-template-compiler\n")])])]),a("p",[e._v("在这些依赖中，它们的作用分别是：")]),e._v(" "),a("ul",[a("li",[e._v("vue-loader：==解析和转换 .vue 文件==，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版。 template，==再分别把它们交给对应的 Loader 去处理==。")]),e._v(" "),a("li",[e._v("css-loader：加载由 vue-loader 提取出的 CSS 代码。")]),e._v(" "),a("li",[e._v("vue-template-compiler：把 vue-loader 提取出的 HTML 模版编译成对应的可执行的 JavaScript 代码，这和 React 中的 JSX 语法被编译成 JavaScript 代码类似。预先编译好 HTML 模版相对于在浏览器中再去编译 HTML 模版的好处在于性能更好。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\nconst VueLoaderPlugin = require('vue-loader/lib/plugin')\n\nmodule.exports = {\n  mode: 'development',\n  module: {\n    rules: [\n      {\n        test: /\\.vue$/,\n        loader: 'vue-loader'\n      },\n      // 它会应用到普通的 `.js` 文件\n      // 以及 `.vue` 文件中的 `<script>` 块\n      {\n        test: /\\.js$/,\n        loader: 'babel-loader'\n      },\n      // 它会应用到普通的 `.css` 文件\n      // 以及 `.vue` 文件中的 `<style>` 块\n      {\n        test: /\\.css$/,\n        use: [\n          'vue-style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  },\n  plugins: [\n    // 请确保引入这个插件来施展魔法\n    new VueLoaderPlugin()\n  ]\n}\n\n")])])]),a("p",[e._v("一个标准的 Vue 组件可以分为三部分：")]),e._v(" "),a("p",[e._v("1、template: 模板\n2、script: 脚本\n3、stype: 样式")]),e._v(" "),a("p",[e._v("Vue 组件里的"),a("code",[e._v("<template>")]),e._v("部分解析到"),a("code",[e._v("<body>")]),e._v(" 下，css 部分解析成 "),a("code",[e._v("<style>")]),e._v("标签，"),a("code",[e._v("<script>")]),e._v(" 部分则解析到 js 文件里。")]),e._v(" "),a("h3",{attrs:{id:"源码解析之整体分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码解析之整体分析"}},[e._v("#")]),e._v(" 源码解析之整体分析")]),e._v(" "),a("p",[e._v("入口看起，从上往下看：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = function (source) {}\n//vue-loader 接收一个 source 字符串，值是 vue 文件的内容。\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const stringifyRequest = r => loaderUtils.stringifyRequest(loaderContext, r)\n//loaderUtils.stringifyRequest 作用是将绝对路径转换成相对路径。\n")])])]),a("p",[e._v("接下来有一大串的声明语句，我们暂且先不看，我们先看最简单的情况。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const { parse } = require('@vue/component-compiler-utils') //导入parse方法\n\nconst descriptor = parse({\n  source,\n  compiler: options.compiler || loadTemplateCompiler(loaderContext),\n  filename,\n  sourceRoot,\n  needMap: sourceMap\n})\n")])])]),a("p",[e._v("parse 方法是来自于 component-compiler-utils，代码简略一下是这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// component-compiler-utils parse\nfunction parse(options) {\n  const { source, filename = '', compiler, compilerParseOptions = { pad: 'line' }, sourceRoot = '', needMap = true } = options;\n  // ...\n  output = compiler.parseComponent(source, compilerParseOptions);\n  // ...\n  return output;\n}\n")])])]),a("p",[e._v("这里还不是真正 parse 的地方，实际上是调用了 compiler.parseComponent 方法，默认情况下 compiler 指的是 vue-template-compiler。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// vue-template-compiler parseComponent\nfunction parseComponent (\n  content,\n  options\n) {\n  var sfc = {\n    template: null,\n    script: null,\n    styles: [],\n    customBlocks: [],\n    errors: []\n  };\n  // ...\n  function start() {}\n  function end() {}\n  parseHTML(content, {\n    warn: warn,\n    start: start,\n    end: end,\n    outputSourceRange: options.outputSourceRange\n  });\n  return sfc;\n}\n")])])]),a("p",[e._v("parseComponent 应该是调用了 parseHTML 方法，并且传入了两个方法：start 和 end，最终返回 sfc。")]),e._v(" "),a("p",[e._v("我们可以猜测 start 和 end 这两个方法应该是会根据不同的规则去修改 sfc，我们看一下 sfc 即 vue-loader 中 descriptor 是怎么样的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// vue-loader descriptor\n{\n  customBlocks: [],\n  errors: [],\n  template: {\n    attrs: {},\n    content: "\\n<div id="app">\\n  <div class="title">{{msg}}</div>\\n</div>\\n",\n    type: "template"\n  },\n  script: {\n    attrs: {},\n    content: "... export default {} ...",\n    type: "script"\n  },\n  style: [{\n    attrs: {\n      lang: "scss"\n    },\n    content: "... #app {} ...",\n    type: "style",\n    lang: "scss"\n  }],\n}\n')])])]),a("h3",{attrs:{id:"vue-loader-如何处理不同-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader-如何处理不同-type"}},[e._v("#")]),e._v(" vue-loader 如何处理不同 type")]),e._v(" "),a("p",[e._v("最终作用是针对不同的 type 分别构造一个 import 字符串：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("templateImport = \"import { render, staticRenderFns } from './App.vue?vue&type=template&id=7ba5bd90&'\";\n\nscriptImport = \"import script from './App.vue?vue&type=script&lang=js&'\n                export * from './App.vue?vue&type=script&lang=js&'\";\n\nstylesCode = \"import style0 from './App.vue?vue&type=style&index=0&lang=scss&'\";\n")])])]),a("p",[e._v("这三个 import 语句有什么用呢， vue-loader 是这样做的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let code = `\n${templateImport}\n${scriptImport}\n${stylesCode}`.trim() + `\\n`\ncode += `\\nexport default component.exports`\nreturn code\n")])])]),a("p",[e._v("此时， code 是这样的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("code = \"\nimport { render, staticRenderFns } from './App.vue?vue&type=template&id=7ba5bd90&'\nimport script from './App.vue?vue&type=script&lang=js&'\nexport * from './App.vue?vue&type=script&lang=js&'\nimport style0 from './App.vue?vue&type=style&index=0&lang=scss&'\n\n// 省略 ...\nexport default component.exports\"\n")])])]),a("p",[e._v("code 里有三次的 import，import 的文件都是 App.vue，相当于又加载了一次触发这次 vue-loader 的那个 vue 文件。不同的是，==这次加载是「带参」的，分别对应着 template / script / style 三种 type 的处理。==")]),e._v(" "),a("p",[e._v("总结：\nwebpack 在加载 vue 文件时，会==调用 vue-loader 来处理 vue 文件，之后 return 一段可执行的 js== 代码，其中会根据不同 type 分别 import 一次当前 vue 文件，并且==将参数传递进去，这里的多次 import 也会被 vue-loader 拦截，然后在 vue-loader 内部根据不同参数进行处理==（比如调用 style-loader）。")]),e._v(" "),a("h2",{attrs:{id:"style-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-loader"}},[e._v("#")]),e._v(" style-loader")]),e._v(" "),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),a("p",[e._v("style-loader 的功能就一个，在 DOM 里插入一个 "),a("code",[e._v("<style>")]),e._v("标签，并且将 CSS 写入这个标签内。")]),e._v(" "),a("p",[e._v("简单来说是这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const style = document.createElement('style'); // 新建一个 style 标签\nstyle.type = 'text/css';\nstyle.appendChild(document.createTextNode(content)) // CSS 写入 style 标签\ndocument.head.appendChild(style); // style 标签插入 head 中\n")])])]),a("h3",{attrs:{id:"安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装与配置"}},[e._v("#")]),e._v(" 安装与配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nnpm install style-loader --save-dev\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.(css)$/,\n        use: [\n          {\n            loader: 'style-loader',\n             options: {\n                injectType: 'singletonStyleTag',//默认值是styleTag\n             },\n          },\n          { loader: 'css-loader' },\n        ],\n      },\n    ],\n  },\n};\n")])])]),a("h4",{attrs:{id:"singletonstyletag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#singletonstyletag"}},[e._v("#")]),e._v(" singletonStyleTag")]),e._v(" "),a("p",[e._v("==singletonStyleTag==，会按照引入顺序把两个样式文件的内容都被==放到同一个 "),a("code",[e._v("<style>")]),e._v("标签里==。")]),e._v(" "),a("h4",{attrs:{id:"linktag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linktag"}},[e._v("#")]),e._v(" linkTag")]),e._v(" "),a("p",[e._v("当 ==injectType 为 linkTag==，会通过 "),a("link",{attrs:{rel:"stylesheet",href:""}}),e._v(" 的形式将样式插入到 DOM 中，==此时 style-loader 接收到的数据应该是样式文件的地址==，所以搭配的 loader 应该是 ==file-loader== 而不是 css-loader。")]),e._v(" "),a("p",[e._v("值为"),a("code",[e._v("linkTag")]),e._v("打包前")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// js\nconst globalStyle = require('./assets/style/global.css');\nconst indexStyle = require('./assets/style/index.css');\n")])])]),a("p",[e._v("打包后")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<head>\n  <link rel="stylesheet" href="f2742027f8729dc63bfd46029a8d0d6a.css">\n  <link rel="stylesheet" href="34cd6c668a7a596c4bedad32a39832cf.css">\n</head>\n')])])]),a("h4",{attrs:{id:"lazystyletag-lazysingletonstyletag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazystyletag-lazysingletonstyletag"}},[e._v("#")]),e._v(" lazyStyleTag, lazySingletonStyleTag")]),e._v(" "),a("p",[e._v("这两种类型的 injectType 区别在于它们是延迟加载的：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 打包前的js\nconst globalStyle = require('./assets/style/global.css');\nconst indexStyle = require('./assets/style/index.css');\n")])])]),a("p",[e._v("==如果像上面一样导入了样式文件，样式是不会插入到 DOM 中的==，需要手动使用 globalStyle.use() 来延迟加载 global.css 这个样式文件。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   globalStyle.use();\n")])])]),a("h3",{attrs:{id:"源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[e._v("#")]),e._v(" 源码分析")]),e._v(" "),a("p",[e._v("style-loader 主要可以分为：")]),e._v(" "),a("ul",[a("li",[e._v("打包阶段")]),e._v(" "),a("li",[e._v("runtime 阶段")])]),e._v(" "),a("h4",{attrs:{id:"打包阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包阶段"}},[e._v("#")]),e._v(" 打包阶段")]),e._v(" "),a("p",[e._v("引入依赖部分")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//定义了一个 _interopRequireDefault 方法，传入的是一个 require()。\nvar _path = _interopRequireDefault(require("path"));\nvar _loaderUtils = _interopRequireDefault(require("loader-utils"));\nvar _schemaUtils = _interopRequireDefault(require("schema-utils"));\nvar _options = _interopRequireDefault(require("./options.json"));\n//如果引入的是 es6 模块，直接返回，如果是 commonjs 模块，则将引入的内容放在一个对象的 default 属性上，然后返回这个对象。\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = () => {};\nmodule.exports.pitch = function loader(request) {}\n")])])]),a("p",[e._v("style-loader 的导出方式和普通的 loader 不太一样，默认导出一个空方法，通过 pitch 导出的。\n默认的 loader 都是从右向左像管道一样执行，而 ==pitch 是从左到右执行的==。")]),e._v(" "),a("p",[e._v("这样做的原因：\nstyle-loader 的作用是将 CSS 代码插入到 DOM 中，如果按照顺序从 css-loader 接收到一个 js 字符串的话，就无法获取到真实的 CSS 样式了。所以==正确的做法是先执行 style-loader，在它里面去执行 css-loader ，拿到经过处理的 CSS 内容，再插入到 DOM 中==。")]),e._v(" "),a("p",[a("code",[e._v("loader")]),e._v("的内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 获取 webpack 配置里的 options\nconst options = _loaderUtils.default.getOptions(this) || {};\n// 校验 options\n(0, _schemaUtils.default)(_options.default, options, {\n  name: 'Style Loader',\n  baseDataPath: 'options'\n});\n\n// style 标签插入的位置，默认是 head\nconst insert = typeof options.insert === 'undefined' ? '\"head\"' : typeof options.insert === 'string' ? JSON.stringify(options.insert) : options.insert.toString();\n// 设置以哪种方式插入 DOM 中\n// 详情见这个：https://github.com/webpack-contrib/style-loader#injecttype\nconst injectType = options.injectType || 'styleTag';\n\n//根据不同的 injectType 会 return 不同的 js 代码，在 runtime 的时候执行。\nswitch (injectType) {\n  case 'linkTag': {}\n  case 'lazyStyleTag':\n  case 'lazySingletonStyleTag': {}\n  case 'styleTag':\n  case 'singletonStyleTag':\n  default: {}\n}\n")])])]),a("p",[e._v("根据不同的 injectType 会 return 不同的 js 代码，在 runtime 的时候执行。")]),e._v(" "),a("p",[e._v("看看默认情况：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("return `var content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});\n\nif (typeof content === 'string') {\n  content = [[module.id, content, '']];\n}\n\nvar options = ${JSON.stringify(options)}\n\noptions.insert = ${insert};\noptions.singleton = ${isSingleton};\n\nvar update = require(${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoStyleTag.js')}`)})(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n${hmrCode}`;\n")])])]),a("p",[e._v("_loaderUtils.default.stringifyRequest(this, "),a("code",[e._v("!!${request}")]),e._v(") 这个方法的作用是将绝对路径转换成相对路径。比如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import css from './asset/style/global.css';\n// 此时传递给 style-loader 的 request 会是\nrequest = '/test-loader/node_modules/css-loader/dist/cjs.js!/test-loader/assets/style/global.css';\n// 转换\n_loaderUtils.default.stringifyRequest(this, `!!${request}`);\n// result: \"!!../../node_modules/css-loader/dist/cjs.js!./global.css\"\n")])])]),a("p",[e._v("所以 content 的实际内容就是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var content = require("!!../../node_modules/css-loader/dist/cjs.js!./global.css");\n')])])]),a("p",[e._v("也就是在这里才去调用 css-loader 来处理样式文件。")]),e._v(" "),a("p",[e._v("!! 模块前面的两个感叹号的作用是禁用 loader 的配置的，如果不禁用的话会出现无限递归调用的情况。")]),e._v(" "),a("p",[e._v("同样的，update 的实际内容是：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('./../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n')])])]),a("p",[e._v("意思也就是调用 "),a("code",[e._v("injectStylesIntoStyleTage")]),e._v("模块来处理经过"),a("code",[e._v("css-loader")]),e._v(" 处理过的样式内容"),a("code",[e._v("content")]),e._v("。")]),e._v(" "),a("p",[e._v("上述代码都是 "),a("code",[e._v("style-loader")]),e._v(" 返回的，真正执行是在"),a("code",[e._v("runtime")]),e._v("阶段。")]),e._v(" "),a("p",[e._v("参考链接")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/axuebin/articles/issues/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端工程师都得掌握的 webpack Loader"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack loader 从上手到理解系列：vue-loader"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/alIKsKkGRU_yyjpeV8i0og",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack loader 从上手到理解系列：style-loader"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);