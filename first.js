const fs = require('fs')

fs.readFile('first.js','utf8',function(err,dataStr){
    console.log(err)
    console.log('-------')
    console.log(dataStr)
})
