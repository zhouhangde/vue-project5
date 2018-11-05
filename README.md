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
  .babelrc  此文件为编译es6为es5的配置
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


  npm run build用于打包文件
  npm i cross-env --save-dev   在实际发布时，会对文件进行压缩，缓存，分离等等优化处理

  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  设置了环境变量，打包时，NODE_ENV是production即生产环境
  生产环境下打包会发现最终压缩体积更小

  <!-- 上述不为webpacke的写法
  用于生产环境还是正式环境打包，以下为webpack4的写法 -->
  "scripts": {
    "start": "webpack --mode production",
    "build": "webpack --mode development"
  },
  npm run start即生产环境
  npm run build为开发环境

  npm i element-ui --save-dev   引入elementui
  npm i babel-plugin-component --save-dev   引入vue所有已封装组件（包含分页等），可以只引入需要的组件
  http://element-cn.eleme.io/#/zh-CN/component/quickstart   elementui使用文档


  element引入后报错解决
  https://blog.csdn.net/weixin_41587194/article/details/80275281
   在webpack.config.js里配置如下
    {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
    }

   npm install vue-router --save-dev     -安装vue-router 
  
   npm install axios --save-dev   --安装跨域插件axios
   
   https://www.jb51.net/article/123485.htm    详解vue axios中文文档