//SCRIPT BY DELTA RYUXI VERSION 1.0.0

//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟𝐕𝟏༑ཀ͜͡🇮🇩"
global.dana = "6289517977390"
global.qris = "https://pomf2.lain.la/f/dlm3rw2l.jpg"


// GLOBAL SETTING
global.owner = "6289517977390"
global.namabot = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡𝐕𝟏"
global.nomorbot = "6289517977390"
global.nameCreator = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡𝐕𝟏🇮🇩💤"
global.linkyt = "ttps://whatsapp.com/channel/0029Vat2xYRKQuJEiBcYz91R"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/dlm3rw2l.jpg'
global.isLink = "ttps://whatsapp.com/channel/0029Vat2xYRKQuJEiBcYz91R"
global.packname = "𝐃𝐞𝐥𝐭𝐚𝐯𝟏🇮🇩"
global.author = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑𝐯𝟏ཀ͜͡🇮🇩"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})