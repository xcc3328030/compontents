// function showName() {
//     console.log('hello');
// }


// let timeID = setTimeout(showName, 1000);


// timeID = null

// 手写

let setTimeout = (fn, timeout, ...args) => {
    const start = +new Date()
    let timer, now
    const loop = () => {
        timer = window.requestAnimationFrame(loop)
        now = +new Date()
        if (now - start >= timeout) {
            fn.apply(this, args)
            window.cancelAnimationFrame(timer)
        }
    }

    window.requestAnimationFrame(loop)
}

function showName() {
    console.log('hello')
}

let timeID = setTimeout(showName, 1000);