const {readFileSync,writeFileSync}=require('fs');
console.log('start')
// reads the data from the file
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
console.log(first,second)

// Checks if there is already file exists , if not creates one and overwrites it with entered value
writeFileSync('./content/result.txt',`Here is the result : ${first} , ${second}`,{flag:'a'})

const result=readFileSync('./content/result.txt','utf-8')
console.log(result)
console.log('done with th task')
console.log('starting with the new one')
