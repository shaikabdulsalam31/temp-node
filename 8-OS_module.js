const os=require('os')

// info about current user
const user=os.userInfo();
console.log(user)

// methode that return system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)


const Current={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}
console.log(Current)