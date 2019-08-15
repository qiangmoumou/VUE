<template>
    <div>

        <h1>这是 APP 组件</h1>


        <!-- 为什么这里叫做 mt-button 的button 直接就能有 -->
        <mt-button type="danger" @click="show">default</mt-button>

        <mt-button type="danger" icon="back">default</mt-button>

        <mt-button type="danger" size="large" plain>default</mt-button>

        <mt-button type="danger" size="small" disabled>default</mt-button>


        <!-- 这是按需导入给 Button 自己起的别名，但是上面那会用 按导入所有的 Mint-UI 组件 的方式的按钮会失效，因为他们创建的按钮用的是默认的 官方的 Button 名字 ，
        所以这里 弄成 按需导入组件 的方式，自己起的名字，就不能识别上面的了，所以为了统一，把名字都用成官方默认的 Button.name   也就是 mt-button-->
        <mt-button type="primary">123</mt-button>






        <!-- 用 MUI 和 bootstrap 的原理和用法一样 -->
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>


        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        
        <router-view></router-view>
        

    </div>
</template>

<script>

    // 按需导入 Toast 组件
    import { Toast } from "mint-ui"

    export default {
        data() {
            return {
                toastInstanse: null
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {     
                // 模拟获取列表的 一个 AJAX 方法
                // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
                this.show()
                setTimeout(() =>  {
                    // 当 3 秒过后，数据获取回来了，要把 Toast 移除
                    this.toastInstanse.close()
                },3000)
            },
            show() {
                // Toast("提示信息")      // 没有参数设置的
                this.toastInstanse = Toast({       // 执行 Toast 会有一个返回值
                    message: '提示信息',     // 提示内容
                    position: 'bottom',     // 位置
                    duration: -1,     // 设置 时间 参数     如果是 -1 则弹出之后不消失
                    className: 'mytoast',     // 自定义 Toast 的样式，需要自己提供一个类名
                    iconClass: 'glyphicon glyphicon-heart'      // 设置 图标的类(用的是 bootstrap 的图标 )
                })
            }
        }
    }
</script>

<style>

</style>