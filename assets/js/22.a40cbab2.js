(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{443:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mac-node-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-node-安装"}},[a._v("#")]),a._v(" mac node 安装")]),a._v(" "),s("h2",{attrs:{id:"卸载-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载-node"}},[a._v("#")]),a._v(" 卸载 node")]),a._v(" "),s("h3",{attrs:{id:"从官网下载的pkg安装包安装的卸载-删除-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从官网下载的pkg安装包安装的卸载-删除-方法"}},[a._v("#")]),a._v(" 从官网下载的pkg安装包安装的卸载（删除）方法")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /usr/local/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("bin/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("node,npm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",lib/node_modules/npm,lib/node,share/man/*/node.*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"通过homebrew安装的卸载-删除-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过homebrew安装的卸载-删除-方法"}},[a._v("#")]),a._v(" 通过homebrew安装的卸载（删除）方法")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew uninstall "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n")])])]),s("h2",{attrs:{id:"安装新的nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装新的nodejs"}},[a._v("#")]),a._v(" 安装新的nodeJs")]),a._v(" "),s("blockquote",[s("p",[a._v("node.js V17+ 版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响。在node v17以前一些可以正常运行的的应用程序,但是在 V17 版本可能会抛出以上异常。所以我装的是 16.x 版本")])]),a._v(" "),s("h3",{attrs:{id:"下载安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装包"}},[a._v("#")]),a._v(" 下载安装包")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer"}},[a._v("从官网下载pkg格式的node安装包"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[a._v("#")]),a._v(" 配置环境变量")]),a._v(" "),s("h4",{attrs:{id:"创建全局目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建全局目录"}},[a._v("#")]),a._v(" 创建全局目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.node_global\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.node_cache\n")])])]),s("h4",{attrs:{id:"配置全局目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置全局目录"}},[a._v("#")]),a._v(" 配置全局目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" prefix "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~/.node_global'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" cache "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~/.node_cache'")]),a._v("\n")])])]),s("h4",{attrs:{id:"创建-node-环境文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-node-环境文件"}},[a._v("#")]),a._v(" 创建 node 环境文件")]),a._v(" "),s("ul",[s("li",[a._v("创建一个 .bash_profile 文件")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" ~/.bash_profile\n")])])]),s("ul",[s("li",[a._v("写入内容")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/usr/local/bin/\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=~")]),a._v("/.npm_global/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])])]),s("p",[a._v("执行文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bash_profile\n")])])]),s("h4",{attrs:{id:"创建-zshrc-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-zshrc-文件"}},[a._v("#")]),a._v(" 创建 .zshrc 文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" ~/.zshrc\n")])])]),s("p",[a._v("追加配置信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Nodejs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/usr/local/bin\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":~/.node_global/bin\n")])])]),s("p",[a._v("补充完配置项，记得执行环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.zshrc\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);