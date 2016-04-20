/**
 *说明：
 *本算法是一个经典的回溯算法，什么是回溯我也讲不清楚，
 *简单的说，可以理解成求组合，
 *例如有元素［1,2,3,4］求其所有的组合
 *［1］［1,2］［1,3］［1,4］［1,2,3］［1,2,4］［1,3,4］［1,2,3］[1,2,3,4]
 * [2]［2,3］[2,4] [2,3,4]
 *［3］ [3,4]
 *［4］
*/
'use strict';


function getPowerSet(i, srcArr, resultArr){
    if(i > srcArr.length - 1){
        console.log(resultArr);
    } else {
        resultArr.push(srcArr[i]);
        getPowerSet(i+1, srcArr, resultArr);
        resultArr.pop();
        getPowerSet(i+1, srcArr, resultArr);
    }
}

let srcArr = [1,2,3,4];
let resultArr = [];
getPowerSet(0, srcArr, resultArr);
