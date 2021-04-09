// vue3
// 核心基于proxy
// Vue.reactive

// 存放代理后的对象
const toProxy = new WeakMap()
// 存放代理前的对象
const toRow = new WeakMap()


function trigger() {
    console.log('触发视图更新')
}

function isObject(target) {
    return typeof target === 'object' && target !== null
}

function reactive(target) {
    if (!isObject(target)) return target

    let proxy = toProxy.get(target)
    // 代理表中已存在，返回这个结果
    if (proxy) return proxy

    //如果这个对象呗代理过，返回这个对象
    if (toRow.has(target)) return toRow.get(target)


    const handlers = {
        set(target, key, value, reciver) {
            // 私有属性，屏蔽更新
            if (target.hasOwnProperty(key)) {
                trigger()
            }
            return Reflect.set(target, key, value, reciver)
        },
        get(target, key, value, reciver) {
            const res = Reflect.get(target, key, value, reciver)
            if (isObject(target[key])) return reactive(res)
            return res
        },
        deleteProperty(target, key) {
            return Reflect.deleteProperty(target, key)
        }
    }
    let observed = new Proxy(target, handlers)
    toProxy.set(target, observed)
    toRow.set(target, observed)
    return observed
}

let obj = {
    name: '123',
    a: ['1', '2', '3']
}

// let arr = [1, 2, 3]

let p = reactive(obj)
p = reactive(p)
// p.a.push(4)
// console.log(p)
// console.log(obj)