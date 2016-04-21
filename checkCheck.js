/**
 * 扫地机器人的算法
 *
 */
'use strict';

var mapSite = require('./map.js');
var postResult = require('./postResult.js');

exports.sweep=sweep;


function sweep(paramStr){

    var gMap = mapSite.getMap(paramStr);
    let startPoint = mapSite.getNextStartPoint(gMap);
    while(startPoint != null){
        let x = startPoint[0];
        let y = startPoint[1];
        let ori = gMap[y][x];

        gMap[y][x] = 1;
        let steps = [];

        if(trail(gMap, startPoint, startPoint, steps, (x, y, options)=>{
                postResult.postResult(x, y, options);
            })){
            console.log('success');
            break;
        }

        gMap[y][x] = ori;
        startPoint = mapSite.getNextStartPoint(gMap);
    }
}

function trail(map, position, startPosition, steps, cb){
    //更新position的位置
    if(!canMove(map, position)){
        if(isSuccess(map)){
            cb(getX(startPosition), getY(startPosition), getOptions(steps));
            return true;
        }
        //console.log(startPosition, 'fail, try next');
        return false;
    } else {
        let isSuccessUp = false;
        let isSuccessDown = false;
        let isSuccessLeft = false;
        let isSuccessRight = false;

        if(canUp(map, position)){
            let result = up(map, position);
            steps.push('u');
            isSuccessUp = trail(map, result.newPosition, startPosition, steps, cb);
            cleanup(map, result.changePositionArr);
            steps.pop();
        }

        if(!isSuccessUp && canDown(map, position)){
            let result = down(map, position);
            steps.push('d');
            isSuccessDown = trail(map, result.newPosition, startPosition, steps, cb);
            cleanup(map, result.changePositionArr);
            steps.pop();
        }

        if(!isSuccessDown && canLeft(map, position)){
            let result = left(map, position);
            steps.push('l');
            isSuccessLeft = trail(map, result.newPosition, startPosition, steps, cb);
            cleanup(map, result.changePositionArr);
            steps.pop();
        }

        if(!isSuccessLeft && canRight(map, position)){
            let result = right(map, position);
            steps.push('r');
            isSuccessRight = trail(map, result.newPosition, startPosition, steps, cb);
            cleanup(map, result.changePositionArr);
            steps.pop();
        }
        return isSuccessUp || isSuccessDown || isSuccessLeft || isSuccessRight;
    }
}



function cleanup(map, changePositionArr){
    for(let i = 0; i < changePositionArr.length; i++){
        let x = changePositionArr[i][0];
        let y = changePositionArr[i][1];
        map[y][x] = 0;
    }
}

function up(map, position){
    let x = position[0];
    let y = position[1];

    let posX = x;
    let posY = y;

    let changePosArr = [];

    for(let i = y - 1; i >= 0 ; i--){
        if(map[i][x] == 1){
            break;
        } else{
            map[i][x] = 1;
            posY = i;
            changePosArr.push([posX, posY]);
        }
    }
    return { newPosition: [posX, posY], changePositionArr: changePosArr};
}

function left(map, position){
    let x = position[0];
    let y = position[1];

    let posX = x;
    let posY = y;

    let changePosArr = [];

    for(let i = x - 1 ; i >= 0; i--){
        if(map[y][i] == 1){
            break;
        } else{
            map[y][i] = 1;
            posX = i;
            changePosArr.push([posX, posY]);
        }
    }
    return { newPosition: [posX, posY], changePositionArr: changePosArr};
}

function right(map, position){
    let x = position[0];
    let y = position[1];

    let posX = x;
    let posY = y;

    let changePosArr = [];

    for(let i = x + 1 ; i < column(map); i++){
        if(map[y][i] == 1){
            break;
        } else{
            map[y][i] = 1;
            posX = i;
            changePosArr.push([posX, posY]);
        }
    }
    return { newPosition: [posX, posY], changePositionArr: changePosArr};
}

function down(map, position){
    let x = position[0];
    let y = position[1];

    let posX = x;
    let posY = y;

    let changePosArr = [];

    for(let i = y + 1 ; i < row(map); i++){
        if(map[i][x] == 1){
            break;
        } else{
            map[i][x] = 1;
            posY = i;
            changePosArr.push([posX, posY]);
        }
    }
    return { newPosition: [posX, posY], changePositionArr: changePosArr};
}

function canUp(map, position){
    let x = position[0];
    let y = position[1];

    if(y-1 < 0){
        return false;
    } else {
        if(map[y-1][x] == 1){
            return false;
        } else {
            return true;
        }
    }
}

function canDown(map, position){
    let x = position[0];
    let y = position[1];

    if(y + 1 > row(map) -1){
        return false;
    } else {
        if(map[y+1][x] == 1){
            return false;
        } else {
            return true;
        }
    }
}

function canLeft(map, position){
    let x = position[0];
    let y = position[1];

    if(x-1 < 0){
        return false;
    } else {
        if(map[y][x-1] == 1){
            return false;
        } else {
            return true;
        }
    }
}

function canRight(map, position){
    let x = position[0];
    let y = position[1];

    if(x+1 > column(map)-1 ){
        return false;
    } else {
        if(map[y][x+1] == 1){
            return false;
        } else {
            return true;
        }
    }
}

function isSuccess(map){
    for(let i = 0 ; i < row(map); i++){
        for(let j = 0; j < column(map); j++){
            let elem = map[i][j];
            if(elem == 0){
                return false;
            }
        }
    }
    return true;
}


function canMove(map, position){
    if(canUp(map, position)
    || canDown(map, position)
    || canLeft(map, position)
    || canRight(map, position)){
        return true;
    } else {
        return false;
    }
}

function row(map){
    return map.length;
}

function column(map){
    return map[0].length;
}

function printPosition(position){
    console.log('X:', position[1]+1);
    console.log('Y:', position[0]+1);
}

function getX(position){
    return position[1]+1;
}

function getY(position){
    return position[0]+1;
}

function getOptions(steps){
    var str = '';
    for(let i = 0 ; i < steps.length; i++) {
        str = str.concat(steps[i]);
    }
    return str;
}

