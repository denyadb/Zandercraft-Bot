module.exports = {
  meta: {
    help: 'Eat your poop. Why? Just Why? Only do after using the +poop command.',
    usage: '<name>',
    module: 'Fun',
    level: 0,
    timeout: 5
  },
  fn: function (msg, suffix) {
    msg.channel.createMessage('You just ate your poop! :poop: What the heck is wrong wth you?!')
  }
}
