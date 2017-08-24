/**
 *
 * Created by luomw on 16/4/21.
 */


var getLevelStr = require('./../getLevelStr.js');
var checkCheck = require('./checkCheck2.js');
var memwatch    = require('memwatch-next');

function exec(index) {
    getLevelStr.getLevelStr((str) => {
        console.log(str);
        checkCheck.sweep(str, index);
    });
}

memwatch.on('leak', function(info) {
    console.log('leak:', info);
});

memwatch.on('stats', function(stats) {
    console.log('stats:', stats);
});


exec(process.argv[2]);