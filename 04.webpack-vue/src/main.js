// 入口文件
console.log('ok')
// 如何在 webpack 构建的项目中，使用 Vue 进行开发

// 复习 在普通网页中如何使用 vue:
// 1. 使用 script 标签，引入 vue 的包
// 2. 在 index 页面中，创建一个 id 为 app div 容器
// 3. 通过 new Vue 得到一个 vm 的实例

// 在 webpack 中尝试使用 Vue:
// 注意： 在 webpack 中，使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue'       // 这是第二种方式：在 webpack.config.js 配置文件中，修改 vue 被导入时候的包的路径也能解决   但是 现在不修改配置文件的包的路径，就要用这个不全的包，通过新创建一个叫做 login.vue 文件的方式来解决
// import Vue from '../node_modules/vue/dist/vue.js'       // 这是第一种方式：这个包是最全的 vue 包     现在不用这样全的以前的方式去定义和引入就用上面那种不全的也不修改包路径的
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【mian属性指定了这个包在被加载时候，的入口文件】

// // 之前学过的方式定义组件，现在不用这样的了，就要用 不全的 vue 去定义一个出来，所以就创建了一个 login.vue 文件
// var login = {
//     template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }


// 新方式
// 1. 导入 login 组件
import login from './login.vue'     // 1
// 默认，webpack 无法打包 .vue 文件，需要安装 相关的 loader
// cnpm i vue-loader vue-template-compiler -D
// 在配置文件中，新增 loader配置项 { test: /\.vue$/, use: 'vue-loader' }

var vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    },
    methods: {

    },
    // components: {    // 之前学过的方式定义组件，现在不用这样的了，就要用 不全的 vue 去定义一个出来，所以就创建了一个 login.vue 文件
    //     login
    // }


    // render: function (createElements) {     // 1    // 在 webpack 中，如果想要通过 vue，把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
    //     return createElements(login)
    // }

    // render: (createElements) => { 
    //     return createElements(login)
    // }

    // render: c => { return c(login) }

    render: c => c(login)
})



// 总结梳理： webpack 中如何使用 vue;
// 1. 安装 vue 的包： cnpm i vue -S
// 2. 由于 在 webpack 中，推荐使用， .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader     cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，导入 vue 模块 import Vue from 'vue'
// 4. 定义个 .vue 结尾的组件，其中，组件的三部分组成： template script style
// 5. 使用 import 导入这个组件   import login from './login.vue'
// 6. 需要在webpack.config.js 的配置文件里面定义组件 {test:/\.vue/,use:'vue-loader'}
// 7. 还需要在 webpack.config.js 配置文件里面引包   const VueLoaderPlugin = require('vue-loader'); plugins:[ new VueLoaderPlugin() ]
// 8. 创建 vm 的实例 var = new Vue({ el: "#app", render: c => c(login) })
// 9. 在页面中创建一个 id 为 app 的div元素，作为我们 vm 实例要控制的区域；






import m1,{ title, content } from './test.js'
alert(m1)
alert(title)
alert(content)

