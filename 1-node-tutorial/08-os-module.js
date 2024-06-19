const os = require('os')

// Few os methods

// 1. userInfo()
// 2. uptime()
// 3. type()
// 4. release()
// 5. totalmem()
// 6. freemem()

// info about current user
const user = os.userInfo()
// console.log(user)

// method to get system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
