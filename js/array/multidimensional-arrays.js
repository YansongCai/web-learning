/*
给定一个包含m*n个元素的矩阵(m行,n列) ，请按照顺时针螺旋顺序，返回矩阵中的所有元素。
示例1:
输入:
[1，2，3],
[4,5，6],
[7,8，9]
输出: [1,2,3,6,9,8,7,4,5]

示例2:
输入:
[1，2，3，4],
[5， 6, 7，8],
[9, 10,11,12]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const arr = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
]

const arr1 = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [25, 26, 27, 28, 29, 30, 31, 32, 33, 10],
    [24, 43, 44, 45, 46, 47, 48, 49, 34, 11],
    [23, 42, 41, 40, 39, 38, 37, 36, 35, 12],
    [22, 21, 20, 19, 18, 17, 16, 15, 14, 13]
]

const arr2 = [
    [0, 1, 2, 3, 4],
    [25, 26, 27, 28, 5],
    [24, 43, 44, 29, 6],
    [23, 42, 45, 30, 7],
    [22, 41, 46, 31, 8],
    [21, 40, 47, 32, 9],
    [20, 39, 48, 33, 10],
    [19, 38, 49, 34, 11],
    [18, 37, 36, 35, 12],
    [17, 16, 15, 14, 13],
]

function recursive(arr, res) {
    if (arr.length < 2) {
        // 当数组只剩1个时结束
        return [...res, ...arr[0]]
    } else {
        // 处理第一行
        res = [...res, ...arr[0]];
        // 删除第一行
        arr.shift();
        // 获取最后一列
        arr.forEach(item => {
            // 每次处理完删除最后一个项
            res.push(item.pop());
        });
        // 判断最后一行是否存在，不存在结束
        if (!arr[arr.length - 1].length) {
            return res
        }
        // 最后一行存在，则倒序后直接加入结果。
        res = [...res, ...arr[arr.length - 1].reverse()];
        // 删除最后一行
        arr.pop();
        // 处理第一列
        if (arr.length) {
            for (var i = arr.length - 1; i >= 0; i--) {
                res.push(arr[i].shift())
            }
            // 如果还存在数据，则继续递归处理内部的圈
            if (arr[0].length) {
                return recursive(arr, res)
            } else {
                return res
            }
        } else {
            return res
        }
    }
}

function test2(arr) {
    const res = [];
    if (!arr.length) {
        return arr;
    }

    // 处理的范围
    var startRaw = 0;
    var endRaw = arr.length - 1;
    var startCol = 0;
    var endCol = arr[0].length - 1;

    // 当前处理的位置
    var raw = 0;
    var col = 0;

    // 每次处理一圈的数据，当startRaw > endRaw || startCol > endCol 的时候结束
    while (startRaw <= endRaw && startCol <= endCol) {
        // 处理第一行 raw === startRaw && col === startCol
        if (startRaw <= endRaw && startCol <= endCol && raw === startRaw && col === startCol) {
            while (col <= endCol && arr[raw]) {
                res.push(arr[raw][col]);
                col++;
            }
            startRaw++;
            raw = startRaw;
            col = endCol;
        }

        // 处理最后一列 raw === startRaw && col === endCol
        if (startRaw <= endRaw && startCol <= endCol && raw === startRaw && col === endCol) {
            while (raw <= endRaw && arr[raw]) {
                res.push(arr[raw][endCol]);
                raw++;
            }
            endCol--;
            col = endCol;
            raw = endRaw
        }

        // 处理最后一行 raw === endRaw && col === endCol
        if (startRaw <= endRaw && startCol <= endCol && raw === endRaw && col === endCol) {
            while (col >= startCol && arr[raw]) {
                res.push(arr[raw][col]);
                col--;
            }
            endRaw--;
            raw = endRaw;
            col = startCol;
        }

        // 处理第一列 raw === endRaw && col === startCol
        if (startRaw <= endRaw && startCol <= endCol && raw === endRaw && col === startCol) {
            while (raw >= startRaw && arr[raw]) {
                res.push(arr[raw][col]);
                raw--;
            }
            startCol++;
            raw = startRaw;
            col = startCol;
        }
    }

    return res;
}


var recursiveStr = JSON.stringify(recursive(JSON.parse(JSON.stringify(arr)), []));
var recursiveStr1 = JSON.stringify(recursive(JSON.parse(JSON.stringify(arr1)), []));
var recursiveStr2 = JSON.stringify(recursive(JSON.parse(JSON.stringify(arr2)), []));

var test2Str = JSON.stringify(test2(JSON.parse(JSON.stringify(arr))));
var test2Str1 = JSON.stringify(test2(JSON.parse(JSON.stringify(arr1))));
var test2Str2 = JSON.stringify(test2(JSON.parse(JSON.stringify(arr2))));

console.log(recursiveStr == test2Str);
console.log(recursiveStr1 == test2Str1);
console.log(recursiveStr1 == test2Str2);