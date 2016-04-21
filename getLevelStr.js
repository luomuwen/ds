/**
 *
 * Created by luomw on 16/4/21.
 */

'use strict';
var child_process = require('child_process');


exports.getLevelStr = (cb) => {
    getLevelHtml(cb);
};

function getLevelHtml(cb) {
    child_process.exec("curl 'http://www.qlcoder.com/train/autocr' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Connection: keep-alive' -H $'Cookie: laravel_session=eyJpdiI6InNTbmRBUCtzMFwvZ283Z21ZTUs4ZHZBPT0iLCJ2YWx1ZSI6IlFzVTVwQXNvdGVzVzBmdzJaYm9NY05oY0JwV29sWTcycFFRaWhPV3lVK1pYM3ROMzZkV3h5WHY1dm5NWU1ZYU5TbTdFSFBNQTBJWmxPb1wva1F6MWRyUT09IiwibWFjIjoiOTczNDY4Y2FhYjBhZGE0ZTkxNTBmOGE4YjBlZmUwYzY3NjE0YzhlZmVkN2E4MGFiMzEwZDE1YjYxNTRmOTVkMCJ9; \xe8\xbf\x99\xe9\xa2\x98\xe7\x9a\x84\xe7\xad\x94\xe6\xa1\x88\xe6\x98\xaforeo=eyJpdiI6ImlMc1JCWlBaZVJNZXlkU2FTbU51Z3c9PSIsInZhbHVlIjoic0w4UEt1T2Z2djNZaEw5R25WUklPUT09IiwibWFjIjoiNTBkM2U1ZDY1YTUyYzA3NDE4NTAwYWUyNmRmZGE0OGFkMDBmMWEwZDQ5N2U1YjUxODZlODYzN2Y3NjRkNGRiYSJ9; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1461165478; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1461200543; uuid=57179dc1352d3; XSRF-TOKEN=eyJpdiI6IjlKVldodzdTUlhxVVROek5WWExad2c9PSIsInZhbHVlIjoiQ1JrSGtOMFwvWmlVWTZCcmIzamxCQlR2cGJmaytkTk1FTjZsT2M0SG5VTGdsTCttWXc3TUFqTUZFS2U0MDloOEQ0QUlqdU8yYmRZSzBOXC9vVmVkQWRYdz09IiwibWFjIjoiOTIyZjQ4OTQyZTY5YWE5ODliYjdkOGMwNTExNzg5ZDQ2NzBjYjg2MjcxZTM2NGI1MzQ4MjUyZmYyOTFhNWE3OSJ9' -H 'DNT: 1' -H 'Host: www.qlcoder.com' -H 'Referer: http://www.qlcoder.com/task/759f' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'",
        (err, stdout, stderr) => {
            if (err) {
                console.log('get weather api error:' + stderr);
            } else {
                var html = stdout;
                var reg = /<\/nav>\s*(.*)<br>/;
                var result = html.match(reg);
                cb(result[1]);
            }
        }
    );
}



