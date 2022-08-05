const fs = require('fs')
fs.readFile('成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败'+err.message)
    }
    // console.log('读取成功'+dataStr)
    //1.先把成绩进行分割，按照空格进行
    const arrOld = dataStr.split(' ') 
    // console.log(arrOld)
    //2.循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=',':'))
    })
    
    //3.把数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)
})