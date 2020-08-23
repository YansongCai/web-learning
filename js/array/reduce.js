// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

// const result = [
//     { subject: '物理', marks: 41 },
//     { subject: '化学', marks: 59 },
//     { subject: '高等数学', marks: 36 },
//     { subject: '应用数学', marks: 90 },
//     { subject: '英语', marks: 64 },
// ];
// const initialValue = { pass: [], fail: [] }
// const groupedResult = result.reduce((accumulator, current) => {
//     (current.marks >= 50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
//     return accumulator;
// }, initialValue);
// console.log(groupedResult);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.find(v => v === 1));
// console.log(arr.findIndex(v => v === 1));
// console.log(arr.some(v => v === 1));
// console.log(arr.includes(1));

// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const intersection = arr1.filter(function (val) {
//     return arr2.indexOf(val) > -1
// });
// console.log(intersection); // [5, 8, 9]

// const arr1 = [
//     { name: 'name1', id: 1 },
//     { name: 'name2', id: 2 },
//     { name: 'name3', id: 3 },
//     { name: 'name5', id: 5 },
// ];
// const arr2 = [
//     { name: 'name1', id: 1 },
//     { name: 'name2', id: 2 },
//     { name: 'name3', id: 3 },
//     { name: 'name4', id: 4 },
//     { name: 'name5', id: 5 },
// ];
// const result = arr2.filter(function (v) {
//     return arr1.some(n => JSON.stringify(n) === JSON.stringify(v))
// })
// console.log(result); // [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]

/*
    [ 
        { name: 'name1', id: 1 },
        { name: 'name2', id: 2 },
        { name: 'name3', id: 3 },
        { name: 'name5', id: 5 } 
    ]
*/

// const arr1 = [1, 2, 3, 4, 5, 8, 9]
// const arr2 = [5, 6, 7, 8, 9];
// const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
// console.log(result); // [ 1, 2, 3, 4, 5, 8, 9, 6, 7 ]

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const arr3 = arr1.concat(arr2);
// const result = [];
// const obj = [];
// result = arr3.reduce(function (prev, cur, index, arr) {
//     obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
//     return prev;
// }, []);
// console.log(result);
/*
    [ 
        { name: 'name1', id: 1 },
        { name: 'name2', id: 2 },
        { name: 'name3', id: 3 },
        { name: 'name4', id: 4 },
        { name: 'name5', id: 5 } 
    ]
*/

// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const diff = arr1.filter(item => !new Set(arr2).has(item));
// console.log(diff) // [ 1, 2, 3, 4 ]

// 对象数组
// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const result = arr1.filter(function (v) {
//     return arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
// });
// console.log(result); // [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]

// const arr1 = [1, 2, 3, 4, 5, 8, 9];
// const arr2 = [5, 6, 7, 8, 9];
// const difference = Array.from(new Set(arr1.concat(arr2).filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))));
// console.log(difference) //[ 1, 2, 3, 4, 6, 7 ]

// const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
// const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// const arr3 = arr1.concat(arr2);
// const result = arr3.filter(function (v) {
//     return arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v));
// });
// console.log(result); // [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

// Array.from(new Set([1, 2, 3, 3, 4, 4])); // [1,2,3,4]
// [...new Set([1, 2, 3, 3, 4, 4])]; // [1,2,3,4]

// const arr = [
//     { name: 'name1', id: 1 },
//     { name: 'name2', id: 2 },
//     { name: 'name3', id: 3 },
//     { name: 'name1', id: 1 },
//     { name: 'name4', id: 4 },
//     { name: 'name5', id: 5 },
// ];
// const obj = [];
// const result = arr.reduce(function (prev, cur, index, arr) {
//     obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
//     return prev;
// }, []);
// console.log(result);
/*
[ 
    { name: 'name1', id: 1 },
    { name: 'name2', id: 2 },
    { name: 'name3', id: 3 },
    { name: 'name4', id: 4 },
    { name: 'name5', id: 5 } 
]
*/

// [1, 2, 3, 4].sort((a, b) => a - b); // [1, 2,3,4] 升序
// [1, 2, 3, 4].sort((a, b) => b - a); // [4,3,2,1] 降序

// const arr1 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return a.age - b.age }); // 升序
// const arr2 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return -a.age + b.age }); // 降序
// console.log(arr1) // [ { name: 'Rom', age: 12 }, { name: 'Bob', age: 22 } ]
// console.log(arr2) // [{ name: 'Bob', age:22 }, { name: 'Rom', age: 12 }]



// Math.max(...[1, 2, 3, 4]); // 4 
// Math.max.apply(this, [1, 2, 3, 4]); // 4
// [1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
//     return Math.max(prev, cur);
// }, 0) // 4

// const arr = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }];
// const arr1 = Math.max.apply(Math, arr.map(item => {
//     return item.id
// }));
// const arr2 = arr.sort((a, b) => {
//     return b.id - a.id
// })[0].id;
// console.log(arr1); // 4
// console.log(arr2); // 4


// const sum = [{ age: 1 }, { age: 2 }].reduce(function (prev, cur) {
//     return prev + cur.age;
// }, 0);
// console.log(sum); // 3

// const arr1 = [1, 2, 3, 4].concat([5, 6]); // [1,2,3,4,5,6]
// const arr2 = [...[1, 2, 3, 4], ...[4, 5]]; // [1,2,3,4,5,6]
// const arrA = [1, 2]
// const arrB = [3, 4];
// const arr3 = Array.prototype.push.apply(arrA, arrB) // arrA值为[1,2,3,4]
// console.log(arr3, arrA); // 4 [ 1, 2, 3, 4 ]

// const arr4 = [{ age: 1 }].concat([{ age: 2 }]);
// const arr5 = [...[{ age: 1 }], ...[{ age: 2 }]];
// console.log(arr4); // [ { age: 1 }, { age: 2 } ]
// console.log(arr5); // [ { age: 1 }, { age: 2 } ]

// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].indexOf(4)); // -1 如果存在换回索引
// console.log([1, 2, 3].find((item) => item === 3)) // 3 如果数组中无值返回undefined
// console.log([1, 2, 3].findIndex((item) => item === 3)); // 2 如果数组中无值返回-1

// const flag = [{ age: 1 }, { age: 2 }].some(v => JSON.stringify(v) === JSON.stringify({ age: 2 }));
// console.log(flag); // true

// const arr = [{ age: 3 }, { age: 4 }, { age: 5 }];
// arr.every(item => {
//     return item.age > 2;
// }); // true

// const arr = [{ age: 3 }, { age: 4 }, { age: 5 }];
// arr.some(item => {
//     return item.age < 4;
// }); // true

// function sortNumber(a, b) {
//     return a - b;
// }
// const b = [1, 2, 3, 7, 5, 6];
// const a = ["1.5", "1.5", "1.40", "1.25", "1.1000", "1.1"];
// console.log(a.sort(sortNumber)); // [ 1, 2, 3, 5, 6, 7 ]
// console.log(b.sort(sortNumber)); // [ '1.1000', '1.1', '1.25', '1.40','1.5', '1.5' ]


// 假定字符串的每节数都在5位以下
// 去除数组空值||空格
if (!Array.prototype.trim) {
    Array.prototype.trim = function () {
        const arr = []; this.forEach(function (e) {
            if (e.match(/\S+/)) arr.push(e);
        });
        return arr;
    }
}

// 提取数字部分
function toNum(a) {
    const d = a.toString();
    const c = d.split(/\D/).trim();
    const num_place = ["", "0", "00", "000", "0000"]
    const r = num_place.reverse();
    for (let i = 0; i < c.length; i++) {
        const len = c[i].length;
        c[i] = r[len] + c[i];
    }
    const res = c.join('');
    return res;
}

// 提取字符
function toChar(a) {
    const d = a.toString();
    const c = d.split(/\.|\d/).join('');
    return c;
}

function sortVersions(a, b) {
    const _a1 = toNum(a);
    const _b1 = toNum(b);
    if (_a1 !== _b1) {
        return _a1 - _b1;
    } else {
        const _a2 = toChar(a).charCodeAt(0).toString(16);
        const _b2 = toChar(b).charCodeAt(0).toString(16);
        return _a2 - _b2;
    }
}

// let arr1 = ["10", "5", "40", "25", "1000", "1"];
// let arr2 = ["1.10", "1.5", "1.40", "1.25", "1.1000", "1.1"];
// let arr3 = ["1.10c", "1.10b", "1.10C", "1.25", "1.1000", "1.10A"];
// console.log(arr1.sort(sortVersions)); // [ '1', '5', '10', '25', '40', '1000' ]
// console.log(arr2.sort(sortVersions)); // [ '1.1', '1.5', '1.10', '1.25', '1.40', '1.1000' ]
// console.log(arr3.sort(sortVersions)); // [ '1.10A', '1.10C', '1.10b', '1.10c', '1.25', '1.1000' ]


function stringifyUrl(search = {}) {
    return Object.entries(search).reduce(
        (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
        Object.keys(search).length ? "?" : ""
    ).replace(/&$/, "");
}

console.log(stringifyUrl({ age: 27, name: "YZW" })); // "?age=27&name=YZW"

function parseUrlSearch(search) {
    if (typeof search !== 'string') {
        return {};
    }
    return search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
        const [key, val] = v.split("=");
        t[key] = decodeURIComponent(val);
        return t;
    }, {});
}

console.log(parseUrlSearch('?age=25&name=TYJ')); // { age: "25", name: "TYJ" }