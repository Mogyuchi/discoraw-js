const { Client, Intents } = require('discord.js')
const util = require('util')

const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((acc, p) => acc | p, 0) })

client.on('raw', packet => {
  console.log(util.inspect(packet, { depth: null, colors: true }))
})

client.login()
