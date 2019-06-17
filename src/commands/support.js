module.exports = {
  meta: {
    help: 'Get a link to join the official support server for the Zandercraft Bot.',
    usage: '<name>',
    module: 'Support',
    level: 0,
    timeout: 5,
  },
  fn: function (msg, suffix) {
    msg.channel.createMessage('You can join the official support server for the Zandercraft Bot at https://discord.io/zandercraftbot')
  }
}