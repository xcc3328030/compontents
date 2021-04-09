## webpack 常用的loader
样式： css-loader/style-loader/less-loader/sass-loader
文件:  file-loader/url-loader
编译： babel-loader/ts-loader
校验： eslint-loader

sass-loader转化sass为css文件，并且包一层module.exports成为一个js module。style-loader将创建一个style标签将css文件嵌入到html中。css-loader则处理其中的@import和url()

vue-loader、coffee-loader、babel-loader等可以将特定文件格式转成js模块、将其他语言转化为js语言和编译下一代js语言

file-loader、url-loader等可以处理资源，file-loader可以复制和放置资源位置，并可以指定文件名模板，用hash命名更好利用缓存。

url-loader可以将小于配置limit大小的文件转换成内敛Data Url的方式，减少请求