var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "main": "./src/app.js"
  },
  output: {
    path: "/atom/muke_webpack/test4/dist",
    filename: "js/[name].bundle.js"
  },
  /**
   * 访问babel官网：babeljs.io
   * loaders：值是一个数组【每一个数组都是一个规则】
   * loader：【需要安装"babel-core","babel-loader"】
   */
  module: {
    loaders: [
      /**
      处理js文件
      test：匹配js文件
      exclude:表示不处理哪些文件【必须是绝对路径】
      include:表示需要处理的范围【必须是绝对路径】
      loader：处理的方法【babel-loader方法参考官方文档,需要安装babel-preset-latest依赖】
      注意1：babel-loader需要再根目录配置.balelrc文件；或者在package里添加
        "babel":{"presets":["latest"]}；再或者在loader: "babel-loader"后面添加
        query:{"presets":["latest"]}
      注意2：babel-loader的转换是非常耗时的，所以处理起来非常慢【所以需要改善】。
      */
      {
        test: /\.js$/,
        exclude: "/atom/muke_webpack/test4/node_modules/",
        include: "/atom/muke_webpack/test4/src/",
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      "filename": "index.html",
      "template": "index.html",
      "inject": "body",
    })
  ]
}
