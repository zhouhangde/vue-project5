# vue-project5
我的vue项目-前后台分离
web

<!-- 参考从零开始搭建一个简单的基于webpack的vue开发环境 -->
https://segmentfault.com/a/1190000012789253

步骤：
1node环境6以上，
  我的node为10.13.0,npm为6.4.1

2git克隆项目vue-project5
 git地址：(https://github.com/zhouhangde/vue-project5) 
 Git安装及管理及提交到Github,
 http://blog.csdn.net/u011781521/article/details/53609556 

3命令，安装webpack等
  npm i webpack -g
  npm i webpack-cli -g
  npm init -y     
  npm i vue --save
  npm i webpack webpack-dev-server --save-dev
  npm run dev
  npm run build

  应用商店安装easy sass编译scss
  npm i node-sass css-loader vue-style-loader sass-loader --save-dev
  npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev
  npm i babel-polyfill --save-dev
  npm i babel-loader@7 --save-dev(单独安的-否则报错)
  npm i file-loader --save-dev     把图片也当成模块引入
  npm i vue-loader vue-template-compiler --save-dev    使用单文件组件

  <!-- Vue加载单文件使用vue-loader报错 -->
  解决https://blog.csdn.net/MessageBox_/article/details/81434193
  // 在webpack.config.js中添加如下
  const VueLoaderPlugin = require('vue-loader/lib/plugin')

  module.exports = {
    // ...
    plugins: [
      new VueLoaderPlugin()
    ]
  }