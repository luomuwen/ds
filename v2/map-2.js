'use strict';

let startX = 0, startY = 2;

exports.getMap = (params) => {
    var arr = parseStr(params);
    return arr;
};


exports.getNextStartPoint = (map) => {
    if(startX >= column(map)){
        startY += 4;
        startX = 0;
        if(startY >= row(map)){
            return null;
        } else {
            if(map[startY][startX] == 0){
                return [startX++, startY];
            } else {
                startX ++;
                return this.getNextStartPoint(map);
            }
        }
    } else {
        if(map[startY][startX] == 0){
            return [startX++, startY];
        } else {
            startX++;
            return this.getNextStartPoint(map);
        }
    }
};

function parseStr(params){
    let strArr = params.split('&');
    let row = parseInt(strArr[1].split('=')[1]);
    let column = parseInt(strArr[2].split('=')[1]);
    let arrStr = strArr[3].split('=')[1];

    var arr = [];
    for(let i = 0; i < row; i++){
        arr[i] = [];
        for(let j = 0 ; j < column; j++){
            arr[i][j] = parseInt(arrStr.charAt(i*column + j));
        }
    }
    return arr;
}

function row(map){
    return map.length;
}

function column(map){
    return map[0].length;
}

