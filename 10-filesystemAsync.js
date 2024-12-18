const {readFile,writeFile}=require('fs');

readFile('./content/subfolder/First.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
const first=result;
console.log(first)
readFile('./content/subfolder/Second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
const second=result;
console.log(second)

writeFile(
    './content/subfolder/result-async.txt',
    `Here is the result ${first}, ${second}`,
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)
    }
)
})

})