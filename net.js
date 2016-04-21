/**
 * Created by luomw on 16/3/24.
 */

"use strict";

var https = require('https');
var http  = require('http');
var util  = require('util');

exports.get=get;

function get(options, cb){
    var protocol = http;
    if (typeof options === 'string') {
        if(options.startsWith("https")){
            protocol = https;
        }
    } else {
        if(options.reqProtocol === 'https'){
            protocol = https;
        }
    }
    protocol.get(options, (res) => {
        res.setEncoding("utf8");
        var html = '';
        res.on('data', (chunk) => {
            html += chunk;
        });
        res.on('end', () => {
            cb(null, html);
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
        cb(e, null);
    });
}
