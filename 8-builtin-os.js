const os=require('os')

//info about current user
const user=os.userInfo();
console.log(user)

//Uptime of the system in seconds
console.log(`$os.uptime()} seconds`)

//Info about currentOS
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
}
console.log(currentOS.totalmemory/1024*1024)