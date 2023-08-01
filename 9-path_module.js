const path=require('path')

console.log(path.sep) //--> to get the way in which path is being separated


const filePath= path.join('/content','/subfolder','/test.txt')
console.log(filePath)

// basename--> to get basename of filepath
const base=path.basename(filePath)
console.log(base)

//  absolute path of given file
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

console.log(path.basename(absolute))