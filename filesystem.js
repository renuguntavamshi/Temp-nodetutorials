const {readFileSync,writeFileSync, write}=require('fs')
const first=readFileSync('./content/subfolder/First.txt','utf-8')
const second=readFileSync('./content/subfolder/Second.txt','utf-8')
console.log(first,second)

writeFileSync(
    './content/subfolder/result.txt',`Here is the result: ${first}, ${second}`
)