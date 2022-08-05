const fs = require('fs')
fs.writeFile('03writeFile.txt','hellochen',function(err){
    if(err){
        return console.log('写入失败'+err.message)
    }
    console.log('写入成功')
})