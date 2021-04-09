// 存放代理前的对象
const toRow = new WeakMap()

let obj = {}
toRow.set(obj, '1')

console.log(toRow.has(obj))