module.exports = {
  meta: {
    help: 'You just pooped... Bruh.',
    usage: '<name>',
    module: 'Fun',
    level: 0,
    timeout: 5,
  },
  fn: function (msg, suffix) {
    msg.channel.createMessage('Ewwwwwww... You just pooped :poop:... Bruh.')
  }
}