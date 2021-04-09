let obj = {}
let name

Object.defineProperty(obj, 'data', {
    get: function () {
        return name
    },
    set: function (val) {
        name = val
    }

})

obj.data = 'aaa'
//取值调用get
console.log(obj.data)

myVue.prototype._obverse = function (obj) { // obj = {number: 0}
    var value;
    for (let key in obj) {  //遍历obj对象
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            if (typeof value === 'object') {  //如果值是对象，则递归处理
                this._obverse(value);
            }
            Object.defineProperty(this.$data, key, {  //关键
                enumerable: true,
                configurable: true,
                get: function () {
                    console.log(`获取${value}`);
                    return value;
                },
                set: function (newVal) {
                    console.log(`更新${newVal}`);
                    if (value !== newVal) {
                        value = newVal;
                    }
                }
            })
        }
    }
}