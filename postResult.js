/**
 *
 * Created by luomw on 16/4/21.
 */

'use strict';

var child_process = require('child_process');

exports.postResult = (x, y, options) => {
    postResult(x,y,options);
};

function postResult(x, y, options) {
    child_process.exec("curl 'http://www.qlcoder.com/train/crcheck?x="+ x + "&y=" + y + "&path=" + options + "' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Connection: keep-alive' -H $'Cookie: laravel_session=eyJpdiI6ImZFMG40U1JtNWNuTkxrOEpjUWJpSFE9PSIsInZhbHVlIjoiZ1wvaTZiQ3hqd21KODljcHIyYXJTeWw3dW5qcklqSllXMW92NTJNSmVxZVJDaWZJdEhsSGF5UGJ5Um1aUzJhXC8zUVVYdnF1eFpjV0dEdUtEQ3AwOTRvZz09IiwibWFjIjoiYzQ1NjdkZDRiZWE4NmJlOTlkNTM3ZGU3NzZhMTlhMjQxYzc5MGQzNjk0ZWE2ZGQ5YTU5NmI5OTlmZTU4MzNmNCJ9; \xe8\xbf\x99\xe9\xa2\x98\xe7\x9a\x84\xe7\xad\x94\xe6\xa1\x88\xe6\x98\xaforeo=eyJpdiI6ImlMc1JCWlBaZVJNZXlkU2FTbU51Z3c9PSIsInZhbHVlIjoic0w4UEt1T2Z2djNZaEw5R25WUklPUT09IiwibWFjIjoiNTBkM2U1ZDY1YTUyYzA3NDE4NTAwYWUyNmRmZGE0OGFkMDBmMWEwZDQ5N2U1YjUxODZlODYzN2Y3NjRkNGRiYSJ9; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1461165478; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1461200358; uuid=57179dc1352d3; XSRF-TOKEN=eyJpdiI6ImZXT3c3RGczZllkYkNiZ2NwMGZQWlE9PSIsInZhbHVlIjoiNWRkYnBlNWFGVFdRS1lyWW5vVVFRMENPREI2Y0xLdGhVUm9GdmZ0dWxDREZFbThXU29OZHVJQkpKUEpSY3Y1MFQ0WUtHMHFjMGJ5VE4xbkk5Z3F1Ymc9PSIsIm1hYyI6IjM5ZWI0N2EyZDBjZjAzZDU4ZjJjYWExNDVjZGMxZjEwNjA5NDY2MDI1OTllM2YyN2NhNzVkNWE4Y2UzMDhlM2EifQ%3D%3D' -H 'DNT: 1' -H 'Host: www.qlcoder.com' -H 'Referer: http://www.qlcoder.com/train/autocr' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'",

        (err, stdout, stderr) => {
            if (err) {
                console.log('get weather api error:' + stderr);
            } else {
                console.log(stdout);
            }
        }
    );
}