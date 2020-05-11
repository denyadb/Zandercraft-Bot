module.exports = {
  meta: {
    help: 'Eat the snacks that I give you. Only use after using the +snacks command.',
    usage: '<name>',
    module: 'Fun',
    level: 0,
    timeout: 5
  },
  fn: function (msg, suffix) {
    msg.channel.createMessage('You just ate the snacks I gave you. I hope that they were yummy! :yum:')
  }
}
