/**
 *
 * Created by luomw on 16/4/21.
 */


var getLevelStr = require('./getLevelStr.js');
var checkCheck = require('./checkCheck.js');

var memwatch    = require('memwatch-next');

getLevelStr.getLevelStr((str) => {
    console.log(str);
    checkCheck.sweep(str);
});

memwatch.on('leak', function(info) {
    console.log('leak:', info);
});

memwatch.on('stats', function(stats) {
    console.log('stats:', stats);
});