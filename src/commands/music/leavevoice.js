const Command = require('../../classes/Command')

module.exports = new Command(async function (msg) {
  const client = require('../../components/client')
  const encoder = client.voiceConnectionManager.get(msg.channel.guild.id)
  if (!encoder) return this.safeSendMessage(msg.channel, "I'm currently not streaming in this server")
  encoder.destroy()
  client.voiceConnectionManager.delete(msg.channel.guild.id)
}, {
  aliases: ['leave-voice', 'stop'],
  prereqs: ['musicCommand'],
  disableDM: true
})
