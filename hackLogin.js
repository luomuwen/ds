/**
 * 模拟登陆
 * Created by luomw on 16/4/20.
 */

'use strict';


var http = require('http');
var qs = require('querystring');

//POST /auth/login HTTP/1.1
//Host: www.qlcoder.com
//User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0
//Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
// Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate
// DNT: 1
// Referer: http://www.qlcoder.com/auth/login
// Cookie: XSRF-TOKEN=eyJpdiI6IkhcL0Q1Vm1KRk5GR1l5Zjg1VUJIME1RPT0iLCJ2YWx1ZSI6ImJycE1nT0w0cmlHenQ0ZlJhejhlWGZnSHI3NVwvZm9JRzFDNXFUTzNkem5ubmRIVlJYbklGc1BJcFQyZ1E4Q1NRSVd2YzN4XC9jSldZczRMUHN0YU5YdlE9PSIsIm1hYyI6IjdkMTZkOTI0YzJmNjZkNGE1YjU3MDY1OWRmNzY3NGE0NmU4NjQxNWFjYTg1NjcxYmEzNGE0MWNjMjRhYTdlNDkifQ%3D%3D; laravel_session=eyJpdiI6IjBGVHowRUgwWWE4Wk9NOFpGZENFNmc9PSIsInZhbHVlIjoiSWkyS2t0OFQ0cXRra2l0VStnQmJ5M2tYTDN3aG4yZDIzQnhtR2R0UldGeTFcL0k1bEpyNTRwV2d2aXdhMjhDNkpjdkhpd244KzVjNHkxM2NBcEE4alZRPT0iLCJtYWMiOiJjOTM0ZTQ1OTBlMmVlOTljZTFkMjkzYTE0ZTE2MDY4MmY5MWMyYmYyNmM0ZTRlNDcxYjI3ZTViYWYxNzkxYzRiIn0%3D; è¿é¢çç­æ¡æ¯oreo=eyJpdiI6IlNCXC9FTVZFclhpZzQydUdaN29jUUdRPT0iLCJ2YWx1ZSI6Imd5K1JcL2g0ZFhhWU9OU25BUmhvY2lRPT0iLCJtYWMiOiJmMDU4OGZlZWIyMTI5ZTA3MDcxMjhjZGI3M2M1Y2VjOGMzMGRhMzhjNTg0ODU2ZmRkNzM0MzEzNWRmNTYzMzI4In0%3D; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1461165478; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1461167577; uuid=57179dc1352d3
// Connection: keep-alive

var postData = qs.stringify( {
    "_token": "rH7lKAVH4s7SI74FO74smayTQCfDCSTWRbznHKlS",
    "email": "root787@126.com",
    "password": "8517870",
    "login-submit": "登录"
} );

var options = {
    hostname: 'www.qlcoder.com',
    port: 80,
    path: '/auth/login',
    method: 'POST',
    headers: {
         'POST': '/auth/login HTTP/1.1',
         'Host': 'www.qlcoder.com',
     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0',
         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
'Accept-Encoding': 'gzip, deflate',
    'Referer': 'http://www.qlcoder.com/auth/login',
    'Cookie': 'XSRF-TOKEN=eyJpdiI6IkhcL0Q1Vm1KRk5GR1l5Zjg1VUJIME1RPT0iLCJ2YWx1ZSI6ImJycE1nT0w0cmlHenQ0ZlJhejhlWGZnSHI3NVwvZm9JRzFDNXFUTzNkem5ubmRIVlJYbklGc1BJcFQyZ1E4Q1NRSVd2YzN4XC9jSldZczRMUHN0YU5YdlE9PSIsIm1hYyI6IjdkMTZkOTI0YzJmNjZkNGE1YjU3MDY1OWRmNzY3NGE0NmU4NjQxNWFjYTg1NjcxYmEzNGE0MWNjMjRhYTdlNDkifQ%3D%3D; laravel_session=eyJpdiI6IjBGVHowRUgwWWE4Wk9NOFpGZENFNmc9PSIsInZhbHVlIjoiSWkyS2t0OFQ0cXRra2l0VStnQmJ5M2tYTDN3aG4yZDIzQnhtR2R0UldGeTFcL0k1bEpyNTRwV2d2aXdhMjhDNkpjdkhpd244KzVjNHkxM2NBcEE4alZRPT0iLCJtYWMiOiJjOTM0ZTQ1OTBlMmVlOTljZTFkMjkzYTE0ZTE2MDY4MmY5MWMyYmYyNmM0ZTRlNDcxYjI3ZTViYWYxNzkxYzRiIn0%3D; è¿é¢çç­æ¡æ¯oreo=eyJpdiI6IlNCXC9FTVZFclhpZzQydUdaN29jUUdRPT0iLCJ2YWx1ZSI6Imd5K1JcL2g0ZFhhWU9OU25BUmhvY2lRPT0iLCJtYWMiOiJmMDU4OGZlZWIyMTI5ZTA3MDcxMjhjZGI3M2M1Y2VjOGMzMGRhMzhjNTg0ODU2ZmRkNzM0MzEzNWRmNTYzMzI4In0%3D; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1461165478; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1461167577; uuid=57179dc1352d3',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
        console.log('No more data in response.')
    })
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();




