const os = require('os')

const user = os.userInfo()
console.log("🚀 ~ user:", user)

console.log("🚀 ~ os:", os.uptime())

const curentOs = {
    name: os.type(),
    release: os.release(),
    totoalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log("🚀 ~ curentOs:", curentOs)

