const getData = (url) => new Promise(resolve => setTimeout(() => resolve("data: " + url), 1000));

async function testAsync() {
    const data1 = await getData()
    console.log('data1: ', data1);
    const data2 = await getData()
    console.log('data2: ', data2);
    return 'success'
}

// 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
// testAsync().then(res => console.log(res))

// function* testG() {
//     // await被编译成了yield
//     const data1 = yield getData()
//     console.log('data1: ', data1);
//     const data2 = yield getData()
//     console.log('data2: ', data2);
//     return 'success'
// }
// var gen = testG();
// // 第一次调用next 停留在第一个yield的位置 (const data1 = yield getData())
// // 此时 data1 的值还没有
// // 返回的promise里 包含了data1需要的数据
// const dataPromise1 = gen.next('dataPromise1');
// console.log(dataPromise1);
// // 第二次调用next，此时next的参数被赋值给 第一个 yield 的 data1
// const dataPromise2 = gen.next('dataPromise2');
// console.log(dataPromise2);


// function asyncToGenerator(generatorFn) {
//     var generator = generatorFn();
//     for (var item of generator) {
//         console.log(item);
//     }
//     return new Promise((resolve, reject) => {

//     });
// }

// function asyncToGenerator(generatorFunc) {
//     return function () {
//         const gen = generatorFunc.apply(this, arguments)
//         return new Promise((resolve, reject) => {
//             function step(key, arg) {
//                 let generatorResult
//                 try {
//                     generatorResult = gen[key](arg)
//                 } catch (error) {
//                     return reject(error)
//                 }
//                 const { value, done } = generatorResult
//                 if (done) {
//                     return resolve(value)
//                 } else {
//                     return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
//                 }
//             }
//             step("next")
//         })
//     }
// }

// var testAsyncToGenerator = asyncToGenerator(
//     function* testG() {
//         // await被编译成了yield
//         const data = yield getData()
//         console.log('data: ', data);
//         const data2 = yield getData()
//         console.log('data2: ', data2);
//         return 'success'
//     }
// )

// testAsyncToGenerator().then(res => console.log(res))


// function* testGenerator() {
//     try {
//         const r1 = yield getData('url-1');
//         console.log('r1:', r1);
//         const r2 = yield getData('url-2');
//         console.log('r2:', r2);
//         const r3 = yield 'yield 3';
//         console.log('r3:', r3);
//         return r3
//     } catch (err) {
//         handle(err);
//     }
// }

// const generator = testGenerator();
// const r1G = generator.next('r1G');
// console.log(r1G);
// !r1G.done ? r1G.value.then((res) => {
//     console.log('r1G.value.then', res);
// }) : console.log('r1G.value', r1G.value);

// const r2G = generator.next('r2G');
// console.log(r2G);
// !r2G.done ? r2G.value.then((res) => {
//     console.log('r2G.value.then', res);
// }) : console.log('r2G.value', r2G.value);

// const r3G = generator.next('r3G');
// console.log(r3G);
// !r3G.done ? r3G.value.then && r3G.value.then((res) => {
//     console.log('r3G.value.then', res);
// }) : console.log('r3G.value', r3G.value);

// const r4G = generator.next('r4G');
// console.log(r4G);
// !r4G.done ? r4G.value.then((res) => {
//     console.log('r1G.value.then', res);
// }) : console.log('r4G.value', r4G.value);

// { value: Promise { <pending> }, done: false }
// r1: r2G
// { value: Promise { <pending> }, done: false }
// r2: r3G
// { value: 'yield 3', done: false }
// r3: r4G
// { value: 'r4G', done: true }
// r4G.value r4G
// r1G.value.then data: url-1
// r2G.value.then data: url-2

// 优化
// function* testGenerator() {
//     try {
//         const r1 = yield getData('url-1');
//         console.log('r1:', r1);
//         const r2 = yield getData('url-2');
//         console.log('r2:', r2);
//         const r3 = yield 'yield 3';
//         console.log('r3:', r3);
//         return r3
//     } catch (err) {
//         console.log('err', err);
//     }
// }

// const generator = testGenerator();

// // { value: Promise { <pending> }, done: false }
// function step(status, arg) {
//     let generatorResult = null;
//     try {
//         generatorResult = generator[status](arg);
//     } catch (error) {
//         console.log(error);
//         return;
//     }
//     const { value, done } = generatorResult;
//     if (done) {
//         return value;
//     }
//     // value不一定都是promise，使用Promise.resolve强制转成promise
//     Promise.resolve(value).then(res => {
//         step('next', res);
//     }, err => {
//         step('throw', err);
//     });
// }

// step('next', 1);

// r1: data: url-1
// r2: data: url-2
// r3: yield 3



// 再次优化
function* testGenerator() {
    try {
        const r1 = yield getData('url-1');
        console.log('r1:', r1);
        const r2 = yield getData('url-2');
        console.log('r2:', r2);
        const r3 = yield 'yield 3';
        console.log('r3:', r3);
        return r3
    } catch (err) {
        console.log('err', err);
    }
}

function asyncToGenerator(generatorFunc) {
    return function () {
        // 调用generator函数 生成迭代器
        const gen = generatorFunc.apply(this, arguments)
        // 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
        return new Promise((resolve, reject) => {
            // 内部定义一个step函数 用来依次执行对应的yield
            // key有next和throw两种取值，分别对应了gen的next和throw方法
            // arg参数则是用来把promise resolve出来的值交给下一个yield
            function step(key, arg) {
                let generatorResult = null;
                // 这个方法需要包裹在try catch中
                // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
                try {
                    generatorResult = gen[key](arg)
                } catch (error) {
                    return reject(error)
                }
                // gen.next() 得到的结果是一个 { value, done } 的结构
                const { value, done } = generatorResult
                if (done) {
                    // 如果已经完成了 就直接resolve这个promise
                    // 这个done是在最后一次调用next后才会为true
                    // 这个value也就是generator函数最后的返回值
                    return resolve(value)
                }
                // 除了最后结束的时候外，每次调用gen.next()
                // 其实是返回 { value: Promise, done: false } 的结构，
                // 这里要注意的是Promise.resolve可以接受一个promise为参数
                // 并且这个promise参数被resolve的时候，这个then才会被调用
                // 其中value不一定都是promise，使用Promise.resolve强制转成promise
                return Promise.resolve(value).then(res => {
                    // value这个promise被resolve的时候，就会执行next
                    // 并且只要done不是true的时候 就会递归的往下解开promise
                    step('next', res);
                }, err => {
                    // 如果promise被reject了 就再次进入step函数
                    // 不同的是，这次的try catch中调用的是gen.throw(err)
                    // 那么自然就被catch到 然后把promise给reject掉啦
                    step('throw', err);
                });
            }
            step("next")
        });
    }
}

const test = asyncToGenerator(testGenerator);

test().then(res => {
    console.log('testGenerator res', res);
});

// r1: data: url-1
// r2: data: url-2
// r3: yield 3
// testGenerator res yield 3


function asyncToGenerator(generatorFunc) {
    // 返回的是一个新的函数
    return function () {

        // 先调用generator函数 生成迭代器
        // 对应 var gen = testG()
        const gen = generatorFunc.apply(this, arguments)

        // 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
        // var test = asyncToGenerator(testG)
        // test().then(res => console.log(res))
        return new Promise((resolve, reject) => {

            // 内部定义一个step函数 用来一步一步的跨过yield的阻碍
            // key有next和throw两种取值，分别对应了gen的next和throw方法
            // arg参数则是用来把promise resolve出来的值交给下一个yield
            function step(key, arg) {
                let generatorResult = null;

                // 这个方法需要包裹在try catch中
                // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
                try {
                    generatorResult = gen[key](arg)
                } catch (error) {
                    return reject(error)
                }

                // gen.next() 得到的结果是一个 { value, done } 的结构
                const { value, done } = generatorResult

                if (done) {
                    // 如果已经完成了 就直接resolve这个promise
                    // 这个done是在最后一次调用next后才会为true
                    // 以本文的例子来说 此时的结果是 { done: true, value: 'success' }
                    // 这个value也就是generator函数最后的返回值
                    return resolve(value)
                } else {
                    // 除了最后结束的时候外，每次调用gen.next()
                    // 其实是返回 { value: Promise, done: false } 的结构，
                    // 这里要注意的是Promise.resolve可以接受一个promise为参数
                    // 并且这个promise参数被resolve的时候，这个then才会被调用
                    return Promise.resolve(
                        // 这个value对应的是yield后面的promise
                        value
                    ).then(
                        // value这个promise被resolve的时候，就会执行next
                        // 并且只要done不是true的时候 就会递归的往下解开promise
                        // 对应gen.next().value.then(value => {
                        //    gen.next(value).value.then(value2 => {
                        //       gen.next() 
                        //
                        //      // 此时done为true了 整个promise被resolve了 
                        //      // 最外部的test().then(res => console.log(res))的then就开始执行了
                        //    })
                        // })
                        function onResolve(val) {
                            step("next", val)
                        },
                        // 如果promise被reject了 就再次进入step函数
                        // 不同的是，这次的try catch中调用的是gen.throw(err)
                        // 那么自然就被catch到 然后把promise给reject掉啦
                        function onReject(err) {
                            step("throw", err)
                        },
                    )
                }
            }
            step("next")
        })
    }
}


