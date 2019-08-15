// 这个 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')


// 使用 import 语法，导入 css 样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意： webpack, 默认只能打包处理 js 类型的文件，无法处理 其他的非 js 类型的文件；
// 如果要处理 非 js 类型的文件，我们需要手动安装一些 合适 第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D     // 这连个第三方的 loader
// 2. 打开 webpack.config.js 这个配置文件，在里面，新增一个 配置节点，叫做 module,它是一个对象，在 这个 module 对象身上，有一个 rules 属性，这个 rules 属性是个 数组；
//      这个数组中，存放了，所有第三方文件的 匹配和 处理规则；
// 注意： webpack 处理第三方文件类型的过程：
//     1. 发现这个 要处理的文件不是 JS 文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
//     2. 如果能找到对应的规则，就会调用 对应的 loader 处理 这种文件类型；
//     3. 在调用 loader 的时候，是从后往前调用的；
//     4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到 bundle.js 中去


// 注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略 路径前面的 node_modules 这一层目录，直接写 包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认 就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'





$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})


// 这里是 webpack@3.6.0 的版本
// 经过刚才的演示，webpack 可以做什么事情？
// 1. webpack 能够处理 js 文件的互相依赖关系
// 2. webpack 能够处理 js 的兼容问题，把高级的、浏览器不识别的语法，转为 低级别的，浏览器能正常识别的语法

// 刚才运行的命令格式： webpack 要打包的文件的路径  打包好的输出文件的路径



// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个 工具的用法，和 webpack 命令的用法，完全一样
// 3. 由于，我们是在项目中，本地安装的 webpack-dev-server, 所以，无法把它当做 脚本命令，在 powershell 终端中直
//     接运行‘（只有那些 安装到 全局 -g 的工具，才能再 终端正常执行）
// 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5. 然后再去 package.json 这个文件中，"scripts": {} 里面加上 "dev": "webpack-dev-server"
// 6. 最后就可以 npm run dev 运行起来了
// 7. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 
//     电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js
// 8. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们
//     看不到它，但是，可以认为，和 dist src node_modules 平级，有一个看不见的文件，叫做 bundle.js 。  （为什么要这样做呢，一个字“快”，还有就是不消耗磁盘）
// 9. 解决懒症：在 package.json文件中的 scripts": {"dev": "webpack-dev-server"} 里面添加设置 依次分别为  --open：自动打开谷歌浏览器后面不跟 Chrome 就是打开默认的浏览器;    --port 3000：由 3000端口号打开浏览器地址;  --contentBase src： 以 src 作为根路径;    --hot:热冲载、热更新（不用刷新），而且每次不会把所有的代码重新生成，只生成有变动的代码（相当于补丁，节省空间）
//      "dev": "webpack-dev-server --open Chrome --port 3000 --contentBase src --hot"
// 10.当然，还有第二种方法来实现，比较麻烦（我在配置文件中也有介绍），但是别人用咱要懂：












// 打基础了，又学新东西

    // 之前的方式，不是没有实现真正的面向对象的方式
        // function Animal(name) {
        //     this.name = name
        // }
        // Animal.info = 123
        // var a1 = new Animal('小花')
        // // 这是静态属性：
        // console.log(Animal.info)
        // // 这是实例属性：
        // console.log(a1.name)

// class 关键字，是 ES6中提供的新语法，用来 实现 ES6 中面向对象编程的方式
class Person {
    // 使用 static 关键字，可以定义静态属性
    // 所谓的静态属性，就是 可以直接通过 类名，直接访问的属性
    // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
    static info = { name: 'zs', age: 20 }
}

// 访问 Person 类身上的 info 静态属性
console.log(Person.info)
// 在 webpack 中，默认只能处理 一部分 ES6 的新语法，一些更高级的 ES6语法或者 ES7 语法，webpack 是处理不了的；
//   这时候，就需要 借助于第三方的 loader，来帮助 webpack 处理这些高级的语法，当第三方 loader 把高级语法转为
//   低级的语法之后，会把结果交给 webpack 去打包到 bundle.js中    

// 通过 Babel , 可以帮我们将 高级的语法转换为 低级的语法
// 1. 在 webpack 中，可以运行如下两套 命令，安装两套包，去安装 Babel 相关的 loader 功能：
//   1.1 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//   1.2 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
//   2.1 { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
//   2.2 注意： 在配置 babel 的 loader 规则的时候，必须 把 node_modules 目录，通过 exclude 选项排除掉：原因有两： 
//      2.2.1 如果 不排除 node_modules,则Babel 会把 node_modules 中所有的 第三方 JS 文件，都打包编译，这样，会非常消耗 CPU ,同时，打包速度非常慢；
//      2.2.2 哪怕，最终，Babel 把 所有 node_modules 中的 JS 转换完毕了，但是，项目也无法正常运行！
// 3. 在项目的 根目录中，新建一个 叫做 .babelrc 的 Babel 配置文件，这个配置文件，属于 JSON格式，所以，在写 .babelrc 配置的时候，必须符合 JSON语法规范：不能写注释，字符串必须用双引号
//   3.1 在 .babelrc 写如下的配置：  大家可以把 preset 翻译成 【语法】的意思
//      {
//          "presets": ["env", "stage-0"],
//          "plugins": ["transform-runtime"]
//       }   
// 4. 了解： 目前，我们安装的 babel-preset-env, 是比较新的 ES 语法，之前，我们安装的是 babel-preset-es2015,现在，出了一个更新的 语法插件，叫做babel-preset-env，它包含了 所有的 和 es***相关的语法


// Java c# 实现面向对象的方式完全一样了，  class 是从后端语言中借鉴过来的，来实现面向对象
// var p1 = new Person()