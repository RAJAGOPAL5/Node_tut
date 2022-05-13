const os = require('os')
const user = os.userInfo()
console.log(user);
console.log(`The System uptime is ${os.uptime()} in seconds`);
const currentOs = {
    name:os.type(),
    Release:os.release(),
    TotalMemory:os.totalmem(),
    FreeMemory:os.freemem(),
}
console.log(currentOs);