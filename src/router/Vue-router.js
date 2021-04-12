// import Vue from "vue";
let Vue

class VueRouter {
    constructor(options) {
        this.$options = options

        // 创建一个路由path和route的映射
        this.routeMap = {}

        // 将当前路径current需要响应式
        // 利用vue响应式原理
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }
    init() {
        this.bindEvents()

        //解析路由配置
        this.createRouteMap(this.$options)

        // 创建router-link和router-view
        this.initComponent()
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/'
    }

    createRouteMap(options) {
        options.routes.forEach(item => {
            this.routeMap[item.path] = item
        })
    }

    initComponent() {
        // 声明2个全局组件
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                // return h('a', {
                //     attrs: { href: '#' + this.to }
                // }, this.$slots.default)
                return <a href={this.to}>{this.$slots.default}</a>
            }
        })


        Vue.component('router-view', {
            render: (h) => {
                console.log(this.routeMap)
                console.log(this.app.current)
                const Comp = this.routeMap[this.app.current].component

                return h(Comp)
            }
        })
    }
}

// 把vueRouter 变为插件

VueRouter.install = function (_Vue) {
    Vue = _Vue

    // 混入任务
    Vue.mixin({
        beforeCreate() {
            // 外面组件初始化使用
            // 实现vue的扩展
            // this 指的是Vue组价实例
            // 根组件实现一次
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
                this.$options.router.init()
            }

        }
    })
}

export default VueRouter