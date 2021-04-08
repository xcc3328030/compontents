// 创建指定组件实例并挂在body上

import Vue from "vue";

export default function create(Component, props) {
    // 0. 先创建Vue实例
    const vm = new Vue({
        render(h) {
            return h(Component, { props })
        }
    }).$mount()
    // 1.vm创建组件实例
    // 2.通过$children获取该组件实例
    const comp = vm.$children[0]
    // 追加到body上
    document.body.appendChild(vm.$el)

    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}