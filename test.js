/* 异步方法 事件驱动  非阻塞*/
var fs = require('fs');
fs.readFileSync('readme1.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
})

/* 同步方法 */
// var fs = require('fs');
// var data = fs.readFileSync('readme.txt','utf-8')
//     console.log(data);